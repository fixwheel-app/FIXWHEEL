import ScootyRepairLayout, { type BikeLandingContent } from "@/app/scooty-repair/ScootyRepairLayout";
import type { ScooterCityContent } from "@/app/scooty-repair/cityContent";
import { getVehicleCityContent } from "@/lib/vehicleCityContent";

export function getCruiserFaqs(place = "Delhi NCR") {
  return [
    {
      q: `Which cruiser bikes can FixWheel service in ${place}?`,
      a: "FixWheel supports popular cruiser and modern-classic motorcycles from Royal Enfield, Bajaj, Honda, Jawa, Yezdi, Harley-Davidson, Triumph, Kawasaki, Benelli, Hero and TVS. Share the exact model and engine capacity when booking.",
    },
    {
      q: "Can a cruiser motorcycle be serviced at home or work?",
      a: "Yes. A mechanic can perform approved routine maintenance, chain care, brake checks, battery checks and minor repairs where the motorcycle is safely parked and service access is permitted.",
    },
    {
      q: "How is the cruiser bike service price calculated?",
      a: "The price depends on the selected service, motorcycle model, engine-capacity tier, required labour and parts. Any additional work is explained and quoted for approval before it begins.",
    },
    {
      q: "Can the mechanic inspect chain noise, clutch trouble or weak brakes?",
      a: "Yes. Describe when the symptom occurs. The mechanic inspects the related controls and components, then explains the recommended adjustment or repair before proceeding.",
    },
    {
      q: "Is there a warranty on the completed work?",
      a: "FixWheel provides a 15-day labour warranty on eligible completed service work. Parts are covered according to the applicable manufacturer or supplier terms.",
    },
  ];
}

