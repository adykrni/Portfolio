import type { Metadata } from "next";
import Link from "next/link";
import { deutscheWealth } from "@/content/deutsche-wealth";
import styles from "@/styles/deutsche-wealth.module.css";

export const metadata: Metadata = {
  title: "Deutsche wealth online — Aditya Kulkarni",
  description: deutscheWealth.subtitle,
};

function TextSection({
  heading,
  headingId,
  children,
}: {
  heading: string;
  headingId?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.textBlock}>
      <h2 id={headingId} className={styles.sectionHeading}>
        {heading}
      </h2>
      <div className={styles.bodyText}>{children}</div>
    </section>
  );
}

function CaseStudyVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className={styles.mediaBlock}>
      <div className={styles.mediaInner}>
        <video
          className={styles.video}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          aria-label={title}
        />
      </div>
    </div>
  );
}

export default function DeutscheWealthPage() {
  const { challenge, solution } = deutscheWealth;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink} aria-label="Back to home">
          <svg
            className={styles.backIcon}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M11.25 4.5L6.75 9L11.25 13.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <h1 className={styles.title}>{deutscheWealth.title}</h1>
        <p className={styles.subtitle}>{deutscheWealth.subtitle}</p>
      </header>

      <TextSection heading={challenge.heading}>
        <p>{challenge.body}</p>
      </TextSection>

      <TextSection heading={solution.heading}>
        <p>
          {solution.lead}
          <span className={styles.emphasis}>{solution.emphasis}</span>
          {solution.body}
        </p>
      </TextSection>

      <section className={styles.metrics} aria-label="Impact metrics">
        {deutscheWealth.metrics.map((metric) => (
          <article key={metric.value} className={styles.metricCard}>
            <p className={styles.metricValue}>{metric.value}</p>
            <p className={styles.metricDescription}>{metric.description}</p>
          </article>
        ))}
      </section>

      <div className={styles.mediaSections}>
        <CaseStudyVideo
          src={deutscheWealth.heroVideoSrc}
          title="Dashboard overview"
        />

        {deutscheWealth.components.map((component) => (
          <section
            key={component.id}
            className={styles.componentGroup}
            aria-labelledby={`${component.id}-heading`}
          >
            <TextSection heading={component.title} headingId={`${component.id}-heading`}>
              <p>{component.description}</p>
            </TextSection>
            <CaseStudyVideo src={component.videoSrc} title={component.title} />
          </section>
        ))}
      </div>

      <footer className={styles.footer}>
        <hr className={styles.divider} />
        <Link href="/" className={styles.homeLink}>
          To home
        </Link>
      </footer>
    </main>
  );
}
