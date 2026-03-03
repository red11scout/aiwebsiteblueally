"use client";

import Link from "next/link";
import { useDrawer } from "@/hooks/useDrawer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MonoText } from "@/components/shared/MonoText";
import type { IndustryData } from "@/lib/types";

export function IndustryHero({ data }: { data: IndustryData }) {
  const { openDrawer } = useDrawer();

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          {/* Breadcrumbs */}
          <nav className="text-sm text-text-muted mb-6">
            <Link
              href="/#industries"
              className="hover:text-text-secondary transition-colors"
            >
              Industries
            </Link>
            <span className="mx-2">/</span>
            <span>{data.name}</span>
          </nav>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary">
            Unlocking AI ROI in {data.name}
          </h1>

          {/* Value hook */}
          <p className="text-xl text-text-secondary mb-6">
            We&apos;ve mapped exactly how {data.name} firms are reclaiming{" "}
            <MonoText className="text-accent-glow text-2xl font-bold">
              {data.totalValueOpportunity}
            </MonoText>{" "}
            in trapped value.
          </p>

          {/* Frustration hook */}
          <p className="text-lg text-text-muted italic mb-8">
            {data.frustrationHook}
          </p>

          {/* CTA */}
          <button
            onClick={() => openDrawer({ industry: data.slug })}
            className="bg-accent-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-primary/90 transition-colors"
          >
            Get Your {data.name} Assessment &rarr;
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
