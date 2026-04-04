"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { FocusSegment } from "@/content/portfolio";

type FocusModeContextValue = {
  focused: boolean;
  toggle: () => void;
};

const FocusModeContext = createContext<FocusModeContextValue | null>(null);

export function FocusModeProvider({ children }: { children: ReactNode }) {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.focusMode = focused ? "on" : "off";
    return () => {
      delete document.documentElement.dataset.focusMode;
    };
  }, [focused]);

  const toggle = useCallback(() => {
    setFocused((f) => !f);
  }, []);

  return (
    <FocusModeContext.Provider value={{ focused, toggle }}>
      {children}
    </FocusModeContext.Provider>
  );
}

export function useFocusMode() {
  const ctx = useContext(FocusModeContext);
  if (!ctx) {
    throw new Error("useFocusMode must be used within FocusModeProvider");
  }
  return ctx;
}

export function FocusToggle() {
  const { focused, toggle } = useFocusMode();
  return (
    <button
      type="button"
      className="focus-toggle"
      onClick={toggle}
      aria-pressed={focused}
      aria-label={focused ? "Exit focus mode" : "Enable focus mode"}
    >
      {focused ? "Focus on" : "Focus"}
    </button>
  );
}

export function FocusParagraph({
  segments,
  className,
}: {
  segments: FocusSegment[];
  className?: string;
}) {
  return (
    <p className={className}>
      {segments.map((seg, i) => (
        <span
          key={i}
          className={
            seg.role === "key"
              ? "focus-segment focus-segment--key"
              : "focus-segment focus-segment--muted"
          }
        >
          {seg.text}
        </span>
      ))}
    </p>
  );
}
