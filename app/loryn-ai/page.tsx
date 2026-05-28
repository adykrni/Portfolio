import type { Metadata } from "next";
import Link from "next/link";
import { lorynAi } from "@/content/loryn-ai";
import styles from "@/styles/loryn-ai.module.css";

export const metadata: Metadata = {
  title: "Loryn AI — Aditya Kulkarni",
  description: lorynAi.subtitle,
};

function GalleryImage({
  label,
  imageSrc,
  width,
  height,
}: {
  label: string;
  imageSrc: string;
  width: number;
  height: number;
}) {
  return (
    <div className={styles.imageFrame}>
      <img
        className={styles.image}
        src={imageSrc}
        alt={label}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function LorynAiPage() {
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
        <h1 className={styles.title}>{lorynAi.title}</h1>
        <p className={styles.subtitle}>{lorynAi.subtitle}</p>
      </header>

      <div className={styles.intro}>
        {lorynAi.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className={styles.bodyText}>
            {paragraph}
          </p>
        ))}
      </div>

      <p className={styles.galleryHeading}>{lorynAi.galleryHeading}</p>

      <section className={styles.gallery} aria-label="Loryn AI screenshots">
        {lorynAi.images.map((image) => (
          <GalleryImage
            key={image.id}
            label={image.label}
            imageSrc={image.imageSrc}
            width={image.width}
            height={image.height}
          />
        ))}
      </section>

      <footer className={styles.footer}>
        <hr className={styles.divider} />
        <Link href="/" className={styles.homeLink}>
          To home
        </Link>
      </footer>
    </main>
  );
}
