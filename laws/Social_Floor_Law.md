# Social Floor Law (社会兜底法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C27–C32 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §2.4, §5 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §10
> The chassis: what nobody may fall below, how it is indexed, how it is funded, and how it is delivered without humiliation.

```law-meta
{
  "id": "law.social-floor",
  "title": "Social Floor Law (社会兜底法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["floor"],
  "summary": "Defines the unconditional floor (nutrition and water, housing, health care, education, connectivity and computation, personal security, legal aid, and a cash layer), its universality and non-conditionality, the indexation formula with its band, the funding ranking (rents first, never the innovation being accelerated), delivery and dignity rules (no surveillance means-testing, statutory deadlines, one application, auto-enrolment), the right to useful work at a floor wage, the treatment of children and of changed family status, proportionate anti-fraud rules, and the automatic escalation if adequacy falls.",
  "articles": [
    { "id": "FLR1", "title": "The eight components", "evidence": ["data:deprivation indices and their health, crime and schooling correlates"], "falsifier": "If a component shows no measurable improvement in the outcome it exists for after two review periods, its delivery method must be redesigned or the component merged." },
    { "id": "FLR2", "title": "Unconditional and universal", "evidence": ["study:unconditional vs. conditional transfer outcomes"], "falsifier": "If unconditionality measurably reduces participation beyond what health and entrepreneurship gains compensate, the cash layer's size must change (still unconditionally delivered)." },
    { "id": "FLR3", "title": "Indexation", "evidence": ["model:tools/simulate.mjs indexation sweep"], "falsifier": "If indexation drives debt/output past the stability threshold, the formula must be smoothed or banded before any component is cut." },
    { "id": "FLR4", "title": "Funding ranking", "evidence": ["data:rent shares of GDP vs. floor cost in comparable economies"], "falsifier": "If the rent base cannot cover the indexed floor and the gap closes only with distortionary taxes, the ranking must be re-derived with evidence." },
    { "id": "FLR5", "title": "The cash layer", "evidence": ["data:cash transfer delivery cost and error rates by design"], "falsifier": "If the cash layer's marginal effect on wellbeing is below its cost at current size, it must be resized before other components are cut." },
    { "id": "FLR6", "title": "Housing", "evidence": ["data:vacancy rates, rent-to-income ratios, and eviction outcomes"], "falsifier": "If the vacancy levy and trust expansion do not reduce rent-to-income ratios within three review periods, housing supply rules must be rewritten." },
    { "id": "FLR7", "title": "Utilities: water, energy, connectivity, computation", "evidence": ["pending:first lifeline tariff and compute entitlement outcomes"], "falsifier": "If the compute/bandwidth entitlement goes unused by its intended recipients, it must be redesigned around shared facilities rather than individual entitlements." },
    { "id": "FLR8", "title": "Delivery and dignity", "evidence": ["data:take-up rates under simple vs. surveilled delivery"], "falsifier": "If surveillance-free delivery raises error and fraud beyond the recovery capacity of FLR12, targeted verification may be added for the non-cash layers only, never for the cash layer." },
    { "id": "FLR9", "title": "Right to useful work", "evidence": ["study:employer-of-last-resort pilots"], "falsifier": "If the guarantee crowds out private employment or becomes low-wage make-work, it converts to training and placement entitlements." },
    { "id": "FLR10", "title": "Statutory deadlines and one application", "evidence": ["audit:decision latency, applications per household, appeal volumes"], "falsifier": "If deadlines are systematically missed without consequence, they must be enforced by automatic default approval plus audit." },
    { "id": "FLR11", "title": "No family-status trap", "evidence": ["pending:take-up differentials by household composition"], "falsifier": "If household aggregation demonstrably hides need (the working poor within a mixed household), assessment must move to the individual with a published correction." },
    { "id": "FLR12", "title": "Error, fraud and proportionality", "evidence": ["data:fraud rates in universal vs. means-tested systems"], "falsifier": "If recovery enforcement reduces take-up among eligible people more than it recovers, it must be scaled back." },
    { "id": "FLR13", "title": "Adequacy escalation", "evidence": ["audit:floor adequacy ratio published quarterly"], "falsifier": "If escalation triggers repeatedly without restoring adequacy, the funding ranking has failed and must be reopened." }
  ],
  "parameters": [
    { "name": "kappa_indexation", "value": 0.4, "unit": "floor as share of median disposable income", "evidence": "pending:pilot calibration" },
    { "name": "cash_layer_share_of_floor", "value": 0.35, "unit": "share of floor value delivered as cash", "evidence": "pending:pilot behavioural response" },
    { "name": "indexation_band", "value": 0.05, "unit": "max annual real increase as share of median income", "evidence": "model:tools/simulate.mjs indexation sweep" },
    { "name": "vacancy_levy_rate", "value": 2, "unit": "multiplier of annual rate liability per vacant year", "evidence": "pending:first vacancy census" },
    { "name": "floor_wage_multiple", "value": 1.15, "unit": "guaranteed-work wage as multiple of floor", "evidence": "pending:first guarantee cohort" },
    { "name": "guarantee_employment_cap", "value": 0.05, "unit": "share of total employment", "evidence": "pending:first guarantee cohort" },
    { "name": "decision_deadline_days", "value": 30, "unit": "days for any floor decision", "evidence": "pending:first administrative audit" }
  ],
  "metrics": [
    "floor adequacy: floor value as share of median disposable income",
    "take-up rate per component among eligible residents",
    "decision latency and appeal volume",
    "deep-poverty rate after transfers",
    "housing: rent-to-income ratio distribution, vacancy rate",
    "guarantee cohort size, wage, and transition rate to other work"
  ],
  "sunset": { "review_every_years": 5, "expires": null },
  "dissent": [
    "The law is written as if the binding constraint were political will rather than arithmetic; a hostile review of FLR4 would show the rent base cannot cover an indexed floor at kappa = 0.4 in a poor jurisdiction, and the draft offers only the band as an answer.",
    "Unconditionality plus a job guarantee at 1.15x the floor sets a de facto minimum wage that small firms may not be able to bear; the interaction with Earn and Pay Law PAY1 needs explicit costing that this draft does not contain."
  ],
  "open_questions": [
    "Should the floor attach to residence or to citizenship, and what is the position of short-term residents?",
    "Does the compute entitlement imply state provision of hardware, or only of access?",
    "How is the floor portable across communities without triggering a race to the cheapest provider?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: eight components, unconditionality, indexation, funding ranking, cash layer, housing, utilities including connectivity and computation, dignity in delivery, useful work, deadlines, family-status protection, proportionate anti-fraud, adequacy escalation." }
  ]
}
```

