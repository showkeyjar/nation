# Simulation — an illustrative model of the loop

> Version 0.1.0 · 2026-10-10 · Status: draft

**Warning — read this before any number below.** This is an **illustrative mechanism model with invented parameters**. Every parameter in `tools/simulate.mjs` is labelled an **ASSUMPTION, not an estimate**: none is calibrated to any real economy, dataset, or study, and none should be quoted as if it were. The model can show that the Framework's mechanisms *can* interact as claimed — it **cannot validate the framework**, and it cannot refute any of the falsifiers in FRAMEWORK §7. Per [GOVERNANCE.md](../GOVERNANCE.md) §4, its evidence type is `model:` (e.g. `model:tools/simulate.mjs#scenario=framework`): a model whose assumptions and code are published, one step above `pending:` and far below `data:` or `study:`. Nothing here may be used to move a rule off `pending:` (GOVERNANCE §3, ratification gate). The scenarios were **not tuned** to make `framework` win; the sections [Where the framework loses](#where-the-framework-loses) and [Sensitivity](#sensitivity) report the losses the run actually produced.

---

## How to run

Requires Node ≥ 18 (uses only `node:fs` and `node:path`; no dependencies — `package.json` merely provides `npm run` aliases).

```bash
node tools/simulate.mjs                 # 60 years, all scenarios + sweep + sensitivity + chart
node tools/simulate.mjs --years 30      # different horizon
node tools/simulate.mjs --scenario framework   # one scenario (pure_market | command | framework | sweep)
node tools/simulate.mjs --json          # valid JSON on stdout (machine-readable)
node tools/simulate.mjs --quiet         # no stdout output; CSV still written
node tools/simulate.mjs --csv out.csv   # custom CSV path
```

Every run is deterministic (no randomness, no clock). The default run writes [docs/simulation-results.csv](./simulation-results.csv): one row per year per core scenario (`pure_market`, `command`, `framework`; 3 × 60 = 180 rows + header). Columns: `scenario, year, K, M, pvt, adoption, E_g, E_p, dup_ratio, markup_mu, buyout_released, Y, median_income, floor, floor_adequacy, capability_index, consumption, health_leisure, output_measure, debt, debt_output_ratio, fiscally_stable`. Sweep results are summary-only (84 runs) and are emitted by `--json`. One known display quirk: the first year's output growth is set to the base rate because the proprietary pipeline starts empty (an initialization artifact, suppressed in code and documented here).

## The model in equations

Annual steps, `t = 1 … T` (default `T = 60`). One aggregate agent, closed economy, population normalised to 1. **All coefficients are ASSUMPTIONs** (see the `PARAMS` object at the top of `tools/simulate.mjs`; each is commented `// ASSUMPTION`).

**State variables**

```
K    total knowledge stock ever produced (index, K₀ = 1)
M    commons stock — free at marginal cost (M₀ = 0.5)
pvt  proprietary knowledge awaiting conversion (sum of a pipeline of {amount, window, birth year})
A    adoption share of the commons (logistic, A₀ = 0.30)
F    floor level per person; debt  government debt (negative = sovereign wealth)
Y    output per capita (index, Y₀ = 100); median = medShare · Y
```

**Effort (engine + helm)**

```
E_p = E_p0 · φ(W) · (1 + η_P · P) · exp(−ε_τ · τ) · ρ_risk        private effort
φ(W) = (W/(W + h_W)) / (w_ref/(w_ref + h_W))                      window attractiveness, = 1 at W = 7
ρ_risk = min(1 + ρ_r · a, 2),  a = F / median                     risk capacity (C27), switchable flag
E_g = mission effort (scenario-set); in the command scenario it is scaled by egEff < 1
```

`E_p` rises with the exclusivity window `W` (saturating), with pre-committed demand `P`, and with floor adequacy; it falls with the profit tax `τ`. The `command` scenario sets `E_p0 = 0` and `egEff = 0.80` (ASSUMPTION: state-directed research loses ~20% of its productivity for lack of local knowledge — **the single most attackable assumption in the model**).

**Discovery and duplication**

