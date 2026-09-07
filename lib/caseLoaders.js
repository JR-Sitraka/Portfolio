/**
 * Slug to content-module loader, resolved server-side only.
 *
 * One entry per case study whose content module exists. All three are now
 * registered, which completes the loader map. It does not make any case study
 * public: every publication flag in the manifest is still false, so each
 * /case/{slug} returns 404 until its flag is flipped as separate work.
 *
 * These loaders are called from getStaticProps and never from a client
 * component, so no case-study content can reach the homepage bundle.
 */
export const caseLoaders = {
  "trailhead": () => import("@/data/case-studies/trailhead"),
  "starter-kit": () => import("@/data/case-studies/starter-kit"),
  "numera": () => import("@/data/case-studies/numera"),
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
