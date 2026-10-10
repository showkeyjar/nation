# Development Law (技术发展与开源法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C9, C14, C16–C26 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §2.1, §2.2 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §4
> Refines the project's 2022 seed rules (original rules 1–5 are preserved as DEV1–DEV5) into operational law.

```law-meta
{
  "id": "law.development",
  "title": "Development Law (技术发展与开源法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["engine", "commons"],
  "summary": "The seed law of the project, made operational: anyone may develop any legitimate technology and earn from it; monopoly triggers a rule-based buyout and release; a released capability may be charged for only at marginal cost and must be served to everyone; mandatory standards bind all. Adds: the legitimate-use test, day-one release of publicly funded technology with a bounty, the technology registry and prior-art duty, open standard-setting with capped essential claims, interoperability as a market-access condition, a risk-classed safety gate with an incident ledger, time-limited dual-use exceptions with declassification dates, and a transfer and localization duty.",
  "articles": [
    { "id": "DEV1", "title": "Anyone may develop and earn (seed rule 1)", "evidence": ["data:private R&D intensity vs. freedom-to-operate regimes"], "falsifier": "If restricting development rights in a domain raises its rate of useful discovery, DEV1 fails there." },
    { "id": "DEV2", "title": "Monopoly triggers nationalisation (seed rule 2)", "evidence": ["data:markup and entry-barrier calibration against known monopoly cases"], "falsifier": "If the monopoly test in Capital Engine CAP5 misfires when applied to technology markets, DEV2's trigger must be re-specified for those markets." },
    { "id": "DEV3", "title": "A released capability may not be resold (seed rule 3)", "evidence": ["study:post-expiry pricing and re-monopolisation attempts"], "falsifier": "If marginal-cost-only provision degrades availability or quality below the private baseline for more than one review period, a delivery endowment must be attached." },
    { "id": "DEV4", "title": "The nation must serve it to everyone (seed rule 4)", "evidence": ["audit:availability of released capabilities by region, language and disability access"], "falsifier": "If any released capability is not deliverable to a named population within the statutory deadline, DEV4's service duty has failed and the delivery endowment must be raised." },
    { "id": "DEV5", "title": "Mandatory standards bind everyone (seed rule 5)", "evidence": ["data:measured cost of standards fragmentation"], "falsifier": "If mandatory standards slow adoption of better protocols more than they save in transaction costs, they must become voluntary in that domain." },
    { "id": "DEV6", "title": "The legitimate-use test", "evidence": ["pending:first two years of prohibited-use enforcement decisions, published"], "falsifier": "If the prohibited-use list expands beyond its published categories, or is used to suppress disfavoured research, the test has become censorship and must be struck by the constitutional bench." },
    { "id": "DEV7", "title": "Public money means public technology", "evidence": ["study:open-access mandates and follow-on innovation"], "falsifier": "If day-one release reduces commercialisation in a domain without raising diffusion, that domain may adopt a short window instead." },
    { "id": "DEV8", "title": "The technology registry and prior-art duty", "evidence": ["audit:registry coverage, search latency, duplicate-research ratio"], "falsifier": "If registry coverage does not reduce the duplicate-research ratio within two review periods, the registry is not earning its cost." },
    { "id": "DEV9", "title": "Open standard-setting", "evidence": ["study:standard-essential patent hold-up and FRAND outcomes"], "falsifier": "If open participation standards produce slower or worse standards than closed bodies, participation rules must be loosened while keeping disclosure." },
    { "id": "DEV10", "title": "Interoperability as a market-access condition", "evidence": ["data:portability mandates and switching costs"], "falsifier": "If portability mandates raise prices or degrade service more than they lower switching costs, they must be narrowed." },
    { "id": "DEV11", "title": "The safety gate", "evidence": ["study:pre-market assessment regimes and incident rates"], "falsifier": "If the gate's high-risk classes show no lower incident rates than unclassed deployments, the classification must be re-derived." },
    { "id": "DEV12", "title": "Dual-use and security exceptions", "evidence": ["audit:exception list size, declassification on-time rate"], "falsifier": "If the exception list grows or items miss declassification dates, the exception regime is being used as concealment and must be cut back by the bench." },
    { "id": "DEV13", "title": "Transfer, teaching and localization duty", "evidence": ["study:localization effects on adoption and training"], "falsifier": "If mandated localization produces no measurable adoption gain, it becomes optional support rather than a duty." },
    { "id": "DEV14", "title": "Review of this law", "evidence": ["audit:three-year review against the metrics list"], "falsifier": "If the review produces no parameter changes in two consecutive cycles, the review is decorative and the interval must be halved." }
  ],
  "parameters": [
    { "name": "registry_deposit_deadline_days", "value": 90, "unit": "days from publication or deployment", "evidence": "pending:pilot registry operations" },
    { "name": "service_duty_deadline_years", "value": 3, "unit": "years from release to full availability", "evidence": "pending:first five releases" },
    { "name": "essential_claim_cap", "value": 0.02, "unit": "royalty share of device price", "evidence": "pending:standard-body calibration" },
    { "name": "high_risk_class_audit_years", "value": 2, "unit": "years between audits of a deployed class", "evidence": "pending:incident-ledger analysis" },
    { "name": "declassification_max_years", "value": 10, "unit": "years, extendable once by supermajority", "evidence": "pending:first declassification cycle" },
    { "name": "localization_deadline_months", "value": 24, "unit": "months from release", "evidence": "pending:first localization cycle" }
  ],
  "metrics": [
    "diffusion half-life per released capability",
    "duplicate-research ratio in mission spending",
    "registry coverage and search latency",
    "released capabilities available in every official language within deadline",
    "incident rate per deployed risk class",
    "exception-list size and on-time declassification rate"
  ],
  "sunset": { "review_every_years": 3, "expires": null },
  "dissent": [
    "DEV7 (public money means public technology) may gut university-industry transfer in domains where firms simply refuse public co-funding to avoid day-one release; the bounty is supposed to compensate, but its size is a guess.",
    "The prohibited-use list in DEV6 is a standing invitation to mission creep: every technology can be argued to have a weapons use. Without a narrow, published list and bench review, this is the weak joint of the whole law."
  ],
  "open_questions": [
    "Does day-one release apply to research tools as well as results (methods, models, datasets, instruments)?",
    "How are essential-claim royalties policed when the standard spans jurisdictions with different regimes?",
    "What triggers a class re-audit before the statutory interval — a single severe incident, a pattern, or a petition?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Refined the 2022 seed rules 1-5 into DEV1-DEV5 and added registry, standards, interoperability, safety gate, dual-use exceptions and localization duty." }
  ]
}
```

