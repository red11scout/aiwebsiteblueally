/**
 * Journey Section
 * Interactive AI journey stage selector
 * Users can indicate where they are in their AI journey
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Compass,
  Users,
  Target,
  FlaskConical,
  Rocket,
  TrendingUp,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const journeyStages = [
  {
    id: 1,
    icon: Compass,
    title: "Just Starting",
    description: "Exploring AI possibilities and understanding the landscape",
    help: "We help you build a foundation with education, assessments, and strategic planning.",
    position: 0,
  },
  {
    id: 2,
    icon: Users,
    title: "AI Council Formed",
    description: "Governance structure in place, building organizational alignment",
    help: "We accelerate your council with frameworks, best practices, and facilitated workshops.",
    position: 16.6,
  },
  {
    id: 3,
    icon: Target,
    title: "Use Cases Identified",
    description: "Prioritized opportunities defined, ready to move forward",
    help: "We validate your use cases, refine prioritization, and prepare for implementation.",
    position: 33.3,
  },
  {
    id: 4,
    icon: FlaskConical,
    title: "Pilots in Progress",
    description: "Testing and validation underway with initial projects",
    help: "We accelerate pilots, ensure proper measurement, and prepare for scale.",
    position: 50,
  },
  {
    id: 5,
    icon: Rocket,
    title: "AI Deployed",
    description: "Production applications running and delivering value",
    help: "We optimize performance, enhance capabilities, and identify expansion opportunities.",
    position: 66.6,
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Scaling",
    description: "Expanding AI across the organization",
    help: "We industrialize your AI operations and build enterprise-wide capabilities.",
    position: 83.3,
  },
  {
    id: 7,
    icon: Sparkles,
    title: "Optimizing",
    description: "Continuous improvement and innovation at scale",
    help: "We push the boundaries with advanced techniques and emerging technologies.",
    position: 100,
  },
];

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="journey" className="py-24 md:py-40 bg-background" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/10 rounded-full">
            Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Where Are You Today?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every organization is at a different point. We meet you where you are and take you where you need to go.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-2 bg-muted rounded-full">
              {selectedStage && (
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00A3E0] to-[#00B34A] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${journeyStages.find(s => s.id === selectedStage)?.position}%` }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>

            {/* Stage Markers */}
            <div className="flex justify-between relative">
              {journeyStages.map((stage, index) => (
                <motion.button
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  onClick={() => setSelectedStage(stage.id)}
                  className="flex flex-col items-center group w-28"
                >
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-4",
                      selectedStage === stage.id
                        ? "bg-[#00A3E0] border-[#00A3E0] scale-110"
                        : selectedStage && selectedStage > stage.id
                        ? "bg-[#00B34A] border-[#00B34A]"
                        : "bg-white/[0.03] border-white/[0.06] group-hover:border-white/[0.12]"
                    )}
                  >
                    <stage.icon
                      className={cn(
                        "h-6 w-6 transition-colors",
                        selectedStage === stage.id || (selectedStage && selectedStage > stage.id)
                          ? "text-white"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "mt-3 text-xs font-medium text-center transition-colors",
                      selectedStage === stage.id
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {stage.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Stage Selector */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
            {journeyStages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-xl transition-all",
                  selectedStage === stage.id
                    ? "bg-[#00A3E0] text-white"
                    : "bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12]"
                )}
              >
                <stage.icon className="h-5 w-5" />
                <span className="text-xs font-medium text-center">
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Stage Details */}
          {selectedStage && (
            <motion.div
              key={selectedStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-12 bg-white/[0.03] rounded-2xl p-6 md:p-8 border border-white/[0.06]"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 rounded-xl bg-[#00A3E0]/10 shrink-0">
                  {(() => {
                    const Stage = journeyStages.find(s => s.id === selectedStage);
                    if (Stage) {
                      return <Stage.icon className="h-8 w-8 text-[#00A3E0]" />;
                    }
                    return null;
                  })()}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-foreground mb-2">
                    {journeyStages.find(s => s.id === selectedStage)?.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {journeyStages.find(s => s.id === selectedStage)?.description}
                  </p>
                  <div className="p-4 bg-[#00B34A]/10 rounded-xl border border-[#00B34A]/20">
                    <p className="text-foreground">
                      <span className="font-medium text-[#00B34A]">How we help: </span>
                      {journeyStages.find(s => s.id === selectedStage)?.help}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => scrollToSection("#cta")}
                  className="bg-[#00A3E0] hover:bg-[#0080B3] text-white shrink-0 rounded-full"
                >
                  Let's Talk
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Prompt to Select */}
          {!selectedStage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground">
                Select your current stage to see how BlueAlly can help.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
