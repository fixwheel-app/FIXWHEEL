"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Phone, Wrench, Clock, Award, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { getBrandLogo } from "@/lib/brandLogos";
import Breadcrumb from "@/components/Breadcrumb";
import CityServicesGrid from "@/components/CityServicesGrid";
import TwoWheelerQueryCard from "@/components/TwoWheelerQueryCard";
import HowSectionActions from "@/components/HowSectionActions";
import PaymentTrustRow from "@/components/PaymentTrustRow";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from "@/lib/publicStats";
import { getPageVariables, PageVariables, DEFAULT_PAGE_VARIABLES } from "@/lib/pageVariables";
import { SERVICE_PRICING_LIST, PRICING_CATEGORIES, DOORSTEP_SERVICE_CHARGE, hasDoorstepServiceCharge, type ServicePriceId } from "@/lib/pricingData";
import { SERVICE_DETAIL_CONTENT } from "@/lib/serviceDetailContent";
import { getCanonicalBrandSlug } from "@/lib/brandRegistry";

interface FaqItem {
  q: string;
  a: string;
}
export interface ServicePageProps {
  serviceId: string;
  category: string;
  title: string;
  lead: string;
  startingPrice: string;
  avgTime: string;
  warranty: string;
  descriptionParagraphs: string[];
  includedItems: string[];
  faqs: FaqItem[];
  keywords: string[];
  locationName?: string;
  locationSlug?: string;
  basicServiceDetails?: boolean;
}

interface ServiceBrand {
  name: string;
  slug: string;
  logo: string;
  models?: string;
}

const SUPPORTED_BRANDS: ServiceBrand[] = [
  { name: "Honda", slug: "honda", logo: getBrandLogo("Honda") },
  { name: "Hero", slug: "hero", logo: getBrandLogo("Hero") },
  { name: "Royal Enfield", slug: "royal-enfield", logo: getBrandLogo("Royal Enfield") },
  { name: "TVS", slug: "tvs", logo: getBrandLogo("TVS") },
  { name: "Bajaj", slug: "bajaj", logo: getBrandLogo("Bajaj") },
  { name: "Yamaha", slug: "yamaha", logo: getBrandLogo("Yamaha") },
  { name: "Suzuki", slug: "suzuki", logo: getBrandLogo("Suzuki") },
  { name: "KTM", slug: "ktm", logo: getBrandLogo("KTM") },
  { name: "Ola Electric", slug: getCanonicalBrandSlug("ola")!, logo: getBrandLogo("Ola Electric") },
  { name: "Ather", slug: "ather", logo: getBrandLogo("Ather") },
  { name: "Jawa", slug: "jawa", logo: getBrandLogo("Jawa") },
  { name: "Yezdi", slug: "yezdi", logo: getBrandLogo("Yezdi") },
  { name: "Aprilia", slug: "aprilia", logo: getBrandLogo("Aprilia") },
  { name: "Vespa", slug: "vespa", logo: getBrandLogo("Vespa") },
  { name: "Harley-Davidson", slug: "harley-davidson", logo: getBrandLogo("Harley-Davidson") },
  { name: "Kawasaki", slug: "kawasaki", logo: getBrandLogo("Kawasaki") },
];

const SCOOTER_BRANDS: ServiceBrand[] = [
  { name: "Honda", slug: "honda", logo: getBrandLogo("Honda"), models: "Activa, Dio, Grazia" },
  { name: "TVS", slug: "tvs", logo: getBrandLogo("TVS"), models: "Jupiter, Ntorq, Scooty Zest" },
  { name: "Suzuki", slug: "suzuki", logo: getBrandLogo("Suzuki"), models: "Access 125, Burgman Street, Avenis" },
  { name: "Hero", slug: "hero", logo: getBrandLogo("Hero"), models: "Pleasure+, Maestro, Destini, Xoom" },
  { name: "Yamaha", slug: "yamaha", logo: getBrandLogo("Yamaha"), models: "RayZR, Fascino, Aerox 155" },
  { name: "Vespa", slug: "vespa", logo: getBrandLogo("Vespa"), models: "Vespa VXL, SXL, ZX 125/150" },
  { name: "Aprilia", slug: "aprilia", logo: getBrandLogo("Aprilia"), models: "SR 125/160, SXR 125/160" },
];

