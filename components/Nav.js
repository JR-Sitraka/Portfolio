import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/utils/portfolioData";

export default function Nav() {
  const { profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    ease: [0.25, 0.1, 0.25, 1],
    duration: shouldReduceMotion ? 0 : 0.3,
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-lab bg-bg-lab/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left Side: Brand */}
        <div className="font-mono text-sm font-semibold tracking-tight text-text-primary">
          Lab.01 // {profile.initials}
        </div>

        {/* Right Side: Links & Active Status */}
        <div className="flex items-center gap-6 md:gap-8">
          <ul className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-text-secondary md:gap-6">
            <li>
              <a
                href="#projects"
                className="transition-colors hover:text-text-primary"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#stack"
                className="transition-colors hover:text-text-primary"
              >
                Stack
              </a>
            </li>
            <li>
              <a
                href="#logs"
                className="transition-colors hover:text-text-primary"
              >
                Logs
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-text-primary"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Active State Indicator */}
          <div className="hidden items-center gap-2 border-l border-border-lab pl-4 font-mono text-xs text-text-secondary sm:flex md:pl-6">
            <motion.span
              animate={shouldReduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
              transition={
                shouldReduceMotion
                  ? {}
                  : {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }
              }
              className="h-2 w-2 rounded-full bg-[#27B048]"
            />
            <span>System: Active</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