```
d   = dupMax / (1 + M / m_d)                                     duplicate-research ratio (falls as M grows)
σ   = 1 + σ_stand · M / (M + m_σ)                                standing-on-shoulders spillover
ΔK  = ρ_K · (E_g·egEff + E_p) · (1 − d) · σ                      gross discovery (ASSUMPTION)
```

**Conversion valve (C16 / C18 / C22)**

```
public share  → M immediately (C22)
private share → pipeline; released to M when age ≥ W_d (expiry, C16)
markup μ      = 1 + a_μ · (pvt/(pvt + M)) · (W̄/(W̄ + 2))          price index, W̄ = effort-weighted window
if μ > μ_th (buyout test, C18): a fraction θ of pvt is released to M at price (c + α·v) per unit
```

**Diffusion and output**

```
ΔA  = r · A (1 − A),  r = r₀ · (0.4 + 0.6 · open) / (1 + δ · (μ − 1))   logistic; faster when open, slower under markup
K_use = A · M + pvt / μ                                          knowledge actually in use
Y_t = Y_{t−1} · (1 + g₀ + ψ · ln(K_use,t / K_use,t−1))           output
```

**Floor and fiscal (C29 / C30)**

```
F_t = max(F_{t−1}, κ · median_t)                                 indexed, never falls; indexation pauses
                                                                  while debt/Y > θ_debt (stability flag)
debt_t = debt_{t−1} + [floorCost + E_g + maintenance + precommit + buyout] − [rents + τ · profits]
```

**Capability index and the output measure (C35)**

```
CI  = c_K · ln(1 + A · M) + c_F · a                              capability depends on ADOPTED commons, not K
HL  = h_F·a + h_D·A − h_E·effort                                 health/leisure term
Ω   = w_C · ln(C/C₀) + w_CI·CI + w_F·a + w_H·HL                  output measure: consumption + capability
                                                                  + floor adequacy + health/leisure
```

`C` (consumption) is output minus monopoly deadweight loss, maintenance, mission spending, pre-commitment spend, buyout cost, fiscal distortion, and the real resource cost of private research. Because Ω and GDP can rank runs differently, a GDP-only optimiser can be compared with a capability-aware one (the C35 test).

## Scenarios

| # | Name | Configuration |
| --- | --- | --- |
| 1 | `pure_market` | `E_g = 0`, single 20-year window, weak floor (`κ = 0.15`), `τ = 0.15`, no pre-commitment, no buyout |
| 2 | `command` | `E_p0 = 0`, all research public immediately, strong floor (`κ = 0.50`), `τ = 0.40`, mission effort 1.2 at 0.80 efficiency |
| 3 | `framework` | missions (`E_g = 0.35`) + tiered windows per FRAMEWORK §2.1 (2/3/5/7/10 y, effort shares 0.15/0.25/0.25/0.20/0.15 — ASSUMPTION) + pre-commitment 0.5 + conversion valve (expiry + buyout) + indexed floor (`κ = 0.40`, `τ = 0.25`) |
| 4 | `sweep` | 84 runs: `W ∈ {2,3,5,7,10,15,20}` × `κ ∈ {0.2,0.3,0.4,0.5}` × `τ ∈ {0.2,0.3,0.4}`, framework-style config, reporting top 10 by CI and by Ω |

## Results

From an actual run (`node tools/simulate.mjs`, 60-year horizon; the CSV is the artefact of exactly this run):

| metric at year 60 | pure_market | command | framework | winner |
| --- | --- | --- | --- | --- |
| capability index CI | 1.641 | 2.256 | **2.328** | framework (+3.2% over command) |
| floor adequacy | 0.150 | **0.500** | 0.400 | command |
| output measure Ω | 3.341 | **4.538** | 4.465 | command |
| knowledge stock K | 6.03 | 5.90 | **7.43** | framework |
| commons stock M | 3.58 | 5.40 | **6.45** | framework |
| adoption A | 0.999 | 0.999 | 0.999 | tie (saturated) |
| duplicate ratio | 0.208 | 0.162 | **0.145** | framework |
| markup μ | 1.33 (peak 1.675 @ y20) | 1.00 | 1.05 (peak 1.201 @ y6) | — |
| private effort E_p | **1.124** | 0.000 | 0.894 | pure_market |
| consumption C | 386.3 | **438.4** | 434.4 | command |
| output Y | 398.0 | 440.1 | **444.6** | framework |
| debt / Y | −4.14 | −0.33 | −2.29 | (all "stable"; negative = sovereign wealth) |

