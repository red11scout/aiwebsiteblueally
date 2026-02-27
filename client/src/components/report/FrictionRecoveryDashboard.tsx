/**
 * Friction Recovery Dashboard
 * Flagship section showing how friction costs map to AI recovery opportunities.
 * Dark-themed background. Computes recovery metrics from themes + use cases.
 * Per-theme groups with friction-to-UC matching and progress bars.
 */

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Shield,
  Gauge,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import type { Theme, UseCase, FrictionPoint } from "@/data/report-types";

interface FrictionRecoveryDashboardProps {
  themes: Theme[];
  useCases: UseCase[];
}

/** Format dollar amounts (in millions): "$5.5M" for < 1000, "$1.2B" for >= 1000 */
function formatMoney(amountInMillions: number): string {
  if (amountInMillions >= 1_000) {
    return `$${(amountInMillions / 1_000).toFixed(1)}B`;
  }
  return `$${amountInMillions.toFixed(1)}M`;
}

function formatForCounter(amountInMillions: number): { num: number; suffix: string; decimals: number } {
  if (amountInMillions >= 1_000) {
    return { num: amountInMillions / 1_000, suffix: "B", decimals: 1 };
  }
  return { num: amountInMillions, suffix: "M", decimals: 1 };
}

interface MatchedPair {
  frictionPoint: FrictionPoint;
  useCase: UseCase | null;
  recovery: number;
}

interface ThemeGroup {
  theme: Theme;
  totalFriction: number;
  pairs: MatchedPair[];
}

