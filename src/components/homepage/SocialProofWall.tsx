"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";

const partnerNames = [
  "NVIDIA",
  "AWS",
  "Azure",
  "Google Cloud",
  "Dell",
  "HPE",
  "Cisco",
  "VMware",
];

const stats = [
  { number: "10 Days", label: "Idea to Working Prototype" },
  { number: "200+", label: "Certified AI Engineers" },
  { number: "$2,000+", label: "Avg. Certifications per Engineer" },
  { number: "Zero", label: "Failed Deployments in 2024" },
];

function PartnerLogo({ name }: { name: string }) {
  return (
    <span className="font-mono text-sm tracking-wider text-text-muted/50 uppercase shrink-0 hover:text-text-secondary transition duration-300 px-4">
      {name}
    </span>
  );
}

export function SocialProofWall() {
  return (
    <ScrollReveal>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            The Evidence
          </h2>

          {/* Row 1 — Logo Marquee */}
          <div className="overflow-hidden">
            <div className="flex gap-12 items-center animate-marquee w-max">
              {partnerNames.map((name) => (
                <PartnerLogo key={`a-${name}`} name={name} />
              ))}
              {partnerNames.map((name) => (
                <PartnerLogo key={`b-${name}`} name={name} />
              ))}
            </div>
          </div>

          {/* Row 2 — Stats Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6">
                <p className="font-mono text-4xl font-bold text-text-primary">
                  {stat.number}
                </p>
                <p className="text-sm text-text-secondary mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Row 3 — Testimonial */}
          <div className="mt-16 bg-bg-surface border border-border-subtle rounded-xl p-8 max-w-3xl mx-auto">
            <blockquote className="text-lg text-text-secondary italic leading-relaxed">
              &ldquo;Before BlueAlly, we were stuck in an endless cycle of AI
              proofs-of-concept that never reached production. After the
              assessment, we had 12 validated use cases with a clear 90-day
              roadmap. We deployed our first production AI system in 8
              weeks.&rdquo;
            </blockquote>
            <p className="text-sm text-text-muted mt-4 text-right">
              &mdash; VP of Technology, $850M Healthcare System
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
