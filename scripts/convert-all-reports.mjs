#!/usr/bin/env node
/**
 * Batch convert all 14 industry JSON exports to TypeScript report data files.
 * Based on proven logic from convert-mativ.mjs, generalized for all industries.
 *
 * Usage: node scripts/convert-all-reports.mjs
 *
 * Input:  /Users/drewgodwin/Desktop/json files website/*.json
 * Output: client/src/data/reports/<slug>.ts
 */
import { readFileSync, writeFileSync, existsSync } from "fs";

// ─── Registry ────────────────────────────────────────────────────────────────

const REGISTRY = [
  { slug: "energy-utilities", file: "Constellation Energy -ai-workflow-data.json", company: "Constellation Energy", aliases: ["Constellation"], description: "A Major Nuclear Energy & Power Generation Company", workshopUrl: "https://workshop.movefasterwithai.com/shared/mhoTOTqV0D" },
  { slug: "construction", file: "Nations Roof-ai-workflow-data.json", company: "Nations Roof", aliases: [], description: "A Leading Commercial Roofing & Construction Company", workshopUrl: "https://workshop.gofasterwithai.com/shared/wKU4tP8U2Y" },
  { slug: "manufacturing", file: "Mativ-ai-workflow-data.json", company: "Mativ", aliases: ["Mativ Holdings"], description: "A Specialty Materials Manufacturing Company", workshopUrl: "https://workshop.movefasterwithai.com/shared/7e_NDxF1jI" },
  { slug: "retail", file: "The Home Depot-ai-workflow-data.json", company: "The Home Depot", aliases: ["Home Depot", "THD"], description: "A Major Home Improvement Retailer", workshopUrl: "https://workshop.gofasterwithai.com/shared/HBWbVWfQ_r" },
  { slug: "transportation", file: "JB Hunt-ai-workflow-data.json", company: "JB Hunt", aliases: ["J.B. Hunt", "J.B. Hunt Transport Services", "J.B. Hunt Transport"], description: "A Leading Freight Transportation & Logistics Company", workshopUrl: "https://workshop.movefasterwithai.com/shared/zIredTHVaf" },
  { slug: "technology-information", file: "Verizon-ai-workflow-data.json", company: "Verizon", aliases: ["Verizon Communications"], description: "A Major Technology & Communications Company", workshopUrl: "https://workshop.gofasterwithai.com/shared/8xQpSnaE3j" },
  { slug: "finance-insurance", file: "Primerica-ai-workflow-data.json", company: "Primerica", aliases: ["Primerica, Inc."], description: "A Leading Financial Services & Life Insurance Company", workshopUrl: "https://workshop.movefasterwithai.com/shared/GipYbuKKPv" },
  { slug: "real-estate", file: "BXP-ai-workflow-data.json", company: "BXP", aliases: ["Boston Properties", "BXP, Inc."], description: "A Major Office REIT & Commercial Real Estate Company", workshopUrl: "https://workshop.movefasterwithai.com/shared/O48iUpi42o" },
  { slug: "professional-services", file: "World Wide Technology-ai-workflow-data.json", company: "World Wide Technology", aliases: ["WWT"], description: "A Leading Global Technology Solutions Provider", workshopUrl: "https://workshop.movefasterwithai.com/shared/l666dO8KXD" },
  { slug: "healthcare", file: "Sonic Healthcare-ai-workflow-data.json", company: "Sonic Healthcare", aliases: ["Sonic Healthcare Limited"], description: "A Major Pathology & Clinical Laboratory Company", workshopUrl: "https://workshop.movefasterwithai.com/shared/cOdd7nmaWk" },
  { slug: "entertainment", file: "Georgia Aquarium-ai-workflow-data.json", company: "Georgia Aquarium", aliases: [], description: "A Prominent Non-Profit Aquarium & Attraction", workshopUrl: "https://workshop.movefasterwithai.com/shared/FyXJc2kcpl" },
  { slug: "education", file: "Meharry Medical College-ai-workflow-data.json", company: "Meharry Medical College", aliases: ["Meharry"], description: "A Leading Medical & Health Sciences College", workshopUrl: "https://workshop.movefasterwithai.com/shared/NRbMdf9Zbx" },
  { slug: "state-local", file: "Maryland Department of Health-ai-workflow-data.json", company: "Maryland Department of Health", aliases: ["MDH", "Maryland DoH"], description: "A State Department of Public Health", workshopUrl: "https://workshop.movefasterwithai.com/shared/_0bsFLuxIh" },
  { slug: "federal", file: "NASA-ai-workflow-data.json", company: "NASA", aliases: ["National Aeronautics and Space Administration"], description: "A Major Federal Science & Space Agency", workshopUrl: "https://workshop.gofasterwithai.com/shared/m0lrQ90vMp" },
];

