import { projects } from "@/content/portfolio";
import { ProjectItem } from "@/components/ProjectItem";
import styles from "@/styles/ProjectList.module.css";

export function ProjectList() {
  return (
    <section className={styles.section} aria-labelledby="projects-label">
      <p id="projects-label" className={styles.sectionLabel}>
        Products designed so far..
      </p>
      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
