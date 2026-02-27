/**
 * Industries Section
 * Corporate, Public, Government categories with data-driven cards.
 * Each card links to /industries/:slug for the report or coming-soon page.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "wouter";
import {
  Building2,
  GraduationCap,
  Landmark,
  Stethoscope,
  Factory,
  ShoppingCart,
  Briefcase,
  Zap,
  Film,
  Monitor,
  Truck,
  HardHat,
  Globe,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { industries, type Industry } from "@/data/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, HardHat, Factory, ShoppingCart, Truck, Monitor,
  Landmark, Building2, Briefcase, GraduationCap, Stethoscope,
  Film, Globe, Shield,
};

const categories = [
  {
    key: "corporate",
    label: "Corporate",
    icon: Building2,
    description: "Enterprise solutions for private sector organizations",
  },
  {
    key: "public",
    label: "Public Sector",
    icon: GraduationCap,
    description: "Solutions for education and non-profit organizations",
  },
  {
    key: "government",
    label: "Government",
    icon: Landmark,
    description: "Secure solutions for government agencies",
  },
] as const;

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("corporate");

  return (
    <section id="industries" className="py-24 md:py-40 bg-background" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/10 rounded-full">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across sectors. We understand your challenges because we have solved them before.
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8 bg-muted/50">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.key}
                  value={cat.key}
                  className="flex items-center gap-2 data-[state=active]:bg-[#00A3E0] data-[state=active]:text-white"
                >
                  <cat.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{cat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => {
              const catIndustries = industries.filter((i) => i.category === cat.key);
              return (
                <TabsContent key={cat.key} value={cat.key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Category Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl text-foreground mb-2">
                        {cat.label}
                      </h3>
                      <p className="text-muted-foreground">
                        {cat.description}
                      </p>
                    </div>

                    {/* Subcategory Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {catIndustries.map((industry, index) => (
                        <IndustryCard key={industry.slug} industry={industry} index={index} />
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const IconComponent = iconMap[industry.icon] || Briefcase;

  return (
    <Link href={`/industries/${industry.slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="bg-surface-subtle rounded-xl p-5 border border-border-subtle hover:border-[#00A3E0]/40 transition-all duration-300 group cursor-pointer h-full"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="p-2 rounded-lg bg-[#00A3E0]/10 w-fit group-hover:bg-[#00A3E0]/20 transition-colors">
            <IconComponent className="h-5 w-5 text-[#00A3E0]" />
          </div>
          {industry.hasReport && (
            <span className="text-[10px] font-medium text-[#00B34A] bg-[#00B34A]/10 px-2 py-0.5 rounded-full">
              Live Report
            </span>
          )}
        </div>
        <h4 className="font-medium text-foreground mb-1 group-hover:text-[#00A3E0] transition-colors">
          {industry.name}
        </h4>
        <p className="text-sm text-muted-foreground">
          {industry.description}
        </p>
        <span className="inline-flex items-center gap-1 mt-3 text-xs text-[#00A3E0] opacity-0 group-hover:opacity-100 transition-opacity">
          View Assessment <ArrowRight className="h-3 w-3" />
        </span>
      </motion.div>
    </Link>
  );
}
