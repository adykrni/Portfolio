"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { FocusParagraph } from "@/components/focus-mode";
import { TimelineItem } from "@/components/timeline-item";
import { projects } from "@/content/portfolio";

/** Distance from bottom of viewport to the reference scan line (markers crossing upward start/extend the rail). */
const VIEWPORT_REF_FROM_BOTTOM = 0.02;

function markerCenterYViewport(el: Element): number {
  const r = el.getBoundingClientRect();
  return r.top + r.height / 2;
}

/** True when any part of the element intersects the visual viewport. */
function intersectsViewport(el: Element): boolean {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  return r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw;
}

export function ProjectTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  /** Once the first marker has intersected the viewport, keep drawing the rail (do not hide when it scrolls away). */
  const railUnlockedRef = useRef(false);

  const updateRailHeight = useCallback(() => {
    const listEl = listRef.current;
    if (!listEl) return;

    const markers = listEl.querySelectorAll<HTMLElement>(
      ":scope > .timeline__item .timeline__marker",
    );
    if (markers.length === 0) {
      listEl.style.removeProperty("--timeline-rail-top");
      listEl.style.setProperty("--timeline-rail-height", "0px");
      return;
    }

    if (intersectsViewport(markers[0])) {
      railUnlockedRef.current = true;
    }

    if (!railUnlockedRef.current) {
      listEl.style.removeProperty("--timeline-rail-top");
      listEl.style.setProperty("--timeline-rail-height", "0px");
      return;
    }

    const mY = Array.from(markers, markerCenterYViewport);
    const listRect = listEl.getBoundingClientRect();
    const startRel = mY[0] - listRect.top;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let tipViewportY: number;
    if (reduceMotion || mY.length === 1) {
      tipViewportY = mY[mY.length - 1];
    } else {
      const refY =
        window.innerHeight * (1 - VIEWPORT_REF_FROM_BOTTOM);
      const span = mY[mY.length - 1] - mY[0];
      const t = Math.min(1, Math.max(0, span !== 0 ? (refY - mY[0]) / span : 0));
      tipViewportY = mY[0] + t * span;
    }

    const tipRel = tipViewportY - listRect.top;
    let heightPx = Math.max(0, Math.round(tipRel - startRel));

    if (mY.length > 1 && !reduceMotion) {
      const m0r = markers[0].getBoundingClientRect();
      const stubBelowFirst = m0r.bottom + 2;
      const minHPx = Math.max(
        1,
        Math.round(stubBelowFirst - listRect.top - startRel),
      );
      // Until the tip moves past the first square, keep at least a stub visible (center → past bottom); otherwise the rail is fully under the marker.
      if (tipViewportY <= stubBelowFirst) {
        heightPx = Math.max(heightPx, minHPx);
      }
    }

    listEl.style.setProperty("--timeline-rail-top", `${Math.round(startRel)}px`);
    listEl.style.setProperty("--timeline-rail-height", `${heightPx}px`);
  }, []);

  useLayoutEffect(() => {
    updateRailHeight();
  }, [updateRailHeight]);

  useEffect(() => {
    let frame = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => updateRailHeight());
    };
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(onScrollOrResize)
        : null;
    if (scrollRef.current && ro) ro.observe(scrollRef.current);
    if (listRef.current && ro) ro.observe(listRef.current);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ro?.disconnect();
    };
  }, [updateRailHeight]);

  return (
    <section
      className="timeline section"
      aria-labelledby="timeline-heading"
    >
      <h2 id="timeline-heading" className="sr-only">
        Selected work
      </h2>
      <div className="timeline__scroll" ref={scrollRef}>
        <ol className="timeline__list" ref={listRef}>
          {projects.map((project) => (
            <TimelineItem key={project.id}>
              <article className="timeline__card">
                <div className="timeline__header">
                  <span className="timeline__marker" aria-hidden />
                  <h3 className="timeline__title">{project.title}</h3>
                </div>
                <div className="timeline__body">
                  {project.paragraphs.map((segments, i) => (
                    <FocusParagraph
                      key={`${project.id}-${i}`}
                      segments={segments}
                      className="timeline__p timeline__p--focusable"
                    />
                  ))}
                </div>
              </article>
            </TimelineItem>
          ))}
        </ol>
      </div>
    </section>
  );
}
