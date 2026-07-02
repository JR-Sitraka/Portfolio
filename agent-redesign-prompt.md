# Portfolio Redesign — Deep Studio
### Antigravity Agent Prompt | Phase-by-Phase Execution

---

You are a senior frontend engineer executing a visual redesign of an existing Next.js portfolio.
The attached `DESIGN.md` in the project root is your **single source of truth for every visual decision**.
Do not invent colors, fonts, shadows, or spacing values not present in that file.
Do not refactor the UX, routing, or data structure — the layout and content are correct.
This is a **visual layer redesign only**.

Work in four phases. **Pause after each phase and wait for approval before continuing.**
Output complete, file-path-labeled code blocks. Do not summarize what you are about to do — write the code directly.

---

## Phase 1 — Design Token Foundation

**Goal:** Replace the existing color and font system with the Deep Studio tokens from `DESIGN.md`.

Tasks:
1. Read `DESIGN.md` in full before writing a single line of code.
2. Run `npx @google/design.md export --format css-tailwind DESIGN.md` and place the output into `app/globals.css` under a `@theme {}` block (Tailwind v4) OR into `tailwind.config.js` under `theme.extend` (Tailwind v3). Check which version of Tailwind is installed first.
3. Update `globals.css` body defaults:
   - Background: `var(--color-surface)` (`#ffffff`)
   - Text: `var(--color-text-primary)` (`#1d1d1f`)
4. Load fonts via `next/font/google` in `app/layout.js` (or `_app.js`):
   - **Space Grotesk** — weights 600, 700
   - **Inter** — weights 400, 500
   - **JetBrains Mono** — weights 400, 500
   Apply them as CSS variables: `--font-display`, `--font-body`, `--font-mono`.
5. Verify no hardcoded hex values remain in any component file — all colors must reference the CSS custom properties.

**Do not touch any component layout or content in this phase.**

---

## Phase 2 — Hero & Navigation Redesign

**Goal:** Implement the dark hero section and navigation exactly as specified in `DESIGN.md`.

Tasks:
1. **Navigation:**
   - Background: `var(--color-primary)` (`#0a0a0a`)
   - Text and links: `var(--color-text-on-dark)` (`#f5f5f7`)
   - Nav links on hover: `var(--color-accent)` (`#00b4d8`) — color transition `200ms ease`
   - Sticky on scroll. 1px bottom border: `var(--color-border-dark)`

2. **Hero section:**
   - Full-width background: `var(--color-primary)` (`#0a0a0a`)
   - Text: `var(--color-text-on-dark)` (`#f5f5f7`)
   - Asymmetric two-column grid: text at 55%, image at 45%
   - Pre-headline label: JetBrains Mono, `0.75rem`, muted (`#6e6e73`)
   - Main headline (`STUDENT ENGINEER`): Space Grotesk, `4.5rem`, `font-weight: 700`, `letter-spacing: -0.03em`
   - Subtext: Inter, `1.125rem`, `line-height: 1.75`, secondary text color (`#6e6e73`)
   - Primary button: `var(--color-accent)` background, `var(--color-primary)` text, `border-radius: 4px`, `padding: 12px 28px`
   - Outline button: transparent background, `var(--color-text-on-dark)` border (`1px solid`), same padding

3. **Profile image container — critical spec:**
   Implement exactly as follows. Do not deviate.
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
     transform: scaleX(1.12);
   }
   ```
   On mobile (below `768px`): `clip-path: none`, `border-radius: 4px`, `aspect-ratio: 3/4`.
   Do not apply `border-radius` to the desktop container. Do not rotate the image itself.

4. **Framer Motion entrance:**
   - Hero text (Column A): `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`, `duration: 0.5`, `ease: [0.25, 0.1, 0.25, 1]`
   - Profile image (Column B): same animation, `delay: 0.15`
   - Wrap with `useReducedMotion()` check — if true, skip animations entirely

---

## Phase 3 — Tech Stack Icons

**Goal:** Replace all text-only tech cards with icon-based cards using `react-icons/si`.

Tasks:
1. Install: `npm install react-icons`
2. Create a mapping object in `lib/iconMap.js` that maps each tech name string to its Simple Icons import and official brand hex color. Include at minimum:

```javascript
import {
  SiNextdotjs, SiReact, SiJavascript, SiCss3,
  SiPython, SiNumpy, SiNodedotjs, SiFlask,
  SiVercel, SiStreamlit, SiGit, SiGithubactions,
  SiDocker, SiOpenai
} from 'react-icons/si';

