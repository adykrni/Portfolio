import Link from "next/link";
import { InfoLinkRow } from "@/components/info-links";
import type { ResumeClientWork } from "@/content/resume";
import { infoItems } from "@/content/portfolio";
import {
  resumeAbout,
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeSkills,
} from "@/content/resume";

/** Portfolio tokens: intro / timeline body */
const cBody = "text-[#b7babc]";
const cMuted = "text-[var(--text-muted)]";
const cLine = "border-[var(--line)]";
const cText = "text-[var(--text)]";

/** Long-form resume copy (about, summaries, client bullets, skills <dd>): 16px, #c1c1c1 */
const readCvBody16 =
  "max-w-[var(--max-read)] text-[16px] leading-[1.65] text-[#c1c1c1]";

const reachInfoItem = infoItems.find((item) => item.id === "reach");

function BackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className={`mb-6 border-b ${cLine} pb-2 text-[15px] font-normal uppercase leading-snug tracking-[0.04em] ${cMuted}`}
    >
      {children}
    </h2>
  );
}

function ResumeStackedItem({
  id,
  start,
  end,
  primary,
  org,
  location,
  summary,
  blocks,
}: {
  id: string;
  start: string;
  end: string;
  primary: string;
  org: string;
  location: string;
  summary?: string;
  blocks?: ResumeClientWork[];
}) {
  const blockList = blocks ?? [];

  return (
    <li className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[10px]">
        <p className={`m-0 text-[14px] tabular-nums ${cMuted} sm:text-[14px]`}>
          {start}
          <span className="text-[#535353]"> — </span>
          {end}
        </p>
        <h3 className={`m-0 text-[16px] font-semibold leading-snug ${cText} sm:text-[16px]`}>{primary}</h3>
        <p className={`m-0 text-[14px] ${cBody} sm:text-[13px]`}>{org}</p>
        <p className={`m-0 text-[14px] ${cBody} sm:text-[13px]`}>{location}</p>
      </div>
      {summary ? (
        <p className={`m-0 ${readCvBody16}`}>
          {summary}
        </p>
      ) : null}
      {blockList.length > 0 ? (
        <div className="flex flex-col gap-10">
          {blockList.map((c) => (
            <div key={c.id} className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[0.65rem] [--timeline-marker-size:10px]">
                <span className="timeline__marker shrink-0" aria-hidden />
                <p className="timeline__title m-0">{c.client}</p>
              </div>
              {c.paragraphs.map((para, i) => (
                <p
                  key={`${id}-${c.id}-p${i}`}
                  className={`m-0 ${readCvBody16}`}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </li>
  );
}

export function ReadCvResume() {
  return (
    <article className="readcv-root w-full pb-16 pt-2 md:pb-20 md:pt-4">
      <header className="mb-14 md:mb-16">
        <Link
          href="/"
          className={`readcv-back mb-10 inline-flex items-center gap-1 rounded-md border border-white/28 bg-transparent py-[4px] pl-[4px] pr-[8px] text-[13px] leading-none ${cText} no-underline transition-[border-color,background-color,color] hover:border-white/42 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]`}
        >
          <BackIcon className="shrink-0 opacity-90" />
          <span>Back</span>
        </Link>
        <h1
          className={`mb-2 text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] ${cText} md:text-[2rem]`}
        >
          {resumeProfile.name}
        </h1>
        <p className="mb-4 max-w-[var(--max-read)] text-[15px] leading-[1.65] text-[#c1c1c1] md:text-[16px]">
          {resumeProfile.headline}
        </p>
      </header>

      <section className="mb-14 md:mb-16" aria-labelledby="sec-about">
        <SectionLabel>
          <span id="sec-about">{resumeAbout.title}</span>
        </SectionLabel>
        <p className={`m-0 ${readCvBody16}`}>
          {resumeAbout.body}
        </p>
      </section>

      <section className="mb-14 md:mb-16" aria-labelledby="sec-exp">
        <SectionLabel>
          <span id="sec-exp">Experience</span>
        </SectionLabel>
        <ul className="m-0 flex list-none flex-col gap-12 p-0">
          {resumeExperience.map((job) => (
            <ResumeStackedItem
              key={job.id}
              id={job.id}
              start={job.start}
              end={job.end}
              primary={job.role}
              org={job.org}
              location={job.location}
              summary={job.summary}
              blocks={job.clients}
            />
          ))}
        </ul>
      </section>

      <section className="mb-14 md:mb-16" aria-labelledby="sec-skills">
        <SectionLabel>
          <span id="sec-skills">{resumeSkills.title}</span>
        </SectionLabel>
        <dl className="grid gap-6">
          {resumeSkills.groups.map((g) => (
            <div key={g.label}>
              <dt className="mb-1.5 flex items-center gap-[0.65rem] [--timeline-marker-size:10px]">
                <span className="timeline__marker shrink-0" aria-hidden />
                <span className="timeline__title">{g.label}</span>
              </dt>
              <dd className={`m-0 ${readCvBody16}`}>
                {g.items}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-0" aria-labelledby="sec-edu">
        <SectionLabel>
          <span id="sec-edu">Education</span>
        </SectionLabel>
        <ul className="m-0 flex list-none flex-col gap-12 p-0">
          {resumeEducation.map((ed) => (
            <ResumeStackedItem
              key={ed.id}
              id={ed.id}
              start={ed.start}
              end={ed.end}
              primary={ed.degree}
              org={ed.school}
              location={ed.location}
              summary={ed.summary}
              blocks={ed.clients}
            />
          ))}
        </ul>
      </section>

      {reachInfoItem ? (
        <section
          className="mt-[var(--space-section)] border-t border-[var(--line)] pt-[clamp(1.75rem,4.5vw,2.75rem)]"
          aria-label="Get in touch"
        >
          <ul className="info__list m-0 p-0">
            <InfoLinkRow item={reachInfoItem} />
          </ul>
        </section>
      ) : null}
    </article>
  );
}
