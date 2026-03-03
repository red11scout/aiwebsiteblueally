"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import type { LifecycleStage } from "@/lib/types";

export function FrictionMap({ lifecycle }: { lifecycle: LifecycleStage[] }) {
  const defaultIndex = useMemo(() => {
    const idx = lifecycle.findIndex((s) => s.frictionPoints.length > 0);
    return idx >= 0 ? idx : 0;
  }, [lifecycle]);

  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const activeStage = lifecycle[activeIndex];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          {/* Header */}
          <h2 className="text-3xl font-bold text-center mb-4 text-text-primary">
            Where Friction Lives in Your Operations
          </h2>
          <p className="text-text-secondary text-center mb-12">
            Click any friction point to see the AI opportunity.
          </p>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            {/* Left — Vertical timeline */}
            <div className="relative">
              {lifecycle.map((stage, i) => {
                const isActive = i === activeIndex;
                const hasFriction = stage.frictionPoints.length > 0;

                return (
                  <div key={stage.name} className="relative">
                    {/* Connecting line */}
                    {i < lifecycle.length - 1 && (
                      <div className="absolute left-5 top-10 w-0.5 h-full bg-border-subtle" />
                    )}

                    <button
                      onClick={() => setActiveIndex(i)}
                      className="flex items-center gap-4 py-4 cursor-pointer w-full text-left"
                    >
                      {/* Circle node */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-mono transition-colors ${
                            isActive
                              ? "border-accent-primary bg-accent-primary text-white"
                              : "border-border-subtle text-text-muted"
                          }`}
                        >
                          {i + 1}
                        </div>
                        {/* Red dot badge for stages with friction */}
                        {hasFriction && (
                          <span className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-accent-danger animate-pulse" />
                        )}
                      </div>

                      {/* Stage name */}
                      <span
                        className={`font-medium transition-colors ${
                          isActive ? "text-text-primary" : "text-text-secondary"
                        }`}
                      >
                        {stage.name}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right — Friction detail panel */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeStage.frictionPoints.length === 0 ? (
                    <p className="text-text-muted py-8">
                      No significant friction identified at this stage.
                    </p>
                  ) : (
                    activeStage.frictionPoints.map((fp, i) => (
                      <motion.div
                        key={fp.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: i * 0.08,
                          ease: "easeOut",
                        }}
                        className="bg-bg-surface border border-border-subtle rounded-xl p-6 mb-4"
                      >
                        <h3 className="font-semibold text-text-primary text-lg mb-3">
                          {fp.title}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <span className="text-sm text-accent-danger font-medium block mb-1">
                              Current Impact
                            </span>
                            <span className="text-text-secondary text-sm">
                              {fp.costImpact}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm text-accent-success font-medium block mb-1">
                              AI Opportunity
                            </span>
                            <span className="text-text-secondary text-sm">
                              {fp.aiOpportunity}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
