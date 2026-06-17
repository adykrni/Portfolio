import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { VideoGallery } from "@/components/deutsche-wealth/VideoGallery";
import { SectionDivider } from "@/components/SectionDivider";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-semibold leading-[1.4] text-foreground">{children}</h2>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-normal leading-[1.4] text-muted">{children}</p>;
}

function SubsectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-semibold uppercase leading-[1.4] text-[#696d74]">
      {children}
    </p>
  );
}

type LayerCardProps = {
  title: string;
  description: string;
};

function LayerCard({ title, description }: LayerCardProps) {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-[10px] bg-surface-card p-5">
      <p className="text-base font-medium leading-[1.4] text-[#161617]">{title}</p>
      <p className="text-base font-normal leading-[1.4] text-muted">{description}</p>
    </div>
  );
}

type RedesignPhaseProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

function RedesignPhase({ title, description, imageSrc, imageAlt }: RedesignPhaseProps) {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mx-auto flex w-full max-w-[700px] flex-col gap-1.5">
        <p className="text-base font-semibold leading-[1.4] text-foreground">{title}</p>
        <p className="text-base font-normal leading-[1.2] text-muted">{description}</p>
      </div>
      <div className="flex h-[379px] w-full items-center justify-center overflow-hidden rounded-[10px] p-6 md:p-[50px]">
        <div className="w-full shrink-0 origin-center scale-90">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={3840}
            height={2016}
            className="h-auto w-full rounded-[10px] border border-[#dee3ec] object-contain"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

const disclosureLayers = [
  {
    title: "L1 - Answer urgent questions instantly",
    description: '"How is my wealth doing?" — total wealth and direction, at a glance.',
  },
  {
    title: "L2 - Provide the evidence on expand",
    description: "Portfolio breakdown and asset-class allocation, revealed when wanted.",
  },
  {
    title: "L3 - Enable the deep dive",
    description: "Full metrics and history for the detail-seekers — without taxing everyone else.",
  },
] as const;

const redesignPhases = [
  {
    title: "Before",
    description:
      'Original component — Data-heavy and flat. Users couldn\'t tell what to look at, and it never answered "how is my wealth doing?"',
    imageSrc: "/images/Old.png",
    imageAlt: "Deutsche Wealth Online dashboard before redesign",
  },
  {
    title: "Proposed",
    description:
      "My three-level logic. Immediate answer up top, optional depth below — the disclosure model applied.",
    imageSrc: "/images/Proposed.png",
    imageAlt: "Deutsche Wealth Online proposed wealth overview redesign",
  },
  {
    title: "Delivered design - MVP",
    description:
      "After sparring with engineering and management on feasibility, I delivered the most achievable version that kept the disclosure model intact.",
    imageSrc: "/images/Approved.png",
    imageAlt: "Deutsche Wealth Online delivered wealth overview solution",
  },
] as const;

export default function DeutscheWealthCaseStudyPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-5 pb-20 pt-10 sm:px-6 md:px-8 md:pt-[122px]">
        {/* Hero */}
        <section className="mx-auto flex w-full max-w-[900px] flex-col gap-10 md:gap-[70px]">
          <div className="mx-auto flex w-full max-w-[700px] flex-col gap-2.5">
            <h1 className="text-base font-semibold leading-[1.4] text-foreground">DWO+</h1>
            <SectionIntro>
              I led the UI redesign and prototyping for Deutsche Bank&apos;s wealth-management
              dashboard — turning a wall of data into a layered interface that answers a
              client&apos;s first question at a glance, then validated it with 27 users in
              task-based usability testing before handoff.
            </SectionIntro>
          </div>

          <div className="mx-auto flex w-full max-w-[700px] flex-col gap-2.5">
            <SectionHeading>Role &amp; responsibility</SectionHeading>
            <SectionIntro>
              I was an IC designer owning UI and prototyping, working the full cycle — strategy →
              component design → prototyping → validation. I designed the progressive-disclosure
              model, built 5 components, and ran the usability testing myself. My scope ended at
              MVP delivery and validation; whether the design reached production was decided
              downstream and out of my hands. So this case study is about the redesign and how I
              tested it — not production numbers I can&apos;t verify.
            </SectionIntro>
          </div>

          <div className="flex aspect-[2620/1724] w-full items-center justify-center overflow-hidden rounded-[10px] bg-white">
            <Image
              src="/images/Dashboard v2.png"
              alt="Deutsche Wealth Online full dashboard overview"
              width={2620}
              height={1724}
              className="h-full w-full object-contain"
              priority
              unoptimized
            />
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* The challenge */}
        <section className="mx-auto flex w-full max-w-[900px] flex-col gap-6 md:gap-[25px]">
          <div className="mx-auto flex w-full max-w-[700px] flex-col gap-5">
            <SectionHeading>The challenge</SectionHeading>
            <p className="text-base leading-[1.4] text-muted">
              Our users were overwhelmed by information. Users arrive at the dashboard with simple,
              urgent questions —{" "}
              <span className="font-medium text-[#292b2f]">
                &quot;What&apos;s my total wealth?&quot;, &quot;Am I on track to my financial
                goals?&quot;
              </span>
            </p>
            <SectionIntro>
              Instead of finding answers, users saw a maze of metrics, charts, and data points. The
              dashboard overwhelms rather than clarifies. The product fails at its core job —
              enabling confidence in financial decisions.
            </SectionIntro>
          </div>

          <div className="flex w-full items-center justify-center">
            <video
              src="/images/old-test2.mov"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Deutsche Bank legacy portfolios overview dashboard"
              className="h-auto w-full rounded-[30px] border-[15px] border-black object-contain"
            />
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Progressive disclosure */}
        <section className="mx-auto flex w-full max-w-[900px] flex-col gap-10 md:gap-[70px]">
          <div className="mx-auto flex w-full max-w-[700px] flex-col gap-5">
            <SectionHeading>The idea — Progressive disclosure</SectionHeading>
            <SectionIntro>
              One model fixed the overload. Three layers, each answering a deeper need only when
              the client asks for it — so the dashboard stops shouting everything at once and starts
              answering in the order people actually think.
            </SectionIntro>

            <div className="flex flex-col gap-5">
              {disclosureLayers.map((layer) => (
                <LayerCard key={layer.title} title={layer.title} description={layer.description} />
              ))}
            </div>
          </div>

          <VideoGallery frameHeight={474} />
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* From proposal to delivery */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-5">
          <SectionHeading>From proposal to delivery</SectionHeading>
          <SectionIntro>
            I delivered the full working &quot;Net wealth&quot; dashboard feature, and stitched
            together other features. Let&apos;s walk through the wealth-overview component — three
            stages — the gap between the second and third is the real story.
          </SectionIntro>
        </section>

        <section className="mx-auto mt-10 flex w-full max-w-[900px] flex-col gap-10 md:mt-[70px] md:gap-[70px]">
          {redesignPhases.map((phase) => (
            <RedesignPhase key={phase.title} {...phase} />
          ))}
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Validation */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-10 md:gap-[70px]">
          <div className="flex flex-col gap-2.5">
            <SectionHeading>How I knew it worked</SectionHeading>
            <p className="text-base leading-[1.4] text-muted">
              I ran usability testing with 27 users —{" "}
              <span className="text-foreground">
                task-based sessions built around one question: could a client answer &quot;how is my
                wealth doing?&quot; without help.
              </span>{" "}
              I didn&apos;t comparison metrics against the old dashboard, so there&apos;s no
              percentage lift to claim. What the test gives me is direct evidence that the new
              design did its job.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <SubsectionLabel>What I tested</SubsectionLabel>
            <SectionIntro>
              Real tasks, not opinions: find your total wealth, read whether you&apos;re up or down,
              then drop one level into a single portfolio. I watched where people went first, where
              they hesitated, and what they said out loud.
            </SectionIntro>
          </div>

          <div className="flex flex-col gap-2.5">
            <SubsectionLabel>What I found</SubsectionLabel>
            <p className="text-base leading-[1.4] text-muted">
              -- <span className="font-semibold text-[#18191b]">19 / 27</span> users located their
              total wealth and read their direction of travel from the L1 summary alone, unaided.
            </p>
            <SectionIntro>
              -- Users went to the L1 answer first and only expanded for detail when they wanted the
              &quot;why&quot;. The disclosure order matched how they actually navigated.
            </SectionIntro>
          </div>

          <div className="flex flex-col gap-2.5">
            <SubsectionLabel>What it confirmed</SubsectionLabel>
            <SectionIntro>
              Progressive disclosure was the right call. The layered model didn&apos;t just look
              cleaner — it matched the order in which clients actually ask their questions, which
              is what made the dense data feel manageable instead of overwhelming.
            </SectionIntro>
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Reflection */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-2.5">
          <SectionHeading>What I carry forward..</SectionHeading>
          <SectionIntro>
            This was a design-and-validation engagement, scoped to MVP. The win here wasn&apos;t a
            new component, it was a model. Progressive disclosure became a default lens I bring to
            any data-dense interface — answer the first question before offering the more. And the
            proposal-to-shipped gap taught me to design the compromise as deliberately as the ideal,
            so the core idea survives contact with engineering and stakeholders.
          </SectionIntro>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center gap-2 rounded border-0 px-5 text-base font-medium text-foreground outline-none transition-colors hover:bg-surface-card focus:outline-none focus-visible:outline-none"
          >
            <ArrowLeft className="size-4 shrink-0" aria-hidden />
            Back
          </Link>
        </div>
      </div>
    </main>
  );
}
