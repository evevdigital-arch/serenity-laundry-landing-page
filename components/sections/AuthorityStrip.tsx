"use client";
import Container from "@/components/layout/Container";
import CountUp from "@/components/animations/CountUp";
import StaggerGrid from "@/components/animations/StaggerGrid";
interface AuthorityStripProps {}
const items = [
  { icon: "★", title: "Rating 4.8/5", subtitle: "Di Google Maps", count: 4.8, suffix: "/5", decimals: 1 },
  { icon: "●", title: "Ratusan Pelanggan", subtitle: "Mahasiswa & Homestay", count: 120, suffix: "+", decimals: 0 },
  { icon: "✓", title: "Garansi 100%", subtitle: "Cuci ulang gratis", count: 100, suffix: "%", decimals: 0 },
];
export default function AuthorityStrip({}: AuthorityStripProps) {
  return <section className="bg-white py-12 md:py-16"><Container><h2 className="sr-only">Bukti kepercayaan Serenity Laundry</h2><StaggerGrid className="grid gap-4 md:grid-cols-3" itemClassName=".trust-item">{items.map((item) => <div key={item.title} className="trust-item rounded-3xl border border-border bg-surface p-6 text-center md:text-left"><div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-jakarta text-primary">{item.icon}</div><h3 className="font-jakarta text-h3 font-semibold"><CountUp value={item.count} suffix={item.suffix} decimals={item.decimals} /></h3><p className="mt-1 text-body text-text-soft">{item.subtitle}</p><p className="mt-3 text-small text-text-muted">Dipercaya oleh mahasiswa dan berbagai homestay.</p></div>)}</StaggerGrid></Container></section>;
}
