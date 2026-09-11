"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  allBioChips,
  bioContact,
  bioIntro,
  employerChip,
  isProjectNavigable,
  projects,
} from "@/lib/bio-content";
import { FloatingSiteNav } from "@/components/floating-nav/FloatingSiteNav";

import { BioAnnotationLayer } from "./BioAnnotationLayer";
import { MobileProjectSection } from "./MobileProjectSection";
import { ProjectRow } from "./ProjectRow";

const dimTransition =
  "transition-[filter,opacity] duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";

// Endless slow spin — purely decorative, not meant to draw the eye.
function AvatarDoodle() {
  return (
    <Image
      src="/icons/astrix.svg"
      alt=""
      width={12}
      height={12}
      aria-hidden
      className="shrink-0 animate-spin-slow"
    />
  );
}

export function BioPage() {
  const [activeChipId, setActiveChipId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Map<string, HTMLElement>>(new Map());
  const router = useRouter();

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setActiveChipId(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveChipId(null);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleOpen = useCallback(
    (chipId: string) => {
      const chip = allBioChips[chipId];
      if (isProjectNavigable(chip)) {
        router.push(chip.annotation.href);
      }
    },
    [router],
  );

  // Mouse leaving a chip's own hit-box always reverts it to default — but
  // guard against clearing a *different* chip that became active in the
  // meantime (e.g. the pointer already entered the next chip).
  const handleDeactivate = useCallback((chipId: string) => {
    setActiveChipId((current) => (current === chipId ? null : current));
  }, []);

  const anyActive = activeChipId !== null;

  return (
    <div className="mx-auto w-full max-w-[520px] px-10 pb-28 pt-16 md:px-[50px] md:py-24">
      <div ref={containerRef} className="relative flex flex-col items-start gap-5 md:gap-[30px]">
        <div className={`flex items-center gap-[10px] ${dimTransition} ${anyActive ? "opacity-20 blur-[3px]" : ""}`}>
          <AvatarDoodle />
          <p className="font-radio text-[16px] font-bold tracking-[0.16px] text-foreground">
            Aditya Kulkarni
          </p>
        </div>

        <p className="font-radio text-[16px] leading-[1.4] tracking-[0.16px] text-foreground">
          <span className={`${dimTransition} ${anyActive ? "opacity-20 blur-[3px]" : ""}`}>
            {bioIntro.before}
          </span>
          <span
            className={`inline align-baseline rounded-[3px] bg-[#eee] px-[5px] pb-[3px] pt-[2px] text-[16px] leading-[inherit] tracking-[0.16px] text-foreground transition-[filter,opacity] duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${anyActive ? "opacity-20 blur-[3px]" : ""}`}
          >
            {employerChip.label}
          </span>
          <span className={`${dimTransition} ${anyActive ? "opacity-20 blur-[3px]" : ""}`}>
            {bioIntro.after}
          </span>
        </p>

        <p
          className={`font-radio text-[16px] leading-[1.4] tracking-[0.16px] text-foreground ${dimTransition} ${anyActive ? "opacity-20 blur-[3px]" : ""}`}
        >
          {bioContact.before}
          <Link
            href={bioContact.resumeHref}
            className="underline decoration-solid underline-offset-2"
          >
            {bioContact.resumeLabel}
          </Link>
          {bioContact.afterResume}
          {bioContact.links.map((link, i) => (
            <span key={link.label}>
              <a href={link.href} className="underline decoration-solid underline-offset-2">
                {link.label}
              </a>
              {i < bioContact.links.length - 1
                ? i === bioContact.links.length - 2
                  ? ", and "
                  : ", "
                : ""}
            </span>
          ))}
          .
        </p>

        <div className="hidden w-full flex-col items-start gap-5 md:flex">
          {projects.map((chip) => (
            <ProjectRow
              key={chip.id}
              chip={chip}
              isActive={activeChipId === chip.id}
              isDimmed={anyActive && activeChipId !== chip.id}
              onActivate={() => setActiveChipId(chip.id)}
              onDeactivate={() => handleDeactivate(chip.id)}
              onOpen={() => handleOpen(chip.id)}
              ref={(el) => {
                if (el) chipRefs.current.set(chip.id, el);
                else chipRefs.current.delete(chip.id);
              }}
            />
          ))}
        </div>

        <BioAnnotationLayer
          activeChipId={activeChipId}
          chipRefs={chipRefs}
          containerRef={containerRef}
        />
      </div>

      <div className="mt-12 flex w-full flex-col divide-y divide-divider md:hidden">
        {projects.map((chip) => (
          <div key={chip.id} className="py-10 first:pt-0 last:pb-0">
            <MobileProjectSection chip={chip} />
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <FloatingSiteNav />
      </div>
    </div>
  );
}
