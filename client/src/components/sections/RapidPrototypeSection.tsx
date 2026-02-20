/**
 * Rapid Prototype Section
 * Fun, exciting section highlighting BlueAlly's rapid prototyping capability
 * Interactive and visually engaging
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Zap,
  Clock,
  Rocket,
  Code,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";

const prototypeSteps = [
  { icon: Sparkles, label: "Idea", time: "Day 1" },
  { icon: Code, label: "Build", time: "Day 2-5" },
  { icon: Zap, label: "Test", time: "Day 6-8" },
  { icon: Rocket, label: "Demo", time: "Day 10" },
];

export default function RapidPrototypeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-animate through steps when in view
  useEffect(() => {
    if (!isInView) return;
    
    setIsAnimating(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00B34A] bg-[#00B34A]/10 rounded-full">
              <Zap className="inline h-4 w-4 mr-1" />
              Rapid Prototyping
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              From Idea to
              <br />
              <span className="text-gradient">Working Prototype</span>
              <br />
              in 10 Days
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              See your AI vision come to life. Fast. We build working prototypes 
              that demonstrate real value—before you commit to full implementation. 
              No months of planning. No endless meetings. Just results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-3xl font-bold text-[#00A3E0]">
                  <AnimatedCounter value={10} />
                </div>
                <div className="text-sm text-muted-foreground">Days</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-3xl font-bold text-[#00B34A]">
                  <AnimatedCounter value={100} />+
                </div>
                <div className="text-sm text-muted-foreground">Prototypes Built</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-3xl font-bold text-[#00A3E0]">
                  <AnimatedCounter value={85} />%
                </div>
                <div className="text-sm text-muted-foreground">Go to Production</div>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => scrollToSection("#cta")}
              className="bg-[#00B34A] hover:bg-[#009933] text-white"
            >
              Start Your Prototype
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Right: Interactive Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 opacity-30 rounded-3xl overflow-hidden">
              <img
                src="/images/rapid-prototype.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Prototype Timeline Card */}
            <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 border border-border shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-[#00B34A]/20">
                  <Rocket className="h-5 w-5 text-[#00B34A]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Prototype Timeline
                </h3>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-4">
                {prototypeSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0.5 }}
                    animate={{
                      opacity: activeStep >= index ? 1 : 0.5,
                      scale: activeStep === index ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                      activeStep >= index
                        ? "bg-[#00B34A]/10 border border-[#00B34A]/30"
                        : "bg-muted/30"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        activeStep >= index
                          ? "bg-[#00B34A]"
                          : "bg-muted"
                      }`}
                    >
                      <step.icon
                        className={`h-5 w-5 transition-colors ${
                          activeStep >= index
                            ? "text-white"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">
                        {step.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {step.time}
                      </div>
                    </div>
                    {activeStep >= index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <CheckCircle className="h-5 w-5 text-[#00B34A]" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00A3E0] to-[#00B34A]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>Day 1</span>
                <span>Day 10</span>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 p-4 bg-[#00A3E0] rounded-2xl shadow-lg"
            >
              <Zap className="h-6 w-6 text-white" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 p-4 bg-[#00B34A] rounded-2xl shadow-lg"
            >
              <Sparkles className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
