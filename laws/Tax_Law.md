# Tax Law (税法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C30, C27, C44 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §2.3, §4 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §9
> The fuel line: where public money comes from — rents before labour, everything published, nothing hidden in a fee.

```law-meta
{
  "id": "law.tax",
  "title": "Tax Law (税法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["floor", "engine"],
  "summary": "Codifies every source of public revenue in one law: the ranking that taxes rents before effort, the land value tax with its published register and appeal route, resource and spectrum rents auctioned and Royaltied on rent not gross, upstream carbon pricing feeding the floor, the data rent, a broad consumption tax with essentials zero-rated, inheritance with a high exemption and lifetime accounting, a flat income tax aligned to the floor allowance, independent assessment with sortition appeal, a published general anti-avoidance rule, and the rule that every tax relief is counted and published as spending.",
  "articles": [
    { "id": "TAX1", "title": "One law, no hidden levies", "evidence": ["audit:count of extra-statutory fees and charges eliminated"], "falsifier": "If extra-statutory charges reappear in agency rules faster than this law abolishes them, the consolidation has failed and the design must move the fee power into statute explicitly." },
    { "id": "TAX2", "title": "The ranking made operative", "evidence": ["study:optimal taxation of economic rents (e.g., Arnott & Stiglitz 1979 on aggregate land rents and public goods)"], "falsifier": "If rent-based sources cannot fund the floor at the stated parameters even with full collection, the ranking must be reordered honestly rather than patched with silent deficits." },
    { "id": "TAX3", "title": "Land value tax", "evidence": ["study:land value tax incidence and elasticity evidence (Arnott & Stiglitz 1979; Mirrlees Review 2011)"], "falsifier": "If the annual charge on unimproved value measurably accelerates land abandonment or fails to track market rents, the assessment method or the rate is wrong for that class." },
    { "id": "TAX4", "title": "Resource and spectrum rents", "evidence": ["audit:every licence, royalty and realised rent published"], "falsifier": "If auction-plus-royalty systematically under-collects relative to realised rents reported in company accounts, the royalty base must move from gross to audited rent." },
    { "id": "TAX5", "title": "Carbon and pollution pricing", "evidence": ["study:upstream carbon pricing experience (e.g., World Bank State and Trends of Carbon Pricing 2023)"], "falsifier": "If the border adjustment provokes retaliation that reduces total emissions coverage, the adjustment must be narrowed to goods with verifiable intensity data." },
    { "id": "TAX6", "title": "The data rent", "evidence": ["data:value concentration of commercial uses built on public data (ledger, first cycle)"], "falsifier": "If the at-cost licence fee for large commercial users costs more to administer than it collects, the threshold must rise and small users go free." },
    { "id": "TAX7", "title": "Consumption and inheritance", "evidence": ["study:behavioural response to inheritance taxation (e.g., estate tax elasticity literature, Kopczuk 2013 survey)"], "falsifier": "If the inheritance tax with lifetime accounting drives genuine emigration of wealth at rates above the parameter, the exemption is mis-set — not the principle." },
    { "id": "TAX8", "title": "Income tax and the floor allowance", "evidence": ["study:labour supply elasticity at extensive vs. intensive margin (e.g., Saez, Slemrod & Giertz 2012)"], "falsifier": "If the effective marginal rate faced by floor recipients crossing into work exceeds 60% in any band, the withdrawal design must be rebuilt before rates are touched." },
    { "id": "TAX9", "title": "Assessment and appeal", "evidence": ["audit:appeal outcomes, processing time, error correction rate"], "falsifier": "If appeals succeed more than a third of the time for a given assessor or class, the assessment process — not the taxpayers — is the fault line." },
    { "id": "TAX10", "title": "Avoidance and erosion", "evidence": ["audit:country-by-country reporting vs. declared domestic profit"], "falsifier": "If the GAAR loses more legitimate transactions than it catches abusive ones (measured by appeal reversals), its purpose test is too vague and must be re-specified." },
    { "id": "TAX11", "title": "Tax expenditures are spending", "evidence": ["audit:annual tax expenditure accounts vs. budget programmes"], "falsifier": "If published reliefs survive their sunset review at over 80% regardless of evidence, publication has become ritual and the default must flip to automatic expiry." }
  ],
  "parameters": [
    { "name": "land_tax_rate", "value": 0.04, "unit": "share of unimproved land value per year", "evidence": "pending:first full register valuation cycle" },
    { "name": "resource_royalty_rate", "value": 0.5, "unit": "share of audited resource rent", "evidence": "pending:first auction cycle comparisons" },
    { "name": "carbon_price_floor", "value": 40, "unit": "accounting units per tonne CO2e", "evidence": "pending:first ENV2 review against boundary targets" },
    { "name": "vat_rate", "value": 0.15, "unit": "share of taxable consumption", "evidence": "pending:first revenue-adequacy review" },
    { "name": "inheritance_exemption", "value": 20, "unit": "median annual incomes, lifetime per recipient", "evidence": "pending:first decile-flow analysis" },
    { "name": "income_tax_rate", "value": 0.30, "unit": "flat share above allowance", "evidence": "pending:revenue-adequacy and incidence modelling with FLR parameters" },
    { "name": "income_allowance_floor_multiple", "value": 1.5, "unit": "floor level, annual", "evidence": "pending:effective-marginal-rate audit with Social Floor Law" }
  ],
  "metrics": [
    "rent share of total public revenue",
    "effective marginal rate at every income decile crossing the floor",
    "tax gap: declared vs. estimated true base",
    "tax expenditure total as share of budget",
    "appeal volume, success rate and processing time"
  ],
  "sunset": { "review_every_years": 3, "expires": null },
  "dissent": [
    "A 4% land charge is a confiscation of capitalized expectations for anyone who bought at pre-announcement prices; Transition Law TRA2 protects paper rights poorly, and this law's compensation answer (transition relief) is the most likely place a rentier revival hides.",
    "Flat income taxation above a generous allowance is regressive at the top by design; the blueprint bets the progressive work is done by rent taxation and the floor, which only holds if rent collection never erodes — a political assumption, not a mechanical one.",
    "The data rent article may be unenforceable against platforms that infer the same signals from private exhaust instead of licensed public data."
  ],
  "open_questions": [
    "Should land assessments be continuous (index-based) or periodic (census-based), given appeal volume?",
    "Is a second, higher income band politically unavoidable even if economically redundant?",
    "How is the carbon border adjustment reconciled with COM5 reciprocity schedules without double-charging?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: consolidation rule, rent-first ranking, land value tax, resource and spectrum rents, carbon pricing, data rent, consumption and inheritance, income tax with floor-aligned allowance, assessment and appeal, GAAR, tax expenditure publication." }
  ]
}
```

