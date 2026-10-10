# Constitution of the Open Nation

> **Version 0.2.0 (draft)** · 2026-10-10 · Status: **draft, open for deliberation**
> Canonical language: English. 中文框架说明见 [FRAMEWORK.zh-CN.md](./FRAMEWORK.zh-CN.md)。
> This document is not a state. It is a forkable blueprint. Fork it, test it, falsify it.

```law-meta
{
  "id": "law.constitution",
  "title": "Constitution of the Open Nation",
  "version": "0.2.0",
  "status": "draft",
  "adopted": null,
  "pillars": ["governance"],
  "summary": "The root law. Establishes the instrument doctrine (capital, market and plan are tools, not faiths), the Five Lines evidence rule for every law, the four operating layers (steering, capital engine, commons, social floor), the feedback ledger that makes collective intelligence measurable, and the amendment and transition procedure.",
  "articles": [
    { "id": "C1", "title": "Purpose of the nation", "evidence": ["pending:historical comparison of capability growth across regime types (to be assembled in docs/evidence/)"], "falsifier": "If nations that adopt capability expansion plus diffusion as their explicit purpose show no improvement over matched controls in healthy life expectancy, knowledge diffusion rate, or social mobility over 20 years, C1's stated purpose is not operative and must be rewritten." },
    { "id": "C2", "title": "Instrument doctrine", "evidence": ["data:20th century development outcomes — mixed economies vs. command economies vs. unregulated markets (evidence pack pending)"], "falsifier": "If some single instrument (pure market or pure plan) consistently dominates all hybrids on the metric suite in C35 across many contexts, the doctrine of instruments must be abandoned in favour of that instrument." },
    { "id": "C3", "title": "The Five Lines (evidence rule)", "evidence": ["pending:rule-adoption experiment comparing evidence-gated adoption with unfiltered adoption (to run as a trial under GOVERNANCE.md §6)"], "falsifier": "If evidence-gated rule adoption systematically produces slower adaptation and worse outcomes than unfiltered political adoption, the evidence rule is a net cost and must be relaxed." },
    { "id": "C4", "title": "Trial by default and sunset", "evidence": ["pending:pilot register must record which rules expired and what was learned"], "falsifier": "If sunset clauses cause critical infrastructure or rights to lapse repeatedly, causing measurable harm, sunsets must be restricted to non-rights rules." },
    { "id": "C5", "title": "Anti-capture", "evidence": ["study:regulatory capture literature; disclosure and cooling-off regimes"], "falsifier": "If disclosure, divestment and cooling-off rules do not reduce the correlation between rule authorship and author asset returns, stronger structural separation (sortition-only authorship) must replace them." },
    { "id": "C6", "title": "Entrenched rights floor", "evidence": ["pending:rights-floor index tracked annually in the national ledger"], "falsifier": "If entrenchment measurably blocks the correction of a right that later proves harmful, the entrenchment list must be narrowed to procedure-only guarantees." },
    { "id": "C7", "title": "Transparency and privacy", "evidence": ["audit:open-data publication rate vs. privacy incident rate, published annually"], "falsifier": "If default-open state data causes more measurable harm (re-identification, persecution) than measurable benefit, the default must flip to closed-with-justification for the affected data classes." },
    { "id": "C8", "title": "Exit as a check on power", "evidence": ["data:emigration and internal migration flows as a signal of institutional quality"], "falsifier": "If free exit demonstrably destroys the fiscal or skill base faster than it disciplines power, exit must be paired with a capital and training-repayment regime." },
    { "id": "C9", "title": "The nation sets direction", "evidence": ["study:mission-oriented innovation policy outcomes (e.g. Apollo, mRNA scale-up, solar cost curves)"], "falsifier": "If published long-horizon missions show no better hit rate or cost per discovery than untargeted research funding, steering must shrink to funding infrastructure only." },
    { "id": "C10", "title": "Directions are problems, not technologies", "evidence": ["study:comparison of technology-picking programmes vs. problem-prize programmes"], "falsifier": "If states that specify the technology outperform states that specify only the problem, on the metric suite, problem-only framing must be relaxed." },
    { "id": "C11", "title": "The mission contract", "evidence": ["audit:every mission in the mission ledger must expose metric, threshold, deadline, envelope and exit criteria"], "falsifier": "If missions with explicit kill criteria are cancelled no more often than missions without them, the contract adds paperwork without discipline, and must be simplified." },
    { "id": "C12", "title": "Limits of steering", "evidence": ["pending:legal test cases where the state attempted to command firm research agendas"], "falsifier": "If directive steering outperforms purchase-based steering across many domains, the limits in C12 must be loosened for those domains." },
    { "id": "C13", "title": "Foresight and upstream duty", "evidence": ["data:share of public R&D budget going to pre-competitive upstream research, tracked annually"], "falsifier": "If upstream funding share shows no correlation with later mission success, the duty becomes a quota with no purpose and should be removed." },
    { "id": "C14", "title": "Failure is data, not crime", "evidence": ["pending:publication rate of negative results in the national research ledger"], "falsifier": "If immunity for honest failure measurably increases reckless spending without increasing learning, it must be conditioned on pre-registered hypotheses and published negatives." },
    { "id": "C15", "title": "Property and profit as accelerators", "evidence": ["data:private R&D intensity vs. strength of property and contract enforcement"], "falsifier": "If removing profit claims in a domain increases its innovation rate, property-as-accelerator fails there and that domain moves to the commons layer directly." },
    { "id": "C16", "title": "Exclusivity is temporary and priced", "evidence": ["model:tools/simulate.mjs, exclusivity-window sweep; domain-specific real-world patent and copyright term studies"], "falsifier": "If 3-year windows reduce private investment in a domain without measurably accelerating diffusion, that domain's window is too short; if 20-year windows raise prices without raising discovery, they are too long. Either result narrows or widens the tiers." },
    { "id": "C17", "title": "Pre-commitment as the state's main lever", "evidence": ["study:advance market commitments and prize outcomes (e.g. pneumococcal AMC)"], "falsifier": "If advance purchase commitments systematically overpay relative to their measured acceleration of delivery, they must be replaced by smaller prizes plus open procurement." },
    { "id": "C18", "title": "Monopoly test and nationalization", "evidence": ["data:markup, entry-barrier and market-share thresholds calibrated against known monopoly cases"], "falsifier": "If the test flags competitive markets as monopolies, or misses durable monopolies, the thresholds must be recalibrated or the test replaced by a structural-entry test." },
    { "id": "C19", "title": "Commons release is the default end state", "evidence": ["study:diffusion speed after patent expiry, compulsory licensing and open-sourcing events"], "falsifier": "If commons release reduces the maintained quality of a capability below its private baseline for more than one review period, a maintenance endowment must be attached by default." },
    { "id": "C20", "title": "Creator and investor share", "evidence": ["pending:creator-share response measurement in pilot (the illustrative model does not vary the creator share)"], "falsifier": "If creator shares above 10% of realized value do not increase subsequent invention rates, shares should fall to the level that keeps inventors at least as well off as an equivalent salaried career." },
    { "id": "C21", "title": "Capital mobility and erosion control", "evidence": ["data:capital flight response to expropriation vs. to rule-based buyouts"], "falsifier": "If rule-based buyouts with fair valuation still trigger net capital flight exceeding the value of the commons released, compensation terms are insufficient." },
    { "id": "C22", "title": "Publicly funded research is public", "evidence": ["study:open-access mandates and their effect on follow-on citation and commercialization"], "falsifier": "If open-by-default public research reduces the rate at which it is commercialized in a domain, that domain may need a short exclusivity window instead of immediate release." },
    { "id": "C23", "title": "Data commons and open standards", "evidence": ["data:GDP cost of standards fragmentation and interoperability failures"], "falsifier": "If mandatory open standards slow the adoption of better protocols in fast-moving domains beyond the measured interoperability gain, standards must become voluntary there." },
    { "id": "C24", "title": "National dividend", "evidence": ["data:Alaska Permanent Fund and sovereign wealth fund distribution effects"], "falsifier": "If an equal per-capita dividend reduces aggregate investment more than it raises floor security and participation, the dividend should shift toward a floor top-up instead of cash." },
    { "id": "C25", "title": "Maintenance duty", "evidence": ["data:cost of abandoned open-source and public infrastructure (security debt, patching load)"], "falsifier": "If mandatory maintenance endowments cost more than they save in avoided failures, fund them only for assets above a criticality threshold." },
    { "id": "C26", "title": "Diffusion and localization duty", "evidence": ["study:translation and localization effects on adoption and training outcomes"], "falsifier": "If mandated localization produces no measurable adoption gain, it becomes optional support rather than a duty." },
    { "id": "C27", "title": "The unconditional floor", "evidence": ["data:health, crime and education outcomes under unconditional vs. conditional transfers"], "falsifier": "If unconditional basics measurably reduce labour participation or skill acquisition beyond the level compensated by improved health and entrepreneurship, the cash layer's design must change (still unconditional, differently sized)." },
    { "id": "C28", "title": "Floor, not ceiling", "evidence": ["pending:distributional data — top-decile outcomes must not be capped by floor design"], "falsifier": "If the floor's financing demonstrably suppresses the upper tail of achievement, the financing mix must shift further from profit taxes toward rents." },
    { "id": "C29", "title": "Indexed floor", "evidence": ["model:tools/simulate.mjs, indexation sweep"], "falsifier": "If automatic indexation causes fiscal instability cycles (floor growth exceeding productivity growth for a decade), indexation must be smoothed or banded." },
    { "id": "C30", "title": "Funding from rents, not from innovation", "evidence": ["data:land value, resource, spectrum, carbon and data rent shares of GDP"], "falsifier": "If rent-based financing cannot cover the floor at the indexed level, the gap must be closed by the least distortionary available source, and this article's ranking revised with evidence." },
    { "id": "C31", "title": "Right to useful work", "evidence": ["study:employer-of-last-resort and job guarantee pilots"], "falsifier": "If the guarantee crowds out better private employment or becomes a permanent low-wage ghetto, it must be converted into training and placement entitlements." },
    { "id": "C32", "title": "Dignity clause", "evidence": ["data:take-up rates under simple vs. surveilled benefit delivery"], "falsifier": "If surveillance-based delivery achieves lower fraud at no participation cost, this clause is over-restrictive for the non-cash layers." },
    { "id": "C33", "title": "Open ledger", "evidence": ["audit:completeness and freshness of the national ledger, checked by an independent auditor"], "falsifier": "If the ledger is not measurably used in deliberation or market decisions, it is theatre and should be reduced to the few datasets actually used." },
    { "id": "C34", "title": "Deliberation architecture", "evidence": ["study:sortition citizens' assemblies — quality of decisions and legitimacy"], "falsifier": "If sortition assemblies produce decisions indistinguishable from random or consistently worse than expert panels on the metric suite, their role must shrink to oversight." },
    { "id": "C35", "title": "Capability dashboard", "evidence": ["model:tools/simulate.mjs — scenario ranking differs between the capability index and the output/GDP measures (command leads output; framework leads capability)"], "falsifier": "If the capability index never diverges from GDP in a way that changes a decision, it is redundant and should be dropped." },
    { "id": "C36", "title": "Insulated statistics", "evidence": ["study:political interference in statistical agencies and its cost"], "falsifier": "If insulation prevents timely data collection during emergencies, a fast-track procedure is needed rather than de-insulation." },
    { "id": "C37", "title": "Collective-intelligence metrics", "evidence": ["pending:coordination latency, diffusion half-life and duplicate-research ratio measured for at least three domains"], "falsifier": "If these three metrics do not predict later capability growth better than R&D spend alone, the collective-intelligence claim in this document is unsupported and must be withdrawn." },
    { "id": "C38", "title": "Separation of steering, deciding, auditing", "evidence": ["data:concentration-of-power indices vs. corruption and error rates"], "falsifier": "If separate auditing and steering bodies measurably slow crisis response without reducing errors, a temporary joint body with mandatory post-crisis audit must be allowed." },
    { "id": "C39", "title": "Sortition and election hybrid", "evidence": ["study:term limits, recall and hybrid chamber outcomes"], "falsifier": "If hybrid chambers produce more deadlock and worse outcomes than either pure model, simplify to the better-performing model." },
    { "id": "C40", "title": "Mixed constitutional bench", "evidence": ["study:lay participation in judicial review"], "falsifier": "If lay jurors in constitutional review increase error rates on measured reversals without legitimacy gains, keep only professional review." },
    { "id": "C41", "title": "Amendment procedure", "evidence": ["audit:amendment proposals and outcomes recorded in the ledger"], "falsifier": "If the procedure proves so slow that laws cannot track technological change (amendment latency > diffusion half-life), add a fast-track path with mandatory retrospective review." },
    { "id": "C42", "title": "Entrenched core", "evidence": ["pending:list of attempted reversals of entrenched articles"], "falsifier": "If entrenchment is used to protect failed policy rather than rights and epistemics, the list must be cut back to the rights floor and the evidence rule." },
    { "id": "C43", "title": "Emergency powers", "evidence": ["data:emergency powers that outlived their emergency"], "falsifier": "If automatic sunset prevents effective response in a verified catastrophe, a single renewable extension with supermajority and audit may be permitted." },
    { "id": "C44", "title": "Honest accounting", "evidence": ["data:asset disclosure and audit regimes vs. corruption indices"], "falsifier": "If disclosure regimes mainly deter qualified candidates without reducing corruption, replace them with transaction-level ledgers and independent audit." },
    { "id": "C45", "title": "Stage 0: the open blueprint", "evidence": ["audit:repository activity, forks and external use"], "falsifier": "If the blueprint is never forked or used outside its authors, it is a manifesto, not a plan, and must be rewritten around a concrete pilot." },
    { "id": "C46", "title": "Stage 1: pilot jurisdiction", "evidence": ["pending:pre-registered pilot hypotheses and results, published including failures"], "falsifier": "If a pilot cannot attract and retain residents under the floor-plus-engine rules, the economics of the floor must be re-derived before any larger adoption." },
    { "id": "C47", "title": "Stage 2 and 3: scale and referendum", "evidence": ["pending:scaling results from a completed pilot"], "falsifier": "If pilot outcomes do not survive scaling, the framework must be treated as a local design, not a national one." },
    { "id": "C48", "title": "Portability", "evidence": ["audit:pilot data, tools and laws exported to at least one independent adopter"], "falsifier": "If results cannot be reproduced by an independent adopter, this constitution is unfalsifiable and therefore worthless as a public instrument." }
  ],
  "metrics": [
    "diffusion half-life: time from discovery to 10% adoption in the population",
    "duplicate-research ratio: share of mission spending replicating work already in the commons",
    "coordination latency: time from a published mission to first funded attempt",
    "research intensity: R&D spend as share of output, split public/private/commons",
    "monopoly rent share: share of output accruing to firms above the monopoly-test threshold",
    "capability index: composite of healthy life expectancy, education, connectivity, mobility, security",
    "floor adequacy: floor value as share of median disposable income",
    "social mobility: intergenerational income elasticity",
    "trust and participation: assembly participation rate, survey trust, law-compliance rate",
    "commons health: share of critical commons assets with a funded maintainer"
  ],
  "sunset": { "review_every_years": 10, "expires": null },
  "dissent": [
    "The steering layer may be capture-prone and slower than markets in fast-moving domains; a 'steer only upstream, never downstream' variant should be drafted and tested.",
    "A universal dividend may be fiscally unstable if the sovereign fund underperforms; a floor-only variant with no cash dividend should be piloted in parallel.",
    "Entrenchment of any article risks locking in a mistake; a fully revisable constitution with strong epistemics may be strictly better."
  ],
  "open_questions": [
    "How is the boundary between 'nationalized capability' and 'competitive service market' maintained over time?",
    "What prevents the mission ledger from becoming a permanent campaign of favoured industries?",
    "Can a pilot of 10k-1M people be economically closed without external transfers?",
    "Is a constitutional right to connectivity and computation viable in a resource-constrained founding period?"
  ],
  "history": [
    { "version": "0.1.0", "date": "2022-08-13", "change": "Seed: Development Law with five rules on technology, monopoly, nationalization and standards." },
    { "version": "0.2.0", "date": "2026-10-10", "change": "Restructured into eight chapters; added instrument doctrine, Five Lines evidence rule, steering layer, capital engine, commons layer, social floor, feedback ledger, governance and staged adoption. Operations moved to laws/." }
  ]
}
```

