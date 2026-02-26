/**
 * Industry configuration — single source of truth.
 * Update this array to add/remove/reorder industries.
 * Report URLs point to shared reports on workshop.movefasterwithai.com.
 */

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  description: string;
  reportUrl: string;
  emailHook: string;
  painPoints: string[];
}

export const industries: Industry[] = [
  {
    slug: "energy",
    name: "Energy",
    icon: "Zap",
    description: "Oil & gas, power generation, renewables, and energy trading",
    reportUrl: "https://workshop.movefasterwithai.com/shared/LOowkTQM1S",
    emailHook: "Energy companies waste 30% of operational budgets on manual pipeline monitoring and compliance documentation.",
    painPoints: [
      "Manual SCADA data analysis delays outage response by hours",
      "Regulatory compliance reporting consumes 40% of engineering time",
      "Predictive maintenance models rely on 20% of available sensor data",
    ],
  },
  {
    slug: "utilities",
    name: "Utilities",
    icon: "PlugZap",
    description: "Electric, water, gas utilities and grid infrastructure",
    reportUrl: "",
    emailHook: "Utility providers lose $2.3B annually to unplanned outages that AI-driven predictive maintenance can prevent.",
    painPoints: [
      "Outage prediction relies on reactive threshold alerts, not pattern analysis",
      "Customer service reps manually search 15+ systems per call",
      "Grid load forecasting uses only structured meter data, ignoring weather and usage patterns",
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    description: "General contractors, specialty trades, and construction management",
    reportUrl: "",
    emailHook: "Construction projects run 80% over budget on average — AI-driven scope and risk analysis cuts overruns by 35%.",
    painPoints: [
      "Bid estimation relies on tribal knowledge and spreadsheet templates",
      "Safety incident reports are filed but never analyzed for patterns",
      "Subcontractor coordination wastes 4+ hours/day per project manager",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    description: "Discrete and process manufacturing, industrial automation",
    reportUrl: "",
    emailHook: "Manufacturers leave $1.3M per production line on the table annually by not applying AI to quality inspection and yield optimization.",
    painPoints: [
      "Quality control relies on manual visual inspection with 15-30% miss rates",
      "Production scheduling ignores real-time machine health and supply chain signals",
      "Maintenance teams respond to breakdowns instead of predicting them",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: "ShoppingCart",
    description: "E-commerce, brick-and-mortar, consumer packaged goods",
    reportUrl: "",
    emailHook: "Retailers using AI-driven demand forecasting reduce inventory waste by 25% while cutting stockouts in half.",
    painPoints: [
      "Demand forecasting relies on last year's sales, ignoring social trends and weather",
      "Customer service teams handle 80% repetitive queries that AI could resolve instantly",
      "Pricing decisions lag competitor changes by days or weeks",
    ],
  },
  {
    slug: "transportation",
    name: "Transportation",
    icon: "Truck",
    description: "Logistics, shipping, freight, and fleet management",
    reportUrl: "",
    emailHook: "Transportation companies waste 18% of fuel costs on suboptimal routing that AI-powered logistics can eliminate.",
    painPoints: [
      "Route optimization uses static rules, not real-time traffic and delivery windows",
      "Driver compliance documentation is manual and error-prone",
      "Freight pricing is reactive — AI can predict market rates 2 weeks ahead",
    ],
  },
  {
    slug: "information",
    name: "Information",
    icon: "Monitor",
    description: "Technology, software, telecom, and media services",
    reportUrl: "",
    emailHook: "Tech companies spend 30% of engineering time on code review and documentation that AI agents can handle autonomously.",
    painPoints: [
      "Developer productivity is bottlenecked by context switching across tools",
      "Customer support tickets require manual triage across 10+ product lines",
      "Technical documentation is perpetually outdated and incomplete",
    ],
  },
  {
    slug: "finance-insurance",
    name: "Finance & Insurance",
    icon: "Landmark",
    description: "Banking, insurance, investment management, and fintech",
    reportUrl: "",
    emailHook: "Financial institutions process 80% of loan applications manually — AI-driven underwriting reduces decision time from days to minutes.",
    painPoints: [
      "Fraud detection rules miss 40% of novel fraud patterns",
      "Claims processing takes 15+ days with manual document review",
      "Regulatory reporting consumes entire compliance teams for weeks each quarter",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building2",
    description: "Commercial and residential real estate, property management",
    reportUrl: "",
    emailHook: "Property managers spend 60% of their time on tenant communications and maintenance coordination that AI can automate.",
    painPoints: [
      "Market analysis relies on stale comps instead of real-time market signals",
      "Lease abstraction and due diligence is a manual, multi-week process",
      "Tenant screening processes miss patterns visible in unstructured data",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    description: "Consulting, legal, accounting, and advisory firms",
    reportUrl: "",
    emailHook: "Professional services firms lose 30% of billable hours to research, knowledge retrieval, and proposal drafting that AI excels at.",
    painPoints: [
      "Proposal generation takes 40+ hours of partner time per engagement",
      "Knowledge management systems are graveyards — nobody searches them",
      "Client deliverable quality varies wildly between teams and offices",
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    description: "Higher education, K-12, EdTech, and research institutions",
    reportUrl: "https://workshop.movefasterwithai.com/shared/Hsl63WfQz9",
    emailHook: "Educational institutions spend 45% of administrative budgets on manual processes that AI can streamline or eliminate.",
    painPoints: [
      "Student enrollment and advising processes rely on manual case-by-case review",
      "Research grant applications duplicate effort across departments",
      "Institutional knowledge is locked in retiring faculty and staff",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "Stethoscope",
    description: "Hospitals, health systems, biotech, and life sciences",
    reportUrl: "",
    emailHook: "Clinicians spend 4.5 hours per day on documentation — AI-powered clinical summarization reduces this by 70%.",
    painPoints: [
      "Clinical documentation consumes more time than patient care",
      "Prior authorization requests take 14+ days with manual processing",
      "Medical research synthesis requires weeks of manual literature review",
    ],
  },
  {
    slug: "accommodation-food",
    name: "Accommodation & Food Service",
    icon: "UtensilsCrossed",
    description: "Hotels, restaurants, food service, and hospitality",
    reportUrl: "",
    emailHook: "Hospitality businesses lose 25% of potential revenue to inefficient demand pricing and staff scheduling.",
    painPoints: [
      "Revenue management relies on historical averages, not real-time demand signals",
      "Staff scheduling is a weekly manual puzzle that never accounts for actual traffic patterns",
      "Guest feedback is collected but rarely analyzed for actionable patterns",
    ],
  },
  {
    slug: "public-administration",
    name: "Public Administration",
    icon: "Shield",
    description: "Federal, state, and local government agencies",
    reportUrl: "",
    emailHook: "Government agencies process 10x more constituent requests than their staff can handle — AI triage and response can close the gap.",
    painPoints: [
      "Constituent inquiries wait weeks for responses that AI could draft in seconds",
      "Policy impact analysis is done manually across thousands of pages of regulation",
      "Inter-agency data sharing is blocked by incompatible systems and formats",
    ],
  },
];

/** Lookup by slug for route params */
export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
