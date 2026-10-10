# Transition Law (过渡法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C43, C46, C47 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §6 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §6
> The bridge: how a jurisdiction gets from here to the framework without expropriation, chaos, or a quiet betrayal of either side.

```law-meta
{
  "id": "law.transition",
  "title": "Transition Law (过渡法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["governance"],
  "summary": "Governs the migration path: the framework binds only through this law's published schedule; existing rights, contracts and pensions continue untouched; existing exclusivities enter the registry immediately but receive no renewals beyond their current terms, with buyout available from day one; the floor phases in cash-first with published deadlines; the mission ledger starts empty and nothing is grandfathered without passing the mission test; public employees transfer with status quo plus; prior law survives three years on a mandatory review list; and every pilot remains reversible by referendum with published reversion terms for transferred assets.",
  "articles": [
    { "id": "TRA1", "title": "The schedule is the authority", "evidence": ["audit:milestone delivery vs. published schedule"], "falsifier": "If two consecutive milestones slip by more than half a cycle, the schedule is fiction and must be re-legislated openly rather than re-interpreted quietly." },
    { "id": "TRA2", "title": "Existing rights continue", "evidence": ["data:pension and contract continuity audits, first two years"], "falsifier": "If continuity is breached for any class of acquired rights, the breach is compensable at full economic value with interest — and the article is failing." },
    { "id": "TRA3", "title": "Existing exclusivity: clock, not confiscation", "evidence": ["data:registry coverage of legacy rights; renewals refused vs. sought"], "falsifier": "If legacy terms are quietly extended by administrative practice, the no-renewal rule has been captured and every extension is void with a public audit." },
    { "id": "TRA4", "title": "Buyout from day one", "evidence": ["data:buyout offers, acceptances, and post-conversion diffusion (ledger)"], "falsifier": "If buyouts in the transition period systematically cost more than the value of accelerated diffusion they purchase, the α in the formula is mis-set for legacy assets and must be re-based." },
    { "id": "TRA5", "title": "The floor phases in, cash first", "evidence": ["study:cash-transfer programme ramp-up times (e.g., Haushofer & Shapiro 2016 delivery timelines)"], "falsifier": "If any service phase misses its deadline by a full cycle, the phase order is wrong for that service and it moves ahead of cash in the next revision." },
    { "id": "TRA6", "title": "The mission ledger starts empty", "evidence": ["audit:grandfathering requests vs. tests passed"], "falsifier": "If more than a trivial share of the initial mission portfolio is composed of grandfathered programmes, DIR3's test was decorative and the entire first portfolio is re-run." },
    { "id": "TRA7", "title": "People transfer with status quo plus", "evidence": ["data:workforce transition metrics, voluntary exit rates, retraining completion"], "falsifier": "If voluntary exit exceeds the projection band by a wide margin, the terms are inadequate and are renegotiated before any further phase begins." },
    { "id": "TRA8", "title": "Legal continuity, time-boxed", "evidence": ["audit:review list progress, conflicts found and resolved"], "falsifier": "If the three-year box ends with material conflicts unresolved, the conflicts default to the more permissive rule with a published list — not to silence." },
    { "id": "TRA9", "title": "Reversibility", "evidence": ["data:pilot reversions, asset reversion terms honoured, data export completeness"], "falsifier": "If a single reversion is blocked or degraded by transfer terms, reversion terms for all subsequent pilots are hardened to constitutional grade." },
    { "id": "TRA10", "title": "No transition rent", "evidence": ["audit:windfall gains register, concentration of transition-era contracts"], "falsifier": "If transition contracts concentrate beyond the parameter in few hands, the procurement route has been captured and reverts to open auction regardless of urgency." }
  ],
  "parameters": [
    { "name": "legacy_term_cap_years", "value": 7, "unit": "years: legacy exclusivity runs out at current term or this cap, whichever is sooner", "evidence": "pending:first registry census of remaining terms" },
    { "name": "floor_cash_months", "value": 18, "unit": "months from commencement to full cash layer", "evidence": "pending:payment-rail readiness audit" },
    { "name": "floor_services_years", "value": 5, "unit": "years from commencement to full service layer", "evidence": "pending:capacity audit with HLT/EDU laws" },
    { "name": "continuity_years", "value": 3, "unit": "years prior law remains in force where not inconsistent", "evidence": "pending:first review-list census" },
    { "name": "transition_contract_concentration_max", "value": 0.25, "unit": "max share of transition procurement to one counterparty group", "evidence": "pending:first procurement concentration audit" },
    { "name": "windfall_levy_threshold", "value": 3, "unit": "multiples of pre-transition valuation triggering windfall levy review", "evidence": "pending:first windfall register cycle" }
  ],
  "metrics": [
    "milestone delivery vs. schedule",
    "share of acquired rights upheld without breach",
    "legacy rights registered, renewals refused, buyouts executed",
    "floor phase completion per deadline",
    "grandfathered share of first mission portfolio",
    "procurement concentration and windfall register"
  ],
  "sunset": { "review_every_years": 1, "expires": null },
  "dissent": [
    "The legacy-term cap is the law's one act of retroactivity and its most litigable feature: a right granted for 20 years that is cut to 7 was partially taken, and calling the buyout 'available from day one' does not make the taking voluntary. Expect the first constitutional crisis here.",
    "Cash-first phasing (TRA5) is a bet that markets and services can absorb cash quickly; if service capacity is the binding constraint, eighteen months of cash with broken clinics is a worse floor than no cash at all.",
    "A law that sunsets its own transition annually invites endless reopening, and a transition that is perpetually finishing never disciplines anyone — review every year may be too hot, exactly where every other law is too cold."
  ],
  "open_questions": [
    "Should legacy pharmaceutical exclusivity get a longer cap than the generic seven years, given C17's medicine clause?",
    "Who audits the windfall register — the evidence office, or an ad hoc sortition panel?",
    "What is the status of treaties entered before commencement that conflict with COM5 reciprocity?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: schedule authority, rights continuity, legacy exclusivity clock with cap, day-one buyout, cash-first floor phasing, empty mission ledger with no grandfathering, workforce transfer, time-boxed legal continuity, reversibility with asset reversion terms, anti-rent rules for the transition era." }
  ]
}
```

