"use client";

import { useFocusMode } from "@/components/focus-mode";

/** Standalone focus control; position via `.focus-switch` in globals.css (fixed top-right, responsive insets). */
export function FocusSwitch() {
  const { focused, toggle } = useFocusMode();
  return (
    <button
      type="button"
      className="focus-switch"
      role="switch"
      aria-checked={focused}
      onClick={toggle}
      aria-label="Focus mode"
    >
      <span className="focus-switch__track" aria-hidden>
        <span className="focus-switch__thumb" />
      </span>
    </button>
  );
}
