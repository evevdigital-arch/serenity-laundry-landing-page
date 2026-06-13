"use client";
import { ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
interface StaggerGridProps { children: ReactNode; className?: string; itemClassName?: string; }
export default function StaggerGrid({ children, className = "", itemClassName = ".stagger-item" }: StaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null); const reduced = useReducedMotion();
  useGSAP(() => { if (reduced || !ref.current) return; gsap.from(ref.current.querySelectorAll(itemClassName), { y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } }); }, { scope: ref, dependencies: [reduced, itemClassName] });
  return <div ref={ref} className={className}>{children}</div>;
}
