"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Container from "@/components/layout/Container";
import WAButton from "@/components/ui/WAButton";
import GradientText from "@/components/ui/GradientText";
import MeshGradient from "@/components/ui/MeshGradient";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import HeroExit from "@/components/animations/HeroExit";
import MagneticButton from "@/components/interactions/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";
interface HeroSectionProps { waLink: string; }
export default function HeroSection({ waLink }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null); const reduced = useReducedMotion();
  useGSAP(() => { if (reduced || !ref.current) return; gsap.from(ref.current.querySelectorAll(".hero-seq"), { x: -40, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }); gsap.from(ref.current.querySelector(".hero-image"), { x: 60, opacity: 0, duration: 1, delay: 0.9, ease: "power3.out" }); }, { scope: ref, dependencies: [reduced] });
  return (
    <section ref={ref} className="hero-min relative overflow-hidden bg-bg pt-36 pb-16 md:pt-48 md:pb-24 lg:pt-20 lg:pb-10">
      <div className="absolute inset-0 z-0 block lg:hidden">
        <Image src="/images/hero-mobile.webp" alt="Hero Mobile Background" fill priority className="object-cover object-top opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-white/80 to-white/40" />
      </div>
      <div className="hidden lg:block">
        <MeshGradient />
      </div>
      <HeroExit className="hero-min flex items-center relative z-10">
        <Container className="grid items-center gap-12 lg:grid-cols-[55%_45%]">
          <div className="order-1 relative z-10">
            <p className="hero-seq font-jakarta text-label font-bold uppercase tracking-[0.08em] text-primary">Laundry Antar-Jemput · Yogyakarta</p>
            <SplitTextReveal className="my-6 md:my-8 font-jakarta text-display font-bold tracking-[-0.03em] text-text">Cucian Numpuk? <br className="hidden md:block" /><GradientText>Kami Jemput Cepat.</GradientText></SplitTextReveal>
            <p className="hero-seq max-w-[65ch] text-bodylg text-text-soft">Solusi laundry bersih terpisah per pelanggan. Bergaransi cuci ulang dan diantar-jemput langsung ke kos atau rumah Anda di Jogja.</p>
            <div className="hero-seq mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <MagneticButton><WAButton href={waLink}>Ambil Diskon 20% & Pesan Jemput</WAButton></MagneticButton>
              <a href="#harga" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 py-3 font-jakarta text-sm font-bold text-text-soft">Lihat Harga Transparan</a>
            </div>
            <div className="hero-seq mt-8 flex flex-wrap gap-3">
              {['Garansi Cuci Ulang','1 Mesin 1 Pelanggan','Estimasi Tepat Waktu'].map((b) => <span key={b} className="rounded-full border border-border bg-white/70 px-4 py-2 text-small text-text-soft shadow-sm">{b}</span>)}
            </div>
            <div className="hero-seq mt-8 grid max-w-md grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white p-5 shadow-card"><strong className="font-jakarta text-h3 text-text">4.8★</strong><p className="text-small text-text-soft">Dari 120 Ulasan Google</p></div>
              <div className="rounded-3xl bg-white p-5 shadow-card"><strong className="font-jakarta text-h3 text-text">Express</strong><p className="text-small text-text-soft">Layanan Same Day</p></div>
            </div>
          </div>
          <div className="hero-image hidden order-2 relative z-10 lg:block">
            <div className="relative mx-auto aspect-[5/6] max-w-[520px] overflow-hidden rounded-[2.5rem] bg-white shadow-card">
              <Image src="/images/hero-desktop.webp" alt="Kurir Serenity Laundry menjemput pakaian laundry antar jemput Jogja" width={1000} height={1200} priority={true} quality={90} className="h-full w-full object-cover" />
            </div>
          </div>
        </Container>
      </HeroExit>
    </section>
  );
}
