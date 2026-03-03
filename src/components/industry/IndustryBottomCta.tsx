"use client";

import { useDrawer } from "@/hooks/useDrawer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function IndustryBottomCta({
  industryName,
  industrySlug,
}: {
  industryName: string;
  industrySlug: string;
}) {
  const { openDrawer } = useDrawer();

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 text-text-primary">
            This is the overview. Your assessment goes deeper.
          </h2>
          <p className="text-lg text-text-secondary mb-10">
            What you see here is the template. Your customized assessment maps
            these opportunities against your specific data environment, tech
            stack, org structure, and competitive position. It&apos;s the
            difference between a menu and a meal plan.
          </p>
          <button
            onClick={() => openDrawer({ industry: industrySlug })}
            className="bg-accent-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-primary/90 transition-colors"
          >
            Schedule Your {industryName} Assessment Review &rarr;
          </button>
          <p className="text-sm text-text-muted mt-4">
            Free. Confidential. 48-hour delivery.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
