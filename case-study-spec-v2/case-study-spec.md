# Wealth & Payments — Case Study
### Build spec for Cursor

---

## Project overview

A one-page case study website for a private-banking payments prototype designed for **high-net-worth individuals (HNWI)**. The audience reading this case study is **design managers and product managers** making a case for this design direction internally. The tone is institutional, calm, and quietly confident — like the product itself. Think a private bank's annual report, not a fintech pitch deck.

The central design argument: wealthy clients don't want to work hard to understand their own money. Every interaction should feel like clarity arriving, not effort applied.

---

## Typography

- Use the existing typography styles, and use black and white texts, and muted colours for secondary and tertiary texts.

---

## Sections (in order)

---

### 1. Nav

**Sticky, full-width, sits above everything.**

Center: label `"Case Study"` in 11px

---

### 2. Hero

**Two-column layout** — left: headline + lead copy; right: metadata stack

**Left column:**

- H1
  ```
  Wealth at a glance.
  Movement with confidence.
  ```
  The phrase *"Movement with confidence."* in italic, slightly muted (--ink-2)
- Lead paragraph (17px, weight 300, --ink-2):
  > A payments experience designed around the way high-net-worth clients actually think about their money — not as a list of transactions to reconcile, but as a living picture of where their wealth is going and why.

**Right column — metadata stack** (4 items, each with a top rule):

| Label | Value |
|-------|-------|
| Product area | Payments & Wealth Overview |
| Scope | Dashboard · All payments · Scheduled · Recurring · Templates |
| Primary user | High-net-worth individual (HNWI) |
| Design focus | Ambient clarity · Trust through transparency · Effortless oversight |

---

### 3. Problem statement block

**Full-width, accent background (`--accent`), white text.** Inner content max-width 1100px.

**Pull quote** (Libre Baskerville, clamp 22–32px):
> "Wealthy clients don't distrust their bank. They distrust interfaces that make them feel like they need to be an analyst to understand their own money."

**Sub-copy** (14px, weight 300, white at 65% opacity, max-width 560px):
> A high-net-worth individual managing multiple portfolios, recurring obligations, and cross-border payments needs to feel oriented — not overwhelmed. The moment a financial interface requires effort to parse, it has already failed. The challenge was to design a payments experience where understanding arrives before the user has to ask for it.

---

### 4. The design challenge `id="opportunity"`

**Section number:** `01`
**Title:** `"Designing for a different kind of user"`

**Two-column layout** (1.4fr left, 1fr right)

**Left — prose:**

> Most banking interfaces are built for analysts: people whose job is to reconcile, investigate, and audit. The screens are dense, the data is comprehensive, and the assumption is that the user will work to find what matters.

> HNWI clients are different. They are time-scarce, high-trust, and highly delegating — but they still want to feel in command of their financial picture. They don't want less information. They want information that respects their time: instantly legible, always trustworthy, never requiring a second screen to make sense of the first.

> The design challenge was to build a payments area where the answer to "how is my money moving?" is visible before the question is fully formed.

**Callout block** (left border 2px solid `--accent`, background `--accent-light`):
> **Design thesis:** For a high-net-worth client, confidence is the primary UX outcome. Every element on screen should either build that confidence — or get out of the way.

**Right — media slot:**
- Placeholder for **prototype overview video**
- Caption: `"Replace with: a walkthrough showing the experience from dashboard landing to payment detail — emphasising how quickly the user is oriented."`

---

### 5. The summary card — clarity by design `id="kpi"`

**Section number:** `02`
**Title:** `"The summary card — clarity by design"`

**Two-column layout** (1.4fr left, 1fr right)

**Left:**

Intro prose:
> At the top of every payments page sits a card that does one thing: tell the client exactly where they stand, in the context they're currently looking at. It adapts to their filters. It moves with their money. And it requires nothing from them except a glance.

**KPI anatomy block** — a contained card (`--paper-2` bg, border, border-radius 12px) showing a **live demo of the KPI component** with annotations below.

