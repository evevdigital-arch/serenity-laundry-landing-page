interface GlowEffectProps { className?: string; }

export default function GlowEffect({ className = "" }: GlowEffectProps) {
  return <div aria-hidden="true" className={`pointer-events-none absolute rounded-full bg-primary/20 blur-3xl ${className}`} />;
}
