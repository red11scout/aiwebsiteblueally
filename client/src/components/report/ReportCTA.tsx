/**
 * Report CTA / Sign-Up Form
 * Full sign-up form extracted from IndustryReport.tsx.
 * Work email validation (blocks free domains). Pre-selected industry.
 * Success/error states. Submits to /api/signup.
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Send, CheckCircle2, AlertTriangle } from "lucide-react";

interface ReportCTAProps {
  industrySlug: string;
  industryName: string;
}

/** Free email domains to block */
const FREE_DOMAINS = new Set([
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
  "gmx.com",
  "live.com",
  "me.com",
  "msn.com",
]);

function isWorkEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  return !FREE_DOMAINS.has(domain);
}

export default function ReportCTA({ industrySlug, industryName }: ReportCTAProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    title: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleEmailChange = (value: string) => {
    setFormData((prev) => ({ ...prev, email: value }));
    if (emailError && value) {
      // Clear error as user types, re-validate on blur
      setEmailError(null);
    }
  };

  const handleEmailBlur = () => {
    if (formData.email && !isWorkEmail(formData.email)) {
      setEmailError("Please use your work email address.");
    } else {
      setEmailError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate work email
    if (!isWorkEmail(formData.email)) {
      setEmailError("Please use your work email address.");
      return;
    }

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

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div
        className="container"
        style={{
          background: "linear-gradient(180deg, rgba(0, 163, 224, 0.05) 0%, transparent 100%)",
          borderRadius: "1.5rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center py-12 px-4"
        >
          <div className="p-3 rounded-xl bg-[#00A3E0]/10 w-fit mx-auto mb-6">
            <Target className="h-8 w-8 text-[#00A3E0]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Your Customized Assessment
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            This report is a sample. We build a personalized AI assessment for{" "}
            <em>your</em> organization — with validated ROI, prioritized use cases,
            and a roadmap tailored to your goals.
          </p>

          {/* Success state */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-xl border border-[#00B34A]/20 bg-[#00B34A]/5"
            >
              <CheckCircle2 className="h-12 w-12 text-[#00B34A] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">You're In.</h3>
              <p className="text-muted-foreground">
                We're generating your customized {industryName} AI assessment now.
                You'll receive an email with access to your personalized BlueAlly AI Hub within 24 hours.
              </p>
            </motion.div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="glass-card rounded-xl p-6">
                {/* Industry indicator */}
                <div className="mb-5 flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Industry:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] font-medium text-xs">
                    {industryName}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="report-company" className="block text-sm font-medium text-foreground mb-1.5">
                      Company Name *
                    </label>
                    <input
                      id="report-company"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="report-name" className="block text-sm font-medium text-foreground mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="report-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="report-email" className="block text-sm font-medium text-foreground mb-1.5">
                      Work Email *
                    </label>
                    <input
                      id="report-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onBlur={handleEmailBlur}
                      className={`w-full px-4 py-2.5 rounded-lg bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-colors ${
                        emailError
                          ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                          : "border-border focus:border-[#00A3E0] focus:ring-[#00A3E0]"
                      }`}
                      placeholder="jane@company.com"
                    />
                    {emailError && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        {emailError}
                      </p>
                    )}
                  </div>

                  {/* Title */}
                  <div>
                    <label htmlFor="report-title" className="block text-sm font-medium text-foreground mb-1.5">
                      Title
                    </label>
                    <input
                      id="report-title"
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors"
                      placeholder="VP of Technology"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#00A3E0] text-white rounded-lg font-medium hover:bg-[#0090C8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
          )}
        </motion.div>
      </div>
    </section>
  );
}
