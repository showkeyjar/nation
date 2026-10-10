# Earn and Pay Law (劳动与报酬法)

> Version 0.1.1 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C15, C27–C31 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §2.4 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §10
> The wage-and-voice layer between the engine and the floor.

```law-meta
{
  "id": "law.earn-and-pay",
  "title": "Earn and Pay Law (劳动与报酬法)",
  "version": "0.1.1",
  "status": "draft",
  "adopted": null,
  "pillars": ["engine", "floor"],
  "summary": "Sets the wage floor and its indexation to the social floor, pay transparency and gap audits, a default profit-and-equity share for employees of larger firms, working-time limits with a right to disconnect, the bogus-self-employment test and platform pay rules, worker voice including board representation and the right to strike, the employee and community right of first offer when a firm is sold, transition income and retraining when missions close or sectors shed labour, care-work recognition, the public sector as a model employer with a capped pay ratio, and the labour-share trigger that forces an automatic review when labour's share of income falls.",
  "articles": [
    { "id": "PAY1", "title": "The wage floor", "evidence": ["data:minimum wage employment effects literature"], "falsifier": "If the wage floor at 1.15x the social floor reduces employment among low-hours workers more than it raises their total earnings, the multiple must be re-derived with pilot data." },
    { "id": "PAY2", "title": "Pay transparency", "evidence": ["study:pay transparency effects on gaps and bargaining"], "falsifier": "If transparency narrows gaps only by levelling pay down, publication must be paired with the PAY12 review trigger." },
    { "id": "PAY3", "title": "Default profit and equity sharing", "evidence": ["study:Kruse 1993 (Profit Sharing: Does It Make a Difference?); Doucouliagos 1995 meta-analysis of profit sharing and productivity"], "falsifier": "If mandatory sharing reduces firm formation or growth above the costs it imposes, the threshold or the share must be raised, not the principle abandoned." },
    { "id": "PAY4", "title": "Working time", "evidence": ["study:UK four-day week pilot 2022–2023 (61–64 firms, Burchell et al. 2023 report): revenue broadly held, turnover and sickness absence fell"], "falsifier": "If reduced standard hours reduce output per firm more than health and participation gains, the standard must be re-set from the trial data." },
    { "id": "PAY5", "title": "The bogus self-employment test", "evidence": ["data:platform work hour and wage audits"], "falsifier": "If the test reclassifies genuinely independent workers, it must be narrowed to control-and-dependence criteria." },
    { "id": "PAY6", "title": "Worker voice", "evidence": ["study:co-determination outcomes"], "falsifier": "If board representation produces no measurable change in closure, safety or pay decisions, it is ceremonial and must be replaced by bargaining rights only." },
    { "id": "PAY7", "title": "Safety and the right to refuse", "evidence": ["data:refusal-right regimes and incident rates"], "falsifier": "If the right to refuse is followed by retaliatory dismissal at the same rate as before, enforcement must move to automatic reinstatement." },
    { "id": "PAY8", "title": "Right of first offer", "evidence": ["pending:first employee and community buyouts under this article"], "falsifier": "If the right of first offer is systematically bypassed by pre-arranged sales, it must attach to the asset transfer itself, not the negotiation." },
    { "id": "PAY9", "title": "Transition income and retraining", "evidence": ["pending:mission closure cohorts and their two-year outcomes"], "falsifier": "If transition income does not shorten return-to-work time versus the floor alone, it should merge into the floor." },
    { "id": "PAY10", "title": "Care work", "evidence": ["study:care leave and pension credit effects on participation"], "falsifier": "If the care credit reduces carers' lifetime earnings without raising participation, it must be restructured as wage insurance." },
    { "id": "PAY11", "title": "The state as model employer", "evidence": ["audit:public pay ratios published annually"], "falsifier": "If the capped ratio degrades public-sector capability measurably, the cap must rise with a published justification." },
    { "id": "PAY12", "title": "The labour-share trigger", "evidence": ["study:Elsby, Hobijn & Sahin 2013 (Brookings Papers on Economic Activity, The Decline of the U.S. Labor Share)"], "falsifier": "If the trigger fires repeatedly with no change in outcomes, it must escalate to a mandatory capital-share levy proposal rather than a review." }
  ],
  "parameters": [
    { "name": "wage_floor_multiple", "value": 1.15, "unit": "multiple of the social floor", "evidence": "pending:pilot interaction with Social Floor FLR9" },
    { "name": "profit_share_firm_size", "value": 50, "unit": "employees (threshold)", "evidence": "pending:firm-size distribution analysis" },
    { "name": "profit_share_min", "value": 0.1, "unit": "share of profits to employee trust", "evidence": "study:profit sharing and productivity" },
    { "name": "equity_share_min", "value": 0.05, "unit": "share of equity to employee trust", "evidence": "study:employee ownership outcomes" },
    { "name": "standard_week_hours", "value": 40, "unit": "hours", "evidence": "study:working-hours and productivity" },
    { "name": "overtime_premium", "value": 1.5, "unit": "multiplier", "evidence": "data:overtime premium regimes" },
    { "name": "public_pay_ratio_cap", "value": 12, "unit": "highest-to-lowest full-time pay", "evidence": "pending:first public pay audit" },
    { "name": "labour_share_trigger", "value": 0.55, "unit": "labour share of net income, 3-year average", "evidence": "study:Elsby, Hobijn & Sahin 2013 (Brookings Papers on Economic Activity, The Decline of the U.S. Labor Share)" }
  ],
  "metrics": [
    "labour share of net income, 3-year moving average",
    "gender and origin pay gaps at each decile",
    "firm formation and growth rates above and below the sharing threshold",
    "platform worker hourly earnings including waiting time",
    "transition time from mission closure to next work",
    "public-sector pay ratio and capability indicators"
  ],
  "sunset": { "review_every_years": 4, "expires": null },
  "dissent": [
    "PAY3 (mandatory profit and equity sharing) is the most intrusive article in the engine pillar and the most likely to deter capital; the thresholds are set to bite only above 50 employees precisely because the draft cannot cost the deterrent.",
    "A wage floor tied to the social floor imports every error of the floor into the cost base of every small employer; a hostile pilot could show job losses concentrated exactly where the floor was meant to help."
  ],
  "open_questions": [
    "Should profit sharing vest immediately or after a qualifying period, and what happens to the trust on sale?",
    "Can the right of first offer coexist with capital mobility commitments under Capital Engine CAP11?",
    "Is the labour-share trigger meaningful in an economy where mission and commons employment blurs the labour/capital boundary?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: wage floor, transparency, profit and equity sharing, working time, self-employment test, voice, safety, right of first offer, transition income, care work, model employer, labour-share trigger." },
    { "version": "0.1.1", "date": "2026-10-10", "change": "Evidence upgrade: citable literature replaces descriptive pointers (W008 reduction)." }
  ]
}
```

