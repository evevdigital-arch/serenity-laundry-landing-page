# Dokumentasi Bug Horizontal Scroll pada Mobile

**Tanggal:** 14 Juni 2026
**Masalah:** Komponen `HorizontalScroll` yang digunakan untuk Testimoni atau Portfolio mengalami *error* layout parah pada tampilan *mobile* (HP). Kartu-kartu di dalamnya menjadi gepeng/terjepit ke kiri, teks terpotong ke bawah secara ekstrem, dan menyisakan ruang kosong (white space) besar di sisi kanan layar.

## Akar Masalah (Root Cause)
1. **Sistem `useIsMobile()` yang rapuh:** Penggunaan *custom hook* React seperti `useIsMobile()` untuk mematikan animasi GSAP di mobile sering kali gagal memicu pembaruan ulang secara akurat saat komponen di-*render* pertama kali di server (SSR/Next.js) vs klien (browser). Ini menyebabkan GSAP tetap berjalan di *background* dan memaksakan kalkulasi `amount` yang salah pada lebar kontainer.
2. **Kalkulasi Lebar GSAP (`window.innerWidth`):** Pengurangan `track.current.scrollWidth` dengan `window.innerWidth` sangat berbahaya jika komponen `HorizontalScroll` dibungkus di dalam sebuah `<Container>` yang memiliki batas lebar maksimal (misalnya `max-w-[1200px]`) dan padding (`px-5`). GSAP mengira layarnya jauh lebih besar daripada kontainernya.
3. **Flex-Shrink Otomatis:** Meskipun sudah diberikan `w-[82vw]` (atau `min-w`), algoritma Flexbox pada browser Safari/Chrome Mobile akan berusaha memaksa semua kartu muat dalam lebar layar (karena ada 4 kartu dengan total >300vw). Ini yang menyebabkan efek "gepeng".

## Solusi (Best Practice)
Jangan menggunakan pendekatan manual dengan *hook* React untuk mendeteksi *mobile*. Gunakan langsung fitur bawaan GSAP yaitu `gsap.matchMedia()` dan manfaatkan CSS Native Scroll Snap untuk tampilan *mobile*.

### 1. Update Komponen `HorizontalScroll.tsx`
Selalu gunakan pola ini:
```tsx
"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function HorizontalScroll({ children, className = "" }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !trackRef.current) return;
      
      const mm = gsap.matchMedia();

      // HANYA JALANKAN GSAP PADA DESKTOP (>=768px)
      mm.add("(min-width: 768px)", () => {
        // GUNAKAN offsetWidth DARI sectionRef, BUKAN window.innerWidth
        const distance = trackRef.current!.scrollWidth - sectionRef.current!.offsetWidth;
        if (distance <= 0) return;

        gsap.to(trackRef.current, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${distance}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className={`overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        // Gunakan w-max pada desktop, dan snap-x pada mobile
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:w-max md:gap-8 md:overflow-visible md:will-change-transform no-scrollbar"
      >
        {children}
      </div>
    </div>
  );
}
```

### 2. Update Komponen Kartu (Item/Anak)
Setiap elemen yang dimasukkan ke dalam `HorizontalScroll` (misalnya tag `<article>`) **WAJIB** memiliki kelas berikut:
- `shrink-0`: Mencegah kartu menjadi gepeng karena flexbox.
- `snap-center` (atau `snap-start`): Memastikan kartu berhenti (*snap*) dengan rapi saat di-*scroll* menggunakan jari di HP.
- `w-[85vw]` atau `w-[82vw]`: Menentukan ukuran pasti di layar HP.

Contoh yang benar:
```tsx
<article className="w-[82vw] shrink-0 snap-center rounded-[2rem] border p-4 md:w-[360px]">
  {/* Konten Anda */}
</article>
```

---
*Catatan ini dibuat oleh AI Antigravity untuk menghindari perulangan perbaikan di proyek berikutnya.*
