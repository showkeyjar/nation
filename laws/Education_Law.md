# Education Law (教育法)

> Version 0.1.1 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C9, C14, C22, C26, C27, C31, C32 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §2.2, §3 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §6
> The floor's slowest component and the commons' fastest multiplier.

```law-meta
{
  "id": "law.education",
  "title": "Education Law (教育法)",
  "version": "0.1.1",
  "status": "draft",
  "adopted": null,
  "pillars": ["floor", "commons"],
  "summary": "Education as an unconditional floor entitlement from early childhood through the highest level a person can use, free and debt-free. A national competency framework that names problems and standards, never the winning pedagogy (mirroring the constitution's rule for technology). Publicly produced materials released as maintained commons with localization duty. Verifiable open credentials that no gatekeeper may charge for. Vocational parity tied to the mission ledger. A lifelong learning entitlement in funded hours per year, with automatic retraining when a mission closes or a sector sheds labour. Teacher autonomy with published outcome data, a prohibition on surveillance-based monitoring of children, individual legal entitlement for special needs, and an anti-indoctrination procedure with a bench route.",
  "articles": [
    { "id": "EDU1", "title": "The entitlement", "evidence": ["data:fee-free vs. debt-financed enrolment and completion by income decile"], "falsifier": "If completion for the lowest decile does not improve under fee-free provision, the barrier is not fees and must be located with evidence." },
    { "id": "EDU2", "title": "Competency framework, not curriculum script", "evidence": ["study:outcome effects of autonomy vs. scripted curricula"], "falsifier": "If framework autonomy produces worse outcomes than scripted curricula for defined cohorts, a scripted floor may be set for foundational literacy and numeracy only." },
    { "id": "EDU3", "title": "Materials are commons", "evidence": ["study:Hilton 2016 (Review of Educational Research, Open Educational Resources and College Textbook Choices): comparable learning outcomes, large cost savings"], "falsifier": "If commons materials underperform commercial materials on measured learning, the maintenance endowment must be raised before any purchase of proprietary materials." },
    { "id": "EDU4", "title": "Verifiable open credentials", "evidence": ["pending:credential verification volume and employer use"], "falsifier": "If employers systematically do not verify open credentials, the verification route is unusable and must be rebuilt rather than marketed." },
    { "id": "EDU5", "title": "Vocational parity", "evidence": ["data:vocational route status, funding and employment outcomes"], "falsifier": "If vocational parity in funding does not close employment and earnings gaps within two cohorts, parity must extend to governance and facilities." },
    { "id": "EDU6", "title": "Lifelong entitlement", "evidence": ["pending:adult take-up of funded hours by age band"], "falsifier": "If take-up concentrates in those already credentialed, entitlement design must change (portability, timing, guidance) before the hours are cut." },
    { "id": "EDU7", "title": "Automatic retraining on disruption", "evidence": ["pending:mission-closure and sector-shedding cohorts, two-year outcomes"], "falsifier": "If automatic retraining does not shorten displacement relative to the floor alone, it merges into the floor (mirrors Earn and Pay PAY9)." },
    { "id": "EDU8", "title": "Teachers: autonomy with published outcomes", "evidence": ["study:teacher autonomy and outcome effects; single-metric ranking distortions"], "falsifier": "If published outcomes produce teaching to the metric rather than learning, publication must move to sampling and triangulated measures." },
    { "id": "EDU9", "title": "No surveillance of children", "evidence": ["study:surveillance effects on development and trust"], "falsifier": "If a specific, published, child-safety risk is shown to be undetectable without monitoring, a narrow, time-limited, guardian-consented monitoring may be allowed by the bench for that risk only." },
    { "id": "EDU10", "title": "Special needs as individual right", "evidence": ["data:statemented provision vs. actual delivery gaps"], "falsifier": "If assessed provision is not delivered within statutory time, delivery defaults to the funded private provider at the state's cost." },
    { "id": "EDU11", "title": "Anti-indoctrination", "evidence": ["pending:first contested-content cases and their outcomes"], "falsifier": "If the contest procedure is used mainly to remove minority views rather than to expose students to contest, it has become censorship and must be struck." },
    { "id": "EDU12", "title": "Research and teaching duty", "evidence": ["audit:teaching of released capabilities, localization on time"], "falsifier": "If released capabilities are not taught within two cycles of release, the localization duty's funding must be raised (Development DEV13)." }
  ],
  "parameters": [
    { "name": "lifelong_hours_per_year", "value": 100, "unit": "funded hours per adult per year", "evidence": "pending:pilot take-up analysis" },
    { "name": "vocational_funding_parity", "value": 1.0, "unit": "ratio to academic route per learner", "evidence": "data:vocational funding and outcomes" },
    { "name": "class_size_max_foundational", "value": 20, "unit": "students (early and foundational years)", "evidence": "study:class size effects in early years" },
    { "name": "special_needs_decision_days", "value": 90, "unit": "days from assessment to funded provision", "evidence": "pending:first cohort audit" },
    { "name": "localization_teach_cycles", "value": 2, "unit": "teaching cycles from release", "evidence": "pending:first releases" },
    { "name": "adult_guidance_hours", "value": 5, "unit": "guidance hours per entitlement year", "evidence": "pending:pilot guidance usage" }
  ],
  "metrics": [
    "foundational literacy and numeracy by decile and community",
    "completion rates by income decile, vocational and academic",
    "adult take-up of lifelong hours by age and prior attainment",
    "time from mission closure to retraining start",
    "credential verification volume by employers",
    "contested-content cases and their dispositions"
  ],
  "sunset": { "review_every_years": 4, "expires": null },
  "dissent": [
    "EDU2 (framework, not script) is the article most likely to widen variance between schools: autonomy helps strong schools most. The draft answers with foundational minimums and outcome publication, which is a real mechanism but slow.",
    "A lifelong entitlement of 100 funded hours per adult per year is a round number pretending to be a calculation; no one has measured demand, and if take-up is high the fiscal cost is not in the framework's arithmetic anywhere."
  ],
  "open_questions": [
    "Who accredits the credential verifiers, and how is that office kept from becoming a guild?",
    "Can vocational parity survive a labour market that signals prestige through university brands?",
    "What is the floor for self-directed learning at home, and who assesses it?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: entitlement, competency framework, commons materials, open credentials, vocational parity, lifelong entitlement, automatic retraining, teacher autonomy, no child surveillance, special needs right, anti-indoctrination, teaching duty." },
    { "version": "0.1.1", "date": "2026-10-10", "change": "Evidence upgrade: citable literature replaces descriptive pointers (W008 reduction)." }
  ]
}
```

