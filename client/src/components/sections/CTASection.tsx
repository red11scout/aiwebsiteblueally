/**
 * CTA Section
 * Call to action with contact form
 * Clean, professional design encouraging engagement
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const journeyOptions = [
  "Just Starting - Exploring AI",
  "AI Council Formed",
  "Use Cases Identified",
  "Pilots in Progress",
  "AI Deployed",
  "Scaling AI",
  "Optimizing AI",
];

const interestOptions = [
  "AI Education & Workshops",
  "AI Strategy & Assessment",
  "Application Development",
  "Rapid Prototyping",
  "Full Implementation",
  "Other",
];

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [journeyStage, setJourneyStage] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company,
          journeyStage: journeyStage || undefined,
          interests: interest ? [interest] : undefined,
          message: message || undefined,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        toast.success("Thank you! We'll be in touch within 24 hours.");
      } else {
        toast.error(data.errors?.[0] || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Unable to submit. Please try again or call (800) 886-5369.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-20 md:py-32 gradient-navy" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#00A3E0] bg-[#00A3E0]/10 rounded-full border border-[#00A3E0]/20">
              Get Started
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <br />
              Your Enterprise?
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              The best time to start was yesterday. The second best time is now. 
              Let's discuss how BlueAlly can accelerate your AI journey.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-white/80">
                <div className="p-2 rounded-lg bg-white/10">
                  <Phone className="h-5 w-5" />
                </div>
                <span>(800) 886-5369</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="p-2 rounded-lg bg-white/10">
                  <Mail className="h-5 w-5" />
                </div>
                <span>ai@blueally.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="p-2 rounded-lg bg-white/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Serving enterprises nationwide</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="glass-card rounded-xl p-4">
              <div className="flex flex-wrap gap-4 justify-center text-sm text-white/60">
                <span>✓ Response within 24 hours</span>
                <span>✓ No obligation consultation</span>
                <span>✓ Confidential discussion</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-2xl p-8 text-center"
              >
                <div className="p-4 rounded-full bg-[#00B34A]/20 w-fit mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-[#00B34A]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your message has been received. A BlueAlly AI specialist will 
                  contact you within 24 hours to discuss your needs.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-2xl"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Start the Conversation
                </h3>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name *
                      </label>
                      <Input
                        required
                        placeholder="John"
                        className="bg-background"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name *
                      </label>
                      <Input
                        required
                        placeholder="Smith"
                        className="bg-background"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Work Email *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="bg-background"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company *
                    </label>
                    <Input
                      required
                      placeholder="Your Company"
                      className="bg-background"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Where are you in your AI journey?
                    </label>
                    <Select value={journeyStage} onValueChange={setJourneyStage}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select your stage" />
                      </SelectTrigger>
                      <SelectContent>
                        {journeyOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      What are you interested in?
                    </label>
                    <Select value={interest} onValueChange={setInterest}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {interestOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Tell us about your needs
                    </label>
                    <Textarea
                      placeholder="Describe your AI goals, challenges, or questions..."
                      className="bg-background min-h-[100px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#00A3E0] hover:bg-[#0080B3] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our privacy policy. 
                    We respect your data and will never share it.
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
