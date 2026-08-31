import styles from "./CodeBlock.module.css";

/**
 * CodeBlock — block type "code".
 *
 * `code` is a literal string and is rendered verbatim: never parsed, never
 * highlighted, never normalised. Fidelity for this block is byte-exact, so
 * anything that rewrote whitespace here would be a defect.
 */
export default function CodeBlock({ block }) {
  const { code, language } = block;

  return (
    <pre className={styles.pre} data-language={language || undefined}>
      <code className={styles.code}>{code}</code>
    </pre>
  );
}
