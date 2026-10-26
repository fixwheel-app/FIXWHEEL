import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ScootyRepairLayout, {
  type BikeLandingContent,
} from "@/app/scooty-repair/ScootyRepairLayout";
import { SCOOTER_CITIES } from "@/app/scooty-repair/cityContent";
import { CITIES_DB } from "@/lib/cityLocalityData";
import {
  DEFAULT_PUBLIC_STATS,
  getPublicStatsForCity,
} from "@/lib/publicStats";
import { completePageMetadata } from "@/lib/seoMetadata";

const ALLOWED_CITIES = [
  "gurgaon",
  "delhi",
  "noida",
  "ghaziabad",
  "faridabad",
] as const;

type BikeCitySlug = (typeof ALLOWED_CITIES)[number];

type BikeCityCopy = {
  lead: string;
  paragraphs: string[];
  bookingTip: string;
  coverageText: string;
  coverageAnswer: string;
  roadsidePlaces: string;
  reviews: NonNullable<BikeLandingContent["reviews"]>;
};

const BIKE_CITY_COPY: Record<BikeCitySlug, BikeCityCopy> = {
  gurgaon: {
    lead: "Bike not starting in Cyber City, losing pickup on Sohna Road, or due for service at home? FixWheel sends a verified mechanic to your Gurgaon home, society, office parking or safe roadside location. Share your model and symptoms, approve the quote, and pay after service.",
    paragraphs: [
      "Gurgaon’s stop-and-go traffic, heat, dust and daily riding distance can affect the drive chain, brakes, air filter, battery and engine oil. Describe what has changed while riding so the mechanic can start with the relevant checks.",
      "Service takes place where your bike is parked at home, in a society or at an office. Sharing the exact gate, tower, basement level and parking rules helps the mechanic reach the vehicle without wasting your appointment time.",
      "The mechanic inspects the bike, explains the findings and gives you a quote. You approve the work before it begins and pay after the service is completed.",
    ],
    bookingTip: "Share the make, model, engine capacity, recent service history, symptoms and exact Gurgaon address. For Cyber City or Udyog Vihar office visits, include parking and visitor-entry instructions.",
    coverageText: "Request doorstep motorcycle service across DLF, Cyber City, Golf Course Road, Sohna Road, Palam Vihar, Udyog Vihar, Sushant Lok, Manesar and Gurgaon sectors. Confirm availability for your exact address.",
    coverageAnswer: "You can request service across DLF, Cyber City, Golf Course Road, Sohna Road, Palam Vihar, Udyog Vihar, Sushant Lok, Manesar and Gurgaon sectors.",
    roadsidePlaces: "Cyber Hub, Golf Course Road or Sohna Road",
    reviews: [
      { name: "Priya S.", location: "Gurgaon", vehicle: "Bike service", rating: 5, text: "Quoted the price before starting, no extra charges added later. Honest service." },
      { name: "Rahul Sharma", location: "Cyber Hub, Gurgaon", vehicle: "Roadside repair", rating: 5, text: "My two-wheeler broke down near Cyber Hub. Mechanic arrived in 15 minutes and didn't overcharge for the emergency call." },
      { name: "Vikram Singh", location: "Sector 14, Gurgaon", vehicle: "Royal Enfield", rating: 5, text: "Used them for my Royal Enfield. Genuine parts used and the engine feels noticeably smoother now." },
    ],
  },
  delhi: {
    lead: "Bike refusing to start in Dwarka, making chain noise in Janakpuri, or due for service before another Delhi commute? FixWheel brings a verified mechanic to your home, office parking or safe roadside location. Share the model and symptoms, approve the quote, and pay after service.",
    paragraphs: [
      "Frequent gear changes, stop-and-go traffic, heat and road dust can increase wear on a Delhi commuter bike. Chain condition, brakes, battery, spark plug, air filter and engine oil are checked according to the symptoms you report.",
      "A complete block, gate and parking location matter in Delhi. Tell us about narrow-lane access, basement parking or office visitor rules so the mechanic can reach your motorcycle and work in a suitable space.",
      "After inspection, the mechanic explains the recommended labour and parts. You review the quote before work starts and pay after the approved service is completed.",
    ],
    bookingTip: "Share the colony, block, nearest accessible gate, bike model and recent service history. If the bike is roadside, park safely and send a precise landmark rather than only a metro-station name.",
    coverageText: "Book doorstep motorcycle service across Dwarka, Vasant Kunj, Janakpuri, Rohini, Pitampura, Rajouri Garden, Punjabi Bagh, Saket and other listed Delhi neighbourhoods. Confirm availability for your exact block and address.",
    coverageAnswer: "Coverage includes listed areas across South, South-West and West Delhi, including Dwarka, Vasant Kunj, Janakpuri, Rohini, Pitampura, Rajouri Garden and Punjabi Bagh.",
    roadsidePlaces: "Dwarka, Ring Road or a Delhi colony road",
    reviews: [
      { name: "Ankit R.", location: "Dwarka, Delhi", vehicle: "Roadside puncture", rating: 5, text: "Puncture at 10 PM near Dwarka Mor. Called FixWheel, mechanic was there in 45 minutes. Sorted and back on the road." },
      { name: "Deepak M.", location: "Janakpuri, Delhi", vehicle: "Bajaj Pulsar", rating: 5, text: "Got my Pulsar serviced at my office parking in Janakpuri. Oil change done in 45 minutes. Price was exactly what they quoted." },
    ],
  },
  noida: {
    lead: "Bike stuck in a society basement, losing pickup on the Expressway, or due for maintenance near Sector 62? FixWheel sends a verified mechanic to your Noida home, office parking or safe roadside location. Share your exact sector, model and symptoms before booking.",
    paragraphs: [
      "Daily Expressway riding, basement storage and frequent short trips can affect a motorcycle’s battery, chain, brakes, air filter and engine oil. Tell us when the issue appears so the mechanic can focus the inspection on the right systems.",
      "Noida addresses need the sector, society or office name, tower, gate and basement level. These details help the mechanic coordinate security access and find the parked bike without delaying the visit.",
      "The mechanic checks the motorcycle where it is parked, explains the findings and provides a quote. Work begins after your approval, and payment is due after the service is completed.",
    ],
    bookingTip: "State whether the address is in central Noida, Noida Extension, Greater Noida or Greater Noida West. Include the society, tower, gate and parking level with your bike model and symptoms.",
    coverageText: "Request bike service across Sector 18, Sector 62, Sector 50, Sector 75–78, Sector 137, the Noida Expressway belt, Greater Noida West, Gaur City and Knowledge Park. Confirm the correct city zone and exact address.",
    coverageAnswer: "Coverage includes central Noida, Sector 62, the Expressway sectors, Sector 137, Greater Noida West, Gaur City, Knowledge Park and other listed locations.",
    roadsidePlaces: "the DND Flyway, Noida–Greater Noida Expressway or a sector road",
    reviews: [
      { name: "Abhishek T.", location: "Sector 137, Noida", vehicle: "General service", rating: 5, text: "Excellent experience in Sector 137. The mechanic coordinated with the society gate security himself and finished the general service in the basement. Spotless cleanup after service." },
      { name: "Vikram S.", location: "Sector 62, Noida", vehicle: "Royal Enfield Bullet", rating: 5, text: "My Royal Enfield Bullet broke down near Noida Sector 62. The roadside assistance mechanic was there in 45 minutes, cleaned the carburetor on the spot, and got it started." },
    ],
  },
  ghaziabad: {
    lead: "Bike not starting in Indirapuram, making brake noise in Vaishali, or stranded near GT Road? FixWheel sends a verified mechanic to your Ghaziabad home, society parking, office or safe roadside location. Share the model, symptoms and precise address before booking.",
    paragraphs: [
      "High-rise parking, daily NH-24 rides and crowded local roads can put different demands on a motorcycle. Starting trouble, weak brakes, chain noise and poor pickup each need a focused inspection before parts are recommended.",
      "Include the locality, sector or khand, society name, gate and basement level. If the bike has stopped roadside, share your direction of travel and a safe landmark where the mechanic can meet you.",
      "The mechanic inspects the bike, explains what can be repaired at the location and provides a quote. You approve the work first and pay after the completed service.",
    ],
    bookingTip: "For Indirapuram or Vaishali, include the society and khand or sector. For roadside help near NH-24 or GT Road, park away from moving traffic and share a precise meeting point.",
    coverageText: "Book doorstep motorcycle repair across Indirapuram, Vaishali, Kaushambi, Vasundhara, Raj Nagar Extension, Crossings Republik, Vijay Nagar and other listed Ghaziabad areas. Confirm service for your exact address.",
    coverageAnswer: "Coverage includes Indirapuram, Vaishali, Kaushambi, Vasundhara, Raj Nagar Extension, Crossings Republik, Vijay Nagar and other listed Ghaziabad locations.",
    roadsidePlaces: "NH-24, GT Road or a Ghaziabad sector road",
    reviews: [
      { name: "Sanjay P.", location: "Indirapuram, Ghaziabad", vehicle: "Brake repair", rating: 5, text: "Excellent experience in Indirapuram. The mechanic coordinated with my high-rise apartment security and did the brake disc change in the basement. Extremely convenient." },
      { name: "Sameer M.", location: "Raj Nagar Extension", vehicle: "Engine service", rating: 5, text: "No hidden margins, no pushy sales. Replaced my engine oil and tuned the carburetor in my apartment parking in Raj Nagar. Will use again." },
    ],
  },
  faridabad: {
    lead: "Bike due for service in NIT, refusing to start in Sector 15, or stranded near Bata Chowk? FixWheel sends a verified mechanic to your Faridabad home, office parking or safe roadside location. Share your model and symptoms, approve the quote, and pay after service.",
    paragraphs: [
      "Regular rides on Mathura Road, sector roads and industrial stretches can affect a bike’s chain, brakes, clutch cable, air filter, battery and engine oil. Describe the change you noticed so the mechanic can begin with relevant checks.",
      "Share the sector, block, colony or NIT area along with the building, gate and parking location. For Ballabhgarh or Greater Faridabad, make the full area name clear when requesting a visit.",
      "The mechanic inspects the motorcycle at your location, explains the required work and gives you a quote. You approve the repair before it begins and pay after completion.",
    ],
    bookingTip: "Include your bike model, engine capacity, service history and exact Faridabad address. For roadside assistance near Mathura Road, Suraj Kund Road or Bata Chowk, share a safe stopping point.",
    coverageText: "Request doorstep bike service across NIT Faridabad, Sector 15–16, Sector 21, Sector 37, Sector 85–89, Greater Faridabad and Ballabhgarh. Confirm mechanic availability for your exact sector and address.",
    coverageAnswer: "Coverage includes NIT Faridabad, Sector 15–16, Sector 21, Sector 37, Sector 85–89, Greater Faridabad, Ballabhgarh and other listed areas.",
    roadsidePlaces: "Mathura Road, Suraj Kund Road or Bata Chowk",
    reviews: [
      { name: "Abhishek M.", location: "Sector 15, Faridabad", vehicle: "Basic service", rating: 5, text: "Excellent experience in Sector 15. The mechanic coordinated with my society guard and finished the basic service in the driveway under 45 minutes. Clean and hassle-free." },
      { name: "Rohit S.", location: "Bata Chowk, Faridabad", vehicle: "Bajaj Pulsar", rating: 5, text: "My Pulsar broke down near Bata Chowk during rush hour. The roadside assistance mechanic changed the clutch cable and got me moving." },
    ],
  },
};

