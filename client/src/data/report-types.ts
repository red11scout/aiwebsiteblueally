/**
 * Report Type Definitions
 * Structured data shape for native industry report rendering.
 * Each industry with a live report has a data file matching this interface.
 */

export interface ValueDriver {
  name: "Revenue Growth" | "Cost Reduction" | "Cash Flow Acceleration" | "Risk Mitigation";
  amount: number;
  percentage: number;
  description: string;
  color: string;
}

export interface FinancialScenario {
  name: "Conservative" | "Base Case" | "Optimistic";
  adoptionRate: string;
  timeline: string;
  realization: string;
  annualBenefit: number;
  fiveYearNPV: number;
  description: string;
}

export interface DesiredOutcome {
  outcome: string;
  metric: string;
}

export interface UseCase {
  id: string;
  title: string;
  pattern: string;
  functionalArea: string;
  description: string;
  targetFriction: string;
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
}

export interface Theme {
  name: string;
  useCases: UseCase[];
  frictionPoints: string[];
}

export interface IndustryReport {
  industrySlug: string;
  companyDescription: string;
  totalValueOpportunity: number;
  valueDrivers: ValueDriver[];
  financialScenarios: FinancialScenario[];
  themes: Theme[];
  methodology: {
    framework: string;
    assumptions: string[];
  };
}
