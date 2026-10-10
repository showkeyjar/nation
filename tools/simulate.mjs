#!/usr/bin/env node
/**
 * tools/simulate.mjs — an illustrative stock–flow model of the Open Nation Framework loop.
 *
 * WHAT THIS IS
 *   A deterministic, zero-dependency (node:fs / node:path only), annual-step model of
 *   FRAMEWORK.md §1–§2: steering (public mission effort), engine (private effort responding
 *   to exclusivity windows, pre-committed demand, profit taxation and the creator share),
 *   transmission (conversion valve: expiry / buyout / immediate public release, plus the
 *   C20 creator share β paid on released capability), and floor (indexed, rent-funded).
 *   It exists to make the loop's mechanisms *explicit and attackable*, not to
 *   predict anything about any real economy. A --sanity check compares model-implied
 *   magnitudes against published real-economy magnitudes and prints every mismatch.
 *
 * INTELLECTUAL HONESTY (read before touching the numbers)
 *   Every parameter below is an ASSUMPTION, not an estimate. None is calibrated to data.
 *   The model is evidence-typed `model:` per GOVERNANCE.md §4 — e.g.
 *   `model:tools/simulate.mjs#scenario=framework` — and can never, on its own, move a rule
 *   off `pending:`. Parameters were chosen as round a-priori values and were NOT tuned to
 *   make the `framework` scenario win; where it loses, docs/SIMULATION.md says so.
 *   v0.2.0 adds the creator share (C20: `betaShare`, `etaBeta`, `betaPayT` — ASSUMPTIONs)
 *   and a magnitude sanity check; where the sanity check is embarrassing, it says so too.
 *
 * USAGE
 *   node tools/simulate.mjs                       # 60 years: scenarios + sweeps + sensitivity + sanity
 *   node tools/simulate.mjs --years 30            # shorter horizon
 *   node tools/simulate.mjs --scenario framework  # one scenario only
 *   node tools/simulate.mjs --scenario sweep      # W × kappa × tau sweep only
 *   node tools/simulate.mjs --sanity              # magnitude sanity check (also in the default run)
 *   node tools/simulate.mjs --csv out.csv         # custom CSV path (default docs/simulation-results.csv)
 *   node tools/simulate.mjs --json                # machine-readable JSON on stdout
 *   node tools/simulate.mjs --quiet               # no stdout output (CSV still written)
 */

import fs from 'node:fs';
import path from 'node:path';

/* ======================================================================
 * PARAMETERS — every value is an ASSUMPTION, not an estimate.
 * Round a-priori values; no calibration; no tuning to a preferred winner.
 * ====================================================================== */
const PARAMS = {
  // ── knowledge production ─────────────────────────────────────────────
  rhoK: 0.10,          // ASSUMPTION: knowledge units per unit of effective research effort.
  sigmaStand: 0.30,    // ASSUMPTION: "standing on shoulders" — spillover strength of the commons (FRAMEWORK conversion 4).
  mStand: 3.0,         // ASSUMPTION: commons scale at which the spillover is half of its max.
  // ── duplication loss (conversion 2) ──────────────────────────────────
  dupMax: 0.45,        // ASSUMPTION: duplicate-research share of effort when the commons is ~empty.
  dupHalf: 3.0,        // ASSUMPTION: commons scale at which duplication has halved.
  // ── private effort response (engine) ────────────────────────────────
  wHalf: 4.0,          // ASSUMPTION: half-saturation (years) of exclusivity-window attractiveness.
  wRef: 7.0,           // ASSUMPTION: reference window for normalisation (pharma tier, FRAMEWORK §2.1).
  etaP: 0.60,          // ASSUMPTION: elasticity of private effort to pre-committed demand (C17).
  epsTau: 1.50,        // ASSUMPTION: sensitivity of private effort to the profit tax rate.
  rhoRisk: 0.50,       // ASSUMPTION: risk-capacity elasticity — attempts multiplier vs floor adequacy (C27).
  egCommandEff: 0.80,  // ASSUMPTION: efficiency of state-directed research lacking market/local knowledge.
                       //   ↑ ATTACK THIS FIRST: it drives most of command's relative performance.
  // ── conversion valve / monopoly markup (C16/C18/C19) ────────────────
  markupAmp: 1.00,     // ASSUMPTION: markup amplitude on the proprietary share of knowledge.
  markupThresh: 1.25,  // ASSUMPTION: markup index above which the monopoly buyout triggers (C18).
  buyoutFraction: 0.50,// ASSUMPTION: share of the proprietary stock bought out per trigger year.
  buyoutCostC: 0.50,   // ASSUMPTION: C_realized — audited cost component of the buyout price (FRAMEWORK §2.2).
  buyoutAlpha: 0.20,   // ASSUMPTION: α, statutory value share paid (FRAMEWORK draft range 0.10–0.30).
  buyoutValue: 1.50,   // ASSUMPTION: modelled social value per knowledge unit released (V_expected scale).
  // ── diffusion (conversion 3) ─────────────────────────────────────────
  rDiff: 0.25,         // ASSUMPTION: base logistic adoption rate of the commons.
  diffDrag: 1.00,      // ASSUMPTION: adoption drag per unit of markup above competitive (1.0).
  // ── output and income ───────────────────────────────────────────────
  gBase: 0.005,        // ASSUMPTION: baseline annual output growth with no knowledge gain.
  psi: 0.35,           // ASSUMPTION: output elasticity of knowledge-in-use.
  medShare: 0.70,      // ASSUMPTION: median income as a share of mean output per capita.
  dwlCoeff: 0.08,      // ASSUMPTION: deadweight-loss coefficient of monopoly markup.
  // ── floor and fiscal (C29/C30) ──────────────────────────────────────
  rentShare: 0.10,     // ASSUMPTION: rent revenue (land, spectrum, carbon, data, fund returns) as share of output.
  profitShare: 0.20,   // ASSUMPTION: taxable profit base as share of output, scaled by private activity.
  floorCoverage: 0.25, // ASSUMPTION: share of the population topped up to the floor in a given year.
  maintRate: 0.01,     // ASSUMPTION: commons maintenance endowment rate (C25).
  egUnitCost: 1.00,    // ASSUMPTION: fiscal cost per unit of public mission effort.
  precommitSpendRate: 0.03, // ASSUMPTION: cost of pre-commitments as share of output per unit of pre-commitment.
  debtThresh: 0.80,    // ASSUMPTION: debt/output ratio above which the fiscal stability flag trips (F6).
  fiscalDistort: 0.10, // ASSUMPTION: consumption distortion coefficient of the total levy share.
  epResource: 0.50,    // ASSUMPTION: real resources consumed per unit of private research effort.
  // ── creator share β (Constitution C20 / FRAMEWORK §2.2) ──────────────
  betaShare: 0.10,     // ASSUMPTION: β — creators' share of V_realized, paid on every unit of
                       //   released capability (expiry + buyout + immediate public release).
                       //   Default = the constitutional cap (betaCap): the most creator-generous
                       //   legal value. β = 0 (no C20) is the first column of the β sweep.
  betaCap: 0.10,       // Constitutional constant (Constitution C20: β ≤ 0.10). NOT an assumption.
                       //   The sweep's β = 0.20 deliberately exceeds it as a stress case.
  betaPayT: 10,        // ASSUMPTION: T — years over which each release cohort's share is paid
                       //   (FRAMEWORK §2.2 "paid over T years from the commons fund or buyout").
  etaBeta: 0.10,       // ASSUMPTION: η_β — elasticity of subsequent private effort to β, evaluated
                       //   at the cap: E_p multiplier = 1 + η_β·(β/β_cap), so β = β_cap buys +10%
                       //   private effort and β = 0 buys none. The ENTIRE incentive effect of C20
                       //   lives in this one unmeasured number — ATTACK IT FIRST, with the
                       //   creator-share fiscal cost (marginal-product V_realized anchor, below).
  // ── capability index and the output measure (C35) ───────────────────
  ciK: 1.00,           // ASSUMPTION: weight of the adopted-knowledge term in the capability index.
  ciFloor: 0.80,       // ASSUMPTION: weight of the floor-health term in the capability index.
  hlFloor: 0.40,       // ASSUMPTION: health/leisure weight on floor adequacy.
  hlDiff: 0.30,        // ASSUMPTION: health/leisure weight on diffusion (adoption share).
  hlEffort: 0.20,      // ASSUMPTION: health/leisure penalty per unit of normalised total research effort.
  wCons: 1.0,          // ASSUMPTION: welfare weight on log consumption.
  wCI: 1.0,            // ASSUMPTION: welfare weight on the capability index.
  wFloor: 1.0,         // ASSUMPTION: welfare weight on floor adequacy.
  wHL: 0.8,            // ASSUMPTION: welfare weight on the health/leisure term.
  // ── switchable behavioural flag ─────────────────────────────────────
  riskCapacityOn: true,// Switch: risk-capacity multiplier on private attempts (C27). Toggle to see its effect.
};

