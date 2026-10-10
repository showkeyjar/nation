# Currency Law (货币法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C38, C21, C27 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §2.3 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §9
> The rails: money as public infrastructure — stable for the floor basket, never a mission wallet, never a private toll road.

```law-meta
{
  "id": "law.currency",
  "title": "Currency Law (货币法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["engine", "governance"],
  "summary": "Establishes the currency as public infrastructure with a mandate to stabilise the purchasing power of the floor basket; central bank independence by formula budget and non-renewable term; the prohibition of monetary financing of missions; the public payment rail at marginal cost with open access; sovereign accounts at the central bank; bank licensing, ex-ante deposit insurance and bail-in resolution; the prohibition of directed credit; sovereign wealth fund funding and drawdown rules; cash as legal tender with an anonymous small-value option; and free convertibility as the standing discipline on all of it.",
  "articles": [
    { "id": "CUR1", "title": "The unit and its mandate", "evidence": ["data:floor basket composition and its measured price path (ledger, quarterly)"], "falsifier": "If the floor-basket index and headline consumer prices diverge persistently, the mandate is tracking the wrong basket and must be re-specified, not averaged away." },
    { "id": "CUR2", "title": "Central bank independence by construction", "evidence": ["audit:budget formula application, appointment records, dismissal causes"], "falsifier": "If any executive body influences appointments, budget or operations in practice (measured by deviation records), independence must be hardened structurally — governor election by supermajority bench confirmation." },
    { "id": "CUR3", "title": "No monetary financing, ever", "evidence": ["audit:central bank balance sheet vs. mission budget flows"], "falsifier": "If the emergency exception is used more than once per decade or lasts beyond its statutory limit, this article has failed and missions must be capped in nominal terms automatically." },
    { "id": "CUR4", "title": "The payment rail is commons", "evidence": ["audit:rail fees vs. marginal cost; API access denial log"], "falsifier": "If rail fees exceed marginal cost plus published depreciation for three consecutive years, the fee-setting power must move from the central bank to the commons fund formula." },
    { "id": "CUR5", "title": "Sovereign accounts", "evidence": ["study:narrow-banking and CBDC proposals (e.g., Beneš & Kumhof 2012 Chicago Plan Revisited)"], "falsifier": "If sovereign accounts crowd out private deposit funding so severely that business credit becomes a policy tool by default, the option must be capped as a share of deposits." },
    { "id": "CUR6", "title": "Banking, insurance and resolution", "evidence": ["study:deposit insurance funding and risk-taking (e.g., Demirgüç-Kunt & Kane 2002 survey)"], "falsifier": "If insured institutions take more risk than uninsured peers (measured over a full cycle), the ex-ante levy is mispriced and must be re-based on measured risk." },
    { "id": "CUR7", "title": "No directed credit", "evidence": ["audit:loan book composition of state-influenced institutions vs. market benchmarks"], "falsifier": "If any sector obtains credit on non-market terms via state-influenced institutions, that is mission finance in disguise and must be reclassified under Capital Engine Law caps and disclosure." },
    { "id": "CUR8", "title": "The sovereign wealth fund", "evidence": ["data:funded resource funds' drawdown rules vs. realised volatility (e.g., Norway GPFG annual reports 2020-2023)"], "falsifier": "If the drawdown rule amplifies pro-cyclical spending during the first two downturns it meets, the smoothing window must be lengthened before any dividend is adjusted." },
    { "id": "CUR9", "title": "Cash and privacy", "evidence": ["data:cash usage by floor-dependent households (ledger)"], "falsifier": "If cash removal measurably worsens exclusion of any tracked group, physical cash becomes a statutory service obligation with availability metrics." },
    { "id": "CUR10", "title": "Convertibility and exit", "evidence": ["audit:capital flow freedom incidents vs. C21 ledger"], "falsifier": "If convertibility is suspended for any reason other than invasion, this law's whole architecture is void and must be rewritten by referendum." }
  ],
  "parameters": [
    { "name": "mandate_band", "value": 0.02, "unit": "annual change of floor-basket index, either side", "evidence": "pending:first mandate review after 24 months of ledger data" },
    { "name": "governor_term_years", "value": 7, "unit": "years, non-renewable", "evidence": "pending:first two appointment cycles" },
    { "name": "deposit_insurance_levy", "value": 0.001, "unit": "share of insured deposits per year, base rate before risk multiplier", "evidence": "pending:first risk-based re-pricing audit" },
    { "name": "resolution_bail_in_floor", "value": 0.08, "unit": "capital ratio triggering bail-in conversion", "evidence": "pending:first stress test cycle" },
    { "name": "fund_smoothing_years", "value": 7, "unit": "years of averaging for fund drawdown", "evidence": "pending:first downturn under the rule" },
    { "name": "cash_acceptance_cap", "value": 200, "unit": "accounting units, anonymous legal tender per transaction", "evidence": "pending:first AML review vs. exclusion audit" }
  ],
  "metrics": [
    "floor-basket index deviation from band",
    "rail fee vs. marginal cost",
    "sovereign accounts share of household deposits",
    "insured-institution risk vs. uninsured peers",
    "cash availability and usage by decile",
    "fund drawdown vs. rule during downturns"
  ],
  "sunset": { "review_every_years": 5, "expires": null },
  "dissent": [
    "An independent central bank with a formula budget is still a body of experts governing without elections; the sortition chamber has no hook into it, and 'independence' can become unaccountability with better manners.",
    "Sovereign accounts at the central bank socialise the deposit franchise and could quietly nationalise credit allocation — the very failure CUR7 forbids — one convenience at a time.",
    "Full convertibility (CUR10) ties this jurisdiction's hands in a crisis; every real currency framework keeps capital tools on the shelf, and pretending otherwise may just mean using them illegally when the day comes."
  ],
  "open_questions": [
    "Should the mandate target the floor basket alone or a blended basket that includes capital-goods prices?",
    "What happens to CUR9 anonymity if cash-like digital instruments with stronger privacy appear offshore?",
    "Does the commons fund (COM8) or the sovereign wealth fund (CUR8) own payment-rail improvements — and who eats the depreciation?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: unit and floor-basket mandate, independence by construction, monetary-financing prohibition, public payment rail, sovereign accounts, banking and resolution, directed-credit prohibition, sovereign wealth fund rules, cash and privacy, convertibility." }
  ]
}
```

