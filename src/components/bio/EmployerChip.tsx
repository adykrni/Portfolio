"use client";

import { forwardRef } from "react";

type EmployerChipProps = {
  label: string;
  isDimmed: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

// Only a real mouse hover should auto-reveal the annotation — touch taps go
// through onClick instead. The mirrored pointerleave is what keeps hover
// scoped strictly to this chip's own hit-box, independent of the floating
// annotation itself. :focus-visible (rather than any focus) matters because
// focus fires before click on every tap, not just keyboard nav — gating on
// it is what stops a touch tap's own focus event from revealing on the same
// tap a keyboard Enter would open something on.
function handlePointerEnter(event: React.PointerEvent, onActivate: () => void) {
  if (event.pointerType === "mouse") onActivate();
}

function handlePointerLeave(event: React.PointerEvent, onDeactivate: () => void) {
  if (event.pointerType === "mouse") onDeactivate();
}

function handleFocus(event: React.FocusEvent<HTMLElement>, onActivate: () => void) {
  if (event.target.matches(":focus-visible")) onActivate();
}

export const EmployerChip = forwardRef<HTMLButtonElement, EmployerChipProps>(function EmployerChip(
  { label, isDimmed, onActivate, onDeactivate },
  ref,
) {
  const dimClass = isDimmed ? "opacity-20 blur-[3px]" : "opacity-100 blur-0";

  return (
    <button
      ref={ref}
      type="button"
      data-chip-id="accenture"
      onPointerEnter={(event) => handlePointerEnter(event, onActivate)}
      onPointerLeave={(event) => handlePointerLeave(event, onDeactivate)}
      onFocus={(event) => handleFocus(event, onActivate)}
      onBlur={onDeactivate}
      onClick={onActivate}
      className={`inline align-baseline rounded-[3px] bg-[#eee] px-[5px] pb-[3px] pt-[2px] text-[16px] leading-[inherit] tracking-[0.16px] text-foreground transition-[filter,opacity] duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${dimClass}`}
    >
      {label}
    </button>
  );
});