/* ======================================================================
 * Scenarios
 * ====================================================================== */
function scenarioConfigs() {
  return {
    // 1. Pure market: no public mission effort, long 20-year window, weak floor,
    //    no pre-commitment, no buyout (conversion only by 20-year expiry).
    pure_market: {
      eg: 0,
      eP0: 1.0,
      tiers: [{ W: 20, share: 1 }],
      kappa: 0.15,
      tau: 0.15,
      precommit: 0,
      buyoutOn: false,
      isCommand: false,
    },
    // 2. Command: no private effort, everything public immediately, strong floor.
    command: {
      eg: 1.2,
      eP0: 0,
      tiers: [{ W: 0, share: 1 }],
      kappa: 0.5,
      tau: 0.4,
      precommit: 0,
      buyoutOn: false,
      isCommand: true,
    },
    // 3. Framework: missions + tiered windows per FRAMEWORK §2.1 + pre-commitment
    //    + conversion valve (expiry + buyout) + indexed floor.
    //    Tier SHARES (how private effort splits across domains) are ASSUMPTIONs.
    framework: {
      eg: 0.35,
      eP0: 1.0,
      tiers: [
        { W: 2, share: 0.15 },  // data products, models, datasets
        { W: 3, share: 0.25 },  // software, protocols, tooling
        { W: 5, share: 0.25 },  // machinery, materials, process
        { W: 7, share: 0.20 },  // pharmaceuticals, devices
        { W: 10, share: 0.15 }, // cultural works
      ],
      kappa: 0.4,
      tau: 0.25,
      precommit: 0.5,
      buyoutOn: true,
      isCommand: false,
    },
  };
}

/* ======================================================================
 * Helpers
 * ====================================================================== */
const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));

// Window attractiveness φ(W), normalised to 1 at the reference window.
function windowFactor(W, P) {
  const ref = P.wRef / (P.wRef + P.wHalf);
  return (W / (W + P.wHalf)) / ref;
}

const round6 = (x) => Number.isFinite(x) ? Number(x.toFixed(6)) : 0;

/* ======================================================================
 * Core simulation — deterministic annual steps
 * ====================================================================== */
