#!/usr/bin/env node
/**
 * Convert Mativ JSON export to manufacturing.ts report data file.
 * Usage: node scripts/convert-mativ.mjs
 */
import { readFileSync, writeFileSync } from "fs";

const raw = JSON.parse(readFileSync("/Users/drewgodwin/Downloads/Mativ-ai-workflow-data.json", "utf8"));
const steps = raw.analysis.steps;

// Helper: parse dollar string like "$2.5M" -> 2.5 (millions)
function parseDollar(s) {
  if (!s || s === "$0" || s === "0") return 0;
  const str = String(s).replace(/[,$]/g, "").trim();
  if (str.endsWith("M")) return parseFloat(str.slice(0, -1));
  if (str.endsWith("B")) return parseFloat(str.slice(0, -1)) * 1000;
  // Raw number (could be in dollars)
  const num = parseFloat(str);
  if (isNaN(num)) return 0;
  if (num >= 100000) return num / 1000000; // raw dollars -> millions
  return num;
}

// Step data
const step0 = steps.find(s => s.step === 0);
const step1 = steps.find(s => s.step === 1);
const step2 = steps.find(s => s.step === 2);
const step3 = steps.find(s => s.step === 3);
const step4 = steps.find(s => s.step === 4);
const step5 = steps.find(s => s.step === 5);
const step6 = steps.find(s => s.step === 6);
const step7 = steps.find(s => s.step === 7);

const themes = step1.data;
const kpis = step2.data;
const frictionPoints = step3.data;
const useCases = step4.data;
const benefits = step5.data;
const readiness = step6.data;
const priority = step7.data;
const scenarios = raw.analysis.scenarioAnalysis;
const execSummary = raw.analysis.executiveSummary;
const execDashboard = raw.analysis.executiveDashboard;
const workflowMaps = raw.analysis.workflowMaps || [];

// Map tiers
function mapTier(t) {
  if (!t) return "Foundation";
  if (t.includes("Champion")) return "Champion";
  if (t.includes("Quick Win")) return "Quick Win";
  if (t.includes("Strategic")) return "Strategic Bet";
  return "Foundation";
}

// Build UC map
const ucMap = {};
for (const uc of useCases) {
  ucMap[uc.id] = { ...uc };
}
// Merge benefits
for (const b of benefits) {
  if (ucMap[b.useCaseId]) {
    ucMap[b.useCaseId].benefits = b;
  }
}
// Merge readiness
for (const r of readiness) {
  if (ucMap[r.useCaseId]) {
    ucMap[r.useCaseId].readinessData = r;
  }
}
// Merge priority
for (const p of priority) {
  if (ucMap[p.useCaseId]) {
    ucMap[p.useCaseId].priorityData = p;
  }
}
// Merge workflows
for (const wf of workflowMaps) {
  if (ucMap[wf.useCaseId]) {
    ucMap[wf.useCaseId].workflow = wf;
  }
}

// Executive dashboard
const totalVal = execDashboard.totalAnnualValue / 1000000;
const costBenefit = execDashboard.totalCostBenefit / 1000000;
const revBenefit = execDashboard.totalRevenueBenefit / 1000000;
const cashBenefit = execDashboard.totalCashFlowBenefit / 1000000;
const riskBenefit = execDashboard.totalRiskBenefit / 1000000;

// Build value drivers
const valueDrivers = [
  { name: "Cost Reduction", amount: +costBenefit.toFixed(1), percentage: Math.round(costBenefit / totalVal * 100), color: "#00B34A" },
  { name: "Revenue Growth", amount: +revBenefit.toFixed(1), percentage: Math.round(revBenefit / totalVal * 100), color: "#00A3E0" },
  { name: "Cash Flow Acceleration", amount: +cashBenefit.toFixed(1), percentage: Math.round(cashBenefit / totalVal * 100), color: "#003B73" },
  { name: "Risk Mitigation", amount: +riskBenefit.toFixed(1), percentage: Math.round(riskBenefit / totalVal * 100), color: "#FF6B35" },
];

