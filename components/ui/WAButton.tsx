"use client";

import { ReactNode } from "react";

interface WAButtonProps { href: string; children: ReactNode; variant?: "green" | "blue" | "light"; className?: string; eventName?: string; ariaLabel?: string; }

export default function WAButton({ href, children, variant = "green", className = "", eventName = "wa_click_order", ariaLabel }: WAButtonProps) {
  const styles = {
    green: "bg-whatsapp text-white shadow-whatsapp hover:bg-whatsapp-hover",
    blue: "bg-primary text-white hover:bg-accent-1",
    light: "bg-white text-primary hover:bg-slate-50",
  }[variant];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => (window as unknown as { gtag?: (type: string, name: string) => void }).gtag?.("event", eventName)}
      className={`tap-scale inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 font-jakarta text-sm font-bold transition-transform duration-200 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
