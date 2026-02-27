/**
 * Strategic Analysis by Theme
 * Accordion layout for themes. Each theme expands to show current/target state,
 * KPIs, rich friction points, and detailed use case cards with financial breakdowns.
 */

import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  AlertTriangle,
  Bot,
  Shield,
  DollarSign,
  CheckCircle2,
  Database,
  Plug,
  Layers,
  Cpu,
  TrendingDown,
  TrendingUp,
  ArrowRight,
  Clock,
  Target,
  BarChart3,
  Banknote,
  ShieldCheck,
} from "lucide-react";
import type { Theme, UseCase, FrictionPoint, ThemeKPI, WorkflowTransformation } from "@/data/report-types";

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
// Format helpers
// ------------------------------------------------------------------

function fmtMil(val: number): string {
  if (val >= 1_000) return `$${(val / 1_000).toFixed(1)}B`;
  if (val >= 1) return `$${val.toFixed(1)}M`;
  if (val > 0) return `$${(val * 1_000).toFixed(0)}K`;
  return "$0";
}

// ------------------------------------------------------------------
// Collapsible section (reused inside use case cards)
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
        <ChevronDown className={`h-3 w-3 ml-auto transition-transform ${open ? "rotate-180" : ""}`} />
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
// Current State / Target State boxes
// ------------------------------------------------------------------

