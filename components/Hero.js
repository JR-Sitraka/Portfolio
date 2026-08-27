import { TbArrowUpRight } from "react-icons/tb";
import SocialButton from "@/components/SocialButton";
import { portfolioData } from "@/utils/portfolioData";

/* Content and expiry come from a single availability data object. Nothing is
   hardcoded, and no date appears in the markup: the badge renders nothing when
   the text is empty or the expiry has passed. */
function availabilityText(availability) {
  if (!availability || !availability.text) return null;
  if (availability.expires && new Date(availability.expires).getTime() <= Date.now()) return null;
  return availability.text;
}

/* Approved portrait metadata — lower-left name, lower-right handle,
   no location inferred or published. */
const PORTRAIT_META = ["Sitraka Josoa", "@JR-Sitraka"];

function HeroDotField() {
  return <div className="hero__dots" aria-hidden="true" />;
}

function HeroAmbientCircles() {
  return (
    <div className="hero__circles" aria-hidden="true">
      <span className="c-accent" />
      <span className="c-neutral" />
    </div>
  );
}

function AvailabilityBadge({ text }) {
  if (!text) return null;

  return (
    <span className="badge t-meta enter">
      <span className="badge__dot" aria-hidden="true" />
      {text}
    </span>
  );
}

function PortraitFrame() {
  return (
    <div className="portrait enter e3">
      <div className="portrait__offset" aria-hidden="true" />
      <div className="portrait__img">
        <img
          src="/portrait-sitraka-800.jpg"
          srcSet="/portrait-sitraka-480.jpg 480w, /portrait-sitraka-800.jpg 800w"
          sizes="(max-width: 424px) calc(100vw - 40px), 384px"
          alt="Sitraka Josoa, photographed against a dark background."
          width="800"
          height="1000"
          loading="eager"
          fetchPriority="high"
        />
        {/* metadata sits over the bottom image edge on the smallest flat
            backing required — measured, not decorative. */}
        <div className="portrait__meta">
          {PORTRAIT_META.map((value) => (
            <span className="t-meta-sm" key={value}>{value}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <HeroDotField />
      <HeroAmbientCircles />

      <div className="hero__inner">
        <div className="hero__text">
          <AvailabilityBadge text={availabilityText(portfolioData.availability)} />

          <h1 className="t-display hero__headline enter e2">
            I build practical products for <em>web and mobile</em>.
          </h1>

          <p className="t-body-lg hero__lede enter e3">
            I work across interfaces and application logic, and I&apos;m currently expanding into
            AI engineering through LLM, retrieval, and agent workflows.
          </p>

          <div className="hero__actions enter e4">
            <a className="cta-pill cta-pill--lift t-label" href="#work">
              View selected work <TbArrowUpRight aria-hidden="true" />
            </a>
            <div className="hero__socials">
              <SocialButton variant="github" />
              <SocialButton variant="linkedin" />
              <SocialButton variant="email" />
            </div>
          </div>
        </div>

        <PortraitFrame />
      </div>
    </section>
  );
}