---

## 1. Money is infrastructure

The currency is a commons asset (C22): it exists so the floor can be paid, prices can be honest, and the engine can settle. It is not a policy instrument for missions, and it is not a private toll road. Everything in this law follows from refusing those two corruptions.

### CUR1 — The unit and its mandate

**Claim.** The unit of account is defined by law. The central bank's mandate is to keep the annual change of the **floor basket index** — the priced basket the Social Floor Law uses for indexation — within `mandate_band` either side, while keeping the payment system operational. Publication is monthly; misses are explained in writing, not averaged away.

**Rationale.** A consumer-price mandate stabilises a statistic; a floor-basket mandate stabilises what the least-advantaged resident actually buys. Where the two differ, this blueprint chooses the floor.

**Evidence.** `data:` floor basket composition and its measured price path (ledger, quarterly).

**Falsifier.** If floor-basket and headline consumer prices diverge persistently, the mandate tracks the wrong basket and must be re-specified.

### CUR2 — Central bank independence by construction

**Claim.** The central bank's budget is set by formula (a fixed share of a moving average of its fee revenue, floored and capped), its governor serves one `governor_term_years` term, removable only for cause established before the bench. No elected or mission body may instruct it, and its orders are published with a statutory delay no longer than needed for market fairness.

**Rationale.** Independence that lives in convention dies in crisis; independence that lives in a budget formula and a non-renewable term has to be repealed in the open.

**Evidence.** `audit:` budget formula application, appointment records, dismissal causes.

**Falsifier.** If executive influence appears in practice, independence must be hardened: governor election by supermajority bench confirmation.

### CUR3 — No monetary financing, ever

**Claim.** The central bank may not purchase mission-bond issues, directly finance any steering body, or overdraft the treasury, save under a declared emergency (C43) that expires in weeks, is audited publicly, and may not be renewed within a decade.

**Rationale.** The mission budget is funded by taxation and rents (C30) so that its opportunity cost is visible (C13). Monetary financing hides that cost by taxing everyone through prices — the most regressive tax of all.

**Evidence.** `audit:` central bank balance sheet vs. mission budget flows.

**Falsifier.** If the emergency exception is used more than once per decade or outlasts its limit, missions must be capped in nominal terms automatically.

### CUR4 — The payment rail is commons

**Claim.** The interbank settlement system and the retail instant-payment layer are public infrastructure, operated at marginal cost plus published depreciation. Access is open to any licensed institution and to qualified fintech interfaces on published, non-discriminatory API terms (DEV10).

**Rationale.** Payments are a network good; private monopolies on them tax every transaction in the economy and surveil it as a bonus.

**Evidence.** `audit:` rail fees vs. marginal cost; API access denial log.

**Falsifier.** If rail fees exceed marginal cost plus depreciation for three consecutive years, fee-setting moves to the commons fund formula.

### CUR5 — Sovereign accounts

**Claim.** Households may hold accounts directly at the central bank ("sovereign accounts"), receiving floor payments and dividends without a private intermediary. Sovereign accounts pay the policy rate minus rail cost and offer no credit.

**Rationale.** The floor should not depend on a private bank's onboarding decisions (C27); a public option disciplines private deposit pricing the way a public option does anywhere else.