The KPI component itself contains:
- Left: metric block — label `"TOTAL OUTFLOW"`, value `"€ 2,084,116"`, sub-label `"Your portfolios · Last 30 days"`. Right-bordered.
- Center: sparkline chart area (area chart, accent purple `#534AB7`) — calm, smooth curve
- Right: pill `"4 need attention"` in signal colors
- Below the component: soft alert strip — orange dot + `"4 payments need your attention"` + underlined link `"Review →"`

**Four numbered annotations** (circle number + text):

1. **Your number, in context** — The outflow figure always reflects exactly what the client is looking at — their current portfolio filter, their current date range. It is never a global total that requires mental subtraction to make relevant. The number means what it appears to mean.
2. **The shape of their money** — The sparkline doesn't demand interpretation. A rising line means more is going out; a flat line means stability. No axis labels, no legend — just the pattern, readable in under a second.
3. **Attention, not alarm** — The signal pill shows a count of items that need the client's eye, separated visually from the volume number. It is restrained, not urgent — an indicator for a client who will act on their own terms, not one being pressured.
4. **One tap to the detail** — Touching the outflow figure or the attention pill narrows the list below to exactly those items. The summary card is not a header — it is a doorway.

**Right column — two media slots stacked:**
- Slot 1 (video): `"Summary card interaction"` — screen recording showing the card responding to a filter change, then a tap → list narrowing
- Slot 2 (image): `"UI layout — summary card"` — annotated screenshot showing the card in resting state and active/filtered state

**Below the two columns — client journey diagram:**

Label: `"HOW A CLIENT MOVES THROUGH THEIR PAYMENTS"` (11px uppercase, muted)

5-step horizontal flow. Steps 2 and 3 highlighted in `--accent`:

| Step | Label | Sub |
|------|-------|-----|
| 01 | Land | Open payments |
| 02 *(active)* | Orient | Card shows total at a glance |
| 03 *(active)* | Notice | Attention item catches the eye |
| 04 | Investigate | Tap card → filtered list |
| 05 | Done | Review detail, move on |

Arrows between each step (chevron right icons).

**Callout below diagram:**
> The entire journey — from opening the page to resolving a flagged item — happens **in one place, without leaving the screen**. For a client whose time is the scarcest resource, that is the core value of the design.

---

### 6. The four pages `id="pages"`

**Section number:** `03`
**Title:** `"Four views, one mental model"`

Intro:
> The payments area covers four distinct client needs. The visual language stays consistent throughout — the same summary card, the same list and detail pattern — but each page is tuned to the specific question the client is trying to answer when they arrive.

**2×2 card grid.** Each card: media slot (16:9, placeholder) + body with route, title, description, tags.

#### Card 1 — All payments
- Route: `/payments`
- Title: `All payments`
- Description: The complete picture. Every outbound movement across all portfolios, filterable by portfolio, counterparty, date, or status. The summary card shows the total in context; the chart shows whether this month looks like last month. For clients who want the full view before drilling into anything.
- Tags: `Full picture` · `Area trend chart` (accent) · `Cross-portfolio`

#### Card 2 — Scheduled payments
- Route: `/payments/upcoming`
- Title: `Scheduled payments`
- Description: What is coming, and when. The chart maps upcoming payment volume by date — tapping a bar surfaces exactly which payments fall on that day, with the counterparty and amount visible without opening anything. Designed for clients who plan ahead and want no surprises.
- Tags: `Forward-looking` · `Interactive timeline` (accent) · `Tap to preview` (signal)

#### Card 3 — Standing instructions
- Route: `/payments/recurring`
- Title: `Standing instructions`
- Description: The obligations that run themselves — staff, property, subscriptions, custodian fees. A horizontal bar chart makes the relative cost of each instruction immediately visible. For clients who rarely visit this page but want instant legibility when they do.
- Tags: `Set and forget` · `Cost comparison chart` (accent) · `Lifecycle status`

