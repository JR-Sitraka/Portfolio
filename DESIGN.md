---
name: Deep Studio
description: Warm, forest-green-on-cream design system for a student engineer portfolio. Dark forest-green hero, cream body sections, minimal information-dense-on-demand cards. Modern and elegant — no gradients, no decorative noise, no video backgrounds.
version: alpha (v3 — color + hero + card revision, see Revision Log)
---

## Overview

Deep Studio is built on a single structural idea: **one dramatic dark moment, then clarity**.

The navigation and hero live on a deep forest-green surface. Everything below that — projects, stack, logs, footer — lives on a warm cream surface. The transition between them is the page's only dramatic move. Everything else earns its place through contrast ratios, spatial precision, and restraint.

This version replaces v1's near-black/teal system entirely (not extends it, as the intermediate navy revision did — that revision was tested and discarded before shipping). The forest green now serves the role the near-black and navy previously did.

This is not a dark-mode portfolio. It is a portfolio with one dark section. That distinction matters for implementation.

## Colors

WARNING: Values below are visual estimates from reference screenshots, not color-picked from a source file. Treat as a working draft — a proper eyedropper pass before calling this final is worth doing, not optional polish.

**Dark zone — hero and navigation only:**
- Background: `#2C4A3B` (deep forest green)
- Text: cream/off-white, `#F5F1E8`
- Structural elements (borders, icon strokes, decorative frames): `#2C4A3B` outline against the cream zone, or a lighter tint against itself