---

## 1. Why this law exists

The Constitution says the floor is funded from rents, effort is never the first thing taxed, and every transfer is published (C30, C44). This law is the only place revenue may be created. If a charge is not in this law — or in a law that explicitly amends this one — it does not exist.

### TAX1 — One law, no hidden levies

**Claim.** No agency, mission board or public body may raise revenue by fee, charge, levy, fine-quota or surcharge except as provided by this law. Every existing extra-statutory charge is either codified here or abolished on commencement.

**Rationale.** Hidden charges are taxation without a vote; they also rot the C34 dashboards by moving public money off-ledger.

**Evidence.** `audit:` count of extra-statutory fees and charges eliminated.

**Falsifier.** If extra-statutory charges reappear in agency rules faster than this law abolishes them, consolidation has failed and the fee power must be moved into statute explicitly.

**Sunset.** Reviewed with the whole law every 3 years (§ sunset).

### TAX2 — The ranking made operative

**Claim.** Public revenue is raised in this order of preference: (1) land and resource rents (TAX3–TAX4), (2) externality pricing (TAX5), (3) the data rent (TAX6), (4) consumption and inheritance (TAX7), (5) income above the floor allowance (TAX8). Each layer is charged only to the extent the layers above it fall short of the funded budget, and the shortfall is published.

