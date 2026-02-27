/**
 * Opportunity Section
 * Shows the massive opportunity in AI adoption
 * Transition from stakes to solution
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, TrendingUp, Lightbulb, Award } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const opportunities = [
  {
    icon: TrendingUp,
    value: 40,
    suffix: "%",
    label: "Productivity Increase",
    description: "Average productivity gains from well-implemented AI solutions",
  },
  {
    icon: Rocket,
    value: 3,
    suffix: "x",
    label: "Faster Time to Market",
    description: "Accelerated product development with AI-powered workflows",
  },
  {
    icon: Lightbulb,
    value: 60,
    suffix: "%",
    label: "Cost Reduction",
    description: "Operational cost savings through intelligent automation",
  },
  {
    icon: Award,
    value: 25,
    suffix: "%",
    label: "Revenue Growth",
    description: "New revenue streams from AI-enabled products and services",
  },
];

export default function OpportunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 relative overflow-hidden" ref={ref}>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00B34A] bg-[#00B34A]/10 rounded-full border border-[#00B34A]/20">
            The Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            The Upside Is Enormous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Done right, AI transforms everything. Operations. Customer experience. 
            Revenue. The question is not if, but how.
          </p>
        </motion.div>

        {/* Opportunity Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center group hover:border-border transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-[#00B34A]/20 group-hover:bg-[#00B34A]/30 transition-colors">
                  <opp.icon className="h-6 w-6 text-[#00B34A]" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-light text-foreground mb-2 tracking-tight">
                <AnimatedCounter value={opp.value} />
                {opp.suffix}
              </div>
              <h4 className="text-lg font-medium text-foreground mb-2">
                {opp.label}
              </h4>
              <p className="text-sm text-muted-foreground">
                {opp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The difference between success and failure is not luck.
            It is <span className="text-[#00A3E0] font-semibold">method</span>.
            It is <span className="text-[#00B34A] font-semibold">experience</span>.
            It is <span className="text-foreground font-semibold">BlueAlly</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
