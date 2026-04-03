import { footer } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="site-footer__text">
        © {footer.year} — {footer.legalName}
      </p>
    </footer>
  );
}
