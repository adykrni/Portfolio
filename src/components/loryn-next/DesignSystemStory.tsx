import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { StoryReveal } from "@/components/loryn-next/StoryReveal";
import { StoryDisclaimer } from "@/components/loryn-next/StoryDisclaimer";
import {
  BlockBody,
  DeepDiveSection,
  Subsection,
  TextOnlySection,
} from "@/components/loryn-next/blocks";

export function DesignSystemStory() {
  return (
    <>
      <p className="w-full max-w-[700px] text-base font-normal leading-[1.4] text-foreground">
        Built Loryn&apos;s design system from zero — turning a fragmented, alpha-stage product
        into one consistent enough to scale it to multiple operations.
      </p>

      <MediaPlaceholder label="IMAGE PLACEHOLDER CAROUSEL" className="h-[475px] w-full" />

      <div className="flex w-full max-w-[700px] flex-col items-start gap-5">
        <ul className="flex list-disc flex-col gap-4 pl-6 text-base leading-[1.4] text-foreground">
          <li>
            Joined as sole UI designer to bring order to an inconsistent POC — the resulting
            system helped win the client&apos;s entire account
          </li>
          <li>
            Made a deliberate two-tier token architecture call, right-sized for a 1-designer,
            4-engineer team
          </li>
          <li>
            Established design QA and governance from scratch so implementation never drifted
            from intent
          </li>
          <li>
            Defined the interaction patterns for AI-specific work — Form Panel, Inline Edit — and
            validated them in code before handoff
          </li>
        </ul>
      </div>

      <StoryReveal>
        <TextOnlySection>
          <Subsection heading="Where it started">
            <BlockBody>
              When I joined, Loryn existed as an alpha-stage proof of concept — built by engineers
              on an open-source design system, with no one yet owning how it looked or behaved as
              a whole; screens differed across flows, and the same action might use three
              different button styles. My first task was narrow and urgent -- bring structure
              quickly, design systems are home ground for me, but because the product needed to
              look and feel like one coherent thing before the client would trust it enough to
              scale it.
            </BlockBody>
          </Subsection>
        </TextOnlySection>

        <DeepDiveSection>
          <Subsection heading="The token architecture: a deliberate two-tier decision">
            <BlockBody>
              I built the system on core tokens — raw values for color, typography, spacing —
              mapped directly onto component tokens, deliberately skipping a semantic middle
              layer. That was a considered trade-off, because at the time Loryn had one designer
              and four frontend developers, and a semantic layer only wins once multiple teams
              need to build autonomously. This architecture meant faster builds and simpler
              overhead for a small team moving fast. As the client scales Loryn into other
              operations, and a semantic token layer is exactly what I&apos;d add next — the
              layer that lets multiple product teams build consistently without a single designer
              as the bottleneck.
            </BlockBody>
          </Subsection>
        </DeepDiveSection>

        {/* This section interleaves a carousel after each pattern rather than
            trailing a single one at the end, so it's composed directly instead
            of using DeepDiveSection/TextOnlySection. */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-[55px]">
          <div className="flex w-full max-w-[700px] flex-col gap-2.5">
            <Subsection heading="Designing patterns for Loryn">
              <BlockBody>
                Loryn resolves every user query through three tiers of AI involvement — from
                simple knowledge retrieval, up through offering to act on the user&apos;s behalf,
                up to full task execution — an architecture designed jointly with the client&apos;s
                Experience Lead and product owners. My part was designing what each tier actually
                looks and feels like, and deciding which interaction pattern each tier deserved,
                which produced two real patterns and one real trade-off.
              </BlockBody>
            </Subsection>
          </div>

          <div className="flex w-full max-w-[700px] flex-col gap-1.5">
            <Subsection heading="1. Form Panel">
              <BlockBody>
                A structured panel sitting beside the chat, used for anything reaching full task
                execution — complex, high-stakes requests where a user needs to verify data at a
                glance before it submits anywhere. This shipped, and the full story of how it
                works in practice lives in the Agentic Workflows tab.
              </BlockBody>
            </Subsection>
          </div>

          <MediaPlaceholder label="IMAGE PLACEHOLDER CAROUSEL" className="h-[475px] w-full" />

          <div className="flex w-full max-w-[700px] flex-col gap-1.5">
            <Subsection heading="2. Inline Edit">
              <BlockBody>
                A lighter concept for low-complexity tasks — correcting a small piece of
                AI-returned data directly inside the chat, no separate panel required. We
                designed it, then deprioritized it: one pattern everywhere was cheaper to build
                and maintain than two, and I took that trade genuinely, not reluctantly. The
                reopening condition was simple — if friction on small tasks ever showed up as a
                real complaint, the concept was already documented and ready. It never did, which
                told me the original call was right.
              </BlockBody>
            </Subsection>
          </div>

          <MediaPlaceholder label="IMAGE PLACEHOLDER CAROUSEL" className="h-[475px] w-full" />
        </div>

        <DeepDiveSection>
          <Subsection heading="Validating patterns in code, not just in Figma">
            <BlockBody>
              Rather than handing engineering static mockups, I set up a workflow using Cursor to
              prototype system components directly in code — building the Form Panel pattern as
              something that actually ran, with real states and behavior, before engineering
              picked it up. That meant validating interaction decisions against reality earlier,
              and handing off something engineers could react to rather than annotate.
            </BlockBody>
          </Subsection>
        </DeepDiveSection>

        <TextOnlySection>
          <Subsection heading="What scaling actually looked like">
            <BlockBody>
              Once the Form Panel pattern existed, it didn&apos;t need to be reinvented per use
              case — the same pattern was extended across 29 forms, ranging from low to high
              complexity, each new use case a matter of applying an existing decision, not
              relitigating it. That&apos;s the actual measure of whether a design system is
              working: not how many components exist, but how much cheaper each new thing gets to
              design.
            </BlockBody>
          </Subsection>
        </TextOnlySection>
      </StoryReveal>

      <div className="flex w-full max-w-[700px] flex-col">
        <StoryDisclaimer />
      </div>
    </>
  );
}
