/**
 * Industry Data Adapter
 *
 * Transforms existing IndustryReport data (from src/data/reports/) into the
 * IndustryData shape expected by the new industry page components.
 *
 * All functions are defensive — missing fields are handled with optional
 * chaining and sensible fallbacks so partial data degrades gracefully.
 */

import type { IndustryReport, FrictionPoint, Theme } from "@/data/report-types";
import type {
  IndustryData,
  UseCaseDisplay,
  LifecycleStage,
  FrictionPointDisplay,
} from "@/lib/types";
import { industries, type Industry } from "@/data/industries";
import { calculatorMultipliers } from "./calculator";

function getIndustryBySlugDirect(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

// ── Lifecycle stage names per industry ──────────────────────────────────────

const lifecycleMap: Record<string, string[]> = {
  construction: ["Bid", "Estimate", "Procure", "Build", "Inspect", "Close-out"],
  healthcare: ["Intake", "Triage", "Diagnose", "Treat", "Document", "Bill"],
  "finance-insurance": [
    "Prospect",
    "Onboard",
    "Underwrite",
    "Service",
    "Comply",
    "Renew",
  ],
  manufacturing: ["Design", "Source", "Produce", "Inspect", "Ship", "Service"],
  retail: ["Forecast", "Merchandise", "Price", "Sell", "Fulfill", "Support"],
  "energy-utilities": [
    "Plan",
    "Generate",
    "Distribute",
    "Monitor",
    "Maintain",
    "Report",
  ],
  transportation: ["Plan", "Route", "Load", "Transport", "Track", "Invoice"],
};

const genericStages = ["Plan", "Execute", "Monitor", "Optimize", "Report", "Scale"];

// ── Priority tier mapping ───────────────────────────────────────────────────

type PriorityTier = "Champion" | "Strategic Bet" | "Quick Win" | "Foundation";
type DisplayCategory = "champion" | "quick-win" | "strategic-bet" | "defer";

const tierToCategory: Record<PriorityTier, DisplayCategory> = {
  Champion: "champion",
  "Quick Win": "quick-win",
  "Strategic Bet": "strategic-bet",
  Foundation: "defer",
};

// ── Helpers ─────────────────────────────────────────────────────────────────

function isFrictionPointObject(fp: FrictionPoint | string): fp is FrictionPoint {
  return typeof fp === "object" && fp !== null && "frictionPoint" in fp;
}

function formatDollars(millions: number): string {
  if (millions >= 1000) {
    return `$${(millions / 1000).toFixed(1)}B`;
  }
  return `$${millions.toFixed(1)}M`;
}

function formatFrictionCostImpact(fp: FrictionPoint): string {
  const parts: string[] = [];
  if (fp.estimatedAnnualCost != null) {
    parts.push(
      `$${fp.estimatedAnnualCost >= 1 ? fp.estimatedAnnualCost.toFixed(1) + "M" : Math.round(fp.estimatedAnnualCost * 1000) + "K"} annual cost`
    );
  }
  if (fp.annualHours != null) {
    parts.push(
      `${fp.annualHours >= 1000 ? (fp.annualHours / 1000).toFixed(1) + "K" : fp.annualHours} hours/year`
    );
  }
  return parts.length > 0 ? parts.join(", ") : "Operational friction identified";
}

/**
 * Derive an AI opportunity description for a friction point.
 * Tries to find a matching use case from the same theme to pull a relevant
 * description; falls back to a generic statement.
 */
function deriveAiOpportunity(
  fp: FrictionPoint | string,
  theme: Theme
): string {
  if (isFrictionPointObject(fp)) {
    // Look for a use case that targets this friction point
    const matchingUseCase = theme.useCases?.find(
      (uc) =>
        uc.targetFrictionId === fp.id ||
        uc.targetFriction?.toLowerCase().includes(fp.frictionPoint?.slice(0, 40).toLowerCase())
    );
    if (matchingUseCase?.description) {
      // Return first sentence of the description as a concise opportunity
      const firstSentence = matchingUseCase.description.split(". ")[0];
      return firstSentence.length > 0 ? firstSentence : "AI-powered automation can reduce this friction by 40-60%";
    }
  }
  return "AI-powered automation can reduce this friction by 40-60%";
}

/**
 * Convert a raw friction point (object or string) into a FrictionPointDisplay.
 */
function toFrictionPointDisplay(
  fp: FrictionPoint | string,
  theme: Theme
): FrictionPointDisplay {
  if (isFrictionPointObject(fp)) {
    return {
      title: fp.frictionPoint || "Unnamed friction point",
      costImpact: formatFrictionCostImpact(fp),
      aiOpportunity: deriveAiOpportunity(fp, theme),
    };
  }
  // Plain string friction point
  return {
    title: fp,
    costImpact: "Operational friction identified",
    aiOpportunity: "AI-powered automation can reduce this friction by 40-60%",
  };
}

// ── Public API ──────────────────────────────────────────────────────────────

/**
 * Build lifecycle stages from report theme data.
 *
 * Since existing reports don't have explicit lifecycle stages, we use an
 * industry-specific stage map and distribute friction points across them.
 * Friction points that can be keyword-matched to a stage name get placed
 * there; the rest are distributed round-robin.
 */
export function toLifecycleStages(
  report: IndustryReport,
  meta: Industry
): LifecycleStage[] {
  const stageNames = lifecycleMap[meta.slug] ?? genericStages;

  // Collect all friction point displays from all themes
  const allFrictionDisplays: FrictionPointDisplay[] = [];
  const themes = report.themes ?? [];

  for (const theme of themes) {
    const frictionPoints = theme.frictionPoints ?? [];
    for (const fp of frictionPoints) {
      allFrictionDisplays.push(toFrictionPointDisplay(fp, theme));
    }
  }

  // Try to match friction points to stages by keyword overlap
  const stageAssignments: Map<number, FrictionPointDisplay[]> = new Map();
  for (let i = 0; i < stageNames.length; i++) {
    stageAssignments.set(i, []);
  }

  const unmatched: FrictionPointDisplay[] = [];

  for (const fpd of allFrictionDisplays) {
    const titleLower = fpd.title.toLowerCase();
    let matched = false;

    for (let i = 0; i < stageNames.length; i++) {
      const stageLower = stageNames[i].toLowerCase();
      if (titleLower.includes(stageLower)) {
        stageAssignments.get(i)!.push(fpd);
        matched = true;
        break;
      }
    }

    if (!matched) {
      unmatched.push(fpd);
    }
  }

  // Distribute unmatched friction points round-robin across stages
  for (let i = 0; i < unmatched.length; i++) {
    const stageIndex = i % stageNames.length;
    stageAssignments.get(stageIndex)!.push(unmatched[i]);
  }

  return stageNames.map((name, i) => ({
    name,
    frictionPoints: stageAssignments.get(i) ?? [],
  }));
}

/**
 * Flatten all use cases from all themes into a UseCaseDisplay array
 * suitable for the 2x2 priority matrix component.
 */
export function toUseCasesForMatrix(report: IndustryReport): UseCaseDisplay[] {
  const themes = report.themes ?? [];
  const useCases: UseCaseDisplay[] = [];

  for (const theme of themes) {
    for (const uc of theme.useCases ?? []) {
      useCases.push({
        id: uc.id ?? `uc-${useCases.length}`,
        name: uc.title ?? "Unnamed use case",
        description: uc.description ?? "",
        category: tierToCategory[uc.priorityTier] ?? "defer",
        readiness: uc.readinessScore ?? 0,
        annualValue: uc.annualValue ?? 0,
        timeToProduction: `${uc.timeToValue ?? 0} weeks`,
        dependencies: uc.integrations ?? [],
        dataRequirements: uc.dataTypes ?? [],
      });
    }
  }

  return useCases;
}

/**
 * Get the calculator multiplier for a given industry slug.
 */
export function getCalculatorMultiplier(slug: string): number {
  return calculatorMultipliers[slug] || 0.05;
}

/**
 * Map a full IndustryReport + Industry metadata into the IndustryData shape
 * expected by new page components.
 */
export function toIndustryData(
  report: IndustryReport,
  meta: Industry
): IndustryData {
  const totalValue = report.totalValueOpportunity ?? 0;

  return {
    slug: meta.slug,
    name: meta.name,
    icon: meta.icon,
    totalValueOpportunity: formatDollars(totalValue),
    frustrationHook:
      meta.painPoints?.length > 0
        ? meta.painPoints.join(" ")
        : meta.emailHook ?? "",
    ogImage: `/og-${meta.slug}.png`,
    lifecycle: toLifecycleStages(report, meta),
    useCases: toUseCasesForMatrix(report),
    calculatorMultiplier: getCalculatorMultiplier(meta.slug),
    testimonial: undefined,
  };
}

/**
 * Report loaders keyed by slug.
 * Each entry is a dynamic import that returns the report data file.
 */
const reportLoaders: Record<string, () => Promise<{ report: IndustryReport }>> = {
  "energy-utilities": () => import("@/data/reports/energy-utilities"),
  "construction": () => import("@/data/reports/construction"),
  "manufacturing": () => import("@/data/reports/manufacturing"),
  "retail": () => import("@/data/reports/retail"),
  "transportation": () => import("@/data/reports/transportation"),
  "technology-information": () => import("@/data/reports/technology-information"),
  "finance-insurance": () => import("@/data/reports/finance-insurance"),
  "real-estate": () => import("@/data/reports/real-estate"),
  "professional-services": () => import("@/data/reports/professional-services"),
  "healthcare": () => import("@/data/reports/healthcare"),
  "entertainment": () => import("@/data/reports/entertainment"),
  "education": () => import("@/data/reports/education"),
  "state-local": () => import("@/data/reports/state-local"),
  "federal": () => import("@/data/reports/federal"),
};

/**
 * Main entry point for industry pages.
 *
 * Loads the report data for a given slug, pairs it with industry
 * metadata, and returns the fully adapted IndustryData. Returns null if the
 * slug is unknown or the report fails to load.
 */
export async function getIndustryPageData(
  slug: string
): Promise<IndustryData | null> {
  try {
    const meta = getIndustryBySlugDirect(slug);
    if (!meta) return null;

    const loader = reportLoaders[slug];
    if (!loader) return null;

    const mod = await loader();
    const report = mod.report;
    if (!report) return null;

    return toIndustryData(report, meta);
  } catch {
    return null;
  }
}
