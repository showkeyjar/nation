# Civil Law (民法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C6–C8, C27, C32, C38 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §5 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §12
> Persons, things, promises, harm — and liability when software agents are the ones acting.

```law-meta
{
  "id": "law.civil",
  "title": "Civil Law (民法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["governance", "floor"],
  "summary": "General civil law: legal personhood and capacity with dignity safeguards, contract and property rules that expressly cannot block a commons release, a tiered liability regime for autonomous systems and AI agents (operator strict liability for physical harm, mandatory insurance or bonds above a capability threshold, an incident ledger, and a rebuttable presumption against the deployer when logs are withheld), privacy and data rights, tiered dispute resolution with state-funded access and published reasons, remedies including structural remedies against monopolies, and enforcement rules that exclude debtors' prison and protect a wage floor.",
  "articles": [
    { "id": "CIV1", "title": "Personhood and capacity", "evidence": ["study:supported decision-making regimes vs. guardianship outcomes"], "falsifier": "If supported decision-making produces worse outcomes than substituted judgment for any capacity class, the default must be re-specified for that class." },
    { "id": "CIV2", "title": "Contract", "evidence": ["data:contract enforcement quality and investment horizons"], "falsifier": "If any contract class shows systematic one-sided exploitation under these rules, the class must be re-regulated or excluded from enforcement." },
    { "id": "CIV3", "title": "Property, and its boundary with the commons", "evidence": ["pending:first conflicts between property claims and commons releases"], "falsifier": "If the carve-out is used beyond its words to take property without the Capital Engine CAP6 buyout procedure, the constitutional bench must strike the use." },
    { "id": "CIV4", "title": "Autonomous systems and AI agents", "evidence": ["study:liability regimes for automated vehicles and algorithmic harm"], "falsifier": "If strict operator liability measurably suppresses deployment of beneficial agents more than it compensates harm, the threshold for bonding must rise with published reasons." },
    { "id": "CIV5", "title": "The agent incident ledger", "evidence": ["audit:incident ledger completeness and log-production rate in disputes"], "falsifier": "If the log presumption does not increase log retention in disputes, it must convert into a licensing condition for deployment." },
    { "id": "CIV6", "title": "Privacy and data rights", "evidence": ["data:subject-access and deletion request volumes and outcomes"], "falsifier": "If these rights are exercised mainly by the already-advantaged, delivery must be automated (default-off data collection) rather than request-based." },
    { "id": "CIV7", "title": "Tiered dispute resolution", "evidence": ["audit:decision latency and cost per tier, appeal rates"], "falsifier": "If any tier's latency or cost exceeds its published budget for two consecutive years, the tier must be restructured or merged." },
    { "id": "CIV8", "title": "Sortition jurors", "evidence": ["study:lay participation in civil disputes"], "falsifier": "If lay panels increase reversal rates without improving perceived legitimacy, the value threshold for juries must rise." },
    { "id": "CIV9", "title": "Remedies", "evidence": ["pending:first structural remedies issued against dominant providers"], "falsifier": "If structural remedies are systematically ineffective or systematically excessive, the remedy menu must be re-derived." },
    { "id": "CIV10", "title": "Enforcement without humiliation", "evidence": ["data:enforcement regimes and re-insolvency rates"], "falsifier": "If wage-floor protection in enforcement raises credit costs beyond the harm it prevents, the protected share must be re-set." }
  ],
  "parameters": [
    { "name": "agent_bond_threshold", "value": 500000, "unit": "accounting units of expected annual exposure", "evidence": "pending:first agent-deployment bond calibrations" },
    { "name": "jury_value_threshold", "value": 100000, "unit": "accounting units in dispute", "evidence": "study:lay participation in civil disputes" },
    { "name": "mediation_days_max", "value": 60, "unit": "days in community mediation before escalation", "evidence": "pending:first mediation cohort" },
    { "name": "tribunal_decision_days_max", "value": 120, "unit": "days", "evidence": "pending:first tribunal cohort" },
    { "name": "enforcement_wage_protect_share", "value": 0.7, "unit": "share of income shielded from execution", "evidence": "data:enforcement regimes and re-insolvency rates" }
  ],
  "metrics": [
    "decision latency and cost per dispute tier",
    "share of residents able to bring a claim without foregoing necessities",
    "agent incident reports, log production rate, compensation paid",
    "data-rights request volume and fulfilment rate",
    "enforcement outcomes that preserve the wage floor"
  ],
  "sunset": { "review_every_years": 5, "expires": null },
  "dissent": [
    "CIV4-CIV5 make the deployer strictly liable for agent harm and presume against whoever withheld the logs; this allocates the cost of uncertainty to the party with the information, which is efficient but will be experienced as punitive, and may push deployment into less scrupulous jurisdictions.",
    "A civil code this short delegates almost everything to tribunals and the bench; critics will say that is not a code but a mood, and they would be right about the drafting risk."
  ],
  "open_questions": [
    "When an agent acts on instructions from a model updated by a third party, how is causation apportioned between deployer, operator and upstream provider?",
    "Should the bonding threshold be indexed to capability rather than exposure?",
    "Can community mediation handle disputes involving non-resident parties without becoming unenforceable?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft (replaces the empty 2022 stub): personhood, contract, property with commons carve-out, AI agent liability, incident ledger, data rights, tiered dispute resolution, remedies, humane enforcement." }
  ]
}
```

