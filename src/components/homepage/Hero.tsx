"use client";

import { motion } from "framer-motion";
import { useDrawer } from "@/hooks/useDrawer";

export function Hero() {
  const { openDrawer } = useDrawer();

  return (
    <section className="min-h-screen py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12">
          {/* Left column */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl text-text-primary"
            >
              Move AI from Pilot Purgatory to Production in 90 Days
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-lg text-text-secondary max-w-xl mt-6"
            >
              87% of AI initiatives stall at proof-of-concept. BlueAlly&apos;s
              full-stack methodology &mdash; from strategy through infrastructure
              through managed services &mdash; eliminates the handoff gaps that
              kill AI projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex gap-4 mt-8 flex-wrap"
            >
              <button
                id="hero-cta"
                onClick={() => openDrawer()}
                className="bg-accent-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-primary/90 transition-colors"
              >
                Get Your Free AI Assessment &rarr;
              </button>
              <button className="text-accent-primary hover:text-accent-glow transition-colors underline text-lg font-semibold">
                See a Sample Assessment &rarr;
              </button>
            </motion.div>
          </div>

          {/* Right column — decorative placeholder */}
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-bg-surface border border-border-subtle aspect-[4/3] flex items-center justify-center">
              <span className="text-text-muted text-lg">
                Assessment Preview
              </span>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16">
          <div className="flex gap-8 items-center justify-center flex-wrap">
            {[
              "200+ Enterprise Deployments",
              "SOC 2 & ISO 42001",
              "35% Faster TTV",
              "NVIDIA Partner",
            ].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-8">
                <span className="font-mono text-sm text-text-secondary">
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-text-muted">&middot;</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex gap-6 items-center justify-center mt-6">
            {["NVIDIA", "AWS", "Dell", "Cisco"].map((name) => (
              <span
                key={name}
                className="font-mono text-xs tracking-wider text-text-muted/60 uppercase"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
