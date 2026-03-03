"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MonoText } from "@/components/shared/MonoText";
import type { UseCaseDisplay } from "@/lib/types";

const CATEGORY_CONFIG = {
  champion: {
    color: "text-accent-success",
    dotColor: "bg-[#10B981]",
    label: "Champions \u2014 High Value, High Readiness",
  },
  "quick-win": {
    color: "text-accent-primary",
    dotColor: "bg-[#3B82F6]",
    label: "Quick Wins \u2014 High Readiness, Moderate Value",
  },
  "strategic-bet": {
    color: "text-accent-glow",
    dotColor: "bg-[#06B6D4]",
    label: "Strategic Bets \u2014 High Value, Lower Readiness",
  },
} as const;

type GroupKey = keyof typeof CATEGORY_CONFIG;

function AccordionItem({
  useCase,
  defaultOpen,
}: {
  useCase: UseCaseDisplay;
  defaultOpen: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const valueMil = (useCase.annualValue / 1_000_000).toFixed(1);

  return (
    <div id={`usecase-${useCase.id}`} className="mb-3">
      {/* Header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-bg-surface border border-border-subtle rounded-xl px-6 py-4 cursor-pointer flex justify-between items-center w-full text-left"
        style={isOpen ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : undefined}
      >
        <span className="font-medium text-text-primary">{useCase.name}</span>
        <span className="flex items-center gap-3">
          <MonoText className="text-sm text-text-secondary">
            ${valueMil}M
          </MonoText>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-text-muted"
          >
            <ChevronDown size={18} />
          </motion.span>
        </span>
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-bg-surface border border-border-subtle border-t-0 rounded-b-xl px-6 py-6">
              <p className="text-text-secondary mb-4">{useCase.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Readiness bar */}
                <div>
                  <span className="font-mono text-sm text-text-muted block mb-2">
                    Readiness: {useCase.readiness}/100
                  </span>
                  <div className="bg-border-subtle rounded-full h-2">
                    <div
                      className="bg-accent-primary rounded-full h-2 transition-all duration-500"
                      style={{ width: `${useCase.readiness}%` }}
                    />
                  </div>
                </div>

                {/* Time to production */}
                <div>
                  <span className="text-sm text-text-muted block mb-1">
                    Time to Production
                  </span>
                  <span className="font-mono text-sm text-text-secondary">
                    {useCase.timeToProduction}
                  </span>
                </div>

                {/* Dependencies */}
                <div>
                  <span className="text-sm text-text-muted block mb-1">
                    Dependencies
                  </span>
                  <span className="text-sm text-text-muted">
                    {useCase.dependencies.length > 0
                      ? useCase.dependencies.join(", ")
                      : "None identified"}
                  </span>
                </div>

                {/* Data requirements */}
                <div>
                  <span className="text-sm text-text-muted block mb-1">
                    Data Requirements
                  </span>
                  <span className="text-sm text-text-muted">
                    {useCase.dataRequirements.length > 0
                      ? useCase.dataRequirements.join(", ")
                      : "Standard operational data"}
                  </span>
                </div>
              </div>

              {/* Champion nudge */}
              {useCase.category === "champion" && (
                <p className="text-xs text-accent-success italic mt-4">
                  This use case alone justifies the assessment.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function UseCaseAccordions({
  useCases,
}: {
  useCases: UseCaseDisplay[];
}) {
  const groups = useMemo(() => {
    const result: Record<GroupKey, UseCaseDisplay[]> = {
      champion: [],
      "quick-win": [],
      "strategic-bet": [],
    };
    useCases.forEach((uc) => {
      if (uc.category !== "defer" && result[uc.category as GroupKey]) {
        result[uc.category as GroupKey].push(uc);
      }
    });
    return result;
  }, [useCases]);

  const groupOrder: GroupKey[] = ["champion", "quick-win", "strategic-bet"];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
            Validated Use Cases &mdash; Deep Dive
          </h2>

          {groupOrder.map((key) => {
            const items = groups[key];
            if (!items || items.length === 0) return null;
            const config = CATEGORY_CONFIG[key];

            return (
              <div key={key} className="mb-8">
                <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${config.color}`}>
                  <span className={`w-3 h-3 rounded-full inline-block ${config.dotColor}`} />
                  {config.label}
                </h3>

                {items.map((uc) => (
                  <AccordionItem
                    key={uc.id}
                    useCase={uc}
                    defaultOpen={key === "champion"}
                  />
                ))}
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
