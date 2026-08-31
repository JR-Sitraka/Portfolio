import Head from "next/head";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import { renderSection } from "@/lib/sectionRegistry";
import { loadCaseContent } from "@/lib/caseLoaders";
import { findCaseStudy, publishedCaseStudies } from "@/utils/caseStudies";

/**
 * The one dynamic case-study route.
 *
 * Resolving what to load by slug happens here and only here. How a section
 * renders is decided by the registry from section.type, so neither this route
 * nor CaseStudyLayout ever asks which case study it is rendering.
 */
export default function CaseStudyPage({ content, nav }) {
  /* fallback is false and getStaticPaths emits nothing while every flag is
     false, so this route is not reachable today. The guard is the honest
     response to a null content module rather than a crash. */
  if (!content) return null;

  const { meta, sections = [], evidenceMap = [], hero = [], inShort = [], links = {} } = content;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CaseStudyLayout meta={meta} hero={hero} inShort={inShort} nav={nav} links={links}>
        {sections.map((section, index) =>
          renderSection(section, index, { evidenceMap, assets: content.assets })
        )}
      </CaseStudyLayout>
    </>
  );
}

export async function getStaticPaths() {
  /* The manifest alone — no content module is touched here. Every flag is
     false in this packet, so paths is empty and every /case/{slug} is a 404. */
  return {
    paths: publishedCaseStudies().map((entry) => ({ params: { slug: entry.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const entry = findCaseStudy(params.slug);
  if (!entry || !entry.published) return { notFound: true };

  const content = await loadCaseContent(entry.slug);
  if (!content) return { notFound: true };

  /* Prev/next are computed from published cases only, so navigation can never
     link to a route that returns 404. No wrap-around: the first case has no
     previous and the last has no next. */
  const published = publishedCaseStudies();
  const position = published.findIndex((item) => item.slug === entry.slug);
  const neighbour = (item) =>
    item ? { slug: item.slug, href: `/case/${item.slug}` } : null;

  return {
    props: {
      content,
      nav: {
        prev: neighbour(position > 0 ? published[position - 1] : null),
        next: neighbour(position < published.length - 1 ? published[position + 1] : null),
      },
    },
  };
}
