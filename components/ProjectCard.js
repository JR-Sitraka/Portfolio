import { motion, useReducedMotion } from "framer-motion";

export default function ProjectCard({ project }) {
  const { title, category, status, tech, description, liveLink, githubLink } = project;
  const shouldReduceMotion = useReducedMotion();

  // Map status values to specific laboratory color tokens
  const getStatusStyles = (statusVal) => {
    switch (statusVal) {
      case "Live":
        return "bg-[#dde8d0] text-[#122419] border border-[#122419]/20";
      case "In Development":
        return "bg-[#f9ebd1] text-[#825c14] border border-[#825c14]/20";
      case "Planned Concept":
      default:
        return "bg-[#e2e0d8] text-[#4a574e] border border-[#4a574e]/20";
    }
  };

  // Check if both links are null to hide the button row
  const hasLinks = liveLink !== null || githubLink !== null;

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
            boxShadow: "0 6px 20px rgba(18, 36, 25, 0.14)", // shadow-card-hover
          }
      }
      transition={{
        ease: [0.25, 0.1, 0.25, 1],
        duration: shouldReduceMotion ? 0 : 0.3,
      }}
      className="flex flex-col justify-between border border-text-primary/10 bg-bg-lab p-6 shadow-card transition-shadow duration-300"
    >
      <div>
        {/* Metadata Row */}
        <div className="mb-4 flex items-center justify-between font-mono text-[10px] tracking-wider uppercase">
          <span className="text-text-secondary">{category}</span>
          <span className={`px-2 py-0.5 rounded-sm font-semibold ${getStatusStyles(status)}`}>
            {status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-text-primary uppercase tracking-tight">
          {title}
        </h3>

        {/* Divider */}
        <hr className="my-3 border-t border-text-primary/10" />

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="bg-text-primary/5 px-2 py-0.5 font-mono text-[10px] tracking-wide text-text-secondary rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Button Row */}
      {hasLinks && (
        <div className="flex items-center gap-3 border-t border-text-primary/5 pt-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-mono text-xs font-bold uppercase tracking-wider text-text-primary hover:underline"
            >
              GitHub Repo
            </a>
          )}
          {githubLink && liveLink && (
            <span className="font-mono text-[10px] text-text-secondary/40">//</span>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-mono text-xs font-bold uppercase tracking-wider text-text-primary hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
