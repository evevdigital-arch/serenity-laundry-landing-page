import type { Metadata } from "next";
import Script from "next/script";
import { jakarta } from "./fonts";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/interactions/CustomCursor";
import WAFloating from "@/components/ui/WAFloating";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const WA_NUMBER = "6281234567890"; // Dummy number
const WA_MESSAGE = encodeURIComponent(`Halo Admin Serenity Laundry, 
Saya lihat promo dari website dan mau pesan layanan antar-jemput.
Nama: 
Lokasi Penjemputan: 
Jenis Laundry: (Kiloan/Express/Satuan)`);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export const metadata: Metadata = {
  title: "Laundry Antar Jemput Jogja Terbaik & Cepat | Serenity Laundry",
  description: "Butuh laundry terdekat di Jogja? Serenity melayani antar jemput, express same day, cuci terpisah, & bergaransi. Diskon 20% pengguna baru. Pesan sekarang!",
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL("http://localhost:3000"),
  openGraph: {
    title: "Serenity Laundry - Jasa Cuci Antar Jemput Jogja",
    description: "Layanan cuci 1 mesin 1 pelanggan, bergaransi, antar-jemput Jogja & sekitarnya.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: "Serenity Laundry",
  description: "Jasa laundry kiloan, express, dan satuan terdekat dengan layanan antar jemput di Yogyakarta.",
  url: "https://[domain-klien].com",
  telephone: WA_NUMBER,
  address: { "@type": "PostalAddress", addressLocality: "Yogyakarta", addressRegion: "DI Yogyakarta", addressCountry: "ID" },
  priceRange: "Rp 7.000 - Rp 50.000",
  openingHours: "Mo-Su 07:00-21:00",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "120" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} theme-service`}>
      <head>
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script id="ga4" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <Script id="ga4-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');` }} />
          </>
        )}
      </head>
      <body>
        <SmoothScrollProvider>
          <Navbar waLink={WA_LINK} />
          {children}
          <Footer waLink={WA_LINK} />
          <CustomCursor />
          <WAFloating waLink={WA_LINK} />
          <NoiseOverlay opacity={0.03} blendMode="overlay" />
          
          <a href="https://github.com/evevdigital-arch" target="_blank" className="evev-watermark" aria-label="Designed by evevdigital">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            evevdigital
          </a>
          <Script id="evev-watermark-console" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
            console.log("%c✨ Designed & Developed by evevdigital ✨", "color: #D4AF37; font-size: 16px; font-weight: bold; background: #0a0a0a; padding: 10px 20px; border-radius: 8px;");
            console.log("https://github.com/evevdigital-arch");
          `}} />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
