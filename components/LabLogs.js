import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/utils/portfolioData";

export default function LabLogs() {
  const { labLogs } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  // Container motion variants for staggered loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  // Item motion variants for individual log entries
  const itemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: shouldReduceMotion ? 0 : 0.4,
      },
    },
  };

  return (
    <section
      id="logs"
      style={{
        borderTop: "1px solid var(--color-border-light)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "96px 64px",
        }}
        className="section-inner"
      >
        {/* Section Header */}
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-text-secondary)",
            marginBottom: "48px",
            textAlign: "left",
          }}
        >
          <span style={{ color: "var(--color-text-secondary)" }}>03</span>
          {" "}
          <span style={{ color: "var(--color-text-primary)" }}>// CHRONOLOGICAL LOGS</span>
        </h2>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            position: "relative",
            marginLeft: "16px",
            borderLeft: "1px solid #e5e5e5",
            paddingLeft: "32px",
            paddingTop: "8px",
            paddingBottom: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          {labLogs.map((log, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "24px",
              }}
              className="group"
            >
              {/* Timeline Dot Accent */}
              <span
                style={{
                  position: "absolute",
                  left: "-40px", // centers over the borderLeft (32px padding + 8px half-width of dot area)
                  top: "4px",
                  height: "14px",
                  width: "14px",
                  borderRadius: "50%",
                  border: "3px solid var(--color-surface)",
                  backgroundColor: "var(--color-text-primary)",
                  transition: "background-color 300ms ease, transform 300ms ease",
                }}
                className="timeline-dot"
              />

              {/* Left Column: Date */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem", // label-mono style
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "var(--color-accent)",
                  width: "96px",
                  flexShrink: 0,
                }}
              >
                {log.date}
              </span>

              {/* Right Column: Event */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem", // body-md
                  lineHeight: 1.65,
                  color: "var(--color-text-primary)",
                  margin: 0,
                }}
              >
                {log.event}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .group:hover .timeline-dot {
          background-color: var(--color-accent) !important;
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}
