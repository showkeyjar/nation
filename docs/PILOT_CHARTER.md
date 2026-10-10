# Pilot Charter — template and rules

> Version 0.1.0 · 2026-10-10 · Status: draft
> Implements [Constitution.md](../Constitution.md) C46 (staged adoption) · Process: [GOVERNANCE.md](../GOVERNANCE.md) §6 (`trial` state) · Reversibility: [Transition Law](../laws/Transition_Law.md) TRA9

A pilot is the only legitimate bridge between this blueprint's `draft` laws and anything ratified. This document is the **charter template every pilot must complete before it starts**, plus the rules no pilot may waive. It exists so that the first pilot is designed like an experiment, not like a press release.

---

## 1. Non-waivable rules

1. **Pre-registration before start.** Hypotheses, metrics, and decision rules are filed with the evidence office (C36) and published **before** the first participant is enrolled. Late additions are labelled as exploratory, forever.
2. **Reversibility with teeth.** The reversion terms of every transferred asset, service and data flow are published at transfer (TRA9) and may not be degraded retroactively. A pilot whose reversal is practically impossible is not a pilot and may not start.
3. **Exit is a right, not a finding.** Any participant may leave at any time with their floor entitlement intact (C27). Exit rates are *measured*, never punished, and never cited as disloyalty.
4. **The floor is never the treatment.** A pilot may not withhold floor components from a control group. Comparisons use wait-list designs, stepped rollout, or cross-community comparisons — never deprivation by design.
5. **Honest failure is protected.** Pilot staff and participants report failures to the incident ledger (C13) under the Criminal Law CRI6 immunity. Concealment — not failure — is the offence.
6. **No mission grandfathering.** A pilot that becomes permanent must exit through Direction Law's mission test (DIR3) like anything else (TRA6).

## 2. The charter template

Copy the sections below verbatim into a new file `pilots/<name>-charter.md`, fill every field, and file it. **A charter with an empty section is not admissible.**

```markdown
# Pilot charter: <name>

## A. Population and scope
- Community/region/cohorts affected: <who, how many, how chosen>
- Jurisdictional basis and host agreement: <which existing powers; what the host state signed>
- What runs in the pilot: <precise list of articles and parameters under test>
- What does NOT run: <explicitly out of scope>

## B. Pre-registered hypotheses
| # | Hypothesis (falsifiable form) | Links to | Metric(s) | Decision rule set NOW |
| --- | --- | --- | --- | --- |
| H1 | e.g. "diffusion half-life of pilot-released assets < 24 months" | FRAMEWORK §7 F4⁺ | ... | if H1 fails, <parameter/article> is <changed/kept because> |

## C. Metrics and measurement
| Metric | Source | Cadence | Who audits |
| --- | --- | --- | --- |

## D. Duration, phases, and kill criteria
- Total duration: <default 3 years per GOVERNANCE §6>
- Phase gates and dates: ...
- Kill criteria: <pre-defined results that end the pilot early; DIR9 linkage>

## E. Exit rights and reversion
- Participant exit path: ...
- Asset reversion terms (TRA9): <per transferred asset>
- Data export and deletion plan (C48): ...

## F. Governance during the pilot
- Steward (DIR10) and sortition oversight panel: ...
- Local assembly role (CMT3): ...
- Emergency procedure cap (C43, GOVERNANCE §11): ...

## G. Budget and funding base
- Cost, source (which rent layer per TAX2 ranking), and cap: ...
- Who eats an overrun: ...

## H. Publication
- Ledger feeds, dashboard indicators (C35), raw-data release plan: ...
```

## 3. Decision rules: the part people get wrong

The **decision rule** column is the charter's core. It must be written in the form *"if metric X is below/above threshold Y at date Z, then parameter/article A is changed in way B"* — decided now, while nobody knows the answer. Rules like *"results will inform future thinking"* are inadmissible; the evidence office rejects the charter.

Two honest patterns for the rule:

- **Kill-or-shrink:** "If the cost per unit of capability gained exceeds twice the next-best alternative, the pilot ends and the article returns to draft with the data attached."
- **Graduate-with-scars:** "If the falsifier does not fire but two or more secondary metrics miss, the article moves to `proposed` with the misses recorded in `open_questions` — not silently fixed."

## 4. Worked example (illustrative only)

> **Pilot: cash-first floor layer in one community of ~8,000 residents, 24 months.**
>
> - **H1** (links FLR2, falsifier): unconditional cash does not reduce employment participation by more than 2 percentage points versus the stepped-rollout comparison group. *Decision rule:* if exceeded, the cash layer is not extended beyond the pilot and FLR2's evidence pack records the result; if not exceeded, FLR2's pointer upgrades from `pending:` to `data:` with this pilot's ledger ID.
> - **H2** (links FLR3): indexation tracks the floor-basket index within the band with zero manual interventions. *Decision rule:* any manual override ends automatic indexation for that component and records the cause.
> - **Kill criterion:** fraud or error rate in delivery above 5% for two consecutive quarters ends the pilot early (design failure, not participant failure — CRI6).
> - **Reversion:** cash payments revert to the host programme's prior terms; ledger data exports under C48; no participant repays anything received in good faith.

This example is illustrative — **no number in it is calibrated** — and it exists to show the form, not to assert expectations. See [docs/SIMULATION.md](./SIMULATION.md) for what an uncalibrated model can and cannot say.

## 5. Filing and review

File charters as pull requests adding `pilots/<name>-charter.md`. The evidence office review (GOVERNANCE §6, `proposed` → `trial`) checks: all sections filled, decision rules in the imperative form, reversion terms concrete, floor-not-treatment rule intact, and duration capped. The review is itself published. Approval moves the linked law articles to `trial`; rejection must state which section failed and why.
