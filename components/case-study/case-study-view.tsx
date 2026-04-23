import Link from "next/link";
import {
  caseStudyChallenge,
  caseStudyClosing,
  caseStudyDashboard,
  caseStudyFourViews,
  caseStudyHeroMeta,
  caseStudyImpact,
  caseStudyMeta,
  caseStudyOutro,
  caseStudyProduct,
  caseStudyProblem,
  caseStudyQuickAction,
  caseStudySolution,
  type TextRun,
} from "@/content/case-study-data";
import { infoItems } from "@/content/portfolio";
import { FadeInSection } from "./fade-in-section";

const calendlyHref =
  infoItems.find((i) => i.id === "reach")?.href ??
  "https://calendly.com/adityakulkarni1894";

/** Text column (600px); media placeholders stay full width of 1100px shell. */
const proseNarrow = "w-full max-w-[600px] mx-auto";

function Mono({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <span className={`font-mono ${className}`}>{children}</span>;
}

function Runs({
  runs,
  className = "",
  leading = "leading-[1.4]",
}: {
  runs: readonly TextRun[];
  className?: string;
  leading?: string;
}) {
  return (
    <span className={className}>
      {runs.map((r, i) => (
          <span
          key={i}
          className={
            (r.tone === "muted" ? "text-neutral-500 " : "text-neutral-900 ") +
            leading
          }
        >
          {r.text}
        </span>
      ))}
    </span>
  );
}

function SectionMarker({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="size-2 shrink-0 rounded-sm bg-neutral-900"
        aria-hidden
      />
      <p className="m-0 font-mono text-[12px] leading-none tracking-[0.12px] text-neutral-900 whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

function VideoPlaceholder({
  children,
  height,
}: {
  children: string;
  height: 268 | 465;
}) {
  return (
    <div
      className={`mx-auto flex w-full max-w-[min(100vw-40px,1100px)] flex-col items-center justify-center rounded-[6px] border border-neutral-200 bg-neutral-100 p-5 ${height === 465 ? "h-[465px]" : "h-[268px]"}`}
    >
      <p className="m-0 text-center text-[16px] font-semibold leading-none tracking-[0.16px] text-neutral-500 whitespace-nowrap">
        {children}
      </p>
    </div>
  );
}

function QuickActionVisual() {
  const { src, alt } = caseStudyQuickAction.visual;
  return (
    <div
      className="case-study__scroll-x-hidden mx-auto h-[268px] w-full max-w-[min(100vw-40px,1100px)] rounded-[6px] border border-neutral-200 bg-neutral-100"
      role="region"
      aria-label={alt}
      tabIndex={0}
    >
      <img
        src={src}
        alt={alt}
        className="m-0 block h-[268px] w-auto max-w-none"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

function CaseStudyLoopVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className="box-border mx-auto w-fit max-w-full rounded-[6px] border border-neutral-200 bg-neutral-100 p-5 lg:p-[50px]">
      <video
        className="block h-auto w-auto max-w-full"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        title={title}
        aria-label={title}
        disablePictureInPicture
      >
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function DashboardVideo() {
  const { src, title } = caseStudyDashboard.video;
  return <CaseStudyLoopVideo src={src} title={title} />;
}

function SolutionWideVisual() {
  const { src, alt } = caseStudySolution.wideVisual;
  return (
    <div
      className="mx-auto w-full max-w-[min(100vw-40px,1100px)] overflow-x-auto overflow-y-hidden overscroll-x-contain rounded-[6px] border border-neutral-200 bg-neutral-100 touch-pan-x [scrollbar-gutter:stable]"
      role="region"
      aria-label="Solution visual: scroll horizontally to see the full image"
    >
      <img
        src={src}
        alt={alt}
        className="m-0 block h-[465px] w-auto max-w-none"
        loading="eager"
        fetchPriority="high"
        draggable={false}
      />
    </div>
  );
}

function Pills({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((p) => (
        <div
          key={p}
          className="rounded-[6px] border border-neutral-200 bg-neutral-100 p-3"
        >
          <p className="m-0 text-center text-[16px] font-normal leading-none tracking-[0.16px] text-neutral-900">
            {p}
          </p>
        </div>
      ))}
    </div>
  );
}

function ImpactCard({
  runs,
  emphasis = true,
}: {
  runs: readonly { text: string; tone?: "default" | "muted" }[];
  emphasis?: boolean;
}) {
  return (
    <div className="w-full max-w-[600px] rounded-[6px] border border-neutral-200 bg-stone-100 p-5">
      <p
        className={`m-0 text-[16px] leading-[1.4] tracking-[0.16px] text-neutral-900 ${emphasis ? "font-semibold" : "font-normal"}`}
      >
        {runs.map((r, i) => (
          <span
            key={i}
            className={r.tone === "muted" ? "font-normal text-neutral-500" : ""}
          >
            {r.text}
          </span>
        ))}
      </p>
    </div>
  );
}

export function CaseStudyView() {
  return (
    <article className="case-study min-h-dvh w-full">
      <div className="mx-auto w-full min-w-0 max-w-[1100px] px-5 py-8 md:py-10">
        <div className={`mb-[150px] ${proseNarrow}`}>
          <header className="mb-[30px] flex flex-col gap-1.5">
            <p className="m-0 text-[18px] font-bold leading-[1.3] text-neutral-900">
              {caseStudyProduct.title}
            </p>
            <p className="m-0 text-[16px] leading-[1.3] text-neutral-500">
              {caseStudyProduct.subtitle}
            </p>
          </header>

          <div className="flex w-full max-w-[480px] flex-col gap-[30px]">
            <h1 className="m-0 text-[0]">
              <span className="font-mono text-[24px] font-normal leading-[1.4] text-neutral-900">
                {caseStudyMeta.titleLines[0]}
              </span>
              <br />
              <span className="font-mono text-[24px] font-normal leading-[1.4] text-neutral-500">
                {caseStudyMeta.titleLines[1]}
              </span>
            </h1>
            <p className="m-0 text-[16px] not-italic leading-[1.4] text-neutral-500">
              {caseStudyMeta.lead}
            </p>
            <div className="flex flex-col gap-2.5">
              {caseStudyHeroMeta.map((row, i) => (
                <div key={row.label}>
                  {i > 0 ? (
                    <div className="mb-2.5 h-px w-full border-t border-neutral-200" />
                  ) : null}
                  <div className="flex flex-col gap-1 text-[12px] leading-[1.3] tracking-[0.0936px] not-italic">
                    <p className="m-0 text-neutral-500">{row.label}</p>
                    <p className="m-0 text-[16px] text-neutral-900">
                      {row.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FadeInSection className="mb-[150px] w-full">
          <div className={`flex w-full flex-col gap-5 ${proseNarrow}`}>
            <SectionMarker label={caseStudyProblem.marker} />
            <p className="m-0 w-full font-mono text-[24px] font-normal leading-[1.4] text-neutral-900">
              {caseStudyProblem.headline}
            </p>
            <p className="m-0 text-[16px] not-italic leading-[1.4]">
              <Runs runs={caseStudyProblem.bodyRuns} leading="leading-[1.4]" />
            </p>
          </div>
        </FadeInSection>

        <FadeInSection className="mb-[150px] w-full">
          <div className={`flex w-full flex-col gap-5 ${proseNarrow}`}>
            <SectionMarker label={caseStudyChallenge.marker} />
            <p className="m-0 w-full font-mono text-[24px] font-normal leading-[1.4] text-neutral-900">
              {caseStudyChallenge.headline}
            </p>
            <Pills items={caseStudyChallenge.pills} />
            <p className="m-0 w-full text-[16px] leading-[1.4] not-italic text-neutral-500">
              {caseStudyChallenge.body}
            </p>
          </div>
        </FadeInSection>

        <div className="mb-[150px] flex w-full flex-col items-stretch gap-[100px]">
          <div className="flex w-full flex-col items-stretch gap-5">
            <div className={proseNarrow}>
              <div className="flex w-full flex-col gap-5">
                <SectionMarker label={caseStudySolution.marker} />
                <p className="m-0 w-full text-left font-mono text-[24px] font-normal leading-[1.4] text-neutral-900">
                  {caseStudySolution.introHeadline}
                </p>
              </div>
            </div>
            <SolutionWideVisual />
          </div>

          <div className="flex w-full flex-col items-stretch gap-5">
            <div className={`text-left ${proseNarrow}`}>
              <p className="m-0 font-mono text-[16px] font-normal leading-[1.4] text-neutral-900">
                {caseStudyDashboard.label}
              </p>
            </div>
            <DashboardVideo />
            <div className={`text-[16px] leading-[1.4] not-italic ${proseNarrow}`}>
              <p className="m-0 mb-0 text-neutral-500">
                <Runs runs={caseStudyDashboard.copyIntroRuns} />
              </p>
              <p className="m-0 mt-0 text-neutral-900">
                {caseStudyDashboard.copyQuestions}
              </p>
            </div>
            <p className={`m-0 text-[16px] leading-[1.4] not-italic ${proseNarrow}`}>
              <Runs runs={caseStudyDashboard.copyParagraph2Runs} />
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch gap-[30px]">
            <div className={`flex w-full flex-col gap-2.5 text-[16px] ${proseNarrow}`}>
              <p className="m-0 font-mono font-normal leading-[1.4] text-neutral-900">
                {caseStudyQuickAction.label}
              </p>
              <p className="m-0 not-italic leading-[1.4]">
                <Runs runs={caseStudyQuickAction.introRuns} />
              </p>
            </div>
            <QuickActionVisual />
            <div className={`flex w-full flex-col gap-[30px] ${proseNarrow}`}>
              <div className="flex flex-col gap-2.5 text-neutral-500">
                <p className="m-0 text-[16px] font-normal leading-[1.4] text-inherit">
                  {caseStudyQuickAction.howHelpsTitle}
                </p>
                <ul className="m-0 list-disc pl-6 text-[16px] leading-[1.4] not-italic">
                  {caseStudyQuickAction.howHelpsItems.map((it) => (
                    <li key={it} className="text-neutral-500">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full rounded-[6px] border border-stone-200/80 bg-stone-100 p-5">
                <p className="m-0 text-[16px] leading-[1.3] not-italic text-neutral-800">
                  {caseStudyQuickAction.journeyCallout}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch gap-5">
            <div className={`text-left ${proseNarrow}`}>
              <p className="m-0 font-mono text-[16px] font-normal leading-[1.4] text-neutral-900">
                {caseStudyFourViews.title}
              </p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-[120px]">
              {caseStudyFourViews.items.map((it) => (
                <div
                  key={it.id}
                  className="flex w-full flex-col items-stretch gap-5"
                >
                  {"video" in it && it.video ? (
                    <CaseStudyLoopVideo
                      src={it.video.src}
                      title={it.video.title}
                    />
                  ) : (
                    <VideoPlaceholder height={465}>
                      {caseStudyFourViews.placeHolder}
                    </VideoPlaceholder>
                  )}
                  <div
                    className={`flex w-full flex-col gap-2.5 text-[16px] leading-[1.4] ${proseNarrow}`}
                  >
                    <p className="m-0 font-normal text-neutral-900">
                      {it.title}
                    </p>
                    <p className="m-0 not-italic text-neutral-500">{it.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20 flex w-full flex-col gap-20">
          <FadeInSection className="w-full">
            <div className={`mx-auto flex w-full flex-col items-start gap-5 ${proseNarrow}`}>
              <SectionMarker label={caseStudyImpact.marker} />
              <div className="flex w-full flex-col items-start gap-5">
                <p className="m-0 w-full text-[16px] leading-[1.4] not-italic text-neutral-500">
                  {caseStudyImpact.intro}
                </p>
                {caseStudyImpact.cards.map((c) => (
                  <ImpactCard
                    key={c.id}
                    runs={c.runs}
                    emphasis={c.emphasis}
                  />
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="w-full">
            <div className={proseNarrow}>
              <p className="m-0 mb-5 w-full font-mono text-[24px] font-normal leading-[1.4] text-neutral-900">
                <span className="text-neutral-900">
                  {caseStudyClosing.headlineRuns[0]!.text}
                </span>
                <span className="text-neutral-500">
                  {caseStudyClosing.headlineRuns[1]!.text}
                </span>
              </p>
              <p className="m-0 w-full text-[16px] not-italic leading-[1.4]">
                <span className="text-neutral-500">
                  {caseStudyClosing.bodyRuns[0]!.text}
                </span>
                <span className="text-neutral-900">
                  {caseStudyClosing.bodyRuns[1]!.text}
                </span>
              </p>
            </div>
          </FadeInSection>
        </div>

        <div className={`mb-4 h-px w-full border-t border-neutral-200 ${proseNarrow}`} />

        <div className={proseNarrow}>
        <footer className="flex w-full max-w-[547px] flex-col gap-5 text-neutral-600">
          <div className="flex items-center gap-2.5">
            <span className="size-2.5 rounded-sm bg-neutral-900" aria-hidden />
            <Mono className="text-[14px] font-medium leading-none tracking-[0.14px] text-neutral-900">
              {caseStudyOutro.label}
            </Mono>
          </div>
          <p className="m-0 text-[16px] font-normal leading-[1.4] text-neutral-600">
            {caseStudyOutro.line}
          </p>
          <a
            href={calendlyHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 text-[16px] leading-[1.4] text-neutral-600 no-underline transition hover:text-neutral-900"
          >
            <img
              src="/images/Email.svg"
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0"
              aria-hidden
            />
            {caseStudyOutro.reachLabel}
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-[16px] leading-[1.4] text-neutral-600 no-underline transition hover:text-neutral-900"
          >
            <img
              src="/images/Location.svg"
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0"
              aria-hidden
            />
            {caseStudyOutro.portfolioLabel}
          </Link>
        </footer>
        </div>
      </div>
    </article>
  );
}
