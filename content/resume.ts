/** Placeholder copy for the read.cv-style resume page. Replace with real details. */

export const resumeProfile = {
  name: "Aditya Kulkarni",
  headline: "Senior Product Designer",
  location: "Berlin, Germany",
  email: "jordan.vale@example.com",
  phone: "+49 30 0000 0000",
  links: [
    { label: "Portfolio", href: "https://example.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/example" },
    { label: "Read.cv", href: "https://read.cv/example" },
  ],
};

export const resumeAbout = {
  title: "About",
  body:
    "Crafting B2B and B2C products since 5+ years, I bridge design, management, and engineering to build products that accessible, coherent, and scale across platforms. I like to build products that get people excited. Currently focused on crafting agentic workflows, measurable UX outcomes, and scaling design ops across global teams.",
};

/** One client account: add as many `paragraphs` entries as you need. */
export type ResumeClientWork = {
  id: string;
  client: string;
  paragraphs: string[];
};

export type ResumeExperience = {
  id: string;
  start: string;
  end: string;
  role: string;
  org: string;
  location: string;
  /** Overview paragraph for this role (after dates / org / location). */
  summary: string;
  clients: ResumeClientWork[];
};

export const resumeExperience: ResumeExperience[] = [
  {
    id: "e1",
    start: "2022",
    end: "Present",
    role: "Senior Product Designer",
    org: "Accenture Song Design",
    location: "Berlin, DE",
    summary:
      "Delivered design services for clients like Syngenta Corp, Audi, Adidas, and BASF—from MVP designs to production releases.",
    clients: [
      {
        id: "e1-c1",
        client: "Syngenta Corp.",
        paragraphs: [
          "Leading the design for Loryn—an AI tool for 7k+ employees improving IT, HR, and procurement processes. I designed the foundational AI layer with cross-functional stakeholders, contributed to the roadmap, and shipped features end-to-end, leading to a coherent product experience and roughly 1.6M in revenue for our company.",
        ],
      },
      {
        id: "e1-c2",
        client: "Audi",
        paragraphs: [
          "Redesigned myAudi app features to improve the connected car experience for Audi owners. I owned delivery for areas such as the dashboard and vehicle health monitoring, collaborating with product owners and engineering so the experience stayed coherent with in-car surfaces.",
          "Scaled Audi’s global cross-platform design system: new token architecture toward WCAG 2.2–compliant patterns, a governance model so feature teams could ship autonomously, adoption work with stakeholders, and functional prototypes for partner teams.",
        ],
      },
      {
        id: "e1-c3",
        client: "Adidas",
        paragraphs: [
          "Optimized conversion-critical flows for Adidas Click wholesale (50M+ quarterly revenue), including about a 50% reduction in order completion time via a strategic dashboard redesign. Ran service design research across retailers, distributors, and sales, and translated insights into production-ready prototypes for new capabilities.",
        ],
      },
      {
        id: "e1-c4",
        client: "Organizational",
        paragraphs: [
          'Established an ongoing pilot program called “Berlin Terminal” to explore an AI-first workflow with partners in creative, technology, and business development, and to trial new design processes.',
        ],
      },
    ],
  },
  {
    id: "e2",
    start: "2021",
    end: "2022",
    role: "UI/UX Designer",
    org: "Code d'Azur (now HyperSolid)",
    location: "Amsterdam, NL",
    summary:
      "Delivered designs for web and mobile apps for clients such as KLM Holidays, Philips, and NS.",
    clients: [
      {
        id: "e2-c1",
        client: "KLM Holidays",
        paragraphs: [
          "Shipped a modular design system for the KLM Holidays platform (millions of DAUs), cutting development cycles by about 40%. Built 17+ reusable components tuned for rapid A/B testing so teams could iterate faster while keeping brand consistency.",
        ],
      },
      {
        id: "e2-c2",
        client: "Phillips",
        paragraphs: [
          "Reworked product page experiences for Philips e-commerce through component redesign, motion, and experimentation. Shipped interactive patterns that improved discovery and reduced bounce rates by about 15%.",
        ],
      },
    ],
  },
];

export type ResumeEducation = {
  id: string;
  start: string;
  end: string;
  degree: string;
  school: string;
  location: string;
  summary?: string;
  /** Same shape as experience `clients`; omit for school-only lines. */
  clients?: ResumeClientWork[];
};

export const resumeEducation: ResumeEducation[] = [
  {
    id: "ed1",
    start: "2019",
    end: "2021",
    degree: "M.Sc in Strategic Design Management",
    school: "Politecnico di Milano",
    location: "Milan, IT",
  },
  {
    id: "ed2",
    start: "2012",
    end: "2017",
    degree: "B.Arch in Architecture",
    school: "University of Pune",
    location: "Pune, IN",
  },
];

export const resumeSkills = {
  title: "Skills",
  groups: [
    {
      label: "Design",
      items:
        "Product strategy, UX research, service mapping, workshop facilitation, prototyping, motion specs, design QA",
    },
    {
      label: "Tools",
      items: "Claude Code, Cursor, GitHub, Figma, HTML/CSS/JS",
    },
    {
      label: "Leadership",
      items:
        "Helping stakeholders to see the value of design, mentoring interns and junior designers, crit culture, design culture governance",
    },
  ],
};
