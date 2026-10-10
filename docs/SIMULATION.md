# Simulation — an illustrative model of the loop

> Version 0.2.0 · 2026-10-12 · Status: draft
>
> **This version's numbers supersede v0.1.0.** v0.2.0 adds the creator-share mechanism (Constitution C20 / FRAMEWORK §2.2): a fiscal effect (β · V_realized paid on released capability over T years from the consolidated fund) and an incentive effect (a subsequent-effort multiplier with elasticity η_β). Both shift every baseline: `framework` CI@60 moves 2.328 → 2.390, Y@60 444.6 → 452.2. The β = 0 row of the [creator-share sweep](#creator-share-sweep) reproduces the v0.1.0 framework numbers exactly. A [magnitude sanity check](#magnitude-sanity-check) was also added.

**Warning — read this before any number below.** This is an **illustrative mechanism model with invented parameters**. Every parameter in `tools/simulate.mjs` is labelled an **ASSUMPTION, not an estimate**: none is calibrated to any real economy, dataset, or study, and none should be quoted as if it were. The model can show that the Framework's mechanisms *can* interact as claimed — it **cannot validate the framework**, and it cannot refute any of the falsifiers in FRAMEWORK §7. Per [GOVERNANCE.md](../GOVERNANCE.md) §4, its evidence type is `model:` (e.g. `model:tools/simulate.mjs#scenario=framework`): a model whose assumptions and code are published, one step above `pending:` and far below `data:` or `study:`. Nothing here may be used to move a rule off `pending:` (GOVERNANCE §3, ratification gate). The scenarios were **not tuned** to make `framework` win; the sections [Where the framework loses](#where-the-framework-loses) and [Sensitivity](#sensitivity) report the losses the run actually produced. The v0.2.0 additions inherit the same rule: the creator-share parameters (β, η_β, T) are ASSUMPTIONs, and the sanity check's published ranges are context for magnitude, not estimates of the model's parameters.

---

## How to run

Requires Node ≥ 18 (uses only `node:fs` and `node:path`; no dependencies — `package.json` merely provides `npm run` aliases).

```bash
node tools/simulate.mjs                 # 60 years: scenarios + sweeps + sensitivity + sanity check
node tools/simulate.mjs --years 30      # different horizon
node tools/simulate.mjs --scenario framework   # one scenario (pure_market | command | framework | sweep)
node tools/simulate.mjs --sanity        # magnitude sanity check alone (also part of the default run)
node tools/simulate.mjs --json          # valid JSON on stdout (includes beta sweep + sanity results)
node tools/simulate.mjs --quiet         # no stdout output; CSV still written
node tools/simulate.mjs --csv out.csv   # custom CSV path
```

Every run is deterministic (no randomness, no clock): the same command produces a byte-identical CSV. The default run writes [docs/simulation-results.csv](./simulation-results.csv): one row per year per core scenario (`pure_market`, `command`, `framework`; 3 × 60 = 180 rows + header). Columns: `scenario, year, K, M, pvt, adoption, E_g, E_p, dup_ratio, markup_mu, buyout_released, released_capability, creator_pay, Y, median_income, floor, floor_adequacy, capability_index, consumption, health_leisure, output_measure, debt, debt_output_ratio, fiscally_stable`. Sweep results are summary-only (84 runs) and are emitted by `--json`, as are the β sweep (5 runs) and the sanity check. One known display quirk: the first year's output growth is set to the base rate because the proprietary pipeline starts empty (an initialization artifact, suppressed in code and documented here).

## The model in equations

Annual steps, `t = 1 … T` (default `T = 60`). One aggregate agent, closed economy, population normalised to 1. **All coefficients are ASSUMPTIONs** (see the `PARAMS` object at the top of `tools/simulate.mjs`; each is commented `// ASSUMPTION`; `betaCap = 0.10` is a constitutional constant, not an assumption).

**State variables**

```
K    total knowledge stock ever produced (index, K₀ = 1)
M    commons stock — free at marginal cost (M₀ = 0.5)
pvt  proprietary knowledge awaiting conversion (sum of a pipeline of {amount, window, birth year})
A    adoption share of the commons (logistic, A₀ = 0.30)
F    floor level per person; debt  government debt (negative = sovereign wealth)
Y    output per capita (index, Y₀ = 100); median = medShare · Y
q    creator-share payment queue: {pay, yearsLeft} per release cohort (C20)
```

**Effort (engine + helm)**

```
E_p = E_p0 · φ(W) · (1 + η_P · P) · exp(−ε_τ · τ) · ρ_risk · m_β        private effort
φ(W) = (W/(W + h_W)) / (w_ref/(w_ref + h_W))                             window attractiveness, = 1 at W = 7
ρ_risk = min(1 + ρ_r · a, 2),  a = F / median                            risk capacity (C27), switchable flag
m_β = 1 + η_β · β/β_cap                                                  creator-share effort multiplier (C20)
E_g = mission effort (scenario-set); in the command scenario it is scaled by egEff < 1
```

