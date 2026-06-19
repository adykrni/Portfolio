import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { site } from "@/lib/content";

function BioContactLinks() {
  return (
    <>
      <a
        href={site.links.twitter}
        className="underline decoration-solid underline-offset-auto"
      >
        twitter
      </a>
      {" or "}
      <a
        href={site.links.mail}
        className="underline decoration-solid underline-offset-auto"
      >
        mail
      </a>
      .
    </>
  );
}

function ResumeButtonLabel() {
  return (
    <>
      <span className="md:hidden">{site.resumeLabelMobile}</span>
      <span className="hidden md:inline">{site.resumeLabel}</span>
      <ExternalLink
        className="size-3.5 shrink-0 md:size-3.5"
        strokeWidth={1.75}
        aria-hidden
      />
    </>
  );
}

function ResumeButton() {
  const className =
    "inline-flex shrink-0 items-center gap-2 rounded-[6px] p-2.5 text-sm font-normal leading-none tracking-[0.00875rem] text-[#f6fafa] transition-opacity hover:opacity-80 md:rounded-[4px] md:bg-white md:px-5 md:py-3 md:text-base md:leading-[1.3] md:text-[#151414]";

  if (site.resumeUrl) {
    return (
      <Link
        href={site.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <ResumeButtonLabel />
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled
      className={`${className} cursor-not-allowed opacity-60`}
    >
      <ResumeButtonLabel />
    </button>
  );
}

export function HomeHeader() {
  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div className="flex max-w-[410px] flex-col gap-[10px]">
        <h1 className="font-mono text-2xl font-semibold leading-none tracking-[0.03rem] text-white lowercase md:text-[30px] md:tracking-[0.0375rem]">
          {site.name}
        </h1>
        <p className="text-sm font-normal leading-[1.4] tracking-[0.00875rem] text-[#dadada] md:text-base md:tracking-[0.01rem] md:text-[#d5d5d5]">
          {site.bio.lead}
          {site.bio.contact}
          <BioContactLinks />
        </p>
      </div>
      <div className="md:shrink-0">
        <ResumeButton />
      </div>
    </header>
  );
}
