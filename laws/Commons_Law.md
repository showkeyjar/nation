# Commons Law (全民共享法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C19, C22–C26, C30 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §2.2, §3 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §9
> The transmission: how private results become public capability, stay alive, and pay a dividend.

```law-meta
{
  "id": "law.commons",
  "title": "Commons Law (全民共享法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["commons"],
  "summary": "Implements the conversion valve: the four routes by which a capability becomes common (expiry, buyout, public funding, prize-and-procurement), the registry of released assets, the maintenance duty with named maintainers and funded endowments, the data commons and its privacy floor, the reciprocity clause governing market access, the national dividend and its computation, the commons fund and its allocation formula, the auditability of algorithms used against citizens, the access duty, and the anti-enclosure rule that no commons asset may be privatised without two supermajority referendums and a replacement plan.",
  "articles": [
    { "id": "COM1", "title": "The four conversion routes", "evidence": ["model:tools/simulate.mjs#scenario=framework"], "falsifier": "If a route is never used in practice over two review periods while the others carry all conversions, it should be abolished." },
    { "id": "COM2", "title": "The registry of released assets", "evidence": ["audit:registry completeness, licence validity, link rot"], "falsifier": "If registry entries decay faster than they are repaired, the maintenance endowment is underfunded at the stated formula." },
    { "id": "COM3", "title": "The maintenance duty", "evidence": ["data:cost of abandoned open-source and public infrastructure"], "falsifier": "If funded maintainers do not reduce incident and rot rates versus unmaintained assets, the endowment formula should be cut to criticality classes only." },
    { "id": "COM4", "title": "The data commons", "evidence": ["study:open government data value vs. re-identification incidents"], "falsifier": "If the privacy-preserving pipeline degrades analytic value below the point of use, the defaults must be re-specified per data class." },
    { "id": "COM5", "title": "The reciprocity clause", "evidence": ["pending:first three years of reciprocity schedules and their disputes"], "falsifier": "If reciprocity reduces total market access or raises prices more than it increases commons contributions, it must be narrowed to dominant providers." },
    { "id": "COM6", "title": "Standards as commons", "evidence": ["study:FRAND outcomes and hold-up incidence"], "falsifier": "If capped royalties deter participation in standard-setting, the cap is mis-set for that domain." },
    { "id": "COM7", "title": "The national dividend", "evidence": ["data:Alaska Permanent Fund and comparable distribution effects"], "falsifier": "If the dividend reduces aggregate investment more than it raises floor security and participation, it must shift toward a floor top-up." },
    { "id": "COM8", "title": "The commons fund", "evidence": ["audit:fund sources and allocations vs. the published formula"], "falsifier": "If allocations deviate from the formula in more than one year in five, the formula is being gamed and must be hardened." },
    { "id": "COM9", "title": "Public code and public algorithms", "evidence": ["audit:share of decision algorithms published and contested"], "falsifier": "If publishing algorithms and models raises successful gaming of decisions more than it reduces error and bias, publication must be limited to auditors and the sortition chamber." },
    { "id": "COM10", "title": "The access duty", "evidence": ["audit:availability by region, language, disability, connectivity"], "falsifier": "If access gaps persist beyond the statutory deadline for any released capability, the delivery endowment must be raised automatically." },
    { "id": "COM11", "title": "Anti-enclosure", "evidence": ["pending:register of privatisation attempts and their outcomes"], "falsifier": "If the two-referendum rule blocks a clearly beneficial restructuring of a commons asset, the rule must add a bench fast-track with a replacement plan." },
    { "id": "COM12", "title": "Commons metrics and audit", "evidence": ["audit:maintainer coverage, diffusion half-life, reuse breadth, published quarterly"], "falsifier": "If the metric suite does not change allocation decisions within two review periods, it is decoration and must be reduced." }
  ],
  "parameters": [
    { "name": "maintenance_share_min", "value": 0.2, "unit": "share of commons fund", "evidence": "pending:first commons fund cycle" },
    { "name": "release_share", "value": 0.3, "unit": "share of commons fund for new releases and bounties", "evidence": "pending:first fund cycle" },
    { "name": "localization_share_min", "value": 0.1, "unit": "share of commons fund", "evidence": "pending:first localization cycle" },
    { "name": "dividend_share", "value": 0.3, "unit": "share of sovereign net returns", "evidence": "data:sovereign fund distribution rules in comparable funds" },
    { "name": "criticality_maintainer_ratio", "value": 1, "unit": "maintainers per critical asset (minimum)", "evidence": "pending:first criticality census" },
    { "name": "reciprocity_small_entity_exemption", "value": 1000000, "unit": "annual revenue, accounting units", "evidence": "pending:first reciprocity schedule" },
    { "name": "abandonment_notice_months", "value": 6, "unit": "months of notice before abandonment", "evidence": "pending:first abandonment declarations" }
  ],
  "metrics": [
    "maintainer coverage of critical commons assets",
    "diffusion half-life per released capability",
    "reuse breadth: fields building on each release within 5 years",
    "dividend paid, and floor adequacy interaction",
    "reciprocity: contributions received vs. market access granted",
    "share of decision algorithms against citizens that are published"
  ],
  "sunset": { "review_every_years": 4, "expires": null },
  "dissent": [
    "The reciprocity clause is this law's most aggressive article and its most likely to be captured: a schedule written by incumbents can become a tariff wall in commons clothing. It needs an independent schedule-setter or it will be hated.",
    "A national dividend paid equally to residents regardless of need spends money on people who do not need it; the floor would do more per unit of money. The dividend's real function is political (making shared ownership visible), and that is exactly what a critic would cut first."
  ],
  "open_questions": [
    "Who owns a commons asset improved by a foreign entity under reciprocity?",
    "Can maintenance endowments accumulate to the point where maintainers become a new rentier class?",
    "How is criticality assigned, and by whom, before the first incident proves it?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: conversion routes, registry, maintenance duty, data commons, reciprocity, dividend, fund formula, public algorithms, access duty, anti-enclosure, metrics." }
  ]
}
```