const CRUISER_BRANDS: ServiceBrand[] = [
  { name: "Royal Enfield", slug: "royal-enfield", logo: getBrandLogo("Royal Enfield"), models: "Classic, Bullet, Meteor, Super Meteor, Shotgun, Thunderbird" },
  { name: "Bajaj", slug: "bajaj", logo: getBrandLogo("Bajaj"), models: "Avenger Street 160, Avenger Cruise 220, Avenger Street 220" },
  { name: "Honda", slug: "honda", logo: getBrandLogo("Honda"), models: "H'ness CB350, CB350, CB350RS" },
  { name: "Jawa", slug: "jawa", logo: getBrandLogo("Jawa"), models: "Jawa 42, Jawa 350, 42 Bobber, Perak" },
  { name: "Yezdi", slug: "yezdi", logo: getBrandLogo("Yezdi"), models: "Roadster" },
  { name: "Harley-Davidson", slug: "harley-davidson", logo: getBrandLogo("Harley-Davidson"), models: "X440, Iron 883, Street 750, Forty-Eight, Fat Boy 114" },
  { name: "Hero", slug: "hero", logo: getBrandLogo("Hero"), models: "Mavrick 440" },
  { name: "TVS", slug: "tvs", logo: getBrandLogo("TVS"), models: "Ronin 225" },
  { name: "Triumph", slug: "triumph", logo: getBrandLogo("Triumph"), models: "Bonneville T100, Bonneville T120" },
  { name: "Kawasaki", slug: "kawasaki", logo: getBrandLogo("Kawasaki"), models: "Eliminator 450, Vulcan S" },
  { name: "Benelli", slug: "benelli", logo: getBrandLogo("Benelli"), models: "Imperiale 400" },
];

const VEHICLE_TYPE_SERVICE_IDS = new Set([
  "electric-scooter-repair",
  "royal-enfield-service",
  "scooty-repair",
  "commuter-bike-service",
  "cruiser-bike-service",
  "sports-bike-service",
  "premium-bike-service",
]);

const VEHICLE_TYPE_PUBLIC_ROUTES: Record<string, string> = {
  "commuter-bike-service": "bike",
  "scooty-repair": "scooty-repair",
  "electric-scooter-repair": "electric-vehicle",
  "cruiser-bike-service": "cruiser-bike",
  "sports-bike-service": "sports-bike",
  "premium-bike-service": "premium-bike",
};