---

## Preamble

A nation is not a territory first. It is a **coordination device**: a set of rules that lets many people act as one mind where that helps, and as many minds where that helps.

Two propositions are treated as engineering constraints, not beliefs:

1. **Long-horizon, public-good discovery is under-produced by uncoordinated markets.** Someone must set direction and pay for what no single buyer will buy. This is the *steering* layer.
2. **Discovery is produced by motivated, competing, informed people.** Central allocation destroys initiative and destroys the local knowledge it would need. This is the *engine* layer.

Capital and communism are therefore not identities to defend. They are **instruments**, judged by measured results, as the seed text of this project already said in 2022. To these we add the two layers that turn instrument choice into a system: a **commons** layer that makes results universal, and a **floor** layer that removes the fear that makes people resist change.

The goal is stated as a measurable quantity rather than a slogan:

> **Maximise the rate at which humanity's useful discoveries are made and the rate at which they reach everyone, subject to a non-negotiable floor of dignity.**

Everything else in this document exists to make that sentence operational and falsifiable.

---

## Chapter 1 — Foundations

### C1 — Purpose of the nation

**Claim.** The purpose of the nation is to expand the capabilities of every person within it and to make the fruits of discovery common property, so that progress compounds instead of restarting.

**Rationale.** States that treat people as inputs produce growth without capability; states that treat discovery as property produce capability that only some people can use. Compounding requires both.

