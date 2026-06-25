import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/utils/portfolioData";

export default function Hero() {
  const { profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const entranceTransition = {
    ease: [0.25, 0.1, 0.25, 1],
    duration: shouldReduceMotion ? 0 : 0.5,
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Column A: Text Side (7 cols on desktop) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={entranceTransition}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Pre-headline */}
          <span className="font-mono text-xs font-semibold tracking-wider text-text-secondary uppercase">
            👋 Hello there, I'm {profile.name}
          </span>

          {/* Stark Headline */}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl md:text-6xl uppercase leading-none">
            {profile.title}
          </h1>

          {/* Editorial Paragraph */}
          <p className="max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            {profile.subtext}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center bg-text-primary px-6 font-mono text-xs font-bold uppercase tracking-wider text-bg-lab transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Projects
            </a>
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center border border-text-primary bg-transparent px-6 font-mono text-xs font-bold uppercase tracking-wider text-text-primary transition-transform hover:scale-[1.02] hover:bg-text-primary/5 active:scale-[0.98]"
              >
                View Repository
              </a>
            )}
          </div>
        </motion.div>

        {/* Column B: Profile Visual (5 cols on desktop) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ ...entranceTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          {/* Asymmetric Profile Frame & Accent Circles */}
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            {/* Background Accent 1: Dashed Circle */}
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full border border-dashed border-text-primary/20" />
            
            {/* Background Accent 2: Thin Muted Circle */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border border-text-primary/10" />

            {/* Main Asymmetric Image Container */}
            <div className="relative h-full w-full overflow-hidden border border-text-primary/15 bg-text-primary/5 shadow-card transition-all duration-300 hover:shadow-card-hover rounded-2xl rotate-2 hover:rotate-0">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="h-full w-full object-cover grayscale contrast-125 transition-all duration-500 hover:scale-105 hover:grayscale-0"
                onError={(e) => {
                  // If image fails to load (since it is a placeholder), display a premium monogram backup
                  e.target.style.display = 'none';
                  const parent = e.target.parentNode;
                  const fallback = document.getElementById('profile-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              
              {/* Premium Fallback UI */}
              <div
                id="profile-fallback"
                style={{ display: 'none' }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-text-primary p-6 text-center text-bg-lab"
              >
                <span className="font-display text-6xl font-bold tracking-widest mb-2">
                  {profile.initials}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-60">
                  SYSTEM CORE INITIALIZED
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
