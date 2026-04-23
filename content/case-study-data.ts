/**
 * Case study page — copy aligned to Figma (TPaNJjtpBBPD36Kf1nvpjx, node 94:308).
 */

/** Inline runs: default = #f6f6f6, muted = #757575 */
export type TextRun = { text: string; tone?: "default" | "muted" };

export const caseStudyProduct = {
  title: "Deutsche Wealth Online +",
  subtitle: "Case study",
} as const;

export const caseStudyMeta = {
  titleLines: ["Wealth at a glance.", "Decisions made with confidence."],
  lead: `A dashboard experience designed around the way high-net-worth individuals actually think about their money — not as a list of transactions to review, but a picture of where their wealth is going and why.`,
} as const;

export const caseStudyHeroMeta = [
  { label: "Product area", value: "FinTech" },
  { label: "Scope", value: "Dashboard + Payments" },
  { label: "Primary user", value: "High-net-worth individual [HNWI]" },
  {
    label: "My role",
    value:
      "Finding the right problem, challenging assumptions, alignign stakeholders, and delivering the right solutions.",
  },
] as const;

export const caseStudyProblem = {
  marker: "UNDERSTANDING THE PROBLEM",
  /** 24px Geist mono line */
  headline: `Wealthy clients don't distrust their bank - they quietly resent the digital experience it gives them.`,
  bodyRuns: [
    { text: "The interface that makes them feel like a stranger to their own money is the one they'll eventually stop using.", tone: "muted" as const },
    { text: "I’m not saying anything new here, but we all know most of the dashboards are not efficient for users.", tone: "muted" as const },
    { text: " A HNWI user managing his money needs the right orientation.", tone: "default" as const },
    { text: " The moment a financial interface requires effort to parse, it has already failed. ", tone: "default" as const },
    { text: "I spoke with", tone: "muted" as const },
    { text: " 17 users ", tone: "default" as const },
    { text: "to understand their struggle, and", tone: "muted" as const },
    { text: " conducted workshops for our product teams, to understand the product itself.", tone: "default" as const },
  ] as const,
} as const;

export const caseStudyChallenge = {
  marker: "THE CHALLENGE",
  headline: "Give more control to the users, and gain their trust.",
  pills: [
    "Scannable hierarchy",
    "KPI driven design",
    "Consistent design across pages",
  ] as const,
  body: `The challenge was to design data - where understanding arrives before the user has to ask for it. Sounds simple, but the reality was different. To reach there it needed a lot of convincing, and tradeoffs for our stakeholders, specially when money is involved.`,
} as const;

export const caseStudySolution = {
  marker: "THE SOLUTION",
  introHeadline: "Designing surfaces that bring clarity, and give user the right intent.",
  /** Full-width solution hero visual (replaces previous placeholder). */
  wideVisual: {
    src: "/images/Visual-1.svg" as const,
    alt: "Deutsche Wealth Online — visual design overview: dashboard components, filters, and mobile payment flows.",
  },
} as const;

export const caseStudyDashboard = {
  label: "Dashboard",
  video: {
    src: "/video/Dashboard%20overview.mp4" as const,
    title: "Dashboard experience — walkthrough of the client orientation flow",
  },
  copyIntroRuns: [
    { text: "Before a client takes any single action, ", tone: "muted" as const },
    { text: "they need to feel oriented to their broader position.", tone: "default" as const },
    { text: " The dashboard is designed to answer the two questions a user asks every time they open the app:", tone: "muted" as const },
  ] as const,
  copyQuestions: `"How does my wealth look like?" and "Is there anything I need to do?"`,
  copyParagraph2Runs: [
    { text: "The carousel places the answers to the first question - ", tone: "muted" as const },
    { text: "net wealth, portfolio performance, market context, asset allocation — in a single horizontal band, browsable without commitment.", tone: "default" as const },
    { text: " The transactions card within the carousel acts as the bridge - it surfaces any items that need the client's attention before they have navigated anywhere.", tone: "muted" as const },
  ] as const,
} as const;

