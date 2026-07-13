const links = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "WhatsApp", href: "https://wa.me/" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-primary px-5 py-16 text-primary-foreground md:px-8 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        <nav aria-label="Footer" className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground/75 transition-colors hover:text-primary-foreground focus-visible:text-primary-foreground md:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/55 md:text-xs">
          JRS // &copy; 2026. BUILT FOR SCALE.
        </p>
      </div>
    </footer>
  )
}
