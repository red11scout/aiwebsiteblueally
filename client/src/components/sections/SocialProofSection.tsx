/**
 * Social Proof Section
 * CrewAI-inspired: clean logo marquee strip, minimal stats with dividers
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
        className="opacity-30 hover:opacity-70 transition-opacity duration-300 text-foreground"
        aria-label={name}
      >
        <text
          x="80"
          y="26"
          textAnchor="middle"
          fontFamily="'DM Sans', system-ui, sans-serif"
          fontWeight="500"
          fontSize={name.length > 10 ? "14" : "18"}
          fill="currentColor"
          letterSpacing="0.08em"
        >
          {name}
        </text>
      </svg>
    </div>
  );
}

export default function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 md:py-20 border-y border-border">
      <div className="container">
        {/* Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden mb-12 md:mb-16"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex animate-marquee">
            {partners.map((name) => (
              <PartnerLogo key={`a-${name}`} name={name} />
            ))}
            {partners.map((name) => (
              <PartnerLogo key={`b-${name}`} name={name} />
            ))}
          </div>
        </motion.div>

        {/* Stats with dividers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:divide-x md:divide-border max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-10">
              <div className="text-3xl md:text-4xl font-light text-foreground mb-1 tracking-tight">
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee keyframes */}
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
