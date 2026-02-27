/**
 * Success Stories Section
 * Rich 4-quadrant case studies with tabbed detail modals
 * De-identified client stories showcasing real AI transformation results
 */

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Stethoscope,
  Factory,
  Building2,
  FlaskConical,
  Clock,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Quote,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AnimatedCounter from "@/components/AnimatedCounter";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Phase {
  name: string;
  description: string;
}

interface Metric {
  value: string;
  label: string;
  context: string;
}

interface ExecutiveQuote {
  text: string;
  attribution: string;
}

interface SuccessStory {
  id: number;
  icon: LucideIcon;
  industry: string;
  industryColor: string;
  title: string;
  heroMetric: { value: string; label: string };
  timeline: string;
  background: {
    overview: string;
    scale: string[];
  };
  challenges: {
    summary: string;
    painPoints: string[];
    previousAttempts: string;
    businessImpact: string;
  };
  solutions: {
    approach: string;
    technologies: string[];
    phases: Phase[];
  };
  outcomes: {
    metrics: Metric[];
    roi: string;
    quote: ExecutiveQuote;
  };
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const successStories: SuccessStory[] = [
  {
    id: 1,
    icon: Stethoscope,
    industry: "Healthcare",
    industryColor: "#00B34A",
    title: "Large Healthcare System",
    heroMetric: { value: "35%", label: "Reduction in Wait Times" },
    timeline: "16 weeks",
    background: {
      overview:
        "A major multi-site healthcare system serving over two million patients annually faced mounting operational challenges. With hundreds of beds across multiple facilities and $1.2 billion in annual revenue, the organization needed to modernize patient flow while maintaining quality of care.",
      scale: [
        "500+ bed multi-site system",
        "$1.2B annual revenue",
        "2M+ patients served annually",
      ],
    },
    challenges: {
      summary:
        "Manual scheduling processes were creating cascading inefficiencies across every department.",
      painPoints: [
        "Average patient wait times exceeding 45 minutes",
        "18% no-show rate driving revenue loss",
        "Staff burnout from manual scheduling across 200+ providers",
        "Three failed attempts with other vendors over two years",
      ],
      previousAttempts:
        "The system had invested in two different scheduling vendors and an internal solution, all failing to address root causes.",
      businessImpact:
        "The combined effect was estimated at $4.8M in annual lost revenue from no-shows and inefficient scheduling alone.",
    },
    solutions: {
      approach:
        "BlueAlly deployed its 8-Part AI Framework, beginning with stakeholder education and culminating in a fully integrated AI scheduling platform.",
      technologies: [
        "Predictive No-Show Modeling",
        "NLP-Powered Patient Intake",
        "EHR Integration Engine",
        "Real-Time Capacity Optimization",
      ],
      phases: [
        {
          name: "Discovery & Design",
          description:
            "Mapped 47 scheduling workflows across 12 departments",
        },
        {
          name: "Development & Integration",
          description:
            "Built predictive models and integrated with Epic EHR",
        },
        {
          name: "Deployment & Optimization",
          description:
            "Rolled out across all facilities with continuous tuning",
        },
      ],
    },
    outcomes: {
      metrics: [
        {
          value: "35%",
          label: "Reduction in Wait Times",
          context: "From 45-min average to under 29 minutes",
        },
        {
          value: "28%",
          label: "Increase in Capacity",
          context: "Without adding a single new provider",
        },
        {
          value: "$2.4M",
          label: "Annual Savings",
          context: "From reduced no-shows and optimized scheduling",
        },
        {
          value: "92%",
          label: "Patient Satisfaction",
          context: "Up from 71% before implementation",
        },
        {
          value: "12%",
          label: "No-Show Reduction",
          context: "From 18% to 6% with predictive interventions",
        },
      ],
      roi: "5.2x return on investment within the first year",
      quote: {
        text: "The AI system transformed how we serve our patients. What seemed impossible became routine.",
        attribution: "Chief Operating Officer",
      },
    },
  },
  {
    id: 2,
    icon: Factory,
    industry: "Manufacturing",
    industryColor: "#00A3E0",
    title: "Global Engineering & Construction Firm",
    heroMetric: { value: "67%", label: "Reduction in Unplanned Downtime" },
    timeline: "20 weeks",
    background: {
      overview:
        "A leading engineering, procurement, and construction firm managing complex industrial projects across multiple continents needed to transform its document-heavy workflows. With thousands of employees and hundreds of active projects, manual processes were creating bottlenecks at every stage.",
      scale: [
        "12 plants across 3 continents",
        "5,000+ employees",
        "$800M annual revenue",
      ],
    },
    challenges: {
      summary:
        "Legacy document management and reactive maintenance were costing millions in lost productivity.",
      painPoints: [
        "$4.2M annually in unplanned equipment downtime",
        "Manual proposal creation taking 3-5 days per bid",
        "Engineering document review bottlenecks delaying projects by weeks",
        "Three safety incidents in the prior year linked to equipment failures",
      ],
      previousAttempts:
        "Basic IoT sensors had been deployed at two facilities but without AI integration, generating alerts that overwhelmed rather than informed teams.",
      businessImpact:
        "The combination of reactive maintenance, slow proposals, and document bottlenecks was estimated to cost the company $8.5M annually.",
    },
    solutions: {
      approach:
        "BlueAlly conducted a Strategic AI Readiness Assessment and developed a 5-use-case portfolio targeting the highest-impact opportunities.",
      technologies: [
        "Proposal Intelligence & Automation",
        "Engineering Document AI",
        "P&ID Optimization",
        "Predictive Maintenance Platform",
        "IoT Sensor Integration (2,400+ sensors)",
      ],
      phases: [
        {
          name: "AI Readiness Assessment",
          description:
            "Mapped processes and scored 23 potential use cases",
        },
        {
          name: "Priority Development",
          description:
            "Built proposal automation and document intelligence",
        },
        {
          name: "Predictive Systems",
          description:
            "Deployed sensor integration and ML maintenance models",
        },
        {
          name: "Enterprise Rollout",
          description:
            "Extended to all 12 facilities with real-time dashboards",
        },
      ],
    },
    outcomes: {
      metrics: [
        {
          value: "67%",
          label: "Downtime Reduction",
          context:
            "From 340 hours to 112 hours of unplanned downtime annually",
        },
        {
          value: "45%",
          label: "Maintenance Cost Decrease",
          context: "Shifting from reactive to predictive maintenance",
        },
        {
          value: "99.2%",
          label: "Equipment Availability",
          context: "Industry-leading reliability across all plants",
        },
        {
          value: "80%",
          label: "Faster Proposals",
          context: "From 3-5 days to under 1 day per bid",
        },
        {
          value: "$6.8M",
          label: "First-Year Savings",
          context:
            "Across maintenance, proposals, and document processing",
        },
      ],
      roi: "4.1x return on investment within the first year",
      quote: {
        text: "We went from reactive firefighting to proactive optimization. The ROI exceeded all expectations.",
        attribution: "VP of Operations",
      },
    },
  },
  {
    id: 3,
    icon: Building2,
    industry: "Construction",
    industryColor: "#00B34A",
    title: "National Commercial Roofing Leader",
    heroMetric: { value: "$194M", label: "Annual Opportunity Identified" },
    timeline: "14 weeks",
    background: {
      overview:
        "A national leader in commercial roofing operating in the $8.5 billion US market needed to differentiate against well-funded competitors. With aggressive growth targets and a complex field operation spanning hundreds of crews, the company sought AI-driven transformation to capture market share.",
      scale: [
        "National operations across 30+ states",
        "Competing in $8.5B market",
        "Hundreds of field crews",
      ],
    },
    challenges: {
      summary:
        "Manual field operations and disconnected systems were limiting growth in an increasingly competitive market.",
      painPoints: [
        "Manual roof assessment processes requiring physical site visits",
        "Proposal generation bottleneck limiting bid volume by 40%",
        "Reactive equipment maintenance causing costly field delays",
        "Lead generation limited to traditional channels",
        "Three legacy CRM systems not sharing data",
      ],
      previousAttempts:
        "Basic CRM automation had been implemented but competitors were investing in drone inspections and fleet IoT.",
      businessImpact:
        "The company estimated it was leaving $194M in annual opportunity on the table through inefficient operations and limited market reach.",
    },
    solutions: {
      approach:
        "BlueAlly developed a comprehensive AI transformation roadmap with a Secure Enclave private AI architecture to protect proprietary CRM data.",
      technologies: [
        "Aerial Roof Assessment Automation (Computer Vision)",
        "AI Proposal Generation & Optimization",
        "Predictive Equipment Maintenance",
        "Autonomous Lead Generation Agents",
        "Secure Enclave Private AI Architecture",
      ],
      phases: [
        {
          name: "Strategic Assessment",
          description:
            "Identified $194M annual opportunity across 6 AI initiatives",
        },
        {
          name: "Foundation Build",
          description:
            "Deployed Secure Enclave architecture and data integration layer",
        },
        {
          name: "AI Application Rollout",
          description:
            "Launched assessment automation and autonomous lead agents",
        },
      ],
    },
    outcomes: {
      metrics: [
        {
          value: "$194M",
          label: "Annual Opportunity",
          context: "Total addressable AI-driven revenue identified",
        },
        {
          value: "10,000",
          label: "Net New Leads Target",
          context: "Through autonomous AI lead generation agents",
        },
        {
          value: "85%",
          label: "Assessment Speed",
          context: "Faster roof assessments via computer vision",
        },
        {
          value: "3x",
          label: "Proposal Volume",
          context: "Tripled bid capacity without adding staff",
        },
        {
          value: "SOC 2",
          label: "Compliance Achieved",
          context:
            "Secure Enclave architecture meeting enterprise standards",
        },
      ],
      roi: "Projected 8.5x return within 18 months of full deployment",
      quote: {
        text: "BlueAlly didn't just give us AI tools\u2014they gave us a competitive moat. The Secure Enclave approach means we can innovate without compromising our data.",
        attribution: "Chief Executive Officer",
      },
    },
  },
  {
    id: 4,
    icon: FlaskConical,
    industry: "Life Sciences",
    industryColor: "#00A3E0",
    title: "Fortune 50 Pharmaceutical Research Organization",
    heroMetric: { value: "450%", label: "GPU Utilization Surge" },
    timeline: "Multi-phase, 3+ years",
    background: {
      overview:
        "A Fortune 50 global pharmaceutical research organization with over 100,000 employees sought to establish and scale enterprise AI capabilities. With a strong focus on drug discovery and development, the organization recognized AI's transformative potential but faced considerable technical and operational challenges.",
      scale: [
        "Fortune 50 global enterprise",
        "100,000+ employees worldwide",
        "Multi-billion dollar research budget",
      ],
    },
    challenges: {
      summary:
        "Navigating the rapidly evolving AI landscape while maintaining pharmaceutical-grade security and compliance.",
      painPoints: [
        "Rapidly evolving AI/ML platform landscape requiring multiple transitions",
        "ML capabilities siloed within isolated data science teams",
        "Enterprise-grade security and compliance requirements for AI systems",
        "Difficulty translating AI potential into practical research acceleration",
        "No unified strategy across ML and generative AI initiatives",
      ],
      previousAttempts:
        "Early adoption of ML platforms (Spell, Algorithmia) had created fragmented capabilities that couldn't scale to enterprise needs.",
      businessImpact:
        "Research teams were spending 40-70% more time on literature analysis and experimental design than industry benchmarks.",
    },
    solutions: {
      approach:
        "BlueAlly designed and executed a multi-phase AI transformation that evolved with the technology landscape over three years.",
      technologies: [
        "Enterprise ML Platforms (SageMaker, ClearML)",
        "Data Annotation Excellence (V7, Labelbox)",
        "LLM Security Frameworks",
        "AI Security Posture Management",
        "Enterprise AI Democratization Platform",
      ],
      phases: [
        {
          name: "ML Foundation",
          description:
            "Deployed initial ML platforms with containerized environments for AI/ML engineers",
        },
        {
          name: "Enterprise ML Evolution",
          description:
            "Implemented SageMaker, advanced data annotation, and MLOps lifecycle management",
        },
        {
          name: "Generative AI Revolution",
          description:
            "Pioneered LLM security frameworks and democratized AI for 2,000 researchers",
        },
      ],
    },
    outcomes: {
      metrics: [
        {
          value: "450%",
          label: "GPU Utilization Surge",
          context: "Reflecting rapid AI adoption across research teams",
        },
        {
          value: "2,000",
          label: "AI Creators Empowered",
          context:
            "Non-technical researchers building custom AI applications",
        },
        {
          value: "300K+",
          label: "AI Interactions",
          context:
            "Within the first month of generative AI deployment",
        },
        {
          value: "30-60%",
          label: "Faster Research",
          context:
            "Accelerated literature analysis, experimental design, and data interpretation",
        },
        {
          value: "4",
          label: "Platform Transitions",
          context:
            "Seamlessly transitioned through four ML platforms without disruption",
        },
      ],
      roi: "Earned the client's highest internal innovation award",
      quote: {
        text: "This initiative transformed productivity and accelerated scientific outcomes across our entire research organization.",
        attribution: "Chief Information Officer",
      },
    },
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract the leading numeric portion of a metric string for AnimatedCounter */
function parseMetricValue(value: string): {
  numeric: number;
  prefix: string;
  suffix: string;
  decimals: number;
  isAnimatable: boolean;
} {
  const match = value.match(/^([^0-9]*)([0-9][0-9,]*\.?[0-9]*)(.*)$/);
  if (!match) {
    return {
      numeric: 0,
      prefix: "",
      suffix: value,
      decimals: 0,
      isAnimatable: false,
    };
  }
  const prefix = match[1] || "";
  const numStr = match[2].replace(/,/g, "");
  const suffix = match[3] || "";
  const decimals = numStr.includes(".")
    ? numStr.split(".")[1].length
    : 0;
  return {
    numeric: parseFloat(numStr),
    prefix,
    suffix,
    decimals,
    isAnimatable: true,
  };
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function MetricCard({
  value,
  label,
  context,
  large = false,
}: Metric & { large?: boolean }) {
  const parsed = parseMetricValue(value);
  return (
    <div
      className={cn(
        "rounded-xl border border-border p-4 text-center",
        large ? "bg-card col-span-2 sm:col-span-1" : "bg-background/60"
      )}
    >
      <div
        className={cn(
          "font-bold text-[#00B34A]",
          large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
        )}
      >
        {parsed.isAnimatable ? (
          <>
            {parsed.prefix}
            <AnimatedCounter
              value={parsed.numeric}
              decimals={parsed.decimals}
              duration={1800}
            />
            {parsed.suffix}
          </>
        ) : (
          value
        )}
      </div>
      <div
        className={cn(
          "font-medium text-foreground mt-1",
          large ? "text-base" : "text-sm"
        )}
      >
        {label}
      </div>
      {context && (
        <div className="text-xs text-muted-foreground mt-1 leading-snug">
          {context}
        </div>
      )}
    </div>
  );
}

function ScaleBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-[#00A3E0]" />
      {text}
    </span>
  );
}

function TechBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#00A3E0]/20 bg-[#00A3E0]/10 px-2.5 py-1 text-xs font-medium text-[#00A3E0]">
      {text}
    </span>
  );
}

function PhaseTimeline({ phases }: { phases: Phase[] }) {
  return (
    <div className="relative space-y-4 pl-6">
      {/* Vertical connector line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
      {phases.map((phase, idx) => (
        <div key={idx} className="relative">
          {/* Dot on the timeline */}
          <div className="absolute -left-6 top-1 h-3.5 w-3.5 rounded-full border-2 border-[#00A3E0] bg-card" />
          <div>
            <h5 className="text-sm font-medium text-foreground">
              {phase.name}
            </h5>
            <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
              {phase.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Story Detail Modal
// ---------------------------------------------------------------------------

function StoryDetailModal({
  story,
  open,
  onClose,
}: {
  story: SuccessStory | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!story) return null;

  const Icon = story.icon;

  return (
    <Dialog open={open} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        {/* Modal Header */}
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div
              className="p-2.5 rounded-xl"
              style={{ backgroundColor: `${story.industryColor}15` }}
            >
              <Icon
                className="h-6 w-6"
                style={{ color: story.industryColor }}
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: story.industryColor }}
              >
                {story.industry}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {story.timeline}
                </span>
              </div>
            </div>
          </div>
          <DialogTitle className="text-2xl text-foreground">
            {story.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {story.heroMetric.value} {story.heroMetric.label}
          </DialogDescription>
        </DialogHeader>

        {/* Tabbed 4-Quadrant Content */}
        <Tabs defaultValue="background" className="mt-4">
          <TabsList className="grid w-full grid-cols-4 bg-background border border-border rounded-lg h-10">
            <TabsTrigger
              value="background"
              className="text-xs sm:text-sm data-[state=active]:bg-muted data-[state=active]:text-foreground text-muted-foreground rounded-md"
            >
              Background
            </TabsTrigger>
            <TabsTrigger
              value="challenges"
              className="text-xs sm:text-sm data-[state=active]:bg-muted data-[state=active]:text-foreground text-muted-foreground rounded-md"
            >
              Challenges
            </TabsTrigger>
            <TabsTrigger
              value="solutions"
              className="text-xs sm:text-sm data-[state=active]:bg-muted data-[state=active]:text-foreground text-muted-foreground rounded-md"
            >
              Solutions
            </TabsTrigger>
            <TabsTrigger
              value="outcomes"
              className="text-xs sm:text-sm data-[state=active]:bg-muted data-[state=active]:text-foreground text-muted-foreground rounded-md"
            >
              Outcomes
            </TabsTrigger>
          </TabsList>

          {/* ---- Background Tab ---- */}
          <TabsContent value="background" className="mt-4 space-y-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {story.background.overview}
            </p>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#00A3E0] mb-3">
                Scale & Scope
              </h4>
              <div className="flex flex-wrap gap-2">
                {story.background.scale.map((s, i) => (
                  <ScaleBadge key={i} text={s} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* ---- Challenges Tab ---- */}
          <TabsContent value="challenges" className="mt-4 space-y-5">
            <p className="text-sm text-foreground font-medium">
              {story.challenges.summary}
            </p>

            {/* Pain Points */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#00A3E0] mb-3">
                Pain Points
              </h4>
              <ul className="space-y-2">
                {story.challenges.painPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Previous Attempts Callout */}
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <h5 className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-1.5">
                Previous Attempts
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {story.challenges.previousAttempts}
              </p>
            </div>

            {/* Business Impact Highlight */}
            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
              <h5 className="text-xs font-medium text-red-400 uppercase tracking-wider mb-1.5">
                Business Impact
              </h5>
              <p className="text-sm text-foreground font-medium leading-relaxed">
                {story.challenges.businessImpact}
              </p>
            </div>
          </TabsContent>

          {/* ---- Solutions Tab ---- */}
          <TabsContent value="solutions" className="mt-4 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-[#00A3E0]" />
                <h4 className="text-xs font-medium uppercase tracking-wider text-[#00A3E0]">
                  Approach
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {story.solutions.approach}
              </p>
            </div>

            {/* Technology Badges */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#00A3E0] mb-3">
                Technologies Deployed
              </h4>
              <div className="flex flex-wrap gap-2">
                {story.solutions.technologies.map((tech, i) => (
                  <TechBadge key={i} text={tech} />
                ))}
              </div>
            </div>

            {/* Phased Timeline */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#00A3E0] mb-3">
                Implementation Phases
              </h4>
              <PhaseTimeline phases={story.solutions.phases} />
            </div>
          </TabsContent>

          {/* ---- Outcomes Tab ---- */}
          <TabsContent value="outcomes" className="mt-4 space-y-5">
            {/* Metrics Grid — 5 metrics, first one spans wider on small screens */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {story.outcomes.metrics.map((metric, i) => (
                <MetricCard
                  key={i}
                  value={metric.value}
                  label={metric.label}
                  context={metric.context}
                  large={i === 0}
                />
              ))}
            </div>

            {/* ROI Callout */}
            <div className="rounded-xl border border-[#00B34A]/30 bg-[#00B34A]/5 p-4 flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-[#00B34A] shrink-0" />
              <div>
                <h5 className="text-xs font-medium text-[#00B34A] uppercase tracking-wider mb-0.5">
                  Return on Investment
                </h5>
                <p className="text-sm text-foreground font-medium">
                  {story.outcomes.roi}
                </p>
              </div>
            </div>

            {/* Executive Quote */}
            <blockquote className="relative rounded-xl border border-border bg-background p-5">
              <Quote className="absolute top-3 left-3 h-5 w-5 text-[#00A3E0]/30" />
              <p className="text-sm text-foreground italic leading-relaxed pl-6">
                &ldquo;{story.outcomes.quote.text}&rdquo;
              </p>
              <footer className="mt-3 pl-6 text-xs text-muted-foreground">
                &mdash; {story.outcomes.quote.attribution}
              </footer>
            </blockquote>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

// ---------------------------------------------------------------------------
// Story Card (overview card in the grid)
// ---------------------------------------------------------------------------

function StoryCard({
  story,
  index,
  isInView,
  onSelect,
}: {
  story: SuccessStory;
  index: number;
  isInView: boolean;
  onSelect: () => void;
}) {
  const Icon = story.icon;
  const heroMetricParsed = parseMetricValue(story.heroMetric.value);

  // Show 3 additional metrics after the hero
  const additionalMetrics = story.outcomes.metrics.slice(1, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
      className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-border transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,163,224,0.08)]"
    >
      <div className="p-6">
        {/* Header Row: Industry badge + Timeline badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider"
            style={{
              color: story.industryColor,
              backgroundColor: `${story.industryColor}15`,
              border: `1px solid ${story.industryColor}30`,
            }}
          >
            <Icon className="h-3.5 w-3.5" />
            {story.industry}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {story.timeline}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium text-foreground mb-2">
          {story.title}
        </h3>

        {/* Challenge Summary (1-2 lines) */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
          {story.challenges.summary}
        </p>

        {/* Hero Metric — prominent display */}
        <div className="text-center py-4 mb-4 rounded-xl bg-background border border-border">
          <div className="text-3xl md:text-4xl font-bold text-[#00B34A]">
            {heroMetricParsed.isAnimatable ? (
              <>
                {heroMetricParsed.prefix}
                <AnimatedCounter
                  value={heroMetricParsed.numeric}
                  decimals={heroMetricParsed.decimals}
                  duration={2000}
                />
                {heroMetricParsed.suffix}
              </>
            ) : (
              story.heroMetric.value
            )}
          </div>
          <div className="text-sm font-medium text-foreground mt-1">
            {story.heroMetric.label}
          </div>
        </div>

        {/* 3 Additional Metrics in a row */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {additionalMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="text-center p-2.5 rounded-lg bg-background/60 border border-border/50"
            >
              <div className="text-base font-bold text-[#00A3E0]">
                {metric.value}
              </div>
              <div className="text-[10px] leading-tight text-muted-foreground mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* "Read Full Story" CTA button */}
        <Button
          variant="ghost"
          className="w-full justify-between rounded-full text-muted-foreground hover:text-foreground hover:bg-muted border border-border group/btn"
          onClick={onSelect}
        >
          <span className="text-sm font-medium">Read Full Story</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main Section Export
// ---------------------------------------------------------------------------

export default function SuccessStoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(
    null
  );

  return (
    <section
      id="success"
      className="py-24 md:py-40 bg-background"
      ref={ref}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00B34A] bg-[#00B34A]/10 rounded-full border border-[#00B34A]/20">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations. Real results. Names changed to protect the
            competitive advantage.
          </p>
        </motion.div>

        {/* 2-column Story Card Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {successStories.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              index={index}
              isInView={isInView}
              onSelect={() => setSelectedStory(story)}
            />
          ))}
        </div>

        {/* Story Detail Modal with AnimatePresence */}
        <AnimatePresence>
          <StoryDetailModal
            story={selectedStory}
            open={!!selectedStory}
            onClose={() => setSelectedStory(null)}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
