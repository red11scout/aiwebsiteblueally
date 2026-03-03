"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface TimelineStep {
  label: string;
  description: string;
  deliverable: string;
  isExecution?: boolean;
}

const steps: TimelineStep[] = [
  {
    label: "Discover",
    description:
      "Map your operational landscape and identify AI-ready processes.",
    deliverable: "Operational Discovery Report",
  },
  {
    label: "Map",
    description: "Align business objectives to validated AI use cases.",
    deliverable: "Use Case Alignment Matrix",
  },
  {
    label: "Design",
    description:
      "Architect solutions that fit your data, stack, and team.",
    deliverable: "Solution Architecture Blueprint",
  },
  {
    label: "Assess",
    description:
      "Quantify the value opportunity across every validated use case.",
    deliverable: "AI Readiness Scorecard (0-100) + ROI Projection Matrix",
  },
  {
    label: "Procure",
    description:
      "Source and configure the optimal infrastructure stack.",
    deliverable: "Infrastructure Procurement Plan",
    isExecution: true,
  },
  {
    label: "Develop",
    description: "Build production-grade AI solutions with your data.",
    deliverable: "Working AI Prototypes",
    isExecution: true,
  },
  {
    label: "Deliver",
    description:
      "Deploy to production with monitoring and observability.",
    deliverable: "Production Deployment Package",
    isExecution: true,
  },
  {
    label: "Manage",
    description:
      "Ongoing optimization, monitoring, and model management.",
    deliverable: "Managed Services SLA",
    isExecution: true,
  },
];

function TimelineNode({
  step,
  index,
  activeIndex,
  setActiveIndex,
}: {
  step: TimelineStep;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (i: number | null) => void;
}) {
  const isActive = activeIndex === index;

  return (
    <div
      className="relative flex flex-col items-center gap-2 snap-center min-w-[120px] lg:min-w-0"
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      onClick={() => setActiveIndex(isActive ? null : index)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-3 w-64 bg-bg-surface border border-border-subtle rounded-lg p-4 shadow-lg z-10"
          >
            <p className="text-text-primary text-sm mb-2">
              {step.description}
            </p>
            <p className="font-mono text-xs text-text-muted">
              Deliverable: {step.deliverable}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circle node */}
      <div
        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer ${
          isActive
            ? "bg-accent-primary text-white border-accent-primary"
            : step.isExecution
              ? "border-accent-glow bg-bg-surface text-text-secondary"
              : "border-accent-primary bg-bg-surface text-text-secondary"
        }`}
      >
        {index + 1}
      </div>

      {/* Label */}
      <span className="text-xs text-text-secondary font-medium text-center">
        {step.label}
      </span>
    </div>
  );
}

export function MethodologyTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ScrollReveal>
      <section id="methodology" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-text-primary">
            The BlueAlly AI Adoption Engine
          </h2>
          <p className="text-text-secondary text-center mb-16">
            From Discovery to Managed Services &mdash; One Partner, Zero Handoff
            Gaps
          </p>

          {/* Desktop timeline */}
          <div className="hidden lg:flex items-center justify-between gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center flex-1 last:flex-none">
                <TimelineNode
                  step={step}
                  index={i}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
                {i < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 ${
                      steps[i + 1]?.isExecution && step.isExecution
                        ? "bg-accent-glow/30"
                        : "bg-border-subtle"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile timeline — horizontal scroll */}
          <div className="lg:hidden overflow-x-auto snap-x snap-mandatory flex items-center gap-4 pb-4">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <TimelineNode
                  step={step}
                  index={i}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
                {i < steps.length - 1 && (
                  <div
                    className={`h-0.5 w-8 mx-1 flex-shrink-0 ${
                      steps[i + 1]?.isExecution && step.isExecution
                        ? "bg-accent-glow/30"
                        : "bg-border-subtle"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Callout box */}
          <div className="mt-12 border-l-4 border-accent-primary pl-6 py-4 bg-bg-surface/50 rounded-r-lg">
            <p className="font-medium text-text-primary">
              Where other consultants hand off at strategy, BlueAlly executes
              through production and beyond.
            </p>
            <p className="font-mono text-sm text-accent-glow mt-2">
              Single-Vendor Advantage: 35% Fewer Critical Issues &middot; 40%
              Faster Deployment
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
