import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ComponentGallery, HeroImage } from "@/components/CaseStudyImage";
import { FeatureCard } from "@/components/FeatureCard";
import { OffersConfigurator } from "@/components/OffersConfigurator";
import { SectionDivider } from "@/components/SectionDivider";
import { StatCard } from "@/components/StatCard";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-semibold leading-[1.2] text-foreground">{children}</h2>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-normal leading-[1.4] text-muted">{children}</p>;
}

export default function KlmCaseStudyPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-5 pb-20 pt-10 sm:px-6 md:px-8 md:pt-[122px]">
        {/* Hero */}
        <section className="flex flex-col items-center gap-10 md:gap-[70px]">
          <div className="flex w-full max-w-[700px] flex-col gap-5">
            <SectionHeading>KLM Holidays</SectionHeading>
            <SectionIntro>
              KLM Holidays is the package-travel division of KLM — selling complete vacation
              bundles across flights, hotels, and car rentals in a single booking.
            </SectionIntro>
            <p className="text-base leading-[1.4] text-muted">
              A design system built in the middle of a live product. Migrating a UI library to
              Figma, then designing a custom component that shipped A/B tests across the BeNeLux
              market — and{" "}
              <span className="font-semibold text-foreground">boosted bookings by 27%.</span>
            </p>
            <a
              href="https://holidays.klm.nl/en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-base font-medium text-klm-blue transition-colors hover:text-klm-blue/80"
            >
              Live website
              <ExternalLink className="size-4 shrink-0" aria-hidden />
            </a>
          </div>

          <HeroImage />

          <div className="flex w-full max-w-[700px] flex-col gap-5">
            <SectionHeading>Role &amp; responsibility</SectionHeading>
            <SectionIntro>
              I was embedded in the KLM Holidays product team from October 2021 until May 2022 . Collaborated with POs, UX
              designers, and developers across agile sprints to design, document, and ship
              scalable components.
            </SectionIntro>
            <SectionIntro>
              My main task was to build a component library that lets product teams configure and
              ship offers across the KLM Holidays platform — without needing a designer in the
              loop every time.
            </SectionIntro>
            <SectionIntro>
              The reality - Limited resources, mid-project onboarding, and an existing Sketch
              library that needed migrating to Figma — while a live product was being built on
              top of it.
            </SectionIntro>
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Setting the foundations */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-10 md:gap-[50px]">
          <div className="flex flex-col gap-5">
            <SectionHeading>Setting the foundations</SectionHeading>
            <SectionIntro>
              Before any custom component work could start, the foundation had to be solid. That
              meant migrating the entire KLM core library from Sketch — primitives, colour tokens,
              icons, typography — and remapping it to the KLM Holidays brand.
            </SectionIntro>
            <FeatureCard
              title="Migrated all primitives"
              description="Colour tokens, typography, spacing, and icon sets — from Sketch into Figma's variable and component system."
            />
            <FeatureCard
              title="Rebranding to KLM Holidays"
              description="All primitive components needed colour remapping. KLM Airlines uses blue; KLM Holidays layered in orange as the primary action colour."
            />
            <FeatureCard
              title="Three structured layers"
              description="Icon library → Core library → Custom library. This hierarchy meant any team could build on top without breaking the foundation."
            />
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* One component */}
        <section className="flex flex-col items-center gap-10 md:gap-[70px]">
          <div className="flex w-full max-w-[700px] flex-col gap-5">
            <SectionHeading>One component, infinite configurations</SectionHeading>
            <SectionIntro>
              Product teams kept requesting variations of an &quot;Offers&quot; block — different
              layouts, different content types, different package tiers. The traditional path
              would mean a designer involved in every sprint.
            </SectionIntro>
            <SectionIntro>
              I designed a single, flexible Offers component in Figma that cross-functional teams
              could configure themselves using Figma&apos;s component properties — reducing
              dependency on the designers, no waiting.
            </SectionIntro>
            <FeatureCard
              title="Faster sprint cycles"
              description="PMs could swap content, toggle package tiers, and ship A/B variants without opening a design ticket."
            />
            <FeatureCard
              title="A/B testing at scale"
              description="Economy vs Business, full-width vs half-width, different partner logos. All from one component."
            />
            <FeatureCard
              title="One source of truth"
              description="6 designers, one component. No drift, no inconsistency, no mismatched versions in production."
            />
          </div>
        </section>

        {/* Give it a try */}
        <section className="mt-10 flex w-full flex-col items-center gap-8 md:mt-[70px] md:gap-[42px]">
          <div className="flex w-full max-w-[700px] flex-col gap-5">
            <SectionHeading>Give it a try..</SectionHeading>
            <SectionIntro>
              This is the Offers component — configure it the same way you would in Figma.
              Toggle packages, switch layouts, turn partner logos on and off.
            </SectionIntro>
          </div>
          <div className="w-full max-w-[1280px] px-0 sm:px-2">
            <OffersConfigurator />
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[900px] md:my-[70px]" />

        {/* Other custom components */}
        <section className="flex flex-col gap-8 md:gap-10">
          <div className="mx-auto flex w-full max-w-[700px] flex-col gap-5 md:pl-[100px]">
            <SectionHeading>Other custom components</SectionHeading>
            <SectionIntro>
              The custom library included a range of components purpose-built for the KLM Holidays
              platform — each designed to be flexible, brand-aligned, and developer-ready.
            </SectionIntro>
          </div>
          <ComponentGallery />
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* How does this help KLM */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-8">
          <div className="flex flex-col gap-5">
            <SectionHeading>How does this help KLM?</SectionHeading>
            <SectionIntro>
              The Offers component wasn&apos;t just a design deliverable — it changed how the
              team worked. Product managers stopped waiting for design cycles and started shipping
              independently, to reach business goals.
            </SectionIntro>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row">
            <StatCard
              value="27%"
              description="Increase in bookings from A/B tests in the BeNeLux market"
            />
            <StatCard
              value="10+"
              description="variants introduced in various markets to improve sales funnels."
            />
          </div>
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
