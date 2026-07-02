"use client";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/utils/portfolioData";

export default function Nav() {
  const { profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: "var(--color-primary)",
        borderBottom: "1px solid var(--color-border-dark)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 64px",
          height: "60px",
        }}
        className="nav-inner"
      >
        {/* Brand */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "var(--color-text-on-dark)",
          }}
        >
          Lab.01 // {profile.initials}
        </div>

        {/* Nav links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {[
            { label: "Projects", href: "#projects" },
            { label: "Stack",    href: "#stack"    },
            { label: "Logs",     href: "#logs"     },
            { label: "Contact",  href: "#contact"  },
          ].map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-on-dark)",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Status indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--color-text-secondary)",
          }}
          className="nav-status"
        >
          <motion.span
            animate={shouldReduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
            transition={
              shouldReduceMotion
                ? {}
                : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--color-accent)",
            }}
          />
          <span>System: Active</span>
        </div>
      </div>

    </nav>
  );
}
