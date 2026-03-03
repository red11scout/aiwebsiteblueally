"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { FlipCard } from "@/components/shared/FlipCard";

const stakes = [
  {
    frontMetric: "$4.2M",
    frontLabel: "Average Annual Loss on Failed AI Pilots",
    backText:
      "BlueAlly reduces implementation risk by 35%. One partner. End-to-end accountability.",
  },
  {
    frontMetric: "18 Months",
    frontLabel: "Typical Enterprise Time-to-Value",
    backMetric: "10 Weeks",
    backText:
      "BlueAlly average: idea to production. Our infrastructure-first approach eliminates 6+ months of vendor coordination.",
  },
  {
    frontMetric: "4+ Vendors",
    frontLabel: "Partners Needed for One AI Initiative",
    backText:
      "Strategy. Infrastructure. Development. Deployment. Management. One team. Zero handoff gaps.",
  },
  {
    frontMetric: "6 Months",
    frontLabel: "Average AI Engineer Hiring Time",
    backMetric: "48 Hours",
    backText:
      "200+ certified engineers deployed on-demand. $2,000+ in certifications per engineer.",
  },
];

export function StakesGrid() {
  return (
    <ScrollReveal>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-text-primary">
            The AI Adoption Crisis in Numbers
          </h2>
          <p className="text-text-secondary text-center mb-12">
            Why 87% of AI Projects Fail (And How to Beat the Odds)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stakes.map((card) => (
              <FlipCard
                key={card.frontMetric}
                frontMetric={card.frontMetric}
                frontLabel={card.frontLabel}
                backText={card.backText}
                backMetric={card.backMetric}
              />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