**Evidence.** `pending:` historical comparison of capability growth across regime types (to be assembled in docs/evidence/).

**Falsifier.** If nations that adopt capability expansion plus diffusion as their explicit purpose show no improvement over matched controls in healthy life expectancy, knowledge diffusion rate, or social mobility over 20 years, C1's stated purpose is not operative and must be rewritten.

### C2 — Instrument doctrine

**Claim.** Capital, market, plan, state and commons are tools. None is an identity, a loyalty, or a taboo. Each rule in this constitution may be proposed by anyone and must be judged by measured outcomes.

**Rationale.** The twentieth century spent enormous capability on instrument wars. The project's seed text said this in 2022: "capital or communism is only a tool to realize the collective wisdom or progress of the society." This article makes that a rule of construction: any argument that rests only on the *nature* of an instrument is inadmissible.

**Evidence.** `data:` 20th century development outcomes — mixed economies vs. command economies vs. unregulated markets (evidence pack pending).

**Falsifier.** If some single instrument (pure market or pure plan) consistently dominates all hybrids on the metric suite in C35 across many contexts, the doctrine of instruments must be abandoned in favour of that instrument.

### C3 — The Five Lines (evidence rule)

**Claim.** Every rule of law must carry five lines: **Claim** (what it asserts), **Rationale** (why it is expected to work), **Evidence** (a pointer to a vote, dataset, study, audit or model), **Falsifier** (the observation that would prove it wrong), and **Sunset** (when it is reviewed). A rule may circulate as a draft with `pending:` evidence. **No rule may be ratified while any of its evidence pointers is `pending:`.**

