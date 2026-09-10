"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { site } from "@/lib/content";

type CaseStudyId = "loryn" | "deutsche-wealth" | "klm" | "audi";
type SitePageId = CaseStudyId | "resume";

const caseStudies: {
  id: CaseStudyId;
  label: string;
  href: string;
  navigable?: boolean;
}[] = [
  { id: "loryn", label: "Loryn AI", href: "/loryn" },
  { id: "deutsche-wealth", label: "Deutsche Bank", href: "/deutsche-wealth" },
  { id: "klm", label: "KLM Holidays", href: "/klm", navigable: false },
  { id: "audi", label: "Audi", href: "/audi", navigable: false },
];

const utilityLinks = [
  { id: "home", label: "Home", href: "/" },
  { id: "resume", label: "Resume", href: site.resumeUrl ?? "/resume" },
  { id: "contact", label: "Get in touch", href: site.links.mail },
] as const;

type FloatingSiteNavProps = {
  currentPage?: SitePageId;
};

function MenuRow({
  label,
  href,
  disabled = false,
}: {
  label: string;
  href: string;
  disabled?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-disabled={disabled || undefined}
      onClick={disabled ? (event) => event.preventDefault() : undefined}
      className={`flex w-full items-center justify-between gap-2 rounded-[6px] p-1.5 text-sm leading-none transition-colors ${
        disabled ? "cursor-default text-[#d0d0d0]" : "text-foreground hover:bg-surface-card"
      }`}
    >
      {label}
      <Image
        src="/icons/chevron-right.svg"
        alt=""
        width={5}
        height={9}
        aria-hidden
        className={`shrink-0 ${disabled ? "opacity-30" : ""}`}
      />
    </Link>
  );
}

export function FloatingSiteNav({ currentPage }: FloatingSiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const visibleCaseStudies = caseStudies.filter((study) => study.id !== currentPage);

  return (
    <div className="fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-3 md:left-auto md:right-16 md:translate-x-0 md:items-end lg:right-[94px]">
      <div
        className="grid w-[154px] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:w-[180px]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div
          className={`overflow-hidden rounded-[10px] border border-[#ddd] bg-[#fcfcfc] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] transition-opacity duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`flex flex-col gap-1 p-1 transition-[filter] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
              isOpen ? "blur-0" : "blur-[10px]"
            }`}
          >
            {visibleCaseStudies.map((study) => (
              <MenuRow
                key={study.id}
                label={study.label}
                href={study.href}
                disabled={study.navigable === false}
              />
            ))}

            <div className="my-1 h-px w-full bg-divider" aria-hidden />

            {utilityLinks.map((link) => (
              <MenuRow
                key={link.id}
                label={link.label}
                href={link.href}
                disabled={
                  (link.id === "resume" && currentPage === "resume") ||
                  (link.id === "home" && currentPage === undefined && false)
                }
              />
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="flex size-10 shrink-0 items-center justify-center rounded-[6px] bg-[#0E0A1F]"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className="transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <path
            d="M0 6H12M6 0V12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

/** @deprecated Use FloatingSiteNav */
export function FloatingCaseStudyNav({ currentPage }: { currentPage: CaseStudyId }) {
  return <FloatingSiteNav currentPage={currentPage} />;
}
