# Defense Law (国防法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C7, C9, C11, C15, C21–C25, C38, C43 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §1, §5 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §11
> Force under published rules, with a clock on every secret.

```law-meta
{
  "id": "law.defense",
  "title": "Defense Law (国防法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["governance", "direction"],
  "summary": "Narrow lawful purposes for armed force (defence, protection of residents, published treaty obligations, disaster response) with an explicit prohibition on internal political control and on enforcing economic claims abroad. Defence runs as missions in the mission ledger with published budgets under separation of steering, command and audit. Public funding means public capability except on a published, minimised, time-limited exception list with declassification dates. Dual-use research defaults to the commons. Open competitive procurement with published unit costs and standing adversarial audit. Conscription prohibited except in a declared, time-boxed, auditable defensive emergency with civilian alternative service. Published rules of engagement and a public use-of-force incident ledger. Veterans folded into the floor without conditionality. Arms exports under published human-rights and escalation criteria with a public register. Civil defence and disaster response as the primary peacetime function, with a target share of the budget.",
  "articles": [
    { "id": "DEF1", "title": "Lawful purposes", "evidence": ["vote:entrenchment of purpose limits in comparable constitutions"], "falsifier": "If force is used for any purpose outside the four listed, the use is unlawful and the command liability attaches personally, whatever the operational outcome." },
    { "id": "DEF2", "title": "Defence as missions", "evidence": ["audit:mission ledger entries for defence, with thresholds and kill criteria"], "falsifier": "If defence missions are funded outside the mission ledger's discipline for more than one budget cycle, the exception has become the rule and the bench must strike it." },
    { "id": "DEF3", "title": "Separation of steering, command and audit", "evidence": ["data:civilian control regimes and coup/incident rates"], "falsifier": "If separation slows verified crisis response beyond published limits, a joint cell with mandatory post-crisis audit may be created, never a permanent merger." },
    { "id": "DEF4", "title": "Public funding, public capability", "evidence": ["study:secrey regimes and their effect on duplication and cost"], "falsifier": "If the exception list grows, or items miss declassification dates, the exception regime has become concealment and must be cut back (mirrors Development DEV12)." },
    { "id": "DEF5", "title": "Dual-use defaults to commons", "evidence": ["data:dual-use spinoff value of published defence research"], "falsifier": "If publishing dual-use results measurably increases adversary capability faster than it advances this nation's, the default must be narrowed to delay, not exclusivity." },
    { "id": "DEF6", "title": "Procurement in the open", "evidence": ["audit:procurement register, unit costs, tender counts, sole-source share"], "falsifier": "If open procurement raises cost or delay without reducing fraud and gold-plating, thresholds must be re-derived rather than secrecy restored." },
    { "id": "DEF7", "title": "No conscription, one exception", "evidence": ["data:conscript vs. professional force performance and social cost"], "falsifier": "If the time-boxed exception is invoked more than once in a generation, or its sunset is routinely renewed, it has become conscription by instalments and must be struck." },
    { "id": "DEF8", "title": "Published rules of engagement and incident ledger", "evidence": ["data:public ROE regimes and accountability outcomes"], "falsifier": "If incident reporting lags or is incomplete relative to the statutory window, command liability attaches for the reporting failure itself." },
    { "id": "DEF9", "title": "Veterans in the floor", "evidence": ["data:veteran support regimes vs. conditionality-based outcomes"], "falsifier": "If veterans' outcomes (health, housing, employment) fall below population medians for two consecutive audits, delivery has failed regardless of programme existence." },
    { "id": "DEF10", "title": "Arms exports", "evidence": ["data:arms export control regimes and conflict escalation correlates"], "falsifier": "If approved exports correlate with escalation or grave-rights violations in recipients, the criteria must be tightened and the approving body reconstituted." },
    { "id": "DEF11", "title": "Civil defence first", "evidence": ["data:disaster response demand vs. force structure allocation"], "falsifier": "If the civil-defence share does not rise while disaster response demand does, the target is a slogan and must be hardened into a budget rule." },
    { "id": "DEF12", "title": "Emergency powers with a clock", "evidence": ["data:emergency powers that outlived their emergency"], "falsifier": "If renewable emergency authority is used for ordinary purposes in peacetime, the renewal route must be closed entirely." }
  ],
  "parameters": [
    { "name": "defence_budget_share_max", "value": 0.03, "unit": "share of public budget in peacetime", "evidence": "pending:pilot fiscal stress test" },
    { "name": "civil_defence_share_min", "value": 0.3, "unit": "share of defence budget for disaster and civil response", "evidence": "pending:first force-structure review" },
    { "name": "security_exception_max_years", "value": 10, "unit": "years to declassification, extendable once by supermajority", "evidence": "pending:first declassification cycle" },
    { "name": "exception_list_review_years", "value": 1, "unit": "years between exception-list reviews", "evidence": "audit:exception list size trend" },
    { "name": "emergency_sunset_days", "value": 90, "unit": "days per declaration, renewable once by supermajority", "evidence": "data:emergency power sunset regimes" },
    { "name": "incident_report_hours", "value": 72, "unit": "hours to report any use of force", "evidence": "data:public ROE regimes" },
    { "name": "export_criteria_review_years", "value": 2, "unit": "years", "evidence": "pending:first export register review" }
  ],
  "metrics": [
    "defence and civil-defence budget shares, published quarterly",
    "exception-list size and on-time declassification rate",
    "procurement unit-cost trend and sole-source share",
    "incident reports within statutory window and accountability outcomes",
    "veteran outcomes vs. population medians",
    "export approvals, refusals and post-hoc recipient assessments"
  ],
  "sunset": { "review_every_years": 5, "expires": null },
  "dissent": [
    "A 3% peacetime cap and a 30% civil-defence share describe a nation with forgiving neighbours; a hostile security environment breaks both numbers immediately, and the draft's only honest answer is that this law is written for the pilot, not for wartime.",
    "Publishing rules of engagement and unit costs gives adversaries real information; the draft bets that accountability is worth more than the marginal operational secrecy, which is a values claim dressed as an efficiency claim."
  ],
  "open_questions": [
    "Who commands when a mission spans defence and civil response (a pandemic, an infrastructure attack)?",
    "Can the exception list survive contact with an actual intelligence partner relationship?",
    "Is a professional-only force compatible with a small population and the prohibition on conscription?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: lawful purposes, missions, separation, public-capability default with clocked exceptions, dual-use commons, open procurement, conscription prohibition with one exception, ROE and incident ledger, veterans in the floor, arms exports, civil defence first, emergency clock." }
  ]
}
```