function runScenario(name, cfg, years, P) {
  // Initial state (index units; population normalised to 1).
  const s = {
    Y: 100,        // output per capita (index)
    K: 1.0,        // total knowledge stock ever produced
    M: 0.5,        // commons stock (free at marginal cost)
    A: 0.30,       // adoption share of the commons (logistic)
    F: 0,          // floor level (per person)
    debt: 0,       // government debt (can go negative = sovereign wealth)
    pipeline: [],  // proprietary knowledge awaiting conversion: {amt, W, born}
    betaQueue: [], // creator-share payment schedule (C20): {pay, yearsLeft} per release cohort
    kUsePrev: 0.30 * 0.5, // knowledge-in-use, previous year
  };
  s.F = cfg.kappa * P.medShare * s.Y;

  const rows = [];
  let buyoutTotal = 0, buyoutEvents = 0, unstableYears = 0;
  let creatorPayTotal = 0, releasedTotal = 0;

  for (let t = 1; t <= years; t++) {
    // ── 1. Research effort ────────────────────────────────────────────
    const medianPrev = P.medShare * s.Y;
    const adequacyPrev = s.F / medianPrev;
    const riskMult = P.riskCapacityOn ? Math.min(1 + P.rhoRisk * adequacyPrev, 2.0) : 1.0;
    // Creator-share incentive (C20): subsequent-effort multiplier, linear in β with slope
    // η_β at the constitutional cap (see etaBeta above). ASSUMPTION; applied to PRIVATE
    // effort only — state researchers' response to shares is ASSUMPTIONed zero.
    const betaMult = 1 + P.etaBeta * (P.betaShare / P.betaCap);
    let E_p = 0;
    if (cfg.eP0 > 0) {
      let wf = 0;
      for (const tr of cfg.tiers) wf += tr.share * windowFactor(tr.W, P);
      E_p = cfg.eP0 * wf * (1 + P.etaP * cfg.precommit) * Math.exp(-P.epsTau * cfg.tau) * riskMult * betaMult;
    }
    const effEg = cfg.eg * (cfg.isCommand ? P.egCommandEff : 1);

    // ── 2. Duplication and spillovers ────────────────────────────────
    const dup = P.dupMax / (1 + s.M / P.dupHalf);                       // duplicate-research ratio
    const stand = 1 + P.sigmaStand * (s.M / (s.M + P.mStand));          // standing-on-shoulders

    // ── 3. Gross discovery ───────────────────────────────────────────
    const kg = P.rhoK * effEg * (1 - dup) * stand;  // public share
    const kp = P.rhoK * E_p * (1 - dup) * stand;    // private share
    for (const tr of cfg.tiers) {
      if (kp * tr.share > 0) s.pipeline.push({ amt: kp * tr.share, W: tr.W, born: t });
    }

    // ── 4. Conversion valve ──────────────────────────────────────────
    // (a) public research → commons immediately (C22)
    // (b) expiry: private knowledge enters M after its window W (C16)
    let expired = 0;
    s.pipeline = s.pipeline.filter((e) => {
      if (t - e.born >= e.W) { expired += e.amt; return false; }
      return true;
    });
    let Pvt = s.pipeline.reduce((a, e) => a + e.amt, 0);

    // (c) monopoly markup index and buyout (C18)
    const Wbar = cfg.tiers.reduce((a, tr) => a + tr.share * tr.W, 0);
    const propShare = Pvt / (Pvt + s.M + 1e-12);
    let mu = 1 + P.markupAmp * propShare * (Wbar / (Wbar + 2));
    if (!Number.isFinite(mu) || mu < 1) mu = 1;

    let buyoutAmt = 0, buyoutCost = 0;
    if (cfg.buyoutOn && mu > P.markupThresh && Pvt > 0) {
      buyoutAmt = P.buyoutFraction * Pvt;
      buyoutCost = buyoutAmt * (P.buyoutCostC + P.buyoutAlpha * P.buyoutValue);
      s.pipeline = s.pipeline.map((e) => ({ ...e, amt: e.amt * (1 - P.buyoutFraction) }));
      Pvt *= (1 - P.buyoutFraction);
      buyoutEvents += 1;
      buyoutTotal += buyoutAmt;
    }

    // ── 5. Stocks ────────────────────────────────────────────────────
    s.K += kg + kp;
    s.M += kg + expired + buyoutAmt;

    // ── 5b. Creator share (C20 / FRAMEWORK §2.2) ────────────────────
    // Every unit of released capability (expiry + buyout + immediate public release)
    // obliges the fund to pay creators β · V_realized over T years.
    // V_realized per unit is ASSUMPTIONed to equal the model's marginal product of
    // knowledge-in-use (ψ·Y/K_use, lagged one year) — the output-anchored, conservative
    // choice. The buyout's fixed V_expected scalar (buyoutValue = 1.5 index units) would
    // make the share ~20–150× cheaper and is deliberately NOT used here.
    // Payments are statutory: they do not pause under fiscal stress (unlike floor
    // indexation) — a debt the model carries exactly as C20 would make a state carry it.
    const released = kg + expired + buyoutAmt;
    const vRealizedUnit = P.psi * s.Y / Math.max(s.kUsePrev, 1e-9);
    const newObligation = P.betaShare * vRealizedUnit * released;
    let creatorPay = 0;
    for (const q of s.betaQueue) { creatorPay += q.pay; q.yearsLeft -= 1; }
    s.betaQueue = s.betaQueue.filter((q) => q.yearsLeft > 0);
    if (newObligation > 0) {
      s.betaQueue.push({ pay: newObligation / P.betaPayT, yearsLeft: P.betaPayT });
    }
    creatorPayTotal += creatorPay;
    releasedTotal += released;

    // ── 6. Output: grows with knowledge-in-use (adoption-weighted) ───
    const kUse = s.A * s.M + Pvt / mu; // proprietary knowledge used less, due to price
    // Year 1: the proprietary pipeline starts empty, so the first year's flow into
    // knowledge-in-use is an initialization artifact — suppress it (documented in
    // docs/SIMULATION.md) and let output grow from the base rate only.
    const growth = t === 1 ? P.gBase : clamp(P.gBase + P.psi * Math.log(kUse / s.kUsePrev), -0.05, 0.15);
    s.Y *= 1 + growth;
    s.kUsePrev = kUse;

    // ── 7. Diffusion: logistic, faster when open, slower under markup ─
    const openShare = s.M / (s.M + Pvt + 1e-12);
    const r = P.rDiff * (0.4 + 0.6 * openShare) / (1 + P.diffDrag * (mu - 1));
    s.A = clamp(s.A + r * s.A * (1 - s.A), 0.01, 0.999);

    // ── 8. Floor: indexed, never falls; indexation pauses when the
    //       stability flag has tripped (C29 smoothing rule) ────────────
    const median = P.medShare * s.Y;
    if (s.debt / s.Y <= P.debtThresh) s.F = Math.max(s.F, cfg.kappa * median);
    const floorCost = P.floorCoverage * s.F;

    // ── 9. Fiscal: rents + profit tax fund floor, missions, maintenance,
    //       pre-commitments, buyouts AND creator shares; deficits accumulate
    //       as debt. The model keeps ONE consolidated fund: creator payments
    //       compete with every other allocation (floor top-ups, missions,
    //       maintenance, pre-commitments, buyouts) for the same rents and
    //       taxes, and a short fund means debt — the same debt that trips
    //       the stability flag and pauses floor indexation (C29/C30/C25/C20).
    const pa = clamp(E_p, 0, 1.5); // private activity index
    const rents = P.rentShare * s.Y;
    const taxRev = cfg.tau * P.profitShare * s.Y * pa;
    const missionSpend = cfg.eg * P.egUnitCost;
    const maint = P.maintRate * s.M;
    const precommitSpend = cfg.precommit * P.precommitSpendRate * s.Y;
    const spend = floorCost + missionSpend + maint + precommitSpend + buyoutCost + creatorPay;
    s.debt += spend - rents - taxRev;
    const debtRatio = s.debt / s.Y;
    const stable = debtRatio <= P.debtThresh;
    if (!stable) unstableYears += 1;

    // ── 10. Consumption, capability, welfare ──────────────────────────
    const adequacy = s.F / median;
    const DWL = P.dwlCoeff * (mu - 1) * s.Y;
    const levies = rents + taxRev;
    const distort = P.fiscalDistort * (levies / s.Y) ** 2 * s.Y;
    const privateRes = P.epResource * E_p;
    // Creator payments are treated as consumption-reducing, exactly like buyoutCost:
    // in this one-agent model transfers are not free — they crowd out the fund's other
    // uses. This is the conservative treatment (it biases AGAINST β, not for it).
    const C = s.Y - DWL - maint - missionSpend - precommitSpend - buyoutCost - creatorPay - distort - privateRes;
    const HL = P.hlFloor * adequacy + P.hlDiff * s.A - P.hlEffort * Math.min((cfg.eg + E_p) / 2, 1);
    const CI = P.ciK * Math.log(1 + s.A * s.M) + P.ciFloor * adequacy;
    const omega = P.wCons * Math.log(C / 100) + P.wCI * CI + P.wFloor * adequacy + P.wHL * HL;

    rows.push({
      year: t, K: s.K, M: s.M, Pvt, A: s.A, E_g: cfg.eg, E_p,
      dup, mu, buyoutAmt, released, creatorPay, vRealizedUnit,
      Y: s.Y, median, F: s.F, adequacy, CI, C, HL,
      omega, debt: s.debt, debtRatio, stable,
    });
  }

  const last = rows[rows.length - 1];
  const nEarly = Math.min(10, years);
  const summary = {
    scenario: name, years,
    CI_h: round6(last.CI), adequacy_h: round6(last.adequacy), omega_h: round6(last.omega),
    K_h: round6(last.K), M_h: round6(last.M), pvt_h: round6(last.Pvt), A_h: round6(last.A),
    dup_h: round6(last.dup), mu_h: round6(last.mu), Y_h: round6(last.Y), C_h: round6(last.C),
    HL_h: round6(last.HL), debt_h: round6(last.debt), debtRatio_h: round6(last.debtRatio),
    stable_h: last.stable,
    unstableYears,
    E_p_early: round6(rows.slice(0, nEarly).reduce((a, r) => a + r.E_p, 0) / nEarly),
    E_p_h: round6(last.E_p), buyoutTotal: round6(buyoutTotal), buyoutEvents,
    betaShare: P.betaShare, betaEffortMult: round6(1 + P.etaBeta * (P.betaShare / P.betaCap)),
    creatorPay_h: round6(last.creatorPay), creatorPayTotal: round6(creatorPayTotal),
    creatorCostShare_h: round6(last.creatorPay / last.Y),
    releasedTotal: round6(releasedTotal),
  };
  return { name, cfg, rows, summary };
}

