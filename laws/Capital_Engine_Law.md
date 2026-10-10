# Capital Engine Law (资本动力法)

> Version 0.1.1 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C15–C21 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §2, §2.1, §2.2 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §8
> The engine: property, profit and competition as accelerators, with bounded exclusivity and a priced buyout as the price of the acceleration.

```law-meta
{
  "id": "law.capital-engine",
  "title": "Capital Engine Law (资本动力法)",
  "version": "0.1.1",
  "status": "draft",
  "adopted": null,
  "pillars": ["engine"],
  "summary": "Defines what capital may rely on (property, contract, profit, free entry and exit, a fresh start after honest failure) and what it may not (perpetual or evergreened exclusivity, re-monopolisation through interfaces, unexamined procurement, capture of the rules that govern it). Sets the exclusivity-window tiers per domain, the monopoly test, the buyout formula P = C_realized + alpha * V_expected with its cap and appeal route, and the creator share. Tax design ranks rents before profits so the floor is never funded by taxing the discovery it is trying to accelerate.",
  "articles": [
    { "id": "CAP1", "title": "What capital may rely on", "evidence": ["data:private R&D intensity vs. strength of property and contract enforcement across jurisdictions"], "falsifier": "If weakening property or contract enforcement in a domain raises its innovation rate, CAP1 fails for that domain and it should move to the commons layer directly." },
    { "id": "CAP2", "title": "Exclusivity windows are law", "evidence": ["model:tools/simulate.mjs#scenario=sweep over window length"], "falsifier": "If a domain's window change produces no measurable change in private investment or diffusion speed, the window parameter is inert there and should be removed from that domain's regulation." },
    { "id": "CAP3", "title": "No perpetuity and no evergreening", "evidence": ["study:evergreening strategies in pharmaceutical markets"], "falsifier": "If evergreened products show no price premium over genuinely novel ones, the rule solves a non-problem and should be simplified to a hard expiry date." },
    { "id": "CAP4", "title": "No re-monopolisation through interfaces", "evidence": ["data:interoperability loss events and their price effects"], "falsifier": "If mandatory interoperability in a fast-moving domain measurably slows protocol evolution more than it lowers prices, CAP4 must be relaxed there." },
    { "id": "CAP5", "title": "The monopoly test", "evidence": ["data:markup and entry-barrier calibration against known monopoly cases"], "falsifier": "If the test flags competitive markets or misses durable monopolies, thresholds must be recalibrated or replaced by a structural-entry test." },
    { "id": "CAP6", "title": "Buyout procedure and price", "evidence": ["study:nationalisation and compulsory licensing compensation outcomes"], "falsifier": "If buyouts at the capped formula systematically fail to attract sellers, or cost more than the deadweight loss they remove, alpha or the cap is mis-set." },
    { "id": "CAP7", "title": "Creator share", "evidence": ["pending:creator-share effort response measurement in pilot — the model's creator-share sweep puts the in-cap optimum at the cap, but only under an ASSUMED effort response that has never been measured", "model:tools/simulate.mjs#sweep=beta"], "falsifier": "If creator shares above the beta cap do not increase subsequent invention rates, beta should fall to the level keeping inventors at parity with a salaried career." },
    { "id": "CAP8", "title": "Pre-commitment discipline", "evidence": ["study:advance market commitment overpayment cases"], "falsifier": "If commitments with clawbacks still systematically overpay versus prizes, the instrument must be capped or replaced." },
    { "id": "CAP9", "title": "The state as investor", "evidence": ["data:sovereign wealth fund governance and conflict incidents"], "falsifier": "If sovereign holdings do not distort rule-making less than controlling stakes would, the passive-only rule has failed and full divestment from affected sectors is required." },
    { "id": "CAP10", "title": "Competition beyond price", "evidence": ["study:killer acquisitions and structural remedies"], "falsifier": "If structural separation and interoperability remedies raise costs more than they lower prices, enforcement must return to price remedies only." },
    { "id": "CAP11", "title": "Mobility, non-retroactivity, erosion control", "evidence": ["data:capital flight response to expropriation vs. rule-based buyouts"], "falsifier": "If rule-based buyouts still trigger net outflows exceeding the value released, compensation or notice terms are insufficient." },
    { "id": "CAP12", "title": "Honest failure and the fresh start", "evidence": ["study:Fan & White 1994 personal bankruptcy and entrepreneurship; Armour & Cumbride 2008 (Bankruptcy Law and Entrepreneurship)"], "falsifier": "If generous discharge raises reckless failure without raising retry rates, the fresh start must be conditioned on honest reporting." },
    { "id": "CAP13", "title": "Open procurement", "evidence": ["audit:procurement register — unit costs, tender counts, sole-source share"], "falsifier": "If open tendering raises cost or delay without reducing corruption, thresholds and set-asides must be re-derived." },
    { "id": "CAP14", "title": "Cooperative and community capital", "evidence": ["pending:pilot data on cooperative share of mission contracts and their delivery"], "falsifier": "If cooperatives systematically underdeliver on mission contracts, equal standing must not extend to preferential access." },
    { "id": "CAP15", "title": "Rents before profits", "evidence": ["data:rent shares of GDP (land, resources, spectrum, carbon, data) vs. floor cost"], "falsifier": "If shifting the floor's funding from profits to rents reduces investment without improving floor security, the ranking must be re-derived with evidence." }
  ],
  "parameters": [
    { "name": "W_data", "value": 2, "unit": "years", "evidence": "pending:domain-pilot data products" },
    { "name": "W_software", "value": 3, "unit": "years", "evidence": "pending:domain-pilot software and protocols" },
    { "name": "W_machinery", "value": 5, "unit": "years", "evidence": "pending:domain-pilot machinery and materials" },
    { "name": "W_pharma", "value": 7, "unit": "years (+2 for a genuine new mechanism)", "evidence": "pending:domain-pilot pharmaceuticals and devices" },
    { "name": "W_culture", "value": 10, "unit": "years, non-renewable", "evidence": "pending:domain-pilot cultural works" },
    { "name": "alpha_buyout_share", "value": 0.2, "unit": "share of V_expected (range 0.10-0.30)", "evidence": "pending:buyout panel calibration" },
    { "name": "beta_creator_cap", "value": 0.1, "unit": "share of V_realized", "evidence": "pending:creator-share response measurement in pilot" },
    { "name": "buyout_cap_multiple", "value": 5, "unit": "multiple of C_realized", "evidence": "pending:first five buyout appeals" },
    { "name": "monopoly_share_threshold", "value": 0.5, "unit": "share of defined market", "evidence": "data:markup calibration against known monopoly cases" },
    { "name": "monopoly_markup_threshold", "value": 1.5, "unit": "ratio to competitive benchmark", "evidence": "data:markup calibration against known monopoly cases" },
    { "name": "monopoly_persistence_years", "value": 3, "unit": "consecutive years", "evidence": "pending:pilot market monitoring" },
    { "name": "sole_source_approval_threshold", "value": 1000000, "unit": "accounting units", "evidence": "pending:procurement register analysis" }
  ],
  "metrics": [
    "private research effort per domain, before and after window changes",
    "diffusion half-life per domain, before and after window changes",
    "share of output accruing to firms above the monopoly-test threshold",
    "buyout count, price vs. formula, appeal rate, appeal outcomes",
    "procurement: tender count per contract, sole-source share, unit-cost trend",
    "new-firm entry rate and retry rate after insolvency",
    "cooperative and community share of mission contracts"
  ],
  "sunset": { "review_every_years": 4, "expires": null },
  "dissent": [
    "The window tiers are the most contestable numbers in the whole framework: they are written here as law-like constants but are in fact guesses. A critic who shows that the pharmaceutical tier is too short destroys the engine in the most capital-intensive domain, and the draft has no answer except measurement.",
    "A buyout formula published in advance is an invitation to game V_expected; the valuation panel is the single point of failure this law depends on, and panels are exactly where capture concentrates."
  ],
  "open_questions": [
    "Should windows be auctioned (firms choose length, paying a declining rebate) instead of fixed by law?",
    "How is V_expected modelled without the model becoming the loot?",
    "Do capital-gains-as-income and rent-first taxation interact badly with the sovereign fund's returns?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: windows, monopoly test, buyout formula and cap, creator share, pre-commitment discipline, state-as-investor rules, competition beyond price, mobility, fresh start, open procurement, rents-before-profits." },
    { "version": "0.1.1", "date": "2026-10-10", "change": "Evidence upgrade: citable literature replaces descriptive pointers; CAP7 now cites the simulation's creator-share sweep with its pending anchor kept (W008 reduction)." }
  ]
}
```

