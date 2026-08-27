import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

/**
 * SocialButton — GitHub, LinkedIn and email.
 *
 * Identical treatment, different glyph and label. Icon-only, so the
 * accessible name is the only text and is not optional. External links
 * open in a new tab with rel="noopener noreferrer"; the email variant is
 * a real mailto: and opens in place.
 *
 * Brand marks come from react-icons/tb rather than react-icons/si: Simple
 * Icons 5.7.0 no longer ships a LinkedIn glyph, and the reference build
 * draws all three from Tabler. Same installed package — no new dependency.
 */
const VARIANTS = {
  github: {
    Icon: TbBrandGithub,
    href: "https://github.com/JR-Sitraka",
    label: "GitHub profile",
    external: true,
  },
  linkedin: {
    Icon: TbBrandLinkedin,
    href: "https://linkedin.com/in/josoa-sitraka-3346652ab/",
    label: "LinkedIn profile",
    external: true,
  },
  email: {
    Icon: TbMail,
    href: "mailto:sitrakaj9@gmail.com",
    label: "Email Sitraka",
    external: false,
  },
};

export default function SocialButton({ variant }) {
  const config = VARIANTS[variant];
  if (!config) return null;

  const { Icon, href, label, external } = config;

  return (
    <a
      className="social"
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon aria-hidden="true" />
    </a>
  );
}
