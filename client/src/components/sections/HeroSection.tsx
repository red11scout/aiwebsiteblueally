/**
 * Hero Section
 * CrewAI-inspired: massive lightweight typography, pill CTAs, clean layout
 * Particle canvas background (kept), no image overlay
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { value: 87, suffix: "%", label: "AI Projects Fail", icon: TrendingUp },
  { value: 3, suffix: "T", label: "AI Market by 2030", icon: Zap, prefix: "$" },
  { value: 40, suffix: "%", label: "Productivity Gains", icon: Shield },
];

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050A14] to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 mb-8 text-sm text-[#00A3E0] bg-[#00A3E0]/[0.08] rounded-full border border-[#00A3E0]/20">
              Enterprise AI Transformation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-8 tracking-tight"
          >
            AI is not the future.
            <br />
            <span className="text-gradient">It is now.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Most AI initiatives fail. The technology is not the problem.
            The approach is. BlueAlly transforms how enterprises adopt AI—with
            a proven framework that delivers results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection("#cta")}
              className="rounded-full h-12 px-8 bg-[#00A3E0] hover:bg-[#0090C8] text-white text-base gap-2"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("#framework")}
              className="rounded-full h-12 px-8 border-white/20 text-white/70 hover:bg-white/5 hover:text-white text-base"
            >
              Explore Our Framework
            </Button>
          </motion.div>
        </div>

        {/* Stats Strip — clean, minimal dividers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 md:mt-32 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:divide-x md:divide-white/10 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center px-10"
            >
              <div className="text-4xl md:text-5xl font-light text-white mb-2 tracking-tight">
                {stat.prefix}
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-1.5 bg-white/40 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
