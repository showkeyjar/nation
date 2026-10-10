# Community Law (社区法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C8, C27, C30, C33, C34, C46 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §8 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §7
> The community: the floor's delivery unit, the pilot's scale, and the level where most decisions should live.

```law-meta
{
  "id": "law.community",
  "title": "Community Law (社区法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["governance", "floor"],
  "summary": "Defines the community (10,000 to 1,000,000 residents) as the primary delivery unit of the floor and the pilot unit of the whole framework; hard subsidiarity with a published escalation rule; local sortition assemblies with a fixed formula share of public revenue; housing policy through community land trusts, land-value capture for the floor, and a vacancy levy; cooperative and mutual legal forms; civilian sortition oversight of local safety with a published use-of-force ledger; the federation right with a published, peaceful exit procedure; and the failure-and-recovery procedure when a community cannot deliver the floor.",
  "articles": [
    { "id": "CMT1", "title": "The community defined", "evidence": ["pending:pilot boundary review and service-cost analysis"], "falsifier": "If communities at the small end cannot deliver floor components at unit costs near the regional average, the minimum size is too small and must rise." },
    { "id": "CMT2", "title": "Hard subsidiarity", "evidence": ["pending:register of escalations and reversals in the first pilot"], "falsifier": "If decisions escalate to the region that communities could have made at lower cost, the escalation rule is being used as risk-avoidance and must be tightened." },
    { "id": "CMT3", "title": "The local assembly", "evidence": ["study:sortition assembly outcomes at municipal scale"], "falsifier": "If local assemblies decide no differently than the executive would have, they are decorative and their budget share must be re-justified." },
    { "id": "CMT4", "title": "The local budget share", "evidence": ["data:fiscal decentralisation and service outcome literature"], "falsifier": "If the formula share produces systematic under-delivery of floor components in poor communities, the equalisation transfer must rise before the share is cut." },
    { "id": "CMT5", "title": "Housing and land", "evidence": ["data:land value capture and community land trust outcomes"], "falsifier": "If trusts and the vacancy levy do not move rent-to-income ratios within three review periods, housing supply rules must be rewritten (mirrors Social Floor FLR6)." },
    { "id": "CMT6", "title": "Cooperatives and mutuals", "evidence": ["pending:cooperative share of local contracts and delivery outcomes"], "falsifier": "If cooperative delivery underperforms across services, preferential access must end while equal standing remains." },
    { "id": "CMT7", "title": "Local safety under civilian oversight", "evidence": ["data:civilian oversight regimes and use-of-force rates"], "falsifier": "If sortition oversight does not reduce complaints and force incidents relative to appointed oversight, oversight must be restructured, not removed." },
    { "id": "CMT8", "title": "The federation right", "evidence": ["pending:first exercised exit and its published settlement"], "falsifier": "If exit settlements systematically strip departing communities of assets their residents built, the settlement formula must be corrected by the bench." },
    { "id": "CMT9", "title": "Failure and recovery", "evidence": ["pending:first recovery plans and their outcomes"], "falsifier": "If recovery plans persist beyond their deadline without delivering the floor, the region must assume delivery directly and the suspension must be judged to have failed." },
    { "id": "CMT10", "title": "The ledger duty", "evidence": ["audit:quarterly floor-delivery publication completeness"], "falsifier": "If publication completeness falls below the statutory level for two consecutive quarters, the equalisation transfer is withheld until it is restored." }
  ],
  "parameters": [
    { "name": "community_min_residents", "value": 10000, "unit": "residents", "evidence": "pending:pilot boundary review" },
    { "name": "community_max_residents", "value": 1000000, "unit": "residents", "evidence": "pending:pilot boundary review" },
    { "name": "subsidiarity_persons_threshold", "value": 100000, "unit": "persons affected, above which a decision escalates", "evidence": "pending:first escalation register" },
    { "name": "local_budget_share", "value": 0.35, "unit": "share of public revenue spent at community level", "evidence": "data:fiscal decentralisation literature" },
    { "name": "equalisation_transfer_min", "value": 0.9, "unit": "floor-delivery capacity as share of national average, floor for equalisation", "evidence": "pending:first fiscal equalisation cycle" },
    { "name": "vacancy_levy_rate", "value": 2, "unit": "multiplier of annual rate liability per vacant year", "evidence": "pending:first vacancy census" },
    { "name": "recovery_plan_deadline_years", "value": 3, "unit": "years", "evidence": "pending:first recovery plans" }
  ],
  "metrics": [
    "floor component delivery cost per resident by community",
    "decisions taken at each level (subsidiarity register)",
    "rent-to-income ratio distribution and vacancy rate",
    "use-of-force incidents per 1,000 residents and complaint outcomes",
    "equalisation transfers vs. delivery capacity",
    "ledger publication completeness and timeliness"
  ],
  "sunset": { "review_every_years": 4, "expires": null },
  "dissent": [
    "Hard subsidiarity with a 100,000-person threshold will strand some decisions (environmental spillovers, infrastructure corridors) at the wrong level; the escalation rule is meant to catch them, but registers of escalations have a long history of being ignored.",
    "A fixed local budget share of 35% is a number with no pilot behind it; too high fragments the floor's universality, too low makes the assembly a talking shop with a budget for benches."
  ],
  "open_questions": [
    "Who draws community boundaries, and how often, before it becomes gerrymandering by another name?",
    "Can a community adopt stricter floor components than the national floor without breaking portability?",
    "What is the currency and asset settlement of an exit that took decades of national investment?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: community definition, hard subsidiarity, sortition assembly, local budget share and equalisation, housing and land trusts, cooperatives, civilian safety oversight, federation right, failure and recovery, ledger duty." }
  ]
}
```

