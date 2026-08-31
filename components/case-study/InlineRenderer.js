/**
 * InlineRenderer — dispatches inline nodes.
 *
 * A dispatcher over many types, not a one-to-one content renderer. Every
 * declared inline type has an explicit case; an unhandled type throws rather
 * than being skipped, because a silently dropped node produces no wording
 * difference and would pass a fidelity check it should fail.
 *
 * Nothing here uses dangerouslySetInnerHTML. Every leaf renders as text and is
 * escaped by construction.
 */
export function InlineNode({ node }) {
  if (!node || typeof node.t !== "string") {
    throw new Error("InlineRenderer: inline node has no \"t\" field.");
  }

  switch (node.t) {
    case "text":
      return <>{node.v}</>;

    case "code":
      return <code>{node.v}</code>;

    case "strong":
      return (
        <strong>
          <InlineRenderer nodes={node.children} />
        </strong>
      );

    case "em":
      return (
        <em>
          <InlineRenderer nodes={node.children} />
        </em>
      );

    case "link": {
      /* An off-site href opens in a new tab; an in-site one does not, matching
         the rest of the project. */
      const external = /^https?:\/\//.test(node.href || "");
      return (
        <a
          href={node.href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <InlineRenderer nodes={node.children} />
        </a>
      );
    }

    case "evidence": {
      /* ids are an ordered array and that order is content — it is preserved
         exactly as authored, never sorted or de-duplicated. */
      const ids = node.ids || [];
      return (
        <sup>
          (
          {ids.map((id, index) => (
            <span key={`${id}-${index}`}>
              {index > 0 ? ", " : ""}
              <a href={`#evidence-${id}`}>{id}</a>
            </span>
          ))}
          )
        </sup>
      );
    }

    default:
      throw new Error(`InlineRenderer: unhandled inline type "${node.t}".`);
  }
}

/** Renders an inline array in order. */
export default function InlineRenderer({ nodes }) {
  if (!nodes) return null;

  return (
    <>
      {nodes.map((node, index) => (
        <InlineNode key={index} node={node} />
      ))}
    </>
  );
}
