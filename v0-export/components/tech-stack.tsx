type Tech = {
  name: string
  icon: string
}

type Layer = {
  label: string
  items: Tech[]
}

const layers: Layer[] = [
  {
    label: "Interface Layer",
    items: [
      { name: "Next.js", icon: "/tech/nextjs.svg" },
      { name: "React.js", icon: "/tech/react.svg" },
      { name: "React Native", icon: "/tech/react-native.svg" },
      { name: "JavaScript", icon: "/tech/javascript.svg" },
      { name: "CSS", icon: "/tech/css.svg" },
    ],
  },
  {
    label: "Logic & Compute Layer",
    items: [
      { name: "Python", icon: "/tech/python.svg" },
      { name: "NumPy", icon: "/tech/numpy.svg" },
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "Flask", icon: "/tech/flask.svg" },
    ],
  },
  {
    label: "Deployment & Infrastructure Layer",
    items: [
      { name: "Vercel", icon: "/tech/vercel.svg" },
      { name: "Streamlit", icon: "/tech/streamlit.svg" },
    ],
  },
  {
    label: "Tooling & Workflow Layer",
    items: [
      { name: "Git", icon: "/tech/git.svg" },
      { name: "GitHub Actions", icon: "/tech/github-actions.svg" },
    ],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="border-t border-border bg-background px-5 py-20 text-foreground md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
          02 // SYSTEM LAYER MANIFEST
        </p>

        <div className="mt-12 flex flex-col gap-12">
          {layers.map((layer) => (
            <div key={layer.label} className="flex flex-col gap-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-foreground md:text-sm">
                {layer.label}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {layer.items.map((tech) => (
                  <li key={tech.name}>
                    <div className="group flex w-24 flex-col items-center gap-3 rounded-xl p-4 transition-colors hover:bg-primary/5">
                      <img
                        src={tech.icon || "/placeholder.svg"}
                        alt={`${tech.name} logo`}
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain opacity-55 grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                      <span className="text-center font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground transition-colors group-hover:text-foreground">
                        {tech.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
