/**
 * Use Case Discovery
 * Accordion layout for themes. Each theme expands to show its use cases in rich detail.
 * First 2 themes expanded by default. Animated expand/collapse via Framer Motion.
 */

import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  AlertTriangle,
  Bot,
  Shield,
  Clock,
  DollarSign,
  Gauge,
  CheckCircle2,
  Database,
  Plug,
  Tag,
  Layers,
  Cpu,
  Workflow,
} from "lucide-react";
import type { Theme, UseCase } from "@/data/report-types";

interface UseCaseDiscoveryProps {
  themes: Theme[];
}

// ------------------------------------------------------------------
// Tier badge config
// ------------------------------------------------------------------

const tierStyle: Record<UseCase["priorityTier"], { color: string; bg: string }> = {
  Champion: { color: "#00B34A", bg: "#00B34A15" },
  "Strategic Bet": { color: "#00A3E0", bg: "#00A3E015" },
  "Quick Win": { color: "#F59E0B", bg: "#F59E0B15" },
  Foundation: { color: "#6B7280", bg: "#6B728015" },
};

// ------------------------------------------------------------------
// Score gauge: small circular progress
// ------------------------------------------------------------------

function ScoreGauge({ value, max, label, color }: { value: number; max: number; label: string; color: string }) {
  const pct = Math.min(100, (value / max) * 100);
  const r = 16;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference * (1 - pct / 100);

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={40} height={40} viewBox="0 0 40 40">
        <circle cx={20} cy={20} r={r} fill="none" stroke="var(--border)" strokeWidth={3} />
        <circle
          cx={20}
          cy={20}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={3}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
        <text x={20} y={24} textAnchor="middle" fill="var(--foreground)" fontSize={11} fontWeight={700}>
          {value}
        </text>
      </svg>
      <span className="text-[10px] text-muted-foreground leading-tight text-center">{label}</span>
    </div>
  );
}

// ------------------------------------------------------------------
// Collapsible detail section
// ------------------------------------------------------------------

