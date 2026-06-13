import Container from "@/components/layout/Container";
import StaggerGrid from "@/components/animations/StaggerGrid";
interface ProcessStepsProps {}
const steps = [
  { number: "01", title: "Pesan via WA", desc: "Tentukan jadwal dan share lokasi penjemputan." },
  { number: "02", title: "Kurir Menjemput", desc: "Kurir kami akan menimbang dan membawa pakaian Anda." },
  { number: "03", title: "Selesai & Diantar", desc: "Pakaian bersih, wangi, dan rapi diantar kembali." },
];
export default function ProcessSteps({}: ProcessStepsProps) { return <section className="bg-white py-20 md:py-32"><Container><div className="mb-12 max-w-2xl"><p className="font-jakarta text-label font-bold uppercase tracking-[0.08em] text-primary">Cara Pesan</p><h2 className="mt-4 font-jakarta text-h2 font-semibold">Tiga langkah praktis, tanpa formulir panjang.</h2></div><StaggerGrid className="grid gap-5 md:grid-cols-3" itemClassName=".step-item">{steps.map((s) => <article key={s.number} className="step-item rounded-[2rem] border border-border bg-slate-50 p-7"><p className="font-jakarta text-label font-bold text-primary">{s.number}</p><h3 className="mt-8 font-jakarta text-h3 font-semibold">{s.title}</h3><p className="mt-4 text-body text-text-soft">{s.desc}</p></article>)}</StaggerGrid></Container></section>; }
