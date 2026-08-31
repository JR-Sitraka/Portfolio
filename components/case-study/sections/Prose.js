import BlockRenderer from "@/components/case-study/BlockRenderer";
import InlineRenderer from "@/components/case-study/InlineRenderer";
import styles from "./Prose.module.css";

/**
 * Prose — section type "prose". The ordinary narrative section: an optional
 * heading followed by blocks, rendered in the order the content declares.
 */
export default function Prose({ section }) {
  const { heading, blocks = [] } = section;

  return (
    <section className={styles.prose}>
      {heading && (
        <h2 className={`t-h3 ${styles.heading}`}>
          <InlineRenderer nodes={heading} />
        </h2>
      )}
      <BlockRenderer blocks={blocks} />
    </section>
  );
}
