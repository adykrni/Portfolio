"use client";

import { useEffect, useRef, useState } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function FadeInSection({ children, className, id }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduceMotion]);

  return (
    <div
      id={id}
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: reduceMotion ? "none" : "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}
