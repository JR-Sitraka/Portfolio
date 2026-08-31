import BlockRenderer from "@/components/case-study/BlockRenderer";
import InlineRenderer from "@/components/case-study/InlineRenderer";
import styles from "./Callout.module.css";

/**
 * Callout — section type "callout".
 *
 * `variant` is one of note, limitation or boundary. It selects presentation
 * from the content's own declared value; it is not derived from which case
 * study is rendering. An unrecognised variant falls back to the note
 * presentation rather than rendering nothing.
 */
const VARIANT_CLASS = {
  note: styles.note,
  limitation: styles.limitation,
  boundary: styles.boundary,
};

export default function Callout({ section }) {
  const { variant = "note", heading, blocks = [] } = section;
  const variantClass = VARIANT_CLASS[variant] || styles.note;

  return (
    <aside className={`${styles.callout} ${variantClass}`} data-variant={variant}>
      {heading && (
        <h2 className={`t-h4 ${styles.heading}`}>
          <InlineRenderer nodes={heading} />
        </h2>
      )}
      <div className={styles.body}>
        <BlockRenderer blocks={blocks} />
      </div>
    </aside>
  );
}