**Evidence.** `study:` narrow-banking and CBDC proposals (Beneš & Kumhof 2012).

**Falsifier.** If sovereign accounts crowd out private deposit funding so that business credit becomes a policy tool by default, the option is capped as a share of deposits.

### CUR6 — Banking, insurance and resolution

**Claim.** Deposit insurance is funded by an ex-ante risk-based levy (`deposit_insurance_levy` base before multipliers) on insured institutions. Resolution of a failing institution converts claims at `resolution_bail_in_floor` capital ratio before any public support; the floor budget is never a resolution resource. Licensing conditions are published.

**Rationale.** Insurance priced after the fact is a subsidy to risk; bail-in before support makes shareholders and creditors — not floor recipients — the first loss-bearers.

**Evidence.** `study:` deposit insurance funding and risk-taking (Demirgüç-Kunt & Kane 2002 survey).

**Falsifier.** If insured institutions take more risk than uninsured peers over a full cycle, the levy is mispriced and must be re-based.

### CUR7 — No directed credit

**Claim.** No public body may direct the credit decisions of licensed institutions. Missions interact with finance only through the Capital Engine Law's published instruments (pre-commitments CAP8, guarantees CAP9 caps, prizes CAP10).

**Rationale.** Directed credit is steering by leak instead of by helm (C11): invisible, unaccountable, and always discovered late.

**Evidence.** `audit:` loan book composition of state-influenced institutions vs. market benchmarks.

**Falsifier.** If any sector obtains non-market credit via state-influenced institutions, it is reclassified under Capital Engine Law caps and disclosure.

### CUR8 — The sovereign wealth fund

**Claim.** Resource and data rents not needed for current budgets capitalise a sovereign wealth fund (ENV4). Its drawdown finances the national dividend (COM7) and floor top-ups on a rule averaged over `fund_smoothing_years` years; its mandate is passive, indexed, transparent (CAP9), and it may not hold strategic stakes in domestic issuers beyond published limits.

**Rationale.** A rule-bound fund converts exhaustible rents into perpetual income; discretion converts it into a political slush fund with better stationery.

**Evidence.** `data:` funded resource funds' drawdown rules vs. realised volatility (Norway GPFG annual reports 2020–2023).

**Falsifier.** If the drawdown rule amplifies pro-cyclical spending in the first two downturns, the smoothing window lengthens before any dividend adjusts.

### CUR9 — Cash and privacy

**Claim.** Physical cash in denominations up to `cash_acceptance_cap` per transaction remains legal tender for all floor-relevant purchases. No body may be compelled to accept non-cash payment exclusively. An anonymous small-value instrument is a statutory service, with availability metrics by region.

**Rationale.** The floor is unconditional (FLR2); an unconditional payment that requires a tracked account is conditional on being trackable. C32 dignity extends to money.

**Evidence.** `data:` cash usage by floor-dependent households (ledger).

**Falsifier.** If cash removal worsens exclusion of any tracked group, physical cash becomes a statutory service obligation with availability metrics.

### CUR10 — Convertibility and exit

**Claim.** The currency is freely convertible for current and capital account transactions (C21). No capital controls may be imposed except under declared invasion, with the same audit trail as C43.

**Rationale.** Free exit is this law's discipline: if residents can leave, every other article must actually work, and the cost of bad monetary policy is paid immediately in the balance of payments rather than slowly in the ledger.

**Evidence.** `audit:` capital flow freedom incidents vs. C21 ledger.

**Falsifier.** If convertibility is suspended for any reason other than invasion, this law's whole architecture is void and must be rewritten by referendum.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `mandate_band` | 0.02 | annual change of floor-basket index, either side | `pending:` first mandate review after 24 months of ledger data |
| `governor_term_years` | 7 | years, non-renewable | `pending:` first two appointment cycles |
| `deposit_insurance_levy` | 0.001 | share of insured deposits per year, base rate before risk multiplier | `pending:` first risk-based re-pricing audit |
| `resolution_bail_in_floor` | 0.08 | capital ratio triggering bail-in conversion | `pending:` first stress test cycle |
| `fund_smoothing_years` | 7 | years of averaging for fund drawdown | `pending:` first downturn under the rule |
| `cash_acceptance_cap` | 200 | accounting units, anonymous legal tender per transaction | `pending:` first AML review vs. exclusion audit |

## Dissent register

- Independence without a sortition hook is unaccountability with better manners.
- Sovereign accounts could quietly nationalise credit allocation — the failure CUR7 forbids — one convenience at a time.
- Full convertibility ties hands in a crisis; pretending otherwise may mean using capital tools illegally when the day comes.

## Open questions

- Mandate on the floor basket alone, or blended with capital-goods prices?
- What happens to CUR9 anonymity if stronger-privacy instruments appear offshore?
- Who owns payment-rail improvements — commons fund or sovereign wealth fund — and who eats the depreciation?