---

## 1. Persons and things

### CIV1 — Personhood and capacity

**Claim.** Every human has full legal personality from birth to death. Capacity is presumed; it is restricted only by a published, reviewable procedure, and the default instrument is supported decision-making with an advocate of one's choice, not substitution by a guardian.

**Rationale.** Dignity (Constitution C32) begins with being presumed able to decide; guardianship should be the exception and the temporary.

**Evidence.** `study:` supported decision-making regimes vs. guardianship outcomes.

**Falsifier.** If supported decision-making produces worse outcomes than substituted judgment for any capacity class, the default must be re-specified for that class.

### CIV2 — Contract

**Claim.** Contracts bind as made, freely, between parties with capacity, for lawful purposes. Standard terms are enforceable only if plain-language, available in every official language, and free of terms that defeat the contract's evident purpose. Unconscionable terms are void.

**Rationale.** Contract is how strangers coordinate without hierarchy; it only works when the fine print cannot quietly reverse the front page.

**Evidence.** `data:` contract enforcement quality and investment horizons.

**Falsifier.** If any contract class shows systematic one-sided exploitation under these rules, the class must be re-regulated or excluded from enforcement.

### CIV3 — Property, and its boundary with the commons

**Claim.** Property includes possession, use, fruit and transfer. No property right, licence claim or contractual restriction may block a commons release performed under [Capital_Engine_Law.md](./Capital_Engine_Law.md) CAP6 (buyout with compensation) or [Development_Law.md](./Development_Law.md) DEV7 (public funding). Outside those procedures, property is taken only for public use, with independent valuation and prompt payment.

**Rationale.** The framework buys what it shares; the carve-out prevents property doctrine from becoming a veto on the conversion valve, and the buyout prevents the carve-out from becoming expropriation.

**Evidence.** `pending:` first conflicts between property claims and commons releases.

**Falsifier.** If the carve-out is used beyond its words to take property without the Capital Engine CAP6 buyout procedure, the constitutional bench must strike the use.

---

## 2. Acting through machines

### CIV4 — Autonomous systems and AI agents

**Claim.** Where an autonomous system or software agent causes physical harm to person or property, its **operator** (the deployer who put it into the world) is strictly liable. Above a capability/exposure threshold, deployment requires insurance or a posted bond. Economic harm from an agent's decisions follows fault, with the operator presumptively at fault for unreviewed delegation.

**Rationale.** Someone must own the consequences of an agent's actions, and the party who chose to deploy is the only party who could have chosen not to; anything else externalises harm onto whoever was standing nearby.

**Evidence.** `study:` liability regimes for automated vehicles and algorithmic harm.

**Falsifier.** If strict operator liability measurably suppresses deployment of beneficial agents more than it compensates harm, the threshold for bonding must rise with published reasons.

### CIV5 — The agent incident ledger

**Claim.** Every harm event involving a deployed agent is reported to a public incident ledger within 72 hours, with logs. In any dispute, the unavailability of logs under the operator's control creates a rebuttable presumption that the facts were as the claimant alleges.

**Rationale.** The party with the telemetry controls the evidence; the presumption makes concealment more expensive than retention.

**Evidence.** `audit:` incident ledger completeness and log-production rate in disputes.

