/**
 * Report Page — Orchestrator
 * Renders all native report sections in the new workshop-style order.
 * Receives a typed IndustryReport and industry display name.
 *
 * Section order:
 * 1. Hero
 * 2. AssessmentGuide (collapsible)
 * 3. ExecutiveSummary (if data present)
 * 4. ValueDriverCards
 * 5. FinancialSensitivity
 * 6. ValueReadinessMatrix
 * 7. TierBreakdownCards
 * 8. FrictionRecoveryDashboard
 * 9. UseCaseDiscovery ("Strategic Analysis by Theme")
 * 10. ReadinessTable
 * 11. Methodology (collapsible, inline)
 * 12. ReportCTA (flywheel variant)
 */

import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, CheckCircle2 } from "lucide-react";
import type { IndustryReport } from "@/data/report-types";

import ReportHero from "./ReportHero";
import AssessmentGuide from "./AssessmentGuide";
import ExecutiveSummarySection from "./ExecutiveSummarySection";
import ValueDriverCards from "./ValueDriverCards";
import FinancialSensitivity from "./FinancialSensitivity";
import ValueReadinessMatrix from "./ValueReadinessMatrix";
import TierBreakdownCards from "./TierBreakdownCards";
import FrictionRecoveryDashboard from "./FrictionRecoveryDashboard";
import UseCaseDiscovery from "./UseCaseDiscovery";
import ReadinessTable from "./ReadinessTable";
import ReportCTA from "./ReportCTA";

interface ReportPageProps {
  report: IndustryReport;
  industryName: string;
}

// ------------------------------------------------------------------
// Methodology section (inline, collapsible)
// ------------------------------------------------------------------

function MethodologySection({ framework, assumptions }: { framework: string; assumptions: string[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <button
            onClick={() => setOpen(!open)}
            className="w-full glass-card rounded-xl p-5 flex items-center gap-4 text-left hover:border-border transition-colors"
          >
            <div className="p-2 rounded-lg bg-[#00A3E0]/10 flex-shrink-0">
              <BookOpen className="h-5 w-5 text-[#00A3E0]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground">Methodology & Assumptions</h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {framework}
              </p>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="glass-card rounded-b-xl -mt-3 pt-6 px-5 pb-5 border-t-0 rounded-t-none">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Assumptions</h4>
                  <ul className="space-y-2">
                    {assumptions.map((assumption, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-[#00A3E0] mt-0.5 flex-shrink-0" />
                        {assumption}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// Main export
// ------------------------------------------------------------------

export default function ReportPage({ report, industryName }: ReportPageProps) {
  // Flatten all use cases for the matrix and tier breakdown
  const allUseCases = useMemo(
    () => report.themes.flatMap((theme) => theme.useCases),
    [report.themes],
  );

  const totalUseCases = allUseCases.length;
  const totalThemes = report.themes.length;

  // Count rich friction points (FrictionPoint objects, not legacy strings)
  const totalFrictionPoints = useMemo(
    () => report.themes.reduce((sum, t) => {
      const rich = (t.frictionPoints ?? []).filter((fp) => typeof fp !== "string");
      return sum + rich.length;
    }, 0),
    [report.themes],
  );

  // Check if we have rich data (new schema with readiness dimensions, etc.)
  const hasRichData = allUseCases.some((uc) => uc.readinessDimensions);

  return (
    <div className="bg-background">
      {/* 1. Hero */}
      <ReportHero
        companyDescription={report.companyDescription}
        totalValue={report.totalValueOpportunity}
        industryName={industryName}
        themeCount={totalThemes}
        useCaseCount={totalUseCases}
        frictionPointCount={totalFrictionPoints > 0 ? totalFrictionPoints : undefined}
      />

      {/* 2. Assessment Guide (collapsible) */}
      <AssessmentGuide />

      {/* 3. Executive Summary (if data present) */}
      {report.executiveSummary && (
        <ExecutiveSummarySection summary={report.executiveSummary} />
      )}

      {/* 4. Value Drivers */}
      <ValueDriverCards drivers={report.valueDrivers} />

      {/* 5. Financial Sensitivity */}
      <FinancialSensitivity scenarios={report.financialScenarios} />

      {/* 6. Value vs Readiness Matrix */}
      <ValueReadinessMatrix useCases={allUseCases} />

      {/* 7. Tier Breakdown */}
      <TierBreakdownCards useCases={allUseCases} />

      {/* 8. Friction Recovery Dashboard (only if rich friction data) */}
      {totalFrictionPoints > 0 && (
        <FrictionRecoveryDashboard themes={report.themes} useCases={allUseCases} />
      )}

      {/* 9. Use Case Discovery (themes + friction) */}
      <UseCaseDiscovery themes={report.themes} />

      {/* 10. Readiness Table (only if rich data) */}
      {hasRichData && (
        <ReadinessTable themes={report.themes} />
      )}

      {/* 11. Methodology */}
      <MethodologySection
        framework={report.methodology.framework}
        assumptions={report.methodology.assumptions}
      />

      {/* 12. CTA (flywheel variant) */}
      <ReportCTA
        industrySlug={report.industrySlug}
        industryName={industryName}
        totalValue={report.totalValueOpportunity}
        useCaseCount={totalUseCases}
        variant="flywheel"
        workshopUrl={report.workshopUrl}
      />
    </div>
  );
}