Selected trajectory points (from `docs/simulation-results.csv`):

| year | CI pure / command / framework | Ω command / framework | Y framework |
| --- | --- | --- | --- |
| 10 | 0.395 / 1.082 / 0.875 | 2.468 / 2.008 | 176.0 |
| 20 | 0.461 / 1.455 / 1.360 | 3.164 / 2.874 | 242.5 |
| 35 | 1.041 / 1.815 / **1.816** | 3.780 / 3.623 | 320.6 |
| 50 | 1.428 / 2.097 / 2.146 | 4.262 / 4.162 | 394.4 |
| 60 | 1.641 / 2.256 / 2.328 | 4.538 / 4.465 | 444.6 |

```text
    Capability index CI over time (three scenarios)
  2.43 |
                                                              FFFFFF
                                                       FFFFFFFCCCC
                                                 FFFFFFCCC
                                           FFFFFFC
                                     CCCCCF
  1.63 |                        CCCCCF                          PPPP
                           CCCCCFF                        PPPPPP
                       CCCCFFF                      PPPPPP
                   CCCCFFF                     PPPPP
                 CC FFF                   PPPPP
              CCC FF                  PPPP
  0.84 |    CC  FF                 PPP
          CC FFF                PPP
        CCFFF                PPP
        F      PPPPPPPPPPPPPP
        PPPPPPP
  0.18 |
       +------------------------------------------------------------
                 10         20         30         40         50         60
        (year; one column = one year, horizon = 60)
        legend: P = pure_market   C = command   F = framework
        (where series overlap, the cell shows the highest-value series)
```

Reading the run honestly:

- **The loop compounds, slowly and late.** `framework` overtakes `command` on CI only at **year 35**, and by year 60 the gap is +3.2%. The first two decades belong entirely to `command` (immediate release, fast adoption): at year 10 command's CI is 24% above framework's. A 60-year horizon is itself an ASSUMPTION of the comparison.
- **The conversion valve mostly idles under the draft tiers.** In `framework` the markup index peaks at 1.201 < 1.25, so the buyout route **never fires** (0 events); conversion happens by expiry and immediate public release. The valve fires only in long-window runs (e.g. `W=10, κ=0.4, τ=0.2`: 5 buyouts, 1.288 knowledge units released). `pure_market`, with no valve, carries μ up to 1.675 — which is where its consumption and CI losses come from.
- **No fiscal stress anywhere.** Debt is negative in all three scenarios (surpluses accumulate). Reason: rents are ASSUMPTIONed at 10% of output while the indexed floor costs ≈ 7% (`floorCoverage` 0.25 × κ 0.4 × median share 0.7). The stability flag (debt/Y > 0.8) never trips in any of the 87 runs. **This is an assumption-flattered result, not a finding** — see [Open questions](#open-questions-the-model-raises).
- **GDP-only vs capability-aware ranking diverges (C35).** By GDP the order is `framework (444.6) > command (440.1) > pure_market (398.0)`; by Ω it is `command (4.538) > framework (4.465) > pure_market`. A GDP-only optimiser picks the wrong winner between the top two. In the sweep the two criteria agree on the single best cell but disagree in the tail (e.g. `W=10, κ=0.4, τ=0.2` is #8 by CI but misses the Ω top 10, Ω = 4.667 < 4.729).

**Sweep (84 runs), top 10 at year 60** — full tables print on every run; the four best by each criterion:

| rank | W | κ | τ | CI@60 | Ω@60 | Y@60 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 20 | 0.5 | 0.2 | **2.685** | **4.983** | 489.3 |
| 2 | 20 | 0.5 | 0.3 | 2.633 | 4.910 | 475.0 |
| 3 | 10 | 0.5 | 0.2 | 2.617 | 4.911 | 475.9 |
| 4 | 15 | 0.5 | 0.2 | 2.615 | 4.903 | 481.8 |

The GDP-only optimum (`W=20, κ=0.5, τ=0.2`, Y = 489.3) is also the Ω optimum (rank #1) in this grid — but note that **the named `framework` scenario (CI 2.328, Ω 4.465) would not itself make either top-10 list**, and even its own neighbourhood cell `W=10, κ=0.4, τ=0.2` reaches CI 2.508. Within this model's assumptions, longer windows with a strong floor beat the draft tier set at a 60-year horizon; the tier set's defence must come from shorter horizons, from Ω components the grid does not price, or — decisively — from measurement, not from this model.

## Sensitivity

One-at-a-time ±50% on 12 ASSUMPTIONs, `framework` scenario, horizon 60 (baseline CI = 2.328, adequacy = 0.400):

| parameter (all ASSUMPTIONs) | ×1.5 → ΔCI | ×0.5 → ΔCI | Δ adequacy |
| --- | --- | --- | --- |
| `rhoK` research productivity | +16.9% | **−24.8%** | 0.0% |
| `dupMax` max duplication | −8.3% | +6.0% | 0.0% |
| `epsTau` tax sensitivity | −4.9% | +5.4% | 0.0% |
| `dupHalf` duplication half-scale | −2.1% | +3.5% | 0.0% |
| `etaP` pre-commitment elasticity | +3.1% | −3.3% | 0.0% |
| `sigmaStand` commons spillover | +2.3% | −2.3% | 0.0% |
| `rhoRisk` risk-capacity elasticity | +2.2% | −2.3% | 0.0% |
| `dupHalf`, `markupAmp`, `rDiff`, `psi`, `rentShare`, `floorCoverage` (rest) | ≤ +0.1% | ≥ −0.1% | 0.0% |

- **Most influential single parameter: `rhoK` (research productivity)** — halving it cuts CI@60 by 24.8% (2.328 → 1.751); doubling it adds 16.9%. Nothing else moves CI by more than ~8%.
- **The framework-over-command CI ranking is NOT robust.** Re-running all three scenarios under each perturbation: the ordering `framework > command > pure_market` flips — `framework` 2.252 vs `command` 2.256 — if pre-commitment elasticity halves (`etaP` ×0.5), if tax sensitivity is 1.5× (`epsTau` ×1.5, framework 2.213), or with the risk-capacity flag off (framework 2.216). The +3.2% horizon margin over command rests almost entirely on the engine-response ASSUMPTIONs (`etaP`, `epsTau`, `rhoRisk`) and on `egCommandEff`. The ranking `framework/command > pure_market` is robust to all tested ±50% moves.
- **Floor adequacy never moves (0.0% everywhere)** — because the debt brake never binds, adequacy ≡ κ by construction in every run. The zero is an artefact of `rentShare = 0.10` and `floorCoverage = 0.25`; it is a blank spot, not a stability result.
- Several near-zero CI sensitivities are structural: `psi` and `rentShare` feed Y and the fisc only, not CI; `rDiff` stops mattering once adoption saturates (A ≥ 0.98 by year ~20 in all runs).
- **Risk-capacity flag (C27), isolated effect:** ON → CI 2.328; OFF → CI 2.216 (**−4.8%**). The floor's effect on attempts is visible but second-order relative to `rhoK`.

## Where the framework loses

The task required this section, and the run supplies it without effort:

1. **Output measure Ω, every year, including the horizon:** `command` 4.538 vs `framework` 4.465 at year 60. Framework **never** leads Ω in any of the 60 years — the strong floor's adequacy term (0.500 vs 0.400, weighted into both Ω and CI) outweighs framework's CI and GDP edge under these welfare weights.
2. **Consumption C:** `command` 438.4 vs `framework` 434.4 at year 60; framework never leads (year 5: 133.2 vs 139.4; year 10: 169.7 vs 185.6). Missions, pre-commitments, maintenance and buyout capacity are real costs, and in this model they are paid before the compounding arrives.
3. **Private research effort E_p:** `pure_market` 1.124 vs `framework` 0.894 — **20.5% lower, in every year**. Shorter windows plus a higher profit tax cost engine effort that pre-commitment only partly buys back. If the real ε_τ or the window elasticity is at the high end, F2⁺ (bounded exclusivity kills the engine) is live.
4. **Floor adequacy:** 0.400 vs command's 0.500 — a loss by construction of the scenario table, but a real trade: the model prices the stronger floor's welfare gain only through Ω/CI terms.
5. **The first ~34 years of capability:** `command` leads CI until year 35 (year 10: 1.082 vs 0.875). Any evaluation horizon under ~3 decades would rank command first on both CI and Ω.
6. **Against its own sweep:** the draft tier set is dominated at the 60-year horizon by longer-window cells (`W = 20, κ = 0.5, τ = 0.2`: CI 2.685 vs 2.328), and even by a plain `W = 10` single window at framework's own κ and τ (CI 2.508). Within this model, tiering is a cost, not a benefit, at long horizons.

## What this model does not show

1. **It is not calibrated to any real economy.** No parameter is estimated from data; magnitudes, levels and even the sign of some responses (e.g. `egCommandEff`) are invented.
2. **It ignores politics and capture.** No mission inflation (F1), no valuation capture (F3), no lobby pressure on `W_d`, `α`, `β`. GOVERNANCE §8 exists precisely because this model's clean conversion valve assumes it is implemented as written, forever.
3. **A single aggregate agent.** No firms, no entry/exit, no distribution below the median, no regions, no Demographics; `E_p` is stationary by construction (effort shares never shift toward or away from the commons).
4. **No international competition or capital flight.** Closed economy; no reciprocity problem (F8), no exit of capital after buyouts (F4/C21), no technology leakage or import of others' commons.
5. **No innovation variance, no black swans.** Deterministic flows, no skewed outcome distributions — yet the floor's main claimed benefit (more attempts against a skewed payoff) only exists when attempts are risky and heterogeneous.
6. **Floor behavioural effects are assumed, not estimated.** The risk-capacity multiplier (`rhoRisk`, +4.8% CI when on) is an ASSUMPTION; the cash-transfer labour-supply evidence behind C27 is not modelled, and potential work-disincentive effects are set to zero.
7. **The conversion valve's legal machinery is free.** Valuation panels, audits, maintenance endowments and appeals cost nothing beyond `maintRate`; buyout price formula components (α, β, `C_realized`) are scalars, not processes vulnerable to gaming.
8. **Diffusion is frictionless once open.** Logistic adoption with no capability, training, or localisation constraints — C26's localization duty and C25's maintainer duty have no failure modes here.

## What a real test would require

A pre-registered pilot (FRAMEWORK §8 stage 1), designed before any parameter is quoted:

- **Population:** 10k–1M residents under a host state's law or chartered zone (C46); a matched comparison jurisdiction or synthetic control drawn before the start.
- **Horizon:** minimum 2 × the longest window tested (≥ 20 years for the 10-year cultural tier) for the conversion valve to complete a full cycle; interim pre-registered checkpoints at years 3, 7, 12 (the tier set).
- **Primary metric:** capability index movement vs control (C35 dashboard: healthy life expectancy, education, connectivity, mobility, security), since GDP cannot distinguish the framework from its rivals (this run's C35 divergence).
- **Secondary metrics:** the six conversions of FRAMEWORK §3 — coordination latency, duplicate-research ratio, diffusion half-life, reuse breadth, participation rate, amendment latency; plus private R&D entry rate, floor adequacy and take-up, floor fiscal cost vs rents, and buyout events and prices.
- **The FRAMEWORK §7 falsifiers, as pre-registered hypotheses:**
  - F1⁺ — missions vs untargeted grants: cost-per-discovery per mission-led vs open-grant money.
  - F2⁺ — bounded exclusivity vs the engine: private investment per domain as a function of `W_d` (this model's sweep is a toy version; the pilot is the real one).
  - F3⁺ — floor vs attempts: venture formation, retraining enrolment and research entry vs floor adequacy (the `rhoRisk` ASSUMPTION becomes measurable).
  - F4⁺ — conversion vs its cost: buyout + maintenance cost vs deadweight loss removed, per domain.
  - F5⁺ — coordination metrics vs R&D spend as predictors of later capability growth (C37).
- **How `W_d` would be measured:** per domain, estimate diffusion half-life after release events and the elasticity of private investment to window length (natural experiments: patent expiry, open-sourcing events); set `W_d` where the diffusion gain of one shorter year equals the investment loss — then re-test annually (parameters expire faster than rules, GOVERNANCE §10).
- **How `β` (creator share) would be measured:** randomised or stepped creator-share levels across released capabilities; outcome = subsequent invention rate by the same and adjacent teams (C20's falsifier: shares above 10% of realised value must raise invention rates or fall).
- **How `α` (buyout share) would be measured:** auction/panel valuation variance against realised social value after release; `α` is bounded by C18's absolute cap and audited retrospectively; creep upward is the F3 symptom.
- **Governance of the test itself:** pre-registration in the open ledger (C33), insulated statistics office (C36), red-team reports published (GOVERNANCE §8.8), results published including failures (C14, C46).

## Mechanism → article map

| Model mechanism | Articles | Model variable(s) |
| --- | --- | --- |
| Duplication loss falling with commons stock | **C37** (duplicate-research ratio), C22 | `dupMax`, `dupHalf`, `M` |
| Conversion valve (expiry + buyout + immediate public release) | **C16, C18, C19** (+C22) | `tiers/W`, `markupThresh`, `buyoutFraction`, `buyoutAlpha` |
| Floor indexation (never falls; pauses under fiscal stress) | **C29** (+C30, C27) | `kappa`, `debtThresh` |
| Risk capacity (attempts multiplier from floor adequacy) | **C27** (falsifier F3⁺) | `rhoRisk`, `riskCapacityOn` |
| Pre-committed demand raising private effort | C17 | `precommit`, `etaP` |
| Rents funding the floor | C30 | `rentShare`, `floorCoverage` |
| Commons maintenance duty | C25 | `maintRate` |
| Capability index vs GDP divergence | C35 (falsifier) | `CI`, `omega` vs `Y` |
| Diffusion half-life as a first-class output | C26, C37 | `rDiff`, `diffDrag`, `A` |
| Command-efficiency gap (no local knowledge) | C2, C9, C12 (limits of steering) | `egCommandEff` |

## Open questions the model raises

1. **Why is `command` so competitive here?** Its edge is one assumption (`egCommandEff = 0.80`) plus immediate release. What is the real productivity gap between directed and incentivised research — and does the mission contract (C11) close it or embody it?
2. **Does the draft tier set survive its own sweep?** In-model, `W = 10–20` with a strong floor beats tiering at 60 years. If shorter horizons or unpriced Ω components don't rescue the tiers, the §2.1 table needs measurement (per-domain window elasticities), not reasoning.
3. **What would make the floor fiscally bind?** With `rentShare = 0.10` and `floorCoverage = 0.25` nothing trips the stability flag. What coverage, rent share and κ make C30's ranking (rents before taxes) actually binding — and does indexation then need the C29 smoothing band?
4. **Why does the buyout valve never open under the draft tiers?** μ peaks at 1.201 vs a 1.25 threshold. Is the monopoly test (C18) calibrated against real markup distributions, or is it decorative at these parameters?
5. **Who sets the welfare weights?** Ω's weights (`w_C, w_CI, w_F, w_H`) decide the command-vs-framework verdict. The model makes C35's political economy explicit: the dashboard is a steering instrument, not just a measurement.
6. **Is a 60-year horizon the right judge?** Every framework-over-command result arrives after year 35. What discount rate, and whose, makes a 35-year wait acceptable — and does the answer change the pilot design?

---

*Generated by `node tools/simulate.mjs`; the committed CSV and every number above come from that run. Re-running produces identical output. Evidence type: `model:tools/simulate.mjs` (GOVERNANCE §4) — supports nothing above `pending:`.*
