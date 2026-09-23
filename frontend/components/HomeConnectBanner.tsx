import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { GooglePlayIcon } from "@/components/GooglePlayIcon";

const oswaldStyle = { fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif" };
const jetbrainsStyle = { fontFamily: "var(--font-jetbrains), ui-monospace, monospace" };

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/918745945682",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M.057 24l1.687-6.163A11.87 11.87 0 0 1 .157 11.89C.16 5.35 5.497.01 12.008.01a11.88 11.88 0 0 1 8.477 3.513A11.91 11.91 0 0 1 23.99 12c-.004 6.657-5.34 11.997-11.953 11.997a11.9 11.9 0 0 1-5.713-1.457L0 24Zm6.59-4.846a9.9 9.9 0 0 0 4.962 1.452c5.51 0 9.995-4.485 9.998-9.999a9.9 9.9 0 0 0-2.895-7.051A9.93 9.93 0 0 0 11.99 1.14C6.468 1.14 1.98 5.63 1.976 11.145a9.9 9.9 0 0 0 1.348 5.068l-.986 3.6 3.7-.971.609.312Zm12.39-5.19c-.33-.165-1.956-.967-2.257-1.077-.3-.11-.518-.165-.736.165-.218.33-.844 1.077-1.034 1.296-.19.219-.38.243-.71.078-1.748-.875-2.898-1.564-4.047-2.544-.303-.258-.082-.243.238-.752.32-.547.165-.968-.083-1.134-.247-.165-.735-.742-.936-1.297-.196-.54-.39-.465-.518-.465h-.443c-.165 0-.435.063-.663.312-.228.25-1.008 1.016-1.008 2.477 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.18 5.05 4.467.707.306 1.258.489 1.688.625.71.226 1.356.194 1.868.118.57-.085 1.956-.8 2.23-1.57.276-.77.276-1.43.194-1.57-.083-.14-.3-.223-.63-.388Z" />
      </svg>
    ),
  },
  { name: "Instagram", href: "https://www.instagram.com/fixwheel.app?igsh=ZDBqZTB1c2tsMWU1", icon: <Instagram className="h-5 w-5" /> },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61573309963156", icon: <Facebook className="h-5 w-5" /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/fixwheel-app/", icon: <Linkedin className="h-5 w-5" /> },
];

const contactItems = [
  {
    label: "Cities we serve",
    value: "Delhi NCR • 5 Cities",
    href: "#coverage",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    label: "Helpline",
    value: "+91 87459 45682",
    note: "Mon-Sun 8 AM - 9 PM",
    href: "tel:+918745945682",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    label: "Support email",
    value: "support@fixwheel.app",
    href: "mailto:support@fixwheel.app",
    icon: <Mail className="h-5 w-5" />,
  },
];

export default function HomeConnectBanner() {
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-16" aria-labelledby="home-connect-title">
      <div className="mx-auto max-w-7xl">
        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#161d26] shadow-[0_22px_60px_rgba(15,23,42,0.18)] transition-colors duration-300 hover:border-accent/40">
          <div className="h-1 bg-accent" />
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.5fr_0.9fr] lg:items-stretch lg:p-10">
            <div className="flex flex-col justify-between gap-7">
              <div>
                <p style={jetbrainsStyle} className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  Quick connect
                </p>
                <h2 id="home-connect-title" style={oswaldStyle} className="max-w-sm text-3xl font-bold leading-tight text-white md:text-4xl">
                  Service support, one tap away.
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                  Find coverage, call the team, or download FixWheel before your next ride.
                </p>
              </div>

              <div>
                <p style={jetbrainsStyle} className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Follow FixWheel
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-accent/50 hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-accent/40 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    {item.icon}
                  </span>
                  <span className="min-w-0">
                    <span style={jetbrainsStyle} className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-bold text-white sm:text-base">
                      {item.value}
                    </span>
                    {item.note && <span className="mt-0.5 block text-xs text-slate-400">{item.note}</span>}
                  </span>
                </a>
              ))}
            </div>

            <div id="app-download" className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0f151d] p-5 sm:p-6">
              <div>
                <p style={jetbrainsStyle} className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                  FixWheel in your pocket
                </p>
                <h3 style={oswaldStyle} className="mt-2 text-2xl font-bold text-white">
                  Book faster from the app.
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Service updates and doorstep support wherever you ride.
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fixwheel.customer&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center gap-3 rounded-lg border border-white/15 bg-white px-4 text-[#111820] transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label="Get FixWheel on Google Play"
                >
                  <GooglePlayIcon className="h-7 w-7 shrink-0" />
                  <span className="leading-none">
                    <span className="block text-[10px] font-medium">GET IT ON</span>
                    <span className="mt-1 block text-base font-bold">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
