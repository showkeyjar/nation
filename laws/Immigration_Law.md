# Immigration and Residence Law (移民与居留法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C8, C27, C21 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §4 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §9
> The gate and the floor: who arrives, what they get immediately, and how membership is earned — written to be enforced even by people who dislike it.

```law-meta
{
  "id": "law.immigration",
  "title": "Immigration and Residence Law (移民与居留法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["governance", "floor"],
  "summary": "Defines residence as the unit of the floor and its day-one availability; the three entry lanes (work and means, community sponsorship, asylum) with published numerical transparency; the absolute non-refoulement rule with 90-day decisions and immediate work rights; the citizenship path with free preparation and published criteria; the near-prohibition of immigration detention; free exit and return with narrow revocation; integration as a two-way obligation with per-resident equalisation funding; the prohibition of employer-tied visas; the community pressure review that may adjust services but never the floor; and automatic documentation for stateless persons.",
  "articles": [
    { "id": "IMM1", "title": "Residence is the floor unit", "evidence": ["data:floor delivery latency by arrival cohort (ledger)"], "falsifier": "If any arrival cohort receives floor components later than the statutory deadline, the gate is at the border agency, not the law — and the agency's budget formula triggers." },
    { "id": "IMM2", "title": "Three lanes, one queue, published numbers", "evidence": ["data:queue depths, processing times, admissions by lane (ledger, monthly)"], "falsifier": "If actual admissions deviate from the published plan by more than the tolerance for two years, either the plan is fiction or the queue is corrupt — both require intervention, not explanation." },
    { "id": "IMM3", "title": "Asylum", "evidence": ["study:asylum processing delay effects on integration and employment (e.g., Hainmueller, Hangartner & Lawrence 2016)"], "falsifier": "If work-authorisation delays suppress asylum employment below native-floor levels at the two-year mark, the delay — not the asylum — is the failed policy." },
    { "id": "IMM4", "title": "The citizenship path", "evidence": ["data:citizenship applications, approval rates, time-to-decision by cohort"], "falsifier": "If pass rates on civics or language components vary by origin more than by residence duration, the test is a filter in disguise and must be re-standardised." },
    { "id": "IMM5", "title": "Detention near-prohibited", "evidence": ["audit:detention instances, grounds, durations, judicial confirmations"], "falsifier": "If detention use grows year over year while arrival flows are flat, the near-prohibition has failed and must be re-fenced by judicial pre-authorisation." },
    { "id": "IMM6", "title": "Exit and return", "evidence": ["audit:revocation instances and grounds, first ten years"], "falsifier": "If revocation is used more than a handful of times for fraud-in-acquisition, the narrow door has been kicked open and must be closed by referendum-grade entrenchment." },
    { "id": "IMM7", "title": "Integration cuts both ways", "evidence": ["study:language course effects on employment (e.g., Sarvimäki & Hämäläinen 2016)"], "falsifier": "If equalisation funding does not move service capacity in receiving communities within two cycles, the money is not reaching capacity and the formula — not the principle — is wrong." },
    { "id": "IMM8", "title": "No employer-tied visas", "evidence": ["audit:complaint and enforcement statistics under PAY5"], "falsifier": "If tied-employment conditions reappear through sectoral licensing or housing, the prohibition is being routed around and the routes must be named and closed." },
    { "id": "IMM9", "title": "The pressure review", "evidence": ["data:net inflow, service capacity indices, community plan outcomes (ledger)"], "falsifier": "If communities use the review to freeze services while inflow continues, the review has become a sanction and must revert to its funding function." },
    { "id": "IMM10", "title": "Stateless persons", "evidence": ["audit:statelessness determinations and time-to-documentation"], "falsifier": "If documentation takes longer than the statutory deadline, the registry — not the applicant — is in breach and the case is escalated automatically." }
  ],
  "parameters": [
    { "name": "citizenship_residence_years", "value": 5, "unit": "years of residence before citizenship application", "evidence": "pending:first cohort integration outcomes" },
    { "name": "asylum_decision_days", "value": 90, "unit": "days to first-instance decision, statutory", "evidence": "pending:first queue-capacity audit" },
    { "name": "detention_max_days", "value": 14, "unit": "days per judicial confirmation", "evidence": "pending:first annual detention audit" },
    { "name": "inflow_review_threshold", "value": 0.03, "unit": "net inflow as share of community population per year triggering IMM9", "evidence": "pending:first three community plans" },
    { "name": "equalisation_per_resident_share", "value": 1, "unit": "equalisation funding per new resident relative to per-capita service base", "evidence": "pending:first receiving-community capacity audit" }
  ],
  "metrics": [
    "floor delivery latency by arrival cohort",
    "queue depth and processing time by lane",
    "asylum employment at two years vs. comparison",
    "citizenship approval rate by origin and duration",
    "detention instances per 1000 arrivals",
    "receiving-community service capacity index"
  ],
  "sunset": { "review_every_years": 3, "expires": null },
  "dissent": [
    "A jurisdiction that guarantees the floor to every resident on arrival while keeping entry lanes narrow has simply moved the border into the queue; the queue is where this law's cruelty or its honesty will live, and queues are easier to abuse quietly than borders.",
    "Five years to citizenship with free preparation still creates two classes of member; every service in this blueprint is rights-based except the vote, which is time-based — a tension the law manages rather than resolves.",
    "IMM9's pressure review is constitutionalised nativism insurance: it concedes that arrival pressure can legitimately change local politics, which some will read as conceding it can legitimately exclude."
  ],
  "open_questions": [
    "Should the sortition chamber include non-citizen residents above a residence threshold?",
    "How do missions interact with entry planning when a mission's labour demand is structural (HL7, DEV13)?",
    "What is the status of long-term absent residents for floor purposes (C27 continuity)?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: residence as floor unit with day-one delivery, three published lanes, asylum with non-refoulement and work rights, citizenship path, detention near-prohibition, exit and return, two-way integration with equalisation, no tied visas, community pressure review, statelessness documentation." }
  ]
}
```

