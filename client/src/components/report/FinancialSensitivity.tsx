/**
 * Financial Sensitivity Analysis
 * 3-column scenario comparison: Conservative, Base Case, Optimistic.
 * Base Case elevated with "Recommended" badge.
 * Animated number counters on scroll.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Clock, Target, TrendingUp, BarChart3 } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import type { FinancialScenario } from "@/data/report-types";

interface FinancialSensitivityProps {
  scenarios: FinancialScenario[];
}

/** Format large currency (input is in millions): $436.5M, $1.1B, etc. */
function formatCurrency(valueInMillions: number): string {
  if (valueInMillions >= 1_000) {
    return `$${(valueInMillions / 1_000).toFixed(1)}B`;
  }
  return `$${valueInMillions.toFixed(1)}M`;
}

function formatForCounter(valueInMillions: number): { num: number; suffix: string; decimals: number } {
  if (valueInMillions >= 1_000) {
    return { num: valueInMillions / 1_000, suffix: "B", decimals: 1 };
  }
  return { num: valueInMillions, suffix: "M", decimals: 1 };
}

/** Scenario accent colors by name */
const scenarioStyle: Record<FinancialScenario["name"], { border: string; badge: string; bg: string }> = {
  Conservative: {
    border: "border-border",
    badge: "",
    bg: "",
  },
  "Base Case": {
    border: "border-[#00A3E0]/40",
    badge: "bg-[#00A3E0]",
    bg: "bg-[#00A3E0]/5",
  },
  Optimistic: {
    border: "border-border",
    badge: "",
    bg: "",
  },
};

export default function FinancialSensitivity({ scenarios }: FinancialSensitivityProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Ensure Base Case is in the middle
  const sorted = [...scenarios].sort((a, b) => {
    const order: Record<string, number> = { Conservative: 0, "Base Case": 1, Optimistic: 2 };
    return (order[a.name] ?? 1) - (order[b.name] ?? 1);
  });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Financial Sensitivity
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three scenarios. Same methodology. Different assumptions on adoption speed and timeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          {sorted.map((scenario, index) => {
            const isBase = scenario.name === "Base Case";
            const style = scenarioStyle[scenario.name];
            const annualFmt = formatForCounter(scenario.annualBenefit);
            const npvFmt = formatForCounter(scenario.fiveYearNPV);

            return (
              <motion.div
                key={scenario.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative glass-card rounded-xl overflow-hidden ${
                  isBase ? `${style.border} ${style.bg} ring-1 ring-[#00A3E0]/20 md:-mt-4 md:mb-[-1rem]` : style.border
                }`}
              >
                {/* Recommended badge */}
                {isBase && (
                  <div className="flex items-center justify-center gap-1.5 py-2 bg-[#00A3E0] text-white text-xs font-medium">
                    <Star className="h-3.5 w-3.5" />
                    Recommended
                  </div>
                )}

                <div className={`p-6 ${isBase ? "" : "pt-6"}`}>
                  {/* Scenario name */}
                  <h3 className={`text-lg font-bold mb-1 ${isBase ? "text-[#00A3E0]" : "text-foreground"}`}>
                    {scenario.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {scenario.description}
                  </p>

                  {/* Key metrics */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Adoption Rate</p>
                        <p className="text-sm font-medium text-foreground">{scenario.adoptionRate}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Timeline</p>
                        <p className="text-sm font-medium text-foreground">{scenario.timeline}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Realization</p>
                        <p className="text-sm font-medium text-foreground">{scenario.realization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Financial results */}
                  <div className="mt-6 pt-5 border-t border-border-subtle space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <BarChart3 className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Annual Benefit</span>
                      </div>
                      <div className={`text-2xl font-bold ${isBase ? "text-[#00A3E0]" : "text-foreground"}`}>
                        $<AnimatedCounter value={annualFmt.num} decimals={annualFmt.decimals} duration={2000} />
                        {annualFmt.suffix}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">5-Year NPV</span>
                      </div>
                      <div className={`text-2xl font-bold ${isBase ? "text-[#00B34A]" : "text-foreground"}`}>
                        $<AnimatedCounter value={npvFmt.num} decimals={npvFmt.decimals} duration={2500} />
                        {npvFmt.suffix}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
