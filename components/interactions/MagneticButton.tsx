"use client";
import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
interface MagneticButtonProps { children: ReactNode; className?: string; strength?: number; }
export default function MagneticButton({ children, className = "", strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null); const mobile = useIsMobile(); const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 20 }); const sy = useSpring(y, { stiffness: 240, damping: 20 });
  if (mobile) return <div className={className}>{children}</div>;
  return <motion.div ref={ref} className={className} style={{ x: sx, y: sy }} onPointerMove={(e) => { const rect = ref.current?.getBoundingClientRect(); if (!rect) return; x.set((e.clientX - rect.left - rect.width / 2) * strength); y.set((e.clientY - rect.top - rect.height / 2) * strength); }} onPointerLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>;
}
