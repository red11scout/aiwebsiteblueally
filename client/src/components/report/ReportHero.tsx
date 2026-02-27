/**
 * Report Hero Section
 * Full-width gradient banner with animated total value, company description,
 * and summary stats. Entry point for every native industry report.
 */

import { motion } from "framer-motion";
import { TrendingUp, Layers, BarChart3, AlertTriangle } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

interface ReportHeroProps {
  companyDescription: string;
  totalValue: number;
  industryName: string;
  themeCount: number;
  useCaseCount: number;
  frictionPointCount?: number;
}

/** Format dollar value (input is in millions): <1000M shows "$XXX.XM", >=1000M shows "$X.XB" */
function formatTotalValue(valueInMillions: number): { number: number; suffix: string; decimals: number } {
  if (valueInMillions >= 1_000) {
    return { number: valueInMillions / 1_000, suffix: "B", decimals: 1 };
  }
  return { number: valueInMillions, suffix: "M", decimals: 1 };
}

export default function ReportHero({
  companyDescription,
  totalValue,
  industryName,
  themeCount,
  useCaseCount,
  frictionPointCount,
}: ReportHeroProps) {
  const formatted = formatTotalValue(totalValue);

  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #003B73 0%, #00254D 40%, #001832 100%)",
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, #00A3E0 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Industry badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/15 rounded-full border border-[#00A3E0]/25">
              {industryName} AI Assessment
            </span>
          </motion.div>

          {/* Total value — the hero number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            <p className="text-sm uppercase tracking-widest text-[#00A3E0] mb-2 font-medium">
              Total Value Opportunity
            </p>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
              $<AnimatedCounter value={formatted.number} decimals={formatted.decimals} duration={2500} />
              {formatted.suffix}
            </div>
          </motion.div>

          {/* Company description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-4"
          >
            {companyDescription}
          </motion.p>

          {/* Subtitle with friction mapping info */}
          {frictionPointCount != null && frictionPointCount > 0 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-white/50 mb-8"
            >
              Across {useCaseCount} AI use cases spanning {themeCount} strategic themes, with{" "}
              {frictionPointCount}/{frictionPointCount} friction points mapped to recovery pathways.
            </motion.p>
          )}

          {!frictionPointCount && <div className="mb-6" />}

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#00A3E0]/15">
                <BarChart3 className="h-5 w-5 text-[#00A3E0]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">{useCaseCount}</p>
                <p className="text-sm text-white/50">AI Use Cases</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/15" />

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#00B34A]/15">
                <Layers className="h-5 w-5 text-[#00B34A]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">{themeCount}</p>
                <p className="text-sm text-white/50">Strategic Themes</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/15" />

            {frictionPointCount != null && frictionPointCount > 0 ? (
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F59E0B]/15">
                  <AlertTriangle className="h-5 w-5 text-[#F59E0B]" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">{frictionPointCount}</p>
                  <p className="text-sm text-white/50">Friction Points</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00A3E0]/15">
                  <TrendingUp className="h-5 w-5 text-[#00A3E0]" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">4</p>
                  <p className="text-sm text-white/50">Value Drivers</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