**Rationale.** The framework's promise is that the engine is fed before it is taxed: rents first means the cost of the floor falls on captured value, not on effort or discovery.

**Evidence.** `study:` optimal taxation of economic rents (Arnott & Stiglitz 1979; Mirrlees Review 2011).

**Falsifier.** If rent-based sources cannot fund the floor at the stated parameters even with full collection, the ranking must be reordered honestly rather than patched with silent deficits.

### TAX3 — Land value tax

**Claim.** An annual charge of `land_tax_rate` on the unimproved value of each parcel is assessed by the independent valuation office against a public register of valuations and ownership. Improvements are never taxed. Valuation rolls, methods and appeals are public.

**Rationale.** Land value is the purest rent: it was not created by its owner, it cannot be hidden, and taxing it does not discourage supply. Arnott–Stiglitz aggregation links it directly to public investment.

**Evidence.** `study:` land value tax incidence (Arnott & Stiglitz 1979; Mirrlees Review 2011).

**Falsifier.** If the charge measurably accelerates abandonment of used land or decouples from market rents, assessment or rate is wrong for that class.

### TAX4 — Resource and spectrum rents

**Claim.** Non-renewable extraction rights and spectrum use are allocated by open auction and carry a royalty of `resource_royalty_rate` on **audited rent** (not gross revenue). Every licence, bid, royalty payment and realised rent is published.

**Rationale.** Royalties on gross revenue punish thin-margin operators and reward vertical integration; royalties on rent are neutral to effort and hard to game.

**Evidence.** `audit:` every licence, royalty and realised rent published.

**Falsifier.** If auction-plus-royalty systematically under-collects against company-account rents, the base moves from gross to audited rent.

### TAX5 — Carbon and pollution pricing

**Claim.** Greenhouse gases and listed pollutants are priced upstream (at extraction, import or first sale) at no less than `carbon_price_floor`, rising on a published schedule set by [Environment Law](./Environment_Law.md) ENV1 boundaries. Revenue is assigned to the floor and commons fund, not to general budget. Imports from jurisdictions without comparable pricing pay a border adjustment at the verified intensity rate.

**Rationale.** An externality price is not a revenue device first — it is a steering signal (C11). Upstream collection minimises touchpoints; border adjustment prevents leakage without overriding reciprocity.

**Evidence.** `study:` upstream carbon pricing experience (World Bank State and Trends of Carbon Pricing 2023).

**Falsifier.** If the border adjustment provokes retaliation reducing total emissions coverage, it narrows to goods with verifiable intensity data.

### TAX6 — The data rent

**Claim.** Commercial use of commons data above a published revenue threshold pays an at-cost licence fee set by [Commons Law](./Commons_Law.md) COM8; below the threshold use is free. The fee is revenue-neutral to the commons (maintenance plus margin), not a profit tax.

**Rationale.** Public data is a commons asset; charging cost-recovery fees for large commercial extractors captures a slice of the value built on public infrastructure without encumbering small users.

**Evidence.** `data:` value concentration of commercial uses built on public data (ledger, first cycle).

**Falsifier.** If the fee costs more to administer than it collects, the threshold rises and small users go free.

### TAX7 — Consumption and inheritance

**Claim.** Consumption is taxed at `vat_rate` with a published zero-rate list covering the floor basket (FLR3 indexation inputs). Gifts and inheritances are taxed to the **recipient** above a lifetime exemption of `inheritance_exemption` median annual incomes, with annual spousal and child allowances and lifetime gift accounting.

**Rationale.** Taxing recipients rather than estates removes the double-tax objection and prices dynastic concentration directly; zero-rating the floor basket keeps consumption taxation compatible with the floor.

**Evidence.** `study:` behavioural response to inheritance taxation (Kopczuk 2013 survey).

**Falsifier.** If genuine emigration of wealth exceeds the parameter, the exemption — not the principle — is mis-set.

### TAX8 — Income tax and the floor allowance