#### Card 4 — Payment templates
- Route: `/payments/templates`
- Title: `Payment templates`
- Description: Saved patterns for payments the client makes regularly — charitable donations, family transfers, investment top-ups. Presented as browsable cards rather than a table, because the client is choosing, not reading. Favourites and category labels reduce the time from intention to execution.
- Tags: `Saved patterns` · `Browse, don't search` (accent) · `Fast reuse`

**Tag color logic:**
- Default tag: `--paper-2` bg, `--ink-3` text
- Accent tag: `--accent-light` bg, `--accent` text
- Signal tag: `--signal-light` bg, `--signal` text

---

### 7. Design decisions & tradeoffs `id="tradeoffs"`

**Section number:** `04`
**Title:** `"Design decisions & tradeoffs"`

Intro:
> Every decision that makes the experience simpler for the client creates a constraint somewhere else. These are the most consequential choices made in this design — and what each one costs.

**Three-column table** (col 1: 200px fixed, col 2–3: equal). Bordered, rounded corners 10px.

| Decision | Why it serves the client | What to watch |
|----------|--------------------------|---------------|
| Dashboard carousel for wealth modules | A HNWI's financial picture spans wealth, cash, markets, and allocation simultaneously. The carousel lets them browse these domains without committing to one — matching how clients mentally scan their overall position before drilling in. | Clients unfamiliar with horizontal scroll may not discover off-screen cards. Scroll arrow affordances and onboarding guidance are essential. Validate with first-session observation. |
| Summary card updates with every filter | The client's most basic trust requirement: "does this number mean what I think it means?" Tying the card to the current filter context answers that question automatically — there is no global total that requires mental adjustment. | The client must understand what they are filtering. Filter labels must be clear and persistently visible, not buried. Ambiguous filters create ambiguous numbers, which erodes trust. |
| Scheduled: tap a chart bar to see payments | Looking ahead is one of the most common HNWI behaviours around payments — checking what is due before travel, before a large purchase, before a capital commitment. Making the chart interactive means they can check any future date in a single tap rather than scanning a list. | The interaction is not obvious. Without a clear affordance ("tap to preview"), the chart reads as decorative. This must be validated in the first usability session. A static hint label is the minimum viable solution. |
| Show/hide chart toggle | Some clients — particularly those accessing through their relationship manager — want to see the raw list without chart context. The toggle respects that preference without removing the default for clients who benefit from the visual layer. | When hidden, the layout must compress cleanly — not leave a blank area that looks like a loading failure. The collapse behaviour (Option A: shrink row) must be implemented, not the swap pattern. |
| Templates as browsable cards, not a table | Templates represent intention, not history. A client creating a donation or a family transfer is in a different mode to one reviewing last month's activity. Cards match browsing behaviour; tables match auditing behaviour. The design distinguishes between these modes deliberately. | For clients with many templates, cards become harder to scan than a table. The sort and category filter must work well enough to compensate. A list-toggle option may be needed if template counts grow beyond 12–15. |
| Two visual themes (classic/mono) | Allows the product team to test institutional warmth (classic, deeper blues) against restraint (mono, neutral zinc) with different client segments — particularly useful for multi-market rollout where tone preferences vary. | Both themes must be maintained in parallel. Pick a default for client-facing research so participants aren't comparing tokens when they should be reacting to flows. Mono is the recommended default for HNWI audiences. |
| Soft language for attention items | HNWI clients react poorly to language that implies they have done something wrong or missed an obligation. "Needs attention" rather than "action required" or "overdue" matches the service tone of private banking — advisory, not administrative. | The softened language must not obscure urgency when a payment genuinely needs immediate action. Time-sensitive items (same-day cut-off, failed payment) warrant clearer signalling — consider a distinct visual tier for truly urgent items. |

Upside text color: `#1a6b3a` (green)
Risk text color: `#8b3a1a` (dark orange)

