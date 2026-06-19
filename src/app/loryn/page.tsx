import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ButtonCodeSnippet } from "@/components/loryn/ButtonCodeSnippet";
import { ColorPalette } from "@/components/loryn/ColorPalette";
import { PaletteCodeSnippet } from "@/components/loryn/PaletteCodeSnippet";
import { ScreenCarousel } from "@/components/loryn/ScreenCarousel";
import { SectionDivider } from "@/components/SectionDivider";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-semibold leading-[1.2] text-foreground">{children}</h2>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-normal leading-[1.4] text-muted">{children}</p>;
}

type ArchitectureLayerProps = {
  level: string;
  label: string;
  path: string;
  description: string;
};

function ArchitectureLayerCard({ level, label, path, description }: ArchitectureLayerProps) {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-[10px] bg-surface-card p-5">
      <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-muted">
        {level} — {label}
      </p>
      <p className="text-base font-medium leading-[1.4] text-[#1b1c1d]">{path}</p>
      <p className="text-sm font-normal leading-[1.4] text-muted">{description}</p>
    </div>
  );
}

type ComponentCategoryProps = {
  title: string;
  description: string;
  examples: string;
};

function ComponentCategoryCard({ title, description, examples }: ComponentCategoryProps) {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-[10px] bg-surface-card p-5">
      <p className="text-base font-medium leading-[1.4] text-[#1b1c1d]">{title}</p>
      <p className="text-sm font-normal leading-[1.4] text-muted">{description}</p>
      <p className="font-mono text-xs font-medium leading-[1.4] text-muted">{examples}</p>
    </div>
  );
}

type SpecFileProps = {
  filename: string;
  description: string;
};

function SpecFileCard({ filename, description }: SpecFileProps) {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-[10px] bg-surface-card p-5">
      <p className="text-base font-semibold leading-[1.4] text-[#1b1c1d]">{filename}</p>
      <p className="text-sm font-normal leading-[1.4] text-muted">{description}</p>
    </div>
  );
}

type DecisionLogProps = {
  title: string;
  rejected: string;
  chosen: string;
  why: string;
};

function DecisionLogCard({ title, rejected, chosen, why }: DecisionLogProps) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-[10px] bg-surface-card p-5">
      <p className="text-base font-semibold leading-[1.4] text-[#1b1c1d]">{title}</p>
      <div className="flex flex-col gap-1">
        <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-muted">
          Rejected
        </p>
        <p className="text-sm leading-[1.4] text-muted">{rejected}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-muted">
          Chosen approach
        </p>
        <p className="text-sm leading-[1.4] text-muted">{chosen}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-muted">Why</p>
        <p className="text-sm leading-[1.4] text-muted">{why}</p>
      </div>
    </div>
  );
}

type ButtonComparisonProps = {
  label: string;
  buttonClassName: string;
  tokenLabel: string;
};

function ButtonComparisonCard({ label, buttonClassName, tokenLabel }: ButtonComparisonProps) {
  return (
    <div className="flex h-[187px] flex-1 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-[#d3dadf] p-2.5">
      <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-muted">
        {label}
      </p>
      <button
        type="button"
        tabIndex={-1}
        className={`inline-flex h-9 w-[100px] items-center justify-center rounded-md px-4 text-sm font-medium shadow-sm ${buttonClassName}`}
      >
        Button
      </button>
      <p className="font-mono text-[10px] font-medium text-muted">{tokenLabel}</p>
    </div>
  );
}

const architectureLayers = [
  {
    level: "03",
    label: "Custom components",
    path: "components/custom/",
    description: "Product specific patterns composed from base parts",
  },
  {
    level: "02",
    label: "Base components",
    path: "components/base/",
    description: "Primitives wired to design tokens and variants.",
  },
  {
    level: "01",
    label: "Shadcn UI primitives",
    path: "components/ui/",
    description: "Auto-generated, never edited",
  },
] as const;

const componentCategories = [
  {
    title: "29 Shadcn wrappers",
    description:
      "Override cva defaults with brand tokens. Behaviour and accessibility stay on Shadcn — we own the visual layer.",
    examples: "Buttons, Input, Tabs, Select",
  },
  {
    title: "4 composed",
    description:
      "Two or more primitives combined to cover a pattern Shadcn doesn't provide out of the box.",
    examples: "Combobox, Data Table, Date Picker",
  },
  {
    title: "8 custom builds",
    description: "Patterns specific to this product. No Shadcn equivalent exists.",
    examples: "Combobox, Data Table, Date Picker",
  },
] as const;

const specFiles = [
  {
    filename: "designsystem.md",
    description: "Colour, spacing, radius, breakpoints, Tailwind config.",
  },
  {
    filename: "components.md",
    description: "All 41 base specs — variants, tokens, usage.",
  },
  {
    filename: "patterns.md",
    description: "Composite recipes. Rule: composites import from base only.",
  },
] as const;

