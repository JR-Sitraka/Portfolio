const navItems = ["PROJECTS", "STACK", "LOGS", "CONTACT"]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary text-primary-foreground">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8"
      >
        <a href="#top" className="font-mono text-xs font-bold tracking-[0.16em] md:text-sm">
          Lab.01 // JRS
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[11px] tracking-[0.18em] text-primary-foreground/70 transition-colors hover:text-primary-foreground focus-visible:text-primary-foreground"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground/70 md:text-xs">
          <span className="size-2 bg-accent" aria-hidden="true" />
          <span>System: Active</span>
        </div>
      </nav>
    </header>
  )
}
