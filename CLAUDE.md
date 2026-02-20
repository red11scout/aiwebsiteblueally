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
- Background: `#0A1628` (page background)
- Card: `#0F2240` (card surfaces)
- Border: `#1E3A5F` (borders, dividers)

## IMPORTANT Rules
- NEVER use oklch() colors. Always use hex from official palette above.
- Dark mode only. No light/dark toggle. The `<html>` tag has `class="dark"` permanently.
- DM Sans font exclusively. No font substitution.
- All API calls go through Express routes in server/
- Claude API key must be in ANTHROPIC_API_KEY env var
- Server gracefully handles missing API key (AI features disabled)

## Project Structure
```
client/src/pages/              # Home page
client/src/components/         # Section components, Navigation, Footer
client/src/components/sections/# HeroSection, SuccessStoriesSection, FlywheelSection, etc.
client/src/components/ui/      # shadcn/ui components
client/src/hooks/              # Custom hooks
server/                        # Express API
server/routes/                 # Chat, contact endpoints
```

## Environment Variables
- `ANTHROPIC_API_KEY` — Claude API for chat widget
- `PORT` — Server port (default 3000)

## Deployment
- Configured for Replit via `.replit` and `replit.nix`
- Build: `npm run build` (Vite frontend + esbuild server)
- Start: `npm run start` (serves from dist/)