---

## 1. The seed rules, made operational

### DEV1 — Anyone may develop and earn (seed rule 1)

**Claim.** Any person or entity may develop any technology for legitimate use and earn money from it, without a licence, a permit or a registration requirement.

**Rationale.** The 2022 seed text's first rule: permissionless development with legitimate reward is the widest known entrance to the discovery race.

**Evidence.** `data:` private R&D intensity vs. freedom-to-operate regimes.

**Falsifier.** If restricting development rights in a domain raises its rate of useful discovery, DEV1 fails there.

### DEV2 — Monopoly triggers nationalisation (seed rule 2)

**Claim.** When a technology meets the monopoly test ([Capital_Engine_Law.md](./Capital_Engine_Law.md) CAP5), the nation may nationalise it: buy it out at the published formula and release it to the commons with repricing.

**Rationale.** The seed text: "If a technology has been market monopoly, then the nation has right to let this technology open source, and repricing it." The procedure lives in the Capital Engine Law; this article is the technology-side trigger.

**Evidence.** `data:` markup and entry-barrier calibration against known monopoly cases.

**Falsifier.** If the monopoly test in Capital Engine CAP5 misfires when applied to technology markets, DEV2's trigger must be re-specified for those markets.

### DEV3 — A released capability may not be resold (seed rule 3)

