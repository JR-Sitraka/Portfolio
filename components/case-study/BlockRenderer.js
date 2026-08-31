import InlineRenderer from "@/components/case-study/InlineRenderer";
import DataTable from "@/components/case-study/blocks/DataTable";
import CodeBlock from "@/components/case-study/blocks/CodeBlock";

/**
 * BlockRenderer — dispatches block nodes inside prose, decision and callout
 * sections. A dispatcher over many types, not a one-to-one content renderer.
 *
 * Every declared block type has an explicit case; an unhandled type throws
 * rather than being skipped.
 */
export function BlockNode({ node }) {
  if (!node || typeof node.type !== "string") {
    throw new Error("BlockRenderer: block node has no \"type\" field.");
  }

  switch (node.type) {
    case "paragraph":
      return (
        <p className="t-body">
          <InlineRenderer nodes={node.content} />
        </p>
      );

    case "heading": {
      /* level is content and is carried through as authored. */
      const Tag = node.level === 3 ? "h3" : "h2";
      const typeClass = node.level === 3 ? "t-h4" : "t-h3";
      return (
        <Tag className={typeClass}>
          <InlineRenderer nodes={node.content} />
        </Tag>
      );
    }

    case "list": {
      const Tag = node.ordered ? "ol" : "ul";
      return (
        <Tag>
          {(node.items || []).map((item, index) => (
            <li key={index}>
              <InlineRenderer nodes={item} />
            </li>
          ))}
        </Tag>
      );
    }

    case "table":
      return <DataTable block={node} />;

    case "quote":
      return (
        <blockquote>
          <InlineRenderer nodes={node.content} />
        </blockquote>
      );

    case "code":
      return <CodeBlock block={node} />;

    default:
      throw new Error(`BlockRenderer: unhandled block type "${node.type}".`);
  }
}

/** Renders a block array in order. */
export default function BlockRenderer({ blocks }) {
  if (!blocks) return null;

  return (
    <>
      {blocks.map((block, index) => (
        <BlockNode key={index} node={block} />
      ))}
    </>
  );
}
