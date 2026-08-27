import { useRouter } from "next/router";
import SocialButton from "@/components/SocialButton";
import { NAV_SECTIONS } from "@/components/Nav";

export default function SiteFooter() {
  /* derived, never hardcoded */
  const year = new Date().getFullYear();

  /* Same rule as the nav: a fragment only where the target exists on this
     route. Only the homepage renders these sections. */
  const router = useRouter();
  const onHome = router.pathname === "/";
  const sectionHref = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <footer className="footer">
      <div className="footer__inner wrap">
        <a className="brand" href={onHome ? "#top" : "/#top"} aria-label="Sitraka Josoa, home">
          <span className="mark" aria-hidden="true">S</span>
          <span className="brand__name">Sitraka Josoa.</span>
        </a>

        <nav className="footer__links t-label" aria-label="Footer">
          {NAV_SECTIONS.map(({ id, label }) => (
            <a key={id} href={sectionHref(id)}>{label}</a>
          ))}
        </nav>

        <div className="footer__right">
          <div className="footer__socials">
            <SocialButton variant="github" />
            <SocialButton variant="linkedin" />
            <SocialButton variant="email" />
          </div>
          <span className="t-meta muted">Built from scratch · {year}</span>
        </div>
      </div>
    </footer>
  );
}
