"use client";
import { ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";
interface ParallaxLayerProps { children: ReactNode; className?: string; speed?: number; }
export default function ParallaxLayer({ children, className = "", speed = -40 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null); const mobile = useIsMobile(); const reduced = useReducedMotion();
  useGSAP(() => { if (mobile || reduced || !ref.current) return; gsap.to(ref.current, { y: speed, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true } }); }, { scope: ref, dependencies: [mobile, reduced, speed] });
  return <div ref={ref} className={className}>{children}</div>;
}
