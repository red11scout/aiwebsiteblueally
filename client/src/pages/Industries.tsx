/**
 * Industries Grid Page
 * Shows 14 clickable industry cards with icons.
 * Data-driven from industries.ts config — add/remove is a single array edit.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Zap, PlugZap, HardHat, Factory, ShoppingCart, Truck, Monitor,
  Landmark, Building2, Briefcase, GraduationCap, Stethoscope,
  UtensilsCrossed, Shield, ArrowLeft, ArrowRight, ExternalLink,
} from "lucide-react";
import { industries } from "@/data/industries";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, PlugZap, HardHat, Factory, ShoppingCart, Truck, Monitor,
  Landmark, Building2, Briefcase, GraduationCap, Stethoscope,
  UtensilsCrossed, Shield,
};

export default function Industries() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Link href="/">
                <a className="inline-flex items-center gap-2 text-sm text-[#00A3E0] hover:text-[#00A3E0]/80 transition-colors mb-6">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </a>
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                AI Insights by{" "}
                <span className="text-[#00A3E0]">Industry</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                See how BlueAlly's AI Use Case Workshop transforms real organizations.
                Select your industry to explore a detailed assessment with validated ROI,
                prioritized use cases, and an implementation roadmap.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="pb-24 md:pb-40">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {industries.map((industry, index) => {
                const IconComponent = iconMap[industry.icon] || Briefcase;
                const hasReport = !!industry.reportUrl;

                return (
                  <motion.div
                    key={industry.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    {hasReport ? (
                      <Link href={`/industries/${industry.slug}`}>
                        <a className="block group">
                          <IndustryCard
                            icon={IconComponent}
                            name={industry.name}
                            description={industry.description}
                            hasReport={true}
                          />
                        </a>
                      </Link>
                    ) : (
                      <div className="relative">
                        <IndustryCard
                          icon={IconComponent}
                          name={industry.name}
                          description={industry.description}
                          hasReport={false}
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-4">
                Don't see your industry? We customize assessments for any sector.
              </p>
              <Link href="/#cta">
                <a className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A3E0] text-white rounded-full font-medium hover:bg-[#00A3E0]/90 transition-colors">
                  Request a Custom Assessment
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function IndustryCard({
  icon: Icon,
  name,
  description,
  hasReport,
}: {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  hasReport: boolean;
}) {
  return (
    <div
      className={`
        relative rounded-xl p-6 border transition-all duration-300 h-full
        ${hasReport
          ? "bg-white/[0.03] border-white/[0.06] hover:border-[#00A3E0]/40 hover:bg-[#00A3E0]/5 cursor-pointer group"
          : "bg-white/[0.02] border-white/[0.04] opacity-60"
        }
      `}
    >
      <div
        className={`
          p-3 rounded-lg w-fit mb-4 transition-colors
          ${hasReport ? "bg-[#00A3E0]/10 group-hover:bg-[#00A3E0]/20" : "bg-white/5"}
        `}
      >
        <Icon className={`h-6 w-6 ${hasReport ? "text-[#00A3E0]" : "text-white/30"}`} />
      </div>

      <h3 className={`font-semibold text-lg mb-2 ${hasReport ? "text-foreground" : "text-white/40"}`}>
        {name}
      </h3>

      <p className={`text-sm leading-relaxed ${hasReport ? "text-muted-foreground" : "text-white/20"}`}>
        {description}
      </p>

      {hasReport ? (
        <div className="mt-4 flex items-center gap-1 text-sm text-[#00A3E0] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          View Assessment <ExternalLink className="h-3.5 w-3.5" />
        </div>
      ) : (
        <div className="mt-4 text-xs text-white/20 font-medium">
          Coming Soon
        </div>
      )}
    </div>
  );
}
