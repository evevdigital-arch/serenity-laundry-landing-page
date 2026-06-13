import WAButton from "./WAButton";
interface WAFloatingProps { waLink: string; }
export default function WAFloating({ waLink }: WAFloatingProps) {
  return (
    <div className="fixed right-5 z-[9997] md:right-8" style={{ bottom: "calc(24px + env(safe-area-inset-bottom, 0px))" }}>
      <WAButton href={waLink} className="h-14 w-14 animate-wa-pulse px-0 text-xl" ariaLabel="Chat WhatsApp Serenity Laundry">WA</WAButton>
    </div>
  );
}
