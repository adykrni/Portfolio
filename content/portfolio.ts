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

/** Segment for “Focus” mode (normal = single tone; focused = key vs muted). */
export type FocusSegment = { text: string; role: "key" | "muted" };

export type Project = {
  id: string;
  title: string;
  paragraphs: FocusSegment[][];
};

export const profile = {
  imageSrc: "/images/profile avatar1.png",
  imageAlt: "Portrait",
};

export const intro = {
  paragraphs: [
    [
      { text: "My name is ", role: "muted" },
      { text: "Adi", role: "key" },
      { text: ", I’m a ", role: "muted" },
      { text: "Senior Product Designer at ", role: "key" },
      { text: "the design chapter of  ", role: "muted" },
      { text: "Accenture Song.", role: "key" },
    ],
    [
      { text: "Currently ", role: "muted" },
      {
        text: "crafting an agent tool tool for Syngenta Corp. ",
        role: "key",
      },
      { text: "You can ", role: "muted" },
      { text: "find my work in brief below, ", role: "key" },
      {
        text: "and if you like something, then let’s be friends.",
        role: "muted",
      },
    ],
  ] satisfies FocusSegment[][],
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
      [
        { text: "Designing a 0→1 AI tool ", role: "key" },
        { text: "for  8k+ employees. ", role: "muted" },
        {
          text: "I crafted the agentic layers with for cross functions, ",
          role: "key",
        },
        { text: "owning the product ", role: "muted" },
        { text: "from research to release of v1.3. ", role: "key" },
        { text: "Our early releases helped in ", role: "muted" },
        { text: "reducing the IT incidents by 37% ", role: "muted" },
        { text: "and saving ~$2M in operational costs.", role: "muted" },
      ],
      [
        { text: "For v1 ", role: "muted" },
        { text: "I architected the intent and interaction model ", role: "key" },
        { text: "for the tool, ", role: "muted" },
        { text: "aligning IT, Procurement, and HR ", role: "key" },
        { text: "functions ", role: "muted" },
        { text: "into a single coherent experience ", role: "key" },
        {
          text: "logic across product and business teams.",
          role: "muted",
        },
      ],
      [
        {
          text: "I established the AI-driven prototyping workflows ",
          role: "key",
        },
        {
          text: "using Figma and Claude, cutting design turnaround from ~1 week to 1–2 days and ",
          role: "muted",
        },
        {
          text: "accelerating feature delivery ahead of roadmap.",
          role: "key",
        },
      ],
    ],
  },
  {
    id: "p2",
    title: "AUDI DIGITAL",
    paragraphs: [
      [
        {
          text: "I improved the connected car experience by redesigning ",
          role: "key",
        },
        { text: "the dashboard of the myAudi app with ", role: "muted" },
        {
          text: "new interaction patterns for core vehicle features, ",
          role: "key",
        },
        {
          text: "like climate controls, service appointments, vehicle health etc. in collaboration with product owners and engineering team ",
          role: "muted",
        },
        {
          text: "to align user needs with technical feasibility.",
          role: "key",
        },
      ],
      [
        {
          text: "The new patterns delivered immense value for Audi owners, ",
          role: "key",
        },
        {
          text: "specially the one's with hybrid, and electric vehicles. ",
          role: "muted",
        },
        { text: "I really enjoyed ", role: "key" },
        {
          text: "crafting the human-machine interaction while learning a lot about ",
          role: "muted",
        },
        {
          text: "delivering a seamless experience within constraints.",
          role: "key",
        },
      ],
      [
        { text: "I also helped ", role: "key" },
        { text: "the DesOps team to improve ", role: "muted" },
        {
          text: "the design system migration and drove the AAA accessibility compliance, ",
          role: "key",
        },
        {
          text: "improving engineering handoff quality and component consistency at scale.",
          role: "muted",
        },
      ],
    ],
  },
  {
    id: "p3",
    title: "ADIDAS CLICK",
    paragraphs: [
      [
        { text: "Redesigned B2B flows ", role: "key" },
        { text: "for retail buyers, and store managers ", role: "muted" },
        {
          text: "cutting order completion time by 50%, directly impacting $50M+ in quarterly revenue ",
          role: "key",
        },
        { text: "across European retail partners.", role: "muted" },
      ],
    ],
  },
  {
    id: "p4",
    title: "BIRKENSTOCK",
    paragraphs: [
      [
        {
          text: "Designed a bespoke brand marketing website celebrating 250 years of Birkenstock, ",
          role: "key",
        },
        {
          text: "balancing heritage storytelling with modern digital craft..",
          role: "muted",
        },
      ],
    ],
  },
  {
    id: "p5",
    title: "KLM HOLIDAYS",
    paragraphs: [
      [
        { text: "Built ", role: "key" },
        { text: "a scalable design system of ", role: "muted" },
        { text: "100+ components (17 net new), ", role: "key" },
        { text: "increasing delivery velocity and ", role: "muted" },
        { text: "enabling faster A/B testing cycles.", role: "key" },
      ],
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