---

## 1. Entitlement

### EDU1 — The entitlement

**Claim.** Every resident is entitled, free and without debt, to: early childhood education from age **3**; a full foundational and secondary education; and post-secondary education to the highest level they can use, academic or vocational. Living costs during study are covered by the floor, not by loans against future income.

**Rationale.** Education is both a floor component (a person's capability) and an engine input (the workforce of the next discovery); debt-financing it taxes exactly the risk-taking the framework needs.

**Evidence.** `data:` fee-free vs. debt-financed enrolment and completion by income decile.

**Falsifier.** If completion for the lowest decile does not improve under fee-free provision, the barrier is not fees and must be located with evidence.

### EDU2 — Competency framework, not curriculum script

**Claim.** The national framework states competencies, standards and assessment principles. Methods, materials and content choices are made by schools and communities within it. A foundational minimum in literacy and numeracy is defined and audited.

**Rationale.** The constitution forbids the state to name winning technologies (C10); the same argument forbids it to name winning pedagogies. Both errors are the same error: central certainty where only local knowledge exists.

**Evidence.** `study:` outcome effects of autonomy vs. scripted curricula.

**Falsifier.** If framework autonomy produces worse outcomes than scripted curricula for defined cohorts, a scripted floor may be set for foundational literacy and numeracy only.

### EDU3 — Materials are commons

**Claim.** Publicly produced teaching materials are released as commons ([Commons_Law.md](./Commons_Law.md) COM2) with funded maintainers and localization into every official language within the statutory deadline ([Development_Law.md](./Development_Law.md) DEV13).

**Rationale.** The population already paid for the materials once; and a commons of teaching materials is the cheapest known subsidy to every teacher who will ever teach the subject.

**Evidence.** `study:` Hilton 2016 (Review of Educational Research, Open Educational Resources and College Textbook Choices): comparable learning outcomes, large cost savings.

**Falsifier.** If commons materials underperform commercial materials on measured learning, the maintenance endowment must be raised before any purchase of proprietary materials.

### EDU4 — Verifiable open credentials

**Claim.** Credentials are open, machine-verifiable records. No gatekeeper may charge for verification, and no exclusive licence may control the verification route ([Capital_Engine_Law.md](./Capital_Engine_Law.md) CAP4).

**Rationale.** A credential whose verification belongs to a guild is a private toll on a public signal.

**Evidence.** `pending:` credential verification volume and employer use.

**Falsifier.** If employers systematically do not verify open credentials, the verification route is unusable and must be rebuilt rather than marketed.

---

## 2. Routes and recovery

### EDU5 — Vocational parity

**Claim.** Vocational and apprenticeship routes receive funding parity per learner, parity of facilities and governance, structured links to the mission ledger's demand, and equal standing in credentials and public employment.

**Rationale.** A nation that pays for missions but ranks the people who execute them second has built a status hierarchy into its own pipeline.

**Evidence.** `data:` vocational route status, funding and employment outcomes.

**Falsifier.** If vocational parity in funding does not close employment and earnings gaps within two cohorts, parity must extend to governance and facilities.

### EDU6 — Lifelong entitlement

**Claim.** Every adult has an annual entitlement of **100** funded learning hours plus **5** guidance hours, portable across providers, usable without interruption of the floor.

**Rationale.** In a framework whose whole bet is rapid change, learning cannot be a single childhood transaction.

**Evidence.** `pending:` adult take-up of funded hours by age band.

**Falsifier.** If take-up concentrates in those already credentialed, entitlement design must change (portability, timing, guidance) before the hours are cut.

### EDU7 — Automatic retraining on disruption

**Claim.** When a mission closes, a capability is released, or a firm sheds ≥ **20%** of its workforce, affected workers are auto-enrolled in funded retraining within **30** days, integrated with transition income ([Earn_and_Pay_Law.md](./Earn_and_Pay_Law.md) PAY9).

**Rationale.** Constitution C14 promises that honest failure is not a crime; for workers, that promise is delivered as retraining, not as a lecture about flexibility.

**Evidence.** `pending:` mission-closure and sector-shedding cohorts, two-year outcomes.

**Falsifier.** If automatic retraining does not shorten displacement relative to the floor alone, it merges into the floor (mirrors Earn and Pay PAY9).

---

## 3. Practice

### EDU8 — Teachers: autonomy with published outcomes

**Claim.** Teachers have protected autonomy over method, a professional entry standard, and published school outcome data reported by cohort and decile. No single-metric ranking of teachers is permitted.

**Rationale.** Autonomy without evidence is drift; evidence without autonomy is teaching to the test. The framework needs both, and neither alone.

**Evidence.** `study:` teacher autonomy and outcome effects; single-metric ranking distortions.

**Falsifier.** If published outcomes produce teaching to the metric rather than learning, publication must move to sampling and triangulated measures.

### EDU9 — No surveillance of children

**Claim.** Surveillance-based monitoring of children ( cameras in classrooms, keystroke or affect monitoring, location tracking) is prohibited. Administrative data on children is minimised, guardians have access, and no educational benefit may be conditioned on its collection.

**Rationale.** Constitution C32 protects dignity; children cannot consent, which is precisely why the prohibition rather than a consent rule.

**Evidence.** `study:` surveillance effects on development and trust.

**Falsifier.** If a specific, published, child-safety risk is shown to be undetectable without monitoring, a narrow, time-limited, guardian-consented monitoring may be allowed by the bench for that risk only.

### EDU10 — Special needs as individual right

**Claim.** Assessed special educational needs generate an individual, enforceable entitlement to provision within **90** days; failure to provide within the deadline transfers delivery to a funded provider at the state's cost.

**Rationale.** An assessment without a deadline is a description of a child's needs, not a right to meet them.

**Evidence.** `data:` statemented provision vs. actual delivery gaps.

**Falsifier.** If assessed provision is not delivered within statutory time, delivery defaults to the funded private provider at the state's cost.

### EDU11 — Anti-indoctrination

**Claim.** Any resident may contest curriculum content as politically one-sided. Contested material must state the contest — the strongest opposing account — or be withdrawn. Disputes go to the community tribunal, appealable to the constitutional bench. This procedure may not be used to remove scientific consensus content.

**Rationale.** A state that teaches one politics will eventually be captured by whichever one it taught; the honest alternative is to teach the argument.

**Evidence.** `pending:` first contested-content cases and their outcomes.

**Falsifier.** If the contest procedure is used mainly to remove minority views rather than to expose students to contest, it has become censorship and must be struck.

### EDU12 — Research and teaching duty

**Claim.** Released capabilities are taught: within **2** teaching cycles of release, publicly funded curricula include them, and teacher training covers them, funded from the commons fund's localization share.

**Rationale.** A commons nobody can use is a museum; the constitution's diffusion half-life metric (C37) is decided in classrooms.

**Evidence.** `audit:` teaching of released capabilities, localization on time.

**Falsifier.** If released capabilities are not taught within two cycles of release, the localization duty's funding must be raised (Development DEV13).

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `lifelong_hours_per_year` | 100 | funded hours per adult per year | `pending:` pilot take-up analysis |
| `vocational_funding_parity` | 1.0 | ratio to academic route per learner | `data:` vocational funding and outcomes |
| `class_size_max_foundational` | 20 | students (early and foundational years) | `study:` class size effects in early years |
| `special_needs_decision_days` | 90 | days from assessment to funded provision | `pending:` first cohort audit |
| `localization_teach_cycles` | 2 | teaching cycles from release | `pending:` first releases |
| `adult_guidance_hours` | 5 | guidance hours per entitlement year | `pending:` pilot guidance usage |

## Metrics

- foundational literacy and numeracy by decile and community
- completion rates by income decile, vocational and academic
- adult take-up of lifelong hours by age and prior attainment
- time from mission closure to retraining start
- credential verification volume by employers
- contested-content cases and their dispositions

## Dissent register

- EDU2 (framework, not script) is the article most likely to widen variance between schools: autonomy helps strong schools most. The draft answers with foundational minimums and outcome publication, which is a real mechanism but slow.
- A lifelong entitlement of 100 funded hours per adult per year is a round number pretending to be a calculation; no one has measured demand, and if take-up is high the fiscal cost is not in the framework's arithmetic anywhere.

## Open questions

- Who accredits the credential verifiers, and how is that office kept from becoming a guild?
- Can vocational parity survive a labour market that signals prestige through university brands?
- What is the floor for self-directed learning at home, and who assesses it?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft: entitlement, competency framework, commons materials, open credentials, vocational parity, lifelong entitlement, automatic retraining, teacher autonomy, no child surveillance, special needs right, anti-indoctrination, teaching duty. |
| 0.1.1 | 2026-10-10 | Evidence upgrade: citable literature replaces descriptive pointers (W008 reduction). |
