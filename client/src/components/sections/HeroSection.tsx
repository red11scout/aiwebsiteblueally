/**
 * Hero Section
 * Command Center aesthetic: Dark navy background with floating metric cards
 * Hemingway style: Direct, impactful copy
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-navy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-ai-network.png"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-transparent to-[#0A1628]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#00B34A] bg-[#00B34A]/10 rounded-full border border-[#00B34A]/20">
              Enterprise AI Transformation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            AI is not the future.
            <br />
            <span className="text-gradient">It is now.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Most AI initiatives fail. The technology is not the problem. 
            The approach is. BlueAlly transforms how enterprises adopt AI—with 
            a proven framework that delivers results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#cta")}
              className="bg-[#00A3E0] hover:bg-[#0080B3] text-white text-lg px-8 py-6"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#framework")}
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Explore Our Framework
            </Button>
          </motion.div>
        </div>

        {/* Floating Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:bg-white/12 transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-lg bg-[#00A3E0]/20">
                  <stat.icon className="h-5 w-5 text-[#00A3E0]" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.prefix}
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
