# Environment and Resources Law (环境与资源法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C11, C30, C22 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §2.1, §2.3 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §9
> The boundary conditions: the planet is not a mission stakeholder that can be outvoted — it is a constraint the missions operate inside.

```law-meta
{
  "id": "law.environment",
  "title": "Environment and Resources Law (环境与资源法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["direction", "commons"],
  "summary": "Sets published planetary-boundary thresholds as hard mission constraints with automatic consequences; upstream carbon pricing feeding the floor; extraction royalties with mandatory restoration bonds; the depletion rule converting a fixed share of resource rent into sovereign wealth; registration of critical natural assets in the commons registry with restoration trusts as maintainers; time-boxed but cumulative environmental assessment; standing for any resident with structural remedies; environmental crimes on the incident ledger; adaptation as a standing mission; and boundary indicators as quarterly dashboard items.",
  "articles": [
    { "id": "ENV1", "title": "Published boundaries bind missions", "evidence": ["data:national accounts vs. published boundary thresholds (quarterly)"], "falsifier": "If a boundary is crossed twice consecutively without the consequence ladder firing, the ladder is decorative and must be rebuilt with automatic triggers." },
    { "id": "ENV2", "title": "Upstream carbon pricing", "evidence": ["study:carbon pricing incidence and revenue use (e.g., World Bank State and Trends 2023)"], "falsifier": "If emissions do not respond within two price-review cycles while floor recipients absorb the pass-through, the price is mis-specified for the abatement margin it targets." },
    { "id": "ENV3", "title": "Extraction royalties and restoration bonds", "evidence": ["audit:bond adequacy vs. actual restoration costs, first cycle"], "falsifier": "If bonds systematically underfund actual restoration, the bond formula moves from estimated to escrowed-actual costing." },
    { "id": "ENV4", "title": "The depletion rule", "evidence": ["study:Hartwick 1977 investing rents from exhaustible resources; Norway GPFG practice"], "falsifier": "If consumption out of resource revenue persists above the rule during depletion, the rule must be entrenched beyond annual budget reach." },
    { "id": "ENV5", "title": "Critical natural assets as commons", "evidence": ["audit:registry coverage, maintainer funding, condition indices"], "falsifier": "If registered assets degrade at the same rate as unregistered ones, registration without funded maintenance is theatre." },
    { "id": "ENV6", "title": "Assessment that cannot be a veto-by-delay", "evidence": ["data:assessment durations, completion vs. abandonment of projects"], "falsifier": "If assessments kill projects by delay rather than by findings (delay-share above tolerance), the time-box has failed and the default flips to approval-with-bonds for the affected class." },
    { "id": "ENV7", "title": "Standing and remedies", "evidence": ["audit:standing cases, remedies ordered, compliance rates"], "falsifier": "If structural remedies are ordered but compliance lags beyond tolerance, receivership — not bigger fines — becomes the default remedy." },
    { "id": "ENV8", "title": "Environmental crimes", "evidence": ["audit:prosecutions under CRI2 environmental limbs, ledger falsification cases"], "falsifier": "If conviction rates concentrate on small operators while large incidents settle structurally, the enforcement ladder is inverted and must be re-based on harm volume." },
    { "id": "ENV9", "title": "Adaptation as a standing mission", "evidence": ["data:disaster response times, adaptation project delivery (ledger)"], "falsifier": "If the standing mission displaces prevention spending (adaptation crowding out mitigation), the mission budget is mis-split and must be rebalanced by formula." },
    { "id": "ENV10", "title": "Commons day-one for publicly funded results", "evidence": ["audit:share of ENV-funded results under exclusive licence vs. commons"], "falsifier": "If exclusivity is granted for funded mitigation results more than the tolerance share, the DEV7 default is being routed around and the route is closed." },
    { "id": "ENV11", "title": "Boundary indicators on the dashboard", "evidence": ["data:indicator publication cadence and decision linkage"], "falsifier": "If boundary indicators do not appear in at least one binding decision per cycle, they are decoration and must be folded into DIR9 kill criteria explicitly." }
  ],
  "parameters": [
    { "name": "restoration_bond_share", "value": 1, "unit": "share of independently assessed restoration cost, escrowed", "evidence": "pending:first bond adequacy audit" },
    { "name": "resource_rent_to_fund_share", "value": 0.5, "unit": "share of resource rent capitalised to sovereign wealth", "evidence": "pending:first depletion-cycle review" },
    { "name": "assessment_days", "value": 180, "unit": "days statutory for full assessment", "evidence": "pending:first three assessments vs. delay-share analysis" },
    { "name": "boundary_consequence_ladder", "value": 3, "unit": "steps: warning, mandatory mission amendment, activity halt", "evidence": "pending:first boundary approach and response" },
    { "name": "adaptation_mission_floor_share", "value": 0.1, "unit": "minimum share of mission budget for adaptation", "evidence": "pending:first crowding-out audit" }
  ],
  "metrics": [
    "boundary indicators vs. thresholds (carbon budget, water, biodiversity index)",
    "emissions response per price-review cycle",
    "restoration bond adequacy ratio",
    "share of resource rent capitalised",
    "condition index of registered critical assets",
    "assessment delay-share vs. finding-share of project kills"
  ],
  "sunset": { "review_every_years": 3, "expires": null },
  "dissent": [
    "Boundaries as hard constraints will collide with the floor the first time the cheapest route to floor delivery crosses one; this law resolves that collision in favour of the boundary, and that ordering is a value choice that no evidence can settle.",
    "The consequence ladder is only as honest as its indicators; a captured statistics office can soften a boundary into a curve, and every downstream 'automatic' trigger becomes advisory wearing a uniform.",
    "One hundred percent restoration bonds will simply be priced in by large extractors and prohibitive for small ones — concentrating extraction rather than reducing it, which may be the exact opposite of what communities hosting extraction want."
  ],
  "open_questions": [
    "Who sets boundary thresholds — the evidence office, a treaty, or referendum?",
    "How are biodiversity indices valued without pricing what should not be priced?",
    "Does ENV9's adaptation floor belong here or in Direction Law's mission allocation?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: published boundaries as mission constraints with consequence ladder, upstream carbon pricing, royalties with full restoration bonds, Hartwick depletion rule, critical natural assets in the commons registry, time-boxed cumulative assessment, standing and structural remedies, environmental crimes, adaptation as standing mission, commons day-one for funded results, dashboard indicators." }
  ]
}
```