**Claim.** Once a technology is nationalised or expired, no one may use it to extract rent: it may be charged for only at the marginal cost of delivery. Building competitive services **on top of** it remains free and encouraged.

**Rationale.** The seed text: "If a technology is nationalized, others people can not use it to earn money" — read as a ban on rent from the capability itself, not a ban on competing services built with it.

**Evidence.** `study:` post-expiry pricing and re-monopolisation attempts.

**Falsifier.** If marginal-cost-only provision degrades availability or quality below the private baseline for more than one review period, a delivery endowment must be attached.

### DEV4 — The nation must serve it to everyone (seed rule 4)

**Claim.** For every released capability, the nation is obliged to serve it to everyone: availability in every region, in every official language, accessible to persons with disabilities, and offline where connectivity fails, within **3** years of release.

**Rationale.** A commons that exists only where it is profitable is not a commons.

**Evidence.** `audit:` availability of released capabilities by region, language and disability access.

**Falsifier.** If any released capability is not deliverable to a named population within the statutory deadline, DEV4's service duty has failed and the delivery endowment must be raised.

### DEV5 — Mandatory standards bind everyone (seed rule 5)

**Claim.** Where a standard must be enforced (safety, interoperability, measurement), everyone is obliged to perform it, including the state. Standards are set under DEV9 and sunset with it.

**Rationale.** The seed text: "If a technology is a standard that needs to be enforced, everyone is obliged to perform it."

**Evidence.** `data:` measured cost of standards fragmentation.

**Falsifier.** If mandatory standards slow adoption of better protocols more than they save in transaction costs, they must become voluntary in that domain.

### DEV6 — The legitimate-use test

**Claim.** "Legitimate use" excludes, by published list only: weapons of mass destruction and their delivery, malware and infrastructure attack tools, fraud and counterfeit instruments, and surveillance of persons without judicial warrant. Research on detection, defence and remediation of these is expressly legitimate. The list changes only by the full amendment procedure with bench review.

**Rationale.** A permissionless development regime needs its boundary published, narrow, and hard to grow — or it becomes a licensing regime through the back door.

**Evidence.** `pending:` first two years of prohibited-use enforcement decisions, published.

**Falsifier.** If the prohibited-use list expands beyond its published categories, or is used to suppress disfavoured research, the test has become censorship and must be struck by the constitutional bench.

---

## 2. Accumulation

### DEV7 — Public money means public technology

**Claim.** Technology developed with public money is public on the day of publication: methods, data, code and designs, under an open licence, with a bounty paid to the team on verified milestones. The only exceptions are DEV12 security items and third-party privacy.

**Rationale.** A citizen should not pay twice for the same discovery.

**Evidence.** `study:` open-access mandates and follow-on innovation.

**Falsifier.** If day-one release reduces commercialisation in a domain without raising diffusion, that domain may adopt a short window instead.

### DEV8 — The technology registry and prior-art duty

**Claim.** Every publicly funded result, every expired capability and every safety incident is deposited in a public registry within **90** days. Any mission-funded project must document its registry search before funding, and the search record is published with the project.

**Rationale.** Accumulation requires that the next builder can find what exists; duplication is the purest waste a steering state can fund.

**Evidence.** `audit:` registry coverage, search latency, duplicate-research ratio.

**Falsifier.** If registry coverage does not reduce the duplicate-research ratio within two review periods, the registry is not earning its cost.

### DEV9 — Open standard-setting

**Claim.** Standards bodies are open to any participant at cost, publish dissenting positions, keep essential-claim royalties capped at **2%** of device price, and may not seek injunctions against FRAND-committed implementations. Every standard carries a review date.

**Rationale.** A standard is law written by its participants; participants must therefore include everyone bound by it.

**Evidence.** `study:` standard-essential patent hold-up and FRAND outcomes.

**Falsifier.** If open participation standards produce slower or worse standards than closed bodies, participation rules must be loosened while keeping disclosure.

### DEV10 — Interoperability as a market-access condition

**Claim.** To sell into the market, a dominant provider (above the CAP5 share threshold) must offer documented interfaces, machine-readable export of a user's data, and continued function for released capabilities. Portability is a condition of market access, not a remedy after harm.

