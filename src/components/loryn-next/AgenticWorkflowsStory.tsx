import { CaseStudyImage } from "@/components/CaseStudyImage";
import { CaseStudyVideo } from "@/components/CaseStudyVideo";
import { StoryReveal } from "@/components/loryn-next/StoryReveal";
import { StoryDisclaimer } from "@/components/loryn-next/StoryDisclaimer";
import { BlockBody, DeepDiveSection, Subsection } from "@/components/loryn-next/blocks";

export function AgenticWorkflowsStory() {
  return (
    <>
      <p className="w-full max-w-[700px] text-base font-normal leading-[1.4] text-foreground">
        Redesigned how employees request IT and SAP access — turning a 30-minute, form-heavy
        chore into a 5-minute, AI-verified flow people actually trust.
      </p>

      <CaseStudyVideo
        src="/images/5.mp4"
        ariaLabel="SAP access request flow using the Loryn side panel form pattern"
        className="w-full"
      />

      <div className="flex w-full max-w-[700px] flex-col items-start gap-5">
        <ul className="flex list-disc flex-col gap-4 pl-6 text-base leading-[1.4] text-foreground">
          <li>
            Pushed back on a shipped direction with research, and user data proved it right — my
            Chat + Form Panel pattern replaced a purely conversational form on first rollout
          </li>
          <li>
            Cut request time from <span className="font-bold">~30 min to ~5</span> by attacking
            the real bottleneck — not the form, the information hunt
          </li>
          <li>
            Designed the trust architecture —{" "}
            <span className="font-bold">
              prefill-not-submit, form panel-beside-chat, honest failure states
            </span>{" "}
            — so an AI agent could act without silently getting it wrong
          </li>
          <li>Scaled the same pattern across 29 forms without redesigning the interaction each time.</li>
        </ul>
      </div>

      <StoryReveal>
        <DeepDiveSection
          media={
            <CaseStudyImage
              src="/images/LorynVisual1.png"
              alt="Legacy SAP and ServiceNow access request workflows — dense forms and context-switching between systems"
              width={1920}
              height={1080}
              className="w-full"
            />
          }
        >
          <Subsection heading="The problem, and the problem behind the problem">
            <BlockBody>
              Users were losing hours every week to ServiceNow and SAP processes —{" "}
              <span className="font-medium text-foreground">
                dense catalog forms, manual data entry, constant context-switching between
                systems just to request something as routine as software access.
              </span>
            </BlockBody>
          </Subsection>
          <BlockBody>
            But the more interesting problem wasn&apos;t the forms, nobody had yet decided which
            broken workflow to fix first, or what &quot;fixed&quot; would even mean. Loryn was
            going to scale to IT, HR, and Finance &amp; Procurement, and within IT specifically,
            product hadn&apos;t settled on what to build. That ambiguity is where my actual work
            started — not with a brief, but with an open question.
          </BlockBody>
        </DeepDiveSection>

        <DeepDiveSection
          media={
            <CaseStudyVideo
              src="/images/7.mp4"
              ariaLabel="Chat + Form Panel pattern — SAP access request with side panel form beside the conversation"
              className="w-full"
            />
          }
        >
          <Subsection heading="Shaping the problem: two moments of scoping under real constraints">
            <BlockBody>
              I want to be precise about what I owned here, Loryn&apos;s roadmap sat with the
              client&apos;s product leadership. What I owned was translating an ambiguous mandate
              into a sequenced, evidence-backed plan, and pushing back when the evidence disagreed
              with the shipped direction.
            </BlockBody>
          </Subsection>
          <Subsection heading="1. Choosing where to focus, inside an open mandate">
            <BlockBody>
              Product had two use cases ready to build simultaneously within IT Systems: a
              device-fixing flow (an agent attempts to resolve issues like a malfunctioning Teams
              install, escalating to a human if it fails) and a request-access flow (employees
              requesting SAP/ServiceNow access via forms).
            </BlockBody>
            <BlockBody>
              I argued for sequencing access-requests first, on reach: device-fixing touches a
              narrower IT-support surface, while access requests touch nearly every employee,
              repeatedly. [I&apos;m being precise rather than inflating this: my argument leaned
              on directional evidence of request volume and user frustration rather than a formal
              quantitative study — worth knowing if you&apos;re asking me about it.] Both use
              cases eventually shipped, but the sequencing call shaped what got design attention
              and momentum first.
            </BlockBody>
          </Subsection>
          <Subsection heading="2. When the shipped direction was wrong">
            <BlockBody>
              Engineering had already built a poc a conversational form — fill every field one at
              a time, in chat. It was fast to build and it shipped. My prediction was that pure
              conversation would frustrate users on a structured task. Verifying ten fields in a
              chat transcript is worse than seeing them at a glance. I pushed back and proposed a
              Chat + Form Panel pattern instead, the conversation stays for guidance, but a
              structured panel sits alongside it for the actual data.
            </BlockBody>
            <BlockBody>
              I lost that round. The conversational form shipped first — it was already built, and
              shipping it was cheap. Then the first-rollout feedback came in: low adoption, real
              user frustration with exactly the failure mode I&apos;d flagged. We revisited, and
              the Chat + Form Panel pattern shipped in its place.
            </BlockBody>
          </Subsection>
        </DeepDiveSection>

        <DeepDiveSection
          media={
            <CaseStudyImage
              src="/images/DesignDecision.png"
              alt="Design decisions for the Chat + Form Panel pattern — prefill-not-submit, panel beside chat, and honest failure states"
              width={1920}
              height={1080}
              className="w-full"
            />
          }
        >
          <Subsection heading="The design decisions, and what each one cost">
            <BlockBody>
              Once Chat + Form Panel was the direction, three decisions shaped whether the pattern
              would actually earn trust.
            </BlockBody>
          </Subsection>
          <Subsection heading="1. Prefill, never auto-submit.">
            <BlockBody>
              The agent pulls the user&apos;s data and prepares the request; nothing submits
              without human review. This is a deliberate cost — one extra step of friction, kept
              on purpose, because the system will sometimes be wrong and speed without
              verification isn&apos;t actually faster, it&apos;s just riskier.
            </BlockBody>
          </Subsection>
          <Subsection heading="2. The panel sits beside the chat, not inside it.">
            <BlockBody>
              Structured data needs at-a-glance verification. A chat transcript is good for
              guidance and bad for catching a wrong field. This is heavier UI than a pure
              conversational flow — I judged that trade-off worth it after watching the
              conversational version fail.
            </BlockBody>
          </Subsection>
          <Subsection heading="3. Honest failure states, never dead-end.">
            <BlockBody>
              If Loryn can&apos;t pull the needed data, it says so plainly and routes the user to
              the legacy portal rather than trapping them. The agent should accelerate the
              process, never gate it.
            </BlockBody>
          </Subsection>
        </DeepDiveSection>

        <div className="flex w-full max-w-[700px] flex-col gap-[30px]">
          <Subsection heading="What I'd do differently">
            <BlockBody>
              The honest gap in this work, looking back, isn&apos;t a missing feature — it&apos;s
              a missing question. Everything above assumes that when a user sees a prefilled,
              editable field, they actually read and verify it. I never designed against the
              opposite: a user on their ninth request of the day, rubber-stamping a field the AI
              got quietly wrong. Our failure handling covers the loud failures — a data pull that
              fails outright — and says nothing about the silent ones.
            </BlockBody>
          </Subsection>
          <BlockBody>
            If I were extending this today, I&apos;d split prefilled data by confidence rather
            than treating every field the same, require explicit acknowledgment on
            higher-consequence fields rather than allowing a passive scroll-past, and — most
            importantly — instrument edit rate on AI-proposed values as the real measure of
            whether verification is happening or just decorating the screen. A wrong value that
            gets rubber-stamped isn&apos;t a UI problem. It&apos;s the one metric that would tell
            you whether the entire trust model is actually working.
          </BlockBody>
        </div>
      </StoryReveal>

      <div className="flex w-full max-w-[700px] flex-col">
        <StoryDisclaimer />
      </div>
    </>
  );
}
