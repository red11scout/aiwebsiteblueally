export interface IndustryIndex {
  slug: string;
  name: string;
  icon: string;
  teaserValue: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  icon: string;
  totalValueOpportunity: string;
  frustrationHook: string;
  ogImage: string;

  lifecycle: LifecycleStage[];
  useCases: UseCaseDisplay[];

  calculatorMultiplier: number;
  testimonial?: Testimonial;
}

export interface LifecycleStage {
  name: string;
  frictionPoints: FrictionPointDisplay[];
}

export interface FrictionPointDisplay {
  title: string;
  costImpact: string;
  aiOpportunity: string;
}

export interface UseCaseDisplay {
  id: string;
  name: string;
  description: string;
  category: "champion" | "quick-win" | "strategic-bet" | "defer";
  readiness: number;
  annualValue: number;
  timeToProduction: string;
  dependencies: string[];
  dataRequirements: string[];
}

export interface Testimonial {
  quote: string;
  attribution: string;
  company: string;
}

export interface LeadFormData {
  intent: string;
  companyName: string;
  revenueRange: string;
  industry: string;
  email: string;
  phone?: string;
}

export interface DrawerState {
  isOpen: boolean;
  industry?: string;
  source?: string;
}