// ─── Generic Methodology ─────────────────────────────────────────────────────

const METHODOLOGY = {
  framework: "BlueAlly 7-Step AI Assessment Framework with financial modeling, readiness scoring, and workflow transformation analysis",
  assumptions: [
    "All monetary values derived from public filings and standard industry benchmarks",
    "Fully-loaded labor rates applied per role: professional staff at market rates",
    "Implementation assumes 12-month base timeline with phased rollout",
    "ROI calculations use 10% discount rate for NPV, 3-year payback threshold",
    "Readiness scores based on disclosed technology investments and data maturity indicators",
    "Probability of success factors in organizational change management complexity",
  ],
};

// ─── Value Driver Colors ─────────────────────────────────────────────────────

const DRIVER_COLORS = {
  "Cost Reduction": "#00B34A",
  "Revenue Growth": "#00A3E0",
  "Cash Flow Acceleration": "#003B73",
  "Risk Mitigation": "#FF6B35",
};

// ─── Financial Scenario Labels ───────────────────────────────────────────────

const SCENARIO_MAP = {
  conservative: { name: "Conservative", multiplier: "×0.6" },
  moderate: { name: "Base Case", multiplier: "×1.0" },
  aggressive: { name: "Optimistic", multiplier: "×1.3" },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Parse dollar string like "$2.5M", "$1.3B", or raw number to millions.
 */
function parseDollar(s) {
  if (s === null || s === undefined || s === "" || s === "$0" || s === "0") return 0;
  const str = String(s).replace(/[,$]/g, "").trim();
  if (str.endsWith("M")) return parseFloat(str.slice(0, -1)) || 0;
  if (str.endsWith("B")) return (parseFloat(str.slice(0, -1)) || 0) * 1000;
  const num = parseFloat(str);
  if (isNaN(num)) return 0;
  // Raw number in dollars -> convert to millions
  if (num >= 100000) return num / 1000000;
  return num;
}

/**
 * Map tier string from JSON to canonical tier name.
 */
function mapTier(t) {
  if (!t) return "Foundation";
  if (t.includes("Champion")) return "Champion";
  if (t.includes("Quick Win")) return "Quick Win";
  if (t.includes("Strategic")) return "Strategic Bet";
  return "Foundation";
}

/**
 * Normalize actorType to valid union: "human" | "system" | "ai_agent".
 */
function normalizeActorType(t) {
  if (!t) return "human";
  const lower = String(t).toLowerCase();
  if (lower === "ai_agent" || lower === "ai agent" || lower === "ai") return "ai_agent";
  if (lower === "system" || lower === "automated") return "system";
  if (lower === "human") return "human";
  // "hybrid", "collaborative", etc. -> "system" (closest fit)
  if (lower.includes("ai") || lower.includes("agent")) return "ai_agent";
  if (lower === "hybrid" || lower === "collaborative") return "system";
  return "human";
}

/**
 * Normalize automationLevel to valid union: "full" | "assisted" | "augmented" | "supervised" | "manual".
 */
function normalizeAutomationLevel(l) {
  if (!l) return "assisted";
  const lower = String(l).toLowerCase();
  if (lower === "full" || lower === "fully_automated" || lower === "fully automated") return "full";
  if (lower === "assisted" || lower === "assistive") return "assisted";
  if (lower === "augmented") return "augmented";
  if (lower === "supervised") return "supervised";
  if (lower === "manual" || lower === "none") return "manual";
  // "collaborative", "hybrid", etc.
  if (lower.includes("assist")) return "assisted";
  if (lower.includes("augment")) return "augmented";
  if (lower.includes("supervis")) return "supervised";
  if (lower.includes("full") || lower.includes("auto")) return "full";
  return "assisted";
}

/**
 * De-identify company names in text, replacing with "the organization".
 */
function deidentify(text, companyName, aliases) {
  if (!text) return text;
  let result = text;
  // Sort names by length (longest first) to avoid partial replacements
  const names = [companyName, ...aliases].sort((a, b) => b.length - a.length);
  for (const name of names) {
    // Possessive form first
    result = result.replaceAll(`${name}'s`, "the organization's");
    result = result.replaceAll(`${name}`, "the organization");
  }
  // Fix sentence-start capitalization
  result = result.replace(/\. the organization/g, ". The organization");
  result = result.replace(/^the organization/gm, "The organization");
  // Fix "the the organization" that can happen with "The Home Depot"
  result = result.replace(/the the organization/gi, "the organization");
  // Fix "The the organization" at sentence start
  result = result.replace(/The the organization/g, "The organization");
  return result;
}

/**
 * Auto-generate value driver descriptions from theme names.
 */
function generateDriverDescriptions(themes) {
  const themeNames = themes.map(t => t.name.toLowerCase()).slice(0, 3);
  const areas = themeNames.join(", ");
  return {
    "Cost Reduction": `Operational efficiency through AI-driven automation across ${areas}`,
    "Revenue Growth": `AI-powered intelligence and optimization driving revenue through ${areas}`,
    "Cash Flow Acceleration": `Working capital optimization and cycle time reduction through AI-driven ${areas}`,
    "Risk Mitigation": `Predictive monitoring, compliance automation, and risk reduction across ${areas}`,
  };
}

/**
 * Safely parse estimatedAnnualCost which can be a number or a string.
 * Returns value in millions.
 */
function parseAnnualCost(val) {
  if (val === null || val === undefined) return 0;
  const num = typeof val === "string" ? parseFloat(val) : val;
  if (isNaN(num)) return 0;
  // Raw number in dollars -> convert to millions
  if (num >= 100000) return num / 1000000;
  return num;
}

/**
 * Deep-walk an object and de-identify all string values.
 */
function deidentifyDeep(obj, companyName, aliases) {
  if (typeof obj === "string") return deidentify(obj, companyName, aliases);
  if (Array.isArray(obj)) return obj.map(item => deidentifyDeep(item, companyName, aliases));
  if (obj !== null && typeof obj === "object") {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = deidentifyDeep(value, companyName, aliases);
    }
    return result;
  }
  return obj;
}

