"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { site } from "@/lib/content";

type CaseStudyId = "loryn" | "deutsche-wealth" | "klm" | "audi";
type SitePageId = CaseStudyId | "resume";

const caseStudies: { id: CaseStudyId; label: string; href: string }[] = [
  { id: "loryn", label: "Loryn AI", href: "/loryn" },
  { id: "deutsche-wealth", label: "Deutsche Bank", href: "/deutsche-wealth" },
  { id: "klm", label: "KLM Holidays", href: "/klm" },
  { id: "audi", label: "Audi", href: "/audi" },
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
      className={`flex w-full items-center justify-between gap-2 rounded-[6px] p-1.5 text-sm text-foreground transition-colors ${
        disabled ? "cursor-default text-muted" : "hover:bg-surface-card"
      }`}
    >
      {label}
      {!disabled ? (
        <Image src="/icons/chevron-right.svg" alt="" width={5} height={9} aria-hidden />
      ) : null}
    </Link>
  );
}

export function FloatingSiteNav({ currentPage }: FloatingSiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const visibleCaseStudies = caseStudies.filter((study) => study.id !== currentPage);

  return (
    <div className="fixed bottom-10 right-16 z-50 flex flex-col items-end gap-3 lg:right-[94px]">
      <div
        className="grid w-[180px] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div
          className={`overflow-hidden rounded-[10px] bg-white shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] transition-opacity duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`flex flex-col gap-1 p-1 transition-[filter] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
              isOpen ? "blur-0" : "blur-[10px]"
            }`}
          >
            {visibleCaseStudies.map((study) => (
              <MenuRow key={study.id} label={study.label} href={study.href} />
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
        className="flex size-[30px] shrink-0 items-center justify-center rounded-[6px] bg-[#FF5986]"
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
            stroke="black"
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
