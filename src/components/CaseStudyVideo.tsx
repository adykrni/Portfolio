type CaseStudyVideoProps = {
  src: string;
  ariaLabel: string;
  className?: string;
  /** CSS aspect-ratio value, e.g. "1580/1000". Keeps the full frame visible at any width. */
  aspectRatio?: string;
};

export function CaseStudyVideo({
  src,
  ariaLabel,
  className = "",
  aspectRatio = "1580/1000",
}: CaseStudyVideoProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio }}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={ariaLabel}
        className="absolute inset-0 h-full w-full object-contain"
      />
    </div>
  );
}
