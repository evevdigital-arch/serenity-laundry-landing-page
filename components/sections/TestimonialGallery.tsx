import Image from "next/image";
import Container from "@/components/layout/Container";
import HorizontalScroll from "@/components/animations/HorizontalScroll";
interface TestimonialGalleryProps {}
const items = [
  { src: "/images/tim-serenity.webp", alt: "Tim profesional Serenity Laundry Jogja", title: "Tim Serenity Laundry" },
  { src: "/images/layanan-cuci-sepatu.webp", alt: "Before after cuci sepatu Serenity Laundry Sleman", title: "Before-after sepatu/tas" },
  { src: "/images/hasil-cucian-rapi.webp", alt: "Foto hasil lipatan baju rapi Serenity Laundry Yogyakarta", title: "Lipatan rapi dan harum" },
  { src: "/images/proses-cuci.webp", alt: "Proses cuci 1 mesin 1 pelanggan Serenity Laundry", title: "1 Mesin 1 Pelanggan" }
];
export default function TestimonialGallery({}: TestimonialGalleryProps) { return <section className="bg-white py-20 md:py-32"><Container><div className="mb-12 max-w-2xl"><p className="font-jakarta text-label font-bold uppercase tracking-[0.08em] text-primary">Testimoni & Before-After</p><h2 className="mt-4 font-jakarta text-h2 font-semibold">Bukti hasil cucian dan respons yang bisa dipercaya.</h2><p className="mt-4 text-bodylg text-text-soft">Gunakan screenshot WA asli pelanggan, video pendek, dan foto before-after dari aset Serenity Laundry.</p></div></Container><Container><HorizontalScroll className="md:min-h-[520px]">{items.map((item) => <article key={item.title} className="min-w-[82vw] rounded-[2rem] border border-border bg-slate-50 p-4 md:min-w-[360px]"><div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white"><Image src={item.src} alt={item.alt} width={800} height={1000} loading="lazy" className="h-full w-full object-cover" /></div><h3 className="mt-5 font-jakarta text-h3 font-semibold">{item.title}</h3></article>)}</HorizontalScroll></Container></section>; }
