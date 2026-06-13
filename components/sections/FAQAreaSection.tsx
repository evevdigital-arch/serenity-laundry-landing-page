"use client";
import { useState } from "react";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
interface FAQAreaSectionProps {}
const faqs = [
  { q: "Berapa minimal order antar-jemput?", a: "Gratis antar jemput untuk minimal 10kg. Di bawah itu dikenakan flat rate ongkir." },
  { q: "Bagaimana cara klaim garansi?", a: "Cukup sertakan foto bagian yang kurang bersih via WA maksimal 1x24 jam setelah cucian diterima." },
  { q: "Batas waktu layanan Express?", a: "Pesanan masuk maksimal jam 12 siang untuk selesai di hari yang sama." },
  { q: "Jenis pakaian apa saja yang bisa dicuci?", a: "Laundry kiloan reguler, express, cuci setrika, setrika saja, jas, sepatu, tas, bed cover, dan kebutuhan B2B seperti guest house atau homestay." },
];
export default function FAQAreaSection({}: FAQAreaSectionProps) { const [open, setOpen] = useState(0); return <section id="area-faq" className="bg-slate-50 py-20 md:py-32"><Container><div className="grid gap-10 lg:grid-cols-2"><FadeUp><p className="font-jakarta text-label font-bold uppercase tracking-[0.08em] text-primary">Area Layanan & FAQ</p><h2 className="mt-4 font-jakarta text-h2 font-semibold">Kami melayani Jogja Raya dengan cakupan jelas.</h2><p className="mt-5 text-bodylg text-text-soft">Area antar-jemput: Sleman, Kota Jogja, dan Bantul bagian utara.</p><div className="mt-8 flex flex-wrap gap-3">{['Sleman','Kota Jogja','Bantul (Utara)'].map((a) => <span key={a} className="rounded-full bg-white px-5 py-3 font-jakarta text-sm font-bold text-primary shadow-sm">{a}</span>)}</div>{/* NOTE: PRD belum mengonfirmasi tarif antar-jemput di bawah 10kg dan detail area Bantul selain bagian utara. */}</FadeUp><div className="space-y-3">{faqs.map((f, i) => <div key={f.q} className="rounded-3xl border border-border bg-white"><button className="flex min-h-14 w-full items-center justify-between px-6 py-4 text-left font-jakarta font-semibold" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{f.q}</span><span>{open === i ? '−' : '+'}</span></button>{open === i && <p className="px-6 pb-5 text-body text-text-soft">{f.a}</p>}</div>)}</div></div></Container></section>; }
