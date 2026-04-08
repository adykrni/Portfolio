import Image from "next/image";
import Link from "next/link";
import { infoItems } from "@/content/portfolio";

const REACH_HREF =
  infoItems.find((i) => i.id === "reach")?.href ??
  "mailto:adityakulkarni1894@gmail.com";

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
  iconSrc: string;
  children: React.ReactNode;
};

function PitchCard({ title, iconSrc, children }: PitchCardProps) {
  return (
    <div className="relative isolate flex h-auto min-h-[175px] w-full max-w-[400px] flex-col gap-[10px] overflow-hidden rounded-[6px] border border-[#303030] bg-[#111] p-5 sm:shrink-0 sm:w-[400px]">
      <div className="relative z-10 flex flex-col gap-[10px]">
        <div className="flex items-center gap-2.5">
          <Image
            src={iconSrc}
            alt=""
            width={10}
            height={10}
            className="h-[10px] w-[10px] shrink-0"
          />
          <h3 className="m-0 text-[16px] font-semibold leading-none tracking-[0.16px] text-white">
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
          className="m-0 bg-clip-text text-[30px] font-normal leading-[1.4] text-#c1c1c1"
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

      <div className="mx-auto mb-20 flex flex-wrap justify-center gap-10 rounded-[10px] p-6 md:p-10 lg:mb-24">
        <PitchCard
          title="PRODUCT COLLABORATION"
          iconSrc="/images/pitch/icon-product.svg"
        >
          Embedded with PMs to design features end-to-end — not handing off
          specs, but shaping requirements before a pixel is drawn.
        </PitchCard>
        <PitchCard
          title="TOKEN ARCHITECTURE"
          iconSrc="/images/pitch/icon-token.svg"
        >
          Designing semantic, multibrand token systems from scratch —
          structured so they flex across web, mobile, and future surfaces
          without being rewritten.
        </PitchCard>
        <PitchCard
          title="COMPONENT LEVEL UI/UX"
          iconSrc="/images/pitch/icon-component.svg"
        >
          Building component libraries that teams actually use — documented,
          predictable, and faster to ship with than without.
        </PitchCard>
        <PitchCard
          title="AI-ENABLED WORKFLOW"
          iconSrc="/images/pitch/icon-ai.svg"
        >
          Using AI tooling to move faster without losing craft — from
          generative explorations to automated component documentation and design
          QA.
        </PitchCard>
        <PitchCard title="AAA ACCESSIBILITY" iconSrc="/images/pitch/icon-a11y.svg">
          Accessibility built into the system at the token and component level
          — so every team ships inclusively by default, not as an afterthought.
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

        <div className="flex w-full flex-col gap-5">
          <div className="flex flex-col gap-[10px] rounded-[6px] border border-[#303030] bg-[#111] p-5">
            <p className="m-0 text-[16px] font-medium leading-none tracking-[0.16px] text-white">
              KLM HOLIDAYS
            </p>
            <p className="m-0 text-[16px] font-normal leading-[1.3] text-[#c1c1c1]">
              Built their design system from the ground up. Enabled product
              teams to ship and iterate A/B pages independently — removing design
              as the bottleneck on every test cycle.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] rounded-[6px] border border-[#303030] bg-[#111] p-5">
            <p className="m-0 text-[16px] font-medium leading-none tracking-[0.16px] text-white">
              AUDI
            </p>
            <p className="m-0 text-[16px] font-normal leading-[1.3] text-[#c1c1c1]">
              Core member on a multibrand system redesign. Refactored the full
              token architecture and rebuilt all components for web and mobile —
              designed to flex across products without forking.
            </p>
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
        <nav aria-label="Pitch links" className="flex flex-col gap-2.5">
          <a
            href={REACH_HREF}
            className="info__link !font-normal !text-[16px] !leading-[1.4] !tracking-normal"
          >
            <span className="info__icon">
              <Image
                src="/images/pitch/reach.svg"
                alt=""
                width={20}
                height={20}
                className="info__icon-img size-5 max-h-5 max-w-5"
              />
            </span>
            <span className="info__label">Reach me at</span>
          </a>
          <Link
            href="/"
            className="info__link !font-normal !text-[16px] !leading-[1.4] !tracking-normal"
          >
            <span className="info__icon">
              <Image
                src="/images/pitch/portfolio.svg"
                alt=""
                width={20}
                height={20}
                className="info__icon-img size-5 max-h-5 max-w-5"
              />
            </span>
            <span className="info__label">Portfolio</span>
          </Link>
        </nav>
      </footer>
    </article>
  );
}