const decisionLogs = [
  {
    title: "01 — Machine-readable markdown specs over Figma dev mode",
    rejected: "Annotate Figma and let engineering interpret it.",
    chosen:
      "Write the spec as structured markdown — every variant, token, and rule — that both a developer and an AI tool (Cursor + Claude Code) can execute directly.",
    why: "Interpretation and assumption is where drift enters. A spec the model gives exact clarity removes the translation step entirely.",
  },
  {
    title: "02 — All variant styles in one token object",
    rejected: "Idiomatic cva with Tailwind classes inline per variant.",
    chosen: "Lift every variant's classes into a single t object the cva config reads from.",
    why: "Any variant becomes restyleable from one place — Product teams can change a value without reading component logic. It also gives the AI tooling one deterministic target to edit.",
  },
  {
    title: "03 — Build by a system, not by screens",
    rejected: "Build the high-visibility screens first to show progress.",
    chosen: "Primitives first, composites last — strict dependency order.",
    why: "It made the system adoptable in the first month and meant no component was ever built on an unstable foundation.",
  },
] as const;

export default function LorynCaseStudyPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-5 pb-20 pt-10 sm:px-6 md:px-8 md:pt-[122px]">
        {/* Hero */}
        <section className="flex flex-col items-center gap-10 md:gap-[70px]">
          <div className="flex w-full max-w-[700px] flex-col gap-2.5">
            <h1 className="text-base font-semibold leading-[1.2] text-foreground">Loryn AI</h1>
            <SectionIntro>
              Solo designer — live enterprise product — no existing system. I shipped a 0 → 1
              design system for Loryn, an AI assistant for 17k+ employees.
            </SectionIntro>
            <p className="text-base leading-[1.4] text-muted">
              <span className="font-medium text-foreground">41 components shipped,</span>
              from primitives → custom builds,{" "}
              <span className="font-medium text-foreground">used by 3 feature teams</span> (IT,
              Procurement, and HR).
            </p>
          </div>

          <Image
            src="/images/loryn-heropng.png"
            alt="Loryn AI employee assistant dashboard"
            width={4440}
            height={3192}
            className="h-auto w-full max-w-[900px] object-contain"
            priority
          />
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* A product in beta */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-5">
          <SectionHeading>A product in beta without a design system.</SectionHeading>
          <SectionIntro>
            Loryn is a digital colleague for employees across offices, field sites, and mobile —
            handling IT, HR, finance, and compliance queries. By the time I joined, the backend
            worked and the product was in beta. The interface wasn&apos;t.
          </SectionIntro>
          <SectionIntro>
            It had been built as a POC first, every screen made its own visual decisions, nothing
            held together, and no choice was written down anywhere. I came in as the only designer,
            with one constraint — fix the foundation without pausing a product that was already
            live.
          </SectionIntro>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* The decision that shaped everything */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-6 md:gap-[25px]">
          <div className="flex flex-col gap-2.5">
            <SectionHeading>The decision that shaped everything</SectionHeading>
            <SectionIntro>
              The problem wasn&apos;t missing components — it was that no design decision was
              encoded anywhere. Every new screen, every developer made visual choices from scratch.
              The fix wasn&apos;t better Figma files. It was a system, a contract.
            </SectionIntro>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-base leading-[1.4] text-foreground">
              <span className="font-semibold">
                So, I made the foundational call — one system, three layers.{" "}
              </span>
              <span className="font-normal text-muted">
                Each layer imports only from the layer below it. One rule. Zero architectural drift.
              </span>
            </p>

            <div className="flex flex-col gap-5">
              {architectureLayers.map((layer) => (
                <ArchitectureLayerCard key={layer.level} {...layer} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Foundations */}
        <section className="mx-auto flex w-full max-w-[900px] flex-col gap-10 md:gap-[50px]">
          <div className="mx-auto flex w-full max-w-[700px] flex-col gap-2.5">
            <SectionHeading>Foundations</SectionHeading>
            <SectionIntro>
              Before any component work, the tokens had to be real. Teal as the brand primary, a
              neutral grey ramp for UI, and a warm teal-grey for surfaces — every value mapped to a
              semantic role so components consume meaning (surface-brand, text-secondary), never
              raw hex.
            </SectionIntro>
          </div>

          <ColorPalette />

          <div className="mx-auto flex w-full max-w-[700px] flex-col gap-[15px]">
            <SectionIntro>
              The tokens live in one source-of-truth file that the whole system — and the AI tooling
              — references. A representative slice:
            </SectionIntro>
            <PaletteCodeSnippet />
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Decisions, not just components */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-10 md:gap-[50px]">
          <div className="flex flex-col gap-2.5">
            <SectionHeading>Decisions, not just components</SectionHeading>
            <SectionIntro>
              Every component started with a question: is this a Shadcn primitive we customise,
              something composed from existing parts, or a pattern unique to this product? That
              decision shaped the build order, the maintenance cost, and how can we make it AI
              ready.
            </SectionIntro>
          </div>

          <div className="flex flex-col gap-5">
            {componentCategories.map((category) => (
              <ComponentCategoryCard key={category.title} {...category} />
            ))}
          </div>

          <SectionIntro>
            I built them in dependency order — primitives first, complex patterns last — so the
            system was useful incrementally. Developers could adopt it in week one, not week four.
            That kept the team bought in while it was still being built.
          </SectionIntro>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Decisions log */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-10 md:gap-[50px]">
          <div className="flex flex-col gap-2.5">
            <SectionHeading>Decisions log</SectionHeading>
            <SectionIntro>
              As most of the component library was AI-generated. My job wasn&apos;t to type the
              code — it was to make the calls that shaped what got generated, and to catch what it
              got wrong. The decisions that mattered:
            </SectionIntro>
          </div>

          <div className="flex flex-col gap-5">
            {decisionLogs.map((decision) => (
              <DecisionLogCard key={decision.title} {...decision} />
            ))}
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Directing the AI */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-10 md:gap-[50px]">
          <div className="flex flex-col gap-2.5">
            <SectionHeading>Directing the AI</SectionHeading>
            <SectionIntro>
              The whole system lives in three files — the contract that devs and AI both build
              against:
            </SectionIntro>
          </div>

          <div className="flex flex-col gap-5">
            {specFiles.map((file) => (
              <SpecFileCard key={file.filename} {...file} />
            ))}
          </div>

          <div className="flex flex-col gap-[15px]">
            <SectionIntro>
              A trimmed slice of the Button spec the tooling generates against — the token object
              plus how the (cva) config consumes it:
            </SectionIntro>
            <ButtonCodeSnippet />
          </div>

          <div className="flex flex-col gap-5">
            <SectionHeading>Where I caught the model</SectionHeading>
            <p className="text-base leading-[1.4] text-muted">
              Once the ramps were defined, I had Claude generate the button set against the spec.
              It got most of it right — and quietly broke the secondary button.{" "}
              <span className="text-foreground">
                For the secondary fill it reached for the neutral grey. I&apos;d built a second
                ramp for exactly this: gray, a warm grey tinted toward the brand teal, so secondary
                actions, surfaces etc. read as part of the brand family rather than inert chrome.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row">
            <ButtonComparisonCard
              label="What Claude chose"
              buttonClassName="bg-[#e5e5e5] text-[#0f172a]"
              tokenLabel="neutral-200 #E5E5E5"
            />
            <ButtonComparisonCard
              label="What I wanted"
              buttonClassName="bg-[#e7f5f4] text-[#0f172a]"
              tokenLabel="gray-200 #E7F5F4"
            />
          </div>

          <p className="text-base leading-[1.4] text-muted">
            It wasn&apos;t a bug. Reaching for the obvious grey is the reasonable default — nothing
            in a hex value says which grey is meant to carry the brand. I caught it in the QA
            sandbox. And that&apos;s the real gap between a Figma file and a spec: Figma shows the
            result, but generation flattens any two values that look alike unless the intent is
            written down.{" "}
            <span className="text-foreground">
              So I stopped specifying the token alone and started specifying the why — secondary
              belongs to the brand ramp — and the divergence stopped, there and everywhere else two
              ramps sat close together. The catch was visual; the fix was systemic.
            </span>
          </p>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Impact */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <SectionHeading>Impact</SectionHeading>
            <SectionIntro>The system changed how the team shipped.</SectionIntro>
          </div>

          <p className="text-base leading-[1.4] text-foreground">
            — I moved from spec-writer to contributing code directly — and built a sandbox to QA
            component behaviour myself, instead of waiting on dev builds.
          </p>
          <p className="text-base leading-[1.4] text-foreground">
            — UX designers iterate on features without a designer in the loop for every change.
          </p>
          <p className="text-base leading-[1.4] text-foreground">
            — 3 feature teams (HR, IT, Procurement) building on one contract
          </p>

          <div className="flex flex-col gap-2.5 rounded-[10px] bg-surface-card p-5">
            <p className="text-base font-semibold leading-[1.4] text-[#1b1c1d]">Current status</p>
            <p className="text-sm font-normal leading-[1.4] text-muted">
              I&apos;m extending the system so feature teams can build and test features
              autonomously — reducing their dependency on engineering for routine work and freeing
              that time for strategy. The design system stops being a library and becomes the
              guardrail that makes self-serve, AI-assisted feature work safe.
            </p>
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Closing carousel */}
        <section className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-8">
          <SectionHeading>Loryn AI</SectionHeading>
          <ScreenCarousel />
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
