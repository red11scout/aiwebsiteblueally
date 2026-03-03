import type { IndustryReport } from "../report-types";

export const report: IndustryReport = {
  "industrySlug": "energy-utilities",
  "companyDescription": "A Major Nuclear Energy & Power Generation Company",
  "companyOverview": "The organization generates $21.7B in annual revenue as the nation's largest producer of carbon-free electricity. The company operates 21 nuclear reactors across 12 sites, alongside 750MW of hydro and 500MW of wind/solar capacity, serving commercial and residential customers across deregulated energy markets. Baltimore-based with 12,600 employees, the organization spun from Exelon in 2022 to focus exclusively on competitive generation and retail energy supply.\n\nThe nuclear fleet generates 32,000GWh annually at 93.2% capacity factor, representing 10% of total U.S. nuclear output. Retail operations serve 2.1M customer accounts with 8.3% residential market share in competitive states. Commercial and industrial contracts represent 67% of revenue at average $89/MWh realized pricing. The company maintains $4.2B hedged position extending through 2028.\n\nGrid operations face a $127M annual burden coordinating real-time dispatch across nuclear baseload, renewable intermittency, and market pricing signals. Operations centers monitor 840,000 sensor points across generation assets, processing 2.4B data points daily for economic dispatch decisions. Manual intervention occurs in 12% of dispatch windows when automated systems flag constraint violations or market anomalies.\n\nNuclear compliance documentation consumes $89M annually across 593,000 labor hours reviewing and updating NRC-mandated procedures. Each reactor maintains 40,000+ controlled documents requiring review every 24 months under 10CFR50 Appendix B. Current backlog reaches 23 days for routine document updates, diverting nuclear engineers from reliability-centered maintenance planning.\n\nAsset performance management absorbs $64M yearly as reliability engineers analyze equipment degradation trends across aging infrastructure. The nuclear fleet averages 42 years operational life with license extensions pending through 2050. Unplanned outage rates of 1.8% cost $94M in replacement power and lost margin annually. Manual root cause analysis delays corrective action by 18 days on average.\n\nFinancial figures derive from 2025 10-K filings and Q4 earnings releases dated January 2026. [HIGH CONFIDENCE] Operational burden estimates apply $150/hour fully-loaded rates for nuclear engineering staff and $135/hour for power trading analysts. [MEDIUM CONFIDENCE] Data maturity assessed at Level 3 based on disclosed SCADA infrastructure investments and operational technology governance frameworks. [MEDIUM CONFIDENCE] Grid sensor volume extrapolated from industry-standard monitoring density for nuclear/renewable hybrid portfolios. [ESTIMATED]",
  "totalValueOpportunity": 436.5,
  "valueDrivers": [
    {
      "name": "Risk Mitigation",
      "amount": 150.2,
      "percentage": 34,
      "color": "#FF6B35",
      "description": "Predictive monitoring, compliance automation, and risk reduction across grid optimization & real-time dispatch, nuclear fleet reliability & performance, regulatory compliance automation"
    },
    {
      "name": "Cost Reduction",
      "amount": 128.6,
      "percentage": 29,
      "color": "#00B34A",
      "description": "Operational efficiency through AI-driven automation across grid optimization & real-time dispatch, nuclear fleet reliability & performance, regulatory compliance automation"
    },
    {
      "name": "Revenue Growth",
      "amount": 100.1,
      "percentage": 23,
      "color": "#00A3E0",
      "description": "AI-powered intelligence and optimization driving revenue through grid optimization & real-time dispatch, nuclear fleet reliability & performance, regulatory compliance automation"
    },
    {
      "name": "Cash Flow Acceleration",
      "amount": 57.6,
      "percentage": 13,
      "color": "#003B73",
      "description": "Working capital optimization and cycle time reduction through AI-driven grid optimization & real-time dispatch, nuclear fleet reliability & performance, regulatory compliance automation"
    }
  ],
  "financialScenarios": [
    {
      "name": "Base Case",
      "multiplier": "×1.0",
      "annualBenefit": 436.5,
      "fiveYearNPV": 1100
    },
    {
      "name": "Optimistic",
      "multiplier": "×1.3",
      "annualBenefit": 567.4,
      "fiveYearNPV": 1700
    },
    {
      "name": "Conservative",
      "multiplier": "×0.6",
      "annualBenefit": 261.9,
      "fiveYearNPV": 490.3
    }
  ],
  "themes": [
    {
      "id": "ST-01",
      "name": "Grid Optimization & Real-Time Dispatch",
      "currentState": "Manual dispatch coordination with 12% intervention rate, 2.4B daily sensor readings processed through rule-based systems, 15-minute dispatch windows",
      "targetState": "AI-driven dispatch optimization with 3% intervention rate, predictive load forecasting with 1.2% MAPE, 5-minute dispatch granularity enabling $3.2/MWh margin improvement",
      "useCases": [
        {
          "id": "UC-01",
          "title": "Real-Time Economic Dispatch Optimizer",
          "pattern": "ReAct Loop",
          "functionalArea": "Operations",
          "description": "AI agent continuously optimizes unit commitment decisions across 32.4GW portfolio by analyzing real-time load, fuel costs, transmission constraints, and ancillary service requirements. System recommends dispatch schedules every 15 minutes for human approval before market submission.",
          "targetFriction": "Manual unit commitment decisions across 32.4GW fleet with 15-minute dispatch windows",
          "targetFrictionId": "FP-01",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "ReAct Loop",
            "alternative": "Tool Use",
            "rationale": "ReAct Loop enables continuous decision-making across 15-minute dispatch intervals, reasoning through load conditions and unit constraints before recommending dispatch schedules. Tool Use offers simpler implementation but lacks iterative refinement needed for multi-unit optimization."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Increase economic dispatch rate from 88% to 94%",
              "metric": ""
            },
            {
              "outcome": "Reduce dispatch decision cycle from 12 minutes to 4 minutes",
              "metric": ""
            },
            {
              "outcome": "Capture $6.2M annual margin improvement through optimal unit commitment",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "real_time"
          ],
          "integrations": [
            "OSI PI Historian",
            "PJM eDART",
            "MISO Market Portal",
            "GE ALSTOM Grid SCADA"
          ],
          "hitlRequirement": "Grid operator approves all dispatch schedule changes affecting >500MW load shift or market exposure >$250K",
          "valueScore": 7.23,
          "readinessScore": 6.7,
          "timeToValue": 9,
          "annualValue": 55.7,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 9.7,
            "revenue": 23.2,
            "riskMitigation": 13.7,
            "cashFlow": 9.1
          },
          "readinessDimensions": {
            "dataAvailability": 7,
            "technicalInfrastructure": 6,
            "organizationalCapacity": 8,
            "governance": 5
          },
          "priority": {
            "priorityScore": 6.97,
            "recommendedPhase": "Q2",
            "valueScore": 7.23,
            "ttvScore": 0.25
          },
          "probabilityOfSuccess": 0.65,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Load Forecast Collection",
                "description": "Operators manually gather load forecasts from multiple sources and validate data integrity.",
                "actorType": "human",
                "actorName": "Grid Operator",
                "duration": "45 minutes",
                "isBottleneck": false,
                "systems": [
                  "SCADA",
                  "Load Forecasting System",
                  "Excel"
                ],
                "painPoints": [
                  "Data scattered across systems",
                  "Manual validation errors"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Unit Status Assessment",
                "description": "Review current availability and operational constraints for all 32.4GW generation units.",
                "actorType": "human",
                "actorName": "Plant Engineer",
                "duration": "1.5 hours",
                "isBottleneck": true,
                "systems": [
                  "Plant Management System",
                  "Maintenance Logs",
                  "Email"
                ],
                "painPoints": [
                  "Time-consuming manual checks",
                  "Outdated information delays",
                  "Communication lag"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Economic Dispatch Calculation",
                "description": "Manually calculate optimal unit commitment using spreadsheets and legacy optimization tools.",
                "actorType": "human",
                "actorName": "Dispatch Engineer",
                "duration": "2 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Legacy Optimization Software"
                ],
                "painPoints": [
                  "Complex calculations prone to errors",
                  "Cannot evaluate all scenarios",
                  "Misses optimal solution"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Dispatch Schedule Review",
                "description": "Senior operators review proposed dispatch schedule for feasibility and compliance.",
                "actorType": "human",
                "actorName": "Senior Grid Operator",
                "duration": "45 minutes",
                "isBottleneck": false,
                "systems": [
                  "Dispatch Management System"
                ],
                "painPoints": [
                  "Limited time for thorough review",
                  "Subjective decision-making"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Schedule Implementation",
                "description": "Dispatch instructions manually sent to generation units and market operators.",
                "actorType": "human",
                "actorName": "Grid Operator",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "SCADA",
                  "Market Interface",
                  "Phone/Email"
                ],
                "painPoints": [
                  "Manual communication delays",
                  "Coordination errors"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Real-Time Adjustments",
                "description": "Operators monitor performance and make manual adjustments every 15 minutes.",
                "actorType": "human",
                "actorName": "Control Room Operator",
                "duration": "Continuous",
                "isBottleneck": false,
                "systems": [
                  "SCADA",
                  "Real-Time Monitoring"
                ],
                "painPoints": [
                  "Reactive rather than proactive",
                  "Suboptimal adjustments",
                  "High cognitive load"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Data Aggregation",
                "description": "AI agent continuously ingests and validates load forecasts, weather data, and market prices.",
                "actorType": "ai_agent",
                "actorName": "Data Integration Agent",
                "duration": "2 minutes",
                "isBottleneck": false,
                "systems": [
                  "SCADA",
                  "Load Forecasting API",
                  "Weather API",
                  "Market Data Feed"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Real-Time Fleet Analysis",
                "description": "AI continuously monitors unit availability, constraints, and performance across entire 32.4GW fleet.",
                "actorType": "ai_agent",
                "actorName": "Fleet Monitoring Agent",
                "duration": "1 minute",
                "isBottleneck": false,
                "systems": [
                  "Plant Management System",
                  "Maintenance Database",
                  "IoT Sensors"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Optimal Dispatch Generation",
                "description": "AI optimization engine calculates economically optimal unit commitment for 15-minute dispatch windows.",
                "actorType": "ai_agent",
                "actorName": "Economic Dispatch Optimizer",
                "duration": "3 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Optimization Platform",
                  "Market Interface"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Human Expert Review",
                "description": "Senior operator reviews AI-recommended dispatch schedule with highlighted risks and validates approval.",
                "actorType": "human",
                "actorName": "Senior Grid Operator",
                "duration": "8 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Decision Support Dashboard"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Automated Schedule Deployment",
                "description": "AI agent executes approved dispatch instructions to all generation units and market systems.",
                "actorType": "ai_agent",
                "actorName": "Dispatch Execution Agent",
                "duration": "1 minute",
                "isBottleneck": false,
                "systems": [
                  "SCADA",
                  "Market Interface",
                  "Plant Control Systems"
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
                "name": "Continuous Optimization Loop",
                "description": "AI proactively adjusts dispatch in real-time based on actual conditions with human oversight alerts.",
                "actorType": "ai_agent",
                "actorName": "Real-Time Optimization Agent",
                "duration": "Continuous",
                "isBottleneck": false,
                "systems": [
                  "SCADA",
                  "AI Optimization Platform",
                  "Alert System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$2.7M/yr",
                "before": "$9.0M/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "15 minutes per cycle",
                "before": "5.5 hours per cycle",
                "improvement": "95%"
              },
              "qualityImprovement": {
                "after": "96% optimal dispatch",
                "before": "68% optimal dispatch",
                "improvement": "+28%"
              },
              "throughputIncrease": {
                "after": "384 dispatch cycles/day",
                "before": "96 dispatch cycles/day",
                "improvement": "4x"
              }
            }
          }
        },
        {
          "id": "UC-02",
          "title": "Adaptive Renewable Forecasting Engine",
          "pattern": "Tool Use",
          "functionalArea": "Operations",
          "description": "Multi-source forecasting system ingests weather models, satellite imagery, grid conditions, and historical generation patterns to predict renewable output 1-72 hours ahead. AI synthesizes inputs from NOAA, ECMWF, and proprietary models to reduce forecast error.",
          "targetFriction": "Renewable output forecasting relies on 72-hour weather models without real-time grid condition integration",
          "targetFrictionId": "FP-02",
          "capabilities": [
            "Data Analysis",
            "Research & Information Retrieval"
          ],
          "agenticPattern": {
            "primary": "Tool Use",
            "alternative": "Prompt Chaining",
            "rationale": "Tool Use allows agent to query multiple weather data sources, grid telemetry, and historical patterns before generating forecasts—essential for integrating diverse signals. Prompt Chaining works but requires predefined sequence that misses dynamic source selection based on forecast horizon."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce renewable intermittency MAPE from 12.4% to 7.8%",
              "metric": ""
            },
            {
              "outcome": "Enable $3.4M annual savings through reduced balancing market exposure",
              "metric": ""
            },
            {
              "outcome": "Improve forecast lead time from 72 hours to 96 hours for capacity planning",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured",
            "real_time"
          ],
          "integrations": [
            "NOAA Weather API",
            "ECMWF Data Portal",
            "OSI PI Historian",
            "Renewable Plant SCADA"
          ],
          "hitlRequirement": "Meteorologist validates forecast accuracy when MAPE exceeds 8% or extreme weather conditions detected",
          "valueScore": 6.19,
          "readinessScore": 5.9,
          "timeToValue": 7,
          "annualValue": 32.4,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 5.9,
            "revenue": 13.7,
            "riskMitigation": 6.8,
            "cashFlow": 6.1
          },
          "readinessDimensions": {
            "dataAvailability": 6,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 7,
            "governance": 5
          },
          "priority": {
            "priorityScore": 6.05,
            "recommendedPhase": "Q2",
            "valueScore": 6.19,
            "ttvScore": 0.42
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Weather Data Collection",
                "description": "Forecasters manually gather 72-hour weather model data from multiple meteorological sources.",
                "actorType": "human",
                "actorName": "Energy Forecaster",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Weather Services",
                  "NOAA Database",
                  "Internal Data Portal"
                ],
                "painPoints": [
                  "Data scattered across multiple platforms",
                  "Manual download and aggregation required"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Renewable Asset Analysis",
                "description": "Analysts review historical performance data for wind and solar assets to establish baseline patterns.",
                "actorType": "human",
                "actorName": "Operations Analyst",
                "duration": "4 hours",
                "isBottleneck": true,
                "systems": [
                  "Asset Management System",
                  "SCADA",
                  "Excel Spreadsheets"
                ],
                "painPoints": [
                  "Time-consuming manual data correlation",
                  "Historical data doesn't reflect real-time conditions"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Output Forecast Generation",
                "description": "Forecasters create renewable output predictions using weather models without grid condition integration.",
                "actorType": "human",
                "actorName": "Energy Forecaster",
                "duration": "5 hours",
                "isBottleneck": true,
                "systems": [
                  "Forecasting Software",
                  "Statistical Models",
                  "Excel"
                ],
                "painPoints": [
                  "No real-time grid data incorporated",
                  "Static 72-hour window limits accuracy",
                  "Manual calculations prone to error"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Forecast Validation",
                "description": "QA team manually validates forecasts against recent accuracy trends and flags discrepancies.",
                "actorType": "human",
                "actorName": "QA Specialist",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Quality Management System",
                  "Historical Database"
                ],
                "painPoints": [
                  "Reactive validation catches errors late",
                  "Limited sample checking only"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Dispatch Schedule Creation",
                "description": "Grid operators manually create dispatch schedules based on static forecasts and current commitments.",
                "actorType": "human",
                "actorName": "Grid Operator",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Energy Management System",
                  "Dispatch Software"
                ],
                "painPoints": [
                  "Schedules quickly become outdated",
                  "Cannot adapt to changing conditions"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Forecast Distribution",
                "description": "Operations team manually distributes forecasts to stakeholders via email and scheduled reports.",
                "actorType": "human",
                "actorName": "Operations Coordinator",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Email",
                  "Report Distribution System",
                  "SharePoint"
                ],
                "painPoints": [
                  "Information delays",
                  "Version control issues"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Continuous Data Ingestion",
                "description": "AI agent continuously ingests weather models, grid conditions, and real-time sensor data from all sources.",
                "actorType": "ai_agent",
                "actorName": "Data Aggregation Agent",
                "duration": "Real-time",
                "isBottleneck": false,
                "systems": [
                  "Weather APIs",
                  "Grid Management System",
                  "IoT Sensors",
                  "SCADA"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Research & Information Retrieval",
                  "Real-time Integration"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Adaptive Pattern Recognition",
                "description": "AI analyzes historical and real-time data to identify renewable output patterns correlated with grid conditions.",
                "actorType": "ai_agent",
                "actorName": "Forecasting Intelligence Agent",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "Machine Learning Platform",
                  "Time-Series Database",
                  "Asset Management System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Predictive Modeling",
                  "Pattern Recognition"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Dynamic Forecast Generation",
                "description": "AI generates adaptive forecasts integrating weather models with real-time grid conditions and updates continuously.",
                "actorType": "ai_agent",
                "actorName": "Adaptive Forecasting Engine",
                "duration": "3 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Forecasting Platform",
                  "Grid Analytics System",
                  "Weather Integration Layer"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Research & Information Retrieval",
                  "Multi-variable Optimization"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Human Forecast Review",
                "description": "Energy forecaster reviews AI-generated forecasts, validates critical scenarios, and approves for dispatch planning.",
                "actorType": "human",
                "actorName": "Senior Energy Forecaster",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "Forecasting Dashboard",
                  "AI Insight Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Decision Support",
                  "Explainable AI"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Automated Dispatch Optimization",
                "description": "AI generates optimal dispatch schedules based on approved forecasts and continuously adjusts for real-time changes.",
                "actorType": "ai_agent",
                "actorName": "Dispatch Optimization Agent",
                "duration": "2 minutes",
                "isBottleneck": false,
                "systems": [
                  "Energy Management System",
                  "Optimization Engine",
                  "Grid Control System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Optimization",
                  "Real-time Adjustment"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Intelligent Distribution",
                "description": "AI automatically distributes forecasts to stakeholders with context-aware insights and confidence intervals.",
                "actorType": "ai_agent",
                "actorName": "Distribution Intelligence Agent",
                "duration": "1 minute",
                "isBottleneck": false,
                "systems": [
                  "Communication Platform",
                  "Stakeholder Portal",
                  "Alert System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Contextualization",
                  "Automated Communication"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$1.2M/yr",
                "before": "$5.5M/yr",
                "improvement": "78%"
              },
              "timeReduction": {
                "after": "41 minutes per forecast cycle",
                "before": "21 hours per forecast cycle",
                "improvement": "97%"
              },
              "qualityImprovement": {
                "after": "91% forecast accuracy",
                "before": "68% forecast accuracy",
                "improvement": "+23%"
              },
              "throughputIncrease": {
                "after": "Continuous real-time updates",
                "before": "8 forecast updates/day",
                "improvement": "24x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-01",
          "frictionPoint": "Manual unit commitment decisions across 32.4GW fleet with 15-minute dispatch windows",
          "severity": "Critical",
          "role": "Business Analyst",
          "estimatedAnnualCost": 9,
          "annualHours": 94667,
          "function": "Operations",
          "subFunction": "Quality Assurance",
          "strategicThemeId": "ST-01"
        },
        {
          "id": "FP-02",
          "frictionPoint": "Renewable output forecasting relies on 72-hour weather models without real-time grid condition integration",
          "severity": "Critical",
          "role": "Business Analyst",
          "estimatedAnnualCost": 5.5,
          "annualHours": 58000,
          "function": "Operations",
          "subFunction": "Quality Assurance",
          "strategicThemeId": "ST-01"
        }
      ],
      "kpis": [
        {
          "id": "BF-01",
          "kpiName": "Economic Dispatch Optimization Rate",
          "function": "Operations",
          "subFunction": "Quality Assurance",
          "direction": "↑",
          "baselineValue": "88%",
          "targetValue": "96%",
          "timeframe": "18 months",
          "strategicThemeId": "ST-01"
        },
        {
          "id": "BF-02",
          "kpiName": "Renewable Intermittency Forecast Error (MAPE)",
          "function": "Operations",
          "subFunction": "Quality Assurance",
          "direction": "↓",
          "baselineValue": "12.4%",
          "targetValue": "4.8%",
          "timeframe": "12 months",
          "strategicThemeId": "ST-01"
        }
      ]
    },
    {
      "id": "ST-02",
      "name": "Nuclear Fleet Reliability & Performance",
      "currentState": "Reactive maintenance driving 1.8% unplanned outage rate, 18-day average root cause analysis cycle, manual equipment degradation trending across 12 sites",
      "targetState": "Predictive maintenance reducing unplanned outages to 0.9%, 4-day root cause cycles through automated failure mode analysis, proactive component replacement extending fuel cycle length by 45 days",
      "useCases": [
        {
          "id": "UC-03",
          "title": "Nuclear Equipment Health Monitor",
          "pattern": "Reflection",
          "functionalArea": "Operations",
          "description": "Continuous monitoring system analyzes 50,400 sensor streams across 21-reactor fleet to detect equipment degradation patterns 45 days before failure. AI correlates vibration, temperature, pressure, and chemistry data to predict component reliability and recommend maintenance timing.",
          "targetFriction": "Equipment health monitoring across 21 reactors uses threshold-based alarms without failure pattern recognition",
          "targetFrictionId": "FP-03",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Reflection",
            "alternative": "Generator-Critic",
            "rationale": "Reflection pattern enables agent to continuously refine failure probability estimates as new sensor data arrives, catching evolving degradation patterns missed by single-pass analysis. Generator-Critic viable but adds latency unsuitable for real-time monitoring."
          },
          "epochClassification": [
            "Operational",
            "Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce unplanned outage rate from 1.8% to 1.1% across fleet",
              "metric": ""
            },
            {
              "outcome": "Extend failure prediction lead time from 8 days to 45 days",
              "metric": ""
            },
            {
              "outcome": "Avoid $18.7M annual forced outage costs through proactive interventions",
              "metric": ""
            },
            {
              "outcome": "Increase equipment MTBF by 22% through optimized maintenance timing",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "real_time"
          ],
          "integrations": [
            "Emerson DeltaV DCS",
            "OSI PI Historian",
            "Maximo Asset Management",
            "EPRI Equipment Database"
          ],
          "hitlRequirement": "Site reliability engineer reviews all Critical severity predictions before initiating unplanned maintenance or operational restrictions",
          "valueScore": 2.73,
          "readinessScore": 7.4,
          "timeToValue": 12,
          "annualValue": 71.8,
          "priorityTier": "Quick Win",
          "benefitBreakdown": {
            "costSavings": 29,
            "revenue": 0,
            "riskMitigation": 42.7,
            "cashFlow": 0
          },
          "readinessDimensions": {
            "dataAvailability": 8,
            "technicalInfrastructure": 6,
            "organizationalCapacity": 8,
            "governance": 7
          },
          "priority": {
            "priorityScore": 5.07,
            "recommendedPhase": "Q3",
            "valueScore": 2.73,
            "ttvScore": 12
          },
          "probabilityOfSuccess": 0.7,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Manual Data Collection",
                "description": "Engineers collect sensor readings and equipment parameters from 21 reactor monitoring systems.",
                "actorType": "human",
                "actorName": "Equipment Engineer",
                "duration": "4 hours",
                "isBottleneck": true,
                "systems": [
                  "Reactor Monitoring System",
                  "SCADA"
                ],
                "painPoints": [
                  "Time-intensive manual data gathering",
                  "Inconsistent collection intervals",
                  "Human error in transcription"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Threshold Comparison",
                "description": "Engineers compare collected data against static threshold values to identify anomalies.",
                "actorType": "human",
                "actorName": "Equipment Engineer",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "Maintenance Database"
                ],
                "painPoints": [
                  "Thresholds don't detect gradual degradation",
                  "No pattern recognition capability"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Alarm Investigation",
                "description": "Technicians respond to threshold-based alarms and conduct field inspections.",
                "actorType": "human",
                "actorName": "Field Technician",
                "duration": "6 hours",
                "isBottleneck": true,
                "systems": [
                  "Alarm Management System",
                  "Handheld Inspection Tools"
                ],
                "painPoints": [
                  "High false alarm rate",
                  "Reactive rather than predictive",
                  "Resource intensive"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Historical Data Review",
                "description": "Engineers manually review historical maintenance records to identify failure patterns.",
                "actorType": "human",
                "actorName": "Reliability Engineer",
                "duration": "5 hours",
                "isBottleneck": false,
                "systems": [
                  "CMMS",
                  "Document Management System"
                ],
                "painPoints": [
                  "Limited pattern visibility",
                  "Time-consuming historical analysis"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Maintenance Planning",
                "description": "Planners schedule corrective maintenance based on alarm triggers and inspection findings.",
                "actorType": "human",
                "actorName": "Maintenance Planner",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "CMMS",
                  "Resource Management System"
                ],
                "painPoints": [
                  "Reactive scheduling",
                  "Unplanned downtime"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Reporting & Documentation",
                "description": "QA team compiles equipment health reports for regulatory compliance and management review.",
                "actorType": "human",
                "actorName": "QA Specialist",
                "duration": "3 hours",
                "isBottleneck": false,
                "systems": [
                  "Document Management System",
                  "Compliance Portal"
                ],
                "painPoints": [
                  "Manual report generation",
                  "Delayed visibility into fleet-wide trends"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Data Ingestion",
                "description": "AI system continuously ingests real-time sensor data from all 21 reactors with automated validation.",
                "actorType": "ai_agent",
                "actorName": "Data Integration Agent",
                "duration": "continuous",
                "isBottleneck": false,
                "systems": [
                  "Reactor Monitoring System",
                  "SCADA",
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 2,
                "name": "AI Pattern Recognition",
                "description": "ML models analyze equipment data to identify degradation patterns and predict failures before threshold breach.",
                "actorType": "ai_agent",
                "actorName": "Predictive Analytics Engine",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Machine Learning Models"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 3,
                "name": "AI Reflection & Root Cause Analysis",
                "description": "AI agent performs self-reflection on anomaly findings and conducts automated root cause analysis using historical patterns.",
                "actorType": "ai_agent",
                "actorName": "Diagnostic Reasoning Agent",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "Knowledge Base"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Expert Review & Validation",
                "description": "Reliability engineers review AI-generated insights and validate predictive maintenance recommendations.",
                "actorType": "human",
                "actorName": "Reliability Engineer",
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
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Automated Maintenance Workflow",
                "description": "AI system generates optimized maintenance work orders and schedules based on validated predictions.",
                "actorType": "ai_agent",
                "actorName": "Workflow Orchestration Agent",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Platform",
                  "CMMS",
                  "Resource Management System"
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
                "name": "Real-Time Fleet Dashboard",
                "description": "AI generates continuous fleet-wide health reports with regulatory compliance documentation and anomaly alerts.",
                "actorType": "ai_agent",
                "actorName": "Reporting & Analytics Agent",
                "duration": "real-time",
                "isBottleneck": false,
                "systems": [
                  "AI Dashboard",
                  "Compliance Portal",
                  "Document Management System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$8.1M/yr",
                "before": "$26.9M/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "85,000 hours/yr",
                "before": "283,333 hours/yr",
                "improvement": "70%"
              },
              "qualityImprovement": {
                "after": "92% prediction accuracy",
                "before": "65% alarm accuracy",
                "improvement": "+27%"
              },
              "throughputIncrease": {
                "after": "21 reactors with predictive insights",
                "before": "21 reactors monitored",
                "improvement": "4x faster detection"
              }
            }
          }
        },
        {
          "id": "UC-04",
          "title": "Automated Sensor Feature Engineering",
          "pattern": "Tool Use",
          "functionalArea": "Operations",
          "description": "Automated feature discovery system analyzes 50,400 sensor streams to identify optimal predictive variables for equipment failure models. AI tests lag features, rolling statistics, cross-correlations, and derived metrics to maximize forecast accuracy without manual data science intervention.",
          "targetFriction": "Predictive maintenance models require manual feature engineering from 2,400 sensor streams per reactor",
          "targetFrictionId": "FP-04",
          "capabilities": [
            "Data Analysis",
            "Coding Assistance"
          ],
          "agenticPattern": {
            "primary": "Tool Use",
            "alternative": "Planning",
            "rationale": "Tool Use allows agent to query sensor metadata, test feature combinations, and evaluate predictive power before finalizing models—critical for handling 2,400 heterogeneous sensors. Planning pattern works but lacks flexibility to adapt feature selection based on runtime performance."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce feature engineering cycle from 45 days to 7 days per model",
              "metric": ""
            },
            {
              "outcome": "Increase model accuracy by 18% through optimal feature selection",
              "metric": ""
            },
            {
              "outcome": "Enable monthly model retraining versus quarterly manual updates",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "real_time"
          ],
          "integrations": [
            "OSI PI Historian",
            "Databricks ML Platform",
            "Maximo Asset Management",
            "Python Feature Engineering Libraries"
          ],
          "hitlRequirement": "Data scientist validates feature importance rankings before deploying models affecting maintenance schedules",
          "valueScore": 6.05,
          "readinessScore": 6.7,
          "timeToValue": 8,
          "annualValue": 22.9,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 4.6,
            "revenue": 0,
            "riskMitigation": 18.3,
            "cashFlow": 0
          },
          "readinessDimensions": {
            "dataAvailability": 8,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 7,
            "governance": 6
          },
          "priority": {
            "priorityScore": 6.38,
            "recommendedPhase": "Q2",
            "valueScore": 6.05,
            "ttvScore": 0.33
          },
          "probabilityOfSuccess": 0.65,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Raw Sensor Data Collection",
                "description": "Engineers extract raw data from 2,400 sensor streams across reactor systems into staging databases.",
                "actorType": "human",
                "actorName": "Data Engineer",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Reactor Monitoring System",
                  "Data Lake"
                ],
                "painPoints": [
                  "Manual query construction",
                  "Data format inconsistencies"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Data Quality Assessment",
                "description": "Analysts manually inspect sensor data for anomalies, missing values, and calibration drift.",
                "actorType": "human",
                "actorName": "Reliability Analyst",
                "duration": "8 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "MATLAB"
                ],
                "painPoints": [
                  "Time-intensive manual review",
                  "Inconsistent quality criteria"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Feature Hypothesis Development",
                "description": "Domain experts brainstorm and document potential predictive features based on physics and experience.",
                "actorType": "human",
                "actorName": "Reliability Engineer",
                "duration": "12 hours",
                "isBottleneck": false,
                "systems": [
                  "Confluence",
                  "Whiteboard"
                ],
                "painPoints": [
                  "Limited by individual expertise",
                  "No systematic exploration"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Manual Feature Engineering",
                "description": "Data scientists hand-code transformations, aggregations, and derived features using Python scripts.",
                "actorType": "human",
                "actorName": "Data Scientist",
                "duration": "24 hours",
                "isBottleneck": true,
                "systems": [
                  "Python",
                  "Jupyter",
                  "Git"
                ],
                "painPoints": [
                  "Code errors and debugging",
                  "Limited feature diversity",
                  "Poor scalability"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Feature Validation Testing",
                "description": "Engineers test feature calculations against historical maintenance events to assess predictive power.",
                "actorType": "human",
                "actorName": "ML Engineer",
                "duration": "6 hours",
                "isBottleneck": false,
                "systems": [
                  "Python",
                  "Statistical Tools"
                ],
                "painPoints": [
                  "Limited validation datasets",
                  "Statistical significance unclear"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Documentation & Deployment",
                "description": "Teams document feature definitions and deploy validated features to production pipelines.",
                "actorType": "human",
                "actorName": "MLOps Engineer",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Git",
                  "CI/CD Pipeline",
                  "Documentation Portal"
                ],
                "painPoints": [
                  "Documentation lag",
                  "Version control complexity"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Data Ingestion",
                "description": "AI agent continuously ingests and normalizes data from 2,400 sensor streams in real-time.",
                "actorType": "ai_agent",
                "actorName": "Data Ingestion Agent",
                "duration": "15 min",
                "isBottleneck": false,
                "systems": [
                  "Reactor Monitoring System",
                  "Cloud Data Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 2,
                "name": "AI-Powered Quality Analysis",
                "description": "ML models automatically detect anomalies, missing values, and sensor drift across all streams.",
                "actorType": "ai_agent",
                "actorName": "Quality Assessment Agent",
                "duration": "10 min",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Anomaly Detection Service"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Automated Feature Generation",
                "description": "AI generates hundreds of candidate features using transformations, interactions, and time-series patterns.",
                "actorType": "ai_agent",
                "actorName": "Feature Engineering Agent",
                "duration": "30 min",
                "isBottleneck": false,
                "systems": [
                  "AutoML Platform",
                  "Feature Store"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Coding Assistance"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Predictive Power Ranking",
                "description": "AI evaluates and ranks features by correlation with maintenance events and model performance.",
                "actorType": "ai_agent",
                "actorName": "Feature Selection Agent",
                "duration": "20 min",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Statistical Analysis Service"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Expert Review & Approval",
                "description": "Reliability engineers review top-ranked features for physical interpretability and regulatory compliance.",
                "actorType": "human",
                "actorName": "Reliability Engineer",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Review Dashboard",
                  "Feature Store"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Automated Deployment",
                "description": "Approved features are automatically deployed to production pipelines with full documentation.",
                "actorType": "ai_agent",
                "actorName": "Deployment Agent",
                "duration": "10 min",
                "isBottleneck": false,
                "systems": [
                  "CI/CD Pipeline",
                  "Feature Store",
                  "Documentation Portal"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Coding Assistance"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$1.1M/yr",
                "before": "$4.3M/yr",
                "improvement": "74%"
              },
              "timeReduction": {
                "after": "3.5 hours",
                "before": "58 hours",
                "improvement": "94%"
              },
              "qualityImprovement": {
                "after": "350 features/reactor",
                "before": "50 features/reactor",
                "improvement": "7x"
              },
              "throughputIncrease": {
                "after": "8 reactors/month",
                "before": "1 reactor/month",
                "improvement": "8x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-03",
          "frictionPoint": "Equipment health monitoring across 21 reactors uses threshold-based alarms without failure pattern recognition",
          "severity": "Critical",
          "role": "Business Analyst",
          "estimatedAnnualCost": 26.9,
          "annualHours": 283333,
          "function": "Operations",
          "subFunction": "Quality Assurance",
          "strategicThemeId": "ST-02"
        },
        {
          "id": "FP-04",
          "frictionPoint": "Predictive maintenance models require manual feature engineering from 2,400 sensor streams per reactor",
          "severity": "High",
          "role": "Business Analyst",
          "estimatedAnnualCost": 4.3,
          "annualHours": 45333,
          "function": "Operations",
          "subFunction": "Quality Assurance",
          "strategicThemeId": "ST-02"
        }
      ],
      "kpis": [
        {
          "id": "BF-03",
          "kpiName": "Nuclear Fleet Unplanned Outage Rate",
          "function": "Operations",
          "subFunction": "Quality Assurance",
          "direction": "↓",
          "baselineValue": "1.8%",
          "targetValue": "0.9%",
          "timeframe": "24 months",
          "strategicThemeId": "ST-02"
        },
        {
          "id": "BF-04",
          "kpiName": "Equipment Failure Prediction Lead Time",
          "function": "Operations",
          "subFunction": "Quality Assurance",
          "direction": "↑",
          "baselineValue": "8 days",
          "targetValue": "45 days",
          "timeframe": "18 months",
          "strategicThemeId": "ST-02"
        }
      ]
    },
    {
      "id": "ST-03",
      "name": "Regulatory Compliance Automation",
      "currentState": "593,000 annual hours maintaining 840,000+ controlled documents across nuclear fleet, manual cross-referencing of regulatory requirements, 47-day average for major procedure updates",
      "targetState": "AI-drafted compliance documentation reducing review cycles to 12 days, automated regulatory change impact assessment, real-time procedure currency tracking across all operating units",
      "useCases": [
        {
          "id": "UC-05",
          "title": "Intelligent Procedure Update Generator",
          "pattern": "Orchestrator-Workers",
          "functionalArea": "Legal & Compliance",
          "description": "Multi-agent system automates procedure revision by retrieving relevant NRC guidance, cross-referencing 14,000 controlled documents per reactor, identifying change impacts, and generating draft updates. Orchestrator coordinates specialist agents for regulatory research, technical writing, and change tracking.",
          "targetFriction": "Procedure updates require manual cross-referencing across 14,000 NRC-controlled documents per reactor",
          "targetFrictionId": "FP-05",
          "capabilities": [
            "Research & Information Retrieval",
            "Content Creation"
          ],
          "agenticPattern": {
            "primary": "Orchestrator-Workers",
            "alternative": "Agent Handoff",
            "rationale": "Orchestrator-Workers optimal for coordinating parallel document analysis (worker agents scan 14K procedures), change impact assessment, and draft generation before final human review. Agent Handoff creates serial bottleneck unsuitable for fleet-wide procedure updates."
          },
          "epochClassification": [
            "Operational",
            "Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce procedure update cycle from 47 days to 12 days",
              "metric": ""
            },
            {
              "outcome": "Eliminate 23-day document backlog enabling faster performance modifications",
              "metric": ""
            },
            {
              "outcome": "Cut procedure development costs by $8.4M annually across fleet",
              "metric": ""
            }
          ],
          "dataTypes": [
            "unstructured",
            "semi_structured"
          ],
          "integrations": [
            "SharePoint Procedure Library",
            "NRC ADAMS Database",
            "Corrective Action Program System",
            "Document Management System"
          ],
          "hitlRequirement": "Licensed Senior Reactor Operator certifies all procedure changes before submission to Plant Operations Review Committee",
          "valueScore": 2.21,
          "readinessScore": 6.5,
          "timeToValue": 14,
          "annualValue": 56.2,
          "priorityTier": "Quick Win",
          "benefitBreakdown": {
            "costSavings": 19.4,
            "revenue": 0,
            "riskMitigation": 21.6,
            "cashFlow": 15.2
          },
          "readinessDimensions": {
            "dataAvailability": 7,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 6,
            "governance": 8
          },
          "priority": {
            "priorityScore": 4.36,
            "recommendedPhase": "Q4",
            "valueScore": 2.21,
            "ttvScore": 14
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Identify Regulatory Change",
                "description": "Compliance officer reviews NRC bulletin and identifies which procedures require updates.",
                "actorType": "human",
                "actorName": "Compliance Officer",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "NRC ADAMS",
                  "Email",
                  "Document Management"
                ],
                "painPoints": [
                  "Manual tracking of regulatory changes"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Cross-Reference Documents",
                "description": "Engineer manually searches through 14,000 controlled documents to find all related procedures and references.",
                "actorType": "human",
                "actorName": "Nuclear Engineer",
                "duration": "80 hours",
                "isBottleneck": true,
                "systems": [
                  "Document Management System",
                  "SharePoint",
                  "Local Files"
                ],
                "painPoints": [
                  "Manually reviewing 14,000+ documents",
                  "High risk of missing critical references",
                  "Extremely time-consuming"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Draft Procedure Updates",
                "description": "Technical writer creates updated procedure text based on engineer's findings and regulatory requirements.",
                "actorType": "human",
                "actorName": "Technical Writer",
                "duration": "40 hours",
                "isBottleneck": false,
                "systems": [
                  "MS Word",
                  "Document Templates",
                  "Style Guides"
                ],
                "painPoints": [
                  "Inconsistent formatting",
                  "Version control issues"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Technical Review",
                "description": "Subject matter experts review draft for technical accuracy and completeness.",
                "actorType": "human",
                "actorName": "SME Review Team",
                "duration": "60 hours",
                "isBottleneck": true,
                "systems": [
                  "Review Portal",
                  "Email",
                  "Redline Tools"
                ],
                "painPoints": [
                  "Multiple review cycles",
                  "Conflicting feedback",
                  "Schedule coordination"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Compliance Verification",
                "description": "Compliance team verifies all regulatory requirements are properly addressed in updates.",
                "actorType": "human",
                "actorName": "Compliance Specialist",
                "duration": "24 hours",
                "isBottleneck": false,
                "systems": [
                  "Compliance Checklist",
                  "NRC Database",
                  "Audit Trail"
                ],
                "painPoints": [
                  "Manual checklist verification"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Final Approval",
                "description": "Management reviews and approves procedure updates for implementation.",
                "actorType": "human",
                "actorName": "Plant Manager",
                "duration": "8 hours",
                "isBottleneck": false,
                "systems": [
                  "Approval Workflow",
                  "Document Management"
                ],
                "painPoints": [
                  "Approval delays",
                  "Limited visibility"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Document Distribution",
                "description": "Updated procedures are published and distributed to all relevant personnel and systems.",
                "actorType": "human",
                "actorName": "Document Control Clerk",
                "duration": "16 hours",
                "isBottleneck": false,
                "systems": [
                  "Document Management",
                  "Training System",
                  "Email Distribution"
                ],
                "painPoints": [
                  "Manual distribution tracking",
                  "Version confusion"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "AI Regulatory Monitoring",
                "description": "AI agent continuously monitors NRC updates and flags relevant regulatory changes requiring procedure updates.",
                "actorType": "ai_agent",
                "actorName": "Regulatory Intelligence Agent",
                "duration": "Real-time",
                "isBottleneck": false,
                "systems": [
                  "NRC ADAMS API",
                  "AI Platform",
                  "Alert System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "NLP",
                  "Pattern Recognition",
                  "Automated Monitoring"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Intelligent Document Cross-Reference",
                "description": "AI orchestrator automatically searches 14,000 documents using semantic search and identifies all impacted procedures with citations.",
                "actorType": "ai_agent",
                "actorName": "Document Analysis Orchestrator",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "Vector Database",
                  "AI Platform",
                  "Document Repository"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Semantic Search",
                  "Knowledge Graph",
                  "Document Understanding",
                  "RAG"
                ]
              },
              {
                "stepNumber": 3,
                "name": "AI-Generated Procedure Drafts",
                "description": "Content generation agents create compliant procedure updates based on regulatory requirements and existing documentation.",
                "actorType": "ai_agent",
                "actorName": "Content Generation Workers",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "LLM Platform",
                  "Template Engine",
                  "Style Guide DB"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Text Generation",
                  "Template Application",
                  "Consistency Checking"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Human Expert Review",
                "description": "SMEs review AI-generated updates with highlighted changes and AI-provided justifications for efficiency.",
                "actorType": "human",
                "actorName": "SME Review Team",
                "duration": "12 hours",
                "isBottleneck": false,
                "systems": [
                  "Review Portal",
                  "AI Assistance Tool",
                  "Collaboration Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Change Highlighting",
                  "Justification Generation",
                  "Review Assistance"
                ]
              },
              {
                "stepNumber": 5,
                "name": "AI Compliance Verification",
                "description": "AI agent validates all regulatory requirements against procedure updates and flags any gaps.",
                "actorType": "ai_agent",
                "actorName": "Compliance Validation Agent",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "Compliance Engine",
                  "NRC Requirements DB",
                  "AI Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Regulatory Mapping",
                  "Gap Analysis",
                  "Compliance Scoring"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Management Approval",
                "description": "Management reviews AI-generated summary dashboard and approves verified procedure updates.",
                "actorType": "human",
                "actorName": "Plant Manager",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Executive Dashboard",
                  "Approval Workflow",
                  "AI Summary Tool"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Executive Summary Generation",
                  "Risk Highlighting"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Automated Distribution",
                "description": "AI system automatically publishes approved procedures to all systems and notifies affected personnel.",
                "actorType": "ai_agent",
                "actorName": "Distribution Automation Agent",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "Document Management API",
                  "Training System API",
                  "Notification Service"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Multi-system Integration",
                  "Notification Management"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$4.2M/yr",
                "before": "$20.8M/yr",
                "improvement": "80%"
              },
              "timeReduction": {
                "after": "15 hours",
                "before": "232 hours",
                "improvement": "94%"
              },
              "qualityImprovement": {
                "after": "96% accuracy",
                "before": "68% accuracy",
                "improvement": "+28%"
              },
              "throughputIncrease": {
                "after": "120 updates/month",
                "before": "18 updates/month",
                "improvement": "6.7x"
              }
            }
          }
        },
        {
          "id": "UC-06",
          "title": "Compliance Report Automation Suite",
          "pattern": "Prompt Chaining",
          "functionalArea": "Legal & Compliance",
          "description": "Automated report generation covering quarterly NRC filings, monthly performance reports, and event notifications. AI extracts operational data, applies regulatory templates, generates narrative summaries, and formats outputs to NRC specifications—reducing 592K annual hours to 148K.",
          "targetFriction": "Compliance documentation generation consumes 592K annual hours across 21-reactor fleet",
          "targetFrictionId": "FP-06",
          "capabilities": [
            "Content Creation",
            "Research & Information Retrieval"
          ],
          "agenticPattern": {
            "primary": "Prompt Chaining",
            "alternative": "Planning",
            "rationale": "Prompt Chaining optimal for sequential report generation workflow: data extraction, analysis, narrative synthesis, regulatory cross-check, formatting. Planning pattern adds complexity without improving quality for templated compliance outputs."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce compliance documentation hours from 28,200 to 7,050 per reactor annually",
              "metric": ""
            },
            {
              "outcome": "Cut compliance labor costs by $38.7M across fleet",
              "metric": ""
            },
            {
              "outcome": "Accelerate report turnaround from 14 days to 3 days",
              "metric": ""
            },
            {
              "outcome": "Improve reporting consistency reducing NRC information requests by 40%",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "unstructured",
            "semi_structured"
          ],
          "integrations": [
            "Maximo EAM",
            "OSI PI Historian",
            "Corrective Action Program",
            "NRC ADAMS Portal"
          ],
          "hitlRequirement": "Regulatory Affairs Manager reviews all NRC submissions before electronic filing via ADAMS portal",
          "valueScore": 1,
          "readinessScore": 6.5,
          "timeToValue": 11,
          "annualValue": 62.3,
          "priorityTier": "Quick Win",
          "benefitBreakdown": {
            "costSavings": 36.4,
            "revenue": 0,
            "riskMitigation": 16.8,
            "cashFlow": 9.1
          },
          "readinessDimensions": {
            "dataAvailability": 6,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 7,
            "governance": 8
          },
          "priority": {
            "priorityScore": 3.75,
            "recommendedPhase": "Q4",
            "valueScore": 1,
            "ttvScore": 0.08
          },
          "probabilityOfSuccess": 0.65,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Regulatory Requirement Analysis",
                "description": "Compliance officers manually review NRC bulletins and regulatory updates across 21 reactors to identify reporting requirements.",
                "actorType": "human",
                "actorName": "Senior Compliance Officer",
                "duration": "8 hours",
                "isBottleneck": true,
                "systems": [
                  "NRC ADAMS",
                  "Regulatory Database",
                  "Email"
                ],
                "painPoints": [
                  "Manual tracking across multiple sources",
                  "Risk of missing critical updates",
                  "Inconsistent interpretation"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Data Collection from Sites",
                "description": "Site personnel gather operational data, incident reports, and technical specifications from each reactor facility.",
                "actorType": "human",
                "actorName": "Site Compliance Coordinator",
                "duration": "16 hours",
                "isBottleneck": false,
                "systems": [
                  "Plant Information System",
                  "SharePoint",
                  "Local Databases"
                ],
                "painPoints": [
                  "Fragmented data sources",
                  "Version control issues",
                  "Inconsistent formats"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Report Drafting",
                "description": "Compliance analysts manually draft comprehensive reports using templates and historical submissions.",
                "actorType": "human",
                "actorName": "Compliance Analyst",
                "duration": "32 hours",
                "isBottleneck": true,
                "systems": [
                  "Microsoft Word",
                  "Excel",
                  "Report Templates"
                ],
                "painPoints": [
                  "Time-intensive writing process",
                  "Template inconsistencies",
                  "Repetitive content creation"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Technical Review",
                "description": "Engineering and legal teams review draft reports for technical accuracy and regulatory compliance.",
                "actorType": "human",
                "actorName": "Technical Review Team",
                "duration": "24 hours",
                "isBottleneck": false,
                "systems": [
                  "Document Management",
                  "Email",
                  "Markup Tools"
                ],
                "painPoints": [
                  "Multiple review cycles",
                  "Coordination delays",
                  "Conflicting feedback"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Executive Approval",
                "description": "VP of Compliance and Chief Nuclear Officer review and approve final reports before submission.",
                "actorType": "human",
                "actorName": "VP Compliance",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "DocuSign",
                  "Email"
                ],
                "painPoints": [
                  "Executive availability delays",
                  "Last-minute changes"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Regulatory Submission",
                "description": "Compliance team formats and submits reports through NRC electronic portal with required certifications.",
                "actorType": "human",
                "actorName": "Compliance Specialist",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "NRC Portal",
                  "Digital Signature Tools"
                ],
                "painPoints": [
                  "Portal formatting requirements",
                  "Submission errors"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Archive and Documentation",
                "description": "Administrative staff archive approved reports and maintain compliance documentation records.",
                "actorType": "human",
                "actorName": "Compliance Administrator",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Document Management System",
                  "Compliance Database"
                ],
                "painPoints": [
                  "Manual filing",
                  "Inconsistent metadata"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "AI-Powered Regulatory Intelligence",
                "description": "AI agent continuously monitors NRC updates and automatically maps requirements to applicable reactors.",
                "actorType": "ai_agent",
                "actorName": "Regulatory Intelligence AI",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "NRC ADAMS API",
                  "AI Regulatory Platform",
                  "Knowledge Graph"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "NLP",
                  "Document Analysis",
                  "Requirement Extraction"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Automated Data Aggregation",
                "description": "AI retrieves and consolidates operational data from all 21 sites using pre-configured integrations.",
                "actorType": "ai_agent",
                "actorName": "Data Aggregation AI",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "Plant Information Systems",
                  "Data Lake",
                  "API Gateway"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Integration",
                  "ETL",
                  "Validation"
                ]
              },
              {
                "stepNumber": 3,
                "name": "AI Report Generation",
                "description": "AI drafts comprehensive compliance reports using templates, historical data, and regulatory language models.",
                "actorType": "ai_agent",
                "actorName": "Compliance Authoring AI",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Gen AI Platform",
                  "Template Library",
                  "Regulatory Knowledge Base"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Content Generation",
                  "Template Population",
                  "Technical Writing"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Human Expert Review",
                "description": "Compliance officers review AI-generated reports with change tracking and approve content accuracy.",
                "actorType": "human",
                "actorName": "Senior Compliance Officer",
                "duration": "6 hours",
                "isBottleneck": false,
                "systems": [
                  "AI Review Portal",
                  "Collaborative Editor",
                  "Audit Trail"
                ],
                "painPoints": [],
                "isAIEnabled": false,
                "automationLevel": "assisted",
                "aiCapabilities": []
              },
              {
                "stepNumber": 5,
                "name": "AI Quality Assurance",
                "description": "AI performs automated compliance checks, citation verification, and consistency analysis before executive review.",
                "actorType": "ai_agent",
                "actorName": "Quality Assurance AI",
                "duration": "20 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI QA Engine",
                  "Regulatory Rulebook",
                  "Citation Validator"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Quality Control",
                  "Citation Checking",
                  "Consistency Analysis"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Executive Sign-Off",
                "description": "VP of Compliance reviews AI quality metrics and approves final reports via digital workflow.",
                "actorType": "human",
                "actorName": "VP Compliance",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "Executive Dashboard",
                  "E-Signature Platform"
                ],
                "painPoints": [],
                "isAIEnabled": false,
                "automationLevel": "manual",
                "aiCapabilities": []
              },
              {
                "stepNumber": 7,
                "name": "Automated Submission & Archiving",
                "description": "AI formats, submits reports to NRC portal, and automatically archives with full metadata tagging.",
                "actorType": "ai_agent",
                "actorName": "Submission Automation AI",
                "duration": "10 minutes",
                "isBottleneck": false,
                "systems": [
                  "NRC Portal Integration",
                  "DMS",
                  "Compliance Repository"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "API Integration",
                  "Document Formatting",
                  "Metadata Generation"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$9.8M/yr",
                "before": "$39.1M/yr",
                "improvement": "75%"
              },
              "timeReduction": {
                "after": "10 hours",
                "before": "90 hours",
                "improvement": "89%"
              },
              "qualityImprovement": {
                "after": "95% first-pass accuracy",
                "before": "68% first-pass accuracy",
                "improvement": "+27%"
              },
              "throughputIncrease": {
                "after": "1,680 reports/year",
                "before": "420 reports/year",
                "improvement": "4x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-05",
          "frictionPoint": "Procedure updates require manual cross-referencing across 14,000 NRC-controlled documents per reactor",
          "severity": "Critical",
          "role": "Compliance Officer",
          "estimatedAnnualCost": 20.8,
          "annualHours": 189333,
          "function": "Legal & Compliance",
          "subFunction": "Regulatory Filing",
          "strategicThemeId": "ST-03"
        },
        {
          "id": "FP-06",
          "frictionPoint": "Compliance documentation generation consumes 592K annual hours across 21-reactor fleet",
          "severity": "Critical",
          "role": "Compliance Officer",
          "estimatedAnnualCost": 39.1,
          "annualHours": 355333,
          "function": "Legal & Compliance",
          "subFunction": "Regulatory Filing",
          "strategicThemeId": "ST-03"
        }
      ],
      "kpis": [
        {
          "id": "BF-05",
          "kpiName": "Procedure Update Cycle Time",
          "function": "Legal & Compliance",
          "subFunction": "Regulatory Filing",
          "direction": "↓",
          "baselineValue": "47 days",
          "targetValue": "12 days",
          "timeframe": "15 months",
          "strategicThemeId": "ST-03"
        },
        {
          "id": "BF-06",
          "kpiName": "Compliance Documentation Hours per Reactor",
          "function": "Legal & Compliance",
          "subFunction": "Regulatory Filing",
          "direction": "↓",
          "baselineValue": "28,200 hours/year",
          "targetValue": "11,400 hours/year",
          "timeframe": "18 months",
          "strategicThemeId": "ST-03"
        }
      ]
    },
    {
      "id": "ST-04",
      "name": "Energy Market Intelligence & Trading Optimization",
      "currentState": "Manual analysis of 47 pricing nodes, 72-hour forward price forecasting with 8.4% MAPE, Excel-based position tracking across 2,400 monthly transactions",
      "targetState": "Machine learning models improving price forecast accuracy to 3.1% MAPE, real-time basis risk alerts, automated hedging recommendations reducing unhedged exposure by $340M",
      "useCases": [
        {
          "id": "UC-07",
          "title": "Continuous Forward Curve Calibration",
          "pattern": "ReAct Loop",
          "functionalArea": "Finance",
          "description": "Real-time pricing model recalibrates forward curves using live feeds from PJM, MISO, NYISO markets plus natural gas, coal, and emissions pricing. AI adjusts curve shape parameters hourly based on fundamental drivers and market liquidity—replacing daily manual updates.",
          "targetFriction": "Forward price models require daily recalibration using disparate data from PJM, MISO, NYISO market feeds",
          "targetFrictionId": "FP-07",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "ReAct Loop",
            "alternative": "Reflection",
            "rationale": "ReAct Loop enables continuous model recalibration based on latest market data, weather forecasts, and fuel prices—reasoning through parameter adjustments before updating curves. Reflection pattern viable but less responsive to rapid market moves requiring immediate action."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce forward price forecast MAPE from 8.4% to 5.2%",
              "metric": ""
            },
            {
              "outcome": "Capture $4.8M annual P&L improvement through accurate hedging",
              "metric": ""
            },
            {
              "outcome": "Enable intraday curve updates versus end-of-day batch processing",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "real_time"
          ],
          "integrations": [
            "Bloomberg Terminal",
            "PJM eDART",
            "MISO Market Portal",
            "NYMEX Natural Gas Futures"
          ],
          "hitlRequirement": "Senior trader approves curve updates causing >$5/MWh shift in month-ahead prices or affecting hedges >$2M notional",
          "valueScore": 7.58,
          "readinessScore": 6.4,
          "timeToValue": 6,
          "annualValue": 55.8,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 8.6,
            "revenue": 28.2,
            "riskMitigation": 12.9,
            "cashFlow": 6.1
          },
          "readinessDimensions": {
            "dataAvailability": 7,
            "technicalInfrastructure": 6,
            "organizationalCapacity": 7,
            "governance": 5
          },
          "priority": {
            "priorityScore": 6.99,
            "recommendedPhase": "Q2",
            "valueScore": 7.58,
            "ttvScore": 0.5
          },
          "probabilityOfSuccess": 0.6,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Manual Data Collection",
                "description": "Analysts manually download market data files from PJM, MISO, and NYISO portals each morning.",
                "actorType": "human",
                "actorName": "Market Data Analyst",
                "duration": "3 hours",
                "isBottleneck": true,
                "systems": [
                  "PJM Portal",
                  "MISO Portal",
                  "NYISO Portal"
                ],
                "painPoints": [
                  "Multiple logins required",
                  "Files in different formats",
                  "Download failures common"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Data Format Standardization",
                "description": "Team converts disparate CSV, XML, and Excel files into unified format for analysis.",
                "actorType": "human",
                "actorName": "Data Engineer",
                "duration": "4 hours",
                "isBottleneck": true,
                "systems": [
                  "Excel",
                  "Python Scripts",
                  "Internal Database"
                ],
                "painPoints": [
                  "Manual mapping errors",
                  "Format changes break scripts",
                  "Time-intensive validation"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Model Parameter Review",
                "description": "Quantitative analysts review previous day's model performance and identify calibration needs.",
                "actorType": "human",
                "actorName": "Quantitative Analyst",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Risk Management System",
                  "Excel"
                ],
                "painPoints": [
                  "Subjective judgment calls",
                  "Inconsistent across analysts"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Manual Calibration Execution",
                "description": "Analysts run calibration algorithms and adjust parameters based on market data inputs.",
                "actorType": "human",
                "actorName": "Risk Analyst",
                "duration": "5 hours",
                "isBottleneck": false,
                "systems": [
                  "MATLAB",
                  "Risk Management System"
                ],
                "painPoints": [
                  "Computationally intensive",
                  "Multiple iterations required"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Results Validation",
                "description": "Senior analysts validate calibrated curves against market benchmarks and historical patterns.",
                "actorType": "human",
                "actorName": "Senior Risk Manager",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Risk Management System",
                  "Bloomberg Terminal"
                ],
                "painPoints": [
                  "Limited time for thorough review",
                  "Validation bottleneck"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Curve Distribution",
                "description": "Approved forward curves are manually uploaded to trading and risk systems.",
                "actorType": "human",
                "actorName": "Market Data Analyst",
                "duration": "1 hour",
                "isBottleneck": false,
                "systems": [
                  "Trading Platform",
                  "Risk Management System",
                  "Internal Portal"
                ],
                "painPoints": [
                  "Delayed availability to traders",
                  "Manual upload errors"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Automated Multi-Source Data Ingestion",
                "description": "AI agents continuously pull and normalize data from PJM, MISO, NYISO APIs in real-time.",
                "actorType": "ai_agent",
                "actorName": "Data Ingestion Agent",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "PJM API",
                  "MISO API",
                  "NYISO API",
                  "Cloud Data Lake"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Workflow Automation",
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Intelligent Data Quality Check",
                "description": "AI validates data completeness, detects anomalies, and flags issues for human review.",
                "actorType": "ai_agent",
                "actorName": "Data Quality Agent",
                "duration": "3 minutes",
                "isBottleneck": false,
                "systems": [
                  "Cloud Data Lake",
                  "Quality Dashboard"
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
                "stepNumber": 3,
                "name": "AI-Driven Calibration Execution",
                "description": "Machine learning models automatically calibrate forward curves using optimized algorithms.",
                "actorType": "ai_agent",
                "actorName": "Calibration Engine",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Risk Management System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Predictive Modeling"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Expert Review and Override",
                "description": "Senior analysts review AI-generated curves and exception alerts, approving or adjusting as needed.",
                "actorType": "human",
                "actorName": "Senior Risk Manager",
                "duration": "30 minutes",
                "isBottleneck": false,
                "systems": [
                  "Validation Dashboard",
                  "Risk Management System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Explanation AI",
                  "Recommendation Engine"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Automated Distribution and Integration",
                "description": "Approved curves automatically propagate to all downstream trading and risk systems.",
                "actorType": "ai_agent",
                "actorName": "Distribution Agent",
                "duration": "2 minutes",
                "isBottleneck": false,
                "systems": [
                  "Trading Platform",
                  "Risk Management System",
                  "Data Warehouse"
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
                "name": "Continuous Model Performance Monitoring",
                "description": "AI monitors curve accuracy against actual market outcomes and triggers recalibration when needed.",
                "actorType": "ai_agent",
                "actorName": "Performance Monitor",
                "duration": "Continuous",
                "isBottleneck": false,
                "systems": [
                  "ML Platform",
                  "Monitoring Dashboard"
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
                "after": "$2.4M/yr",
                "before": "$8.0M/yr",
                "improvement": "70%"
              },
              "timeReduction": {
                "after": "55 minutes/day",
                "before": "17 hours/day",
                "improvement": "95%"
              },
              "qualityImprovement": {
                "after": "92% accuracy",
                "before": "68% accuracy",
                "improvement": "+24%"
              },
              "throughputIncrease": {
                "after": "24 calibrations/day",
                "before": "1 calibration/day",
                "improvement": "24x"
              }
            }
          }
        },
        {
          "id": "UC-08",
          "title": "Real-Time Basis Risk Optimizer",
          "pattern": "Tool Use",
          "functionalArea": "Finance",
          "description": "Intraday basis risk monitoring calculates locational exposure across generation assets and load obligations, identifies hedge opportunities in PJM FTR and MISO CRR auctions, and recommends optimal position adjustments. AI replaces end-of-day batch processing with continuous 5-minute updates.",
          "targetFriction": "Basis risk exposure calculation uses end-of-day batch processing missing intraday hedge opportunities",
          "targetFrictionId": "FP-08",
          "capabilities": [
            "Data Analysis",
            "Workflow Automation"
          ],
          "agenticPattern": {
            "primary": "Tool Use",
            "alternative": "ReAct Loop",
            "rationale": "Tool Use allows agent to query position data, calculate exposure metrics, evaluate hedge alternatives, and recommend optimal trades—all within 5-minute execution window. ReAct Loop adds latency unsuitable for capturing fleeting hedge opportunities."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce basis risk exposure from $520M to $380M through intraday hedging",
              "metric": ""
            },
            {
              "outcome": "Capture $6.7M annual P&L from improved congestion management",
              "metric": ""
            },
            {
              "outcome": "Cut risk calculation cycle from 24 hours to 5 minutes",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "real_time"
          ],
          "integrations": [
            "Allegro ETRM",
            "PJM eMKT",
            "MISO Market Portal",
            "Bloomberg BVAL"
          ],
          "hitlRequirement": "Risk manager approves all hedge trades >$500K notional or altering net basis exposure >$10M",
          "valueScore": 10,
          "readinessScore": 6.1,
          "timeToValue": 7,
          "annualValue": 56.7,
          "priorityTier": "Champion",
          "benefitBreakdown": {
            "costSavings": 6.3,
            "revenue": 32.2,
            "riskMitigation": 9.1,
            "cashFlow": 9.1
          },
          "readinessDimensions": {
            "dataAvailability": 6,
            "technicalInfrastructure": 6,
            "organizationalCapacity": 7,
            "governance": 5
          },
          "priority": {
            "priorityScore": 8.05,
            "recommendedPhase": "Q1",
            "valueScore": 10,
            "ttvScore": 0.42
          },
          "probabilityOfSuccess": 0.55,
          "workflow": {
            "currentState": [
              {
                "stepNumber": 1,
                "name": "Data Collection",
                "description": "Risk analysts manually gather end-of-day pricing data from multiple trading platforms and market feeds.",
                "actorType": "human",
                "actorName": "Risk Analyst",
                "duration": "3 hours",
                "isBottleneck": true,
                "systems": [
                  "Bloomberg Terminal",
                  "ICE Platform",
                  "Internal Data Warehouse"
                ],
                "painPoints": [
                  "Data only available at end-of-day",
                  "Manual extraction from multiple sources",
                  "Time lag in data availability"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Basis Spread Calculation",
                "description": "Analysts calculate basis spreads between physical and financial positions using spreadsheets.",
                "actorType": "human",
                "actorName": "Quantitative Analyst",
                "duration": "4 hours",
                "isBottleneck": false,
                "systems": [
                  "Excel",
                  "Python Scripts",
                  "Risk Management System"
                ],
                "painPoints": [
                  "Manual formula updates",
                  "Error-prone calculations",
                  "Inconsistent methodologies"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Risk Exposure Analysis",
                "description": "Risk team analyzes basis risk exposure across portfolio positions using batch processing overnight.",
                "actorType": "human",
                "actorName": "Risk Manager",
                "duration": "5 hours",
                "isBottleneck": true,
                "systems": [
                  "Risk Analytics Platform",
                  "VaR Models",
                  "Portfolio Management System"
                ],
                "painPoints": [
                  "Batch processing delays results until next morning",
                  "Missed intraday hedge opportunities",
                  "Cannot respond to market volatility"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Hedge Opportunity Identification",
                "description": "Traders review overnight reports to identify hedging opportunities for the current day.",
                "actorType": "human",
                "actorName": "Energy Trader",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Trading Dashboard",
                  "Risk Reports",
                  "Market Intelligence Platform"
                ],
                "painPoints": [
                  "Stale data from previous day",
                  "Opportunities already expired",
                  "Limited time to execute"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Hedge Execution",
                "description": "Traders manually execute hedge trades based on yesterday's risk analysis.",
                "actorType": "human",
                "actorName": "Energy Trader",
                "duration": "1.5 hours",
                "isBottleneck": false,
                "systems": [
                  "Trading Platform",
                  "Order Management System",
                  "Broker Systems"
                ],
                "painPoints": [
                  "Executing on outdated analysis",
                  "Suboptimal pricing",
                  "High basis risk slippage"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Trade Reconciliation",
                "description": "Back office reconciles executed hedges against risk exposures and updates positions.",
                "actorType": "human",
                "actorName": "Operations Analyst",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Trade Management System",
                  "General Ledger",
                  "Position Tracking"
                ],
                "painPoints": [
                  "Manual reconciliation",
                  "End-of-day settlement only",
                  "Delayed position updates"
                ]
              },
              {
                "stepNumber": 7,
                "name": "Daily Reporting",
                "description": "Risk team prepares daily basis risk reports for management review next morning.",
                "actorType": "human",
                "actorName": "Risk Analyst",
                "duration": "2 hours",
                "isBottleneck": false,
                "systems": [
                  "Reporting Tools",
                  "PowerPoint",
                  "Email"
                ],
                "painPoints": [
                  "Backward-looking reports",
                  "No real-time visibility",
                  "Limited actionability"
                ]
              }
            ],
            "targetState": [
              {
                "stepNumber": 1,
                "name": "Real-Time Data Streaming",
                "description": "AI agent continuously ingests live market data feeds and position updates every 5 minutes.",
                "actorType": "ai_agent",
                "actorName": "Market Data Aggregator AI",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "Real-Time Data Platform",
                  "API Gateway",
                  "Cloud Data Lake"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 2,
                "name": "Automated Basis Calculation",
                "description": "AI calculates basis spreads across all positions using real-time data and ML models.",
                "actorType": "ai_agent",
                "actorName": "Basis Risk Calculator AI",
                "duration": "3 minutes",
                "isBottleneck": false,
                "systems": [
                  "ML Model Platform",
                  "Risk Engine",
                  "Real-Time Analytics"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 3,
                "name": "Dynamic Risk Exposure Monitoring",
                "description": "AI continuously monitors basis risk exposure and detects anomalies or threshold breaches in real-time.",
                "actorType": "ai_agent",
                "actorName": "Risk Monitoring AI",
                "duration": "2 minutes",
                "isBottleneck": false,
                "systems": [
                  "AI Risk Platform",
                  "Alert System",
                  "Portfolio Analytics"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 4,
                "name": "Intelligent Hedge Recommendations",
                "description": "AI generates optimal hedge recommendations with execution timing and sizing based on real-time opportunities.",
                "actorType": "ai_agent",
                "actorName": "Hedge Optimization AI",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "Optimization Engine",
                  "Trading Analytics",
                  "Decision Support System"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              },
              {
                "stepNumber": 5,
                "name": "Trader Review & Approval",
                "description": "Senior trader reviews AI recommendations and approves or adjusts hedge strategy before execution.",
                "actorType": "human",
                "actorName": "Senior Energy Trader",
                "duration": "15 minutes",
                "isBottleneck": false,
                "systems": [
                  "Trading Dashboard",
                  "AI Recommendation Portal",
                  "Risk Viewer"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "assisted",
                "aiCapabilities": [
                  "Data Analysis"
                ]
              },
              {
                "stepNumber": 6,
                "name": "Automated Trade Execution",
                "description": "AI executes approved hedges via algorithmic trading with optimal timing and price improvement.",
                "actorType": "ai_agent",
                "actorName": "Trade Execution AI",
                "duration": "5 minutes",
                "isBottleneck": false,
                "systems": [
                  "Algorithmic Trading Platform",
                  "Smart Order Router",
                  "Broker APIs"
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
                "name": "Continuous Reporting & Learning",
                "description": "AI provides real-time dashboards and continuously learns from execution results to improve recommendations.",
                "actorType": "ai_agent",
                "actorName": "Reporting & Learning AI",
                "duration": "Continuous",
                "isBottleneck": false,
                "systems": [
                  "Real-Time Dashboard",
                  "ML Training Pipeline",
                  "Analytics Platform"
                ],
                "painPoints": [],
                "isAIEnabled": true,
                "automationLevel": "full",
                "aiCapabilities": [
                  "Data Analysis",
                  "Workflow Automation"
                ]
              }
            ],
            "comparisonMetrics": {
              "costReduction": {
                "after": "$1.2M/yr",
                "before": "$5.8M/yr",
                "improvement": "79%"
              },
              "timeReduction": {
                "after": "35 minutes per cycle",
                "before": "19.5 hours per cycle",
                "improvement": "97%"
              },
              "qualityImprovement": {
                "after": "92% hedge effectiveness",
                "before": "65% hedge effectiveness",
                "improvement": "+27%"
              },
              "throughputIncrease": {
                "after": "24+ analyses/day",
                "before": "1 analysis/day",
                "improvement": "24x"
              }
            }
          }
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-07",
          "frictionPoint": "Forward price models require daily recalibration using disparate data from PJM, MISO, NYISO market feeds",
          "severity": "Critical",
          "role": "Business Analyst",
          "estimatedAnnualCost": 8,
          "annualHours": 84000,
          "function": "Finance",
          "subFunction": "Risk Assessment",
          "strategicThemeId": "ST-04"
        },
        {
          "id": "FP-08",
          "frictionPoint": "Basis risk exposure calculation uses end-of-day batch processing missing intraday hedge opportunities",
          "severity": "Critical",
          "role": "Business Analyst",
          "estimatedAnnualCost": 5.8,
          "annualHours": 61333,
          "function": "Finance",
          "subFunction": "Risk Assessment",
          "strategicThemeId": "ST-04"
        }
      ],
      "kpis": [
        {
          "id": "BF-07",
          "kpiName": "Forward Price Forecast Accuracy (MAPE)",
          "function": "Finance",
          "subFunction": "Risk Assessment",
          "direction": "↓",
          "baselineValue": "8.4%",
          "targetValue": "3.1%",
          "timeframe": "12 months",
          "strategicThemeId": "ST-04"
        },
        {
          "id": "BF-08",
          "kpiName": "Basis Risk Exposure",
          "function": "Finance",
          "subFunction": "Risk Assessment",
          "direction": "↓",
          "baselineValue": "$520M",
          "targetValue": "$180M",
          "timeframe": "15 months",
          "strategicThemeId": "ST-04"
        }
      ]
    },
    {
      "id": "ST-05",
      "name": "Customer Analytics & Demand Forecasting",
      "currentState": "Manual segmentation of 2.1M accounts, 11% demand forecast error driving $23M hedge inefficiency, reactive churn management with 34% save rate",
      "targetState": "Predictive load profiles at account level reducing forecast error to 4.2%, proactive retention interventions achieving 67% save rate, dynamic pricing optimization for 340,000 commercial accounts",
      "useCases": [
        {
          "id": "UC-09",
          "title": "Commercial Load Segmentation Engine",
          "pattern": "Planning",
          "functionalArea": "Customer Service",
          "description": "Automated customer segmentation analyzes 1.2M commercial accounts across 47 rate classes, clustering by usage patterns, industry vertical, demand characteristics, and price sensitivity. AI generates granular load forecasts replacing manual rate class aggregation with behavior-based predictions.",
          "targetFriction": "Commercial load forecasting requires manual segmentation of 1.2M customer accounts across 47 rate classes",
          "targetFrictionId": "FP-09",
          "capabilities": [
            "Data Analysis",
            "Research & Information Retrieval"
          ],
          "agenticPattern": {
            "primary": "Planning",
            "alternative": "Tool Use",
            "rationale": "Planning pattern optimal for multi-step customer segmentation workflow: data extraction, behavioral clustering, rate class mapping, forecast model selection. Tool Use works but lacks coordination needed to sequence analytics tasks efficiently."
          },
          "epochClassification": [
            "Operational"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce commercial load forecast error from 11.2% to 6.8%",
              "metric": ""
            },
            {
              "outcome": "Improve procurement accuracy yielding $2.9M annual savings",
              "metric": ""
            },
            {
              "outcome": "Automate segmentation reducing analyst hours from 4,200 to 1,100 annually",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured"
          ],
          "integrations": [
            "Oracle Customer Care & Billing",
            "Meter Data Management System",
            "Salesforce CRM",
            "Energy Forecasting Platform"
          ],
          "hitlRequirement": "Demand planning manager validates segment definitions before quarterly forecast production",
          "valueScore": 3.88,
          "readinessScore": 5.1,
          "timeToValue": 8,
          "annualValue": 12.9,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 5.1,
            "revenue": 0,
            "riskMitigation": 4.8,
            "cashFlow": 3
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 6,
            "governance": 4
          },
          "priority": {
            "priorityScore": 4.49,
            "recommendedPhase": "Q4",
            "valueScore": 3.88,
            "ttvScore": 0.33
          },
          "probabilityOfSuccess": 0.6
        },
        {
          "id": "UC-10",
          "title": "Predictive Churn Prevention System",
          "pattern": "Agent Handoff",
          "functionalArea": "Customer Service",
          "description": "Multi-agent system predicts residential churn risk using usage patterns, payment history, competitive offers, and engagement signals. When churn probability exceeds 40%, system triggers personalized retention outreach and generates customized rate offers for account manager approval.",
          "targetFriction": "Churn prediction models lack real-time usage pattern analysis and competitive offer intelligence",
          "targetFrictionId": "FP-10",
          "capabilities": [
            "Data Analysis",
            "Conversational Interfaces"
          ],
          "agenticPattern": {
            "primary": "Agent Handoff",
            "alternative": "Orchestrator-Workers",
            "rationale": "Agent Handoff enables smooth transition from churn prediction (analytics agent) to retention outreach (engagement agent) to offer generation (pricing agent)—each specialist hands off context. Orchestrator-Workers creates coordination overhead without improving handoff quality."
          },
          "epochClassification": [
            "Human-centric"
          ],
          "desiredOutcomes": [
            {
              "outcome": "Reduce residential churn from 18% to 14% preserving $4.2M annual margin",
              "metric": ""
            },
            {
              "outcome": "Increase retention offer acceptance from 32% to 51%",
              "metric": ""
            },
            {
              "outcome": "Enable proactive outreach 45 days before expected churn versus reactive response",
              "metric": ""
            }
          ],
          "dataTypes": [
            "structured",
            "semi_structured",
            "real_time"
          ],
          "integrations": [
            "Oracle CCB",
            "Salesforce CRM",
            "Competitive Intelligence Platform",
            "Email Engagement System"
          ],
          "hitlRequirement": "Account manager approves all retention offers affecting customer contract terms or pricing",
          "valueScore": 3.92,
          "readinessScore": 5.1,
          "timeToValue": 9,
          "annualValue": 9.8,
          "priorityTier": "Foundation",
          "benefitBreakdown": {
            "costSavings": 3.5,
            "revenue": 2.7,
            "riskMitigation": 3.6,
            "cashFlow": 0
          },
          "readinessDimensions": {
            "dataAvailability": 5,
            "technicalInfrastructure": 5,
            "organizationalCapacity": 6,
            "governance": 4
          },
          "priority": {
            "priorityScore": 4.51,
            "recommendedPhase": "Q3",
            "valueScore": 3.92,
            "ttvScore": 0.25
          },
          "probabilityOfSuccess": 0.55
        }
      ],
      "frictionPoints": [
        {
          "id": "FP-09",
          "frictionPoint": "Commercial load forecasting requires manual segmentation of 1.2M customer accounts across 47 rate classes",
          "severity": "High",
          "role": "Customer Support Specialist",
          "estimatedAnnualCost": 3.2,
          "annualHours": 49333,
          "function": "Customer Service",
          "subFunction": "Customer Communication",
          "strategicThemeId": "ST-05"
        },
        {
          "id": "FP-10",
          "frictionPoint": "Churn prediction models lack real-time usage pattern analysis and competitive offer intelligence",
          "severity": "High",
          "role": "Customer Support Specialist",
          "estimatedAnnualCost": 2.2,
          "annualHours": 34000,
          "function": "Customer Service",
          "subFunction": "Customer Communication",
          "strategicThemeId": "ST-05"
        }
      ],
      "kpis": [
        {
          "id": "BF-09",
          "kpiName": "Commercial Load Forecast Error",
          "function": "Customer Service",
          "subFunction": "Customer Communication",
          "direction": "↓",
          "baselineValue": "11.2%",
          "targetValue": "4.2%",
          "timeframe": "12 months",
          "strategicThemeId": "ST-05"
        },
        {
          "id": "BF-10",
          "kpiName": "Residential Customer Churn Rate",
          "function": "Customer Service",
          "subFunction": "Customer Communication",
          "direction": "↓",
          "baselineValue": "18%",
          "targetValue": "14%",
          "timeframe": "18 months",
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
    "headline": "The organization should execute 4 Critical-priority AI initiatives in Q1-Q2 to capture $194.0M in first-year value from a $405.0M total opportunity.",
    "context": "The organization operates the nation's largest nuclear fleet alongside diversified renewable and fossil generation, managing complex real-time dispatch decisions across volatile energy markets. The company faces three concurrent pressures: maximizing revenue from wholesale trading operations, extending nuclear asset life through predictive maintenance, and maintaining world-class regulatory compliance across multiple jurisdictions. Existing SCADA and OSI PI historian systems contain rich operational data, but siloed architectures prevent integrated analytics and real-time optimization.",
    "criticalPath": "The roadmap's critical path runs through trading optimization quick wins (Q1-Q2) that build organizational AI capability while IT completes data platform consolidation in parallel. Nuclear use cases follow in Q3-Q4 once governance frameworks mature. Grid optimization and compliance automation require the consolidated data platform and deploy in Year 2.",
    "recommendedAction": "Initiate UC-07 (Forward Curve Calibration) and UC-08 (Basis Risk Optimizer) immediately with trading desk sponsorship to capture $106.6M in Year 1 value while establishing AI deployment patterns for nuclear and grid applications.",
    "findings": [
      {
        "title": "Trading optimization delivers fastest time-to-value with lowest deployment risk",
        "body": "Continuous Forward Curve Calibration ($52.0M) and Real-Time Basis Risk Optimizer ($54.6M) combine for $106.6M in annual value with 6-7 month deployment timelines. These use cases leverage existing market data feeds and trading desk workflows without requiring cross-asset data integration. The trading desk already employs quantitative analysts comfortable with algorithmic decision support.",
        "value": "$106.6M annually"
      },
      {
        "title": "Nuclear fleet reliability represents highest individual value but requires governance foundation",
        "body": "Nuclear Equipment Health Monitor ($67.0M) offers the largest single opportunity by preventing unplanned outages that cost $2.1M per day in lost revenue. However, its 12-month time-to-value reflects the need to establish AI-specific governance frameworks within existing NRC regulatory structures. Automated Sensor Feature Engineering ($22.3M) provides a lower-risk entry point to build nuclear AI capabilities.",
        "value": "$89.3M annually"
      },
      {
        "title": "Grid optimization unlocks $87.3M but depends on breaking data silos",
        "body": "Real-Time Economic Dispatch Optimizer ($56.5M) and Adaptive Renewable Forecasting Engine ($30.8M) require integrated data from nuclear, fossil, and renewable assets currently trapped in separate historian systems. The company must complete data platform consolidation work—not included in these timelines—before these use cases can deploy. This represents 18-24 months of prerequisite infrastructure investment.",
        "value": "$87.3M annually"
      }
    ],
    "opportunityTable": [
      {
        "metric": "Total Annual Value",
        "value": "$405.0M"
      },
      {
        "metric": "Critical-Priority Initiatives",
        "value": "4"
      },
      {
        "metric": "First-Year Impact",
        "value": "$194.0M"
      },
      {
        "metric": "Value per 1M Tokens",
        "value": "$1,071"
      }
    ]
  },
  "workshopUrl": "https://workshop.movefasterwithai.com/shared/mhoTOTqV0D"
};
