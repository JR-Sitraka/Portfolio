import InlineRenderer from "@/components/case-study/InlineRenderer";
import styles from "./DataTable.module.css";

/**
 * DataTable — block type "table".
 *
 * Serves every table in every case study: tier tallies, benchmarks, blob
 * hashes, version evolution. Headers and cells are inline arrays, so bold and
 * inline code inside them survive rather than flattening to plain text.
 *
 * The scroll container is the wrapper, not the page: a wide table scrolls
 * inside its own box so the document never scrolls horizontally.
 */
export default function DataTable({ block }) {
  const { caption, headers = [], rows = [] } = block;

  return (
    <div className={styles.scroll}>
      <table className={styles.table}>
        {caption && (
          <caption className={`t-meta-sm ${styles.caption}`}>
            <InlineRenderer nodes={caption} />
          </caption>
        )}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="t-label">
                <InlineRenderer nodes={header} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="t-body-sm">
                  <InlineRenderer nodes={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
