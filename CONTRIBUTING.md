# Contributing

Thank you for wanting to improve a country that does not exist yet. That sentence is either absurd or the most rational form of politics available — this project bets on the second.

## What counts as a contribution

Ranked by how much this project needs them:

1. **Attacks.** Find a rule whose falsifier would fire, a parameter whose value is indefensible, a capture route the anti-capture rules miss. Record it in the law's `dissent` field or open an issue.
2. **Evidence.** Replace a `pending:` pointer with a real one (`vote:`, `data:`, `study:`, `audit:`, `model:`). This is the single most valuable contribution: it is what moves a rule toward ratification.
3. **Missing laws.** The register is incomplete on purpose. Tax procedure, migration, insolvency detail, elections, statistics — all needed. Follow the format below exactly.
4. **Translations.** English is canonical; full translations are welcome as `FRAMEWORK.<locale>.md` or `laws/<locale>/`.
5. **Pilots.** A community, a cooperative, a municipality, a student union, a game, a simulation — anything that runs part of this framework on real people and publishes the numbers, including failures.

## The format contract

Every law file is machine-checked. Before opening a pull request:

```bash
node tools/nation.mjs validate
```

Your change must pass. The checks (GOVERNANCE.md §5.2) include:

- exactly one fenced `law-meta` JSON block per law, valid against `schema/law-meta.schema.json`;
- article IDs in the metadata appear as `### <ID> — <Title>` headings, and vice versa;
- every evidence pointer starts with `vote:`, `data:`, `study:`, `audit:`, `model:` or `pending:`;
- **a law with `status: "ratified"` may not contain any `pending:` evidence** — this is the founding rule of the project, enforced mechanically;
- relative links resolve, and the law register in `Constitution.md` lists every law file.

## How to propose or amend a rule

1. Open an issue: the rule you want, and the evidence you have. Value statements are fine as goals; they are not grounds (GOVERNANCE.md §2).
2. Draft the article with the Five Lines: **Claim** (one sentence, operational), **Rationale** (the causal mechanism), **Evidence** (a pointer, `pending:` if you do not have one yet), **Falsifier** (what observation would prove you wrong), **Sunset** (when it is reviewed).
3. Add it to exactly one law file, bump that law's `version`, and add a `history` entry.
4. If your law is new, add it to the law register in `Constitution.md`.
5. Run `node tools/nation.mjs validate`, then `node tools/nation.mjs index && node tools/nation.mjs graph`, and commit the regenerated files.
6. Expect your proposal to be attacked. If you cannot answer the attack, add it to `dissent` — that is not a failure, it is the requested contribution.

## Anti-capture (this applies to this repository too)

Authors of rules must not hold a material interest in the outcome (Constitution C5). If you work for an entity that would benefit from a rule you propose, say so in the pull request. Disclosure does not disqualify you; silence does.

## What will not be merged

- Rules without a falsifier ("this is good because it is fair").
- Invented evidence: fabricated DOIs, datasets, statistics or quotes. `pending:` is always acceptable; fabrication never is.
- Changes that delete recorded dissent instead of answering it.
- Licensing changes. The project is GPL-3.0.

## Repository layout

| Path | Contents |
| --- | --- |
| `Constitution.md` | Root law: principles, rights, powers, amendment, transition |
| `FRAMEWORK.md` / `FRAMEWORK.zh-CN.md` | The architecture (English canonical, Chinese edition) |
| `GOVERNANCE.md` | How a rule becomes law |
| `laws/` | Operational law, one file per domain, with `law-meta` blocks |
| `schema/law-meta.schema.json` | Schema for the metadata |
| `tools/nation.mjs` | Validator, index generator, graph builder |
| `tools/simulate.mjs` | Illustrative mechanism model (`docs/SIMULATION.md`) |
| `LAW_INDEX.md` | Generated: laws, evidence debt, parameters, dissent |
| `docs/law-graph.md` | Generated: dependency graph |
