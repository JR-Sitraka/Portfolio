---
name: Deep Studio
description: >
  Premium dark-to-light design system for a student engineer portfolio.
  High-contrast dark hero, pure white body sections, single electric teal accent.
  Modern and elegant — no gradients, no decorative noise, no video backgrounds.
version: alpha

colors:
  primary:          "#0a0a0a"
  surface:          "#ffffff"
  surface-alt:      "#f5f5f7"
  text-on-dark:     "#f5f5f7"
  text-primary:     "#1d1d1f"
  text-secondary:   "#6e6e73"
  accent:           "#00b4d8"
  accent-hover:     "#0096b8"
  border-light:     "#e5e5e5"
  border-dark:      "rgba(255, 255, 255, 0.10)"
  tag-live-bg:      "rgba(0, 180, 216, 0.10)"
  tag-live-text:    "#00b4d8"
  tag-dev-bg:       "rgba(255, 200, 0, 0.10)"
  tag-dev-text:     "#9a7200"
  tag-planned-bg:   "rgba(110, 110, 115, 0.10)"
  tag-planned-text: "#6e6e73"

typography:
  display:
    fontFamily:    Space Grotesk
    fontSize:      4.5rem
    fontWeight:    700
    letterSpacing: -0.03em
    lineHeight:    1.0
  h2:
    fontFamily:    Space Grotesk
    fontSize:      2rem
    fontWeight:    600
    letterSpacing: -0.02em
    lineHeight:    1.2
  h3:
    fontFamily:    Space Grotesk
    fontSize:      1.25rem
    fontWeight:    600
    lineHeight:    1.3
  body-lg:
    fontFamily:  Inter
    fontSize:    1.125rem
    lineHeight:  1.75
  body-md:
    fontFamily:  Inter
    fontSize:    1rem
    lineHeight:  1.65
  label-mono:
    fontFamily:    JetBrains Mono
    fontSize:      0.75rem
    fontWeight:    500
    letterSpacing: 0.08em

rounded:
  sm:   4px
  md:   8px
  lg:   16px
  full: 9999px

spacing:
  xs:  4px
  sm:  8px
  md:  16px
  lg:  32px
  xl:  64px
  2xl: 128px

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor:       "{colors.primary}"
    rounded:         "{rounded.sm}"
    padding:         "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"

  button-outline:
    backgroundColor: "transparent"
    textColor:       "{colors.text-on-dark}"
    rounded:         "{rounded.sm}"
    padding:         "12px 28px"
  button-outline-hover:
    backgroundColor: "rgba(255, 255, 255, 0.08)"

  nav:
    backgroundColor: "{colors.primary}"
    textColor:       "{colors.text-on-dark}"

  hero-section:
    backgroundColor: "{colors.primary}"
    textColor:       "{colors.text-on-dark}"

  body-section:
    backgroundColor: "{colors.surface}"
    textColor:       "{colors.text-primary}"

  project-card:
    backgroundColor: "{colors.surface}"
    textColor:       "{colors.text-primary}"
    rounded:         "{rounded.md}"
    padding:         "28px"
  project-card-hover:
    backgroundColor: "{colors.surface-alt}"

  tech-card:
    backgroundColor: "{colors.surface-alt}"
    textColor:       "{colors.text-secondary}"
    rounded:         "{rounded.md}"
    padding:         "20px"
  tech-card-hover:
    textColor: "{colors.accent}"

  status-live:
    backgroundColor: "{colors.tag-live-bg}"
    textColor:       "{colors.tag-live-text}"
    rounded:         "{rounded.full}"
    padding:         "2px 10px"
  status-dev:
    backgroundColor: "{colors.tag-dev-bg}"
    textColor:       "{colors.tag-dev-text}"
    rounded:         "{rounded.full}"
    padding:         "2px 10px"
  status-planned:
    backgroundColor: "{colors.tag-planned-bg}"
    textColor:       "{colors.tag-planned-text}"
    rounded:         "{rounded.full}"
    padding:         "2px 10px"

  profile-image-container:
    width:    "100%"
    height:   "520px"
    rounded:  "0px"
---

## Overview

Deep Studio is built on a single structural idea: **one dramatic dark moment, then clarity**.

The navigation and hero live on a near-black surface (`#0a0a0a`). Everything below that — projects, stack, logs, footer — lives on pure white. The transition between them is the page's only dramatic move. Everything else earns its place through contrast ratios, spatial precision, and restraint.

The sole accent color is electric teal (`#00b4d8`). It appears exclusively on interactive and status elements: CTA buttons, hover states on tech icons, and the "Live Deployment" status badge. It should never fill a large surface or appear as a section background.

This is not a dark-mode portfolio. It is a portfolio with one dark section. That distinction matters for implementation.

## Colors

The palette is organized into three zones:

**Dark zone — hero and navigation only:**
- Background: `#0a0a0a` (near-black, not pure black — avoids harshness under bright monitors)
- Text: `#f5f5f7` (warm off-white, not pure white)
- Borders: `rgba(255, 255, 255, 0.10)` — ultra-subtle, barely-there dividers
- Secondary text: `#6e6e73` — muted labels, nav items

