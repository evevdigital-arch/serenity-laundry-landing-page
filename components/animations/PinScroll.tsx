"use client";
import { ReactNode, useRef } from "react";
import { ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";
interface PinScrollProps { children: ReactNode; className?: string; }
export default function PinScroll({ children, className = "" }: PinScrollProps) {
  const ref = useRef<HTMLDivElement>(null); const mobile = useIsMobile(); const reduced = useReducedMotion();
  useGSAP(() => { if (mobile || reduced || !ref.current) return; const st = ScrollTrigger.create({ trigger: ref.current, start: "top top", end: "+=80%", pin: true }); return () => st.kill(); }, { scope: ref, dependencies: [mobile, reduced] });
  return <div ref={ref} className={className}>{children}</div>;
}
