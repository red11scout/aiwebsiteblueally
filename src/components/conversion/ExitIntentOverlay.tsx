"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useDrawer } from "@/hooks/useDrawer";

const industries = [
  { slug: "construction", name: "Construction" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "finance-insurance", name: "Finance & Insurance" },
  { slug: "manufacturing", name: "Manufacturing" },
  { slug: "retail", name: "Retail" },
  { slug: "energy-utilities", name: "Energy & Utilities" },
  { slug: "transportation", name: "Transportation" },
  { slug: "technology-information", name: "Technology" },
  { slug: "professional-services", name: "Professional Services" },
];

export function ExitIntentOverlay() {
  const [show, setShow] = useState(false);
  const { openDrawer } = useDrawer();

  const trigger = useCallback(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("exit-intent-shown")) return;
    sessionStorage.setItem("exit-intent-shown", "true");
    setShow(true);
  }, []);

  useEffect(() => {
    // Desktop: mouseleave on document
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [trigger]);

  function handleIndustryClick(slug: string) {
    setShow(false);
    openDrawer({ industry: slug, source: "exit-intent" });
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-bg-primary border border-border-subtle rounded-2xl max-w-lg w-full p-8 relative"
          >
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-center mb-2">
              Before you go — one question.
            </h2>
            <p className="text-text-secondary text-center mb-8">
              Which industry are you in?
            </p>

            <div className="grid grid-cols-3 gap-3">
              {industries.map((ind) => (
                <button
                  key={ind.slug}
                  onClick={() => handleIndustryClick(ind.slug)}
                  className="bg-bg-surface border border-border-subtle rounded-lg p-3 text-sm text-text-secondary hover:border-accent-primary/30 hover:text-text-primary transition text-center"
                >
                  {ind.name}
                </button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setShow(false)}
                className="text-sm text-text-muted hover:text-accent-primary transition underline"
              >
                Not ready yet? That&apos;s okay.
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
