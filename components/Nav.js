import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { TbMail, TbMenu2, TbX } from "react-icons/tb";
import SocialButton from "@/components/SocialButton";

/**
 * The rendered section list, in DOM order. pages/index.js renders exactly
 * these ids; removing a section here removes its link from both the bar and
 * the mobile panel. Single source of truth — nothing is duplicated.
 */
export const NAV_SECTIONS = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/* The accessible name tracks state alongside aria-expanded, per the component
   specification. The reference build left it fixed at "Open menu"; the
   specification wins. The click toggles for the same reason — a control that
   announces "Close menu" must actually close. */
function MenuTrigger({ onToggle, expanded, panelId }) {
  return (
    <button
      className="menu-trigger"
      onClick={onToggle}
      aria-label={expanded ? "Close menu" : "Open menu"}
      aria-expanded={expanded}
      aria-controls={panelId}
    >
      <TbMenu2 aria-hidden="true" />
    </button>
  );
}

function MobileMenuPanel({ id, open, mounted, onClose, panelRef, closeRef, onAnchorClick, sectionHref }) {
  return (
    <div
      className={open ? "menu-panel is-open" : "menu-panel"}
      id={id}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
      hidden={!mounted}
    >
      <div className="menu-panel__top">
        <span className="brand__name">Sitraka Josoa.</span>
        <button className="menu-panel__close" ref={closeRef} onClick={onClose} aria-label="Close menu">
          <TbX aria-hidden="true" />
        </button>
      </div>

      <div className="menu-panel__links">
        {NAV_SECTIONS.map(({ id: sectionId, label }) => (
          <a
            className="menu-item"
            key={sectionId}
            href={sectionHref(sectionId)}
            onClick={(event) => onAnchorClick(event, sectionId)}
          >
            {label}
          </a>
        ))}
      </div>

      <div className="menu-panel__foot">
        <div className="menu-panel__socials">
          <SocialButton variant="github" />
          <SocialButton variant="linkedin" />
          <SocialButton variant="email" />
        </div>
        <a
          className="cta-pill t-label"
          href={sectionHref("contact")}
          onClick={(event) => onAnchorClick(event, "contact")}
        >
          <TbMail aria-hidden="true" />
          Let&apos;s talk
        </a>
      </div>
    </div>
  );
}

export default function Nav() {
  const panelId = "menuPanel";
  const router = useRouter();
  /* Only the homepage renders these sections. Anywhere else the same fragments
     have no targets, so the links must cross pages instead of doing nothing. */
  const onHome = router.pathname === "/";
  const sectionHref = (id) => (onHome ? `#${id}` : `/#${id}`);

  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState(null);
  /* closed → entering → open → closing → closed. Entering and closing are
     distinct states on purpose: both have the panel in the document without
     the is-open class, and only one of them should be counting down to
     removal. */
  const [phase, setPhase] = useState("closed");
  const mounted = phase !== "closed";
  const open = phase === "open";

  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const lastFocusRef = useRef(null);
  const scrollYRef = useRef(0);

  /* ---- sticky nav background ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- scroll spy: only when the observer is genuinely available ---- */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    NAV_SECTIONS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) spy.observe(section);
    });

    return () => spy.disconnect();
  }, []);

  /* ---- open / close ---- */
  const closeMenu = useCallback(() => {
    setPhase((previous) => (previous === "closed" ? previous : "closing"));
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollYRef.current);
    if (lastFocusRef.current) lastFocusRef.current.focus();
  }, []);

  const openMenu = useCallback(() => {
    lastFocusRef.current = document.activeElement;
    scrollYRef.current = window.scrollY;
    setPhase("entering");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";
  }, []);

  /* run the entrance transition only once the panel is in the document */
  useEffect(() => {
    if (phase !== "entering") return;
    if (panelRef.current) void panelRef.current.offsetWidth;   /* flush layout so the transition runs */
    setPhase("open");
    if (closeRef.current) closeRef.current.focus();
  }, [phase]);

  /* remove the panel from the accessibility tree once it has closed */
  useEffect(() => {
    if (phase !== "closing") return undefined;
    const panel = panelRef.current;
    const done = () => setPhase((previous) => (previous === "closing" ? "closed" : previous));
    if (panel) panel.addEventListener("transitionend", done);
    const fallback = setTimeout(done, 600);   /* transitions may be disabled */
    return () => {
      if (panel) panel.removeEventListener("transitionend", done);
      clearTimeout(fallback);
    };
  }, [phase]);

  /* ---- Escape, and a focus trap while the panel is open ---- */
  useEffect(() => {
    if (!open) return undefined;

    const onKeydown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const items = panel.querySelectorAll("a[href], button:not([disabled])");
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [open, closeMenu]);

  /* ---- close before scrolling to the target ---- */
  const onAnchorClick = useCallback(
    (event, sectionId) => {
      /* Off the homepage the link is a cross-page navigation: close the panel
         and let the browser follow it rather than intercepting a target that
         does not exist on this route. */
      if (!onHome) {
        closeMenu();
        return;
      }
      event.preventDefault();
      closeMenu();
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView();
          target.setAttribute("tabindex", "-1");
          target.focus();
        }
      }, 60);
    },
    [closeMenu, onHome]
  );

  return (
    <>
      <header className={scrolled ? "nav is-scrolled" : "nav"}>
        <div className="nav__inner">
          <a className="brand" href="#top" aria-label="Sitraka Josoa, home">
            <span className="mark" aria-hidden="true">S</span>
            <span className="brand__name">Sitraka Josoa.</span>
          </a>

          <div className="nav__group">
            <nav className="nav__links t-label" aria-label="Primary">
              {NAV_SECTIONS.map(({ id, label }) => (
                <a
                  className="nav__link"
                  key={id}
                  href={sectionHref(id)}
                  {...(current === id ? { "aria-current": "true" } : {})}
                >
                  {label}
                </a>
              ))}
            </nav>

            <a className="cta-pill nav__cta t-label" href={sectionHref("contact")}>
              <TbMail aria-hidden="true" />
              Let&apos;s talk
            </a>

            <MenuTrigger
              onToggle={mounted ? closeMenu : openMenu}
              expanded={mounted}
              panelId={panelId}
            />
          </div>
        </div>
      </header>

      <MobileMenuPanel
        id={panelId}
        open={open}
        mounted={mounted}
        onClose={closeMenu}
        panelRef={panelRef}
        closeRef={closeRef}
        onAnchorClick={onAnchorClick}
        sectionHref={sectionHref}
      />
    </>
  );
}