**Signal callout below the table:**
> **The tradeoff that most directly affects client trust:** The summary card is only trustworthy if the client understands what it is summarising. If the filter state is ever unclear — if the number on screen could mean "all my portfolios" or "just the one I was looking at last time" — the design has introduced the exact uncertainty it was built to eliminate. Filter state transparency is not a nice-to-have.

---

### 8. What to measure `id="metrics"`

**Section number:** `05`
**Title:** `"What to measure"`

Intro:
> These are the signals that tell us whether the design is working for HNWI clients — not vanity metrics, but proxies for the thing that matters: does the client feel oriented and in control when they use this product?

**3-column grid** (1px gap between cells, outer border + border-radius 10px).

#### Column 1 — Clarity & confidence (highest value)
- Time to orientation — how quickly does a returning client understand their current position (scroll depth, dwell on summary card)
- Summary card engagement rate — % sessions where client interacts with the card vs. scrolls past it
- Filter-to-understanding path — do clients filter first, or do they land and immediately feel oriented?
- Return visit cadence — clients who feel confident come back on a predictable schedule; erratic patterns suggest uncertainty

#### Column 2 — Attention & resolution
- Attention item open rate — % of flagged items that get reviewed within the same session
- Resolution rate — % of opened attention items that result in an action (not just a view)
- Time between notification and resolution — proxy for whether the design creates urgency without anxiety
- Scheduled chart tap rate — are clients using the interactive timeline, or treating it as a static image?

#### Column 3 — Navigation & habit formation
- Entry path to payments — dashboard card vs. sidebar vs. direct navigation (reveals mental model)
- Return path — do clients go dashboard → payments, or do they land directly in payments over time? Direct landing signals habit.
- Template usage rate — % of new payments initiated from a template vs. from scratch
- Carousel depth on dashboard — cards viewed per session; low depth may mean the first card answers the question; high depth suggests exploration

Each metric item prefixed with `→` in muted color.

---

### 9. Impact in numbers `id="data"`

**Section number:** `06`
**Title:** `"Impact in numbers — research findings"`

> ⚠️ **Note for Cursor:** All numbers in this section are **placeholder values**. Every metric cell and data point must display a small `"replace"` badge (signal color). The client will swap in real data before publishing.

Intro:
> Findings from moderated sessions with HNWI participants and prototype interaction analytics. **All values are placeholders — replace before publishing.**

---

#### 9a. Impact bar — 4-cell grid

Full-width, 4-column grid with 1px gaps, outer rounded border.

**Cell 1 — accent background (`--accent`), white text:**
- Metric label: `"Time to orientation"` + replace badge
- Number: `8s`
- Delta: `↓ 71% vs previous design`
- Description: median time for a returning client to correctly state their current outflow position — without prompting or scrolling

**Cell 2:**
- Metric label: `"Confidence score"` + replace badge
- Number: `4.6 / 5`
- Delta (green): `↑ from 3.1 in baseline`
- Description: self-reported confidence in understanding their payment position, measured post-session on a 5-point scale

**Cell 3:**
- Metric label: `"Attention resolution"` + replace badge
- Number: `79%`
- Delta (green): `↑ 31pp vs legacy interface`
- Description: of flagged payment items reviewed and resolved within the same session — without leaving the payments area

**Cell 4:**
- Metric label: `"Return in 7 days"` + replace badge
- Number: `64%`
- Delta (green): `↑ 28pp vs control`
- Description: of participants returned to the payments area within 7 days in diary study — a strong signal of habit formation and perceived usefulness

Number typestyle: Libre Baskerville, clamp(28–40px), weight 400

---

#### 9b. Before & after comparison

Label: `"BEFORE & AFTER — WITH AND WITHOUT THE SUMMARY CARD"` (11px uppercase, muted)

**Three-column layout:** `[before card] [→ arrow] [after card]`
On mobile: stack vertically, hide arrow.

**Before card header:** `"Without summary card (baseline)"` — muted background, gray text
**After card header:** `"With summary card (prototype)"` — `--accent-light` background, `--accent` text

