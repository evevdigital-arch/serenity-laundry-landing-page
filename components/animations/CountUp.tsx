"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
interface CountUpProps { value: number; suffix?: string; decimals?: number; className?: string; }
export default function CountUp({ value, suffix = "", decimals = 0, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null); const reduced = useReducedMotion();
  useGSAP(() => { if (!ref.current) return; if (reduced) { ref.current.textContent = `${value.toFixed(decimals)}${suffix}`; return; } const obj = { n: 0 }; gsap.to(obj, { n: value, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 90%" }, onUpdate: () => { if (ref.current) ref.current.textContent = `${obj.n.toFixed(decimals)}${suffix}`; } }); }, { scope: ref, dependencies: [reduced, value, suffix, decimals] });
  return <span ref={ref} className={className}>{value.toFixed(decimals)}{suffix}</span>;
}
