# Health Care Law (医疗法)

> Version 0.1.1 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C14, C16–C20, C27, C30, C43 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §2.1, §2.3 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §6
> The floor's most expensive component, and the clearest test of the pharmaceutical bargain.

```law-meta
{
  "id": "law.health-care",
  "title": "Health Care Law (医疗法)",
  "version": "0.1.1",
  "status": "draft",
  "adopted": null,
  "pillars": ["floor", "commons"],
  "summary": "Health care free at the point of use as an unconditional floor entitlement, funded from rents and the sovereign fund first. The pharmaceutical bargain: 7+2 year exclusivity windows, mandatory publication of trial data including negative results, advance purchase commitments as the main accelerator, buyout on the monopoly test with a capped creator share. Standing pandemic capacity as a pre-purchased mission rather than emergency improvisation. Parity for mental health. A published benefit package with rules preventing two-tier queue erosion. Immunity for honest error reporting and liability for concealment, with a public incident ledger. Health data as a privacy-protected commons. Workforce rules tied to training places and the right to useful work.",
  "articles": [
    { "id": "HLT1", "title": "Free at the point of use", "evidence": ["study:Manning, Newhouse, Duan et al. 1987 (AER, Health Insurance and the Demand for Medical Care — RAND Health Insurance Experiment)"], "falsifier": "If point-of-use charges anywhere in the system measurably reduce timely utilisation by the poor, that charge has failed and must be removed." },
    { "id": "HLT2", "title": "Funding order", "evidence": ["data:rent and sovereign revenue vs. health cost in comparable economies"], "falsifier": "If the floor-first funding ranking leaves recurrent health funding structurally short, the ranking must be reopened rather than fees introduced." },
    { "id": "HLT3", "title": "The benefit package", "evidence": ["pending:annual package review with published cost-effectiveness analysis"], "falsifier": "If the package omits cost-effective care while including ineffective care in any published cycle, the review procedure has failed and must be rebuilt." },
    { "id": "HLT4", "title": "The two-tier rule", "evidence": ["data:public-private mix and waiting time divergence"], "falsifier": "If private top-up grows while public waiting times lengthen for the same procedures, the two-tier rule has failed and the exit of clinicians from public practice must be constrained." },
    { "id": "HLT5", "title": "The pharmaceutical bargain", "evidence": ["study:exclusivity length vs. innovation and access outcomes"], "falsifier": "If the 7+2 window reduces new-mechanism entries in this market below the trend before adoption, the window is too short here and must be re-derived." },
    { "id": "HLT6", "title": "Published trials, published failures", "evidence": ["study:trial registration and reporting mandates and their effects"], "falsifier": "If registration does not raise publication of negative results above its pre-mandate rate, reporting must attach to market authorisation itself." },
    { "id": "HLT7", "title": "Pre-commitment for capacity", "evidence": ["study:advance market commitments for vaccines"], "falsifier": "If commitments deliver later or dearer than equivalent procurement, they must be narrowed to true uncertainty." },
    { "id": "HLT8", "title": "Standing pandemic capacity", "evidence": ["data:surge capacity pre-purchase vs. emergency procurement costs"], "falsifier": "If the standing capacity is not convertible to care within the published drill deadline, it is a budget line, not a capacity." },
    { "id": "HLT9", "title": "Prevention with outcome targets", "evidence": ["data:process vs. outcome targeting in preventive programmes"], "falsifier": "If process targets dominate and outcomes do not move for two review periods, targets must be rebuilt on outcomes." },
    { "id": "HLT10", "title": "Mental health parity", "evidence": ["data:funding and outcome gaps between mental and physical health"], "falsifier": "If parity rules do not close access gaps within three review periods, parity must attach to budgets, not to language." },
    { "id": "HLT11", "title": "Honest error, public ledger", "evidence": ["study:no-blame reporting regimes and incident rates"], "falsifier": "If immunity for honest reporting raises error without increasing reporting, it must be conditioned on participation in safety review." },
    { "id": "HLT12", "title": "Health data as commons", "evidence": ["study:health data reuse value vs. re-identification incidents"], "falsifier": "If the privacy-preserving pipeline blocks the research uses that justify it, the pipeline, not the prohibition, must be redesigned." },
    { "id": "HLT13", "title": "Workforce without conscription", "evidence": ["pending:training-place expansion and underserved coverage outcomes"], "falsifier": "If incentives do not close coverage gaps in underserved areas, a service obligation tied to funded training must be considered with its own evidence." }
  ],
  "parameters": [
    { "name": "W_pharma_device", "value": 7, "unit": "years (+2 genuine new mechanism)", "evidence": "pending:domain-pilot pharmaceuticals" },
    { "name": "advance_purchase_premium_max", "value": 1.5, "unit": "multiple of target price", "evidence": "study:advance market commitments for vaccines" },
    { "name": "surge_capacity_share", "value": 0.15, "unit": "share of acute capacity held as standing surge", "evidence": "pending:first surge drill cycle" },
    { "name": "surge_convert_days", "value": 14, "unit": "days from declaration to operational surge", "evidence": "pending:first surge drills" },
    { "name": "mental_health_parity_share", "value": 0.13, "unit": "share of health budget (parity floor)", "evidence": "data:burden-of-disease share vs. funding share" },
    { "name": "incident_report_hours", "value": 72, "unit": "hours to report a serious incident", "evidence": "study:no-blame reporting regimes" },
    { "name": "underserved_incentive_multiple", "value": 1.3, "unit": "multiple of standard remuneration", "evidence": "pending:first underserved postings" }
  ],
  "metrics": [
    "amenable mortality and healthy life expectancy by community and decile",
    "waiting time distribution by procedure, public vs. private",
    "new mechanisms introduced per decade and time to generic/commons release",
    "negative-result publication rate for trials in this market",
    "surge drill conversion time",
    "mental health access gap and parity ratio"
  ],
  "sunset": { "review_every_years": 4, "expires": null },
  "dissent": [
    "The two-tier rule (HLT4) is the article most likely to be quietly broken: a wealthy population will buy speed somewhere, and prohibiting it outright risks driving clinicians abroad while permitting it risks stripping the public queue. The draft tries to police the boundary with waiting-time evidence, which is honest but may be too slow.",
    "A 7+2 window with a buyout is a bet that pre-commitment can replace the tail of monopoly profit that currently funds drug development; if that bet fails, this law is where the whole framework's engine shows its first crack."
  ],
  "open_questions": [
    "Should the benefit package be national or community-variable within a national core?",
    "How is V_expected computed for a drug whose value depends on future resistance patterns?",
    "Does the underserved incentive multiple distort care quality toward volume?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: free at point of use, funding order, benefit package, two-tier rule, pharmaceutical bargain, trial publication, pre-commitment, pandemic capacity, prevention targets, mental health parity, error reporting, health data commons, workforce." },
    { "version": "0.1.1", "date": "2026-10-10", "change": "Evidence upgrade: citable literature replaces descriptive pointers (W008 reduction)." }
  ]
}
```