---

## 1. What the floor is

### FLR1 — The eight components

**Claim.** The floor comprises: (1) adequate nutrition and clean water; (2) safe, secure, affordable housing; (3) full health care; (4) education through the level a person can use; (5) connectivity and computation; (6) personal security and legal aid; (7) mobility within one's community; (8) a cash layer for participation in society. Each component has a published adequacy standard.

**Rationale.** Fear is the most expensive tax an economy pays: it suppresses risk-taking, learning and honest reporting, which is exactly what this framework needs most.

**Evidence.** `data:` deprivation indices and their health, crime and schooling correlates.

**Falsifier.** If a component shows no measurable improvement in the outcome it exists for after two review periods, its delivery method must be redesigned or the component merged.

### FLR2 — Unconditional and universal

**Claim.** The floor attaches to residence and is unconditional: no work requirement, no behaviour condition, no family-status condition, and no surrender of personal data beyond identity. It is never time-limited.

**Rationale.** Conditionality spends administrative money to remove money from exactly the people least able to fight the process, and it teaches the poor to lie to the state.

**Evidence.** `study:` unconditional vs. conditional transfer outcomes.

**Falsifier.** If unconditionality measurably reduces participation beyond what health and entrepreneurship gains compensate, the cash layer's size must change (still unconditionally delivered).

### FLR3 — Indexation

**Claim.** The floor's cash value is `F_t = max(F_{t-1}, κ · median_income_t)` with `κ = 0.40`, subject to a band of **5** points of median income per year. It never falls in nominal terms.