**Light zone — all sections below the hero:**
- Background: `#F5F1E8` (warm cream, not white, not blue-tinted — this supersedes both v1's white and the discarded v2 blue-tint)
- Text: near-black charcoal, `#1A1A1A` (not pure black)
- Card/component borders: thin `#2C4A3B` outline — structural, not decorative
- Card background: same cream as page background, or a very slightly distinct tint — confirm visually once color-picked values are in, since screenshots suggested these may currently read as too similar (see Known Gaps)

**Accent — interaction and highlights only:**
- A lighter, more teal-leaning green, approximately `#3F7A5C`, used for: hover states, the highlighted phrase within hero subtext ("AI engineering"), link text ("VIEW PROJECT →")
- Never used as a large background fill

**Status system (provisional — not yet used on the current card design, reserved for the future project-detail page):**
- Kept deliberately off the single-hue system for the same reason as v2: status indicators need to be quickly distinguishable at a glance. Exact values to be defined when the detail page itself is designed.

## Typography

Unchanged in family/role assignments from v1/v2. Two fonts, three roles. Load via `next/font/google`.
- **Space Grotesk** — display headlines, card titles. Heavy weight, tight negative tracking.
- **Inter** — all body copy, paragraphs, nav labels.
- **JetBrains Mono** — section numbers (`01 //`), status labels, category tags, decorative small-caps text (e.g. "FOLLOW ME:"). Never used for body copy.

Rules unchanged: never mix Space Grotesk and JetBrains Mono in the same text element; section headers follow `[monospace number] // [CAPS TITLE IN MONO]`; all text left-aligned except the footer cluster.

## Hero Section (revised this version)

- **Image shape: rounded-square, NOT the v1/v2 parallelogram.** This is a deliberate, confirmed departure — see Revision Log for why. Do not reintroduce the clip-path parallelogram without an explicit decision to revert.
- **Layered frame decoration:** an open-bracket outline shape (`#2C4A3B`), offset behind the image, visible peeking out from two corners — adapted from an external reference, restyled into this system's colors and restraint level (no added colors, no extra decoration beyond the single bracket outline).
- **Intro line accent:** a short dash/rule mark next to "Hello there, I'm [name]," in the muted secondary color.
- **Subtext highlight:** exactly one phrase within the hero's descriptive subtext rendered in the accent color (`#3F7A5C`) — currently "AI engineering." Do not highlight additional phrases; the restraint is the point.
- **Social row:** a small "FOLLOW ME:" label (JetBrains Mono, small, uppercase) with outline-style icon links (GitHub, LinkedIn) — positioned below the two existing CTA buttons, not replacing them.
- **Existing elements unchanged:** headline copy, subtext copy (aside from the one highlighted phrase), both CTA buttons, two-column layout.

## Project Cards (revised this version — fully minimal)

Deliberately stripped down from v1/v2's information-dense version:
- **Contents, in order:** a small line-art icon (not a logo, not a screenshot — this is what structurally prevents the image-sizing bug found in the previous icon system), the project title, and — **only for real/live projects** — a `VIEW PROJECT →` text link at the bottom.
- **Removed entirely from the card face:** description text, tech tag pills, status badges. This information is not deleted from the product — it's intended to live on the future per-project detail page (see Revision Log), not lost.
- **Placeholder/not-yet-real projects:** icon and title only, no link — this is the honest fix for the `[Modular Placeholder]` text bug found during the original audit. There's no body text left to accidentally ship unfinished.
- Card style: cream background, thin `#2C4A3B` border, rounded corners. Equal-width grid, unchanged from the original layout.

## Project Detail Page (in progress — not yet built)

Structure and framing follow the reference closely, per explicit decision — only one section's *content* is redefined, not its position. Nothing else in this page's layout should be reinterpreted freely.

### Page structure
1. **Main block** (large, primary position) — Numera web: title, description (deferred), tech tags, "Live" badge, demo media (deferred).
2. **Related block** (smaller, adjacent position, same placement as the reference's secondary project cards) — Numera Mobile: title, tech tag (React Native), noted as a separate repository from the web version.
3. **Access & Status block** (same frame and position as the reference's "Active Deployments" — content redefined, see below).
4. **Project Notes block** (same position as the reference's "Project Lab Notes") — the two reused log entries.

### Access & Status (replaces "Active Deployments" — confirmed decision)
The reference's version was a multi-project uptime dashboard, which doesn't fit inside a single project's own page — and its green "online" dots would misrepresent a downloadable APK as a running live service, which it isn't. This section instead states plainly how to actually access each version:

- **Web** — status dot: teal/"Live" color (reuses the existing Live tag color, since this genuinely is a live, running service). Primary link: Live Demo. Secondary link: GitHub Repo.
- **Mobile** — status dot: amber/neutral (reuses the existing "In Development"-style tag color, deliberately *not* the live-green — a downloadable APK is not an online service). Label: "Downloadable (APK via GitHub)." Link: GitHub Repo.

No "What's Next" section — considered, explicitly declined.

**Numera (web) block:**
- Existing title, tech tags (Next.js, Vercel), "Live" badge, GitHub + Live Demo links — already known, reused as-is.
- Description: deferred (see below).

**Numera Mobile (related) block:**
- A separate GitHub repository — NOT the same codebase as the web version.
- Distribution: downloadable APK from that repo, surfaced via the Access & Status block above with an accurate (non-"Live") label.
- Tech: React Native.
- GitHub URL: not yet provided. **Blocking** — this block can't be built until it's supplied.

**Project notes (reused, not invented):**
Two existing homepage chronological-log entries are Numera-specific and will be surfaced here too (staying on the homepage log as well — not removed from there):
- "Migrated Numera core application components to a responsive React Native environment."
- "Successfully engineered and deployed Numera web prototype to Vercel."

**Deliberately deferred, not forgotten:**
- **Final wording** for the Numera description and any other copy on this page. Held on purpose until other technical modifications to this page settle, since content may change as those land — do not write speculative copy in the meantime.
- **Demo media** — a muted, looping video (not a literal `.gif` file — same visual effect, far smaller) showing the real app in use, to be provided later via screen recording. Must respect `prefers-reduced-motion`, per this system's existing Framer Motion principle.

**Note on scope:** Numera itself (the actual project) is separate work, only touched after the portfolio is finished. This page is being built as a *template/foundation* — structure and framing locked in now, real data (wording, recording, mobile URL) dropped in later without needing to rebuild the page itself.

**Still needed before this page is fully populated:**
1. Numera Mobile's GitHub repo URL.
2. Final wording (deferred by choice).
3. Demo recording (deferred by choice).

## Layout, Elevation, Components (unchanged from v1/v2)

Max content width `1200px`, `64px`/`24px` padding desktop/mobile. Shadow only on light-surface hover states (`0 8px 30px rgba(0,0,0,0.08)`), never on dark surfaces. Tech cards and lab-log timeline unchanged in structure — only their color tokens shift to this version's palette (border `#2C4A3B` at low opacity in place of the previous neutral or navy-tinted hairline).

## Do's and Don'ts

- Keep `#2C4A3B` as the only dark-zone background — hero and nav only
- Use the accent green only on hover/interactive/highlighted-phrase elements
- Use simple line-art icons for project cards — never logos or screenshots, structurally avoids the prior sizing bug
- Keep the rounded-square image shape — the parallelogram is retired, not toggled per-page
- Never add gradients, glows, blurs, or backdrop filters
- Never show description text or tech tags directly on a project card face
- Never ship placeholder/lorem-style text to production — an icon-and-title-only card with no link is the correct empty state, not a card with placeholder body copy

## Known implementation gaps (as of this revision)

- The `01 //` numbering prefix is missing from the "SELECTED EXPERIMENTS" header in the current build — every other section on the page has one, this one doesn't yet. Small, cheap fix, deliberately deferred rather than spent this round.
- Card background vs. page background may currently be too visually similar — worth a real check once exact colors are picked (see the warning under Colors).
- The project-detail page (expand -> demo + related + status + notes) is scoped and agreed on, but not yet designed. Description text, tech tags, and status info removed from the card face are not implemented anywhere yet — this is real, temporarily-missing functionality, not just a card simplification.

## Revision Log

**v3 (this revision):** Full color system replaced — forest green/cream, not an extension of v1's teal accent (unlike the v2 navy attempt, which kept `#00b4d8` as a preserved thread; this version's palette wasn't chosen to extend v1, it was chosen fresh). Hero gained a layered frame decoration, dash accent, one highlighted subtext phrase, and a social-links row. Profile image shape deliberately changed from the v1/v2 parallelogram to a rounded square — this was an explicit, confirmed trade-off, not an oversight; the parallelogram is retired. Project cards stripped from information-dense to fully minimal — description/tags/status moved conceptually to a not-yet-built detail page, not deleted from the product.

**v2 (tested, discarded before shipping):** A navy-to-pale-blue tonal ramp extending v1's teal accent. Mocked in v0, rejected on sight before any code shipped — kept here only as a record that it was considered, not as history worth reviving.

**v1:** Original near-black/white/teal system with the parallelogram signature image shape (see git history for the original file).