**Rationale.** Exit rights between providers are what make entry by newcomers possible; portability is the physical substrate of that right.

**Evidence.** `data:` portability mandates and switching costs.

**Falsifier.** If portability mandates raise prices or degrade service more than they lower switching costs, they must be narrowed.

---

## 3. Deployment

### DEV11 — The safety gate

**Claim.** Technologies are classed by published risk criteria (scale of exposure, reversibility of harm, autonomy of action). High-risk classes require pre-market assessment proportionate to the class, post-market audits every **2** years, and reporting to a public incident ledger. Autonomous agents acting on persons or property sit in the highest class by default.

**Rationale.** Speed is the point of the framework; unmeasured speed is just externalised harm.

**Evidence.** `study:` pre-market assessment regimes and incident rates.

**Falsifier.** If the gate's high-risk classes show no lower incident rates than unclassed deployments, the classification must be re-derived.

### DEV12 — Dual-use and security exceptions

**Claim.** A published exception list may withhold a specific result from immediate release for security reasons. Each exception names a declassification date not later than **10** years out, is reviewed annually, and may be extended once by supermajority. The list's size is a published metric.

**Rationale.** A secrecy regime without a clock becomes a permanent shadow archive; the clock is the article.

**Evidence.** `audit:` exception list size, declassification on-time rate.

**Falsifier.** If the exception list grows or items miss declassification dates, the exception regime is being used as concealment and must be cut back by the bench.

### DEV13 — Transfer, teaching and localization duty

**Claim.** Each released capability must be documented for a competent practitioner, taught in public curricula where relevant, and localized into every official language within **24** months, funded from the commons fund.

**Rationale.** Diffusion is a first-class output; an undocumented commons is a paper one.

**Evidence.** `study:` localization effects on adoption and training.

**Falsifier.** If mandated localization produces no measurable adoption gain, it becomes optional support rather than a duty.

### DEV14 — Review of this law

**Claim.** This law is reviewed every **3** years against its metrics, and the review must propose parameter changes or say why none are needed.

**Rationale.** The parameters here (deadlines, caps, class intervals) are guesses that only deployment can correct.

**Evidence.** `audit:` three-year review against the metrics list.

**Falsifier.** If the review produces no parameter changes in two consecutive cycles, the review is decorative and the interval must be halved.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `registry_deposit_deadline_days` | 90 | days from publication or deployment | `pending:` pilot registry operations |
| `service_duty_deadline_years` | 3 | years from release to full availability | `pending:` first five releases |
| `essential_claim_cap` | 0.02 | royalty share of device price | `pending:` standard-body calibration |
| `high_risk_class_audit_years` | 2 | years between audits of a deployed class | `pending:` incident-ledger analysis |
| `declassification_max_years` | 10 | years, extendable once by supermajority | `pending:` first declassification cycle |
| `localization_deadline_months` | 24 | months from release | `pending:` first localization cycle |

## Metrics

- diffusion half-life per released capability
- duplicate-research ratio in mission spending
- registry coverage and search latency
- released capabilities available in every official language within deadline
- incident rate per deployed risk class
- exception-list size and on-time declassification rate

## Dissent register

- DEV7 (public money means public technology) may gut university-industry transfer in domains where firms simply refuse public co-funding to avoid day-one release; the bounty is supposed to compensate, but its size is a guess.
- The prohibited-use list in DEV6 is a standing invitation to mission creep: every technology can be argued to have a weapons use. Without a narrow, published list and bench review, this is the weak joint of the whole law.

## Open questions

- Does day-one release apply to research tools as well as results (methods, models, datasets, instruments)?
- How are essential-claim royalties policed when the standard spans jurisdictions with different regimes?
- What triggers a class re-audit before the statutory interval — a single severe incident, a pattern, or a petition?

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 2026-10-10 | Refined the 2022 seed rules 1–5 into DEV1–DEV5 and added registry, standards, interoperability, safety gate, dual-use exceptions and localization duty. |
