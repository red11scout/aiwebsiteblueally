/**
 * Industry Report Page
 * Shows a natively rendered AI assessment report + educational content + sign-up CTA.
 * Route: /industries/:slug
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import {
  ArrowLeft, CheckCircle2, XCircle,
  Users, Layers, Clock, Handshake,
  Zap, HardHat, Factory, ShoppingCart, Truck, Monitor,
  Landmark, Building2, Briefcase, GraduationCap, Stethoscope,
  Film, Globe, Shield, Target, AlertTriangle, Send,
} from "lucide-react";
import { getIndustryBySlug } from "@/data/industries";
import { getReportBySlug } from "@/data/reports";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReportPage from "@/components/report/ReportPage";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, HardHat, Factory, ShoppingCart, Truck, Monitor,
  Landmark, Building2, Briefcase, GraduationCap, Stethoscope,
  Film, Globe, Shield,
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
  const report = getReportBySlug(params.slug || "");

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Industry Not Found</h1>
            <Link href="/#industries" className="text-[#00A3E0] hover:underline">
              View all industries
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
        <section className="pt-32 pb-8 md:pt-40 md:pb-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Link href="/#industries" className="inline-flex items-center gap-2 text-sm text-[#00A3E0] hover:text-[#00A3E0]/80 transition-colors mb-6">
                <ArrowLeft className="h-4 w-4" />
                Industries
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

              {report ? (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A real-world AI Use Case Workshop assessment for the {industry.name.toLowerCase()} sector.
                  Validated ROI, prioritized use cases, and an implementation roadmap built using
                  BlueAlly's proven 7-Step Methodology.
                </p>
              ) : (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  See how BlueAlly's AI methodology transforms {industry.name.toLowerCase()} organizations.
                  A detailed assessment for this sector is coming soon.
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Report Content or Coming Soon */}
        {report ? (
          <ReportPage report={report} industryName={industry.name} />
        ) : (
          <ComingSoon industry={industry} IconComponent={IconComponent} />
        )}

        {/* Why AI Fails Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
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
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="glass-card rounded-xl p-5 text-center"
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
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
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * index }}
                  className="flex items-center gap-4 glass-card rounded-xl p-4 hover:border-[#00A3E0]/20 transition-colors"
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
      </main>

      <Footer />
    </div>
  );
}

/** Coming Soon state for industries without report data */
function ComingSoon({
  industry,
  IconComponent,
}: {
  industry: { name: string; slug: string; painPoints: string[]; emailHook: string };
  IconComponent: React.ComponentType<{ className?: string }>;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              The Challenge in {industry.name}
            </h2>
            <p className="text-muted-foreground mb-8">
              {industry.emailHook}
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {industry.painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-xl p-5"
                >
                  <div className="p-2 rounded-lg bg-[#F59E0B]/10 w-fit mb-3">
                    <AlertTriangle className="h-4 w-4 text-[#F59E0B]" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coming Soon Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center glass-card rounded-2xl p-8 md:p-12"
          >
            <div className="p-4 rounded-xl bg-[#00A3E0]/10 w-fit mx-auto mb-6">
              <IconComponent className="h-10 w-10 text-[#00A3E0]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Sample Assessment Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              We're building a detailed AI Use Case Workshop assessment for the {industry.name.toLowerCase()} sector.
              In the meantime, get a customized assessment for your organization.
            </p>

            {/* Inline CTA Form */}
            <ComingSoonForm industrySlug={industry.slug} industryName={industry.name} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComingSoonForm({ industrySlug, industryName }: { industrySlug: string; industryName: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: "Inquiry",
          name: "Industry Interest",
          email: email.trim(),
          industry: industrySlug,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 text-[#00B34A]">
        <CheckCircle2 className="h-5 w-5" />
        <span>We'll notify you when the {industryName} assessment is ready.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="your@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-6 py-3 bg-[#00A3E0] text-white rounded-lg font-medium hover:bg-[#0090C8] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === "submitting" ? "Sending..." : (
          <>Notify Me <Send className="h-4 w-4" /></>
        )}
      </button>
    </form>
  );
}
