"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
export default function CustomCursor() {
  const mobile = useIsMobile(); const x = useMotionValue(-100); const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 }); const sy = useSpring(y, { stiffness: 500, damping: 40 }); const enabled = useRef(false);
  useEffect(() => {
    enabled.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches && !mobile;
    document.documentElement.classList.toggle("has-custom-cursor", enabled.current);
    const move = (e: PointerEvent) => { if (!enabled.current) return; x.set(e.clientX - 12); y.set(e.clientY - 12); };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); document.documentElement.classList.remove("has-custom-cursor"); };
  }, [mobile, x, y]);
  if (mobile) return null;
  return <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-6 w-6 rounded-full bg-white mix-blend-difference md:block" style={{ x: sx, y: sy }} />;
}
