import Image from "next/image";
import { intro, profile } from "@/content/portfolio";

export function IntroSection() {
  return (
    <section className="intro section" aria-labelledby="intro-heading">
      <h2 id="intro-heading" className="sr-only">
        About
      </h2>
      <div className="intro__lead">
        <div className="intro__avatar-wrap">
          <Image
            className="intro__avatar"
            src={profile.imageSrc}
            alt={profile.imageAlt}
            width={200}
            height={200}
            priority
          />
        </div>
        <span
          className="profile__marker"
          aria-hidden
          title="Status placeholder"
        />
      </div>
      {intro.paragraphs.map((text, i) => (
        <p key={i} className="intro__p">
          {text}
        </p>
      ))}
    </section>
  );
}