---

## 1. Entitlement and money

### HLT1 — Free at the point of use

**Claim.** The benefit package is delivered free at the point of use to every resident. No co-payment, deposit, insurance check or registration fee may stand between a resident and covered care.

**Rationale.** Every charge at the door is a filter, and the people it filters out are those for whom care is most valuable and least affordable — which is also where the externality is largest.

**Evidence.** `study:` Manning, Newhouse, Duan et al. 1987 (AER, Health Insurance and the Demand for Medical Care — RAND Health Insurance Experiment).

**Falsifier.** If point-of-use charges anywhere in the system measurably reduce timely utilisation by the poor, that charge has failed and must be removed.

### HLT2 — Funding order

**Claim.** Health care is funded in the Social Floor ranking: rents and sovereign returns first, consumption and inheritance second, income taxes last. Cross-border employer contributions follow published reciprocity schedules.

**Rationale.** Funding care by taxing the labour it keeps healthy is circular; funding it from the scarcity rents the community created is not.

**Evidence.** `data:` rent and sovereign revenue vs. health cost in comparable economies.

**Falsifier.** If the floor-first funding ranking leaves recurrent health funding structurally short, the ranking must be reopened rather than fees introduced.

### HLT3 — The benefit package

**Claim.** The package is published annually with the cost-effectiveness analysis behind each inclusion and exclusion, reviewed by the evidence office, and contestable by any resident through the GOVERNANCE §12 procedure.

