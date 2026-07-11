import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiCss,
  SiPython,
  SiNumpy,
  SiNodedotjs,
  SiFlask,
  SiVercel,
  SiStreamlit,
  SiGit,
  SiGithubactions,
} from "react-icons/si";

/**
 * Maps each tech name string to its Simple Icons import and official brand hex.
 * Colors sourced from simpleicons.org brand guidelines.
 * 'CSS' and monochrome icons (Next.js, Flask, Vercel) default to
 * var(--color-accent) or var(--color-text-on-dark) per DESIGN.md rules.
 */
export const iconMap = {
  "Next.js":        { icon: SiNextdotjs,    color: "black" }, // white on dark brand
  "React.js":       { icon: SiReact,         color: "#61DAFB" },
  "React Native":   { icon: SiReact,         color: "#61DAFB" },
  "JavaScript":     { icon: SiJavascript,    color: "#F7DF1E" },
  "CSS":            { icon: SiCss,           color: "blue" }, // no clear brand → accent
  "Python":         { icon: SiPython,        color: "#3776AB" },
  "NumPy":          { icon: SiNumpy,         color: "#013243" },
  "Node.js":        { icon: SiNodedotjs,     color: "#339933" },
  "Flask":          { icon: SiFlask,         color: "black" },
  "Vercel":         { icon: SiVercel,        color: "black" },
  "Streamlit":      { icon: SiStreamlit,     color: "#FF4B4B" },
  "Git":            { icon: SiGit,           color: "#F05032" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
};
