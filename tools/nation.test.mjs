#!/usr/bin/env node
// Regression tests for tools/nation.mjs — the checks that gate this repository.
// Run with: node --test tools/   (or: npm test)
//
// Each test works on a throwaway copy of the repository, mutates it in a
// specific way, and asserts that the validator catches (or accepts) the
// mutation. The real working tree is never touched.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);

function freshCopy(name) {
  const dst = join(tmpdir(), `nation-test-${name}-${process.pid}-${Math.random().toString(36).slice(2, 8)}`);
  mkdirSync(dst, { recursive: true });
  for (const entry of readdirSync(ROOT, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.github') continue;
    cpSync(join(ROOT, entry.name), join(dst, entry.name), { recursive: true });
  }
  return dst;
}

function validate(dst) {
  let out;
  try {
    out = execFileSync(process.execPath, [join(dst, 'tools', 'nation.mjs'), 'validate', '--json'], {
      encoding: 'utf8',
    });
  } catch (err) {
    // A non-zero exit is expected when the mutated copy fails validation;
    // the JSON report is still on stdout.
    out = err.stdout;
  }
  if (!out) throw new Error('validator produced no JSON output');
  return JSON.parse(out);
}

function runIndex(dst) {
  execFileSync(process.execPath, [join(dst, 'tools', 'nation.mjs'), 'index'], { encoding: 'utf8' });
}

function read(dst, rel) {
  return readFileSync(join(dst, rel), 'utf8');
}

function write(dst, rel, text) {
  writeFileSync(join(dst, rel), text);
}

function removeLine(dst, rel, startsWith) {
  const lines = read(dst, rel).split('\n');
  const kept = lines.filter((l) => !l.startsWith(startsWith));
  if (kept.length === lines.length) throw new Error(`no line starts with "${startsWith}" in ${rel}`);
  write(dst, rel, kept.join('\n'));
}

const codes = (result) => result.errors.map((e) => e.code);

// 1. The clean tree must pass with zero errors.
test('baseline: clean repository validates', () => {
  const dst = freshCopy('baseline');
  try {
    const r = validate(dst);
    assert.equal(r.summary.errors, 0, `unexpected errors: ${JSON.stringify(r.errors.slice(0, 3))}`);
    assert.equal(r.summary.ok, true);
  } finally {
    rmSync(dst, { recursive: true, force: true });
  }
});

// 2. Ratification gate: pending evidence and a null expiry must both fire.
test('ratification gate blocks pending evidence', () => {
  const dst = freshCopy('gate');
  try {
    const before = read(dst, 'laws/Civil_Law.md');
    write(dst, 'laws/Civil_Law.md', before.replace('"status": "draft"', '"status": "ratified"'));
    const r = validate(dst);
    const gate = r.errors.filter((e) => e.code === 'E006');
    assert.equal(gate.length, 2, `expected 2 E006 errors, got: ${JSON.stringify(r.errors)}`);
    assert.ok(gate.some((e) => e.message.includes('pending')), 'gate must name the pending pointers');
    assert.ok(gate.some((e) => e.message.includes('expires')), 'gate must reject a null expiry');
  } finally {
    rmSync(dst, { recursive: true, force: true });
  }
});

// 3. Heading drift, both directions: renaming a heading must produce two errors.
test('heading drift fires in both directions', () => {
  const dst = freshCopy('heading');
  try {
    const before = read(dst, 'laws/Civil_Law.md');
    write(dst, 'laws/Civil_Law.md', before.replace('### CIV1 — ', '### CIVX — '));
    const r = validate(dst);
    const e004 = r.errors.filter((e) => e.code === 'E004');
    assert.equal(e004.length, 2, `expected 2 E004 errors, got: ${JSON.stringify(r.errors)}`);
    assert.ok(e004.some((e) => e.message.includes('CIV1')), 'must report the orphaned metadata article');
    assert.ok(e004.some((e) => e.message.includes('CIVX')), 'must report the unregistered heading');
  } finally {
    rmSync(dst, { recursive: true, force: true });
  }
});

// 4. A heading not in article form at all must be caught (the old blind spot).
test('malformed level-3 heading is caught', () => {
  const dst = freshCopy('malformed');
  try {
    const before = read(dst, 'laws/Civil_Law.md');
    write(dst, 'laws/Civil_Law.md', `${before}\n### Some random section\n`);
    const r = validate(dst);
    assert.ok(r.errors.some((e) => e.code === 'E004' && e.message.includes('article form')), JSON.stringify(r.errors));
  } finally {
    rmSync(dst, { recursive: true, force: true });
  }
});

// 5. Parameter table drift: metadata and "## Parameters" table must agree.
test('parameter table drift is caught', () => {
  const dst = freshCopy('paramtable');
  try {
    removeLine(dst, 'laws/Social_Floor_Law.md', '| `indexation_band`');
    const r = validate(dst);
    const e009 = r.errors.filter((e) => e.code === 'E009');
    assert.equal(e009.length, 1, `expected 1 E009 error, got: ${JSON.stringify(r.errors)}`);
    assert.ok(e009[0].message.includes('indexation_band'));
  } finally {
    rmSync(dst, { recursive: true, force: true });
  }
});

// 6. Register drift: dropping a law from the Constitution register must fire.
test('law register drift is caught', () => {
  const dst = freshCopy('register');
  try {
    removeLine(dst, 'Constitution.md', '| Civil Law');
    const r = validate(dst);
    assert.ok(r.errors.some((e) => e.code === 'E008' && e.message.includes('Civil_Law.md')), JSON.stringify(r.errors));
  } finally {
    rmSync(dst, { recursive: true, force: true });
  }
});

// 7. Schema errors must not mask later findings: a bad pointer inside a file
//    with an otherwise-valid structure is still reported.
test('bad evidence prefix is caught', () => {
  const dst = freshCopy('prefix');
  try {
    const before = read(dst, 'laws/Civil_Law.md');
    write(dst, 'laws/Civil_Law.md', before.replace('"evidence": ["', '"evidence": ["hunch:', 1));
    const r = validate(dst);
    assert.ok(r.errors.some((e) => e.code === 'E005' && e.message.includes('hunch')), JSON.stringify(r.errors));
  } finally {
    rmSync(dst, { recursive: true, force: true });
  }
});

// 8. Generated artefacts must be byte-stable (CI compares them by diff).
test('index generation is deterministic', () => {
  const dst = freshCopy('determinism');
  try {
    runIndex(dst);
    const first = read(dst, 'LAW_INDEX.md');
    runIndex(dst);
    const second = read(dst, 'LAW_INDEX.md');
    assert.equal(first, second, 'LAW_INDEX.md changed between identical runs');
    assert.ok(!/Generated: \d{4}-\d{2}-\d{2}/.test(second), 'index must not embed the current date');
  } finally {
    rmSync(dst, { recursive: true, force: true });
  }
});
