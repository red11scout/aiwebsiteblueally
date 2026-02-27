/**
 * Workflow Comparison
 * Shows current vs target workflow transformation.
 * Comparison metrics at top (4 cards), then two columns: current state and target state.
 * Each column shows numbered workflow steps as timeline items.
 * On mobile, stacks to single column (current above target).
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  DollarSign,
  TrendingUp,
  Gauge,
  User,
  Bot,
  Monitor,
  ArrowRight,
  AlertTriangle,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { WorkflowTransformation, WorkflowStep, ComparisonMetric } from "@/data/report-types";

interface WorkflowComparisonProps {
  workflow: WorkflowTransformation;
}

interface MetricCardConfig {
  key: keyof WorkflowTransformation["comparisonMetrics"];
  label: string;
  icon: LucideIcon;
  color: string;
}

const metricCards: MetricCardConfig[] = [
  { key: "timeReduction", label: "Time Reduction", icon: Clock, color: "#00A3E0" },
  { key: "costReduction", label: "Cost Reduction", icon: DollarSign, color: "#00B34A" },
  { key: "qualityImprovement", label: "Quality Improvement", icon: TrendingUp, color: "#00A3E0" },
  { key: "throughputIncrease", label: "Throughput Increase", icon: Gauge, color: "#00B34A" },
];

/** Actor badge */
function ActorBadge({ actorType, actorName }: { actorType: WorkflowStep["actorType"]; actorName: string }) {
  const config = {
    human: { icon: User, color: "#F59E0B", bg: "#F59E0B15", label: "Human" },
    ai_agent: { icon: Bot, color: "#00A3E0", bg: "#00A3E015", label: "AI" },
    system: { icon: Monitor, color: "#6B7280", bg: "#6B728015", label: "System" },
  };

  const { icon: Icon, color, bg, label } = config[actorType] || config.system;

  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
      style={{ color, backgroundColor: bg }}
    >
      <Icon className="h-3 w-3" />
      {actorName || label}
    </span>
  );
}

/** Comparison metric card */
function MetricCard({
  metric,
  config,
  index,
  isInView,
}: {
  metric: ComparisonMetric;
  config: MetricCardConfig;
  index: number;
  isInView: boolean;
}) {
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + 0.08 * index }}
      className="glass-card rounded-xl p-4 text-center"
    >
      <Icon className="h-5 w-5 mx-auto mb-2" style={{ color: config.color }} />
      <p className="text-xs text-muted-foreground mb-2">{config.label}</p>
      <div className="flex items-center justify-center gap-2 mb-1">
        <span className="text-sm text-muted-foreground line-through">{metric.before}</span>
        <ArrowRight className="h-3 w-3 text-muted-foreground" />
        <span className="text-sm font-bold text-foreground">{metric.after}</span>
      </div>
      <span
        className="inline-block text-xs font-bold px-2 py-0.5 rounded-full"
        style={{ color: config.color, backgroundColor: `${config.color}15` }}
      >
        {metric.improvement}
      </span>
    </motion.div>
  );
}

/** Timeline step item */
function StepItem({
  step,
  variant,
  isInView,
  index,
}: {
  step: WorkflowStep;
  variant: "current" | "target";
  isInView: boolean;
  index: number;
}) {
  const borderColor = variant === "current" ? "#F59E0B" : "#00B34A";
  const dotColor = variant === "current"
    ? step.isBottleneck ? "#DC2626" : "#F59E0B"
    : step.isAIEnabled ? "#00A3E0" : "#00B34A";

  return (
    <motion.div
      initial={{ opacity: 0, x: variant === "current" ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.2 + 0.06 * index }}
      className="flex gap-3"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full border-2 mt-1.5"
          style={{ borderColor: dotColor, backgroundColor: `${dotColor}30` }}
        />
        <div className="w-0.5 flex-1 bg-border-subtle mt-1" />
      </div>

      {/* Step content */}
      <div className="pb-5 flex-1 min-w-0">
        <div className="flex flex-wrap items-start gap-2 mb-1">
          <span className="text-xs font-bold text-muted-foreground">
            Step {step.stepNumber}
          </span>
          <ActorBadge actorType={step.actorType} actorName={step.actorName} />
          {step.isBottleneck && variant === "current" && (
            <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-red-500/15 text-red-400">
              <AlertTriangle className="h-3 w-3" />
              Bottleneck
            </span>
          )}
          {step.isAIEnabled && variant === "target" && (
            <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-[#00A3E0]/15 text-[#00A3E0]">
              <Bot className="h-3 w-3" />
              AI-Enabled
            </span>
          )}
        </div>

        <h4 className="text-sm font-semibold text-foreground mb-0.5">
          {step.name}
        </h4>

        <div className="flex items-center gap-2 mb-1.5">
          <Clock className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{step.duration}</span>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed mb-2">
          {step.description}
        </p>

        {/* Systems */}
        {step.systems.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {step.systems.map((sys) => (
              <span
                key={sys}
                className="inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded bg-card border border-border-subtle text-muted-foreground"
              >
                <Wrench className="h-2.5 w-2.5" />
                {sys}
              </span>
            ))}
          </div>
        )}

        {/* AI capabilities (target state only) */}
        {variant === "target" && step.aiCapabilities && step.aiCapabilities.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {step.aiCapabilities.map((cap) => (
              <span
                key={cap}
                className="text-xs px-1.5 py-0.5 rounded bg-[#00A3E0]/10 text-[#00A3E0] font-medium"
              >
                {cap}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function WorkflowComparison({ workflow }: WorkflowComparisonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Workflow Transformation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Side-by-side comparison of current operations and the AI-enabled target state.
          </p>
        </motion.div>

        {/* Comparison metrics — 4 cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {metricCards.map((config, index) => (
            <MetricCard
              key={config.key}
              metric={workflow.comparisonMetrics[config.key]}
              config={config}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Two-column workflow comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Current State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-xl overflow-hidden relative"
          >
            {/* Red/orange left border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F59E0B] rounded-l-xl" />

            <div className="px-5 py-4 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <h3 className="text-base font-semibold text-foreground">
                  Current State
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {workflow.currentState.length} steps in existing workflow
              </p>
            </div>

            <div className="p-5">
              {workflow.currentState.map((step, index) => (
                <StepItem
                  key={step.stepNumber}
                  step={step}
                  variant="current"
                  isInView={isInView}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Target State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-xl overflow-hidden relative"
          >
            {/* Green left border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00B34A] rounded-l-xl" />

            <div className="px-5 py-4 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00B34A]" />
                <h3 className="text-base font-semibold text-foreground">
                  Target State
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {workflow.targetState.length} steps with AI integration
              </p>
            </div>

            <div className="p-5">
              {workflow.targetState.map((step, index) => (
                <StepItem
                  key={step.stepNumber}
                  step={step}
                  variant="target"
                  isInView={isInView}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