export const iconMap = {
  'Next.js':         { icon: SiNextdotjs,     color: '#f5f5f7' }, // white on dark brand
  'React.js':        { icon: SiReact,          color: '#61DAFB' },
  'React Native':    { icon: SiReact,          color: '#61DAFB' },
  'JavaScript':      { icon: SiJavascript,     color: '#F7DF1E' },
  'CSS':             { icon: SiCss3,           color: '#00b4d8' }, // fallback to accent
  'Python':          { icon: SiPython,         color: '#3776AB' },
  'NumPy':           { icon: SiNumpy,          color: '#013243' },
  'Node.js':         { icon: SiNodedotjs,      color: '#339933' },
  'Flask':           { icon: SiFlask,          color: '#f5f5f7' },
  'Vercel':          { icon: SiVercel,         color: '#f5f5f7' },
  'Streamlit':       { icon: SiStreamlit,      color: '#FF4B4B' },
  'Git':             { icon: SiGit,            color: '#F05032' },
  'GitHub Actions':  { icon: SiGithubactions,  color: '#2088FF' },
  'Docker':          { icon: SiDocker,         color: '#2496ED' },
  'OpenAI API':      { icon: SiOpenai,         color: '#f5f5f7' },
};
```

3. Update `<TechCard />` to:
   - Render the icon from `iconMap` at `32px`
   - At rest: icon color `#6e6e73`, card background `#f5f5f7`
   - On hover: icon transitions to brand color from `iconMap`, card background stays `#f5f5f7` (slightly brightened via `filter: brightness(0.97)`)
   - Tech name renders below icon in JetBrains Mono, `0.7rem`, same muted-to-accent color transition
   - Transition: `200ms ease` on all color properties
   - If a tech name is not found in `iconMap`, render the name text only as a fallback — do not crash

4. Apply `whileHover={{ y: -3 }}` from Framer Motion on each card, `200ms ease`.

---

## Phase 4 — Body Sections Polish

**Goal:** Apply the Deep Studio token system to all sections below the hero: Projects, Stack Manifest, Lab Logs, Footer.

Tasks:

1. **Section headers:** All follow the pattern `[JetBrains Mono number] // [CAPS TITLE IN MONO]`
   - Color: `var(--color-text-secondary)` for the number prefix, `var(--color-text-primary)` for the title
   - Always left-aligned

2. **Project cards:**
   - Background: `#ffffff`, border: `1px solid var(--color-border-light)`, `border-radius: 8px`
   - Hover: `background: #f5f5f7`, `box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08)`, `transform: translateY(-4px)` — transition `300ms ease`
   - Status badges: use the three-state color system from `DESIGN.md` (`tag-live`, `tag-dev`, `tag-planned`)
   - Tech tags on cards: `background: #f5f5f7`, `color: #6e6e73`, `border-radius: 9999px`, `font-family: JetBrains Mono`, `font-size: 0.7rem`, `padding: 2px 10px`
   - GitHub and Live buttons: render only when the data value is not `null` — hidden entirely if `null`, no disabled/greyed state
   - Apply `whileInView={{ opacity: 1, y: 0 }}` entrance with `viewport={{ once: true }}`

3. **Lab Logs timeline:**
   - Thin `1px` vertical line in `#e5e5e5` on the left
   - Date: JetBrains Mono, `#00b4d8`, left column
   - Event text: Inter body-md, `#1d1d1f`, right column
   - Stagger reveal: `staggerChildren: 0.1` per entry, `whileInView` trigger

4. **Footer:**
   - Background: `#0a0a0a` (match the nav/hero — bookends the page)
   - Text: `#6e6e73`
   - Links (Email, GitHub, LinkedIn): `#f5f5f7` at rest, `#00b4d8` on hover
   - Copyright line: JetBrains Mono, `0.75rem`
   - Layout: centered cluster, minimal

5. **Global motion rules to enforce across all phases:**
   - Easing: `[0.25, 0.1, 0.25, 1]` universally
   - Hover cap: `300ms`
   - Entrance cap: `500ms`
   - `useReducedMotion()` checked at root — if true, all Framer Motion animations are skipped

---

## Non-Negotiable Rules (apply across all phases)

- Every color value comes from `DESIGN.md` tokens — no hardcoded hex values in components
- The parallelogram `clip-path` on the profile image is exact — no modifications
- `#0a0a0a` appears only in the nav, hero section, and footer — nowhere else
- `#00b4d8` appears only on interactive elements, hover states, Lab Log dates, and the Live status badge
- No gradients, glow effects, blur filters, or backdrop filters anywhere
- No shadows on dark-surface components
- All section headers are left-aligned — never centered
- Buttons render only when their corresponding data link is not `null`
- `react-icons/si` for all tech icons — no custom SVGs, no PNG logos

---

## Deliverable Format

For each phase, output:
- Every modified or created file as a complete code block labeled with its path
- A brief bullet list at the end of each phase noting any data assumptions or flagged decisions
- No prose summaries — code first, notes after

Pause after Phase 1 and wait for my confirmation before continuing to Phase 2.