**Claim.** Income is taxed at a flat `income_tax_rate` above an allowance of `income_allowance_floor_multiple` × floor. The combined effective marginal rate as floor benefits withdraw — from any source — may not exceed the published cap in any band; the interaction table is published annually.

**Rationale.** With rent taxation carrying the progressive load and the floor carrying the distributional floor, income tax exists for residual revenue, and its worst feature (participation penalties at the bottom) is a design error, not a parameter.

**Evidence.** `study:` labour supply elasticity, extensive vs. intensive margin (Saez, Slemrod & Giertz 2012).

**Falsifier.** If any band's effective marginal rate exceeds 60%, the withdrawal design is rebuilt before rates are touched.

### TAX9 — Assessment and appeal

**Claim.** Assessment is performed by the independent statistics and valuation office (C36), not by the collecting body. Every assessment is appealable first to the office, then to a sortition panel (CIV8) with a statutory decision deadline. Errors are corrected with interest in both directions.

**Rationale.** The power to assess is the power to harass; separating assessment from collection, and putting a jury between them, is the cheapest known discipline.

**Evidence.** `audit:` appeal outcomes, processing time, error correction rate.

**Falsifier.** If appeals succeed more than a third of the time for any assessor or class, the process — not the taxpayers — is the fault line.

### TAX10 — Avoidance and erosion

**Claim.** A published general anti-avoidance rule (GAAR) voids arrangements whose main purpose is obtaining a tax advantage, applied by the bench with a purpose test. Entities operating cross-border file country-by-country reports, public in aggregate. Nothing in this law applies retroactively (CAP11).

**Rationale.** Detailed rules race against engineers; a purpose test plus published CbC reporting shifts the race to one the state can win with juries rather than drafters.

**Evidence.** `audit:` country-by-country reporting vs. declared domestic profit.

**Falsifier.** If the GAAR loses more legitimate transactions than it catches (appeal reversals), its purpose test is too vague and must be re-specified.

### TAX11 — Tax expenditures are spending

**Claim.** Every relief, exemption, allowance and credit is scored, published and sunsetted as a spending programme: same ledger line, same Five Lines rule, same review clock. New reliefs may not be created outside budget law.

**Rationale.** A tax break is a transfer to whoever qualifies; hiding it in the tax code evades the very scrutiny this blueprint exists to impose.

**Evidence.** `audit:` annual tax expenditure accounts vs. budget programmes.

**Falsifier.** If published reliefs survive review at over 80% regardless of evidence, the default flips to automatic expiry.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `land_tax_rate` | 0.04 | share of unimproved land value per year | `pending:` first full register valuation cycle |
| `resource_royalty_rate` | 0.5 | share of audited resource rent | `pending:` first auction cycle comparisons |
| `carbon_price_floor` | 40 | accounting units per tonne CO2e | `pending:` first ENV2 review against boundary targets |
| `vat_rate` | 0.15 | share of taxable consumption | `pending:` first revenue-adequacy review |
| `inheritance_exemption` | 20 | median annual incomes, lifetime per recipient | `pending:` first decile-flow analysis |
| `income_tax_rate` | 0.30 | flat share above allowance | `pending:` revenue-adequacy and incidence modelling with FLR parameters |
| `income_allowance_floor_multiple` | 1.5 | floor level, annual | `pending:` effective-marginal-rate audit with Social Floor Law |

## Dissent register

- A 4% land charge confiscates capitalised expectations for anyone who bought at pre-announcement prices; Transition Law relief is the most likely place a rentier revival hides.
- Flat income taxation above a generous allowance is regressive at the top by design; the bet is that rent taxation and the floor do the progressive work — a political assumption, not a mechanical one.
- The data rent may be unenforceable against platforms inferring equivalent signals from private exhaust.

## Open questions

- Continuous (index-based) or periodic (census-based) land assessment, given appeal volume?
- Is a second, higher income band politically unavoidable even if economically redundant?
- How is the carbon border adjustment reconciled with COM5 reciprocity without double-charging?
