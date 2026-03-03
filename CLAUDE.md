# BlueAlly "Go Faster with AI" — Claude Code Reference

## Quick Start
```bash
npm install
npm run dev       # Dev server on port 3000
npm run build     # Production build (static pages)
npm run typecheck # TypeScript verification
```

## Stack
- Framework: Next.js 15 (App Router)
- Deployment: Vercel
- Styling: Tailwind CSS 4
- Animation: Framer Motion
- Charts: Recharts (scatter plot on industry pages)
- Forms: React Hook Form + Zod validation
- Calendar: Calendly embed (placeholder in V1)
- Fonts: Inter (sans) + JetBrains Mono (mono) via next/font
- Icons: Lucide React
- State: React useState/context (no external state lib)

## Design System — Dark Engineering Theme
- bg-primary: `#0A0E1A` (page backgrounds)
- bg-surface: `#111827` (cards, panels)
- accent-primary: `#3B82F6` (CTAs, links)
- accent-glow: `#06B6D4` (data viz, cyan)
- accent-success: `#10B981` (positive metrics)
- accent-danger: `#EF4444` (problem states)
- text-primary: `#F8FAFC` (headlines)
- text-secondary: `#94A3B8` (body)
- text-muted: `#64748B` (captions)
- border-subtle: `#1E293B` (borders)
- Use `font-mono` for all metrics/numbers (JetBrains Mono)
- Use `MonoText` component from `@/components/shared/MonoText`

## Project Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, nav, footer, drawer
│   ├── page.tsx                # Homepage (8 sections)
│   ├── globals.css             # Tailwind + design tokens
│   ├── sitemap.ts / robots.ts  # SEO
│   ├── industries/[slug]/page.tsx  # Dynamic industry pages (14)
│   └── api/lead/route.ts      # Lead capture webhook
├── components/
│   ├── layout/                 # Navbar, Footer, StickyCtaBanner
│   ├── homepage/               # Hero, StakesGrid, MethodologyTimeline, etc.
│   ├── industry/               # IndustryHero, FrictionMap, ValueReadinessMatrix, etc.
│   ├── conversion/             # DrawerForm, ExitIntentOverlay
│   └── shared/                 # ScrollReveal, MonoText, FlipCard, IndustryCard
├── data/
│   ├── industries.ts           # 14 industries metadata
│   ├── report-types.ts         # TypeScript interfaces for report data
│   └── reports/*.ts            # Per-industry report data (14 files)
├── lib/
│   ├── types.ts                # Component-facing type definitions
│   ├── utils.ts                # cn(), formatCurrency(), formatMillions()
│   ├── calculator.ts           # Trapped value calculation logic
│   └── industry-adapter.ts     # Maps report data → component props
└── hooks/
    └── useDrawer.tsx           # Drawer state context + provider
```

## Key Patterns
- Industry data: rich reports in `data/reports/*.ts` → adapted via `industry-adapter.ts`
- Conversion: DrawerForm opens via `useDrawer()` context from any CTA
- Scroll animations: wrap sections in `<ScrollReveal>` (Framer Motion)
- All industry pages statically generated via `generateStaticParams`

## Environment Variables
```
LEAD_WEBHOOK_URL           # Webhook for form submissions
NEXT_PUBLIC_CALENDLY_URL   # Calendly scheduling link
NEXT_PUBLIC_GTM_ID         # Google Tag Manager
NEXT_PUBLIC_SITE_URL       # https://explore.gofasterwithai.com
```

## Deployment
- Vercel project: drew-godwins-projects/blueally-ai-website
- GitHub: red11scout/aiwebsiteblueally
- Auto-deploys on push to main
