"use client";
import { ReactNode, useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
interface SplitTextRevealProps { children: ReactNode; className?: string; as?: "h1" | "h2" | "p"; }
export default function SplitTextReveal({ children, className = "", as: Tag = "h1" }: SplitTextRevealProps) {
  const ref = useRef<HTMLElement>(null); const reduced = useReducedMotion();
  useGSAP(() => { if (reduced || !ref.current) return; const split = new SplitText(ref.current, { type: "lines,words" }); gsap.from(split.words, { yPercent: 105, opacity: 0, duration: 0.9, stagger: 0.035, ease: "power3.out" }); return () => split.revert(); }, { scope: ref, dependencies: [reduced] });
  return <Tag ref={ref as never} className={className}>{children}</Tag>;
}
