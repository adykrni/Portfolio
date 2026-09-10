import { site } from "@/lib/content";

export type BubbleAnnotation = {
  kind: "bubbles";
  texts: string[];
};

// The dark preview frame + stacked fact pills shown beside a project row.
// imageSrc is optional — chips without a real screenshot yet (or a case
// study still in progress) fall back to the mediaLabel placeholder text.
// imageHasOwnFrame marks images (like device-mockup exports) that already
// bake in their own border/bezel — for those, skip our own dark frame
// wrapper so it doesn't double up into two mismatched rounded borders.
// imageWidth/imageHeight (the file's actual pixel dimensions) are required
// alongside imageHasOwnFrame so the image renders at its native aspect
// ratio instead of being cropped to fit a fixed-size box.
export type FactsAnnotation = {
  kind: "facts";
  mediaLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHasOwnFrame?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  facts: string[];
  href: string;
  /** When false, hover preview works but click won't navigate to the case study. */
  navigable?: boolean;
};

export type ChipAnnotation = BubbleAnnotation | FactsAnnotation;

export type BioChip = {
  id: string;
  label: string;
  annotation: ChipAnnotation;
};

export const employerChip: BioChip = {
  id: "accenture",
  label: "Accenture Song Design",
  annotation: {
    kind: "bubbles",
    texts: ["consultancy world!", "sometimes fun, sometimes hell! \u{1F92B}"],
  },
};

// Intro paragraph is split around the single inline employer chip.
export const bioIntro = {
  before:
    "Yo, I’m confused what to call myself. I’m a product designer who ships, and I love everything related to building a product - what to build, why to build, and who’s it for. I’m working at ",
  after: " crafting B2B amd B2C products.",
};

export const bioContact = {
  before:
    "I live in Berlin, but I was born in Pune (a cool city in India). I’ve been designing scalable products and design systems since 5+ years, below are a few of my projects, and here is my ",
  resumeLabel: "Resume.",
  resumeHref: site.resumeUrl ?? "#",
  afterResume: " You can find me on ",
  // Rendered as "X, LinkedIn, and Gmail." — the trailing joiner logic lives in BioPage.
  links: [
    { label: "X", href: site.links.twitter },
    // TODO: replace with the real LinkedIn profile URL — not present anywhere in the repo.
    { label: "LinkedIn", href: "#" },
    { label: "Gmail", href: site.links.mail },
  ],
};

export const projects: BioChip[] = [
  {
    id: "loryn",
    label: "Loryn AI",
    annotation: {
      kind: "facts",
      mediaLabel: "LORYN AI PREVIEW",
      imageSrc: "/images/loryn-preview.png",
      imageAlt: "Loryn AI chat with SAP system access request form",
      imageHasOwnFrame: true,
      imageWidth: 2600,
      imageHeight: 1704,
      facts: [
        "0→1 AI enterprise product",
        "shipped IT management feature end-to-end",
        "designed AI-first patterns & shipped the design system",
      ],
      href: "/loryn",
    },
  },
  {
    id: "deutsche",
    label: "Deutsche Bank",
    annotation: {
      kind: "facts",
      mediaLabel: "DEUTSCHE WEALTH PREVIEW",
      imageSrc: "/images/deutsche-wealth/db-preview.png",
      imageAlt: "Deutsche Bank Wealth Management net wealth dashboard",
      imageHasOwnFrame: true,
      imageWidth: 3900,
      imageHeight: 2412,
      facts: [
        "Data heavy dashboards for wealth management portal",
        "validated with 27 users in usability testing",
      ],
      href: "/deutsche-wealth",
    },
  },
  {
    id: "myaudi",
    label: "myAudi app",
    annotation: {
      kind: "facts",
      mediaLabel: "MYAUDI PREVIEW",
      imageSrc: "/images/audi-preview.png",
      imageAlt: "myAudi app range and charging overview",
      imageHasOwnFrame: true,
      imageWidth: 2600,
      imageHeight: 1704,
      facts: ["Unifying a global design system for Audi", "case study coming soon, apologies.."],
      href: "/audi",
      navigable: false,
    },
  },
  {
    id: "klm",
    label: "KLM Holidays",
    annotation: {
      kind: "facts",
      mediaLabel: "KLM HOLIDAYS PREVIEW",
      imageSrc: "/images/klm-preview.png",
      imageAlt: "KLM Holidays hero — find your perfect holiday package",
      imageHasOwnFrame: true,
      imageWidth: 2600,
      imageHeight: 1704,
      facts: [
        "design system for travel tech",
        "case study coming soon...",
      ],
      href: "/klm",
      navigable: false,
    },
  },
];

export function isProjectNavigable(chip: BioChip): boolean {
  return chip.annotation.kind === "facts" && chip.annotation.navigable !== false;
}

export const allBioChips: Record<string, BioChip> = Object.fromEntries(
  [employerChip, ...projects].map((chip) => [chip.id, chip]),
);
