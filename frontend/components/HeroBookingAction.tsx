import type { ReactNode } from "react";
import PaymentTrustRow from "@/components/PaymentTrustRow";

interface HeroBookingActionProps {
  children: ReactNode;
  className?: string;
}

export default function HeroBookingAction({ children, className = "" }: HeroBookingActionProps) {
  return (
    <div className={`flex w-full flex-col items-center gap-3 sm:w-auto ${className}`.trim()}>
      {children}
      <PaymentTrustRow className="font-mono uppercase tracking-[0.08em]" />
    </div>
  );
}
