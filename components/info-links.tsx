import type { InfoItem } from "@/content/portfolio";
import { infoItems } from "@/content/portfolio";
import { InfoGlyph } from "@/components/info-icon";

function InfoLinkIcon({ item }: { item: InfoItem }) {
  if (item.iconSrc) {
    return (
      <img
        src={item.iconSrc}
        alt=""
        className="info__icon-img"
        width={24}
        height={24}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return <InfoGlyph name={item.icon ?? "link"} />;
}

/** One homepage-style info row (icon + label); same markup/classes as on the main page. */
export function InfoLinkRow({ item }: { item: InfoItem }) {
  return (
    <li
      className={item.focusMuted ? "info__item info__item--focus-muted" : "info__item"}
    >
      {item.href ? (
        <a
          href={item.href}
          className={`info__link${item.accentHover ? " info__link--accent" : ""}`}
          {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <span className="info__icon" aria-hidden>
            <InfoLinkIcon item={item} />
          </span>
          <span className="info__label">{item.label}</span>
        </a>
      ) : (
        <span className="info__static">
          <span className="info__icon" aria-hidden>
            <InfoLinkIcon item={item} />
          </span>
          <span className="info__label">{item.label}</span>
        </span>
      )}
    </li>
  );
}

export function InfoLinks() {
  return (
    <section className="info section" aria-label="Quick links">
      <ul className="info__list">
        {infoItems.map((item) => (
          <InfoLinkRow key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