// Sort by amount descending and add description
valueDrivers.sort((a, b) => b.amount - a.amount);
const driverDescs = {
  "Cost Reduction": "AI-driven manufacturing optimization, supply chain efficiency, and automated quality monitoring reducing operational costs across 45 global facilities",
  "Revenue Growth": "Accelerated product development, intelligent quoting, and customer intelligence driving revenue uplift through faster time-to-market and improved win rates",
  "Cash Flow Acceleration": "Working capital optimization through AI-driven demand sensing, inventory reduction, and faster procurement cycles",
  "Risk Mitigation": "Predictive quality control, regulatory compliance automation, and supplier risk monitoring reducing exposure across manufacturing operations",
};
for (const d of valueDrivers) {
  d.description = driverDescs[d.name] || "";
}

// Financial scenarios
const scenarioMap = {
  conservative: { name: "Conservative", multiplier: "×0.6" },
  moderate: { name: "Base Case", multiplier: "×1.0" },
  aggressive: { name: "Optimistic", multiplier: "×1.3" },
};
const financialScenarios = Object.entries(scenarios).map(([key, val]) => ({
  name: scenarioMap[key]?.name || key,
  multiplier: scenarioMap[key]?.multiplier || "×1.0",
  annualBenefit: parseDollar(val.annualBenefit) || parseDollar(val.totalAnnualValue),
  fiveYearNPV: parseDollar(val.npv) || parseDollar(val.fiveYearNPV),
}));

