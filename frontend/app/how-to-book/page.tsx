import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { completePageMetadata } from "@/lib/seoMetadata";

const canonical = "https://www.fixwheel.app/how-to-book";
const description = "Learn how to book FixWheel doorstep bike and scooter service online. Choose your vehicle, select the right service, schedule a slot, and pay after approved work.";

export const metadata: Metadata = completePageMetadata({
  title: "How to Book Doorstep Bike Service | FixWheel",
  description,
  keywords: [
    "how to book bike service online",
    "doorstep bike service booking",
    "book bike mechanic near me",
    "online two wheeler service booking",
    "scooter service at home booking",
    "doorstep bike repair Delhi NCR",
    "FixWheel booking process",
  ],
  alternates: { canonical },
  openGraph: {
    title: "How to Book Doorstep Bike Service | FixWheel",
    description,
    url: canonical,
    siteName: "FixWheel",
    type: "website",
    images: [
      {
        url: "https://www.fixwheel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FixWheel doorstep two-wheeler service booking guide",
      },
    ],
  },
});

const bookingSteps = [
  {
    title: "Choose your vehicle",
    text: "Select electric or non-electric, then choose the brand, model, and engine-capacity range. If your vehicle is not listed, choose Other and enter the details at checkout.",
    icon: Bike,
  },
  {
    title: "Pick the right service",
    text: "Compare the available service cards for your vehicle. Choose routine maintenance, service with engine oil, a repair package, or start with diagnosis when the fault is unclear.",
    icon: Wrench,
  },
  {
    title: "Add your location and slot",
    text: "Enter your contact details, city, full address, preferred date, and available time. Add a short symptom note so the mechanic knows what to inspect first.",
    icon: CalendarDays,
  },
  {
    title: "Review and confirm",
    text: "Check the selected vehicle, service, estimated price, address, and time before confirming. No advance payment is collected while you complete the form.",
    icon: ClipboardCheck,
  },
];

const faqs = [
  {
    q: "Can I book a mechanic if I do not know what is wrong?",
    a: "Yes. Choose the doorstep diagnosis option. A mechanic checks the reported symptoms, explains the likely fault, and quotes any repair separately before work begins.",
  },
  {
    q: "What details should I keep ready before booking?",
    a: "Keep the vehicle brand, model, engine-capacity range, full service address, preferred date, and a short description of the issue ready.",
  },
  {
    q: "Can I enter a brand or model that is not in the list?",
    a: "Yes. Select Other Brand or Other Model. The checkout form will ask you to enter the actual brand and model before you confirm the booking.",
  },
  {
    q: "When do I pay for the service?",
    a: "FixWheel follows pay after service. Review the completed approved work first, then pay by the available payment method.",
  },
];

export default function HowToBookPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to book FixWheel doorstep two-wheeler service",
        description,
        step: bookingSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.text,
          url: `${canonical}#step-${index + 1}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" },
          { "@type": "ListItem", position: 2, name: "How to Book", item: canonical },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <div className="site-breadcrumb-bar border-b border-white/10 bg-[#111214] py-3">
        <div className="mx-auto max-w-6xl px-4">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "How to Book" }]} />
        </div>
      </div>

      <section className="overflow-hidden bg-[#17181a] text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h1 className="max-w-4xl font-oswald text-4xl font-black uppercase leading-[1.05] tracking-[-0.025em] sm:text-5xl md:text-6xl">
              How to book a doorstep two-wheeler service
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Choose your bike or scooter, compare the right service, select a convenient slot, and confirm your address. FixWheel then coordinates a verified mechanic for your location.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-[#e62b2b] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start your booking <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-13 items-center justify-center rounded-lg border border-white/25 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-white/60 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Compare services
              </Link>
            </div>
          </div>

          <aside className="border-y border-white/15 py-7 lg:border-y-0 lg:border-l lg:py-2 lg:pl-10" aria-label="What you need to book">
            <h2 className="font-oswald text-2xl font-bold uppercase">Keep these details ready</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              {[
                "Vehicle brand, model, and engine-capacity range",
                "The symptom or service you need",
                "Complete address and a nearby landmark",
                "Preferred date and available time slot",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff4545]" aria-hidden="true" />
                  <span className="leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="font-oswald text-3xl font-black uppercase tracking-[-0.02em] md:text-5xl">Book online in four clear steps</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            The booking form shows only the services available for the vehicle type and engine-capacity range you select.
          </p>
        </div>

        <ol className="mt-12 border-t border-slate-200">
          {bookingSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                id={`step-${index + 1}`}
                key={step.title}
                className="grid gap-5 border-b border-slate-200 py-8 md:grid-cols-[5rem_3rem_1fr] md:items-start md:gap-8"
              >
                <span className="font-oswald text-4xl font-black tabular-nums text-[#e62b2b]">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-black text-slate-950 md:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-base md:leading-7">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="bg-slate-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 className="font-oswald text-3xl font-black uppercase tracking-[-0.02em] md:text-4xl">Choose the service that matches the job</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A clear service choice helps the mechanic prepare the right tools. If the fault is unclear, start with diagnosis instead of guessing a repair.
              </p>
              <Link href="/services" className="mt-6 inline-flex items-center gap-2 font-bold text-[#d92323] underline decoration-2 underline-offset-4">
                View every FixWheel service <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="divide-y divide-slate-300 border-y border-slate-300">
              {[
                { icon: Search, title: "Diagnosis", text: "Choose this when you know the symptom but not the fault.", href: "/services/diagnosis" },
                { icon: ShieldCheck, title: "General service", text: "Choose this for scheduled checks, adjustments, cleaning, and lubrication.", href: "/services/basic-service" },
                { icon: Wrench, title: "Service with engine oil", text: "Choose this when periodic maintenance also needs sealed engine oil and filter replacement.", href: "/services/service-engine-oil" },
              ].map(({ icon: Icon, title, text, href }) => (
                <Link key={title} href={href} className="grid gap-4 py-6 sm:grid-cols-[2.75rem_1fr_auto] sm:items-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#d92323]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-lg font-black text-slate-950">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">{text}</span>
                  </span>
                  <ArrowRight className="hidden h-5 w-5 text-slate-500 sm:block" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <h2 className="font-oswald text-3xl font-black uppercase tracking-[-0.02em] md:text-4xl">What happens after confirmation</h2>
          <div className="mt-8 space-y-7">
            {[
              { icon: Clock3, title: "Booking details are checked", text: "FixWheel reviews the vehicle, service, address, and preferred slot before coordinating the visit." },
              { icon: MapPin, title: "A mechanic is assigned for your area", text: "The mechanic receives the service location and the issue details you entered." },
              { icon: ShieldCheck, title: "You approve the work", text: "The mechanic explains additional labor or parts before starting anything outside the selected package." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-[#d92323]" aria-hidden="true" />
                <div>
                  <h3 className="font-black text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-oswald text-3xl font-black uppercase tracking-[-0.02em] md:text-4xl">Booking questions</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none pr-8 font-bold text-slate-950 marker:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17181a] py-14 text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-oswald text-3xl font-black uppercase md:text-4xl">Ready to book your doorstep service?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
              Service is available across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#e62b2b] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Choose your vehicle <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
