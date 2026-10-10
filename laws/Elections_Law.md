# Elections and Referendums Law (选举与公投法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C34, C39–C41, C43 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §5 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §6, §7
> The helm's human interface: who sits in the chambers, how questions reach the people, and how easily any of it can be undone.

```law-meta
{
  "id": "law.elections",
  "title": "Elections and Referendums Law (选举与公投法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["governance"],
  "summary": "Implements the two chambers and the referendum track: proportional election of the elected chamber with term limits, stratified sortition for the second chamber, petition and referendum thresholds with the double-majority rule for entrenched questions, mandatory deliberation and evidence packs before any vote, public-only campaign finance, voting procedure with paper trail and resident observation, recall, and an independent boundary and registry commission measured by its own error rates.",
  "articles": [
    { "id": "ELE1", "title": "Franchise", "evidence": ["data:registry accuracy by age, region and mobility (ledger)"], "falsifier": "If any tracked group is registered at materially lower rates than the population, registration becomes an affirmative duty of the registry commission, not of the voter." },
    { "id": "ELE2", "title": "The elected chamber", "evidence": ["study:proportional representation and representation outcomes (e.g., Lijphart 1999 Patterns of Democracy)"], "falsifier": "If chamber fragmentation produces average government lifespans under the review cycle of the laws it amends, the threshold must rise before the term is extended." },
    { "id": "ELE3", "title": "The sortition chamber", "evidence": ["study:citizen assembly outcomes and satisfaction (e.g., OECD Catching the Deliberative Wave 2020)"], "falsifier": "If sortition members' votes correlate with the body that trained them rather than with the evidence packs they received, the induction process is captured and must be redesigned." },
    { "id": "ELE4", "title": "Petition and referendum thresholds", "evidence": ["data:petition signatures, verification rates, turnout and outcomes (ledger)"], "falsifier": "If verified petition rates exceed the queue's processing capacity for two cycles, the petition threshold is too low or the queue is underfunded — one of the two, measured." },
    { "id": "ELE5", "title": "Deliberation before every vote", "evidence": ["study:deliberative-mini-public effects on ballot comprehension (e.g., OECD 2020)"], "falsifier": "If ballot comprehension scores fall below the published floor after two cycles without assembly review, the review becomes mandatory by default." },
    { "id": "ELE6", "title": "Public-only campaign finance", "evidence": ["study:campaign finance and capture (e.g., Gilens & Page 2014 on policy responsiveness)"], "falsifier": "If influence migrates to unregulated channels (measured by spending audits), the cap architecture is leaky and must be re-specified, not raised." },
    { "id": "ELE7", "title": "Information rules", "evidence": ["audit:label compliance, right-of-reply invocation and outcomes"], "falsifier": "If labelled-but-false content outperforms truthful content in measured persuasion, labelling is insufficient and platform-neutral carriage duties must be considered by referendum." },
    { "id": "ELE8", "title": "Voting procedure", "evidence": ["audit:count accuracy in mandatory sample audits vs. first count"], "falsifier": "If sample audits disagree with first counts beyond tolerance more than once in any cycle, the counting procedure — not the audits — is downgraded and recounted in full." },
    { "id": "ELE9", "title": "Recall", "evidence": ["data:recall petitions, grounds found valid, outcomes (ledger)"], "falsifier": "If recalls are used predominantly against minority-protected representatives rather than for incapacity or capture, the grounds list has failed and must be closed to behaviour-only." },
    { "id": "ELE10", "title": "Boundaries and registry", "evidence": ["audit:boundary changes vs. partisan outcome simulations"], "falsifier": "If simulated seat outcomes swing more than a published tolerance under alternative neutral algorithms, the commission's method — not its members — must be replaced." }
  ],
  "parameters": [
    { "name": "chamber_term_years", "value": 4, "unit": "years per elected term", "evidence": "pending:first two full cycles" },
    { "name": "term_limit", "value": 2, "unit": "consecutive terms, elected chamber", "evidence": "pending:first incumbency-vs-outcome audit" },
    { "name": "referendum_petition_share", "value": 0.05, "unit": "share of eligible voters, verified signatures", "evidence": "pending:first three petition cycles" },
    { "name": "referendum_turnout_quorum", "value": 0.4, "unit": "share of eligible voters for ordinary questions", "evidence": "pending:first quorum-failure analysis" },
    { "name": "sortition_size", "value": 150, "unit": "members per sortition chamber cohort", "evidence": "pending:first cohort representativeness audit" },
    { "name": "sortition_service_interval_years", "value": 10, "unit": "minimum years between service for one person", "evidence": "pending:first re-selection rate audit" },
    { "name": "recall_petition_share", "value": 0.2, "unit": "share of the constituency, verified", "evidence": "pending:first recall cycle" }
  ],
  "metrics": [
    "registration completeness by tracked group",
    "ballot comprehension score by question",
    "verified petition rate and queue time",
    "campaign spending outside public channels",
    "sample audit disagreement rate",
    "turnout by decile and by question type"
  ],
  "sunset": { "review_every_years": 4, "expires": null },
  "dissent": [
    "The double-majority rule plus quorum makes entrenchment nearly reversible-only: a minority of communities can block what a majority of people want, and this law provides no release valve short of constitutional crisis.",
    "Public-only campaign finance incumbent-protects: challengers depend on the state's own allocation formula, and nothing stops the majority writing rules that quietly starve its critics.",
    "Sortition's dignity and representativeness are asserted from small-scale trials; at national scale, self-selection into service may skew every cohort toward the confident and the available."
  ],
  "open_questions": [
    "Should voting age track the working age (PAY1), the criminal majority (CRI4) or neither?",
    "Can ELE7's labelling rule survive an adversary that floods rather than persuades?",
    "Is one non-renewable long term (as the central bank uses) better than two short terms for chamber members?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: franchise, proportional elected chamber with term limits, stratified sortition chamber, petition and referendum thresholds with double majority, mandatory deliberation and evidence packs, public-only campaign finance, information and labelling rules, voting procedure with paper trail and resident observation, recall, boundaries and registry commission." }
  ]
}
```

