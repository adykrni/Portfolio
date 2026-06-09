export const site = {
  name: "Aditya Kulkarni",
  bio: "Heylo, I'm a Senior product designer focused on UI engineering and design systems, crafting experiences for B2B and B2C products.",
  location:
    "Located in Berlin, always down to chat! Feel free to hit me up via ",
  projectsIntro:
    "I have shipped multiple design systems for small to large design teams, below are a few projects that I worked on...",
  footer:
    "Happy to chat and show my work in detail. Hit me up via ",
  links: {
    twitter: "https://x.com/adykrni",
    mail: "mailto:adityakulkarni1894@gmail.com",
  },
} as const;

export type Project = {
  title: string;
  description: string;
  href?: string;
  disabled?: boolean;
};

export const projects: Project[] = [
  {
    title: "Loryn AI",
    description:
      "Shipped an AI-first design system from ground up enabling PMs, UX designers to iterate on feature autonomously.",
    href: "/loryn",
  },
  {
    title: "Deutsche wealth online",
    description: "UI design + prototyping for data heavy dashboards",
    href: "/deutsche-wealth",
  },
  {
    title: "KLM Holidays",
    description:
      "Designing modular components for rapid A/B testing, and defining the token architecture.",
    href: "/klm",
  },
  {
    title: "Audi",
    description:
      "Unified a design system for digital product teams, having one single source of truth.",
    disabled: true,
  },
];