---

## 1. Purpose and control

### DEF1 — Lawful purposes

**Claim.** Armed force may be used only for: defence against attack; protection of residents; fulfilment of published treaty obligations; and disaster response. It may never be used for internal political control, for enforcing economic claims abroad, or for operations not published in advance or within 24 hours thereafter.

**Rationale.** An instrument this dangerous needs its purposes enumerated, not interpreted; the list is the whole article.

**Evidence.** `vote:` entrenchment of purpose limits in comparable constitutions.

**Falsifier.** If force is used for any purpose outside the four listed, the use is unlawful and the command liability attaches personally, whatever the operational outcome.

### DEF2 — Defence as missions

**Claim.** Defence capabilities are acquired and maintained as missions in the mission ledger ([Direction_Law.md](./Direction_Law.md) DIR4): problem, threshold, deadline, envelope, steward, kill criteria — with the same admission test and the same closure discipline as any other mission.

**Rationale.** "Defence" is the category where missions go to hide; putting it in the same ledger is the cheapest accountability that exists.

**Evidence.** `audit:` mission ledger entries for defence, with thresholds and kill criteria.

**Falsifier.** If defence missions are funded outside the mission ledger's discipline for more than one budget cycle, the exception has become the rule and the bench must strike it.

### DEF3 — Separation of steering, command and audit

