import { ArrowLeft, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ButtonCodeSnippet } from "@/components/loryn/ButtonCodeSnippet";
import { ColorPalette } from "@/components/loryn/ColorPalette";
import { PaletteCodeSnippet } from "@/components/loryn/PaletteCodeSnippet";
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
      <div className="flex items-center justify-between">
        <p className="text-base font-medium leading-[1.2] text-foreground">{level}</p>
        <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-muted">
          {label}
        </p>
      </div>
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
    <div className="flex flex-1 flex-col gap-2.5 rounded-[10px] bg-surface-card p-5">
      <FileText className="size-6 shrink-0 text-muted" aria-hidden />
      <p className="text-base font-medium leading-[1.4] text-[#1b1c1d]">{filename}</p>
      <p className="text-sm font-normal leading-[1.4] text-muted">{description}</p>
    </div>
  );
}

const architectureLayers = [
  {
    level: "03",
    label: "Custom components",
    path: "components/custom/",
    description: "Product-specific patterns composed from base components.",
  },
  {
    level: "02",
    label: "Base components",
    path: "components/base/",
    description: "Shadcn primitives defined with design tokens and variants.",
  },
  {
    level: "01",
    label: "Shadcn UI primitives",
    path: "components/ui/",
    description: "Auto-generated, never edited.",
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
    examples: "Card, Action List, Page Header",
  },
] as const;

const specFiles = [
  {
    filename: "designsystem.md",
    description: "Colour palette, spacing, radius, breakpoints, Tailwind config.",
  },
  {
    filename: "components.md",
    description: "All 41 base component specs — variants, tokens, usage examples.",
  },
  {
    filename: "patterns.md",
    description: "Composite recipes. Rule: composites import from base only.",
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
              Building a design system for Loryn, an AI assistant for 17k+ employees. Loryn is a
              digital colleague for employees across offices, field locations, and mobile devices.
              It handles IT support, HR, finance, and compliance queries.
            </SectionIntro>
          </div>

          <div className="flex w-full max-w-[700px] flex-col gap-2.5">
            <SectionHeading>Role &amp; responsibility</SectionHeading>
            <SectionIntro>
              Solo designer — live enterprise product — no existing system. This is how I built the
              full UI architecture — and used AI to increase product delivery.
            </SectionIntro>
          </div>

          <div className="flex w-full max-w-[900px] items-center justify-center overflow-hidden rounded-[10px] bg-surface-media p-6 md:p-10">
            <Image
              src="/images/loryn-heropng.png"
              alt="Loryn AI employee assistant dashboard"
              width={4440}
              height={3192}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* A product in beta */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-2.5">
          <SectionHeading>A product in beta without a design system.</SectionHeading>
          <SectionIntro>
            Backend was up and running, but it was not a thoughtful product experience. The UI
            didn&apos;t hold together, as it was built ad-hoc. I was brought in as the sole designer
            to fix that — without pausing the product.
          </SectionIntro>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* The bottleneck */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-6 md:gap-[25px]">
          <div className="flex flex-col gap-2.5">
            <SectionHeading>The bottleneck wasn&apos;t the design, it was the handoff</SectionHeading>
            <SectionIntro>
              The problem wasn&apos;t missing components — it was that no design decision was
              encoded anywhere. Every new screen, every developer made visual choices from scratch.
              The fix wasn&apos;t better Figma files. It was a system, a contract.
            </SectionIntro>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-base leading-[1.4] text-foreground">
              <span className="font-semibold">
                So, I proposed a system having one contract with 3 layers.{" "}
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

        {/* Primitive colour palette */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-5">
          <SectionHeading>Primitive colour palette</SectionHeading>
          <ColorPalette />
          <PaletteCodeSnippet />
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

          <div className="flex flex-col gap-5">
            <SectionIntro>
              I built 41 components by dependency — primitives first, complex components last. A
              developer could start using the system after week one, not week four. The system was
              useful incrementally. That kept the team bought in while it was still being built.
            </SectionIntro>
            <SectionIntro>
              Instead of writing specs for developers to interpret, I built specs with Cursor +
              Claude code — structured markdown describing every decision, every variant, every
              token.
            </SectionIntro>
          </div>

          <div className="h-[400px] w-full overflow-auto rounded-[10px] bg-surface-media">
            <img
              src="/images/button.png"
              alt="Loryn button component specification — variants, sizes, and states"
              width={2718}
              height={4388}
              className="mx-auto block h-auto w-full"
            />
          </div>

          <ButtonCodeSnippet />
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* Specs that Devs + AI can execute */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-8">
          <div className="flex flex-col gap-2.5">
            <SectionHeading>Specs that Devs + AI can execute</SectionHeading>
            <SectionIntro>
              Instead of depending on Figma dev mode for the engineering team to interpret, I wrote
              specs that they could act on directly — structured markdown describing every
              decision, every variant, every token.
            </SectionIntro>
          </div>

          <div className="flex flex-col gap-2.5">
            <SectionIntro>Three files, having the entire source of truth,</SectionIntro>
            <div className="flex flex-col gap-5 sm:flex-row">
              {specFiles.map((file) => (
                <SpecFileCard key={file.filename} {...file} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider className="mx-auto my-10 w-full max-w-[700px] md:my-[70px]" />

        {/* The impact */}
        <section className="mx-auto flex w-full max-w-[700px] flex-col gap-8">
          <div className="flex flex-col gap-2.5">
            <SectionHeading>The impact</SectionHeading>
            <SectionIntro>
              The system really increased delivery speed. Once I built the contracts, I could
              directly contribute to code. I didn&apos;t have to rely on developers to test the
              builds.
            </SectionIntro>
            <SectionIntro>
              QA got easier, I built a sandbox environment where I could test component
              behaviours.
            </SectionIntro>
          </div>

          <div className="flex flex-col gap-2.5 rounded-[10px] bg-surface-card p-5">
            <p className="text-base font-medium leading-[1.4] text-[#1b1c1d]">Current</p>
            <p className="text-sm font-normal leading-[1.4] text-muted">
              I&apos;m testing out flows, on how different teams can build test-features
              autonomously so that teams reduce dependency on devs, and spend more time on
              strategy.
            </p>
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
