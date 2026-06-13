import { ReactNode } from "react";

interface ContainerProps { children: ReactNode; className?: string; narrow?: boolean; }

export default function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div className={`${narrow ? "w-full max-w-[720px] mx-auto px-5 md:px-10" : "w-full max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20"} ${className}`}>
      {children}
    </div>
  );
}
