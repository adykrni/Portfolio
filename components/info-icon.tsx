import type { InfoIcon } from "@/content/portfolio";

const size = 18;
const stroke = "currentColor";

export function InfoGlyph({ name }: { name: InfoIcon }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke,
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "message":
      return (
        <svg {...common}>
          <path d="M8 9h8M8 13h5" />
          <path d="M5 19V6a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H9l-4 3z" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M7 7V6a2 2 0 012-2h6a2 2 0 012 2v1" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 4L3 7v13l6-3 6 3 6-3V4l-6 3-6-3z" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      );
    case "music":
      return (
        <svg {...common}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "link":
    default:
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 007.54.54l2.5-2.5a5 5 0 00-7.07-7.07l-1.4 1.4" />
          <path d="M14 11a5 5 0 00-7.54-.54l-2.5 2.5a5 5 0 007.07 7.07l1.4-1.4" />
        </svg>
      );
  }
}
