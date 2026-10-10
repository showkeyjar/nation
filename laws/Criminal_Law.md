# Criminal Law (刑法)

> Version 0.1.0 · 2026-10-10 · Status: draft
> Basis: [Constitution.md](../Constitution.md) C14, C26, C32, C44 · Framework: [FRAMEWORK.md](../FRAMEWORK.md) §4 · Process: [GOVERNANCE.md](../GOVERNANCE.md) §12
> The last resort: a short, honest list of wrongs the community will punish — and everything it refuses to criminalise.

```law-meta
{
  "id": "law.criminal",
  "title": "Criminal Law (刑法)",
  "version": "0.1.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["governance", "floor"],
  "summary": "Codifies criminal liability: strict legality with no analogy and no retroactivity, a harm-based catalogue with express decriminalisation of opinion and lifestyle, the mens rea requirement, proportionality with rehabilitation first, the rejection of custodial defaults with the floor and vote continuing in custody, the honest-failure immunity and its concealment exception, corporate liability with structural remedies, procedure with sortition jury and state-funded defence, victim restitution, and the spent-conviction path back into full membership.",
  "articles": [
    { "id": "CRI1", "title": "Legality", "evidence": ["audit:prosecutions under each offence, first five years"], "falsifier": "If any conviction rests on analogy or an unpublished rule, it is void on appeal automatically and the prosecutor's office is audited." },
    { "id": "CRI2", "title": "The short list", "evidence": ["study:criminalisation breadth and clearance rates (e.g., Booth 2016 chaos-of-overcriminalisation review)"], "falsifier": "If a listed offence produces no convictions over two review cycles while consuming investigation capacity, it is decoration or a threat, and must be repealed." },
    { "id": "CRI3", "title": "Mens rea", "evidence": ["study:mens rea reform literature (e.g., American Law Institute Model Penal Code 1962)"], "falsifier": "If strict-liability regulatory offences produce punishment of genuinely blameless conduct beyond tolerance, the default flips to civil penalties." },
    { "id": "CRI4", "title": "Proportionality and purposes", "evidence": ["study:rehabilitation vs. deterrence vs. incapacitation effects (e.g., Nagin 2013, Deterrence in the Twenty-First Century)"], "falsifier": "If sentence severity shows no marginal deterrence effect in controlled comparisons while rehabilitation programmes measurably reduce reoffending, severity must fall to the rehabilitative level." },
    { "id": "CRI5", "title": "Custody is the exception", "evidence": ["study:incarceration and recidivism (e.g., Nagin, Cullen & Jonson 2009)"], "falsifier": "If community sentences fail at higher rates than projected custody for equivalent risk bands, the custody presumption for those bands is restored." },
    { "id": "CRI6", "title": "Honest failure is not a crime", "evidence": ["audit:prosecution attempts against disclosed failures vs. concealment cases"], "falsifier": "If disclosure rates fall after commencement, the immunity is being under-communicated or quietly breached — both demand intervention before any widening of liability." },
    { "id": "CRI7", "title": "Corporate liability", "evidence": ["study:corporate crime enforcement and compliance programmes (e.g., Arlen & Kahan 2017)"], "falsifier": "If structural remedies leave recidivism unchanged at re-audit, the remedy menu — not the liability — is too timid." },
    { "id": "CRI8", "title": "Procedure", "evidence": ["audit:charge-to-disposition times, disclosure compliance, acquittal analysis"], "falsifier": "If charge-to-disposition exceeds the statutory deadline for more than the tolerance share of cases, the case goes to the sortition chamber's review docket automatically." },
    { "id": "CRI9", "title": "Victims", "evidence": ["audit:restitution ordered vs. actually collected"], "falsifier": "If restitution collection rates stay below the published floor, the state pays victims first and pursues offenders itself — the guarantee moves from promise to balance sheet." },
    { "id": "CRI10", "title": "Records and redemption", "evidence": ["study:criminal record stigma and employment (e.g., Agan & Starr 2017 field experiment)"], "falsifier": "If spent convictions still predict employment outcomes as strongly as live ones, the disclosure regime — not the calendar — is the barrier and must close further." }
  ],
  "parameters": [
    { "name": "custody_max_grave", "value": 20, "unit": "years for the gravest class", "evidence": "pending:first proportionality review against reoffending data" },
    { "name": "custody_max_ordinary", "value": 5, "unit": "years for ordinary offences", "evidence": "pending:first proportionality review" },
    { "name": "charge_deadline_days", "value": 180, "unit": "days from charge to disposition, statutory", "evidence": "pending:first docket-time audit" },
    { "name": "jury_offence_threshold", "value": 2, "unit": "minimum years of exposure requiring sortition jury", "evidence": "pending:first bench-vs-jury divergence audit" },
    { "name": "spent_conviction_years", "value": 7, "unit": "years after sentence completion for ordinary offences", "evidence": "pending:first employment-outcome cohort study" },
    { "name": "spent_conviction_multiplier_grave", "value": 2, "unit": "multiplier of spent_conviction_years for the gravest class", "evidence": "pending:first grave-class cohort study" }
  ],
  "metrics": [
    "reoffending within 3 years, by sentence type and risk band",
    "custody rate per 1000 residents and its trajectory",
    "charge-to-disposition time distribution",
    "disclosure rate of failures under CRI6 immunity",
    "restitution ordered vs. collected",
    "employment of spent-conviction holders vs. matched peers"
  ],
  "sunset": { "review_every_years": 4, "expires": null },
  "dissent": [
    "A criminal code drafted as a list of harms will be pressed by the next moral panic into adding offences anyway; the anti-symmetry (CRI6 protects disclosed failure) is the only structural brake, and it is a brake made of words.",
    "Twenty-year maxima will read as softness after the first atrocity; this law bets the floor's universality (CRI5) against the demand for exemplary suffering, and that bet has lost in most democracies.",
    "Victim restitution first (CRI9) can quietly turn prosecution into a collection agency for the loudest harm, while diffuse harms (environment, fraud on many) get the residue."
  ],
  "open_questions": [
    "Does the CRI6 immunity survive contact with reckless (not just negligent) research conduct?",
    "Should grave-class convictions ever be permanently disclosable, and to whom?",
    "Who represents diffuse victims — communities, the evidence office, or standing NGOs?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2026-10-10", "change": "Initial draft: legality, harm-based short list, mens rea, proportionality, custody as exception with floor and vote continuity, honest-failure immunity, corporate liability, procedure with jury threshold, victim restitution, spent convictions." }
  ]
}
```

