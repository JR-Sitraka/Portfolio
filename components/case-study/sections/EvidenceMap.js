import InlineRenderer from "@/components/case-study/InlineRenderer";
import styles from "./EvidenceMap.module.css";

/**
 * EvidenceMap — section type "evidenceMap".
 *
 * Collapsed by default, behind a native <details>/<summary>. The native
 * element is deliberate: the control is always exposed to assistive
 * technology with an accurate expanded state, it is in the tab order, and
 * Enter and Space toggle it without any script. Collapsed content being
 * hidden from the accessibility tree is normal and correct.
 *
 * The summary states what the panel contains and how much, so the cost of
 * opening it is known before opening.
 *
 * The rows are data, held on the content module rather than on the section, so
 * a case study declares { type: "evidenceMap" } and nothing else.
 */
export default function EvidenceMap({ section, context = {} }) {
  const rows = context.evidenceMap || [];
  if (rows.length === 0) return null;

  const { heading } = section;
  const label = `Evidence map — ${rows.length} ${rows.length === 1 ? "claim" : "claims"}`;

  return (
    <section className={styles.evidence}>
      {heading && (
        <h2 className={`t-h3 ${styles.heading}`}>
          <InlineRenderer nodes={heading} />
        </h2>
      )}

      <details className={styles.disclosure}>
        <summary className={`t-label ${styles.summary}`}>{label}</summary>

        <div className={styles.panel}>
          <div className={styles.scroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col" className="t-label">ID</th>
                  <th scope="col" className="t-label">Claim</th>
                  <th scope="col" className="t-label">Source</th>
                  <th scope="col" className="t-label">Tier</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} id={`evidence-${row.id}`}>
                    <td className={`t-meta-sm ${styles.id}`}>{row.id}</td>
                    <td className="t-body-sm"><InlineRenderer nodes={row.claim} /></td>
                    <td className="t-body-sm"><InlineRenderer nodes={row.source} /></td>
                    <td className={`t-meta-sm ${styles.tier}`}>{row.tier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </details>
    </section>
  );
}