---

## 1. Conversion

### COM1 — The four conversion routes

**Claim.** A capability becomes common by exactly one of four published routes: **expiry** of its window (automatic), **buyout** on a monopoly test, **public funding** of its development (day one), or **prize and procurement** where the state bought the outcome rather than the exclusivity. No other route exists, and no route requires the holder's consent beyond the law they operated under.

**Rationale.** A conversion valve with unpublished routes becomes a negotiation with whoever is winning; four published routes is a schedule anyone can price in advance.

**Evidence.** `model:` tools/simulate.mjs#scenario=framework.

**Falsifier.** If a route is never used in practice over two review periods while the others carry all conversions, it should be abolished.

### COM2 — The registry of released assets

**Claim.** Every released capability is registered with: identity, route, release date, licence, criticality class, named maintainer, endowment, incident history and dependency map. The registry is public and machine-readable.

**Rationale.** The seed README's warning — that without accumulation "everything has to start from scratch" — is operationalised by a registry that the next builder can actually find.

**Evidence.** `audit:` registry completeness, licence validity, link rot.

**Falsifier.** If registry entries decay faster than they are repaired, the maintenance endowment is underfunded at the stated formula.

---

## 2. Staying alive

### COM3 — The maintenance duty

**Claim.** No capability is released without a named maintainer and a funded endowment sized to its criticality class; every critical asset has at least one dedicated maintainer. A maintainer abandoning an asset must give **6** months' notice and either name a successor or archive it with a declared end-of-life.

**Rationale.** Open-sourcing without maintenance transfers a security and continuity debt to the public — the opposite of accumulation.

**Evidence.** `data:` cost of abandoned open-source and public infrastructure.

**Falsifier.** If funded maintainers do not reduce incident and rot rates versus unmaintained assets, the endowment formula should be cut to criticality classes only.

### COM4 — The data commons

**Claim.** Publicly collected data is open by default under privacy-preserving publication (aggregation thresholds, formal privacy budgets, controlled access for sensitive microdata through data trusts). Personal data is never sold, and re-identification of published data is an offence.

**Rationale.** A shared factual substrate is the raw material of collective intelligence; persons are not substrate.

**Evidence.** `study:` open government data value vs. re-identification incidents.

**Falsifier.** If the privacy-preserving pipeline degrades analytic value below the point of use, the defaults must be re-specified per data class.

### COM5 — The reciprocity clause

**Claim.** An entity selling into this market above the small-entity exemption must contribute to the commons on a published, symmetric schedule: its jurisdiction's commons contributions are credited, and where there is no reciprocal access, a schedule of contributions applies. The schedule is set by an independent body, published in draft for comment, and identical treatment is given to domestic and foreign entities in like cases.

**Rationale.** A commons open to all comers, with contributions from none, is a subsidy from this population's rent base to everyone else's margins; reciprocity converts charity into a club with published dues.

**Evidence.** `pending:` first three years of reciprocity schedules and their disputes.

**Falsifier.** If reciprocity reduces total market access or raises prices more than it increases commons contributions, it must be narrowed to dominant providers.

### COM6 — Standards as commons

**Claim.** Standards essential to interoperability are commons: participation is open, essential claims are licensed at capped royalties ([Development_Law.md](./Development_Law.md) DEV9), and no injunction may be sought against a FRAND-committed implementation.

**Rationale.** A standard is the one place where a private claim can quietly re-monopolise a public capability.

**Evidence.** `study:` FRAND outcomes and hold-up incidence.

**Falsifier.** If capped royalties deter participation in standard-setting, the cap is mis-set for that domain.

---

## 3. Paying and accounting

### COM7 — The national dividend

**Claim.** A published share of sovereign net returns, released-asset income and rent revenue is divided equally among all residents and paid periodically, individually, without means test. Every resident can inspect the national balance sheet and their own share of it.

