import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { VideoGallery } from "@/components/deutsche-wealth/VideoGallery";
import { SectionDivider } from "@/components/SectionDivider";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-base font-semibold leading-[1.2] text-foreground">
      {children}
    </h2>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-normal leading-[1.4] text-muted">{children}</p>;
}

function LayerCard({ level, description }: { level: string; description: string }) {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-[10px] bg-[#dfe4e8] p-5 sm:w-[197px] sm:shrink-0">
      <p className="text-base font-medium leading-[1.2] text-foreground">{level}</p>
      <p className="text-base font-normal leading-[1.4] text-muted">{description}</p>
    </div>
  );
}

type RedesignPhaseProps = {
  dotColor: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

function RedesignPhase({ dotColor, title, description, imageSrc, imageAlt }: RedesignPhaseProps) {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mx-auto flex w-full max-w-[700px] flex-col gap-1.5">
        <div className="flex items-center gap-2.5">
          <span
            className="size-2 shrink-0 rounded-full"
            style={{ backgroundColor: dotColor }}
            aria-hidden
          />
          <p className="font-sans text-base font-semibold leading-[1.2] text-foreground">
            {title}
          </p>
        </div>
        <p className="text-base font-normal leading-[1.2] text-foreground">{description}</p>
      </div>
      <div className="flex w-full items-center justify-center overflow-hidden rounded-[10px] bg-white p-6 md:p-[50px]">
        <div className="w-full shrink-0 origin-center scale-90">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={3840}
            height={2016}
            className="h-auto w-full object-contain"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

function BackButton({ showLabel = true }: { showLabel?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-divider bg-surface-card px-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      aria-label={showLabel ? undefined : "Back to home"}
    >
      <ArrowLeft className="size-3.5 shrink-0" aria-hidden />
      {showLabel ? "Back" : null}
    </Link>
  );
}

const redesignPhases = [
  {
    dotColor: "#f5c518",
    title: "Before",
    description:
      "We all know data heavy dashboards are messy and not very user friendly. The users just didn't know what data to look at. The dashboard failed to answer one question - \"How is my wealth doing?\".",
    imageSrc: "/images/Old.svg",
    imageAlt: "Deutsche Wealth Online dashboard before redesign",
  },
  {
    dotColor: "#3dba6d",
    title: "Proposed solution",
    description:
      "We all know data heavy dashboards are messy and not very user friendly. The users just didn't know what data to look at. The dashboard failed to answer one question - \"How is my wealth doing?\".",
    imageSrc: "/images/Proposed.svg",
    imageAlt: "Deutsche Wealth Online proposed wealth overview redesign",
  },
  {
    dotColor: "#4a90d9",
    title: "Delivered solution",
    description:
      "We all know data heavy dashboards are messy and not very user friendly. The users just didn't know what data to look at. The dashboard failed to answer one question - \"How is my wealth doing?\".",
    imageSrc: "/images/Approved.svg",
    imageAlt: "Deutsche Wealth Online delivered wealth overview solution",
  },
] as const;

export default function DeutscheWealthCaseStudyPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-5 pb-20 pt-10 sm:px-6 md:px-8 md:pt-[122px]">
        {/* Hero */}
        <section className="flex flex-col items-center gap-10 md:gap-[70px]">
          <div className="flex w-full max-w-[700px] flex-col gap-2.5">
            <h1 className="text-base font-semibold leading-[1.2] text-foreground">
              Deutsche Wealth Online+
            </h1>
            <SectionIntro>
              Using progressive disclosure to increase retention 17%, action rates 9%, and reduced
              support costs ~50%. Wealth management clients face a critical friction point:
              traditional dashboards present a wall of information that creates cognitive overload
              rather than clarity.
            </SectionIntro>
          </div>

          <div className="flex w-full max-w-[700px] flex-col gap-5">
            <SectionHeading>Role &amp; responsibility</SectionHeading>
            <SectionIntro>
              I was an IC designer focusing on UI &amp; Prototyping. Collaborated on the design
              cycle from — strategy → component design → prototyping → validation. Built 5
              components from the design system, and validated impact through metrics (+17%
              retention, +9% action rate, 2x support reduction).
            </SectionIntro>
          </div>

          <div className="flex aspect-[3960/2616] w-full max-w-[900px] items-center justify-center overflow-hidden rounded-[10px] bg-white">
            <Image
              src="/images/Dashboard v2.svg"
              alt="Deutsche Wealth Online dashboard overview"
              width={3960}
              height={2616}
              className="h-full w-full object-contain"
              priority
              unoptimized
            />
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* The challenge */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-5">
          <SectionHeading>The challenge</SectionHeading>
          <p className="text-base leading-[1.4] text-muted">
            Our users were overwhelmed by information. Users arrive at the dashboard with simple,
            urgent questions —{" "}
            <span className="font-medium text-foreground">
              &quot;What&apos;s my total wealth?&quot;, &quot;Am I on track to my financial
              goals?&quot;
            </span>
          </p>
          <SectionIntro>
            Instead of finding answers, users saw a maze of metrics, charts, and data points. The
            dashboard overwhelms rather than clarifies. The product fails at its core job —
            enabling confidence in financial decisions.
          </SectionIntro>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* The solution */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-10 md:gap-[50px]">
          <div className="flex flex-col gap-5">
            <SectionHeading>The solution</SectionHeading>
            <SectionIntro>
              Progressive Disclosure. Introducing a 3 layered interaction. — Answer urgent questions
              instantly (L1), provide evidence on expand (L2), enable deep dives for detail seekers
              (L3).
            </SectionIntro>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-[50px]">
            <LayerCard level="L1" description="Answer urgent questions instantly" />
            <LayerCard level="L2" description="Provide evidence on expand" />
            <LayerCard level="L3" description="Enable deep dives for detail seekers" />
          </div>
        </section>

        {/* Solution videos */}
        <section className="mt-10 w-full md:mt-[70px]">
          <VideoGallery />
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Component redesign */}
        <section className="mx-auto flex w-full max-w-[900px] flex-col gap-10 md:gap-[70px]">
          <div className="mx-auto flex w-full max-w-[700px] flex-col gap-5">
            <SectionHeading>
              Component re-design example - Wealth overview component
            </SectionHeading>
            <SectionIntro>
              Each follows progressive disclosure pattern. Consistent design language across all.
            </SectionIntro>
          </div>

          <div className="flex w-full flex-col gap-10 md:gap-[70px]">
            {redesignPhases.map((phase) => (
              <RedesignPhase key={phase.title} {...phase} />
            ))}
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Impact */}
        <section className="flex flex-col items-center gap-10 md:gap-[70px]">
          <div className="flex w-full max-w-[700px] flex-col gap-5">
            <SectionHeading>Impact</SectionHeading>
            <SectionIntro>
              We conducted usability tests with 27+ users for the &quot;Net wealth&quot; feature,
              and saw immediate increase in User actions showing a promise in retaining users. We
              also projected 2x reduction in support tickets.
            </SectionIntro>
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        <div className="flex justify-center">
          <BackButton />
        </div>
      </div>
    </main>
  );
}
