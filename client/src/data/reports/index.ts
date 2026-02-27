/**
 * Report Registry
 * Maps industry slugs to their report data.
 * Add new industry reports here as they become available.
 */

import type { IndustryReport } from "../report-types";
import { report as energyUtilities } from "./energy-utilities";
import { report as entertainment } from "./entertainment";

const reports: Record<string, IndustryReport> = {
  "energy-utilities": energyUtilities,
  "entertainment": entertainment,
};

export function getReportBySlug(slug: string): IndustryReport | undefined {
  return reports[slug];
}

export { reports };
