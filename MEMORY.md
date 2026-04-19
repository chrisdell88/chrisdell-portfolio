# chrisdell-portfolio — Project Memory

**Last updated:** 2026-04-18
**Repo:** https://github.com/chrisdell88/chrisdell-portfolio
**Live preview:** https://chrisdell-portfolio.vercel.app
**Target domain:** chrisdell.co (purchased on GoDaddy, NOT yet wired to Vercel)

## Session start protocol
1. `cd ~/Projects/chrisdell-portfolio`
2. `git pull` (auto via hook)
3. Read this file
4. Check `git log --oneline -10` for recent context

---

## What This Project Is

Personal portfolio site for Chris Dell — Award-winning Sports Editor, Media Educator, and Tech Founder with 22+ years of experience. Target audiences: academic hiring committees (Penn State, University of Lynchburg, etc.), industry contacts, and collaborators.

Single-page scrolling Next.js site. Static content only, no backend.

---

## Tech Stack

- **Framework:** Next.js 16.2.3 (App Router, Turbopack)
  - ⚠️ **BREAKING CHANGES from older Next.js** — always read `node_modules/next/dist/docs/` before writing code (per AGENTS.md)
- **React:** 19.2.4
- **Styling:** Tailwind v4 (via `@theme inline` in globals.css) + CSS variables
- **Language:** TypeScript 5
- **Fonts:** `next/font/google` — Fraunces (serif headings) + Commissioner (sans body)
- **Deploy:** Vercel, auto-deploy from GitHub `main` branch
- **Domain registrar:** GoDaddy (chrisdell.co)

---

## Design System (Non-Negotiable Rules)

- **Zero white backgrounds anywhere.** Every surface is dark. This is law.
- **Jet black** `#000000` page bg.
- **Card** `#0a0a0a`. **Border** `#1a1a1a`. **Text** `#e5e5e5` / `#999` mid / `#555` dim.
- **Electric blue** `#3b82f6` is the ONLY accent color. No other accents anywhere.
- **Headings:** Fraunces (serif). **Body:** Commissioner (sans). Never use system fonts, Inter, Roboto, or Arial.
- All tokens live in `app/globals.css` as CSS variables.

---

## File Structure

```
app/
  layout.tsx              — root layout, fonts, metadata
  page.tsx                — single-page portfolio (all sections inline)
  globals.css             — design tokens + animations
components/
  ParticleCanvas.tsx      — fixed-bg constellation canvas (client)
  TypedHeading.tsx        — hero typing animation (client)
  AnimatedCounter.tsx     — scroll-triggered counter (client)
  FadeIn.tsx              — IntersectionObserver fade wrapper (client)
  MobileMenu.tsx          — hamburger menu (client)
lib/
  content.ts              — ALL site content: stats, cards, links, awards (single source of truth)
public/
  profile.jpg             — Chris's profile photo (in place)
CLAUDE.md → @AGENTS.md
AGENTS.md                 — Next.js 16 breaking-changes warning (DO NOT delete)
MEMORY.md                 — this file
```

---

## Content Source Hierarchy (authoritative, in order)

When these disagree with the original `CLAUDE_CODE_PORTFOLIO_PROMPT.md.docx` brief, **these docs win**:

1. `~/Downloads/Chris Dell_ CV (2026).docx`
2. `~/Downloads/Chris Dell_ Master Resume (2026).docx`
3. `~/Downloads/Chris Dell_ Portfolio (2026).docx` *(note: was present in a prior session, may need re-upload)*
4. `~/Downloads/Chris Dell_ Research and Production Statement (Lynchburg).docx`
5. `~/Downloads/Chris Dell_ Sample of Scholarly Work and Creative Production (2026).docx`

