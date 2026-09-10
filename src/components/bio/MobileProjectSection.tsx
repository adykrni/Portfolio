import Image from "next/image";
import Link from "next/link";

import { isProjectNavigable, type BioChip, type FactsAnnotation } from "@/lib/bio-content";

function ProjectTitleRow({
  chip,
  href,
  navigable,
}: {
  chip: BioChip;
  href?: string;
  navigable: boolean;
}) {
  const row = (
    <>
      <Image src="/icons/folder.svg" alt="" width={16} height={16} className="shrink-0" aria-hidden />
      <span className="font-radio text-[16px] leading-[1.4] tracking-[0.16px] text-[#3a3a3a]">
        {chip.label}
      </span>
    </>
  );

  if (navigable && href) {
    return (
      <Link href={href} className="flex items-center gap-2.5">
        {row}
      </Link>
    );
  }

  return <div className="flex items-center gap-2.5">{row}</div>;
}

function ProjectFacts({
  facts,
  muted,
}: {
  facts: string[];
  muted: boolean;
}) {
  return (
    <ul className="flex list-none flex-col gap-3 p-0">
      {facts.map((fact) => (
        <li
          key={fact}
          className={`font-radio text-[15px] leading-[1.55] tracking-[0.01em] ${
            muted ? "text-[#585d67]" : "text-[#3a3a3a]"
          }`}
        >
          {fact}
        </li>
      ))}
    </ul>
  );
}

function ProjectPreviewImage({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}: {
  imageSrc: string;
  imageAlt?: string;
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <div className="w-full max-w-[300px]">
      <Image
        src={imageSrc}
        alt={imageAlt ?? ""}
        width={imageWidth}
        height={imageHeight}
        className="h-auto w-full"
        sizes="300px"
        unoptimized
      />
    </div>
  );
}

export function MobileProjectSection({ chip }: { chip: BioChip }) {
  if (chip.annotation.kind !== "facts") return null;

  const annotation: FactsAnnotation = chip.annotation;
  const navigable = isProjectNavigable(chip);
  const showPreview = navigable && Boolean(annotation.imageSrc);

  return (
    <section className="flex flex-col">
      <ProjectTitleRow chip={chip} href={annotation.href} navigable={navigable} />

      <div className="mt-4 flex flex-col">
        {showPreview ? (
          <>
            <ProjectPreviewImage
              imageSrc={annotation.imageSrc!}
              imageAlt={annotation.imageAlt}
              imageWidth={annotation.imageWidth ?? 2600}
              imageHeight={annotation.imageHeight ?? 1704}
            />
            <div className="mt-5">
              <ProjectFacts facts={annotation.facts} muted={false} />
            </div>
          </>
        ) : (
          <ProjectFacts facts={annotation.facts} muted />
        )}
      </div>
    </section>
  );
}
