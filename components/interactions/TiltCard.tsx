"use client";
import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
interface TiltCardProps { children: ReactNode; className?: string; }
export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null); const mobile = useIsMobile(); const rx = useMotionValue(0); const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 180, damping: 20 }); const rotateY = useSpring(ry, { stiffness: 180, damping: 20 });
  if (mobile) return <div className={className}>{children}</div>;
  return <motion.div ref={ref} className={className} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} onPointerMove={(e) => { const r = ref.current?.getBoundingClientRect(); if (!r) return; rx.set(-((e.clientY - r.top) / r.height - 0.5) * 6); ry.set(((e.clientX - r.left) / r.width - 0.5) * 6); }} onPointerLeave={() => { rx.set(0); ry.set(0); }}>{children}</motion.div>;
}