---

## 1. Constraint, not stakeholder

The mission system optimises what it can measure; the biosphere does not negotiate and does not appear at hearings. This law's move is to convert ecological limits into **published numbers with automatic consequences**, so that no mission, no budget and no urgency can vote around them — only amend them in the open.

### ENV1 — Published boundaries bind missions

**Claim.** The evidence office publishes national boundary thresholds — carbon budget consistent with the adopted global pathway, water extraction ceilings, biodiversity and land-use indices — with current values quarterly. Crossing a threshold triggers the consequence ladder: (1) public warning and mandatory re-planning of affected missions, (2) mandatory amendment of the mission portfolio, (3) halt of the activities most responsible, as ranked in the registry. Each step is automatic at the threshold; discretion begins only above it.

**Rationale.** Constraints that live in prose get renegotiated; constraints that live in a published number with a trigger get engineered around — which is exactly what we want engineering to do.

**Evidence.** `data:` national accounts vs. published boundary thresholds (quarterly).

**Falsifier.** If a boundary is crossed twice consecutively without the ladder firing, the ladder is decorative and must be rebuilt with automatic triggers.

### ENV2 — Upstream carbon pricing

**Claim.** Carbon is priced upstream per [Tax Law](./Tax_Law.md) TAX5 at no less than `carbon_price_floor`; revenue is assigned to the floor and commons fund. The price path is set against ENV1's carbon budget, reviewed on a published cycle with the review's inputs on the ledger.

**Rationale.** Pricing is the cheapest steering instrument that does not require knowing who will invent what; assigning revenue to the floor converts the distributional complaint into the floor's funding.

**Evidence.** `study:` carbon pricing incidence and revenue use (World Bank State and Trends 2023).

**Falsifier.** If emissions do not respond within two price cycles while floor recipients absorb pass-through, the price is mis-specified for its abatement margin.

### ENV3 — Extraction royalties and restoration bonds

**Claim.** Extraction permits require an independently assessed restoration bond of `restoration_bond_share` of assessed cost, escrowed, released against verified restoration. Royalties per TAX4. The licence register (COM2) lists every permit, bond, and restoration status.

**Rationale.** A bond converts the state's monitoring burden into the extractor's incentive; escrow removes the insolvency escape.

**Evidence.** `audit:` bond adequacy vs. actual restoration costs, first cycle.

**Falsifier.** If bonds underfund actual restoration, the formula moves to escrowed-actual costing.

### ENV4 — The depletion rule

**Claim.** A fixed `resource_rent_to_fund_share` of resource rent is capitalised into the sovereign wealth fund ([Currency Law](./Currency_Law.md) CUR8) and is not available to annual budgets. The remainder may fund current programmes. The share is entrenched against ordinary budget procedure.

**Rationale.** Hartwick's rule: exhaustible rent converted to capital is the only intergenerational honesty available to an economy that digs.

**Evidence.** `study:` Hartwick 1977; Norway GPFG practice.

**Falsifier.** If consumption out of resource revenue persists above the rule, the rule must be entrenched beyond annual budget reach.

### ENV5 — Critical natural assets as commons

**Claim.** Aquifers, forests, wetlands, fisheries and keystone habitats of published criticality are registered commons assets (COM2) with named maintainers — typically restoration trusts funded from the commons fund's maintenance share (COM3) — condition-indexed and audited quarterly.

**Rationale.** The commons machinery this blueprint builds for software and data applies unchanged to ecosystems: a registry, a maintainer, a budget, a metric.

**Evidence.** `audit:` registry coverage, maintainer funding, condition indices.

**Falsifier.** If registered assets degrade at the same rate as unregistered ones, registration without funded maintenance is theatre.