// ─── Main Conversion ─────────────────────────────────────────────────────────

/**
 * Convert a single JSON export to a report object.
 */
function convertReport(entry, inputDir) {
  const filePath = inputDir + entry.file;
  if (!existsSync(filePath)) {
    throw new Error(`Input file not found: ${filePath}`);
  }

  const raw = JSON.parse(readFileSync(filePath, "utf8"));
  const steps = raw.analysis.steps;

  // ── Step data ──
  const step0 = steps.find(s => s.step === 0);
  const step1 = steps.find(s => s.step === 1);
  const step2 = steps.find(s => s.step === 2);
  const step3 = steps.find(s => s.step === 3);
  const step4 = steps.find(s => s.step === 4);
  const step5 = steps.find(s => s.step === 5);
  const step6 = steps.find(s => s.step === 6);
  const step7 = steps.find(s => s.step === 7);

  const themes = (step1 && step1.data) || [];
  const kpis = (step2 && step2.data) || [];
  const frictionPoints = (step3 && step3.data) || [];
  const useCases = (step4 && step4.data) || [];
  const benefits = (step5 && step5.data) || [];
  const readiness = (step6 && step6.data) || [];
  const priority = (step7 && step7.data) || [];
  const scenarios = raw.analysis.scenarioAnalysis || {};
  const execSummary = raw.analysis.executiveSummary;
  const execDashboard = raw.analysis.executiveDashboard || {};
  const workflowMaps = raw.analysis.workflowMaps || [];

  // ── Build UC map with merged lookups ──
  const ucMap = {};
  for (const uc of useCases) {
    ucMap[uc.id] = { ...uc };
  }
  for (const b of benefits) {
    if (ucMap[b.useCaseId]) {
      ucMap[b.useCaseId].benefits = b;
    }
  }
  for (const r of readiness) {
    if (ucMap[r.useCaseId]) {
      ucMap[r.useCaseId].readinessData = r;
    }
  }
  for (const p of priority) {
    if (ucMap[p.useCaseId]) {
      ucMap[p.useCaseId].priorityData = p;
    }
  }
  for (const wf of workflowMaps) {
    if (ucMap[wf.useCaseId]) {
      ucMap[wf.useCaseId].workflow = wf;
    }
  }

  // ── Executive dashboard values (raw numbers -> millions) ──
  const totalVal = (execDashboard.totalAnnualValue || 0) / 1000000;
  const costBenefit = (execDashboard.totalCostBenefit || 0) / 1000000;
  const revBenefit = (execDashboard.totalRevenueBenefit || 0) / 1000000;
  const cashBenefit = (execDashboard.totalCashFlowBenefit || 0) / 1000000;
  const riskBenefit = (execDashboard.totalRiskBenefit || 0) / 1000000;

  // ── Value drivers ──
  const driverDescs = generateDriverDescriptions(themes);
  const valueDrivers = [
    { name: "Cost Reduction", amount: +costBenefit.toFixed(1), percentage: totalVal > 0 ? Math.round(costBenefit / totalVal * 100) : 0, color: DRIVER_COLORS["Cost Reduction"] },
    { name: "Revenue Growth", amount: +revBenefit.toFixed(1), percentage: totalVal > 0 ? Math.round(revBenefit / totalVal * 100) : 0, color: DRIVER_COLORS["Revenue Growth"] },
    { name: "Cash Flow Acceleration", amount: +cashBenefit.toFixed(1), percentage: totalVal > 0 ? Math.round(cashBenefit / totalVal * 100) : 0, color: DRIVER_COLORS["Cash Flow Acceleration"] },
    { name: "Risk Mitigation", amount: +riskBenefit.toFixed(1), percentage: totalVal > 0 ? Math.round(riskBenefit / totalVal * 100) : 0, color: DRIVER_COLORS["Risk Mitigation"] },
  ];
  // Sort by amount descending, add descriptions
  valueDrivers.sort((a, b) => b.amount - a.amount);
  for (const d of valueDrivers) {
    d.description = driverDescs[d.name] || "";
  }

  // ── Financial scenarios ──
  const financialScenarios = Object.entries(scenarios).map(([key, val]) => ({
    name: SCENARIO_MAP[key]?.name || key,
    multiplier: SCENARIO_MAP[key]?.multiplier || "×1.0",
    annualBenefit: parseDollar(val.annualBenefit) || parseDollar(val.totalAnnualValue),
    fiveYearNPV: parseDollar(val.npv) || parseDollar(val.fiveYearNPV),
  }));

  // ── Build use case ──
  function buildUseCase(id) {
    const uc = ucMap[id];
    if (!uc) return null;
    const b = uc.benefits || {};
    const r = uc.readinessData || {};
    const p = uc.priorityData || {};
    const wf = uc.workflow;

    // Build readiness dimensions: check for nested .dimensions first, then flat fields
    const dims = r.dimensions || {
      dataAvailability: r.dataAvailability || 5,
      technicalInfrastructure: r.technicalInfrastructure || 5,
      organizationalCapacity: r.organizationalCapacity || 5,
      governance: r.governance || 5,
    };

    const result = {
      id: uc.id,
      title: uc.title || uc.name,
      pattern: uc.agenticPattern?.primary || uc.primaryPattern || uc.pattern || "Tool Use",
      functionalArea: uc.functionalArea || uc.function || "Operations",
      description: uc.description || "",
      targetFriction: uc.targetFriction || "",
      targetFrictionId: uc.targetFrictionId || "",
      capabilities: uc.capabilities || uc.aiPrimitives || [],
      agenticPattern: typeof uc.agenticPattern === "string"
        ? { primary: uc.primaryPattern || uc.agenticPattern, alternative: uc.alternativePattern || "", rationale: uc.patternRationale || "" }
        : uc.agenticPattern || { primary: "", alternative: "", rationale: "" },
      epochClassification: uc.epochClassification
        || (uc.epochFlags
          ? (typeof uc.epochFlags === "string"
            ? uc.epochFlags.split(",").map(s => s.trim()).filter(Boolean)
            : [uc.epochFlags])
          : []),
      desiredOutcomes: (uc.desiredOutcomes || []).map(o =>
        typeof o === "string" ? { outcome: o, metric: "" } : { outcome: o.outcome || "", metric: o.metric || "" }
      ),
      dataTypes: uc.dataTypes || [],
      integrations: uc.integrations || [],
      hitlRequirement: uc.hitlRequirement || uc.hitlCheckpoint || "Manual review required",
      valueScore: p.valueScore || r.readinessScore || 5,
      readinessScore: r.readinessScore || 5,
      timeToValue: r.timeToValue || 12,
      annualValue: parseDollar(b.totalAnnualValue),
      priorityTier: mapTier(p.priorityTier),
      benefitBreakdown: {
        costSavings: parseDollar(b.costBenefit),
        revenue: parseDollar(b.revenueBenefit),
        riskMitigation: parseDollar(b.riskBenefit),
        cashFlow: parseDollar(b.cashFlowBenefit),
      },
      readinessDimensions: dims,
      priority: {
        priorityScore: p.priorityScore || 5,
        recommendedPhase: p.recommendedPhase || "Phase 2",
        valueScore: p.valueScore || 5,
        ttvScore: p.ttvScore || r.timeToValue || 5,
      },
      probabilityOfSuccess: b.probabilityOfSuccess || r.probabilityOfSuccess || p.probabilityOfSuccess || 0.6,
    };

    // Workflow transformation
    if (wf && wf.currentState && wf.targetState) {
      result.workflow = {
        currentState: wf.currentState.map(s => ({
          stepNumber: s.stepNumber,
          name: s.name,
          description: s.description,
          actorType: normalizeActorType(s.actorType || "human"),
          actorName: s.actorName || s.actor || "Staff",
          duration: s.duration || "",
          isBottleneck: s.isBottleneck || false,
          systems: s.systems || [],
          painPoints: s.painPoints || [],
        })),
        targetState: wf.targetState.map(s => ({
          stepNumber: s.stepNumber,
          name: s.name,
          description: s.description,
          actorType: normalizeActorType(s.actorType || "ai_agent"),
          actorName: s.actorName || s.actor || "AI Agent",
          duration: s.duration || "",
          isBottleneck: s.isBottleneck || false,
          systems: s.systems || [],
          painPoints: s.painPoints || [],
          isAIEnabled: s.isAIEnabled || normalizeActorType(s.actorType) === "ai_agent",
          automationLevel: normalizeAutomationLevel(s.automationLevel || "assisted"),
          aiCapabilities: s.aiCapabilities || [],
        })),
        comparisonMetrics: wf.comparisonMetrics || {
          timeReduction: { before: "N/A", after: "N/A", improvement: "N/A" },
          costReduction: { before: "N/A", after: "N/A", improvement: "N/A" },
          qualityImprovement: { before: "N/A", after: "N/A", improvement: "N/A" },
          throughputIncrease: { before: "N/A", after: "N/A", improvement: "N/A" },
        },
      };
    }

    return result;
  }

  // ── Group UCs by theme ──
  const themeUseCases = {};
  for (const uc of useCases) {
    const tid = uc.strategicThemeId;
    if (!themeUseCases[tid]) themeUseCases[tid] = [];
    themeUseCases[tid].push(uc.id);
  }

  const themeData = themes.map(t => ({
    id: t.id,
    name: t.name,
    currentState: t.currentState || "",
    targetState: t.targetState || "",
    useCases: (themeUseCases[t.id] || []).map(buildUseCase).filter(Boolean),
    frictionPoints: frictionPoints
      .filter(fp => fp.strategicThemeId === t.id)
      .map(fp => ({
        id: fp.id,
        frictionPoint: fp.frictionPoint,
        severity: fp.severity || "High",
        role: fp.role || "Operations",
        estimatedAnnualCost: parseAnnualCost(fp.estimatedAnnualCost),
        annualHours: fp.annualHours || 0,
        function: fp.function || "Operations",
        subFunction: fp.subFunction || "",
        strategicThemeId: fp.strategicThemeId,
      })),
    kpis: kpis
      .filter(k => k.strategicThemeId === t.id)
      .map(k => ({
        id: k.id,
        kpiName: k.kpiName,
        function: k.function || "",
        subFunction: k.subFunction || "",
        direction: k.direction || "",
        baselineValue: k.baselineValue || "",
        targetValue: k.targetValue || "",
        timeframe: k.timeframe || "",
        strategicThemeId: k.strategicThemeId,
      })),
  }));

  // ── Executive summary ──
  let execSummaryData;
  if (execSummary) {
    execSummaryData = {
      headline: execSummary.headline || "",
      context: execSummary.context || "",
      criticalPath: execSummary.criticalPath || "",
      recommendedAction: execSummary.recommendedAction || "",
      findings: (execSummary.findings || []).map(f => ({
        title: f.title || "",
        body: f.body || "",
        value: f.value || "",
      })),
      opportunityTable: (execSummary.opportunityTable?.rows || execSummary.opportunityTable || []).map(r => ({
        metric: r.metric || "",
        value: r.value || "",
      })),
    };
  }

  // ── Company overview (de-identified) ──
  const companyOverviewRaw = (step0 && step0.content) || "";
  const companyOverview = deidentify(companyOverviewRaw, entry.company, entry.aliases);

  // ── De-identify executive summary text ──
  const execSummaryDeidentified = execSummaryData
    ? deidentifyDeep(execSummaryData, entry.company, entry.aliases)
    : undefined;

  // ── De-identify theme text (currentState, targetState, friction descriptions, UC descriptions) ──
  const themeDataDeidentified = deidentifyDeep(themeData, entry.company, entry.aliases);

  // ── Count use cases ──
  let ucCount = 0;
  for (const t of themeDataDeidentified) {
    ucCount += t.useCases.length;
  }

  // ── Build the report object ──
  const report = {
    industrySlug: entry.slug,
    companyDescription: entry.description,
    companyOverview,
    totalValueOpportunity: +totalVal.toFixed(1),
    valueDrivers,
    financialScenarios,
    themes: themeDataDeidentified,
    methodology: METHODOLOGY,
    executiveSummary: execSummaryDeidentified,
    workshopUrl: entry.workshopUrl,
  };

  return { report, ucCount };
}

// ─── Main ────────────────────────────────────────────────────────────────────

const INPUT_DIR = "/Users/drewgodwin/Desktop/json files website/";
const OUTPUT_DIR = "/Users/drewgodwin/aiwebsiteblueally/client/src/data/reports/";

let successCount = 0;
let failCount = 0;

console.log(`\nConverting ${REGISTRY.length} industry reports...\n`);

for (const entry of REGISTRY) {
  try {
    const { report, ucCount } = convertReport(entry, INPUT_DIR);
    const ts = `import type { IndustryReport } from "../report-types";\n\nexport const report: IndustryReport = ${JSON.stringify(report, null, 2)};\n`;
    writeFileSync(`${OUTPUT_DIR}${entry.slug}.ts`, ts, "utf8");
    console.log(`  ✓ ${entry.slug}.ts — $${report.totalValueOpportunity.toFixed(1)}M, ${report.themes.length} themes, ${ucCount} UCs`);
    successCount++;
  } catch (err) {
    console.error(`  ✗ ${entry.slug} — ${err.message}`);
    failCount++;
  }
}

console.log(`\nDone: ${successCount} succeeded, ${failCount} failed.\n`);
