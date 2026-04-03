import { projects } from "@/content/portfolio";

export function ProjectTimeline() {
  return (
    <section
      className="timeline section"
      aria-labelledby="timeline-heading"
    >
      <h2 id="timeline-heading" className="sr-only">
        Selected work
      </h2>
      <ol className="timeline__list">
        {projects.map((project) => (
          <li key={project.id} className="timeline__item">
            <article className="timeline__card">
              <h3 className="timeline__title">{project.title}</h3>
              <div className="timeline__body">
                {project.paragraphs.map((p, i) => (
                  <p key={`${project.id}-${i}`} className="timeline__p">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
