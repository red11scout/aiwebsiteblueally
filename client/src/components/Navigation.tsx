/**
 * Navigation Component
 * CrewAI-inspired: transparent, minimal, pill-shaped CTAs
 * Theme-aware with day/night toggle
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import ThemeToggle from "./ThemeToggle";

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
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    if (!isHome) return;
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
  }, [isHome]);

  const scrollToSection = (href: string) => {
    if (isHome) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/${href}`;
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
          ? "bg-background/80 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-[72px] md:h-[84px]">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
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
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              onClick={() => scrollToSection("#framework")}
              className="hidden md:flex rounded-full h-10 px-6 border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border"
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
                <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground hover:text-foreground">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-border">
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
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="px-4 mt-4">
                    <ThemeToggle className="mb-4" />
                  </div>
                  <Button
                    onClick={() => scrollToSection("#cta")}
                    className="mt-2 mx-4 rounded-full h-12 bg-[#00A3E0] hover:bg-[#0090C8] text-white"
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
