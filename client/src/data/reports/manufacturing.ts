import type { IndustryReport } from "../report-types";

export const report: IndustryReport = {
  "industrySlug": "manufacturing",
  "companyDescription": "A Specialty Materials Manufacturing Company with $2.9B in annual revenue operating 45 facilities across 26 countries",
  "companyOverview": "Mativ Holdings generates $2.9B in annual revenue manufacturing specialty materials for filtration, healthcare packaging, and technical applications. The company emerged from the 2022 merger of Schweitzer-Mauduit International and Fibertex Nonwovens, operating 45 manufacturing facilities across 26 countries with 7,600 employees.\n\nThe Advanced and Base Materials segment contributes 58% of revenue ($1.7B), producing filtration media and specialty papers for tobacco, cannabis, and industrial applications. Specialty Engineered Materials generates 42% ($1.2B) through nonwoven fabrics for medical, hygiene, and packaging markets. Customer concentration runs high—top 10 customers represent 37% of revenue. Operating margins compressed to 8.4% in fiscal 2025 from 11.2% pre-merger as integration costs and raw material inflation outpaced pricing actions.\n\nThe company faces a $87M annual burden from manufacturing inefficiency. Production planners spend 142,000 hours annually managing scheduling conflicts across legacy ERP systems, creating average 4.2-day lead time delays and 340 basis points of yield variance between best and worst-performing facilities. This variability forces 18% safety stock buffers that tie up $156M in working capital.\n\nSupply chain complexity imposes $64M in annual costs. Demand forecasting teams dedicate 98,000 hours reconciling customer order patterns across fragmented systems, resulting in 23% forecast error rates and $89M in excess slow-moving inventory. Raw material procurement operates with 47-day average decision cycles due to manual supplier performance tracking across 340 active vendors.\n\nProduct development cycles stretch 18-24 months, consuming $41M and 76,000 engineering hours annually. Technical teams manually validate regulatory compliance across 12 jurisdictions for each new formulation, creating documentation backlogs that delay commercialization. This pace disadvantages Mativ against competitors launching sustainable material alternatives in 8-12 month cycles.\n\nSales operations bear $38M in friction costs from quote generation inefficiency. Technical sales teams require 89,000 hours annually to configure custom specifications and validate feasibility across product lines, averaging 8.3 days per complex quote. This creates 34% quote abandonment rates on projects requiring multi-facility coordination.\n\nFinancial data derives from Mativ's fiscal 2025 10-K filing and Q4 2025 earnings release. Operational burden estimates apply $150/hour fully-loaded rates for professional staff and $85/hour for production personnel. Data maturity assessed at Level 2 based on disclosed post-merger integration timelines and IT infrastructure investments totaling $34M over 2024-2025.",
  "totalValueOpportunity": 41.4,
  "valueDrivers": [
    {
      "name": "Cost Reduction",
      "amount": 20.6,
      "percentage": 50,
      "color": "#00B34A",
      "description": "AI-driven manufacturing optimization, supply chain efficiency, and automated quality monitoring reducing operational costs across 45 global facilities"
    },
    {
      "name": "Revenue Growth",
      "amount": 16.5,
      "percentage": 40,
      "color": "#00A3E0",
      "description": "Accelerated product development, intelligent quoting, and customer intelligence driving revenue uplift through faster time-to-market and improved win rates"
    },
    {
      "name": "Cash Flow Acceleration",
      "amount": 2.8,
      "percentage": 7,
      "color": "#003B73",
      "description": "Working capital optimization through AI-driven demand sensing, inventory reduction, and faster procurement cycles"
    },
    {
      "name": "Risk Mitigation",
      "amount": 1.5,
      "percentage": 4,
      "color": "#FF6B35",
      "description": "Predictive quality control, regulatory compliance automation, and supplier risk monitoring reducing exposure across manufacturing operations"
    }
  ],
  "financialScenarios": [
    {
      "name": "Base Case",
      "multiplier": "×1.0",
      "annualBenefit": 41.4,
      "fiveYearNPV": 90.1
    },
    {
      "name": "Optimistic",
      "multiplier": "×1.3",
      "annualBenefit": 53.8,
      "fiveYearNPV": 148.1
    },
    {
      "name": "Conservative",
      "multiplier": "×0.6",
      "annualBenefit": 24.8,
      "fiveYearNPV": 32.2
    }
  ],
  "themes": [
    {
      "id": "ST-01",
      "name": "Manufacturing Excellence & Yield Optimization",
      "currentState": "4.2-day average lead time delays, 142,000 hours manual scheduling, fragmented quality data across 45 facilities",
      "targetState": "Real-time production optimization, 2.1-day lead times, 150bp yield variance reduction, unified quality monitoring",
      "useCases": [
        {
          "id": "UC-01",
          "title": "Yield Deviation Root Cause Engine",
          "pattern": "Tool Use",
          "functionalArea": "Operations",
          "description": "Correlates real-time sensor data, environmental variables, and production logs across 17 facilities to identify yield deviation root causes within 4 hours instead of 3 days. Delivers prioritized intervention recommendations with confidence scoring.",
          "targetFriction": "Manual root cause analysis for yield deviations across 17 facilities",
          "targetFrictionId": "FP-01",
          "capabilities": [
            "Data Analysis",
            "Research & Information Retrieval"
          ],
          "agenticPattern": {
            "primary": "Tool Use",
            "alternative": "ReAct Loop",
            "rationale": "Tool Use pattern enables real-time sensor data analysis and production log correlation without iterative reasoning overhead. The agent invokes specialized tools for statistical process control analysis and environmental variable correlation. ReAct Loop serves as fallback for ambiguous failure modes requiring iterative hypothesis testing."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce yield analysis cycle from 3 days to 4 hours",
              "metric": ""
            },
            {
              "outcome": "Identify 80% of root causes automatically with 90% accuracy",
              "metric": ""
            },
            {
              "outcome": "Enable real-time intervention before batch completion",
              "metric": ""
            },
            {
              "outcome": "Build institutional knowledge base of failure patterns",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured",
            "real_time"
          ],
          "integrations": [
            "Wonderware MES",
            "Rockwell Automation PLC",
            "PI Historian",
            "SAP ERP"
          ],
          "hitlRequirement": "Quality engineer validates recommended interventions before production line adjustments",
          "valueScore": 6.76,
          "readinessScore": 6.7,
          "timeToValue": 9,
          "annualValue": 5.8,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 2.5,
            "revenue": 3.1,
            "riskMitigation": 225,
            "cashFlow": 0
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 5,
            "governance": 5
          },
          "priority": {
            "priorityScore": 6.73,
            "recommendedPhase": "Q2",
            "valueScore": 6.76,
            "ttvScore": 9
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Yield Deviation Detection",
                "description": "Production supervisors manually identify yield deviations from daily production reports across facilities.",
                "actorType": "human",
                "actorName": "Production Supervisor",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "MES",
                  "Excel"
                ],
                "painPoints": [
                  "Delayed detection",
                  "Inconsistent thresholds"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Data Collection",
                "description": "Quality engineers manually gather process parameters, material specs, and environmental data from 17 facilities.",
                "actorType": "human",
                "actorName": "Quality Engineer",
                "duration": "3 days",
                "isBottleneck": true,
                "systems": [
                  "MES",
                  "LIMS",
                  "ERP",
                  "Local databases"
                ],
                "painPoints": [
                  "Data scattered across systems",
                  "Manual data extraction",
                  "Incomplete datasets"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Cross-Facility Pattern Analysis",
                "description": "Engineers manually compare deviation patterns across facilities using spreadsheets and tribal knowledge.",
                "actorType": "human",
                "actorName": "Process Engineer",
                "duration": "5 days",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Minitab"
                ],
                "painPoints": [
                  "Time-intensive analysis",
                  "Limited cross-facility visibility",
                  "Knowledge silos"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Root Cause Hypothesis",
                "description": "Engineering team brainstorms potential root causes based on experience and historical records.",
                "actorType": "human",
                "actorName": "Engineering Team",
                "duration": "2 days",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "SharePoint"
                ],
                "painPoints": [
                  "Reliance on tribal knowledge",
                  "Inconsistent methodologies"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Hypothesis Testing",
                "description": "Engineers conduct experiments and analyze results to validate or reject root cause hypotheses.",
                "actorType": "human",
                "actorName": "Process Engineer",
                "duration": "7 days",
                "isBottleneck": false,
                "systems": [
                  "MES",
                  "LIMS"
                ],
                "painPoints": [
                  "Sequential testing delays",
                  "Resource constraints"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Corrective Action Planning",
                "description": "Management reviews findings and develops corrective action plans for implementation.",
                "actorType": "human",
                "actorName": "Operations Manager",
                "duration": "3 days",
                "isBottleneck": false,
                "systems": [
                  "CAPA system"
                ],
                "painPoints": [
                  "Delayed decision-making"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Documentation & Knowledge Capture",
                "description": "Engineers document findings and solutions in local databases and shared folders.",
                "actorType": "human",
                "actorName": "Quality Engineer",
                "duration": "1 day",
                "isBottleneck": false,
                "systems": [
                  "SharePoint",
                  "CAPA system"
                ],
                "painPoints": [
                  "Knowledge not standardized",
                  "Limited searchability"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Deviation Detection",
                "description": "AI monitors real-time production data and automatically flags yield deviations across all 17 facilities.",
                "actorType": "ai_agent",
                "actorName": "Yield Monitoring Agent",
                "duration": "Real-time",
                "isBottleneck": false,
                "systems": [
                  "MES",
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Anomaly Detection"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Intelligent Data Aggregation",
                "description": "AI agent automatically retrieves and normalizes relevant data from all systems across facilities.",
                "actorType": "ai_agent",
                "actorName": "Data Integration Agent",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "MES",
                  "LIMS",
                  "ERP",
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Research & Information Retrieval"
                ]
              },
              {
                "stepNumber": 3,
                "name": "AI-Powered Pattern Recognition",
                "description": "AI analyzes cross-facility patterns, historical deviations, and correlates with process parameters.",
                "actorType": "ai_agent",
                "actorName": "Root Cause Analysis Agent",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Knowledge Base"
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
                "stepNumber": 4,
                "name": "Ranked Root Cause Recommendations",
                "description": "AI generates ranked list of probable root causes with supporting evidence and confidence scores.",
                "actorType": "ai_agent",
                "actorName": "Root Cause Analysis Agent",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Natural Language Generation"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Expert Review & Validation",
                "description": "Process engineers review AI recommendations, validate findings, and approve root cause determination.",
                "actorType": "human",
                "actorName": "Process Engineer",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "MES"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "augmented",
                "aiCapabilities": [
                  "Decision Support"
                ]
              },
              {
                "stepNumber": 6,
                "name": "AI-Suggested Corrective Actions",
                "description": "AI retrieves similar historical cases and suggests proven corrective actions with expected outcomes.",
                "actorType": "ai_agent",
                "actorName": "Solution Recommendation Agent",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Knowledge Base",
                  "CAPA system"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Research & Information Retrieval",
                  "Natural Language Generation"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Automated Knowledge Capture",
                "description": "AI automatically documents findings, updates knowledge base, and makes insights searchable across organization.",
                "actorType": "ai_agent",
                "actorName": "Knowledge Management Agent",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Knowledge Base",
                  "CAPA system"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Natural Language Processing",
                  "Knowledge Graph"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$1.4M/yr",
                "before": "$5.5M/yr",
                "improvement": "75%"
              },
              "timeReduction": {
                "after": "1.5 days",
                "before": "21 days",
                "improvement": "93%"
              },
              "qualityImprovement": {
                "after": "91% accuracy",
                "before": "68% accuracy",
                "improvement": "+23 pts"
              },
              "throughputIncrease": {
                "after": "180 cases/yr per facility",
                "before": "21 cases/yr per facility",
                "improvement": "8.6x"
              }
            }
          }
        },
        {
          "id": "UC-02",
          "title": "Predictive Maintenance Scheduler",
          "pattern": "Orchestrator-Workers",
          "functionalArea": "Operations",
          "description": "Analyzes vibration sensors, thermal imaging, and historical maintenance logs to predict equipment failures 72 hours in advance. Automatically schedules interventions during planned downtime windows to minimize production disruption.",
          "targetFriction": "Reactive scheduling adjustments due to incomplete machine health visibility",
          "targetFrictionId": "FP-02",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Orchestrator-Workers",
            "alternative": "Tool Use",
            "rationale": "Orchestrator-Workers pattern manages parallel analysis of sensor streams, maintenance history, and production schedules to optimize intervention timing. Worker agents specialize in anomaly detection, downtime forecasting, and resource allocation. Tool Use alternative simplifies to sequential analysis but sacrifices real-time optimization."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce unplanned downtime by 40%",
              "metric": ""
            },
            {
              "outcome": "Increase maintenance schedule adherence from 67% to 92%",
              "metric": ""
            },
            {
              "outcome": "Decrease production lead time variability by 1.2 days",
              "metric": ""
            },
            {
              "outcome": "Extend equipment life through optimized intervention timing",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "real_time"
          ],
          "integrations": [
            "Wonderware MES",
            "Maximo EAM",
            "SAP PM",
            "Edge IoT Sensors"
          ],
          "hitlRequirement": "Plant manager approves schedule changes affecting committed delivery dates",
          "valueScore": 3.7,
          "readinessScore": 5.9,
          "timeToValue": 12,
          "annualValue": 2.7,
          "priorityTier": "Quick Win",
          "benefitBreakdown": {
            "costSavings": 1.7,
            "revenue": 0,
            "riskMitigation": 150,
            "cashFlow": 810
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 5,
            "governance": 5
          },
          "priority": {
            "priorityScore": 4.8,
            "recommendedPhase": "Q3",
            "valueScore": 3.7,
            "ttvScore": 12
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Manual Data Collection",
                "description": "Technicians manually inspect machines and record readings from various sensors and gauges.",
                "actorType": "human",
                "actorName": "Maintenance Technician",
                "duration": "4 hours",
                "isBottleneck": true,
                "systems": [
                  "CMMS",
                  "Spreadsheets"
                ],
                "painPoints": [
                  "Incomplete data capture",
                  "Time-consuming rounds",
                  "Human error in readings"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Data Consolidation",
                "description": "Supervisors aggregate data from multiple sources into weekly maintenance reports.",
                "actorType": "human",
                "actorName": "Maintenance Supervisor",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "CMMS",
                  "Email"
                ],
                "painPoints": [
                  "Data scattered across systems",
                  "Version control issues"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Reactive Issue Identification",
                "description": "Engineers review reports to identify potential machine failures after symptoms appear.",
                "actorType": "human",
                "actorName": "Reliability Engineer",
                "duration": "2 hours",
                "isBottleneck": true,
                "systems": [
                  "CMMS",
                  "Excel"
                ],
                "painPoints": [
                  "Late detection of issues",
                  "Lack of predictive insight",
                  "Reactive approach"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Emergency Schedule Adjustment",
                "description": "Planners scramble to reschedule production and coordinate emergency maintenance windows.",
                "actorType": "human",
                "actorName": "Maintenance Planner",
                "duration": "5 hours",
                "isBottleneck": false,
                "systems": [
                  "ERP",
                  "CMMS",
                  "Production Schedule"
                ],
                "painPoints": [
                  "Production disruption",
                  "Rush orders for parts",
                  "Overtime labor costs"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Parts Procurement",
                "description": "Emergency orders placed for replacement parts with expedited shipping costs.",
                "actorType": "human",
                "actorName": "Procurement Specialist",
                "duration": "24 hours",
                "isBottleneck": false,
                "systems": [
                  "ERP",
                  "Supplier Portals"
                ],
                "painPoints": [
                  "High expedite fees",
                  "Limited part availability",
                  "Supply chain delays"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Unplanned Downtime Execution",
                "description": "Maintenance team performs repairs during unscheduled production stops causing yield loss.",
                "actorType": "human",
                "actorName": "Maintenance Crew",
                "duration": "8 hours",
                "isBottleneck": false,
                "systems": [
                  "CMMS"
                ],
                "painPoints": [
                  "Production loss",
                  "Revenue impact",
                  "Cascading schedule delays"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Continuous IoT Data Ingestion",
                "description": "AI agent continuously monitors real-time sensor data from all manufacturing equipment.",
                "actorType": "ai_agent",
                "actorName": "Data Ingestion Agent",
                "duration": "Real-time",
                "isBottleneck": false,
                "systems": [
                  "IoT Platform",
                  "Data Lake",
                  "CMMS"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Pattern Recognition"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Predictive Failure Analysis",
                "description": "AI orchestrator analyzes machine health patterns and predicts potential failures 2-4 weeks ahead.",
                "actorType": "ai_agent",
                "actorName": "Predictive Maintenance Orchestrator",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Data Lake",
                  "CMMS"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Machine Learning",
                  "Anomaly Detection"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Automated Schedule Optimization",
                "description": "AI worker agents generate optimized maintenance schedules aligned with production plans.",
                "actorType": "ai_agent",
                "actorName": "Schedule Optimization Agent",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "CMMS",
                  "ERP",
                  "Production Scheduling"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Optimization Algorithms"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Human Review and Approval",
                "description": "Reliability engineer reviews AI recommendations and approves or adjusts maintenance plans.",
                "actorType": "human",
                "actorName": "Reliability Engineer",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "CMMS Dashboard",
                  "ML Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Decision Support",
                  "Data Visualization"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Proactive Parts Ordering",
                "description": "AI agent automatically initiates parts procurement based on approved maintenance schedules.",
                "actorType": "ai_agent",
                "actorName": "Procurement Agent",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "ERP",
                  "Supplier APIs",
                  "Inventory Management"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "API Integration"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Planned Maintenance Execution",
                "description": "Maintenance crew performs scheduled work during planned downtime with minimal production impact.",
                "actorType": "human",
                "actorName": "Maintenance Crew",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "CMMS",
                  "Mobile App"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Guided Workflows",
                  "Digital Work Instructions"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$1.17M/yr",
                "before": "$3.9M/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "4 hours per cycle",
                "before": "46 hours per cycle",
                "improvement": "91%"
              },
              "qualityImprovement": {
                "after": "94% planned maintenance",
                "before": "58% planned maintenance",
                "improvement": "+36 pts"
              },
              "throughputIncrease": {
                "after": "96% equipment uptime",
                "before": "82% equipment uptime",
                "improvement": "+14 pts"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-01",
          "frictionPoint": "Manual root cause analysis for yield deviations across 17 facilities",
          "severity": "Critical",
          "role": "Business Analyst",
          "estimatedAnnualCost": 5.5,
          "annualHours": 58000,
          "function": "Operations",
          "subFunction": "Manufacturing",
          "strategicThemeId": "ST-01"
        },
        {
          "id": "FP-02",
          "frictionPoint": "Reactive scheduling adjustments due to incomplete machine health visibility",
          "severity": "High",
          "role": "Business Analyst",
          "estimatedAnnualCost": 3.9,
          "annualHours": 41333,
          "function": "Operations",
          "subFunction": "Manufacturing",
          "strategicThemeId": "ST-01"
        }
      ],
      "kpis": [
        {
          "id": "BF-01",
          "kpiName": "Production Yield Variance (Facility Best vs. Worst)",
          "function": "Operations",
          "subFunction": "Manufacturing",
          "direction": "↓",
          "baselineValue": "340 basis points",
          "targetValue": "190 basis points",
          "timeframe": "18 months",
          "strategicThemeId": "ST-01"
        },
        {
          "id": "BF-02",
          "kpiName": "Production Lead Time (Order to Ship)",
          "function": "Operations",
          "subFunction": "Manufacturing",
          "direction": "↓",
          "baselineValue": "4.2 days",
          "targetValue": "2.1 days",
          "timeframe": "18 months",
          "strategicThemeId": "ST-01"
        }
      ]
    },
    {
      "id": "ST-02",
      "name": "Supply Chain Intelligence & Working Capital",
      "currentState": "98,000 hours manual forecasting, $89M slow-moving inventory, 47-day procurement cycles, 340 vendor fragmentation",
      "targetState": "AI-driven demand sensing, 12% forecast error, $44M inventory reduction, 28-day procurement, automated vendor scoring",
      "useCases": [
        {
          "id": "UC-03",
          "title": "Multi-Channel Demand Synthesizer",
          "pattern": "Orchestrator-Workers",
          "functionalArea": "Supply Chain",
          "description": "Synthesizes demand signals from CRM pipeline data, distributor point-of-sale, macroeconomic indicators, and seasonal patterns into unified forecasts. Updates weekly instead of monthly, reducing forecast error through continuous learning.",
          "targetFriction": "Siloed demand signals across sales channels and geographies",
          "targetFrictionId": "FP-03",
          "capabilities": [
            "Data Analysis",
            "Research & Information Retrieval"
          ],
          "agenticPattern": {
            "primary": "Orchestrator-Workers",
            "alternative": "Parallelization",
            "rationale": "Orchestrator-Workers pattern coordinates specialized agents analyzing CRM pipeline, distributor POS, economic indicators, and seasonal patterns in parallel. The orchestrator synthesizes conflicting signals into consensus forecasts. Parallelization alternative speeds execution but loses intelligent conflict resolution between data sources."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce MAPE from 23% to 16%",
              "metric": ""
            },
            {
              "outcome": "Increase forecast update frequency from monthly to weekly",
              "metric": ""
            },
            {
              "outcome": "Decrease safety stock requirements by $18M",
              "metric": ""
            },
            {
              "outcome": "Enable dynamic allocation across distribution centers",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured",
            "real_time"
          ],
          "integrations": [
            "Salesforce CRM",
            "SAP APO",
            "Kinaxis RapidResponse",
            "EDI Hub"
          ],
          "hitlRequirement": "Demand planner validates forecast adjustments exceeding 15% variance from prior period",
          "valueScore": 6.24,
          "readinessScore": 5.1,
          "timeToValue": 15,
          "annualValue": 7.6,
          "priorityTier": "Strategic Bet",
          "benefitBreakdown": {
            "costSavings": 3.5,
            "revenue": 4.1,
            "riskMitigation": 0,
            "cashFlow": 0
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 5,
            "governance": 5
          },
          "priority": {
            "priorityScore": 5.67,
            "recommendedPhase": "Q3",
            "valueScore": 6.24,
            "ttvScore": 15
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Manual Data Collection",
                "description": "Demand planners manually extract sales data from disparate ERP, POS, and CRM systems across regions.",
                "actorType": "human",
                "actorName": "Demand Planner",
                "duration": "3 days",
                "isBottleneck": true,
                "systems": [
                  "SAP ERP",
                  "Salesforce",
                  "Regional POS",
                  "Excel"
                ],
                "painPoints": [
                  "Inconsistent data formats",
                  "Manual export delays",
                  "Missing regional data"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Data Normalization",
                "description": "Analysts manually clean, transform, and standardize data from multiple sources into unified format.",
                "actorType": "human",
                "actorName": "Data Analyst",
                "duration": "4 days",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Access Database",
                  "Custom Scripts"
                ],
                "painPoints": [
                  "High error rates",
                  "Time-intensive reconciliation",
                  "Version control issues"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Channel Reconciliation",
                "description": "Teams reconcile conflicting demand signals between online, retail, distributor, and direct sales channels.",
                "actorType": "human",
                "actorName": "Channel Manager",
                "duration": "2 days",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "Email",
                  "Shared Drives"
                ],
                "painPoints": [
                  "Siloed channel visibility",
                  "Manual conflict resolution"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Statistical Forecasting",
                "description": "Planners apply basic statistical models to historical data using spreadsheet tools.",
                "actorType": "human",
                "actorName": "Demand Planner",
                "duration": "3 days",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "Legacy Forecasting Tool"
                ],
                "painPoints": [
                  "Limited model sophistication",
                  "Cannot handle external variables"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Cross-Functional Review",
                "description": "Multiple stakeholders meet to review forecasts, debate adjustments, and align on final demand plan.",
                "actorType": "human",
                "actorName": "S&OP Committee",
                "duration": "1 week",
                "isBottleneck": false,
                "systems": [
                  "PowerPoint",
                  "Conference Rooms",
                  "Email"
                ],
                "painPoints": [
                  "Lengthy consensus building",
                  "Political adjustments override data"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Forecast Distribution",
                "description": "Final demand plan manually distributed to procurement, manufacturing, and logistics teams.",
                "actorType": "human",
                "actorName": "Supply Chain Coordinator",
                "duration": "1 day",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Shared Drives",
                  "ERP"
                ],
                "painPoints": [
                  "Stale data by distribution time",
                  "No continuous updates"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Data Ingestion",
                "description": "AI orchestrator continuously pulls real-time demand signals from all channels and geographies via API integrations.",
                "actorType": "ai_agent",
                "actorName": "Data Integration Agent",
                "duration": "15 min",
                "isBottleneck": false,
                "systems": [
                  "SAP API",
                  "Salesforce API",
                  "POS Connectors",
                  "Cloud Data Lake"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "API Integration",
                  "Real-time Processing"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Intelligent Data Synthesis",
                "description": "AI worker agents cleanse, normalize, and enrich multi-channel data using ML pattern recognition.",
                "actorType": "ai_agent",
                "actorName": "Data Synthesis Agent",
                "duration": "30 min",
                "isBottleneck": false,
                "systems": [
                  "Cloud Data Lake",
                  "ML Pipeline",
                  "Data Quality Engine"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Pattern Recognition",
                  "Anomaly Detection"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Multi-Dimensional Forecasting",
                "description": "AI generates demand forecasts using ensemble ML models incorporating channel mix, seasonality, and external signals.",
                "actorType": "ai_agent",
                "actorName": "Forecast Generation Agent",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "ML Forecasting Platform",
                  "External Data APIs",
                  "Feature Store"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Predictive Analytics",
                  "Time Series Analysis",
                  "Research & Information Retrieval"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Exception Identification",
                "description": "AI identifies forecast anomalies, channel conflicts, and high-risk predictions requiring human judgment.",
                "actorType": "ai_agent",
                "actorName": "Exception Detection Agent",
                "duration": "20 min",
                "isBottleneck": false,
                "systems": [
                  "Business Rules Engine",
                  "Anomaly Detection",
                  "Alert Dashboard"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Anomaly Detection",
                  "Risk Scoring",
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Strategic Review & Override",
                "description": "Demand planners review AI-flagged exceptions, apply market intelligence, and approve or adjust critical forecasts.",
                "actorType": "human",
                "actorName": "Senior Demand Planner",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Forecast Dashboard",
                  "Collaboration Platform",
                  "What-If Simulator"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Decision Support",
                  "Scenario Analysis",
                  "Explainable AI"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Automated Distribution & Monitoring",
                "description": "AI automatically publishes approved forecasts to downstream systems and continuously monitors actuals vs. plan.",
                "actorType": "ai_agent",
                "actorName": "Distribution & Monitoring Agent",
                "duration": "5 min",
                "isBottleneck": false,
                "systems": [
                  "ERP Integration",
                  "MES",
                  "TMS",
                  "Real-time Dashboard"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Real-time Monitoring",
                  "Feedback Loop"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$2.1M/yr",
                "before": "$7.0M/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "2 days",
                "before": "18 days",
                "improvement": "89%"
              },
              "qualityImprovement": {
                "after": "89% forecast accuracy",
                "before": "68% forecast accuracy",
                "improvement": "+21pts"
              },
              "throughputIncrease": {
                "after": "Daily rolling forecasts",
                "before": "2 forecast cycles/month",
                "improvement": "15x"
              }
            }
          }
        },
        {
          "id": "UC-04",
          "title": "Slow-Moving Inventory Disposition Agent",
          "pattern": "Planning",
          "functionalArea": "Supply Chain",
          "description": "Evaluates slow-moving SKUs using historical velocity trends, cross-selling potential, alternative channel suitability, and write-down cost scenarios. Recommends disposition actions—liquidation, bundling, channel shift—with financial impact projections.",
          "targetFriction": "Manual inventory disposition reviews with inconsistent criteria",
          "targetFrictionId": "FP-04",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Planning",
            "alternative": "Tool Use",
            "rationale": "Planning pattern decomposes disposition decisions into structured steps: aging analysis, demand likelihood scoring, channel suitability matching, and financial impact modeling. Sequential execution ensures consistent criteria application across SKUs. Tool Use alternative provides faster execution but lacks the strategic decomposition needed for complex disposition logic."
          },
          "epochClassification": [
            "Operational, Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce slow-moving inventory from $89M to $62M",
              "metric": ""
            },
            {
              "outcome": "Accelerate disposition cycle from quarterly to monthly reviews",
              "metric": ""
            },
            {
              "outcome": "Recover 18% more value through optimized channel placement",
              "metric": ""
            },
            {
              "outcome": "Standardize disposition criteria across regions",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured"
          ],
          "integrations": [
            "SAP ERP",
            "Oracle E-Business Suite",
            "Tableau Analytics"
          ],
          "hitlRequirement": "Supply chain director approves write-down recommendations exceeding $50K",
          "valueScore": 6.89,
          "readinessScore": 6.1,
          "timeToValue": 8,
          "annualValue": 2.9,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 1.4,
            "revenue": 0,
            "riskMitigation": 288,
            "cashFlow": 1.2
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 5,
            "governance": 5
          },
          "priority": {
            "priorityScore": 6.49,
            "recommendedPhase": "Q2",
            "valueScore": 6.89,
            "ttvScore": 8
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Manual Inventory Data Collection",
                "description": "Planners manually extract inventory aging reports from multiple ERP systems and warehouses.",
                "actorType": "human",
                "actorName": "Demand Planner",
                "duration": "4 hours",
                "isBottleneck": true,
                "systems": [
                  "ERP",
                  "WMS",
                  "Excel"
                ],
                "painPoints": [
                  "Data scattered across systems",
                  "Time-consuming manual extraction",
                  "Data inconsistency"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Inventory Classification Review",
                "description": "Analysts categorize slow-moving items using inconsistent criteria across product lines.",
                "actorType": "human",
                "actorName": "Inventory Analyst",
                "duration": "6 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "ERP"
                ],
                "painPoints": [
                  "Inconsistent categorization rules",
                  "Subjective judgment",
                  "Manual spreadsheet work"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Disposition Options Analysis",
                "description": "Teams manually evaluate liquidation, markdown, or return-to-vendor options for each SKU.",
                "actorType": "human",
                "actorName": "Supply Chain Manager",
                "duration": "8 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Email"
                ],
                "painPoints": [
                  "Time-intensive analysis",
                  "Limited data-driven insights",
                  "Delayed decisions"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Cross-Functional Review Meetings",
                "description": "Weekly meetings with merchandising, finance, and operations to review and approve disposition plans.",
                "actorType": "human",
                "actorName": "Cross-Functional Team",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "PowerPoint",
                  "Email"
                ],
                "painPoints": [
                  "Scheduling conflicts",
                  "Meeting overload",
                  "Slow consensus building"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Manual Disposition Execution",
                "description": "Planners manually create work orders and update systems to execute approved disposition actions.",
                "actorType": "human",
                "actorName": "Demand Planner",
                "duration": "5 hours",
                "isBottleneck": false,
                "systems": [
                  "ERP",
                  "WMS",
                  "Email"
                ],
                "painPoints": [
                  "Manual data entry errors",
                  "System update delays",
                  "Lack of execution tracking"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Inventory Intelligence Gathering",
                "description": "AI agent continuously monitors inventory levels, aging, velocity, and market signals across all systems.",
                "actorType": "ai_agent",
                "actorName": "Inventory Intelligence Agent",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "ERP",
                  "WMS",
                  "Market Data APIs"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Real-time Monitoring"
                ]
              },
              {
                "stepNumber": 2,
                "name": "AI-Driven Slow-Moving Classification",
                "description": "ML models classify inventory using consistent, data-driven criteria based on velocity, seasonality, and profitability.",
                "actorType": "ai_agent",
                "actorName": "Classification Engine",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "ERP"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Pattern Recognition"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Intelligent Disposition Recommendations",
                "description": "AI analyzes cost recovery options and generates optimized disposition recommendations with financial impact projections.",
                "actorType": "ai_agent",
                "actorName": "Disposition Optimizer",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Financial Systems"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Optimization"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Human Strategic Review & Approval",
                "description": "Supply chain managers review AI recommendations in dashboard, approve or adjust high-value disposition decisions.",
                "actorType": "human",
                "actorName": "Supply Chain Manager",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "AI Dashboard",
                  "Workflow Tool"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "supervised",
                "aiCapabilities": [
                  "Decision Support"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Automated Disposition Execution",
                "description": "Workflow automation triggers approved disposition actions across systems and tracks execution status.",
                "actorType": "ai_agent",
                "actorName": "Execution Orchestrator",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "ERP",
                  "WMS",
                  "Workflow Engine"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Continuous Learning & Optimization",
                "description": "AI tracks disposition outcomes and refines recommendation models based on actual recovery rates and costs.",
                "actorType": "ai_agent",
                "actorName": "Learning Engine",
                "duration": "Continuous",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Analytics Database"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Machine Learning",
                  "Data Analysis"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$800K/yr",
                "before": "$2.7M/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "1.6 hours per cycle",
                "before": "26 hours per cycle",
                "improvement": "94%"
              },
              "qualityImprovement": {
                "after": "87% recovery rate",
                "before": "65% recovery rate",
                "improvement": "+22%"
              },
              "throughputIncrease": {
                "after": "2000 SKUs/week",
                "before": "200 SKUs/week",
                "improvement": "10x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-03",
          "frictionPoint": "Siloed demand signals across sales channels and geographies",
          "severity": "Critical",
          "role": "Procurement Specialist",
          "estimatedAnnualCost": 7,
          "annualHours": 82667,
          "function": "Supply Chain",
          "subFunction": "Demand Planning",
          "strategicThemeId": "ST-02"
        },
        {
          "id": "FP-04",
          "frictionPoint": "Manual inventory disposition reviews with inconsistent criteria",
          "severity": "High",
          "role": "Procurement Specialist",
          "estimatedAnnualCost": 2.7,
          "annualHours": 32000,
          "function": "Supply Chain",
          "subFunction": "Demand Planning",
          "strategicThemeId": "ST-02"
        }
      ],
      "kpis": [
        {
          "id": "BF-03",
          "kpiName": "Demand Forecast Accuracy (MAPE)",
          "function": "Supply Chain",
          "subFunction": "Demand Planning",
          "direction": "↓",
          "baselineValue": "23% error",
          "targetValue": "12% error",
          "timeframe": "12 months",
          "strategicThemeId": "ST-02"
        },
        {
          "id": "BF-04",
          "kpiName": "Slow-Moving Inventory (>180 days)",
          "function": "Supply Chain",
          "subFunction": "Demand Planning",
          "direction": "↓",
          "baselineValue": "$89M",
          "targetValue": "$44M",
          "timeframe": "24 months",
          "strategicThemeId": "ST-02"
        }
      ]
    },
    {
      "id": "ST-03",
      "name": "Accelerated Product Development & Compliance",
      "currentState": "76,000 hours manual compliance validation, 12 jurisdiction documentation, competitor speed disadvantage",
      "targetState": "AI-assisted formulation design, 9-12 month cycles, automated regulatory mapping, 40% faster time-to-market",
      "useCases": [
        {
          "id": "UC-05",
          "title": "Adaptive Test Protocol Generator",
          "pattern": "Generator-Critic",
          "functionalArea": "Product Management",
          "description": "Generates customized test protocols by analyzing material specifications, retrieving relevant historical test results, and adapting proven methodologies from similar substrates. Reduces protocol development time from 6 weeks to 8 days through institutional knowledge reuse.",
          "targetFriction": "Sequential testing cycles with limited cross-functional knowledge sharing",
          "targetFrictionId": "FP-05",
          "capabilities": [
            "Research & Information Retrieval",
            "Content Creation"
          ],
          "agenticPattern": {
            "primary": "Generator-Critic",
            "alternative": "Reflection",
            "rationale": "Generator-Critic pattern produces test protocols through iterative generation and validation cycles. Generator creates protocols based on material specifications and regulatory requirements; Critic evaluates completeness, identifies gaps, and flags inconsistencies. Reflection alternative internalizes critique but loses the specialization benefits of dedicated validator agents."
          },
          "epochClassification": [
            "Operational, Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce protocol development time from 42 days to 8 days",
              "metric": ""
            },
            {
              "outcome": "Decrease development cycle time by 4.5 months",
              "metric": ""
            },
            {
              "outcome": "Increase first-pass test success rate from 64% to 81%",
              "metric": ""
            },
            {
              "outcome": "Build searchable repository of validated test methodologies",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "unstructured"
          ],
          "integrations": [
            "LIMS (Laboratory Information Management System)",
            "SharePoint",
            "SAP PLM"
          ],
          "hitlRequirement": "R&D director validates test protocols before lab execution",
          "valueScore": 4.46,
          "readinessScore": 5.5,
          "timeToValue": 14,
          "annualValue": 5.7,
          "priorityTier": "Quick Win",
          "benefitBreakdown": {
            "costSavings": 2.6,
            "revenue": 3.1,
            "riskMitigation": 0,
            "cashFlow": 0
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 5,
            "governance": 5
          },
          "priority": {
            "priorityScore": 4.98,
            "recommendedPhase": "Q3",
            "valueScore": 4.46,
            "ttvScore": 14
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Requirements Gathering",
                "description": "Product managers manually collect testing requirements from engineering, compliance, and quality teams via emails and meetings.",
                "actorType": "human",
                "actorName": "Product Manager",
                "duration": "8 hours",
                "isBottleneck": true,
                "systems": [
                  "Email",
                  "Meeting Calendar",
                  "SharePoint"
                ],
                "painPoints": [
                  "Fragmented communication across teams",
                  "Incomplete requirement capture"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Historical Protocol Research",
                "description": "Quality engineers search through past test protocols and regulatory documentation to find relevant templates.",
                "actorType": "human",
                "actorName": "Quality Engineer",
                "duration": "12 hours",
                "isBottleneck": true,
                "systems": [
                  "Document Management System",
                  "Regulatory Database",
                  "Archive Storage"
                ],
                "painPoints": [
                  "Limited search capabilities",
                  "Knowledge siloed across departments",
                  "Time-consuming manual review"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Draft Protocol Creation",
                "description": "Test engineer manually drafts the protocol document combining requirements and historical templates.",
                "actorType": "human",
                "actorName": "Test Engineer",
                "duration": "16 hours",
                "isBottleneck": false,
                "systems": [
                  "MS Word",
                  "Excel",
                  "Document Templates"
                ],
                "painPoints": [
                  "Inconsistent formatting",
                  "Repetitive manual work"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Cross-Functional Review",
                "description": "Multiple stakeholders sequentially review the protocol, each adding comments and requesting changes.",
                "actorType": "human",
                "actorName": "Review Committee",
                "duration": "40 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "SharePoint",
                  "Review Portal"
                ],
                "painPoints": [
                  "Sequential bottleneck",
                  "Version control issues",
                  "Redundant feedback loops"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Revision Cycles",
                "description": "Test engineer incorporates feedback through multiple revision rounds until all stakeholders approve.",
                "actorType": "human",
                "actorName": "Test Engineer",
                "duration": "24 hours",
                "isBottleneck": false,
                "systems": [
                  "MS Word",
                  "Email",
                  "Change Tracking"
                ],
                "painPoints": [
                  "Multiple iteration cycles",
                  "Conflicting stakeholder feedback"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Compliance Validation",
                "description": "Regulatory specialist validates protocol against current standards and requirements manually.",
                "actorType": "human",
                "actorName": "Regulatory Specialist",
                "duration": "8 hours",
                "isBottleneck": false,
                "systems": [
                  "Regulatory Database",
                  "Compliance Checklist"
                ],
                "painPoints": [
                  "Manual compliance checking",
                  "Risk of missed requirements"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Final Approval & Distribution",
                "description": "Product manager obtains final sign-offs and distributes approved protocol to execution teams.",
                "actorType": "human",
                "actorName": "Product Manager",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Approval Workflow",
                  "Email",
                  "Document Repository"
                ],
                "painPoints": [
                  "Approval delays",
                  "Manual distribution tracking"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Requirements Intake",
                "description": "AI agent automatically aggregates requirements from multiple sources and stakeholders in structured format.",
                "actorType": "ai_agent",
                "actorName": "Requirements Intelligence Agent",
                "duration": "15 min",
                "isBottleneck": false,
                "systems": [
                  "Email Integration",
                  "Slack",
                  "PLM System",
                  "AI Orchestration Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "NLP",
                  "Data Extraction",
                  "Requirement Classification"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Intelligent Protocol Research",
                "description": "AI retrieval system searches historical protocols, regulatory databases, and industry best practices to identify relevant content.",
                "actorType": "ai_agent",
                "actorName": "Knowledge Retrieval Agent",
                "duration": "10 min",
                "isBottleneck": false,
                "systems": [
                  "Vector Database",
                  "Regulatory Database",
                  "Document Repository",
                  "RAG System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Semantic Search",
                  "Research & Information Retrieval",
                  "Context Synthesis"
                ]
              },
              {
                "stepNumber": 3,
                "name": "AI-Generated Protocol Draft",
                "description": "Generator agent creates comprehensive test protocol draft with proper structure, test cases, and compliance references.",
                "actorType": "ai_agent",
                "actorName": "Protocol Generator Agent",
                "duration": "20 min",
                "isBottleneck": false,
                "systems": [
                  "LLM Platform",
                  "Template Engine",
                  "Document Assembly System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Content Creation",
                  "Technical Writing",
                  "Structured Document Generation"
                ]
              },
              {
                "stepNumber": 4,
                "name": "AI Critic Review & Refinement",
                "description": "Critic agent evaluates draft against quality criteria, identifies gaps, and suggests improvements across multiple dimensions.",
                "actorType": "ai_agent",
                "actorName": "Protocol Critic Agent",
                "duration": "15 min",
                "isBottleneck": false,
                "systems": [
                  "LLM Platform",
                  "Quality Assessment Engine",
                  "Compliance Validator"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Quality Analysis",
                  "Gap Detection",
                  "Consistency Checking",
                  "Compliance Validation"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Human Expert Validation",
                "description": "Product manager and subject matter experts review AI-generated protocol, validate technical accuracy, and approve or request targeted changes.",
                "actorType": "human",
                "actorName": "Product Manager & SMEs",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Collaborative Review Portal",
                  "AI Assistance Dashboard",
                  "Version Control"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Intelligent Highlighting",
                  "Change Suggestions",
                  "Explanation Generation"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Automated Compliance Check",
                "description": "AI compliance agent validates protocol against current regulatory standards and flags any deviations with explanations.",
                "actorType": "ai_agent",
                "actorName": "Compliance Validation Agent",
                "duration": "10 min",
                "isBottleneck": false,
                "systems": [
                  "Regulatory Intelligence Platform",
                  "Compliance Rule Engine",
                  "Standards Database"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Regulatory Analysis",
                  "Compliance Checking",
                  "Risk Assessment"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Automated Distribution & Tracking",
                "description": "AI orchestration system manages approval workflow, distributes finalized protocol, and tracks execution readiness.",
                "actorType": "ai_agent",
                "actorName": "Workflow Orchestration Agent",
                "duration": "5 min",
                "isBottleneck": false,
                "systems": [
                  "Workflow Automation",
                  "Notification System",
                  "Document Repository",
                  "Analytics Dashboard"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Stakeholder Notification",
                  "Progress Tracking"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$1.8M/yr",
                "before": "$5.9M/yr",
                "improvement": "69%"
              },
              "timeReduction": {
                "after": "5.5 hours",
                "before": "112 hours",
                "improvement": "95%"
              },
              "qualityImprovement": {
                "after": "91% first-pass approval",
                "before": "68% first-pass approval",
                "improvement": "+23%"
              },
              "throughputIncrease": {
                "after": "280 protocols/month",
                "before": "45 protocols/month",
                "improvement": "6.2x"
              }
            }
          }
        },
        {
          "id": "UC-06",
          "title": "Regulatory Documentation Assembler",
          "pattern": "Prompt Chaining",
          "functionalArea": "Legal & Compliance",
          "description": "Assembles jurisdiction-specific regulatory documents by retrieving approved templates, extracting product specifications, generating compliant language, and formatting according to regulatory body standards. Reduces documentation cycle from 127 days to 45 days.",
          "targetFriction": "Manual regulatory document assembly across multiple jurisdictions",
          "targetFrictionId": "FP-06",
          "capabilities": [
            "Content Creation",
            "Research & Information Retrieval"
          ],
          "agenticPattern": {
            "primary": "Prompt Chaining",
            "alternative": "Tool Use",
            "rationale": "Prompt Chaining pattern sequences document assembly through progressive refinement: jurisdiction requirements extraction, template population, cross-reference validation, and formatting compliance. Each step builds on prior outputs with deterministic transitions. Tool Use alternative provides faster execution but sacrifices the structured decomposition needed for regulatory precision."
          },
          "epochClassification": [
            "Operational, Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce documentation cycle from 127 days to 45 days",
              "metric": ""
            },
            {
              "outcome": "Decrease submission errors requiring rework by 67%",
              "metric": ""
            },
            {
              "outcome": "Enable parallel processing of multi-jurisdiction filings",
              "metric": ""
            },
            {
              "outcome": "Standardize language consistency across submissions",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "unstructured"
          ],
          "integrations": [
            "Veeva Vault",
            "SharePoint",
            "Regulatory Affairs Database"
          ],
          "hitlRequirement": "Regulatory affairs manager validates all submissions before filing",
          "valueScore": 6.2,
          "readinessScore": 6.5,
          "timeToValue": 7,
          "annualValue": 2.1,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 875,
            "revenue": 0,
            "riskMitigation": 432,
            "cashFlow": 810
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 5,
            "governance": 5
          },
          "priority": {
            "priorityScore": 6.35,
            "recommendedPhase": "Q2",
            "valueScore": 6.2,
            "ttvScore": 7
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Jurisdiction Research",
                "description": "Compliance officers manually research regulatory requirements across multiple jurisdictions.",
                "actorType": "human",
                "actorName": "Compliance Officer",
                "duration": "8 hours",
                "isBottleneck": true,
                "systems": [
                  "Legal Database",
                  "Regulatory Portals"
                ],
                "painPoints": [
                  "Time-consuming manual research",
                  "Risk of missing jurisdiction-specific requirements"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Template Selection",
                "description": "Legal team identifies and retrieves applicable document templates from repository.",
                "actorType": "human",
                "actorName": "Legal Specialist",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Document Management System"
                ],
                "painPoints": [
                  "Inconsistent template versions",
                  "Manual version control"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Content Gathering",
                "description": "Team manually collects product data, clinical results, and supporting documentation.",
                "actorType": "human",
                "actorName": "Regulatory Affairs Associate",
                "duration": "12 hours",
                "isBottleneck": true,
                "systems": [
                  "SharePoint",
                  "Clinical Data Repository",
                  "Email"
                ],
                "painPoints": [
                  "Data scattered across systems",
                  "Manual copy-paste errors"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Document Assembly",
                "description": "Specialists manually compile and format documents for each jurisdiction.",
                "actorType": "human",
                "actorName": "Regulatory Writer",
                "duration": "16 hours",
                "isBottleneck": false,
                "systems": [
                  "Microsoft Word",
                  "Adobe Acrobat"
                ],
                "painPoints": [
                  "Manual formatting inconsistencies",
                  "Repetitive assembly work"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Compliance Review",
                "description": "Senior compliance team reviews documents for regulatory accuracy and completeness.",
                "actorType": "human",
                "actorName": "Senior Compliance Manager",
                "duration": "10 hours",
                "isBottleneck": false,
                "systems": [
                  "Document Review Tool"
                ],
                "painPoints": [
                  "Slow review cycles",
                  "Multiple revision rounds"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Revision Cycles",
                "description": "Documents undergo multiple revision rounds based on feedback.",
                "actorType": "human",
                "actorName": "Regulatory Team",
                "duration": "20 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Microsoft Word"
                ],
                "painPoints": [
                  "Extended back-and-forth",
                  "Version confusion"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Final Approval & Filing",
                "description": "Legal counsel provides final approval and submits to regulatory authorities.",
                "actorType": "human",
                "actorName": "Chief Legal Officer",
                "duration": "6 hours",
                "isBottleneck": false,
                "systems": [
                  "Regulatory Filing Portal"
                ],
                "painPoints": [
                  "Last-minute changes require rework"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "AI Jurisdiction Analysis",
                "description": "AI agent automatically analyzes and retrieves all applicable regulatory requirements by jurisdiction.",
                "actorType": "ai_agent",
                "actorName": "Regulatory Intelligence Agent",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "Regulatory AI Platform",
                  "Global Regulatory Database"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Research & Information Retrieval",
                  "NLP",
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Automated Content Aggregation",
                "description": "AI retrieves and organizes relevant product data, clinical results, and documentation from all sources.",
                "actorType": "ai_agent",
                "actorName": "Document Intelligence Agent",
                "duration": "20 minutes",
                "isBottleneck": false,
                "systems": [
                  "Enterprise Data Lake",
                  "Clinical Database",
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Research & Information Retrieval",
                  "Data Integration",
                  "Content Extraction"
                ]
              },
              {
                "stepNumber": 3,
                "name": "AI Document Generation",
                "description": "AI generates jurisdiction-specific regulatory documents using appropriate templates and compliance rules.",
                "actorType": "ai_agent",
                "actorName": "Document Assembly Agent",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Content Platform",
                  "Template Library"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Content Creation",
                  "Template Processing",
                  "Multi-jurisdiction Compliance"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Automated Quality Check",
                "description": "AI performs comprehensive compliance validation and identifies potential gaps or inconsistencies.",
                "actorType": "ai_agent",
                "actorName": "Compliance Validation Agent",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Quality Platform",
                  "Compliance Rule Engine"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Validation",
                  "Quality Assurance",
                  "Error Detection"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Expert Review & Refinement",
                "description": "Compliance officers review AI-generated documents, make strategic decisions, and approve jurisdiction-specific nuances.",
                "actorType": "human",
                "actorName": "Senior Compliance Manager",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "AI Review Interface",
                  "Collaboration Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Assisted Review",
                  "Change Tracking"
                ]
              },
              {
                "stepNumber": 6,
                "name": "AI-Assisted Revision",
                "description": "AI incorporates human feedback and regenerates sections with tracked changes for approval.",
                "actorType": "ai_agent",
                "actorName": "Revision Assistant Agent",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Version Control"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Content Creation",
                  "Change Management",
                  "Version Control"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Final Approval & Submission",
                "description": "Legal counsel performs final review and authorizes automated submission to regulatory portals.",
                "actorType": "human",
                "actorName": "Chief Legal Officer",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "Digital Signature Platform",
                  "Regulatory Filing System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Automated Filing",
                  "Submission Tracking"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$650K/yr",
                "before": "$2.3M/yr",
                "improvement": "72%"
              },
              "timeReduction": {
                "after": "5.5 hours",
                "before": "76 hours",
                "improvement": "93%"
              },
              "qualityImprovement": {
                "after": "96%",
                "before": "68%",
                "improvement": "+28%"
              },
              "throughputIncrease": {
                "after": "1,500 filings/yr",
                "before": "272 filings/yr",
                "improvement": "5.5x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-05",
          "frictionPoint": "Sequential testing cycles with limited cross-functional knowledge sharing",
          "severity": "Critical",
          "role": "Business Analyst",
          "estimatedAnnualCost": 5.9,
          "annualHours": 62000,
          "function": "Product Management",
          "subFunction": "Product Strategy",
          "strategicThemeId": "ST-03"
        },
        {
          "id": "FP-06",
          "frictionPoint": "Manual regulatory document assembly across multiple jurisdictions",
          "severity": "Critical",
          "role": "Compliance Officer",
          "estimatedAnnualCost": 2.3,
          "annualHours": 20667,
          "function": "Legal & Compliance",
          "subFunction": "Regulatory Filing",
          "strategicThemeId": "ST-03"
        }
      ],
      "kpis": [
        {
          "id": "BF-05",
          "kpiName": "New Product Development Cycle Time",
          "function": "Product Management",
          "subFunction": "Product Strategy",
          "direction": "↓",
          "baselineValue": "21 months",
          "targetValue": "10.5 months",
          "timeframe": "24 months",
          "strategicThemeId": "ST-03"
        },
        {
          "id": "BF-06",
          "kpiName": "Regulatory Documentation Cycle Time",
          "function": "Legal & Compliance",
          "subFunction": "Regulatory Filing",
          "direction": "↓",
          "baselineValue": "127 days",
          "targetValue": "51 days",
          "timeframe": "18 months",
          "strategicThemeId": "ST-03"
        }
      ]
    },
    {
      "id": "ST-04",
      "name": "Commercial Effectiveness & Quote Velocity",
      "currentState": "89,000 hours custom specification, 8.3-day quote cycles, manual feasibility validation across facilities",
      "targetState": "Automated technical configuration, 3.1-day quotes, real-time capacity validation, 18% abandonment rate",
      "useCases": [
        {
          "id": "UC-07",
          "title": "Intelligent Quote Configuration Engine",
          "pattern": "Orchestrator-Workers",
          "functionalArea": "Sales",
          "description": "Orchestrates parallel workflows for BOM analysis, pricing optimization, margin calculation, and lead time estimation. Generates complete quotes in 2.1 days instead of 8.3 days by eliminating manual handoffs between sales, engineering, and finance.",
          "targetFriction": "Custom pricing calculations requiring manual BOM analysis and margin modeling",
          "targetFrictionId": "FP-07",
          "capabilities": [
            "Workflow Automation",
            "Data Analysis"
          ],
          "agenticPattern": {
            "primary": "Orchestrator-Workers",
            "alternative": "Agent Handoff",
            "rationale": "Orchestrator-Workers pattern parallelizes BOM analysis, margin calculation, and lead time estimation across specialized agents, then synthesizes results into complete quotes. Orchestrator manages dependencies and conflict resolution. Agent Handoff alternative sequences tasks but loses time-to-value through serial processing of independent calculations."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce complex quote cycle from 8.3 days to 2.1 days",
              "metric": ""
            },
            {
              "outcome": "Increase quote volume capacity by 160% without headcount",
              "metric": ""
            },
            {
              "outcome": "Improve margin accuracy through automated cost rollup",
              "metric": ""
            },
            {
              "outcome": "Decrease quote-to-order conversion time by 4.2 days",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured"
          ],
          "integrations": [
            "Salesforce CPQ",
            "SAP ERP",
            "Tableau CRM"
          ],
          "hitlRequirement": "Sales manager approves quotes with margins below 18% or values exceeding $500K",
          "valueScore": 10,
          "readinessScore": 5.9,
          "timeToValue": 10,
          "annualValue": 6.3,
          "priorityTier": "Champion",
          "benefitBreakdown": {
            "costSavings": 2.1,
            "revenue": 4.1,
            "riskMitigation": 0,
            "cashFlow": 0
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 5,
            "governance": 5
          },
          "priority": {
            "priorityScore": 7.95,
            "recommendedPhase": "Q2",
            "valueScore": 10,
            "ttvScore": 10
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Quote Request Intake",
                "description": "Sales rep receives customer RFQ and manually logs requirements into CRM.",
                "actorType": "human",
                "actorName": "Sales Representative",
                "duration": "45 minutes",
                "isBottleneck": false,
                "systems": [
                  "CRM",
                  "Email"
                ],
                "painPoints": [
                  "Data entry errors",
                  "Incomplete specifications"
                ]
              },
              {
                "stepNumber": 2,
                "name": "BOM Analysis",
                "description": "Engineer manually reviews product specs and creates bill of materials with component costs.",
                "actorType": "human",
                "actorName": "Sales Engineer",
                "duration": "4 hours",
                "isBottleneck": true,
                "systems": [
                  "ERP",
                  "Excel",
                  "PLM"
                ],
                "painPoints": [
                  "Manual component lookup",
                  "Version control issues",
                  "Time-intensive research"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Margin Calculation",
                "description": "Pricing analyst calculates margins using spreadsheets with historical data and cost models.",
                "actorType": "human",
                "actorName": "Pricing Analyst",
                "duration": "3 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "ERP",
                  "Pricing Database"
                ],
                "painPoints": [
                  "Formula errors",
                  "Outdated cost data",
                  "Manual data gathering"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Approval Routing",
                "description": "Quote routed through email for approvals from sales management and finance.",
                "actorType": "human",
                "actorName": "Sales Manager",
                "duration": "2 days",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "CRM"
                ],
                "painPoints": [
                  "Approval delays",
                  "Email chain confusion",
                  "Lost requests"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Quote Generation",
                "description": "Sales ops manually creates formatted quote document from approved pricing.",
                "actorType": "human",
                "actorName": "Sales Operations",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "Word",
                  "CRM",
                  "PDF"
                ],
                "painPoints": [
                  "Formatting inconsistencies",
                  "Manual document assembly"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "AI Quote Intake",
                "description": "AI agent extracts requirements from RFQ using NLP and auto-populates CRM.",
                "actorType": "ai_agent",
                "actorName": "Intake AI Agent",
                "duration": "2 minutes",
                "isBottleneck": false,
                "systems": [
                  "CRM",
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "NLP",
                  "Data Extraction"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Automated BOM Generation",
                "description": "AI analyzes product specs and generates optimized BOM with real-time component costs.",
                "actorType": "ai_agent",
                "actorName": "BOM Configuration AI",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "ERP",
                  "PLM",
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Rules Engine",
                  "API Integration"
                ]
              },
              {
                "stepNumber": 3,
                "name": "AI Margin Modeling",
                "description": "AI calculates optimal margins using ML models trained on historical pricing and market data.",
                "actorType": "ai_agent",
                "actorName": "Pricing Intelligence AI",
                "duration": "3 minutes",
                "isBottleneck": false,
                "systems": [
                  "Pricing Database",
                  "AI Platform",
                  "ERP"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "ML Prediction",
                  "Data Analysis",
                  "Optimization"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Human Review & Approval",
                "description": "Sales manager reviews AI-generated quote with confidence scores and makes final approval decision.",
                "actorType": "human",
                "actorName": "Sales Manager",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "Workflow Platform",
                  "CRM"
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
                "name": "Automated Quote Delivery",
                "description": "AI generates branded quote document and delivers via customer preferred channel.",
                "actorType": "ai_agent",
                "actorName": "Document AI Agent",
                "duration": "1 minute",
                "isBottleneck": false,
                "systems": [
                  "CRM",
                  "Document Platform",
                  "Email"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Document Generation",
                  "Workflow Automation"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$1.2M/yr",
                "before": "$4.6M/yr",
                "improvement": "74%"
              },
              "timeReduction": {
                "after": "26 minutes",
                "before": "2.5 days",
                "improvement": "98%"
              },
              "qualityImprovement": {
                "after": "96%",
                "before": "68%",
                "improvement": "+28%"
              },
              "throughputIncrease": {
                "after": "2,100 quotes/mo",
                "before": "380 quotes/mo",
                "improvement": "5.5x"
              }
            }
          }
        },
        {
          "id": "UC-08",
          "title": "Technical Specification Matching Agent",
          "pattern": "Tool Use",
          "functionalArea": "Sales",
          "description": "Matches customer technical requirements to product specifications using semantic search across catalogs, historical orders, and engineering documentation. Recommends exact matches or suitable substitutes with performance tradeoff analysis, reducing quote abandonment.",
          "targetFriction": "Incomplete technical specification matching for non-standard requests",
          "targetFrictionId": "FP-08",
          "capabilities": [
            "Research & Information Retrieval",
            "Data Analysis"
          ],
          "agenticPattern": {
            "primary": "Tool Use",
            "alternative": "ReAct Loop",
            "rationale": "Tool Use pattern invokes specialized tools for semantic search across product catalogs, specification comparison, and substitute recommendation. Direct tool invocation provides deterministic results for bounded technical queries. ReAct Loop alternative adds reasoning overhead without material accuracy gains for well-structured product data."
          },
          "epochClassification": [
            "Operational, Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce quote abandonment rate from 34% to 21%",
              "metric": ""
            },
            {
              "outcome": "Increase specification match confidence from 68% to 89%",
              "metric": ""
            },
            {
              "outcome": "Enable self-service quoting for 40% of standard requests",
              "metric": ""
            },
            {
              "outcome": "Capture $14M in previously abandoned opportunities",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "unstructured"
          ],
          "integrations": [
            "Salesforce CRM",
            "SAP PLM",
            "Product Documentation Repository"
          ],
          "hitlRequirement": "Sales engineer validates technical recommendations before customer communication",
          "valueScore": 5.89,
          "readinessScore": 5.3,
          "timeToValue": 11,
          "annualValue": 3.7,
          "priorityTier": "Strategic Bet",
          "benefitBreakdown": {
            "costSavings": 1.7,
            "revenue": 2.1,
            "riskMitigation": 0,
            "cashFlow": 0
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 5,
            "governance": 5
          },
          "priority": {
            "priorityScore": 5.6,
            "recommendedPhase": "Q3",
            "valueScore": 5.89,
            "ttvScore": 11
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Receive Non-Standard Request",
                "description": "Sales rep receives customer request with complex technical specifications outside standard catalog.",
                "actorType": "human",
                "actorName": "Sales Representative",
                "duration": "30 min",
                "isBottleneck": false,
                "systems": [
                  "CRM",
                  "Email"
                ],
                "painPoints": [
                  "Unclear specification requirements",
                  "Missing technical details"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Manual Specification Research",
                "description": "Sales engineer manually searches product databases, datasheets, and archives for matching specifications.",
                "actorType": "human",
                "actorName": "Sales Engineer",
                "duration": "4 hours",
                "isBottleneck": true,
                "systems": [
                  "Product Database",
                  "Document Repository",
                  "Engineering Files"
                ],
                "painPoints": [
                  "Incomplete product knowledge",
                  "Time-consuming searches",
                  "Fragmented data sources"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Consult Engineering Team",
                "description": "Sales engineer escalates to product engineering team for technical feasibility validation.",
                "actorType": "human",
                "actorName": "Product Engineer",
                "duration": "3 days",
                "isBottleneck": true,
                "systems": [
                  "Email",
                  "Engineering Systems"
                ],
                "painPoints": [
                  "Long response times",
                  "Engineering team bottlenecked",
                  "Back-and-forth clarifications"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Compile Technical Match Report",
                "description": "Sales engineer compiles findings into specification matching report with product recommendations.",
                "actorType": "human",
                "actorName": "Sales Engineer",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Word",
                  "Excel"
                ],
                "painPoints": [
                  "Manual compilation",
                  "Inconsistent report formats"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Review and Approve",
                "description": "Sales manager reviews technical match and approves recommended solution approach.",
                "actorType": "human",
                "actorName": "Sales Manager",
                "duration": "1 day",
                "isBottleneck": false,
                "systems": [
                  "CRM",
                  "Email"
                ],
                "painPoints": [
                  "Delayed approvals",
                  "Limited technical visibility"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Generate Quote",
                "description": "Sales rep generates formal quote based on approved technical specifications and pricing.",
                "actorType": "human",
                "actorName": "Sales Representative",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "CPQ",
                  "CRM"
                ],
                "painPoints": [
                  "Manual quote creation"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Receive and Parse Request",
                "description": "AI agent ingests customer request and extracts technical specifications using NLP.",
                "actorType": "ai_agent",
                "actorName": "Spec Matching AI Agent",
                "duration": "2 min",
                "isBottleneck": false,
                "systems": [
                  "CRM",
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "NLP",
                  "Document Understanding"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Intelligent Specification Search",
                "description": "AI agent searches across all product databases and engineering documents for matching specifications.",
                "actorType": "ai_agent",
                "actorName": "Spec Matching AI Agent",
                "duration": "3 min",
                "isBottleneck": false,
                "systems": [
                  "Product Database",
                  "Document Repository",
                  "Vector Database",
                  "Engineering Files"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Semantic Search",
                  "Information Retrieval",
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Generate Match Analysis",
                "description": "AI agent analyzes specification alignment, identifies best matches, and flags gaps or customization needs.",
                "actorType": "ai_agent",
                "actorName": "Spec Matching AI Agent",
                "duration": "5 min",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Analytics Engine"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Pattern Recognition",
                  "Gap Analysis"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Human Expert Review",
                "description": "Sales engineer reviews AI-generated matches and validates recommendations for complex or edge cases.",
                "actorType": "human",
                "actorName": "Sales Engineer",
                "duration": "30 min",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "CRM"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Decision Support"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Auto-Generate Technical Report",
                "description": "AI agent creates formatted specification matching report with product recommendations and confidence scores.",
                "actorType": "ai_agent",
                "actorName": "Spec Matching AI Agent",
                "duration": "2 min",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Document Generation"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Document Generation",
                  "Data Synthesis"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Generate Quote",
                "description": "AI-assisted CPQ system auto-generates quote based on validated technical specifications.",
                "actorType": "ai_agent",
                "actorName": "CPQ AI Assistant",
                "duration": "5 min",
                "isBottleneck": false,
                "systems": [
                  "CPQ",
                  "CRM",
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Automation",
                  "Pricing Optimization"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$1.2M/yr",
                "before": "$3.5M/yr",
                "improvement": "66%"
              },
              "timeReduction": {
                "after": "1.5 hours",
                "before": "4.5 days",
                "improvement": "92%"
              },
              "qualityImprovement": {
                "after": "91%",
                "before": "68%",
                "improvement": "+23%"
              },
              "throughputIncrease": {
                "after": "4200/yr",
                "before": "850/yr",
                "improvement": "5x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-07",
          "frictionPoint": "Custom pricing calculations requiring manual BOM analysis and margin modeling",
          "severity": "High",
          "role": "Sales Representative",
          "estimatedAnnualCost": 4.6,
          "annualHours": 50667,
          "function": "Sales",
          "subFunction": "Sales Operations",
          "strategicThemeId": "ST-04"
        },
        {
          "id": "FP-08",
          "frictionPoint": "Incomplete technical specification matching for non-standard requests",
          "severity": "High",
          "role": "Sales Representative",
          "estimatedAnnualCost": 3.5,
          "annualHours": 39333,
          "function": "Sales",
          "subFunction": "Sales Operations",
          "strategicThemeId": "ST-04"
        }
      ],
      "kpis": [
        {
          "id": "BF-07",
          "kpiName": "Complex Quote Cycle Time",
          "function": "Sales",
          "subFunction": "Sales Operations",
          "direction": "↓",
          "baselineValue": "8.3 days",
          "targetValue": "3.1 days",
          "timeframe": "12 months",
          "strategicThemeId": "ST-04"
        },
        {
          "id": "BF-08",
          "kpiName": "Quote Abandonment Rate (Complex)",
          "function": "Sales",
          "subFunction": "Sales Operations",
          "direction": "↓",
          "baselineValue": "34%",
          "targetValue": "18%",
          "timeframe": "12 months",
          "strategicThemeId": "ST-04"
        }
      ]
    },
    {
      "id": "ST-05",
      "name": "Post-Merger Integration & Margin Expansion",
      "currentState": "8.4% operating margin, fragmented systems, inconsistent data schemas, $34M IT integration spend",
      "targetState": "11.2% operating margin restoration, unified data architecture, standardized processes, AI-enabled decision support",
      "useCases": [
        {
          "id": "UC-09",
          "title": "Cross-ERP Variance Reconciliation Bot",
          "pattern": "Reflection",
          "functionalArea": "Finance",
          "description": "Reconciles financial data across fragmented ERP instances by identifying variances, classifying root causes, and generating variance explanations. Reduces monthly close cycle from 12 days to 6 days through automated exception identification and resolution.",
          "targetFriction": "Manual variance analysis across fragmented ERP instances",
          "targetFrictionId": "FP-09",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Reflection",
            "alternative": "Tool Use",
            "rationale": "Reflection pattern enables iterative refinement of variance explanations through self-critique. The agent generates initial variance hypotheses, evaluates plausibility against historical patterns, and refines explanations until confidence thresholds are met. Tool Use alternative provides faster execution but sacrifices the quality assurance needed for financial accuracy."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce monthly close cycle from 12 days to 6 days",
              "metric": ""
            },
            {
              "outcome": "Decrease variance analysis effort by 1,840 hours annually",
              "metric": ""
            },
            {
              "outcome": "Improve operating margin visibility by 5 business days",
              "metric": ""
            },
            {
              "outcome": "Standardize variance classification across entities",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured"
          ],
          "integrations": [
            "SAP ERP",
            "Oracle Financials",
            "Hyperion EPM",
            "Power BI"
          ],
          "hitlRequirement": "Controller validates material variances exceeding $250K before close",
          "valueScore": 1.57,
          "readinessScore": 4.5,
          "timeToValue": 18,
          "annualValue": 2.1,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 1.9,
            "revenue": 0,
            "riskMitigation": 210,
            "cashFlow": 0
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 5,
            "governance": 5
          },
          "priority": {
            "priorityScore": 3.04,
            "recommendedPhase": "Q4",
            "valueScore": 1.57,
            "ttvScore": 18
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Data Extraction from Multiple ERPs",
                "description": "FP&A analysts manually export financial data from 3-5 different ERP systems post-merger.",
                "actorType": "human",
                "actorName": "FP&A Analyst",
                "duration": "8 hours",
                "isBottleneck": true,
                "systems": [
                  "SAP",
                  "Oracle Financials",
                  "NetSuite",
                  "Legacy ERP"
                ],
                "painPoints": [
                  "Inconsistent data formats",
                  "Manual download process",
                  "System access delays"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Data Normalization",
                "description": "Analysts manually standardize chart of accounts and currency across disparate systems.",
                "actorType": "human",
                "actorName": "Senior Financial Analyst",
                "duration": "12 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Access Database"
                ],
                "painPoints": [
                  "Mapping errors",
                  "Version control issues",
                  "Time-intensive manual work"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Variance Calculation",
                "description": "Spreadsheet-based comparison of actual vs budget across all entities.",
                "actorType": "human",
                "actorName": "FP&A Analyst",
                "duration": "6 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel"
                ],
                "painPoints": [
                  "Formula errors",
                  "Broken links",
                  "Manual reconciliation"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Root Cause Analysis",
                "description": "Analysts investigate material variances by reviewing transaction details and contacting business units.",
                "actorType": "human",
                "actorName": "FP&A Manager",
                "duration": "16 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "ERP Systems",
                  "Excel"
                ],
                "painPoints": [
                  "Incomplete documentation",
                  "Delayed responses",
                  "Missing context"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Report Compilation",
                "description": "Finance team consolidates findings into executive variance reports with commentary.",
                "actorType": "human",
                "actorName": "Finance Director",
                "duration": "8 hours",
                "isBottleneck": false,
                "systems": [
                  "PowerPoint",
                  "Excel"
                ],
                "painPoints": [
                  "Last-minute data changes",
                  "Inconsistent formatting",
                  "Version proliferation"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Executive Review",
                "description": "CFO and leadership review variance reports and request clarifications.",
                "actorType": "human",
                "actorName": "CFO",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Meeting"
                ],
                "painPoints": [
                  "Delayed decision-making",
                  "Insufficient drill-down capability"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Multi-ERP Data Extraction",
                "description": "AI bot automatically connects to all ERP systems and extracts financial data via APIs.",
                "actorType": "ai_agent",
                "actorName": "ERP Integration Bot",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "SAP",
                  "Oracle Financials",
                  "NetSuite",
                  "Legacy ERP",
                  "Integration Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "API Integration",
                  "Data Extraction"
                ]
              },
              {
                "stepNumber": 2,
                "name": "AI-Powered Data Normalization",
                "description": "ML model harmonizes chart of accounts, currencies, and dimensions across all systems.",
                "actorType": "ai_agent",
                "actorName": "Data Normalization Engine",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "Data Warehouse",
                  "ML Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Pattern Recognition",
                  "Entity Mapping"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Automated Variance Detection",
                "description": "AI analyzes normalized data and identifies all variances with statistical significance scoring.",
                "actorType": "ai_agent",
                "actorName": "Variance Analysis Bot",
                "duration": "20 minutes",
                "isBottleneck": false,
                "systems": [
                  "Analytics Platform",
                  "Data Warehouse"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Statistical Analysis",
                  "Anomaly Detection"
                ]
              },
              {
                "stepNumber": 4,
                "name": "AI Root Cause Investigation",
                "description": "System performs drill-down analysis and generates hypotheses using historical patterns and transaction data.",
                "actorType": "ai_agent",
                "actorName": "Root Cause Analysis Agent",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "Analytics Platform",
                  "Knowledge Base",
                  "ERP Systems"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Pattern Recognition",
                  "Causal Inference"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Human Validation & Business Context",
                "description": "FP&A manager reviews AI-generated findings and adds business context for material variances.",
                "actorType": "human",
                "actorName": "FP&A Manager",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Variance Dashboard",
                  "Collaboration Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "augmented",
                "aiCapabilities": [
                  "Decision Support",
                  "Data Visualization"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Automated Report Generation",
                "description": "AI generates executive-ready variance reports with visualizations and validated commentary.",
                "actorType": "ai_agent",
                "actorName": "Report Generation Bot",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "Reporting Platform",
                  "BI Tool"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Document Generation",
                  "Data Visualization",
                  "NLG"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Interactive Executive Review",
                "description": "CFO accesses real-time dashboard with AI-powered drill-down and scenario analysis capabilities.",
                "actorType": "human",
                "actorName": "CFO",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Executive Dashboard",
                  "Analytics Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "augmented",
                "aiCapabilities": [
                  "Interactive Analytics",
                  "Natural Language Query"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$1.2M/yr",
                "before": "$4.3M/yr",
                "improvement": "72%"
              },
              "timeReduction": {
                "after": "6.5 hours",
                "before": "54 hours",
                "improvement": "88%"
              },
              "qualityImprovement": {
                "after": "96% accuracy",
                "before": "68% accuracy",
                "improvement": "+28%"
              },
              "throughputIncrease": {
                "after": "120 reconciliations/month",
                "before": "12 reconciliations/month",
                "improvement": "10x"
              }
            }
          }
        },
        {
          "id": "UC-10",
          "title": "Master Data Harmonization Engine",
          "pattern": "Orchestrator-Workers",
          "functionalArea": "Information Technology",
          "description": "Maps inconsistent master data schemas across legacy ERP systems, proposes harmonization rules, validates transformations, and monitors data quality post-migration. Accelerates integration from 47% to 85% completeness within 6 months.",
          "targetFriction": "Inconsistent master data schemas preventing automated consolidation",
          "targetFrictionId": "FP-10",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Orchestrator-Workers",
            "alternative": "Parallelization",
            "rationale": "Orchestrator-Workers pattern coordinates specialized agents for schema mapping, data quality validation, and transformation rule generation. Orchestrator manages dependencies between data domains and resolves conflicting mappings. Parallelization alternative accelerates independent domain processing but loses intelligent conflict resolution across related data elements."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Increase integration completeness from 47% to 85%",
              "metric": ""
            },
            {
              "outcome": "Reduce manual data reconciliation by 2,340 hours quarterly",
              "metric": ""
            },
            {
              "outcome": "Enable real-time consolidation across entities",
              "metric": ""
            },
            {
              "outcome": "Establish governed master data repository",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured"
          ],
          "integrations": [
            "SAP MDG",
            "Informatica MDM",
            "Oracle GoldenGate",
            "Talend"
          ],
          "hitlRequirement": "Data governance council approves schema changes affecting downstream reporting",
          "valueScore": 1,
          "readinessScore": 4.7,
          "timeToValue": 16,
          "annualValue": 2.4,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 2.3,
            "revenue": 0,
            "riskMitigation": 150,
            "cashFlow": 0
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 5,
            "governance": 5
          },
          "priority": {
            "priorityScore": 2.85,
            "recommendedPhase": "Q4",
            "valueScore": 1,
            "ttvScore": 16
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Extract Data from Legacy Systems",
                "description": "Data engineers manually extract master data from multiple acquired company systems with different schemas.",
                "actorType": "human",
                "actorName": "Data Engineer",
                "duration": "8 hours",
                "isBottleneck": true,
                "systems": [
                  "SAP",
                  "Oracle ERP",
                  "Legacy CRM",
                  "Custom Databases"
                ],
                "painPoints": [
                  "Inconsistent data formats",
                  "Manual export processes",
                  "System access delays"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Manual Schema Mapping",
                "description": "Data architects create field-by-field mapping documents between disparate schemas across systems.",
                "actorType": "human",
                "actorName": "Data Architect",
                "duration": "16 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Visio",
                  "Confluence"
                ],
                "painPoints": [
                  "Time-intensive manual mapping",
                  "Schema conflicts",
                  "Undocumented field definitions"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Data Transformation Scripting",
                "description": "Developers write custom ETL scripts to transform data according to mapping specifications.",
                "actorType": "human",
                "actorName": "ETL Developer",
                "duration": "24 hours",
                "isBottleneck": false,
                "systems": [
                  "Python",
                  "SQL",
                  "Talend"
                ],
                "painPoints": [
                  "Custom code for each schema",
                  "Testing overhead",
                  "Script maintenance burden"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Data Quality Validation",
                "description": "Analysts manually validate transformed data for completeness, accuracy, and business rule compliance.",
                "actorType": "human",
                "actorName": "Data Analyst",
                "duration": "12 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "SQL",
                  "Data Quality Tools"
                ],
                "painPoints": [
                  "Manual spot-checking",
                  "Inconsistent validation rules",
                  "High error rates"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Exception Resolution",
                "description": "Business users manually review and resolve data conflicts and duplicates flagged during validation.",
                "actorType": "human",
                "actorName": "Business Data Steward",
                "duration": "10 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "Email",
                  "Ticketing System"
                ],
                "painPoints": [
                  "High volume of exceptions",
                  "No context for decisions",
                  "Rework cycles"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Master Data Load",
                "description": "Database administrators load consolidated master data into the target enterprise system.",
                "actorType": "human",
                "actorName": "Database Administrator",
                "duration": "6 hours",
                "isBottleneck": false,
                "systems": [
                  "Master Data Management",
                  "Enterprise Data Warehouse"
                ],
                "painPoints": [
                  "Load failures",
                  "Data integrity issues",
                  "Rollback complexity"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Post-Load Reconciliation",
                "description": "Teams perform manual reconciliation reports to verify data accuracy across all systems.",
                "actorType": "human",
                "actorName": "Data Governance Team",
                "duration": "8 hours",
                "isBottleneck": false,
                "systems": [
                  "BI Tools",
                  "Excel",
                  "Custom Reports"
                ],
                "painPoints": [
                  "Time lag in verification",
                  "Incomplete audit trails",
                  "Manual report generation"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Multi-Source Data Ingestion",
                "description": "AI orchestrator automatically connects to and extracts master data from all source systems via APIs and connectors.",
                "actorType": "ai_agent",
                "actorName": "Data Ingestion Orchestrator",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "SAP",
                  "Oracle ERP",
                  "Legacy CRM",
                  "Custom Databases",
                  "Integration Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "API Integration"
                ]
              },
              {
                "stepNumber": 2,
                "name": "AI-Powered Schema Discovery & Mapping",
                "description": "ML models automatically analyze schemas, identify field relationships, and generate mapping rules based on semantic analysis.",
                "actorType": "ai_agent",
                "actorName": "Schema Harmonization Agent",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Knowledge Graph",
                  "Mapping Repository"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "NLP",
                  "Pattern Recognition"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Intelligent Data Transformation",
                "description": "AI workers execute transformations using learned patterns, apply business rules, and detect anomalies in real-time.",
                "actorType": "ai_agent",
                "actorName": "Transformation Worker Pool",
                "duration": "20 minutes",
                "isBottleneck": false,
                "systems": [
                  "ETL Engine",
                  "Rule Engine",
                  "Anomaly Detection"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Data Analysis",
                  "Anomaly Detection"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Automated Quality Scoring",
                "description": "AI validates data completeness, accuracy, and consistency using learned quality rules and confidence scoring.",
                "actorType": "ai_agent",
                "actorName": "Quality Assessment Agent",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "Data Quality Platform",
                  "Validation Engine"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Pattern Recognition"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Human Review of Critical Exceptions",
                "description": "Data stewards review only high-risk conflicts flagged by AI with contextual recommendations and impact analysis.",
                "actorType": "human",
                "actorName": "Senior Data Steward",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Exception Dashboard",
                  "Decision Support System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Data Analysis",
                  "Recommendation Systems"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Orchestrated Master Data Publishing",
                "description": "AI orchestrator coordinates automated loading and synchronization across all target systems with rollback capability.",
                "actorType": "ai_agent",
                "actorName": "Data Publishing Orchestrator",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "Master Data Management",
                  "Enterprise Data Warehouse",
                  "Sync Engine"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Real-Time Reconciliation & Monitoring",
                "description": "AI continuously monitors data lineage, validates reconciliation, and alerts on discrepancies with auto-remediation.",
                "actorType": "ai_agent",
                "actorName": "Monitoring & Reconciliation Agent",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "Observability Platform",
                  "Audit System",
                  "Alert Management"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Anomaly Detection"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$1.4M/yr",
                "before": "$5.1M/yr",
                "improvement": "73%"
              },
              "timeReduction": {
                "after": "3.5 hours",
                "before": "84 hours",
                "improvement": "96%"
              },
              "qualityImprovement": {
                "after": "96% accuracy",
                "before": "72% accuracy",
                "improvement": "+24%"
              },
              "throughputIncrease": {
                "after": "8,100 hrs/yr",
                "before": "54,000 hrs/yr",
                "improvement": "6.7x efficiency"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-09",
          "frictionPoint": "Manual variance analysis across fragmented ERP instances",
          "severity": "High",
          "role": "Business Analyst",
          "estimatedAnnualCost": 4.3,
          "annualHours": 45333,
          "function": "Finance",
          "subFunction": "Financial Planning & Analysis",
          "strategicThemeId": "ST-05"
        },
        {
          "id": "FP-10",
          "frictionPoint": "Inconsistent master data schemas preventing automated consolidation",
          "severity": "Critical",
          "role": "Business Analyst",
          "estimatedAnnualCost": 5.1,
          "annualHours": 54000,
          "function": "Information Technology",
          "subFunction": "Data Management",
          "strategicThemeId": "ST-05"
        }
      ],
      "kpis": [
        {
          "id": "BF-09",
          "kpiName": "Operating Margin",
          "function": "Finance",
          "subFunction": "Financial Planning & Analysis",
          "direction": "↑",
          "baselineValue": "8.4%",
          "targetValue": "11.2%",
          "timeframe": "24 months",
          "strategicThemeId": "ST-05"
        },
        {
          "id": "BF-10",
          "kpiName": "System Integration Completeness",
          "function": "Information Technology",
          "subFunction": "Data Management",
          "direction": "↑",
          "baselineValue": "47%",
          "targetValue": "89%",
          "timeframe": "18 months",
          "strategicThemeId": "ST-05"
        }
      ]
    }
  ],
  "methodology": {
    "framework": "BlueAlly 7-Step AI Assessment Framework with financial modeling, readiness scoring, and workflow transformation analysis",
    "assumptions": [
      "All monetary values derived from public filings (10-K, quarterly earnings) and standard industry benchmarks",
      "Fully-loaded labor rates: $150/hour professional staff, $85/hour production personnel",
      "Implementation assumes 12-month base timeline with phased rollout across facilities",
      "ROI calculations use 10% discount rate for NPV, 3-year payback threshold",
      "Readiness scores based on disclosed IT integration investments and data maturity indicators",
      "Probability of success factors in organizational change management complexity"
    ]
  },
  "executiveSummary": {
    "headline": "Mativ should execute 4 Critical-priority AI initiatives in Q1-Q2 to capture $19.5M in first-year value from a $45.4M total opportunity.",
    "context": "Post-merger integration between Fibertex and Schweitzer-Mauduit created $2.9B in combined revenue but fragmented data systems constrain operational efficiency. Legacy ERP platforms operate in functional silos, limiting enterprise visibility while manufacturing and supply chain teams manually reconcile information across 30+ facilities. AI deployment offers immediate relief—ten high-impact use cases can reshape manufacturing yield management, accelerate quote cycles, and unlock working capital trapped in slow-moving inventory.",
    "criticalPath": "Q1 success depends on manufacturing data access—confirm MES historians provide programmatic API access before committing to UC-01 timeline. UC-07 requires product configuration rules extracted from tribal knowledge; budget 60 days for SME interviews preceding AI training. Governance framework must launch in parallel—establish model monitoring, bias auditing, and human-in-loop validation protocols before any production deployment.",
    "recommendedAction": "Launch UC-01, UC-04, UC-06, and UC-07 in Q1 2025 with $4.8M combined investment targeting $19.5M first-year return. Assign executive sponsors from manufacturing and commercial leadership, establish monthly steering committee reviews, and mandate 90-day proof-of-value milestones before scaling.",
    "findings": [
      {
        "title": "Manufacturing use cases deliver fastest payback despite data fragmentation",
        "body": "UC-01 (Yield Deviation Root Cause Engine) generates $6.2M annually by analyzing production anomalies across converting lines, while UC-04 (Slow-Moving Inventory Disposition Agent) recovers $3.8M in working capital. Both leverage existing MES data without requiring cross-system integration, enabling 7-9 month deployment.",
        "value": "$10.0M annually"
      },
      {
        "title": "Commercial velocity initiatives double quote conversion without CRM overhaul",
        "body": "UC-07 (Intelligent Quote Configuration Engine) accelerates technical quote assembly to capture $7.4M in revenue, while UC-06 (Regulatory Documentation Assembler) reduces compliance cycle time for $3.0M in cash flow improvement. These applications work within existing document repositories, bypassing ERP complexity.",
        "value": "$10.4M annually"
      },
      {
        "title": "Post-merger integration use cases face 16-18 month timelines due to governance gaps",
        "body": "UC-09 and UC-10 address root data fragmentation but score below 5.0 on readiness. Prerequisite work includes schema mapping, API development, and cross-functional governance—investments not reflected in core AI deployment budgets. Defer to Q4 after establishing AI operating model.",
        "value": "$3.6M annually"
      }
    ],
    "opportunityTable": [
      {
        "metric": "Total Annual Value",
        "value": "$45.4M"
      },
      {
        "metric": "Critical-Priority Initiatives",
        "value": "4"
      },
      {
        "metric": "First-Year Impact",
        "value": "$19.5M"
      },
      {
        "metric": "Value per 1M Tokens",
        "value": "$2,460"
      }
    ]
  }
};
