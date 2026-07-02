import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TechCard from "@/components/TechCard";
import LabLogs from "@/components/LabLogs";
import Footer from "@/components/Footer";
import { portfolioData } from "@/utils/portfolioData";

export default function Home() {
  const { seo, projects, techStack } = portfolioData;

  // Group tech manifest rows according to the specification
  const stackRows = [
    { label: "Interface Layer", items: techStack.interface },
    { label: "Logic & Compute Layer", items: techStack.logic },
    { label: "Deployment & Infrastructure Layer", items: techStack.infrastructure },
    { label: "Tooling & Workflow Layer", items: techStack.tooling.filter(t => t.used) }
  ];

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

      <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
        {/* Navigation Header */}
        <Nav />

        {/* Core Layout Containers */}
        <main style={{ flex: 1, backgroundColor: "var(--color-surface)" }}>
          {/* Hero Section */}
          <Hero />

          {/* Selected Experiments Section */}
          <section
            id="projects"
            style={{ borderTop: "1px solid var(--color-border-light)" }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 64px" }} className="section-inner">
              <h2
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-secondary)",
                  marginBottom: "48px",
                }}
              >
                <span style={{ color: "var(--color-text-secondary)" }}>01</span>
                {" "}
                <span style={{ color: "var(--color-text-primary)" }}>// SELECTED EXPERIMENTS</span>
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>

          {/* System Layer Manifest Section */}
          <section
            id="stack"
            style={{ borderTop: "1px solid var(--color-border-light)" }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 64px" }} className="section-inner">
              <h2
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-secondary)",
                  marginBottom: "48px",
                }}
              >
                <span style={{ color: "var(--color-text-secondary)" }}>02</span>
                {" "}
                <span style={{ color: "var(--color-text-primary)" }}>// SYSTEM LAYER MANIFEST</span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                {stackRows.map((row, index) => (
                  <div key={index} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-text-secondary)",
                        margin: 0,
                      }}
                    >
                      {row.label}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                      {row.items.map((tech, techIdx) => (
                        <TechCard key={techIdx} tech={tech} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Lab Chronology Section */}
          <LabLogs />
        </main>

        {/* Footer Connections */}
        <Footer />
      </div>

    </>
  );
}