**Rationale.** "Every line of law must well-founded: vote or data science to verify" is the founding intuition of this project. Making the pointer *non-empty and checkable* is what turns that intuition into a machine-checkable gate.

**Evidence.** `pending:` rule-adoption experiment comparing evidence-gated adoption with unfiltered adoption (to run as a trial under GOVERNANCE.md §6).

**Falsifier.** If evidence-gated rule adoption systematically produces slower adaptation and worse outcomes than unfiltered political adoption, the evidence rule is a net cost and must be relaxed.

### C4 — Trial by default and sunset

**Claim.** Laws are experiments. Every law carries a review interval, and every non-rights law expires unless renewed with evidence. Pre-registered metrics must exist before a trial starts.

**Rationale.** Permanence is how mistakes become traditions. Sunsets force the state to re-earn its own rules.

**Evidence.** `pending:` pilot register must record which rules expired and what was learned.

**Falsifier.** If sunset clauses cause critical infrastructure or rights to lapse repeatedly, causing measurable harm, sunsets must be restricted to non-rights rules.

### C5 — Anti-capture

**Claim.** No person with a material interest in a rule's outcome may author it. Authors must disclose assets, divest from directly affected holdings, and observe a cooling-off period. A majority of any rule-drafting assembly is selected by sortition.

**Rationale.** The seed text: "the designers can not be vested interests." Monopoly is not only a market event; it is an authorship event.

**Evidence.** `study:` regulatory capture literature; disclosure and cooling-off regimes.

**Falsifier.** If disclosure, divestment and cooling-off rules do not reduce the correlation between rule authorship and author asset returns, stronger structural separation (sortition-only authorship) must replace them.

### C6 — Entrenched rights floor

**Claim.** A defined set of rights (life, bodily integrity, thought, speech, assembly, exit, privacy of person, the floor in C27, and the procedural guarantees in C3, C4, C5, C7) may not be removed by any ordinary majority.

**Rationale.** The point of a floor is that it does not depend on being popular in a bad year.

**Evidence.** `pending:` rights-floor index tracked annually in the national ledger.

**Falsifier.** If entrenchment measurably blocks the correction of a right that later proves harmful, the entrenchment list must be narrowed to procedure-only guarantees.

### C7 — Transparency and privacy

**Claim.** State data, ledgers, contracts, law versions and their evidence are open by default and machine-readable. Personal data is closed by default, and no citizen is required to expose their private life to receive the floor.

**Rationale.** Collective intelligence requires a shared factual substrate; dignity requires that the substrate is not made of people.

**Evidence.** `audit:` open-data publication rate vs. privacy incident rate, published annually.

**Falsifier.** If default-open state data causes more measurable harm (re-identification, persecution) than measurable benefit, the default must flip to closed-with-justification for the affected data classes.

### C8 — Exit as a check on power

**Claim.** Every resident may leave, and may take their personal property and their skills with them. No loyalty oath is required to remain a citizen.

**Rationale.** Exit is the cheapest and least violent check on a captured state. It also keeps the state honest about the floor: a nation people flee is a failed experiment, and the ledger will show it.

**Evidence.** `data:` emigration and internal migration flows as a signal of institutional quality.

**Falsifier.** If free exit demonstrably destroys the fiscal or skill base faster than it disciplines power, exit must be paired with a capital and training-repayment regime.

---

## Chapter 2 — Macro Steering (宏观引导: the helm)

> Operational rules: [laws/Direction_Law.md](./laws/Direction_Law.md)

### C9 — The nation sets direction

**Claim.** The nation publishes a small number of long-horizon missions — problems that markets will not solve on a profitable schedule — and commits public money, procurement and prizes to them.

**Rationale.** Some discoveries are decades from revenue: basic science, antibiotics, clean energy, defence, pandemic capacity. Nobody buys them at the right time, so the state buys them early. This is the *helm*, not the engine.

**Evidence.** `study:` mission-oriented innovation policy outcomes (e.g. Apollo, mRNA scale-up, solar cost curves).

**Falsifier.** If published long-horizon missions show no better hit rate or cost per discovery than untargeted research funding, steering must shrink to funding infrastructure only.

### C10 — Directions are problems, not technologies

**Claim.** A mission states the outcome and the threshold ("reduce X by 60% by 2040"), never the winning technology. Betting on a named technology is done with many small prizes, not one national decision.

**Rationale.** States are systematically bad at picking winners and systematically good at naming problems worth solving.

**Evidence.** `study:` comparison of technology-picking programmes vs. problem-prize programmes.

**Falsifier.** If states that specify the technology outperform states that specify only the problem, on the metric suite, problem-only framing must be relaxed.