6 rows, each with a label and value:

| Metric | Before | After |
|--------|--------|-------|
| Time to orientation (median) | 41s 🔴 | 8s 🟢 |
| Clients who visited a separate analytics screen | 58% 🔴 | 9% 🟢 |
| Confidence score (1–5) | 3.1 🔴 | 4.6 🟢 |
| Attention items resolved same session | 48% 🔴 | 79% 🟢 |
| Screen transitions per task | 4.1 🔴 | 1.4 🟢 |
| SUS score (payments area) | 58 / 100 🔴 | 84 / 100 🟢 |

🔴 = signal color (`--signal`)
🟢 = green (`--green`)
Do not use actual emoji — apply color via CSS classes.

---

#### 9c. Client orientation funnel

Label: `"HOW QUICKLY CLIENTS ORIENT AFTER LANDING"` + replace badge

Custom horizontal bar funnel (CSS-only — no chart library). Each row:
- Label (min-width 220px, 12px, muted)
- Bar background (`--paper-2`, height 28px, border-radius 4px)
- Fill bar (blue, border-radius 4px, white label inside)
- Count figure (right-aligned, 12px)

| Moment | Participants | % |
|--------|-------------|---|
| Landed on payments page | 24 | 100% — `#1a3a6b` |
| Read summary card without scrolling | 22 | 92% — `#1a3a6b` |
| Correctly stated their outflow (unprompted) | 19 | 79% — `#2a5298` |
| Noticed attention item within 10s | 16 | 67% — `#3a6bc4` |
| Tapped card to investigate | 14 | 58% — `#3a6bc4` |
| Resolved attention item without leaving page | 11 | 46% — `#5a8ad4` |

Bars progressively lighten as the funnel narrows.

---

#### 9d. Entry path donut + chart interaction bar

**Two-column layout** (equal columns)

**Left — How clients enter payments** (donut chart via Chart.js):
- Label: `"HOW CLIENTS ENTER PAYMENTS"` + replace badge
- Chart type: doughnut, cutout 68%, no legend inside canvas
- Data:
  - From dashboard card: 51% — `#1a3a6b`
  - Direct navigation: 28% — `#3a6bc4`
  - From notification: 14% — `#c94a1e`
  - Other: 7% — `#b5b2ab`
- Custom HTML legend below chart (small squares + label + %)

**Right — Scheduled chart interaction** (horizontal bar via Chart.js):
- Label: `"SCHEDULED CHART: TAP RATE BY CONDITION"` + replace badge
- Chart type: horizontal bar
- Data:
  - With hint label: 68% — `#1a3a6b`
  - Without hint label: 29% — `#eceae4`
- No x-axis, y-axis labels only
- Note below chart (12px, muted): *"Hint label: 'Tap a bar to preview payments on that day'"*

---

#### 9e. Usability session observations

Label: `"SESSION OBSERVATIONS — n=24 HNWI PARTICIPANTS"` + replace badge

**3-column card grid** (`--paper-2` bg, border-radius 8px):

| Number | Color | Copy |
|--------|-------|------|
| 22 / 24 | `--accent` | correctly read their outflow total from the summary card without scrolling or asking a question |
| 19 / 24 | `--green` | said the experience felt "like my bank understands how I think" — unprompted, in debrief |
| 6 / 24 | `--signal` | did not discover that the scheduled chart was interactive — confirming the affordance gap that the hint label resolves |

Numbers in Libre Baskerville 22px, weight 500.

---

### 10. The dashboard — your complete picture `id="dashboard"`

**Section number:** `07`
**Title:** `"The dashboard — your complete picture"`

**Two-column layout** (equal columns)

**Left — prose:**

> Before a client touches a single payment, they need to feel oriented to their broader position. The dashboard is designed to answer the two questions a HNWI client asks every time they open their banking app: "how is my wealth sitting?" and "is there anything I need to do?"

