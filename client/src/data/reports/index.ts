/**
 * Report Registry
 * Maps industry slugs to their report data.
 * Add new industry reports here as they become available.
 */

import type { IndustryReport } from "../report-types";
import { report as energyUtilities } from "./energy-utilities";
import { report as entertainment } from "./entertainment";
import { report as technologyInformation } from "./technology-information";

const reports: Record<string, IndustryReport> = {
  "energy-utilities": energyUtilities,
  "entertainment": entertainment,
  "technology-information": technologyInformation,
};

export function getReportBySlug(slug: string): IndustryReport | undefined {
  return reports[slug];
}

export { reports };