function CollapsibleSection({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-border-subtle">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full py-2 text-left text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <Icon className="h-3.5 w-3.5 flex-shrink-0" />
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`h-3 w-3 ml-auto transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ------------------------------------------------------------------
// Single use case card
// ------------------------------------------------------------------

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  const tier = tierStyle[useCase.priorityTier];

  return (
    <div className="glass-card rounded-lg p-5">
      {/* Header row: ID badge, title, tier */}
      <div className="flex flex-wrap items-start gap-3 mb-3">
        <span className="text-xs font-bold px-2 py-1 rounded bg-[#00A3E0]/10 text-[#00A3E0] flex-shrink-0">
          {useCase.id}
        </span>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-foreground leading-snug">{useCase.title}</h4>
          <div className="flex flex-wrap items-center gap-2 mt-1.5">
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#003B73]/20 text-[#00A3E0] font-medium">
              {useCase.pattern}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-card text-muted-foreground border border-border-subtle">
              {useCase.functionalArea}
            </span>
          </div>
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
          style={{ color: tier.color, backgroundColor: tier.bg }}
        >
          {useCase.priorityTier}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {useCase.description}
      </p>

      {/* Target friction */}
      <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-[#F59E0B]/5 border border-[#F59E0B]/15">
        <AlertTriangle className="h-4 w-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs font-medium text-[#F59E0B] mb-0.5">Target Friction</p>
          <p className="text-sm text-foreground">{useCase.targetFriction}</p>
        </div>
      </div>

      {/* Capabilities */}
      <div className="mb-4">
        <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
          <Cpu className="h-3.5 w-3.5" /> Capabilities
        </p>
        <div className="flex flex-wrap gap-1.5">
          {useCase.capabilities.map((cap) => (
            <span key={cap} className="text-xs px-2 py-0.5 rounded-full bg-card border border-border-subtle text-foreground">
              {cap}
            </span>
          ))}
        </div>
      </div>

      {/* Agentic pattern — collapsible */}
      <CollapsibleSection title="Agentic Pattern Analysis" icon={Bot}>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-xs font-medium text-muted-foreground w-20 flex-shrink-0 pt-0.5">Primary</span>
            <span className="text-foreground">{useCase.agenticPattern.primary}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xs font-medium text-muted-foreground w-20 flex-shrink-0 pt-0.5">Alternative</span>
            <span className="text-foreground">{useCase.agenticPattern.alternative}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xs font-medium text-muted-foreground w-20 flex-shrink-0 pt-0.5">Rationale</span>
            <span className="text-muted-foreground">{useCase.agenticPattern.rationale}</span>
          </div>
        </div>
      </CollapsibleSection>

      {/* EPOCH classification */}
      <div className="border-t border-border-subtle pt-3 mt-0">
        <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
          <Layers className="h-3.5 w-3.5" /> EPOCH Classification
        </p>
        <div className="flex flex-wrap gap-1.5">
          {useCase.epochClassification.map((epoch) => (
            <span key={epoch} className="text-xs px-2 py-0.5 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] font-medium">
              {epoch}
            </span>
          ))}
        </div>
      </div>

      {/* Desired outcomes */}
      <div className="border-t border-border-subtle pt-3 mt-3">
        <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5" /> Desired Outcomes
        </p>
        <div className="space-y-2">
          {useCase.desiredOutcomes.map((o, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#00B34A] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm text-foreground">{o.outcome}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">Metric: {o.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data types & integrations — collapsible */}
      <CollapsibleSection title="Data & Integrations" icon={Database}>
        <div className="space-y-3">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
              <Database className="h-3 w-3" /> Data Types
            </p>
            <div className="flex flex-wrap gap-1.5">
              {useCase.dataTypes.map((dt) => (
                <span key={dt} className="text-xs px-2 py-0.5 rounded bg-card border border-border-subtle text-muted-foreground">
                  {dt}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
              <Plug className="h-3 w-3" /> Integrations
            </p>
            <div className="flex flex-wrap gap-1.5">
              {useCase.integrations.map((ig) => (
                <span key={ig} className="text-xs px-2 py-0.5 rounded bg-card border border-border-subtle text-muted-foreground">
                  {ig}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* HITL requirement */}
      <div className="border-t border-border-subtle pt-3 mt-0 flex items-start gap-2">
        <Shield className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs font-medium text-muted-foreground">Human-in-the-Loop</p>
          <p className="text-sm text-foreground">{useCase.hitlRequirement}</p>
        </div>
      </div>

      {/* Score gauges + annual value */}
      <div className="border-t border-border-subtle pt-4 mt-3 flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          <ScoreGauge value={useCase.valueScore} max={10} label="Value" color="#00B34A" />
          <ScoreGauge value={useCase.readinessScore} max={10} label="Readiness" color="#00A3E0" />
          <ScoreGauge value={useCase.timeToValue} max={24} label="TTV (mo)" color="#F59E0B" />
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Annual Value</p>
          <p className="text-lg font-bold text-[#00B34A]">
            ${useCase.annualValue >= 1_000
              ? `${(useCase.annualValue / 1_000).toFixed(1)}B`
              : `${useCase.annualValue.toFixed(1)}M`}
          </p>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Theme accordion item
// ------------------------------------------------------------------

function ThemeAccordion({
  theme,
  index,
  defaultOpen,
}: {
  theme: Theme;
  index: number;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  const totalValue = useMemo(
    () => theme.useCases.reduce((sum, uc) => sum + uc.annualValue, 0),
    [theme.useCases],
  );

  const formattedValue =
    totalValue >= 1_000
      ? `$${(totalValue / 1_000).toFixed(1)}B`
      : `$${totalValue.toFixed(1)}M`;

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface-muted transition-colors"
      >
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold bg-[#00A3E0]/10 text-[#00A3E0] flex-shrink-0"
        >
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-foreground truncate">{theme.name}</h3>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
            <span>{theme.useCases.length} use cases</span>
            <span className="text-[#00B34A] font-medium">{formattedValue}/yr</span>
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-5">
              {/* Friction points */}
              {theme.frictionPoints.length > 0 && (
                <div className="p-3 rounded-lg bg-card border border-border-subtle">
                  <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="h-3.5 w-3.5 text-[#F59E0B]" />
                    Key Friction Points
                  </p>
                  <ul className="space-y-1">
                    {theme.frictionPoints.map((fp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-[#F59E0B] mt-1 flex-shrink-0">-</span>
                        {fp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Use case cards */}
              {theme.useCases.map((uc) => (
                <UseCaseCard key={uc.id} useCase={uc} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ------------------------------------------------------------------
// Main export
// ------------------------------------------------------------------

export default function UseCaseDiscovery({ themes }: UseCaseDiscoveryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const totalUseCases = themes.reduce((sum, t) => sum + t.useCases.length, 0);

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
            Use Case Discovery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {totalUseCases} opportunities across {themes.length} themes. Each one analyzed, scored, and ready for action.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * index }}
            >
              <ThemeAccordion
                theme={theme}
                index={index}
                defaultOpen={index < 2}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
