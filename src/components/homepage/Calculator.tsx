"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useDrawer } from "@/hooks/useDrawer";
import { formatCurrency, formatMillions } from "@/lib/utils";
import { calculateTrappedValue } from "@/lib/calculator";

const industryOptions = [
  { slug: "construction", name: "Construction" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "finance-insurance", name: "Finance & Insurance" },
  { slug: "manufacturing", name: "Manufacturing" },
  { slug: "retail", name: "Retail" },
  { slug: "energy-utilities", name: "Energy & Utilities" },
  { slug: "transportation", name: "Transportation" },
  { slug: "technology-information", name: "Technology & Information" },
  { slug: "professional-services", name: "Professional Services" },
  { slug: "real-estate", name: "Real Estate" },
  { slug: "education", name: "Education" },
  { slug: "entertainment", name: "Entertainment" },
  { slug: "state-local", name: "State & Local Government" },
  { slug: "federal", name: "Federal Government" },
];

const maturityOptions = [
  { value: "exploring", label: "Exploring" },
  { value: "piloting", label: "Piloting" },
  { value: "scaling", label: "Scaling" },
];

function sliderToRevenue(position: number): number {
  return 50_000_000 * Math.pow(100, position / 100);
}

export function Calculator() {
  const { openDrawer } = useDrawer();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [industry, setIndustry] = useState("construction");
  const [maturity, setMaturity] = useState("exploring");

  const revenue = useMemo(
    () => sliderToRevenue(sliderPosition),
    [sliderPosition]
  );

  const { low, high } = useMemo(
    () => calculateTrappedValue(revenue, industry, maturity),
    [revenue, industry, maturity]
  );

  const lowMillions = low / 1_000_000;
  const highMillions = high / 1_000_000;

  const industryName =
    industryOptions.find((i) => i.slug === industry)?.name || "your industry";

  return (
    <ScrollReveal>
      <section className="py-24 bg-bg-surface/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Calculate Your Trapped Value
          </h2>
          <p className="text-text-secondary mb-12">
            See how much AI value your organization is leaving on the table.
          </p>

          {/* Revenue Slider */}
          <div>
            <label className="text-sm text-text-secondary mb-2 block">
              Annual Revenue
            </label>
            <p className="font-mono text-3xl text-accent-glow mb-4">
              {formatCurrency(revenue, true)}
            </p>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none bg-border-subtle accent-accent-primary cursor-pointer"
            />
            <div className="flex justify-between text-xs text-text-muted mt-1">
              <span>$50M</span>
              <span>$5B+</span>
            </div>
          </div>

          {/* Industry Dropdown */}
          <div className="mt-8">
            <label className="text-sm text-text-secondary mb-2 block">
              Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-3 text-text-primary cursor-pointer"
            >
              {industryOptions.map((opt) => (
                <option key={opt.slug} value={opt.slug}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>

          {/* AI Maturity Radio */}
          <div className="mt-8">
            <label className="text-sm text-text-secondary mb-3 block">
              Current AI Maturity
            </label>
            <div className="flex justify-center gap-2">
              {maturityOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setMaturity(opt.value)}
                  className={`px-6 py-2 rounded-full border text-sm font-medium cursor-pointer transition-all ${
                    maturity === opt.value
                      ? "bg-accent-primary text-white border-accent-primary"
                      : "border-border-subtle text-text-secondary hover:border-accent-primary/50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Output */}
          <div className="mt-12">
            <p className="text-text-secondary">
              Estimated Annual AI Value Opportunity:
            </p>
            <div className="font-mono text-4xl sm:text-5xl font-bold text-accent-glow mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${lowMillions.toFixed(1)}-${highMillions.toFixed(1)}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {formatMillions(lowMillions)} &ndash;{" "}
                  {formatMillions(highMillions)}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="text-sm text-text-muted mt-4">
              Based on analysis of {industryName} companies at your revenue
              scale.
            </p>
            <button
              type="button"
              onClick={() => openDrawer({ industry })}
              className="mt-8 bg-accent-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-primary/90 transition cursor-pointer"
            >
              Get Your Exact Number &rarr; Schedule Assessment Review
            </button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
