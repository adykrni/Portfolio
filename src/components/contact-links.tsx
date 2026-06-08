import { site } from "@/lib/content";

type ContactLinksProps = {
  prefix: string;
};

export function ContactLinks({ prefix }: ContactLinksProps) {
  return (
    <p className="font-mono text-[0.9375rem] leading-[1.4] tracking-[0.009375rem] text-muted">
      {prefix}
      <a
        href={site.links.twitter}
        className="underline decoration-solid underline-offset-auto"
      >
        twitter
      </a>
      {" or "}
      <a
        href={site.links.mail}
        className="underline decoration-solid underline-offset-auto"
      >
        mail
      </a>
      .
    </p>
  );
}