function isBikeCitySlug(value: string): value is BikeCitySlug {
  return ALLOWED_CITIES.includes(value as BikeCitySlug);
}

function getFaqs(citySlug: BikeCitySlug): BikeLandingContent["faqs"] {
  const city = CITIES_DB[citySlug];
  const copy = BIKE_CITY_COPY[citySlug];

  return [
    {
      q: `Can I book a bike mechanic at home or work in ${city.name}?`,
      a: `Yes. Share your full ${city.name} address, bike model and symptoms when booking. Include the gate, building, basement level and visitor-entry instructions so the team can confirm the visit.`,
    },
    {
      q: `Which ${city.name} areas do you cover for bike repair?`,
      a: `${copy.coverageAnswer} Availability is confirmed for your exact address and preferred time.`,
    },
    {
      q: "What bike repairs can I book at my doorstep?",
      a: "Book routine servicing, engine-oil service, brake and chain checks, battery or starting-system support, running repairs and puncture assistance. The mechanic first checks whether the work can be completed safely at your location.",
    },
    {
      q: `How much does bike service cost in ${city.name}?`,
      a: "The price depends on your motorcycle model, engine capacity, required labour and parts. Service cards show applicable starting rates, and any additional work or part is explained and quoted for approval before the repair begins.",
    },
    {
      q: `How quickly can a bike mechanic reach me in ${city.name}?`,
      a: `FixWheel targets a 45-minute doorstep arrival. Actual timing depends on mechanic availability, ${city.name} traffic, distance and building-entry rules, so the team confirms the visit time for your address.`,
    },
    {
      q: "Do you service Splendor, Shine, Pulsar, Apache and Royal Enfield bikes?",
      a: "FixWheel accepts requests for popular Hero, Honda, Bajaj, TVS, Yamaha, Suzuki and Royal Enfield motorcycles. Share the exact model and engine capacity so the team can confirm service compatibility.",
    },
    {
      q: "Is doorstep service suitable for every motorcycle repair?",
      a: "No. Routine service and many common repairs can be completed at your parking location, but work that needs major dismantling or specialist workshop equipment may require another arrangement after inspection.",
    },
    {
      q: `Can I request roadside assistance near ${copy.roadsidePlaces}?`,
      a: "You can request 24/7 roadside assistance for issues such as a puncture, discharged battery or broken cable. Park in a safe place and share your exact location so the team can confirm available support.",
    },
  ];
}

