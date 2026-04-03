export type InfoIcon = "message" | "briefcase" | "map" | "music" | "link";

export type InfoItem = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
  icon: InfoIcon;
  /** If true, use decorative hover treatment (still a link or span) */
  accentHover?: boolean;
};

export type Project = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const profile = {
  imageSrc: "/images/profile avatar1.png",
  imageAlt: "Portrait",
};

export const intro = {
  paragraphs: [
    "My name is Adi, I’m a Senior Product Designer at the design chapter of  Accenture Song.",
    "Currently shipping an AI tool for Syngenta Corp. You can find my work in brief below, and if you like something, then let’s be friends.",
  ],
};

export const infoItems: InfoItem[] = [
  {
    id: "reach",
    label: "Reach out to me",
    href: "mailto:you@example.com",
    icon: "message",
  },
  {
    id: "experience",
    label: "Experience so far",
    href: "https://example.com/experience",
    external: true,
    icon: "briefcase",
    accentHover: true,
  },
  {
    id: "location",
    label: "Chillin' in Berlin",
    href: "https://maps.google.com",
    external: true,
    icon: "map",
  },
  {
    id: "music",
    label: "Currently jammin on Kerela Dust",
    href: "https://example.com/music",
    external: true,
    icon: "music",
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "SYNGETA CORP.",
    paragraphs: [
      "Designed a 0→1 AI assistant for 8k+ employees, owning the full experience from stakeholder research to MVP release — reducing IT incidents by 27% and saving ~$8M in operational costs.",
      "Architected the intent and interaction model for Loryn, aligning IT, Procurement, and HR functions into a single coherent experience logic across product and business teams.",
      "Introduced AI-driven prototyping workflows using Figma and Claude, cutting design turnaround from ~1 week to 1–2 days and accelerating feature delivery ahead of roadmap.",
    ],
  },
  {
    id: "p2",
    title: "AUDI DIGITAL",
    paragraphs: [
      "Shipped the redesigned myAudi app dashboard with new interaction patterns for core vehicle controls, driving faster delivery cycles across cross-functional teams.",
      "Designed the Service Appointments feature end-to-end, resulting in a ~20% increase in booking conversions.",
      "Contributed to design system migration and AAA accessibility compliance, improving engineering handoff quality and component consistency at scale.",
    ],
  },
  {
    id: "p3",
    title: "ADIDAS CLICK",
    paragraphs: [
      "Redesigned flows for retail buyers, and store managers  cutting order completion time by 50% and directly impacting $50M+ in quarterly revenue across 800+ retail partners.",
    ],
  },
  {
    id: "p4",
    title: "BIRKENSTOCK",
    paragraphs: [
      "Designed the brand marketing website celebrating 250 years of Birkenstock, balancing heritage storytelling with modern digital craft.",
    ],
  },
  {
    id: "p5",
    title: "KLM HOLIDAYS",
    paragraphs: [
      "Built a scalable design system of 100+ components (17 net new), increasing delivery velocity and enabling faster A/B testing cycles.",
    ],
  },
];

export const callout = {
  eyebrow: "PORTFOLIO is WIP",
  headline: "Want to know more? Please reach out to me for case studies.",
  subheadline:
    "Happy to share deeper context on any of the work above—just say hello.",
  ctaLabel: "One click away…",
  ctaHref: "mailto:you@example.com",
};

export const footer = {
  legalName: "ADITYA KULKARNI",
  year: new Date().getFullYear(),
};
