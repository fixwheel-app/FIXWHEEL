import CityPageSections, { type CityPageConfig, type CityPageSectionsProps } from "@/components/city/CityPageSections";

const ghaziabadConfig: CityPageConfig = {
  cityName: "Ghaziabad",
  citySlug: "ghaziabad",
  hero: {
    eyebrow: "Bike mechanic at your doorstep · Ghaziabad",
    title: "Bike Mechanic Near Me",
    emphasis: "in Ghaziabad",
    lead: "FixWheel sends verified mobile mechanics directly to your house driveway, society parking lot, or office basement across Ghaziabad. No more pushing your broken motorcycle to local workshops — we carry the parts and tools to fix it on-site.",
    bookingLabel: "Book a Mechanic in Ghaziabad →",
    arrivalTime: "page-variable",
    ratingSource: "page-variable",
    serviceArea: "Ghaziabad NCR",
    ticketId: "FW-GZB-0941",
    ticketRows: [
      { label: "Service", value: "Basic Service + Oil" },
      { label: "Model", value: "Hero Splendor Plus" },
      { label: "Location", value: "Indirapuram, Ghaziabad" },
      { label: "Mechanic", value: "Verified ✓" },
      { label: "Warranty", value: "15 days" },
      { label: "Response", value: "35 min" },
    ],
    totalPaid: "₹999",
    ticketRegion: "GHAZIABAD · NCR",
  },
  coverage: {
    description: "We serve all major sectors, residential enclaves, and industrial areas across Ghaziabad. Select your locality below for detailed street coverage.",
    expansionLabel: "📍 + Expanding across Ghaziabad",
    areas: [
      { name: "Indirapuram", slug: "indirapuram" },
      { name: "Vaishali", slug: "vaishali" },
      { name: "Kaushambi", slug: "kaushambi" },
      { name: "Raj Nagar Extension", slug: "raj-nagar-extension" },
      { name: "Raj Nagar", slug: "raj-nagar" },
      { name: "Vasundhara", slug: "vasundhara" },
      { name: "Crossings Republik", slug: "crossings-republik" },
      { name: "Abhay Khand", slug: "abhay-khand" },
      { name: "Nyay Khand", slug: "nyay-khand" },
      { name: "Shakti Khand", slug: "shakti-khand" },
      { name: "Ahinsa Khand", slug: "ahinsa-khand" },
      { name: "Shipra Suncity", slug: "shipra-suncity" },
      { name: "Govindpuram", slug: "govindpuram" },
      { name: "Loni", slug: "loni" },
      { name: "Mohan Nagar", slug: "mohan-nagar" },
      { name: "Sanjay Nagar", slug: "sanjay-nagar" },
      { name: "Vijay Nagar", slug: "vijay-nagar" },
      { name: "Gandhi Nagar", slug: "gandhi-nagar" },
      { name: "Shastri Nagar", slug: "shastri-nagar" },
      { name: "Nehru Nagar", slug: "nehru-nagar" },
      { name: "Surya Nagar", slug: "surya-nagar" },
      { name: "Dilshad Garden border", slug: "dilshad-garden-border" },
      { name: "NH-24", slug: "nh-24" },
      { name: "GT Road", slug: "gt-road" },
      { name: "Hindon", slug: "hindon" },
      { name: "Dasna", slug: "dasna" },
    ],
  },
  why: {
    heading: "Professional service right in your driveway",
    description: "From Indirapuram enclaves to old GT Road stretches, our mechanics coordinate directly to service your two-wheeler while you relax at home.",
    cards: [
      { title: "On-site doorstep servicing", text: "We perform all servicing, oil changes, and repairs directly in your parking area, driveway, or office basement." },
      { title: "Verified, trained mechanics", text: "Every technician is background-checked, trained, and accountable, giving you complete safety and quality mechanical work." },
      { title: "Transparent itemized billing", text: "No surprise bills or hidden margins. You review and approve the exact quote before the service begins." },
      { title: "15-day service guarantee", text: "All doorstep work and mechanical tuning are backed by our standard 15-day labor warranty for complete peace of mind." },
    ],
  },
  how: [
    { title: "1. Pick a service", text: "Select what your bike needs and pick a time slot on our app or website." },
    { title: "2. Mechanic dispatched", text: "A verified mechanic near your location in Ghaziabad is assigned and heads to you." },
    { title: "3. Repaired on-site", text: "Your bike is fixed right where it is parked — home, office, or society parking." },
    { title: "4. Pay and rate", text: "Pay the quoted amount via UPI, card, or cash, then rate the mechanic." },
  ],
  reviews: {
    heading: "From Ghaziabad riders",
    rating: "4.7★",
    items: [
      { text: "Excellent experience in Indirapuram. The mechanic coordinated with my high-rise apartment security and did the brake disc change in the basement. Extremely convenient.", author: "Sanjay P. — Indirapuram" },
      { text: "My Scooty had a flat tyre near GT Road. FixWheel dispatched a mechanic who reached in 25 minutes, did a puncture patch, and got me moving again. Genuine savior.", author: "Garima S. — Vaishali" },
      { text: "No hidden margins, no pushy sales. Replaced my engine oil and tuned the carburetor in my apartment parking in Raj Nagar. Will use again.", author: "Sameer M. — Raj Nagar Extension" },
    ],
  },
  partner: {
    heading: "Are you a bike mechanic in Ghaziabad?",
    description: "Join the FixWheel network and receive bookings from riders in Ghaziabad. Set your own hours and manage everything from your phone.",
    registrationText: "Register in a few minutes and start receiving service requests in Ghaziabad.",
  },
  faqs: [
    { question: "How quickly can a mechanic reach me in Ghaziabad?", answer: "In most Ghaziabad sectors and residential blocks, our mechanics arrive within 45 minutes of booking confirmation." },
    { question: "What does doorstep bike repair cost in Ghaziabad?", answer: "Basic service starts from ₹550 depending on your bike model. We confirm the exact price before starting any work." },
    { question: "Which areas in Ghaziabad does FixWheel cover?", answer: "We cover all major locations including Indirapuram, Vaishali, Kaushambi, Vasundhara, Raj Nagar Extension, Sanjay Nagar, and Crossings Republik." },
    { question: "Do you offer emergency roadside help in Ghaziabad?", answer: "Yes, we dispatch mechanics for roadside breakdowns across our Ghaziabad service area, including NH-24 and GT Road. Available 24/7." },
    { question: "Is there a warranty on the repair?", answer: "Yes, all repairs come with a 15-day labor warranty. If anything goes wrong with the same issue, we send a mechanic back at no extra charge." },
  ],
  roadside: {
    heading: "Ghaziabad Roadside Assistance",
    description: "Stranded on NH-24, GT Road, or near Hindon River? A mechanic will come to your exact location with tools to fix the issue on the spot.",
  },
  finalCta: {
    heading: "Book doorstep bike repair in Ghaziabad.",
    description: "Verified mechanic at your home or office across Indirapuram, Vaishali, Kaushambi, Vasundhara, Raj Nagar & all Ghaziabad areas. Starting ₹550.",
  },
};

export function GhaziabadSections(props: Omit<CityPageSectionsProps, "config">) {
  return <CityPageSections config={ghaziabadConfig} {...props} />;
}