---

## 1. The human interface

Every other law in this blueprint can be read as a machine; this one is the machine's hands. It implements C39 (two chambers), C40 (evidence before vote), C41 (petition and referendum), C43 (emergency limits), and the anti-capture rules of GOVERNANCE §7.

### ELE1 — Franchise

**Claim.** Every citizen aged 16 or older may vote in national elections and referendums; every resident aged 16 or older may vote in community assemblies ([Community Law](./Community_Law.md) CMT3). Voting rights continue during custody (CRI5). Registration is automatic; the registry's error rate is a published metric.

**Rationale.** The floor attaches to residence (C27); the franchise follows citizenship, with community self-management open to all who live there — the distinction Immigration Law IMM4 governs.

**Evidence.** `data:` registry accuracy by age, region and mobility (ledger).

**Falsifier.** If any tracked group is registered at materially lower rates, registration becomes the registry commission's affirmative duty, not the voter's.

### ELE2 — The elected chamber

**Claim.** The elected chamber is chosen by proportional representation in multi-member districts for `chamber_term_years` years, with a published seat-allocation formula, no separate party lists (open lists only), and a limit of `term_limit` consecutive terms per member.

**Rationale.** Proportional open lists keep members answerable to voters rather than to list-writers; term limits keep the chamber from calcifying into the professional class C39 warns about.

**Evidence.** `study:` proportional representation and representation outcomes (Lijphart 1999).

**Falsifier.** If fragmentation produces average government lifespans under the review cycle of the laws it amends, the threshold rises before the term extends.

### ELE3 — The sortition chamber

**Claim.** The second chamber is a stratified sample of `sortition_size` residents, drawn yearly by lot, stratified by age, region and occupation, serving one non-renewable term with induction, evidence packs, staffing and pay protection. A person re-enters the pool no sooner than `sortition_service_interval_years` years.

**Rationale.** Sortition is the anti-career chamber: it cannot be re-elected, so it cannot be lobbied with a future. Its authority is representativeness, not expertise — expertise arrives as evidence packs and witnesses.

**Evidence.** `study:` citizen assembly outcomes (OECD Catching the Deliberative Wave 2020).

**Falsifier.** If members' votes correlate with the body that trained them rather than the evidence they received, induction is captured and must be redesigned.

### ELE4 — Petition and referendum thresholds

**Claim.** A petition signed by `referendum_petition_share` of eligible voters, verified within a statutory deadline, puts a question on the referendum calendar. Ordinary questions pass by simple majority with turnout of at least `referendum_turnout_quorum`; questions amending entrenched articles (Constitution C43) require the **double majority**: a majority of voters overall and a majority of communities (CMT2 units).

**Rationale.** Low petition thresholds make the referendum track real; the double majority makes entrenchment changes consented to by the federation of communities rather than by dense population alone.

**Evidence.** `data:` petition signatures, verification rates, turnout and outcomes (ledger).

**Falsifier.** If verified petitions exceed queue capacity for two cycles, either the threshold is too low or the queue underfunded — measured, not assumed.

### ELE5 — Deliberation before every vote

**Claim.** Every referendum question is reviewed by a citizens' assembly (drawn as ELE3) whose task is to publish a plain-language statement of what a Yes and a No each do, the evidence on each side with pointers, and the strongest objection to each. The statement ships with the ballot. No vote proceeds without it.

