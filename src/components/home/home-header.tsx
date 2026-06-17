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
      {site.resumeLabel}
      <ExternalLink className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
    </>
  );
}

function ResumeButton() {
  const className =
    "inline-flex shrink-0 items-center gap-2 rounded-[4px] bg-white px-[20px] py-[12px] text-base font-normal leading-[1.3] tracking-[0.00875rem] text-[#151414]";

  if (site.resumeUrl) {
    return (
      <Link
        href={site.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} transition-opacity hover:opacity-80`}
      >
        <ResumeButtonLabel />
      </Link>
    );
  }

  return (
    <button type="button" disabled className={`${className} cursor-not-allowed opacity-60`}>
      <ResumeButtonLabel />
    </button>
  );
}

export function HomeHeader() {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex max-w-[410px] flex-col gap-[10px]">
        <h1 className="font-mono text-[30px] font-semibold leading-none tracking-[0.0375rem] text-white lowercase">
          {site.name}
        </h1>
        <p className="text-base font-normal leading-[1.4] tracking-[0.01rem] text-[#d5d5d5]">
          {site.bio.lead}
          {site.bio.contact}
          <BioContactLinks />
        </p>
      </div>
      <ResumeButton />
    </header>
  );
}
