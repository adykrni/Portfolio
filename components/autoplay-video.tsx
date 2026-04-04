"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  className?: string;
};

/**
 * Mobile Safari often ignores the autoplay attribute; programmatic play()
 * after load (muted + playsInline) matches policy and starts reliably.
 */
export function AutoplayVideo({ src, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tryPlay = () => {
      el.muted = true;
      void el.play().catch(() => {
        /* blocked until gesture on strict modes */
      });
    };

    tryPlay();

    el.addEventListener("loadeddata", tryPlay);
    el.addEventListener("canplay", tryPlay);

    return () => {
      el.removeEventListener("loadeddata", tryPlay);
      el.removeEventListener("canplay", tryPlay);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    />
  );
}