---

## 1. Paying

### PAY1 — The wage floor

**Claim.** No employment may be paid below **1.15×** the social floor's monthly value for full-time work, pro-rated for part-time. The wage floor is indexed with the floor.

**Rationale.** If work pays less than not working, the floor becomes a subsidy to low-wage employers; if it pays far more, small firms bear a cost the state chose.

**Evidence.** `data:` minimum wage employment effects literature.

**Falsifier.** If the wage floor at 1.15× the social floor reduces employment among low-hours workers more than it raises their total earnings, the multiple must be re-derived with pilot data.

### PAY2 — Pay transparency

**Claim.** Every employer publishes pay bands by role, and the median and gap by gender and origin at each band, annually. Any worker may learn the median of their band without retaliation.

**Rationale.** Unequal pay survives only in darkness; darkness is cheap to end.

**Evidence.** `study:` pay transparency effects on gaps and bargaining.

**Falsifier.** If transparency narrows gaps only by levelling pay down, publication must be paired with the PAY12 review trigger.

### PAY3 — Default profit and equity sharing

**Claim.** Firms with ≥ **50** employees allocate ≥ **10%** of profits to an employee trust and ≥ **5%** of equity to the same trust, distributed by a published formula, vested on a published schedule. Co-operatives and firms with equivalent arrangements are credited.