---

## 1. The last resort

Criminal punishment is the state's most dangerous power: it cages, brands and excludes. This blueprint's whole architecture — floor, evidence, sunset — is a machine for making mistakes cheap and correctable. Criminal law is where mistakes are most expensive, so it is written narrow, published in full, and reviewed hardest.

### CRI1 — Legality

**Claim.** Conduct is criminal only if defined as an offence in this law or a law expressly amending it, in force at the time of the conduct. No analogy, no custom, no retroactivity (CAP11), no prosecution under unpublished rules. Ambiguity resolves in the accused's favour.

**Rationale.** The 2022 seed's "no surprises" principle (C14) is strictest here: a resident must be able to read the short list and know exactly where it ends.

**Evidence.** `audit:` prosecutions under each offence, first five years.

**Falsifier.** If any conviction rests on analogy or an unpublished rule, it is void on appeal automatically and the prosecutor's office is audited.

### CRI2 — The short list

**Claim.** The catalogue covers: violence against persons; dishonesty (theft, fraud, extortion); **concealment offences** — perjury, destruction or falsification of evidence, falsification of the incident and national ledgers (C13, C45), knowing re-identification of protected data (COM4); coercion (including forced marriage MAR3); grave environmental harm (ENV8); corruption of public bodies (C44); and endangerment in the defined duty contexts (Defense Law). **No crime of opinion, expression, association, lifestyle, or honest commercial or research failure exists.** Each offence states its harm in one sentence.

**Rationale.** A criminal code that chases every wrong becomes a weapon for whoever holds it; the harm test plus the one-sentence statement keeps every line defensible on the ledger.

**Evidence.** `study:` overcriminalisation and enforcement reality (Booth 2016 review).

**Falsifier.** If a listed offence produces no convictions over two review cycles while consuming investigation capacity, it must be repealed.

### CRI3 — Mens rea

**Claim.** Liability requires intent or recklessness as to each element, except for narrow regulatory offences carrying only monetary penalties, which require negligence. Ignorance of law excuses only where the law was not reasonably knowable — a narrow door, but a real one.

**Rationale.** Punishing the blameless teaches nothing except fear; the Model Penal Code's insight holds.

**Evidence.** `study:` mens rea reform literature (Model Penal Code 1962).

**Falsifier.** If strict-liability offences punish genuinely blameless conduct beyond tolerance, the default flips to civil penalties.

### CRI4 — Proportionality and purposes

**Claim.** Sentencing purposes rank: rehabilitation, reparation to the victim, public protection, deterrence. No death penalty. No life without review. Sentence severity is justified per class against measured reoffending, published annually; the burden of proof for severity is on severity.

**Rationale.** Deterrence's empirical base is weak where certainty is low; this code buys certainty (CRI8 deadlines, real investigation capacity) rather than cruelty.

**Evidence.** `study:` deterrence and rehabilitation evidence (Nagin 2013).

**Falsifier.** If severity shows no marginal deterrence while rehabilitation measurably reduces reoffending, severity falls to the rehabilitative level.

### CRI5 — Custody is the exception

**Claim.** Custody is imposed only where public protection demonstrably requires it, for terms capped at `custody_max_grave` (grave class) or `custody_max_ordinary` (ordinary offences). In custody: the floor continues in full (C27), voting rights continue (ELE1), and release preparation (housing, work, treatment) begins at sentencing, not at release.

