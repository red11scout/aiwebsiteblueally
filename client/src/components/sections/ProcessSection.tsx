/**
 * Process Section
 * BlueAlly's 7-Step Process for AI Use Cases
 * A systematic methodology that transforms business challenges into measurable AI value
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Target,
  ClipboardList,
  AlertTriangle,
  Cpu,
  BarChart3,
  DollarSign,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    id: 1,
    icon: Target,
    title: "Anchor to Strategy",
    subtitle: "Define business drivers & OKRs",
    description: "Define business drivers and OKRs before selecting AI use cases. Anchoring prevents the common pitfall of pursuing AI for its own sake. If a use case doesn't directly move a strategic needle, it doesn't make the cut.",
    activities: [
      "Executive Workshops: Align leadership on top 3-5 business drivers",
      "OKR Definition: Translate vague goals into quantifiable targets",
      "Success Criteria: Establish what 'good' looks like before building",
    ],
    insight: "Every AI initiative must connect directly to core business objectives.",
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "Inventory Functions",
    subtitle: "Identify operational friction",
    description: "Systematically identify where operational friction creates value destruction. Map the value chain, assess where high-value talent is trapped in low-value tasks, and locate bottlenecks.",
    activities: [
      "Map the Value Chain: Trace every step from acquisition to delivery",
      "Assess Resources: Find where talent is trapped in low-value tasks",
      "Locate Friction: Pinpoint bottlenecks and error-prone processes",
    ],
    insight: "40% of time in high-friction roles is spent searching for information.",
  },
  {
    id: 3,
    icon: AlertTriangle,
    title: "Map Pain Points",
    subtitle: "Catalog operational failures",
    description: "Catalog the specific operational failures that destroy business value. We map every pain point to a specific financial impact, turning annoyances into business cases.",
    activities: [
      "Delays: Waiting for information or approvals",
      "Errors: Incorrect data entry requiring correction",
      "Rework: Doing the same task multiple times",
      "Compliance Risk: Gaps in audit trails or reporting",
    ],
    insight: "30% average error rate in manual data entry & transcription.",
  },
  {
    id: 4,
    icon: Cpu,
    title: "Match to AI Primitives",
    subtitle: "Map problems to AI capabilities",
    description: "Map business problems to the six core capabilities of AI: Generative AI, Natural Language Processing, Computer Vision, Predictive Analytics, Speech Intelligence, and Optimization.",
    activities: [
      "Problem First: Start with the problem, not the technology",
      "Select Primitive: Match problem to the right AI capability",
      "Avoid Over-Engineering: Use simple solutions when they work",
    ],
    insight: "6 Core Primitives cover 99% of all enterprise AI use cases.",
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Define KPIs",
    subtitle: "Set industry benchmarks",
    description: "Establish specific, measurable targets based on industry standards. We benchmark your targets against the top 25% of performers to ensure goals are ambitious but achievable.",
    activities: [
      "SMART Goals: Specific, Measurable, Achievable, Relevant, Time-bound",
      "Top Quartile Benchmarking: Compare against industry leaders",
      "Baseline Establishment: Track progress over time",
    ],
    insight: "Removes subjectivity from 'success' with objective measurement.",
  },
  {
    id: 6,
    icon: DollarSign,
    title: "Quantify Impact",
    subtitle: "Translate to financial value",
    description: "Translate technical improvements into financial value across four dimensions: Revenue (new sales, reduced churn), Cost (labor savings, reduced errors), Cash Flow (faster collections), and Risk (compliance, fraud reduction).",
    activities: [
      "Revenue: New sales, reduced churn, cross-sell lift",
      "Cost: Labor savings, reduced errors, lower IT spend",
      "Cash Flow: Faster collections, inventory optimization",
      "Risk: Compliance penalty avoidance, fraud reduction",
    ],
    insight: "$16.5M average annual value identified with 4.2x projected ROI.",
  },
  {
    id: 7,
    icon: Trophy,
    title: "Score & Rank",
    subtitle: "Strategic prioritization",
    description: "Objective multi-dimensional scoring to select the 'Focus on Three.' We weight 50% on business value and 30% on technical feasibility to prioritize the highest-impact use cases.",
    activities: [
      "Cut the Tail: Discard initiatives scoring below 70",
      "Resource Focus: Select only top 3 high-scoring use cases",
      "Avoid Paralysis: 10+ pilots guarantees failure",
    ],
    insight: "The 'Focus on Three' rule ensures concentrated resources for success.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="py-24 md:py-40 gradient-navy" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/10 rounded-full border border-[#00A3E0]/20">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            7-Step Use Case Methodology
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            A systematic methodology that transforms business challenges into measurable AI value.
            Strategic alignment. Measurable outcomes. Objective prioritization.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center">
            <div className="text-[#00A3E0] font-medium text-lg mb-1">Strategic Alignment</div>
            <p className="text-white/60 text-sm">Every AI initiative connects to core business objectives</p>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center">
            <div className="text-[#00B34A] font-medium text-lg mb-1">Measurable Value</div>
            <p className="text-white/60 text-sm">Technical improvements translated to financial impact</p>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center">
            <div className="text-[#00A3E0] font-medium text-lg mb-1">Objective Priority</div>
            <p className="text-white/60 text-sm">Scoring based on value, feasibility, and strategic fit</p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-white/10 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00A3E0] to-[#00B34A] rounded-full"
                initial={{ width: "0%" }}
                animate={isInView ? { width: `${((activeStep - 1) / 6) * 100}%` } : {}}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between mb-12">
              {processSteps.map((step, index) => (
                <motion.button
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center group"
                >
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2",
                      activeStep >= step.id
                        ? "bg-gradient-to-br from-[#00A3E0] to-[#00B34A] border-transparent"
                        : "bg-white/5 border-white/20 group-hover:border-white/40"
                    )}
                  >
                    <step.icon
                      className={cn(
                        "h-6 w-6 transition-colors",
                        activeStep >= step.id ? "text-white" : "text-white/50"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "mt-3 text-sm font-medium transition-colors text-center max-w-[100px]",
                      activeStep === step.id ? "text-white" : "text-white/50"
                    )}
                  >
                    {step.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Step Selector */}
          <div className="lg:hidden mb-8">
            {/* Step number indicators */}
            <div className="flex justify-between items-center mb-4 px-2">
              {processSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-sm font-medium",
                    activeStep === step.id
                      ? "bg-gradient-to-br from-[#00A3E0] to-[#00B34A] text-white scale-110"
                      : activeStep > step.id
                        ? "bg-[#00A3E0]/50 text-white"
                        : "bg-white/10 text-white/50"
                  )}
                >
                  {step.id}
                </button>
              ))}
            </div>
            {/* Progress bar */}
            <div className="h-1 bg-white/10 rounded-full mx-2">
              <div 
                className="h-full bg-gradient-to-r from-[#00A3E0] to-[#00B34A] rounded-full transition-all duration-300"
                style={{ width: `${((activeStep - 1) / 6) * 100}%` }}
              />
            </div>
            {/* Current step title */}
            <div className="text-center mt-4">
              <span className="text-white font-medium">{processSteps[activeStep - 1].title}</span>
            </div>
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/10 px-3 py-1 rounded-full">
                    Step {activeStep}
                  </span>
                  <span className="text-sm text-white/50">
                    {processSteps[activeStep - 1].subtitle}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl text-white mb-4">
                  {processSteps[activeStep - 1].title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {processSteps[activeStep - 1].description}
                </p>
                
                {/* Insight Callout */}
                <div className="bg-[#00B34A]/10 border border-[#00B34A]/20 rounded-xl p-4">
                  <p className="text-[#00B34A] text-sm font-medium">
                    💡 {processSteps[activeStep - 1].insight}
                  </p>
                </div>
              </div>

              <div className="lg:w-80 shrink-0">
                <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
                  Key Activities
                </h4>
                <ul className="space-y-3">
                  {processSteps[activeStep - 1].activities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80 text-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#00A3E0]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs text-[#00A3E0] font-medium">{index + 1}</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>
              <div className="flex gap-1">
                {processSteps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      activeStep === step.id
                        ? "bg-[#00A3E0] w-6"
                        : "bg-white/30 hover:bg-white/50"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveStep(Math.min(7, activeStep + 1))}
                disabled={activeStep === 7}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
