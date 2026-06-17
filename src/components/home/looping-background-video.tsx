"use client";

import { useCallback, useRef } from "react";

const CROSSFADE_SECONDS = 0.75;

type LoopingBackgroundVideoProps = {
  src: string;
  className?: string;
};

function LoopingVideoLayer({
  videoRef,
  src,
  opacityClass,
  onTimeUpdate,
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  src: string;
  opacityClass: string;
  onTimeUpdate: () => void;
}) {
  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden
      onTimeUpdate={onTimeUpdate}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${opacityClass}`}
    />
  );
}

export function LoopingBackgroundVideo({ src, className }: LoopingBackgroundVideoProps) {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<"a" | "b">("a");
  const isCrossfadingRef = useRef(false);

  const crossfade = useCallback((from: HTMLVideoElement, to: HTMLVideoElement) => {
    if (isCrossfadingRef.current) return;

    isCrossfadingRef.current = true;
    to.currentTime = 0;
    void to.play();

    to.classList.replace("opacity-0", "opacity-100");
    from.classList.replace("opacity-100", "opacity-0");

    activeRef.current = to === videoARef.current ? "a" : "b";

    window.setTimeout(() => {
      from.pause();
      isCrossfadingRef.current = false;
    }, CROSSFADE_SECONDS * 1000);
  }, []);

  const handleTimeUpdate = useCallback(
    (layer: "a" | "b") => {
      if (isCrossfadingRef.current) return;

      const active = layer === "a" ? videoARef.current : videoBRef.current;
      const inactive = layer === "a" ? videoBRef.current : videoARef.current;

      if (!active || !inactive || !active.duration) return;
      if (activeRef.current !== layer) return;
      if (active.currentTime < active.duration - CROSSFADE_SECONDS) return;

      crossfade(active, inactive);
    },
    [crossfade],
  );

  return (
    <div className={className}>
      <LoopingVideoLayer
        videoRef={videoARef}
        src={src}
        opacityClass="opacity-100"
        onTimeUpdate={() => handleTimeUpdate("a")}
      />
      <LoopingVideoLayer
        videoRef={videoBRef}
        src={src}
        opacityClass="opacity-0"
        onTimeUpdate={() => handleTimeUpdate("b")}
      />
    </div>
  );
}
