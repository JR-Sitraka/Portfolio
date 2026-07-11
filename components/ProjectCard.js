import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const { title, category, status, tech, description, liveLink, githubLink, iconUrl } = project;
  const shouldReduceMotion = useReducedMotion();

  // Get inline style colors for status badges per DESIGN.md
  const getStatusStyles = (statusVal) => {
    switch (statusVal) {
      case "Live":
        return {
          backgroundColor: "var(--color-tag-live-bg)",
          color: "var(--color-tag-live-text)",
        };
      case "In Development":
        return {
          backgroundColor: "var(--color-tag-dev-bg)",
          color: "var(--color-tag-dev-text)",
        };
      case "Planned Concept":
      default:
        return {
          backgroundColor: "var(--color-tag-planned-bg)",
          color: "var(--color-tag-planned-text)",
        };
    }
  };

  const hasLinks = liveLink !== null || githubLink !== null;
  const [expanded, setExpanded] = useState(false);
  const DESCRIPTION_THRESHOLD = 120;

  return (
    <motion.div
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
        maxHeight: { duration: shouldReduceMotion ? 0 : 0.3 },
        overflow: { duration: shouldReduceMotion ? 0 : 0.3 },
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        border: "1px solid var(--color-border-light)",
        borderRadius: "var(--radius-md)",
        padding: "28px",
        maxWidth: "360px",
        maxHeight: expanded ? "none" : "400px",
        overflow: expanded ? "visible" : "hidden",
      }}
    >
      {iconUrl && (
  <div
    style={{
      width: "100%",
      height: "28px",
      background: "var(--color-surface-alt)",
      borderRadius: "var(--radius-md) var(--radius-md) 0 0",
      overflow: "hidden",
      margin: "-28px -28px 16px -28px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src={iconUrl}
      alt="Project icon"
        style={{
          maxHeight: "6px",
          maxWidth: "6px",
          objectFit: "contain",
        }}
    />
  </div>
)}
<div>
        {/* Metadata Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}
        >
          <span style={{ color: "var(--color-text-secondary)" }}>{category}</span>
          <span
            style={{
              padding: "2px 10px",
              borderRadius: "var(--radius-full)",
              fontWeight: 500,
              fontSize: "0.65rem",
              letterSpacing: "0.04em",
              ...getStatusStyles(status),
            }}
          >
            {status}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem", // h3 size from DESIGN.md
            fontWeight: 600,
            lineHeight: 1.3,
            color: "var(--color-text-primary)",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            margin: "0 0 8px 0",
          }}
        >
          {title}
        </h3>

        {/* Divider */}
        <hr
          style={{
            border: 0,
            borderTop: "1px solid var(--color-border-light)",
            margin: "0 0 12px 0",
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem", // body-md from DESIGN.md
            lineHeight: 1.65,
            color: "var(--color-text-secondary)",
            margin: "0 0 8px 0",
          }}
        >
          {description.length > DESCRIPTION_THRESHOLD
            ? expanded
              ? description
              : description.substring(0, DESCRIPTION_THRESHOLD) + "..."
            : description}
        </p>

        {/* Toggle Button */}
        {description.length > DESCRIPTION_THRESHOLD && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none",
              border: "none",
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--color-accent)",
              cursor: "pointer",
              padding: 0,
              marginTop: "4px",
              textAlign: "left",
            }}
          >
            {expanded ? "View less" : "View more"}
          </button>
        )}

        {/* Tech Badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "14px",
          }}
        >
          {tech.map((t, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: "#f5f5f7",
                color: "#6e6e73",
                borderRadius: "var(--radius-full)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                padding: "2px 10px",
                letterSpacing: "0.02em",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Button Row */}
      {hasLinks && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            borderTop: "1px solid var(--color-border-light)",
            paddingTop: "14px",
          }}
        >
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
            >
              GitHub Repo
            </a>
          )}
          {githubLink && liveLink && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--color-text-secondary)",
                opacity: 0.4,
              }}
            >
              //
            </span>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
            >
              Live Demo
            </a>
          )}
        </div>
      )}

      {/* Scoped style for link hovers */}
      <style>{`
        .project-link:hover {
          color: var(--color-accent) !important;
        }
      `}</style>
    </motion.div>
  );
}