**Claim.** The body that sets defence missions, the command that executes, and the audit and statistics offices are separate, with separate budgets and appointments (Constitution C38). Auditors have access to everything, including classified systems, under their own security clearances.

**Rationale.** Concentration of the monopoly on violence with the power to define its purposes is the single highest-stakes failure mode in any constitution.

**Evidence.** `data:` civilian control regimes and coup/incident rates.

**Falsifier.** If separation slows verified crisis response beyond published limits, a joint cell with mandatory post-crisis audit may be created, never a permanent merger.

---

## 2. Technology and money

### DEF4 — Public funding, public capability

**Claim.** Defence research funded by the public is public, subject only to a published exception list. Each exception names a declassification date not later than **10** years out, is reviewed annually, and may be extended once by supermajority. The list's size is a published metric (Constitution C7; Development DEV12).

**Rationale.** The security exception is the one place the evidence rule could be silently repealed; a clock and a shrinking list are what keep it an exception.

**Evidence.** `study:` secrecy regimes and their effect on duplication and cost.

**Falsifier.** If the exception list grows, or items miss declassification dates, the exception regime has become concealment and must be cut back (mirrors Development DEV12).

### DEF5 — Dual-use defaults to commons

**Claim.** Dual-use results (logistics, materials, sensors, medicine, communications, energy) default to the commons registry on publication unless listed under DEF4. Interoperability standards for civil infrastructure are open standards.

**Rationale.** Defence research is a large public research budget; letting it pool privately wastes most of its spillover.

**Evidence.** `data:` dual-use spinoff value of published defence research.

**Falsifier.** If publishing dual-use results measurably increases adversary capability faster than it advances this nation's, the default must be narrowed to delay, not exclusivity.

### DEF6 — Procurement in the open

**Claim.** Defence procurement runs through open competitive tendering above a published threshold; the bid register, unit costs and award reasons are published with a delay no longer than necessary for operational security, capped in law. A standing adversarial audit office attacks the programme for fraud and gold-plating, and publishes.

**Rationale.** Cost-plus secrecy is how a steering state buys hardware it does not need at prices it cannot see.

**Evidence.** `audit:` procurement register, unit costs, tender counts, sole-source share.

**Falsifier.** If open procurement raises cost or delay without reducing fraud and gold-plating, thresholds must be re-derived rather than secrecy restored.

---

## 3. People and force

### DEF7 — No conscription, one exception

**Claim.** Conscription is prohibited. In a declared defensive emergency, a time-boxed levy may be authorised by supermajority, renewable once, with civilian alternative service always available and no penalty for choosing it.

**Rationale.** A framework that forbids commanding labour (Constitution C12) cannot command it into uniform except under the most extreme, published, temporary conditions.

**Evidence.** `data:` conscript vs. professional force performance and social cost.

**Falsifier.** If the time-boxed exception is invoked more than once in a generation, or its sunset is routinely renewed, it has become conscription by instalments and must be struck.

### DEF8 — Published rules of engagement and incident ledger

**Claim.** Rules of engagement are published in general form. Every use of force by state agents is reported to a public incident ledger within **72** hours with investigation status; findings and discipline are published.

**Rationale.** Accountability that waits for peace is not accountability; the ledger is the difference between a force and a militia.

**Evidence.** `data:` public ROE regimes and accountability outcomes.

**Falsifier.** If incident reporting lags or is incomplete relative to the statutory window, command liability attaches for the reporting failure itself.

### DEF9 — Veterans in the floor

**Claim.** Injured personnel and veterans receive floor entitlements unconditionally, plus health care for service-attributable conditions without proof thresholds beyond service records. No charity, no conditionality, no discharge status exceptions.

