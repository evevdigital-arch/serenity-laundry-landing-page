"use client";
import { ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";
interface HorizontalScrollProps { children: ReactNode; className?: string; }
export default function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null); const track = useRef<HTMLDivElement>(null); const mobile = useIsMobile(); const reduced = useReducedMotion();
  useGSAP(() => { if (mobile || reduced || !ref.current || !track.current) return; const amount = track.current.scrollWidth - ref.current.offsetWidth; if (amount <= 0) return; gsap.to(track.current, { x: -amount, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: () => `+=${amount}`, pin: true, scrub: true } }); }, { scope: ref, dependencies: [mobile, reduced] });
  return <section ref={ref} className={`overflow-hidden ${className}`}><div ref={track} className="flex gap-5 overflow-x-auto md:overflow-visible no-scrollbar">{children}</div></section>;
}
