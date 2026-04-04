import { FocusParagraph } from "@/components/focus-mode";
import { intro } from "@/content/portfolio";

export function IntroSection() {
  return (
    <section className="intro section" aria-labelledby="intro-heading">
      <h2 id="intro-heading" className="sr-only">
        About
      </h2>
      {intro.paragraphs.map((segments, i) => (
        <FocusParagraph
          key={i}
          segments={segments}
          className="intro__p intro__p--focusable"
        />
      ))}
    </section>
  );
}
