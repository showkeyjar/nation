# Governance — How a Rule Becomes Law

> Version 0.1.0 · 2026-10-10 · Status: draft
> Implements [Constitution.md](./Constitution.md) Chapters 1, 6 and 7. This document is the operating manual for the evidence rule.

---

## 1. Scope

This is the process specification for the Open Nation blueprint. It defines:

- who may propose a rule, and what a proposal must contain;
- the **Five Lines** every rule carries, and the machine-readable form they take;
- how a draft becomes a trial and a trial becomes law;
- who reviews, who decides, who audits, and how each is prevented from capturing the others;
- what the national ledger publishes, on what cadence;
- how laws expire, and what happens when evidence fails.

Nothing here is in force anywhere. It is a specification to be adopted by a pilot jurisdiction (Constitution C46) and to be argued with before that.

---

## 2. Who may propose

**Anyone may propose a rule.** Citizenship is not required to propose; it is required to vote, and residence is what the floor attaches to (Constitution C27). Proposals are public, versioned and attributable.

A proposal is admissible when it contains:

1. a **Claim** (precise, one sentence, operationally testable);
2. a **Rationale** (the causal mechanism by which it works, not a value statement);
3. **Evidence** pointers in the vocabulary of §4;
4. a **Falsifier** (the observable result that would prove it wrong);
5. a **Sunset** (review interval, and expiry if any);
6. a **cost and funding note** (who pays, out of which base, over what horizon);
7. a **disclosure statement** from every author (assets, interests, employment affected by the rule).

Value statements are legitimate as *goals*; they are not legitimate as *grounds*. "It is fair" names a goal; "it is fair, and here is the mechanism and the test" is a proposal.

---

## 3. The Five Lines

| Line | Question it answers | Failure if missing |
| --- | --- | --- |
| **Claim** | What exactly does this rule assert will happen? | The rule is a slogan; it can never be evaluated |
| **Rationale** | By what mechanism? | The rule may work for the wrong reason and break when conditions change |
| **Evidence** | Where is the pointer to the vote, data, study, audit or model? | The rule is unfalsifiable in practice |
| **Falsifier** | What observation would refute it? | The rule becomes permanent by default |
| **Sunset** | When is it reviewed, and when does it expire? | The rule outlives its usefulness silently |

**The ratification gate.** A rule may circulate, be argued about and even be trialled with `pending:` evidence pointers. It may **not be ratified** while any evidence pointer or parameter value is `pending:`. This is enforced mechanically: `node tools/nation.mjs validate` fails on a ratified law with pending evidence.

---

## 4. Evidence vocabulary

Every evidence pointer begins with a prefix naming its type, so that a reader — human or machine — knows what kind of warrant is being offered and how much weight to give it.

| Prefix | Meaning | Example |
| --- | --- | --- |
| `vote:` | An expressed preference of the affected population | `vote:2031-04-02#turnout=61%#support=68%` |
| `data:` | A measured dataset from an identified source | `data:land-value-share-of-GDP#2015-2029` |
| `study:` | External or internal research with methods | `study:doi:10.1000/xyz123` |
| `audit:` | An inspection of practice against the rule itself | `audit:maintainer-coverage-2032Q1` |
| `model:` | A model whose assumptions and code are published | `model:tools/simulate.mjs#scenario=framework` |
| `pending:` | Not yet available. Blocks ratification. | `pending:domain-pilot drug-exclusivity-2033` |

`pending:` is not a weakness; it is the honest state of most of this blueprint. The rule is simply that a pending item can never be laundered into a ratified one.

---

## 5. Machine-readable metadata

Every law file carries one fenced block with the info string `law-meta` containing a single JSON object, validated against [schema/law-meta.schema.json](./schema/law-meta.schema.json). The block is the machine-readable mirror of the prose: **article IDs in the block must match the `### <ID> — <Title>` headings in the body, exactly and completely.**

```law-meta
{
  "id": "law.example",
  "title": "Example Law",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["engine", "commons"],
  "summary": "One paragraph a machine can index.",
  "articles": [
    {
      "id": "X1",
      "title": "Short article title",
      "evidence": ["model:tools/simulate.mjs#scenario=framework"],
      "falsifier": "The observation that would prove this article wrong."
    }
  ],
  "parameters": [
    { "name": "W_software", "value": 3, "unit": "years", "evidence": "pending:domain-pilot-software" }
  ],
  "metrics": ["diffusion half-life for software"],
  "sunset": { "review_every_years": 5, "expires": null },
  "dissent": ["The strongest argument recorded against this law."],
  "open_questions": ["What the drafters could not settle."],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft." }
  ]
}
```

### 5.1 Field contract