// Build theme data
function buildUseCase(id) {
  const uc = ucMap[id];
  if (!uc) return null;
  const b = uc.benefits || {};
  const r = uc.readinessData || {};
  const p = uc.priorityData || {};
  const wf = uc.workflow;

  const result = {
    id: uc.id,
    title: uc.title || uc.name,
    pattern: uc.agenticPattern?.primary || uc.primaryPattern || uc.pattern || "Tool Use",
    functionalArea: uc.functionalArea || uc.function || "Operations",
    description: uc.description,
    targetFriction: uc.targetFriction || "",
    targetFrictionId: uc.targetFrictionId || "",
    capabilities: uc.capabilities || uc.aiPrimitives || [],
    agenticPattern: typeof uc.agenticPattern === "string"
      ? { primary: uc.primaryPattern || uc.agenticPattern, alternative: uc.alternativePattern || "", rationale: uc.patternRationale || "" }
      : uc.agenticPattern || { primary: "", alternative: "", rationale: "" },
    epochClassification: uc.epochClassification || (uc.epochFlags ? [uc.epochFlags] : []),
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
    readinessDimensions: r.dimensions || {
      dataAvailability: 5,
      technicalInfrastructure: 5,
      organizationalCapacity: 5,
      governance: 5,
    },
    priority: {
      priorityScore: p.priorityScore || 5,
      recommendedPhase: p.recommendedPhase || "Phase 2",
      valueScore: p.valueScore || 5,
      ttvScore: r.timeToValue || 5,
    },
    probabilityOfSuccess: r.probabilityOfSuccess || p.probabilityOfSuccess || 0.6,
  };

  // Workflow
  if (wf && wf.currentState && wf.targetState) {
    result.workflow = {
      currentState: wf.currentState.map(s => ({
        stepNumber: s.stepNumber,
        name: s.name,
        description: s.description,
        actorType: s.actorType || "human",
        actorName: s.actorName || s.actor || "Staff",
        duration: s.duration,
        isBottleneck: s.isBottleneck || false,
        systems: s.systems || [],
        painPoints: s.painPoints || [],
      })),
      targetState: wf.targetState.map(s => ({
        stepNumber: s.stepNumber,
        name: s.name,
        description: s.description,
        actorType: s.actorType || "ai_agent",
        actorName: s.actorName || s.actor || "AI Agent",
        duration: s.duration,
        isBottleneck: s.isBottleneck || false,
        systems: s.systems || [],
        painPoints: s.painPoints || [],
        isAIEnabled: s.isAIEnabled || s.actorType === "ai_agent",
        automationLevel: s.automationLevel || "assisted",
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

// Group UCs by theme
const themeUseCases = {};
for (const uc of useCases) {
  const tid = uc.strategicThemeId;
  if (!themeUseCases[tid]) themeUseCases[tid] = [];
  themeUseCases[tid].push(uc.id);
}

const themeData = themes.map(t => ({
  id: t.id,
  name: t.name,
  currentState: t.currentState,
  targetState: t.targetState,
  useCases: (themeUseCases[t.id] || []).map(buildUseCase).filter(Boolean),
  frictionPoints: frictionPoints
    .filter(fp => fp.strategicThemeId === t.id)
    .map(fp => ({
      id: fp.id,
      frictionPoint: fp.frictionPoint,
      severity: fp.severity || "High",
      role: fp.role || "Operations",
      estimatedAnnualCost: fp.estimatedAnnualCost / 1000000,
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
      function: k.function,
      subFunction: k.subFunction,
      direction: k.direction,
      baselineValue: k.baselineValue,
      targetValue: k.targetValue,
      timeframe: k.timeframe,
      strategicThemeId: k.strategicThemeId,
    })),
}));

// Executive summary
const execSummaryData = execSummary ? {
  headline: execSummary.headline,
  context: execSummary.context,
  criticalPath: execSummary.criticalPath,
  recommendedAction: execSummary.recommendedAction,
  findings: (execSummary.findings || []).map(f => ({
    title: f.title,
    body: f.body,
    value: f.value,
  })),
  opportunityTable: (execSummary.opportunityTable?.rows || execSummary.opportunityTable || []).map(r => ({
    metric: r.metric,
    value: r.value,
  })),
} : undefined;

// Build the report object
const report = {
  industrySlug: "manufacturing",
  companyDescription: "A Specialty Materials Manufacturing Company with $2.9B in annual revenue operating 45 facilities across 26 countries",
  companyOverview: step0.content,
  totalValueOpportunity: +totalVal.toFixed(1),
  valueDrivers,
  financialScenarios,
  themes: themeData,
  methodology: {
    framework: "BlueAlly 7-Step AI Assessment Framework with financial modeling, readiness scoring, and workflow transformation analysis",
    assumptions: [
      "All monetary values derived from public filings (10-K, quarterly earnings) and standard industry benchmarks",
      "Fully-loaded labor rates: $150/hour professional staff, $85/hour production personnel",
      "Implementation assumes 12-month base timeline with phased rollout across facilities",
      "ROI calculations use 10% discount rate for NPV, 3-year payback threshold",
      "Readiness scores based on disclosed IT integration investments and data maturity indicators",
      "Probability of success factors in organizational change management complexity",
    ],
  },
  executiveSummary: execSummaryData,
};

// Generate TypeScript
let ts = `import type { IndustryReport } from "../report-types";\n\nexport const report: IndustryReport = ${JSON.stringify(report, null, 2)} as const satisfies IndustryReport;\n`;

// Fix the "as const satisfies" to just be a normal typed assignment
ts = `import type { IndustryReport } from "../report-types";\n\nexport const report: IndustryReport = ${JSON.stringify(report, null, 2)};\n`;

writeFileSync(
  "/Users/drewgodwin/aiwebsiteblueally/client/src/data/reports/manufacturing.ts",
  ts,
  "utf8"
);

console.log("✓ manufacturing.ts written successfully");
console.log(`  Total value: $${totalVal.toFixed(1)}M`);
console.log(`  Themes: ${themeData.length}`);
console.log(`  Use cases: ${Object.keys(ucMap).length}`);
console.log(`  Friction points: ${frictionPoints.length}`);
console.log(`  KPIs: ${kpis.length}`);
console.log(`  Scenarios: ${financialScenarios.length}`);
console.log(`  Executive summary: ${execSummaryData ? "yes" : "no"}`);
