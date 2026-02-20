/**
 * Footer Component
 * Professional dark footer with BlueAlly branding
 */

import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "AI Strategy", href: "#framework" },
    { label: "AI Flywheel", href: "#flywheel" },
    { label: "Application Development", href: "#offerings" },
    { label: "AI Assessments", href: "#offerings" },
  ],
  company: [
    { label: "About BlueAlly", href: "https://www.blueally.com/about" },
    { label: "Success Stories", href: "#success" },
    { label: "Careers", href: "https://www.blueally.com/careers" },
    { label: "Contact", href: "#cta" },
  ],
  resources: [
    { label: "AI Insights", href: "https://www.blueally.com/insights" },
    { label: "Case Studies", href: "#success" },
    { label: "Blog", href: "https://www.blueally.com/blog" },
    { label: "Newsroom", href: "https://www.blueally.com/newsroom" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/blueally", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/blueally", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/blueally", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/blueally", label: "Facebook" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className="bg-[#060E1A] text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <img
                src="/images/blueally-logo.png"
                alt="BlueAlly"
                className="h-8 w-auto"
              />
              <span
                className="text-[#00B34A] font-bold text-2xl tracking-tight"
                style={{ marginLeft: "2px" }}
              >
                AI
              </span>
            </div>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Transforming enterprises with intelligent AI solutions.
              Your trusted partner in the AI revolution.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-[#00A3E0]/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white/70 hover:text-[#00A3E0]" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-[#00A3E0] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-[#00A3E0] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-[#00A3E0] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} BlueAlly Technology Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <a
                href="https://www.blueally.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="https://www.blueally.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.blueally.com/trust"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Trust Center
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-[#00A3E0]">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <span className="text-white/90">
              Ready to start your AI journey?
            </span>
            <a
              href="tel:8008865369"
              className="font-semibold text-white hover:underline"
            >
              Call (800) 886-5369
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
