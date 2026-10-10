#!/usr/bin/env node
// nation.mjs — validator, index generator and graph builder for the Open Nation blueprint.
//
// Implements the checks specified in GOVERNANCE.md §5.2:
//   1. every law file has exactly one parseable `law-meta` fenced block;
//   2. the block validates against schema/law-meta.schema.json;
//   3. ids are unique and correspond to filenames;
//   4. metadata articles and body `### <ID> — <Title>` headings match in both directions;
//   5. evidence pointers use the six permitted prefixes;
//   6. status "ratified" has zero `pending:` evidence and a non-null expiry;
//   7. relative markdown links resolve to existing files;
//   8. the law register in Constitution.md matches the files present.
//
// Usage:
//   node tools/nation.mjs validate [--json] [--quiet]
//   node tools/nation.mjs index
//   node tools/nation.mjs graph [--out docs/law-graph.md]

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const EVIDENCE_PREFIXES = ['vote:', 'data:', 'study:', 'audit:', 'model:', 'pending:'];
const PILLARS = ['direction', 'engine', 'commons', 'floor', 'governance'];

// ---------------------------------------------------------------- utilities

class Ledger {
  constructor() {
    this.errors = [];
    this.warnings = [];
  }
  error(file, line, code, message) {
    this.errors.push({ file, line: line ?? null, code, message });
  }
  warn(file, line, code, message) {
    this.warnings.push({ file, line: line ?? null, code, message });
  }
}

function readText(path) {
  return readFileSync(path, 'utf8').replace(/\r\n/g, '\n');
}

function rel(path) {
  return relative(ROOT, path).replace(/\\/g, '/');
}

// Extract the single `law-meta` fenced block. Returns { json, startLine, endLine }
// or { error, startLine } when the block cannot be parsed.
function extractMeta(text) {
  const lines = text.split('\n');
  let startLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^```\s*law-meta\s*$/.test(lines[i])) {
      if (startLine !== -1) {
        return { error: 'duplicate law-meta block', startLine: i + 1 };
      }
      startLine = i + 1; // 1-based
    }
  }
  if (startLine === -1) return { error: 'no law-meta block', startLine: null };

  const body = [];
  for (let i = startLine; i < lines.length; i++) {
    if (/^```\s*$/.test(lines[i])) {
      const raw = body.join('\n');
      try {
        return { json: JSON.parse(raw), startLine, endLine: i + 1 };
      } catch (e) {
        return { error: `law-meta block is not valid JSON: ${e.message}`, startLine };
      }
    }
    body.push(lines[i]);
  }
  return { error: 'law-meta block is not closed before end of file', startLine };
}