---

## 1. Reliance

### CAP1 — What capital may rely on

**Claim.** Property in the products of effort, enforceable contract, the profit from serving others, free entry into any market, and free exit from the jurisdiction are guaranteed. No licence, quota or registration may be required to start an lawful enterprise.

**Rationale.** Reward is the cheapest motor discovered for other people's effort; reliability of the rules is what makes long-horizon effort rational.

**Evidence.** `data:` private R&D intensity vs. strength of property and contract enforcement across jurisdictions.

**Falsifier.** If weakening property or contract enforcement in a domain raises its innovation rate, CAP1 fails for that domain and it should move to the commons layer directly.

### CAP2 — Exclusivity windows are law

**Claim.** Every exclusivity right is a window set by this law per domain (`W_data` 2, `W_software` 3, `W_machinery` 5, `W_pharma` 7 plus 2 for a genuine new mechanism, `W_culture` 10), running from first commercial deployment or first publication, whichever is earlier. At expiry the capability passes to the commons automatically, without application.

**Rationale.** The window is the single parameter where acceleration and rent are traded off; a parameter that important is set by measured law, not by licence negotiation.

**Evidence.** `model:` tools/simulate.mjs#scenario=sweep over window length.

**Falsifier.** If a domain's window change produces no measurable change in private investment or diffusion speed, the window parameter is inert there and should be removed from that domain's regulation.

