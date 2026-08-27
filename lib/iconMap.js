import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiCss,
  SiPython,
  SiNodedotjs,
  SiVercel,
  SiGit,
  SiTypescript,
  SiMarkdown,
} from "react-icons/si";

/**
 * Single resolution point for technology marks: name → Simple Icons component
 * plus the brand colour actually applied.
 *
 * Two rules govern the colour, both from design-language spec §4.4:
 *   1. Monochrome brands render in --text-primary on dark surfaces.
 *   2. A brand colour below 3:1 against --surface renders in a recorded
 *      lightened variant of the same hue. The visible label always carries the
 *      technology name, so identification never depends on colour alone.
 *
 * The former literal "black" and "blue" placeholder values are gone.
 */
const MONOCHROME = "var(--text-primary)";

export const iconMap = {
  "Next.js":      { icon: SiNextdotjs,  color: MONOCHROME },
  "React":        { icon: SiReact,      color: "#61DAFB" },
  "React Native": { icon: SiReact,      color: "#61DAFB" },
  "JavaScript":   { icon: SiJavascript, color: "#F7DF1E" },
  /* CSS #663399 measures 2.08:1 against --surface — below the 3:1 non-text
     threshold. Recorded substitution: #9A6ED4, same hue, 4.62:1. */
  "CSS":          { icon: SiCss,        color: "#9A6ED4" },
  "Python":       { icon: SiPython,     color: "#3776AB" },
  "Node.js":      { icon: SiNodedotjs,  color: "#339933" },
  "Vercel":       { icon: SiVercel,     color: MONOCHROME },
  "Git":          { icon: SiGit,        color: "#F05032" },
  "TypeScript":   { icon: SiTypescript, color: "#3178C6" },
  "Markdown":     { icon: SiMarkdown,   color: MONOCHROME },
};

/** Returns { icon, color } for a technology name, or null if unmapped. */
export function resolveTech(name) {
  return iconMap[name] || null;
}
