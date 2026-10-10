# Direction and Mission Law (宏观引导法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C9–C14, C11, C33 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §1, §2.3 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §5
> The helm: how a direction is chosen, published, funded, kill-tested and closed.

```law-meta
{
  "id": "law.direction",
  "title": "Direction and Mission Law (宏观引导法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["direction", "governance"],
  "summary": "Operationalises the steering layer of the framework: a small number of published long-horizon missions stated as problems with thresholds, funded through pre-committed demand and prizes, capped in number, kill-tested on published criteria, staffed by one accountable steward, and closed with a published failure report. It also sets the budget envelopes for upstream research and commons maintenance, and the procedure by which citizens, not lobbies, set the priority order.",
  "articles": [
    { "id": "DIR1", "title": "Steering powers and their ceiling", "evidence": ["study:mission-oriented innovation policy literature on state capacity limits"], "falsifier": "If unconstrained directive steering beats this ceilinged, purchase-based steering on the capability index across many domains, the ceiling in DIR1 must be raised." },
    { "id": "DIR2", "title": "Cap on concurrent missions", "evidence": ["pending:portfolio dilution study over the first two review cycles (the illustrative model does not vary portfolio size)"], "falsifier": "If portfolios above the cap show no decline in completion rate or threshold attainment per unit of spend, the cap is bureaucratic and must be removed." },
    { "id": "DIR3", "title": "Mission admission test", "evidence": ["pending:admission-test decisions recorded in the mission ledger and reviewed after three years"], "falsifier": "If missions admitted under this test perform no better than missions admitted by ordinary political priority, the test is theatre and must be replaced." },
    { "id": "DIR4", "title": "The mission record", "evidence": ["audit:completeness of mission records in the national ledger, checked quarterly"], "falsifier": "If complete mission records do not improve cancellation discipline or cost control, the required fields must be cut to those actually used in decisions." },
    { "id": "DIR5", "title": "Problems, not technologies", "evidence": ["study:comparison of technology-picking programmes with problem-based prize programmes"], "falsifier": "If missions that name a technology and fund it alone outperform problem-framed portfolios of three or more approaches, DIR5 must be relaxed for that domain." },
    { "id": "DIR6", "title": "How a direction is adopted", "evidence": ["pending:first full adoption cycle, including the citizen priority vote and its turnout"], "falsifier": "If the citizen priority vote is ignored in practice (adopted missions diverge from the vote without published reasons) in two consecutive cycles, the procedure is decorative and must be rebuilt." },
    { "id": "DIR7", "title": "Budget envelopes", "evidence": ["data:public R&D budget composition and outcomes in comparable jurisdictions"], "falsifier": "If raising the upstream share beyond the envelope produces no increase in mission success or surprise discoveries, the envelope should be lowered to the level actually used." },
    { "id": "DIR8", "title": "Pre-commitment instruments", "evidence": ["study:advance market commitment outcomes for pneumococcal vaccines"], "falsifier": "If advance purchase commitments pay more per unit of acceleration than equivalent open prizes, the mix must shift to prizes." },
    { "id": "DIR9", "title": "Kill criteria and closure", "evidence": ["audit:share of missions closed on kill criteria versus allowed to fade"], "falsifier": "If missions closed on kill criteria show no better resource reallocation than faded missions, closure must be made automatic rather than discretionary." },
    { "id": "DIR10", "title": "The steward", "evidence": ["pending:steward tenure, conflict declarations and mission outcomes, published annually"], "falsifier": "If named stewards show no measurable effect on delivery versus committee stewardship, the role must be abolished rather than retained as a figurehead." },
    { "id": "DIR11", "title": "Foresight and technology assessment", "evidence": ["study:technology assessment bodies and their effect on costly deployment errors"], "falsifier": "If assessment reports do not change any mission decision over three review periods, the office is a publication exercise and must be merged into the evidence office." },
    { "id": "DIR12", "title": "Contracting direction to communities", "evidence": ["pending:share of mission spend contracted below the national level, tracked per mission"], "falsifier": "If community-contracted mission work underperforms central contracting on delivery for three consecutive reviews, the share must be reduced." },
    { "id": "DIR13", "title": "Sunset of the mission programme", "evidence": ["audit:five-year review of the mission programme itself, published with its failures"], "falsifier": "If the five-year review produces no closures or redesigns in two consecutive cycles, the review interval must be halved." }
  ],
  "parameters": [
    { "name": "max_concurrent_missions", "value": 7, "unit": "missions", "evidence": "pending:portfolio dilution study over the first two review cycles" },
    { "name": "max_new_missions_per_year", "value": 2, "unit": "missions/year", "evidence": "pending:absorption capacity of the research workforce" },
    { "name": "mission_budget_share_max", "value": 0.06, "unit": "share of public budget", "evidence": "pending:fiscal stress test in the first pilot" },
    { "name": "upstream_research_share_min", "value": 0.25, "unit": "share of public research budget", "evidence": "pending:correlation between upstream share and later mission success" },
    { "name": "commons_maintenance_share_min", "value": 0.20, "unit": "share of the commons fund", "evidence": "pending:first commons fund cycle" },
    { "name": "kill_after_missed_reviews", "value": 2, "unit": "consecutive reviews", "evidence": "pending:mission ledger closure analysis" },
    { "name": "deliberation_days_min", "value": 60, "unit": "days", "evidence": "vote:adoption referendum design (Constitution C41)" }
  ],
  "metrics": [
    "threshold attainment rate per mission, with published misses",
    "coordination latency: days from mission publication to first funded attempt",
    "duplicate-research ratio: share of mission spend re-deriving known results",
    "mission closure rate on kill criteria",
    "share of mission spend contracted below the national level",
    "upstream share of the public research budget"
  ],
  "sunset": { "review_every_years": 4, "expires": null },
  "dissent": [
    "Any published mission list is a list that lobbies will try to join, and the admission test may be gamed by writing a problem statement that is really a subsidy request. A stronger variant would allocate mission selection to a sortition panel with no institutional memory, at the cost of expertise.",
    "Capping the number of missions may be exactly wrong in a period of rapid technological change, when many parallel bets are cheap; the cap assumes attention and stewardship are the scarce resource, which may be false in domains where execution is buyer-limited."
  ],
  "open_questions": [
    "Should a mission be allowed to name a technology if the problem statement alone has failed to attract any attempt for five years?",
    "How is the steward's accountability enforced when a mission is killed by external events rather than by execution failure?",
    "What happens to a mission's commons obligations if the mission is cancelled mid-way?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: mission admission test, cap, kill criteria, pre-commitment instruments, foresight duty, community contracting, programme sunset." }
  ]
}
```

