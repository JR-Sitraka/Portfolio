# Portfolio Implementation Blueprint: The Modular Lab Engine
### Version 2.0 — Revised & Finalized

This document serves as the comprehensive engineering specification and system prompt for the AI Agent Assistant to build the portfolio. It captures all UX, UI, copywriting, architectural, motion, and tooling choices finalized across the full planning session.

---

## 1. System Architecture & Tech Stack

### Framework: Next.js (React) + Tailwind CSS + Framer Motion

- **Why Next.js:** Best-in-class performance, SEO optimization for discoverability, and native API Router capabilities. This allows seamless deployment of Python/Flask or Node.js endpoints directly into the same repository when expanding to AI Agents and RAG systems later.
- **Styling:** Tailwind CSS for fast, utility-first implementation of the minimal grid layout.
- **Animation:** Framer Motion for all motion — keeps animation logic colocated with components rather than scattered across CSS files.
- **Data Architecture:** 100% data-driven. The layout must map over a standalone data configuration object (`portfolioData.js`) to ensure extreme modularity for a student adding future projects, stack items, and tooling entries.

---

## 2. Visual Identity & UI Guidelines

The design implements a highly sophisticated, premium, minimalist "Laboratory Notebook" aesthetic — warm cream backgrounds, high-contrast dark forest typography, and soft desaturated pastel highlights.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Background | `#f6f5f0` | Page background (warm cream) |
| Primary Text | `#122419` | Headlines, labels, body |
| Secondary Text | `#4a574e` | Muted body copy, meta labels |
| Border | `#122419` at `10%` opacity | Component dividers and outlines |
| Card Shadow (rest) | `shadow-sm` with `#122419` at `8%` opacity | ProjectCard default state |
| Card Shadow (hover) | `shadow-md` with `#122419` at `15%` opacity | ProjectCard elevated state |

### Typography

| Role | Font | Notes |
|---|---|---|
| Display / Headline | **Space Grotesk** or **Inter** | Strong, geometric, clean |
| Body / Paragraph | **Inter** | Readable, neutral |
| Monospace / Labels | **JetBrains Mono** or **IBM Plex Mono** | Dates, categories, status badges, section headers |

Both font families are available via Google Fonts and should be loaded in `_app.js` or via `next/font`.

### Aesthetic Rules

- No dark mode dashboard neons, no heavy glassmorphism gradients.
- No parallax effects, floating blobs, or spinning icons of any kind.
- Generous whitespace, asymmetric grid spacing, high-end editorial look.
- Tech stack grid uses flat, desaturated pastel squares — warm and muted, not saturated — mimicking premium UI design systems.
- Pastel backgrounds for `<TechCard />` should trend warmer and duller to complement the cream base, not fight it.

### Status Badge Color Coding

The `<ProjectCard />` must render status labels with these fixed color rules:

| Status Value | Label Color |
|---|---|
| `"Live Deployment"` | Dark forest green (`#122419`) with green-tinted background |
| `"In Development"` | Amber/warm muted yellow background |
| `"Planned Concept"` | Muted charcoal with low-opacity background |

---

## 3. Data Schema (`portfolioData.js`)

The AI Agent must read all UI contents from this centralized schema. All layout components map directly over these arrays. **Missing links use `null`, never empty string `""`.**

