/**
 * Offerings Section
 * AI Service Offerings with interactive cards
 * Education, Workshop, App Dev, Management, Assessments, Pro Services, Hardware/Software
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Users,
  Code,
  Settings,
  ClipboardCheck,
  Briefcase,
  Server,
  ChevronRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const offerings = [
  {
    id: "education",
    icon: GraduationCap,
    title: "AI Education",
    tagline: "Build understanding across your organization",
    description: "Executive briefings, trend analysis, and readiness assessments to align leadership and prepare your organization for AI adoption.",
    features: [
      "Executive AI Briefings",
      "Industry Trend Analysis",
      "Readiness Framework Assessment",
      "Board-level Presentations",
    ],
    color: "#00A3E0",
  },
  {
    id: "workshop",
    icon: Users,
    title: "AI Workshops",
    tagline: "Discover and prioritize use cases",
    description: "Facilitated sessions to identify AI opportunities, prioritize initiatives, and map value across your organization.",
    features: [
      "Use Case Discovery Sessions",
      "Prioritization Frameworks",
      "Value Mapping Exercises",
      "Stakeholder Alignment",
    ],
    color: "#0080B3",
  },
  {
    id: "development",
    icon: Code,
    title: "Application Development",
    tagline: "Build AI-powered solutions",
    description: "End-to-end development of AI applications, from rapid prototypes to production-ready systems.",
    features: [
      "Rapid Prototyping",
      "Custom AI Solutions",
      "Integration Development",
      "Iterative Testing & Refinement",
    ],
    color: "#00B34A",
  },
  {
    id: "management",
    icon: Settings,
    title: "Application Management",
    tagline: "Operate and optimize AI systems",
    description: "Ongoing management, monitoring, and enhancement of deployed AI applications to ensure sustained value.",
    features: [
      "Performance Monitoring",
      "Model Retraining",
      "Feature Enhancement",
      "24/7 Support Options",
    ],
    color: "#00B34A",
  },
  {
    id: "assessments",
    icon: ClipboardCheck,
    title: "AI Assessments",
    tagline: "Evaluate readiness and gaps",
    description: "Comprehensive assessments of your AI readiness across skills, data, infrastructure, governance, and security.",
    features: [
      "Skills Gap Analysis",
      "Data Maturity Assessment",
      "Infrastructure Evaluation",
      "Governance & Security Review",
    ],
    color: "#00A3E0",
  },
  {
    id: "services",
    icon: Briefcase,
    title: "Professional Services",
    tagline: "Expert guidance and implementation",
    description: "Consulting, implementation, and integration services to accelerate your AI initiatives with proven expertise.",
    features: [
      "Strategic Consulting",
      "Implementation Support",
      "System Integration",
      "Change Management",
    ],
    color: "#0080B3",
  },
  {
    id: "hardware",
    icon: Server,
    title: "Hardware & Software",
    tagline: "Enterprise AI infrastructure",
    description: "Procurement and deployment of AI infrastructure, including NVIDIA hardware and enterprise platform licensing.",
    features: [
      "NVIDIA GPU Solutions",
      "Cisco Infrastructure",
      "Platform Licensing",
      "Deployment Services",
    ],
    color: "#00B34A",
  },
];

export default function OfferingsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="offerings" className="py-24 md:py-40 gradient-navy" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/10 rounded-full border border-[#00A3E0]/20">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            AI Offerings
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            A complete portfolio of AI services. From education to implementation to ongoing management.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className={cn(
                "bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300",
                expandedId === offering.id ? "lg:col-span-2" : ""
              )}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="p-3 rounded-xl shrink-0"
                    style={{ backgroundColor: `${offering.color}33` }}
                  >
                    <offering.icon
                      className="h-6 w-6"
                      style={{ color: offering.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-medium text-white mb-1">
                      {offering.title}
                    </h3>
                    <p className="text-sm text-white/40">
                      {offering.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/40 mb-4 leading-relaxed">
                  {offering.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {offering.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <Check
                        className="h-4 w-4 shrink-0"
                        style={{ color: offering.color }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