---

## 1. The gate and the floor

The Constitution makes the floor unconditional on residence (C27) and lets capital and people move freely (C21, C8). This law is where those promises meet the border. Its design rule: **every discretionary cruelty is replaced by a published number.** Queues can be honest or dishonest; only the numbers tell you which.

### IMM1 — Residence is the floor unit

**Claim.** Every person physically present and registered — however they arrived — receives the floor's cash layer within 14 days and service access on registration. No waiting period attaches to any floor component. Irregular presence affects removal procedure, never floor delivery.

**Rationale.** A floor that withholds basics while paperwork proceeds is a wall with a smile. The floor's unconditional logic (FLR2) cannot survive an exception here, because exceptions at the border are invisible to the dashboards that track everything else.

**Evidence.** `data:` floor delivery latency by arrival cohort (ledger).

**Falsifier.** If any cohort receives floor components late, the gate is at the border agency and its budget formula triggers.

### IMM2 — Three lanes, one queue, published numbers

**Claim.** Entry is by one of three lanes: **work and means** (offer or demonstrable support), **community sponsorship** (a community's published undertaking), and **asylum** (IMM3). The plan for each lane — processing capacity, expected admissions, actual queue depth — is published monthly. Lane changes are published too. There are no hidden caps: if the jurisdiction wants fewer admissions, it says so in the plan it publishes, not in the queue it degrades.

**Rationale.** Degrading a queue is how states cut immigration while denouncing their own cruelty; publishing the numbers turns that trick into an explicit political decision.

**Evidence.** `data:` queue depths, processing times, admissions by lane (ledger, monthly).

**Falsifier.** If actual admissions deviate from plan beyond tolerance for two years, the plan is fiction or the queue is corrupt — both demand intervention.

### IMM3 — Asylum

**Claim.** Non-refoulement is absolute (C8). An asylum claim receives a first-instance decision within `asylum_decision_days` days, work authorisation immediately on filing, floor access immediately (IMM1), and appeal with suspension. Detention only under IMM5. Rejected applicants with no removal prospect receive a documented tolerance status — not a shadow life.

**Rationale.** Long uncertainty destroys exactly the integration capacity the system claims to want; Hainmueller et al. show employment and integration respond to certainty, not to permission alone.

**Evidence.** `study:` asylum processing delay effects (Hainmueller, Hangartner & Lawrence 2016).

**Falsifier.** If work-authorisation delays suppress asylum employment below native-floor levels at two years, the delay is the failed policy.

### IMM4 — The citizenship path

**Claim.** After `citizenship_residence_years` years of residence, citizenship is granted on published criteria: continuous residence, civics and language at a standard for which **free preparation is provided** ([Education Law](./Education_Law.md) EDU6), and no unresolved serious conviction (CRI2). Time-to-decision is statutory. Citizenship confers the national franchise (ELE1).

**Rationale.** The criteria are written so that the state's effort, not the applicant's origin, does the work: free courses mean the test measures learning opportunity, not inherited advantage.

**Evidence.** `data:` citizenship applications, approval rates, time-to-decision by cohort.

**Falsifier.** If pass rates vary by origin more than by residence duration, the test is a filter in disguise and must be re-standardised.

### IMM5 — Detention near-prohibited

**Claim.** Immigration detention is used only where identity cannot be established or there is a documented security ground, requires prior judicial confirmation, may not exceed `detention_max_days` per confirmation, and never applies to children or to asylum seekers who filed in compliance.

**Rationale.** Detention is punishment without crime; the near-prohibition plus judicial pre-authorisation keeps its use exceptional and visible.

**Evidence.** `audit:` detention instances, grounds, durations, judicial confirmations.

**Falsifier.** If detention grows year over year on flat arrival flows, the near-prohibition has failed and must be re-fenced.

### IMM6 — Exit and return

**Claim.** Residents may leave and return freely (C8). Citizenship, once granted, is revocable only for fraud in acquisition, on bench findings, within a statutory window. Residence permits survive absence up to a published duration; the floor follows the residence rules of C27 continuity.

**Rationale.** Free exit is the blueprint's deepest discipline; a state that must keep its members by fences has already confessed.

**Evidence.** `audit:` revocation instances and grounds, first ten years.

**Falsifier.** If revocation exceeds a handful of fraud-in-acquisition cases, the door has been kicked open and must be entrenched by referendum.

### IMM7 — Integration cuts both ways

**Claim.** Integration is a mutual obligation: the jurisdiction provides free language, civics and recognition of prior qualifications (EDU6, EDU7); receiving communities receive per-arriving-resident equalisation funding at `equalisation_per_resident_share` of the per-capita service base, earmarked to service capacity. Discrimination in work, housing and services is prohibited and enforced (PAY13, CIV2).

**Rationale.** "Integration" that only makes demands on newcomers is a toll; funding the receiving side's capacity is what makes openness a policy instead of a mood.

**Evidence.** `study:` language course effects on employment (Sarvimäki & Hämäläinen 2016).

**Falsifier.** If equalisation funding does not move service capacity within two cycles, the formula — not the principle — is wrong.

### IMM8 — No employer-tied visas

**Claim.** Work authorisation attaches to the person, not the employer. Employer-specific permits, bonded housing-tied employment, and recruitment-fee arrangements with origin intermediaries are prohibited and enforced through [Earn and Pay Law](./Earn_and_Pay_Law.md) PAY5 and Criminal Law dishonesty offences.

**Rationale.** Tied visas create a private immigration jurisdiction inside the public one — the employer becomes a border.

**Evidence.** `audit:` complaint and enforcement statistics under PAY5.

**Falsifier.** If tied conditions reappear through licensing or housing, the routes are named and closed.

### IMM9 — The pressure review

**Claim.** Where net inflow exceeds `inflow_review_threshold` of a community's population in a year, the community may publish a capacity plan that **adjusts services** (schools, clinics, housing programmes — funded via IMM7) but never reduces the floor, never suspends registration, and never closes assembly membership (CMT3).

**Rationale.** Arrival pressure is real; pretending otherwise hands the issue to whoever promises to fix it brutally. The review converts pressure into funding decisions under constraints.

**Evidence.** `data:` net inflow, service capacity indices, community plan outcomes (ledger).

**Falsifier.** If communities freeze services while inflow continues, the review has become a sanction and reverts to its funding function.

### IMM10 — Stateless persons

**Claim.** A person recognised as stateless receives residence documentation within the statutory deadline, floor access on the same terms as any resident, and a citizenship path on the same clock. Determination procedures are published with appeal rights.

**Rationale.** Statelessness is the edge case that reveals the system: a person with no other claim on any state has exactly the claim this blueprint says every person has here.

**Evidence.** `audit:` statelessness determinations and time-to-documentation.

**Falsifier.** If documentation exceeds the deadline, the registry is in breach and the case escalates automatically.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `citizenship_residence_years` | 5 | years of residence before citizenship application | `pending:` first cohort integration outcomes |
| `asylum_decision_days` | 90 | days to first-instance decision, statutory | `pending:` first queue-capacity audit |
| `detention_max_days` | 14 | days per judicial confirmation | `pending:` first annual detention audit |
| `inflow_review_threshold` | 0.03 | net inflow as share of community population per year | `pending:` first three community plans |
| `equalisation_per_resident_share` | 1 | equalisation funding per new resident relative to per-capita service base | `pending:` first receiving-community capacity audit |

## Dissent register

- Narrow lanes plus a day-one floor simply move the border into the queue; the queue is where this law's cruelty or honesty will live, and queues are easier to abuse quietly than borders.
- Five years to citizenship still creates two classes of member; every service is rights-based except the vote, which is time-based.
- IMM9 is constitutionalised nativism insurance: it concedes arrival pressure can legitimately change local politics, which some will read as conceding it can exclude.

## Open questions

- Should the sortition chamber include non-citizen residents above a residence threshold?
- How do missions interact with entry planning when labour demand is structural (HL7, DEV13)?
- What is the status of long-term absent residents for floor purposes (C27 continuity)?
