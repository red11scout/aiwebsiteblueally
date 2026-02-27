import type { IndustryReport } from "../report-types";

export const report: IndustryReport = {
  "industrySlug": "real-estate",
  "companyDescription": "A Major Office REIT & Commercial Real Estate Company",
  "companyOverview": "The organization generates $3.2B in annual revenue as the largest publicly traded office REIT in the United States. The company operates 196 Class A properties totaling 53 million square feet across Boston, Los Angeles, New York, San Francisco, Seattle, and Washington DC. Portfolio occupancy stands at 93% with average lease terms of 8.2 years and weighted average rent of $60 per square foot.\n\nThe company serves 1,400 institutional and corporate tenants across professional services (31% of revenue), technology (27%), financial services (23%), and life sciences (19%) sectors. Tenant retention reaches 72% over the past three fiscal years. Top 25 tenants represent 42% of annual rental income with average tenant size of 37,800 square feet.\n\nLeasing operations face a $18M annual burden from manual proposal preparation and space planning. Asset management teams spend 120,000 hours per year responding to tenant RFPs, coordinating lease renewals, and analyzing competitive market data across 6 metropolitan areas. This workload creates a 19-day average response time on complex tenant requests and diverts senior leasing executives from strategic tenant relationship development. The inefficiency becomes acute during market downcycles when rapid response determines tenant capture rates.\n\nProperty management operations carry a $14M annual burden from work order coordination and vendor management. Engineering teams spend 93,000 hours per year dispatching maintenance requests, tracking service completion, and reconciling invoices across 196 buildings with 847 service contracts. Manual coordination creates a 4.2-day average resolution time for non-emergency work orders and generates $2.3M in annual vendor reconciliation disputes. Delayed maintenance response affects tenant satisfaction scores and renewal probability.\n\nEnergy management and sustainability reporting impose a $9M annual burden on engineering operations. Sustainability teams spend 60,000 hours per year collecting utility data, calculating carbon footprints, and preparing ESG disclosures for 196 properties across 6 regulatory jurisdictions. This manual effort delays carbon reduction initiatives by 6-8 months and limits the company's ability to achieve stated 2030 net-zero commitments. Institutional investors now require property-level ESG metrics for portfolio allocation decisions.\n\nTenant services coordination represents a $6M annual burden across community management functions. Property teams spend 40,000 hours per year fielding service requests, coordinating amenity access, and resolving building access issues. Manual triage creates inconsistent response patterns and limits the company's ability to deliver differentiated tenant experience that justifies premium rents. Flight-to-quality dynamics make experiential differentiation a competitive requirement.\n\nCapital planning and portfolio analysis carry a $5M annual burden on investment decisions. Asset management teams spend 33,000 hours per year evaluating redevelopment opportunities, modeling cash flows, and assessing market conditions across 53 million square feet. Analysis bottlenecks delay investment committee decisions by 45 days on average and limit the company's ability to capitalize on acquisition windows during market dislocations.\n\nFinancial figures derive from 2025 10-K filings and Q4 earnings releases. Operational burden estimates apply industry-standard $150 per hour fully-loaded rates for property management and leasing staff. Data maturity assessed at Level 2 based on disclosed technology investments in building automation systems and enterprise lease administration platforms. Energy consumption data from 2025 ESG Report covering 47.8M square feet of certified properties.",
  "totalValueOpportunity": 52.8,
  "valueDrivers": [
    {
      "name": "Revenue Growth",
      "amount": 26.7,
      "percentage": 51,
      "color": "#00A3E0",
      "description": "AI-powered intelligence and optimization driving revenue through leasing velocity & market responsiveness, property operations excellence, energy optimization & carbon reduction"
    },
    {
      "name": "Cash Flow Acceleration",
      "amount": 13,
      "percentage": 25,
      "color": "#003B73",
      "description": "Working capital optimization and cycle time reduction through AI-driven leasing velocity & market responsiveness, property operations excellence, energy optimization & carbon reduction"
    },
    {
      "name": "Cost Reduction",
      "amount": 9.6,
      "percentage": 18,
      "color": "#00B34A",
      "description": "Operational efficiency through AI-driven automation across leasing velocity & market responsiveness, property operations excellence, energy optimization & carbon reduction"
    },
    {
      "name": "Risk Mitigation",
      "amount": 3.5,
      "percentage": 7,
      "color": "#FF6B35",
      "description": "Predictive monitoring, compliance automation, and risk reduction across leasing velocity & market responsiveness, property operations excellence, energy optimization & carbon reduction"
    }
  ],
  "financialScenarios": [
    {
      "name": "Base Case",
      "multiplier": "×1.0",
      "annualBenefit": 52.8,
      "fiveYearNPV": 134.5
    },
    {
      "name": "Optimistic",
      "multiplier": "×1.3",
      "annualBenefit": 68.6,
      "fiveYearNPV": 208.4
    },
    {
      "name": "Conservative",
      "multiplier": "×0.6",
      "annualBenefit": 31.7,
      "fiveYearNPV": 60.7
    }
  ],
  "themes": [
    {
      "id": "ST-01",
      "name": "Leasing Velocity & Market Responsiveness",
      "currentState": "19-day RFP response time; 68% proposal win rate; $847M annual leasing volume",
      "targetState": "8-day RFP response time; 78% proposal win rate; $950M annual leasing volume",
      "useCases": [
        {
          "id": "UC-01",
          "title": "AI-Orchestrated RFP Response Generation",
          "pattern": "Orchestrator-Workers",
          "functionalArea": "Sales",
          "description": "Agentic system drafts RFP responses by orchestrating market research, space configuration, financial modeling, and compliance documentation. Human validation required before client submission for relationship context and strategic positioning decisions.",
          "targetFriction": "Manual RFP response assembly requires 47 hours per proposal across market research, space configuration, financial modeling, and compliance documentation",
          "targetFrictionId": "FP-01",
          "capabilities": [
            "Research & Information Retrieval",
            "Content Creation",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Orchestrator-Workers",
            "alternative": "Prompt Chaining",
            "rationale": "Orchestrator-Workers handles parallel research across market data, property specs, and compliance requirements while coordinating document assembly. Alternative prompt chaining suitable for simpler proposals with linear information flow."
          },
          "epochClassification": [
            "Operational",
            "Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce RFP response time from 19 days to 7 days",
              "metric": ""
            },
            {
              "outcome": "Increase proposal volume capacity by 180%",
              "metric": ""
            },
            {
              "outcome": "Standardize compliance documentation across all responses",
              "metric": ""
            },
            {
              "outcome": "Enable junior brokers to produce senior-quality proposals",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured",
            "unstructured"
          ],
          "integrations": [
            "Yardi Voyager",
            "CoStar Market Analytics",
            "SharePoint Document Library",
            "Salesforce CRM"
          ],
          "hitlRequirement": "Leasing director reviews AI-drafted proposal for strategic positioning, concession structure approval, and relationship nuance before client submission",
          "valueScore": 1.5,
          "readinessScore": 4.7,
          "timeToValue": 6,
          "annualValue": 6.3,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 1.3,
            "revenue": 3.4,
            "riskMitigation": 288,
            "cashFlow": 1.3
          },
          "readinessDimensions": {
            "dataAvailability": 4,
            "technicalInfrastructure": 4,
            "organizationalCapacity": 7,
            "governance": 3
          },
          "priority": {
            "priorityScore": 3.1,
            "recommendedPhase": "Q4",
            "valueScore": 1.5,
            "ttvScore": 0.5
          },
          "probabilityOfSuccess": 0.65,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "RFP Intake & Analysis",
                "description": "Leasing team manually reviews RFP requirements and extracts key criteria for space, timeline, and tenant specifications.",
                "actorType": "human",
                "actorName": "Leasing Manager",
                "duration": "6 hours",
                "isBottleneck": true,
                "systems": [
                  "Email",
                  "Shared Drive"
                ],
                "painPoints": [
                  "Inconsistent requirement extraction",
                  "Delayed response initiation"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Market Research Compilation",
                "description": "Analysts gather comparable property data, market rates, and competitive intelligence across multiple sources.",
                "actorType": "human",
                "actorName": "Market Research Analyst",
                "duration": "12 hours",
                "isBottleneck": true,
                "systems": [
                  "CoStar",
                  "Excel",
                  "Internal Database"
                ],
                "painPoints": [
                  "Time-intensive data gathering",
                  "Data version control issues"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Space Configuration Planning",
                "description": "Space planners create layout options and evaluate fit based on tenant requirements.",
                "actorType": "human",
                "actorName": "Space Planner",
                "duration": "10 hours",
                "isBottleneck": false,
                "systems": [
                  "CAD Software",
                  "Property Database"
                ],
                "painPoints": [
                  "Manual floor plan analysis"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Financial Modeling",
                "description": "Finance team builds custom financial models with lease structures, incentives, and ROI projections.",
                "actorType": "human",
                "actorName": "Financial Analyst",
                "duration": "8 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "Argus"
                ],
                "painPoints": [
                  "Complex scenario modeling"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Compliance Documentation",
                "description": "Legal reviews zoning, building codes, and regulatory requirements for compliance attestation.",
                "actorType": "human",
                "actorName": "Legal Specialist",
                "duration": "5 hours",
                "isBottleneck": false,
                "systems": [
                  "Document Management",
                  "Legal Database"
                ],
                "painPoints": [
                  "Manual compliance verification"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Proposal Assembly & Formatting",
                "description": "Coordinator compiles all sections into branded proposal document with executive summary.",
                "actorType": "human",
                "actorName": "Proposal Coordinator",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Word",
                  "PowerPoint",
                  "InDesign"
                ],
                "painPoints": [
                  "Manual formatting inconsistencies"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Executive Review & Submission",
                "description": "Senior leadership reviews complete proposal for strategic alignment before client submission.",
                "actorType": "human",
                "actorName": "VP of Leasing",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Document Management"
                ],
                "painPoints": [
                  "Late-stage revision cycles"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated RFP Intelligence Extraction",
                "description": "AI agent parses RFP documents and extracts structured requirements, deadlines, and evaluation criteria.",
                "actorType": "ai_agent",
                "actorName": "RFP Intelligence Agent",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Document Management"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "NLP",
                  "Document Understanding",
                  "Information Extraction"
                ]
              },
              {
                "stepNumber": 2,
                "name": "AI-Driven Market Research Assembly",
                "description": "Research agent autonomously retrieves comparable properties, market data, and competitive intelligence from integrated sources.",
                "actorType": "ai_agent",
                "actorName": "Market Research Agent",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "CoStar API",
                  "Internal Database"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Research & Information Retrieval",
                  "Data Aggregation",
                  "Trend Analysis"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Intelligent Space Matching & Configuration",
                "description": "AI evaluates available spaces against requirements and generates optimal configuration recommendations.",
                "actorType": "ai_agent",
                "actorName": "Space Configuration Agent",
                "duration": "20 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Property Database",
                  "CAD Integration"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Constraint Optimization",
                  "Spatial Analysis",
                  "Recommendation Engine"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Automated Financial Modeling & Scenarios",
                "description": "Financial agent generates lease structures, incentive packages, and multiple scenario models based on parameters.",
                "actorType": "ai_agent",
                "actorName": "Financial Modeling Agent",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Financial Models",
                  "Argus API"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Financial Analysis",
                  "Scenario Generation",
                  "Calculation Automation"
                ]
              },
              {
                "stepNumber": 5,
                "name": "AI-Assisted Compliance Verification",
                "description": "Compliance agent checks zoning, codes, and regulations with flagged items routed for human legal review.",
                "actorType": "ai_agent",
                "actorName": "Compliance Agent",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Legal Database",
                  "Regulatory Database"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "augmented",
                "aiCapabilities": [
                  "Regulatory Analysis",
                  "Risk Detection",
                  "Document Verification"
                ]
              },
              {
                "stepNumber": 6,
                "name": "AI-Generated Proposal Assembly",
                "description": "Content agent synthesizes all components into cohesive branded proposal with executive summary and tailored messaging.",
                "actorType": "ai_agent",
                "actorName": "Proposal Generation Agent",
                "duration": "25 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Content Management",
                  "Brand Templates"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Content Creation",
                  "Document Assembly",
                  "Brand Consistency"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Human Strategic Review & Refinement",
                "description": "Leasing leadership reviews AI-generated proposal, makes strategic adjustments, and approves for submission.",
                "actorType": "human",
                "actorName": "VP of Leasing",
                "duration": "1.5 hours",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Document Management"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "augmented",
                "aiCapabilities": [
                  "Collaboration Tools",
                  "Version Control"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$600K/yr",
                "before": "$2.0M/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "4 hours",
                "before": "47 hours",
                "improvement": "91%"
              },
              "qualityImprovement": {
                "after": "85% win rate",
                "before": "68% win rate",
                "improvement": "+25%"
              },
              "throughputIncrease": {
                "after": "500 RFPs/yr",
                "before": "43 RFPs/yr",
                "improvement": "11.6x"
              }
            }
          }
        },
        {
          "id": "UC-02",
          "title": "Predictive Lease Negotiation Intelligence",
          "pattern": "Tool Use",
          "functionalArea": "Sales",
          "description": "AI models tenant behavior patterns to predict win probability and recommend optimal concession structures. Analyzes 8-year lease history, tenant financial health, and competitive positioning to guide negotiation strategy.",
          "targetFriction": "Lease negotiation preparation lacks predictive tenant behavior modeling; brokers rely on instinct for concession structuring and win probability assessment",
          "targetFrictionId": "FP-02",
          "capabilities": [
            "Data Analysis",
            "Research & Information Retrieval"
          ],
          "agenticPattern": {
            "primary": "Tool Use",
            "alternative": "ReAct Loop",
            "rationale": "Tool Use enables systematic querying of lease history, tenant financials, and market comparables to generate win probability scores and optimal concession packages. ReAct Loop viable for exploratory negotiation scenario analysis."
          },
          "epochClassification": [
            "Operational",
            "Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Increase win rate from 68% to 79%",
              "metric": ""
            },
            {
              "outcome": "Reduce average concession package cost by 12%",
              "metric": ""
            },
            {
              "outcome": "Shorten negotiation cycles by 23 days",
              "metric": ""
            },
            {
              "outcome": "Improve revenue quality through optimal term structuring",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured"
          ],
          "integrations": [
            "Yardi Voyager",
            "Dun & Bradstreet",
            "CoStar Market Analytics",
            "Internal Lease Database"
          ],
          "hitlRequirement": "Broker reviews AI-recommended concession package and win probability before presenting terms; retains final pricing authority and relationship judgment",
          "valueScore": 3.44,
          "readinessScore": 4.2,
          "timeToValue": 9,
          "annualValue": 8.4,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 1.1,
            "revenue": 4.6,
            "riskMitigation": 480,
            "cashFlow": 2.2
          },
          "readinessDimensions": {
            "dataAvailability": 3,
            "technicalInfrastructure": 3,
            "organizationalCapacity": 7,
            "governance": 3
          },
          "priority": {
            "priorityScore": 3.82,
            "recommendedPhase": "Q4",
            "valueScore": 3.44,
            "ttvScore": 0.25
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Tenant Profile Review",
                "description": "Broker manually reviews tenant history, credit reports, and past lease terms across disparate systems.",
                "actorType": "human",
                "actorName": "Leasing Broker",
                "duration": "3 hours",
                "isBottleneck": true,
                "systems": [
                  "CRM",
                  "Credit Bureau",
                  "Property Management System"
                ],
                "painPoints": [
                  "Data scattered across multiple systems",
                  "No historical behavior patterns analyzed"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Market Comp Analysis",
                "description": "Broker researches comparable lease deals and market rates manually through databases and broker networks.",
                "actorType": "human",
                "actorName": "Leasing Broker",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "CoStar",
                  "Market Reports",
                  "Email"
                ],
                "painPoints": [
                  "Time-intensive manual research",
                  "Incomplete market intelligence"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Concession Strategy Development",
                "description": "Broker uses gut instinct and experience to determine concession packages without predictive modeling.",
                "actorType": "human",
                "actorName": "Leasing Broker",
                "duration": "2 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Email"
                ],
                "painPoints": [
                  "No data-driven win probability assessment",
                  "Over-concession risk",
                  "Inconsistent strategy quality"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Proposal Preparation",
                "description": "Broker manually drafts lease proposal documents and financial scenarios.",
                "actorType": "human",
                "actorName": "Leasing Broker",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Word",
                  "Excel",
                  "PDF Tools"
                ],
                "painPoints": [
                  "Manual document creation",
                  "Formatting inconsistencies"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Internal Review & Approval",
                "description": "Leasing manager reviews proposal for accuracy and strategic alignment through email exchanges.",
                "actorType": "human",
                "actorName": "Leasing Manager",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Excel"
                ],
                "painPoints": [
                  "Multiple revision cycles",
                  "Delayed feedback loops"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Negotiation Execution",
                "description": "Broker conducts negotiations without real-time insights into optimal concession timing or tenant sensitivity.",
                "actorType": "human",
                "actorName": "Leasing Broker",
                "duration": "5 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Phone",
                  "Meeting Rooms"
                ],
                "painPoints": [
                  "No predictive guidance during live negotiations",
                  "Suboptimal concession timing"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Post-Negotiation Analysis",
                "description": "Broker manually logs deal outcomes with limited structured data for future learning.",
                "actorType": "human",
                "actorName": "Leasing Broker",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "CRM",
                  "Excel"
                ],
                "painPoints": [
                  "Lessons learned not systematized",
                  "No feedback loop for strategy improvement"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "AI Tenant Intelligence Gathering",
                "description": "AI agent aggregates tenant data, credit history, lease patterns, and behavioral signals from all systems.",
                "actorType": "ai_agent",
                "actorName": "Tenant Intelligence AI",
                "duration": "3 minutes",
                "isBottleneck": false,
                "systems": [
                  "CRM",
                  "Credit Bureau",
                  "Property Management System",
                  "Data Warehouse"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Research & Information Retrieval",
                  "Pattern Recognition"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Predictive Behavior Modeling",
                "description": "AI generates tenant behavior model with win probability scores, concession sensitivity analysis, and churn risk.",
                "actorType": "ai_agent",
                "actorName": "Predictive Negotiation AI",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Historical Deal Database",
                  "Market Analytics"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Predictive Analytics",
                  "Statistical Modeling"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Automated Market Intelligence",
                "description": "AI retrieves real-time comparable deals, market rates, and competitive positioning with confidence scoring.",
                "actorType": "ai_agent",
                "actorName": "Market Intelligence AI",
                "duration": "2 minutes",
                "isBottleneck": false,
                "systems": [
                  "CoStar API",
                  "Market Data Feeds",
                  "Internal Deal Database"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Research & Information Retrieval",
                  "Data Analysis",
                  "Market Comparison"
                ]
              },
              {
                "stepNumber": 4,
                "name": "AI-Generated Concession Strategy",
                "description": "AI recommends optimal concession packages with win probability, ROI impact, and negotiation sequencing strategies.",
                "actorType": "ai_agent",
                "actorName": "Strategy Optimization AI",
                "duration": "4 minutes",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Financial Modeling System",
                  "Deal Simulator"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Optimization",
                  "Scenario Modeling"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Broker Strategy Review & Refinement",
                "description": "Broker reviews AI recommendations, adjusts based on relationship factors, and approves final strategy.",
                "actorType": "human",
                "actorName": "Leasing Broker",
                "duration": "45 minutes",
                "isBottleneck": false,
                "systems": [
                  "Negotiation Intelligence Dashboard",
                  "AI Recommendations Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "augmented",
                "aiCapabilities": [
                  "Decision Support",
                  "Explainable AI"
                ]
              },
              {
                "stepNumber": 6,
                "name": "AI-Assisted Negotiation Execution",
                "description": "Broker conducts negotiations with real-time AI guidance on concession timing, counteroffer responses, and deal closure probability.",
                "actorType": "human",
                "actorName": "Leasing Broker",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Negotiation Copilot",
                  "Real-Time Analytics Dashboard",
                  "Communication Tools"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "augmented",
                "aiCapabilities": [
                  "Real-Time Decision Support",
                  "Predictive Analytics",
                  "Natural Language Processing"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Automated Learning & Optimization",
                "description": "AI captures deal outcomes, analyzes strategy effectiveness, and updates models for continuous improvement.",
                "actorType": "ai_agent",
                "actorName": "Learning & Optimization AI",
                "duration": "1 minute",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Deal Database",
                  "Analytics Engine"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Machine Learning",
                  "Data Analysis",
                  "Continuous Improvement"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$550,000/yr",
                "before": "$1,700,000/yr",
                "improvement": "68%"
              },
              "timeReduction": {
                "after": "3 hours",
                "before": "20 hours",
                "improvement": "85%"
              },
              "qualityImprovement": {
                "after": "81% win rate",
                "before": "62% win rate",
                "improvement": "+31%"
              },
              "throughputIncrease": {
                "after": "285 negotiations/month",
                "before": "45 negotiations/month",
                "improvement": "6.3x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-01",
          "frictionPoint": "Manual RFP response assembly requires 47 hours per proposal across market research, space configuration, financial modeling, and compliance documentation",
          "severity": "High",
          "role": "Sales Representative",
          "estimatedAnnualCost": 2,
          "annualHours": 22667,
          "function": "Sales",
          "subFunction": "Leasing & Tenant Relations",
          "strategicThemeId": "ST-01"
        },
        {
          "id": "FP-02",
          "frictionPoint": "Lease negotiation preparation lacks predictive tenant behavior modeling; brokers rely on instinct for concession structuring and win probability assessment",
          "severity": "Critical",
          "role": "Sales Representative",
          "estimatedAnnualCost": 1.7,
          "annualHours": 18667,
          "function": "Sales",
          "subFunction": "Leasing & Tenant Relations",
          "strategicThemeId": "ST-01"
        }
      ],
      "kpis": [
        {
          "id": "BF-01",
          "kpiName": "RFP Response Time",
          "function": "Sales",
          "subFunction": "Leasing & Tenant Relations",
          "direction": "↓",
          "baselineValue": "19 days",
          "targetValue": "8 days",
          "timeframe": "18 months",
          "strategicThemeId": "ST-01"
        },
        {
          "id": "BF-02",
          "kpiName": "Lease Proposal Win Rate",
          "function": "Sales",
          "subFunction": "Leasing & Tenant Relations",
          "direction": "↑",
          "baselineValue": "68%",
          "targetValue": "78%",
          "timeframe": "24 months",
          "strategicThemeId": "ST-01"
        }
      ]
    },
    {
      "id": "ST-02",
      "name": "Property Operations Excellence",
      "currentState": "4.2-day work order resolution; $158/sq ft operating expense; 82% tenant satisfaction",
      "targetState": "1.8-day work order resolution; $147/sq ft operating expense; 89% tenant satisfaction",
      "useCases": [
        {
          "id": "UC-03",
          "title": "Intelligent Work Order Triage & Routing",
          "pattern": "Semantic Router",
          "functionalArea": "Operations",
          "description": "Real-time classification system analyzes work order language, historical resolution patterns, and building system data to assign urgency and route to optimal technician. Escalates life-safety issues immediately while batch-routing routine maintenance.",
          "targetFriction": "Work order triage consumes 28 hours daily across 47 properties; engineers manually classify urgency and route tickets without pattern recognition",
          "targetFrictionId": "FP-03",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Semantic Router",
            "alternative": "ReAct Loop",
            "rationale": "Semantic Router classifies work order urgency and routes to appropriate vendor/technician based on historical resolution patterns. ReAct Loop alternative enables more complex diagnostic reasoning for ambiguous requests."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce resolution time from 4.2 days to 2.8 days",
              "metric": ""
            },
            {
              "outcome": "Decrease emergency misclassification rate by 67%",
              "metric": ""
            },
            {
              "outcome": "Optimize technician utilization through intelligent batching",
              "metric": ""
            },
            {
              "outcome": "Enable proactive maintenance through pattern recognition",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "unstructured",
            "real_time"
          ],
          "integrations": [
            "Corrigo Work Order System",
            "Building Automation System",
            "Technician Mobile App",
            "Yardi Voyager"
          ],
          "hitlRequirement": "Chief engineer reviews AI escalation decisions for life-safety issues; validates routing logic for complex multi-system failures before dispatch",
          "valueScore": 1.41,
          "readinessScore": 4.9,
          "timeToValue": 6,
          "annualValue": 4.6,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 885,
            "revenue": 2.3,
            "riskMitigation": 540,
            "cashFlow": 894
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 4,
            "organizationalCapacity": 6,
            "governance": 4
          },
          "priority": {
            "priorityScore": 3.16,
            "recommendedPhase": "Q4",
            "valueScore": 1.41,
            "ttvScore": 0.5
          },
          "probabilityOfSuccess": 0.7,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Work Order Intake",
                "description": "Facilities staff manually receive work orders via email, phone, and facility management system across 47 properties.",
                "actorType": "human",
                "actorName": "Facilities Coordinator",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Phone System",
                  "CMMS"
                ],
                "painPoints": [
                  "Multiple intake channels create confusion",
                  "Incomplete work order details"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Manual Classification",
                "description": "Engineers read each work order and manually classify urgency, category, and required skills without historical data.",
                "actorType": "human",
                "actorName": "Maintenance Engineer",
                "duration": "8 hours",
                "isBottleneck": true,
                "systems": [
                  "CMMS",
                  "Spreadsheets"
                ],
                "painPoints": [
                  "No pattern recognition from past tickets",
                  "Inconsistent urgency classification",
                  "Time-consuming manual review"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Priority Assessment",
                "description": "Operations manager reviews classifications and manually adjusts priorities based on business impact and availability.",
                "actorType": "human",
                "actorName": "Operations Manager",
                "duration": "5 hours",
                "isBottleneck": false,
                "systems": [
                  "CMMS",
                  "Email"
                ],
                "painPoints": [
                  "Subjective priority decisions",
                  "Delays in high-priority identification"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Technician Assignment",
                "description": "Dispatchers manually match work orders to technicians based on location, skills, and availability across properties.",
                "actorType": "human",
                "actorName": "Dispatch Coordinator",
                "duration": "7 hours",
                "isBottleneck": true,
                "systems": [
                  "CMMS",
                  "Scheduling Software",
                  "Phone"
                ],
                "painPoints": [
                  "Inefficient routing across 47 properties",
                  "Suboptimal technician utilization",
                  "Manual schedule coordination"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Work Order Dispatch",
                "description": "Coordinators contact assigned technicians and provide work order details with manual instructions.",
                "actorType": "human",
                "actorName": "Facilities Coordinator",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Phone",
                  "Email",
                  "CMMS"
                ],
                "painPoints": [
                  "Communication delays",
                  "Incomplete information transfer"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Documentation",
                "description": "Staff manually log all triage decisions and routing assignments into facility management system for tracking.",
                "actorType": "human",
                "actorName": "Administrative Staff",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "CMMS",
                  "Spreadsheets"
                ],
                "painPoints": [
                  "Duplicate data entry",
                  "Documentation errors"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Work Order Intake",
                "description": "AI agent consolidates work orders from all channels into unified system with automatic parsing and standardization.",
                "actorType": "ai_agent",
                "actorName": "Intake AI Agent",
                "duration": "2 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Orchestration Platform",
                  "CMMS",
                  "API Gateway"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "NLP",
                  "Data Extraction",
                  "System Integration"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Intelligent Classification",
                "description": "ML model analyzes work order content and classifies urgency, category, and required skills using historical pattern recognition.",
                "actorType": "ai_agent",
                "actorName": "Classification AI Agent",
                "duration": "1 minute",
                "isBottleneck": false,
                "systems": [
                  "ML Classification Engine",
                  "Historical Data Lake",
                  "CMMS"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Machine Learning",
                  "Pattern Recognition",
                  "Predictive Analytics"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Human Priority Review",
                "description": "Operations manager reviews AI-recommended priorities for critical or high-value work orders only, approves or adjusts.",
                "actorType": "human",
                "actorName": "Operations Manager",
                "duration": "45 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Dashboard",
                  "CMMS"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Decision Support",
                  "Recommendation Engine"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Optimized Routing",
                "description": "AI agent performs intelligent routing considering technician skills, location proximity, workload, and historical completion times.",
                "actorType": "ai_agent",
                "actorName": "Routing AI Agent",
                "duration": "3 minutes",
                "isBottleneck": false,
                "systems": [
                  "Route Optimization Engine",
                  "Resource Management System",
                  "CMMS"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Optimization Algorithms",
                  "Resource Allocation",
                  "Geospatial Analysis"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Automated Dispatch",
                "description": "System automatically notifies technicians via mobile app with complete work order details and optimized route.",
                "actorType": "ai_agent",
                "actorName": "Dispatch AI Agent",
                "duration": "30 seconds",
                "isBottleneck": false,
                "systems": [
                  "Mobile Workforce App",
                  "Notification Service",
                  "CMMS"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Push Notifications"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Real-Time Analytics",
                "description": "AI system continuously tracks metrics, identifies bottlenecks, and generates insights for process improvement.",
                "actorType": "ai_agent",
                "actorName": "Analytics AI Agent",
                "duration": "Continuous",
                "isBottleneck": false,
                "systems": [
                  "Analytics Platform",
                  "Business Intelligence Tools",
                  "CMMS"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Anomaly Detection",
                  "Predictive Insights"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$0.48M/yr",
                "before": "$1.6M/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "52 minutes/day",
                "before": "28 hours/day",
                "improvement": "97%"
              },
              "qualityImprovement": {
                "after": "94% correct classification",
                "before": "68% correct classification",
                "improvement": "+26%"
              },
              "throughputIncrease": {
                "after": "600 work orders/day",
                "before": "150 work orders/day",
                "improvement": "4x"
              }
            }
          }
        },
        {
          "id": "UC-04",
          "title": "Automated Vendor SLA Compliance Monitoring",
          "pattern": "Tool Use",
          "functionalArea": "Operations",
          "description": "AI monitors 340 vendor contracts by matching invoices against service completion data and SLA terms. Flags billing discrepancies, calculates penalty credits, and generates dispute documentation for contracts team review.",
          "targetFriction": "Vendor contract compliance monitoring spans 340 service agreements with manual invoice matching and SLA verification across disconnected systems",
          "targetFrictionId": "FP-04",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Tool Use",
            "alternative": "Constitutional Guardrail",
            "rationale": "Tool Use systematically queries vendor invoices, service tickets, and contract terms to detect SLA breaches and calculate penalties. Constitutional Guardrail alternative ensures compliance logic adheres to contract language constraints."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Recover $2.1M annually in unbilled SLA penalties",
              "metric": ""
            },
            {
              "outcome": "Reduce operating expense per sq ft by $4",
              "metric": ""
            },
            {
              "outcome": "Automate 87% of invoice verification workload",
              "metric": ""
            },
            {
              "outcome": "Enable proactive vendor performance management",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured"
          ],
          "integrations": [
            "Yardi Voyager",
            "Corrigo Work Order System",
            "Contract Management Database",
            "Vendor Invoice Portal"
          ],
          "hitlRequirement": "Contracts manager approves AI-identified SLA breach claims before vendor dispute initiation; validates penalty calculation methodology quarterly",
          "valueScore": 2.97,
          "readinessScore": 4.8,
          "timeToValue": 8,
          "annualValue": 5.9,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 1.5,
            "revenue": 2.7,
            "riskMitigation": 396,
            "cashFlow": 1.3
          },
          "readinessDimensions": {
            "dataAvailability": 4,
            "technicalInfrastructure": 4,
            "organizationalCapacity": 6,
            "governance": 5
          },
          "priority": {
            "priorityScore": 3.89,
            "recommendedPhase": "Q4",
            "valueScore": 2.97,
            "ttvScore": 0.33
          },
          "probabilityOfSuccess": 0.65,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Vendor Invoice Collection",
                "description": "Manually gather invoices from 340 vendors via email, portal downloads, and paper submissions.",
                "actorType": "human",
                "actorName": "Facilities Coordinator",
                "duration": "4 hours",
                "isBottleneck": true,
                "systems": [
                  "Email",
                  "Vendor Portals",
                  "Shared Drives"
                ],
                "painPoints": [
                  "Inconsistent submission formats",
                  "Missing invoices require follow-up",
                  "No centralized repository"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Contract Terms Lookup",
                "description": "Search through 340 PDF contracts stored across multiple locations to find relevant SLA terms.",
                "actorType": "human",
                "actorName": "Compliance Analyst",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "SharePoint",
                  "Network Drives",
                  "Physical Files"
                ],
                "painPoints": [
                  "Time-consuming manual search",
                  "Contracts stored inconsistently",
                  "Version control issues"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Manual Invoice Matching",
                "description": "Cross-reference invoice line items against contract terms and approved service schedules.",
                "actorType": "human",
                "actorName": "Operations Specialist",
                "duration": "6 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Contract PDFs",
                  "ERP System"
                ],
                "painPoints": [
                  "High error rate in manual matching",
                  "Disconnected data sources",
                  "Time-intensive process"
                ]
              },
              {
                "stepNumber": 4,
                "name": "SLA Performance Verification",
                "description": "Manually verify vendor met response times, completion dates, and quality standards per contract.",
                "actorType": "human",
                "actorName": "Facilities Manager",
                "duration": "5 hours",
                "isBottleneck": false,
                "systems": [
                  "Work Order System",
                  "Excel",
                  "Email Archives"
                ],
                "painPoints": [
                  "Incomplete work order data",
                  "Subjective quality assessments",
                  "No automated tracking"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Discrepancy Documentation",
                "description": "Record compliance violations and invoice discrepancies in spreadsheets for vendor follow-up.",
                "actorType": "human",
                "actorName": "Compliance Analyst",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "Email"
                ],
                "painPoints": [
                  "Manual data entry errors",
                  "No audit trail",
                  "Delayed vendor notification"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Vendor Communication & Resolution",
                "description": "Email vendors about discrepancies and negotiate corrections or credits through back-and-forth exchanges.",
                "actorType": "human",
                "actorName": "Facilities Coordinator",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Phone"
                ],
                "painPoints": [
                  "Slow vendor response times",
                  "Lost communication threads",
                  "Inconsistent resolution tracking"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Approval & Payment Processing",
                "description": "Route approved invoices through manual approval workflow and submit to accounts payable.",
                "actorType": "human",
                "actorName": "Operations Manager",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "ERP System"
                ],
                "painPoints": [
                  "Approval bottlenecks",
                  "Manual data re-entry",
                  "Payment delays"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Invoice Ingestion",
                "description": "AI agent automatically extracts invoices from all vendor channels and converts to structured data.",
                "actorType": "ai_agent",
                "actorName": "Document Processing AI",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "Email Integration",
                  "API Connectors",
                  "OCR Engine"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Document OCR",
                  "Data Extraction",
                  "Format Normalization"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Contract Intelligence Retrieval",
                "description": "AI instantly retrieves relevant contract terms, SLAs, and pricing from centralized knowledge base.",
                "actorType": "ai_agent",
                "actorName": "Contract Analysis AI",
                "duration": "10 seconds",
                "isBottleneck": false,
                "systems": [
                  "Contract Management Platform",
                  "Vector Database"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Semantic Search",
                  "NLP",
                  "Document Understanding"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Automated Compliance Matching",
                "description": "AI matches invoice items to contract terms, flags discrepancies, and calculates SLA performance scores.",
                "actorType": "ai_agent",
                "actorName": "Compliance Validation AI",
                "duration": "30 seconds",
                "isBottleneck": false,
                "systems": [
                  "Compliance Platform",
                  "Work Order System Integration"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Pattern Recognition",
                  "Rules Engine"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Exception Review & Validation",
                "description": "Compliance analyst reviews AI-flagged discrepancies and approves recommended actions for complex cases.",
                "actorType": "human",
                "actorName": "Compliance Analyst",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "Compliance Dashboard",
                  "Exception Queue"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "augmented",
                "aiCapabilities": [
                  "Decision Support",
                  "Risk Scoring"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Automated Vendor Notification",
                "description": "AI generates and sends detailed discrepancy reports to vendors with resolution requests and deadlines.",
                "actorType": "ai_agent",
                "actorName": "Communication AI",
                "duration": "2 minutes",
                "isBottleneck": false,
                "systems": [
                  "Email Automation",
                  "Vendor Portal"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "NLP Generation",
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Real-Time Resolution Tracking",
                "description": "AI monitors vendor responses, applies corrections, and escalates unresolved issues automatically.",
                "actorType": "ai_agent",
                "actorName": "Resolution Management AI",
                "duration": "Continuous",
                "isBottleneck": false,
                "systems": [
                  "Vendor Portal",
                  "Compliance Platform",
                  "Alerting System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Event Monitoring",
                  "Smart Routing"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Automated Payment Processing",
                "description": "Validated invoices automatically route through approval workflows and integrate with ERP for payment.",
                "actorType": "ai_agent",
                "actorName": "Payment Automation AI",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "Workflow Engine",
                  "ERP Integration"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "System Integration"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$420,000/yr",
                "before": "$1,400,000/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "1.5 hours per cycle",
                "before": "25 hours per cycle",
                "improvement": "94%"
              },
              "qualityImprovement": {
                "after": "96% accuracy",
                "before": "68% accuracy",
                "improvement": "+28%"
              },
              "throughputIncrease": {
                "after": "340 vendors/week",
                "before": "340 vendors/month",
                "improvement": "4x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-03",
          "frictionPoint": "Work order triage consumes 28 hours daily across 47 properties; engineers manually classify urgency and route tickets without pattern recognition",
          "severity": "High",
          "role": "Business Analyst",
          "estimatedAnnualCost": 1.6,
          "annualHours": 17333,
          "function": "Operations",
          "subFunction": "Facilities Management",
          "strategicThemeId": "ST-02"
        },
        {
          "id": "FP-04",
          "frictionPoint": "Vendor contract compliance monitoring spans 340 service agreements with manual invoice matching and SLA verification across disconnected systems",
          "severity": "High",
          "role": "Business Analyst",
          "estimatedAnnualCost": 1.4,
          "annualHours": 14667,
          "function": "Operations",
          "subFunction": "Facilities Management",
          "strategicThemeId": "ST-02"
        }
      ],
      "kpis": [
        {
          "id": "BF-03",
          "kpiName": "Work Order Resolution Time",
          "function": "Operations",
          "subFunction": "Facilities Management",
          "direction": "↓",
          "baselineValue": "4.2 days",
          "targetValue": "1.8 days",
          "timeframe": "12 months",
          "strategicThemeId": "ST-02"
        },
        {
          "id": "BF-04",
          "kpiName": "Operating Expense per Square Foot",
          "function": "Operations",
          "subFunction": "Facilities Management",
          "direction": "↓",
          "baselineValue": "$158/sq ft",
          "targetValue": "$147/sq ft",
          "timeframe": "24 months",
          "strategicThemeId": "ST-02"
        }
      ]
    },
    {
      "id": "ST-03",
      "name": "Energy Optimization & Carbon Reduction",
      "currentState": "63 kBtu/sq ft EUI; 320K metric tons CO2; $191M annual utility cost",
      "targetState": "54 kBtu/sq ft EUI; 272K metric tons CO2; $175M annual utility cost",
      "useCases": [
        {
          "id": "UC-05",
          "title": "Real-Time Energy Anomaly Detection & Optimization",
          "pattern": "Tool Use",
          "functionalArea": "Operations",
          "description": "Real-time monitoring analyzes 47 building automation systems to detect energy consumption anomalies, predict equipment failures, and recommend optimization actions. Aggregates portfolio-wide performance for retrofit ROI modeling.",
          "targetFriction": "Building automation system data from 47 properties requires manual aggregation; energy anomaly detection depends on facility manager spreadsheet reviews",
          "targetFrictionId": "FP-05",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Tool Use",
            "alternative": "ReAct Loop",
            "rationale": "Tool Use continuously monitors building automation system data streams to detect consumption anomalies and trigger optimization protocols. ReAct Loop viable for complex diagnostic scenarios requiring multi-step reasoning."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce EUI from 63 kBtu/sq ft to 57 kBtu/sq ft",
              "metric": ""
            },
            {
              "outcome": "Detect equipment failures 4 days earlier on average",
              "metric": ""
            },
            {
              "outcome": "Accelerate retrofit ROI analysis by 73%",
              "metric": ""
            },
            {
              "outcome": "Enable predictive maintenance scheduling",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "real_time"
          ],
          "integrations": [
            "Johnson Controls Building Automation",
            "Utility Billing Systems",
            "Yardi Voyager",
            "ENERGY STAR Portfolio Manager"
          ],
          "hitlRequirement": "Energy manager approves AI-recommended HVAC schedule changes and equipment shutdown protocols; validates retrofit investment priorities before capital request",
          "valueScore": 2.25,
          "readinessScore": 5.3,
          "timeToValue": 7,
          "annualValue": 4.1,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 1.5,
            "revenue": 1.8,
            "riskMitigation": 360,
            "cashFlow": 447
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 6,
            "organizationalCapacity": 6,
            "governance": 4
          },
          "priority": {
            "priorityScore": 3.78,
            "recommendedPhase": "Q4",
            "valueScore": 2.25,
            "ttvScore": 0.42
          },
          "probabilityOfSuccess": 0.7,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Manual Data Collection",
                "description": "Facility managers export energy usage data from 47 individual building automation systems into separate files.",
                "actorType": "human",
                "actorName": "Facility Manager",
                "duration": "4 hours",
                "isBottleneck": true,
                "systems": [
                  "Building Automation Systems",
                  "Excel"
                ],
                "painPoints": [
                  "Data scattered across 47 separate systems",
                  "Manual export process",
                  "Time-consuming data gathering"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Data Aggregation",
                "description": "Energy manager consolidates data from 47 properties into master spreadsheet with manual data entry.",
                "actorType": "human",
                "actorName": "Energy Manager",
                "duration": "6 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "CSV Files"
                ],
                "painPoints": [
                  "Manual data entry errors",
                  "Version control issues",
                  "Data inconsistencies across properties"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Spreadsheet Analysis",
                "description": "Energy analyst reviews spreadsheets to identify potential anomalies using basic filters and charts.",
                "actorType": "human",
                "actorName": "Energy Analyst",
                "duration": "8 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel"
                ],
                "painPoints": [
                  "Limited anomaly detection capability",
                  "Analysis delayed by days",
                  "Anomalies often missed"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Anomaly Investigation",
                "description": "Facility teams manually investigate flagged anomalies by visiting sites and checking equipment.",
                "actorType": "human",
                "actorName": "Facility Technician",
                "duration": "16 hours",
                "isBottleneck": false,
                "systems": [
                  "Building Systems",
                  "Maintenance Logs"
                ],
                "painPoints": [
                  "Reactive approach",
                  "Travel time to sites",
                  "False positives waste resources"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Weekly Reporting",
                "description": "Energy manager compiles weekly energy performance reports and recommendations for leadership.",
                "actorType": "human",
                "actorName": "Energy Manager",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "PowerPoint"
                ],
                "painPoints": [
                  "Outdated data by report time",
                  "Limited actionable insights",
                  "No predictive capability"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Corrective Action Planning",
                "description": "Operations team reviews reports and schedules corrective maintenance for identified issues.",
                "actorType": "human",
                "actorName": "Operations Manager",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "CMMS",
                  "Email"
                ],
                "painPoints": [
                  "Delayed response to issues",
                  "Energy waste continues during lag",
                  "Reactive vs proactive"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Data Integration",
                "description": "AI agent continuously ingests real-time energy data from all 47 building automation systems via API.",
                "actorType": "ai_agent",
                "actorName": "Data Integration Agent",
                "duration": "Real-time",
                "isBottleneck": false,
                "systems": [
                  "Building Automation Systems",
                  "Cloud Data Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Data Integration"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Real-Time Anomaly Detection",
                "description": "AI continuously analyzes energy patterns using ML models to detect anomalies across all properties instantly.",
                "actorType": "ai_agent",
                "actorName": "Anomaly Detection Agent",
                "duration": "Real-time",
                "isBottleneck": false,
                "systems": [
                  "AI Analytics Platform",
                  "Machine Learning Models"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Pattern Recognition",
                  "Predictive Analytics"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Automated Alert Prioritization",
                "description": "AI agent scores and prioritizes anomalies by severity, cost impact, and carbon implications.",
                "actorType": "ai_agent",
                "actorName": "Prioritization Agent",
                "duration": "30 seconds",
                "isBottleneck": false,
                "systems": [
                  "AI Analytics Platform",
                  "Alert Management System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Risk Assessment"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Human Review & Approval",
                "description": "Energy manager reviews AI-detected high-priority anomalies and approves recommended corrective actions.",
                "actorType": "human",
                "actorName": "Energy Manager",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Dashboard",
                  "Mobile App"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Decision Support",
                  "Recommendation Engine"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Automated Work Order Creation",
                "description": "AI agent generates and routes work orders to appropriate facility teams based on approved actions.",
                "actorType": "ai_agent",
                "actorName": "Workflow Automation Agent",
                "duration": "2 minutes",
                "isBottleneck": false,
                "systems": [
                  "CMMS",
                  "Workflow Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Task Routing"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Predictive Optimization",
                "description": "AI continuously learns from resolution outcomes to improve detection accuracy and recommend preventive measures.",
                "actorType": "ai_agent",
                "actorName": "Optimization Agent",
                "duration": "Continuous",
                "isBottleneck": false,
                "systems": [
                  "Machine Learning Platform",
                  "Analytics Dashboard"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Machine Learning",
                  "Predictive Analytics",
                  "Continuous Improvement"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Automated Reporting & Insights",
                "description": "AI generates real-time dashboards and reports showing energy performance, savings, and carbon reduction.",
                "actorType": "ai_agent",
                "actorName": "Reporting Agent",
                "duration": "Real-time",
                "isBottleneck": false,
                "systems": [
                  "BI Platform",
                  "Executive Dashboard"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Visualization",
                  "Report Generation",
                  "Natural Language Generation"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$360,000/yr",
                "before": "$1,200,000/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "30 min/week",
                "before": "41 hours/week",
                "improvement": "99%"
              },
              "qualityImprovement": {
                "after": "96% anomalies detected",
                "before": "58% anomalies detected",
                "improvement": "+38%"
              },
              "throughputIncrease": {
                "after": "Real-time detection",
                "before": "Weekly detection cycles",
                "improvement": "24/7 monitoring"
              }
            }
          }
        },
        {
          "id": "UC-06",
          "title": "AI-Compiled ESG Reporting & Disclosure",
          "pattern": "Orchestrator-Workers",
          "functionalArea": "Legal & Compliance",
          "description": "Agentic system compiles ESG reports by extracting data from 73 sources across sustainability metrics, diversity statistics, governance policies, and climate risk assessments. Generates disclosure narratives aligned to GRESB, SASB, and TCFD frameworks.",
          "targetFriction": "ESG report compilation requires 180-day manual data gathering from 73 sources across sustainability, diversity, governance, and climate risk disclosures",
          "targetFrictionId": "FP-06",
          "capabilities": [
            "Research & Information Retrieval",
            "Content Creation",
            "Data Analysis"
          ],
          "agenticPattern": {
            "primary": "Orchestrator-Workers",
            "alternative": "Prompt Chaining",
            "rationale": "Orchestrator-Workers coordinates data extraction from 73 sources across sustainability, diversity, governance domains while generating narrative disclosure sections. Prompt chaining suitable for simpler single-framework reports."
          },
          "epochClassification": [
            "Ethical",
            "Political",
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce report preparation time from 180 days to 60 days",
              "metric": ""
            },
            {
              "outcome": "Improve GRESB rating through comprehensive data coverage",
              "metric": ""
            },
            {
              "outcome": "Enable quarterly ESG updates vs. annual reporting",
              "metric": ""
            },
            {
              "outcome": "Standardize disclosure quality across all frameworks",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured",
            "unstructured"
          ],
          "integrations": [
            "ENERGY STAR Portfolio Manager",
            "Workday HCM",
            "SharePoint ESG Library",
            "Yardi Voyager"
          ],
          "hitlRequirement": "Sustainability director validates all quantitative disclosures and narrative claims before investor distribution; legal counsel reviews governance and litigation sections",
          "valueScore": 1,
          "readinessScore": 5.3,
          "timeToValue": 5,
          "annualValue": 4.5,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 1.1,
            "revenue": 1.4,
            "riskMitigation": 228,
            "cashFlow": 1.8
          },
          "readinessDimensions": {
            "dataAvailability": 4,
            "technicalInfrastructure": 4,
            "organizationalCapacity": 7,
            "governance": 6
          },
          "priority": {
            "priorityScore": 3.15,
            "recommendedPhase": "Q4",
            "valueScore": 1,
            "ttvScore": 0.58
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Initial Data Source Mapping",
                "description": "Compliance team manually identifies and catalogs all 73 data sources across sustainability, diversity, governance, and climate domains.",
                "actorType": "human",
                "actorName": "ESG Compliance Manager",
                "duration": "15 days",
                "isBottleneck": true,
                "systems": [
                  "SharePoint",
                  "Excel",
                  "Email"
                ],
                "painPoints": [
                  "Source list changes quarterly",
                  "No centralized repository",
                  "Manual tracking prone to omissions"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Data Request Distribution",
                "description": "Team sends individual data requests to 73 source owners across departments and subsidiaries.",
                "actorType": "human",
                "actorName": "ESG Data Analyst",
                "duration": "10 days",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "ServiceNow",
                  "Teams"
                ],
                "painPoints": [
                  "Inconsistent response formats",
                  "Follow-up reminders needed",
                  "Lost or delayed requests"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Manual Data Collection & Aggregation",
                "description": "Analysts manually download, format, and consolidate data from 73 sources into master spreadsheets.",
                "actorType": "human",
                "actorName": "ESG Data Team",
                "duration": "60 days",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "PowerBI",
                  "SAP",
                  "Workday",
                  "Custom Databases"
                ],
                "painPoints": [
                  "Data in 40+ formats",
                  "Version control issues",
                  "Manual reconciliation errors",
                  "Missing data requires escalation"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Data Validation & Quality Checks",
                "description": "Team performs manual validation, cross-referencing, and gap analysis on aggregated ESG data.",
                "actorType": "human",
                "actorName": "Senior ESG Analyst",
                "duration": "30 days",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "Python Scripts",
                  "Tableau"
                ],
                "painPoints": [
                  "High error rate due to manual entry",
                  "Inconsistent validation rules",
                  "Time-consuming reconciliation"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Report Drafting & Narrative Creation",
                "description": "Writers manually draft ESG disclosure narratives, charts, and analysis sections from validated data.",
                "actorType": "human",
                "actorName": "ESG Report Writer",
                "duration": "40 days",
                "isBottleneck": false,
                "systems": [
                  "Word",
                  "PowerPoint",
                  "InDesign"
                ],
                "painPoints": [
                  "Repetitive content creation",
                  "Framework compliance checking",
                  "Multiple draft iterations"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Legal & Compliance Review",
                "description": "Legal team reviews draft for regulatory compliance, material disclosures, and risk assessment accuracy.",
                "actorType": "human",
                "actorName": "General Counsel",
                "duration": "20 days",
                "isBottleneck": false,
                "systems": [
                  "DocuSign",
                  "Legal Matter Management"
                ],
                "painPoints": [
                  "Late-stage changes require rework",
                  "Unclear audit trail",
                  "Multiple stakeholder sign-offs"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Final Publication & Filing",
                "description": "Team formats final report for EDGAR/SEC filing and publishes to investor relations portal.",
                "actorType": "human",
                "actorName": "Regulatory Filing Specialist",
                "duration": "5 days",
                "isBottleneck": false,
                "systems": [
                  "EDGAR",
                  "Website CMS",
                  "PDF Tools"
                ],
                "painPoints": [
                  "Manual formatting errors",
                  "Last-minute corrections",
                  "Version control issues"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "AI-Powered Source Discovery & Mapping",
                "description": "AI agent automatically discovers, catalogs, and monitors all 73 ESG data sources with real-time connection validation.",
                "actorType": "ai_agent",
                "actorName": "ESG Data Orchestrator",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Enterprise Data Catalog",
                  "API Gateway",
                  "Data Lineage Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Research & Information Retrieval",
                  "Data Source Discovery",
                  "Metadata Extraction"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Automated Data Extraction & Integration",
                "description": "AI workers extract data from all 73 sources via APIs and connectors, normalizing formats in real-time.",
                "actorType": "ai_agent",
                "actorName": "ESG Data Collection Workers",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "ETL Pipeline",
                  "Data Lake",
                  "Integration Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Format Normalization",
                  "Automated Extraction"
                ]
              },
              {
                "stepNumber": 3,
                "name": "AI Data Validation & Quality Assurance",
                "description": "AI performs anomaly detection, cross-validation, and completeness checks with flagging for human review.",
                "actorType": "ai_agent",
                "actorName": "ESG Validation Engine",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Data Quality Platform",
                  "ML Validation Models"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Anomaly Detection",
                  "Rule-Based Validation"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Human Review of Data Exceptions",
                "description": "ESG analysts review AI-flagged anomalies, approve data corrections, and validate materiality thresholds.",
                "actorType": "human",
                "actorName": "ESG Compliance Manager",
                "duration": "3 days",
                "isBottleneck": false,
                "systems": [
                  "Exception Dashboard",
                  "Workflow Platform"
                ],
                "painPoints": [],
                "isAIEnabled": false,
                "automationLevel": "assisted",
                "aiCapabilities": []
              },
              {
                "stepNumber": 5,
                "name": "AI Report Generation & Narrative Creation",
                "description": "AI generates disclosure narratives, charts, and analysis aligned with GRI, SASB, TCFD frameworks from validated data.",
                "actorType": "ai_agent",
                "actorName": "ESG Content Generator",
                "duration": "6 hours",
                "isBottleneck": false,
                "systems": [
                  "LLM Platform",
                  "Document Assembly",
                  "Visualization Tools"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Content Creation",
                  "NLG",
                  "Framework Compliance Mapping"
                ]
              },
              {
                "stepNumber": 6,
                "name": "AI-Assisted Legal Compliance Check",
                "description": "AI performs initial regulatory compliance scan, materiality assessment, and risk flagging for legal review.",
                "actorType": "ai_agent",
                "actorName": "Compliance Review Assistant",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Legal AI Platform",
                  "Regulatory Database"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Research & Information Retrieval",
                  "Regulatory Matching",
                  "Risk Analysis"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Final Legal Approval & Publication",
                "description": "General Counsel reviews AI-generated report and compliance summary, approves for automated EDGAR filing.",
                "actorType": "human",
                "actorName": "General Counsel",
                "duration": "2 days",
                "isBottleneck": false,
                "systems": [
                  "Document Review Platform",
                  "EDGAR Filing System"
                ],
                "painPoints": [],
                "isAIEnabled": false,
                "automationLevel": "assisted",
                "aiCapabilities": []
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$420,000/yr",
                "before": "$1,500,000/yr",
                "improvement": "72%"
              },
              "timeReduction": {
                "after": "7 days",
                "before": "180 days",
                "improvement": "96%"
              },
              "qualityImprovement": {
                "after": "96% accuracy",
                "before": "68% accuracy",
                "improvement": "+28%"
              },
              "throughputIncrease": {
                "after": "12 reports/yr",
                "before": "2 reports/yr",
                "improvement": "6x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-05",
          "frictionPoint": "Building automation system data from 47 properties requires manual aggregation; energy anomaly detection depends on facility manager spreadsheet reviews",
          "severity": "High",
          "role": "Business Analyst",
          "estimatedAnnualCost": 1.2,
          "annualHours": 12667,
          "function": "Operations",
          "subFunction": "Change Management",
          "strategicThemeId": "ST-03"
        },
        {
          "id": "FP-06",
          "frictionPoint": "ESG report compilation requires 180-day manual data gathering from 73 sources across sustainability, diversity, governance, and climate risk disclosures",
          "severity": "High",
          "role": "Compliance Officer",
          "estimatedAnnualCost": 1.5,
          "annualHours": 14000,
          "function": "Legal & Compliance",
          "subFunction": "Regulatory Filing",
          "strategicThemeId": "ST-03"
        }
      ],
      "kpis": [
        {
          "id": "BF-05",
          "kpiName": "Energy Use Intensity (EUI)",
          "function": "Operations",
          "subFunction": "Change Management",
          "direction": "↓",
          "baselineValue": "63 kBtu/sq ft",
          "targetValue": "54 kBtu/sq ft",
          "timeframe": "36 months",
          "strategicThemeId": "ST-03"
        },
        {
          "id": "BF-06",
          "kpiName": "ESG Report Preparation Time",
          "function": "Legal & Compliance",
          "subFunction": "Regulatory Filing",
          "direction": "↓",
          "baselineValue": "180 days",
          "targetValue": "75 days",
          "timeframe": "18 months",
          "strategicThemeId": "ST-03"
        }
      ]
    },
    {
      "id": "ST-04",
      "name": "Tenant Experience & Retention",
      "currentState": "72% tenant retention; 3.8-day service request resolution; 61 NPS score",
      "targetState": "81% tenant retention; 1.2-day service request resolution; 74 NPS score",
      "useCases": [
        {
          "id": "UC-07",
          "title": "Tenant Retention Propensity Modeling",
          "pattern": "Tool Use",
          "functionalArea": "Customer Service",
          "description": "Predictive model scores tenant renewal likelihood using service request patterns, amenity engagement, payment history, and lease term proximity. Recommends personalized retention actions and optimal renewal offer timing.",
          "targetFriction": "Tenant engagement campaigns lack behavioral segmentation; community managers send uniform communications without propensity modeling for event participation or renewal likelihood",
          "targetFrictionId": "FP-07",
          "capabilities": [
            "Data Analysis",
            "Conversational Interfaces"
          ],
          "agenticPattern": {
            "primary": "Tool Use",
            "alternative": "Generator-Critic",
            "rationale": "Tool Use analyzes tenant behavior signals (service requests, amenity usage, payment patterns) to generate retention risk scores and personalized intervention recommendations. Generator-Critic alternative useful for campaign message optimization."
          },
          "epochClassification": [
            "Operational",
            "Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Increase retention rate from 72% to 81%",
              "metric": ""
            },
            {
              "outcome": "Reduce turnover costs by $4.2M annually",
              "metric": ""
            },
            {
              "outcome": "Improve event participation from 19% to 34%",
              "metric": ""
            },
            {
              "outcome": "Enable proactive intervention 90 days before lease expiration",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured"
          ],
          "integrations": [
            "Yardi Voyager",
            "Corrigo Work Order System",
            "Building Access System",
            "Tenant Portal Analytics"
          ],
          "hitlRequirement": "Community manager reviews AI retention risk scores before initiating outreach; approves personalized concession offers and validates relationship context",
          "valueScore": 10,
          "readinessScore": 4.4,
          "timeToValue": 9,
          "annualValue": 6,
          "priorityTier": "Strategic Bet",
          "benefitBreakdown": {
            "costSavings": 503,
            "revenue": 4.1,
            "riskMitigation": 480,
            "cashFlow": 894
          },
          "readinessDimensions": {
            "dataAvailability": 4,
            "technicalInfrastructure": 3,
            "organizationalCapacity": 6,
            "governance": 4
          },
          "priority": {
            "priorityScore": 7.2,
            "recommendedPhase": "Q3",
            "valueScore": 10,
            "ttvScore": 0.25
          },
          "probabilityOfSuccess": 0.55,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Manual Data Collection",
                "description": "Community managers manually gather tenant interaction data from disparate systems including lease management, maintenance tickets, and amenity bookings.",
                "actorType": "human",
                "actorName": "Community Manager",
                "duration": "4 hours",
                "isBottleneck": true,
                "systems": [
                  "Property Management System",
                  "Maintenance System",
                  "Amenity Booking System"
                ],
                "painPoints": [
                  "Data scattered across multiple systems",
                  "Time-consuming manual extraction",
                  "Incomplete data capture"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Basic Tenant Segmentation",
                "description": "Staff creates simple tenant lists based only on lease expiration dates without behavioral analysis.",
                "actorType": "human",
                "actorName": "Leasing Coordinator",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "Property Management System"
                ],
                "painPoints": [
                  "No behavioral insights",
                  "Generic segmentation only",
                  "Misses engagement patterns"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Uniform Campaign Creation",
                "description": "Marketing team designs one-size-fits-all communications without propensity scoring or personalization.",
                "actorType": "human",
                "actorName": "Marketing Coordinator",
                "duration": "6 hours",
                "isBottleneck": true,
                "systems": [
                  "Email Platform",
                  "Design Tools"
                ],
                "painPoints": [
                  "No personalization",
                  "Generic messaging",
                  "Low engagement rates"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Mass Distribution",
                "description": "Team sends identical messages to all tenants regardless of engagement history or renewal likelihood.",
                "actorType": "human",
                "actorName": "Community Manager",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Email Platform",
                  "SMS System"
                ],
                "painPoints": [
                  "No targeting",
                  "Communication fatigue",
                  "Poor response rates"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Manual Response Tracking",
                "description": "Staff manually tracks tenant responses and event participation in spreadsheets without predictive insights.",
                "actorType": "human",
                "actorName": "Leasing Coordinator",
                "duration": "5 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "Email Platform"
                ],
                "painPoints": [
                  "Reactive rather than predictive",
                  "No early warning signals",
                  "Delayed intervention"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Basic Renewal Outreach",
                "description": "Team initiates renewal conversations based solely on lease dates without risk assessment or propensity modeling.",
                "actorType": "human",
                "actorName": "Community Manager",
                "duration": "8 hours",
                "isBottleneck": false,
                "systems": [
                  "Property Management System",
                  "Phone/Email"
                ],
                "painPoints": [
                  "Late intervention",
                  "Missed at-risk signals",
                  "Lower retention rates"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Data Integration",
                "description": "AI agent continuously aggregates tenant data from all systems into unified behavioral profiles.",
                "actorType": "ai_agent",
                "actorName": "Data Integration AI",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "Property Management System",
                  "Maintenance System",
                  "Amenity Booking System",
                  "Data Warehouse"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "API Integration",
                  "Real-time Aggregation"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Propensity Model Scoring",
                "description": "AI analyzes behavioral patterns to score each tenant's renewal likelihood and event participation propensity.",
                "actorType": "ai_agent",
                "actorName": "Propensity Modeling AI",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "Machine Learning Platform",
                  "Analytics Engine"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Predictive Modeling",
                  "Pattern Recognition",
                  "Risk Scoring"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Intelligent Segmentation",
                "description": "AI creates behavioral micro-segments with personalized engagement recommendations for each tenant cohort.",
                "actorType": "ai_agent",
                "actorName": "Segmentation AI",
                "duration": "20 minutes",
                "isBottleneck": false,
                "systems": [
                  "Analytics Engine",
                  "CRM Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Clustering",
                  "Behavioral Segmentation"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Campaign Strategy Review",
                "description": "Community manager reviews AI-generated segments and campaign recommendations, approving or adjusting targeting strategy.",
                "actorType": "human",
                "actorName": "Community Manager",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "Campaign Dashboard",
                  "Analytics Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Data Analysis",
                  "Recommendation Engine"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Personalized Content Generation",
                "description": "AI generates tailored messages for each segment with personalized offers based on propensity scores and preferences.",
                "actorType": "ai_agent",
                "actorName": "Content Generation AI",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "Marketing Automation",
                  "NLP Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Natural Language Generation",
                  "Personalization",
                  "Conversational Interfaces"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Optimized Campaign Delivery",
                "description": "AI determines optimal send times and channels for each tenant, deploying personalized communications automatically.",
                "actorType": "ai_agent",
                "actorName": "Campaign Orchestration AI",
                "duration": "20 minutes",
                "isBottleneck": false,
                "systems": [
                  "Marketing Automation",
                  "Email Platform",
                  "SMS System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Optimization",
                  "Multi-channel Orchestration",
                  "Timing Analysis"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Proactive Retention Interventions",
                "description": "AI identifies at-risk tenants in real-time and triggers personalized retention workflows with community manager alerts.",
                "actorType": "ai_agent",
                "actorName": "Retention Intelligence AI",
                "duration": "Continuous",
                "isBottleneck": false,
                "systems": [
                  "Predictive Analytics",
                  "Workflow Automation",
                  "Alert System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Early Warning Detection",
                  "Automated Workflows",
                  "Conversational Interfaces"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$156,000/yr",
                "before": "$520,000/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "3 hours per campaign",
                "before": "28 hours per campaign",
                "improvement": "89%"
              },
              "qualityImprovement": {
                "after": "76% engagement rate",
                "before": "48% engagement rate",
                "improvement": "+58%"
              },
              "throughputIncrease": {
                "after": "20 campaigns/month",
                "before": "4 campaigns/month",
                "improvement": "5x"
              }
            }
          }
        },
        {
          "id": "UC-08",
          "title": "Automated Service Feedback Analysis & Action Planning",
          "pattern": "Reflection",
          "functionalArea": "Customer Service",
          "description": "Real-time sentiment analysis extracts themes from service request feedback, survey responses, and tenant communications. Identifies recurring issues, quantifies impact by property, and generates action plans for operations team.",
          "targetFriction": "Service request feedback analysis requires manual survey coding and sentiment extraction; improvement opportunities surface 45 days post-resolution",
          "targetFrictionId": "FP-08",
          "capabilities": [
            "Data Analysis",
            "Content Creation"
          ],
          "agenticPattern": {
            "primary": "Reflection",
            "alternative": "Generator-Critic",
            "rationale": "Reflection enables the AI to analyze sentiment patterns, identify root causes, and iteratively refine improvement recommendations before human review. Generator-Critic alternative separates analysis from validation for higher-stakes decisions."
          },
          "epochClassification": [
            "Operational",
            "Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce issue identification lag from 45 days to 3 days",
              "metric": ""
            },
            {
              "outcome": "Decrease service resolution time from 3.8 days to 2.9 days",
              "metric": ""
            },
            {
              "outcome": "Enable real-time operational adjustments",
              "metric": ""
            },
            {
              "outcome": "Improve tenant satisfaction scores by 18 points",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "unstructured"
          ],
          "integrations": [
            "Corrigo Work Order System",
            "Qualtrics Survey Platform",
            "Tenant Portal",
            "Yardi Voyager"
          ],
          "hitlRequirement": "Operations manager validates AI-identified improvement priorities before resource allocation; reviews tenant communication drafts for relationship sensitivity",
          "valueScore": 6.04,
          "readinessScore": 5.9,
          "timeToValue": 4,
          "annualValue": 2.1,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 365,
            "revenue": 1.1,
            "riskMitigation": 144,
            "cashFlow": 447
          },
          "readinessDimensions": {
            "dataAvailability": 6,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 7,
            "governance": 5
          },
          "priority": {
            "priorityScore": 5.97,
            "recommendedPhase": "Q3",
            "valueScore": 6.04,
            "ttvScore": 0.67
          },
          "probabilityOfSuccess": 0.7,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Collect Feedback",
                "description": "Gather service request feedback surveys from multiple channels into spreadsheets.",
                "actorType": "human",
                "actorName": "Service Coordinator",
                "duration": "8 hours",
                "isBottleneck": false,
                "systems": [
                  "Survey Platform",
                  "Email",
                  "Excel"
                ],
                "painPoints": [
                  "Manual data aggregation from multiple sources"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Manual Survey Coding",
                "description": "Manually review and code each survey response by issue category and sentiment.",
                "actorType": "human",
                "actorName": "Experience Analyst",
                "duration": "80 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Survey Platform"
                ],
                "painPoints": [
                  "Labor-intensive coding process",
                  "Inconsistent categorization",
                  "Subjective sentiment assessment"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Extract Sentiment",
                "description": "Analyze coded responses to extract sentiment trends and satisfaction scores.",
                "actorType": "human",
                "actorName": "Experience Analyst",
                "duration": "24 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "BI Tool"
                ],
                "painPoints": [
                  "Time lag between collection and analysis"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Identify Patterns",
                "description": "Manually identify recurring issues and improvement opportunities from aggregated data.",
                "actorType": "human",
                "actorName": "Service Manager",
                "duration": "16 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "PowerPoint"
                ],
                "painPoints": [
                  "Patterns surface 45 days post-resolution",
                  "Limited ability to detect subtle trends"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Create Report",
                "description": "Compile findings into monthly service quality reports for leadership review.",
                "actorType": "human",
                "actorName": "Service Manager",
                "duration": "12 hours",
                "isBottleneck": false,
                "systems": [
                  "PowerPoint",
                  "Excel"
                ],
                "painPoints": [
                  "Delayed insights prevent proactive intervention"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Develop Action Plans",
                "description": "Create improvement initiatives based on identified patterns and management priorities.",
                "actorType": "human",
                "actorName": "Service Leadership Team",
                "duration": "20 hours",
                "isBottleneck": false,
                "systems": [
                  "Project Management Tool"
                ],
                "painPoints": [
                  "Action plans developed weeks after issues occurred"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Auto-Collect & Normalize",
                "description": "AI agent automatically ingests feedback from all channels and normalizes data structure.",
                "actorType": "ai_agent",
                "actorName": "Feedback Ingestion Agent",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "Survey Platform",
                  "Email API",
                  "CRM"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Integration",
                  "Data Normalization"
                ]
              },
              {
                "stepNumber": 2,
                "name": "AI Sentiment & Categorization",
                "description": "NLP engine automatically codes responses, extracts sentiment, and categorizes issues.",
                "actorType": "ai_agent",
                "actorName": "Sentiment Analysis Agent",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "NLP Engine",
                  "Analytics Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "NLP",
                  "Sentiment Analysis",
                  "Auto-Categorization"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Pattern Detection & Insights",
                "description": "AI identifies recurring themes, emerging issues, and improvement opportunities in real-time.",
                "actorType": "ai_agent",
                "actorName": "Pattern Recognition Agent",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "Analytics Platform",
                  "ML Model"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Pattern Recognition",
                  "Trend Analysis",
                  "Anomaly Detection"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Generate Draft Action Plans",
                "description": "AI creates prioritized action plan recommendations based on impact analysis and historical data.",
                "actorType": "ai_agent",
                "actorName": "Action Planning Agent",
                "duration": "20 minutes",
                "isBottleneck": false,
                "systems": [
                  "Analytics Platform",
                  "Project Management Tool"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Content Creation",
                  "Prioritization",
                  "Impact Analysis"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Human Review & Approval",
                "description": "Service Manager reviews AI-generated insights and action plans, approves or adjusts recommendations.",
                "actorType": "human",
                "actorName": "Service Manager",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Analytics Dashboard",
                  "Project Management Tool"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Decision Support"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Auto-Deploy & Monitor",
                "description": "Approved action plans automatically deployed with task assignments and progress monitoring.",
                "actorType": "ai_agent",
                "actorName": "Deployment & Monitoring Agent",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "Project Management Tool",
                  "Task Management System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Progress Tracking"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$115,000/yr",
                "before": "$340,000/yr",
                "improvement": "66%"
              },
              "timeReduction": {
                "after": "7 days",
                "before": "45 days",
                "improvement": "84%"
              },
              "qualityImprovement": {
                "after": "92% accuracy",
                "before": "68% accuracy",
                "improvement": "+24%"
              },
              "throughputIncrease": {
                "after": "1,500 surveys/mo",
                "before": "150 surveys/mo",
                "improvement": "10x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-07",
          "frictionPoint": "Tenant engagement campaigns lack behavioral segmentation; community managers send uniform communications without propensity modeling for event participation or renewal likelihood",
          "severity": "Medium",
          "role": "Customer Support Specialist",
          "estimatedAnnualCost": 0.52,
          "annualHours": 8000,
          "function": "Customer Service",
          "subFunction": "Tenant Experience & Community Management",
          "strategicThemeId": "ST-04"
        },
        {
          "id": "FP-08",
          "frictionPoint": "Service request feedback analysis requires manual survey coding and sentiment extraction; improvement opportunities surface 45 days post-resolution",
          "severity": "Medium",
          "role": "Customer Support Specialist",
          "estimatedAnnualCost": 0.34,
          "annualHours": 5333,
          "function": "Customer Service",
          "subFunction": "Tenant Experience & Community Management",
          "strategicThemeId": "ST-04"
        }
      ],
      "kpis": [
        {
          "id": "BF-07",
          "kpiName": "Tenant Retention Rate",
          "function": "Customer Service",
          "subFunction": "Tenant Experience & Community Management",
          "direction": "↑",
          "baselineValue": "72%",
          "targetValue": "81%",
          "timeframe": "24 months",
          "strategicThemeId": "ST-04"
        },
        {
          "id": "BF-08",
          "kpiName": "Service Request Resolution Time",
          "function": "Customer Service",
          "subFunction": "Tenant Experience & Community Management",
          "direction": "↓",
          "baselineValue": "3.8 days",
          "targetValue": "1.2 days",
          "timeframe": "12 months",
          "strategicThemeId": "ST-04"
        }
      ]
    },
    {
      "id": "ST-05",
      "name": "Portfolio Intelligence & Capital Allocation",
      "currentState": "45-day investment decision cycle; $340M annual capex; 12% development yield",
      "targetState": "21-day investment decision cycle; $410M annual capex; 14.5% development yield",
      "useCases": [
        {
          "id": "UC-09",
          "title": "AI-Accelerated Investment Committee Memos",
          "pattern": "Orchestrator-Workers",
          "functionalArea": "Finance",
          "description": "Agentic system drafts investment committee memos by synthesizing market research, financial modeling, risk analysis, and comparable property data. Generates executive summary, financial exhibits, and recommendation rationale for committee review.",
          "targetFriction": "Investment committee memo preparation requires 120 analyst hours per opportunity across market analysis, financial modeling, risk assessment, and comparable property research",
          "targetFrictionId": "FP-09",
          "capabilities": [
            "Research & Information Retrieval",
            "Content Creation",
            "Data Analysis"
          ],
          "agenticPattern": {
            "primary": "Orchestrator-Workers",
            "alternative": "Prompt Chaining",
            "rationale": "Orchestrator-Workers coordinates parallel research across market analysis, financial modeling, risk assessment, and comparable property analysis while ensuring coherent narrative flow. Prompt chaining viable for smaller acquisitions with limited complexity."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce decision cycle from 45 days to 21 days",
              "metric": ""
            },
            {
              "outcome": "Increase analyst capacity to evaluate 3.2x more opportunities",
              "metric": ""
            },
            {
              "outcome": "Improve acquisition timing to capture market inflection points",
              "metric": ""
            },
            {
              "outcome": "Standardize risk assessment methodology across all deals",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured",
            "unstructured"
          ],
          "integrations": [
            "Argus Enterprise",
            "CoStar Market Analytics",
            "Real Capital Analytics",
            "Internal Deal Database"
          ],
          "hitlRequirement": "CFO validates all financial assumptions and risk assessments before committee presentation; investment committee retains final approval authority on capital deployment",
          "valueScore": 5.25,
          "readinessScore": 5.9,
          "timeToValue": 5,
          "annualValue": 6.6,
          "priorityTier": "Quick Win",
          "benefitBreakdown": {
            "costSavings": 875,
            "revenue": 3.2,
            "riskMitigation": 252,
            "cashFlow": 2.2
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 8,
            "governance": 5
          },
          "priority": {
            "priorityScore": 5.58,
            "recommendedPhase": "Q3",
            "valueScore": 5.25,
            "ttvScore": 0.58
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Market Research & Data Collection",
                "description": "Analysts manually gather market data, comparable property information, and economic indicators from multiple sources.",
                "actorType": "human",
                "actorName": "Investment Analyst",
                "duration": "24 hours",
                "isBottleneck": true,
                "systems": [
                  "Bloomberg",
                  "CoStar",
                  "Excel",
                  "Internal Database"
                ],
                "painPoints": [
                  "Fragmented data sources",
                  "Manual data entry errors",
                  "Time-intensive research"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Financial Modeling",
                "description": "Analysts build complex financial models including cash flow projections, valuation analysis, and return calculations.",
                "actorType": "human",
                "actorName": "Financial Analyst",
                "duration": "32 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Argus",
                  "Financial Modeling Tools"
                ],
                "painPoints": [
                  "Formula errors",
                  "Version control issues",
                  "Repetitive calculations"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Risk Assessment",
                "description": "Risk team evaluates market, operational, and financial risks associated with the investment opportunity.",
                "actorType": "human",
                "actorName": "Risk Analyst",
                "duration": "20 hours",
                "isBottleneck": false,
                "systems": [
                  "Risk Management Platform",
                  "Excel"
                ],
                "painPoints": [
                  "Inconsistent risk frameworks",
                  "Limited historical comparables"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Comparable Analysis",
                "description": "Team researches and analyzes comparable transactions and properties to benchmark the opportunity.",
                "actorType": "human",
                "actorName": "Research Associate",
                "duration": "16 hours",
                "isBottleneck": false,
                "systems": [
                  "Real Capital Analytics",
                  "CoStar",
                  "Internal Deal Database"
                ],
                "painPoints": [
                  "Limited comparable data",
                  "Subjective selection criteria"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Memo Drafting & Synthesis",
                "description": "Senior analyst synthesizes all research and analysis into a comprehensive investment committee memo.",
                "actorType": "human",
                "actorName": "Senior Investment Analyst",
                "duration": "20 hours",
                "isBottleneck": false,
                "systems": [
                  "Word",
                  "PowerPoint",
                  "Email"
                ],
                "painPoints": [
                  "Inconsistent memo format",
                  "Time-consuming synthesis"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Internal Review & Revisions",
                "description": "Multiple stakeholders review and request revisions to the memo, requiring multiple iteration cycles.",
                "actorType": "human",
                "actorName": "Associate Director",
                "duration": "16 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Word"
                ],
                "painPoints": [
                  "Multiple revision rounds",
                  "Version confusion",
                  "Delayed feedback"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Final Approval & Distribution",
                "description": "Managing Director approves final memo and distributes to investment committee members for review.",
                "actorType": "human",
                "actorName": "Managing Director",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Board Portal"
                ],
                "painPoints": [
                  "Last-minute changes",
                  "Distribution delays"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "AI-Powered Market Intelligence Gathering",
                "description": "AI agent automatically aggregates and synthesizes market data, comparables, and economic indicators from multiple sources.",
                "actorType": "ai_agent",
                "actorName": "Market Intelligence AI",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "Bloomberg API",
                  "CoStar API",
                  "Data Lake",
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Research & Information Retrieval",
                  "Data Analysis",
                  "NLP"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Automated Financial Modeling",
                "description": "AI generates financial models with cash flow projections, valuations, and sensitivity analysis using standardized templates.",
                "actorType": "ai_agent",
                "actorName": "Financial Modeling AI",
                "duration": "20 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Financial Modeling Engine",
                  "Data Warehouse"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Predictive Analytics"
                ]
              },
              {
                "stepNumber": 3,
                "name": "AI Risk Assessment & Scoring",
                "description": "AI evaluates risks across multiple dimensions using historical data and machine learning models to generate risk scores.",
                "actorType": "ai_agent",
                "actorName": "Risk Analysis AI",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Risk Management System",
                  "Historical Deal Database"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Machine Learning",
                  "Risk Modeling"
                ]
              },
              {
                "stepNumber": 4,
                "name": "AI Comparable Analysis & Benchmarking",
                "description": "AI identifies and analyzes relevant comparable transactions using pattern matching and statistical analysis.",
                "actorType": "ai_agent",
                "actorName": "Comparables AI",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Deal Database",
                  "Market Data APIs"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Research & Information Retrieval",
                  "Data Analysis",
                  "Pattern Recognition"
                ]
              },
              {
                "stepNumber": 5,
                "name": "AI Memo Generation",
                "description": "AI orchestrator synthesizes all analyses into a comprehensive investment memo following standardized templates.",
                "actorType": "ai_agent",
                "actorName": "Memo Generation AI",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Content Generation Engine",
                  "Template Library"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Content Creation",
                  "NLP",
                  "Data Synthesis"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Human Expert Review & Refinement",
                "description": "Senior analyst reviews AI-generated memo, validates assumptions, adds strategic insights, and refines recommendations.",
                "actorType": "human",
                "actorName": "Senior Investment Analyst",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Collaboration Tools",
                  "Word"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "augmented",
                "aiCapabilities": [
                  "AI-Assisted Review",
                  "Suggestion Engine"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Approval & Distribution",
                "description": "Managing Director approves memo and AI distributes to committee members with automated tracking and reminders.",
                "actorType": "human",
                "actorName": "Managing Director",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Board Portal",
                  "Workflow Engine"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "augmented",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Distribution Management"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$250,000/yr",
                "before": "$1,000,000/yr",
                "improvement": "75%"
              },
              "timeReduction": {
                "after": "6 hours",
                "before": "120 hours",
                "improvement": "95%"
              },
              "qualityImprovement": {
                "after": "92% accuracy",
                "before": "68% accuracy",
                "improvement": "+24%"
              },
              "throughputIncrease": {
                "after": "480 memos/yr",
                "before": "89 memos/yr",
                "improvement": "5.4x"
              }
            }
          }
        },
        {
          "id": "UC-10",
          "title": "Dynamic Development Underwriting & Scenario Modeling",
          "pattern": "Tool Use",
          "functionalArea": "Finance",
          "description": "AI-powered underwriting tool dynamically updates development pro formas based on real-time market conditions, construction costs, and leasing velocity. Generates probabilistic yield distributions and stress-test scenarios for committee review.",
          "targetFriction": "Development project underwriting lacks dynamic scenario modeling; analysts manually rebuild 47-tab Excel models for sensitivity analysis and market condition changes",
          "targetFrictionId": "FP-10",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Tool Use",
            "alternative": "Planning",
            "rationale": "Tool Use enables systematic querying of market data, construction costs, and leasing assumptions to generate real-time scenario analysis and sensitivity testing. Planning alternative suitable for complex multi-phase development sequencing decisions."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Increase development yield from 12.0% to 13.4%",
              "metric": ""
            },
            {
              "outcome": "Reduce underwriting cycle from 18 days to 5 days",
              "metric": ""
            },
            {
              "outcome": "Enable real-time scenario analysis during market shifts",
              "metric": ""
            },
            {
              "outcome": "Improve capital allocation through probabilistic yield modeling",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured",
            "real_time"
          ],
          "integrations": [
            "Argus Enterprise",
            "CoStar Market Analytics",
            "RS Means Construction Data",
            "Internal Development Database"
          ],
          "hitlRequirement": "Development director validates all construction cost assumptions and market rent projections; investment committee approves go/no-go decisions based on AI-generated scenario analysis",
          "valueScore": 8.77,
          "readinessScore": 4.9,
          "timeToValue": 7,
          "annualValue": 4.4,
          "priorityTier": "Strategic Bet",
          "benefitBreakdown": {
            "costSavings": 650,
            "revenue": 2.1,
            "riskMitigation": 312,
            "cashFlow": 1.3
          },
          "readinessDimensions": {
            "dataAvailability": 4,
            "technicalInfrastructure": 4,
            "organizationalCapacity": 7,
            "governance": 4
          },
          "priority": {
            "priorityScore": 6.84,
            "recommendedPhase": "Q3",
            "valueScore": 8.77,
            "ttvScore": 0.42
          },
          "probabilityOfSuccess": 0.65
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-09",
          "frictionPoint": "Investment committee memo preparation requires 120 analyst hours per opportunity across market analysis, financial modeling, risk assessment, and comparable property research",
          "severity": "High",
          "role": "Business Analyst",
          "estimatedAnnualCost": 1,
          "annualHours": 10667,
          "function": "Finance",
          "subFunction": "Accounts Payable",
          "strategicThemeId": "ST-05"
        },
        {
          "id": "FP-10",
          "frictionPoint": "Development project underwriting lacks dynamic scenario modeling; analysts manually rebuild 47-tab Excel models for sensitivity analysis and market condition changes",
          "severity": "Medium",
          "role": "Business Analyst",
          "estimatedAnnualCost": 0.5,
          "annualHours": 5333,
          "function": "Finance",
          "subFunction": "Accounts Payable",
          "strategicThemeId": "ST-05"
        }
      ],
      "kpis": [
        {
          "id": "BF-09",
          "kpiName": "Investment Decision Cycle Time",
          "function": "Finance",
          "subFunction": "Accounts Payable",
          "direction": "↓",
          "baselineValue": "45 days",
          "targetValue": "21 days",
          "timeframe": "18 months",
          "strategicThemeId": "ST-05"
        },
        {
          "id": "BF-10",
          "kpiName": "Development Project Yield",
          "function": "Finance",
          "subFunction": "Accounts Payable",
          "direction": "↑",
          "baselineValue": "12.0%",
          "targetValue": "14.5%",
          "timeframe": "36 months",
          "strategicThemeId": "ST-05"
        }
      ]
    }
  ],
  "methodology": {
    "framework": "BlueAlly 7-Step AI Assessment Framework with financial modeling, readiness scoring, and workflow transformation analysis",
    "assumptions": [
      "All monetary values derived from public filings and standard industry benchmarks",
      "Fully-loaded labor rates applied per role: professional staff at market rates",
      "Implementation assumes 12-month base timeline with phased rollout",
      "ROI calculations use 10% discount rate for NPV, 3-year payback threshold",
      "Readiness scores based on disclosed technology investments and data maturity indicators",
      "Probability of success factors in organizational change management complexity"
    ]
  },
  "executiveSummary": {
    "headline": "The organization should execute 3 Champion-priority AI initiatives in Q1-Q2 to capture $9.1M in first-year value from a $40.1M total opportunity.",
    "context": "The organization operates 750 employees managing $3.2B in revenue across a fragmented technology landscape. Current data readiness—Level 2 with isolated property management, lease, and building automation systems—constrains AI deployment velocity but doesn't prevent it. The analysis reveals 10 viable use cases spanning leasing, operations, energy, tenant experience, and capital allocation. First-year probability-adjusted benefits total $40.1M, with three Champions ready for immediate execution despite data constraints.",
    "criticalPath": "Data integration governs the roadmap. Champions and Quick Wins proceed immediately using available data sources. Strategic investments require parallel Q1-Q2 work to unify lease databases and market intelligence systems before Q2-Q3 AI deployment. Foundation initiatives await Q3 building automation and vendor management platform upgrades.",
    "recommendedAction": "Launch UC-08, UC-06, and UC-09 in Q1 2025 with 90-day delivery targets. Simultaneously initiate data integration for UC-02 and UC-07 to enable Q3 Strategic deployment.",
    "findings": [
      {
        "title": "Service feedback analysis delivers fastest value despite organizational complexity",
        "body": "UC-08 reaches production in 4 months with $1.5M annual benefits from existing tenant portal data. High readiness scores (data availability: 6, governance: 5) bypass typical integration delays. Monthly token costs of $16K drive 60% cost savings through automated sentiment analysis and action prioritization.",
        "value": "$1.5M annually"
      },
      {
        "title": "Investment committee acceleration captures $4.3M with executive sponsorship advantage",
        "body": "UC-09 leverages organizational capacity score of 8—the organization's strongest readiness factor—to compress deal analysis cycles by 45 days. Token consumption of 1.8M monthly ($32K) processes 60 investment memos with structured financial data inputs, mitigating data fragmentation risks.",
        "value": "$4.3M annually"
      },
      {
        "title": "Lease negotiation intelligence offers highest returns but requires 9-month data integration",
        "body": "UC-02 projects $7.1M in annual benefits (60% probability-adjusted) from market comparables and tenant financial analysis. The Strategic tier placement reflects data availability score of 3—historical lease terms and market data remain siloed. Prerequisite integration work pushes time-to-value to Q3 deployment.",
        "value": "$7.1M annually"
      }
    ],
    "opportunityTable": [
      {
        "metric": "Total Annual Value",
        "value": "$40.1M"
      },
      {
        "metric": "Champion-Priority Initiatives",
        "value": "3"
      },
      {
        "metric": "First-Year Impact",
        "value": "$9.1M"
      },
      {
        "metric": "Value per 1M Tokens",
        "value": "$1,503"
      }
    ]
  },
  "workshopUrl": "https://workshop.movefasterwithai.com/shared/O48iUpi42o"
};
