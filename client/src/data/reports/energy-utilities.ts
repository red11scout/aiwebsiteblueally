import type { IndustryReport } from "../report-types";

export const report: IndustryReport = {
  industrySlug: "energy-utilities",
  companyDescription: "A Major Energy Company",
  totalValueOpportunity: 436.5,
  valueDrivers: [
    {
      name: "Revenue Growth",
      amount: 100.1,
      percentage: 23,
      description:
        "AI-driven revenue optimization across energy trading, customer retention, and market positioning",
      color: "#00A3E0",
    },
    {
      name: "Cost Reduction",
      amount: 128.6,
      percentage: 29,
      description:
        "Operational efficiency through automated compliance, predictive maintenance, and workforce optimization",
      color: "#00B34A",
    },
    {
      name: "Cash Flow Acceleration",
      amount: 57.6,
      percentage: 13,
      description:
        "Faster settlement cycles, reduced working capital needs, and accelerated billing through AI automation",
      color: "#003B73",
    },
    {
      name: "Risk Mitigation",
      amount: 150.2,
      percentage: 34,
      description:
        "Reduced regulatory penalties, equipment failure costs, and market exposure through AI-powered monitoring",
      color: "#FF6B35",
    },
  ],
  financialScenarios: [
    {
      name: "Conservative",
      adoptionRate: "70%",
      timeline: "18 months",
      realization: "60%",
      annualBenefit: 261.9,
      fiveYearNPV: 490.3,
      description:
        "Conservative scenario with phased rollout, limited to highest-confidence use cases with proven ROI patterns.",
    },
    {
      name: "Base Case",
      adoptionRate: "85%",
      timeline: "12 months",
      realization: "80%",
      annualBenefit: 436.5,
      fiveYearNPV: 1090,
      description:
        "Recommended scenario balancing ambitious adoption targets with realistic implementation timelines across all five strategic themes.",
    },
    {
      name: "Optimistic",
      adoptionRate: "95%",
      timeline: "9 months",
      realization: "95%",
      annualBenefit: 567.4,
      fiveYearNPV: 1700,
      description:
        "Aggressive scenario assuming rapid enterprise-wide adoption, strong executive sponsorship, and accelerated change management.",
    },
  ],
  themes: [
    {
      name: "Grid Optimization & Real-Time Dispatch",
      frictionPoints: [
        "Manual unit commitment decisions lag market conditions by 15-30 minutes",
        "Current forecasting models have 15-20% error rates, causing excess reserve requirements",
      ],
      useCases: [
        {
          id: "UC-01",
          title: "Real-Time Economic Dispatch Optimizer",
          pattern: "ReAct Loop",
          functionalArea: "Operations",
          description:
            "AI agent that continuously optimizes power generation dispatch decisions across a 32.4GW fleet by analyzing real-time market prices, weather forecasts, and unit availability",
          targetFriction:
            "Manual unit commitment decisions lag market conditions by 15-30 minutes",
          capabilities: [
            "Data Analysis",
            "Workflow Automation",
            "Agentic Pattern Analysis",
          ],
          agenticPattern: {
            primary: "ReAct Loop",
            alternative: "Tool Use",
            rationale:
              "Requires iterative observation-reasoning-action cycles to continuously adapt dispatch decisions to changing market and grid conditions",
          },
          epochClassification: ["Operational"],
          desiredOutcomes: [
            {
              outcome:
                "Increase dispatch optimization rate from 88% to 96% in 18 months",
              metric: "$23.2M annual savings",
            },
            {
              outcome: "Reduce real-time curtailment losses by 40%",
              metric: "Curtailment reduction percentage",
            },
            {
              outcome: "Improve renewable integration factor by 25%",
              metric: "Renewable integration rate",
            },
          ],
          dataTypes: ["Structured", "Real-time"],
          integrations: [
            "Grid SCADA System",
            "Market Exchange Platform",
            "Weather Service API",
            "Unit Commitment System",
          ],
          hitlRequirement:
            "Grid operator approves dispatch changes exceeding 500MW threshold",
          valueScore: 9.2,
          readinessScore: 7.8,
          timeToValue: 8,
          annualValue: 55.8,
          priorityTier: "Champion",
        },
        {
          id: "UC-02",
          title: "Adaptive Renewable Forecasting Engine",
          pattern: "Tool Use",
          functionalArea: "Operations",
          description:
            "ML-powered forecasting system that predicts renewable output across wind and solar portfolios with adaptive model retraining",
          targetFriction:
            "Current forecasting models have 15-20% error rates, causing excess reserve requirements",
          capabilities: ["Data Analysis", "Agentic Pattern Analysis"],
          agenticPattern: {
            primary: "Tool Use",
            alternative: "Reflection",
            rationale:
              "Orchestrates multiple forecasting models and data APIs to synthesize accurate renewable output predictions",
          },
          epochClassification: ["Operational"],
          desiredOutcomes: [
            {
              outcome: "Reduce forecast error from 18% to 8% (MAPE)",
              metric: "Mean Absolute Percentage Error",
            },
            {
              outcome:
                "Save $9.7M annually in reduced reserve margin costs",
              metric: "$9.7M annual savings",
            },
            {
              outcome: "Enable 15% more renewable dispatch",
              metric: "Renewable dispatch increase percentage",
            },
          ],
          dataTypes: ["Structured", "Real-time", "Semi-structured"],
          integrations: [
            "Weather Data Service",
            "Satellite Imagery API",
            "SCADA System",
            "Energy Market Platform",
          ],
          hitlRequirement:
            "Meteorologist validates forecast during extreme weather events",
          valueScore: 8.1,
          readinessScore: 7.2,
          timeToValue: 7,
          annualValue: 32.3,
          priorityTier: "Champion",
        },
      ],
    },
    {
      name: "Nuclear Fleet Reliability & Performance",
      frictionPoints: [
        "Current vibration analysis and thermal monitoring covers only 35% of critical components",
        "Data scientists spend 70% of time on manual feature engineering from 50,400+ sensor streams",
      ],
      useCases: [
        {
          id: "UC-03",
          title: "Nuclear Equipment Health Monitor",
          pattern: "Orchestrator-Workers",
          functionalArea: "Operations",
          description:
            "Multi-agent system monitoring sensor data across reactor fleet, detecting anomalies and predicting component failures",
          targetFriction:
            "Current vibration analysis and thermal monitoring covers only 35% of critical components",
          capabilities: [
            "Data Analysis",
            "Workflow Automation",
            "Agentic Pattern Analysis",
          ],
          agenticPattern: {
            primary: "Orchestrator-Workers",
            alternative: "ReAct Loop",
            rationale:
              "Coordinator dispatches specialized analysis agents per system to monitor diverse equipment types in parallel",
          },
          epochClassification: ["Operational", "Human-centric"],
          desiredOutcomes: [
            {
              outcome:
                "Expand predictive coverage from 35% to 85% of critical components",
              metric: "Component coverage percentage",
            },
            {
              outcome: "Reduce unplanned outages by 45%",
              metric: "$38.7M annual savings",
            },
            {
              outcome: "Extend mean time between failures by 30%",
              metric: "MTBF improvement percentage",
            },
          ],
          dataTypes: ["Structured", "Real-time", "Semi-structured"],
          integrations: [
            "Vibration Monitoring System",
            "Thermal Imaging Platform",
            "Equipment Database",
            "Maintenance Management System",
          ],
          hitlRequirement:
            "Plant engineer approves maintenance work orders generated by the system",
          valueScore: 9.5,
          readinessScore: 6.4,
          timeToValue: 6,
          annualValue: 62.1,
          priorityTier: "Strategic Bet",
        },
        {
          id: "UC-04",
          title: "Automated Sensor Feature Engineering",
          pattern: "Generator-Critic",
          functionalArea: "Operations",
          description:
            "AI system that automatically discovers and engineers predictive features from raw sensor streams",
          targetFriction:
            "Data scientists spend 70% of time on manual feature engineering from 50,400+ sensor streams",
          capabilities: [
            "Data Analysis",
            "Coding Assistance",
            "Agentic Pattern Analysis",
          ],
          agenticPattern: {
            primary: "Generator-Critic",
            alternative: "Planning",
            rationale:
              "Generates candidate features then evaluates their predictive power through a critic loop to surface the most impactful signals",
          },
          epochClassification: ["Operational"],
          desiredOutcomes: [
            {
              outcome: "Reduce feature engineering time by 80%",
              metric: "Time reduction percentage",
            },
            {
              outcome:
                "Discover 3x more predictive features per model iteration",
              metric: "Feature discovery multiplier",
            },
            {
              outcome: "Improve early warning detection rate by 35%",
              metric: "Detection rate improvement percentage",
            },
          ],
          dataTypes: ["Structured", "Real-time"],
          integrations: [
            "Sensor Data Lake",
            "ML Platform",
            "Feature Store",
            "Model Registry",
          ],
          hitlRequirement:
            "Data scientist validates generated features before production deployment",
          valueScore: 7.3,
          readinessScore: 5.8,
          timeToValue: 5,
          annualValue: 18.7,
          priorityTier: "Strategic Bet",
        },
      ],
    },
    {
      name: "Regulatory Compliance Automation",
      frictionPoints: [
        "Each reactor maintains 14,000+ controlled documents; manual updates take 28,200 hours annually",
        "Compliance team consumes 592K hours annually on documentation across the fleet",
      ],
      useCases: [
        {
          id: "UC-05",
          title: "Intelligent Procedure Update Generator",
          pattern: "Prompt Chaining",
          functionalArea: "Legal & Compliance",
          description:
            "AI system that monitors regulatory changes and automatically generates updated operating procedures",
          targetFriction:
            "Each reactor maintains 14,000+ controlled documents; manual updates take 28,200 hours annually",
          capabilities: [
            "Content Creation",
            "Research & Information Retrieval",
            "Agentic Pattern Analysis",
          ],
          agenticPattern: {
            primary: "Prompt Chaining",
            alternative: "Agent Handoff",
            rationale:
              "Sequential pipeline: regulatory change detection, impact analysis, procedure drafting, and review routing",
          },
          epochClassification: ["Human-centric"],
          desiredOutcomes: [
            {
              outcome:
                "Reduce procedure update cycle from 45 days to 7 days",
              metric: "Cycle time reduction",
            },
            {
              outcome: "Eliminate 85% of manual document review hours",
              metric: "Manual effort reduction percentage",
            },
            {
              outcome: "Ensure 99.9% regulatory change coverage",
              metric: "Coverage rate",
            },
          ],
          dataTypes: ["Unstructured", "Semi-structured"],
          integrations: [
            "Regulatory Database",
            "Document Management System",
            "Compliance Tracking Platform",
            "Change Control System",
          ],
          hitlRequirement:
            "Compliance manager approves all procedure changes before implementation",
          valueScore: 8.4,
          readinessScore: 6.9,
          timeToValue: 7,
          annualValue: 34.2,
          priorityTier: "Champion",
        },
        {
          id: "UC-06",
          title: "Compliance Report Automation Suite",
          pattern: "Planning",
          functionalArea: "Legal & Compliance",
          description:
            "End-to-end automation of regulatory reporting across federal and state requirements",
          targetFriction:
            "Compliance team consumes 592K hours annually on documentation across the fleet",
          capabilities: [
            "Content Creation",
            "Data Analysis",
            "Workflow Automation",
          ],
          agenticPattern: {
            primary: "Planning",
            alternative: "Prompt Chaining",
            rationale:
              "Decomposes complex multi-agency reports into subtasks that can be executed and assembled systematically",
          },
          epochClassification: ["Operational", "Human-centric"],
          desiredOutcomes: [
            {
              outcome: "Automate 75% of routine compliance reports",
              metric: "Automation rate",
            },
            {
              outcome: "Reduce reporting cycle time by 60%",
              metric: "Cycle time reduction percentage",
            },
            {
              outcome:
                "Eliminate manual data reconciliation across 12 regulatory frameworks",
              metric: "Reconciliation automation coverage",
            },
          ],
          dataTypes: ["Structured", "Unstructured", "Semi-structured"],
          integrations: [
            "Compliance Database",
            "Regulatory Filing System",
            "Data Warehouse",
            "Audit Management Platform",
          ],
          hitlRequirement:
            "Compliance officer reviews and signs off on all regulatory filings",
          valueScore: 7.8,
          readinessScore: 7.5,
          timeToValue: 8,
          annualValue: 28.5,
          priorityTier: "Champion",
        },
      ],
    },
    {
      name: "Energy Market Intelligence & Trading Optimization",
      frictionPoints: [
        "Manual curve building introduces 3-5% pricing errors and takes 4 hours daily",
        "Basis risk analysis is performed weekly; market conditions change hourly",
      ],
      useCases: [
        {
          id: "UC-07",
          title: "Continuous Forward Curve Calibration",
          pattern: "Reflection",
          functionalArea: "Finance",
          description:
            "AI system that continuously calibrates energy forward curves by analyzing market signals, weather data, and supply fundamentals",
          targetFriction:
            "Manual curve building introduces 3-5% pricing errors and takes 4 hours daily",
          capabilities: ["Data Analysis", "Agentic Pattern Analysis"],
          agenticPattern: {
            primary: "Reflection",
            alternative: "Tool Use",
            rationale:
              "Iteratively refines curve parameters by evaluating against realized prices to converge on accurate forward curves",
          },
          epochClassification: ["Operational"],
          desiredOutcomes: [
            {
              outcome: "Reduce forward curve error from 4.2% to 1.1%",
              metric: "Curve error rate",
            },
            {
              outcome: "Save $4.8M annually in trading losses",
              metric: "$4.8M annual savings",
            },
            {
              outcome:
                "Enable intraday curve updates vs. daily manual builds",
              metric: "Update frequency improvement",
            },
          ],
          dataTypes: ["Structured", "Real-time"],
          integrations: [
            "Trading Platform",
            "Market Data Feed",
            "Risk Management System",
            "Portfolio Analytics Engine",
          ],
          hitlRequirement:
            "Senior trader approves curve adjustments exceeding 2 standard deviations",
          valueScore: 8.7,
          readinessScore: 8.1,
          timeToValue: 9,
          annualValue: 42.3,
          priorityTier: "Champion",
        },
        {
          id: "UC-08",
          title: "Real-Time Basis Risk Optimizer",
          pattern: "Tool Use",
          functionalArea: "Finance",
          description:
            "AI agent that monitors and optimizes basis risk exposure across geographic and temporal spreads",
          targetFriction:
            "Basis risk analysis is performed weekly; market conditions change hourly",
          capabilities: [
            "Data Analysis",
            "Workflow Automation",
            "Agentic Pattern Analysis",
          ],
          agenticPattern: {
            primary: "Tool Use",
            alternative: "ReAct Loop",
            rationale:
              "Calls multiple market data APIs and risk calculation engines to continuously assess and optimize basis risk positions",
          },
          epochClassification: ["Operational"],
          desiredOutcomes: [
            {
              outcome: "Reduce basis risk exposure by 35%",
              metric: "Risk exposure reduction percentage",
            },
            {
              outcome:
                "Improve hedge effectiveness from 82% to 94%",
              metric: "Hedge effectiveness rate",
            },
            {
              outcome:
                "Generate $6.7M in additional trading profit annually",
              metric: "$6.7M annual profit",
            },
          ],
          dataTypes: ["Structured", "Real-time"],
          integrations: [
            "Energy Trading Risk Management System",
            "Market Data Service",
            "Position Management System",
            "Credit Risk Engine",
          ],
          hitlRequirement:
            "Risk manager approves hedge adjustments exceeding $10M notional",
          valueScore: 7.9,
          readinessScore: 7.6,
          timeToValue: 8,
          annualValue: 35.6,
          priorityTier: "Quick Win",
        },
      ],
    },
    {
      name: "Customer Analytics & Demand Forecasting",
      frictionPoints: [
        "Static segmentation uses 47 rate classes; actual usage patterns span 200+ behavioral clusters",
        "Current churn detection happens 60-90 days after behavioral signals; retention offers are generic",
      ],
      useCases: [
        {
          id: "UC-09",
          title: "Commercial Load Segmentation Engine",
          pattern: "Planning",
          functionalArea: "Customer Service",
          description:
            "AI system that performs dynamic customer segmentation based on load profiles, usage patterns, and behavioral signals across 1.2M accounts",
          targetFriction:
            "Static segmentation uses 47 rate classes; actual usage patterns span 200+ behavioral clusters",
          capabilities: [
            "Data Analysis",
            "Conversational Interfaces",
            "Agentic Pattern Analysis",
          ],
          agenticPattern: {
            primary: "Planning",
            alternative: "Orchestrator-Workers",
            rationale:
              "Orchestrates multi-step segmentation: data collection, clustering, profiling, and offering design",
          },
          epochClassification: ["Human-centric"],
          desiredOutcomes: [
            {
              outcome:
                "Increase commercial customer retention by 12%",
              metric: "Retention rate improvement",
            },
            {
              outcome: "Generate $4.2M in cross-sell revenue",
              metric: "$4.2M annual cross-sell revenue",
            },
            {
              outcome: "Reduce customer acquisition cost by 25%",
              metric: "CAC reduction percentage",
            },
          ],
          dataTypes: ["Structured", "Semi-structured"],
          integrations: [
            "Customer Information System",
            "Billing Platform",
            "CRM",
            "Load Data Repository",
          ],
          hitlRequirement:
            "Marketing manager reviews and approves new segment-specific offers",
          valueScore: 6.8,
          readinessScore: 8.3,
          timeToValue: 9,
          annualValue: 21.4,
          priorityTier: "Quick Win",
        },
        {
          id: "UC-10",
          title: "Predictive Churn Prevention System",
          pattern: "Agent Handoff",
          functionalArea: "Customer Service",
          description:
            "Multi-stage AI system that identifies at-risk customers, generates personalized retention strategies, and routes to appropriate teams",
          targetFriction:
            "Current churn detection happens 60-90 days after behavioral signals; retention offers are generic",
          capabilities: [
            "Data Analysis",
            "Conversational Interfaces",
            "Workflow Automation",
          ],
          agenticPattern: {
            primary: "Agent Handoff",
            alternative: "Planning",
            rationale:
              "Detection agent hands off to analysis agent, then to retention strategy agent, and finally routes to human teams",
          },
          epochClassification: ["Human-centric"],
          desiredOutcomes: [
            {
              outcome:
                "Reduce churn rate by 40% (from 8.2% to 4.9%)",
              metric: "Churn rate reduction",
            },
            {
              outcome:
                "Improve retention offer acceptance by 55%",
              metric: "Offer acceptance rate improvement",
            },
            {
              outcome:
                "Save $2.9M annually in customer acquisition costs",
              metric: "$2.9M annual savings",
            },
          ],
          dataTypes: ["Structured", "Semi-structured", "Unstructured"],
          integrations: [
            "CRM",
            "Customer Portal",
            "Contact Center Platform",
            "Billing System",
          ],
          hitlRequirement:
            "Account manager approves high-value retention offers exceeding $50K",
          valueScore: 6.2,
          readinessScore: 7.9,
          timeToValue: 8,
          annualValue: 15.8,
          priorityTier: "Quick Win",
        },
      ],
    },
  ],
  methodology: {
    framework:
      "BlueAlly's 7-Step AI Value Methodology \u2014 a systematic approach that transforms business friction into quantified AI value through rigorous financial modeling and readiness assessment.",
    assumptions: [
      "Financial projections use a 10% discount rate for NPV calculations",
      "Value estimates are based on industry benchmarks adjusted for organizational maturity",
      "Implementation timelines assume dedicated cross-functional teams",
      "Adoption rates reflect historical patterns from similar enterprise deployments",
      "All values are annual run-rate projections at full operational capacity",
    ],
  },
};
