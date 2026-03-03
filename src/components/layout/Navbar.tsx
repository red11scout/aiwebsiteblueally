"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDrawer } from "@/hooks/useDrawer";

const navLinks = [
  { label: "Why BlueAlly", href: "#methodology" },
  { label: "Industries", href: "#industries" },
] as const;

export function Navbar() {
  const { openDrawer } = useDrawer();
  const [isCompact, setIsCompact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    if (scrollY > 100 && !isCompact) {
      setIsCompact(true);
    } else if (scrollY <= 50 && isCompact) {
      setIsCompact(false);
    }
  }, [isCompact]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40",
        "bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle",
        "transition-all duration-300 ease-in-out",
        isCompact ? "h-12" : "h-16"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/blueally-logo.png"
            alt="BlueAlly"
            width={140}
            height={44}
            priority
            className={cn(
              "transition-all duration-300",
              isCompact ? "h-7 w-auto" : "h-9 w-auto"
            )}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div
            className={cn(
              "flex items-center gap-6 transition-all duration-300",
              isCompact
                ? "opacity-0 max-w-0 overflow-hidden"
                : "opacity-100 max-w-md"
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => openDrawer({ source: "navbar" })}
            className={cn(
              "bg-accent-primary text-white px-4 py-2 rounded-lg font-medium",
              "hover:bg-accent-primary/90 transition cursor-pointer",
              isCompact ? "text-sm" : "text-sm"
            )}
          >
            Get Your Assessment
          </button>
        </div>

        {/* Mobile nav */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => openDrawer({ source: "navbar-mobile" })}
            className="bg-accent-primary text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-accent-primary/90 transition cursor-pointer"
          >
            Assessment
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-text-primary p-1 cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          "bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle",
          mobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="text-text-secondary hover:text-text-primary transition text-sm py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