/* ======================================================================
 * Sweep: W × κ × τ (framework-style config, single window)
 * ====================================================================== */
function runSweep(years, P) {
  const Ws = [2, 3, 5, 7, 10, 15, 20];
  const kappas = [0.2, 0.3, 0.4, 0.5];
  const taus = [0.2, 0.3, 0.4];
  const base = scenarioConfigs().framework;
  const grid = [];
  for (const W of Ws) {
    for (const kappa of kappas) {
      for (const tau of taus) {
        const cfg = { ...base, tiers: [{ W, share: 1 }], kappa, tau };
        const { summary } = runScenario(`sweep_W${W}_k${kappa}_t${tau}`, cfg, years, P);
        grid.push({ W, kappa, tau, ...summary });
      }
    }
  }
  const byCI = [...grid].sort((a, b) => b.CI_h - a.CI_h);
  const byOmega = [...grid].sort((a, b) => b.omega_h - a.omega_h);
  const byY = [...grid].sort((a, b) => b.Y_h - a.Y_h);
  const best = byY[0];
  const omegaRankOfBestY = byOmega.findIndex((g) => g === best) + 1;
  return { grid, top10_ci: byCI.slice(0, 10), top10_omega: byOmega.slice(0, 10), best_by_y: { ...best, omega_rank: omegaRankOfBestY } };
}

/* ======================================================================
 * Sensitivity: one-at-a-time ±50% on key ASSUMPTIONs (framework scenario)
 * ====================================================================== */
const SENSITIVITY_PARAMS = [
  ['rhoK', 'research productivity ρ_K'],
  ['dupMax', 'max duplication share'],
  ['dupHalf', 'duplication half-scale'],
  ['sigmaStand', 'commons spillover σ'],
  ['etaP', 'pre-commitment elasticity η_P'],
  ['epsTau', 'tax sensitivity ε_τ'],
  ['rhoRisk', 'risk-capacity elasticity ρ_r'],
  ['rDiff', 'base diffusion rate r_0'],
  ['psi', 'output elasticity of knowledge ψ'],
  ['rentShare', 'rent share of output'],
  ['floorCoverage', 'floor coverage share'],
  ['markupAmp', 'markup amplitude'],
  ['etaBeta', 'creator-share effort elasticity η_β'],
  ['betaPayT', 'creator-share payment horizon T'],
];

function runSensitivity(years, P) {
  const cfg = scenarioConfigs().framework;
  const base = runScenario('framework', cfg, years, P).summary;
  const runs = [];
  for (const [key, label] of SENSITIVITY_PARAMS) {
    for (const dir of [1.5, 0.5]) {
      const P2 = { ...P, [key]: P[key] * dir };
      const sum = runScenario('framework', cfg, years, P2).summary;
      runs.push({
        param: key, label, factor: dir, value: round6(P[key] * dir),
        CI_h: sum.CI_h, dCI_pct: round6(100 * (sum.CI_h - base.CI_h) / base.CI_h),
        adequacy_h: sum.adequacy_h, dAdeq_pct: round6(100 * (sum.adequacy_h - base.adequacy_h) / base.adequacy_h),
      });
    }
  }
  // Switchable flag: risk capacity ON vs OFF (its isolated effect).
  const Poff = { ...P, riskCapacityOn: false };
  const riskOff = runScenario('framework', cfg, years, Poff).summary;
  const riskEffect = {
    CI_on: base.CI_h, CI_off: riskOff.CI_h,
    dCI_pct: round6(100 * (riskOff.CI_h - base.CI_h) / base.CI_h),
    adequacy_on: base.adequacy_h, adequacy_off: riskOff.adequacy_h,
  };
  let mostInfluential = null;
  for (const r of runs) {
    if (!mostInfluential || Math.abs(r.dCI_pct) > Math.abs(mostInfluential.dCI_pct)) mostInfluential = r;
  }
  return { baseline: base, runs, riskEffect, mostInfluential };
}

/* ======================================================================
 * Creator-share sweep: β ∈ {0, 0.05, 0.10, 0.15, 0.20} (framework config)
 * β = 0.20 EXCEEDS the constitutional cap (betaCap = 0.10, Constitution C20)
 * and is included only as a stress case — the report must say so.
 * ====================================================================== */
const BETA_GRID = [0, 0.05, 0.10, 0.15, 0.20];
const INDISTINGUISHABLE = 0.005; // |ΔΩ| below 0.5% of the grid's best → "indistinguishable"

