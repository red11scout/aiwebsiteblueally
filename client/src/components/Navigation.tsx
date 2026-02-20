/**
 * Navigation Component
 * Premium dark glass effect with smooth scroll navigation
 * Uses official BlueAlly logo with AI appended
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Framework", href: "#framework" },
  { label: "Flywheel", href: "#flywheel" },
  { label: "Process", href: "#process" },
  { label: "Success Stories", href: "#success" },
  { label: "Industries", href: "#industries" },
  { label: "Offerings", href: "#offerings" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1628]/90 backdrop-blur-xl border-b border-[#1E3A5F] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1"
          >
            <img
              src="/images/blueally-logo.png"
              alt="BlueAlly"
              className="h-6 md:h-8 w-auto"
            />
            <span
              className="text-[#00B34A] font-bold text-xl md:text-2xl tracking-tight"
              style={{ marginLeft: "2px" }}
            >
              AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeSection === link.href
                    ? "text-[#00A3E0] bg-[#00A3E0]/10"
                    : "text-[#999999] hover:text-[#F5F5F5] hover:bg-[#00A3E0]/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => scrollToSection("#framework")}
              className="hidden md:flex border-[#1E3A5F] text-[#F5F5F5] hover:bg-[#1E3A5F] hover:text-white"
            >
              Explore Framework
            </Button>
            <Button
              onClick={() => scrollToSection("#cta")}
              className="hidden sm:flex bg-[#00A3E0] hover:bg-[#0080B3] text-white gap-2"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-[#F5F5F5]">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-[#0A1628] border-[#1E3A5F]">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-1 mb-4 px-4">
                    <img
                      src="/images/blueally-logo.png"
                      alt="BlueAlly"
                      className="h-6 w-auto"
                    />
                    <span
                      className="text-[#00B34A] font-bold text-xl tracking-tight"
                      style={{ marginLeft: "2px" }}
                    >
                      AI
                    </span>
                  </div>
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={`text-left px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                        activeSection === link.href
                          ? "text-[#00A3E0] bg-[#00A3E0]/10"
                          : "text-[#F5F5F5] hover:bg-[#1E3A5F]"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("#cta")}
                    className="mt-4 bg-[#00A3E0] hover:bg-[#0080B3] text-white"
                  >
                    Book a Consultation
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
