"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
interface CursorImageRevealProps { children: ReactNode; src: string; alt: string; }
export default function CursorImageReveal({ children, src, alt }: CursorImageRevealProps) {
  const mobile = useIsMobile(); const [pos, setPos] = useState({ x: -999, y: -999 }); const [show, setShow] = useState(false);
  if (mobile) return <>{children}</>;
  return <div onPointerMove={(e) => setPos({ x: e.clientX + 24, y: e.clientY - 90 })} onPointerEnter={() => setShow(true)} onPointerLeave={() => setShow(false)}>{children}<motion.div aria-hidden="true" className="pointer-events-none fixed z-[9995] h-44 w-36 overflow-hidden rounded-3xl shadow-card" animate={{ opacity: show ? 1 : 0, x: pos.x, y: pos.y }} transition={{ type: "spring", stiffness: 260, damping: 28 }}><Image src={src} alt={alt} width={288} height={352} loading="lazy" className="h-full w-full object-cover" /></motion.div></div>;
}
