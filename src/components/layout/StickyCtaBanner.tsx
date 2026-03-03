"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDrawer } from "@/hooks/useDrawer";

export function StickyCtaBanner() {
  const { openDrawer } = useDrawer();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-30 bg-bg-surface/95 backdrop-blur-sm border-t border-border-subtle py-3 px-6 pb-[env(safe-area-inset-bottom)]"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
            <span className="text-sm text-text-secondary hidden sm:inline">
              Ready to see your AI opportunity?
            </span>

            <button
              onClick={() => openDrawer({ source: "sticky-banner" })}
              className="bg-accent-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-primary/90 transition cursor-pointer whitespace-nowrap"
            >
              Get Your Assessment &rarr;
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
