import Image from "next/image";
import type { InfoItem } from "@/content/portfolio";
import { infoItems } from "@/content/portfolio";
import { InfoLinkRow } from "@/components/info-links";

const reachItem: InfoItem =
  infoItems.find((i) => i.id === "reach") ?? {
    id: "reach",
    label: "Reach me at",
    href: "https://calendly.com/adityakulkarni1894",
    external: true,
    iconSrc: "/images/Email.svg",
  };

/** Icon + Portfolio: Location icon, `info__link` chrome — same hover as “Reach me at”. */
const portfolioPitchLink = {
  id: "pitch-portfolio",
  label: "Portfolio",
  href: "/",
  iconSrc: "/images/Location.svg",
} satisfies InfoItem;

/** Figma node 4487:1578 — background + overlay + divider assets. */
const IN_PRACTICE_BG = "/images/pitch/in-practice-bg.png";
const IN_PRACTICE_DIVIDER = "/images/pitch/in-practice-divider.svg";

const AUDI_DESIGN_SYSTEM_LIBRARY_URL =
  "https://oneaudi.github.io/unified-web/?path=/docs/introduction--documentation&globals=viewport.value:mobile2";

function ExternalLinkGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="15 3 21 3 21 9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="10"
        y1="14"
        x2="21"
        y2="3"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "diamond" | "marker";
}) {
  return (
    <div className="flex items-center gap-2.5">
      {variant === "diamond" ? (
        <span
          className="size-[8px] shrink-0 rounded-full bg-[#CCFF65]"
          aria-hidden
        />
      ) : null}
      <span
        className={`text-[14px] font-normal leading-none tracking-[0.14px] ${variant === "diamond" ? "text-[#CCFF65]" : "text-white"}`}
      >
        {children}
      </span>
    </div>
  );
}