---

## 1. The bridge

Every revolution's ugliest chapter is the transition, because that is when yesterday's rights meet tomorrow's rules and both sides discover what the promises were worth. This law's discipline: **nothing happens except on a published schedule, nothing is taken without a price, nothing is grandfathered without a test, and the door back stays open.**

### TRA1 — The schedule is the authority

**Claim.** The framework's articles bind in the order and on the dates of the published transition schedule enacted with this law. The schedule lists every phase, its legal trigger, its deadline, and its reversal terms (TRA9). Amendments to the schedule are legislative acts, not administrative ones.

**Rationale.** Ambiguous sequencing is where transitions rot: each agency waits for another, and the eventual answer is force. A dated schedule converts sequencing from a negotiation into a checklist.

**Evidence.** `audit:` milestone delivery vs. published schedule.

**Falsifier.** If two consecutive milestones slip by more than half a cycle, the schedule must be re-legislated openly, not re-interpreted quietly.

### TRA2 — Existing rights continue

**Claim.** Property, contracts, pensions and acquired social entitlements continue under their existing terms. This law creates no expropriation and no forced renegotiation. Where a right must change to fit a framework article, the change is legislated, compensated, and scheduled — never accomplished by interpretation.

**Rationale.** A blueprint that must steal to begin has already abandoned its own theory of legitimacy; also, credible continuity is what buys the political permission to try.

**Evidence.** `data:` pension and contract continuity audits, first two years.

**Falsifier.** If continuity is breached for any class of acquired rights, the breach is compensable at full economic value with interest.

### TRA3 — Existing exclusivity: clock, not confiscation

**Claim.** Existing patents, copyrights and similar exclusivities are registered in the commons registry immediately (with their true remaining terms), receive **no renewal or extension beyond their current term**, and expire at that term or at `legacy_term_cap_years` from commencement, whichever is sooner. New applications after commencement fall under Capital Engine Law windows.

**Rationale.** This is the one place the transition moves an existing expectation — the *expectation of renewal* — deliberately, because that expectation is precisely the rent the framework refuses to create going forward. The price of that move is paid by TRA4.

**Evidence.** `data:` registry coverage of legacy rights; renewals refused vs. sought.

**Falsifier.** If legacy terms are quietly extended by administrative practice, the no-renewal rule has been captured and every extension is void with a public audit.

### TRA4 — Buyout from day one

**Claim.** From commencement, any registered legacy exclusivity may be bought out under Capital Engine Law CAP6 at the published formula, funded from the commons fund's transition allocation. Buyout is voluntary for the holder except on the CAP6 monopoly findings.

**Rationale.** Some exclusivities will block urgent diffusion (medicines, C17) for years before expiry; making the buyout valve available immediately lets the market and the missions price impatience honestly.

**Evidence.** `data:` buyout offers, acceptances, and post-conversion diffusion (ledger).

**Falsifier.** If transition-era buyouts cost more than the diffusion they purchase, α is mis-set for legacy assets and must be re-based.

### TRA5 — The floor phases in, cash first

**Claim.** The floor's cash layer reaches full coverage within `floor_cash_months` months; service layers (health, education, housing support) reach full coverage within `floor_services_years` years, on a published per-service schedule. Indexation (FLR3) applies only from each component's full-coverage date. Missed deadlines are dashboard items with named stewards.

**Rationale.** Cash moves at payment-rail speed; capacity moves at institution speed. Sequencing cash first delivers floor security to residents years earlier than a "complete" launch would.

**Evidence.** `study:` cash-transfer ramp-up timelines (Haushofer & Shapiro 2016).