function runBetaSweep(years, P) {
  const base = scenarioConfigs().framework;
  const runs = BETA_GRID.map((beta) => {
    const P2 = { ...P, betaShare: beta };
    const { summary } = runScenario(`beta_${beta.toFixed(2)}`, base, years, P2);
    return {
      beta, exceeds_cap: beta > P.betaCap,
      CI_h: summary.CI_h, omega_h: summary.omega_h, Y_h: summary.Y_h, C_h: summary.C_h,
      M_h: summary.M_h, K_h: summary.K_h, A_h: summary.A_h, adequacy_h: summary.adequacy_h,
      E_p_h: summary.E_p_h, E_p_early: summary.E_p_early,
      fund_h: summary.debt_h, debtRatio_h: summary.debtRatio_h, stable_h: summary.stable_h,
      creatorPay_h: summary.creatorPay_h, creatorCostShare_h: summary.creatorCostShare_h,
      creatorPayTotal: summary.creatorPayTotal,
    };
  });
  const byOmega = [...runs].sort((a, b) => b.omega_h - a.omega_h);
  const byCI = [...runs].sort((a, b) => b.CI_h - a.CI_h);
  const bestInCap = runs.filter((r) => r.beta <= P.betaCap);
  const bestInCapOmega = bestInCap.reduce((a, b) => (b.omega_h > a.omega_h ? b : a));
  const bestInCapCI = bestInCap.reduce((a, b) => (b.CI_h > a.CI_h ? b : a));
  // Is the in-cap optimum at the cap, below it, or statistically indistinguishable?
  const alternatives = bestInCap.filter((r) => r.beta < bestInCapOmega.beta);
  const closestAlt = alternatives.reduce(
    (a, b) => (Math.abs(b.omega_h - bestInCapOmega.omega_h) < Math.abs(a.omega_h - bestInCapOmega.omega_h) ? b : a),
    { beta: -1, omega_h: -Infinity },
  );
  const gap = bestInCapOmega.omega_h - closestAlt.omega_h;
  const optimum_verdict = !alternatives.length || !(gap / Math.abs(bestInCapOmega.omega_h) > INDISTINGUISHABLE)
    ? (alternatives.length ? 'indistinguishable from the next-best in-cap β' : 'at the cap (β = 0.10)')
    : (bestInCapOmega.beta === P.betaCap ? 'at the cap (β = 0.10)' : `below the cap (β = ${bestInCapOmega.beta.toFixed(2)})`);
  return {
    runs, by_omega: byOmega, by_ci: byCI,
    cap: P.betaCap,
    note: 'β = 0.20 exceeds the constitutional cap β ≤ 0.10 (Constitution C20) — stress case only, not a legal policy.',
    optimum: {
      by_omega_in_cap: bestInCapOmega, by_ci_in_cap: bestInCapCI,
      best_overall_omega: byOmega[0], best_overall_ci: byCI[0],
      verdict: optimum_verdict, indistinguishable_threshold: INDISTINGUISHABLE,
      in_cap_gap_to_next_best_omega: round6(gap),
    },
  };
}

/* ======================================================================
 * Magnitude sanity check — model-implied steady-state ratios vs published
 * real-economy magnitudes. Every source is named (title + author + year);
 * no DOIs are invented. Verdict rule: inside the published range →
 * "plausible"; within a factor of 10 → "right order of magnitude";
 * beyond → "off". The check exists to expose embarrassment, not to hide it.
 * ====================================================================== */
function runSanity(years, P) {
  const cfgs = scenarioConfigs();
  const ref = runScenario('framework', cfgs.framework, years, P);
  const last10 = ref.rows.slice(-10);
  const avg = (f) => last10.reduce((a, r) => a + f(r), 0) / last10.length;
  // Diffusion half-life: years for adoption to cross 0.65 — the midpoint between
  // its initial value (0.30) and saturation (~0.999) in the reference run.
  const halfRow = ref.rows.find((r) => r.A >= 0.65);
  const halfLife = halfRow ? halfRow.year : years;

  // Model-implied steady-state ratios (steady state := mean of the last 10 years,
  // except the half-life, which is a crossing time, and rent share, an input share).
  const modelMu = avg((r) => r.mu);
  const rows = [
    {
      ratio: 'rent revenue / output',
      model_value: P.rentShare, model_display: `${(P.rentShare * 100).toFixed(1)}% of output`,
      published: '3–10% of GDP (pure land/locational rents; broader rent bases at the top)',
      published_lo: 0.03, published_hi: 0.10, model_mu_style: false,
      source: 'Arnott & Stiglitz (1979), "Aggregate Land Rents and Aggregate Transport Costs", Economic Journal 89(354); Henry George theorem literature',
      caveat: 'rentShare is an INPUT assumption, not a model outcome — the check asks whether the input is in range.',
    },
    {
      ratio: 'public R&D intensity (mission spend)',
      model_value: avg((r) => (r.E_g * P.egUnitCost) / r.Y), model_display: '',
      published: '0.5–1.0% of GDP (government-performed R&D, OECD average)',
      published_lo: 0.005, published_hi: 0.010, model_mu_style: false,
      source: 'OECD (2023), Main Science and Technology Indicators',
      caveat: 'mission effort is fixed in index units while Y grows ~4.4×, so intensity decays over the run — structural, not parameter-fixable.',
    },
    {
      ratio: 'floor spending / output',
      model_value: avg((r) => (P.floorCoverage * r.F) / r.Y), model_display: '',
      published: '1.5–3% of GDP (minimum-income schemes) to ~20% (total public social spending)',
      published_lo: 0.015, published_hi: 0.20, model_mu_style: false,
      source: 'OECD (2024), Social Expenditure Database (SOCX)',
      caveat: 'the model floor is a top-up to 40% of the median for 25% of the population — between the two anchors.',
    },
    {
      ratio: 'diffusion half-life (A: 0.30 → 0.65)',
      model_value: halfLife, model_display: `${halfLife} years`,
      published: '≈15–40 years for major energy technologies (historical diffusion)',
      published_lo: 15, published_hi: 40, model_mu_style: false,
      source: 'Grübler, Nakićenović & Victor (1999), "Dynamics of energy technologies and global change", Energy Policy 27(5); IEA (2020), Energy Technology Perspectives',
      caveat: 'A is adoption of the commons stock, not of a single technology — an optimistic proxy.',
    },
    {
      ratio: 'average markup μ−1 (knowledge price)',
      model_value: modelMu - 1, model_display: `μ ≈ ${modelMu.toFixed(2)} (μ−1 = ${(modelMu - 1).toFixed(3)})`,
      published: 'μ ≈ 1.2 (1980s) to ≈1.6 (2010s), US corporate sector (μ−1 = 0.2–0.6)',
      published_lo: 0.2, published_hi: 0.6, model_mu_style: true,
      source: 'De Loecker, Eeckhout & Unger (2020), "The Rise of Market Power and the Macroeconomic Implications", Quarterly Journal of Economics 135(2)',
      caveat: 'model μ prices KNOWLEDGE, not the whole economy — the comparison is indicative only.',
    },
    {
      ratio: 'creator-share fiscal cost / output (β = 0.10)',
      model_value: avg((r) => r.creatorPay / r.Y), model_display: '',
      published: '≈0.3–0.5% of GDP (cross-border charges for intellectual property — closest observable proxy)',
      published_lo: 0.003, published_hi: 0.005, model_mu_style: false,
      source: 'World Bank (2023), World Development Indicators, "Charges for the use of intellectual property, payments"',
      caveat: 'V_realized is anchored to the model marginal product ψ·Y/K_use — the conservative choice; a fixed per-unit scalar would be ~100× cheaper still.',
    },
  ].map((r) => {
    const mv = r.model_value;
    let verdict, factor;
    if (mv >= r.published_lo && mv <= r.published_hi) { verdict = 'plausible'; factor = 1; }
    else {
      factor = mv < r.published_lo ? r.published_lo / mv : mv / r.published_hi;
      verdict = factor <= 10 ? 'right order of magnitude' : 'off';
    }
    const disp = r.model_display || `${(100 * mv).toFixed(2)}% of output`;
    return { ...r, model_display: disp, factor: round6(factor), verdict };
  });

  // ── "What the sanity check changes" — actually rerun, don't hand-wave ──
  // Align the two parameter-fixable embarrassments: diffusion (rDiff × 0.25 →
  // ~4× longer half-life) and markup (markupAmp × 1.5 → partial move toward
  // De Loecker–Eeckhout–Unger). Then check whether scenario rankings survive.
  const alignedP = { ...P, rDiff: P.rDiff * 0.25, markupAmp: P.markupAmp * 1.5 };
  const aligned = {};
  for (const n of ['pure_market', 'command', 'framework']) {
    const run = runScenario(n, cfgs[n], years, alignedP);
    aligned[n] = run.summary;
  }
  const rank = (key) => Object.entries(aligned).sort((a, b) => b[1][key] - a[1][key]).map(([n]) => n);
  const baseRank = (key) => ['pure_market', 'command', 'framework']
    .map((n) => runScenario(n, cfgs[n], years, P).summary).sort((a, b) => b[key] - a[key]).map((s) => s.scenario);
  const ciRankAligned = rank('CI_h'), omegaRankAligned = rank('omega_h');
  const ciRankBase = baseRank('CI_h'), omegaRankBase = baseRank('omega_h');
  const alignedRun = runScenario('framework', cfgs.framework, years, alignedP);
  const alignedHalf = alignedRun.rows.find((r) => r.A >= 0.65);
  const alignedMu = avg0(alignedRun.rows.slice(-10), (r) => r.mu);

  return {
    reference: 'scenario=framework, default parameters; steady state := mean of last 10 years',
    verdict_rule: 'inside published range = plausible; within a factor of 10 = right order of magnitude; beyond = off',
    rows,
    aligned_rerun: {
      params_changed: { rDiff: alignedP.rDiff, markupAmp: alignedP.markupAmp },
      ci_ranking_base: ciRankBase, ci_ranking_aligned: ciRankAligned,
      omega_ranking_base: omegaRankBase, omega_ranking_aligned: omegaRankAligned,
      rankings_changed: JSON.stringify(ciRankAligned) !== JSON.stringify(ciRankBase)
        || JSON.stringify(omegaRankAligned) !== JSON.stringify(omegaRankBase),
      aligned_diffusion_half_life: alignedHalf ? alignedHalf.year : years,
      aligned_avg_markup: round6(alignedMu),
      summaries: aligned,
    },
    note: 'Sources give RANGES from published work; none of the model magnitudes was tuned to land inside them.',
  };
}

