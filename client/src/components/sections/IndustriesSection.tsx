/**
 * Industries Section
 * Corporate, Public, Government categories with subcategories
 * Interactive tab-based navigation
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
  Plane,
  Zap,
  Scale,
  Film,
  Wifi,
  Heart,
  Shield,
  Globe,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const industries = {
  corporate: {
    label: "Corporate",
    icon: Building2,
    description: "Enterprise solutions for private sector organizations",
    subcategories: [
      { icon: Stethoscope, name: "Healthcare", description: "Hospitals, health systems, biotech", slug: "healthcare" },
      { icon: Briefcase, name: "Financial Services", description: "Banks, insurance, investment firms", slug: "finance-insurance" },
      { icon: Factory, name: "Manufacturing", description: "Industrial, automotive, aerospace", slug: "manufacturing" },
      { icon: ShoppingCart, name: "Retail", description: "E-commerce, brick-and-mortar, CPG", slug: "retail" },
      { icon: Wifi, name: "Technology", description: "Software, hardware, telecom", slug: "information" },
      { icon: Zap, name: "Energy & Utilities", description: "Oil & gas, power, renewables", slug: "energy" },
      { icon: Film, name: "Media & Entertainment", description: "Broadcasting, streaming, gaming", slug: "" },
      { icon: Scale, name: "Legal", description: "Law firms, legal services", slug: "" },
    ],
  },
  public: {
    label: "Public Sector",
    icon: GraduationCap,
    description: "Solutions for education and non-profit organizations",
    subcategories: [
      { icon: GraduationCap, name: "Higher Education", description: "Universities, colleges, research institutions", slug: "education" },
      { icon: GraduationCap, name: "K-12 Education", description: "School districts, educational technology", slug: "education" },
      { icon: Heart, name: "Non-Profit", description: "Foundations, NGOs, charitable organizations", slug: "" },
      { icon: Stethoscope, name: "Healthcare Systems", description: "Public hospitals, health departments", slug: "healthcare" },
    ],
  },
  government: {
    label: "Government",
    icon: Landmark,
    description: "Secure solutions for government agencies",
    subcategories: [
      { icon: Landmark, name: "Federal Government", description: "Federal agencies, departments", slug: "public-administration" },
      { icon: Globe, name: "State & Local", description: "State agencies, municipalities", slug: "public-administration" },
      { icon: Shield, name: "Defense", description: "DoD, military, intelligence", slug: "" },
      { icon: Plane, name: "Aerospace", description: "NASA, FAA, space programs", slug: "" },
    ],
  },
};

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
          <Link href="/industries" className="inline-flex items-center gap-2 mt-4 text-sm text-[#00A3E0] hover:text-[#00A3E0]/80 transition-colors font-medium">
            View All Industry Assessments <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8 bg-muted/50">
              {Object.entries(industries).map(([key, industry]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center gap-2 data-[state=active]:bg-[#00A3E0] data-[state=active]:text-white"
                >
                  <industry.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{industry.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(industries).map(([key, industry]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl text-foreground mb-2">
                      {industry.label}
                    </h3>
                    <p className="text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>

                  {/* Subcategory Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industry.subcategories.map((sub, index) => (
                      <Link
                        key={sub.name}
                        href={sub.slug ? `/industries/${sub.slug}` : "/industries"}
                        className="block"
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.06] hover:border-[#00A3E0]/40 transition-all duration-300 group cursor-pointer h-full"
                        >
                          <div className="p-2 rounded-lg bg-[#00A3E0]/10 w-fit mb-3 group-hover:bg-[#00A3E0]/20 transition-colors">
                            <sub.icon className="h-5 w-5 text-[#00A3E0]" />
                          </div>
                          <h4 className="font-medium text-foreground mb-1 group-hover:text-[#00A3E0] transition-colors">
                            {sub.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {sub.description}
                          </p>
                          <span className="inline-flex items-center gap-1 mt-3 text-xs text-[#00A3E0] opacity-0 group-hover:opacity-100 transition-opacity">
                            View Assessment <ArrowRight className="h-3 w-3" />
                          </span>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
