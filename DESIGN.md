---
name: Graphite & ember
description: Dark graphite portfolio surface with a single ember accent, one global 1152px shell, flat separation by hairline and surface value, and no emitted light. Phase 1, as built and verified.
version: Phase 1 — implemented against reference build revision 10.1
---

## What this document is

The design system this repository actually implements, as built and verified — not as planned. It supersedes the "Deep Studio" v3 system entirely; none of that palette, hero treatment or card model survives.

Every value below is either taken from `styles/globals.css` in this repository or measured on the running page. Where something was measured, the measurement and its verification tier are stated. Where something has not been verified, it is listed in "Known limitations" rather than implied to be done.

The external design package (design language, component specifications, handoff, and the 1:1 reference build) lives outside this repository and is not committed. This file is the repository-facing distillation of it.

## Overview

One dark ground, one accent, and flat separation. Distinction comes from surface value and a 1px hairline — never from a shadow, glow, blur or gradient. There is no elevation system; there is a surface ladder. Nothing on the site emits light.

The accent is used sparingly and only to mean *this is the action* or *this is this project's identity*. Project accents are interactive-state colours: at rest every project title is `--text-primary`, every card border is `--border`, and every accent rule is undrawn.

Single theme. There is no light mode.

## Colour tokens

Defined on `:root` in `styles/globals.css`.

```
--bg                 #0F1113   page ground
--surface            #171A1D   cards, chips, contact card, nav on scroll
--surface-raised     #1E2226   media wells, inner panels
--text-primary       #EDEFF1
--text-secondary     #A7AEB5
--accent             #FF6A45   ember
--on-accent          #241006   text/icon on an accent fill
--border             #2A2F34   decorative hairline only
--border-interactive #646E75   the visible boundary of any interactive control
--status-live        #5ED6A4
--on-status-live     #04241A   retained token; not used by the Live chip

--project-accent-1   #FF6A45   Numera
--project-accent-2   #4FB3A4   Trailhead
--project-accent-3   #E0787E   Starter Kit V4.2
```

`--border` and `--border-interactive` are not interchangeable. Anything a user can click, tap or focus whose boundary is its only affordance uses `--border-interactive`.

### Measured contrast — agent-verified on the built page

Every pair below was measured on the running page by reading the tokens off `document.documentElement` and computing WCAG ratios, not by trusting the token table. All pass.

| Pair | Measured | Required |
|---|---|---|
| `--text-primary` on `--bg` | 16.41:1 | 4.5:1 |
| `--text-primary` on `--surface` | 15.16:1 | 4.5:1 |
| `--text-secondary` on `--bg` | 8.44:1 | 4.5:1 |
| `--text-secondary` on `--surface` | 7.79:1 | 4.5:1 |
| `--text-secondary` on `--surface-raised` | 7.14:1 | 4.5:1 |
| `--accent` on `--bg` | 6.67:1 | 4.5:1 |
| `--accent` on `--surface-raised` | 5.64:1 | 4.5:1 |
| `--on-accent` on `--accent` | 6.42:1 | 4.5:1 |
| Live label, translucent form over the empty well | 7.21:1 | 4.5:1 |
| Live label, opaque form over the Numera screenshot | 9.68:1 | 4.5:1 |
| `--project-accent-2` on `--surface` | 6.92:1 | 4.5:1 |
| `--project-accent-3` on `--surface` | 5.95:1 | 4.5:1 |
| `--border-interactive` on `--bg` | 3.63:1 | 3:1 |
| `--border-interactive` on `--surface` | 3.35:1 | 3:1 |
| `--border-interactive` on `--surface-raised` | 3.07:1 | 3:1 |
| Accent icon on its own 10% tint | 5.41:1 | 4.5:1 |
| Hero dot field, worst case: `--text-primary` on a dot | 14.51:1 | 4.5:1 |
| Hero dot field, worst case: `--text-secondary` on a dot | 7.46:1 | 4.5:1 |
| Hero dot field, worst case: `--accent` on a dot | 5.89:1 | 4.5:1 |
| Hero dot field, worst case: `--border-interactive` on a dot | 3.21:1 | 3:1 |

Four boundaries sit below 3:1 by design and are permitted because none is an interactive control's affordance and none carries state a user must perceive: `--border` on `--bg` (1.40:1), the principle card at rest (1.29:1) and on hover (1.63:1), and the Contact panel's accent tint (1.34:1). Where state matters, the focus ring carries it.

### The Live chip has two backing forms

Typography, geometry, border, label colour and animation are identical; only the background differs, and which one applies is decided by what sits behind the chip.

