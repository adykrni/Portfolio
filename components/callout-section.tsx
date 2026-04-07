import { callout } from "@/content/portfolio";

export function CalloutSection() {
  return (
    <section className="callout section" aria-labelledby="callout-headline">
      <div className="callout__card">
        <p className="callout__eyebrow">{callout.eyebrow}</p>
        <h2 id="callout-headline" className="callout__headline">
          {callout.headline}
        </h2>
        <a className="callout__cta" href={callout.ctaHref}>
          {callout.ctaLabel}
        </a>
      </div>
    </section>
  );
}
