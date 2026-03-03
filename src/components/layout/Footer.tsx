import Link from "next/link";

const quickLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Methodology", href: "#methodology" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
] as const;

const certifications = ["SOC 2 Certified", "ISO 42001"] as const;

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-subtle py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Top row: Logo + tagline */}
        <div>
          <div className="flex items-center gap-0.5">
            <span className="font-bold text-xl text-text-primary">
              Blue
            </span>
            <span className="font-bold text-xl text-text-primary">
              Ally
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary ml-0.5 mb-2" />
          </div>
          <p className="text-text-muted text-sm mt-1">
            Full-Stack AI Transformation
          </p>
        </div>

        {/* Middle row: Quick links */}
        <div className="flex flex-wrap gap-8">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-text-muted hover:text-text-primary transition text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom row: Certifications + copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-border-subtle">
          <div className="flex gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="text-xs text-text-muted border border-border-subtle rounded px-2 py-1"
              >
                {cert}
              </span>
            ))}
          </div>

          <span className="text-xs text-text-muted">
            &copy; 2026 BlueAlly Technology Solutions
          </span>
        </div>
      </div>
    </footer>
  );
}
