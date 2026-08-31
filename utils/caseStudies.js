/**
 * Case-study manifest — slug, order and publication state only.
 *
 * Deliberately carries no content. The homepage, the dynamic route's
 * getStaticPaths and prev/next navigation all import this module, so it must
 * stay cheap: full case-study content lives in one module per case under
 * data/case-studies/ and is loaded server-side by lib/caseLoaders.js alone.
 *
 * `published` is a publication-readiness gate. A flag flips to true only after
 * that case's content, route behaviour and applicable verification pass, as a
 * separate and explicitly authorized change. While a flag is false the route
 * emits no path for it and /case/{slug} returns 404.
 */
export const caseStudies = [
  { slug: "trailhead",   projectId: "trailhead",   order: 1, published: false },
  { slug: "starter-kit", projectId: "starter-kit", order: 2, published: false },
  { slug: "numera",      projectId: "numera",      order: 3, published: false },
];

/** Published cases in reading order — Trailhead, Starter Kit, Numera. */
export function publishedCaseStudies() {
  return caseStudies
    .filter((entry) => entry.published)
    .sort((a, b) => a.order - b.order);
}

/** The manifest entry for a slug, or undefined when the slug is unknown. */
export function findCaseStudy(slug) {
  return caseStudies.find((entry) => entry.slug === slug);
}
