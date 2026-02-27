/**
 * Report Type Definitions
 * Structured data shape for native industry report rendering.
 * Aligned with workshop.gofasterwithai.com JSON export format.
 * All monetary values are in millions (e.g., 5.5 = $5.5M).
 */

// ── Value Drivers ──

export interface ValueDriver {
  name: "Revenue Growth" | "Cost Reduction" | "Cash Flow Acceleration" | "Risk Mitigation";
  amount: number;
  percentage: number;
  description: string;
  color: string;
}

// ── Financial Scenarios ──

export interface FinancialScenario {
  name: "Conservative" | "Base Case" | "Optimistic";
  multiplier?: string;
  annualBenefit: number;
  fiveYearNPV: number;
  /** @deprecated Legacy fields — kept for backward compat with older reports */
  adoptionRate?: string;
  timeline?: string;
  realization?: string;
  description?: string;
}

// ── Friction Points (per-theme) ──

export interface FrictionPoint {
  id: string;
  frictionPoint: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  role: string;
  estimatedAnnualCost: number;
  annualHours: number;
  function: string;
  subFunction: string;
  strategicThemeId: string;
}

// ── KPIs (per-theme) ──

export interface ThemeKPI {
  id: string;
  kpiName: string;
  function: string;
  subFunction: string;
  direction: string;
  baselineValue: string;
  targetValue: string;
  timeframe: string;
  strategicThemeId: string;
}

// ── Per-UseCase Financial Breakdown ──

export interface BenefitBreakdown {
  costSavings: number;
  revenue: number;
  riskMitigation: number;
  cashFlow: number;
}

// ── Readiness Dimensions ──

export interface ReadinessDimensions {
  dataAvailability: number;
  technicalInfrastructure: number;
  organizationalCapacity: number;
  governance: number;
}

// ── Priority Info ──

export interface PriorityInfo {
  priorityScore: number;
  recommendedPhase: string;
  valueScore: number;
  ttvScore: number;
}

// ── Workflow Transformation ──

export interface WorkflowStep {
  stepNumber: number;
  name: string;
  description: string;
  actorType: "human" | "system" | "ai_agent";
  actorName: string;
  duration: string;
  isBottleneck: boolean;
  systems: string[];
  painPoints: string[];
  isAIEnabled?: boolean;
  automationLevel?: "full" | "assisted" | "augmented" | "supervised" | "manual";
  aiCapabilities?: string[];
  isDecisionPoint?: boolean;
  isHumanInTheLoop?: boolean;
}

export interface ComparisonMetric {
  before: string;
  after: string;
  improvement: string;
}

export interface WorkflowTransformation {
  currentState: WorkflowStep[];
  targetState: WorkflowStep[];
  comparisonMetrics: {
    timeReduction: ComparisonMetric;
    costReduction: ComparisonMetric;
    qualityImprovement: ComparisonMetric;
    throughputIncrease: ComparisonMetric;
  };
}

// ── Executive Summary ──

export interface ExecutiveFinding {
  title: string;
  body: string;
  value: string;
}

export interface ExecutiveSummary {
  headline: string;
  context: string;
  criticalPath: string;
  recommendedAction: string;
  findings: ExecutiveFinding[];
  opportunityTable: { metric: string; value: string }[];
}

// ── Desired Outcomes ──

export interface DesiredOutcome {
  outcome: string;
  metric: string;
}

// ── Use Cases ──

export interface UseCase {
  id: string;
  title: string;
  pattern: string;
  functionalArea: string;
  description: string;
  targetFriction: string;
  targetFrictionId?: string;
  capabilities: string[];
  agenticPattern: {
    primary: string;
    alternative: string;
    rationale: string;
  };
  epochClassification: string[];
  desiredOutcomes: DesiredOutcome[];
  dataTypes: string[];
  integrations: string[];
  hitlRequirement: string;
  valueScore: number;
  readinessScore: number;
  timeToValue: number;
  annualValue: number;
  priorityTier: "Champion" | "Strategic Bet" | "Quick Win" | "Foundation";
  benefitBreakdown?: BenefitBreakdown;
  readinessDimensions?: ReadinessDimensions;
  priority?: PriorityInfo;
  probabilityOfSuccess?: number;
  workflow?: WorkflowTransformation;
}

// ── Themes ──

export interface Theme {
  id?: string;
  name: string;
  currentState?: string;
  targetState?: string;
  useCases: UseCase[];
  frictionPoints: (FrictionPoint | string)[];
  kpis?: ThemeKPI[];
}

// ── Top-Level Report ──

export interface IndustryReport {
  industrySlug: string;
  companyDescription: string;
  companyOverview?: string;
  totalValueOpportunity: number;
  valueDrivers: ValueDriver[];
  financialScenarios: FinancialScenario[];
  themes: Theme[];
  methodology: {
    framework: string;
    assumptions: string[];
  };
  executiveSummary?: ExecutiveSummary;
}