`E_p` rises with the exclusivity window `W` (saturating), with pre-committed demand `P`, with floor adequacy, and with the creator share β; it falls with the profit tax `τ`. The `command` scenario sets `E_p0 = 0` and `egEff = 0.80` (ASSUMPTION: state-directed research loses ~20% of its productivity for lack of local knowledge — **the single most attackable assumption in the model**, now contested by `etaBeta`).

**Discovery and duplication**

```
d   = dupMax / (1 + M / m_d)                                     duplicate-research ratio (falls as M grows)
σ   = 1 + σ_stand · M / (M + m_σ)                                standing-on-shoulders spillover
ΔK  = ρ_K · (E_g·egEff + E_p) · (1 − d) · σ                      gross discovery (ASSUMPTION)
```

**Conversion valve (C16 / C18 / C22) and creator share (C20)**

```
public share  → M immediately (C22)
private share → pipeline; released to M when age ≥ W_d (expiry, C16)
markup μ      = 1 + a_μ · (pvt/(pvt + M)) · (W̄/(W̄ + 2))          price index, W̄ = effort-weighted window
if μ > μ_th (buyout test, C18): a fraction θ of pvt is released to M at price (c + α·v) per unit

R_t   = kg + expired + bought-out                                released capability, all routes (C20 applies to each)
v_t   = ψ · Y_{t−1} / K_use,t−1                                  V_realized per unit = model marginal product of
                                                                  knowledge-in-use (ASSUMPTION — conservative,
                                                                  output-anchored; see sanity check row 6)
obl_t = β · v_t · R_t                                            new statutory obligation, paid over T years
cp_t  = Σ outstanding cohort payments in year t                  creator payments due (queue q)
```

Creator payments are statutory: they do **not** pause under fiscal stress (unlike floor indexation).

**Diffusion and output**

```
ΔA  = r · A (1 − A),  r = r₀ · (0.4 + 0.6 · open) / (1 + δ · (μ − 1))   logistic; faster when open, slower under markup
K_use = A · M + pvt / μ                                          knowledge actually in use
Y_t = Y_{t−1} · (1 + g₀ + ψ · ln(K_use,t / K_use,t−1))           output
```

**Floor and fiscal (C29 / C30 / C20)**

```
F_t = max(F_{t−1}, κ · median_t)                                 indexed, never falls; indexation pauses
                                                                  while debt/Y > θ_debt (stability flag)
debt_t = debt_{t−1} + [floorCost + E_g + maintenance + precommit + buyout + cp_t]
                  − [rents + τ · profits]
```

The model keeps **one consolidated fund**: creator payments compete with floor top-ups, missions, maintenance and pre-commitments for the same rents and taxes; a short fund means debt, and debt is what trips the stability flag.

**Capability index and the output measure (C35)**

```
CI  = c_K · ln(1 + A · M) + c_F · a                              capability depends on ADOPTED commons, not K
HL  = h_F·a + h_D·A − h_E·effort                                 health/leisure term
Ω   = w_C · ln(C/C₀) + w_CI·CI + w_F·a + w_H·HL                  output measure: consumption + capability
                                                                  + floor adequacy + health/leisure
```

`C` (consumption) is output minus monopoly deadweight loss, maintenance, mission spending, pre-commitment spend, buyout cost, **creator payments**, fiscal distortion, and the real resource cost of private research. Creator payments are treated as consumption-reducing exactly like buyout cost — in this one-agent model transfers are not free; this is the conservative treatment and biases *against* β. Because Ω and GDP can rank runs differently, a GDP-only optimiser can be compared with a capability-aware one (the C35 test).

## Scenarios

