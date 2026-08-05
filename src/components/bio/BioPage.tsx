"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { allBioChips, bioContact, bioIntro, employerChip, projects } from "@/lib/bio-content";
import { EmployerChip } from "./EmployerChip";
import { ProjectRow } from "./ProjectRow";
import { BioAnnotationLayer } from "./BioAnnotationLayer";

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
      if (chip.annotation.kind === "facts") {
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
  const isEmployerDimmed = anyActive && activeChipId !== employerChip.id;

  return (
    <div className="mx-auto w-full max-w-[520px] px-[50px] py-16 sm:px-5 sm:py-24">
      <div ref={containerRef} className="relative flex flex-col items-start gap-[30px]">
        <div className={`flex items-center gap-[10px] ${dimTransition} ${anyActive ? "opacity-20 blur-[3px]" : ""}`}>
          <AvatarDoodle />
          <p className="font-radio text-[16px] font-bold tracking-[0.16px] text-black">
            Aditya Kulkarni
          </p>
        </div>

        <p className="font-radio text-[16px] leading-[1.4] tracking-[0.16px] text-[#3a3a3a]">
          <span className={`${dimTransition} ${anyActive ? "opacity-20 blur-[3px]" : ""}`}>
            {bioIntro.before}
          </span>
          <EmployerChip
            label={employerChip.label}
            isDimmed={isEmployerDimmed}
            onActivate={() => setActiveChipId(employerChip.id)}
            onDeactivate={() => handleDeactivate(employerChip.id)}
            ref={(el) => {
              if (el) chipRefs.current.set(employerChip.id, el);
              else chipRefs.current.delete(employerChip.id);
            }}
          />
          <span className={`${dimTransition} ${anyActive ? "opacity-20 blur-[3px]" : ""}`}>
            {bioIntro.after}
          </span>
        </p>

        <p
          className={`font-radio text-[16px] leading-[1.4] tracking-[0.16px] text-[#3a3a3a] ${dimTransition} ${anyActive ? "opacity-20 blur-[3px]" : ""}`}
        >
          {bioContact.before}
          <a
            href={bioContact.resumeHref}
            target={bioContact.resumeHref !== "#" ? "_blank" : undefined}
            rel={bioContact.resumeHref !== "#" ? "noopener noreferrer" : undefined}
            aria-disabled={bioContact.resumeHref === "#" || undefined}
            onClick={bioContact.resumeHref === "#" ? (event) => event.preventDefault() : undefined}
            className={`underline decoration-solid underline-offset-2 ${bioContact.resumeHref === "#" ? "cursor-not-allowed text-[#999]" : ""}`}
          >
            {bioContact.resumeLabel}
          </a>
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

        <div className="flex w-full flex-col items-start gap-[20px]">
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
    </div>
  );
}
