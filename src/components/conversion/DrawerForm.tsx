"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, Check } from "lucide-react";
import { useDrawer } from "@/hooks/useDrawer";
import { cn } from "@/lib/utils";

const intentOptions = [
  { value: "reduce-costs", label: "Reduce Operational Costs" },
  { value: "increase-revenue", label: "Increase Revenue / Output" },
  { value: "improve-quality", label: "Improve Quality / Compliance" },
  { value: "exploring", label: "Exploring — Not Sure Yet" },
];

const revenueRanges = [
  "Under $100M",
  "$100M – $500M",
  "$500M – $1B",
  "$1B+",
];

const industries = [
  { slug: "construction", name: "Construction" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "finance-insurance", name: "Finance & Insurance" },
  { slug: "manufacturing", name: "Manufacturing" },
  { slug: "retail", name: "Retail" },
  { slug: "energy-utilities", name: "Energy & Utilities" },
  { slug: "transportation", name: "Transportation" },
  { slug: "technology-information", name: "Technology & Information" },
  { slug: "professional-services", name: "Professional Services" },
  { slug: "real-estate", name: "Real Estate" },
  { slug: "education", name: "Education" },
  { slug: "entertainment", name: "Entertainment" },
  { slug: "state-local", name: "State & Local" },
  { slug: "federal", name: "Federal" },
];

export function DrawerForm() {
  const { drawer, closeDrawer } = useDrawer();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [intent, setIntent] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [revenueRange, setRevenueRange] = useState("");
  const [industry, setIndustry] = useState(drawer.industry || "");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when drawer opens with industry context
  const currentIndustry = drawer.industry || industry;

  function handleIntentSelect(value: string) {
    setIntent(value);
    setTimeout(() => setStep(2), 300);
  }

  function handleStep2Continue() {
    if (!companyName.trim()) return;
    setStep(3);
  }

  function validateEmail(value: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(value)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    const freeProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
    const domain = value.split("@")[1]?.toLowerCase();
    if (freeProviders.includes(domain)) {
      setEmailError("We recommend using your work email for the most relevant assessment.");
      // Don't block submission, just warn
    } else {
      setEmailError("");
    }
    return true;
  }

  async function handleSubmit() {
    if (!validateEmail(email)) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent,
          companyName,
          revenueRange,
          industry: currentIndustry,
          email,
          phone: phone || undefined,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Silently fail — still show success in V1
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleClose() {
    closeDrawer();
    // Reset after animation
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setIntent("");
      setCompanyName("");
      setRevenueRange("");
      setIndustry("");
      setEmail("");
      setPhone("");
      setEmailError("");
    }, 400);
  }

  return (
    <AnimatePresence>
      {drawer.isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-bg-primary border-l border-border-subtle z-50 overflow-y-auto"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  {step > 1 && !submitted && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="text-text-muted hover:text-text-primary transition"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <h2 className="text-xl font-bold">
                    {submitted ? "You're Booked" : "Schedule Your Assessment"}
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="text-text-muted hover:text-text-primary transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress indicator */}
              {!submitted && (
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={cn(
                        "h-1 flex-1 rounded-full transition-colors",
                        s <= step ? "bg-accent-primary" : "bg-border-subtle"
                      )}
                    />
                  ))}
                </div>
              )}

              {/* Step 1: Intent */}
              {step === 1 && !submitted && (
                <div>
                  <p className="text-text-secondary mb-6">
                    What&apos;s your primary goal?
                  </p>
                  <p className="text-xs text-text-muted mb-4">
                    This helps us match you with the right AI architect.
                  </p>
                  <div className="space-y-3">
                    {intentOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleIntentSelect(opt.value)}
                        className={cn(
                          "w-full text-left px-5 py-4 rounded-lg border transition-all",
                          intent === opt.value
                            ? "border-accent-primary bg-accent-primary/10 text-text-primary"
                            : "border-border-subtle bg-bg-surface hover:border-accent-primary/30 text-text-secondary"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Qualification */}
              {step === 2 && !submitted && (
                <div>
                  <p className="text-text-secondary mb-6">
                    Tell us about your organization.
                  </p>
                  <p className="text-xs text-text-muted mb-4">
                    We&apos;ll use this to pre-build your industry assessment before the call.
                  </p>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none transition"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">
                        Approximate Revenue Range
                      </label>
                      <select
                        value={revenueRange}
                        onChange={(e) => setRevenueRange(e.target.value)}
                        className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition"
                      >
                        <option value="">Select range</option>
                        {revenueRanges.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">
                        Industry
                      </label>
                      <select
                        value={currentIndustry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition"
                      >
                        <option value="">Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind.slug} value={ind.slug}>
                            {ind.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={handleStep2Continue}
                      disabled={!companyName.trim()}
                      className="w-full bg-accent-primary text-white py-3 rounded-lg font-medium hover:bg-accent-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Book */}
              {step === 3 && !submitted && (
                <div>
                  <p className="text-text-secondary mb-6">
                    How should we reach you?
                  </p>
                  <p className="text-xs text-text-muted mb-4">
                    You&apos;ll meet with a senior AI architect, not a salesperson. No pitch. Just your data.
                  </p>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailError) setEmailError("");
                        }}
                        className={cn(
                          "w-full bg-bg-surface border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none transition",
                          emailError
                            ? "border-accent-danger focus:border-accent-danger"
                            : "border-border-subtle focus:border-accent-primary"
                        )}
                        placeholder="you@company.com"
                      />
                      {emailError && (
                        <p className="text-xs text-accent-danger mt-1">
                          {emailError}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">
                        Phone{" "}
                        <span className="text-text-muted">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-bg-surface border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none transition"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Calendly placeholder */}
                    <div className="bg-bg-surface border border-border-subtle rounded-lg p-6 text-center">
                      <p className="text-text-muted text-sm">
                        Calendar scheduling will appear here
                      </p>
                      <p className="text-text-muted text-xs mt-2">
                        (Calendly integration — coming soon)
                      </p>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={!email.trim() || isSubmitting}
                      className="w-full bg-accent-primary text-white py-3 rounded-lg font-medium hover:bg-accent-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Schedule Your Assessment Review →"}
                    </button>
                  </div>
                </div>
              )}

              {/* Success State */}
              {submitted && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent-success/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-accent-success" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Confirmed
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Check your email for calendar details. A senior AI architect
                    will review your industry assessment before the call.
                  </p>
                  {currentIndustry && (
                    <a
                      href={`/industries/${currentIndustry}`}
                      className="text-accent-primary hover:text-accent-glow transition underline"
                    >
                      View Your Industry Assessment Preview →
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
