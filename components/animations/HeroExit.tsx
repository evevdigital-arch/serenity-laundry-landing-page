"use client";
import { ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
interface HeroExitProps { children: ReactNode; className?: string; }
export default function HeroExit({ children, className = "" }: HeroExitProps) {
  const ref = useRef<HTMLDivElement>(null); const reduced = useReducedMotion();
  useGSAP(() => { if (reduced || !ref.current) return; gsap.to(ref.current, { scale: 0.965, opacity: 0.92, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true } }); }, { scope: ref, dependencies: [reduced] });
  return <div ref={ref} className={className}>{children}</div>;
}
