import { motion, useReducedMotion } from "framer-motion";

function NumbersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: "40px", height: "40px" }}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 15V9l-1.5 1" />
      <path d="M12.5 10a1.5 1.5 0 1 1 2.6 1L12.5 15h3" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: "36px", height: "36px" }}>
      <path d="M12 5a2.5 2.5 0 0 0-4.9-.7A2.5 2.5 0 0 0 4.2 8 2.5 2.5 0 0 0 5 12.8 2.5 2.5 0 0 0 7.5 17c.9 0 1.7-.5 2.2-1.2.3.4.8.7 1.3.7V5Z" />
      <path d="M12 5a2.5 2.5 0 0 1 4.9-.7A2.5 2.5 0 0 1 19.8 8a2.5 2.5 0 0 1-.8 4.8A2.5 2.5 0 0 1 16.5 17c-.9 0-1.7-.5-2.2-1.2-.3.4-.8.7-1.3.7" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: "36px", height: "36px" }}>
      <path d="M4 5h5l2 2.5h9a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export default function ProjectCard({ project, featured }) {
  const shouldReduceMotion = useReducedMotion();
  const cardLink = project.id === "numera" ? "/numera" : project.liveLink;
  const showLink = Boolean(cardLink);
  const Icon = project.id === "project-2" ? BrainIcon : project.id === "project-3" ? FolderIcon : null;

  return (
    <motion.article
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -4,
              backgroundColor: "var(--color-surface-alt)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
            }
      }
      transition={{
        ease: [0.25, 0.1, 0.25, 1],
        duration: shouldReduceMotion ? 0 : 0.3,
      }}
      className="project-card"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-primary)",
        borderRadius: "16px",
        padding: "32px",
        ...(featured ? { gridRow: "span 2" } : {}),
      }}
    >
      {featured ? (
        <>
          <NumbersIcon />
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
              margin: "32px 0 0 0",
            }}
          >
            {project.title}
          </h3>
          <div style={{ marginTop: "auto", paddingTop: "40px" }}>
            <a
              href={cardLink}
              target={project.id === "numera" ? undefined : "_blank"}
              rel={project.id === "numera" ? undefined : "noopener noreferrer"}
              className="project-card-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-text-primary)",
                textDecoration: "none",
              }}
            >
              VIEW PROJECT <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </>
      ) : (
        <>
          {Icon && <Icon />}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
              margin: "24px 0 0 0",
            }}
          >
            {project.title}
          </h3>
        </>
      )}

      <style>{`
        .project-card-link:hover {
          text-decoration: underline !important;
        }
        .project-card {
          transition: background-color 200ms ease, box-shadow 200ms ease;
        }
        .project-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </motion.article>
  );
}
