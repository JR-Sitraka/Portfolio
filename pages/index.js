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

      <div className="flex min-h-screen flex-col bg-bg-lab selection:bg-text-primary selection:text-bg-lab">
        {/* Navigation Header */}
        <Nav />

        {/* Core Layout Containers */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* Selected Experiments Section */}
          <section
            id="projects"
            className="mx-auto max-w-6xl px-6 py-12 md:py-24 border-t border-text-primary/10"
          >
            <h2 className="mb-12 font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
              01 // SELECTED EXPERIMENTS
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* System Layer Manifest Section */}
          <section
            id="stack"
            className="mx-auto max-w-6xl px-6 py-12 md:py-24 border-t border-text-primary/10"
          >
            <h2 className="mb-12 font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
              02 // SYSTEM LAYER MANIFEST
            </h2>
            
            <div className="flex flex-col gap-12">
              {stackRows.map((row, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-secondary">
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
