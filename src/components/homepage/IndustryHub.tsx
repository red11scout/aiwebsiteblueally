"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { IndustryCard } from "@/components/shared/IndustryCard";

const industryCards = [
  { slug: "construction", name: "Construction", icon: "HardHat", teaserValue: "$213.6M" },
  { slug: "healthcare", name: "Healthcare", icon: "Stethoscope", teaserValue: "$186.4M" },
  { slug: "finance-insurance", name: "Finance & Insurance", icon: "Landmark", teaserValue: "$312.8M" },
  { slug: "manufacturing", name: "Manufacturing", icon: "Factory", teaserValue: "$245.1M" },
  { slug: "retail", name: "Retail", icon: "ShoppingCart", teaserValue: "$178.3M" },
  { slug: "energy-utilities", name: "Energy & Utilities", icon: "Zap", teaserValue: "$436.5M" },
  { slug: "transportation", name: "Transportation", icon: "Truck", teaserValue: "$156.7M" },
  { slug: "technology-information", name: "Technology & Information", icon: "Monitor", teaserValue: "$289.4M" },
  { slug: "professional-services", name: "Professional Services", icon: "Briefcase", teaserValue: "$198.2M" },
  { slug: "real-estate", name: "Real Estate", icon: "Building2", teaserValue: "$142.5M" },
  { slug: "education", name: "Education", icon: "GraduationCap", teaserValue: "$94.8M" },
  { slug: "entertainment", name: "Entertainment", icon: "Film", teaserValue: "$167.3M" },
  { slug: "state-local", name: "State & Local", icon: "Globe", teaserValue: "$128.9M" },
  { slug: "federal", name: "Federal", icon: "Shield", teaserValue: "$215.6M" },
];

export function IndustryHub() {
  return (
    <ScrollReveal>
      <section id="industries" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-text-primary">
            Select Your Industry. See Your AI Opportunity.
          </h2>
          <p className="text-text-secondary text-center mb-12">
            Every assessment is customized to your vertical&apos;s specific
            friction points and validated use cases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryCards.map((card) => (
              <IndustryCard
                key={card.slug}
                slug={card.slug}
                name={card.name}
                icon={card.icon}
                teaserValue={card.teaserValue}
              />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
