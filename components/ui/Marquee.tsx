interface MarqueeProps { items: string[]; }
export default function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-white py-4" aria-label="Keunggulan Serenity Laundry">
      <div className="flex w-max animate-marquee gap-8 pr-8 will-change-transform">
        {loop.map((item, index) => <span key={`${item}-${index}`} className="font-jakarta text-label uppercase text-text-soft">{item}</span>)}
      </div>
    </div>
  );
}
