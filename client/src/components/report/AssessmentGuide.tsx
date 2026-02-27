/**
 * Assessment Guide
 * Collapsible "Understanding This Assessment" section with blue left border accent.
 * Static content — no props needed. Collapsed by default.
 * Uses AnimatePresence for smooth expand/collapse.
 */

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  Target,
  BarChart3,
  Layers,
  TrendingUp,
  Shield,
  Workflow,
} from "lucide-react";

const frameworkSteps = [
  { icon: Target, label: "Strategic Discovery", description: "Identify friction points and high-value opportunities across your organization" },
  { icon: BarChart3, label: "Quantified Valuation", description: "Assign dollar values to every use case using industry benchmarks and your data" },
  { icon: Layers, label: "Readiness Assessment", description: "Score data, technology, organizational, and governance readiness for each initiative" },
  { icon: TrendingUp, label: "Priority Matrix", description: "Plot value vs. readiness to surface Champions, Quick Wins, Strategic Bets, and Foundation items" },
  { icon: Shield, label: "Risk & Governance", description: "Evaluate compliance, ethical, and operational risks for every use case" },
  { icon: Workflow, label: "Workflow Design", description: "Map current-state and target-state workflows with AI integration points" },
  { icon: BookOpen, label: "Roadmap & Action Plan", description: "Sequence initiatives into phases with clear milestones and financial targets" },
];

const navigationItems = [
  { section: "Executive Summary", description: "Top-line findings, critical path, and recommended next steps" },
  { section: "Value Drivers", description: "Four pillars of financial impact — revenue, cost, cash flow, and risk" },
  { section: "Financial Sensitivity", description: "Conservative, base, and optimistic scenario modeling" },
  { section: "Value vs. Readiness Matrix", description: "Every use case plotted on a 2D priority grid" },
  { section: "Friction Recovery Dashboard", description: "How friction costs map to AI recovery opportunities" },
  { section: "Use Case Discovery", description: "Deep dive into each theme and its scored use cases" },
  { section: "Readiness Table", description: "Dimension-level readiness scores across all themes" },
  { section: "Workflow Transformation", description: "Current vs. target workflow comparison with metrics" },
];

export default function AssessmentGuide() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-8 md:py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <button
            onClick={() => setOpen(!open)}
            className="w-full glass-card rounded-xl p-5 flex items-center gap-4 text-left hover:border-border transition-colors relative overflow-hidden"
          >
            {/* Blue left border accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00A3E0] rounded-l-xl" />

            <div className="p-2 rounded-lg bg-[#00A3E0]/10 flex-shrink-0">
              <BookOpen className="h-5 w-5 text-[#00A3E0]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground">
                Understanding This Assessment
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                How to read this report and what makes BlueAlly's methodology different
              </p>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="glass-card rounded-b-xl -mt-3 pt-6 px-5 pb-6 border-t-0 rounded-t-none relative overflow-hidden">
                  {/* Blue left border accent continuation */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00A3E0]" />

                  {/* Why assessments fail */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Why 95% of AI Initiatives Fail
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Most organizations rush into AI pilots without a structured understanding of where
                      value actually lives, what their infrastructure can support, or which initiatives
                      will deliver measurable returns. The result: scattered experiments, wasted budgets,
                      and executive disillusionment. BlueAlly's assessment methodology exists to fix that.
                      Every use case in this report is quantified, scored for readiness, and mapped to a
                      concrete implementation path.
                    </p>
                  </div>

                  {/* The 7-Step Framework */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      The BlueAlly 7-Step Framework
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {frameworkSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                          <div
                            key={step.label}
                            className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border-subtle"
                          >
                            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-[#00A3E0]/10 text-[#00A3E0] flex-shrink-0">
                              <span className="text-xs font-bold">{index + 1}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <Icon className="h-3.5 w-3.5 text-[#00A3E0]" />
                                <span className="text-sm font-medium text-foreground">
                                  {step.label}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation guide */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Report Sections
                    </h4>
                    <div className="space-y-2">
                      {navigationItems.map((item, index) => (
                        <div
                          key={item.section}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] text-xs font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <div>
                            <span className="font-medium text-foreground">
                              {item.section}
                            </span>
                            <span className="text-muted-foreground"> — {item.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