export default function ServicePageTemplate({
  serviceId,
  category,
  title,
  lead,
  startingPrice,
  avgTime,
  warranty,
  descriptionParagraphs,
  includedItems,
  faqs,
  keywords,
  locationName,
  locationSlug,
  basicServiceDetails = false,
}: ServicePageProps) {
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS.global);
  const [pageVars, setPageVars] = useState<PageVariables>({
    ...DEFAULT_PAGE_VARIABLES,
    avgTime,
    warranty,
    startingPrice,
  });

  useEffect(() => {
    getPublicStatsForCity(locationSlug || 'global').then(setStats);
    const routeKey = locationSlug ? `services/${serviceId}/${locationSlug}` : `services/${serviceId}`;
    getPageVariables(routeKey, locationSlug || 'global', {
      defaultAvgTime: avgTime,
      defaultWarranty: warranty,
      defaultPrice: startingPrice,
      useGlobalOverrides: false,
    }).then(setPageVars);
  }, [serviceId, locationSlug, avgTime, warranty, startingPrice]);

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const cleanServiceName = title
    .replace(/\s+at Doorstep.*$/i, "")
    .replace(locationName ? ` in ${locationName}` : "", "")
    .replace(/\s+in\s+(Delhi|Gurgaon|Gurugram|Noida|Faridabad|Ghaziabad).*$/i, "")
    .replace(/^Doorstep\s+/i, "")
    .trim();

  const isScootyRepair = serviceId === "scooty-repair";
  const isElectricRepair = serviceId === "electric-scooter-repair";
  const isCruiserBike = serviceId === "cruiser-bike-service";
  const isDiagnosis = serviceId === "diagnosis";
  const detail = serviceId !== "engine-repair" && serviceId !== "basic-service" ? SERVICE_DETAIL_CONTENT[serviceId] : undefined;
  const detailItems = detail?.included || includedItems;
  const detailFaqs = detail?.faqs || faqs;
  // Legacy page names do not always represent a priced catalog package.
  // Show the nearest published option explicitly as an alternative, never as this service's own rate.
  const relatedPriceId: Record<string, ServicePriceId> = {
    "oil-change": "service-engine-oil",
    "comprehensive-service": "service-engine-oil",
    "brake-repair": "disc-replacement",
  };
  const priceId = relatedPriceId[serviceId] || serviceId;
  const isRelatedPrice = priceId !== serviceId;
  const catalogService = SERVICE_PRICING_LIST.find((item) => item.id === priceId);
  const basePrice = catalogService?.prices.cc0_249;
  const visiblePrice = typeof basePrice === "number" ? `₹${basePrice.toLocaleString("en-IN")}` : null;
  const extraVisitCharge = catalogService && hasDoorstepServiceCharge(catalogService.id as ServicePriceId, basePrice);
  const relatedServiceIds: Record<string, string[]> = {
    "basic-service": ["oil-change", "brake-repair", "battery-replacement"],
    "oil-change": ["basic-service", "battery-replacement", "brake-repair"],
    "brake-repair": ["basic-service", "tyre-replacement", "battery-replacement"],
    "battery-replacement": ["basic-service", "oil-change", "brake-repair"],
    "tyre-replacement": ["brake-repair", "basic-service", "general-washing"],
    "general-washing": ["basic-service", "oil-change"],
    "engine-repair": ["oil-change", "basic-service"],
    "comprehensive-service": ["oil-change", "brake-repair"],
    "service-engine-oil": ["basic-service", "brake-repair", "battery-replacement"],
    diagnosis: ["battery-replacement", "brake-repair", "basic-service"],
    "jump-start": ["battery-replacement", "basic-service"],
    puncture: ["basic-service", "brake-repair"],
    "running-repair": ["diagnosis", "basic-service"],
    "carburetor-cleaning": ["diagnosis", "basic-service"],
    "obd-inspection": ["diagnosis", "basic-service"],
    "disc-replacement": ["brake-repair", "basic-service"],
    "chain-sprocket": ["basic-service", "oil-change"],
    "pick-drop": ["diagnosis", "basic-service"],
  };
  const relatedServices = (relatedServiceIds[serviceId] || ["basic-service", "oil-change"])
    .filter((id) => id !== serviceId);
  const primaryBookingHref = isDiagnosis
    ? "/book?package=Diagnosis&serviceId=diagnosis"
    : "/book";
  const primaryBookingLabel = isDiagnosis ? "Book a Mechanic →" : "Book Doorstep Service →";
  const isVehicleType = VEHICLE_TYPE_SERVICE_IDS.has(serviceId);
  const displayedBrands = isScootyRepair
    ? SCOOTER_BRANDS
    : isCruiserBike
      ? CRUISER_BRANDS
      : SUPPORTED_BRANDS;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...(locationName && locationSlug
      ? [{ label: locationName, href: `/${locationSlug}` }]
      : []),
    ...(!isVehicleType ? [{ label: "Services", href: "/services" }] : []),
    { label: cleanServiceName },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative z-10">
      {/* ===== BREADCRUMB ===== */}
      <div className="site-breadcrumb-bar" style={{ background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "12px 0" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumb
            items={breadcrumbItems}
          />
        </div>
      </div>

      {/* ===== HERO HEADER ===== */}
      <div className="bg-[#17181A] text-white pt-10 md:pt-12 pb-12 border-b border-white/10 relative overflow-hidden">
        {/* Decorative background grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "none" }}
        />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 align-middle items-center">
            {/* Left Hero Main Info */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-mono font-bold uppercase tracking-widest text-xs mb-6">
                <Wrench className="w-4 h-4" />
                <span>{category}</span>
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6 text-white font-oswald break-words">
                {title}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                {detail?.summary || lead}
              </p>
              {visiblePrice && (
                <div className="mb-7 rounded-xl border border-white/20 bg-white/5 p-5 max-w-md">
                  <span className="block text-xs uppercase tracking-widest text-slate-300">{isRelatedPrice ? `Related published option: ${catalogService?.name}` : "Service price"} · 0–249 cc</span>
                  <strong className="block text-3xl font-bold text-white mt-1">{isRelatedPrice ? "Option from" : "From"} {visiblePrice}</strong>
                  <span className="block text-xs text-slate-300 mt-2">{isRelatedPrice ? "This is a different package; confirm the price for the service on this page. " : ""}{extraVisitCharge ? `A ₹${DOORSTEP_SERVICE_CHARGE} doorstep charge applies to this tier. ` : ""}Parts and additional work are quoted before approval.</span>
                </div>
              )}

              {isVehicleType ? (
                <div className="flex w-full flex-col items-start gap-3 sm:w-max sm:max-w-full">
                  <div className="grid w-full grid-cols-1 gap-3 sm:flex sm:w-auto sm:items-start">
                    <Link
                      href={primaryBookingHref}
                      className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-md bg-[#e62b2b] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_20px_rgba(230,43,43,0.35)] transition-all hover:bg-red-600 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
                    >
                      {primaryBookingLabel}
                    </Link>
                    <a
                      href="tel:+918745945682"
                      className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/20 sm:w-auto sm:px-6 sm:py-4 sm:text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call Mechanic
                    </a>
                  </div>
                  <PaymentTrustRow className="justify-start font-mono uppercase tracking-[0.08em]" />
                </div>
              ) : (
                <div className="flex w-full flex-col items-start gap-3 sm:w-max sm:max-w-full">
                  <div className="grid w-full grid-cols-1 gap-3 sm:flex sm:w-auto sm:items-stretch">
                    <Link
                      href={primaryBookingHref}
                      className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-md bg-[#e62b2b] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_20px_rgba(230,43,43,0.35)] transition-all hover:-translate-y-0.5 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-8 sm:text-sm"
                    >
                      {primaryBookingLabel}
                    </Link>
                    <a
                      href="tel:+918745945682"
                      className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-6 sm:text-sm"
                    >
                      <Phone className="h-4 w-4" />
                      Call Mechanic
                    </a>
                  </div>
                  <PaymentTrustRow className="!mt-0 !justify-start font-mono uppercase tracking-[0.08em]" />
                </div>
              )}
            </div>

            {/* Right Hero Interactive Query Card */}
            <div className="lg:col-span-5">
              <TwoWheelerQueryCard />
            </div>
          </div>
        </div>
      </div>

      {/* ===== TRUST METRICS STRIP ===== */}
      <div className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
            <div className="p-2">
              <b className="block text-2xl font-bold text-slate-900">{pageVars.avgTime}</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Doorstep Arrival</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl font-bold text-slate-900">{pageVars.averageRating} ★</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Customer Rating</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl font-bold text-slate-900">{pageVars.bikesServiced}+</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Bikes Serviced</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl font-bold text-slate-900">{isDiagnosis ? "Approval First" : pageVars.warranty}</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">{isDiagnosis ? "Before Any Repair" : "Labor Warranty"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT SECTION ===== */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left Content Paragraphs */}
            <div className="lg:col-span-8 space-y-6 text-slate-700 text-base md:text-lg leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 font-oswald border-b border-slate-200 pb-3">
                Why Choose Doorstep {cleanServiceName} in {locationName || "Delhi NCR"}?
              </h2>
              {(detail ? [detail.summary, `Tell us your vehicle model and symptoms. The mechanic confirms what can be done at your location and quotes any additional parts or work before you approve it.`] : descriptionParagraphs).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Right Quick Info Panel */}
            <div className="lg:col-span-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-6 sticky top-28">
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-3 font-oswald">
                  Service Specifications
                </h3>
                <div className="space-y-4 font-sans text-sm">
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Service Coverage
                    </span>
                    <span className="font-bold text-slate-900">
                      {locationName
                        ? `${locationName} & Delhi NCR (Delhi, Gurgaon, Noida, Ghaziabad, Faridabad)`
                        : "Delhi NCR (Delhi, Gurgaon, Noida, Ghaziabad, Faridabad)"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      {isDiagnosis ? "Visit Timing" : "Arrival Duration"}
                    </span>
                    <span className="font-bold text-slate-900">
                      {detail ? "Confirmed when booking" : isDiagnosis ? "Confirmed when booking" : "25 - 45 Minutes at your doorstep"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      {isDiagnosis ? "Visit Focus" : "Parts Policy"}
                    </span>
                    <span className="font-bold text-slate-900">
                      {detail ? "Confirm parts and extra work before approval" : isDiagnosis ? "Fault Finding & Next-Step Advice" : "100% Sealed OEM Parts & Cables"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      {isDiagnosis ? "Repair Approval" : "Warranty"}
                    </span>
                    <span className="font-bold text-slate-900">{detail ? "Confirm applicable terms at booking" : isDiagnosis ? "Required Before Work Begins" : warranty}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      {isDiagnosis ? "Diagnosis Fee" : "Payment Mode"}
                    </span>
                    <span className="font-bold text-slate-900">
                      {detail ? (isRelatedPrice ? "Request an itemized quote for this service" : visiblePrice ? `From ${visiblePrice} by vehicle category` : "Request an itemized quote") : isDiagnosis ? "₹399" : "UPI, Card, Cash after Job Completion"}
                    </span>
                  </div>
                </div>

                <Link
                  href={primaryBookingHref}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#e62b2b] hover:bg-red-600 text-white py-3.5 rounded-md font-mono font-bold text-xs uppercase tracking-wider transition-all"
                >
                  {isDiagnosis ? "Book a Mechanic" : "Book This Service"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {(basicServiceDetails || detail) && (
            <section className="mb-16" aria-labelledby="basic-price-heading">
              <div className="mb-7 max-w-3xl"><span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600">Clear pricing</span><h2 id="basic-price-heading" className="mt-2 text-3xl font-black uppercase font-oswald">{isRelatedPrice ? `${catalogService?.name}: published prices` : `${basicServiceDetails ? "Basic service" : detail?.name} price by vehicle`}</h2><p className="mt-2 text-slate-600">{isRelatedPrice ? `The pricing page lists ${catalogService?.name}, which is a different package from ${detail?.name}. These prices are for the listed package only; request a separate quote for ${detail?.name}.` : catalogService ? "Select your engine capacity to see the service price. Parts and additional work are quoted separately before you approve them." : "The price depends on the vehicle and work required. Request an itemized quote before approving service."}</p></div>
              {catalogService && <div className="overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[560px] text-left"><thead className="bg-slate-900 text-white"><tr><th scope="col" className="p-4">Vehicle category</th><th scope="col" className="p-4">Service price</th><th scope="col" className="p-4">Doorstep charge</th></tr></thead><tbody>{PRICING_CATEGORIES.filter((tier) => tier.id !== "electric" || catalogService.prices.electric !== undefined).map((tier) => { const price = catalogService.prices[tier.id as keyof typeof catalogService.prices]; const chargeApplies = hasDoorstepServiceCharge(catalogService.id, price); return <tr key={tier.id} className="border-t border-slate-200"><th scope="row" className="p-4 font-semibold">{tier.name}</th><td className="p-4 font-bold">{typeof price === "number" ? `₹${price.toLocaleString("en-IN")}` : price}</td><td className="p-4">{chargeApplies ? `₹${DOORSTEP_SERVICE_CHARGE} extra` : "No separate doorstep charge under the current price rule"}</td></tr>; })}</tbody></table></div>}
              <p className="mt-3 text-sm text-slate-600">{isRelatedPrice ? `The pricing page does not list a standalone ${detail?.name} rate. Confirm the exact service and total price before booking.` : catalogService ? `These are current catalog prices. Final scope and any parts cost are confirmed before work begins.${catalogService.prices.electric === undefined ? " Electric two-wheelers use a separate service." : ""}` : "No fixed price is shown for this service in the current catalog. Confirm the total quote before work begins."}</p>
              <Link href={primaryBookingHref} className="mt-5 inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">Book {basicServiceDetails ? "basic service" : "this service"} <ArrowRight className="h-4 w-4" /></Link>
            </section>
          )}

          <section className="mb-16" aria-labelledby="service-inclusions">
            <div className="max-w-2xl mb-7">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600">Scope of work</span>
              <h2 id="service-inclusions" className="text-3xl font-black uppercase text-slate-900 font-oswald mt-2">What we check and do</h2>
              <p className="text-slate-600 mt-2">The mechanic confirms the work needed for your vehicle before starting. Additional repairs and parts require your approval.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {detailItems.map((item) => <div key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800"><Check className="h-5 w-5 shrink-0 text-red-600" aria-hidden="true" /><span>{item}</span></div>)}
            </div>
            {basicServiceDetails && <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">What is outside the basic service price?</h3><ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2"><li>Engine oil and oil filter replacement</li><li>Replacement parts, including brake pads, batteries and cables</li><li>Washing and major mechanical repairs</li><li>Any extra work found during inspection</li></ul><p className="mt-4 text-sm text-slate-600">These may be available separately. Ask for a quote and approve the price before any extra work.</p></div>}
            {detail && <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">What is outside this service price?</h3><ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">{detail.excluded.map((item) => <li key={item}>{item}</li>)}</ul><p className="mt-4 text-sm text-slate-600">Ask for a separate quote before approving any additional work.</p></div>}
            {visiblePrice && <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-900 p-5 text-white"><div><strong className="text-xl">{isRelatedPrice ? `${catalogService?.name} from ` : "From "}{visiblePrice}</strong><p className="text-xs text-slate-300">{isRelatedPrice ? "Related package price; request a quote for this service" : "0–249 cc · final quote depends on vehicle and work"}</p></div><Link href={primaryBookingHref} className="rounded-md bg-red-600 px-6 py-3 font-bold hover:bg-red-700">Book this service</Link></div>}
          </section>

          {/* ===== STEP-BY-STEP PROCESS ===== */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-2">
                HASSLE-FREE WORKFLOW
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 font-oswald">
                {detail
                  ? `How ${detail.name} Works`
                  : isDiagnosis
                  ? "How Doorstep Two-Wheeler Diagnosis Works"
                  : isScootyRepair
                    ? "How Doorstep Scooty Service Works"
                    : "How Doorstep Bike Service Works"}
              </h2>
            </div>

            {detail ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{detail.steps.map(([heading, copy], index) => <div key={heading} className="rounded-xl border border-slate-200 bg-white p-6"><span className="text-3xl font-bold text-red-200">0{index + 1}</span><h3 className="mt-3 text-lg font-bold">{heading}</h3><p className="mt-2 text-sm text-slate-600">{copy}</p></div>)}</div>
            ) : basicServiceDetails ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{[
                { title: "Confirm the vehicle", description: "Share the model and symptoms; the mechanic checks the bike or scooter and confirms the basic service scope." },
                { title: "Inspect key systems", description: "Check brakes, tyres, lights, battery, spark plug, air filter and chain where applicable." },
                { title: "Perform basic upkeep", description: "Clean and adjust applicable parts, lubricate the chain and controls, and flag anything needing replacement." },
                { title: "Review the result", description: "The mechanic explains findings and any separate quote; review the completed work before payment." },
              ].map((step, index) => <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-6"><span className="text-3xl font-bold text-red-200">0{index + 1}</span><h3 className="mt-3 text-lg font-bold">{step.title}</h3><p className="mt-2 text-sm text-slate-600">{step.description}</p></div>)}</div>
            ) : isDiagnosis ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { number: "01", title: "Describe the Symptom", description: "Tell us what changed, when it happens, and whether the vehicle can be started or ridden safely." },
                  { number: "02", title: "Mechanic Checks the Vehicle", description: "A verified mechanic inspects the relevant accessible mechanical and electrical systems at your location." },
                  { number: "03", title: "Understand the Finding", description: "The mechanic explains the likely fault, the recommended next step, and whether specialist workshop work is needed." },
                  { number: "04", title: "Approve the Next Step", description: "Review the separate repair quote and decide what work, if any, should begin." },
                ].map((step) => (
                  <div key={step.number} className="bg-white border border-slate-200 rounded-xl p-6 relative">
                    <span className="font-mono text-3xl font-bold text-red-100 block mb-2">{step.number}</span>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            ) : isScootyRepair ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    number: "01",
                    title: "Book Your Service",
                    description:
                      "Select your bike, required service, location, date and preferred time.",
                  },
                  {
                    number: "02",
                    title: "Mechanic Assigned",
                    description:
                      "FixWheel confirms your booking and assigns a verified mechanic near your location.",
                  },
                  {
                    number: "03",
                    title: "Doorstep Service",
                    description:
                      "The mechanic arrives with the required tools, inspects your vehicle and completes the approved work.",
                  },
                  {
                    number: "04",
                    title: "Review & Pay",
                    description:
                      "Check the completed service and pay only after the job is finished.",
                  },
                ].map((step) => (
                  <div key={step.number} className="bg-white border border-slate-200 rounded-xl p-6 relative">
                    <span className="font-mono text-3xl font-bold text-red-100 block mb-2">{step.number}</span>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { title: "Choose a time", description: `Share your vehicle, location and request for ${cleanServiceName.toLowerCase()}.` },
                  { title: "Inspect and confirm", description: "The mechanic checks the vehicle and confirms the work and any parts needed." },
                  { title: "Complete the work", description: `The mechanic carries out the approved ${cleanServiceName.toLowerCase()} work and checks the result.` },
                  { title: "Review and pay", description: "Review the completed job and pay the agreed amount." },
                ].map((step, index) => <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-6"><span className="text-3xl font-bold text-red-200">0{index + 1}</span><h3 className="mt-3 text-lg font-bold text-slate-900">{step.title}</h3><p className="mt-2 text-sm text-slate-600">{step.description}</p></div>)}
              </div>
            )}
            <HowSectionActions
              bookingHref={primaryBookingHref}
              bookingLabel={isDiagnosis ? "Book a mechanic" : undefined}
            />
          </div>

          <section className="mb-16" aria-labelledby="related-services">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600">Plan your visit</span>
            <h2 id="related-services" className="mt-2 text-3xl font-black uppercase text-slate-900 font-oswald">Services to consider together</h2>
            <p className="mt-2 mb-6 text-slate-600">Choose these only if your vehicle needs them. The mechanic can inspect and quote additional work.</p>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedServices.map((id) => <Link key={id} href={`/services/${id}`} className="group rounded-xl border border-slate-200 bg-slate-50 p-5 hover:border-red-500"><h3 className="font-bold text-slate-900 group-hover:text-red-600">{id.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")}</h3><span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-red-600">See service details <ArrowRight className="h-4 w-4" /></span></Link>)}
            </div>
          </section>

          {(isScootyRepair || isElectricRepair) && (
            <div className="service-page-service-rail mb-16">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-1">
                    {isElectricRepair ? "POPULAR EV DOORSTEP SERVICES" : "POPULAR DOORSTEP REPAIRS"}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-slate-900 font-oswald">
                    {isElectricRepair
                      ? "EV & Electric Scooter Services We Provide Across Delhi NCR"
                      : "Services We Provide Across Delhi NCR"}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm mt-1">
                    {isElectricRepair
                      ? "Specialized doorstep care for high-voltage systems, BMS health checks, and motor diagnostics."
                      : "Transparent pricing for periodic servicing, CVT tuning, and emergency breakdown repairs."}
                  </p>
                </div>
                <Link href="/pricing" className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 hover:text-red-700 flex items-center gap-1">
                  View Full Price List →
                </Link>
              </div>
              <CityServicesGrid filterCategory={isElectricRepair ? "electric" : "scooty"} />
              <style jsx global>{`
                .service-page-service-rail .svc-grid {
                  display: flex !important;
                  flex-flow: row nowrap !important;
                  gap: 16px !important;
                  overflow-x: auto !important;
                  overflow-y: hidden !important;
                  padding: 8px 4px 18px !important;
                  scroll-behavior: smooth !important;
                  scroll-snap-type: x mandatory !important;
                  scrollbar-color: #e62b2b #e2e8f0 !important;
                  scrollbar-width: thin !important;
                  -webkit-overflow-scrolling: touch !important;
                }
                .service-page-service-rail .svc-grid::-webkit-scrollbar { height: 6px !important; }
                .service-page-service-rail .svc-grid::-webkit-scrollbar-track { background: #e2e8f0 !important; border-radius: 4px !important; }
                .service-page-service-rail .svc-grid::-webkit-scrollbar-thumb { background: #e62b2b !important; border-radius: 4px !important; }
                .service-page-service-rail .svc-card {
                  background: #fff;
                  border: 1px solid #e2e8f0;
                  border-radius: 6px;
                  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
                  box-sizing: border-box !important;
                  flex: 0 0 310px !important;
                  min-width: 310px !important;
                  padding: 26px;
                  position: relative;
                  scroll-snap-align: start !important;
                  transition: border-color .15s ease, transform .15s ease;
                  width: 310px !important;
                }
                .service-page-service-rail .svc-card:hover { border-color: #e62b2b; transform: translateY(-3px); }
                .service-page-service-rail .svc-tag { color: #e62b2b; display: inline-block; font-family: var(--font-jetbrains); font-size: 10.5px; letter-spacing: .08em; margin-bottom: 12px; }
                .service-page-service-rail .svc-card h3 { color: #0f172a; font-size: 17px; letter-spacing: 0; margin-bottom: 10px; text-transform: none; }
                .service-page-service-rail .svc-card p { color: #475569; font-size: 13.5px; margin-bottom: 16px; min-height: 58px; }
                .service-page-service-rail .svc-price { color: #0f172a; font-family: var(--font-jetbrains), monospace; font-size: 14px; font-weight: 700; margin-bottom: 12px; }
                .service-page-service-rail .svc-price span { color: #64748b; font-size: 11px; font-weight: 400; letter-spacing: .04em; }
                .service-page-service-rail .go { color: #e62b2b; font-family: var(--font-jetbrains); font-size: 12px; font-weight: 700; }
                @media (max-width: 640px) {
                  .service-page-service-rail .svc-card { flex-basis: 82% !important; min-width: 82% !important; width: 82% !important; }
                }
              `}</style>
            </div>
          )}

          {/* ===== BRANDS WE SERVE (SLIDING / SCROLLABLE CAROUSEL) ===== */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mb-16 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-1">
                  SUPPORTED TWO-WHEELERS
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-slate-900 font-oswald">
                  Brands We Serve
                </h3>
                <p className="text-slate-600 text-xs md:text-sm mt-1">
                  {isScootyRepair
                    ? `Popular gearless scooter brands serviced across ${locationName || "Delhi NCR"} with 100% genuine parts.`
                    : isCruiserBike
                      ? `Cruiser and modern-classic motorcycles we service across ${locationName || "Delhi NCR"}.`
                      : `We service all 16+ major motorcycle and scooter brands across ${locationName || "Delhi NCR"} with 100% genuine parts.`}
                </p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("service-brands-track");
                    if (el) el.scrollBy({ left: -260, behavior: "smooth" });
                  }}
                  className="w-9 h-9 rounded-full bg-white border border-slate-300 hover:border-red-500 hover:text-red-600 flex items-center justify-center font-bold text-slate-700 transition-colors shadow-sm cursor-pointer"
                  aria-label="Scroll left"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("service-brands-track");
                    if (el) el.scrollBy({ left: 260, behavior: "smooth" });
                  }}
                  className="w-9 h-9 rounded-full bg-white border border-slate-300 hover:border-red-500 hover:text-red-600 flex items-center justify-center font-bold text-slate-700 transition-colors shadow-sm cursor-pointer"
                  aria-label="Scroll right"
                >
                  →
                </button>
              </div>
            </div>

            {/* Horizontal Sliding Track */}
            <div
              id="service-brands-track"
              className="flex items-center gap-3 overflow-x-auto py-2 px-1 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {displayedBrands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/${b.slug}`}
                  className={cn(
                    "flex-shrink-0 flex items-center gap-3 bg-white border border-slate-200 hover:border-red-500 px-4 py-3 rounded-xl font-sans text-sm font-bold text-slate-900 hover:text-red-600 transition-all shadow-sm group snap-start",
                    isScootyRepair || isCruiserBike ? "min-w-[230px]" : "min-w-[150px]"
                  )}
                >
                  <img src={b.logo} alt={b.name} className="w-6 h-6 rounded-full object-contain bg-slate-50 p-0.5 border border-slate-200 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>
                    <span className="block whitespace-nowrap">{b.name}</span>
                    {b.models && (
                      <span className="block mt-0.5 text-[10px] leading-snug font-normal text-slate-500 group-hover:text-slate-600">
                        {b.models}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>

            {isScootyRepair && (
              <div className="mt-6 p-4 md:p-5 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-lg shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Riding an Electric Scooter (EV)?</h4>
                    <p className="text-xs text-slate-500">We have specialized diagnostic software and belt tools for Ola S1, Ather 450X, TVS iQube & Chetak.</p>
                  </div>
                </div>
                <Link
                  href="/electric-vehicle"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg transition-all shrink-0"
                >
                  Explore EV Scooter Repair →
                </Link>
              </div>
            )}
          </div>

          {/* ===== EXPANDABLE FAQS ===== */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="mb-8">
              <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-1">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 font-oswald">
                Got Questions About {title}?
              </h2>
            </div>

            <div className="space-y-3">
              {detailFaqs.map((faq, idx) => {
                const isOpen = !!openFaqs[idx];
                return (
                  <div
                    key={idx}
                    className={cn(
                      "bg-white border rounded-lg overflow-hidden transition-colors",
                      isOpen ? "border-red-500" : "border-slate-200"
                    )}
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center font-oswald text-lg uppercase text-slate-900"
                      onClick={() => toggleFaq(idx)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-slate-400 transition-transform duration-200",
                          isOpen && "rotate-180 text-red-500"
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-3 text-base font-medium text-slate-700 leading-relaxed border-t border-slate-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== CONTACT US & EMERGENCY ASSISTANCE ===== */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-1">
                  GET IN TOUCH & EMERGENCY HELP
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-slate-900 font-oswald mb-4">
                  Contact Us & 24/7 Roadside Assistance
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Have questions before booking your service or stuck with a sudden bike breakdown in {locationName || "Delhi NCR"}? Our certified mechanics are on standby to reach your location with tools & parts.
                </p>
                <div className="space-y-3 text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">📞</div>
                    <div>
                      <b className="block text-slate-900">+91 87459 45682</b>
                      <span className="text-xs text-slate-500">Call us between 8 AM and 10 PM</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold">✉</div>
                    <div>
                      <b className="block text-slate-900">support@fixwheel.app</b>
                      <span className="text-xs text-slate-500">Replies within 2 hours</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 relative">
                <span className="bg-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full absolute -top-3 right-4">
                  24/7 EMERGENCY
                </span>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Emergency Breakdown Service</h4>
                <p className="text-sm text-slate-700 mb-5 leading-relaxed">
                  Stranded on the road with a puncture, dead battery, or snapped clutch cable? Request roadside assistance now for instant mobile dispatch.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="bg-[#e62b2b] hover:bg-red-600 text-white px-5 py-2.5 rounded-md font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Request Roadside Assistance →
                  </Link>
                  <a
                    href="tel:+918745945682"
                    className="bg-white border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-5 py-2.5 rounded-md font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== CITY & LOCALITY LINKS ===== */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-16 text-white shadow-xl">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              BOOK DOORSTEP {cleanServiceName.toUpperCase()} BY CITY
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
              {[
                { name: "Gurgaon", slug: "gurgaon" },
                { name: "Delhi", slug: "delhi" },
                { name: "Noida", slug: "noida" },
                { name: "Ghaziabad", slug: "ghaziabad" },
                { name: "Faridabad", slug: "faridabad" },
              ].map((c) => (
                <Link
                  key={c.slug}
                  href={isDiagnosis
                    ? `/${c.slug}`
                    : VEHICLE_TYPE_PUBLIC_ROUTES[serviceId]
                      ? `/${c.slug}/${VEHICLE_TYPE_PUBLIC_ROUTES[serviceId]}`
                      : `/${c.slug}/services/${serviceId}`}
                  className="bg-slate-800 border border-slate-700 hover:border-red-500 text-center py-3 rounded-lg font-mono text-xs font-bold text-white hover:text-red-400 transition-all shadow-sm"
                >
                  {c.name}
                </Link>
              ))}
            </div>

          </div>

          {/* ===== BOTTOM CTA BANNER ===== */}
          <div className="bg-[#17181A] text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden border border-white/10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-oswald">
              {isDiagnosis ? "Ready to Find the Problem?" : "Ready to Service Your Two-Wheeler?"}
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
              {isDiagnosis
                ? `Describe the symptom and book a doorstep mechanic in ${locationName || "Delhi NCR"}. We inspect the likely cause before you approve any repair.`
                : `Get an expert doorstep mechanic at your home or office parking in ${locationName || "Delhi NCR"} within 45 minutes.`}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={primaryBookingHref}
                className="inline-flex items-center justify-center gap-3 bg-[#e62b2b] hover:bg-red-600 text-white px-8 py-4 rounded-md font-mono font-bold tracking-wider uppercase text-sm transition-all shadow-[0_4px_20px_rgba(230,43,43,0.35)] hover:scale-[1.02]"
              >
                {isDiagnosis ? "BOOK A MECHANIC" : "BOOK NOW"}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+918745945682"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-md font-mono font-bold tracking-wider uppercase text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Mechanic
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
