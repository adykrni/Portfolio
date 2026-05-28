export type Project = {
  id: string;
  name: string;
  description: string;
  href: string | null;
  active: boolean;
};

export const hero = {
  name: "Aditya Kulkarni",
  bio: "Hi, I'm a senior product designer crafting experiences for B2B and B2C products.",
  email: "adityakulkarni1894@gmail.com",
  twitterHref: "https://x.com/adykrni",
};

export const projects: Project[] = [
  {
    id: "loryn-ai",
    name: "Loryn AI",
    description:
      "0 to 1 product design for internal employees of Syngenta Corp",
    href: "/loryn-ai",
    active: true,
  },
  {
    id: "deutsche-wealth",
    name: "Deutsche wealth online",
    description:
      "MVP dashboard for money and portfolio management for 1M+ active users",
    href: "/deutsche-wealth",
    active: true,
  },
  {
    id: "audi",
    name: "Audi",
    description:
      "Shipped myAudi app for iOS and Android improving the connected car experience for Audi owners.",
    href: null,
    active: false,
  },
  {
    id: "adidas-click",
    name: "Adidas Click",
    description:
      "Designing workflows for sales and customer reps for B2B markets.",
    href: null,
    active: false,
  },
  {
    id: "klm-holidays",
    name: "KLM Holidays",
    description:
      "Scalable travel booking experience and design system for package holidays.",
    href: null,
    active: false,
  },
];
