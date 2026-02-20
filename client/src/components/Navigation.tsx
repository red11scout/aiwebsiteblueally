/**
 * Navigation Component
 * CrewAI-inspired: transparent, minimal, pill-shaped CTAs
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/50 backdrop-blur-sm border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-[72px] md:h-[84px]">
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
              className="text-[#00A3E0] font-medium text-xl md:text-2xl tracking-tight"
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
                className={`px-4 py-2 text-sm transition-colors ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions — pill-shaped buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => scrollToSection("#framework")}
              className="hidden md:flex rounded-full h-10 px-6 border-white/20 text-white/80 hover:bg-white/5 hover:text-white hover:border-white/40"
            >
              Explore Framework
            </Button>
            <Button
              onClick={() => scrollToSection("#cta")}
              className="hidden sm:flex rounded-full h-10 px-6 bg-[#00A3E0] hover:bg-[#0090C8] text-white gap-2"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white/70 hover:text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-[#050A14] border-white/[0.06]">
                <div className="flex flex-col gap-2 mt-8">
                  <div className="flex items-center gap-1 mb-6 px-4">
                    <img
                      src="/images/blueally-logo.png"
                      alt="BlueAlly"
                      className="h-6 w-auto"
                    />
                    <span
                      className="text-[#00A3E0] font-medium text-xl tracking-tight"
                      style={{ marginLeft: "2px" }}
                    >
                      AI
                    </span>
                  </div>
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={`text-left px-4 py-3 text-lg transition-colors ${
                        activeSection === link.href
                          ? "text-white"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("#cta")}
                    className="mt-6 mx-4 rounded-full h-12 bg-[#00A3E0] hover:bg-[#0090C8] text-white"
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