| Field | Type | Required | Rule |
| --- | --- | --- | --- |
| `id` | string | yes | `law.<lowercase-slug>`, unique across the repository |
| `title` | string | yes | matches the file's H1 after the `# ` |
| `version` | string | yes | semantic `MAJOR.MINOR.PATCH` |
| `status` | enum | yes | `draft`, `proposed`, `trial`, `ratified`, `amended`, `sunset`, `repealed` |
| `adopted` | date or null | yes | `YYYY-MM-DD` once ratified, otherwise null |
| `pillars` | array of enum | yes | non-empty subset of `direction`, `engine`, `commons`, `floor`, `governance` |
| `summary` | string | yes | 40–1200 characters |
| `articles` | array | yes | at least one; each with `id`, `title`, `evidence` (≥1), `falsifier` |
| `parameters` | array | no | each with `name`, `value`, `unit`, `evidence` |
| `metrics` | array of string | yes | what this law is judged by |
| `sunset` | object | yes | `review_every_years` integer ≥ 1; `expires` date or null |
| `dissent` | array of string | yes | may be empty only if there is genuinely no recorded objection |
| `open_questions` | array of string | no | unsettled design questions |
| `history` | array | yes | each with `version`, `date` (`YYYY-MM-DD`), `change` |

### 5.2 What the validator enforces

`node tools/nation.mjs validate` fails the repository when:

1. a `law-meta` block is missing, duplicated or not valid JSON;
2. a required field is missing or of the wrong type, or an enum value is unknown;
3. `id` values collide, or a filename does not correspond to its `id`;
4. an article ID appears in the metadata but not as a `### <ID> — <Title>` heading, or vice versa;
5. an evidence pointer does not use one of the six prefixes in §4;
6. `status` is `ratified` and any evidence pointer or parameter evidence is `pending:`;
7. a relative markdown link in the repository points at a file that does not exist;
8. the law register in [Constitution.md](./Constitution.md) and the files in `laws/` disagree.

It warns, without failing, on: missing `open_questions`, empty `dissent`, an article title that differs from its heading title, and a law whose `version` and last `history` entry disagree.

---

## 6. Lifecycle

```
draft ──► proposed ──► trial ──► ratified ──► amended ──► sunset / repealed
  │           │           │          │
  └── evidence may be pending at every stage except "ratified" ──┘
```

| State | Entry requirement | Maximum duration |
| --- | --- | --- |
| `draft` | Five Lines present, any number `pending:` | none |
| `proposed` | Admissible (§2); evidence office has published a review | 12 months before it must be withdrawn, trialled or rejected |
| `trial` | Pre-registered metrics, a defined population, a defined end date, and an exit path for affected people | by default 3 years, renewable once |
| `ratified` | **Zero `pending:` evidence**, cost and funding note, disclosure complete, passed the vote in §7 | until sunset |
| `amended` | New evidence pack; old falsifier resolved or explicitly carried forward | inherits the original sunset unless reset |
| `sunset` | The review date arrives and renewal is not voted | — |
| `repealed` | A ratified law is withdrawn, with the reason published | — |

**Trials are the default.** A rule that cannot be trialled in a defined population should say so explicitly and explain why.

---

## 7. Who decides

| Body | Composition | Power | Check on it |
| --- | --- | --- | --- |
| **Proposal floor** | anyone | submit rules | admissibility criteria |
| **Evidence office** | appointed scientists, statisticians, engineers; fixed budget formula | publish reviews of evidence quality; must be answered in writing | cannot block a rule, only label its evidence; its own funding is formula-based |
| **Sortition review chamber** | ~150 residents selected by lot, stratified by age, region, occupation; served for one year | review, amend, delay; majority of rule authorship must sit here | no campaigns, no donors; decisions published with reasons |
| **Elected chamber** | elected representatives | execution, budget, mission stewardship | term limits, recall, audit, constitutional bench |
| **Constitutional bench** | professional judges + sortition jurors, public reasons | strike down rules violating entrenched articles (C3–C7, C27, C38) | published reasons; lay and professional errors both reviewable |
| **Independent auditor** | appointed by sortition chamber, not the executive | audit ledgers, valuations, maintainer coverage, statistics | audits published in full, including about the auditor |
| **Statistics office** | insulated, formula-funded | publish the metric suite and its uncertainty | obliged to publish methods; no dismissal for results |

**Votes.** Ordinary laws: majority of the elected chamber plus majority of the sortition chamber. Entrenched articles (C42): two referendums at least twelve months apart, each with a supermajority. Trials: approval of the sortition chamber plus an ethics and exit-path review.

---

## 8. Anti-capture rules

Capture is the failure mode that ends every design like this one. The rules are structural, not moralistic.