function SectionLabelMedium({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[14px] font-medium leading-none tracking-[0.14px] text-white">
      {children}
    </span>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 max-w-[648px] text-[16px] font-normal leading-[1.4] text-[#c1c1c1]">
      {children}
    </p>
  );
}

type PitchCardProps = {
  title: string;
  /** Filled circle next to the title (matches former icon swatches). */
  markerColor: string;
  children: React.ReactNode;
};

function PitchCard({ title, markerColor, children }: PitchCardProps) {
  return (
    <div className="relative isolate flex min-h-[150px] w-full flex-col gap-[10px] overflow-hidden rounded-[6px] border border-[#303030] bg-[#111] p-5">
      <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-[10px]">
        <div className="flex items-center gap-2.5">
          <span
            className="size-[10px] shrink-0 rounded-full"
            style={{ backgroundColor: markerColor }}
            aria-hidden
          />
          <h3 className="m-0 text-[14px] font-semibold leading-none tracking-[0.16px] text-white">
            {title}
          </h3>
        </div>
        <div className="text-[16px] font-normal leading-[1.4] text-[#c1c1c1]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function PitchPage() {
  return (
    <article className="mx-auto w-full max-w-[1360px]">
      <header className="mx-auto mb-16 max-w-[648px] md:mb-[92px]">
        <h1 className="m-0 text-[18px] font-semibold leading-[1.4] text-[#e6e6e6]">
          Aditya Kulkarni
        </h1>
        <p className="m-0 mt-1.5 text-[16px] font-normal leading-[1.4] text-[#e6e6e6]">
          Senior Product Designer
        </p>
      </header>

      <div className="mx-auto mb-16 flex max-w-[648px] flex-col gap-2.5 md:mb-[88px]">
        <SectionLabel variant="diamond">MADE FOR PEEC AI</SectionLabel>
        <p
          className="m-0 text-[30px] font-normal leading-[1.4] text-[#c1c1c1]"
        >
          Designing future-proof, and scalable design systems for the next era
          of AI products.
        </p>
      </div>

      <section
        className="mx-auto mb-14 max-w-[648px] space-y-4 md:mb-[88px]"
        aria-labelledby="pitch-moment-heading"
      >
        <h2 id="pitch-moment-heading" className="sr-only">
          The moment
        </h2>
        <SectionLabel variant="marker">THE MOMENT</SectionLabel>
        <div className="flex flex-col gap-4">
          <BodyText>
            Tech world is insane. The interface layer is changing.
            Conversational UI, generative components, dynamic layouts — the
            design systems built for static SaaS aren&apos;t equipped for this.
            Companies that don&apos;t rebuild their foundations with AI in mind
            will be doing it again in two years.
          </BodyText>
          <BodyText>
            Peec AI is scaling fast. That&apos;s the good news. The product is
            growing, new features ship, new surfaces emerge. You need a strong
            and solid system that holds it together, so that the team spends its
            best hours in building instead of rebuilding. Design debt compounds
            quietly — until it doesn&apos;t.
          </BodyText>
        </div>
      </section>

      <section
        className="mx-auto mb-14 max-w-[648px] space-y-4 md:mb-[88px]"
        aria-labelledby="pitch-constraint-heading"
      >
        <h2 id="pitch-constraint-heading" className="sr-only">
          The constraint
        </h2>
        <SectionLabel variant="marker">THE CONSTRAINT</SectionLabel>
        <BodyText>
          At this pace, most teams end up with inconsistent tokens, components
          rebuilt by every squad, and accessibility complied in panic.
          It&apos;s nobody&apos;s fault — it&apos;s just what happens when the
          product outgrows the system. The fix isn&apos;t slowing down.
          It&apos;s building a system that keeps up.
        </BodyText>
      </section>

      <section
        className="mx-auto mb-10 max-w-[648px] space-y-4 md:mb-12"
        aria-labelledby="pitch-bring-heading"
      >
        <h2 id="pitch-bring-heading" className="sr-only">
          What I bring
        </h2>
        <SectionLabel variant="marker">WHAT I BRING</SectionLabel>
        <BodyText>
          I&apos;ve built and scaled design systems at enterprise level — not
          as a contributor, but as the person who establishes the foundation,
          understands problems across teams, and puts the system as the core
          product layer. My work spans five areas:
        </BodyText>
      </section>

      <div className="mx-auto mb-20 flex w-full max-w-[648px] flex-col gap-10 rounded-[10px] py-6 sm:max-w-[547px] md:py-10 lg:mb-24">
        <PitchCard
          title="PRODUCT COLLABORATION"
          markerColor="#40B0FF"
        >
          Approaching product collaboration as a shared system - not a handoff, but aligning design, engineering, and product through clear structures and decisions.
        </PitchCard>
        <PitchCard
          title="API-FIRST DESIGN SYSTEM"
          markerColor="#FFC35C"
        >
          Designing systems as APIs, where each component has explicit meaning, structure, contracts, and usage rules enabling reliable UI generation by both engineers and AI tools.
        </PitchCard>
        <PitchCard
          title="AI-ENABLED WORKFLOW"
          markerColor="#B184FF"
        >
          Designing workflows that integrate AI as a collaborator—structuring systems and inputs so AI can reliably generate, assist, and scale outputs.
        </PitchCard>
        <PitchCard title="ACCESSIBILITY" markerColor="#FF2084">
          Building with AAA compliance ensuring interfaces are usable across a wide range, resulting in more inclusive and robust products.
        </PitchCard>
      </div>

      <section
        className="mx-auto mb-12 max-w-[648px] space-y-6 sm:max-w-[547px]"
        aria-labelledby="pitch-practice-heading"
      >
        <h2 id="pitch-practice-heading" className="sr-only">
          In practice
        </h2>
        <SectionLabel variant="marker">IN PRACTICE</SectionLabel>

        {/* Figma 4487:1578 — single card, bg image + rgba(0,0,0,0.2), 40px padding & gaps */}
        <div className="relative flex w-full flex-col gap-10 rounded-[6px] border border-solid border-[#303030] p-10">
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[6px]">
            <img
              src={IN_PRACTICE_BG}
              alt=""
              className="absolute max-w-none"
              style={{
                height: "123.49%",
                width: "106.42%",
                left: "-3.21%",
                top: "-11.74%",
              }}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 rounded-[6px] bg-[rgba(0,0,0,0.2)]"
            aria-hidden
          />

          <div className="relative z-10 flex w-full flex-col gap-10">
            <div className="flex w-full flex-col gap-[10px]">
              <p className="m-0 text-[16px] font-medium leading-none tracking-[0.16px] text-white">
                LORYN
              </p>
              <p className="m-0 w-full text-[16px] font-normal leading-[1.3] text-[#c1c1c1]">
                Currently designing a system for an AI-native product, where
                complex tasks like requesting services, resolving issues, or
                navigating policies, are simplified through clear, structured
                components.
              </p>
            </div>

            <div className="relative h-px w-full shrink-0">
              <Image
                src={IN_PRACTICE_DIVIDER}
                alt=""
                width={568}
                height={1}
                className="block h-px w-full max-w-none"
              />
            </div>

            <div className="flex w-full flex-col gap-[10px]">
              <p className="m-0 text-[16px] font-medium leading-none tracking-[0.16px] text-white">
                AUDI
              </p>
              <p className="m-0 w-full text-[16px] font-normal leading-[1.3] text-[#c1c1c1]">
                Core member on a multibrand system redesign. Refactored the token
                architecture and rebuilt all components for web and mobile,
                improving delivery cycles, and designed to flex across products
                without forking.
              </p>
              <a
                href={AUDI_DESIGN_SYSTEM_LIBRARY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit max-w-full items-center gap-2 rounded border border-[#303030] bg-transparent px-3 py-2 text-[14px] font-medium leading-none text-[#c1c1c1] transition-colors hover:bg-[#c1c1c1]/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c1c1c1]"
              >
                Audi design system library
                <ExternalLinkGlyph className="shrink-0 text-[#c1c1c1]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mb-12 w-full max-w-[862px] px-0">
        <Image
          src="/images/pitch/divider.svg"
          alt=""
          width={862}
          height={1}
          className="h-px w-full max-w-[862px]"
        />
      </div>

      <footer className="mx-auto flex max-w-[648px] flex-col gap-5 pb-6 sm:max-w-[547px]">
        <SectionLabelMedium>OUTRO</SectionLabelMedium>
        <p className="m-0 max-w-[648px] text-[16px] font-normal leading-[1.4] text-[#c1c1c1]">
          Looking forward to understanding where design is feeling the friction
          at Peec AI right now — and collaborating to build a system for your
          next phase.
        </p>
        <nav aria-label="Pitch links">
          <ul className="info__list">
            <InfoLinkRow item={reachItem} />
            <InfoLinkRow item={portfolioPitchLink} />
          </ul>
        </nav>
      </footer>
    </article>
  );
}
