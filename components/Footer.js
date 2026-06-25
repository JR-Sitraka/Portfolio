import { portfolioData } from "@/utils/portfolioData";

export default function Footer() {
  const { profile } = portfolioData;

  return (
    <footer id="contact" className="border-t border-text-primary/10 bg-bg-lab py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Social Links Cluster */}
        <div className="mb-8 flex flex-wrap justify-center gap-6 md:gap-8">
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary transition-colors hover:text-text-primary"
            >
              Email
            </a>
          )}
          {profile.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary transition-colors hover:text-text-primary"
            >
              GitHub
            </a>
          )}
          {profile.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
          )}
        </div>

        {/* Divider accent */}
        <div className="mx-auto mb-6 h-px w-12 bg-text-primary/10" />

        {/* Footer Copy */}
        <p className="font-mono text-[10px] tracking-widest text-text-secondary uppercase">
          {profile.initials} // © 2026. Built for Scale.
        </p>
      </div>
    </footer>
  );
}
