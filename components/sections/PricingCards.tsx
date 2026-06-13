import Container from "@/components/layout/Container";
import StaggerGrid from "@/components/animations/StaggerGrid";
import WAButton from "@/components/ui/WAButton";
interface PricingCardsProps { waLink: string; }
const plans = [
  { title: "Kiloan Reguler", price: "Rp7.000", unit: "/kg", features: ["1 Mesin 1 Pelanggan", "Setrika Rapi", "Parfum Premium"] },
  { title: "Express Same Day", price: "Rp12.000", unit: "/kg", features: ["Selesai di hari yang sama", "Prioritas Mesin", "Antar-Jemput"] },
  { title: "Satuan / Spesial", price: "Hubungi", unit: "CS", features: ["Sepatu & Tas", "Jas & Gaun", "Bed Cover"] },
  { title: "B2B Laundry", price: "Hubungi", unit: "CS", features: ["Guest house", "Homestay", "Klinik & Salon"] },
];
export default function PricingCards({ waLink }: PricingCardsProps) { return <section id="harga" className="bg-slate-50 py-20 md:py-32"><Container><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="font-jakarta text-label font-bold uppercase tracking-[0.08em] text-primary">Daftar Harga & Layanan</p><h2 className="mt-4 font-jakarta text-h2 font-semibold">Harga transparan, tanpa biaya tersembunyi.</h2></div><WAButton href={waLink} variant="blue">Tanya Detail Harga via WA</WAButton></div><StaggerGrid className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" itemClassName=".price-item">{plans.map((plan) => <article key={plan.title} className="price-item hover-lift flex flex-col rounded-[2rem] border border-border bg-white p-7"><h3 className="font-jakarta text-h3 font-semibold">{plan.title}</h3><div className="mt-6"><span className="font-jakarta text-h2 font-semibold text-primary">{plan.price}</span><span className="text-text-soft"> {plan.unit}</span></div><ul className="mt-6 space-y-3 text-body text-text-soft">{plan.features.map((f) => <li key={f}>✓ {f}</li>)}</ul></article>)}</StaggerGrid></Container></section>; }