- Over the dark empty-media well: `--status-live` at 10%, translucent — 7.21:1.
- Over an image-backed well: opaque `--surface` — 9.68:1.

The second form exists on measured evidence, not preference. Over the near-white Numera screenshot the translucent form measures 1.63:1 and its border 1.12:1. Any new image-backed media is measured against its own pixels before shipping.

### Technology brand colours

Resolved in `lib/iconMap.js`, which is the single source for both the mark and its colour. Eleven technologies; nine carry `used: true` and appear in the toolbox, two exist only as project tags.

Monochrome brands (Next.js, Vercel, Markdown) render in `--text-primary`. One substitution is in the shipped set: CSS's authentic `#663399` measures 2.08:1 against `--surface` and fails the 3:1 non-text threshold, so `#9A6ED4` (4.62:1) is used. The visible label always carries the technology name, so identification never depends on colour.

## Typography

Space Grotesk, Inter and JetBrains Mono, loaded through `next/font/google` in `pages/_app.js`. No web-font dependency is added.

`pages/_app.js` renders a wrapper carrying next/font's CSS variables. The three family tokens — `--font-display`, `--font-body`, `--font-mono` — are declared on `.app-shell`, **inside** that wrapper, because at `:root` those variables do not resolve and every family token would compute to guaranteed-invalid. This is a Pages Router requirement, not a design decision.

Scale, implemented as utility classes with the desktop column behind `@media (min-width:1024px)`:

| Class | Desktop | Mobile |
|---|---|---|
| `.t-display` | 64px | 40px |
| `.t-h2` | 42px | 30px |
| `.t-h3` | 34px | 24px |
| `.t-h4` | 24px | 20px |
| `.t-body-lg` | 18px | 16px |
| `.t-body` | 16px | 15px |
| `.t-body-sm` | 14px | 14px |
| `.t-label` | 15px | 15px |
| `.t-meta` | 14px | 13px |
| `.t-meta-sm` | 13px | 12px |
| `.t-eyebrow` | 14px | 13px |

Nothing renders below 12px. Monospace is restricted to the availability badge, technology tags and chips, the project-count label, portrait metadata, and the footer line — never a heading, paragraph, button label or project description.

## Layout

One global shell for every section: `--content-max` 1152px, `--gutter` 20px rising to 32px from 640px up. The only exception is the toolbox strip's full-bleed outer background, which is deliberate.

```
mobile   < 768px
tablet   768px – 1023px
desktop  ≥ 1024px
```

Shape and focus tokens: `--radius-tag` 8px, `--radius-media` 12px, `--radius-card-sm` 18px, `--radius-card` 24px, `--radius-panel` 26px, `--radius-mark` 10px, `--radius-pill` 999px, `--border-width` 1px, `--focus-width` 2px, `--focus-offset` 2px. There are no shadow tokens; that is a rule, not an omission.

## Composition

Section order: Navigation → Hero → Toolbox → Selected Work → About → Contact → Footer.

- **Navigation** — fixed, fully transparent at rest; past 24px of scroll it takes `--bg` at 80%, `backdrop-filter: blur(12px)` and a `--text-primary` 5% bottom border, all over 300ms. That blur is the single authorised exception to the no-blur rule.
- **Hero** — twelve columns at ≥1024px, text spanning 7 and portrait 5 with a 40px gap; top padding 112px rising to 144px from 640px up. Behind the content sit a CSS dot field (1px dots on a 24px grid) and two ambient outlined circles (288px accent at 20%, 160px neutral at 5%), clipped by the hero.
- **Portrait** — capped at 384px, 4:5 at every viewport, 16px radius with a `--text-primary` 10% hairline, and an offset accent outline at `inset:-12px` / `rotate(-2deg)` / 24px radius. Two metadata labels sit over the bottom edge on the smallest flat `--surface` backing the measurement demanded.
- **Toolbox** — full-bleed strip between hairlines, 26s linear marquee, paused on hover and on keyboard focus, horizontally scrollable with the animation off under reduced motion. The duplicated set for the seamless loop is `aria-hidden`.
- **Selected Work** — `1.45fr / 1fr` with an 18px gap at ≥1024px; featured full-width with compacts two-up at 768–1023px; single column below 768px, featured first. Projects beyond the first three wrap into a full-width row of equal compact cards below the grid. The count is derived from the array length and zero-padded.
- **About** — twelve columns at ≥1024px: a five-column intro and three principle cards spanning seven, stacking below 1024px.
- **Contact** — the one panel with a tinted boundary, `--accent` at 20%.
- **Footer** — hairline, wordmark, link row, three social buttons at 40px, and a metadata line whose year is derived at render time.