function cruiserContent(cityName?: string, citySlug?: string): BikeLandingContent {
  const place = cityName || "Delhi NCR";
  const cityCopy = citySlug ? getVehicleCityContent(citySlug, "cruiser-bike") : undefined;
  return {
    breadcrumbLabel: "Cruiser Bike Service",
    tag: "Cruiser & modern-classic specialist",
    heroTitle: `Doorstep Cruiser Bike Service in ${place}`,
    lead: cityCopy?.lead || `A cruiser or modern-classic motorcycle places different demands on its chain, controls, brakes and battery than a lightweight commuter. Book doorstep inspection and scheduled service in ${place}, with the exact model and work confirmed before the visit.`,
    pickerTitle: "What does your cruiser bike need?",
    pickerLegend: "Choose your cruiser bike symptom or service",
    bookLabel: "Book cruiser bike service",
    symptoms: [
      ["starting", "Won’t start"],
      ["vibration", "Chain noise or vibration"],
      ["pickup", "Clutch feels heavy or pickup is weak"],
      ["brakes", "Weak or noisy brakes"],
      ["tyre", "Flat tyre or pressure loss"],
      ["other", "Routine service or another issue"],
    ],
    tips: {
      starting: ["Starting trouble can involve the battery, ignition, fuel supply or starter circuit.", "Tell us whether the engine turns over and when the issue began so the mechanic can focus the inspection."],
      vibration: ["Incorrect chain slack, sprocket wear or loose fittings can cause noise and vibration.", "Describe the speed and riding condition when it happens; the mechanic will inspect before recommending work."],
      pickup: ["Clutch free play, air intake, ignition and fuel delivery can affect pickup.", "Share your model and recent service history. Any adjustment or part is quoted before fitting."],
      brakes: ["A change in braking feel or sound needs a safety inspection.", "The mechanic checks pads or shoes, fluid, cables and disc condition before proposing a repair."],
      tyre: ["Park safely and tell us which tyre is losing pressure.", "Share whether it is tube or tubeless if known, along with the motorcycle model and location."],
      other: ["Routine maintenance keeps a heavier cruiser predictable and comfortable.", "Share the model, engine capacity and work required so the correct service can be confirmed."],
    },
    howTitle: `How doorstep cruiser bike service works${cityName ? ` in ${cityName}` : ""}`,
    servicesTitle: `Cruiser bike services and repairs in ${place}`,
    servicesLead: "Starting prices use the applicable engine-capacity tier. Your motorcycle, selected work and required parts determine the final approved quote.",
    services: [
      { id: "basic-service", title: "Cruiser general service", description: "Routine inspection, lubrication, chain care, plug cleaning and brake adjustment." },
      { id: "service-engine-oil", title: "Service with engine oil", description: "Scheduled service with the correct engine-oil grade and filter checks." },
      { id: "chain-sprocket", title: "Chain and sprocket care", description: "Chain slack, alignment and sprocket-wear inspection with approved repair work." },
      { id: "disc-replacement", title: "Brake inspection and repair", description: "Disc, pad, shoe, cable and brake-fluid checks for safe, predictable stopping." },
      { id: "battery-replacement", title: "Battery and starting support", description: "Battery voltage, charging output, terminals and starter-system inspection." },
      { id: "running-repair", title: "Running repairs", description: "Minor cable, control and mechanical adjustments based on inspection." },
    ],
    whyTitle: `Cruiser care designed for heavier motorcycles in ${place}`,
    paragraphs: cityCopy?.paragraphs || [
      "Cruiser and modern-classic motorcycles combine relaxed ergonomics with heavier frames, long-stroke engines and model-specific service requirements. Chain slack, cable adjustment and braking condition have a direct effect on low-speed control and highway comfort.",
      "FixWheel sends a verified mechanic to your home or office parking with the tools needed for inspection, routine maintenance and approved minor repairs.",
      "The mechanic explains the findings before starting additional work. You approve the labour and parts quote, review the completed job and pay after service.",
    ],
    checks: [
      "Engine oil level, leakage and service-interval inspection",
      "Drive chain cleaning, slack adjustment and alignment check",
      "Clutch, throttle and control-cable free-play adjustment",
      "Front and rear brake wear, fluid and lever-response check",
      "Battery voltage, charging output and terminal inspection",
      "Fastener, suspension and tyre-condition safety check",
    ],
    bookingTip: cityCopy?.bookingTip || `Share your cruiser make, model, engine capacity, recent service history and exact parking location${cityName ? ` in ${cityName}` : ""}. Mention any warning light, leak, noise or change in handling.`,
    brandsLead: "Cruiser and modern-classic support across popular Indian and international makes. Share the exact model so the service and parts requirement can be confirmed.",
    brands: [
      { name: "Royal Enfield", slug: "royal-enfield", models: "Classic, Bullet, Hunter, Meteor" },
      { name: "Bajaj", slug: "bajaj", models: "Avenger 160, Avenger 220" },
      { name: "Honda", slug: "honda", models: "H'ness CB350, CB350RS" },
      { name: "Jawa", slug: "jawa", models: "Jawa 42, Perak, 350" },
      { name: "Yezdi", slug: "yezdi", models: "Roadster, Scrambler" },
      { name: "Harley-Davidson", slug: "harley-davidson", models: "X440, Street series" },
      { name: "Triumph", slug: "triumph", models: "Speed 400, Bonneville" },
      { name: "TVS", slug: "tvs", models: "Ronin" },
    ],
    otherModelsText: "Ride another cruiser or modern classic? Share the make, model and engine capacity when booking so availability and pricing can be confirmed.",
    coverageTitle: `Cruiser bike service across ${place}`,
    coverageText: cityCopy?.coverageText || `Book doorstep cruiser maintenance in the listed service areas across ${place}. Exact availability is confirmed using your full address and motorcycle details.`,
    faqsTitle: `Cruiser bike service in ${place}: your questions`,
    faqs: getCruiserFaqs(place),
    specs: [
      { label: "Motorcycle details", value: "Exact make, model and engine-capacity range required" },
      { label: "Doorstep scope", value: "Maintenance, inspection and approved accessible repairs" },
      { label: "Controls and drivetrain", value: "Chain, clutch, throttle and brake concerns checked by symptom" },
      { label: "Additional work", value: "Explained and quoted before it begins" },
      { label: "Payment", value: "After the approved service is completed" },
    ],
    guidesTitle: "Prepare your cruiser for a doorstep inspection",
    guidesLead: "Model, parking and symptom details help the mechanic plan around a heavier motorcycle.",
    guides: [
      { title: "Describe low-speed behaviour", text: "Mention heavy clutch action, steering feel, chain noise or vibration during take-off and slow manoeuvres." },
      { title: "Share touring or storage history", text: "Tell us about a recent long ride, long storage period, battery charging or service work that may relate to the symptom." },
      { title: "Allow stable working space", text: "Park on firm, level ground with enough room around the heavier motorcycle for safe inspection and approved service." },
    ],
    finalTitle: `Ready to service your cruiser in ${place}?`,
    finalLead: "Book at your home or office parking. If you are unsure which service to choose, call or WhatsApp with the motorcycle model, symptoms and location.",
    citiesTitle: cityName ? "Cruiser bike service in other cities" : "Book doorstep cruiser bike service by city",
    cityPath: "/cruiser-bike",
  };
}

export default function CruiserBikeLayout({ bikesServiced, rating, city, citySlug, areas = [] }: { bikesServiced: string; rating: number; city?: ScooterCityContent; citySlug?: string; areas?: string[] }) {
  return (
    <ScootyRepairLayout
      bikesServiced={bikesServiced}
      rating={rating}
      city={city}
      areas={areas}
      bike={cruiserContent(city?.name, citySlug)}
    />
  );
}