function getBikeContent(citySlug: BikeCitySlug): BikeLandingContent {
  const city = CITIES_DB[citySlug];
  const copy = BIKE_CITY_COPY[citySlug];

  return {
    breadcrumbLabel: `Bike Repair & Service in ${city.name}`,
    tag: `Doorstep bike mechanic · ${city.name}`,
    heroTitle: `Doorstep Bike Repair & Service in ${city.name}`,
    lead: copy.lead,
    pickerTitle: `What does your bike need in ${city.name}?`,
    pickerLegend: "Choose your bike problem or service",
    bookLabel: "Book a bike mechanic",
    howTitle: `How doorstep bike service works in ${city.name}`,
    servicesTitle: `Bike repair services in ${city.name}`,
    servicesLead: "Choose routine servicing or repair support for your motorcycle. Listed starting rates apply to 0–249cc bikes; your model, parts and approved work determine the final quote.",
    whyTitle: `Bike servicing built for ${city.name} rides`,
    paragraphs: copy.paragraphs,
    checks: [
      "Engine-oil condition and service-interval check",
      "Spark-plug and air-filter inspection",
      "Drive-chain condition, tension and lubrication",
      "Brake pad or shoe wear and lever adjustment",
      "Clutch and throttle-cable inspection",
      "Battery, starting-system and tyre checks",
    ],
    bookingTip: copy.bookingTip,
    brandsLead: `Popular commuter, performance and classic motorcycles serviced across ${city.name}. Share your exact make, model and engine capacity when booking.`,
    otherModelsText: "Ride another model? Share its brand, model, engine capacity and symptoms so the team can confirm the right service and quote.",
    coverageTitle: `Bike mechanic service across ${city.name}`,
    coverageText: copy.coverageText,
    faqsTitle: `Bike repair in ${city.name}: common questions`,
    faqs: getFaqs(citySlug),
    reviewsTitle: `What ${city.name} bike owners say`,
    reviewsLead: `Service experiences already shared by riders in ${city.name}.`,
    reviews: copy.reviews,
    finalTitle: `Book a bike mechanic in ${city.name}`,
    finalLead: `Tell us your motorcycle model, the problem you have noticed and where it is parked. Book online, call or WhatsApp to confirm doorstep bike service for your ${city.name} address.`,
    citiesTitle: "Doorstep bike repair in other cities",
    cityPath: "/bike",
  };
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const citySlug = params.city.toLowerCase();
  if (!isBikeCitySlug(citySlug) || !CITIES_DB[citySlug]) return {};

  const city = CITIES_DB[citySlug];
  const canonical = `https://www.fixwheel.app/${citySlug}/bike`;
  const title = `Bike Repair in ${city.name} | Doorstep Bike Service | FixWheel`;
  const description = `Book doorstep bike repair and servicing in ${city.name} for starting trouble, brakes, chain, battery and routine maintenance. Verified FixWheel mechanics come to you.`;

  return completePageMetadata({
    title,
    description,
    keywords: [
      `bike repair in ${city.name}`,
      `bike mechanic near me ${city.name}`,
      `bike service at home ${city.name}`,
      `doorstep bike service ${city.name}`,
      `motorcycle repair ${city.name}`,
      `bike servicing ${city.name}`,
    ],
    alternates: { canonical },
  });
}

