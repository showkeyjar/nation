# Nation

**An open-source nation. A forkable constitution, laws that carry their own evidence, and a framework for a society that learns faster.**

> 2022: "It's just a blueprint, I hope that one day the project can be true."
> 2026: still a blueprint — now a specific, checkable one.

## Why an open-source nation?

Because no country publishes the reasoning behind its laws, most laws outlive their reasons, and the designers of rules are usually the people the rules will enrich. This project's three founding commitments, unchanged since 2022:

1. **Every line of law must be well-founded** — by vote or by data, with the warrant attached to the rule and machine-checkable.
2. **The designers cannot be vested interests.**
3. **Monopoly is a failure of accumulation**: once a capability is a monopoly, it is bought out and open-sourced, so humanity's basic capabilities compound instead of restarting from zero whenever a monopolist falls.

And the fourth one that makes it a system rather than a grievance: capital, plan and state are **instruments**, judged by measured results, not identities to fight over.

## The framework (v0.2)

**Macro steering + capital engine + commons sharing + social floor** —

- The **state sets direction**: a small number of published long-horizon missions, framed as problems with thresholds, never as technologies.
- **Capital races** along that direction: property and profit protected, exclusivity time-limited and priced, state demand pre-committed so a ten-year bet becomes a bankable contract.
- **Results become common** on a published schedule: expiry, buyout on a monopoly test, or public funding — with creators paid a share and the capability served to everyone at marginal cost.
- **Nobody falls through the floor**: unconditional basics, indexed to productivity, funded from rents rather than from taxing the innovation it accelerates.
- The whole loop is **measured** — diffusion half-life, duplicate-research ratio, coordination latency — so "more efficient collective consciousness" is a number, not a slogan.

Full architecture, the core bargain, twelve failure modes and the falsifiers: **[FRAMEWORK.md](./FRAMEWORK.md)** · 中文版：**[FRAMEWORK.zh-CN.md](./FRAMEWORK.zh-CN.md)**

## The evidence rule

Every article of every law carries five lines: **Claim, Rationale, Evidence, Falsifier, Sunset**. Drafts may carry `pending:` evidence; **nothing with pending evidence can be ratified** — and this is enforced by software, not by custom:

```bash
npm run validate        # node tools/nation.mjs validate
npm run index           # regenerate LAW_INDEX.md
npm run graph           # regenerate docs/law-graph.md
npm run simulate        # the illustrative mechanism model
```

The current evidence debt (every pending pointer, per article) is listed in [LAW_INDEX.md](./LAW_INDEX.md).

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
| Tax Law (税法) | floor, engine | [laws/Tax_Law.md](./laws/Tax_Law.md) |
| Currency Law (货币法) | engine, governance | [laws/Currency_Law.md](./laws/Currency_Law.md) |
| Elections and Referendums Law (选举与公投法) | governance | [laws/Elections_Law.md](./laws/Elections_Law.md) |
| Criminal Law (刑法) | governance, floor | [laws/Criminal_Law.md](./laws/Criminal_Law.md) |
| Immigration and Residence Law (移民与居留法) | governance, floor | [laws/Immigration_Law.md](./laws/Immigration_Law.md) |
| Environment and Resources Law (环境与资源法) | direction, commons | [laws/Environment_Law.md](./laws/Environment_Law.md) |
| Transition Law (过渡法) | governance | [laws/Transition_Law.md](./laws/Transition_Law.md) |

The 2022 seed rules survive inside [laws/Development_Law.md](./laws/Development_Law.md) as articles DEV1–DEV5.

## How would this ever be used?

Honestly, in stages, and only through the front door:

- **Stage 0 (now)** — an open blueprint. Fork it, attack it (see [docs/RED_TEAM.md](./docs/RED_TEAM.md) for where it is weakest), replace its guesses with measurements.
- **Stage 1** — a pilot: 10,000–1,000,000 people (a community, district or chartered zone) running the framework under a host state's law, with pre-registered hypotheses and published results, including failures — the charter template is [docs/PILOT_CHARTER.md](./docs/PILOT_CHARTER.md). The load-bearing parameters to measure: exclusivity windows `W_d`, buyout share `α`, creator share `β`, floor indexation `κ`.
- **Stage 2** — regional adoption, on audited pilot results.
- **Stage 3** — a nation, by referendum on results rather than promises.

There is no founding date, no leader and no territory claim here. There is a falsifiable design and a way to test it. See FRAMEWORK.md §8 and §7 (what would refute the framework).

## Contributing

Attacks, evidence (replacing `pending:` pointers), missing laws, translations, and pilots are all wanted — in that order of value. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [docs/RED_TEAM.md](./docs/RED_TEAM.md). The short version: open a pull request that passes `npm run validate` (and `npm test`), expect your rule to be attacked, and record the attack in `dissent` if you cannot answer it. Translations are snapshots of the English canonical text, marked with the version they track — regenerate rather than drift.

## License

GPL-3.0 — see [LICENSE](./LICENSE). Fork the country; keep it free.
