/**
 * Readiness Table
 * Table grouped by theme showing readiness dimensions per use case.
 * Theme header rows (dark background), use case rows with dimension scores.
 * Scores color-coded: green (>=7), amber (4-7), red (<4).
 * Mobile: horizontal scroll with sticky first column.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Cpu, Users, Shield, Clock } from "lucide-react";
import type { Theme } from "@/data/report-types";

interface ReadinessTableProps {
  themes: Theme[];
}

/** Return color class based on score threshold */
function scoreColor(score: number): string {
  if (score >= 7) return "text-[#00B34A]";
  if (score >= 4) return "text-[#F59E0B]";
  return "text-red-400";
}

/** Return background color class for score badges */
function scoreBg(score: number): string {
  if (score >= 7) return "bg-[#00B34A]/10";
  if (score >= 4) return "bg-[#F59E0B]/10";
  return "bg-red-400/10";
}

const dimensionHeaders = [
  { label: "Data", icon: Database, key: "dataAvailability" as const },
  { label: "Tech", icon: Cpu, key: "technicalInfrastructure" as const },
  { label: "Org", icon: Users, key: "organizationalCapacity" as const },
  { label: "Gov", icon: Shield, key: "governance" as const },
];

export default function ReadinessTable({ themes }: ReadinessTableProps) {
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
            Readiness Assessment
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Four dimensions of readiness scored for every use case. Green means ready. Amber means invest. Red means pause.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto glass-card rounded-xl overflow-hidden"
        >
          {/* Scrollable wrapper for mobile */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider sticky left-0 bg-card z-10 min-w-[200px]">
                    Use Case
                  </th>
                  {dimensionHeaders.map(({ label, icon: Icon }) => (
                    <th
                      key={label}
                      className="text-center px-3 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </div>
                    </th>
                  ))}
                  <th className="text-center px-3 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Overall
                  </th>
                  <th className="text-center px-3 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center justify-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      TTV
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {themes.map((theme, themeIndex) => (
                  <>
                    {/* Theme header row */}
                    <tr
                      key={`theme-${theme.id ?? themeIndex}`}
                      className="bg-[#003B73]/20 border-b border-border-subtle"
                    >
                      <td
                        colSpan={7}
                        className="px-4 py-3 sticky left-0 z-10"
                        style={{ backgroundColor: "rgba(0, 59, 115, 0.2)" }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#00A3E0]/15 text-[#00A3E0] text-xs font-bold">
                            {themeIndex + 1}
                          </span>
                          <span className="font-semibold text-foreground">
                            {theme.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({theme.useCases.length} use case{theme.useCases.length !== 1 ? "s" : ""})
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Use case rows */}
                    {theme.useCases.filter((uc) => uc.readinessDimensions).map((uc) => {
                      const dims = uc.readinessDimensions!;
                      const overall = uc.readinessScore;

                      return (
                        <tr
                          key={uc.id}
                          className="border-b border-border-subtle hover:bg-surface-muted transition-colors"
                        >
                          {/* ID + Name (sticky on mobile) */}
                          <td className="px-4 py-3 sticky left-0 bg-card z-10">
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[#00A3E0]/10 text-[#00A3E0] flex-shrink-0">
                                {uc.id}
                              </span>
                              <span className="text-foreground truncate" title={uc.title}>
                                {uc.title}
                              </span>
                            </div>
                          </td>

                          {/* Dimension scores */}
                          {dimensionHeaders.map(({ key }) => {
                            const val = dims[key];
                            return (
                              <td key={key} className="text-center px-3 py-3">
                                <span
                                  className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${scoreColor(val)} ${scoreBg(val)}`}
                                >
                                  {val.toFixed(1)}
                                </span>
                              </td>
                            );
                          })}

                          {/* Overall */}
                          <td className="text-center px-3 py-3">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${scoreColor(overall)} ${scoreBg(overall)}`}
                            >
                              {overall.toFixed(1)}
                            </span>
                          </td>

                          {/* TTV */}
                          <td className="text-center px-3 py-3">
                            <span className="text-xs font-medium text-muted-foreground">
                              {uc.timeToValue}mo
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="px-4 py-3 border-t border-border-subtle flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="font-medium">Score legend:</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00B34A]" />
              Ready (7+)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              Invest (4-7)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              Pause (&lt;4)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
