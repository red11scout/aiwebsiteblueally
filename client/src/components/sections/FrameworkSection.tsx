/**
 * Framework Section
 * BlueAlly's 8-Part Holistic AI Framework
 * Correct methodology from slides: Foundation/Planning + Execution/Optimization
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Search,
  PenTool,
  ClipboardCheck,
  ShoppingCart,
  Code,
  Rocket,
  Settings,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

const frameworkParts = [
  {
    id: 1,
    icon: GraduationCap,
    title: "AI Education Session",
    timeline: "Week 1",
    phase: "Foundation",
    short: "Build AI literacy and establish strategic foundation",
    activities: [
      "AI Briefing on AI Trends, Build Patterns, Platforms",
      "Readiness Framework, Risks, and Governance Structures",
      "Use Case Categories and Value Map Overview",
    ],
    deliverables: ["AI Strategy Brief", "Success Metrics Framework"],
    color: "#00A3E0",
  },
  {
    id: 2,
    icon: Search,
    title: "Use Case Discovery & Prioritization",
    timeline: "Week 2-4",
    phase: "Foundation",
    short: "Identify and rank high-impact AI opportunities",
    activities: [
      "Use Case Workshop for Discovery, Ranking, and ROI exercise",
      "AI Readiness Framework assessment",
    ],
    deliverables: [
      "Prioritized use case portfolio and Business Value Map",
      "Resource requirement analysis based on AI patterns",
      "Platform Choice recommendations",
    ],
    color: "#0080B3",
  },
  {
    id: 3,
    icon: PenTool,
    title: "Design and Scope AI Applications",
    timeline: "Week 5-6",
    phase: "Foundation",
    short: "Architect solutions and define implementation scope",
    activities: [
      "Solution architecture design",
      "Integration pattern selection",
    ],
    deliverables: [
      "Technical architecture documentation",
      "Development scope statement",
    ],
    color: "#00B34A",
  },
  {
    id: 4,
    icon: ClipboardCheck,
    title: "Technology, Data & Skills Assessment",
    timeline: "Week 7-8",
    phase: "Foundation",
    short: "Evaluate readiness across infrastructure and talent",
    activities: [
      "Data quality and availability audit",
      "Security posture analysis",
    ],
    deliverables: [
      "Infrastructure, Data, and Security readiness report",
      "Skills development plan",
    ],
    color: "#00B34A",
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: "Technology Procurement",
    timeline: "Week 7-8",
    phase: "Execution",
    short: "Select vendors and establish platform agreements",
    activities: [
      "Vendor selection and contracting",
      "Platform licensing and deployment",
      "Service level agreement establishment",
      "Implementation timeline finalization",
    ],
    deliverables: [
      "Vendor contracts and SLAs",
      "Platform deployment plan",
    ],
    color: "#00A3E0",
  },
  {
    id: 6,
    icon: Code,
    title: "Application Development",
    timeline: "Week 10-16",
    phase: "Execution",
    short: "Build, test, and refine AI applications",
    activities: [
      "Pilot application development",
      "Iterative testing and refinement",
      "Integration development and testing",
      "User acceptance testing",
    ],
    deliverables: [
      "Working AI application",
      "Integration documentation",
      "UAT sign-off",
    ],
    color: "#0080B3",
  },
  {
    id: 7,
    icon: Rocket,
    title: "Application Delivery & Testing",
    timeline: "Week 17-20",
    phase: "Execution",
    short: "Deploy to production and enable user adoption",
    activities: [
      "Production deployment",
      "User training program delivery",
      "Change management execution",
      "Performance baseline establishment",
    ],
    deliverables: [
      "Production-ready application",
      "Training materials and completion records",
      "Performance baselines",
    ],
    color: "#00B34A",
  },
  {
    id: 8,
    icon: Settings,
    title: "Application Management",
    timeline: "Ongoing",
    phase: "Optimization",
    short: "Monitor, enhance, and measure long-term value",
    activities: [
      "Performance monitoring and optimization",
      "Feature enhancement development",
      "User feedback integration",
      "ROI measurement and reporting",
    ],
    deliverables: [
      "Performance reports",
      "Enhancement roadmap",
      "ROI documentation",
    ],
    color: "#00B34A",
  },
];

export default function FrameworkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="framework" className="py-24 md:py-40 bg-background" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/10 rounded-full">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            The 8-Part Framework
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building the Strategic and Technical Groundwork for AI Success. 
            A proven methodology refined through hundreds of enterprise implementations.
          </p>
        </motion.div>

        {/* Phase Headers */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#00A3E0]/10 rounded-xl p-4 border border-[#00A3E0]/20"
          >
            <h3 className="text-lg font-medium text-[#00A3E0] mb-1">
              Foundation & Planning Stages
            </h3>
            <p className="text-sm text-muted-foreground">
              Weeks 1-8: Strategy, Discovery, Design, Assessment
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#00B34A]/10 rounded-xl p-4 border border-[#00B34A]/20"
          >
            <h3 className="text-lg font-medium text-[#00B34A] mb-1">
              Execution & Optimization Stages
            </h3>
            <p className="text-sm text-muted-foreground">
              Weeks 7-20+: Procurement, Development, Delivery, Management
            </p>
          </motion.div>
        </div>

        {/* Framework Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {frameworkParts.map((part, index) => (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <button
                onClick={() => setActiveId(activeId === part.id ? null : part.id)}
                className={cn(
                  "w-full text-left bg-white/[0.03] rounded-xl p-5 border transition-all duration-300",
                  activeId === part.id
                    ? "border-[#00A3E0] shadow-lg"
                    : "border-white/[0.06] hover:border-white/[0.12]"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl shrink-0"
                    style={{ backgroundColor: `${part.color}20` }}
                  >
                    <part.icon
                      className="h-6 w-6"
                      style={{ color: part.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span 
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ 
                          backgroundColor: `${part.color}20`,
                          color: part.color 
                        }}
                      >
                        {String(part.id).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {part.timeline}
                      </div>
                    </div>
                    <h4 className="font-medium text-foreground mb-1">
                      {part.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {part.short}
                    </p>
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform shrink-0 mt-1",
                      activeId === part.id && "rotate-90"
                    )}
                  />
                </div>

                {/* Expanded Details */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeId === part.id ? "auto" : 0,
                    opacity: activeId === part.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-4">
                    <div>
                      <h5 className="text-xs font-medium text-[#00A3E0] uppercase tracking-wide mb-2">
                        Key Activities
                      </h5>
                      <ul className="space-y-1">
                        {part.activities.map((activity, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-[#00B34A] mt-1">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-medium text-[#00B34A] uppercase tracking-wide mb-2">
                        Deliverables
                      </h5>
                      <ul className="space-y-1">
                        {part.deliverables.map((deliverable, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-[#00A3E0] mt-1">✓</span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Single-Vendor Advantage Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-[#00A3E0]/10 to-[#00B34A]/10 rounded-2xl p-6 md:p-8 border border-[#00A3E0]/20"
        >
          <h3 className="text-xl font-medium text-foreground mb-3">
            Single-Vendor Advantage
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Organizations utilizing a single-vendor approach report <strong className="text-foreground">35% fewer critical issues</strong> during 
            implementation compared to those with multi-vendor environments and achieve production deployment 
            <strong className="text-foreground"> up to 40% faster</strong> due to streamlined integration and unified support.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-background/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#00A3E0]">35%</div>
              <div className="text-sm text-muted-foreground">Fewer critical issues</div>
            </div>
            <div className="bg-background/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#00B34A]">70%+</div>
              <div className="text-sm text-muted-foreground">User adoption rates</div>
            </div>
            <div className="bg-background/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#00A3E0]">20-30%</div>
              <div className="text-sm text-muted-foreground">Process efficiency gains</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
