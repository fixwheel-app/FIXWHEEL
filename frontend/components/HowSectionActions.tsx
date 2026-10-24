import Link from "next/link";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.fixwheel.customer&hl=en_IN";

interface HowSectionActionsProps {
  align?: "start" | "center";
  bookingHref?: string;
  flush?: boolean;
}

export default function HowSectionActions({
  align = "start",
  bookingHref = "/book",
  flush = false,
}: HowSectionActionsProps) {
  return (
    <>
      <div
        className={`how-section-actions${align === "center" ? " how-section-actions--center" : ""}${flush ? " how-section-actions--flush" : ""}`}
        aria-label="Service booking options"
      >
        <Link className="how-section-action how-section-action--primary" href={bookingHref}>
          Book now
        </Link>
        <a
          className="how-section-action how-section-action--secondary"
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the app for 10% off
        </a>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .how-section-actions {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              gap: 12px;
              margin-top: 32px;
            }
            .how-section-actions--center {
              justify-content: center;
            }
            .how-section-actions--flush {
              margin-top: 0;
            }
            .how-section-action {
              display: inline-flex;
              min-height: 50px;
              align-items: center;
              justify-content: center;
              padding: 0 24px;
              border: 1px solid transparent;
              border-radius: 6px;
              font-family: var(--font-jetbrains), "JetBrains Mono", monospace;
              font-size: 13px;
              font-weight: 700;
              letter-spacing: 0.04em;
              line-height: 1.25;
              text-align: center;
              text-decoration: none;
              text-transform: uppercase;
              transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease, transform 180ms ease;
            }
            .how-section-action--primary {
              background: #e62b2b;
              border-color: #e62b2b;
              color: #ffffff;
            }
            .how-section-action--primary:hover {
              background: #c91f1f;
              border-color: #c91f1f;
              color: #ffffff;
              transform: translateY(-1px);
            }
            .how-section-action--secondary {
              background: #ffffff;
              border-color: #cbd5e1;
              color: #0f172a;
            }
            .how-section-action--secondary:hover {
              border-color: #0f172a;
              color: #e62b2b;
              transform: translateY(-1px);
            }
            .how-section-action:focus-visible {
              outline: 3px solid rgba(230, 43, 43, 0.28);
              outline-offset: 3px;
            }
            @media (max-width: 639px) {
              .how-section-actions {
                align-items: stretch;
                flex-direction: column;
              }
              .how-section-action {
                width: 100%;
              }
            }
          `,
        }}
      />
    </>
  );
}
