/**
 * Report Registry — Dynamic Imports
 * Each report is lazily loaded only when its route is visited.
 * Vite automatically code-splits each dynamic import() into a separate chunk.
 */

import type { IndustryReport } from "../report-types";

type ReportLoader = () => Promise<{ report: IndustryReport }>;

const reportLoaders: Record<string, ReportLoader> = {
  "energy-utilities": () => import("./energy-utilities"),
  "construction": () => import("./construction"),
  "manufacturing": () => import("./manufacturing"),
  "retail": () => import("./retail"),
  "transportation": () => import("./transportation"),
  "technology-information": () => import("./technology-information"),
  "finance-insurance": () => import("./finance-insurance"),
  "real-estate": () => import("./real-estate"),
  "professional-services": () => import("./professional-services"),
  "healthcare": () => import("./healthcare"),
  "entertainment": () => import("./entertainment"),
  "education": () => import("./education"),
  "state-local": () => import("./state-local"),
  "federal": () => import("./federal"),
};

/** Check synchronously whether a report exists for a slug */
export function hasReportData(slug: string): boolean {
  return slug in reportLoaders;
}

/** Load report data asynchronously (code-split per industry) */
export async function loadReport(slug: string): Promise<IndustryReport | undefined> {
  const loader = reportLoaders[slug];
  if (!loader) return undefined;
  const mod = await loader();
  return mod.report;
}
