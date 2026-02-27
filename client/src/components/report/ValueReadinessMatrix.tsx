/**
 * Value vs Readiness Matrix
 * Custom SVG bubble chart on desktop. Card list grouped by tier on mobile.
 * X-axis: Readiness (0-10), Y-axis: Value (0-10).
 * Bubble size: timeToValue. Quadrants: Champions, Strategic Bets, Quick Wins, Foundation.
 */

import { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Rocket, Zap, Wrench, type LucideIcon } from "lucide-react";
import type { UseCase } from "@/data/report-types";

interface ValueReadinessMatrixProps {
  useCases: UseCase[];
}

/** Tier config: label, color, icon */
const tierConfig: Record<UseCase["priorityTier"], { label: string; color: string; icon: LucideIcon }> = {
  Champion: { label: "Champions", color: "#00B34A", icon: Trophy },
  "Strategic Bet": { label: "Strategic Bets", color: "#00A3E0", icon: Rocket },
  "Quick Win": { label: "Quick Wins", color: "#F59E0B", icon: Zap },
  Foundation: { label: "Foundation", color: "#6B7280", icon: Wrench },
};

/** Quadrant labels and positions */
const quadrants = [
  { label: "Strategic Bets", x: 25, y: 20, color: "#00A3E0" },
  { label: "Champions", x: 75, y: 20, color: "#00B34A" },
  { label: "Foundation", x: 25, y: 80, color: "#6B7280" },
  { label: "Quick Wins", x: 75, y: 80, color: "#F59E0B" },
];

/** Map bubble radius from timeToValue (months). Shorter = bigger bubble. */
function bubbleRadius(ttv: number): number {
  // Invert: short TTV = large, long TTV = small. Clamp between 8-22.
  const maxTtv = 24;
  const normalized = Math.max(0, Math.min(1, 1 - ttv / maxTtv));
  return 8 + normalized * 14;
}

/** Get bubble color based on quadrant position */
function getBubbleColor(valueScore: number, readinessScore: number): string {
  if (valueScore >= 5 && readinessScore >= 5) return "#00B34A"; // Champion
  if (valueScore >= 5 && readinessScore < 5) return "#00A3E0"; // Strategic Bet
  if (valueScore < 5 && readinessScore >= 5) return "#F59E0B"; // Quick Win
  return "#6B7280"; // Foundation
}

// ------------------------------------------------------------------
// SVG Chart (desktop)
// ------------------------------------------------------------------

