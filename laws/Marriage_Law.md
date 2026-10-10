# Marriage Law (婚姻法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C27, C28, C32 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §5 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §6
> Families as contracts between equals, with the floor underneath them.

```law-meta
{
  "id": "law.marriage",
  "title": "Marriage Law (婚姻法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["governance", "floor"],
  "summary": "Marriage and family law for equals: any consenting adults may marry; all family forms (marriage, registered partnership, cohabitation, multi-adult households) receive equal treatment in tax, floor, inheritance and parenting; no-fault symmetric dissolution with a published asset-division formula that credits unpaid care; child welfare as the paramount standard with a guaranteed public child-support fund that pays first and recovers later; immediate protection orders and floor-integrated shelter for domestic violence; inheritance defaults; and the rule that family status may never be used to deny an individual their floor entitlement.",
  "articles": [
    { "id": "MAR1", "title": "Marriage is a contract", "evidence": ["vote:equal treatment provisions in comparable jurisdictions"], "falsifier": "If any family form shows systematically worse child or member outcomes attributable to legal status itself, the equal-treatment rule must be re-examined with that evidence, not with sentiment." },
    { "id": "MAR2", "title": "Who may marry", "evidence": ["vote:comparable jurisdictions' marriage equality records"], "falsifier": "None available: this article implements equal treatment before the law; it is entrenched by Constitution C6 and cannot be falsified by outcomes, only amended." },
    { "id": "MAR3", "title": "Consent and prohibition of coercion", "evidence": ["data:forced marriage prevalence and enforcement outcomes"], "falsifier": "If the annulment route is used in fewer than half of detected coercion cases, access must be moved out of the courts and into administrative declaration." },
    { "id": "MAR4", "title": "Equal treatment of family forms", "evidence": ["pending:take-up and outcome differentials by family form in the first pilot"], "falsifier": "If a form's equal treatment creates arbitrage that materially distorts tax or floor outcomes, the distortion must be fixed at the tax or floor rule, not by re-ranking the forms." },
    { "id": "MAR5", "title": "Dissolution", "evidence": ["study:no-fault divorce regimes and post-separation outcomes"], "falsifier": "If no-fault dissolution worsens outcomes for the economically weaker party beyond the correction provided by MAR6, the formula is mis-set." },
    { "id": "MAR6", "title": "The asset-division formula", "evidence": ["data:post-separation income trajectories by gender and care share"], "falsifier": "If the care-work credit fails to close the post-separation gap for the caring party within ten years, the credit weight must be raised." },
    { "id": "MAR7", "title": "Children first, with their own voice", "evidence": ["study:child-inclusive proceedings and outcomes"], "falsifier": "If child-inclusive proceedings raise conflict duration without improving child outcomes, the child's participation must be limited to written representations." },
    { "id": "MAR8", "title": "The public child-support guarantee", "evidence": ["data:child support collection rates under public guarantee regimes"], "falsifier": "If the fund's recovery rate falls below its cost of administration for five consecutive years, recovery should be dropped and the payment absorbed as a child floor component." },
    { "id": "MAR9", "title": "Domestic violence", "evidence": ["data:protection order regimes and repeat-violence rates"], "falsifier": "If removing the aggressor rather than the victim does not reduce repeat violence and homelessness among victims, removal must be paired with stronger housing duty." },
    { "id": "MAR10", "title": "No family-status floor trap", "evidence": ["pending:take-up differentials by household composition"], "falsifier": "If household aggregation hides need, assessment must move to the individual with a published correction (this mirrors Social Floor FLR11)." },
    { "id": "MAR11", "title": "Inheritance defaults", "evidence": ["data:intestacy disputes and default-rule performance"], "falsifier": "If the default produces litigation in more than a small share of estates, it must be simplified until it does not." },
    { "id": "MAR12", "title": "Housing continuity on dissolution", "evidence": ["pending:post-dissolution housing outcomes in the first pilot"], "falsifier": "If either party routinely loses adequate housing on dissolution, the housing floor's delivery must be judged to have failed." }
  ],
  "parameters": [
    { "name": "care_credit_rate", "value": 1.5, "unit": "credit multiplier per care year vs. earning year", "evidence": "pending:first division formula cohort" },
    { "name": "child_support_guarantee_share", "value": 1.0, "unit": "share of assessed support paid by the fund", "evidence": "data:child support collection rates under public guarantee regimes" },
    { "name": "child_voice_age_min", "value": 7, "unit": "years, with capacity-presumptive weight rising to 14", "evidence": "study:child-inclusive proceedings and outcomes" },
    { "name": "protection_order_hours", "value": 24, "unit": "hours to interim order on application", "evidence": "data:protection order regimes and repeat-violence rates" },
    { "name": "community_property_share", "value": 0.5, "unit": "default share of jointly produced gains", "evidence": "data:intestacy and division outcomes in comparable regimes" }
  ],
  "metrics": [
    "post-separation income and housing outcomes by gender and care share",
    "child-support guarantee: payment timeliness and recovery rate",
    "repeat violence rate and victim homelessness after protection orders",
    "take-up of floor entitlements by household composition",
    "litigation rate over division and estates"
  ],
  "sunset": { "review_every_years": 5, "expires": null },
  "dissent": [
    "MAR6's care-work credit prices care inside a private relationship; a critic will note that this converts love into a ledger at the exact moment it ends, and that the ledger is a poor instrument for what it is measuring.",
    "Equal treatment of all family forms combined with per-individual floor entitlements creates real arbitrage surface; the draft answers by fixing distortions at the tax rule, which is correct but hard."
  ],
  "open_questions": [
    "How are multi-adult households handled in the division formula without combinatorial complexity?",
    "Should the child-support guarantee extend to children with a non-resident parent abroad?",
    "Does the care credit interact with the Earn and Pay pension credit in a way that double counts or double taxes?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: contract framing, capacity and consent, equal family forms, no-fault dissolution, division formula with care credit, child voice, public support guarantee, domestic violence rules, floor protection, inheritance defaults, housing continuity." }
  ]
}
```

