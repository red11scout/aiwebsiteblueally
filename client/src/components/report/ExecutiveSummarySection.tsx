/**
 * Executive Summary Section
 * Renders headline callout, 3-column findings grid, opportunity table,
 * critical path (amber callout), and recommended action (green callout).
 * Responsive: 3-col -> 1-col on mobile.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Quote,
  AlertTriangle,
  Rocket,
  TrendingUp,
} from "lucide-react";
import type { ExecutiveSummary } from "@/data/report-types";

interface ExecutiveSummarySectionProps {
  summary: ExecutiveSummary;
}

export default function ExecutiveSummarySection({ summary }: ExecutiveSummarySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Executive Summary
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {summary.context}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Headline callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00A3E0] rounded-l-xl" />
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 text-[#00A3E0] flex-shrink-0 mt-1 opacity-60" />
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                {summary.headline}
              </p>
            </div>
          </motion.div>

          {/* Findings — 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {summary.findings.map((finding, index) => (
              <motion.div
                key={finding.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + 0.1 * index }}
                className="glass-card rounded-xl p-5 relative overflow-hidden"
              >
                {/* Title */}
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  {finding.title}
                </h3>

                {/* Value badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] text-lg font-bold mb-3">
                  {finding.value}
                </div>

                {/* Body text */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {finding.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Opportunity table — compact stat row */}
          {summary.opportunityTable.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-[#00A3E0]" />
                <h3 className="text-sm font-semibold text-foreground">
                  Key Opportunity Metrics
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {summary.opportunityTable.map((item) => (
                  <div key={item.metric} className="text-center">
                    <p className="text-lg md:text-xl font-bold text-foreground">
                      {item.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.metric}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Critical path — amber/yellow callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="rounded-xl p-5 border border-[#F59E0B]/20 bg-[#F59E0B]/5 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F59E0B] rounded-l-xl" />
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#F59E0B] mb-1">
                  Critical Path
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  {summary.criticalPath}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Recommended action — green callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="rounded-xl p-5 border border-[#00B34A]/20 bg-[#00B34A]/5 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00B34A] rounded-l-xl" />
            <div className="flex items-start gap-3">
              <Rocket className="h-5 w-5 text-[#00B34A] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#00B34A] mb-1">
                  Recommended Action
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  {summary.recommendedAction}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
