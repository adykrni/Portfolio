import { hero } from "@/content/portfolio";
import styles from "@/styles/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.divider} />
      <p className={styles.text}>
        Always down to chat! Please, feel free to hit me up via{" "}
        <a href={hero.twitterHref}>twitter</a> or{" "}
        <a href={`mailto:${hero.email}`}>mail</a>.
      </p>
    </footer>
  );
}
