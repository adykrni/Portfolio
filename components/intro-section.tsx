import { intro } from "@/content/portfolio";

export function IntroSection() {
  return (
    <section className="intro section" aria-labelledby="intro-heading">
      <h2 id="intro-heading" className="sr-only">
        About
      </h2>
      {intro.paragraphs.map((text, i) => (
        <p key={i} className="intro__p">
          {text}
        </p>
      ))}
    </section>
  );
}