function BubbleChart({ useCases }: { useCases: UseCase[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Chart dimensions (viewBox units)
  const padding = { top: 30, right: 30, bottom: 50, left: 55 };
  const width = 700;
  const height = 500;
  const plotW = width - padding.left - padding.right;
  const plotH = height - padding.top - padding.bottom;

  const toX = (readiness: number) => padding.left + (readiness / 10) * plotW;
  const toY = (value: number) => padding.top + ((10 - value) / 10) * plotH;

  const hovered = useCases.find((uc) => uc.id === hoveredId);

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        style={{ maxHeight: 520 }}
      >
        {/* Quadrant backgrounds */}
        <rect x={toX(0)} y={toY(10)} width={plotW / 2} height={plotH / 2} fill="#00A3E0" fillOpacity={0.04} />
        <rect x={toX(5)} y={toY(10)} width={plotW / 2} height={plotH / 2} fill="#00B34A" fillOpacity={0.04} />
        <rect x={toX(0)} y={toY(5)} width={plotW / 2} height={plotH / 2} fill="#6B7280" fillOpacity={0.04} />
        <rect x={toX(5)} y={toY(5)} width={plotW / 2} height={plotH / 2} fill="#F59E0B" fillOpacity={0.04} />

        {/* Midlines */}
        <line x1={toX(5)} y1={toY(10)} x2={toX(5)} y2={toY(0)} stroke="var(--border)" strokeDasharray="4 4" strokeWidth={1} />
        <line x1={toX(0)} y1={toY(5)} x2={toX(10)} y2={toY(5)} stroke="var(--border)" strokeDasharray="4 4" strokeWidth={1} />

        {/* Axis lines */}
        <line x1={padding.left} y1={toY(0)} x2={width - padding.right} y2={toY(0)} stroke="var(--border)" strokeWidth={1} />
        <line x1={padding.left} y1={toY(0)} x2={padding.left} y2={toY(10)} stroke="var(--border)" strokeWidth={1} />

        {/* X-axis ticks */}
        {Array.from({ length: 11 }, (_, i) => (
          <g key={`xt-${i}`}>
            <line x1={toX(i)} y1={toY(0)} x2={toX(i)} y2={toY(0) + 6} stroke="var(--border)" strokeWidth={1} />
            <text x={toX(i)} y={toY(0) + 20} textAnchor="middle" fill="var(--muted-foreground)" fontSize={11}>
              {i}
            </text>
          </g>
        ))}

        {/* Y-axis ticks */}
        {Array.from({ length: 11 }, (_, i) => (
          <g key={`yt-${i}`}>
            <line x1={padding.left - 6} y1={toY(i)} x2={padding.left} y2={toY(i)} stroke="var(--border)" strokeWidth={1} />
            <text x={padding.left - 12} y={toY(i) + 4} textAnchor="end" fill="var(--muted-foreground)" fontSize={11}>
              {i}
            </text>
          </g>
        ))}

        {/* Axis labels */}
        <text x={width / 2} y={height - 6} textAnchor="middle" fill="var(--muted-foreground)" fontSize={12} fontWeight={500}>
          Readiness Score
        </text>
        <text
          x={14}
          y={height / 2 - 10}
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize={12}
          fontWeight={500}
          transform={`rotate(-90, 14, ${height / 2 - 10})`}
        >
          Value Score
        </text>

        {/* Quadrant labels */}
        {quadrants.map((q) => (
          <text
            key={q.label}
            x={padding.left + (q.x / 100) * plotW}
            y={padding.top + (q.y / 100) * plotH}
            textAnchor="middle"
            fill={q.color}
            fontSize={11}
            fontWeight={600}
            opacity={0.6}
          >
            {q.label}
          </text>
        ))}

        {/* Bubbles */}
        {useCases.map((uc) => {
          const cx = toX(uc.readinessScore);
          const cy = toY(uc.valueScore);
          const r = bubbleRadius(uc.timeToValue);
          const color = getBubbleColor(uc.valueScore, uc.readinessScore);
          const isHovered = hoveredId === uc.id;

          return (
            <g
              key={uc.id}
              onMouseEnter={() => setHoveredId(uc.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="cursor-pointer"
            >
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill={color}
                fillOpacity={isHovered ? 0.4 : 0.25}
                stroke={color}
                strokeWidth={isHovered ? 2.5 : 1.5}
                style={{ transition: "all 0.2s ease" }}
              />
              <text
                x={cx}
                y={cy + 4}
                textAnchor="middle"
                fill="var(--foreground)"
                fontSize={9}
                fontWeight={600}
              >
                {uc.id}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip */}
      {hovered && (
        <div className="absolute top-4 right-4 glass-card rounded-lg p-3 max-w-[220px] z-10 shadow-lg">
          <p className="text-xs font-medium text-[#00A3E0] mb-0.5">{hovered.id}</p>
          <p className="text-sm font-semibold text-foreground mb-1">{hovered.title}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>Value: {hovered.valueScore}</span>
            <span>Ready: {hovered.readinessScore}</span>
            <span>TTV: {hovered.timeToValue}mo</span>
          </div>
          <div className="mt-1">
            <span
              className="inline-block text-xs px-1.5 py-0.5 rounded font-medium"
              style={{
                color: getBubbleColor(hovered.valueScore, hovered.readinessScore),
                backgroundColor: `${getBubbleColor(hovered.valueScore, hovered.readinessScore)}15`,
              }}
            >
              {hovered.priorityTier}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// ------------------------------------------------------------------
// Card List (mobile fallback)
// ------------------------------------------------------------------

function TierCardList({ useCases }: { useCases: UseCase[] }) {
  const grouped = useMemo(() => {
    const tiers: UseCase["priorityTier"][] = ["Champion", "Strategic Bet", "Quick Win", "Foundation"];
    return tiers
      .map((tier) => ({
        tier,
        cases: useCases.filter((uc) => uc.priorityTier === tier),
      }))
      .filter((g) => g.cases.length > 0);
  }, [useCases]);

  return (
    <div className="space-y-6">
      {grouped.map(({ tier, cases }) => {
        const cfg = tierConfig[tier];
        const Icon = cfg.icon;
        return (
          <div key={tier}>
            <div className="flex items-center gap-2 mb-3">
              <Icon className="h-4 w-4" style={{ color: cfg.color }} />
              <h4 className="text-sm font-semibold text-foreground">{cfg.label}</h4>
              <span className="text-xs text-muted-foreground">({cases.length})</span>
            </div>
            <div className="space-y-2">
              {cases.map((uc) => (
                <div key={uc.id} className="glass-card rounded-lg p-3 flex items-center gap-3">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ color: cfg.color, backgroundColor: `${cfg.color}15` }}
                  >
                    {uc.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{uc.title}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                      <span>Value: {uc.valueScore}</span>
                      <span>Ready: {uc.readinessScore}</span>
                      <span>TTV: {uc.timeToValue}mo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ------------------------------------------------------------------
// Main export
// ------------------------------------------------------------------

export default function ValueReadinessMatrix({ useCases }: ValueReadinessMatrixProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Value vs. Readiness
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every use case, plotted. High and right means high value, high readiness. Those are your Champions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto glass-card rounded-xl p-4 md:p-6"
        >
          {/* Desktop: SVG chart */}
          <div className="hidden md:block">
            <BubbleChart useCases={useCases} />
          </div>

          {/* Mobile: card list */}
          <div className="md:hidden">
            <TierCardList useCases={useCases} />
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-6"
        >
          {(["Champion", "Strategic Bet", "Quick Win", "Foundation"] as const).map((tier) => {
            const cfg = tierConfig[tier];
            return (
              <div key={tier} className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cfg.color }} />
                {cfg.label}
              </div>
            );
          })}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-muted-foreground">Bubble size = time to value</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
