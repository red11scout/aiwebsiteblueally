/**
 * Flywheel Section
 * The signature BlueAlly AI Flywheel - an animated circular diagram with 8 stages.
 * Desktop: circular SVG layout with rotating ring.
 * Mobile: 2x4 grid fallback.
 */

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Search,
  Palette,
  ClipboardCheck,
  Hammer,
  Rocket,
  Settings,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlywheelStage {
  label: string;
  icon: LucideIcon;
  description: string;
}

const stages: FlywheelStage[] = [
  {
    label: "Educate",
    icon: GraduationCap,
    description:
      "Build AI literacy across your organization with tailored workshops",
  },
  {
    label: "Discover",
    icon: Search,
    description:
      "Identify high-impact use cases aligned with your strategic goals",
  },
  {
    label: "Design",
    icon: Palette,
    description:
      "Architect solutions that balance innovation with enterprise requirements",
  },
  {
    label: "Assess",
    icon: ClipboardCheck,
    description:
      "Evaluate organizational readiness across skills, data, and infrastructure",
  },
  {
    label: "Build",
    icon: Hammer,
    description:
      "Develop production-grade AI applications with proven methodologies",
  },
  {
    label: "Deploy",
    icon: Rocket,
    description:
      "Launch solutions with enterprise security, compliance, and monitoring",
  },
  {
    label: "Manage",
    icon: Settings,
    description: "Optimize performance and drive continuous improvement",
  },
  {
    label: "Scale",
    icon: TrendingUp,
    description: "Expand successful AI initiatives across your enterprise",
  },
];

// Position each node around a circle (clockwise from top)
function getNodePosition(index: number, total: number, radius: number) {
  // Start at -90deg (top) and go clockwise
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    angleDeg: (index / total) * 360 - 90,
  };
}

export default function FlywheelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const RING_RADIUS = 200;
  const CENTER = 280; // SVG viewBox center
  const NODE_SIZE = 80;

  return (
    <section id="flywheel" className="py-24 md:py-40 gradient-navy" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00B34A] bg-[#00B34A]/10 rounded-full border border-[#00B34A]/20">
            Continuous Transformation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            The BlueAlly AI Flywheel
          </h2>
        </motion.div>

        {/* Desktop Flywheel */}
        <div className="hidden md:block">
          <div className="relative max-w-[560px] mx-auto">
            {/* SVG connecting ring + arcs */}
            <svg
              viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              {/* Rotating connecting ring */}
              <circle
                cx={CENTER}
                cy={CENTER}
                r={RING_RADIUS}
                fill="none"
                stroke="url(#ringGradient)"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                className="animate-spin-slow"
                style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
              />

              {/* Arc arrows between nodes */}
              {stages.map((_, i) => {
                const from = getNodePosition(i, stages.length, RING_RADIUS);
                const to = getNodePosition(
                  (i + 1) % stages.length,
                  stages.length,
                  RING_RADIUS,
                );
                const midAngle =
                  ((i + 0.5) / stages.length) * 2 * Math.PI - Math.PI / 2;
                const outerRadius = RING_RADIUS + 12;
                const mx = Math.cos(midAngle) * outerRadius;
                const my = Math.sin(midAngle) * outerRadius;

                return (
                  <path
                    key={`arc-${i}`}
                    d={`M ${CENTER + from.x} ${CENTER + from.y} Q ${CENTER + mx} ${CENTER + my} ${CENTER + to.x} ${CENTER + to.y}`}
                    fill="none"
                    stroke="rgba(0, 163, 224, 0.08)"
                    strokeWidth="1"
                  />
                );
              })}

              <defs>
                <linearGradient
                  id="ringGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00A3E0" />
                  <stop offset="100%" stopColor="#00B34A" />
                </linearGradient>

                <linearGradient
                  id="nodeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00A3E0" />
                  <stop offset="100%" stopColor="#00B34A" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="relative flex items-center justify-center w-24 h-24">
                {/* Pulsing glow */}
                <div className="absolute inset-0 rounded-full bg-[#00A3E0]/20 animate-pulse-glow" />
                <div className="relative text-center">
                  <div className="text-sm font-medium text-foreground leading-tight">
                    BlueAlly
                  </div>
                  <div className="text-sm font-medium text-gradient leading-tight">
                    AI
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Flywheel nodes - positioned absolutely via CSS transform */}
            <div
              className="relative"
              style={{ paddingBottom: "100%" /* 1:1 aspect ratio */ }}
            >
              {stages.map((stage, index) => {
                const pos = getNodePosition(
                  index,
                  stages.length,
                  RING_RADIUS,
                );
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.08,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="absolute z-20"
                    style={{
                      left: `calc(50% + ${pos.x}px - ${NODE_SIZE / 2}px)`,
                      top: `calc(50% + ${pos.y}px - ${NODE_SIZE / 2}px)`,
                      width: `${NODE_SIZE}px`,
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div
                      className={cn(
                        "w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer",
                        "bg-card border-2",
                        isActive
                          ? "scale-110 shadow-lg shadow-[#00A3E0]/30"
                          : "hover:scale-105",
                      )}
                      style={{
                        borderImage: "linear-gradient(135deg, #00A3E0, #00B34A) 1",
                        borderImageSlice: 1,
                        borderStyle: "solid",
                        // borderImage doesn't work with border-radius, use box-shadow fallback
                        borderColor: isActive ? "#00A3E0" : "hsl(var(--border))",
                        boxShadow: isActive
                          ? "0 0 20px rgba(0, 163, 224, 0.3), inset 0 0 0 1px rgba(0, 179, 74, 0.3)"
                          : "none",
                      }}
                    >
                      <stage.icon
                        className={cn(
                          "h-7 w-7 transition-colors duration-300",
                          isActive ? "text-[#00A3E0]" : "text-muted-foreground",
                        )}
                      />
                    </div>
                    <div
                      className={cn(
                        "text-center mt-2 text-xs font-medium transition-colors duration-300 whitespace-nowrap",
                        isActive ? "text-[#00A3E0]" : "text-muted-foreground",
                      )}
                    >
                      {stage.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Detail card below flywheel */}
          <div className="max-w-md mx-auto mt-4 h-24">
            <AnimatePresence mode="wait">
              {activeIndex !== null && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-card border border-border rounded-xl p-5 text-center"
                >
                  <h4 className="text-foreground font-medium mb-1 text-sm">
                    {stages[activeIndex].label}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stages[activeIndex].description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile 2x4 Grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {stages.map((stage, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  className={cn(
                    "bg-card border border-border rounded-xl p-4 text-center cursor-pointer transition-all duration-300",
                    isActive && "border-[#00A3E0]/40 bg-[#00A3E0]/5",
                  )}
                >
                  <div className="flex justify-center mb-3">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300",
                        isActive
                          ? "bg-[#00A3E0]/20"
                          : "bg-muted",
                      )}
                    >
                      <stage.icon
                        className={cn(
                          "h-5 w-5 transition-colors duration-300",
                          isActive ? "text-[#00A3E0]" : "text-muted-foreground",
                        )}
                      />
                    </div>
                  </div>
                  <h4
                    className={cn(
                      "text-sm font-medium mb-1 transition-colors duration-300",
                      isActive ? "text-[#00A3E0]" : "text-foreground",
                    )}
                  >
                    {stage.label}
                  </h4>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted-foreground text-xs leading-relaxed overflow-hidden"
                      >
                        {stage.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.15); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
