export const site = {
  name: "aditya kulkarni",
  bio: {
    lead: "Product Designer at Accenture Song Design. Berlin based. Currently focused on UI engineering and design systems for B2B and B2C products. ",
    contact: "Happy to chat and show my work in detail. Hit me up via ",
  },
  selectedWorkLabel: "Selected work",
  copyright: "© 2026 - ADITYA KULKARNI",
  resumeLabel: "Resume",
  resumeLabelMobile: "View resume",
  resumeUrl: undefined as string | undefined,
  links: {
    twitter: "https://x.com/adykrni",
    mail: "mailto:adityakulkarni1894@gmail.com",
  },
} as const;

export type Project = {
  cardTitle: string;
  cardDescription: string | string[];
  cardBg: string;
  cardBgMobile?: string;
  cardShadow: string;
  cardImage?: string;
  fullBleedPreview?: boolean;
  href: string;
};

/** Mobile frame order differs from the desktop horizontal carousel. */
export const mobileProjectOrder = [
  "/loryn",
  "/deutsche-wealth",
  "/audi",
  "/klm",
] as const;

export function sortProjectsForMobile(items: Project[]) {
  return [...items].sort(
    (a, b) =>
      mobileProjectOrder.indexOf(a.href as (typeof mobileProjectOrder)[number]) -
      mobileProjectOrder.indexOf(b.href as (typeof mobileProjectOrder)[number]),
  );
}

export const projects: Project[] = [
  {
    cardTitle: "Shipping a 0→1 design system for Loryn AI",
    cardDescription:
      "Led UI & Design systems, enabling product teams to launch features at scale 12k+ global employees",
    cardBg: "#e9f4ef",
    cardBgMobile: "#e4ece8",
    cardShadow:
      "0px 1px 4px 0px rgba(156,184,170,0.25), 0px 1px 0px -1px rgba(156,184,170,0.25), 0px 0px 0px 0.5px rgba(156,184,170,0.8)",
    cardImage: "/images/Card%201.png",
    href: "/loryn",
  },
  {
    cardTitle: "Modern data heavy dashboards for Deutsche bank",
    cardDescription: [
      "Delivered new components, and prototypes for",
      "Deutsche Wealth Online+",
    ],
    cardBg: "#e8edf1",
    cardShadow:
      "0px 1px 4px 0px rgba(140,158,173,0.25), 0px 1px 0px -1px rgba(140,158,173,0.25), 0px 0px 0px 0.5px rgba(140,158,173,0.8)",
    cardImage: "/images/Card%202.png",
    href: "/deutsche-wealth",
  },
  {
    cardTitle: "Shipping a modular component leading to 27% increase in bookings",
    cardDescription:
      "Designed new components for KLM Holidays enabling the product teams to ship for A/B tests",
    cardBg: "#ededed",
    cardShadow:
      "0px 1px 4px 0px rgba(167,167,167,0.25), 0px 1px 0px -1px rgba(167,167,167,0.25), 0px 0px 0px 0.5px rgba(167,167,167,0.8)",
    cardImage: "/images/Card%203.png",
    href: "/klm",
  },
  {
    cardTitle: "Unifying a global system for Audi",
    cardDescription:
      "A new design language, shipping a design system for web and mobile, for 10+ product teams at Audi.",
    cardBg: "#eaeef6",
    cardShadow:
      "0px 1px 4px 0px rgba(151,159,175,0.25), 0px 1px 0px -1px rgba(151,159,175,0.25), 0px 0px 0px 0.5px rgba(151,159,175,0.8)",
    cardImage: "/images/Card%204.png",
    fullBleedPreview: true,
    href: "/audi",
  },
];