**Rationale.** If capital is the engine of this framework, the people who run the engine should hold a share of it — not as charity, but because broad ownership is the domestic version of the commons conversion.

**Evidence.** `study:` Kruse 1993 (Profit Sharing: Does It Make a Difference?); Doucouliagos 1995 meta-analysis of profit sharing and productivity.

**Falsifier.** If mandatory sharing reduces firm formation or growth above the costs it imposes, the threshold or the share must be raised, not the principle abandoned.

### PAY4 — Working time

**Claim.** The standard working week is **40** hours; overtime above it is voluntary and paid at **1.5×**; on-call time is working time; every worker has the right to disconnect outside agreed hours. Trials of shorter standard weeks run under GOVERNANCE §6 with pre-registered metrics.

**Rationale.** The floor exists so people can take risks; working time rules exist so they can have a life while doing it.

**Evidence.** `study:` UK four-day week pilot 2022–2023 (61–64 firms, Burchell et al. 2023 report): revenue broadly held, turnover and sickness absence fell.

**Falsifier.** If reduced standard hours reduce output per firm more than health and participation gains, the standard must be re-set from the trial data.

### PAY5 — The bogus self-employment test

**Claim.** A worker is an employee if the payer controls what, when or how the work is done, or the worker depends on the payer for most of their income. Platform workers are paid for all engaged time including waiting, at or above the wage floor, with portable benefits.

**Rationale.** "Self-employment" is the cheapest way yet invented to transfer the floor's cost from an employer to the public.

**Evidence.** `data:` platform work hour and wage audits.

**Falsifier.** If the test reclassifies genuinely independent workers, it must be narrowed to control-and-dependence criteria.

---

## 2. Voice and change

### PAY6 — Worker voice

**Claim.** Firms above the sharing threshold reserve ≥ **1/3** of board seats for employee representatives. All firms have safety committees, information and consultation rights on closure or relocation, and the right to strike and to bargain collectively without blacklisting.

**Rationale.** Voice at work is where a society practises the collective decision-making its constitution demands of it.

**Evidence.** `study:` co-determination outcomes.

**Falsifier.** If board representation produces no measurable change in closure, safety or pay decisions, it is ceremonial and must be replaced by bargaining rights only.

### PAY7 — Safety and the right to refuse

**Claim.** Any worker may refuse work they reasonably believe unsafe, with pay protected and no retaliation; refusals and incidents go to a public ledger; safety committees may halt operations pending inspection.

**Rationale.** A right to refuse that costs your job is not a right; a ledger makes the pattern visible before the funeral.

**Evidence.** `data:` refusal-right regimes and incident rates.

**Falsifier.** If the right to refuse is followed by retaliatory dismissal at the same rate as before, enforcement must move to automatic reinstatement.

### PAY8 — Right of first offer

**Claim.** Before a firm above the sharing threshold is sold, closed or relocated, employees and the host community have the right of first offer at the independently assessed value, with access to public bridging finance.

**Rationale.** Closure decisions that affect a community should be negotiable with the community, not merely announced to it.

**Evidence.** `pending:` first employee and community buyouts under this article.

**Falsifier.** If the right of first offer is systematically bypassed by pre-arranged sales, it must attach to the asset transfer itself, not the negotiation.

### PAY9 — Transition income and retraining

**Claim.** When a mission closes, a released capability disrupts a sector, or a firm sheds ≥ **20%** of its workforce, affected workers receive transition income above the floor for **24** months plus funded retraining, with automatic enrolment.

**Rationale.** The framework asks people to accept rapid change; the honest price of that is not letting the cost of speed land on the people who happened to be in its path.

