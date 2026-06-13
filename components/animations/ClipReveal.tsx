"use client";
import { ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
interface ClipRevealProps { children: ReactNode; className?: string; }
export default function ClipReveal({ children, className = "" }: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null); const reduced = useReducedMotion();
  useGSAP(() => { if (reduced || !ref.current) return; gsap.from(ref.current, { opacity: 0, scale: 0.96, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } }); }, { scope: ref, dependencies: [reduced] });
  return <div ref={ref} className={`overflow-hidden ${className}`}>{children}</div>;
}