---

## 1. Purpose and powers

### DIR1 — Steering powers and their ceiling

**Claim.** The steering layer may publish missions, fund research, buy outcomes in advance, award prizes, set open standards, and publish assessments. It may not command any person's or firm's research agenda, conscript labour, ban a research direction, or license who may investigate a question.

**Rationale.** The helm steers by buying certainty for problems nobody will otherwise fund; the moment it starts directing who must work on what, it destroys the local knowledge and voluntary initiative that produce most discoveries.

**Evidence.** `study:` mission-oriented innovation policy literature on state capacity limits.

**Falsifier.** If unconstrained directive steering beats this ceilinged, purchase-based steering on the capability index across many domains, the ceiling in DIR1 must be raised.

### DIR2 — Cap on concurrent missions

**Claim.** At most **7** national missions run at once, with at most **2** new missions adopted per year. A new mission may only be admitted by closing one, or by an explicit supermajority decision that publishes what attention it is displacing.

**Rationale.** A state that runs thirty missions is running none: stewardship, scrutiny and the labour market for researchers are all finite.

**Evidence.** `pending:` portfolio dilution study over the first two review cycles (the illustrative model does not vary portfolio size).

**Falsifier.** If portfolios above the cap show no decline in completion rate or threshold attainment per unit of spend, the cap is bureaucratic and must be removed.

### DIR3 — Mission admission test

**Claim.** A proposal becomes a mission only if it passes all six tests, published with reasoning: (1) the outcome is a public good or a large externality; (2) no single buyer will pay on a profitable schedule; (3) the target is a measurable threshold with a date; (4) the beneficiary population is named and counted; (5) an exit exists if the problem disappears; (6) the same money would not be better spent as open research grants.