**Rationale.** A nation that sends people to risk their lives and then means-tests the consequences has broken its own floor (Constitution C27, C32).

**Evidence.** `data:` veteran support regimes vs. conditionality-based outcomes.

**Falsifier.** If veterans' outcomes (health, housing, employment) fall below population medians for two consecutive audits, delivery has failed regardless of programme existence.

### DEF10 — Arms exports

**Claim.** Arms exports require published approval against published criteria (grave rights violations, conflict escalation, treaty obligations), recorded in a public register with post-hoc assessments of recipients every **2** years. Refusals are published like approvals.

**Rationale.** An export regime that only records its yeses is an advertisement, not a control.

**Evidence.** `data:` arms export control regimes and conflict escalation correlates.

**Falsifier.** If approved exports correlate with escalation or grave-rights violations in recipients, the criteria must be tightened and the approving body reconstituted.

### DEF11 — Civil defence first

**Claim.** In peacetime, the force's primary function is civil defence and disaster response, funded at no less than **30%** of the defence budget, with published readiness and drill results.

**Rationale.** For most of its existence, this is what a defence force is actually for; a budget that says so is a budget aligned with reality.

**Evidence.** `data:` disaster response demand vs. force structure allocation.

**Falsifier.** If the civil-defence share does not rise while disaster response demand does, the target is a slogan and must be hardened into a budget rule.

### DEF12 — Emergency powers with a clock

**Claim.** Emergency authority (Constitution C43) is declared in writing, names the right suspended, expires in **90** days, is renewable once by supermajority with audit, and may never suspend the floor or the evidence rule. All emergency acts are published within **30** days of their expiry at the latest.

**Rationale.** Permanent powers arrive as temporary emergencies; the clock and the publication duty are the only reliable antidotes.

**Evidence.** `data:` emergency powers that outlived their emergency.

**Falsifier.** If renewable emergency authority is used for ordinary purposes in peacetime, the renewal route must be closed entirely.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `defence_budget_share_max` | 0.03 | share of public budget in peacetime | `pending:` pilot fiscal stress test |
| `civil_defence_share_min` | 0.3 | share of defence budget for disaster and civil response | `pending:` first force-structure review |
| `security_exception_max_years` | 10 | years to declassification, extendable once by supermajority | `pending:` first declassification cycle |
| `exception_list_review_years` | 1 | years between exception-list reviews | `audit:` exception list size trend |
| `emergency_sunset_days` | 90 | days per declaration, renewable once by supermajority | `data:` emergency power sunset regimes |
| `incident_report_hours` | 72 | hours to report any use of force | `data:` public ROE regimes |
| `export_criteria_review_years` | 2 | years | `pending:` first export register review |

## Metrics

- defence and civil-defence budget shares, published quarterly
- exception-list size and on-time declassification rate
- procurement unit-cost trend and sole-source share
- incident reports within statutory window and accountability outcomes
- veteran outcomes vs. population medians
- export approvals, refusals and post-hoc recipient assessments

## Dissent register

- A 3% peacetime cap and a 30% civil-defence share describe a nation with forgiving neighbours; a hostile security environment breaks both numbers immediately, and the draft's only honest answer is that this law is written for the pilot, not for wartime.
- Publishing rules of engagement and unit costs gives adversaries real information; the draft bets that accountability is worth more than the marginal operational secrecy, which is a values claim dressed as an efficiency claim.

## Open questions

- Who commands when a mission spans defence and civil response (a pandemic, an infrastructure attack)?
- Can the exception list survive contact with an actual intelligence partner relationship?
- Is a professional-only force compatible with a small population and the prohibition on conscription?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft: lawful purposes, missions, separation, public-capability default with clocked exceptions, dual-use commons, open procurement, conscription prohibition with one exception, ROE and incident ledger, veterans in the floor, arms exports, civil defence first, emergency clock. |