**Rationale.** C40 demands evidence before decision; this is its physical form for the whole public.

**Evidence.** `study:` deliberative mini-publics and ballot comprehension (OECD 2020).

**Falsifier.** If comprehension scores fall below the published floor after two cycles, review becomes mandatory by default.

### ELE6 — Public-only campaign finance

**Claim.** Campaigns for chamber seats and referendums are financed by public allocation by formula (seat-agnostic, history-agnostic for new entrants). Private and corporate contributions above a small individual amount are prohibited; everything spent is published within days, including third-party spending.

**Rationale.** Money is the classic capture vector (GOVERNANCE §7); public-only finance removes it at the source rather than regulating its flow.

**Evidence.** `study:` campaign finance and capture (Gilens & Page 2014).

**Falsifier.** If influence migrates to unregulated channels, the architecture is leaky and must be re-specified, not raised.

### ELE7 — Information rules

**Claim.** Any campaign material that is machine-generated, or paid to be amplified, must carry a label naming its payer and its generating system. Broadcasters and platforms carrying campaign content owe a right of reply under statutory deadlines. Deepfake depictions of candidates within a campaign period must be taken down on order of the bench.

**Rationale.** The voter's problem is not opinion but synthetic volume; labelling and reply rights are the narrowest rules that address it without a ministry of truth.

**Evidence.** `audit:` label compliance, right-of-reply invocation and outcomes.

**Falsifier.** If labelled-but-false content outperforms truthful content in measured persuasion, carriage duties must be considered — by referendum, not by decree.

### ELE8 — Voting procedure

**Claim.** Voting is by paper ballot or voter-verified paper record, counted within a statutory window, observable by any resident, with a mandatory random sample audit of every contest. Results are official only after the audit.

**Rationale.** An unverifiable election poisons every other mechanism in this blueprint; paper and observation are the primitive technologies that keep verification in citizen hands.

**Evidence.** `audit:` count accuracy in sample audits vs. first count.

**Falsifier.** If sample audits disagree with first counts beyond tolerance more than once per cycle, the counting procedure is downgraded and recounted in full.

### ELE9 — Recall

**Claim.** A member of the elected chamber or a steward (DIR10) is recalled by petition of `recall_petition_share` of the constituency plus a majority vote, on grounds limited to incapacity, proven capture (C44), or conviction for a serious offence (CRI2). Recall is unavailable in the first year of a term and costs the petitioners nothing if verified.

**Rationale.** Recall exists for betrayal, not disagreement; narrowing the grounds is what keeps it from becoming a second election run by the losing side.

**Evidence.** `data:` recall petitions, grounds found valid, outcomes (ledger).

**Falsifier.** If recalls target minority-protected representatives rather than incapacity or capture, the grounds list closes to behaviour-only.

### ELE10 — Boundaries and registry

**Claim.** An independent commission, staffed from the statistics office (C36), draws and publishes district boundaries from registry data under a published algorithm with public input; its error metrics — registration completeness, duplicate and dead-entry rates — are quarterly dashboard items (C35).

**Rationale.** The district pen and the voter roll are the two quiet ways to steal an election; both belong to a body whose product is measured error, not to whoever benefits from it.

**Evidence.** `audit:` boundary changes vs. partisan outcome simulations.

**Falsifier.** If simulated outcomes swing beyond published tolerance under neutral alternative algorithms, the commission's method — not its members — is replaced.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `chamber_term_years` | 4 | years per elected term | `pending:` first two full cycles |
| `term_limit` | 2 | consecutive terms, elected chamber | `pending:` first incumbency-vs-outcome audit |
| `referendum_petition_share` | 0.05 | share of eligible voters, verified signatures | `pending:` first three petition cycles |
| `referendum_turnout_quorum` | 0.4 | share of eligible voters for ordinary questions | `pending:` first quorum-failure analysis |
| `sortition_size` | 150 | members per sortition chamber cohort | `pending:` first cohort representativeness audit |
| `sortition_service_interval_years` | 10 | minimum years between service for one person | `pending:` first re-selection rate audit |
| `recall_petition_share` | 0.2 | share of the constituency, verified | `pending:` first recall cycle |

## Dissent register

- The double-majority rule plus quorum makes entrenchment nearly reversible-only: a minority of communities can block what a majority of people wants, with no release valve short of constitutional crisis.
- Public-only campaign finance protects incumbents: challengers depend on the state's own formula.
- Sortition's representativeness is asserted from small trials; at scale, self-selection may skew every cohort toward the confident and the available.

## Open questions

- Should voting age track working age (PAY1), criminal majority (CRI4), or neither?
- Can ELE7 labelling survive an adversary that floods rather than persuades?
- One long non-renewable term instead of two short terms for chamber members?