**Rationale.** The test is the only thing standing between a direction and a subsidy with a good story.

**Evidence.** `pending:` admission-test decisions recorded in the mission ledger and reviewed after three years.

**Falsifier.** If missions admitted under this test perform no better than missions admitted by ordinary political priority, the test is theatre and must be replaced.

---

## 2. The mission contract

### DIR4 — The mission record

**Claim.** Every mission is published as a machine-readable record containing: problem statement, target metric, threshold, deadline, budget envelope, named steward, exit criteria, kill criteria, and the third-party dependencies it assumes. Records are updated on change and digested monthly.

**Rationale.** A mission whose kill criteria are invented after it fails was never a commitment; it was an appropriation.

**Evidence.** `audit:` completeness of mission records in the national ledger, checked quarterly.

**Falsifier.** If complete mission records do not improve cancellation discipline or cost control, the required fields must be cut to those actually used in decisions.

### DIR5 — Problems, not technologies

**Claim.** A mission states an outcome, never a winning technology. If a specific technology is named anywhere in a mission, at least **three** independent approaches must be funded in parallel, and the naming must be justified in writing as an assumption to be tested.

**Rationale.** States are reliable at naming problems worth solving and unreliable at choosing which technical route solves them.

**Evidence.** `study:` comparison of technology-picking programmes with problem-based prize programmes.

**Falsifier.** If missions that name a technology and fund it alone outperform problem-framed portfolios of three or more approaches, DIR5 must be relaxed for that domain.

### DIR6 — How a direction is adopted

**Claim.** Adoption runs in a fixed annual cycle: the foresight office publishes the state of the art and its gaps; citizens' assemblies and any resident via a public submission channel set a priority order; the evidence office publishes a feasibility and cost review; the elected chamber adopts or rejects within **60** days of deliberation; the sortition chamber may delay once. Every rejection is published with reasons.

**Rationale.** The power to choose the direction of a society is the most consequential power in this framework, so it is the most procedurally constrained.

**Evidence.** `pending:` first full adoption cycle, including the citizen priority vote and its turnout.

**Falsifier.** If the citizen priority vote is ignored in practice (adopted missions diverge from the vote without published reasons) in two consecutive cycles, the procedure is decorative and must be rebuilt.

---

## 3. Money and instruments

### DIR7 — Budget envelopes

**Claim.** Mission spending is capped at **6%** of the public budget. At least **25%** of the public research budget goes to pre-competitive upstream work, and at least **20%** of the commons fund goes to maintaining released capability. All three are published quarterly against actuals.

**Rationale.** Missions are the most visible form of research spending and the easiest to inflate; the envelopes protect the unglamorous upstream and maintenance work that mission spending otherwise eats.

**Evidence.** `data:` public R&D budget composition and outcomes in comparable jurisdictions.

**Falsifier.** If raising the upstream share beyond the envelope produces no increase in mission success or surprise discoveries, the envelope should be lowered to the level actually used.

### DIR8 — Pre-commitment instruments

**Claim.** The state accelerates capital through four published instruments: advance purchase commitments, outcome prizes, guaranteed procurement volumes, and milestone payments. Each requires a published target price, a delivery date, a verification method, and a clawback if delivery is not met. Sole-source awards above a published threshold require the elected chamber's approval.

**Rationale.** Capital is not cowardly about long horizons; it is cowardly about *uncontracted* long horizons. Selling certainty is cheaper than subsidising failure.

**Evidence.** `study:` advance market commitment outcomes for pneumococcal vaccines.

**Falsifier.** If advance purchase commitments pay more per unit of acceleration than equivalent open prizes, the mix must shift to prizes.

### DIR9 — Kill criteria and closure

**Claim.** A mission that misses its threshold at **two** consecutive published reviews is closed automatically unless the elected chamber re-authorises it by supermajority with a written statement of what new evidence justifies continuation. Every closure publishes a failure report including cost, what was learned, and what entered the commons.

**Rationale.** Sunk-cost politics is the most reliable way for a steering state to spend a decade on the wrong problem.

**Evidence.** `audit:` share of missions closed on kill criteria versus allowed to fade.

**Falsifier.** If missions closed on kill criteria show no better resource reallocation than faded missions, closure must be made automatic rather than discretionary.

