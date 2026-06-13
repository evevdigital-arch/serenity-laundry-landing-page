export default function MeshGradient() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent-1/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-accent-2/10 blur-3xl" />
    </div>
  );
}