// helper used by runSanity (average over an arbitrary row slice)
function avg0(rowslice, f) { return rowslice.reduce((a, r) => a + f(r), 0) / rowslice.length; }

/* ======================================================================
 * ASCII chart — capability index over time
 * ====================================================================== */
function asciiChart(series, title) {
  const H = 18; // rows
  const n = Math.min(...series.map((x) => x.data.length));
  const vals = series.flatMap((x) => x.data.slice(0, n));
  let vmax = Math.max(...vals), vmin = Math.min(...vals);
  if (vmax - vmin < 1e-9) { vmax += 1; vmin -= 1; }
  const pad = (vmax - vmin) * 0.05;
  vmax += pad; vmin -= pad;

  // grid[cell] = { letter, v }; on collision keep the higher series.
  const grid = Array.from({ length: H }, () => new Array(n).fill(null));
  for (const se of series) {
    for (let j = 0; j < n; j++) {
      const v = se.data[j];
      const row = Math.round(((vmax - v) / (vmax - vmin)) * (H - 1));
      if (row >= 0 && row < H) {
        if (!grid[row][j] || v > grid[row][j].v) grid[row][j] = { letter: se.letter, v };
      }
    }
  }

  const lines = [];
  lines.push(`    ${title}`);
  for (let r = 0; r < H; r++) {
    const val = vmax - (r / (H - 1)) * (vmax - vmin);
    const axis = r % 6 === 0 || r === H - 1 ? '|' : ' '; // y-axis ticks
    const label = (r % 6 === 0 || r === H - 1) ? val.toFixed(2).padStart(6) : ' '.repeat(6);
    lines.push(`${label} ${axis}${grid[r].map((c) => (c ? c.letter : ' ')).join('')}`);
  }
  // x-axis
  let axisLine = '       +';
  axisLine += '-'.repeat(n);
  lines.push(axisLine);
  let xlab = '        ';
  for (let j = 0; j < n; j++) xlab += ((j + 1) % 10 === 0) ? String(j + 1).padEnd(1) : ' ';
  lines.push(xlab);
  lines.push(`        (year; one column = one year, horizon = ${n})`);
  lines.push(`        legend: ${series.map((s) => `${s.letter} = ${s.label}`).join('   ')}`);
  lines.push(`        (where series overlap, the cell shows the highest-value series)`);
  return lines.join('\n');
}

/* ======================================================================
 * Output helpers
 * ====================================================================== */
const f = (x, d = 3) => (Number.isFinite(x) ? x.toFixed(d) : 'n/a');

function printComparisonTable(sums, years) {
  const head = [
    'scenario'.padEnd(13), `CI@${years}`.padStart(8), 'adeq@h'.padStart(8), 'Omega@h'.padStart(9),
    `K@${years}`.padStart(8), `M@${years}`.padStart(8), `A@${years}`.padStart(7), 'dup@h'.padStart(7),
    'mu@h'.padStart(6), 'E_p(1-10)'.padStart(10), `E_p@${years}`.padStart(8), `C@${years}`.padStart(9),
    `Y@${years}`.padStart(9), 'debt/Y'.padStart(8), 'stable'.padStart(7),
  ].join('');
  console.log(head);
  console.log('-'.repeat(head.length));
  for (const s of sums) {
    console.log([
      s.scenario.padEnd(13), f(s.CI_h).padStart(8), f(s.adequacy_h).padStart(8), f(s.omega_h).padStart(9),
      f(s.K_h, 2).padStart(8), f(s.M_h, 2).padStart(8), f(s.A_h).padStart(7), f(s.dup_h).padStart(7),
      f(s.mu_h, 2).padStart(6), f(s.E_p_early).padStart(10), f(s.E_p_h).padStart(8), f(s.C_h, 1).padStart(9),
      f(s.Y_h, 1).padStart(9), f(s.debtRatio_h, 2).padStart(8), String(s.stable_h).padStart(7),
    ].join(''));
  }
}

function printSweepTable(title, list, years) {
  console.log(`\n${title}`);
  const head = ['#'.padStart(3), 'W'.padStart(4), 'kappa'.padStart(6), 'tau'.padStart(5),
    `CI@${years}`.padStart(9), 'Omega@h'.padStart(9), 'adeq@h'.padStart(8), `Y@${years}`.padStart(9)].join('');
  console.log(head);
  console.log('-'.repeat(head.length));
  list.forEach((g, i) => {
    console.log([String(i + 1).padStart(3), String(g.W).padStart(4), f(g.kappa, 1).padStart(6), f(g.tau, 1).padStart(5),
      f(g.CI_h).padStart(9), f(g.omega_h).padStart(9), f(g.adequacy_h).padStart(8), f(g.Y_h, 1).padStart(9)].join(''));
  });
}

