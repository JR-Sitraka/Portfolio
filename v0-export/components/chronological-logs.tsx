const entries = [
  {
    date: "2026-06",
    description: "Completed architectural breakdown for portfolio deployment pipeline.",
  },
  {
    date: "2026-05",
    description: "Migrated Numera core application components to a responsive React Native environment.",
  },
  {
    date: "2026-04",
    description: "Successfully engineered and deployed Numera web prototype to Vercel.",
  },
]

export function ChronologicalLogs() {
  return (
    <section id="logs" className="border-t border-border bg-background px-5 py-20 text-foreground md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
          03 // CHRONOLOGICAL LOGS
        </p>

        <ol className="mt-12 border-l border-primary/40 pl-8">
          {entries.map((entry, index) => (
            <li
              key={entry.date}
              className={`relative ${index === entries.length - 1 ? "" : "pb-10"}`}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[2.4rem] top-1 size-3 rounded-full border-2 border-primary bg-background"
              />
              <p className="font-mono text-xs tracking-[0.14em] text-accent md:text-sm">{entry.date}</p>
              <p className="mt-2 max-w-2xl font-body text-base leading-relaxed text-foreground">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