```javascript
export const portfolioData = {

  seo: {
    metaTitle: "Your Name // Student Engineer",
    metaDescription: "Software engineer building responsive web and mobile architectures, scaling into AI engineering — LLMs, RAG, and Intelligent Agents.",
    ogImage: "/og-image.png" // To be replaced by user
  },

  profile: {
    name: "Your Name",
    initials: "YN",
    title: "STUDENT ENGINEER",
    subtext: "Software engineer specialized in building responsive web and mobile architectures, currently scaling deep into the AI engineering pipeline — LLMs, RAG, and Intelligent Agents.",
    avatarUrl: "/placeholder-profile.jpg", // To be replaced by user
    githubUrl: "https://github.com/yourusername",
    linkedinUrl: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com"
  },

  projects: [
    {
      id: "numera",
      title: "Numera // Numbers in English",
      category: "Educational Application",
      status: "Live Deployment",
      tech: ["Next.js", "React Native", "Vercel"],
      description: "A minimalist educational tool designed for non-native English speakers to rapidly learn, recognize, and translate numbers in English. Deployed as a web app on Vercel with an active mobile repository built using React Native.",
      liveLink: "https://numera-demo.vercel.app", // Replace with real URL
      githubLink: "https://github.com/yourusername/numera"
    },
    {
      id: "project-2",
      title: "Project Alpha // Architecture Node",
      category: "System Logic",
      status: "In Development",
      tech: ["Python", "NumPy", "Flask"],
      description: "[Modular Placeholder] A secondary codebase structure optimized for numerical computing operations and modular data arrays. Prepared for scaling into future LLM and vector indexing frameworks.",
      liveLink: null,
      githubLink: null
    },
    {
      id: "project-3",
      title: "Project Beta // Experimental Node",
      category: "AI Pipeline Research",
      status: "Planned Concept",
      tech: ["Python", "Streamlit"],
      description: "[Modular Placeholder] Engineered component layout reserved for an upcoming deployment of customized Retrieval-Augmented Generation (RAG) datasets or autonomous agent tools.",
      liveLink: null,
      githubLink: null
    }
  ],

  techStack: {
    interface: [
      { name: "Next.js",       bgColor: "bg-[#dde8d0]" },
      { name: "React.js",      bgColor: "bg-[#d8e8e6]" },
      { name: "React Native",  bgColor: "bg-[#dde0ea]" },
      { name: "JavaScript",    bgColor: "bg-[#ede8d5]" },
      { name: "CSS",           bgColor: "bg-[#e8dde8]" }
    ],
    logic: [
      { name: "Python",  bgColor: "bg-[#d8e8d8]" },
      { name: "NumPy",   bgColor: "bg-[#d8e5e3]" },
      { name: "Node.js", bgColor: "bg-[#dde8d5]" },
      { name: "Flask",   bgColor: "bg-[#e5e0db]" }
    ],
    infrastructure: [
      { name: "Vercel",     bgColor: "bg-[#dde0e3]" },
      { name: "Streamlit",  bgColor: "bg-[#ede5d8]" }
    ],
    // used: false items are filtered out at render time — they stay in the schema
    // so they can be toggled to true once genuinely shipped.
    tooling: [
      { name: "Git",             bgColor: "bg-[#ead8dd]", used: true  },
      { name: "GitHub Actions",  bgColor: "bg-[#e3d8ea]", used: true  },
      { name: "Docker",          bgColor: "bg-[#d8e3ea]", used: false },
      { name: "OpenAI API",      bgColor: "bg-[#d8ead8]", used: false },
      { name: "LangChain",       bgColor: "bg-[#eaead8]", used: false },
      { name: "LlamaIndex",      bgColor: "bg-[#e8ddd8]", used: false }
    ]
  },

  labLogs: [
    { date: "2026-06", event: "Completed architectural breakdown for portfolio deployment pipeline." },
    { date: "2026-05", event: "Migrated Numera core application components to a responsive React Native environment." },
    { date: "2026-04", event: "Successfully engineered and deployed Numera web prototype to Vercel." }
  ]

};
```

---

## 4. Motion System Specification

### Library
**Framer Motion** — all animation logic lives inside the relevant component file, not in global CSS.

### Core Rules

| Rule | Spec |
|---|---|
| Easing curve | `[0.25, 0.1, 0.25, 1]` — applied universally across all animations |
| Hover state duration | Max **300ms** |
| Entrance animation duration | Max **500ms** |
| Parallax | ❌ Never |
| Floating / looping animations | ❌ Never |
| Spinning icons | ❌ Never |
| `prefers-reduced-motion` | ✅ Always respected via Framer Motion's `useReducedMotion()` hook |

### Permitted Motion Effects

| Effect | Where Applied | Implementation |
|---|---|---|
| Subtle hover elevation | `<ProjectCard />`, `<TechCard />` | `whileHover` → `y: -4`, shadow escalation from `shadow-sm` to `shadow-md` |
| Opacity fade entrance | Hero section, all section headers | `initial={{ opacity: 0, y: 16 }}` → `animate={{ opacity: 1, y: 0 }}` |
| Scroll-triggered reveal | Project grid, tech manifest, footer | `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}` |
| Staggered timeline reveal | Lab Logs section | Each log entry staggers in sequentially using `staggerChildren: 0.1` — left to right |
| Gentle grid transition | Tech manifest cards | `layout` prop on grid container for smooth reflow if items are toggled |

### Shadow Token Definition

```css
/* Tailwind custom shadow tokens to add in tailwind.config.js */
boxShadow: {
  'card':       '0 1px 4px rgba(18, 36, 25, 0.08)',
  'card-hover': '0 6px 20px rgba(18, 36, 25, 0.14)',
}
```

---

## 5. UI Section Layout & Component Specifications

The landing page is a single-page scrolling experience composed of six modular layout components.

---

### Component 1: Global Navigation Header

- **Layout:** Clean horizontal bar stretching across the page, sticky on scroll.
- **Left:** Minimal text branding — `Lab.01 // [Initials]` in monospace font.
- **Right:** Navigation links — `Projects`, `Stack`, `Logs`, `Contact` — where `Contact` anchors to `#contact` in the footer.
- **Active State Indicator:** A subtle blinking green dot alongside label `System: Active` rendered in monospace.

---

### Component 2: Hero Section

- **Layout:** Asymmetric two-column grid on desktop. Single column (text above, profile below) on mobile.

**Column A — Text Side:**
- Tiny pre-headline with emoji: `👋 Hello there, I'm [Name]`
- Massive stark headline mapping `profile.title` — rendered in Space Grotesk, heavy weight
- Editorial paragraph mapping `profile.subtext`
- Two action buttons:
  - Primary: solid fill (`#122419` background, cream text) — `Explore Projects`
  - Secondary: thin-bordered outline — `View Repository` linking to `profile.githubUrl`

