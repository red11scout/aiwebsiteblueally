"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useDrawer } from "@/hooks/useDrawer";

export function FinalCta() {
  const { openDrawer } = useDrawer();

  return (
    <ScrollReveal>
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Don&rsquo;t Let Another Quarter Pass Without an AI Strategy
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto">
            In 20 minutes, one of our senior AI architects (not a sales rep)
            will walk you through opportunities specific to your industry, your
            data, and your operational reality.
          </p>
          <motion.button
            type="button"
            onClick={() => openDrawer()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 bg-accent-primary text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-accent-primary/90 transition-colors cursor-pointer"
          >
            Schedule Your Assessment Review &rarr;
          </motion.button>
          <p className="mt-4 text-sm text-text-muted">
            Free. Confidential. No obligation. Assessment delivered within 48
            hours of your call.
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}
