import Container from "@/components/layout/Container";
import WAButton from "@/components/ui/WAButton";
import FadeUp from "@/components/animations/FadeUp";
interface FinalCTAProps { waLink: string; }
export default function FinalCTA({ waLink }: FinalCTAProps) { return <section className="bg-slate-900 py-24 text-center text-white md:py-32"><Container narrow><FadeUp><h2 className="font-jakarta text-h2 font-semibold">Cucian Numpuk? Kami Siap Jemput Sekarang.</h2><p className="mx-auto mt-5 max-w-[65ch] text-bodylg text-white/70">Slot penjemputan Same Day hari ini terbatas. Hubungi kami sekarang untuk booking kurir.</p><div className="mt-8"><WAButton href={waLink}>Pesan Antar-Jemput Sekarang</WAButton></div></FadeUp></Container></section>; }
