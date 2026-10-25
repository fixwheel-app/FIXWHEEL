function CheckIcon() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function PaymentTrustRow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`payment-trust-row flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] font-semibold text-white/80 max-[560px]:flex-col max-[560px]:items-start ${className}`.trim()}
      aria-label="Payment benefits"
      style={{ marginTop: "10px" }}
    >
      <span className="inline-flex items-center gap-1.5"><CheckIcon />Pay after service</span>
      <span className="inline-flex items-center gap-1.5"><CheckIcon />No advance payment</span>
    </div>
  );
}