---

## 1. Forming and ending unions

### MAR1 — Marriage is a contract

**Claim.** Marriage is a voluntary contract between persons with public effects (default property, inheritance, next-of-kin, parenting presumptions). The state registers it; it does not own it, define its ceremonies, or rank its forms.

**Rationale.** A state that grants family status will eventually ration it; a state that records contracts cannot.

**Evidence.** `vote:` equal treatment provisions in comparable jurisdictions.

**Falsifier.** If any family form shows systematically worse child or member outcomes attributable to legal status itself, the equal-treatment rule must be re-examined with that evidence, not with sentiment.

### MAR2 — Who may marry

**Claim.** Any two or more consenting adults, regardless of gender, may marry. Capacity requires understanding of the contract's effects. Marriage below the age of majority is void.

**Rationale.** Equal treatment before the law is entrenched (Constitution C6); consent, not category, is the operative fact.

**Evidence.** `vote:` comparable jurisdictions' marriage equality records.

**Falsifier.** None available: this article implements equal treatment before the law; it is entrenched by Constitution C6 and cannot be falsified by outcomes, only amended.

### MAR3 — Consent and prohibition of coercion

**Claim.** Forced marriage is void on the declaration of the coerced party, available without time limit, by administrative route as well as judicial. Dowry and bride-price arrangements are unenforceable; coercion in their name is an aggravated offence.

**Rationale.** A contract without consent is not a contract; the victim should not need a lawsuit to be free of it.

**Evidence.** `data:` forced marriage prevalence and enforcement outcomes.

**Falsifier.** If the annulment route is used in fewer than half of detected coercion cases, access must be moved out of the courts and into administrative declaration.

### MAR4 — Equal treatment of family forms

**Claim.** Marriage, registered partnership, cohabitation of stated duration, and registered multi-adult households receive identical treatment in tax, floor entitlements, inheritance, parenting presumptions, hospital and next-of-kin rights, and migration sponsorship.

**Rationale.** Ranking family forms by respectability is the state legislating taste; the law needs to know who committed to whom, not to grade them.

**Evidence.** `pending:` take-up and outcome differentials by family form in the first pilot.

**Falsifier.** If a form's equal treatment creates arbitrage that materially distorts tax or floor outcomes, the distortion must be fixed at the tax or floor rule, not by re-ranking the forms.

### MAR5 — Dissolution

**Claim.** Any party may dissolve a union by unilateral declaration, effective after a cooling-off period of **60** days, without stating grounds and without the other party's consent. Fault is irrelevant to division and support.

**Rationale.** Requiring grounds manufactures perjury and conflict at the worst possible moment for any children involved.

**Evidence.** `study:` no-fault divorce regimes and post-separation outcomes.

**Falsifier.** If no-fault dissolution worsens outcomes for the economically weaker party beyond the correction provided by MAR6, the formula is mis-set.

### MAR6 — The asset-division formula

**Claim.** On dissolution, separate property remains separate; jointly produced gains during the union divide equally by default, adjusted by a **care-work credit**: each year of unpaid care counts as **1.5** years of contribution. The credit is gender-neutral by construction and published in its arithmetic.

**Rationale.** Equal division of money ignores who made the money possible; the credit prices the invisible contribution at the only moment the law can see it.

**Evidence.** `data:` post-separation income trajectories by gender and care share.

**Falsifier.** If the care-work credit fails to close the post-separation gap for the caring party within ten years, the credit weight must be raised.

---

## 2. Children

### MAR7 — Children first, with their own voice