### C11 — The mission contract

**Claim.** Every mission is published as a machine-readable record containing: problem, target metric, threshold, deadline, budget envelope, responsible steward, exit criteria, and kill criteria. Missions that miss their kill criteria are closed, and closure is published.

**Rationale.** A direction without an exit condition is a subsidy with a story.

**Evidence.** `audit:` every mission in the mission ledger must expose metric, threshold, deadline, envelope and exit criteria.

**Falsifier.** If missions with explicit kill criteria are cancelled no more often than missions without them, the contract adds paperwork without discipline, and must be simplified.

### C12 — Limits of steering

**Claim.** The steering layer may fund, buy, prize, standardise and publish. It may not command firms' or citizens' research agendas, conscript labour, or forbid a research direction.

**Rationale.** The helm must not become the engine. Freedom to work on unfunded questions is the source of surprises, and surprises are most of progress.

**Evidence.** `pending:` legal test cases where the state attempted to command firm research agendas.

**Falsifier.** If directive steering outperforms purchase-based steering across many domains, the limits in C12 must be loosened for those domains.

### C13 — Foresight and upstream duty

**Claim.** A fixed minimum share of the research budget goes to pre-competitive upstream work, and an independent technology-assessment office publishes the state of the art, its uncertainties, and the risks of each mission.

**Rationale.** Steering needs a map with honest blank areas.

**Evidence.** `data:` share of public R&D budget going to pre-competitive upstream research, tracked annually.

**Falsifier.** If upstream funding share shows no correlation with later mission success, the duty becomes a quota with no purpose and should be removed.

### C14 — Failure is data, not crime

**Claim.** Honest failure in a mission or a trial is published and carries no personal penalty. Concealment, fabrication and unfalsifiable reporting are severe offences.

**Rationale.** Systems that punish failure get lies instead of information, and then steer on lies.

**Evidence.** `pending:` publication rate of negative results in the national research ledger.

**Falsifier.** If immunity for honest failure measurably increases reckless spending without increasing learning, it must be conditioned on pre-registered hypotheses and published negatives.

---

## Chapter 3 — Capital Engine (资本动力: the engine)

> Operational rules: [laws/Capital_Engine_Law.md](./laws/Capital_Engine_Law.md), [laws/Development_Law.md](./laws/Development_Law.md), [laws/Earn_and_Pay_Law.md](./laws/Earn_and_Pay_Law.md)

### C15 — Property and profit as accelerators

**Claim.** Property, contract, profit and the right to fail are protected, because they align private effort with public discovery. They are protected *as accelerators*, not as ends.

**Rationale.** The seed text: "People can develop any technology to earn money that has benefit for legitimate use." Reward is the cheapest motor ever discovered for other people's effort.

**Evidence.** `data:` private R&D intensity vs. strength of property and contract enforcement.

**Falsifier.** If removing profit claims in a domain increases its innovation rate, property-as-accelerator fails there and that domain moves to the commons layer directly.

### C16 — Exclusivity is temporary and priced

**Claim.** Every exclusivity right (patent, copyright, data exclusivity, spectrum-like licence) is a **time-limited, priced privilege** with a defined window per domain, never perpetual. At the end of the window the capability enters the commons automatically.

**Rationale.** Exclusivity buys acceleration; permanence buys rent. The window is where the two are traded off, so the window must be a measured parameter, not a lobbying outcome.

**Evidence.** `model:` tools/simulate.mjs, exclusivity-window sweep; domain-specific real-world patent and copyright term studies.

**Falsifier.** If 3-year windows reduce private investment in a domain without measurably accelerating diffusion, that domain's window is too short; if 20-year windows raise prices without raising discovery, they are too long. Either result narrows or widens the tiers.

### C17 — Pre-commitment as the state's main lever

**Claim.** The state accelerates capital mainly by pre-committing demand: advance purchase commitments, guaranteed procurement volumes, prizes and milestone payments. These convert an uncertain decade-long bet into a bankable contract.

**Rationale.** Capital is not brave about long horizons by nature; it is brave about *contracted* long horizons. Selling certainty is cheaper than subsidising failure.

**Evidence.** `study:` advance market commitments and prize outcomes (e.g. pneumococcal AMC).

**Falsifier.** If advance purchase commitments systematically overpay relative to their measured acceleration of delivery, they must be replaced by smaller prizes plus open procurement.

### C18 — Monopoly test and nationalization

**Claim.** When a capability meets the published monopoly test (durable market share plus entry barriers plus markup above threshold), the nation may **nationalize** it: buy it out at independently assessed fair value and release it. The test, the valuation method, the appeal route and the compensation formula are law, not discretion.

**Rationale.** The seed text: "If a technology has been market monopoly, then the nation has right to let this technology open source, and repricing it." The addition here is *procedure*, without which nationalization is expropriation and destroys the engine it was meant to fix.

**Evidence.** `data:` markup, entry-barrier and market-share thresholds calibrated against known monopoly cases.

**Falsifier.** If the test flags competitive markets as monopolies, or misses durable monopolies, the thresholds must be recalibrated or the test replaced by a structural-entry test.

### C19 — Commons release is the default end state

**Claim.** A released capability is free to use, and may be charged for only at the marginal cost of delivery. Nobody may re-monopolise it, directly or through interface control. The nation is obliged to serve it to everyone.

**Rationale.** "The basic capabilities of human beings will accumulate and progress. Otherwise, once the monopoly falls, everything will have to start from scratch without accumulation." This sentence from the seed README is the commons layer in one line.

**Evidence.** `study:` diffusion speed after patent expiry, compulsory licensing and open-sourcing events.

**Falsifier.** If commons release reduces the maintained quality of a capability below its private baseline for more than one review period, a maintenance endowment must be attached by default.

### C20 — Creator and investor share

**Claim.** Creators, teams and investors receive a defined share of the realized value of a released capability, paid from the buyout or from a commons fund. Shares are set by formula in law, published, and capped.

**Rationale.** "The repricing technology not only has cost, but also has profit, the nation can decide proportion of allocation to creator." Inventors must not be punished for having served the public.

