/**
 * Slug to content-module loader, resolved server-side only.
 *
 * One entry per case study whose content module exists. Trailhead is
 * registered; starter-kit and numera are deliberately absent because their
 * modules have not been written yet, and referencing a module that does not
 * exist would fail compilation. Each remaining packet adds exactly one entry
 * alongside the content module it loads.
 *
 * These loaders are called from getStaticProps and never from a client
 * component, so no case-study content can reach the homepage bundle.
 */
export const caseLoaders = {
  "trailhead": () => import("@/data/case-studies/trailhead"),
};

/**
 * Load one case's content module. Returns null when no loader is registered,
 * which is every slug with no entry in the map above.
 */
export async function loadCaseContent(slug) {
  const loader = caseLoaders[slug];
  if (!loader) return null;

  const loaded = await loader();
  return loaded.default ?? loaded.content ?? null;
}
