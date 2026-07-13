import Image from "next/image"

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="flex flex-col items-start gap-7">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground/65 md:text-sm">
            <span>
              <span aria-hidden="true">👋 </span>HELLO THERE, I&apos;M SITRAKA JOSOA
            </span>
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-secondary-foreground/70" />
          </p>
          <div className="flex flex-col gap-6">
            <h1 className="max-w-4xl text-balance font-sans text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl xl:text-9xl">
              STUDENT ENGINEER
            </h1>
            <p className="max-w-xl font-body text-base leading-relaxed text-primary-foreground/75 md:text-lg">
              Software engineer scaling into <span className="text-accent">AI engineering</span>—exploring LLMs, retrieval-augmented generation, and intelligent agents to build systems that reason, adapt, and create real-world value.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center bg-accent px-6 font-mono text-xs font-bold tracking-[0.12em] text-accent-foreground transition-colors hover:bg-accent/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              EXPLORE PROJECTS
            </a>
            <a
              href="https://github.com"
              className="inline-flex min-h-12 items-center justify-center border border-primary-foreground/45 px-6 font-mono text-xs font-bold tracking-[0.12em] text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground"
            >
              VIEW REPOSITORY
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground/65">
              Follow Me:
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                aria-label="GitHub profile"
                className="inline-flex h-10 w-10 items-center justify-center text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground"
              >
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn profile"
                className="inline-flex h-10 w-10 items-center justify-center text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground"
              >
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5]">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-accent md:-left-5 md:-top-5"
            />
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <Image
                src="/sitraka-profile.png"
                alt="Portrait of Sitraka Josoa"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