> The carousel places the answers to the first question — net wealth, portfolio performance, market context, asset allocation — in a single horizontal band, browsable without commitment. The transactions card within the carousel acts as the bridge: it surfaces any items that need the client's attention before they have navigated anywhere.

**Callout:**
> The "Last week" summary band deliberately uses a quieter visual register — plain numbers, no chart, no animation. It is retrospective, not live. The contrast between this band and the active summary card in payments is intentional: it teaches the client, over time, what "now" looks like versus "then."

**Right — media slot:**
- Placeholder for annotated dashboard screenshot
- Caption: `"Replace with: annotated screenshot showing carousel cards, attention bridge, weekly summary band, and market news — with call-outs explaining the hierarchy."`

---

### 11. Closing block

**Full-width, `--ink` (near-black) background, light text.**

**Heading** (Libre Baskerville, clamp 24–40px, white):
> A wealthy client's relationship with their money is built on trust. *The interface either earns that trust or quietly erodes it.*

The second sentence in italic, muted (`--ink-4`).

**Body** (15px, weight 300, `--ink-4`, max-width 560px):
> The summary card is the most consequential element in this design — not because it is complex, but because it makes a promise: the number you see is exactly what you think it is. Nothing is global when it should be specific. Nothing is decorative when it could be informative. The measure of success for this product is not task completion rate. It is whether clients stop needing to call their relationship manager to ask where their money went.

---

### 12. Footer

Minimal, `0.5px` top border, flex space-between.

Left: `"Wealth & Payments — Design Case Study"`
Right: `"HNWI Prototype · Private Banking Shell"`

Both in 12px, `--ink-4`.

---

## Interactive components

### Sticky nav scroll behavior
All nav links are anchor links with `scroll-behavior: smooth`. Active link highlighting optional.

### Scroll-triggered fade-ins
Sections fade up on enter using `IntersectionObserver`. Initial state: `opacity: 0; transform: translateY(16px)`. Triggered state: `opacity: 1; transform: translateY(0)`. Transition: `0.6s ease`. Respect `prefers-reduced-motion`.

### Charts (Chart.js 4.4.1)
Load from CDN: `https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js`

**Donut chart** (entry path):
```js
{
  type: 'doughnut',
  data: {
    labels: ['From dashboard card', 'Direct navigation', 'From notification', 'Other'],
    datasets: [{ data: [51, 28, 14, 7], backgroundColor: ['#1a3a6b','#3a6bc4','#c94a1e','#b5b2ab'], borderWidth: 0 }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '68%',
    plugins: { legend: { display: false } }
  }
}
```

**Horizontal bar** (chart tap rate):
```js
{
  type: 'bar',
  data: {
    labels: ['With hint label', 'Without hint label'],
    datasets: [{ data: [68, 29], backgroundColor: ['#1a3a6b', '#eceae4'], borderRadius: 4 }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { display: false, max: 100 }, y: { grid: { display: false }, border: { display: false } } }
  }
}
```

Canvas must have `role="img"` and `aria-label` on every chart element.

### Summary card sparkline (SVG, inline)
Static SVG polyline inside the summary card anatomy demo:
```svg
<svg viewBox="0 0 200 32" preserveAspectRatio="none">
  <polyline
    points="0,28 16,24 32,20 48,26 64,14 80,18 96,8 112,14 128,10 144,16 160,6 176,12 200,4"
    fill="none" stroke="#534AB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline
    points="0,28 16,24 32,20 48,26 64,14 80,18 96,8 112,14 128,10 144,16 160,6 176,12 200,4 200,32 0,32"
    fill="#534AB7" fill-opacity="0.07" stroke="none"/>
</svg>
```

---

## Media slots spec

All media slots follow a consistent treatment:
- Background: `--paper-2`
- Hatched pattern overlay (CSS `repeating-linear-gradient` at -45deg, very low opacity)
- Centered icon (circle border + SVG icon inside — play icon for video, grid icon for screenshot)
- Label text below icon: 11px, `--ink-4`, letter-spacing
- Caption text below the slot: 12px, `--ink-3`

