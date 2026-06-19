"use client";

import Image from "next/image";

const screens = [
  {
    src: "/images/Loryn-Screen-1.png",
    alt: "Loryn AI license upgrade workflow",
  },
  {
    src: "/images/Loryn-Screen-2.png",
    alt: "Loryn AI extend account duration workflow with date selection",
  },
  {
    src: "/images/Loryn-Screen-3.png",
    alt: "Loryn AI PC health diagnosis with IT support escalation options",
  },
  {
    src: "/images/Loryn-Screen-4.png",
    alt: "Loryn AI device diagnostics permission request flow",
  },
] as const;

export function ScreenCarousel() {
  return (
    <div className="aspect-[900/523] w-full overflow-hidden rounded-[10px] bg-surface-media">
      <div className="flex h-full snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#cdd9e3]">
        {screens.map((screen) => (
          <div
            key={screen.src}
            className="relative h-full w-full shrink-0 snap-center snap-always"
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              width={3112}
              height={2004}
              unoptimized
              className="h-full w-full object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
