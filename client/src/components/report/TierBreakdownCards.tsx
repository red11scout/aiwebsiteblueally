/**
 * Tier Breakdown Cards
 * 4 cards showing count of use cases per priority tier.
 * Champion (green), Quick Win (amber), Strategic Bet (blue), Foundation (gray).
 * Each card: colored top border, tier name, description, large count, UC name list.
 * 4-col grid on desktop, 2x2 on mobile.
 */

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Zap, Rocket, Wrench, type LucideIcon } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import type { UseCase } from "@/data/report-types";

interface TierBreakdownCardsProps {
  useCases: UseCase[];
}

interface TierConfig {
  tier: UseCase["priorityTier"];
  label: string;
  description: string;
  color: string;
  icon: LucideIcon;
}

const tiers: TierConfig[] = [
  {
    tier: "Champion",
    label: "Champion",
    description: "High Value + High Readiness",
    color: "#00B34A",
    icon: Trophy,
  },
  {
    tier: "Quick Win",
    label: "Quick Win",
    description: "Low Value + High Readiness",
    color: "#F59E0B",
    icon: Zap,
  },
  {
    tier: "Strategic Bet",
    label: "Strategic Bet",
    description: "High Value + Low Readiness",
    color: "#00A3E0",
    icon: Rocket,
  },
  {
    tier: "Foundation",
    label: "Foundation",
    description: "Low Value + Low Readiness",
    color: "#6B7280",
    icon: Wrench,
  },
];

export default function TierBreakdownCards({ useCases }: TierBreakdownCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const grouped = useMemo(() => {
    const map = new Map<UseCase["priorityTier"], UseCase[]>();
    for (const uc of useCases) {
      const existing = map.get(uc.priorityTier) || [];
      existing.push(uc);
      map.set(uc.priorityTier, existing);
    }
    return map;
  }, [useCases]);

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
            Tier Breakdown
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {useCases.length} use cases classified into four priority tiers based on value and readiness scores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {tiers.map((tierConfig, index) => {
            const cases = grouped.get(tierConfig.tier) || [];
            const Icon = tierConfig.icon;

            return (
              <motion.div
                key={tierConfig.tier}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card rounded-xl overflow-hidden flex flex-col"
              >
                {/* Colored top border */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: tierConfig.color }}
                />

                <div className="p-5 flex flex-col flex-1">
                  {/* Icon + tier name */}
                  <div className="flex items-center gap-2.5 mb-1">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${tierConfig.color}15` }}
                    >
                      <Icon className="h-4 w-4" style={{ color: tierConfig.color }} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {tierConfig.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground mb-4">
                    {tierConfig.description}
                  </p>

                  {/* Large count */}
                  <div
                    className="text-4xl font-bold mb-4"
                    style={{ color: tierConfig.color }}
                  >
                    <AnimatedCounter value={cases.length} duration={1500} />
                  </div>

                  {/* UC names */}
                  {cases.length > 0 && (
                    <div className="space-y-1.5 flex-1">
                      {cases.map((uc) => (
                        <div
                          key={uc.id}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span
                            className="text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5"
                            style={{
                              color: tierConfig.color,
                              backgroundColor: `${tierConfig.color}15`,
                            }}
                          >
                            {uc.id}
                          </span>
                          <span className="text-foreground text-xs leading-relaxed">
                            {uc.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {cases.length === 0 && (
                    <p className="text-xs text-muted-foreground italic flex-1">
                      No use cases in this tier
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
