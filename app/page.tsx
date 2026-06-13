import HeroSection from "@/components/sections/HeroSection";
import AuthorityStrip from "@/components/sections/AuthorityStrip";
import PASSection from "@/components/sections/PASSection";
import BentoGridFeatures from "@/components/sections/BentoGridFeatures";
import PricingCards from "@/components/sections/PricingCards";
import PromoBanner from "@/components/sections/PromoBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQAreaSection from "@/components/sections/FAQAreaSection";
import TestimonialGallery from "@/components/sections/TestimonialGallery";
import FinalCTA from "@/components/sections/FinalCTA";
import StickyBottomCTA from "@/components/ui/StickyBottomCTA";
import Marquee from "@/components/ui/Marquee";

const WA_NUMBER = "6281234567890"; // Dummy number
const WA_MESSAGE = encodeURIComponent(`Halo Admin Serenity Laundry, 
Saya lihat promo dari website dan mau pesan layanan antar-jemput.
Nama: 
Lokasi Penjemputan: 
Jenis Laundry: (Kiloan/Express/Satuan)`);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Page() {
  return (
    <main>
      <HeroSection waLink={WA_LINK} />
      <AuthorityStrip />
      <Marquee items={["Bersih", "Harum", "Garansi", "Cepat", "Antar-Jemput", "Praktis", "Terpisah"]} />
      <PASSection />
      <BentoGridFeatures />
      <PricingCards waLink={WA_LINK} />
      <PromoBanner waLink={WA_LINK} />
      <ProcessSteps />
      <FAQAreaSection />
      <TestimonialGallery />
      <FinalCTA waLink={WA_LINK} />
      <StickyBottomCTA waLink={WA_LINK} ctaText="Pesan Antar-Jemput WA" />
    </main>
  );
}