### CAP3 — No perpetuity and no evergreening

**Claim.** No exclusivity is perpetual or renewable against the same capability. A new window requires a genuinely new mechanism or a materially new capability, adjudicated by the competition authority, with reasons published. Combination products and formulation changes do not qualify.

**Rationale.** Evergreening converts a bounded bargain into a permanent toll while appearing to honour it.

**Evidence.** `study:` evergreening strategies in pharmaceutical markets.

**Falsifier.** If evergreened products show no price premium over genuinely novel ones, the rule solves a non-problem and should be simplified to a hard expiry date.

### CAP4 — No re-monopolisation through interfaces

**Claim.** After expiry (and during the window for essential interfaces), the holder must provide interoperability: documented interfaces, exportable data formats, and no technical or contractual measure that prevents a third party from building on the released capability. Interface control cannot resurrect an expired exclusivity.

**Rationale.** Exclusivity that survives its own expiry through lock-in is exclusivity without a clock.

**Evidence.** `data:` interoperability loss events and their price effects.

**Falsifier.** If mandatory interoperability in a fast-moving domain measurably slows protocol evolution more than it lowers prices, CAP4 must be relaxed there.

---

## 2. The monopoly test and the buyout

### CAP5 — The monopoly test

**Claim.** A capability is monopoly-affected when its holder has ≥ **50%** of a defined market, an entry-barrier index above the published threshold, and a price markup ≥ **1.5×** the competitive benchmark, all persisting ≥ **3** consecutive years. The definition of the relevant market, the benchmark and the barrier index are published methods, not case-by-case judgments.

**Rationale.** A test whose inputs are judgments is a lobby; a test whose inputs are published series is an instrument.

**Evidence.** `data:` markup and entry-barrier calibration against known monopoly cases.

**Falsifier.** If the test flags competitive markets or misses durable monopolies, thresholds must be recalibrated or replaced by a structural-entry test.

### CAP6 — Buyout procedure and price

**Claim.** On a positive monopoly test, the nation may buy out the capability at `P = C_realized + α · V_expected`, with `C_realized` an independently audited cost including failed programmes, `α` set in the range **0.10–0.30**, and the total capped at **5×** `C_realized`. A rotating valuation panel publishes its method and numbers; the holder may appeal to the constitutional bench within 90 days; the buyout and its method are published in the ledger.

**Rationale.** The seed text gave the nation the right to nationalise and reprice; procedure, formula and appeal are what keep that right from being expropriation — and from destroying the engine it exists to correct.

**Evidence.** `study:` nationalisation and compulsory licensing compensation outcomes.

**Falsifier.** If buyouts at the capped formula systematically fail to attract sellers, or cost more than the deadweight loss they remove, α or the cap is mis-set.

