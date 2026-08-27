import Head from "next/head";
import { TbArrowLeft, TbArrowUpRight, TbBrandGithub } from "react-icons/tb";
import SkipLink from "@/components/SkipLink";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/Footer";
import { resolveTech } from "@/lib/iconMap";
import { portfolioData } from "@/utils/portfolioData";

/**
 * Numera project route — minimal Phase 1 foundation.
 *
 * Renders only verified data already in utils/portfolioData.js: the project's
 * title, status, description, technology tags, links, and the one verified
 * screenshot. No case study, no metrics, no timeline, no placeholder copy.
 * The real case-study design and content are Phase 2 work.
 */
export default function NumeraPage() {
  const project = portfolioData.projects.find((p) => p.id === "numera");
  if (!project) return null;

  const { title, status, description, tech, links } = project;
  /* Product evidence lives on this route, not on the homepage card. */
  const shot = (project.screenshots || [])[0];

  return (
    <>
      <Head>
        <title>{`${title} — Sitraka Josoa`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="app-shell">
        <SkipLink />
        <Nav />

        <main id="main">
          <section className="section wrap project-page">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className="project-page__back t-label" href="/#work">
              <TbArrowLeft aria-hidden="true" />
              Back to selected work
            </a>

            <span className="eyebrow t-eyebrow">PROJECT</span>
            <h1 className="t-h2">{title}</h1>
            <p className="t-body-lg project-page__lede">{description}</p>

            {shot && (
              <figure className="project-page__media">
                {status === "live" && (
                  <span className="status status--live status--live-on-media">
                    <span className="live-glyph" aria-hidden="true" />
                    Live
                  </span>
                )}
                <img src={shot.src} alt={shot.alt} />
                {shot.caption && <figcaption>{shot.caption}</figcaption>}
              </figure>
            )}

            <div className="tags project-page__tags">
              {tech.map((name) => {
                const resolved = resolveTech(name);
                if (!resolved) return null;
                const { icon: Icon, color } = resolved;
                return (
                  <span className="tag" key={name}>
                    <Icon color={color} aria-hidden="true" />
                    {name}
                  </span>
                );
              })}
            </div>

            <div className="project-page__actions">
              {links.live && (
                <a
                  className="cta-pill t-label"
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live <TbArrowUpRight aria-hidden="true" />
                </a>
              )}
              {links.repo && (
                <a
                  className="btn-outline"
                  href={links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandGithub aria-hidden="true" />Repository
                </a>
              )}
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
