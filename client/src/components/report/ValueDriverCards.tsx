/**
 * Value Driver Cards
 * 4-card grid showing revenue growth, cost reduction, cash flow, and risk mitigation.
 * Each card: colored left border, icon, driver name, formatted amount, percentage bar.
 * Scroll-triggered stagger animation.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, TrendingDown, Banknote, ShieldCheck, type LucideIcon } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import type { ValueDriver } from "@/data/report-types";

interface ValueDriverCardsProps {
  drivers: ValueDriver[];
}

const driverIcons: Record<ValueDriver["name"], LucideIcon> = {
  "Revenue Growth": TrendingUp,
  "Cost Reduction": TrendingDown,
  "Cash Flow Acceleration": Banknote,
  "Risk Mitigation": ShieldCheck,
};

/** Format dollar amounts (input is in millions): $128.6M, $1.2B, etc. */
function formatAmount(amountInMillions: number): { value: number; suffix: string; decimals: number } {
  if (amountInMillions >= 1_000) {
    return { value: amountInMillions / 1_000, suffix: "B", decimals: 1 };
  }
  return { value: amountInMillions, suffix: "M", decimals: 1 };
}

export default function ValueDriverCards({ drivers }: ValueDriverCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
            Where the Value Lives
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Four drivers. Each one quantified. Here is exactly how AI creates financial impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {drivers.map((driver, index) => {
            const Icon = driverIcons[driver.name] || TrendingUp;
            const fmt = formatAmount(driver.amount);

            return (
              <motion.div
                key={driver.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card rounded-xl p-5 relative overflow-hidden"
              >
                {/* Colored left border */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                  style={{ backgroundColor: driver.color }}
                />

                {/* Icon */}
                <div
                  className="p-2.5 rounded-lg w-fit mb-4"
                  style={{ backgroundColor: `${driver.color}15` }}
                >
                  <Icon className="h-5 w-5" style={{ color: driver.color }} />
                </div>

                {/* Name */}
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  {driver.name}
                </h3>

                {/* Amount */}
                <div className="text-2xl font-bold text-foreground mb-3">
                  $<AnimatedCounter value={fmt.value} decimals={fmt.decimals} duration={2000} />
                  {fmt.suffix}
                </div>

                {/* Percentage bar */}
                <div className="mb-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Share of total value</span>
                    <span style={{ color: driver.color }} className="font-medium">
                      {driver.percentage}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${driver.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + 0.1 * index, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: driver.color }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mt-3">
                  {driver.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