## Motion

```
--dur-micro 150ms   --dur-hover 250ms   --dur-card 350ms   --dur-enter 450ms
--dur-media 600ms   --dur-rule 500ms    --dur-panel 450ms  --dur-twinkle 2400ms
--marquee 26s       --ease-standard cubic-bezier(.16,.84,.3,1)
```

Hover motion on primary pills is opt-in per control, never a blanket `.cta-pill` rule: only the hero CTA (scale 1.03 with a 2px up-right arrow shift) and "Visit live" (scale 1.04, stationary arrow) carry it.

**Reduced motion is opt-in, in CSS, never a JavaScript toggle.** The hidden starting states for entrances and scroll reveals live inside `@media (prefers-reduced-motion: no-preference)`, so reduced motion has nothing to override and content is never hidden in the first place.

Two implementation notes worth keeping, both found by measurement rather than review:

1. The reveal animates the independent `translate` property, not `transform`. A finished animation with `fill: forwards` keeps holding every property it animates at the animation cascade origin, which outranks any rule — animating `transform` silently defeated the card's own −6px hover lift once the reveal had run.
2. The inversion in the paragraph above is not stylistic. Written the other way round — hidden by default, undone under `reduce` — the CSS minifier dropped the `translate` override as a redundant initial value, leaving revealed cards stuck 30px low under reduced motion.

Revealed content is visible by default in markup and CSS; the hidden state is applied by script only after the IntersectionObserver is confirmed active. With JavaScript unavailable the page renders complete — verified directly: in a browser surface where React never hydrated, every revealed element rendered at full opacity with no offset.

## Accessibility

- One `h1` (the hero), `h2` per section, `h3` per project and per principle card. Eyebrow labels are not headings.
- A skip link is the first focusable element and targets the main landmark.
- Every icon-only control carries an explicit `aria-label`; every decorative glyph is `aria-hidden`.
- The mobile menu is a `role="dialog"` with `aria-modal`, an accessible name, a focus trap, Escape to close, body scroll lock, and removal from the accessibility tree when closed.
- The menu trigger's accessible name tracks its state — "Open menu" / "Close menu" — alongside `aria-expanded`.
- Focus rings are 2px `--accent` at 2px offset, and project card title links take their own project accent.
- The status chip sits outside the media well's `aria-hidden` link, so its text survives in the accessibility tree.

## Data model

All content comes from `utils/portfolioData.js`. Adding a project is a data edit; it requires no layout or style change.

```
project: { id, title, status: "live" | "repository", description, accent, icon,
           media: null | { type, src, poster?, alt }, tech: [name],
           links: { live?, repo }, featured: boolean }

technology: { name, icon, color, used: boolean }

availability: { text, expires }
```

`media` is either `null` or an object; `type` is never `null`. Exactly one project is `featured`. The availability badge renders nothing when `text` is empty or `expires` has passed. Year, role, statistics and taglines are deliberately absent from the model.

## Stack

Next.js (Pages Router) with React, `styles/globals.css` as the single styling mechanism, `next/font/google` for the three families, `react-icons` for brand and interface glyphs, and Framer Motion present as a dependency. Tailwind was removed once no consumer remained.

Two rules hold across the stylesheet and every component:

1. No inline `style` sets a property that a CSS rule or media query also sets. This was the direct cause of the previous site's hero headline being stuck at 3rem at 1280px.
2. No `!important` anywhere.

## Known limitations

Stated plainly rather than passed by default.

- **Project video is unverified and unverifiable.** The model supports it; no video asset exists for any project, so nothing has ever exercised that path.
- **No dedicated social-preview image.** `seo.ogImage` points at `/portrait-sitraka-800.jpg` in the interim; a 1200×630 image is later work.
- **Trailhead and Starter Kit V4.2 are provisional selections** pending Phase 2, and both deliberately use the designed empty-media state.
- **`/numera` is a structural foundation, not a case study.** It renders only verified data already in `portfolioData.js`. The real case-study design and content are Phase 2.
- **Navigation links on `/numera` are same-page fragments** that have no targets on that route. This is a known open question about how navigation should behave off the home page, recorded rather than silently patched.
- **No systematic screenshot capture set** across the full viewport × data-state × motion-mode matrix.
- **Reduced motion has never been verified against a real operating-system setting** — only by forcing the media condition in the browser.
- **No Safari or real-device pass** has been performed.
- **The portrait is an AI-edited derivative**, approved knowingly as a recorded one-off exception. Further generation, facial or body modification, retouching and substitution remain prohibited.