---

## 1. The unit

### CMT1 — The community defined

**Claim.** A community is a contiguous jurisdiction of **10,000–1,000,000** residents, the primary unit for delivering floor components and the scale at which the framework's pilots run (Constitution C46). Boundaries are reviewed by an independent body on a fixed cycle.

**Rationale.** Small enough that delivery is visible and assemblies are real; large enough that services have scale.

**Evidence.** `pending:` pilot boundary review and service-cost analysis.

**Falsifier.** If communities at the small end cannot deliver floor components at unit costs near the regional average, the minimum size is too small and must rise.

### CMT2 — Hard subsidiarity

**Claim.** A decision affecting fewer than **100,000** people is made at community level; above that, regionally or nationally. Either level may voluntarily refer a decision down. Escalations and referrals are recorded in a published register.

**Rationale.** Subsidiarity without a number is a slogan; with a number it is a rule that can be audited.

**Evidence.** `pending:` register of escalations and reversals in the first pilot.

**Falsifier.** If decisions escalate to the region that communities could have made at lower cost, the escalation rule is being used as risk-avoidance and must be tightened.

### CMT3 — The local assembly

**Claim.** Each community's assembly is selected by stratified sortition for one-year terms, with published agendas, minutes and decisions, and the powers of local law within the subsisted sphere.

**Rationale.** A chamber that must campaign cannot represent a town; a chamber drawn by lot can.

**Evidence.** `study:` sortition assembly outcomes at municipal scale.

**Falsifier.** If local assemblies decide no differently than the executive would have, they are decorative and their budget share must be re-justified.

### CMT4 — The local budget share

**Claim.** At least **35%** of public revenue is spent at community level under assembly decisions, on a published formula. Equalisation transfers guarantee every community the capacity to deliver the floor to at least **90%** of the national average.

**Rationale.** Money is what makes subsidiarity real; equalisation is what stops the floor from becoming a postcode lottery.

**Evidence.** `data:` fiscal decentralisation and service outcome literature.

**Falsifier.** If the formula share produces systematic under-delivery of floor components in poor communities, the equalisation transfer must rise before the share is cut.

---

## 2. Land, work, safety

### CMT5 — Housing and land

**Claim.** Communities hold land in community land trusts, capture land-value uplift for the floor (Constitution C30), and levy **2×** annual rate liability per vacant year on dwellings held empty without published reason. Speculative vacant holding is not a permitted use of housing.

**Rationale.** Land rent is created by the whole community's presence; letting it be captured privately privatises a common product and starves the floor's funding base at the same time.

**Evidence.** `data:` land value capture and community land trust outcomes.

**Falsifier.** If trusts and the vacancy levy do not move rent-to-income ratios within three review periods, housing supply rules must be rewritten (mirrors Social Floor FLR6).

### CMT6 — Cooperatives and mutuals

**Claim.** Cooperatives, mutuals and community enterprises may deliver public services under assembly contract, with equal standing and access to capital (Capital Engine CAP14) and publication of delivery outcomes.

