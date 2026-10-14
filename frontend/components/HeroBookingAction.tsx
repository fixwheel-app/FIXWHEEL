import type { ReactNode } from "react";

interface HeroBookingActionProps {
  children: ReactNode;
  className?: string;
}

export default function HeroBookingAction({ children, className = "" }: HeroBookingActionProps) {
  return (
    <div className={`flex w-full flex-col items-center gap-2 sm:w-auto ${className}`.trim()}>
      {children}
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
        Pay after service
      </span>
    </div>
  );
}
