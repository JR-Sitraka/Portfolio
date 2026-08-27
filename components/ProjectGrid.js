import ProjectCard from "@/components/ProjectCard";

/**
 * ProjectGrid — arranges ProjectCards without redesign as projects are added.
 *
 * The project flagged `featured` takes the large left cell; the next two stack
 * in the right column; every further project wraps into a full-width row of
 * equal compact cards below the grid. Nothing is capped at three and nothing is
 * dropped — adding a project is a data edit.
 *
 * The count is derived from the array length, zero-padded to two digits.
 */
export default function ProjectGrid({ projects }) {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => project !== featured);

  const rightColumn = rest.slice(0, 2);
  const overflow = rest.slice(2);

  const count = String(projects.length).padStart(2, "0");

  return (
    <section className="section wrap" id="work">
      <div className="section-head reveal">
        <div>
          <span className="eyebrow t-eyebrow">SELECTED WORK</span>
          <h2 className="t-h2">Projects I&apos;ve built</h2>
        </div>
        <span className="t-meta muted">{count} projects</span>
      </div>

      <div className="grid">
        {featured && <ProjectCard project={featured} featured />}

        <div className="grid__col">
          {rightColumn.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {overflow.length > 0 && (
        <div className="grid__overflow">
          {overflow.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
