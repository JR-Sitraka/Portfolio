import { portfolioData } from "@/utils/portfolioData";

export default function Footer() {
  const { profile } = portfolioData;

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-text-primary)",
        padding: "64px 24px",
        borderTop: "1px solid var(--color-border-light)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          textAlign: "center",
        }}
      >
        {/* Social Links Cluster */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="footer-link"
              style={{
                 fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
            >
              Email
            </a>
          )}
          {profile.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
            >
              GitHub
            </a>
          )}
          {profile.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
            >
              LinkedIn
            </a>
          )}
        </div>

        {/* Minimal Divider Line */}
        <div
          style={{
            height: "1px",
            width: "32px",
            backgroundColor: "var(--color-border-light)",
          }}
        />

        {/* Copyright Line */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-text-primary)",
            margin: 0,
          }}
          >
          <span>
            {profile.initials}
          </span> — © 2026. Built for Scale.
        </p>
      </div>

      {/* Scoped hover styles */}
      <style>{`
        .footer-link:hover {
          color: var(--color-accent) !important;
        }
      `}</style>
    </footer>
  );
}
