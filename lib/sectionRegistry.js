import Prose from "@/components/case-study/sections/Prose";
import EvidenceMap from "@/components/case-study/sections/EvidenceMap";
import MediaSection from "@/components/case-study/sections/MediaSection";
import DecisionBlock from "@/components/case-study/sections/DecisionBlock";
import Callout from "@/components/case-study/sections/Callout";

/**
 * section.type -> renderer. A plain map, dispatched on type alone.
 *
 * No slug appears in this file and none may. A case study expresses a
 * distinctive evidence shape by choosing an existing type in its own content
 * data, never by adding a component or by being recognised here.
 */
export const sectionRegistry = {
  prose: Prose,
  evidenceMap: EvidenceMap,
  media: MediaSection,
  decision: DecisionBlock,
  callout: Callout,
};

/** The five declared section types, for validation and reporting. */
export const sectionTypes = Object.keys(sectionRegistry);

/**
 * Render one section. An unhandled type is never silently skipped: it throws,
 * so a malformed content module fails the build rather than shipping a page
 * with a section quietly missing from it.
 */
export function renderSection(section, index, context = {}) {
  if (!section || typeof section.type !== "string") {
    throw new Error(
      `sectionRegistry: section at index ${index} has no "type" field.`
    );
  }

  const Component = sectionRegistry[section.type];
  if (!Component) {
    throw new Error(
      `sectionRegistry: unhandled section type "${section.type}" at index ` +
        `${index}. Declared types are: ${sectionTypes.join(", ")}.`
    );
  }

  return <Component key={`${section.type}-${index}`} section={section} context={context} />;
}
