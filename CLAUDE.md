# BlueAlly AI Website — Claude Code Reference

## Quick Start
```bash
npm install
npm run dev     # Dev server on port 3000
npm run build   # Production build
npm run start   # Production server
```

## Stack
- Frontend: React 19, Vite 5, TypeScript, Tailwind CSS v4, shadcn/ui
- Backend: Express.js + Anthropic Claude SDK
- Animations: Framer Motion
- Routing: Wouter (SPA)
- Font: DM Sans (300, 400, 500, 700) exclusively

## Brand Colors (OFFICIAL — never deviate)
- Dark Blue: `#003B73` (primary, headers, nav)
- Light Blue: `#00A3E0` (accents, CTAs, interactive)
- Green: `#00B34A` (success states, secondary CTAs)
- Charcoal: `#2C2C2C` (body text on light backgrounds)
- Light Gray: `#F5F5F5` (foreground text on dark backgrounds)
- Medium Gray: `#999999` (secondary text, muted)

## Theme System
- Day/night mode via ThemeContext (`client/src/contexts/ThemeContext.tsx`)
- Toggle component: `client/src/components/ThemeToggle.tsx`
- CSS variables in `client/src/index.css` — `:root` / `.dark` for dark, `.light` for light
- Default: dark mode. Persisted in localStorage key `blueally-theme`.
- NEVER use `bg-white/[0.03]` or similar opacity whites/blacks. Use semantic tokens:
  - `bg-card`, `bg-background`, `bg-muted` for surfaces
  - `border-border` for borders
  - `text-foreground`, `text-muted-foreground` for text
  - `glass-card` CSS class for subtle cards (theme-aware)

## IMPORTANT Rules
- NEVER use oklch() colors. Always use hex from official palette above.
- DM Sans font exclusively. No font substitution.
- All API calls go through Express routes in server/
- Claude API key must be in ANTHROPIC_API_KEY env var
- Server gracefully handles missing API key (AI features disabled)

## Project Structure
```
client/src/pages/                # Home, IndustryReport, NotFound
client/src/components/           # Navigation, Footer, ThemeToggle
client/src/components/sections/  # HeroSection, IndustriesSection, etc. (14 sections)
client/src/components/report/    # Native report rendering (ReportPage, ValueDriverCards, etc.)
client/src/components/ui/        # shadcn/ui components (50+)
client/src/contexts/             # ThemeContext
client/src/data/                 # industries.ts, report-types.ts
client/src/data/reports/         # Per-industry report data (energy-utilities.ts, entertainment.ts)
client/src/hooks/                # Custom hooks
server/                          # Express API
server/routes/                   # Chat, contact, signup endpoints
```

## Industries (14)
Single source of truth: `client/src/data/industries.ts`
Categories: corporate, public, government (for tab display)
Reports live in `client/src/data/reports/` — add new `.ts` files and register in `reports/index.ts`

Currently with live reports: Energy & Utilities, Entertainment
Coming soon: Construction, Manufacturing, Retail, Transportation, Technology & Information,
Finance & Insurance, Real Estate, Professional Services, Education, Healthcare, State & Local, Federal

## Routes
- `/` — Home page (14 sections, includes Industries tab section)
- `/industries/:slug` — Industry report page (native render or coming-soon)
- `/industries` — Redirects to `/#industries`

## Environment Variables
- `ANTHROPIC_API_KEY` — Claude API for chat widget
- `PORT` — Server port (default 3000)

## Deployment
- Configured for Replit via `.replit` and `replit.nix`
- Build: `npm run build` (Vite frontend + esbuild server)
- Start: `npm run start` (serves from dist/)
