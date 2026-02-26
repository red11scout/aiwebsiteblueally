/**
 * Assessment CTA Section
 * Sign-up form with industry dropdown to funnel prospects
 * into the customer portal via /api/signup.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { industries } from "@/data/industries";

const FREE_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com",
  "aol.com", "icloud.com", "mail.com", "protonmail.com",
];

export default function AssessmentCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const domain = email.trim().toLowerCase().split("@")[1];
    if (FREE_EMAIL_DOMAINS.includes(domain)) {
      toast.error("Please use your work email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: companyName.trim(),
          name: name.trim(),
          email: email.trim(),
          title: title.trim() || undefined,
          industry,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        toast.success("Your AI assessment is being generated!");
      } else {
        toast.error(data.errors?.[0] || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Unable to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003B73]/20 via-[#00A3E0]/5 to-transparent" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="p-3 rounded-2xl bg-[#00A3E0]/10 w-fit mx-auto mb-6">
              <Target className="h-8 w-8 text-[#00A3E0]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Get Your{" "}
              <span className="text-[#00A3E0]">Customized</span>{" "}
              AI Assessment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'll generate a personalized AI assessment for your organization — with
              validated ROI, prioritized use cases, and a roadmap tailored to your
              strategic goals. Free, no obligation.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-12 text-center"
              >
                <div className="p-4 rounded-full bg-[#00B34A]/20 w-fit mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-[#00B34A]" />
                </div>
                <h3 className="text-2xl text-foreground mb-4">
                  Your Assessment Is Being Generated
                </h3>
                <p className="text-muted-foreground mb-2">
                  You'll receive access to your personalized BlueAlly AI Hub within 24 hours,
                  including your customized assessment, implementation roadmap, and a dedicated
                  BlueAlly consultant.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-10"
              >
                <div className="space-y-5">
                  {/* Industry selector — full width, prominent */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Industry *
                    </label>
                    <Select value={industry} onValueChange={setIndustry} required>
                      <SelectTrigger className="bg-background h-12 text-base">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((ind) => (
                          <SelectItem key={ind.slug} value={ind.slug}>
                            {ind.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Company Name *
                      </label>
                      <Input
                        required
                        placeholder="Acme Corporation"
                        className="bg-background h-11"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name *
                      </label>
                      <Input
                        required
                        placeholder="Jane Smith"
                        className="bg-background h-11"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Work Email *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="bg-background h-11"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Title
                      </label>
                      <Input
                        placeholder="VP of Technology"
                        className="bg-background h-11"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#00A3E0] hover:bg-[#0080B3] text-white rounded-full h-12 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Generating Your Assessment...
                      </>
                    ) : (
                      <>
                        Get My Customized Assessment
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you'll receive access to a personalized AI Hub with your
                    assessment, implementation roadmap, and a dedicated BlueAlly consultant.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