**Evidence.** `pending:` mission closure cohorts and their two-year outcomes.

**Falsifier.** If transition income does not shorten return-to-work time versus the floor alone, it should merge into the floor.

### PAY10 — Care work

**Claim.** Care leave is paid at wage insurance rates; care years accrue pension credit; the care-work credit in [Marriage_Law.md](./Marriage_Law.md) applies to asset division.

**Rationale.** Unpaid care is the largest unpriced sector in any economy; pretending otherwise shows up later as poverty in old age, concentrated in whichever gender did the caring.

**Evidence.** `study:` care leave and pension credit effects on participation.

**Falsifier.** If the care credit reduces carers' lifetime earnings without raising participation, it must be restructured as wage insurance.

### PAY11 — The state as model employer

**Claim.** Public-sector full-time pay is capped at **12×** the lowest full-time public wage; the ratio and its trend are published annually.

**Rationale.** A state that preaches shared progress while running a 40× internal pay spread has already answered the question this framework asks.

**Evidence.** `audit:` public pay ratios published annually.

**Falsifier.** If the capped ratio degrades public-sector capability measurably, the cap must rise with a published justification.

### PAY12 — The labour-share trigger

**Claim.** If labour's share of net income falls below **0.55** (3-year average), an automatic review opens and the elected chamber must respond within 60 days with a published analysis and, if it proposes nothing, a statement of why.

**Rationale.** In an economy designed to reward capital for accelerating discovery, the distribution of the reward must be watched, not assumed.

**Evidence.** `study:` Elsby, Hobijn & Sahin 2013 (Brookings Papers on Economic Activity, The Decline of the U.S. Labor Share).

**Falsifier.** If the trigger fires repeatedly with no change in outcomes, it must escalate to a mandatory capital-share levy proposal rather than a review.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `wage_floor_multiple` | 1.15 | multiple of the social floor | `pending:` pilot interaction with Social Floor FLR9 |
| `profit_share_firm_size` | 50 | employees (threshold) | `pending:` firm-size distribution analysis |
| `profit_share_min` | 0.1 | share of profits to employee trust | `study:` profit sharing and productivity |
| `equity_share_min` | 0.05 | share of equity to employee trust | `study:` employee ownership outcomes |
| `standard_week_hours` | 40 | hours | `study:` working-hours and productivity |
| `overtime_premium` | 1.5 | multiplier | `data:` overtime premium regimes |
| `public_pay_ratio_cap` | 12 | highest-to-lowest full-time pay | `pending:` first public pay audit |
| `labour_share_trigger` | 0.55 | labour share of net income, 3-year average | `study:` Elsby, Hobijn & Sahin 2013 (Brookings Papers on Economic Activity, The Decline of the U.S. Labor Share) |

## Metrics

- labour share of net income, 3-year moving average
- gender and origin pay gaps at each decile
- firm formation and growth rates above and below the sharing threshold
- platform worker hourly earnings including waiting time
- transition time from mission closure to next work
- public-sector pay ratio and capability indicators

## Dissent register

- PAY3 (mandatory profit and equity sharing) is the most intrusive article in the engine pillar and the most likely to deter capital; the thresholds are set to bite only above 50 employees precisely because the draft cannot cost the deterrent.
- A wage floor tied to the social floor imports every error of the floor into the cost base of every small employer; a hostile pilot could show job losses concentrated exactly where the floor was meant to help.

## Open questions

- Should profit sharing vest immediately or after a qualifying period, and what happens to the trust on sale?
- Can the right of first offer coexist with capital mobility commitments under Capital Engine CAP11?
- Is the labour-share trigger meaningful in an economy where mission and commons employment blurs the labour/capital boundary?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft: wage floor, transparency, profit and equity sharing, working time, self-employment test, voice, safety, right of first offer, transition income, care work, model employer, labour-share trigger. |
| 0.1.1 | 2026-10-10 | Evidence upgrade: citable literature replaces descriptive pointers (W008 reduction). |
