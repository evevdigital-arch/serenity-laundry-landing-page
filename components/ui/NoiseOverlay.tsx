interface NoiseOverlayProps { opacity?: number; blendMode?: "overlay" | "soft-light" | "multiply"; }

export default function NoiseOverlay({ opacity = 0.03, blendMode = "overlay" }: NoiseOverlayProps) {
  const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.45"/></svg>`);
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9998]"
      style={{ opacity, mixBlendMode: blendMode, backgroundImage: `url("data:image/svg+xml,${svg}")` }}
    />
  );
}
