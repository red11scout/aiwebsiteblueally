/**
 * Social Proof Section
 * Partner logos in infinite CSS marquee animation + animated stat counters.
 * Uses inline SVG text logos styled in DM Sans bold, grayscale by default, white on hover.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const partners = [
  "Cisco",
  "HPE",
  "Microsoft",
  "AWS",
  "VMware",
  "Dell Technologies",
];

const stats = [
  { value: 2000, suffix: "+", label: "Certifications" },
  { value: 200, suffix: "+", label: "Engineers" },
  { value: 25, suffix: "+", label: "Years of Experience" },
];

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-8 md:px-12 shrink-0">
      <svg
        width="160"
        height="40"
        viewBox="0 0 160 40"
        className="opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
        aria-label={name}
      >
        <text
          x="80"
          y="26"
          textAnchor="middle"
          fontFamily="'DM Sans', system-ui, sans-serif"
          fontWeight="700"
          fontSize={name.length > 10 ? "14" : "18"}
          fill="#F5F5F5"
          letterSpacing="0.05em"
        >
          {name}
        </text>
      </svg>
    </div>
  );
}

export default function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#0A1628]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/10 rounded-full border border-[#00A3E0]/20">
            Enterprise Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        {/* Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden mb-16"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A1628] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A1628] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex animate-marquee">
            {/* First set */}
            {partners.map((name) => (
              <PartnerLogo key={`a-${name}`} name={name} />
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((name) => (
              <PartnerLogo key={`b-${name}`} name={name} />
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee keyframes (scoped via style tag) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
