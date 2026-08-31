import BlockRenderer from "@/components/case-study/BlockRenderer";
import InlineRenderer from "@/components/case-study/InlineRenderer";
import styles from "./DecisionBlock.module.css";

/**
 * DecisionBlock — section type "decision".
 *
 * Serves every decision-shaped section: an architecture decision record, a
 * version-evolution entry, anything with status, context, outcome and
 * optional consequences. It is selected by type alone and knows nothing about
 * which case study declared it.
 *
 * `consequences` is optional and its heading is omitted entirely when absent,
 * rather than rendering an empty labelled region.
 */
export default function DecisionBlock({ section }) {
  const { heading, status, context = [], outcome = [], consequences } = section;

  return (
    <section className={styles.decision}>
      {heading && (
        <h2 className={`t-h3 ${styles.heading}`}>
          <InlineRenderer nodes={heading} />
        </h2>
      )}

      {status && (
        <p className={`t-meta ${styles.status}`}>
          <span className={styles.statusLabel}>Status</span>
          <InlineRenderer nodes={status} />
        </p>
      )}

      <div className={styles.part}>
        <h3 className={`t-eyebrow ${styles.partLabel}`}>CONTEXT</h3>
        <BlockRenderer blocks={context} />
      </div>

      <div className={styles.part}>
        <h3 className={`t-eyebrow ${styles.partLabel}`}>OUTCOME</h3>
        <BlockRenderer blocks={outcome} />
      </div>

      {consequences && consequences.length > 0 && (
        <div className={styles.part}>
          <h3 className={`t-eyebrow ${styles.partLabel}`}>CONSEQUENCES</h3>
          <BlockRenderer blocks={consequences} />
        </div>
      )}
    </section>
  );
}
