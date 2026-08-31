import { TbArrowLeft, TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import styles from "./CaseNav.module.css";

/**
 * CaseNav — prev/next within the reading sequence, plus the persistent return
 * to the homepage project grid, matching the back affordance pages/numera.js
 * already uses.
 *
 * There is no wrap-around: the first case shows no previous and the last shows
 * no next. Prev/next are computed by the route from published cases only, so
 * this component can never be handed a link to a route that 404s.
 *
 * `label` comes from the neighbouring entry as data. This component does not
 * know which case study it sits on.
 */
export default function CaseNav({ prev, next }) {
  return (
    <nav className={styles.nav} aria-label="Case study navigation">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a className={`t-label ${styles.back}`} href="/#work">
        <TbArrowLeft aria-hidden="true" />
        Back to selected work
      </a>

      <div className={styles.pair}>
        {prev && (
          <a className={`t-label ${styles.link}`} href={prev.href} rel="prev">
            <TbArrowNarrowLeft aria-hidden="true" />
            <span>
              <span className={`t-meta-sm ${styles.direction}`}>Previous</span>
              <span className={styles.name}>{prev.label || prev.slug}</span>
            </span>
          </a>
        )}

        {next && (
          <a className={`t-label ${styles.link} ${styles.linkNext}`} href={next.href} rel="next">
            <span>
              <span className={`t-meta-sm ${styles.direction}`}>Next</span>
              <span className={styles.name}>{next.label || next.slug}</span>
            </span>
            <TbArrowNarrowRight aria-hidden="true" />
          </a>
        )}
      </div>
    </nav>
  );
}
