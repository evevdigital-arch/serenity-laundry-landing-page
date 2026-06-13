"use client";
import { ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
interface FadeUpProps { children: ReactNode; className?: string; delay?: number; }
export default function FadeUp({ children, className = "", delay = 0 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null); const reduced = useReducedMotion();
  useGSAP(() => { if (reduced || !ref.current) return; gsap.from(ref.current, { y: 40, opacity: 0, duration: 0.8, delay, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } }); }, { scope: ref, dependencies: [reduced, delay] });
  return <div ref={ref} className={className}>{children}</div>;
}