**Claim.** In any dispute affecting a child, the child's welfare is the paramount standard, the default is shared parenting time unless unsafe or impractical, and the child has their own voice — direct or through an advocate — from age **7**, with rising weight to **14**.

**Rationale.** Children are the parties with the least procedural power and the longest exposure to the result.

**Evidence.** `study:` child-inclusive proceedings and outcomes.

**Falsifier.** If child-inclusive proceedings raise conflict duration without improving child outcomes, the child's participation must be limited to written representations.

### MAR8 — The public child-support guarantee

**Claim.** Assessed child support is paid by a public fund on the due date, in full; the fund recovers from the liable parent administratively. A child's standard of living never depends on a private dispute.

**Rationale.** The floor's promise to children cannot be hostage to the diligence of an estranged parent or the speed of an enforcement office.

**Evidence.** `data:` child support collection rates under public guarantee regimes.

**Falsifier.** If the fund's recovery rate falls below its cost of administration for five consecutive years, recovery should be dropped and the payment absorbed as a child floor component.

---

## 3. Safety, floors and estates

### MAR9 — Domestic violence

**Claim.** An interim protection order issues within **24** hours of application; the aggressor is removed from the home, not the victim; shelter, legal aid and income support are delivered as part of the floor (Constitution C27) for as long as needed; violations are criminal.

**Rationale.** A system that makes the victim homeless to be safe has chosen a side while pretending to be neutral.

**Evidence.** `data:` protection order regimes and repeat-violence rates.

**Falsifier.** If removing the aggressor rather than the victim does not reduce repeat violence and homelessness among victims, removal must be paired with stronger housing duty.

### MAR10 — No family-status floor trap

**Claim.** Family status — marriage, partnership, cohabitation, parenthood — may never reduce any individual's floor entitlement. The cash layer is individual; components are individual; a child's entitlement is held for the child.

**Rationale.** Aggregating households hides exactly the need it creates: the person sharing a roof with someone earning.

**Evidence.** `pending:` take-up differentials by household composition.

**Falsifier.** If household aggregation hides need, assessment must move to the individual with a published correction (this mirrors Social Floor FLR11).

### MAR11 — Inheritance defaults

**Claim.** On intestacy, the estate passes to the surviving partner(s) and children in published shares, with a protected family provision for dependants; wills are honoured subject to that provision and to a published formalities rule. Escheat goes to the commons fund, not to general revenue.

**Rationale.** Defaults should be what most people would write if they wrote; what nobody claims belongs to everyone.

**Evidence.** `data:` intestacy disputes and default-rule performance.

**Falsifier.** If the default produces litigation in more than a small share of estates, it must be simplified until it does not.

### MAR12 — Housing continuity on dissolution

**Claim.** Neither party to a dissolution may lose adequate housing: the housing floor's anti-eviction and rehousing duties (Social Floor FLR6) apply automatically to both parties and to the children of the union.

**Rationale.** Dissolution is the moment of maximum housing fragility for the party with less money, which is usually the party that did the caring.

**Evidence.** `pending:` post-dissolution housing outcomes in the first pilot.

**Falsifier.** If either party routinely loses adequate housing on dissolution, the housing floor's delivery must be judged to have failed.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `care_credit_rate` | 1.5 | credit multiplier per care year vs. earning year | `pending:` first division formula cohort |
| `child_support_guarantee_share` | 1.0 | share of assessed support paid by the fund | `data:` child support collection rates under public guarantee regimes |
| `child_voice_age_min` | 7 | years, with capacity-presumptive weight rising to 14 | `study:` child-inclusive proceedings and outcomes |
| `protection_order_hours` | 24 | hours to interim order on application | `data:` protection order regimes and repeat-violence rates |
| `community_property_share` | 0.5 | default share of jointly produced gains | `data:` intestacy and division outcomes in comparable regimes |

## Metrics

- post-separation income and housing outcomes by gender and care share
- child-support guarantee: payment timeliness and recovery rate
- repeat violence rate and victim homelessness after protection orders
- take-up of floor entitlements by household composition
- litigation rate over division and estates

## Dissent register

- MAR6's care-work credit prices care inside a private relationship; a critic will note that this converts love into a ledger at the exact moment it ends, and that the ledger is a poor instrument for what it is measuring.
- Equal treatment of all family forms combined with per-individual floor entitlements creates real arbitrage surface; the draft answers by fixing distortions at the tax rule, which is correct but hard.

## Open questions

- How are multi-adult households handled in the division formula without combinatorial complexity?
- Should the child-support guarantee extend to children with a non-resident parent abroad?
- Does the care credit interact with the Earn and Pay pension credit in a way that double counts or double taxes?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Initial draft: contract framing, capacity and consent, equal family forms, no-fault dissolution, division formula with care credit, child voice, public support guarantee, domestic violence rules, floor protection, inheritance defaults, housing continuity. |
