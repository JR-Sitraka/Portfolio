import { TbCalculator, TbMap2, TbStack2 } from "react-icons/tb";
import { iconMap } from "@/lib/iconMap";

/**
 * Builds a technology entry in the { name, icon, color, used } shape, resolving
 * the mark and its brand colour through lib/iconMap.js so neither value is
 * recorded twice and the two can never drift apart.
 *
 * `used: true` is what the toolbox filters on — a technology genuinely in use.
 * `used: false` entries exist only as project tags and never reach the strip.
 */
const tech = (name, used) => ({
  name,
  icon: iconMap[name].icon,
  color: iconMap[name].color,
  used,
});

export const portfolioData = {

  seo: {
    metaTitle: "Sitraka JOSOA // Student Engineer",
    metaDescription: "Software engineer building responsive web and mobile architectures, scaling into AI engineering — LLMs, RAG, and Intelligent Agents.",
    ogImage: "/portrait-sitraka-800.jpg"
  },

  profile: {
    name: "Sitraka JOSOA",
    initials: "JRS",
    githubUrl: "https://github.com/JR-Sitraka",
    linkedinUrl: "https://linkedin.com/in/josoa-sitraka-3346652ab/",
    email: "sitrakaj9@gmail.com"
  },

  /* The badge renders nothing when text is empty or expires has passed. */
  availability: {
    text: "Open to internships — September 2026",
    expires: "2026-09-30T23:59:59+08:00"
  },

  projects: [
    {
      id: "numera",
      title: "Numera",
      status: "live",
      description: "Learning to read and hear numbers in English, across web and mobile.",
      accent: "--project-accent-1",
      icon: TbCalculator,
      /* The card media is a built representation, not a capture. One stable
         description covers the whole F → D → E sequence; concept changes are
         never announced. */
      media: {
        type: "representation",
        primary: "F",
        sequence: ["F", "D", "E"],
        alt: "An illustration of Numera's four learning levels — The Basics, The Decades, The Hundreds and The Big Leagues — shown as a progression path with the first level unlocked."
      },
      /* Verified product evidence, shown on the detail route only. */
      screenshots: [
        {
          src: "/media/numera-dashboard-1600x950.jpg",
          alt: "The Numera web app showing four numbered learning levels, the first unlocked and the rest locked."
        }
      ],
      tech: ["Next.js", "React Native", "Vercel"],
      links: {
        live: "https://numera-v2.vercel.app",
        repo: "https://github.com/JR-Sitraka/Numera-V2"
      },
      featured: true
    },
    {
      id: "trailhead",
      title: "Trailhead",
      status: "repository",
      description: "Evidence-grounded repository mapping, search and cited answers.",
      accent: "--project-accent-2",
      icon: TbMap2,
      media: null,
      screenshots: [],
      tech: ["TypeScript"],
      links: {
        repo: "https://github.com/JR-Sitraka/Trailhead"
      },
      featured: false
    },
    {
      id: "starter-kit",
      title: "Starter Kit V4.2",
      status: "repository",
      description: "A structured framework for AI-assisted software work through roles, playbooks and verification.",
      accent: "--project-accent-3",
      icon: TbStack2,
      media: null,
      screenshots: [],
      tech: ["Markdown"],
      links: {
        repo: "https://github.com/JR-Sitraka/starter-kit-v4.2"
      },
      featured: false
    }
  ],

  technologies: [
    tech("Next.js",      true),
    tech("React",        true),
    tech("React Native", true),
    tech("JavaScript",   true),
    tech("CSS",          true),
    tech("Python",       true),
    tech("Node.js",      true),
    tech("Vercel",       true),
    tech("Git",          true),
    /* project tags only — never rendered in the toolbox */
    tech("TypeScript",   false),
    tech("Markdown",     false)
  ]

};
