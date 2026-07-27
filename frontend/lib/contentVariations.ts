// Helper to generate deterministic, unique SEO content variations based on locality to prevent duplicate content flags from search engines.

function getHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// Selects an item from an array deterministically based on key
function selectVariation<T>(key: string, arr: T[]): T {
  const index = getHash(key) % arr.length;
  return arr[index];
}

export function getIntroParagraph(localityName: string, cityName: string): string {
  const variations = [
    `Searching for a prompt, verified two-wheeler mechanic near me in ${localityName}? We deliver direct, on-demand bike repair and scooter servicing at your home, office parking, or roadside across ${localityName} with clear flat rates, seasoned technicians, and our signature 15-day service guarantee.`,
    `Skip the ride to congested local garages. Get professional motorcycle mechanics and doorstep scooter maintenance in ${localityName} today. We send certified mechanics to service your two-wheeler right in your driveway, housing society basement, or office block with honest, transparent pricing.`,
    `Keep your bike or scooty running perfectly without leaving your house. We provide trusted doorstep two-wheeler service inside ${localityName}, offering rapid-response roadside assistance, emergency battery swaps, brake repairs, and routine checkups backed by genuine OEM spares.`,
    `If you're located in ${localityName} and need a reliable bike mechanic near me, FixWheel brings the workshop to your doorstep. Our verified experts handle full engine servicing, brake tuning, oil replacements, and diagnostics directly at your villa or apartment block.`,
    `Need an engine oil change, tyre puncture fix, or battery replacement in ${localityName}? FixWheel sends a verified mobile mechanic directly to your home, office, or parking spot in ${localityName} — no garage visit needed. We service Activa, Royal Enfield, Pulsar, Splendor, Jupiter, and all two-wheelers.`,
    `FixWheel is ${localityName}'s trusted doorstep bike repair service. Whether it's a Honda Activa service, Royal Enfield oil change, brake pad replacement, or emergency tyre puncture — our mechanics reach your location in ${localityName} with all tools and spare parts, ready to fix it on the spot.`
  ];
  return selectVariation(localityName, variations);
}


export function getWhyChooseTitle(localityName: string): string {
  const variations = [
    `Why Riders in ${localityName} Choose FixWheel`,
    `The Smart Way to Service in ${localityName}`,
    `Why We Are ${localityName}'s Go-To Bike Servicing`,
    ` door-to-door convenience for ${localityName} bike owners`,
    `Premium Mechanic Services in ${localityName}`
  ];
  return selectVariation(localityName, variations);
}

export function getWhyChooseCards(localityName: string): { title: string; desc: string }[] {
  const h = getHash(localityName);
  
  const card1Options = [
    { title: "Driveway & Basement Servicing", desc: `Our mechanics carry full toolkits to work inside your residential gate, office basement, or lane in ${localityName}.` },
    { title: "Convenient Doorstep Repairs", desc: `No towing needed. We perform all repairs and diagnostics directly at your villa or apartment block in ${localityName}.` },
    { title: "On-Site Mechanical Care", desc: `We bring the complete workshop setup directly to your parking lot or driveway anywhere in ${localityName}.` }
  ];

  const card2Options = [
    { title: "Vetted Specialist Mechanics", desc: "Every technician undergoes background checks and rigorous training — absolute security for you and your vehicle." },
    { title: "Certified Professional Experts", desc: "Our staff consists of experienced two-wheeler technicians trained for multi-brand scooter and motorcycle maintenance." },
    { title: "Reliable Vetted Experts", desc: "Get highly professional, courteous, and qualified mechanics who prioritize your vehicle safety and clean work." }
  ];

  const card3Options = [
    { title: "100% Upfront Quotes", desc: "We explain all issues and lock the price before starting. No surprise charges or hidden fee revisions on your bill." },
    { title: "Honest Flat-Rate Pricing", desc: "Know exactly what you pay for. Transparent spares costing and fixed labor prices shown directly on the app." },
    { title: "Zero Surprise Billing", desc: "Approved costs are final costs. We never recommend unnecessary repairs or add sneaky add-ons to your receipt." }
  ];

  const card4Options = [
    { title: "15-Day Labor Warranty", desc: `Get ultimate peace of mind. Every routine doorstep service in ${localityName} is backed by our dedicated 15-day guarantee.` },
    { title: "Assured Quality Guarantee", desc: `We stand by our work. If you notice any tuning issues post-service, we revisit and resolve it free of charge.` },
    { title: "Post-Service Warranty Support", desc: `All tune-ups and parts replacement are covered under our customer-first service policy for complete reliability.` }
  ];

  return [
    selectVariation(localityName + "c1", card1Options),
    selectVariation(localityName + "c2", card2Options),
    selectVariation(localityName + "c3", card3Options),
    selectVariation(localityName + "c4", card4Options)
  ];
}

export function getHowItWorksTitle(localityName: string): string {
  const variations = [
    `How Our Doorstep Service Works in ${localityName}`,
    `4 Easy Steps to Get Your Bike Serviced in ${localityName}`,
    `Your Step-by-Step Doorstep Repair Guide in ${localityName}`,
    `Booking to Fixed: Simple Process in ${localityName}`
  ];
  return selectVariation(localityName, variations);
}

export function getHowItWorksSteps(localityName: string): string[] {
  const variationsSet = [
    [
      "Choose your repair or servicing package and pick your preferred time slot online.",
      `We match your request with a verified mechanic nearby in ${localityName} who immediately travels to you.`,
      "Your vehicle is serviced right in front of your eyes in your parking spot or yard.",
      "Pay securely online via UPI, card, or cash after checking the final job."
    ],
    [
      "Select a basic service or custom repair job on our platform in under a minute.",
      `A qualified mobile mechanic carrying OEM components is dispatched directly to ${localityName}.`,
      "The mechanic inspects and services your two-wheeler without requiring you to stand in queue.",
      "Settle the bill via your preferred payment mode and give your review rating."
    ],
    [
      "Book an appointment for bike/scooter repair at a time that fits your schedule.",
      `Our nearest mechanical expert in ${localityName} arrives fully equipped to handle your vehicle.`,
      "Watch the complete service being carried out cleanly with full transparency.",
      "Complete the transaction only after you are fully satisfied with the doorstep work."
    ]
  ];
  return selectVariation(localityName, variationsSet);
}

export function getCoverageTitle(localityName: string): string {
  const variations = [
    `FixWheel Coverage in ${localityName}`,
    `Serving All Streets & Localities in ${localityName}`,
    `Our Detailed Reach Across ${localityName}`,
    `Street-Level Service Throughout ${localityName}`
  ];
  return selectVariation(localityName, variations);
}

export function getFinalCTAText(localityName: string): { h2: string; p: string } {
  const variations = [
    {
      h2: `Book Professional Doorstep Service in ${localityName} Today.`,
      p: `Verified mechanics, transparent billing, and premium spare parts at your home or office in ${localityName}. Packages starting at just ₹499.`
    },
    {
      h2: `Get Your Bike Fixed Right at Your ${localityName} Residence.`,
      p: `Skip the long garage queues. Book a certified two-wheeler specialist for doorstep repair in ${localityName} with a 15-day labor warranty.`
    },
    {
      h2: `No More Towing Hassles. Service at Home in ${localityName}.`,
      p: `Schedule a diagnostic check, engine oil change, or brake repair with Noida's best doorstep service. Safe, clean, and trusted.`
    }
  ];
  return selectVariation(localityName, variations);
}
