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
    body: `Wealth management clients are drowning in data. Traditional dashboards present a wall of information—performance metrics, allocations, holdings, benchmarks—all at once. The result? Cognitive overload. Clients struggle to answer the simplest questions: "What's my total wealth?" "Am I on track to my goals?" "Which holdings are underperforming?" Instead of confidence in their financial position, they experience paralysis. They avoid the dashboard entirely, or worse, they reach out to support for answers that should be obvious.`,
  },
  solution: {
    heading: "The Solution",
    lead: "We rethought the entire experience around one principle: ",
    emphasis: "progressive disclosure.",
    body: ` Instead of overwhelming clients with everything, we designed for the moment of truth. Level 1 answers the urgent question at a glance. Level 2 provides evidence and context. Level 3 reveals deep insights for the curious. The result is a dashboard that meets users where they are—whether they need a quick status check or a detailed analysis. In 60 days, we achieved a 17% increase in user retention, a 9% surge in action rates, and a 50% reduction in support tickets. Clients don't just use the dashboard anymore. They trust it. And they act on it.`,
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
        'The entry point to portfolio intelligence. This component displays total portfolio value across all accounts at a glance, with instant access to per-portfolio breakdowns. By surfacing the "one number that matters most" in Level 1, clients immediately understand their financial position. Level 2 reveals the composition—how much is in retirement, advisory, and execution accounts—enabling portfolio-level decisions in seconds. The component respects the principle that not all insights are equally urgent; the most critical information appears first, and deeper context waits for those who want it.',
      videoSrc: "/video/deutsche-wealth/wealth-overview.mp4",
    },
    {
      id: "goal-monitoring",
      title: "Goal monitoring",
      description:
        'Financial goals are meaningless without context. This component answers the core question: "Am I on track?" Level 1 shows a clean two-line chart—cumulative growth vs. target goal—with overlaid status text indicating whether the portfolio is tracking above, below, or in line with expectations. Level 2 transforms the chart into an interactive timeline selector, adds a performance narrative ("You\'re tracking +0.8% above expectations"), and reveals detailed metrics (YTD return, volatility, max drawdown, expected annual return). Users move from anxiety ("Will I reach my goal?") to confidence ("Yes, and here\'s the proof"). The design validates that visual-first information hierarchy works for trajectory questions, not just status questions.',
      videoSrc: "/video/deutsche-wealth/goal-monitoring.mp4",
    },
    {
      id: "asset-allocation",
      title: "Asset allocation",
      description:
        "Asset allocation is the silent driver of returns, yet most clients can't visualize their exposure. This component displays allocation percentages as color-coded horizontal bars in Level 1, one bar per asset class (Equities, Money Market, Alternatives, Fixed Income, Others). Level 2 introduces the dual-bar comparison (target vs. actual allocation), highlighting drift and rebalancing opportunities at a glance. Each row is expandable to show performance contribution, risk metrics (volatility, concentration as % of portfolio), and actionable insights. The component enables informed rebalancing decisions without overwhelming users with information they don't need at every moment.",
      videoSrc: "/video/deutsche-wealth/asset-allocation.mp4",
    },
    {
      id: "holdings",
      title: "Holdings",
      description:
        'Individual security performance shouldn\'t be a mystery. This component lists holdings with three essential columns in Level 1: security name, invested amount (cost basis), and returns (showing both dollar amount and percentage). Level 2 expands each security to show a 12-month performance chart, risk profile (volatility, beta, max drawdown with color-coded risk level indicator), cost basis breakdown (cost, current value, unrealized gain/loss), and actionable insights (e.g., "Consider tax-loss harvesting"). A "View trading insights →" button at the bottom hints at the handoff to trading and market data services. The component makes the business case for every holding transparent: "Here\'s how much you invested, what you\'re earning, and whether you should adjust."',
      videoSrc: "/video/deutsche-wealth/holdings.mp4",
    },
  ] satisfies ComponentSection[],
};