**Column B — Profile Visual:**
- Large asymmetric or diagonally framed profile image placeholder using `profile.avatarUrl`
- Flanked by a secondary circular framing accent as a geometric detail
- On mobile: this column stacks below Column A

---

### Component 3: Selected Experiments Grid — Projects

- **Anchor:** `id="projects"`
- **Section Header:** `01 // SELECTED EXPERIMENTS` in monospace, small caps
- **Layout:** Responsive CSS grid — 3 columns on desktop, 2 on tablet, 1 on mobile — mapping over the `projects` array.

**`<ProjectCard />` Specification:**
- Top metadata row: `category` and `status` in tiny crisp monospace uppercase. Status renders with color coding per Section 2 rules.
- Bold title with a thin horizontal divider beneath
- Description paragraph in secondary text color
- Bottom button row:
  - `GitHub Repository` button — renders only if `githubLink !== null`
  - `Live App Preview` button — renders only if `liveLink !== null`
  - If both are `null`, the button row is hidden entirely — no greyed-out ghost buttons

**Motion:** `whileInView` fade + lift entrance. `whileHover` elevation with shadow escalation.

---

### Component 4: System Layer Manifest — Tech Stack

- **Anchor:** `id="stack"`
- **Section Header:** `02 // SYSTEM LAYER MANIFEST` in monospace

**Layout:** Four clearly labeled horizontal rows, each mapping a sub-array:

| Row Label | Data Source |
|---|---|
| Interface Layer | `techStack.interface` |
| Logic & Compute Layer | `techStack.logic` |
| Deployment & Infrastructure Layer | `techStack.infrastructure` |
| Tooling & Workflow Layer | `techStack.tooling` filtered by `used: true` |

**`<TechCard />` Specification:**
- Flat desaturated pastel square using the item's `bgColor`
- Tech name in clean monospace, centered
- Subtle `whileHover` lift — `y: -3`, slight brightness increase

**Tooling Rule:** Items with `used: false` are filtered before rendering. They do not appear on the page. Toggling them to `true` in `portfolioData.js` is the only action needed to publish them.

---

### Component 5: Laboratory Chronology — Lab Logs

- **Anchor:** `id="logs"`
- **Section Header:** `03 // CHRONOLOGICAL LOGS` in monospace

**Layout:** Vertical timeline, mapping over `labLogs` array.
- **Left column:** `date` field in dark forest green monospace (e.g., `2026-06`)
- **Right column:** `event` field in secondary body text
- A thin continuous vertical line connects all entries along the left edge

**Motion:** Staggered `whileInView` reveal — each entry fades and slides in sequentially from left to right using `staggerChildren: 0.1`.

---

### Component 6: Footer Connection Framework

- **Anchor:** `id="contact"`
- **Layout:** Simple centered cluster of minimal social links mapping to `profile.email`, `profile.githubUrl`, and `profile.linkedinUrl`
- **Footer Copy:** `[Initials] // © 2026. Built for Scale.` in monospace

---

## 6. SEO & Metadata

Wire up Next.js `<Head>` in `_app.js` or using the App Router's `generateMetadata()`:

```javascript
// Reads from portfolioData.seo
<Head>
  <title>{seo.metaTitle}</title>
  <meta name="description" content={seo.metaDescription} />
  <meta property="og:title" content={seo.metaTitle} />
  <meta property="og:description" content={seo.metaDescription} />
  <meta property="og:image" content={seo.ogImage} />
</Head>
```

---

## 7. Deployment Notes

- Deploy to **Vercel** — zero-config with Next.js.
- Add a minimal `vercel.json` at project root:

```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "outputDirectory": ".next"
}
```

- Replace all `/placeholder-*` asset paths with real files before final deployment.
- Toggle `tooling` items from `used: false` to `used: true` as real projects ship — no layout changes required.

---

## 8. Execution Instructions for the AI Agent

1. Initialize a standard Next.js project with Tailwind CSS and install Framer Motion (`npm install framer-motion`).
2. Load **Space Grotesk** and **JetBrains Mono** via `next/font` or Google Fonts in `_app.js`.
3. Drop `portfolioData.js` into a `/lib` or `/utils` folder.
4. Configure global CSS variables — warm cream background (`#f6f5f0`) and dark forest text (`#122419`) — in `globals.css`.
5. Add custom shadow tokens to `tailwind.config.js` per the Motion System Specification in Section 4.
6. Build the 6 layout components from Section 5, driving all content from props mapped out of `portfolioData.js`.
7. Implement the Framer Motion animation system per Section 4 — apply `useReducedMotion()` at the root level to respect accessibility preferences.
8. Wire up SEO metadata per Section 6.
9. Add `vercel.json` per Section 7.
10. Verify: adding a new item to any array in `portfolioData.js` must automatically produce a correctly rendered, responsive layout item with no structural changes to any component file.
