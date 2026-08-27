import { useEffect } from "react";
import Head from "next/head";
import SkipLink from "@/components/SkipLink";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ToolboxStrip from "@/components/ToolboxStrip";
import ProjectGrid from "@/components/ProjectGrid";
import AboutSection from "@/components/AboutSection";
import ContactCard from "@/components/ContactCard";
import SiteFooter from "@/components/Footer";
import { portfolioData } from "@/utils/portfolioData";

export default function Home() {
  const { seo, projects, technologies } = portfolioData;

  /* Revealed content is visible by default in markup and CSS. The hidden
     state is applied by script only once the observer is confirmed active,
     so a page without JavaScript renders complete rather than blank. */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const root = document.documentElement;
    root.classList.add("js-enter", "js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("js-enter", "js-reveal");
    };
  }, []);

  return (
    <>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta property="og:title" content={seo.metaTitle} />
        <meta property="og:description" content={seo.metaDescription} />
        <meta property="og:image" content={seo.ogImage} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="app-shell">
        <SkipLink />
        <Nav />

        <main id="main">
          <Hero />

          <ToolboxStrip technologies={technologies} />
          <ProjectGrid projects={projects} />

          <AboutSection />
          <ContactCard />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