**Evidence.** `pending:` creator-share response measurement in pilot (the illustrative model does not vary the creator share).

**Falsifier.** If creator shares above 10% of realized value do not increase subsequent invention rates, shares should fall to the level that keeps inventors at least as well off as an equivalent salaried career.

### C21 — Capital mobility and erosion control

**Claim.** Capital may enter and leave freely. Cross-border structuring whose main purpose is to strip the floor's funding base is regulated by published, non-retroactive rules — never by exit bans.

**Rationale.** Coercion traps capital once and deters it forever; rules attract it repeatedly.

**Evidence.** `data:` capital flight response to expropriation vs. to rule-based buyouts.

**Falsifier.** If rule-based buyouts with fair valuation still trigger net capital flight exceeding the value of the commons released, compensation terms are insufficient.

---

## Chapter 4 — Commons (全民共享: the transmission)

> Operational rules: [laws/Commons_Law.md](./laws/Commons_Law.md)

### C22 — Publicly funded research is public

**Claim.** Research financed by the public becomes public: open methods, open data, open code, with a bounty paid to the team on the milestones that matter.

**Rationale.** A citizen should not pay twice — once for the discovery and again for access to it.

**Evidence.** `study:` open-access mandates and their effect on follow-on citation and commercialization.

**Falsifier.** If open-by-default public research reduces the rate at which it is commercialized in a domain, that domain may need a short exclusivity window instead of immediate release.

### C23 — Data commons and open standards

**Claim.** Publicly collected data becomes a commons under privacy-preserving rules; where interoperability has high social value, standards are mandatory and open, and everyone is obliged to comply with them.

**Rationale.** The seed text: "If a technology is a standard that needs to be enforced, everyone is obliged to perform it." Fragmentation is a tax paid by everyone on every transaction.

**Evidence.** `data:` GDP cost of standards fragmentation and interoperability failures.

**Falsifier.** If mandatory open standards slow the adoption of better protocols in fast-moving domains beyond the measured interoperability gain, standards must become voluntary there.

### C24 — National dividend

**Claim.** Returns on sovereign capital, released assets and natural rents are paid partly as an equal per-capita dividend and partly into the floor and commons endowments. Every resident can see their share of the national balance sheet.

**Rationale.** Shared ownership that never reaches a person is a slogan; a dividend makes "everyone owns the results" a monthly fact.

**Evidence.** `data:` Alaska Permanent Fund and sovereign wealth fund distribution effects.

**Falsifier.** If an equal per-capita dividend reduces aggregate investment more than it raises floor security and participation, the dividend should shift toward a floor top-up instead of cash.

### C25 — Maintenance duty

**Claim.** No capability is released into the commons without a named maintainer and a funded maintenance endowment. Abandonment must be declared, with a successor or an archive.

**Rationale.** Open-sourcing without maintenance is not generosity; it is the transfer of a security debt. The seed project's own warning — accumulation must not restart from scratch — requires keeping what is shared alive.

**Evidence.** `data:` cost of abandoned open-source and public infrastructure (security debt, patching load).

**Falsifier.** If mandatory maintenance endowments cost more than they save in avoided failures, fund them only for assets above a criticality threshold.

### C26 — Diffusion and localization duty

**Claim.** A released capability must be documented, taught and localized into the languages of the people who must use it. Diffusion is a first-class output, not public relations.

**Rationale.** A discovery that reaches 10% of people in 40 years has done a fraction of the good of the same discovery reaching 80% in 5 years. Diffusion half-life is a headline metric of this nation.

**Evidence.** `study:` translation and localization effects on adoption and training outcomes.

**Falsifier.** If mandated localization produces no measurable adoption gain, it becomes optional support rather than a duty.

---

## Chapter 5 — Social Floor (社会兜底: the chassis)

> Operational rules: [laws/Social_Floor_Law.md](./laws/Social_Floor_Law.md), [laws/Health_Care_Law.md](./laws/Health_Care_Law.md), [laws/Education_Law.md](./laws/Education_Law.md)

### C27 — The unconditional floor

**Claim.** Every resident receives, unconditionally: adequate nutrition and clean water, safe shelter, full health care, education through the level they can use, connectivity and computation, personal security, legal aid, and a cash floor sufficient for dignified participation in society. The floor is a right, not a benefit, and is not conditioned on work, behaviour, or the surrender of private data.

**Rationale.** Fear is the most expensive tax an economy pays: it suppresses risk-taking, learning and honest reporting. A floor is what makes a society willing to change fast.

**Evidence.** `data:` health, crime and education outcomes under unconditional vs. conditional transfers.

**Falsifier.** If unconditional basics measurably reduce labour participation or skill acquisition beyond the level compensated by improved health and entrepreneurship, the cash layer's design must change (still unconditional, differently sized).

### C28 — Floor, not ceiling

**Claim.** The floor guarantees a minimum and caps nothing. Above the floor, inequality of outcome is permitted and expected, because it is the visible return on effort and risk.

**Rationale.** A system that flattens the top kills the engine; a system that abandons the bottom kills the crew. This article is the explicit statement that both are refused.

**Evidence.** `pending:` distributional data — top-decile outcomes must not be capped by floor design.

**Falsifier.** If the floor's financing demonstrably suppresses the upper tail of achievement, the financing mix must shift further from profit taxes toward rents.

### C29 — Indexed floor

**Claim.** The floor rises automatically with productivity and median income according to a published formula, and never falls. Indexation is a formula, not an annual political fight.

**Rationale.** A floor fixed in nominal terms is a floor that quietly disappears. Indexation makes the promise of shared progress mechanical.

**Evidence.** `model:` tools/simulate.mjs, indexation sweep.

**Falsifier.** If automatic indexation causes fiscal instability cycles (floor growth exceeding productivity growth for a decade), indexation must be smoothed or banded.

### C30 — Funding from rents, not from innovation

**Claim.** The floor and the commons are funded first from rents — land value, natural resources, spectrum, carbon, publicly created data, and sovereign fund returns — and only then from proportional taxes. The funding mix is published and reviewed.

