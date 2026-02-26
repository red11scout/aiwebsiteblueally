/**
 * Industry Report Page
 * Shows an embedded industry assessment report + educational content + sign-up CTA.
 * Route: /industries/:slug
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import {
  ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, XCircle,
  AlertTriangle, Target, Users, Layers, Clock, Handshake,
  Zap, PlugZap, HardHat, Factory, ShoppingCart, Truck, Monitor,
  Landmark, Building2, Briefcase, GraduationCap, Stethoscope,
  UtensilsCrossed, Shield, Send,
} from "lucide-react";
import { getIndustryBySlug } from "@/data/industries";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, PlugZap, HardHat, Factory, ShoppingCart, Truck, Monitor,
  Landmark, Building2, Briefcase, GraduationCap, Stethoscope,
  UtensilsCrossed, Shield,
};

const pitfalls = [
  {
    icon: XCircle,
    title: "No Clear ROI",
    stat: "74%",
    statLabel: "show no tangible value",
    description: "Pursuing AI without validated financial models leads to funding cuts when value isn't proven.",
    color: "#EF4444",
  },
  {
    icon: Users,
    title: "No Executive Sponsorship",
    stat: "70%",
    statLabel: "of challenges are people/process",
    description: "Without C-suite alignment, AI remains an isolated IT experiment rather than a business strategy.",
    color: "#F59E0B",
  },
  {
    icon: Layers,
    title: "Too Many Use Cases",
    stat: "2x",
    statLabel: "more projects at lagging companies",
    description: "Spreading resources thin across dozens of pilots results in superficial implementations.",
    color: "#8B5CF6",
  },
  {
    icon: Clock,
    title: "Pilot Purgatory",
    stat: "26%",
    statLabel: "ever scale to production",
    description: "Generic tools fail to integrate with enterprise workflows and data systems.",
    color: "#EC4899",
  },
  {
    icon: Handshake,
    title: "Going Solo",
    stat: "67%",
    statLabel: "of internal builds fail",
    description: "Building without external partners doubles the failure rate due to lack of expertise.",
    color: "#06B6D4",
  },
];

const frameworkSteps = [
  { num: 1, title: "Anchor to Strategy", description: "Define business drivers and OKRs" },
  { num: 2, title: "Inventory Functions", description: "Identify operational friction" },
  { num: 3, title: "Map Pain Points", description: "Catalog delays, errors, and rework" },
  { num: 4, title: "Match to AI Primitives", description: "Assign the right AI capability" },
  { num: 5, title: "Define KPIs", description: "Set baselines and targets" },
  { num: 6, title: "Quantify Impact", description: "Calculate financial value across 4 dimensions" },
  { num: 7, title: "Score & Rank", description: "Prioritize for implementation" },
];

export default function IndustryReport() {
  const params = useParams<{ slug: string }>();
  const industry = getIndustryBySlug(params.slug || "");

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Industry Not Found</h1>
            <Link href="/industries">
              <a className="text-[#00A3E0] hover:underline">View all industries</a>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = iconMap[industry.icon] || Briefcase;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Link href="/industries">
                <a className="inline-flex items-center gap-2 text-sm text-[#00A3E0] hover:text-[#00A3E0]/80 transition-colors mb-6">
                  <ArrowLeft className="h-4 w-4" />
                  All Industries
                </a>
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#00A3E0]/10">
                  <IconComponent className="h-8 w-8 text-[#00A3E0]" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    AI in {industry.name}
                  </h1>
                  <p className="text-muted-foreground mt-1">{industry.description}</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore a real-world AI Use Case Workshop assessment for the {industry.name.toLowerCase()} sector.
                See validated ROI, prioritized use cases, and an implementation roadmap built using
                BlueAlly's proven 7-Step Methodology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Embedded Report */}
        <section className="pb-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.02]">
                <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                  <span className="text-sm text-muted-foreground">
                    Live Assessment Report — {industry.name}
                  </span>
                  <a
                    href={industry.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#00A3E0] hover:text-[#00A3E0]/80 transition-colors"
                  >
                    Open Full Report <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <iframe
                  src={industry.reportUrl}
                  title={`${industry.name} AI Assessment Report`}
                  className="w-full border-0"
                  style={{ height: "800px" }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why AI Fails Section */}
        <section className="py-16 md:py-24 bg-white/[0.02]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-red-400 bg-red-400/10 rounded-full">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                95% of AI Initiatives Fail to Scale
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                MIT's research identifies 5 critical failure modes that trap organizations
                in "Pilot Purgatory." BlueAlly's methodology addresses each one.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {pitfalls.map((pitfall, index) => (
                <motion.div
                  key={pitfall.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.06] text-center"
                >
                  <div
                    className="p-2 rounded-lg w-fit mx-auto mb-3"
                    style={{ backgroundColor: `${pitfall.color}15` }}
                  >
                    <pitfall.icon className="h-5 w-5" style={{ color: pitfall.color }} />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{pitfall.stat}</div>
                  <div className="text-xs text-muted-foreground mb-2">{pitfall.statLabel}</div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{pitfall.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pitfall.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BlueAlly's 7-Step Solution */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00B34A] bg-[#00B34A]/10 rounded-full">
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                BlueAlly's 7-Step Framework
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic methodology that transforms business challenges into measurable AI value —
                customized for {industry.name.toLowerCase()}.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-3">
              {frameworkSteps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 * index }}
                  className="flex items-center gap-4 bg-white/[0.03] rounded-xl p-4 border border-white/[0.06] hover:border-[#00A3E0]/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00A3E0]/10 flex items-center justify-center">
                    <span className="text-[#00A3E0] font-bold text-sm">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-[#00B34A]/50 flex-shrink-0 ml-auto" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sign-Up CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#00A3E0]/5 to-transparent">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="p-3 rounded-xl bg-[#00A3E0]/10 w-fit mx-auto mb-6">
                <Target className="h-8 w-8 text-[#00A3E0]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get Your Customized Assessment
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The report above is a sample. We'll generate a personalized AI assessment
                for <em>your</em> organization — with validated ROI, prioritized use cases,
                and a roadmap tailored to your strategic goals.
              </p>

              <SignUpForm industrySlug={industry.slug} industryName={industry.name} />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SignUpForm({ industrySlug, industryName }: { industrySlug: string; industryName: string }) {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    title: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, industry: industrySlug }),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#00B34A]/10 border border-[#00B34A]/20 rounded-xl p-8"
      >
        <CheckCircle2 className="h-12 w-12 text-[#00B34A] mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">You're In!</h3>
        <p className="text-muted-foreground">
          We're generating your customized {industryName} AI assessment now.
          You'll receive an email with access to your personalized BlueAlly AI Hub within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.08]">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-1.5">
              Company Name *
            </label>
            <input
              id="companyName"
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-foreground placeholder:text-white/30 focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors"
              placeholder="Acme Corporation"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
              Your Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-foreground placeholder:text-white/30 focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              Work Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-foreground placeholder:text-white/30 focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors"
              placeholder="jane@company.com"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-foreground mb-1.5">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-foreground placeholder:text-white/30 focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors"
              placeholder="VP of Technology"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#00A3E0] text-white rounded-lg font-medium hover:bg-[#00A3E0]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            "Generating Your Assessment..."
          ) : (
            <>
              Get My Customized Assessment
              <Send className="h-4 w-4" />
            </>
          )}
        </button>

        {status === "error" && (
          <div className="mt-3 flex items-center gap-2 text-sm text-red-400">
            <AlertTriangle className="h-4 w-4" />
            Something went wrong. Please try again.
          </div>
        )}
      </div>

      <p className="text-xs text-center text-muted-foreground">
        By submitting, you'll receive access to a personalized AI Hub with your assessment,
        implementation roadmap, and a dedicated BlueAlly consultant.
      </p>
    </form>
  );
}
