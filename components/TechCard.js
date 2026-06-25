import { motion, useReducedMotion } from "framer-motion";

export default function TechCard({ tech }) {
  const { name, bgColor } = tech;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        shouldReduceMotion
          ? {}
          : {
            y: -3,
            filter: "brightness(1.03)",
          }
      }
      transition={{
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.25,
      }}
      className={`flex aspect-square flex-col items-center justify-center border border-text-primary/10 p-4 text-center rounded-lg shadow-sm ${bgColor} transition-shadow duration-300 hover:shadow-card`}
    >
      <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
        {name}
      </span>
    </motion.div>
  );
}