**Falsifier.** If any service phase misses its deadline by a full cycle, the phase order is wrong for that service and it moves ahead of cash in the next revision.

### TRA6 — The mission ledger starts empty

**Claim.** No existing programme is a mission on commencement day. Programmes seeking mission status apply through Direction Law and pass the DIR3 test like anything new; their budgets continue unchanged while they wait.

**Rationale.** Grandfathering missions would hand the steering wheel to whatever held it before — the exact capture this constitution is built against — under the flattering name of continuity.

**Evidence.** `audit:` grandfathering requests vs. tests passed.

**Falsifier.** If a non-trivial share of the first portfolio is composed of grandfathered programmes, the DIR3 test was decorative and the whole first portfolio is re-run.

### TRA7 — People transfer with status quo plus

**Claim.** Public employees transfer to corresponding positions with pay, seniority and pension terms preserved ("status quo plus": retention priority and funded retraining via EDU7). No dismissal occurs for transition reasons alone; voluntary exit packages are published and budgeted.

**Rationale.** The people who run today's systems are the only people who know how they actually work; making them the transition's enemy is both cruel and operationally stupid.

**Evidence.** `data:` workforce transition metrics, voluntary exit rates, retraining completion.

**Falsifier.** If voluntary exit exceeds the projection band widely, terms are renegotiated before the next phase begins.

### TRA8 — Legal continuity, time-boxed

**Claim.** Prior law remains in force where not inconsistent with the Constitution for at most `continuity_years` years. Within that box, every field of prior law is reviewed on a published list with a disposition: re-enacted, replaced, or repealed. At the box's end, unreviewed conflicts default to the more permissive rule, publicly listed.

**Rationale.** Continuity forever means never transitioning; a hard box with a permissive default forces the review to actually happen and makes its failure visible.

**Evidence.** `audit:` review list progress, conflicts found and resolved.

**Falsifier.** If the box ends with material conflicts unresolved, they default to the more permissive rule with a published list — not to silence.

### TRA9 — Reversibility

**Claim.** Every pilot and every transition phase remains reversible by referendum (ELE4) during the transition period. Assets transferred to communities or the commons revert on the terms published at transfer (CMT8); all data export is complete and verified (C48); reversion terms may not be degraded retroactively.

**Rationale.** C47 makes the pilot architecture an experiment; an experiment whose subjects cannot leave is not an experiment. Reversibility is also the framework's best evidence generator: the first reversal will teach more than a decade of dashboards.

**Evidence.** `data:` pilot reversions, asset reversion terms honoured, data export completeness.

**Falsifier.** If a single reversion is blocked or degraded by transfer terms, reversion terms for all subsequent pilots are hardened to constitutional grade.

### TRA10 — No transition rent

**Claim.** All transition procurement above a threshold is by open auction with published results. A windfall register records every asset whose valuation changes by more than `windfall_levy_threshold` multiples during the transition era, subject to levy review. No counterparty group may hold more than `transition_contract_concentration_max` of transition procurement.

**Rationale.** Transitions mint rents because urgency suspends scrutiny; naming the three mechanisms (procurement concentration, valuation windfalls, urgency waivers) and capping them is cheaper than lamenting them afterwards.

**Evidence.** `audit:` windfall gains register, concentration of transition-era contracts.

**Falsifier.** If transition contracts concentrate beyond the parameter, procurement reverts to open auction regardless of urgency.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `legacy_term_cap_years` | 7 | years: legacy exclusivity ends at current term or this cap, whichever is sooner | `pending:` first registry census of remaining terms |
| `floor_cash_months` | 18 | months from commencement to full cash layer | `pending:` payment-rail readiness audit |
| `floor_services_years` | 5 | years from commencement to full service layer | `pending:` capacity audit with HLT/EDU laws |
| `continuity_years` | 3 | years prior law remains in force where not inconsistent | `pending:` first review-list census |
| `transition_contract_concentration_max` | 0.25 | max share of transition procurement to one counterparty group | `pending:` first procurement concentration audit |
| `windfall_levy_threshold` | 3 | multiples of pre-transition valuation triggering windfall levy review | `pending:` first windfall register cycle |

## Dissent register

- The legacy-term cap is the law's one act of retroactivity and its most litigable feature; calling the buyout "available from day one" does not make the taking voluntary. Expect the first constitutional crisis here.
- Cash-first phasing is a bet that cash absorbs quickly; if service capacity binds, eighteen months of cash with broken clinics is a worse floor than no cash at all.
- Annual review of the whole law invites endless reopening; a transition that is perpetually finishing never disciplines anyone.

## Open questions

- Should legacy pharmaceutical exclusivity get a longer cap than the generic seven years, given C17's medicine clause?
- Who audits the windfall register — the evidence office, or an ad hoc sortition panel?
- What is the status of pre-commencement treaties that conflict with COM5 reciprocity?