export default async function BikeCityPage({
  params,
}: {
  params: { city: string };
}) {
  const citySlug = params.city.toLowerCase();
  if (!isBikeCitySlug(citySlug) || !CITIES_DB[citySlug] || !SCOOTER_CITIES[citySlug]) {
    notFound();
  }

  const city = CITIES_DB[citySlug];
  const cityContent = SCOOTER_CITIES[citySlug];
  const bikeContent = getBikeContent(citySlug);
  const canonical = `https://www.fixwheel.app/${citySlug}/bike`;
  const areas = Array.from(
    new Set([
      ...city.brandPageLocalities,
      ...(cityContent.additionalAreas || []),
    ]),
  );
  const stats = await getPublicStatsForCity(citySlug).catch(
    () => DEFAULT_PUBLIC_STATS[citySlug],
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: `Doorstep bike repair and service in ${city.name}`,
        url: canonical,
        serviceType: "Doorstep motorcycle repair and servicing",
        provider: { "@id": "https://www.fixwheel.app/#organization" },
        areaServed: { "@type": "City", name: city.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" },
          { "@type": "ListItem", position: 2, name: city.name, item: `https://www.fixwheel.app/${citySlug}` },
          { "@type": "ListItem", position: 3, name: `Bike Repair & Service in ${city.name}`, item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: bikeContent.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScootyRepairLayout
        bikesServiced={String(stats.bikes_serviced)}
        rating={stats.average_rating}
        city={cityContent}
        areas={areas}
        bike={bikeContent}
      />
    </>
  );
}
