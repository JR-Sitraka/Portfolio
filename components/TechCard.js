import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { iconMap } from "@/lib/iconMap";

export default function TechCard({ tech }) {
  const { name } = tech;
  const shouldReduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const entry = iconMap[name];
  const IconComponent = entry?.icon ?? null;
  const brandColor = entry?.color ?? "var(--color-accent)";

  // At rest: muted gray. On hover: brand color.
  const iconColor = hovered ? brandColor : "var(--color-text-secondary)";
  const labelColor = hovered ? brandColor : "var(--color-text-secondary)";

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      transition={{
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.2,
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "20px",
        backgroundColor: "var(--color-surface-alt)",
        borderRadius: "var(--radius-md)",
        cursor: "default",
        aspectRatio: "1 / 1",
        transition: "filter 200ms ease",
        filter: hovered ? "brightness(0.97)" : "brightness(1)",
      }}
    >
      {IconComponent ? (
        /* Icon found — render with color transition */
        <IconComponent
          size={32}
          style={{
            color: iconColor,
            transition: "color 200ms ease",
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
      ) : (
        /* No icon — render a placeholder block to maintain layout */
        <span
          style={{
            display: "block",
            width: "32px",
            height: "32px",
          }}
        />
      )}

      {/* Tech name */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          fontWeight: 400,
          letterSpacing: "0.04em",
          textAlign: "center",
          color: labelColor,
          transition: "color 200ms ease",
          lineHeight: 1.3,
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}