function printSensitivityTable(sens) {
  console.log(`\nOne-at-a-time +/-50% sensitivity (scenario=framework; every parameter is an ASSUMPTION)`);
  const head = ['parameter'.padEnd(22), 'value'.padStart(8), 'CI@h'.padStart(8), 'dCI%'.padStart(8), 'adeq@h'.padStart(8), 'dAdeq%'.padStart(8)].join('');
  console.log(head);
  console.log('-'.repeat(head.length));
  const b = sens.baseline;
  console.log(['(baseline)'.padEnd(22), '-'.padStart(8), f(b.CI_h).padStart(8), '-'.padStart(8), f(b.adequacy_h).padStart(8), '-'.padStart(8)].join(''));
  for (const r of sens.runs) {
    const dci = ((r.dCI_pct >= 0 ? '+' : '') + f(r.dCI_pct, 1) + '%').padStart(8);
    const dad = ((r.dAdeq_pct >= 0 ? '+' : '') + f(r.dAdeq_pct, 1) + '%').padStart(8);
    console.log([
      `${r.param} x${r.factor}`.padEnd(22), f(r.value, 2).padStart(8), f(r.CI_h).padStart(8),
      dci, f(r.adequacy_h).padStart(8), dad,
    ].join(''));
  }
}

function printBetaSweepTable(bs, years) {
  console.log(`\nCreator-share sweep — beta in {0, 0.05, 0.10, 0.15, 0.20} (scenario=framework, horizon ${years} years)`);
  console.log('(beta = 0.20 EXCEEDS the constitutional cap beta <= 0.10, Constitution C20 — stress case only)');
  const head = ['beta'.padStart(5), 'cap?'.padStart(5), `CI@${years}`.padStart(9), 'Omega@h'.padStart(9),
    `Y@${years}`.padStart(9), `C@${years}`.padStart(9), `M@${years}`.padStart(7),
    'E_p(1-10)'.padStart(10), `E_p@${years}`.padStart(8), 'fund@h'.padStart(9),
    'debt/Y'.padStart(8), 'Cpay@h'.padStart(8), '%ofY'.padStart(7), 'stable'.padStart(7)].join('');
  console.log(head);
  console.log('-'.repeat(head.length));
  for (const r of bs.runs) {
    console.log([
      f(r.beta, 2).padStart(5), (r.exceeds_cap ? 'OVER' : 'ok').padStart(5),
      f(r.CI_h).padStart(9), f(r.omega_h).padStart(9), f(r.Y_h, 1).padStart(9), f(r.C_h, 1).padStart(9),
      f(r.M_h, 2).padStart(7), f(r.E_p_early).padStart(10), f(r.E_p_h).padStart(8),
      f(r.fund_h, 1).padStart(9), f(r.debtRatio_h, 2).padStart(8), f(r.creatorPay_h, 2).padStart(8),
      (100 * r.creatorCostShare_h).toFixed(2).padStart(7), String(r.stable_h).padStart(7),
    ].join(''));
  }
  const o = bs.optimum;
  console.log(`\nIn-cap optimum by Omega: beta = ${f(o.by_omega_in_cap.beta, 2)} -> verdict: ${o.verdict}`);
  console.log(`(threshold: |dOmega| <= ${(100 * o.indistinguishable_threshold).toFixed(1)}% of the best counts as indistinguishable; in-cap gap = ${f(o.in_cap_gap_to_next_best_omega, 3)})`);
  console.log(`Best overall (ignoring the cap): beta = ${f(o.best_overall_omega.beta, 2)}, Omega = ${f(o.best_overall_omega.omega_h)}${o.best_overall_omega.exceeds_cap ? ' — ABOVE THE CAP' : ''}`);
  console.log('(fund@h = consolidated balance: negative = sovereign wealth; the model has no separate commons-fund stock)');
}

function printSanityTable(san, years) {
  console.log(`\nMagnitude sanity check — model-implied steady-state ratios vs published magnitudes`);
  console.log(`(${san.reference}; ${san.verdict_rule})`);
  console.log(['ratio'.padEnd(46), 'model'.padStart(19), 'factor'.padStart(7), 'verdict'].join('  '));
  console.log('-'.repeat(98));
  for (const r of san.rows) {
    const fac = r.factor === 1 ? 'in' : `${f(r.factor, 1)}x`;
    console.log([r.ratio.slice(0, 46).padEnd(46), r.model_display.padStart(19), fac.padStart(7), r.verdict].join('  '));
  }
  console.log('\npublished magnitudes and sources:');
  san.rows.forEach((r, i) => {
    console.log(`  ${i + 1}. ${r.published}`);
    console.log(`     source: ${r.source}`);
    console.log(`     caveat: ${r.caveat}`);
  });
  const al = san.aligned_rerun;
  console.log(`\nWhat the sanity check changes:`);
  console.log(`  Aligning the two parameter-fixable gaps (rDiff ${al.params_changed.rDiff} = x0.25, markupAmp ${al.params_changed.markupAmp} = x1.5)`);
  console.log(`  moves diffusion half-life to ${al.aligned_diffusion_half_life}y and avg markup to ${f(al.aligned_avg_markup, 2)} (vs published 15-40y and ~1.2-1.6).`);
  console.log(`  CI ranking: base ${al.ci_ranking_base.join(' > ')} -> aligned ${al.ci_ranking_aligned.join(' > ')}`);
  console.log(`  Omega ranking: base ${al.omega_ranking_base.join(' > ')} -> aligned ${al.omega_ranking_aligned.join(' > ')}`);
  console.log(`  -> rankings ${al.rankings_changed ? 'CHANGE' : 'do NOT change'} under the sanity-aligned parameters.`);
  console.log('  Public R&D intensity cannot be fixed by a parameter (mission effort is fixed in index units).');
}

/* ======================================================================
 * CSV
 * ====================================================================== */
const CSV_HEADER = 'scenario,year,K,M,pvt,adoption,E_g,E_p,dup_ratio,markup_mu,buyout_released,released_capability,creator_pay,Y,median_income,floor,floor_adequacy,capability_index,consumption,health_leisure,output_measure,debt,debt_output_ratio,fiscally_stable';

function csvFor(runs) {
  const lines = [CSV_HEADER];
  for (const run of runs) {
    for (const r of run.rows) {
      lines.push([
        run.name, r.year, round6(r.K), round6(r.M), round6(r.Pvt), round6(r.A), round6(r.E_g), round6(r.E_p),
        round6(r.dup), round6(r.mu), round6(r.buyoutAmt), round6(r.released), round6(r.creatorPay),
        round6(r.Y), round6(r.median), round6(r.F),
        round6(r.adequacy), round6(r.CI), round6(r.C), round6(r.HL), round6(r.omega), round6(r.debt),
        round6(r.debtRatio), r.stable,
      ].join(','));
    }
  }
  return lines.join('\n') + '\n';
}