**Rationale.** Delivery by member-owned firms keeps the service's surplus in the community that uses it.

**Evidence.** `pending:` cooperative share of local contracts and delivery outcomes.

**Falsifier.** If cooperative delivery underperforms across services, preferential access must end while equal standing remains.

### CMT7 — Local safety under civilian oversight

**Claim.** Community safety services answer to a sortition oversight panel with power to investigate, publish and discipline; every use of force is reported to a public incident ledger within 72 hours with body-worn evidence retention.

**Rationale.** The people most exposed to local force are the least able to hire lawyers; sortition oversight and a ledger change who has to explain themselves.

**Evidence.** `data:` civilian oversight regimes and use-of-force rates.

**Falsifier.** If sortition oversight does not reduce complaints and force incidents relative to appointed oversight, oversight must be restructured, not removed.

---

## 3. Federation and failure

### CMT8 — The federation right

**Claim.** A community may leave the nation or its region by a two-thirds local referendum. The exit settlement — assets, debts, residents' continuity of floor entitlements, and transition period — follows a published formula negotiated under a deadline. Blockade, violence and punitive settlement are prohibited.

**Rationale.** Exit is Constitution C8 scaled up: the least violent check on a captured direction, and the fact that it exists disciplines every level above it.

**Evidence.** `pending:` first exercised exit and its published settlement.

**Falsifier.** If exit settlements systematically strip departing communities of assets their residents built, the settlement formula must be corrected by the bench.

### CMT9 — Failure and recovery

**Claim.** A community that cannot deliver floor components enters a published recovery plan with a **3**-year deadline, regional support and a suspended assembly only for the plan's scope. Floor delivery to residents never pauses during recovery.

**Rationale.** Failure must be survivable and visible; residents did not cause it and must not pay for it.

**Evidence.** `pending:` first recovery plans and their outcomes.

**Falsifier.** If recovery plans persist beyond their deadline without delivering the floor, the region must assume delivery directly and the suspension must be judged to have failed.

### CMT10 — The ledger duty

**Claim.** Every community publishes quarterly, in the national ledger (Constitution C33), its floor-delivery metrics, budget execution, safety incidents and contract register, in the standard machine-readable format.

**Rationale.** The dashboard is local before it is national; a framework that claims to measure collective intelligence must start at the level where delivery happens.

**Evidence.** `audit:` quarterly floor-delivery publication completeness.

**Falsifier.** If publication completeness falls below the statutory level for two consecutive quarters, the equalisation transfer is withheld until it is restored.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `community_min_residents` | 10,000 | residents | `pending:` pilot boundary review |
| `community_max_residents` | 1,000,000 | residents | `pending:` pilot boundary review |
| `subsidiarity_persons_threshold` | 100,000 | persons affected, above which a decision escalates | `pending:` first escalation register |
| `local_budget_share` | 0.35 | share of public revenue spent at community level | `data:` fiscal decentralisation literature |
| `equalisation_transfer_min` | 0.9 | floor-delivery capacity as share of national average, floor for equalisation | `pending:` first fiscal equalisation cycle |
| `vacancy_levy_rate` | 2 | multiplier of annual rate liability per vacant year | `pending:` first vacancy census |
| `recovery_plan_deadline_years` | 3 | years | `pending:` first recovery plans |

## Metrics

- floor component delivery cost per resident by community
- decisions taken at each level (subsidiarity register)
- rent-to-income ratio distribution and vacancy rate
- use-of-force incidents per 1,000 residents and complaint outcomes
- equalisation transfers vs. delivery capacity
- ledger publication completeness and timeliness

## Dissent register

- Hard subsidiarity with a 100,000-person threshold will strand some decisions (environmental spillovers, infrastructure corridors) at the wrong level; the escalation rule is meant to catch them, but registers of escalations have a long history of being ignored.
- A fixed local budget share of 35% is a number with no pilot behind it; too high fragments the floor's universality, too low makes the assembly a talking shop with a budget for benches.

## Open questions

- Who draws community boundaries, and how often, before it becomes gerrymandering by another name?
- Can a community adopt stricter floor components than the national floor without breaking portability?
- What is the currency and asset settlement of an exit that took decades of national investment?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft: community definition, hard subsidiarity, sortition assembly, local budget share and equalisation, housing and land trusts, cooperatives, civilian safety oversight, federation right, failure and recovery, ledger duty. |
