"use client";

import { useState, useEffect } from "react";

interface FlipCardProps {
  frontMetric: string;
  frontLabel: string;
  backText: string;
  backMetric?: string;
}

export function FlipCard({
  frontMetric,
  frontLabel,
  backText,
  backMetric,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setFlipped(false);
  };

  const handleClick = () => {
    if (isMobile) setFlipped((prev) => !prev);
  };

  return (
    <div
      className="min-h-[280px] [perspective:1000px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front face */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-bg-surface border border-border-subtle rounded-xl p-8 flex flex-col justify-center">
          <span className="font-mono text-5xl font-bold text-accent-danger">
            {frontMetric}
          </span>
          <span className="text-text-secondary text-lg mt-4">{frontLabel}</span>
          <span className="text-text-muted text-sm mt-auto">
            {isMobile ? "Tap to see solution \u2192" : "Hover to see solution \u2192"}
          </span>
        </div>

        {/* Back face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-bg-surface border border-accent-success/30 rounded-xl p-8 flex flex-col justify-center">
          {backMetric && (
            <span className="font-mono text-4xl font-bold text-accent-success mb-4">
              {backMetric}
            </span>
          )}
          <span className="text-text-secondary text-lg">{backText}</span>
        </div>
      </div>
    </div>
  );
}