**All media slots in the page:**

| Location | Type | Label |
|----------|------|-------|
| Design challenge section, right col | Video | Prototype overview video |
| Summary card section, right col top | Video | Summary card interaction |
| Summary card section, right col bottom | Image | UI layout — summary card |
| All payments card | Image/Video | UI layout / video |
| Scheduled payments card | Image/Video | UI layout / video |
| Standing instructions card | Image/Video | UI layout / video |
| Payment templates card | Image/Video | UI layout / video |
| Dashboard section, right col | Image | Dashboard UI layout |

---

## Component patterns

### Section header
```
[muted number] [serif title]
```
Number: 11px, uppercase, `--ink-4`
Title: Libre Baskerville 28px, weight 400, `--ink`

### Callout (accent)
- Left border: 2px solid `--accent`
- Background: `--accent-light`
- Border-radius: `0 6px 6px 0`
- Text: 14px, `--accent`, weight 300

### Callout (signal)
Same structure but `--signal` border and `--signal-light` bg.

### Replace badge
Inline badge on all placeholder data:
- Background: `--signal-light`
- Color: `--signal`
- Font: 9px, uppercase, weight 500
- Padding: `2px 6px`
- Border-radius: 3px
- Text: `"replace"`

### Annotation number (summary card section)
- Circle: 22px diameter, `--accent` bg, white text
- Font: 11px, weight 500

---

## Accessibility requirements

- All sections have appropriate heading hierarchy (h1 → h2 → h3)
- All chart canvas elements have `role="img"` and descriptive `aria-label`
- Sticky nav links are keyboard-navigable
- Color is never the sole differentiator — before/after table uses both color AND explicit labels
- `prefers-reduced-motion` respected on all transitions and animations

---

## File structure suggestion

```
/
├── index.html           (or page.tsx / app/page.tsx if React/Next)
├── styles/
│   └── case-study.css
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── ProblemBlock.jsx
│   ├── SummaryCardAnatomy.jsx
│   ├── ClientJourneyFlow.jsx
│   ├── PagesGrid.jsx
│   ├── TradeoffsTable.jsx
│   ├── MetricsGrid.jsx
│   ├── ImpactBar.jsx
│   ├── BeforeAfter.jsx
│   ├── OrientationFunnel.jsx
│   ├── EntryDonut.jsx
│   ├── UsabilityObservations.jsx
│   ├── DashboardSection.jsx
│   └── MediaSlot.jsx    (reusable placeholder component)
└── public/
    └── media/           (drop videos + screenshots here)
```

---

## Notes for Cursor

1. **All data is placeholder** — wire every number into a single `data.js` config object at the root. The client swaps values in one file, not across twelve components.
2. **Language discipline** — this product is for HNWI clients. Never use "triage", "reconcile", "operational", or "register" in any visible UI copy or labels. Use "review", "your payments", "picture", "position".
3. **Media slots are intentionally empty** — `MediaSlot` accepts `type` ("video" | "image") and `label` props. When real assets arrive in `/public/media/`, swap the placeholder for `<video autoplay muted loop playsInline>` or `<img>` as appropriate.
4. **Charts must detect dark mode** — use `matchMedia('(prefers-color-scheme: dark)').matches` to adjust tooltip colors. The primary fills (`#1a3a6b`, `#c94a1e`) work in both modes without change.
5. **The orientation funnel (section 9c) is CSS-only** — pure div bars with a label column. No chart library. This keeps label alignment clean and avoids chart.js padding fights on narrow screens.
6. **The summary card anatomy block (section 5)** must render as a live UI component, not a screenshot — it is the centrepiece of the case study. Give the sparkline a subtle hover state (tooltip showing the value at that point). Give the attention pill a hover state that previews the link destination. Make it feel like the real product.
7. **Tone check before shipping** — read every sentence of copy aloud. If it sounds like a fintech startup or an internal process document, rewrite it to sound like a private bank.