**Rationale.** "Everyone owns the results" becomes a fact when it is also a payment; ownership that never reaches a person is a slogan.

**Evidence.** `data:` Alaska Permanent Fund and comparable distribution effects.

**Falsifier.** If the dividend reduces aggregate investment more than it raises floor security and participation, it must shift toward a floor top-up.

### COM8 — The commons fund

**Claim.** The commons fund receives rents, buyout-related income, licence-at-cost fees and the sovereign allocation, and allocates by published formula: ≥ **20%** maintenance, **30%** new releases and bounties, ≥ **10%** localization and teaching, the remainder to the dividend and reserve. Deviations require published reasons and are audited.

**Rationale.** A fund without a formula becomes a budget line; a budget line becomes a favour.

**Evidence.** `audit:` fund sources and allocations vs. the published formula.

**Falsifier.** If allocations deviate from the formula in more than one year in five, the formula is being gamed and must be hardened.

### COM9 — Public code and public algorithms

**Claim.** Software written with public money is public. Any algorithm or model used in a decision against a person (benefits, credit, policing, triage, ranking) must be published with its training data description, its error rates by group, and a right to a human review of any adverse decision.

**Rationale.** Secret algorithms exercising public power are rules that cannot be contested — the evidence rule applied to machines.

**Evidence.** `audit:` share of decision algorithms published and contested.

**Falsifier.** If publishing algorithms and models raises successful gaming of decisions more than it reduces error and bias, publication must be limited to auditors and the sortition chamber.

### COM10 — The access duty

**Claim.** Every released capability must be usable by every resident: available in each region, in each official language, accessible to persons with disabilities, and functional offline where connectivity fails, within the statutory deadline.

**Rationale.** A capability that exists only where it is cheap to deliver divides the population into those the commons serves and those it merely mentions.

**Evidence.** `audit:` availability by region, language, disability, connectivity.

**Falsifier.** If access gaps persist beyond the statutory deadline for any released capability, the delivery endowment must be raised automatically.

### COM11 — Anti-enclosure

**Claim.** No commons asset may be privatised, exclusively licensed or sold without two successive supermajority referendums at least twelve months apart and a published replacement plan. Attempted enclosures through interface control are void under [Capital_Engine_Law.md](./Capital_Engine_Law.md) CAP4.

**Rationale.** The trip from common to private is one-way in practice; the price of the ticket must therefore be prohibitive by design.

**Evidence.** `pending:` register of privatisation attempts and their outcomes.

**Falsifier.** If the two-referendum rule blocks a clearly beneficial restructuring of a commons asset, the rule must add a bench fast-track with a replacement plan.

### COM12 — Commons metrics and audit

**Claim.** Maintainer coverage, diffusion half-life, reuse breadth, reciprocity balances and algorithm publication are measured quarterly and audited annually, and the audit names what the metrics changed.

**Rationale.** The commons layer is where this framework either compounds or silently rots; only measurement distinguishes the two.

**Evidence.** `audit:` maintainer coverage, diffusion half-life, reuse breadth, published quarterly.

**Falsifier.** If the metric suite does not change allocation decisions within two review periods, it is decoration and must be reduced.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `maintenance_share_min` | 0.2 | share of commons fund | `pending:` first commons fund cycle |
| `release_share` | 0.3 | share of commons fund for new releases and bounties | `pending:` first fund cycle |
| `localization_share_min` | 0.1 | share of commons fund | `pending:` first localization cycle |
| `dividend_share` | 0.3 | share of sovereign net returns | `data:` sovereign fund distribution rules in comparable funds |
| `criticality_maintainer_ratio` | 1 | maintainers per critical asset (minimum) | `pending:` first criticality census |
| `reciprocity_small_entity_exemption` | 1,000,000 | annual revenue, accounting units | `pending:` first reciprocity schedule |
| `abandonment_notice_months` | 6 | months of notice before abandonment | `pending:` first abandonment declarations |

## Metrics

- maintainer coverage of critical commons assets
- diffusion half-life per released capability
- reuse breadth: fields building on each release within 5 years
- dividend paid, and floor adequacy interaction
- reciprocity: contributions received vs. market access granted
- share of decision algorithms against citizens that are published

## Dissent register

- The reciprocity clause is this law's most aggressive article and its most likely to be captured: a schedule written by incumbents can become a tariff wall in commons clothing. It needs an independent schedule-setter or it will be hated.
- A national dividend paid equally to residents regardless of need spends money on people who do not need it; the floor would do more per unit of money. The dividend's real function is political (making shared ownership visible), and that is exactly what a critic would cut first.

## Open questions

- Who owns a commons asset improved by a foreign entity under reciprocity?
- Can maintenance endowments accumulate to the point where maintainers become a new rentier class?
- How is criticality assigned, and by whom, before the first incident proves it?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft: conversion routes, registry, maintenance duty, data commons, reciprocity, dividend, fund formula, public algorithms, access duty, anti-enclosure, metrics. |