**Rationale.** A floor fixed in nominal terms is a floor that quietly disappears; a formula removes the annual political fight in which the poorest always lose.

**Evidence.** `model:` tools/simulate.mjs indexation sweep.

**Falsifier.** If indexation drives debt/output past the stability threshold, the formula must be smoothed or banded before any component is cut.

### FLR4 — Funding ranking

**Claim.** The floor is funded in rank order: (1) rents — land value, natural resources, spectrum, carbon, publicly created data; (2) sovereign and commons fund returns; (3) consumption and inheritance taxes; (4) proportional income taxes. Profit and innovation taxes are last and require a published justification each year they are used.

**Rationale.** The floor must not be funded by taxing the discovery it exists to make people brave enough to attempt.

**Evidence.** `data:` rent shares of GDP vs. floor cost in comparable economies.

**Falsifier.** If the rent base cannot cover the indexed floor and the gap closes only with distortionary taxes, the ranking must be re-derived with evidence.

### FLR5 — The cash layer

**Claim.** **35%** of the floor's value is delivered as unconditional cash, monthly, individually, with no clawback as other income rises. The remainder is delivered as services and entitlements.

**Rationale.** Cash respects the recipient's knowledge of their own needs; services correct the market failures cash cannot reach (health, education, housing).

**Evidence.** `data:` cash transfer delivery cost and error rates by design.

**Falsifier.** If the cash layer's marginal effect on wellbeing is below its cost at current size, it must be resized before other components are cut.

---

## 2. Components in detail

### FLR6 — Housing

**Claim.** Housing adequacy is a floor component delivered through community land trusts, social building, rent regulation where supply is inelastic, and an anti-eviction procedure with rehousing duty. A vacancy levy of **2×** the annual rate liability applies per vacant year to dwellings held empty without a published reason.

**Rationale.** Housing is where a floor dies in practice: it is the one component whose price rises to absorb any cash transfer, so supply and land policy are part of the floor, not separate from it.

**Evidence.** `data:` vacancy rates, rent-to-income ratios, and eviction outcomes.

**Falsifier.** If the vacancy levy and trust expansion do not reduce rent-to-income ratios within three review periods, housing supply rules must be rewritten.

### FLR7 — Utilities: water, energy, connectivity, computation

**Claim.** Water and energy are delivered under lifeline tariffs (a free basic block, then metered). Connectivity is a floor entitlement with a published minimum bandwidth. Computation is a floor entitlement: access to sufficient computation and storage to participate in education, work and civic life, including the use of public models and public data.

**Rationale.** In a nation whose collective intelligence runs on a public ledger, exclusion from connectivity and computation is exclusion from citizenship.

**Evidence.** `pending:` first lifeline tariff and compute entitlement outcomes.

**Falsifier.** If the compute/bandwidth entitlement goes unused by its intended recipients, it must be redesigned around shared facilities rather than individual entitlements.

### FLR8 — Delivery and dignity

**Claim.** Delivery uses one application, auto-enrolment wherever records permit, a single decision deadline of **30** days, language access, and no surveillance-based means-testing. Decisions are explainable and appealable to a community tribunal and then the bench.

**Rationale.** Administrative humiliation is a hidden tax on the poorest and the main documented reason benefits go unclaimed.

**Evidence.** `data:` take-up rates under simple vs. surveilled delivery.

**Falsifier.** If surveillance-free delivery raises error and fraud beyond the recovery capacity of FLR12, targeted verification may be added for the non-cash layers only, never for the cash layer.

### FLR9 — Right to useful work

**Claim.** Anyone may take up a publicly offered job, apprenticeship or training place at a wage of **1.15×** the floor, doing audited useful work (care, repair, restoration, assistance to missions). The guarantee is capped at **5%** of total employment and is never compulsory.

**Rationale.** A floor protects existence; work gives structure, skill and belonging. Offering both removes the false choice between handout and workfare.

**Evidence.** `study:` employer-of-last-resort pilots.

