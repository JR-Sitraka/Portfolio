import type { SVGProps } from "react"

function NumbersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 15V9l-1.5 1" />
      <path d="M12.5 10a1.5 1.5 0 1 1 2.6 1L12.5 15h3" />
    </svg>
  )
}

function BrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5a2.5 2.5 0 0 0-4.9-.7A2.5 2.5 0 0 0 4.2 8 2.5 2.5 0 0 0 5 12.8 2.5 2.5 0 0 0 7.5 17c.9 0 1.7-.5 2.2-1.2.3.4.8.7 1.3.7V5Z" />
      <path d="M12 5a2.5 2.5 0 0 1 4.9-.7A2.5 2.5 0 0 1 19.8 8a2.5 2.5 0 0 1-.8 4.8A2.5 2.5 0 0 1 16.5 17c-.9 0-1.7-.5-2.2-1.2-.3.4-.8.7-1.3.7" />
    </svg>
  )
}

function FolderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 5h5l2 2.5h9a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    </svg>
  )
}

const featured = {
  icon: NumbersIcon,
  title: "NUMERA // NUMBERS IN ENGLISH",
  href: "/numera",
}

const secondary = [
  {
    icon: BrainIcon,
    title: "SENTIMENT ANALYZER MODEL",
  },
  {
    icon: FolderIcon,
    title: "FUTURE PROJECT ALPHA",
  },
]

export function ProjectCard() {
  const FeaturedIcon = featured.icon
  return (
    <section id="projects" className="bg-background px-5 py-20 text-foreground md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
          01 // SELECTED EXPERIMENTS
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:grid-rows-2">
          <article className="flex flex-col rounded-2xl border border-primary bg-card p-8 text-card-foreground md:row-span-2">
            <FeaturedIcon className="h-10 w-10 text-primary" />
            <h3 className="mt-8 text-balance font-sans text-3xl font-bold leading-tight tracking-[-0.03em]">
              {featured.title}
            </h3>
            <a
              href={featured.href}
              className="mt-auto inline-flex items-center gap-2 pt-10 font-mono text-xs font-bold tracking-[0.14em] text-primary underline-offset-4 hover:underline focus-visible:underline md:text-sm"
            >
              VIEW PROJECT <span aria-hidden="true">&rarr;</span>
            </a>
          </article>

          {secondary.map((project) => {
            const Icon = project.icon
            return (
              <article
                key={project.title}
                className="flex flex-col justify-center rounded-2xl border border-primary bg-card p-8 text-card-foreground"
              >
                <Icon className="h-9 w-9 text-primary" />
                <h3 className="mt-6 text-balance font-sans text-2xl font-bold leading-tight tracking-[-0.03em]">
                  {project.title}
                </h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
