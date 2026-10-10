# Red Team Brief — how to attack this blueprint

> Version 0.1.0 · 2026-10-10 · Status: standing invitation
> Implements [GOVERNANCE.md](../GOVERNANCE.md) §8 (anti-capture, external attack) · Responds to [Constitution.md](../Constitution.md) C47 ("exists to be attacked")

This repository's claims are falsifiable by design. That promise is worthless unless someone actually tries to break it. This brief tells you where the structure is weakest — as its authors see it — and how a landed attack is processed.

---

## 1. How to submit an attack

Open an issue (or a pull request with evidence attached) in this repository. An attack has a title, a **target** (a law article, a parameter, or a whole layer), and **evidence** — by preference `data:` or `study:` pointers, per [GOVERNANCE.md](../GOVERNANCE.md) §4; reasoned objections without new evidence are welcome but rank lower. Attacks may be written in English or Chinese; the corpus is bilingual ([FRAMEWORK.md](../FRAMEWORK.md) / [FRAMEWORK.zh-CN.md](../FRAMEWORK.zh-CN.md)).

**What a landed attack gets you:** it is recorded in the target law's `dissent` register (if it is the strongest objection there), answered within one review cycle, and — if it lands — the article or parameter changes with the change logged in `history`. Credit is public and permanent. This project cannot pay bounties; it can promise not to bury you.

## 2. Where we think it is weakest (ranked)

1. **No real-world anchor.** Every parameter is an ASSUMPTION (see the parameter tables in any law; [docs/SIMULATION.md](./SIMULATION.md) explains why its model cannot validate anything). The single most valuable attack is **any field-measured number** for any parameter — `W_d`, `α`, `β`, `κ`, mission-selection accuracy, diffusion half-life in a real commons.
2. **The engine-response assumptions carry everything.** In the illustrative model, the framework's margin over the command scenario flips sign if pre-commitment elasticity halves, tax sensitivity rises 50%, or the risk-capacity flag is off — and the command scenario's competitiveness rests on one invented number (`egCommandEff = 0.80`). Attack there.
3. **The sweep prefers windows we did not choose.** With the model's assumptions, 20-year windows beat the 2/3/5/7/10 tiers on every criterion ([docs/SIMULATION.md](./SIMULATION.md), sweep section). We defend the tiers with shorter horizons and unmodelled Ω components — attack that defence.
4. **Valuation capture.** `P = C_realized + α·V_expected` requires estimating expected value — the classic home of expert capture (GOVERNANCE §8). Any demonstrated mechanism by which incumbents systematically influence V estimates is a first-order hit on Capital Engine Law CAP6.
5. **Mission inflation.** Direction Law caps concurrent missions (DIR2) and demands kill criteria (DIR9), but a mission that gerrymanders its threshold can live forever. A documented historical analogue that defeats our specific procedural defence lands.
6. **Reciprocity as a tariff wall.** Commons Law COM5's most aggressive article (its own dissent says so): a schedule written by incumbents becomes protectionism in commons clothing. Attack the schedule-setter design.
7. **Pilot closability.** Stage-1 pilots are small by construction; smallness is exactly what makes extrapolation dishonest (C47, TRA9). Any argument that our pilot designs cannot detect the failure modes that matter at scale — with an example — lands.
8. **The tax story.** Tax Law bets the floor on rents funding it (TAX2). Show the arithmetic fails at plausible rent shares and the whole funding ranking needs reordering — this is a load-bearing wall.

## 3. What does NOT count as an attack

- "It would never be adopted" — political feasibility is outside the falsifier system; the blueprint is explicit that it is a spec, not a campaign.
- Attacks on the translation, the typography, or the repository's tone. (Bugs in these are still welcome as issues — they are just not attacks.)
- Requests to remove the evidence rule, the sunset rule, or the ratification gate. These three are the constitution of this repository's epistemics; a project without them would be a different project, and "be a different project" is not an argument.

## 4. Response protocol

1. **Triage (≤ 7 days):** a maintainer labels the attack with its target and evidence class.
2. **Response (≤ 1 review cycle):** the response is written into the target law's `dissent` register or `open_questions`, and the issue is closed with a link to the change.
3. **Consequences:** if the attack lands, the fix ships as a version bump with a `history` entry naming the attacker. If it does not land, the response says precisely what evidence would have landed it.

## 5. Standing acknowledgement

The strongest attacks so far are recorded in each law's `dissent` field — including the ones the authors wrote against themselves. The blueprint's current honest position is: *unanchored, unmeasured, and argued against by its own simulation on at least three points.* If you can move any of those three adjectives, you have done more for this project than any amount of agreement.
