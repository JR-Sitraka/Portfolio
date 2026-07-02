import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/utils/portfolioData";

export default function Hero() {
  const { profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const entranceBase = {
    ease: [0.25, 0.1, 0.25, 1],
    duration: shouldReduceMotion ? 0 : 0.5,
  };

  const initialState   = shouldReduceMotion ? {} : { opacity: 0, y: 20 };
  const animatedState  = shouldReduceMotion ? {} : { opacity: 1, y: 0 };

  return (
    <section
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-text-on-dark)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "96px 64px",
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* ── Column A: Text ── */}
        <motion.div
          initial={initialState}
          animate={animatedState}
          transition={entranceBase}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          {/* Pre-headline label */}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-text-secondary)",
            }}
          >
            👋 Hello there, I&apos;m {profile.name}
          </span>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "4.5rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "var(--color-text-on-dark)",
              margin: 0,
              textTransform: "uppercase",
            }}
            className="hero-headline"
          >
            {profile.title}
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "var(--color-text-secondary)",
              maxWidth: "520px",
              margin: 0,
            }}
          >
            {profile.subtext}
          </p>

          {/* Action buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", paddingTop: "8px" }}>
            {/* Primary CTA */}
            <a
              href="#projects"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--color-accent)",
                color: "var(--color-primary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: "4px",
                border: "none",
                transition: "background-color 200ms ease",
                cursor: "pointer",
              }}
            >
              Explore Projects
            </a>

            {/* Outline CTA */}
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  color: "var(--color-text-on-dark)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "12px 28px",
                  borderRadius: "4px",
                  border: "1px solid var(--color-text-on-dark)",
                  transition: "background-color 200ms ease",
                  cursor: "pointer",
                }}
              >
                View Repository
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={initialState}
          animate={animatedState}
          transition={{ ...entranceBase, delay: shouldReduceMotion ? 0 : 0.15 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/*
            profile-image-wrapper: structural rules in globals.css,
            critical clip-path also set inline for guaranteed specificity.
          */}
          <div
            className="profile-image-wrapper"
            style={{
              aspectRatio: "2 / 3",
              width: "100%",
              maxWidth: "380px",
              clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                transform: "scaleX(1.12)",
                display: "block",
              }}
              onError={(e) => {
                e.target.style.display = "none";
                const fallback = e.target.nextElementSibling;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            {/* Fallback monogram */}
            <div
              className="profile-fallback"
              style={{
                display: "none",
                position: "absolute",
                inset: 0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--color-text-secondary)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "4rem",
                  fontWeight: 700,
                  color: "var(--color-text-on-dark)",
                  letterSpacing: "0.1em",
                }}
              >
                {profile.initials}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-text-on-dark)",
                  opacity: 0.6,
                  marginTop: "8px",
                }}
              >
                SYSTEM CORE INITIALIZED
              </span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
