import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { FloatingCaseStudyNav } from "@/components/floating-nav/FloatingCaseStudyNav";
import { BlockHeading, BlockBody } from "@/components/loryn-next/blocks";
import { LorynStoryTabs } from "@/components/loryn-next/LorynStoryTabs";

export default function LorynPage() {
  return (
    <main className="bg-white">
      <FloatingCaseStudyNav currentPage="loryn" />
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-5 pb-20 pt-10 sm:px-6 md:px-8 md:pt-[122px]">
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-11">
          {/* Title + overview — shared across both tabs */}
          <div className="flex w-full max-w-[700px] flex-col gap-2.5">
            <BlockHeading>Loryn AI</BlockHeading>
            <BlockBody>
              Shipping an AI-first enterprise product for 12k+ employees. Designing Agent
              Workflows Enterprise Employees Can Trust.
            </BlockBody>
          </div>

          <div className="flex w-full max-w-[700px] flex-col gap-2.5">
            <BlockHeading>Overview</BlockHeading>
            <BlockBody>
              Built Loryn from zero, joined as sole UI designer to build the design system and
              ship UI. Within 6 months, transitioned to end-to-end product designer owning the IT
              Systems feature: research, scoping, flows, prototypes, through to ship.
            </BlockBody>
            <BlockBody>
              A client-side Experience Lead as daily partner and final decision-maker, two POs, a
              team of 10 engineers. Project ongoing since August 2025.
            </BlockBody>
          </div>

          <MediaPlaceholder label="IMAGE PLACEHOLDER CAROUSEL" className="h-[379px] w-full" />

          <LorynStoryTabs />
        </div>
      </div>
    </main>
  );
}
