"use client";
import { useEffect, useState } from "react";
import Container from "./Container";
import WAButton from "@/components/ui/WAButton";
interface NavbarProps { waLink: string; }
export default function Navbar({ waLink }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 80); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`fixed inset-x-0 top-0 z-[9990] transition-colors duration-300 ${scrolled ? "bg-white/80 shadow-sm backdrop-blur-xl" : "bg-transparent"}`} style={{ paddingBottom: "calc(0px + env(safe-area-inset-bottom, 0px))" }}><Container className="flex h-[60px] items-center justify-between md:h-[72px]"><a href="#" className="flex min-h-12 items-center font-jakarta text-lg font-extrabold tracking-[-0.02em] text-text">Serenity Laundry</a><nav aria-label="Navigasi utama" className="hidden items-center gap-6 text-small text-text-soft md:flex"><a href="#harga">Harga</a><a href="#area-faq">Area & FAQ</a><a href="#footer">Lokasi</a></nav><WAButton href={waLink} variant="blue" className="hidden md:inline-flex">Ambil Diskon 20%</WAButton></Container></header>;
}