// Body headings of the form `### <ID> — <Title>` (em dash) or `### <ID> - <Title>`.
// Kept for external reuse; the validator inlines its own stricter scan.
function articleHeadings(text) {
  return text
    .split('\n')
    .map((line, i) => ({ line, n: i + 1 }))
    .filter(({ line }) => /^### /.test(line))
    .map(({ line, n }) => {
      const m = /^### ([A-Z]{1,4}\d+)\s+[—-]\s+(.+?)\s*$/.exec(line);
      return m ? { id: m[1], title: m[2], line: n } : null;
    })
    .filter(Boolean);
}

// The H1 title, text after '# '.
function h1Title(text) {
  const m = /^# (.+?)\s*$/m.exec(text);
  return m ? m[1] : null;
}

// ------------------------------------------------------- mini JSON-Schema

function validateSchema(instance, schema, path, errs) {
  if (schema.oneOf) {
    const ok = schema.oneOf.some((s) => {
      const sub = [];
      validateSchema(instance, s, path, sub);
      return sub.length === 0;
    });
    if (!ok) errs.push(`${path}: does not match any oneOf alternative`);
    return;
  }
  if (schema.anyOf) {
    const ok = schema.anyOf.some((s) => {
      const sub = [];
      validateSchema(instance, s, path, sub);
      return sub.length === 0;
    });
    if (!ok) errs.push(`${path}: does not match any anyOf alternative`);
    return;
  }
  if (schema.type) {
    const types = Array.isArray(schema.type) ? schema.type : [schema.type];
    const actual = instance === null ? 'null' : Array.isArray(instance) ? 'array' : typeof instance;
    const ok = types.some((t) =>
      t === 'integer' ? Number.isInteger(instance) : actual === t
    );
    if (!ok) {
      errs.push(`${path}: expected ${types.join('|')}, got ${actual}`);
      return;
    }
  }
  if (schema.enum && !schema.enum.includes(instance)) {
    errs.push(`${path}: value not in enum (${schema.enum.join(', ')})`);
  }
  if (schema.const !== undefined && instance !== schema.const) {
    errs.push(`${path}: expected const ${JSON.stringify(schema.const)}`);
  }
  if (typeof instance === 'string') {
    if (schema.pattern && !new RegExp(schema.pattern).test(instance)) {
      errs.push(`${path}: does not match pattern ${schema.pattern}`);
    }
    if (schema.minLength !== undefined && instance.length < schema.minLength) {
      errs.push(`${path}: shorter than minLength ${schema.minLength}`);
    }
    if (schema.maxLength !== undefined && instance.length > schema.maxLength) {
      errs.push(`${path}: longer than maxLength ${schema.maxLength}`);
    }
  }
  if (typeof instance === 'number') {
    if (schema.minimum !== undefined && instance < schema.minimum) {
      errs.push(`${path}: below minimum ${schema.minimum}`);
    }
    if (schema.maximum !== undefined && instance > schema.maximum) {
      errs.push(`${path}: above maximum ${schema.maximum}`);
    }
  }
  if (Array.isArray(instance)) {
    if (schema.minItems !== undefined && instance.length < schema.minItems) {
      errs.push(`${path}: fewer than minItems ${schema.minItems}`);
    }
    if (schema.uniqueItems) {
      const seen = new Set(instance.map((x) => JSON.stringify(x)));
      if (seen.size !== instance.length) errs.push(`${path}: items are not unique`);
    }
    if (schema.items) {
      instance.forEach((item, i) => validateSchema(item, schema.items, `${path}[${i}]`, errs));
    }
  }
  if (instance && typeof instance === 'object' && !Array.isArray(instance)) {
    for (const key of schema.required || []) {
      if (!(key in instance)) errs.push(`${path}: missing required field "${key}"`);
    }
    if (schema.additionalProperties === false) {
      const allowed = new Set(Object.keys(schema.properties || {}));
      for (const key of Object.keys(instance)) {
        if (!allowed.has(key)) errs.push(`${path}: unknown field "${key}" (additionalProperties false)`);
      }
    }
    for (const [key, sub] of Object.entries(schema.properties || {})) {
      if (key in instance) validateSchema(instance[key], sub, `${path}.${key}`, errs);
    }
  }
}

// ------------------------------------------------------------ file model

function expectedIdFor(path) {
  const base = relative(ROOT, path).replace(/\\/g, '/');
  if (base === 'Constitution.md') return 'law.constitution';
  const m = /^laws\/(.+)\.md$/.exec(base);
  if (!m) return null;
  // Foo_Bar_Law.md -> law.foo-bar ; the trailing _Law suffix is not part of the id.
  const stem = m[1].replace(/_Law$/, '');
  return 'law.' + stem.replace(/_/g, '-').toLowerCase();
}

function loadLaws(ledger) {
  const files = [join(ROOT, 'Constitution.md')];
  const lawsDir = join(ROOT, 'laws');
  if (existsSync(lawsDir)) {
    for (const f of readdirSync(lawsDir)) {
      if (f.endsWith('.md')) files.push(join(lawsDir, f));
    }
  } else {
    ledger.error('laws/', null, 'E001', 'laws/ directory does not exist');
  }
  files.sort();
  const laws = [];
  for (const file of files) {
    const path = rel(file);
    const text = readText(file);
    const meta = extractMeta(text);
    if (meta.error) {
      ledger.error(path, meta.startLine, 'E001', meta.error);
      continue;
    }
    laws.push({ file, path, text, meta: meta.json, metaLine: meta.startLine });
  }
  return laws;
}

// ------------------------------------------------------------- the checks

function checkLaw(law, ledger, schema) {
  const { path, meta, metaLine } = law;

  // Check 2 — schema
  const errs = [];
  validateSchema(meta, schema, 'law-meta', errs);
  for (const e of errs) ledger.error(path, metaLine, 'E002', e);
  // Structural damage is reported above. The guards below let every undamaged
  // part of a malformed file still be checked, instead of failing silently.

  // What later checks may safely assume
  const articlesOk = Array.isArray(meta.articles);
  const sunsetOk = !!meta.sunset && typeof meta.sunset === 'object';

  // Check 3 — id uniqueness and filename correspondence
  const expected = expectedIdFor(law.file);
  if (expected && typeof meta.id === 'string' && meta.id !== expected) {
    ledger.error(path, metaLine, 'E003', `id "${meta.id}" does not correspond to filename (expected "${expected}")`);
  }

  // Check 1 (already guaranteed by extraction) + title vs H1
  const h1 = h1Title(law.text);
  if (h1 !== null && typeof meta.title === 'string' && h1 !== meta.title) {
    ledger.warn(path, 1, 'W003', `metadata title "${meta.title}" differs from H1 "${h1}"`);
  }

  // Check 4 — article headings, both directions. Any level-3 heading in the body
  // must be in article form `### <ID> — <Title>` and must exist in the metadata.
  const heads = [];
  const lines = law.text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (!/^### /.test(lines[i])) continue;
    const m = /^### ([A-Z]{1,4}\d+)\s+[—-]\s+(.+?)\s*$/.exec(lines[i]);
    if (!m) {
      ledger.error(path, i + 1, 'E004', `level-3 heading is not in article form "### <ID> — <Title>": "${lines[i].slice(4).trim()}"`);
      continue;
    }
    heads.push({ id: m[1], title: m[2], line: i + 1 });
  }
  const headById = new Map(heads.map((h) => [h.id, h]));
  const metaIds = new Map((articlesOk ? meta.articles : []).map((a) => [a.id, a]));
  for (const a of (articlesOk ? meta.articles : [])) {
    const h = headById.get(a.id);
    if (!h) {
      ledger.error(path, metaLine, 'E004', `article ${a.id} appears in metadata but has no "### ${a.id} — <title>" heading in the body`);
    } else if (h.title !== a.title) {
      ledger.warn(path, h.line, 'W004', `article ${a.id} heading title "${h.title}" differs from metadata title "${a.title}"`);
    }
  }
  for (const h of heads) {
    if (!metaIds.has(h.id)) {
      ledger.error(path, h.line, 'E004', `body heading ${h.id} is not listed in the metadata articles`);
    }
  }

  // Check 5 — evidence prefixes + resolvability of literature pointers.
  // A data:/study:/model: pointer should carry a DOI, URL, code anchor or at
  // least a year, so a reader can find what it refers to. Reported as ONE
  // aggregated W008 warning per law (not one line per pointer) to keep the
  // validator output readable; the full list is always in --json.
  const RESOLVABLE = /(doi:|10\.\d{4,9}\/|https?:\/\/|\b(?:19|20)\d{2}\b|#|tools\/|docs\/)/;
  const unresolvable = [];
  for (const a of (articlesOk ? meta.articles : [])) {
    for (const ev of a.evidence ?? []) {
      if (!EVIDENCE_PREFIXES.some((p) => ev.startsWith(p))) {
        ledger.error(path, metaLine, 'E005', `article ${a.id} evidence pointer "${ev}" does not start with one of: ${EVIDENCE_PREFIXES.join(' ')}`);
      } else if (/^(data|study):/.test(ev) && !RESOLVABLE.test(ev)) {
        unresolvable.push(a.id);
      }
    }
  }
  for (const p of meta.parameters || []) {
    if (!EVIDENCE_PREFIXES.some((pre) => p.evidence.startsWith(pre))) {
      ledger.error(path, metaLine, 'E005', `parameter ${p.name} evidence pointer "${p.evidence}" does not start with one of: ${EVIDENCE_PREFIXES.join(' ')}`);
    } else if (/^(data|study):/.test(p.evidence) && !RESOLVABLE.test(p.evidence)) {
      unresolvable.push(`param:${p.name}`);
    }
    if (typeof p.value === 'number' && (!p.unit || p.unit.trim() === '')) {
      ledger.warn(path, metaLine, 'W005', `parameter ${p.name} has a numeric value but no unit`);
    }
  }
  if (unresolvable.length) {
    ledger.warn(path, metaLine, 'W008', `${unresolvable.length} data:/study: pointer(s) are not resolvable (no doi, URL or year): ${[...new Set(unresolvable)].join(', ')}`);
  }

  // Check 9 — the "## Parameters" table mirrors the metadata, both directions
  {
    const paramNames = (meta.parameters || []).map((p) => p.name);
    const tableNames = [];
    const ls = law.text.split('\n');
    const s = ls.findIndex((l) => /^## Parameters\s*$/.test(l));
    if (s !== -1) {
      let e = ls.length;
      for (let i = s + 1; i < ls.length; i++) if (/^## /.test(ls[i])) { e = i; break; }
      for (const l of ls.slice(s, e)) {
        const m = /^\|\s*`([A-Za-z][A-Za-z0-9_]*)`\s*\|/.exec(l);
        if (m) tableNames.push(m[1]);
      }
      for (const n of paramNames) {
        if (!tableNames.includes(n)) ledger.error(path, metaLine, 'E009', `parameter "${n}" is in the metadata but missing from the "## Parameters" table`);
      }
      for (const n of tableNames) {
        if (!paramNames.includes(n)) ledger.error(path, metaLine, 'E009', `parameter "${n}" is in the "## Parameters" table but not in the metadata`);
      }
    } else if (paramNames.length) {
      ledger.warn(path, metaLine, 'W009', 'law declares parameters but has no "## Parameters" section');
    }
  }

  // Check 6 — ratification gate
  if (meta.status === 'ratified') {
    const pendings = [];
    for (const a of (articlesOk ? meta.articles : [])) {
      for (const ev of a.evidence ?? []) if (ev.startsWith('pending:')) pendings.push(`${a.id}: ${ev}`);
    }
    for (const p of meta.parameters || []) {
      if (p.evidence.startsWith('pending:')) pendings.push(`param ${p.name}: ${p.evidence}`);
    }
    if (pendings.length) {
      ledger.error(path, metaLine, 'E006', `RATIFICATION GATE: status is "ratified" but ${pendings.length} evidence pointer(s) are pending: ${pendings.join(' | ')}`);
    }
    if (sunsetOk && meta.sunset.expires === null) {
      ledger.error(path, metaLine, 'E006', 'RATIFICATION GATE: status is "ratified" but sunset.expires is null');
    }
  }

  // Warnings — completeness
  if (!meta.open_questions || meta.open_questions.length === 0) {
    ledger.warn(path, metaLine, 'W001', 'open_questions is missing or empty');
  }
  if (!meta.dissent || meta.dissent.length === 0) {
    ledger.warn(path, metaLine, 'W002', 'dissent is empty — record the strongest objection to this law');
  }
  if (Array.isArray(meta.history) && meta.history.length) {
    const last = meta.history[meta.history.length - 1];
    if (last && last.version !== meta.version) {
      ledger.warn(path, metaLine, 'W006', `version ${meta.version} differs from last history entry ${last.version}`);
    }
  }
  if (sunsetOk && meta.sunset.review_every_years > 10) {
    ledger.warn(path, metaLine, 'W007', `sunset.review_every_years = ${meta.sunset.review_every_years} exceeds 10`);
  }
}

function stripFences(text) {
  return text
    .split('\n')
    .reduce((acc, line) => {
      if (/^```/.test(line)) acc.inFence = !acc.inFence;
      else if (!acc.inFence) acc.out.push(line);
      return acc;
    }, { inFence: false, out: [] })
    .out.join('\n');
}

// Check 7 — relative links resolve. Returns the set of files scanned so the
// summary can report an honest count.
function checkLinks(ledger) {
  const scanned = new Set();
  const dirs = [ROOT, join(ROOT, 'laws'), join(ROOT, 'docs'), join(ROOT, 'schema')];
  for (const dir of dirs) {
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir)) {
      if (!f.endsWith('.md')) continue;
      const file = join(dir, f);
      scanned.add(rel(file));
      const text = stripFences(readText(file));
      const lines = text.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const lineRe = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
        let mm;
        while ((mm = lineRe.exec(lines[i]))) {
          let target = mm[1].trim();
          if (/^(https?:|mailto:|#)/i.test(target)) continue;
          target = target.replace(/^<|>$/g, '').split('#')[0];
          if (target === '') continue;
          const resolved = resolve(dirname(file), target);
          if (!existsSync(resolved)) {
            ledger.error(rel(file), i + 1, 'E007', `link target does not exist: ${target}`);
          }
        }
      }
    }
  }
  return scanned;
}

// Check 8 — law register in Constitution.md matches reality
function checkRegister(laws, ledger) {
  const con = laws.find((l) => l.path === 'Constitution.md');
  if (!con) return;
  const lines = con.text.split('\n');
  const start = lines.findIndex((l) => /^## Law register/.test(l));
  if (start === -1) {
    ledger.error('Constitution.md', null, 'E008', 'no "## Law register" section found');
    return;
  }
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^## /.test(lines[i])) { end = i; break; }
  }
  const registered = new Set();
  for (let i = start; i < end; i++) {
    const m = /\]\((\.[^)]+\.md)\)/.exec(lines[i]);
    if (m) registered.add(rel(resolve(ROOT, m[1])));
  }
  const actual = new Set(laws.map((l) => l.path));
  for (const p of registered) {
    if (!actual.has(p)) ledger.error('Constitution.md', start + 1, 'E008', `law register lists ${p} but no such law file exists`);
  }
  for (const l of laws) {
    if (!registered.has(l.path)) {
      ledger.error('Constitution.md', start + 1, 'E008', `law file ${l.path} is not listed in the law register`);
    }
  }
}

// ------------------------------------------------------------------ index

// Deterministic content stamp: the newest history entry across all laws.
// Deliberately NOT the current date — generated files must be byte-stable, or
// CI's `git diff --exit-code` on regenerated artefacts fails on any later day.
function contentStamp(laws) {
  let stamp = null;
  for (const l of laws) {
    for (const h of l.meta.history || []) {
      if (typeof h.date === 'string' && (!stamp || h.date > stamp)) stamp = h.date;
    }
  }
  return stamp ?? 'unversioned';
}

function evidenceCounts(meta) {
  const counts = { vote: 0, data: 0, study: 0, audit: 0, model: 0, pending: 0 };
  for (const a of meta.articles) {
    for (const ev of a.evidence) {
      const p = ev.split(':')[0];
      if (p in counts) counts[p]++;
    }
  }
  return counts;
}

function buildIndex(laws) {
  const sorted = [...laws].sort((a, b) => a.meta.id.localeCompare(b.meta.id));
  const lines = [];
  lines.push('# Law Index');
  lines.push('');
  lines.push('> Generated by `node tools/nation.mjs index` — do not edit by hand.');
  lines.push(`> Content stamp: ${contentStamp(laws)} (newest law history entry) · Laws: ${sorted.length}`);
  lines.push('');
  lines.push('## All laws');
  lines.push('');
  lines.push('| Law | id | Status | Version | Pillars | Articles | Evidence debt | Review (yrs) | Expires |');
  lines.push('| --- | --- | --- | --- | --- | --- | --- | --- | --- |');
  for (const l of sorted) {
    const c = evidenceCounts(l.meta);
    const link = l.path === 'Constitution.md' ? '[Constitution.md](./Constitution.md)' : `[${l.path.replace('laws/', '')}](./${l.path})`;
    lines.push(`| ${link} | \`${l.meta.id}\` | ${l.meta.status} | ${l.meta.version} | ${l.meta.pillars.join(', ')} | ${l.meta.articles.length} | ${c.pending} pending | ${l.meta.sunset.review_every_years} | ${l.meta.sunset.expires ?? '—'} |`);
  }
  lines.push('');

  const pillarTotals = {};
  for (const l of sorted) {
    for (const p of l.meta.pillars) {
      pillarTotals[p] ??= { laws: 0, articles: 0, pending: 0 };
      pillarTotals[p].laws++;
      pillarTotals[p].articles += l.meta.articles.length;
      pillarTotals[p].pending += evidenceCounts(l.meta).pending;
    }
  }
  lines.push('## By pillar');
  lines.push('');
  lines.push('| Pillar | Laws | Articles | Pending evidence |');
  lines.push('| --- | --- | --- | --- |');
  for (const p of PILLARS) {
    const t = pillarTotals[p];
    if (t) lines.push(`| ${p} | ${t.laws} | ${t.articles} | ${t.pending} |`);
  }
  lines.push('');

  lines.push('## Evidence debt');
  lines.push('');
  lines.push('Every `pending:` pointer below blocks ratification of its article (GOVERNANCE.md §3).');
  lines.push('');
  let anyPending = false;
  for (const l of sorted) {
    const items = [];
    for (const a of l.meta.articles) {
      for (const ev of a.evidence) if (ev.startsWith('pending:')) items.push(`${a.id} — ${ev}`);
    }
    for (const p of l.meta.parameters || []) {
      if (p.evidence.startsWith('pending:')) items.push(`param ${p.name} — ${p.evidence}`);
    }
    if (items.length) {
      anyPending = true;
      lines.push(`### ${l.meta.id} (${l.path})`);
      lines.push('');
      for (const it of items) lines.push(`- ${it}`);
      lines.push('');
    }
  }
  if (!anyPending) lines.push('_None. Every evidence pointer is resolved._');

  lines.push('## Parameters');
  lines.push('');
  lines.push('| Law | Parameter | Value | Unit | Evidence |');
  lines.push('| --- | --- | --- | --- | --- |');
  for (const l of sorted) {
    for (const p of l.meta.parameters || []) {
      lines.push(`| \`${l.meta.id}\` | \`${p.name}\` | ${p.value} | ${p.unit} | \`${p.evidence}\` |`);
    }
  }
  lines.push('');

  lines.push('## Dissent register');
  lines.push('');
  for (const l of sorted) {
    if (!l.meta.dissent?.length) continue;
    lines.push(`### ${l.meta.id}`);
    lines.push('');
    for (const d of l.meta.dissent) lines.push(`- ${d}`);
    lines.push('');
  }

  lines.push('## Metrics');
  lines.push('');
  for (const l of sorted) {
    lines.push(`### ${l.meta.id}`);
    lines.push('');
    for (const m of l.meta.metrics) lines.push(`- ${m}`);
    lines.push('');
  }
  return lines.join('\n');
}

// ------------------------------------------------------------------ graph

function buildGraph(laws) {
  const sorted = [...laws].sort((a, b) => a.meta.id.localeCompare(b.meta.id));
  const nid = (id) => id.replace(/\./g, '_');
  const lines = [];
  lines.push('# Law graph');
  lines.push('');
  lines.push('> Generated by `node tools/nation.mjs graph` — do not edit by hand.');
  lines.push(`> Content stamp: ${contentStamp(laws)} (newest law history entry)`);
  lines.push('');
  lines.push('Solid edges point to the Constitution articles a law references; dashed edges are cross-references between laws.');
  lines.push('');
  lines.push('```mermaid');
  lines.push('flowchart LR');
  const byPillar = {};
  for (const l of sorted) {
    for (const p of l.meta.pillars) (byPillar[p] ??= []).push(l);
  }
  for (const p of PILLARS) {
    if (!byPillar[p]) continue;
    lines.push(`  subgraph ${p}["${p}"]`);
    for (const l of byPillar[p]) {
      lines.push(`    ${nid(l.meta.id)}["${l.meta.title}<br/>${l.meta.status} · ${l.meta.articles.length} articles"]`);
    }
    lines.push('  end');
  }
  for (const l of sorted) {
    if (l.meta.id === 'law.constitution') continue;
    if (/C\d+/.test(l.text)) lines.push(`  ${nid(l.meta.id)} --> law_constitution`);
  }
  for (const l of sorted) {
    const refs = [...l.text.matchAll(/\]\(\.\/([A-Za-z_]+_Law)\.md\)/g)].map((m) => m[1]);
    for (const r of refs) {
      lines.push(`  ${nid(l.meta.id)} -.-> ${nid('law.' + r.replace(/_/g, '-').toLowerCase())}`);
    }
  }
  lines.push('```');
  return lines.join('\n');
}

// ------------------------------------------------------------------- main

function usage() {
  console.log(`nation.mjs — validator and index generator for the Open Nation blueprint

Usage:
  node tools/nation.mjs validate [--json] [--quiet]
  node tools/nation.mjs index
  node tools/nation.mjs graph [--out <path>]

Checks are specified in GOVERNANCE.md §5.2. Exit code 1 on any validation error.`);
}

async function main() {
  const args = process.argv.slice(2);
  const cmd = args[0];

  if (!cmd || cmd === '--help' || cmd === '-h') {
    usage();
    return;
  }

  if (cmd === 'index') {
    const ledger = new Ledger();
    const laws = loadLaws(ledger);
    writeFileSync(join(ROOT, 'LAW_INDEX.md'), buildIndex(laws) + '\n');
    console.log(`Wrote LAW_INDEX.md (${laws.length} laws).`);
    return;
  }

  if (cmd === 'graph') {
    const outIdx = args.indexOf('--out');
    const out = outIdx !== -1 ? resolve(ROOT, args[outIdx + 1]) : join(ROOT, 'docs', 'law-graph.md');
    mkdirSync(dirname(out), { recursive: true });
    const ledger = new Ledger();
    const laws = loadLaws(ledger);
    writeFileSync(out, buildGraph(laws) + '\n');
    console.log(`Wrote ${rel(out)} (${laws.length} laws).`);
    return;
  }

  if (cmd === 'validate') {
    const json = args.includes('--json');
    const quiet = args.includes('--quiet');
    const ledger = new Ledger();
    const schema = JSON.parse(readText(join(ROOT, 'schema', 'law-meta.schema.json')));
    const laws = loadLaws(ledger);
    const ids = new Map();
    for (const law of laws) {
      checkLaw(law, ledger, schema);
      if (ids.has(law.meta.id)) {
        ledger.error(law.path, law.metaLine, 'E003', `duplicate id "${law.meta.id}" (also in ${ids.get(law.meta.id)})`);
      } else {
        ids.set(law.meta.id, law.path);
      }
    }
    const scanned = checkLinks(ledger);
    checkRegister(laws, ledger);
    const prefixTotals = { vote: 0, data: 0, study: 0, audit: 0, model: 0, pending: 0 };
    let articleTotal = 0;
    let paramTotal = 0;
    for (const l of laws) {
      const c = evidenceCounts(l.meta);
      for (const k of Object.keys(prefixTotals)) prefixTotals[k] += c[k];
      articleTotal += l.meta.articles.length;
      paramTotal += (l.meta.parameters || []).length;
    }

    if (json) {
      process.stdout.write(
        JSON.stringify(
          {
            summary: {
              filesChecked: scanned.size + 1, // markdown files + the JSON schema
              laws: laws.length,
              articles: articleTotal,
              parameters: paramTotal,
              evidence: prefixTotals,
              evidenceDebt: prefixTotals.pending,
              errors: ledger.errors.length,
              warnings: ledger.warnings.length,
              ok: ledger.errors.length === 0,
            },
            errors: ledger.errors,
            warnings: ledger.warnings,
          },
          null,
          2
        ) + '\n'
      );
    } else if (!quiet) {
      for (const e of ledger.errors) console.log(`ERROR [${e.code}] ${e.file}${e.line ? ':' + e.line : ''} — ${e.message}`);
      for (const w of ledger.warnings) console.log(`WARN  [${w.code}] ${w.file}${w.line ? ':' + w.line : ''} — ${w.message}`);
      console.log('---');
      console.log(`files checked: ${scanned.size} markdown + 1 schema (law files: ${laws.length})`);
      console.log(`laws: ${laws.length} · articles: ${articleTotal} · parameters: ${paramTotal}`);
      console.log(`evidence: ${Object.entries(prefixTotals).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
      console.log(`evidence debt (pending): ${prefixTotals.pending}`);
      console.log(`errors: ${ledger.errors.length} · warnings: ${ledger.warnings.length}`);
      console.log(ledger.errors.length === 0 ? 'VALIDATION OK' : 'VALIDATION FAILED');
    }
    process.exitCode = ledger.errors.length === 0 ? 0 : 1;
    return;
  }

  usage();
  process.exitCode = 2;
}

main().catch((e) => {
  console.error('nation.mjs crashed:', e);
  process.exitCode = 1;
});