function StateComparison({ currentState, targetState }: { currentState: string; targetState: string }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-5">
      <div className="p-4 rounded-lg border-l-4 border-[#EF4444] bg-[#EF4444]/5">
        <p className="text-xs font-semibold text-[#EF4444] uppercase tracking-wider mb-2">Current State</p>
        <p className="text-sm text-foreground leading-relaxed">{currentState}</p>
      </div>
      <div className="p-4 rounded-lg border-l-4 border-[#00B34A] bg-[#00B34A]/5">
        <p className="text-xs font-semibold text-[#00B34A] uppercase tracking-wider mb-2">Target State</p>
        <p className="text-sm text-foreground leading-relaxed">{targetState}</p>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// KPI cards
// ------------------------------------------------------------------

function KPICards({ kpis }: { kpis?: ThemeKPI[] }) {
  if (!kpis || kpis.length === 0) return null;

  return (
    <div className="mb-5">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
        <BarChart3 className="h-3.5 w-3.5" /> Key Performance Indicators
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="glass-card rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00A3E0]/10 text-[#00A3E0] font-medium">
                {kpi.function}
              </span>
              <span className="text-[10px] text-muted-foreground">{kpi.subFunction}</span>
            </div>
            <p className="text-xs font-medium text-foreground mb-2">{kpi.kpiName}</p>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">{kpi.baselineValue}</span>
              <ArrowRight className="h-3 w-3 text-[#00A3E0]" />
              <span className="text-[#00B34A] font-medium">{kpi.targetValue}</span>
              <span className="text-muted-foreground ml-auto">{kpi.timeframe}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Rich friction points
// ------------------------------------------------------------------

function RichFrictionPoints({ frictionPoints }: { frictionPoints: FrictionPoint[] }) {
  if (!frictionPoints || frictionPoints.length === 0) return null;

  return (
    <div className="mb-5">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
        <AlertTriangle className="h-3.5 w-3.5 text-[#F59E0B]" /> Friction Points
      </p>
      <div className="space-y-2">
        {frictionPoints.map((fp) => (
          <div key={fp.id} className="glass-card rounded-lg p-3">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                  fp.severity === "Critical"
                    ? "bg-[#EF4444]/10 text-[#EF4444]"
                    : fp.severity === "High"
                      ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                      : "bg-[#6B7280]/10 text-[#6B7280]"
                }`}
              >
                {fp.severity}
              </span>
              <span className="text-[10px] text-muted-foreground">{fp.role}</span>
            </div>
            <p className="text-sm text-foreground mb-2">{fp.frictionPoint}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <DollarSign className="h-3 w-3 text-[#EF4444]" />
                <span className="text-[#EF4444] font-medium">{fmtMil(fp.estimatedAnnualCost)}/yr</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {fp.annualHours.toLocaleString()} hrs/yr
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Financial breakdown row (per use case)
// ------------------------------------------------------------------

function FinancialBreakdown({ breakdown }: { breakdown: UseCase["benefitBreakdown"] }) {
  if (!breakdown) return null;

  const items = [
    { label: "Cost Savings", value: breakdown.costSavings, color: "#00A3E0", icon: TrendingDown },
    { label: "Revenue", value: breakdown.revenue, color: "#00B34A", icon: TrendingUp },
    { label: "Risk Mitigation", value: breakdown.riskMitigation, color: "#F59E0B", icon: ShieldCheck },
    { label: "Cash Flow", value: breakdown.cashFlow, color: "#8B5CF6", icon: Banknote },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
      {items.map(({ label, value, color, icon: Icon }) => (
        <div key={label} className="glass-card rounded-lg p-2.5 text-center">
          <Icon className="h-3.5 w-3.5 mx-auto mb-1" style={{ color }} />
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-sm font-bold" style={{ color }}>{fmtMil(value)}</p>
        </div>
      ))}
    </div>
  );
}

// ------------------------------------------------------------------
// Priority info card
// ------------------------------------------------------------------

function PriorityInfoCard({ useCase }: { useCase: UseCase }) {
  const tier = tierStyle[useCase.priorityTier];

  return (
    <div className="flex flex-wrap items-center gap-3 mb-4 p-3 rounded-lg bg-card border border-border-subtle">
      <span
        className="text-xs font-semibold px-2.5 py-1 rounded-full"
        style={{ color: tier.color, backgroundColor: tier.bg }}
      >
        {useCase.priorityTier}
      </span>
      {useCase.priority && (
        <>
          <span className="text-xs text-muted-foreground">
            Priority: <span className="text-foreground font-medium">{useCase.priority.priorityScore.toFixed(1)}</span>
          </span>
          <span className="text-xs text-muted-foreground">
            Phase: <span className="text-foreground font-medium">{useCase.priority.recommendedPhase}</span>
          </span>
        </>
      )}
      <span className="text-xs text-muted-foreground">
        Readiness: <span className="text-foreground font-medium">{useCase.readinessScore.toFixed(1)}/10</span>
      </span>
      <span className="text-xs text-muted-foreground ml-auto">
        Annual: <span className="text-[#00B34A] font-bold">{fmtMil(useCase.annualValue)}</span>
      </span>
    </div>
  );
}

// ------------------------------------------------------------------
// Workflow transformation (collapsible)
// ------------------------------------------------------------------

function WorkflowSection({ workflow }: { workflow: WorkflowTransformation }) {
  const m = workflow.comparisonMetrics;

  return (
    <div className="space-y-3">
      {/* Comparison metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { label: "Time", ...m.timeReduction },
          { label: "Cost", ...m.costReduction },
          { label: "Quality", ...m.qualityImprovement },
          { label: "Throughput", ...m.throughputIncrease },
        ].map((metric) => (
          <div key={metric.label} className="glass-card rounded-lg p-2.5 text-center">
            <p className="text-[10px] text-muted-foreground">{metric.label}</p>
            <p className="text-xs text-muted-foreground line-through">{metric.before}</p>
            <p className="text-sm font-bold text-[#00B34A]">{metric.after}</p>
            <p className="text-[10px] text-[#00A3E0] font-medium">{metric.improvement}</p>
          </div>
        ))}
      </div>

      {/* Steps comparison */}
      <div className="grid md:grid-cols-2 gap-3">
        {/* Current state */}
        <div>
          <p className="text-xs font-semibold text-[#EF4444] mb-2">Current Process</p>
          <div className="space-y-1.5">
            {workflow.currentState.map((step) => (
              <div key={step.stepNumber} className="flex items-start gap-2 text-xs">
                <span className="w-5 h-5 rounded-full bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                  {step.stepNumber}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{step.name}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span>{step.actorName}</span>
                    <span>{step.duration}</span>
                    {step.isBottleneck && <span className="text-[#EF4444] font-medium">Bottleneck</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Target state */}
        <div>
          <p className="text-xs font-semibold text-[#00B34A] mb-2">AI-Enabled Process</p>
          <div className="space-y-1.5">
            {workflow.targetState.map((step) => (
              <div key={step.stepNumber} className="flex items-start gap-2 text-xs">
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${
                    step.actorType === "ai_agent"
                      ? "bg-[#00A3E0]/10 text-[#00A3E0]"
                      : "bg-[#00B34A]/10 text-[#00B34A]"
                  }`}
                >
                  {step.stepNumber}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">
                    {step.name}
                    {step.actorType === "ai_agent" && (
                      <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-[#00A3E0]/10 text-[#00A3E0] font-medium">
                        AI
                      </span>
                    )}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span>{step.actorName}</span>
                    <span>{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
      {/* Header: ID, title, tags, tier */}
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
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{useCase.description}</p>

      {/* Target friction */}
      <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-[#F59E0B]/5 border border-[#F59E0B]/15">
        <AlertTriangle className="h-4 w-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs font-medium text-[#F59E0B] mb-0.5">Target Friction</p>
          <p className="text-sm text-foreground">{useCase.targetFriction}</p>
        </div>
      </div>

      {/* Financial breakdown */}
      <FinancialBreakdown breakdown={useCase.benefitBreakdown} />

      {/* Priority info */}
      <PriorityInfoCard useCase={useCase} />

      {/* Capabilities */}
      <div className="mb-4">
        <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
          <Cpu className="h-3.5 w-3.5" /> AI Capabilities
        </p>
        <div className="flex flex-wrap gap-1.5">
          {useCase.capabilities.map((cap) => (
            <span key={cap} className="text-xs px-2 py-0.5 rounded-full bg-[#00B34A]/10 text-[#00B34A] font-medium">
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
        <div className="space-y-1.5">
          {useCase.desiredOutcomes.map((o, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#00B34A] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{o.outcome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Data & integrations — collapsible */}
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

      {/* HITL — yellow callout */}
      <div className="border-t border-border-subtle pt-3 mt-0">
        <div className="flex items-start gap-2 p-3 rounded-lg bg-[#F59E0B]/5 border border-[#F59E0B]/15">
          <Shield className="h-4 w-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-medium text-[#F59E0B] mb-0.5">Human-in-the-Loop</p>
            <p className="text-sm text-foreground">{useCase.hitlRequirement}</p>
          </div>
        </div>
      </div>

      {/* Workflow transformation — collapsible */}
      {useCase.workflow && (
        <CollapsibleSection title="Workflow Transformation" icon={Target}>
          <WorkflowSection workflow={useCase.workflow} />
        </CollapsibleSection>
      )}
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

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface-muted transition-colors"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold bg-[#00A3E0]/10 text-[#00A3E0] flex-shrink-0">
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-foreground truncate">{theme.name}</h3>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-0.5">
            <span>{theme.useCases.length} use cases</span>
            {theme.kpis && theme.kpis.length > 0 && <span>{theme.kpis.length} KPIs</span>}
            {theme.frictionPoints && theme.frictionPoints.length > 0 && (
              <span>{theme.frictionPoints.length} friction points</span>
            )}
            <span className="text-[#00B34A] font-medium">{fmtMil(totalValue)}/yr</span>
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
            <div className="px-5 pb-5 space-y-1">
              {/* Current/Target State */}
              {theme.currentState && theme.targetState && (
                <StateComparison currentState={theme.currentState} targetState={theme.targetState} />
              )}

              {/* KPIs */}
              <KPICards kpis={theme.kpis} />

              {/* Rich friction points (filter out legacy string entries) */}
              <RichFrictionPoints frictionPoints={theme.frictionPoints.filter((fp): fp is FrictionPoint => typeof fp !== "string")} />

              {/* Use case cards */}
              <div className="space-y-5">
                {theme.useCases.map((uc) => (
                  <UseCaseCard key={uc.id} useCase={uc} />
                ))}
              </div>
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
            Strategic Analysis by Theme
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
              <ThemeAccordion theme={theme} index={index} defaultOpen={index < 2} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