Key content facts (verified from docs, baked into `lib/content.ts`):
- APSE: 2× Triple Crown (2024, 2025), Top 10 Special Sections A/B (2025 U.S. Open at Oakmont)
- Post-Gazette Sports Editor: Jul 2023 – Oct 2025. $404K video/audio revenue. 1,800+ videos. 53.8M impressions.
- Penn State Sports Media Instructor (Jan 2025 – Present). FIFA World Cup 2026 practicum w/ Associated Press — Toronto, NYC, Philadelphia, Boston.
- Fantasy Edge Media (2020–Present): $150K+ subscription revenue, 500+ paid subs, 900K+ podcast downloads Yr 1.
- #1 FantasyPros 2023 draft accuracy (of 235 analysts).
- BracketX (bracketx.co) + MockX (mockx.co): AI-powered, launched 2026.
- Go Baller (2015–2025): Forbes-featured, Dan Gilbert Bizdom seed funding. Clients: Cavaliers, Dodgers, ESPN, NY Daily News.
- Viral X thread: 2K → 25K+ followers in 48 hours, 1.5M+ impressions.
- Master's: Craig Newmark Graduate School of Journalism, CUNY (Entrepreneurial Journalism).

---

## Status

### ✅ Phase 1: Scaffold & Initial Build — DONE
- Next.js 16 scaffolded with TS + Tailwind v4
- Design system CSS written (all tokens, zero white bg)
- Fonts wired (Fraunces + Commissioner)
- Content data file populated from CV/resume/portfolio docs
- Full single-page layout: Nav, Hero, Stats bar, Selected Work (2 videos + 6 cards + 6 writing cards), Ventures (4), Awards (APSE + Individual), Contact, Footer, Stats Ticker
- Profile photo in place
- Production build passes, 0 TS errors
- GitHub repo `chrisdell88/chrisdell-portfolio` created, pushed
- Vercel deploy live at https://chrisdell-portfolio.vercel.app
- Vercel git integration connected → auto-deploy on push
- Commit: `5f168fc`

### ✅ Phase 2: Animations & Polish — DONE
- Particle constellation canvas bg (60 blue dots, mouse attraction, inter-particle lines)
- Typing animation on hero headline ("Sports Media." → "Built Different.")
- Animated stat counters (count up from 0 on scroll-in via IntersectionObserver)
- Scroll-triggered section fade-ins for all major sections
- Hover bloom (radial gradient) on venture cards
- Mobile hamburger menu (auto-hides nav links on <768px, reveals menu drawer)
- Build passes, 0 TS errors
- Deployed to production
- Commit: `405c470`

### ⏸️ Phase 3: DNS — BLOCKED, NEEDS CHRIS

**Status:** Domain `chrisdell.co` is registered with Vercel project, but GoDaddy DNS still points at GoDaddy parking nameservers (ns59.domaincontrol.com / ns60.domaincontrol.com). Site does NOT resolve at chrisdell.co yet.

**Vercel said add one of these:**
- **Option A:** A records → `@` and `www` both point to `76.76.21.21`
- **Option B (recommended):** Change nameservers to `ns1.vercel-dns.com` / `ns2.vercel-dns.com` — Vercel then manages all DNS forever

**What happened this session:**
- Attempted to drive GoDaddy DNS edit via Chrome MCP browser tools
- Got Chris logged into GoDaddy DNS Management page for chrisdell.co
- Chrome MCP browser tools kept dropping permission requests mid-click ("Tool permission stream closed before response received")
- Fell back to giving Chris three options: nameserver switch (fastest), GoDaddy API (also fast), or retry browser clicking
- **Chris has NOT yet completed the DNS change. Session paused here.**

**Next session pickup for DNS:**
Ask Chris which path he wants:
1. He makes the nameserver change on GoDaddy himself (4 form fields, easiest)
2. He gets a GoDaddy API key at https://developer.godaddy.com/keys → paste it → Claude updates DNS via curl
3. Retry Chrome MCP browser automation (fragile, last resort)

Once DNS is set, `vercel domains inspect chrisdell.co` should show verified. Propagation: 5 min – 2 hrs.