**Rationale.** An unpublished package is a rationing decision made in private; publication turns the same decision into a policy.

**Evidence.** `pending:` annual package review with published cost-effectiveness analysis.

**Falsifier.** If the package omits cost-effective care while including ineffective care in any published cycle, the review procedure has failed and must be rebuilt.

### HLT4 — The two-tier rule

**Claim.** Private top-up insurance may buy amenities, choice of clinician and speed **outside** the package. Top-up may not buy a place in a public queue, and clinicians working in both sectors must publish their public-session commitment. If public waiting times for a procedure lengthen while private provision of it grows, the procedure's private provision is suspended pending review.

**Rationale.** Two-tier systems do not fail by existing; they fail when the top tier buys the bottom tier's capacity and staff.

**Evidence.** `data:` public-private mix and waiting time divergence.

**Falsifier.** If private top-up grows while public waiting times lengthen for the same procedures, the two-tier rule has failed and the exit of clinicians from public practice must be constrained.

---

## 2. The pharmaceutical bargain

### HLT5 — The pharmaceutical bargain

**Claim.** Medicines and devices operate under [Capital_Engine_Law.md](./Capital_Engine_Law.md) CAP2 with a window of **7 years, +2** for a genuine new mechanism, from first market entry. At expiry the compound enters the commons registry with full manufacturing documentation ([Development_Law.md](./Development_Law.md) DEV3, DEV4). Monopoly-test positives are bought out under CAP6.

**Rationale.** Pharmaceuticals are the domain where exclusivity is hardest to defend and hardest to abandon: the trials are long, the failures are unpaid, and the marginal cost of the pill is near zero.

**Evidence.** `study:` exclusivity length vs. innovation and access outcomes.

**Falsifier.** If the 7+2 window reduces new-mechanism entries in this market below the trend before adoption, the window is too short here and must be re-derived.

### HLT6 — Published trials, published failures

**Claim.** Market authorisation requires registration before trial start and publication of results — including negative and discontinued trials — within 12 months of completion, in the public registry. Unpublished trials cannot support a claim of efficacy or safety.

**Rationale.** Constitution C14: failure is data, not crime. Half a literature is a loaded instrument.

**Evidence.** `study:` trial registration and reporting mandates and their effects.

**Falsifier.** If registration does not raise publication of negative results above its pre-mandate rate, reporting must attach to market authorisation itself.

### HLT7 — Pre-commitment for capacity

**Claim.** The state's main accelerator is the advance purchase commitment at a published target price, capped at **1.5×** target on over-run, with verification and clawback (Capital Engine CAP8). Prizes fund genuine uncertainty where no price can be set.

**Rationale.** Certainty is cheaper than subsidy; a published cap keeps certainty from becoming charity.

**Evidence.** `study:` advance market commitments for vaccines.

**Falsifier.** If commitments deliver later or dearer than equivalent procurement, they must be narrowed to true uncertainty.

### HLT8 — Standing pandemic capacity

**Claim.** A standing mission maintains **15%** acute surge capacity, stockpiles, laboratory networks and a published drill schedule; the capacity must be convertible to operational care within **14** days of declaration. Emergency powers (Constitution C43) never suspend the floor or the evidence rule.

**Rationale.** Pandemic capacity bought during a panic is bought at panic prices; capacity bought in advance is a mission like any other, with kill criteria and audits.

**Evidence.** `data:` surge capacity pre-purchase vs. emergency procurement costs.

**Falsifier.** If the standing capacity is not convertible to care within the published drill deadline, it is a budget line, not a capacity.

---

## 3. Practice

### HLT9 — Prevention with outcome targets

**Claim.** Prevention programmes are funded against outcome targets (incidence, complication rates, vaccination coverage), not process targets (appointments delivered), and outcomes are published by community and decile.

**Rationale.** Process targets are how prevention budgets become attendance statistics.

**Evidence.** `data:` process vs. outcome targeting in preventive programmes.

**Falsifier.** If process targets dominate and outcomes do not move for two review periods, targets must be rebuilt on outcomes.

### HLT10 — Mental health parity