**Rationale.** Taxing the discovery you are trying to accelerate is self-defeating; taxing the scarcity you did not create is not. Rents are also the cleanest brake on the monopoly problem in Chapter 3.

**Evidence.** `data:` land value, resource, spectrum, carbon and data rent shares of GDP.

**Falsifier.** If rent-based financing cannot cover the floor at the indexed level, the gap must be closed by the least distortionary available source, and this article's ranking revised with evidence.

### C31 — Right to useful work

**Claim.** Anyone who wants work has a right to a publicly offered job, apprenticeship or training place at or above the floor wage, doing work that is genuinely useful and not a make-work ritual. This right is optional to use and never compulsory.

**Rationale.** A floor protects existence; work gives structure, skill and belonging. Offering both removes the false choice between "handout" and "workfare".

**Evidence.** `study:` employer-of-last-resort and job guarantee pilots.

**Falsifier.** If the guarantee crowds out better private employment or becomes a permanent low-wage ghetto, it must be converted into training and placement entitlements.

### C32 — Dignity clause

**Claim.** Delivery of the floor must not humiliate. No surveillance-based means-testing, no mandatory disclosure of private life, no queues designed as deterrence.

**Rationale.** Administrative humiliation is a hidden tax on the poorest and the main reason benefits go unclaimed.

**Evidence.** `data:` take-up rates under simple vs. surveilled benefit delivery.

**Falsifier.** If surveillance-based delivery achieves lower fraud at no participation cost, this clause is over-restrictive for the non-cash layers.

---

## Chapter 6 — Feedback and Collective Intelligence (集体意识)

> Operational rules: [GOVERNANCE.md](./GOVERNANCE.md)

### C33 — Open ledger

**Claim.** Missions, budgets, contracts, law versions, evidence pointers, metrics and audit results are published in one machine-readable national ledger, updated on a fixed cadence.

**Rationale.** Collective intelligence is impossible without a shared, current picture of what is actually happening. Every agent — human or machine — that must cooperate on the nation's direction reads the same ledger.

**Evidence.** `audit:` completeness and freshness of the national ledger, checked by an independent auditor.

**Falsifier.** If the ledger is not measurably used in deliberation or market decisions, it is theatre and should be reduced to the few datasets actually used.

### C34 — Deliberation architecture

**Claim.** Law is made by a combination of sortition assemblies, elected representatives, expert evidence offices and referendums. Sortition is used for review and oversight, election for execution, referendum for entrenchment changes.

**Rationale.** Elections reward mobilisation; sortition samples the population; both together are harder to capture than either.

**Evidence.** `study:` sortition citizens' assemblies — quality of decisions and legitimacy.

**Falsifier.** If sortition assemblies produce decisions indistinguishable from random or consistently worse than expert panels on the metric suite, their role must shrink to oversight.

### C35 — Capability dashboard

