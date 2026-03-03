"use client";

import Link from "next/link";
import {
  Zap,
  HardHat,
  Factory,
  ShoppingCart,
  Truck,
  Monitor,
  Landmark,
  Building2,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Film,
  Globe,
  Shield,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  HardHat,
  Factory,
  ShoppingCart,
  Truck,
  Monitor,
  Landmark,
  Building2,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Film,
  Globe,
  Shield,
};

interface IndustryCardProps {
  slug: string;
  name: string;
  icon: string;
  teaserValue: string;
}

export function IndustryCard({ slug, name, icon, teaserValue }: IndustryCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <Link
      href={`/industries/${slug}`}
      className="relative bg-bg-surface border border-border-subtle rounded-xl p-6 transition-all duration-200 group hover:border-accent-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:scale-[1.02]"
    >
      <ChevronRight
        size={18}
        className="absolute top-6 right-6 text-text-muted group-hover:text-accent-primary transition-colors"
      />

      {IconComponent && (
        <IconComponent size={24} className="text-accent-primary" />
      )}

      <p className="font-semibold text-lg text-text-primary mt-3">{name}</p>

      <p className="font-mono text-sm text-text-muted mt-2">
        Avg. Value:{" "}
        <span className="blur-[6px] group-hover:blur-[3px] transition-all duration-300">
          {teaserValue}
        </span>
      </p>
    </Link>
  );
}