export default function FrictionRecoveryDashboard({ themes, useCases }: FrictionRecoveryDashboardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { themeGroups, totalFrictionCost, totalRecovery, recoveryRate, uncovered, additionalValue, mappedCount, totalFpCount } = useMemo(() => {
    let totalFriction = 0;
    let totalRec = 0;
    let totalAdditional = 0;
    let mapped = 0;
    let fpCount = 0;

    const groups: ThemeGroup[] = themes.map((theme) => {
      let themeFriction = 0;
      const richFps = theme.frictionPoints.filter((fp): fp is FrictionPoint => typeof fp !== "string");
      const pairs: MatchedPair[] = richFps.map((fp) => {
        themeFriction += fp.estimatedAnnualCost;
        fpCount++;

        // Find matching use case by comparing friction point text to useCase.targetFriction
        const matchedUC = useCases.find(
          (uc) => uc.targetFrictionId === fp.id || uc.targetFriction === fp.frictionPoint
        ) || null;

        let recovery = 0;
        if (matchedUC) {
          mapped++;
          recovery = Math.min(matchedUC.annualValue, fp.estimatedAnnualCost);
          const additional = Math.max(0, matchedUC.annualValue - fp.estimatedAnnualCost);
          totalAdditional += additional;
        }

        totalRec += recovery;
        return { frictionPoint: fp, useCase: matchedUC, recovery };
      });

      totalFriction += themeFriction;
      return { theme, totalFriction: themeFriction, pairs };
    });

    const rate = totalFriction > 0 ? (totalRec / totalFriction) * 100 : 0;
    const uncov = totalFriction - totalRec;

    return {
      themeGroups: groups,
      totalFrictionCost: totalFriction,
      totalRecovery: totalRec,
      recoveryRate: rate,
      uncovered: uncov,
      additionalValue: totalAdditional,
      mappedCount: mapped,
      totalFpCount: fpCount,
    };
  }, [themes, useCases]);

  const frictionFmt = formatForCounter(totalFrictionCost);
  const recoveryFmt = formatForCounter(totalRecovery);
  const uncoveredFmt = formatForCounter(uncovered);
  const additionalFmt = formatForCounter(additionalValue);

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Dark background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #050A14 0%, #0A1628 50%, #050A14 100%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Friction-to-Value Recovery
            </h2>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#00A3E0]/15 text-[#00A3E0] border border-[#00A3E0]/25">
              {mappedCount}/{totalFpCount} mapped
            </span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every friction point costs money. Here is how AI use cases recover that value.
          </p>
        </motion.div>

        {/* 5-stat summary row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12"
        >
          {/* Total Friction Cost */}
          <div className="glass-card rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-xl" />
            <AlertTriangle className="h-5 w-5 text-red-400 mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-1">Total Friction Cost</p>
            <div className="text-xl font-bold text-red-400">
              $<AnimatedCounter value={frictionFmt.num} decimals={frictionFmt.decimals} duration={2000} />
              {frictionFmt.suffix}
            </div>
          </div>

          {/* Total Recovery */}
          <div className="glass-card rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00B34A] rounded-l-xl" />
            <TrendingUp className="h-5 w-5 text-[#00B34A] mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-1">Total Recovery</p>
            <div className="text-xl font-bold text-[#00B34A]">
              $<AnimatedCounter value={recoveryFmt.num} decimals={recoveryFmt.decimals} duration={2000} />
              {recoveryFmt.suffix}
            </div>
          </div>

          {/* Recovery Rate */}
          <div className="glass-card rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00A3E0] rounded-l-xl" />
            <Gauge className="h-5 w-5 text-[#00A3E0] mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-1">Recovery Rate</p>
            <div className="text-xl font-bold text-[#00A3E0]">
              <AnimatedCounter value={recoveryRate} decimals={0} duration={2000} />%
            </div>
          </div>

          {/* Uncovered */}
          <div className="glass-card rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F59E0B] rounded-l-xl" />
            <Shield className="h-5 w-5 text-[#F59E0B] mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-1">Uncovered</p>
            <div className="text-xl font-bold text-[#F59E0B]">
              $<AnimatedCounter value={uncoveredFmt.num} decimals={uncoveredFmt.decimals} duration={2000} />
              {uncoveredFmt.suffix}
            </div>
          </div>

          {/* Additional Value */}
          <div className="glass-card rounded-xl p-4 text-center relative overflow-hidden col-span-2 sm:col-span-1">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00B34A] rounded-l-xl" />
            <ArrowRight className="h-5 w-5 text-[#00B34A] mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-1">Additional Value</p>
            <div className="text-xl font-bold text-[#00B34A]">
              $<AnimatedCounter value={additionalFmt.num} decimals={additionalFmt.decimals} duration={2000} />
              {additionalFmt.suffix}
            </div>
          </div>
        </motion.div>

        {/* Per-theme groups */}
        <div className="max-w-5xl mx-auto space-y-6">
          {themeGroups.map((group, groupIndex) => (
            <motion.div
              key={group.theme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + 0.08 * groupIndex }}
              className="glass-card rounded-xl overflow-hidden"
            >
              {/* Theme header */}
              <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-7 h-7 rounded-md bg-[#00A3E0]/10 text-[#00A3E0] text-xs font-bold">
                    {groupIndex + 1}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {group.theme.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-red-400">
                  {formatMoney(group.totalFriction)} friction
                </span>
              </div>

              {/* Friction point rows */}
              <div className="divide-y divide-border-subtle">
                {group.pairs.map((pair, pairIndex) => {
                  const fp = pair.frictionPoint;
                  const uc = pair.useCase;
                  const recoveryPct = fp.estimatedAnnualCost > 0
                    ? Math.min(100, (pair.recovery / fp.estimatedAnnualCost) * 100)
                    : 0;

                  return (
                    <div
                      key={fp.id || pairIndex}
                      className="px-5 py-3 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_120px] gap-3 items-center"
                    >
                      {/* Friction point description + cost */}
                      <div className="min-w-0">
                        <p className="text-sm text-foreground truncate" title={fp.frictionPoint}>
                          {fp.frictionPoint}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-red-400 font-medium">
                            {formatMoney(fp.estimatedAnnualCost)}
                          </span>
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                              fp.severity === "Critical"
                                ? "bg-red-500/15 text-red-400"
                                : fp.severity === "High"
                                ? "bg-[#F59E0B]/15 text-[#F59E0B]"
                                : fp.severity === "Medium"
                                ? "bg-[#00A3E0]/15 text-[#00A3E0]"
                                : "bg-card text-muted-foreground"
                            }`}
                          >
                            {fp.severity}
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <ArrowRight className="h-4 w-4 text-muted-foreground hidden md:block flex-shrink-0" />

                      {/* Matched UC name (or unmatched) */}
                      <div className="min-w-0">
                        {uc ? (
                          <div>
                            <p className="text-sm text-foreground truncate" title={uc.title}>
                              {uc.title}
                            </p>
                            <p className="text-xs text-[#00B34A] font-medium mt-0.5">
                              Recovers {formatMoney(pair.recovery)}
                            </p>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground italic">
                            No matching use case
                          </p>
                        )}
                      </div>

                      {/* Recovery % progress bar */}
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-medium text-foreground">
                          {Math.round(recoveryPct)}%
                        </span>
                        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${recoveryPct}%` } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 + 0.05 * pairIndex }}
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: recoveryPct >= 75
                                ? "#00B34A"
                                : recoveryPct >= 40
                                ? "#00A3E0"
                                : recoveryPct > 0
                                ? "#F59E0B"
                                : "#6B7280",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
