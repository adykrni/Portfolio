import { FocusParagraph } from "@/components/focus-mode";
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
                {project.paragraphs.map((segments, i) => (
                  <FocusParagraph
                    key={`${project.id}-${i}`}
                    segments={segments}
                    className="timeline__p timeline__p--focusable"
                  />
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
