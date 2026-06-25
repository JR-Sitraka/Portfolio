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
    <section id="logs" className="mx-auto max-w-6xl px-6 py-12 md:py-24 border-t border-text-primary/10">
      {/* Section Header */}
      <h2 className="mb-12 font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
        03 // CHRONOLOGICAL LOGS
      </h2>

      {/* Timeline Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative ml-4 border-l border-text-primary/15 pl-8 py-2 flex flex-col gap-10"
      >
        {labLogs.map((log, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative flex flex-col sm:flex-row items-start gap-2 sm:gap-6 group"
          >
            {/* Timeline Dot Accent */}
            <span className="absolute -left-[38.5px] top-1.5 h-4.5 w-4.5 rounded-full border-4 border-bg-lab bg-text-primary transition-transform duration-300 group-hover:scale-110" />

            {/* Left Column: Date */}
            <span className="font-mono text-sm font-bold tracking-tight text-text-primary w-24 flex-shrink-0">
              {log.date}
            </span>

            {/* Right Column: Event */}
            <p className="text-sm leading-relaxed text-text-secondary">
              {log.event}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