**Falsifier.** If the guarantee crowds out private employment or becomes low-wage make-work, it converts to training and placement entitlements.

### FLR10 — Statutory deadlines and one application

**Claim.** Any floor decision not made within **30** days is granted by default, subject to later audit. A household files at most one application for all components.

**Rationale.** Delay is the cheapest way for an administration to shave costs without ever voting to do so.

**Evidence.** `audit:` decision latency, applications per household, appeal volumes.

**Falsifier.** If deadlines are systematically missed without consequence, they must be enforced by automatic default approval plus audit.

### FLR11 — No family-status trap

**Claim.** Each person's cash layer is individual. Household composition may never reduce a person below the floor, and a child's entitlement is held for the child, independent of parental means.

**Rationale.** Household aggregation hides need exactly where it concentrates: among those who share a roof with someone earning.

**Evidence.** `pending:` take-up differentials by household composition.

**Falsifier.** If household aggregation demonstrably hides need (the working poor within a mixed household), assessment must move to the individual with a published correction.

### FLR12 — Error, fraud and proportionality

**Claim.** Honest error is corrected prospectively; recovery of overpayment is capped at a share of ongoing entitlement and never removes a component. Fraud requires intent, is adjudicated by a tribunal, and is a matter for proportional administrative penalties first. The fraud rate is published annually.

**Rationale.** Systems designed around the dishonest applicant punish the honest poor with the paperwork of suspicion.

**Evidence.** `data:` fraud rates in universal vs. means-tested systems.

**Falsifier.** If recovery enforcement reduces take-up among eligible people more than it recovers, it must be scaled back.

### FLR13 — Adequacy escalation

**Claim.** If the published floor adequacy ratio falls below `κ − 0.05` for two consecutive quarters, an automatic escalation opens: the funding ranking is recalculated, the band is reviewed, and the elected chamber must respond within 60 days with a published plan.

**Rationale.** A floor that can quietly shrink is not a floor; the trigger makes erosion loud.

**Evidence.** `audit:` floor adequacy ratio published quarterly.

**Falsifier.** If escalation triggers repeatedly without restoring adequacy, the funding ranking has failed and must be reopened.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `kappa_indexation` | 0.4 | floor as share of median disposable income | `pending:` pilot calibration |
| `cash_layer_share_of_floor` | 0.35 | share of floor value delivered as cash | `pending:` pilot behavioural response |
| `indexation_band` | 0.05 | max annual real increase as share of median income | `model:` tools/simulate.mjs indexation sweep |
| `vacancy_levy_rate` | 2 | multiplier of annual rate liability per vacant year | `pending:` first vacancy census |
| `floor_wage_multiple` | 1.15 | guaranteed-work wage as multiple of floor | `pending:` first guarantee cohort |
| `guarantee_employment_cap` | 0.05 | share of total employment | `pending:` first guarantee cohort |
| `decision_deadline_days` | 30 | days for any floor decision | `pending:` first administrative audit |

## Metrics

- floor adequacy: floor value as share of median disposable income
- take-up rate per component among eligible residents
- decision latency and appeal volume
- deep-poverty rate after transfers
- housing: rent-to-income ratio distribution, vacancy rate
- guarantee cohort size, wage, and transition rate to other work

## Dissent register

- The law is written as if the binding constraint were political will rather than arithmetic; a hostile review of FLR4 would show the rent base cannot cover an indexed floor at `κ = 0.4` in a poor jurisdiction, and the draft offers only the band as an answer.
- Unconditionality plus a job guarantee at 1.15× the floor sets a de facto minimum wage that small firms may not be able to bear; the interaction with Earn and Pay Law PAY1 needs explicit costing that this draft does not contain.

## Open questions

- Should the floor attach to residence or to citizenship, and what is the position of short-term residents?
- Does the compute entitlement imply state provision of hardware, or only of access?
- How is the floor portable across communities without triggering a race to the cheapest provider?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft: eight components, unconditionality, indexation, funding ranking, cash layer, housing, utilities including connectivity and computation, dignity in delivery, useful work, deadlines, family-status protection, proportionate anti-fraud, adequacy escalation. |