### CAP7 — Creator share

**Claim.** After any release (expiry or buyout), the named creators receive `β · V_realized` over `T` years, `β` capped at **0.10**, allocated by recorded contribution weights, payable regardless of continued employment, with a published dispute route. Investors are compensated through the buyout price, not through the creator share.

**Rationale.** Inventors must not be punished for having served the public; but the share is a floor under invention, not a perpetual levy on the commons.

**Evidence.** `pending:` creator-share effort response measurement in pilot — the model's [creator-share sweep](../docs/SIMULATION.md) puts the in-cap optimum at the cap, but only under an ASSUMED effort response (η_β) that has never been measured; the sweep's stress case (β = 0.20) beats every in-cap setting, so the cap is defended by the falsifier, not by the model. `model:` tools/simulate.mjs#sweep=beta.

**Falsifier.** If creator shares above the β cap do not increase subsequent invention rates, β should fall to the level keeping inventors at parity with a salaried career.

### CAP8 — Pre-commitment discipline

**Claim.** Advance purchase commitments, prizes and guaranteed volumes must state a target price, a delivery date, a verification method and a clawback. No commitment may exceed **1.5×** its target price without elected-chamber approval; every instrument is published before it is signed; sole-source awards above the threshold require the same approval.

**Rationale.** Certainty is the state's cheapest product; overpayment is its most common defect.

**Evidence.** `study:` advance market commitment overpayment cases.

**Falsifier.** If commitments with clawbacks still systematically overpay versus prizes, the instrument must be capped or replaced.

---

## 3. The state in the market

### CAP9 — The state as investor

**Claim.** The sovereign fund holds passive, diversified stakes only. It may not hold a controlling interest in any entity subject to this law's monopoly test, in any standards body, or in any valuer, auditor or insurer of record. Its holdings are published quarterly.

**Rationale.** A state that both sets the rules and owns the players has no referee left.

**Evidence.** `data:` sovereign wealth fund governance and conflict incidents.

**Falsifier.** If sovereign holdings do not distort rule-making less than controlling stakes would, the passive-only rule has failed and full divestment from affected sectors is required.

### CAP10 — Competition beyond price

**Claim.** Merger review includes a public-interest test: an acquisition that removes a plausible future competitor, forecloses an input, or concentrates data is reviewable even at low current market share. Remedies available include structural separation, mandated interoperability and data portability, not only fines.

**Rationale.** By the time a price test fires, the entry barriers are already built.

**Evidence.** `study:` killer acquisitions and structural remedies.

**Falsifier.** If structural separation and interoperability remedies raise costs more than they lower prices, enforcement must return to price remedies only.

### CAP11 — Mobility, non-retroactivity, erosion control

**Claim.** Capital and persons may leave freely; no rule applies retroactively; rules become effective only after a published notice period. Transfer pricing, treaty shopping and intra-group licensing whose main effect is to strip the funding base (Constitution C30) are subject to published, non-retroactive anti-erosion rules.

**Rationale.** Coercion traps capital once and deters it for a generation; published rules attract it repeatedly.

**Evidence.** `data:` capital flight response to expropriation vs. rule-based buyouts.

**Falsifier.** If rule-based buyouts still trigger net outflows exceeding the value released, compensation or notice terms are insufficient.

### CAP12 — Honest failure and the fresh start

**Claim.** An honest insolvency discharges personal liability on a published timetable, protects a wage floor during wind-down, and bars criminal liability for commercial failure. Fraud, concealment of debts and asset-stripping remain criminal. Founders of failed honest ventures keep floor entitlements and may start again immediately.

**Rationale.** A society that punishes honest failure gets fewer attempts and more concealment; with a skewed distribution of outcomes, attempts are most of the result.

**Evidence.** `study:` Fan & White 1994 personal bankruptcy and entrepreneurship; Armour & Cumbride 2008 (Bankruptcy Law and Entrepreneurship).

**Falsifier.** If generous discharge raises reckless failure without raising retry rates, the fresh start must be conditioned on honest reporting.

### CAP13 — Open procurement

**Claim.** Public procurement above a published floor runs through open tendering with the bid register, unit costs and award reasons published. Cost-plus contracts require a cap. A defined share of contract value is reserved for small entities, cooperatives and community bodies.

