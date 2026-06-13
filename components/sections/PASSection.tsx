import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import StaggerGrid from "@/components/animations/StaggerGrid";
interface PASSectionProps {}
const painPoints = ["Takut pakaian kesayangan tertukar atau luntur", "Malas keluar kos/rumah untuk antar-jemput", "Sering di-PHP soal jadwal cucian selesai"];
export default function PASSection({}: PASSectionProps) { return <section className="bg-slate-50 py-16 md:py-32"><Container narrow><FadeUp><p className="font-jakarta text-label font-bold uppercase tracking-[0.08em] text-primary">Kami Mengerti Masalah Anda</p><h2 className="mt-4 font-jakarta text-h2 font-semibold">Jangan biarkan urusan cucian menyita waktu istirahat Anda.</h2><p className="mt-5 text-bodylg text-text-soft">Sering mengalami ini dengan laundry konvensional?</p></FadeUp><StaggerGrid className="mt-10 grid gap-4" itemClassName=".pain-item">{painPoints.map((p) => <div key={p} className="pain-item rounded-3xl border border-border bg-white p-6 text-body text-text-soft"><span className="mr-3 text-primary">—</span>{p}</div>)}</StaggerGrid></Container></section>; }