**Falsifier.** If the log presumption does not increase log retention in disputes, it must convert into a licensing condition for deployment.

### CIV6 — Privacy and data rights

**Claim.** Every person has rights of access, correction, deletion, portability and objection over their personal data, a right to meaningful human review of any adverse automated decision, and a right to know they are dealing with an agent rather than a person. No benefit or floor entitlement may be conditioned on waiving these rights.

**Rationale.** Constitutional C7 closes the state's data by default; this article closes the private side.

**Evidence.** `data:` subject-access and deletion request volumes and outcomes.

**Falsifier.** If these rights are exercised mainly by the already-advantaged, delivery must be automated (default-off data collection) rather than request-based.

---

## 3. Disputes

### CIV7 — Tiered dispute resolution

**Claim.** Disputes run: community mediation (≤ **60** days, free) → community tribunal (≤ **120** days, state-funded representation above a hardship line) → regional court → constitutional bench. Reasons are published in anonymised form at every tier above mediation.

**Rationale.** A right that costs a year's income to enforce is a right in name only.

**Evidence.** `audit:` decision latency and cost per tier, appeal rates.

**Falsifier.** If any tier's latency or cost exceeds its published budget for two consecutive years, the tier must be restructured or merged.

### CIV8 — Sortition jurors

**Claim.** Civil panels for disputes above **100,000** units sit with sortition jurors alongside a professional chair, with reasons published.

**Rationale.** The community's sense of fairness is a legal input this framework deliberately uses (Constitution C34); law that never meets it drifts.

**Evidence.** `study:` lay participation in civil disputes.

**Falsifier.** If lay panels increase reversal rates without improving perceived legitimacy, the value threshold for juries must rise.

### CIV9 — Remedies

**Claim.** Remedies include restitution, specific performance, damages, and — against providers above the monopoly threshold — structural remedies: mandated access, divestiture of a component, or transfer of an interface to the commons registry.

**Rationale.** Money alone cannot undo a monopoly; structure is the remedy that can.

**Evidence.** `pending:` first structural remedies issued against dominant providers.

**Falsifier.** If structural remedies are systematically ineffective or systematically excessive, the remedy menu must be re-derived.

### CIV10 — Enforcement without humiliation

**Claim.** No person is imprisoned for debt. Execution of judgments protects at least **70%** of disposable income and the tools of a trade. Essentials of the floor are unreachable by execution.

**Rationale.** Enforcement that destroys the debtor's capacity to earn collects less and costs more; Constitution C32 applies to losers of lawsuits too.

**Evidence.** `data:` enforcement regimes and re-insolvency rates.

**Falsifier.** If wage-floor protection in enforcement raises credit costs beyond the harm it prevents, the protected share must be re-set.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `agent_bond_threshold` | 500,000 | accounting units of expected annual exposure | `pending:` first agent-deployment bond calibrations |
| `jury_value_threshold` | 100,000 | accounting units in dispute | `study:` lay participation in civil disputes |
| `mediation_days_max` | 60 | days in community mediation before escalation | `pending:` first mediation cohort |
| `tribunal_decision_days_max` | 120 | days | `pending:` first tribunal cohort |
| `enforcement_wage_protect_share` | 0.7 | share of income shielded from execution | `data:` enforcement regimes and re-insolvency rates |

## Metrics

- decision latency and cost per dispute tier
- share of residents able to bring a claim without foregoing necessities
- agent incident reports, log production rate, compensation paid
- data-rights request volume and fulfilment rate
- enforcement outcomes that preserve the wage floor

## Dissent register

- CIV4–CIV5 make the deployer strictly liable for agent harm and presume against whoever withheld the logs; this allocates the cost of uncertainty to the party with the information, which is efficient but will be experienced as punitive, and may push deployment into less scrupulous jurisdictions.
- A civil code this short delegates almost everything to tribunals and the bench; critics will say that is not a code but a mood, and they would be right about the drafting risk.

## Open questions

- When an agent acts on instructions from a model updated by a third party, how is causation apportioned between deployer, operator and upstream provider?
- Should the bonding threshold be indexed to capability rather than exposure?
- Can community mediation handle disputes involving non-resident parties without becoming unenforceable?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft (replaces the empty 2022 stub): personhood, contract, property with commons carve-out, AI agent liability, incident ledger, data rights, tiered dispute resolution, remedies, humane enforcement. |