/* ======================================================================
 * CLI
 * ====================================================================== */
function parseArgs(argv) {
  const out = { years: 60, csv: null, json: false, scenario: null, quiet: false, sanity: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--years') {
      const v = parseInt(argv[++i], 10);
      if (!Number.isFinite(v) || v < 1 || v > 500) { console.error('--years expects an integer 1..500'); process.exit(2); }
      out.years = v;
    } else if (a === '--csv') {
      out.csv = argv[++i];
      if (!out.csv) { console.error('--csv expects a path'); process.exit(2); }
    } else if (a === '--json') out.json = true;
    else if (a === '--quiet') out.quiet = true;
    else if (a === '--sanity') out.sanity = true;
    else if (a === '--scenario') {
      out.scenario = argv[++i];
      if (!['pure_market', 'command', 'framework', 'sweep'].includes(out.scenario)) {
        console.error(`--scenario expects one of: pure_market, command, framework, sweep (got ${out.scenario})`);
        process.exit(2);
      }
    } else if (a === '--help' || a === '-h') {
      console.log('usage: node tools/simulate.mjs [--years <n>] [--csv <path>] [--json] [--scenario <name>] [--sanity] [--quiet]');
      process.exit(0);
    } else {
      console.error(`unknown argument: ${a}`);
      process.exit(2);
    }
  }
  return out;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const years = args.years;
  const P = PARAMS;
  const configs = scenarioConfigs();

  const wantCore = args.scenario === null || ['pure_market', 'command', 'framework'].includes(args.scenario);
  const wantSweep = args.scenario === null || args.scenario === 'sweep';
  const wantSens = args.scenario === null; // sensitivity accompanies the full run
  const wantBetaSweep = args.scenario === null; // creator-share sweep accompanies the full run
  const wantSanity = args.scenario === null || args.sanity; // sanity is part of the default output

  const coreNames = args.scenario && ['pure_market', 'command', 'framework'].includes(args.scenario)
    ? [args.scenario]
    : ['pure_market', 'command', 'framework'];
  const coreRuns = wantCore ? coreNames.map((n) => runScenario(n, configs[n], years, P)) : [];
  const sweep = wantSweep ? runSweep(years, P) : null;
  const sens = wantSens ? runSensitivity(years, P) : null;
  const betaSweep = wantBetaSweep ? runBetaSweep(years, P) : null;
  const sanity = wantSanity ? runSanity(years, P) : null;

  // CSV: always written for core scenario runs (sweep is summary-only).
  if (coreRuns.length > 0) {
    const root = path.resolve(path.dirname(path.resolve(process.argv[1])), '..');
    const csvPath = args.csv ? path.resolve(args.csv) : path.join(root, 'docs', 'simulation-results.csv');
    fs.mkdirSync(path.dirname(csvPath), { recursive: true });
    fs.writeFileSync(csvPath, csvFor(coreRuns), 'utf8');
    if (!args.quiet && !args.json) console.log(`wrote ${csvPath} (${coreRuns.reduce((a, r) => a + r.rows.length, 0)} data rows + header)\n`);
  }

  if (args.json) {
    const payload = {
      model: 'open-nation-sim/0.2.0',
      evidence_type: 'model:tools/simulate.mjs (GOVERNANCE.md §4)',
      warning: 'Illustrative mechanism model. All parameters are ASSUMPTIONS, not estimates. Cannot validate the framework.',
      years,
      params: P,
      scenarios: Object.fromEntries(coreRuns.map((r) => [r.name, { config: r.cfg, summary: r.summary, series: r.rows }])),
      sweep: sweep && {
        top10_ci: sweep.top10_ci, top10_omega: sweep.top10_omega, best_by_y: sweep.best_by_y,
        grid_size: sweep.grid.length,
      },
      beta_sweep: betaSweep,
      sanity,
      sensitivity: sens,
    };
    console.log(JSON.stringify(payload, null, 2));
    return;
  }
  if (args.quiet) return;

  // ── human-readable report ──────────────────────────────────────────
  console.log('Open Nation Framework — illustrative stock-flow simulation');
  console.log('(all parameters are ASSUMPTIONS; evidence type `model:` per GOVERNANCE.md §4; see docs/SIMULATION.md)\n');

  if (coreRuns.length > 0) {
    console.log(`Scenario comparison (horizon ${years} years):`);
    printComparisonTable(coreRuns.map((r) => r.summary), years);

    const chartSeries = coreRuns.map((r) => ({
      label: r.name,
      letter: r.name === 'pure_market' ? 'P' : r.name === 'command' ? 'C' : 'F',
      data: r.rows.map((row) => row.CI),
    }));
    console.log('\n' + asciiChart(chartSeries, 'Capability index CI over time (three scenarios)'));
    console.log('');
  }

  if (sweep) {
    printSweepTable(`Sweep W × kappa × tau (84 runs) — top 10 by capability index at horizon:`, sweep.top10_ci, years);
    printSweepTable(`Sweep — top 10 by the output measure Omega at horizon:`, sweep.top10_omega, years);
    const b = sweep.best_by_y;
    console.log(`\nGDP-only optimum (max Y@${years}): W=${b.W}, kappa=${f(b.kappa, 1)}, tau=${f(b.tau, 1)} -> Y=${f(b.Y_h, 1)}, CI=${f(b.CI_h)}, Omega rank #${b.omega_rank}`);
    console.log('(compare with the Omega ranking above — the divergence is the C35 argument)');
  }

  if (sens) {
    printSensitivityTable(sens);
    const mi = sens.mostInfluential;
    console.log(`\nMost influential single parameter on CI@${years}: ${mi.param} (${mi.label}) — x${mi.factor} changes CI by ${mi.dCI_pct >= 0 ? '+' : ''}${f(mi.dCI_pct, 1)}%`);
    const re = sens.riskEffect;
    console.log(`Risk-capacity flag (C27), isolated effect: ON -> CI ${f(re.CI_on)}; OFF -> CI ${f(re.CI_off)} (${re.dCI_pct >= 0 ? '+' : ''}${f(re.dCI_pct, 1)}%)`);
  }

  if (betaSweep) printBetaSweepTable(betaSweep, years);
  if (sanity) printSanityTable(sanity, years);
}

// Run as a CLI only when invoked directly (argv[1] is this file), not when imported
// for testing. Allows `import { runScenario, PARAMS, scenarioConfigs } from ...`.
const invokedAsCli = process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('tools/simulate.mjs');
if (invokedAsCli) main();

export { PARAMS, scenarioConfigs, runScenario, runSweep, runSensitivity, runBetaSweep, runSanity };
