"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export default function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reduceMotion || !sectionRef.current || !trackRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // use sectionRef.offsetWidth so it works perfectly inside a constrained Container
        const distance = trackRef.current!.scrollWidth - sectionRef.current!.offsetWidth;
        if (distance <= 0) return;

        gsap.to(trackRef.current, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${distance}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [reduceMotion] }
  );

  return (
    <div ref={sectionRef} className={`overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:w-max md:gap-8 md:overflow-visible md:will-change-transform no-scrollbar"
      >
        {children}
      </div>
    </div>
  );
}