**Rationale.** A state that suspends membership as punishment punishes the prisoner's family and future victims too; the floor's universality is not a sentiment but a recidivism policy.

**Evidence.** `study:` incarceration and recidivism (Nagin, Cullen & Jonson 2009).

**Falsifier.** If community sentences fail at higher rates than projected custody for equivalent risk bands, custody presumption is restored for those bands.

### CRI6 — Honest failure is not a crime

**Claim.** Insolvency, research failure, mission failure, and good-faith regulatory misjudgement are immune from criminal liability where disclosed on the incident ledger (C13) — and concealment of them is an aggravating factor to the underlying offence, not a technicality.

**Rationale.** The engine needs risk-takers; the evidence system needs reporters; a criminal law that punishes either destroys both. Concealment is the true target.

**Evidence.** `audit:` prosecution attempts against disclosed failures vs. concealment cases.

**Falsifier.** If disclosure rates fall after commencement, the immunity is being breached or under-communicated — intervene before widening liability.

### CRI7 — Corporate liability

**Claim.** Juridical persons are liable for offences committed in their operations with the fault of a directing mind or of a system the entity failed to maintain. The remedy menu ranks: structural remedies (divestiture, process change, monitorships), restitution, then fines scaled to gain. A compliance defence exists only where the system is published and audited.

**Rationale.** Fines are prices for the strong; structural remedies speak to the entity's own logic (CIV9).

**Evidence.** `study:` corporate crime enforcement (Arlen & Kahan 2017).

**Falsifier.** If structural remedies leave recidivism unchanged at re-audit, the remedy menu is too timid.

### CRI8 — Procedure

**Claim.** Presumption of innocence; disclosure of the full file to the defence; state-funded defence above the hardship line (CIV7 route); a sortition jury for any charge with exposure of at least `jury_offence_threshold` years (CIV8); disposition within `charge_deadline_days` days or automatic review docketing; exclusion of evidence obtained unlawfully.

**Rationale.** Certainty and speed are the deterrents this code actually buys; every procedural guarantee is also a measurement tool — its failure is visible on a clock.

**Evidence.** `audit:` charge-to-disposition times, disclosure compliance, acquittal analysis.

**Falsifier.** If deadlines are exceeded beyond tolerance, cases move to the sortition chamber's review docket automatically.

### CRI9 — Victims

**Claim.** Sentencing starts from restitution to the victim (repair, compensation, protection orders under MAR9), proceeds to the public purposes (CRI4), and never includes humiliation. Victims have standing, support from the floor's services (HLT11), and a right to be heard without being made the instrument of prosecution.

**Rationale.** A code centred on harm must return the first claim to the harmed.

**Evidence.** `audit:` restitution ordered vs. actually collected.

**Falsifier.** If restitution collection stays below the published floor, the state pays victims first and pursues offenders itself.

### CRI10 — Records and redemption

**Claim.** Convictions become spent after `spent_conviction_years` (ordinary) or that times `spent_conviction_multiplier_grave` (grave class), upon clean completion. Spent convictions are invisible to employers, landlords and the public, visible only to courts and the registry under sealed process. The employment outcomes of spent-conviction holders are a published metric.

**Rationale.** Permanent exclusion is a life sentence served informally — and a recidivism engine (Agan & Starr's field experiment measures the stigma directly).

**Evidence.** `study:` criminal record stigma in hiring (Agan & Starr 2017).

**Falsifier.** If spent convictions predict employment as strongly as live ones, the disclosure regime must close further.

---

## Parameters

| Name | Value | Unit | Evidence |
| --- | --- | --- | --- |
| `custody_max_grave` | 20 | years for the gravest class | `pending:` first proportionality review against reoffending data |
| `custody_max_ordinary` | 5 | years for ordinary offences | `pending:` first proportionality review |
| `charge_deadline_days` | 180 | days from charge to disposition, statutory | `pending:` first docket-time audit |
| `jury_offence_threshold` | 2 | minimum years of exposure requiring sortition jury | `pending:` first bench-vs-jury divergence audit |
| `spent_conviction_years` | 7 | years after sentence completion for ordinary offences | `pending:` first employment-outcome cohort study |
| `spent_conviction_multiplier_grave` | 2 | multiplier of spent_conviction_years for the gravest class | `pending:` first grave-class cohort study |

## Dissent register

- A harm-list code will be pressed by the next moral panic into adding offences anyway; the anti-symmetry in CRI6 is a brake made of words.
- Twenty-year maxima will read as softness after the first atrocity; the bet on the floor's universality has lost in most democracies.
- Victim restitution first can turn prosecution into a collection agency for the loudest harm, while diffuse harms get the residue.

## Open questions

- Does the CRI6 immunity survive reckless (not just negligent) research conduct?
- Should grave-class convictions ever be permanently disclosable, and to whom?
- Who represents diffuse victims — communities, the evidence office, or standing NGOs?