**Light zone — all sections below the hero:**
- Background: `#ffffff` primary
- Alternate surface: `#f5f5f7` for tech cards, timeline rows, alternating rows
- Text: `#1d1d1f` primary, `#6e6e73` secondary
- Borders: `#e5e5e5` at 1px — never heavier

**Accent — interaction only:**
- `#00b4d8` on hover states, active elements, live-status tags, CTA buttons
- `#0096b8` on button hover/pressed states
- Never use accent as a background for any section or large container

Status badge palette is intentionally desaturated — the colors are hints, not announcements.

## Typography

Two fonts, three roles. Load via `next/font/google`.

- **Space Grotesk** — display headlines and section titles only. Heavy weight, tight negative tracking. The personality of the page.
- **Inter** — all body copy, paragraphs, card descriptions, nav labels. Neutral and disappears into the content.
- **JetBrains Mono** — section numbers (`01 //`), dates in the lab log, status labels, category tags. Signals technical precision. Never used for body copy.

Rules:
- Never mix Space Grotesk and JetBrains Mono in the same text element
- Display headline (`STUDENT ENGINEER`) uses `font-size: 4.5rem`, `font-weight: 700`, `letter-spacing: -0.03em`
- Section headers follow the exact pattern: `[monospace number] // [CAPS TITLE IN MONO]`
- All text is left-aligned. Nothing is centered except the footer cluster.

## Layout

Single-page vertical scroll. Max content width `1200px`, centered with `64px` horizontal padding on desktop, `24px` on mobile.

**Hero layout:** Asymmetric two-column grid on desktop — text left at 55%, profile image right at 45%. On mobile, text above, image below.

**Sections below hero:** Full-width white background. Internal content constrained to max-width. Generous vertical padding (`96px` top/bottom on desktop, `64px` on mobile).

## Elevation & Depth

No shadows on dark surfaces. On light surfaces:

- **Project cards at rest:** no shadow
- **Project cards on hover:** `box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08)` + `transform: translateY(-4px)`
- **Transition:** `300ms ease` on all hover properties

Do not add shadows to nav, tech cards, or the footer.

## Shapes

**Profile image container — the signature element:**

The image container uses a CSS `clip-path` to create a tall vertical parallelogram leaning to the right. The image itself is not rotated — only the clip boundary is shaped. This creates an angled, editorial frame that feels architectural without being decorative.

```css
.profile-image-wrapper {
  aspect-ratio: 2 / 3;
  width: 100%;
  max-width: 380px;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  overflow: hidden;
  position: relative;
}

.profile-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transform: scaleX(1.12); /* compensates for the clip crop on both sides */
}
```

Do not apply `border-radius` to this container. The parallelogram shape is the border treatment.

On mobile (below `768px`), switch to a standard rectangle:
```css
clip-path: none;
aspect-ratio: 3 / 4;
border-radius: 4px;
```

## Components

**Tech cards (`<TechCard />`):**
- Display the tech icon (from `react-icons/si` — Simple Icons) at rest, centered in the card
- Icon size: `32px`
- At rest: icon renders in `#6e6e73` (muted gray)
- On hover: icon transitions to the tech's official brand color (see Simple Icons hex reference), card background shifts to `#f5f5f7`
- If a tech has no clear brand color (e.g., CSS), default hover color to `#00b4d8`
- The tech name renders below the icon in `JetBrains Mono`, `0.7rem`, also muted at rest
- Transition: `200ms ease` on color and background

**Project cards (`<ProjectCard />`):**
- Top row: category label (JetBrains Mono, caps) + status badge (colored pill)
- Title in Space Grotesk h3
- Thin `1px` horizontal rule (`#e5e5e5`) below the title
- Description in Inter body-md, secondary text color
- Tech tag pills at the bottom: `#f5f5f7` background, `#6e6e73` text, `border-radius: 9999px`, `padding: 2px 10px`
- GitHub and Live buttons appear only when the respective link is not `null`

**Lab log timeline:**
- Thin `1px` vertical line in `#e5e5e5` running along the left edge
- Date on the left in JetBrains Mono, `#00b4d8` color
- Event text on the right in Inter body-md
- Each entry stagger-reveals on scroll using Framer Motion

## Do's and Don'ts

- ✅ Keep `#0a0a0a` strictly to the nav and hero — nowhere else
- ✅ Use `#00b4d8` only on interactive signals and the "Live" status badge
- ✅ Use `react-icons/si` for all tech stack icons, colored on hover
- ✅ Apply the parallelogram `clip-path` to the profile image container
- ✅ Left-align all body content and section headers
- ✅ Respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion()` hook
- ❌ Never add gradients, glows, blurs, or backdrop filters anywhere
- ❌ Never use more than one accent color
- ❌ Never center-align section headers
- ❌ Never add `box-shadow` to components on dark surfaces
- ❌ Never apply `border-radius` to the profile image parallelogram container
- ❌ Never use `clip-path` on mobile — revert to a standard rectangle with `border-radius: 4px`
