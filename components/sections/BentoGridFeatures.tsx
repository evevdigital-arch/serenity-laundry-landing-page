import Image from "next/image";
import Container from "@/components/layout/Container";
import StaggerGrid from "@/components/animations/StaggerGrid";

interface BentoGridFeaturesProps {}

const features = [
  { title: "1 Mesin 1 Pelanggan", desc: "Pakaian Anda tidak pernah dicampur dengan pelanggan lain.", large: true, bgImage: "/images/proses-cuci.webp" },
  { title: "Garansi Cuci Ulang", desc: "Kurang bersih? Kami cuci ulang tanpa biaya tambahan." },
  { title: "Estimasi Jelas", desc: "Sistem update pesanan yang transparan." },
  { title: "Antar-Jemput", desc: "Praktis, langsung dijemput di lokasi." },
];

export default function BentoGridFeatures({}: BentoGridFeaturesProps) {
  return (
    <section className="bg-white py-20 md:py-32">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="font-jakarta text-label font-bold uppercase tracking-[0.08em] text-primary">Kenapa Serenity</p>
          <h2 className="mt-4 font-jakarta text-h2 font-semibold">Bersih, harum, cepat, dan transparan dari awal.</h2>
        </div>
        <StaggerGrid className="grid gap-5 md:grid-cols-4" itemClassName=".feature-item">
          {features.map((f) => (
            <article 
              key={f.title} 
              className={`feature-item hover-lift rounded-[2rem] border border-border p-7 relative overflow-hidden flex flex-col justify-end ${
                f.large ? "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]" : "bg-slate-50 min-h-[220px]"
              }`}
            >
              {f.bgImage && (
                <>
                  <Image src={f.bgImage} alt={f.title} fill className="object-cover z-0" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </>
              )}
              <div className={`relative z-20 ${f.bgImage ? 'mt-auto' : ''}`}>
                <h3 className={`font-jakarta text-h3 font-semibold ${f.bgImage ? 'text-white' : ''}`}>{f.title}</h3>
                <p className={`mt-3 text-body ${f.bgImage ? 'text-white/90' : 'text-text-soft'}`}>{f.desc}</p>
              </div>
            </article>
          ))}
        </StaggerGrid>
      </Container>
    </section>
  );
}