**Claim.** National decisions are judged on the metric suite in the ledger (see the list attached to this document's metadata), not on GDP alone.

**Rationale.** What is measured is what is optimised. GDP-only steering produces growth that people do not experience.

**Evidence.** `model:` tools/simulate.mjs — scenario ranking differs between the capability index and the output/GDP measures (command leads output; framework leads capability).

**Falsifier.** If the capability index never diverges from GDP in a way that changes a decision, it is redundant and should be dropped.

### C36 — Insulated statistics

**Claim.** The statistical and scientific offices are funded by fixed formula, protected from dismissal for results, and obliged to publish methods and uncertainty.

**Rationale.** A steering layer fed by numbers it can edit is flying blind while feeling informed.

**Evidence.** `study:` political interference in statistical agencies and its cost.

**Falsifier.** If insulation prevents timely data collection during emergencies, a fast-track procedure is needed rather than de-insulation.

### C37 — Collective-intelligence metrics

**Claim.** The nation measures and publishes its own coordination efficiency: diffusion half-life, duplicate-research ratio, coordination latency, and the share of the population that can inspect and contest the ledger.

**Rationale.** "More efficient collective consciousness" is the central claim of this framework. It must be a measured quantity, or it is poetry.

**Evidence.** `pending:` coordination latency, diffusion half-life and duplicate-research ratio measured for at least three domains.

**Falsifier.** If these three metrics do not predict later capability growth better than R&D spend alone, the collective-intelligence claim in this document is unsupported and must be withdrawn.

---

## Chapter 7 — Governance and Amendment

### C38 — Separation of steering, deciding, auditing

**Claim.** The body that sets missions, the body that legislates, the body that audits and the body that counts are separate, with separate budgets and separate appointments.

**Rationale.** Concentration of power is a single point of failure in a system whose purpose is fast, honest learning.

**Evidence.** `data:` concentration-of-power indices vs. corruption and error rates.

**Falsifier.** If separate auditing and steering bodies measurably slow crisis response without reducing errors, a temporary joint body with mandatory post-crisis audit must be allowed.

### C39 — Sortition and election hybrid

**Claim.** One chamber is elected for execution and representation; a second chamber is selected by lot for review, with term limits, recall, and asset disclosure for all office-holders.

**Rationale.** The review chamber must not need donors, parties or campaigns to exist.

**Evidence.** `study:` term limits, recall and hybrid chamber outcomes.

**Falsifier.** If hybrid chambers produce more deadlock and worse outcomes than either pure model, simplify to the better-performing model.

### C40 — Mixed constitutional bench

**Claim.** Constitutional review is decided by professional judges sitting with sortition jurors, in public, with published reasons.

**Rationale.** Professional competence plus lay judgment is the strongest known combination for defending entrenched rules against both expertise capture and populist pressure.

**Evidence.** `study:` lay participation in judicial review.

**Falsifier.** If lay jurors in constitutional review increase error rates on measured reversals without legitimacy gains, keep only professional review.

### C41 — Amendment procedure

**Claim.** Amendment requires: a public proposal, an evidence pack in the Five Lines format, a minimum deliberation period (60 days), review by the sortition chamber, and a referendum with a double threshold (majority of voters and majority of regions or communities).

**Rationale.** Change must be easy enough to track technology and hard enough to resist fashion.

**Evidence.** `audit:` amendment proposals and outcomes recorded in the ledger.

**Falsifier.** If the procedure proves so slow that laws cannot track technological change (amendment latency > diffusion half-life), add a fast-track path with mandatory retrospective review.

### C42 — Entrenched core

**Claim.** C3 (evidence rule), C4 (sunset), C5 (anti-capture), C6 and C27 (rights and floor), C7 (transparency and privacy) and C38 (separation) can be amended only by two successive referendums at least twelve months apart, each with a supermajority.

**Rationale.** The epistemics and the floor are the load-bearing walls; everything else is furniture.

**Evidence.** `pending:` list of attempted reversals of entrenched articles.

**Falsifier.** If entrenchment is used to protect failed policy rather than rights and epistemics, the list must be cut back to the rights floor and the evidence rule.

### C43 — Emergency powers

**Claim.** Emergency powers must be declared in writing, name the right suspended, carry an automatic expiry of at most 90 days, be renewable only with a supermajority, and be audited afterwards. The floor and the evidence rule may not be suspended.

**Rationale.** Every permanent power in history began as a temporary emergency.

**Evidence.** `data:` emergency powers that outlived their emergency.

**Falsifier.** If automatic sunset prevents effective response in a verified catastrophe, a single renewable extension with supermajority and audit may be permitted.

### C44 — Honest accounting

**Claim.** Officials publish asset and interest declarations, transactions above a threshold are ledgered, audits are independent, and whistle-blowers are protected and rewarded.

**Rationale.** Corruption in a steering state is not only theft; it bends the direction of an entire society.

**Evidence.** `data:` asset disclosure and audit regimes vs. corruption indices.

**Falsifier.** If disclosure regimes mainly deter qualified candidates without reducing corruption, replace them with transaction-level ledgers and independent audit.

---

## Chapter 8 — Transition and Adoption

### C45 — Stage 0: the open blueprint

**Claim.** This repository is stage 0: an open, forked, contestable blueprint with no authority over anyone. Its only claim to legitimacy is that its rules are explicit, sourced and falsifiable.

**Rationale.** A blueprint that cannot be debated is a manifesto.

**Evidence.** `audit:` repository activity, forks and external use.

**Falsifier.** If the blueprint is never forked or used outside its authors, it is a manifesto, not a plan, and must be rewritten around a concrete pilot.

### C46 — Stage 1: pilot jurisdiction

**Claim.** Stage 1 is a small real jurisdiction — a community, district or chartered zone of roughly 10,000 to 1,000,000 people — operating this framework under a host state's law, with pre-registered hypotheses, published results including failures, and a guaranteed right of exit for every resident.

**Rationale.** The framework's disagreements are empirical, and only a pilot can settle them. Small enough to fail safely; large enough to be real.

**Evidence.** `pending:` pre-registered pilot hypotheses and results, published including failures.

**Falsifier.** If a pilot cannot attract and retain residents under the floor-plus-engine rules, the economics of the floor must be re-derived before any larger adoption.

### C47 — Stage 2 and 3: scale and referendum

**Claim.** Regional adoption follows only after a completed, independently audited pilot; national adoption requires a referendum on the audited results, not on the promise.

**Rationale.** Enthusiasm scales faster than evidence. This article makes evidence the ticket to scale.

**Evidence.** `pending:` scaling results from a completed pilot.

**Falsifier.** If pilot outcomes do not survive scaling, the framework must be treated as a local design, not a national one.

### C48 — Portability

**Claim.** All pilot data, tools, ledgers and laws are exported in open formats so that any other community can reproduce or refute the results without permission.

**Rationale.** An unfalsifiable social experiment is worthless. Portability is what makes the results evidence rather than anecdote.

**Evidence.** `audit:` pilot data, tools and laws exported to at least one independent adopter.

**Falsifier.** If results cannot be reproduced by an independent adopter, this constitution is unfalsifiable and therefore worthless as a public instrument.

---

## Law register

| Law | Pillar | File |
| --- | --- | --- |
| Constitution | governance | [Constitution.md](./Constitution.md) |
| Direction and Mission Law (宏观引导法) | direction | [laws/Direction_Law.md](./laws/Direction_Law.md) |
| Capital Engine Law (资本动力法) | engine | [laws/Capital_Engine_Law.md](./laws/Capital_Engine_Law.md) |
| Development Law (技术发展与开源法) | engine, commons | [laws/Development_Law.md](./laws/Development_Law.md) |
| Earn and Pay Law (劳动与报酬法) | engine, floor | [laws/Earn_and_Pay_Law.md](./laws/Earn_and_Pay_Law.md) |
| Commons Law (全民共享法) | commons | [laws/Commons_Law.md](./laws/Commons_Law.md) |
| Social Floor Law (社会兜底法) | floor | [laws/Social_Floor_Law.md](./laws/Social_Floor_Law.md) |
| Civil Law (民法) | governance | [laws/Civil_Law.md](./laws/Civil_Law.md) |
| Community Law (社区法) | governance, floor | [laws/Community_Law.md](./laws/Community_Law.md) |
| Education Law (教育法) | floor, commons | [laws/Education_Law.md](./laws/Education_Law.md) |
| Health Care Law (医疗法) | floor | [laws/Health_Care_Law.md](./laws/Health_Care_Law.md) |
| Marriage Law (婚姻法) | governance, floor | [laws/Marriage_Law.md](./laws/Marriage_Law.md) |
| Defense Law (国防法) | governance, direction | [laws/Defense_Law.md](./laws/Defense_Law.md) |

## How to read and change this document

1. Read [FRAMEWORK.md](./FRAMEWORK.md) for the architecture that these articles implement, and [GOVERNANCE.md](./GOVERNANCE.md) for how a rule becomes law.
2. Every article carries metadata in the `law-meta` block at the top of this file. Metadata and headings are checked for consistency by `node tools/nation.mjs validate`.
3. To propose a change, open an amendment in the Five Lines format. Proposals with `pending:` evidence are welcome as drafts; they may not be ratified.
4. Nothing in this document is final. Version 0.2.0 exists to be attacked.
