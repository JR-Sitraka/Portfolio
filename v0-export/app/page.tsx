import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { SiteHeader } from "@/components/site-header"
import { TechStack } from "@/components/tech-stack"
import { ChronologicalLogs } from "@/components/chronological-logs"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <ProjectCard />
      <TechStack />
      <ChronologicalLogs />
      <SiteFooter />
    </main>
  )
}
