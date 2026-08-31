import SkipLink from "@/components/SkipLink";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/Footer";
import CaseNav from "@/components/case-study/CaseNav";
import InlineRenderer from "@/components/case-study/InlineRenderer";
import styles from "./CaseStudyLayout.module.css";

/**
 * CaseStudyLayout — the shared shell, written once.
 *
 * It receives already-rendered children and never inspects a section type or a
 * slug. Everything two case studies would render the same way lives here: the
 * page frame and spacing, heading hierarchy, hero and "in short" blocks, the
 * landmarks and focus order, prev/next and the back link.
 *
 * A layout that asked which case it was rendering would have stopped being
 * shared, so it is not given the means to ask.
 */
export default function CaseStudyLayout({ meta, hero = [], inShort = [], nav = {}, children }) {
  return (
    <div className="app-shell">
      <SkipLink />
      <Nav />

      <main id="main">
        <article className={`section wrap ${styles.page}`}>
          <header className={styles.header}>
            <span className="eyebrow t-eyebrow">CASE STUDY</span>
            <h1 className="t-h2">{meta.projectTitle}</h1>

            {hero.length > 0 && (
              <p className={`t-body-lg ${styles.hero}`}>
                <InlineRenderer nodes={hero} />
              </p>
            )}

            {inShort.length > 0 && (
              <div className={styles.inShort}>
                <h2 className={`t-eyebrow ${styles.inShortLabel}`}>IN SHORT</h2>
                <ul className={styles.inShortList}>
                  {inShort.map((item, index) => (
                    <li key={index} className="t-body">
                      <InlineRenderer nodes={item} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </header>

          <div className={styles.body}>{children}</div>

          <CaseNav prev={nav.prev} next={nav.next} />
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