export const caseStudyQuickAction = {
  label: "Quick Action card",
  introRuns: [
    { text: "At the top of every payments page sits a ", tone: "muted" as const },
    { text: "Quick action card", tone: "default" as const },
    { text: " that does one thing: ", tone: "muted" as const },
    { text: "tell the user exactly where they stand, in the context they're currently looking at.", tone: "default" as const },
    { text: " It adapts to their filters. It moves with their money and it requires nothing from them except a glance.", tone: "muted" as const },
  ] as const,
  /** Wide panoramic visual: fixed height strip, horizontal scroll (scrollbar hidden). */
  visual: {
    src: "/images/Visual-2.svg" as const,
    alt: "Quick Action and outflow: three side-by-side cards — cash outflow, upcoming outflow, and recurring outflow",
  },
  howHelpsTitle: "How this helps?",
  howHelpsItems: [
    "The outflow figure always reflects exactly what the user is looking at — their current numbers.",
    "The sparkline shows what's going out, a pattern, readable in under a second.",
    "The signal pill shows a count of items that need the users attention. It is restrained, not urgent — an indicator for a user who will act on their own terms, not one being pressured.",
  ] as const,
  /** Figma callout: single block (bordered) */
  journeyCallout: `The entire journey — from opening the page and understanding their own money to resolving a flagged item — happens in one place, without leaving the screen. For a user whose time is the scarcest resource, that is the core value of the rationale.`,
} as const;

export const caseStudyFourViews = {
  title: "Four views, one mental model",
  items: [
    {
      id: "all",
      title: "All payments page",
      body: "The complete picture. Every outbound movement across all portfolios, filterable by portfolio, counterparty, date, or status. The summary card shows the total in context; the chart shows whether this month looks like last month. For clients who want the full view before drilling into anything.",
      video: {
        src: "/video/allPayments.mp4" as const,
        title: "All payments page — walkthrough",
      },
    },
    {
      id: "sched",
      title: "Scheduled payments",
      body: "What is coming, and when. The chart maps upcoming payment volume by date — tapping a bar surfaces exactly which payments fall on that day, with the counterparty and amount visible without opening anything. Designed for clients who plan ahead and want no surprises.",
      video: {
        src: "/video/Scheduled.mp4" as const,
        title: "Scheduled payments — walkthrough",
      },
    },
    {
      id: "standing",
      title: "Standing orders",
      body: "The obligations that run themselves — staff, property, subscriptions, custodian fees. A horizontal bar chart makes the relative cost of each instruction immediately visible. For clients who rarely visit this page but want instant legibility when they do.",
      video: {
        src: "/video/Recurring.mp4" as const,
        title: "Standing orders — walkthrough",
      },
    },
  ] as const,
} as const;

export const caseStudyImpact = {
  marker: "IMPACT",
  intro: "We released this for 1.8k users across APAC & EMEA markets for Q2 + Q3 of 2025, and here are the results.",
  /** Each card: array of { text, tone? } for mixed styling */
  cards: [
    {
      id: "a",
      emphasis: false,
      runs: [
        { text: "8s median time ", tone: "default" as const },
        { text: "for a user to correctly state their current outflow position — without prompting or scrolling.", tone: "muted" as const },
        { text: " ↓ 71% vs previous design  ", tone: "default" as const },
      ],
    },
    {
      id: "b",
      emphasis: false,
      runs: [
        { text: "88% of the users activated the summary card ", tone: "default" as const },
        { text: "- confirming the card functions as navigation, not UI decoration.", tone: "muted" as const },
      ],
    },
    {
      id: "c",
      emphasis: false,
      runs: [
        { text: "Payment frequency increased by 27% over two quarters in single sessions ", tone: "default" as const },
        { text: "— compared to 11% for clients still on the legacy interface.", tone: "muted" as const },
      ],
    },
  ] as const,
} as const;

export const caseStudyClosing = {
  headlineRuns: [
    { text: "The new surface control becomes an instrument. ", tone: "default" as const },
    { text: "The interface either earns that trust or quietly erodes it.", tone: "muted" as const },
  ] as const,
  bodyRuns: [
    { text: "The summary card is the most influential element in this design — not because it is complex, but because it makes a promise - the number you see is exactly what you think it is. Nothing is decorative when it could be informative. ", tone: "muted" as const },
    { text: "The measure of success for this product is not task completion rate. It is whether clients stop needing to call their relationship manager to ask where their money went.", tone: "default" as const },
  ] as const,
} as const;

export const caseStudyOutro = {
  label: "OUTRO",
  line: "Thank you for your time, let me know if you need anything more.",
  reachLabel: "Reach me at",
  portfolioLabel: "Portfolio",
} as const;
