import { TbArrowUpRight } from "react-icons/tb";
import SocialButton from "@/components/SocialButton";

/**
 * Email is deliberately not repeated as a third circular button here: it is
 * already the primary action. Recorded as intentional, not an oversight.
 */
export default function ContactCard() {
  return (
    <section className="section wrap" id="contact">
      <div className="contact-card reveal">
        <span className="eyebrow t-eyebrow">CONTACT</span>
        <h2 className="t-h2">Have something worth building?</h2>
        <p className="t-body-lg">
          I&apos;m open to internship and junior opportunities from September 2026. If you&apos;d
          like to discuss my work, a project, or a possible collaboration, feel free to
          get in touch.
        </p>
        <div className="contact-card__actions">
          <a className="cta-pill t-label" href="mailto:sitrakaj9@gmail.com">
            sitrakaj9@gmail.com <TbArrowUpRight aria-hidden="true" />
          </a>
          <SocialButton variant="github" />
          <SocialButton variant="linkedin" />
        </div>
      </div>
    </section>
  );
}