| # | Name | Configuration |
| --- | --- | --- |
| 1 | `pure_market` | `E_g = 0`, single 20-year window, weak floor (`κ = 0.15`), `τ = 0.15`, no pre-commitment, no buyout |
| 2 | `command` | `E_p0 = 0`, all research public immediately, strong floor (`κ = 0.50`), `τ = 0.40`, mission effort 1.2 at 0.80 efficiency |
| 3 | `framework` | missions (`E_g = 0.35`) + tiered windows per FRAMEWORK §2.1 (2/3/5/7/10 y, effort shares 0.15/0.25/0.25/0.20/0.15 — ASSUMPTION) + pre-commitment 0.5 + conversion valve (expiry + buyout) + indexed floor (`κ = 0.40`, `τ = 0.25`) |
| 4 | `sweep` | 84 runs: `W ∈ {2,3,5,7,10,15,20}` × `κ ∈ {0.2,0.3,0.4,0.5}` × `τ ∈ {0.2,0.3,0.4}`, framework-style config, reporting top 10 by CI and by Ω |
| 5 | `beta sweep` | 5 runs: `β ∈ {0, 0.05, 0.10, 0.15, 0.20}` on the `framework` config (see [Creator-share sweep](#creator-share-sweep)) |

β is a shared legal environment: it applies in **all** scenarios at its default 0.10 (the constitutional cap), so even `pure_market` pays shares on 20-year expiries and `command` pays on every public release. The β = 0 sweep row doubles as the no-C20 counterfactual.

## Results

From an actual run (`node tools/simulate.mjs`, 60-year horizon; the CSV is the artefact of exactly this run):

| metric at year 60 | pure_market | command | framework | winner |
| --- | --- | --- | --- | --- |
| capability index CI | 1.710 | 2.256 | **2.390** | framework (+5.9% over command) |
| floor adequacy | 0.150 | **0.500** | 0.400 | command |
| output measure Ω | 3.421 | **4.537** | 4.536 | command, by 0.001 (0.02% — a tie within any honest reading) |
| knowledge stock K | 6.59 | 5.90 | **7.96** | framework |
| commons stock M | 3.91 | 5.40 | **6.93** | framework |
| adoption A | 0.999 | 0.999 | 0.999 | tie (saturated) |
| duplicate ratio | 0.198 | 0.162 | **0.138** | framework |
| markup μ | 1.33 (peak 1.691 @ y20) | 1.00 | 1.05 (peak 1.214 @ y6) | — |
| private effort E_p | **1.237** | 0.000 | 0.983 | pure_market |
| consumption C | 394.5 | 438.1 | **441.4** | framework at the horizon — but command leads years 1–45 |
| output Y | 407.0 | 440.1 | **452.2** | framework |
| debt / Y | −4.22 | −0.28 | −2.41 | (all "stable"; negative = sovereign wealth) |
| creator pay @ y60 (share of Y) | 0.263 (0.06%) | 0.281 (0.06%) | **0.301 (0.07%)** | — (totals over the run: 10.4 / 23.7 / 21.4) |

Selected trajectory points (from `docs/simulation-results.csv`):

| year | CI pure / command / framework | Ω command / framework | Y framework |
| --- | --- | --- | --- |
| 10 | 0.391 / 1.082 / 0.882 | 2.464 / 2.007 | 176.8 |
| 20 | 0.457 / 1.455 / 1.391 | 3.163 / 2.904 | 245.0 |
| 35 | 1.079 / 1.815 / **1.865** | 3.779 / 3.678 | 325.3 |
| 50 | 1.486 / 2.097 / 2.205 | 4.261 / 4.229 | 400.9 |
| 60 | 1.710 / 2.256 / 2.390 | 4.537 / 4.536 | 452.2 |

```text
    Capability index CI over time (three scenarios)
  2.50 |                                                            
                                                              FFFFFF
                                                       FFFFFFFCCCCCC
                                                 FFFFFFCCCCCC       
                                           FFFFFFCCCC               
                                      FFFFFCCC                      
  1.68 |                         CFFFFC                        PPPPP
                            CCCCCF                       PPPPPP     
                        CCCCFF                     PPPPPP           
                    CCCCFF                    PPPPP                 
                 CCC FF                   PPPP                      
               CC FFF                 PPPP                          
  0.86 |    CCC FF                 PPP                              
          CC FFF                PPP                                 
        CCFFF                PPP                                    
        FF      PPPPPPPPPPPPP                                       
        PPPPPPPP                                                    
  0.17 |                                                            
       +------------------------------------------------------------
                 10         20         30         40         50         60
        (year; one column = one year, horizon = 60)
        legend: P = pure_market   C = command   F = framework
        (where series overlap, the cell shows the highest-value series)
```

Reading the run honestly:

- **The loop compounds, slowly and late.** `framework` overtakes `command` on CI at **year 27** (v0.1.0: year 35 — the creator share pulls the crossing 8 years earlier), and by year 60 the gap is +5.9%. The first two decades still belong to `command`: at year 10 its CI is 18.5% above framework's. A 60-year horizon is itself an ASSUMPTION of the comparison.
- **The conversion valve still idles under the draft tiers.** In `framework` the markup index peaks at 1.214 < 1.25, so the buyout route **never fires** (0 events); conversion happens by expiry and immediate public release. The default creator share (+10% engine effort) lifted the peak from 1.201 (v0.1.0) to 1.214, and even η_β = 0.30 — triple the default — only reaches 1.237: no β/η_β combination tested opens the valve under the draft tiers. It fires only in long-window runs (e.g. `W=20, κ=0.5, τ=0.2`: 11 buyouts, 5.471 knowledge units released). `pure_market`, with no valve, carries μ up to 1.691 — which is where its consumption and CI losses come from.
- **No fiscal stress anywhere — the creator share included.** At β = 0.10 the framework's creator bill is 0.301/year at the horizon (0.07% of output; peak 0.55 at year 14, when the marginal-product anchor v_t is still large) against rents of ~10% of output. `command` pays the largest total bill (23.7 over 60 years — every public release obliges the fund) and its Ω edge survives it. The stability flag (debt/Y > 0.8) never trips in any run of the default output. **This is an assumption-flattered result, not a finding** — see [Open questions](#open-questions-the-model-raises).
- **GDP-only vs capability-aware ranking diverges (C35).** By GDP the order is `framework (452.2) > command (440.1) > pure_market (407.0)`; by Ω it is `command (4.5372) > framework (4.5362) > pure_market` — a margin of 0.001, i.e. a statistical tie (see [Sensitivity](#sensitivity): 9 of 29 parameter moves flip it). A GDP-only optimiser still picks a different winner than Ω at the top.

**Sweep (84 runs), top 10 at year 60** — full tables print on every run; the four best by each criterion:

| rank | W | κ | τ | CI@60 | Ω@60 | Y@60 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 20 | 0.5 | 0.2 | **2.698** | **4.997** | 495.3 |
| 2 | 10 | 0.5 | 0.2 | 2.692 | 4.992 | 484.9 |
| 3 | 15 | 0.5 | 0.2 | 2.689 | 4.983 | 491.3 |
| 4 | 7 | 0.5 | 0.2 | 2.653 | 4.952 | 476.2 |

The GDP-only optimum (`W=20, κ=0.5, τ=0.2`, Y = 495.3) is also the Ω optimum (rank #1) in this grid — but note that **the named `framework` scenario (CI 2.390, Ω 4.536) would not itself make either top-10 list**, and even its own neighbourhood cell `W=10, κ=0.4, τ=0.2` reaches CI 2.577 (rank #9 by CI, #13 by Ω; 5 buyouts, 1.256 units released). Within this model's assumptions, longer windows with a strong floor beat the draft tier set at a 60-year horizon; the tier set's defence must come from shorter horizons, from Ω components the grid does not price, or — decisively — from measurement, not from this model.

## Creator-share sweep

β ∈ {0, 0.05, 0.10, 0.15, 0.20}, `framework` config, 60-year horizon, all other parameters at default. **β = 0.20 exceeds the constitutional cap β ≤ 0.10 (Constitution C20) — it is included as a stress case only, not as a legal policy.**

| β | cap? | CI@60 | Ω@60 | Y@60 | C@60 | M@60 | E_p | fund balance@60 | creator pay@60 | % of Y | run total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | ok | 2.328 | 4.465 | 444.6 | 434.4 | 6.45 | 0.894 | −1018.3 | 0.000 | 0.00% | 0.0 |
| 0.05 | ok | 2.360 | 4.501 | 448.5 | 437.9 | 6.69 | 0.938 | −1054.0 | 0.149 | 0.03% | 10.6 |
| 0.10 | ok | **2.390** | **4.536** | 452.2 | 441.4 | 6.93 | 0.983 | −1089.7 | 0.301 | 0.07% | 21.4 |
| 0.15 | **over** | 2.420 | 4.570 | 455.9 | 444.7 | 7.18 | 1.028 | −1125.5 | 0.457 | 0.10% | 32.6 |
| 0.20 | **over** | 2.450 | 4.603 | 459.4 | 447.9 | 7.42 | 1.072 | −1161.3 | 0.616 | 0.13% | 44.0 |

"Fund balance" is the consolidated balance (negative = sovereign wealth); the model has no separate commons-fund stock. All runs stable.

- **The in-cap optimum sits AT the cap (β = 0.10).** Ω rises monotonically with β: the gain from β = 0.05 → 0.10 (+0.035, 0.77%) clears the 0.5% indistinguishability threshold, so this is not a flat plateau — but the margin is modest and the ordering is what the mechanism mechanically implies (see next bullet). The best value overall is β = 0.20, **above the cap**: taken literally, and under these ASSUMPTIONs only, the model wants to break C20.
- **Why: β buys effort cheaply here.** The incentive effect is linear (+10% private effort at the cap for η_β = 0.10) while the fiscal cost is 0.07% of output at the horizon — because the ASSUMPTIONed V_realized anchor (the model marginal product ψ·Y/K_use) prices released knowledge at a bill of only ~0.2–0.6 index units per year (peak 0.55 at year 14). With **η_β = 0 (no effort response), β = 0.10 loses to β = 0 by 0.001 Ω** — the share becomes a pure transfer cost. The break-even η_β lies **between 0 and 0.001** (at η_β = 0.001, β = 0.10 already wins by 0.0001; at 0.05 it wins by 0.036; at 0.20 by 0.139). **The entire "optimum at the cap" verdict therefore rests on the effort response being even barely positive — which is precisely C20's own falsifier** ("shares above 10% of realised value must raise subsequent invention rates, or fall").
- **The share partially self-funds — through growth.** Higher β leaves the fund *richer* (−1018.3 → −1089.7 → −1161.3): the extra engine effort grows Y, and rents (10% of Y) grow with it, outpacing the creator bill. This compounding argument is real inside the model but doubly assumption-laden (η_β for the effort, `rentShare` scaling for the revenue) — do not quote it as a fiscal result.
- **Robustness:** under the sanity-aligned parameters of the [next section](#magnitude-sanity-check) (rDiff ×0.25, markupAmp ×1.5) the sweep stays monotone (Ω 4.330 → 4.464 across β = 0 → 0.20) and the in-cap optimum stays at the cap.
- **What would flip the verdict:** η_β at exactly zero (the share is then a pure cost — but any response above ~0.001 flips it back); a V_realized anchor several times larger (the fiscal cost would still be small — ×4 is needed just to reach the 0.3–0.5%-of-IP-charges proxy); or a fund actually constrained (rents at 10% of output dwarf the bill, so the competition C20 demands never bites in this model — see [What this model does not show](#what-this-model-does-not-show)).

## Magnitude sanity check

Run with `node tools/simulate.mjs --sanity` (also part of the default output and of `--json`). Reference: `framework` scenario, default parameters; "steady state" := mean of the last 10 years. Verdict rule: inside the published range = **plausible**; within a factor of 10 = **right order of magnitude**; beyond = **off**. Sources are named (title + author + year); ranges are quoted from the published work, and **no model magnitude was tuned to land inside any of them**.

| model-implied ratio | model | published magnitude | factor | verdict |
| --- | --- | --- | --- | --- |
| rent revenue / output | 10.0% of output | 3–10% of GDP (pure land/locational rents; broader rent bases at the top) — Arnott & Stiglitz (1979), *Aggregate Land Rents and Aggregate Transport Costs*, Economic Journal 89(354); Henry George theorem literature | in range | plausible |
| public R&D intensity (mission spend) | 0.08% of output | 0.5–1.0% of GDP (government-performed R&D, OECD average) — OECD (2023), *Main Science and Technology Indicators* | 6.1× low | right order of magnitude |
| floor spending / output | 7.00% of output | 1.5–3% of GDP (minimum-income schemes) to ~20% (total public social spending) — OECD (2024), *Social Expenditure Database (SOCX)* | in range (between the two anchors) | plausible |
| diffusion half-life (A: 0.30 → 0.65) | 9 years | ≈15–40 years for major energy technologies — Grübler, Nakićenović & Victor (1999), *Dynamics of energy technologies and global change*, Energy Policy 27(5); IEA (2020), *Energy Technology Perspectives* | 1.7× fast | right order of magnitude |
| average markup μ−1 (knowledge price) | μ ≈ 1.06 (μ−1 = 0.056) | μ ≈ 1.2 (1980s) to ≈1.6 (2010s), US corporate sector — De Loecker, Eeckhout & Unger (2020), *The Rise of Market Power and the Macroeconomic Implications*, QJE 135(2) | 3.6× low | right order of magnitude |
| creator-share fiscal cost / output (β = 0.10) | 0.07% of output | ≈0.3–0.5% of GDP (cross-border charges for intellectual property — closest observable proxy) — World Bank (2023), *World Development Indicators*, "Charges for the use of intellectual property, payments" | 4.2× low | right order of magnitude |

Reading it honestly:

- **No ratio is off by an order of magnitude at the horizon** — but "right order" is a weak standard, and three rows sit 1.7–4.2× off **all in the direction that flatters the framework fiscally**: diffusion too fast (capability arrives sooner), markup too low (deadweight loss understated), creator share too cheap (the C20 bill looks trivial). The model's fiscal optimism is systematic, not random.
- **The worst row is public R&D intensity, and it is structural.** Mission effort is fixed in index units (0.35) while output grows ~4.5×, so intensity falls from 0.35% of output at year 1 to 0.08% at the horizon (6.1× below the OECD range). No parameter fixes this; `E_g` would have to be indexed to Y. Every Y-linked fiscal ratio in the model decays the same way — the floor does not only because it is indexed to the median by rule.
- **Caveats matter on two rows.** Model μ prices *knowledge*, not the whole economy, so the De Loecker–Eeckhout–Unger comparison is indicative only. And the floor's 7% lands between two very different anchors (a minimum-income scheme and a welfare state) because it is a 40%-of-median top-up for 25% of the population — the model does not decide which anchor is the right counterpart.

**What the sanity check changes.** To line up, the parameters to move are: `rDiff` 0.25 → 0.0625 (half-life 9 → 32 years); `markupAmp` 1.0 → 1.5 (μ−1 0.056 → 0.08 — still 2.5× below De Loecker–Eeckhout–Unger's lower bound; full alignment would need markupAmp ≈ 3.5, outside the ±50% sensitivity range); `E_g` indexed to output (structural); and a V_realized anchor ~4× larger for the creator-share cost. Rerunning **all three scenarios** with the two parameter-fixable alignments (rDiff ×0.25, markupAmp ×1.5): CI ranking unchanged (`framework 2.303 > command 2.214 > pure_market 1.405`), Ω ranking unchanged (`command 4.474 > framework 4.396 > pure_market 2.925`) — and command's Ω lead *widens* from 0.001 to 0.078, so the framework's Ω near-tie is **not** an artefact of fast diffusion or low markup; if anything, sanity alignment strengthens `command`. The β-sweep monotonicity also survives (see above). What does change: slower diffusion delays every capability gain (framework's CI overtake of command moves from year 27 to year 44), and adoption no longer saturates (A@60 = 0.95 in `command`, 0.90 in `framework`, 0.67 in `pure_market`), so `rDiff` stops being a dead sensitivity parameter.

## Sensitivity

One-at-a-time ±50% on 14 ASSUMPTIONs, `framework` scenario, horizon 60 (baseline CI = 2.390, adequacy = 0.400):

| parameter (all ASSUMPTIONs) | ×1.5 → ΔCI | ×0.5 → ΔCI | Δ adequacy |
| --- | --- | --- | --- |
| `rhoK` research productivity | +16.7% | **−24.7%** | 0.0% |
| `dupMax` max duplication | −8.1% | +5.8% | 0.0% |
| `epsTau` tax sensitivity | −5.0% | +5.5% | 0.0% |
| `dupHalf` duplication half-scale | −2.1% | +3.4% | 0.0% |
| `etaP` pre-commitment elasticity | +3.1% | −3.3% | 0.0% |
| `rhoRisk` risk-capacity elasticity | +2.3% | −2.4% | 0.0% |
| `sigmaStand` commons spillover | +2.3% | −2.3% | 0.0% |
| `etaBeta` creator-share effort elasticity η_β | +1.3% | −1.3% | 0.0% |
| `rDiff`, `psi`, `rentShare`, `floorCoverage`, `markupAmp`, `betaPayT` (rest) | ≤ +0.1% | ≥ −0.1% | 0.0% |

- **Most influential single parameter: `rhoK` (research productivity)** — halving it cuts CI@60 by 24.7% (2.390 → 1.800); raising it 1.5× adds 16.7%. Nothing else moves CI by more than ~8%.
- **`etaBeta` ranks mid-table (8th of 14, ±1.3% CI per ±50%)** — it does not dominate the way the β sweep's monotonicity might suggest, because ±50% of η_β = 0.10 is only ±5% of engine effort. `betaShare` itself is swept separately (see [Creator-share sweep](#creator-share-sweep)); `betaPayT` moves only payment timing, not totals, and its CI effect rounds to zero.
- **The framework-over-command CI ranking is now robust to every tested ±50% move.** Re-running all three scenarios under each of the 28 perturbations and with the risk-capacity flag off: `framework > command > pure_market` on CI holds in **all 29** cases (v0.1.0: three flips). The narrowest margin is `epsTau` ×1.5 (framework 2.270 vs command 2.256, a gap of 0.014); the risk-flag-off run is next (2.273 vs 2.256).
- **The Ω ranking is a knife-edge and flips on 9 of 29 moves.** Base: command 4.5372 vs framework 4.5362 (0.02%). Framework wins Ω under: `dupMax` ×1.5 (4.303 vs 4.290), `sigmaStand` ×1.5 (4.611 vs 4.609), `etaP` ×1.5 (4.621 vs 4.537), `epsTau` ×0.5 (4.684 vs 4.537), `rhoRisk` ×1.5 (4.598 vs 4.537), `rDiff` ×1.5 (4.5335 vs 4.5329 — a 0.0006 margin), `rentShare` ×0.5 (4.538 vs 4.138), `floorCoverage` ×1.5 (4.536 vs 4.525), `markupAmp` ×1.5 (4.541 vs 4.537). Command wins the other 20. **Do not quote "command wins Ω" without this list; the two scenarios are Ω-indistinguishable at this parameter set.**
- **Floor adequacy never moves (0.0% everywhere)** — because the debt brake never binds, adequacy ≡ κ by construction in every run. The zero is an artefact of `rentShare = 0.10` and `floorCoverage = 0.25`; it is a blank spot, not a stability result.
- Several near-zero CI sensitivities are structural: `psi` and `rentShare` feed Y and the fisc only, not CI; `rDiff` stops mattering once adoption saturates (A ≥ 0.98 by year 24 in `framework`, 18 in `command`, 42 in `pure_market` — not under the sanity-aligned set).
- **Risk-capacity flag (C27), isolated effect:** ON → CI 2.390; OFF → CI 2.273 (**−4.9%**). The floor's effect on attempts is visible but second-order relative to `rhoK`.

## Where the framework loses

The task required this section, and the run supplies it without effort:

1. **Output measure Ω, every year, including the horizon:** `command` 4.5372 vs `framework` 4.5362 at year 60. Framework **never** leads Ω in any of the 60 years — and the horizon margin is 0.001, small enough that 9 of 29 sensitivity moves reverse it (see above). The strong floor's adequacy term (0.500 vs 0.400, weighted into both Ω and CI) outweighs framework's CI and GDP edge under these welfare weights.
2. **Consumption C for the first 45 years:** `command` leads until year 46 (year 5: 139.0 vs 133.2; year 10: 184.8 vs 169.8; year 20: 247.5 vs 237.0; year 35: 319.2 vs 316.3). Framework wins C only from year 46 onward (441.4 vs 438.1 at year 60). Missions, pre-commitments, maintenance, buyout capacity and now creator shares are real costs, and they are paid before the compounding arrives.
3. **Private research effort E_p:** `pure_market` 1.237 vs `framework` 0.983 — **20.5% lower, in every year**. Shorter windows plus a higher profit tax cost engine effort that pre-commitment and the creator share only partly buy back. If the real ε_τ or the window elasticity is at the high end, F2⁺ (bounded exclusivity kills the engine) is live.
4. **Floor adequacy:** 0.400 vs command's 0.500 — a loss by construction of the scenario table, but a real trade: the model prices the stronger floor's welfare gain only through Ω/CI terms.
5. **The first 26 years of capability:** `command` leads CI until year 27 (year 10: 1.082 vs 0.882). Any evaluation horizon under ~3 decades would rank command first on both CI and Ω.
6. **Against its own sweep:** the draft tier set is dominated at the 60-year horizon by longer-window cells (`W = 20, κ = 0.5, τ = 0.2`: CI 2.698 vs 2.390), and by a plain `W = 10` single window at framework's own κ and τ (CI 2.577). Within this model, tiering is a cost, not a benefit, at long horizons.
7. **It pays for its own mechanism and still ties on Ω:** the framework's creator bill (21.4 over the run, the second-largest of the three scenarios) buys the +5.9% CI edge — but not a Ω win, because command collects the same engine externality through immediate release without paying for it (its 23.7 bill buys no effort at all, since `E_p0 = 0`).

## What this model does not show

1. **It is not calibrated to any real economy.** The sanity check compares ranges, it does not estimate; magnitudes, levels and even the sign of some responses (e.g. `egCommandEff`, `etaBeta`) are invented. No parameter here is measured.
2. **It ignores politics and capture.** No mission inflation (F1), no valuation capture (F3), no lobby pressure on `W_d`, `α`, `β`. GOVERNANCE §8 exists precisely because this model's clean conversion valve assumes it is implemented as written, forever — and C20 puts a share of V_realized, a measured-by-the-state quantity, into the hands of its recipients' future lobbying.
3. **A single aggregate agent.** No firms, no entry/exit, no distribution below the median, no regions, no Demographics; `E_p` is stationary by construction (effort shares never shift toward or away from the commons).
4. **No international competition or capital flight.** Closed economy; no reciprocity problem (F8), no exit of capital after buyouts (F4/C21), no technology leakage or import of others' commons.
5. **No innovation variance, no black swans.** Deterministic flows, no skewed outcome distributions — yet the floor's main claimed benefit (more attempts against a skewed payoff) only exists when attempts are risky and heterogeneous.
6. **Floor behavioural effects are assumed, not estimated.** The risk-capacity multiplier (`rhoRisk`, +4.9% CI when on) is an ASSUMPTION; the cash-transfer labour-supply evidence behind C27 is not modelled, and potential work-disincentive effects are set to zero.
7. **The conversion valve's legal machinery is free.** Valuation panels, audits, maintenance endowments and appeals cost nothing beyond `maintRate`; buyout price formula components (α, β, `C_realized`) are scalars, not processes vulnerable to gaming; and V_realized is assumed observable to the state at zero cost — C20's hardest practical problem.
8. **Diffusion is frictionless once open.** Logistic adoption with no capability, training, or localisation constraints — C26's localization duty and C25's maintainer duty have no failure modes here. The sanity check quantifies the optimism: 1.7× faster than historical energy-technology diffusion even before counting those frictions.
9. **No commons-fund stock, so C20's fund competition never binds.** Creator payments compete with other allocations only through the consolidated flow balance, and rents (10% of output) are ASSUMPTIONed so large that nothing is ever rationed: the "short fund" path — shares crowding out maintenance or new releases, or feeding the debt path — is reachable in code but never reached in any reported run. A real fund with buffers and rationing rules could behave differently.

## What a real test would require

A pre-registered pilot (FRAMEWORK §8 stage 1), designed before any parameter is quoted:

- **Population:** 10k–1M residents under a host state's law or chartered zone (C46); a matched comparison jurisdiction or synthetic control drawn before the start.
- **Horizon:** minimum 2 × the longest window tested (≥ 20 years for the 10-year cultural tier) for the conversion valve to complete a full cycle; interim pre-registered checkpoints at years 3, 7, 12 (the tier set).
- **Primary metric:** capability index movement vs control (C35 dashboard: healthy life expectancy, education, connectivity, mobility, security), since GDP cannot distinguish the framework from its rivals (this run's C35 divergence).
- **Secondary metrics:** the six conversions of FRAMEWORK §3 — coordination latency, duplicate-research ratio, diffusion half-life, reuse breadth, participation rate, amendment latency; plus private R&D entry rate, floor adequacy and take-up, floor fiscal cost vs rents, buyout events and prices, and creator-share payouts vs subsequent invention rates.
- **The FRAMEWORK §7 falsifiers, as pre-registered hypotheses:**
  - F1⁺ — missions vs untargeted grants: cost-per-discovery per mission-led vs open-grant money.
  - F2⁺ — bounded exclusivity vs the engine: private investment per domain as a function of `W_d` (this model's sweep is a toy version; the pilot is the real one).
  - F3⁺ — floor vs attempts: venture formation, retraining enrolment and research entry vs floor adequacy (the `rhoRisk` ASSUMPTION becomes measurable).
  - F4⁺ — conversion vs its cost: buyout + maintenance cost vs deadweight loss removed, per domain.
  - F5⁺ — coordination metrics vs R&D spend as predictors of later capability growth (C37).
- **How `W_d` would be measured:** per domain, estimate diffusion half-life after release events and the elasticity of private investment to window length (natural experiments: patent expiry, open-sourcing events); set `W_d` where the diffusion gain of one shorter year equals the investment loss — then re-test annually (parameters expire faster than rules, GOVERNANCE §10).
- **How `β` (creator share) would be measured:** randomised or stepped creator-share levels across released capabilities; outcome = subsequent invention rate by the same and adjacent teams (C20's falsifier: shares above 10% of realised value must raise invention rates or fall). The model's break-even estimate — any η_β above ~0.001 pays for the share at the cap — is the quantity to pin down first, because the in-cap-at-the-cap verdict hangs on it, and because a response that large is exactly what C20 promises and has never been measured.
- **How `α` (buyout share) would be measured:** auction/panel valuation variance against realised social value after release; `α` is bounded by C18's absolute cap and audited retrospectively; creep upward is the F3 symptom.
- **Governance of the test itself:** pre-registration in the open ledger (C33), insulated statistics office (C36), red-team reports published (GOVERNANCE §8.8), results published including failures (C14, C46).

## Mechanism → article map

| Model mechanism | Articles | Model variable(s) |
| --- | --- | --- |
| Duplication loss falling with commons stock | **C37** (duplicate-research ratio), C22 | `dupMax`, `dupHalf`, `M` |
| Conversion valve (expiry + buyout + immediate public release) | **C16, C18, C19** (+C22) | `tiers/W`, `markupThresh`, `buyoutFraction`, `buyoutAlpha` |
| Creator share on released capability (fiscal cost + effort response) | **C20** (+C18 buyout proceeds, C25 fund) | `betaShare`, `betaCap`, `etaBeta`, `betaPayT` |
| Floor indexation (never falls; pauses under fiscal stress) | **C29** (+C30, C27) | `kappa`, `debtThresh` |
| Risk capacity (attempts multiplier from floor adequacy) | **C27** (falsifier F3⁺) | `rhoRisk`, `riskCapacityOn` |
| Pre-committed demand raising private effort | C17 | `precommit`, `etaP` |
| Rents funding the floor | C30 | `rentShare`, `floorCoverage` |
| Commons maintenance duty | C25 | `maintRate` |
| Capability index vs GDP divergence | C35 (falsifier) | `CI`, `omega` vs `Y` |
| Diffusion half-life as a first-class output | C26, C37 | `rDiff`, `diffDrag`, `A` |
| Command-efficiency gap (no local knowledge) | C2, C9, C12 (limits of steering) | `egCommandEff` |

## Open questions the model raises

1. **Why is `command` so competitive here?** Its edge is one assumption (`egCommandEff = 0.80`) plus immediate release, and it now survives paying the largest creator bill. What is the real productivity gap between directed and incentivised research — and does the mission contract (C11) close it or embody it?
2. **Is the Ω verdict meaningful at a 0.001 margin?** Command "wins" Ω by 0.02% and flips on 9 of 29 sensitivity moves. Either the welfare weights (`w_C, w_CI, w_F, w_H`) are doing all the work — a political question (C35) — or the model simply cannot separate the top two scenarios, which is itself the finding.
3. **Does the draft tier set survive its own sweep?** In-model, `W = 10–20` with a strong floor beats tiering at 60 years. If shorter horizons or unpriced Ω components don't rescue the tiers, the §2.1 table needs measurement (per-domain window elasticities), not reasoning.
4. **What would make the floor fiscally bind?** With `rentShare = 0.10` and `floorCoverage = 0.25` nothing trips the stability flag — not even doubling the creator bill. What coverage, rent share and κ make C30's ranking (rents before taxes) actually binding — and does indexation then need the C29 smoothing band?
5. **Why does the buyout valve never open under the draft tiers?** μ peaks at 1.214 vs a 1.25 threshold, and no β/η_β combination tested closes the gap. Is the monopoly test (C18) calibrated against real markup distributions — which the sanity check puts at μ ≈ 1.2–1.6, mostly *above* the trigger — or is it decorative at these parameters?
6. **Is η_β above break-even in reality?** The model's creator-share optimum sits at the constitutional cap because η_β = 0.10 while break-even sits below 0.001 — almost any positive effort response justifies β at these weights. C20's falsifier is the empirical test; but note the model cannot distinguish 0.001 from 0.10 as *policy advice* — both say "β at the cap" — because the fiscal cost is too small to bind. That insensitivity is the model's weakness, not β's vindication.
7. **Is a 60-year horizon the right judge?** Every framework-over-command capability result arrives after year 27. What discount rate, and whose, makes a 27-year wait acceptable — and does the answer change the pilot design?

---

*Generated by `node tools/simulate.mjs`; the committed CSV and every number above come from that run (v0.2.0, superseding v0.1.0). Re-running produces identical output. Evidence type: `model:tools/simulate.mjs` (GOVERNANCE §4) — supports nothing above `pending:`.*
