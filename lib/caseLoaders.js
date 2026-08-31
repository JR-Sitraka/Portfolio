/**
 * Slug to content-module loader, resolved server-side only.
 *
 * Intentionally empty in the Foundation packet. The three content modules
 * under data/case-studies/ do not exist yet, so referencing them here would
 * fail compilation. Packets 2-4 each add exactly one entry alongside the
 * content module it loads:
 *
 *   "trailhead": () => import("@/data/case-studies/trailhead"),
 *
 * These loaders are called from getStaticProps and never from a client
 * component, so no case-study content can reach the homepage bundle.
 */
export const caseLoaders = {};

/**
 * Load one case's content module. Returns null when no loader is registered,
 * which is every slug while this map is empty.
 */
export async function loadCaseContent(slug) {
  const loader = caseLoaders[slug];
  if (!loader) return null;

  const loaded = await loader();
  return loaded.default ?? loaded.content ?? null;
}
