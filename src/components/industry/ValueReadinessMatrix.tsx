"use client";

import { useMemo } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import type { UseCaseDisplay } from "@/lib/types";

const CATEGORY_COLORS: Record<UseCaseDisplay["category"], string> = {
  champion: "#10B981",
  "quick-win": "#3B82F6",
  "strategic-bet": "#06B6D4",
  defer: "#64748B",
};

const CATEGORY_LABELS: Record<string, string> = {
  champion: "Champions",
  "quick-win": "Quick Wins",
  "strategic-bet": "Strategic Bets",
  defer: "Defer",
};

interface ChartDatum {
  x: number;
  y: number;
  name: string;
  category: UseCaseDisplay["category"];
  id: string;
  timeToProduction: string;
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: ChartDatum }>;
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;

  return (
    <div className="bg-bg-surface border border-border-subtle rounded-lg p-4 shadow-xl">
      <p className="font-semibold text-text-primary mb-2">{d.name}</p>
      <span
        className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2"
        style={{
          backgroundColor: CATEGORY_COLORS[d.category] + "20",
          color: CATEGORY_COLORS[d.category],
        }}
      >
        {CATEGORY_LABELS[d.category]}
      </span>
      <p className="font-mono text-sm text-text-secondary">
        Readiness: {d.x}/100
      </p>
      <p className="font-mono text-sm text-text-secondary">
        Est. Value: ${d.y.toFixed(1)}M
      </p>
      <p className="font-mono text-sm text-text-secondary">
        Time to Production: {d.timeToProduction}
      </p>
    </div>
  );
}

export function ValueReadinessMatrix({
  useCases,
}: {
  useCases: UseCaseDisplay[];
}) {
  const chartData = useMemo<ChartDatum[]>(
    () =>
      useCases.map((uc) => ({
        x: uc.readiness,
        y: uc.annualValue / 1_000_000,
        name: uc.name,
        category: uc.category,
        id: uc.id,
        timeToProduction: uc.timeToProduction,
      })),
    [useCases]
  );

  const maxY = useMemo(() => {
    const max = Math.max(...chartData.map((d) => d.y));
    return Math.ceil(max * 1.2);
  }, [chartData]);

  const handleDotClick = (id: string) => {
    document
      .getElementById("usecase-" + id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Group use cases by category for mobile view (skip defer)
  const grouped = useMemo(() => {
    const groups: Record<string, UseCaseDisplay[]> = {
      champion: [],
      "quick-win": [],
      "strategic-bet": [],
    };
    useCases.forEach((uc) => {
      if (uc.category !== "defer" && groups[uc.category]) {
        groups[uc.category].push(uc);
      }
    });
    return groups;
  }, [useCases]);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-4 text-text-primary">
            Value vs. Readiness Matrix
          </h2>
          <p className="text-text-secondary text-center mb-12">
            Each dot represents a validated AI use case. Click to explore.
          </p>

          {/* Desktop chart */}
          <div className="hidden md:block">
            <div className="relative w-full aspect-[16/10] min-h-[400px]">
              {/* Quadrant labels */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <span className="absolute top-4 right-4 text-sm font-medium text-accent-success opacity-60">
                  Champions
                </span>
                <span className="absolute top-4 left-16 text-sm font-medium text-accent-glow opacity-60">
                  Strategic Bets
                </span>
                <span className="absolute bottom-12 right-4 text-sm font-medium text-accent-primary opacity-60">
                  Quick Wins
                </span>
                <span className="absolute bottom-12 left-16 text-sm font-medium text-text-muted opacity-60">
                  Defer
                </span>
              </div>

              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
                >
                  <CartesianGrid
                    stroke="#1E293B"
                    strokeDasharray="3 3"
                  />
                  <XAxis
                    type="number"
                    dataKey="x"
                    name="Readiness"
                    domain={[0, 100]}
                    label={{
                      value: "Implementation Readiness",
                      position: "insideBottom",
                      offset: -10,
                      style: { fill: "#94A3B8", fontSize: 13 },
                    }}
                    tick={{ fill: "#64748B", fontSize: 12 }}
                    axisLine={{ stroke: "#1E293B" }}
                    tickLine={{ stroke: "#1E293B" }}
                  />
                  <YAxis
                    type="number"
                    dataKey="y"
                    name="Annual Value"
                    domain={[0, maxY]}
                    tickFormatter={(v: number) => `$${v}M`}
                    label={{
                      value: "Annual Value ($M)",
                      angle: -90,
                      position: "insideLeft",
                      offset: 0,
                      style: { fill: "#94A3B8", fontSize: 13 },
                    }}
                    tick={{ fill: "#64748B", fontSize: 12 }}
                    axisLine={{ stroke: "#1E293B" }}
                    tickLine={{ stroke: "#1E293B" }}
                  />
                  <ReferenceLine
                    x={50}
                    stroke="#1E293B"
                    strokeDasharray="6 4"
                  />
                  <ReferenceLine
                    y={maxY / 2}
                    stroke="#1E293B"
                    strokeDasharray="6 4"
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={false}
                  />
                  <Scatter
                    data={chartData}
                    cursor="pointer"
                    onClick={(data: ChartDatum) => handleDotClick(data.id)}
                  >
                    {chartData.map((entry) => (
                      <Cell
                        key={entry.id}
                        fill={CATEGORY_COLORS[entry.category]}
                        r={8}
                      />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
              {(
                Object.entries(CATEGORY_LABELS) as [
                  UseCaseDisplay["category"],
                  string,
                ][]
              ).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: CATEGORY_COLORS[key] }}
                  />
                  <span className="text-sm text-text-secondary">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile card list */}
          <div className="md:hidden space-y-8">
            {(
              [
                ["champion", "Champions"],
                ["quick-win", "Quick Wins"],
                ["strategic-bet", "Strategic Bets"],
              ] as const
            ).map(([cat, label]) => {
              const items = grouped[cat];
              if (!items || items.length === 0) return null;

              return (
                <div key={cat}>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: CATEGORY_COLORS[cat] }}
                    />
                    <span className="text-text-primary">{label}</span>
                  </h3>
                  {items.map((uc) => (
                    <button
                      key={uc.id}
                      onClick={() => handleDotClick(uc.id)}
                      className="bg-bg-surface border border-border-subtle rounded-lg p-4 mb-3 w-full text-left"
                    >
                      <p className="font-medium text-text-primary mb-2">
                        {uc.name}
                      </p>
                      <div className="flex gap-4">
                        <span className="font-mono text-sm text-text-secondary">
                          Readiness: {uc.readiness}
                        </span>
                        <span className="font-mono text-sm text-text-secondary">
                          Value: ${(uc.annualValue / 1_000_000).toFixed(1)}M
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