**Claim.** Mental health care is funded at parity with physical health by burden of disease, with a floor of **13%** of the health budget, delivered with the same urgency standards, and never through a separate gatekeeping regime.

**Rationale.** Parity that lives in preamble instead of budgets is decoration; a separate door is always a slower door.

**Evidence.** `data:` funding and outcome gaps between mental and physical health.

**Falsifier.** If parity rules do not close access gaps within three review periods, parity must attach to budgets, not to language.

### HLT11 — Honest error, public ledger

**Claim.** Reporting an honest error to the incident ledger within **72** hours carries immunity from regulatory sanction; concealment and falsification are serious offences with personal liability. Serious incidents are published quarterly in anonymised form.

**Rationale.** A system that punishes reporting has decided it prefers its errors fatal and undocumented.

**Evidence.** `study:` no-blame reporting regimes and incident rates.

**Falsifier.** If immunity for honest reporting raises error without increasing reporting, it must be conditioned on participation in safety review.

### HLT12 — Health data as commons

**Claim.** Clinical data is a privacy-protected commons under [Commons_Law.md](./Commons_Law.md) COM4: research access through the trusted pipeline, prohibition on sale of personal data, and criminal liability for re-identification.

**Rationale.** Health records are simultaneously the most sensitive data a person has and the most valuable data a population has; both facts must survive the same rule.

**Evidence.** `study:` health data reuse value vs. re-identification incidents.

**Falsifier.** If the privacy-preserving pipeline blocks the research uses that justify it, the pipeline, not the prohibition, must be redesigned.

### HLT13 — Workforce without conscription

**Claim.** Training places are funded to meet projected need (Constitution C31), underserved areas are served by incentive multiples of **1.3×** and completion of training, and no clinician may be conscripted (Constitution C12).

**Rationale.** A framework that forbids commanding research also forbids commanding care; it must therefore buy coverage, not order it.

**Evidence.** `pending:` training-place expansion and underserved coverage outcomes.

**Falsifier.** If incentives do not close coverage gaps in underserved areas, a service obligation tied to funded training must be considered with its own evidence.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `W_pharma_device` | 7 | years (+2 genuine new mechanism) | `pending:` domain-pilot pharmaceuticals |
| `advance_purchase_premium_max` | 1.5 | multiple of target price | `study:` advance market commitments for vaccines |
| `surge_capacity_share` | 0.15 | share of acute capacity held as standing surge | `pending:` first surge drill cycle |
| `surge_convert_days` | 14 | days from declaration to operational surge | `pending:` first surge drills |
| `mental_health_parity_share` | 0.13 | share of health budget (parity floor) | `data:` burden-of-disease share vs. funding share |
| `incident_report_hours` | 72 | hours to report a serious incident | `study:` no-blame reporting regimes |
| `underserved_incentive_multiple` | 1.3 | multiple of standard remuneration | `pending:` first underserved postings |

## Metrics

- amenable mortality and healthy life expectancy by community and decile
- waiting time distribution by procedure, public vs. private
- new mechanisms introduced per decade and time to generic/commons release
- negative-result publication rate for trials in this market
- surge drill conversion time
- mental health access gap and parity ratio

## Dissent register

- The two-tier rule (HLT4) is the article most likely to be quietly broken: a wealthy population will buy speed somewhere, and prohibiting it outright risks driving clinicians abroad while permitting it risks stripping the public queue. The draft tries to police the boundary with waiting-time evidence, which is honest but may be too slow.
- A 7+2 window with a buyout is a bet that pre-commitment can replace the tail of monopoly profit that currently funds drug development; if that bet fails, this law is where the whole framework's engine shows its first crack.

## Open questions

- Should the benefit package be national or community-variable within a national core?
- How is `V_expected` computed for a drug whose value depends on future resistance patterns?
- Does the underserved incentive multiple distort care quality toward volume?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft: free at point of use, funding order, benefit package, two-tier rule, pharmaceutical bargain, trial publication, pre-commitment, pandemic capacity, prevention targets, mental health parity, error reporting, health data commons, workforce. |
| 0.1.1 | 2026-10-10 | Evidence upgrade: citable literature replaces descriptive pointers (W008 reduction). |