---

## 4. People and accountability

### DIR10 — The steward

**Claim.** Each mission has exactly one named steward, appointed for its life or **5** years, whichever is shorter, who publishes a conflict-of-interest declaration and may hold no asset in a sector materially affected by the mission. Stewards answer publicly at each review.

**Rationale.** Collective responsibility without a name is how missions drift; a name attached to a published record is how they get closed.

**Evidence.** `pending:` steward tenure, conflict declarations and mission outcomes, published annually.

**Falsifier.** If named stewards show no measurable effect on delivery versus committee stewardship, the role must be abolished rather than retained as a figurehead.

### DIR11 — Foresight and technology assessment

**Claim.** An independent assessment office publishes, for every mission and every material technology: the current state, the uncertainties, the competing approaches, the safety and dual-use risks, and its own dissent. It may not advocate for a mission or a technology.

**Rationale.** Steering without an honest map is guessing with other people's money and lives.

**Evidence.** `study:` technology assessment bodies and their effect on costly deployment errors.

**Falsifier.** If assessment reports do not change any mission decision over three review periods, the office is a publication exercise and must be merged into the evidence office.

### DIR12 — Contracting direction to communities

**Claim.** At least **30%** of each mission's contracted spend goes to entities below the national level — communities, cooperatives, universities, small firms — through open calls, with a published contract register.

**Rationale.** A direction executed only by national laboratories and national champions is a direction that a few institutions can capture and no locality can adapt.

**Evidence.** `pending:` share of mission spend contracted below the national level, tracked per mission.

**Falsifier.** If community-contracted mission work underperforms central contracting on delivery for three consecutive reviews, the share must be reduced.

### DIR13 — Sunset of the mission programme

**Claim.** The mission programme itself — the whole steering apparatus, not any single mission — is re-authorised every **5** years, in a review that publishes what it failed to achieve.

**Rationale.** A permanent steering layer is a permanent incumbent. The apparatus must re-earn its existence, not just its missions.

**Evidence.** `audit:` five-year review of the mission programme itself, published with its failures.

**Falsifier.** If the five-year review produces no closures or redesigns in two consecutive cycles, the review interval must be halved.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `max_concurrent_missions` | 7 | missions | `pending:` portfolio dilution study over the first two review cycles |
| `max_new_missions_per_year` | 2 | missions/year | `pending:` absorption capacity of the research workforce |
| `mission_budget_share_max` | 0.06 | share of public budget | `pending:` fiscal stress test in the first pilot |
| `upstream_research_share_min` | 0.25 | share of public research budget | `pending:` correlation between upstream share and later mission success |
| `commons_maintenance_share_min` | 0.20 | share of the commons fund | `pending:` first commons fund cycle |
| `kill_after_missed_reviews` | 2 | consecutive reviews | `pending:` mission ledger closure analysis |
| `deliberation_days_min` | 60 | days | `vote:` adoption referendum design (Constitution C41) |

All values are **assumptions to be measured in the pilot**, not findings. A parameter whose evidence pointer is `pending:` reverts to a conservative default at each review, per GOVERNANCE.md §10.

## Metrics

- threshold attainment rate per mission, with published misses
- coordination latency: days from mission publication to first funded attempt
- duplicate-research ratio: share of mission spend re-deriving known results
- mission closure rate on kill criteria
- share of mission spend contracted below the national level
- upstream share of the public research budget

## Dissent register

- Any published mission list is a list that lobbies will try to join, and the admission test may be gamed by writing a problem statement that is really a subsidy request. A stronger variant would allocate mission selection to a sortition panel with no institutional memory, at the cost of expertise.
- Capping the number of missions may be exactly wrong in a period of rapid technological change, when many parallel bets are cheap; the cap assumes attention and stewardship are the scarce resource, which may be false in domains where execution is buyer-limited.

## Open questions

- Should a mission be allowed to name a technology if the problem statement alone has failed to attract any attempt for five years?
- How is the steward's accountability enforced when a mission is killed by external events rather than by execution failure?
- What happens to a mission's commons obligations if the mission is cancelled mid-way?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft: mission admission test, cap, kill criteria, pre-commitment instruments, foresight duty, community contracting, programme sunset. |
