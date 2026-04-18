# The Ridge — Design System

A fun, summery, green design system for **The Ridge** — a personal website for logging summer golf rounds with friends. Think country-club scorecard meets backyard BBQ: hand-lettered headlines, scorecard textures, fairway greens on warm cream paper, a flash of flag red.

## Sources

- **Logo (provided):** `assets/logo-ridge.png` — green apple with golf-ball dimples, hand-lettered "THE RIDGE" wordmark.
- **GitHub repo (provided):** `Rozzy122/The-Ridge-` — contained only a bare README ("Golfing with friends"). No codebase or existing UI to copy. System designed from scratch using the logo as the north star.
- **Brief (from user):** Summer project. Log rounds, include course, playing partners, scores. "Fun, a shade of green, golf-themed."

## Index

- `README.md` — this file
- `SKILL.md` — cross-compatible skill definition
- `colors_and_type.css` — full token layer (CSS vars) + base type styles
- `assets/` — logo + any brand imagery
- `preview/` — design system tab cards (see Design System tab)
- `ui_kits/website/` — interactive hi-fi mockup of the full site

## Content Fundamentals

**Voice:** warm, funny, self-deprecating. This isn't a PGA Tour app — it's four guys trying to break 90 on a Saturday.

- **Person:** First person plural when talking about the group ("we played", "our rounds"). Direct "you" for the viewing user ("Welcome back, Will.").
- **Casing:** Sentence case for almost everything. Hand-lettered headlines can be Title Case with a period. Uppercase only for eyebrows, labels, and table headers (tracked letter-spacing 0.14–0.22em).
- **Tone examples:**
  - Hero greeting: *"Welcome back, Will."*
  - Section title: *"Recent rounds"* (not "Your Round History")
  - Eyebrow: *"The Logbook"*, *"The Crew"*, *"The Book"*
  - Card title: *"Pebble Creek GC"* with a friendly +12 chip (not "Score Differential: +12")
  - Course note: *"Named the site. Obviously."* — pithy, conversational
  - Button: *"+ Log a round"* (not "Submit New Round Entry")
- **Numbers:** Round numbers are zero-padded (`07`, not `7`) — it's a logbook. Scores use tabular mono so columns align.
- **Emoji:** Sparingly, only for weather (☀️ ⛅ 🌧). Never in body copy, never in nav.
- **No AI-slop phrasings.** No "unlock", no "elevate", no "journey". Short, specific, first-hand.

## Visual Foundations

- **Color system.** Deep fairway (#244516 → #3B6B2A) as background and ink; vivid lime (#8FC740, lifted from the logo) as the unmistakable brand accent; warm cream (#F7F1E1) paper backgrounds; flag red (#D94A3D) reserved for destructive actions and bogey+. Everything sits on a warm neutral, never cool gray.
- **Type.** Four families:
  - **Caveat Brush** — hand-lettered display, mimics the logo wordmark (H1/H2).
  - **Shrikhand** — chunky retro sans/serif for signage, section labels, H3.
  - **DM Sans** — quiet, legible body.
  - **DM Serif Display (italic)** — editorial pull-quotes and ledes.
  - **JetBrains Mono (tabular)** — scorecard numerals, scores, stats.
- **Backgrounds.** Primary bg is warm cream, not white. Hero surface is deepest green with a subtle radial green glow + faint warm highlight. A scorecard grid texture (20–24px lines at `--line`) is available for accent surfaces. Never gradients for decoration; only soft radial atmospheric glows.
- **Borders.** 1px solid `--line` (#D8C9A7) for all cards. Hairlines match paper lines. Dashed borders signal "draft" or "add new" states.
- **Shadows.** Warm, soft, double-layer: a 1–2px hard offset (simulates paper lift) plus a long blur. See `--shadow-sm/md/lg`. Primary buttons use a chunky 3px flat bottom shadow in the button's dark tone (no blur) — reads like a printed sticker.
- **Corner radii.** Cards = 22px (lg). Buttons = pill. Inputs = 8px. Pill badges = full pill. Icon squares = 14px (md). Nothing sharp; nothing overly bubbly.
- **Hover.** Lift 2px, shadow md→lg. Primary button darkens lime → lime-ink and text goes white. Ghost button fills with lime-soft.
- **Press.** No scale — just a 1px translate-down. Buttons swap shadow offset to 1px.
- **Focus.** 3px lime-soft outer ring + lime-ink border. Always visible, always branded green.
- **Animation.** Sparse. 120ms ease on hovers. No bounces, no page transitions. The vibe is paper, not iOS.
- **Transparency & blur.** Rare. Only used in the nav's subtle dark green gradient. Avoid frosted-glass effects.
- **Imagery vibe.** Warm, sunlit, golden-hour. If real photos appear they should lean summer/evening/grass. No cool or grayscale photography.
- **Layout.** Generous padding (32–40px gutters). Cards breathe. Numeric stats get their own column with uppercase micro-label beneath.
- **Iconography.** Minimal. Flag pins, golf ball dimples, and hand-drawn SVG chart marks where needed. See ICONOGRAPHY below.

## Iconography

- **Approach:** very minimal. The brand leans on hand-lettering and color, not icons. Nav labels are text. Buttons use a literal `+` glyph instead of a plus icon.
- **Custom motifs:** golf flag (inline SVG in CoursesPage), apple-shaped ball from logo, scorecard grid texture (CSS pattern).
- **Emoji:** only for weather (☀️⛅🌧). Never in nav or CTAs.
- **Recommended icon library:** if a richer icon set is needed, use **Lucide** (stroke 1.75–2, round caps) at `https://unpkg.com/lucide-static`. Its stroke weight and friendliness match the brand.
- **Unicode marks:** `+`, `→`, `·` (middot), `—` (em dash). The middot is used in meta rows ("Jul 12 · with Connor · sunny & breezy").

## Font substitution notice

No font files were provided with the logo. **Font choices are Google Fonts proxies** for the logo's hand-lettered wordmark:
- Wordmark in logo ≈ **Caveat Brush** (close-enough hand-drawn marker feel).
- If you have the original lettering as a font or SVG asset, please drop it in `fonts/` and update `--font-display`.

## UI Kits

- `ui_kits/website/` — main website. `index.html` is the runnable click-thru prototype. Pages: Home (dashboard), Round Detail (full scorecard), Log Round (form), Courses.
