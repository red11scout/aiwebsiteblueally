/**
 * Differentiator Section
 * How BlueAlly is different - based on GTM slide
 * Brief, high-level positioning
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Handshake,
  Layers,
  Gauge,
  Award,
  Shield,
  Users,
} from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "Full-Stack Capability",
    description: "From strategy to infrastructure to applications. We do it all. No handoffs. No gaps.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description: "We work alongside your teams. We transfer knowledge. We build your capability.",
  },
  {
    icon: Gauge,
    title: "Speed to Value",
    description: "Rapid prototyping. Quick wins. Visible progress in weeks, not months.",
  },
  {
    icon: Shield,
    title: "Enterprise Grade",
    description: "SOC 2, ISO 27001, CMMI certified. Security and compliance built in.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "200+ engineers. 2,000+ certifications. Decades of enterprise experience.",
  },
  {
    icon: Users,
    title: "Industry Expertise",
    description: "Deep knowledge across healthcare, finance, manufacturing, and government.",
  },
];

export default function DifferentiatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 gradient-navy" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/10 rounded-full border border-[#00A3E0]/20">
            Why BlueAlly
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            We Are Different
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Not another consulting firm. Not another vendor. 
            A true partner in your AI transformation.
          </p>
        </motion.div>

        {/* Differentiator Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 group hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-[#00A3E0]/20 w-fit mb-4 group-hover:bg-[#00A3E0]/30 transition-colors">
                <diff.icon className="h-6 w-6 text-[#00A3E0]" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                {diff.title}
              </h3>
              <p className="text-white/40 leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8"
        >
          <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4 text-center">
            Enterprise Certifications
          </h4>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["SOC 1", "SOC 2", "ISO 27001", "ISO 42001", "CMMI", "PCI", "NERC-CIP"].map((cert) => (
              <div
                key={cert}
                className="px-4 py-2 bg-white/5 rounded-lg text-white/40 text-sm font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
