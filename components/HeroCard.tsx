import { hero } from "@/content/portfolio";
import styles from "@/styles/HeroCard.module.css";

export function HeroCard() {
  return (
    <div className={styles.card}>
      <span className={styles.cornerBL} aria-hidden />
      <span className={styles.cornerBR} aria-hidden />
      <h1 className={styles.name}>{hero.name}</h1>
      <p className={styles.bio}>{hero.bio}</p>
      <p className={styles.bio}>
        Always down to chat! Feel free to hit me up via{" "}
        <a href={hero.twitterHref}>twitter</a> or{" "}
        <a href={`mailto:${hero.email}`}>mail</a>.
      </p>
    </div>
  );
}