1. **Disclosure.** Every author of a rule files an asset and interest declaration, published.
2. **Divestment.** An author with a directly affected holding must divest or place it in a blind trust before the rule is voted.
3. **Cooling-off.** Three years between leaving a rule-making body and working for an entity materially affected by its rules.
4. **Sortition majority on authorship.** A majority of the drafting body is selected by lot, not by appointment or election.
5. **No self-benefiting amendments.** An amendment proposed by an author who stands to gain materially is admissible only with a cooling-off delay and a published independent valuation.
6. **Transaction ledger.** Officials' transactions above a published threshold are recorded in the national ledger.
7. **Rotating valuation panels.** Buyout valuations (§2.2 of the framework) are done by panels with no repeat memberships and published reasoning.
8. **Red teams.** A funded adversarial team is assigned to attack each major rule and each mission evaluation; its reports are published whether or not they are welcome.
9. **The exit right.** Residents may leave (C8), which is the only anti-capture mechanism that never needs enforcement.
10. **Capture indicators published.** Authorship-to-return correlation, revolving-door rate, mission-award concentration, and valuation-panel overlap are published each year.

---

## 9. The national ledger

One machine-readable ledger, one cadence, no exceptions for inconvenient items.

| Section | Contents | Cadence |
| --- | --- | --- |
| `missions` | problem, metric, threshold, deadline, envelope, steward, kill criteria, status | on change, plus monthly digest |
| `laws` | every law version, its metadata block, its evidence pointers, its sunset date | on change |
| `budget` | planned vs. actual spend per mission and per commons endowment | quarterly |
| `metrics` | the capability dashboard, with uncertainty intervals and methods | quarterly |
| `valuation` | every buyout: method, panel, price, appeal outcome | per event |
| `commons` | each released asset, its maintainer, endowment, criticality, incident history | monthly |
| `audit` | audit reports, red-team reports, unremedied findings | per event |
| `disclosure` | author and official declarations, transaction ledger | per event |
| `capture` | the capture indicators of §8.10 | annually |

Format: open, documented, diffable, stable URLs, no login required, machine-readable by default, with a plain-language view for people who will never read JSON.

**Ledger rule.** Publish data that changes decisions. If a section is never used in deliberation or in market decisions, shrink or delete it (C33) — an ignored ledger is a cost, not transparency.

---

## 10. Sunset, review and repeal

- Default review intervals: **direction and engine laws 3–5 years; floor and rights laws 5–10 years; governance 10 years; parameters within any law 1–3 years.**
- At review, each article receives one of four verdicts: **keep** (evidence holds), **amend** (evidence partly holds), **retire** (evidence fails), **re-test** (evidence inconclusive, new trial specified). The verdict and its reasoning go in the ledger.
- An article whose falsifier is observed must be retired or amended within one review period, or the law's `status` becomes `sunset` automatically.
- Parameter values expire faster than the rules that contain them. A parameter without a current evidence pointer reverts to `pending:` and must be re-derived.

---

## 11. Emergency procedure

Emergency powers (C43) are declared in writing, name the right affected, expire within 90 days without a supermajority renewal, and are audited afterwards by the independent auditor. **The rights floor (C27) and the evidence rule (C3) are never suspendable.** During an emergency, laws may be trialled with shortened deliberation (7 days instead of 60), but they retain their sunsets and their retrospective review.

---

## 12. Appeals and disputes

- **Valuation appeals.** Any affected party may appeal a buyout price to the constitutional bench within 90 days; the appeal is public; the panel's reasoning is published.
- **Evidence disputes.** The evidence office labels evidence quality (`strong`, `contested`, `weak`, `pending`); a proposer may answer in writing, and the answer is published alongside.
- **Judicial review.** Any resident may challenge a rule as violating an entrenched article. Standing is not restricted by wealth, and costs are carried by the state.
- **The right to contest the ledger.** Any resident may file a data-contestation; the statistics office must answer publicly within 60 days.

---

## 13. Governance's own metrics

Governance must be measured like everything else, or the evidence rule becomes a rule for other people.

| Metric | Definition | Desired direction |
| --- | --- | --- |
| Evidence coverage | share of ratified articles with at least one non-`pending:` pointer | up, to 100% |
| Amendment latency | median days from proposal to decision | down, but not below deliberation floor |
| Adjudication lag | median days from contestation to public answer | down |
| Authorship capture | correlation between authorship and author asset returns | down toward zero |
| Revolving-door rate | share of officials moving to affected entities within 3 years | down |
| Ledger use | measured reads/derivations by deliberation bodies and market participants | up |
| Replication rate | share of major laws with at least one independent replication | up |
| Prediction accuracy | share of mission target thresholds met | up, with published misses |

---

## 14. Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). In short: open an issue describing the rule you want and the evidence you have; submit a pull request that adds or amends exactly one law file with a valid `law-meta` block; run `node tools/nation.mjs validate`; expect your proposal to be attacked, and record the attack in `dissent` if you cannot answer it.
