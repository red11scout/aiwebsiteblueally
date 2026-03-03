import { industries } from "@/data/industries";

export default function sitemap() {
  const base = "https://explore.gofasterwithai.com";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...industries.map((ind) => ({
      url: `${base}/industries/${ind.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