### ⏳ Phase 4: QA Pass — NOT STARTED
Blocked on Phase 3 completing (so we can QA the real chrisdell.co URL, not the .vercel.app preview). Checklist:
- [ ] Every external link returns 200 (link check)
- [ ] Lighthouse score > 95 (performance, a11y, SEO)
- [ ] Mobile viewport test (iPhone/iPad sizes)
- [ ] Verify YouTube embeds load on all sections
- [ ] Design review vs. brief (spacing, typography, no-white rule enforced)
- [ ] Verify OG tags via https://www.opengraph.xyz/
- [ ] Favicon added (currently using Next.js default)
- [ ] Social preview image generated (currently none — just metadata)

### 📝 Phase 5 Backlog (post-launch polish, ideas only)
- Custom favicon using FE blue on black
- Generate OG/social preview image (1200×630 PNG)
- Add `sitemap.xml` and `robots.txt`
- Schema.org Person JSON-LD in `<head>` for SEO
- Smooth scroll polyfill for older Safari
- Reduced-motion media query to disable particles/animations for a11y
- Consider swapping gradient WorkCard placeholders for real screenshots (brief noted the component already supports an `imageSrc` prop — not yet implemented in v1)
- Vercel Analytics enabled

---

## Agent Team (Final, After Honest Reassessment)

After Chris pushed back on the initial 13-agent proposal (correctly), we settled on 4 core agents, specialists on demand:

| Role | When Used |
|------|-----------|
| **Builder** (primary) | Writes all code, scaffolds, deploys |
| **Design Reviewer** | Audits live site vs. brief before each ship |
| **QA Tester** | Runs link checks, Lighthouse, mobile tests |
| **Research Analyst** | Verifies stats/facts against CV/resume/portfolio docs |

Specialists (spin up only when task warrants): SEO Specialist, Security Auditor, Marketing/Launch, Brand Strategist.

---

## Chris's Working Style

- **Non-technical** — I handle ALL technical execution (Vercel, DNS, GitHub)
- **Full autopilot preferred** — build, QA, deploy, report when done
- **Zero tolerance for overselling** — pushed back on 13-agent proposal, rightfully
- **Honest answers only** — no guessing, estimating, or assuming
- **Expects questions** — "if you're not asking questions, you're guessing"
- **Core values:** organized, efficient, optimized, maximize resources
- **Cross-device goal:** work seamlessly from iMac, iPhone, laptops via GitHub + MEMORY.md sync

---

## Cross-Device Access (How This Works)

- **GitHub = the cloud master copy** of this project
- **Every device** clones from `github.com/chrisdell88/chrisdell-portfolio` to `~/Projects/chrisdell-portfolio`
- **MEMORY.md** (this file) is committed to the repo, so any device/session reads it first and has full context
- **Vercel** auto-rebuilds the site on every `git push` — no manual deploy needed
- **Never manually move files between devices** — always `git pull` / `git push`

---

## Known Gotchas / Quirks

- **Next.js 16 breaking changes:** APIs differ from training data. Read `node_modules/next/dist/docs/01-app/` before writing layout/page/font code. Use `LayoutProps<'/'>` (global helper, no import needed).
- **Tailwind v4:** Uses `@import "tailwindcss";` + `@theme inline` in CSS, NOT the old `tailwind.config.js` pattern.
- **Inline styles used heavily in page.tsx** — intentional for V1 speed. OK to refactor into styled components later if needed, but not a priority.
- **Particle canvas:** Capped at 35 particles on mobile (<768px) for performance. Uses `requestAnimationFrame`, cleans up on unmount.
- **Vercel `.vercel/` folder:** gitignored automatically, contains project link.
- **Path prior sessions used:** `~/Downloads/chrisdell-portfolio/` — the project has since been moved to `~/Projects/chrisdell-portfolio/` (proper location).
