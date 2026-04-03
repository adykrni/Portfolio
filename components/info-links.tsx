import { infoItems } from "@/content/portfolio";
import { InfoGlyph } from "@/components/info-icon";

export function InfoLinks() {
  return (
    <section className="info section" aria-label="Quick links">
      <ul className="info__list">
        {infoItems.map((item) => (
          <li key={item.id} className="info__item">
            {item.href ? (
              <a
                href={item.href}
                className={`info__link${item.accentHover ? " info__link--accent" : ""}`}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="info__icon" aria-hidden>
                  <InfoGlyph name={item.icon} />
                </span>
                <span className="info__label">{item.label}</span>
              </a>
            ) : (
              <span className="info__static">
                <span className="info__icon" aria-hidden>
                  <InfoGlyph name={item.icon} />
                </span>
                <span className="info__label">{item.label}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
