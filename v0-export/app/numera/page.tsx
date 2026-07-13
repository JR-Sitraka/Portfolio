import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Numera // Numbers in English — Sitraka Josoa",
  description:
    "Project detail for Numera, a live web application for learning numbers in English, plus its React Native mobile companion.",
}

const techPillClass =
  "inline-flex items-center rounded-full border border-primary/45 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-primary"

const notes = [
  {
    date: "2026-05",
    body: "Migrated Numera core application components to a responsive React Native environment.",
  },
  {
    date: "2026-04",
    body: "Successfully engineered and deployed Numera web prototype to Vercel.",
  },
]

export default function NumeraPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-background px-5 py-16 text-foreground md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.14em] text-primary underline-offset-4 hover:underline focus-visible:underline md:text-sm"
          >
            <span aria-hidden="true">&larr;</span> BACK TO EXPERIMENTS
          </a>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            {/* MAIN BLOCK */}
            <article className="flex flex-col rounded-2xl border border-primary bg-card p-8 text-card-foreground md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-secondary px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
                  <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                  Live
                </span>
              </div>
              <h1 className="mt-6 text-balance font-sans text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-5xl">
                NUMERA // NUMBERS IN ENGLISH
              </h1>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className={techPillClass}>Next.js</span>
                <span className={techPillClass}>Vercel</span>
              </div>
              <p className="mt-8 font-body text-base italic leading-relaxed text-muted-foreground">
                [Description coming soon]
              </p>
              <div className="mt-8 flex min-h-56 flex-1 items-center justify-center rounded-xl border border-dashed border-primary/50 bg-background p-8">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground md:text-sm">
                  Demo video coming soon
                </p>
              </div>
            </article>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-6">
              {/* RELATED BLOCK */}
              <article className="rounded-2xl border border-primary bg-card p-8 text-card-foreground">
                <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.03em]">
                  NUMERA MOBILE
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className={techPillClass}>React Native</span>
                </div>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                  Separate repository from the web version
                </p>
              </article>

              {/* ACCESS & STATUS BLOCK */}
              <article className="rounded-2xl border border-primary bg-card p-8 text-card-foreground">
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
                  Access &amp; Status
                </h2>
                <div className="mt-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-accent" aria-hidden="true" />
                      <span className="font-sans text-sm font-bold">Web</span>
                      <span className="font-body text-sm text-muted-foreground">— Live</span>
                    </div>
                    <div className="flex flex-wrap gap-4 pl-5">
                      <a
                        href="#"
                        className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline focus-visible:underline"
                      >
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline focus-visible:underline"
                      >
                        GitHub Repo
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-amber-500" aria-hidden="true" />
                      <span className="font-sans text-sm font-bold">Mobile</span>
                      <span className="font-body text-sm text-muted-foreground">
                        — Downloadable (APK via GitHub)
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pl-5">
                      <a
                        href="#"
                        className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline focus-visible:underline"
                      >
                        GitHub Repo
                      </a>
                      <span className="font-body text-xs italic text-muted-foreground">link pending</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* PROJECT NOTES BLOCK */}
              <article className="rounded-2xl border border-primary bg-card p-8 text-card-foreground">
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
                  Project Notes
                </h2>
                <ol className="mt-6 flex flex-col gap-5">
                  {notes.map((note) => (
                    <li key={note.date} className="flex gap-4">
                      <span className="mt-0.5 shrink-0 font-mono text-xs font-bold tracking-[0.08em] text-accent">
                        {note.date}
                      </span>
                      <span className="font-body text-sm leading-relaxed text-foreground/80">
                        {note.body}
                      </span>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