**Rationale.** Procurement is where a steering state's money meets its friends; only publication makes the meeting auditable.

**Evidence.** `audit:` procurement register — unit costs, tender counts, sole-source share.

**Falsifier.** If open tendering raises cost or delay without reducing corruption, thresholds and set-asides must be re-derived.

### CAP14 — Cooperative and community capital

**Claim.** Cooperatives, mutuals, community land trusts and employee-owned firms have identical legal standing, identical access to procurement and to mission pre-commitments, and a published route to capital markets that does not require converting to investor ownership.

**Rationale.** If only one ownership form can attract capital, the engine has one cylinder.

**Evidence.** `pending:` pilot data on cooperative share of mission contracts and their delivery.

**Falsifier.** If cooperatives systematically underdeliver on mission contracts, equal standing must not extend to preferential access.

### CAP15 — Rents before profits

**Claim.** Tax design ranks bases: rents (land value, resources, spectrum, carbon, publicly created data) first; consumption and inheritance second; returns to effort and risk last. Capital gains above a threshold are treated as income. No tax preference may reward holding over building.

**Rationale.** Taxing the discovery the nation is trying to accelerate is self-defeating; taxing the scarcity nobody created is not.

**Evidence.** `data:` rent shares of GDP (land, resources, spectrum, carbon, data) vs. floor cost.

**Falsifier.** If shifting the floor's funding from profits to rents reduces investment without improving floor security, the ranking must be re-derived with evidence.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `W_data` | 2 | years | `pending:` domain-pilot data products |
| `W_software` | 3 | years | `pending:` domain-pilot software and protocols |
| `W_machinery` | 5 | years | `pending:` domain-pilot machinery and materials |
| `W_pharma` | 7 | years (+2 for a genuine new mechanism) | `pending:` domain-pilot pharmaceuticals and devices |
| `W_culture` | 10 | years, non-renewable | `pending:` domain-pilot cultural works |
| `alpha_buyout_share` | 0.2 | share of V_expected (range 0.10–0.30) | `pending:` buyout panel calibration |
| `beta_creator_cap` | 0.1 | share of V_realized | `pending:` creator-share response measurement in pilot |
| `buyout_cap_multiple` | 5 | multiple of C_realized | `pending:` first five buyout appeals |
| `monopoly_share_threshold` | 0.5 | share of defined market | `data:` markup calibration against known monopoly cases |
| `monopoly_markup_threshold` | 1.5 | ratio to competitive benchmark | `data:` markup calibration against known monopoly cases |
| `monopoly_persistence_years` | 3 | consecutive years | `pending:` pilot market monitoring |
| `sole_source_approval_threshold` | 1,000,000 | accounting units | `pending:` procurement register analysis |

**These are the framework's most contestable numbers.** Each is an assumption to be measured in a pilot; a window or share without a current evidence pointer reverts to the conservative default at review (GOVERNANCE.md §10).

## Metrics

- private research effort per domain, before and after window changes
- diffusion half-life per domain, before and after window changes
- share of output accruing to firms above the monopoly-test threshold
- buyout count, price vs. formula, appeal rate, appeal outcomes
- procurement: tender count per contract, sole-source share, unit-cost trend
- new-firm entry rate and retry rate after insolvency
- cooperative and community share of mission contracts

## Dissent register

- The window tiers are the most contestable numbers in the whole framework: they are written here as law-like constants but are in fact guesses. A critic who shows that the pharmaceutical tier is too short destroys the engine in the most capital-intensive domain, and the draft has no answer except measurement.
- A buyout formula published in advance is an invitation to game `V_expected`; the valuation panel is the single point of failure this law depends on, and panels are exactly where capture concentrates.

## Open questions

- Should windows be auctioned (firms choose length, paying a declining rebate) instead of fixed by law?
- How is `V_expected` modelled without the model becoming the loot?
- Do capital-gains-as-income and rent-first taxation interact badly with the sovereign fund's returns?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft: windows, monopoly test, buyout formula and cap, creator share, pre-commitment discipline, state-as-investor rules, competition beyond price, mobility, fresh start, open procurement, rents-before-profits. |
| 0.1.1 | 2026-10-10 | Evidence upgrade: citable literature replaces descriptive pointers; CAP7 now cites the simulation's creator-share sweep with its pending anchor kept (W008 reduction). |
