export const portfolioData = {

  seo: {
    metaTitle: "Sitraka JOSOA // Student Engineer",
    metaDescription: "Software engineer building responsive web and mobile architectures, scaling into AI engineering — LLMs, RAG, and Intelligent Agents.",
    ogImage: "/image.jpg"
  },

  profile: {
    name: "Sitraka JOSOA",
    initials: "JRS",
    title: "STUDENT ENGINEER",
    subtext: "Software engineer specialized in building responsive web and mobile architectures, currently scaling deep into the AI engineering pipeline — LLMs, RAG, and Intelligent Agents.",
    avatarUrl: "/image.jpg",
    githubUrl: "https://github.com/JR-Sitraka",
    linkedinUrl: "https://linkedin.com/in/josoa-sitraka-3346652ab/",
    email: "sitrakaj9@gmail.com"
  },

  projects: [
    {
      id: "numera",
      title: "Numera // Numbers in English",
      category: "Educational Application",
      status: "Live",
      tech: ["Next.js", "React Native", "Vercel"],
      description: "A minimalist educational tool designed for non-native English speakers to rapidly learn, recognize, and translate numbers in English. Deployed as a web app on Vercel with an active mobile repository built using React Native.",
      liveLink: "https://numera-v2.vercel.app/",
      githubLink: "https://github.com/JR-Sitraka/Numera-V2",
      iconUrl: "/icons/Numera.png"
    },
    {
      id: "project-2",
      title: "Project Alpha // Architecture Node",
      category: "System Logic",
      status: "In Development",
      tech: ["Python", "NumPy", "Flask"],
      description: "[Modular Placeholder] A secondary codebase structure optimized for numerical computing operations and modular data arrays. Prepared for scaling into future LLM and vector indexing frameworks.",
      liveLink: null,
      githubLink: null,
      iconUrl: "/icons/N2.png"
    },
    {
      id: "project-3",
      title: "Project Beta // Experimental Node",
      category: "AI Pipeline Research",
      status: "Planned Concept",
      tech: ["Python", "Streamlit"],
      description: "[Modular Placeholder] Engineered component layout reserved for an upcoming deployment of customized Retrieval-Augmented Generation (RAG) datasets or autonomous agent tools.",
      liveLink: null,
      githubLink: null,
      iconUrl: "/icons/N1.png"
    }
  ],

  techStack: {
    interface: [
      { name: "Next.js", bgColor: "bg-[#dde8d0]" },
      { name: "React.js", bgColor: "bg-[#d8e8e6]" },
      { name: "React Native", bgColor: "bg-[#dde0ea]" },
      { name: "JavaScript", bgColor: "bg-[#ede8d5]" },
      { name: "CSS", bgColor: "bg-[#e8dde8]" }
    ],
    logic: [
      { name: "Python", bgColor: "bg-[#d8e8d8]" },
      { name: "NumPy", bgColor: "bg-[#d8e5e3]" },
      { name: "Node.js", bgColor: "bg-[#dde8d5]" },
      { name: "Flask", bgColor: "bg-[#e5e0db]" }
    ],
    infrastructure: [
      { name: "Vercel", bgColor: "bg-[#dde0e3]" },
      { name: "Streamlit", bgColor: "bg-[#ede5d8]" }
    ],
    tooling: [
      { name: "Git", bgColor: "bg-[#ead8dd]", used: true },
      { name: "GitHub Actions", bgColor: "bg-[#e3d8ea]", used: true },
      { name: "Docker", bgColor: "bg-[#d8e3ea]", used: false },
      { name: "OpenAI API", bgColor: "bg-[#d8ead8]", used: false },
      { name: "LangChain", bgColor: "bg-[#eaead8]", used: false },
      { name: "LlamaIndex", bgColor: "bg-[#e8ddd8]", used: false }
    ]
  },

  labLogs: [
    { date: "2026-06", event: "Completed architectural breakdown for portfolio deployment pipeline." },
    { date: "2026-05", event: "Migrated Numera core application components to a responsive React Native environment." },
    { date: "2026-04", event: "Successfully engineered and deployed Numera web prototype to Vercel." }
  ]

};