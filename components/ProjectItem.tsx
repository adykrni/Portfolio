import Link from "next/link";
import styles from "@/styles/ProjectItem.module.css";

type Props = {
  name: string;
  description: string;
  href: string | null;
  active: boolean;
};

function isInternalHref(href: string) {
  return href.startsWith("/");
}

export function ProjectItem({ name, description, href, active }: Props) {
  const content = (
    <>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span
          className={`${styles.chevron} ${!active ? styles.chevronDisabled : ""}`}
          aria-hidden
        >
          ›
        </span>
      </div>
      <p className={styles.description}>{description}</p>
    </>
  );

  if (active && href) {
    const className = `${styles.item} ${styles.active}`;

    if (isInternalHref(href)) {
      return (
        <Link className={className} href={href}>
          {content}
        </Link>
      );
    }

    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <div className={`${styles.item} ${styles.inactive}`}>{content}</div>;
}
