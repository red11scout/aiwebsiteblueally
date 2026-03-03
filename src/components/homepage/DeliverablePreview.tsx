"use client";

import { CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MonoText } from "@/components/shared/MonoText";

function PlaceholderBar({ width = "w-3/4" }: { width?: string }) {
  return <div className={`${width} h-3 bg-border-subtle rounded`} />;
}

function AssessmentCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-bg-surface border border-border-subtle rounded-lg p-4 aspect-[16/10] flex flex-col justify-center gap-3 ${className}`}
    >
      <PlaceholderBar width="w-1/2" />
      <PlaceholderBar />
      <PlaceholderBar width="w-5/6" />
      <PlaceholderBar width="w-2/3" />
      <PlaceholderBar width="w-3/4" />
    </div>
  );
}

const features = [
  <>
    10+ Validated Use Cases with Individual{" "}
    <MonoText>ROI Projections</MonoText>
  </>,
  <>
    Technical Readiness Scoring (<MonoText>0-100 Scale</MonoText>)
  </>,
  <>Competitive Benchmarking Against Industry Peers</>,
  <>Value Opportunity Quantification (Conservative + Aggressive)</>,
  <>
    <MonoText>90-Day</MonoText> Prioritized Implementation Roadmap
  </>,
  <>Platform Consolidation Strategy</>,
  <>Executive-Ready Board Presentation</>,
];

export function DeliverablePreview() {
  return (
    <ScrollReveal>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Your Customized AI Assessment: A{" "}
            <MonoText>$25,000</MonoText> Value, Complimentary
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column — Visual placeholder */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                <AssessmentCard className="relative z-10" />
                <AssessmentCard className="relative -mt-8 z-20 ml-2" />
                <AssessmentCard className="relative -mt-8 z-30 ml-4" />
              </div>
              <p className="text-sm text-text-muted text-center mt-4">
                Sample Assessment Report
              </p>
            </div>

            {/* Center column — Feature list */}
            <div className="flex flex-col justify-center">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-3 items-start mb-4">
                  <CheckCircle className="text-accent-success w-5 h-5 mt-0.5 shrink-0" />
                  <span className="text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            {/* Right column — Testimonial + Risk Reversal */}
            <div className="flex flex-col justify-center">
              <blockquote className="italic text-lg text-text-secondary leading-relaxed">
                &ldquo;The assessment identified $17M in trapped value we
                couldn&rsquo;t see. We had the data &mdash; BlueAlly showed us
                the strategy.&rdquo;
              </blockquote>
              <p className="text-sm text-text-muted mt-4">
                &mdash; Director of Operations, Top 10 Commercial Roofing
                Company
              </p>

              <div className="mt-8 border border-accent-success/30 rounded-lg p-4 bg-accent-success/5">
                <p className="font-semibold text-accent-success text-sm">
                  90-Day Value Guarantee
                </p>
                <p className="text-sm text-text-secondary mt-2">
                  If we don&rsquo;t identify at least $5M in quantified value
                  opportunities, we&rsquo;ll refund your implementation costs.
                  No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