### ENV6 — Assessment that cannot be a veto-by-delay

**Claim.** Environmental assessment is independent, cumulative (portfolio and regional, not project-by-project only), published, and **time-boxed** at `assessment_days` days; the clock is a legal deadline, not a target. Assessment conclusions rank project impacts; they may kill a project only by findings, never by expiry.

**Rationale.** Both capture modes must be closed: assessment captured by promoters (rubber stamp) and captured by incumbents (infinite delay). Findings plus a hard clock is the pair.

**Evidence.** `data:` assessment durations, completion vs. abandonment of projects.

**Falsifier.** If projects die by delay rather than findings (delay-share above tolerance), the default flips to approval-with-bonds for the affected class.

### ENV7 — Standing and remedies

**Claim.** Any resident has standing to enforce this law. Remedies rank: cessation, restoration at the violator's cost, structural remedies (CIV9) including receivership of a persistently non-compliant operator, and civil penalties. The reversal-of-burden applies to permitted activities above a published risk threshold.

**Rationale.** Diffuse harm needs many eyes and a court that can change an operator's structure, not just its ledger.

**Evidence.** `audit:` standing cases, remedies ordered, compliance rates.

**Falsifier.** If compliance lags beyond tolerance, receivership — not bigger fines — becomes the default remedy.

### ENV8 — Environmental crimes

**Claim.** Grave environmental harm, unlicensed release of hazardous substances, and falsification of environmental records or the incident ledger are crimes under Criminal Law CRI2, with aggravation for concealment (CRI6).

**Rationale.** The ledger's integrity is the nervous system of the whole framework; poisoning it is not a paperwork matter.

**Evidence.** `audit:` prosecutions under CRI2 environmental limbs, ledger falsification cases.

**Falsifier.** If convictions concentrate on small operators while large incidents settle structurally, the enforcement ladder is inverted and must be re-based on harm volume.

### ENV9 — Adaptation as a standing mission

**Claim.** Adaptation and disaster response constitute a standing mission under Direction Law with at least `adaptation_mission_floor_share` of the mission budget, planned with [Health Care Law](./Health_Care_Law.md) HLT8 and [Defense Law](./Defense_Law.md) DEF11 surge capacity.

**Rationale.** Some boundaries will be crossed before the pricing system finishes its work; adaptation is not defeatism, it is the floor extended into a destabilised climate.

**Evidence.** `data:` disaster response times, adaptation project delivery (ledger).

**Falsifier.** If adaptation crowds out mitigation, the mission budget is mis-split and must be rebalanced by formula.

### ENV10 — Commons day-one for publicly funded results

**Claim.** Mitigation and adaptation results developed with public funds enter the commons on day one under Development Law DEV7: no exclusive licence, worldwide reuse for environmental purposes, with the reciprocity clause (COM5) governing commercial use.

**Rationale.** The cheapest and fastest global good this jurisdiction can produce is knowledge that lowers everyone's abatement cost; enclosing it for local revenue would be the same failure this blueprint exists to prevent, at planetary scale.

**Evidence.** `audit:` share of ENV-funded results under exclusive licence vs. commons.

**Falsifier.** If exclusivity is granted for funded results beyond the tolerance share, the DEV7 default is being routed around and the route is closed.

### ENV11 — Boundary indicators on the dashboard

**Claim.** The boundary indicators are first-class capability-dashboard items (C35), published quarterly with the same audit trail as economic indicators, and every mission plan must state its expected indicator movement.

**Rationale.** What the dashboard shows, the mission system optimises; putting the biosphere on the same screen as output is the whole trick.

**Evidence.** `data:` indicator publication cadence and decision linkage.

**Falsifier.** If boundary indicators appear in no binding decision per cycle, they must be folded into DIR9 kill criteria explicitly.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `restoration_bond_share` | 1 | share of independently assessed restoration cost, escrowed | `pending:` first bond adequacy audit |
| `resource_rent_to_fund_share` | 0.5 | share of resource rent capitalised to sovereign wealth | `pending:` first depletion-cycle review |
| `assessment_days` | 180 | days statutory for full assessment | `pending:` first three assessments vs. delay-share analysis |
| `boundary_consequence_ladder` | 3 | steps: warning, mandatory mission amendment, activity halt | `pending:` first boundary approach and response |
| `adaptation_mission_floor_share` | 0.1 | minimum share of mission budget for adaptation | `pending:` first crowding-out audit |

## Dissent register

- Boundaries will collide with the floor the first time the cheapest floor delivery crosses one; this law orders the boundary above the floor, and that is a value choice no evidence can settle.
- The consequence ladder is only as honest as its indicators; a captured statistics office can soften a boundary into a curve.
- Full restoration bonds get priced in by large extractors and prohibit small ones — concentrating extraction rather than reducing it.

## Open questions

- Who sets boundary thresholds — the evidence office, a treaty, or referendum?
- How are biodiversity indices valued without pricing what should not be priced?
- Does ENV9's adaptation floor belong here or in Direction Law's allocation?
