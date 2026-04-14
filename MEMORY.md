# Chris Dell Portfolio — Project Memory

**Purpose:** Personal portfolio site for Chris Dell, showcasing 22+ years as a Sports Editor, Media Educator, and Tech Founder. Target audiences: academic hiring committees (Penn State, Lynchburg, etc.), industry contacts, collaborators.

**Domain:** chrisdell.co (purchased on GoDaddy April 2026, not yet wired to Vercel)

## Stack
- Next.js 16.2.3 (App Router, Turbopack) — **NOTE: has breaking changes from prior versions, read `node_modules/next/dist/docs/` before writing code**
- React 19.2.4
- Tailwind v4 (via `@theme inline` in globals.css)
- TypeScript 5
- Google Fonts via `next/font/google`: Fraunces (serif headings) + Commissioner (body)
- Deploy target: Vercel, auto-deploy on git push to main
- Repo: `chrisdell88/chrisdell-portfolio` on GitHub

## Design system (non-negotiable rules)
- **Zero white backgrounds anywhere.** Every surface is dark.
- Jet black `#000000` page bg. Card `#0a0a0a`. Border `#1a1a1a`.
- Electric blue `#3b82f6` is the ONLY accent color. No other accents.
- Headings = Fraunces (serif). Body = Commissioner (sans). Never use system fonts, Inter, Roboto, or Arial.
- All design tokens live in `app/globals.css` as CSS variables.

## File structure
```
app/
  layout.tsx      — root layout, fonts, metadata
  page.tsx        — single-page portfolio (all sections inline, no separate components yet)
  globals.css     — design tokens + animations
lib/
  content.ts      — all site content (stats, cards, links, awards) — single source of truth
public/
  profile.jpg     — Chris's profile photo (already in place)
CLAUDE.md → @AGENTS.md
AGENTS.md         — Next.js 16 warning (DO NOT delete)
```

## Content sources (authoritative, in priority order)
1. `Chris Dell_ CV (2026).docx`
2. `Chris Dell_ Master Resume (2026).docx`
3. `Chris Dell_ Portfolio (2026).docx`
4. `Chris Dell_ Research and Production Statement (Lynchburg).docx`
5. `Chris Dell_ Sample of Scholarly Work and Creative Production (2026).docx`

When these disagree with the original `CLAUDE_CODE_PORTFOLIO_PROMPT.md.docx` brief, **the 5 docs above win**. The brief was a starting draft.

## Key content facts (verified from docs)
- APSE: 2× Triple Crown (2024, 2025), Top 10 Special Sections A/B combined (2025 U.S. Open at Oakmont — competing vs. LA Times and USA Today)
- Post-Gazette Sports Editor: Jul 2023 – Oct 2025. $404K video/audio revenue. 1,800+ videos. 53.8M impressions.
- Penn State Sports Media Instructor (Jan 2025 – Present). FIFA World Cup 2026 practicum w/ AP — Toronto, NYC, Philadelphia, Boston.
- Fantasy Edge Media (2020–Present): $150K+ subscription revenue, 500+ paid subs, 900K+ podcast downloads Yr 1.
- #1 FantasyPros 2023 draft accuracy (of 235 analysts).
- BracketX (bracketx.co) + MockX (mockx.co): AI-powered, launched 2026.
- Go Baller (2015–2025): Forbes-featured, Dan Gilbert Bizdom seed funding, clients: Cavaliers, Dodgers, ESPN, NY Daily News.
- Viral X thread: 2K → 25K+ followers in 48 hours, 1.5M+ impressions.
- Master's: Craig Newmark Graduate School of Journalism, CUNY (Entrepreneurial Journalism).

## Status

### Phase 1: Scaffold & Initial Build — ✅ DONE
- [x] Next.js 16 scaffolded with TS + Tailwind v4
- [x] Design system CSS written (all tokens, no white bg)
- [x] Fonts wired (Fraunces + Commissioner via next/font/google)
- [x] Content data file (`lib/content.ts`) populated from CV/resume/portfolio docs
- [x] Full single-page build: Nav, Hero, Stats bar, Selected Work (2 videos + 6 cards + 6 writing cards), Ventures (4), Awards (APSE + Individual), Contact, Footer, Stats Ticker
- [x] Profile photo in place (`public/profile.jpg`)
- [x] Production build passes (`npm run build` — static, 0 TS errors)

### Phase 2: Animations & Polish — TODO
- [ ] Particle constellation canvas background (client component)
- [ ] Typing animation on hero headline (currently static + cursor)
- [ ] Animated stat counters (count up on scroll-in)
- [ ] Scroll-triggered fade-ins per section
- [ ] Hover glow radial gradient on venture cards
- [ ] Mobile hamburger menu

### Phase 3: Deploy — TODO
- [ ] Push to GitHub (`chrisdell88/chrisdell-portfolio`)
- [ ] Connect to Vercel, first deploy to `*.vercel.app`
- [ ] Wire `chrisdell.co` DNS on GoDaddy → Vercel nameservers or A/CNAME records
- [ ] Verify HTTPS, OG tags, favicon

### Phase 4: QA & Review — TODO
- [ ] Design review vs. brief (spacing, color, typography)
- [ ] Code review (accessibility, React patterns)
- [ ] Link check: every external URL returns 200
- [ ] Lighthouse score > 95
- [ ] Mobile viewport tested (iPhone/iPad sizes)

## Agent team (as discussed with Chris)
Keep lean — 4 core roles, spin up specialists on demand:
1. **Builder** (me, primary)
2. **Design Reviewer** — audits live site vs. brief
3. **QA Tester** — links, mobile, Lighthouse
4. **Research Analyst** — stat/fact verification against docs

## Chris's working style notes
- Non-technical — I handle ALL technical execution (Vercel, DNS, GitHub via browser tools as needed)
- Full autopilot mode: build, QA, deploy, then report
- Prefers honest answers over overselling (pushed back on 13-agent proposal — rightfully)
- Expects questions, not assumptions
- Emphasizes: organized, efficient, optimized, maximize resources
