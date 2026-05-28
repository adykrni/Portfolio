export type Metric = {
  value: string;
  description: string;
};

export type ComponentSection = {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
};

export const deutscheWealth = {
  title: "Deutsche wealth online [DWO+]",
  subtitle: "Redesigning wealth management for confidence and action",
  challenge: {
    heading: "The Challenge",
    body: `Wealth management clients are drowning in data. Traditional dashboards bury clients in data — allocations, metrics, holdings, benchmarks all at once. The result is paralysis. Clients can't answer basic questions, so they avoid the dashboard entirely or flood support with questions that should never need asking.`,
  },
  solution: {
    heading: "The Solution",
    lead: "We rethought the entire experience around one principle: ",
    emphasis: "progressive disclosure.",
    body: ` Three levels of disclosure — a glance, a reason, a deep dive — meet users wherever they are. In 60 days: 17% lift in retention, 9% more actions taken, 50% fewer support tickets.`,
  },
  metrics: [
    {
      value: "+17%",
      description: "User retention improvement over 2 monhts (56% → 73%)",
    },
    {
      value: "+9%",
      description: "Improvement in actions during 48h sessions.",
    },
    {
      value: "2x",
      description: "Reduction in dashboard related queries.",
    },
  ] satisfies Metric[],
  heroVideoSrc: "/video/deutsche-wealth/dashboard.mp4",
  components: [
    {
      id: "wealth-overview",
      title: "Wealth overview",
      description:
        'The single number that anchors everything. Level 1 shows total portfolio value across all accounts — immediately. Level 2 breaks it down by account type, so clients understand not just what they have, but where it lives.',
      videoSrc: "/video/deutsche-wealth/wealth-overview.mp4",
    },
    {
      id: "goal-monitoring",
      title: "Goal monitoring",
      description:
        'One question drives this component: am I on track? Level 1 answers it with a two-line chart — growth vs. target — and a plain status. Level 2 adds an interactive timeline, a performance narrative, and the metrics for anyone who needs the proof behind the answer.',
      videoSrc: "/video/deutsche-wealth/goal-monitoring.mp4",
    },
    {
      id: "asset-allocation",
      title: "Asset allocation",
      description:
        "Most clients know their returns. Few understand what's driving them. Level 1 shows allocation as color-coded bars — clean, scannable, one per asset class. Level 2 layers in target vs. actual, revealing drift before it becomes a problem.",
      videoSrc: "/video/deutsche-wealth/asset-allocation.mp4",
    },
    {
      id: "holdings",
      title: "Holdings",
      description:
        "Every holding reduced to three things: what you put in, what you're earning, and whether it's working. Level 2 goes further — a 12-month chart, risk profile, cost basis, and a nudge toward action where it's warranted. Nothing hidden, nothing unnecessary.",
      videoSrc: "/video/deutsche-wealth/holdings.mp4",
    },
  ] satisfies ComponentSection[],
};
