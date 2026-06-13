"use client";

import { useEffect, useState } from "react";
import WAButton from "./WAButton";
interface StickyBottomCTAProps { waLink: string; ctaText: string; }
export default function StickyBottomCTA({ waLink, ctaText }: StickyBottomCTAProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[9996] bg-white/90 px-5 pt-3 shadow-[0_-20px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-transform duration-300 md:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))" }}
    >
      <WAButton href={waLink} className="w-full">{ctaText}</WAButton>
    </div>
  );
}
