import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/utils/portfolioData";

export default function Hero() {
  const { profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const entranceBase = {
    ease: [0.25, 0.1, 0.25, 1],
    duration: shouldReduceMotion ? 0 : 0.5,
  };

  const initialState = shouldReduceMotion ? {} : { opacity: 0, y: 20 };
  const animatedState = shouldReduceMotion ? {} : { opacity: 1, y: 0 };

  const subtext = profile.subtext;
  const highlightPhrase = "AI engineering";
  const aiIdx = subtext.indexOf(highlightPhrase);
  const subtextBefore = subtext.substring(0, aiIdx);
  const subtextPhrase = subtext.substring(aiIdx, aiIdx + highlightPhrase.length);
  const subtextAfter = subtext.substring(aiIdx + highlightPhrase.length);

  return (
    <section
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-text-on-dark)",
        width: "100%",
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          alignItems: "center",
          minHeight: "calc(100svh - 4rem)",
        }}
      >
        <motion.div
          initial={initialState}
          animate={animatedState}
          transition={entranceBase}
          style={{ display: "flex", flexDirection: "column", gap: "28px" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-text-on-dark)",
              opacity: 0.65,
            }}
          >
            <span>
              <span aria-hidden="true">👋 </span>
              Hello there, I&apos;m {profile.name}
            </span>
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "32px",
                height: "1px",
                backgroundColor: "var(--color-text-on-dark)",
                opacity: 0.7,
                flexShrink: 0,
              }}
            />
          </span>

          <h1
            className="hero-headline"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "3rem",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.06em",
              color: "var(--color-text-on-dark)",
              margin: 0,
              textTransform: "uppercase",
              maxWidth: "63rem",
            }}
          >
            {profile.title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--color-text-on-dark)",
              opacity: 0.75,
              maxWidth: "36rem",
              margin: 0,
            }}
          >
            {subtextBefore}
            <span style={{ color: "var(--color-accent)" }}>{subtextPhrase}</span>
            {subtextAfter}
          </p>

          <div className="hero-buttons" style={{ display: "flex", gap: "12px", paddingTop: "8px" }}>
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
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "12px 24px",
                minHeight: "48px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Explore Projects
            </a>

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
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "12px 24px",
                  minHeight: "48px",
                  borderRadius: "4px",
                  border: "1px solid rgba(245, 241, 232, 0.45)",
                  cursor: "pointer",
                }}
              >
                View Repository
              </a>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-text-on-dark)",
                opacity: 0.65,
              }}
            >
              Follow Me:
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub profile"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: "18px", height: "18px" }}>
                  <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.70 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5Z" />
                </svg>
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn profile"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: "18px", height: "18px" }}>
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </div>
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
          <div
            className="hero-image-col"
            style={{
              width: "100%",
            }}
          >
            <div className="profile-image-container">
              <div className="profile-image-frame" />
              <div className="profile-image-wrapper">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
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
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 48px;
          padding: 64px 20px;
        }
        .hero-headline {
          font-size: 3rem;
        }
        .hero-buttons {
          flex-direction: column;
        }
        .hero-image-col {
          max-width: 448px;
        }
        @media (min-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero-headline {
            font-size: 4.5rem;
          }
        }
        @media (min-width: 768px) {
          .hero-grid {
            padding: 80px 32px;
          }
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 64px;
          }
          .hero-headline {
            font-size: 6rem;
          }
          .hero-buttons {
            flex-direction: row;
          }
          .hero-image-col {
            max-width: none;
          }
        }
        @media (min-width: 1280px) {
          .hero-headline {
            font-size: 7.5rem;
          }
        }
        .social-icon:hover {
          background-color: rgba(245, 241, 232, 0.10);
        }
        .btn-primary:hover {
          background-color: var(--color-accent-hover);
        }
        .btn-outline:hover {
          background-color: rgba(245, 241, 232, 0.10);
        }
      `}</style>
    </section>
  );
}
