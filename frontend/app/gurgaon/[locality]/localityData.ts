export interface LocalityDetails {
  name: string;
  slug: string;
  eta: string;
  subRegionText: string;
  heroText: string;
  whyChooseText: string;
  coveragePoints: string[];
  reviews: { stars: string; text: string; who: string }[];
  faqs: { q: string; a: string }[];
  servicePrice: string;
  aggregateRating: string;
  reviewCount: string;
  topServices: { rank: string; title: string; desc: string; link: string }[];
}

export const LOCALITY_DB: Record<string, LocalityDetails> = {
  "dlf-phase-1": {
    name: "DLF Phase 1",
    slug: "dlf-phase-1",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.8",
    reviewCount: "84",
    subRegionText: "Block A–H, Golf Course Road stretch, Cyber City border, and Shopping Mall stretch.",
    heroText: "FixWheel offers doorstep bike repair service in DLF Phase 1, Gurgaon. A verified mechanic will reach your home, office parking, or roadside location to service or repair your two-wheeler on the spot.",
    whyChooseText: "DLF Phase 1 is a premium residential area. Guarded gates and high traffic can make garage visits a hassle. Our on-site service handles everything right where you are parked.",
    coveragePoints: [
      "Block A to H",
      "Shopping Mall Road",
      "Ridge Road Boundary",
      "Golf Course Road Stretch",
      "Silver Oaks Avenue",
      "Arjun Marg Market Stretch",
      "Qutub Plaza Boundary"
    ],
    reviews: [
      { stars: "★★★★★", text: "Mechanic arrived at Block C within 45 minutes. Chain clean and brake adjustment done perfectly.", who: "Arjun Mehta — Block C, DLF Phase 1" },
      { stars: "★★★★★", text: "Very professional service near Arjun Marg. Clear pricing upfront, no hidden charges.", who: "Nisha Sen — Arjun Marg, DLF Phase 1" }
    ],
    faqs: [
      { q: "How long does doorstep service take in DLF Phase 1?", a: "Most minor repairs are finished in 30 to 45 minutes. We confirm the scope before starting." },
      { q: "Can the mechanic enter gated societies in DLF Phase 1?", a: "Yes, our verified mechanics enter all major societies in DLF Phase 1 by registering at the security gate." }
    ],
    topServices: [
      { rank: "#1 IN DLF PHASE 1", title: "Basic Service", desc: "Brake check, chain clean, spark plug clean, and air filter inspection.", link: "/services/basic-service" },
      { rank: "#2 IN DLF PHASE 1", title: "Engine Oil Change", desc: "Old oil drained, OEM-grade oil refilled, and oil filter checked.", link: "/services/oil-change" },
      { rank: "#3 IN DLF PHASE 1", title: "Battery Replacement", desc: "On-site battery diagnostic, jump-start, and warranty replacement.", link: "/services/battery-replacement" },
      { rank: "#4 IN DLF PHASE 1", title: "Brake Replacement", desc: "Brake pad replacement and brake cable calibration.", link: "/services/brake-repair" }
    ]
  },
  "dlf-phase-2": {
    name: "DLF Phase 2",
    slug: "dlf-phase-2",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "92",
    subRegionText: "Block K–M, Heritage City, Cyber City border, and MG Road Metro stretch.",
    heroText: "Doorstep bike mechanic and two-wheeler servicing in DLF Phase 2, Gurgaon. Avoid local garage queues — we send a trained mechanic to your location with all required tools.",
    whyChooseText: "Located right next to Cyber City, DLF Phase 2 has heavy commuter traffic. Getting your bike serviced at your office or home saves you valuable hours.",
    coveragePoints: [
      "Block K to M",
      "Heritage City Block",
      "Jacaranda Marg",
      "Cyber City Border Stretch",
      "MG Road Metro Area",
      "Oakwood Estate Boundary",
      "Belvedere Park Block"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got my Activa serviced at my residential parking in Block L. Very clean work.", who: "Rohan Gupta — Block L, DLF Phase 2" },
      { stars: "★★★★★", text: "My bike broke down near IFFCO Chowk border. The mechanic was dispatched and fixed it on the spot.", who: "Amit Verma — IFFCO Chowk Boundary, DLF Phase 2" }
    ],
    faqs: [
      { q: "Is emergency roadside help available in DLF Phase 2?", a: "Yes, we dispatch mechanics 24/7 for breakdown assistance in DLF Phase 2 and near Cyber City." },
      { q: "How are spare parts managed?", a: "We supply genuine or OEM-grade parts. The mechanic will check with you and confirm the price before fitting anything." }
    ],
    topServices: [
      { rank: "#1 IN DLF PHASE 2", title: "Basic Service", desc: "Regular maintenance checklist for hassle-free daily commuting.", link: "/services/basic-service" },
      { rank: "#2 IN DLF PHASE 2", title: "Engine Oil Change", desc: "Premium mineral or synthetic oil top-up and filter replacement.", link: "/services/oil-change" },
      { rank: "#3 IN DLF PHASE 2", title: "Jump Start Service", desc: "On-site battery jump-starting for bikes and scooters.", link: "/book" },
      { rank: "#4 IN DLF PHASE 2", title: "OBD Diagnostics", desc: "Connecting diagnostic scanners to read system fault codes.", link: "/book" }
    ]
  },
  "dlf-phase-3": {
    name: "DLF Phase 3",
    slug: "dlf-phase-3",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.8",
    reviewCount: "115",
    subRegionText: "Block U–V, Moulsari Avenue, Pink Town House, and Cyber Hub boundary.",
    heroText: "Doorstep bike repair in DLF Phase 3, Gurgaon. Verified mechanics arrive at your home, PG, or corporate parking to service your scooter or motorcycle on-site.",
    whyChooseText: "DLF Phase 3 houses thousands of corporate professionals and students. Finding a trustworthy mechanic nearby is tough. FixWheel brings certified repair services to you.",
    coveragePoints: [
      "Block U and V",
      "Moulsari Avenue Stretch",
      "Pink Town House Block",
      "Cyber Hub Boundary Area",
      "DLF Phase 3 Metro Stretch",
      "Gurgaon-Delhi Border Zone",
      "Nathupur Road Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Living in a PG in Block U, didn't want to push my bike. Mechanic came right to the building gate.", who: "Kartik Nair — Block U, DLF Phase 3" },
      { stars: "★★★★★", text: "Great diagnostic work near Moulsari Avenue. Engine sound has improved significantly.", who: "Pooja Malhotra — Moulsari Avenue, DLF Phase 3" }
    ],
    faqs: [
      { q: "Do you service bikes in DLF Phase 3 PGs and rented apartments?", a: "Yes, we service bikes in all residential spaces, apartments, and PG parkings in DLF Phase 3." },
      { q: "Is there a service warranty?", a: "Yes, we provide a 15-day service warranty on all labor and repair works." }
    ],
    topServices: [
      { rank: "#1 IN DLF PHASE 3", title: "Basic Service", desc: "Quick check of brakes, spark plugs, filters, and electrical circuits.", link: "/services/basic-service" },
      { rank: "#2 IN DLF PHASE 3", title: "Engine Oil Change", desc: "Complete draining and refill with high-grade motorcycle oil.", link: "/services/oil-change" },
      { rank: "#3 IN DLF PHASE 3", title: "Puncture Repair", desc: "On-site tyre puncture fixes for tubeless and tube tyres.", link: "/services/tyre-replacement" },
      { rank: "#4 IN DLF PHASE 3", title: "Clutch Tuning", desc: "Clutch plate adjustment and cable replacement.", link: "/services/brake-repair" }
    ]
  },
  "dlf-phase-4": {
    name: "DLF Phase 4",
    slug: "dlf-phase-4",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "78",
    subRegionText: "Galleria Market Road, Chakkarpur stretch, and Supermart 1 & 2 blocks.",
    heroText: "FixWheel offers doorstep bike repair in DLF Phase 4, Gurgaon. Get your bike serviced at home or office by a verified mechanic with pre-confirmed pricing.",
    whyChooseText: "DLF Phase 4 is always bustling with activity around Galleria. Save yourself a trip through market traffic — our mobile mechanic comes directly to your residential parking.",
    coveragePoints: [
      "Galleria Market Road",
      "Supermart 1 Area",
      "Supermart 2 Block",
      "Chakkarpur Boundary",
      "Sector 27/28 Dividing Road",
      "Ridgewood Estate Block",
      "Windsor Court Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Had a flat tyre near Galleria. Mechanic arrived within 45 minutes and fixed it.", who: "Siddharth Ray — Galleria Road, DLF Phase 4" },
      { stars: "★★★★★", text: "Got my Avenger serviced in my apartment lot. Zero hassle, fixed pricing.", who: "Monica Shah — Ridgewood Estate, DLF Phase 4" }
    ],
    faqs: [
      { q: "How do I pay after the service?", a: "You can pay via UPI, credit/debit card, net banking, or cash once the service is complete." },
      { q: "What is your coverage area in DLF Phase 4?", a: "We cover all residential societies, markets (Galleria, Supermart), and main roads." }
    ],
    topServices: [
      { rank: "#1 IN DLF PHASE 4", title: "Basic Service", desc: "Default maintenance package for standard urban commuting.", link: "/services/basic-service" },
      { rank: "#2 IN DLF PHASE 4", title: "Engine Oil Change", desc: "Oil change with filter check to keep engine running cool.", link: "/services/oil-change" },
      { rank: "#3 IN DLF PHASE 4", title: "Brake Disc Repair", desc: "Replacing pads, calibration, and disc replacement.", link: "/services/brake-repair" },
      { rank: "#4 IN DLF PHASE 4", title: "Battery Checkup", desc: "Testing charging voltage, battery health, and jump start.", link: "/services/battery-replacement" }
    ]
  },
  "dlf-phase-5": {
    name: "DLF Phase 5",
    slug: "dlf-phase-5",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.8",
    reviewCount: "86",
    subRegionText: "Horizon Center boundary, Sector 53/54 border, Club Drive, and Park Drive.",
    heroText: "Verified doorstep bike repair service in DLF Phase 5, Gurgaon. Mobile mechanics arrive at your home or office with genuine spare parts to service your bike.",
    whyChooseText: "From luxury condominiums to high-rise offices, DLF Phase 5 demands efficiency. Our mechanics operate around your schedule, repairing your vehicle in your parking lot.",
    coveragePoints: [
      "Horizon Center Block",
      "Park Drive Area",
      "Club Drive Stretch",
      "The Crest Boundary",
      "The Icon Area",
      "Sector 53/54 Metro Belt",
      "Trinity Towers Block"
    ],
    reviews: [
      { stars: "★★★★★", text: "Serviced my sports bike in the apartment parking. Clean work, verified mechanic.", who: "Vikram Malhotra — Park Drive, DLF Phase 5" },
      { stars: "★★★★★", text: "Extremely professional. Obeyed all society visitor protocols and finished quickly.", who: "Anjali Kapur — Horizon Center Area, DLF Phase 5" }
    ],
    faqs: [
      { q: "Can you service high-performance bikes in DLF Phase 5?", a: "Yes, we have specialized mechanics trained for sports bikes and premium motorcycles." },
      { q: "How long does it take for a mechanic to arrive?", a: "On average, a verified mechanic arrives within 45 minutes of booking confirmation." }
    ],
    topServices: [
      { rank: "#1 IN DLF PHASE 5", title: "Basic Service", desc: "Essential checklist check, lube and tuning for daily riders.", link: "/services/basic-service" },
      { rank: "#2 IN DLF PHASE 5", title: "Engine Oil Change", desc: "Draining oil and replacing with recommended OEM grade.", link: "/services/oil-change" },
      { rank: "#3 IN DLF PHASE 5", title: "Chain Sprocket", desc: "Replacing chain set and sprockets for clean power delivery.", link: "/book" },
      { rank: "#4 IN DLF PHASE 5", title: "OBD Inspection", desc: "Electronic scanning to verify engine light issues.", link: "/book" }
    ]
  },
  "sushant-lok": {
    name: "Sushant Lok",
    slug: "sushant-lok",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "112",
    subRegionText: "Sushant Lok Phase 1 & 2, Vyapar Kendra Road, Galleria boundary, and Gold Souk stretch.",
    heroText: "Get doorstep bike repair in Sushant Lok, Gurgaon. Background-checked mechanics arrive at your home or society gate to handle your two-wheeler repair on the spot.",
    whyChooseText: "Avoid pushing your bike through Vyapar Kendra traffic or waiting at local shops. FixWheel brings experienced mechanics directly to your residential address.",
    coveragePoints: [
      "Sushant Lok Phase 1",
      "Sushant Lok Phase 2",
      "Vyapar Kendra Road",
      "Gold Souk Area",
      "C-Block Sushant Lok",
      "Sector 43 Border Area",
      "Huda Metro Stretch"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a basic service done at Block C. Very thorough and mechanic cleaned up the area after work.", who: "Rahul Sinha — Block C, Sushant Lok" },
      { stars: "★★★★★", text: "Saved me a lot of time. Repaired my scooter in the driveway. Highly recommended.", who: "Geeta Rao — Vyapar Kendra Area, Sushant Lok" }
    ],
    faqs: [
      { q: "What are your service timings in Sushant Lok?", a: "We take bookings from 8 AM to 8 PM. Emergency roadside help operates 24/7." },
      { q: "Do you cover Sushant Lok Phase 2 and 3?", a: "Yes, our mechanics cover all blocks of Sushant Lok Phase 1, Phase 2, and Phase 3." }
    ],
    topServices: [
      { rank: "#1 IN SUSHANT LOK", title: "Basic Service", desc: "Spark plug, air filter, brake and electrical systems check.", link: "/services/basic-service" },
      { rank: "#2 IN SUSHANT LOK", title: "Engine Oil Change", desc: "Oil drain, oil filter clean, and refilling with OEM oil.", link: "/services/oil-change" },
      { rank: "#3 IN SUSHANT LOK", title: "Tyre Replacement", desc: "Replacing tyres or repairing tube/tubeless punctures.", link: "/services/tyre-replacement" },
      { rank: "#4 IN SUSHANT LOK", title: "Carburetor Clean", desc: "Carburetor cleaning and tuning for optimal mileage.", link: "/book" }
    ]
  },
  "golf-course-road": {
    name: "Golf Course Road",
    slug: "golf-course-road",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.8",
    reviewCount: "132",
    subRegionText: "Sector 42, Sector 43, Sector 53, Sector 54, and Horizon Center stretch.",
    heroText: "Verified doorstep bike repair service along Golf Course Road, Gurgaon. Mobile mechanics arrive at your home, office, or roadside location to service your two-wheeler.",
    whyChooseText: "Golf Course Road is known for high-rise condos and corporate centers. Save your weekends — book a certified mechanic to service your motorcycle in your parking lot.",
    coveragePoints: [
      "Sector 42 & 43 Blocks",
      "Sector 53 & 54 Metro Belt",
      "Horizon Plaza Area",
      "Suncity Boundary",
      "Genpact Crossing Area",
      "Global Foyer Stretch",
      "Central Park Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Very convenient. Got my bike oil changed during office hours in the basement parking.", who: "Suresh Pillai — Genpact Crossing, Golf Course Road" },
      { stars: "★★★★★", text: "Mechanic was knowledgeable and came on time to Suncity. Excellent service quality.", who: "Meera Nair — Suncity, Golf Course Road" }
    ],
    faqs: [
      { q: "Which brands do you service on Golf Course Road?", a: "We service Honda, Hero, Bajaj, TVS, Royal Enfield, Yamaha, Suzuki, KTM, and EV brands." },
      { q: "Is pricing different for premium bikes?", a: "Pricing starts at ₹550. Premium and high-displacement bikes have custom packages detailed on our services page." }
    ],
    topServices: [
      { rank: "#1 IN GOLF COURSE ROAD", title: "Basic Service", desc: "Spark plug check, chain lube, brake checks, and cleaning.", link: "/services/basic-service" },
      { rank: "#2 IN GOLF COURSE ROAD", title: "Engine Oil Change", desc: "Complete drain and synthetic/semi-synthetic oil refilling.", link: "/services/oil-change" },
      { rank: "#3 IN GOLF COURSE ROAD", title: "OBD Inspection", desc: "Scanning engine and sensors for diagnostic fault codes.", link: "/book" },
      { rank: "#4 IN GOLF COURSE ROAD", title: "Brake Disc Swap", desc: "Replacing brake pads, shoes, or discs on-site.", link: "/services/brake-repair" }
    ]
  },
  "sohna-road": {
    name: "Sohna Road",
    slug: "sohna-road",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "145",
    subRegionText: "Subhash Chowk, Vatika City, Sector 47/48, CD Chowk, and Badshahpur border.",
    heroText: "Doorstep bike repair and scooter service on Sohna Road, Gurgaon. Verified mechanics arrive at your home or office parking with a mobile service unit to fix your ride.",
    whyChooseText: "Avoid the notorious Sohna Road traffic. FixWheel brings experienced mechanics to your doorstep, saving you the trouble of towing or pushing a broken-down vehicle.",
    coveragePoints: [
      "Subhash Chowk Area",
      "CD Chowk Block",
      "Vatika City Area",
      "Sector 47 & 48 Sectors",
      "Badshahpur Border Zone",
      "Omaxe Mall Stretch",
      "Spaze Privy Block"
    ],
    reviews: [
      { stars: "★★★★★", text: "Bike stopped starting near Subhash Chowk. Mechanic was there in 45 min and fixed a wiring fault.", who: "Dinesh Kumar — Subhash Chowk, Sohna Road" },
      { stars: "★★★★★", text: "Very prompt service in Vatika City. Clean, transparent, and polite mechanic.", who: "Shreya Sen — Vatika City, Sohna Road" }
    ],
    faqs: [
      { q: "Do you service Sohna Road sectors up to Badshahpur?", a: "Yes, we cover all sectors along Sohna Road, including Sector 47, 48, 49, 50, and Badshahpur." },
      { q: "What is your arrival time on Sohna Road?", a: "A mechanic typically reaches Sohna Road locations within 45 minutes." }
    ],
    topServices: [
      { rank: "#1 IN SOHNA ROAD", title: "Basic Service", desc: "General tuning, brake checks, and filter cleans for daily commuters.", link: "/services/basic-service" },
      { rank: "#2 IN SOHNA ROAD", title: "Engine Oil Change", desc: "OEM-grade oil refilled and old oil safely drained.", link: "/services/oil-change" },
      { rank: "#3 IN SOHNA ROAD", title: "Puncture Repair", desc: "Spot tyre repair for tubeless scooters and motorcycles.", link: "/services/tyre-replacement" },
      { rank: "#4 IN SOHNA ROAD", title: "Chain Sprocket", desc: "Replacing drive chains and sprockets at your doorstep.", link: "/book" }
    ]
  },
  "udyog-vihar": {
    name: "Udyog Vihar",
    slug: "udyog-vihar",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "98",
    subRegionText: "Phase 1 to 5, NH-8 stretch, Cyber City border, and Atlas Chowk.",
    heroText: "FixWheel offers doorstep bike repair in Udyog Vihar, Gurgaon. Certified mechanics come directly to your office parking space or office complex to service your two-wheeler.",
    whyChooseText: "Udyog Vihar is Gurgaon's industrial and IT hub. Getting your two-wheeler serviced during work hours means you don't lose any personal time on the weekend.",
    coveragePoints: [
      "Udyog Vihar Phase 1",
      "Udyog Vihar Phase 2 & 3",
      "Udyog Vihar Phase 4 & 5",
      "Atlas Chowk Area",
      "NH-8 Service Lane Stretch",
      "Dundahera Border Zone",
      "Shankar Chowk Boundary"
    ],
    reviews: [
      { stars: "★★★★★", text: "Saved my day. Flat tyre in office parking at Phase 4. Mechanic fixed it before my shift ended.", who: "Vikas Yadav — Phase 4, Udyog Vihar" },
      { stars: "★★★★★", text: "Got a general oil service done while I was at my desk. Super convenient.", who: "Neha Sharma — Phase 2, Udyog Vihar" }
    ],
    faqs: [
      { q: "Can mechanics work in corporate office basements?", a: "Yes, as long as office security allows visitor entry. Most IT parks in Udyog Vihar permit this." },
      { q: "Do you offer emergency jump-starts in Udyog Vihar?", a: "Yes, we dispatch mechanics for flat battery jump-starts across all phases." }
    ],
    topServices: [
      { rank: "#1 IN UDYOG VIHAR", title: "Basic Service", desc: "Brake checkup, chain lubing, and general component test.", link: "/services/basic-service" },
      { rank: "#2 IN UDYOG VIHAR", title: "Jump Start Service", desc: "On-site battery jump-starts for commuter bikes.", link: "/book" },
      { rank: "#3 IN UDYOG VIHAR", title: "Engine Oil Change", desc: "Full oil change and disposal of old lubricants.", link: "/services/oil-change" },
      { rank: "#4 IN UDYOG VIHAR", title: "Puncture Repair", desc: "On-site tubeless puncture extraction and plug insertion.", link: "/services/tyre-replacement" }
    ]
  },
  "dwarka-expressway": {
    name: "Dwarka Expressway",
    slug: "dwarka-expressway",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.6",
    reviewCount: "67",
    subRegionText: "Sector 99–115, Sector 82–86, Bajghera border, and New Gurgaon stretch.",
    heroText: "Verified doorstep bike repair and scooter service along Dwarka Expressway, Gurgaon. Mobile mechanics arrive at your home or roadside location to service your vehicle.",
    whyChooseText: "New societies along Dwarka Expressway often lack nearby service centers. FixWheel bridges the gap by delivering certified garage services directly to your building.",
    coveragePoints: [
      "Sector 99 to 105 Blocks",
      "Sector 106 to 115 Area",
      "Sector 82 to 86 Sector Belt",
      "Bajghera Border Area",
      "New Gurgaon Crossing",
      "Ramprastha City Block",
      "Elan Miracle Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "No mechanic shops near Sector 102. Found FixWheel, they serviced my Pulsar in the society parking.", who: "Rajesh Ranjan — Sector 102, Dwarka Expressway" },
      { stars: "★★★★★", text: "Prompt arrival near the toll gate. Good communication and fixed the clutch issue.", who: "Tarun Gill — Sector 84, Dwarka Expressway" }
    ],
    faqs: [
      { q: "Do you cover all new sectors along Dwarka Expressway?", a: "Yes, we cover Sectors 81 through 115 along the expressway corridor." },
      { q: "What is the arrival time here?", a: "As it is an expanding corridor, arrival averages 45 minutes." }
    ],
    topServices: [
      { rank: "#1 IN DWARKA EXPRESSWAY", title: "Basic Service", desc: "Spark plug, chain lubrication, and brake alignment check.", link: "/services/basic-service" },
      { rank: "#2 IN DWARKA EXPRESSWAY", title: "Engine Oil Change", desc: "Draining oil and replacing with high-grade semi-synthetic.", link: "/services/oil-change" },
      { rank: "#3 IN DWARKA EXPRESSWAY", title: "Tyre Replacement", desc: "Replacing tyres or repairing flats on-site.", link: "/services/tyre-replacement" },
      { rank: "#4 IN DWARKA EXPRESSWAY", title: "Chain Sprocket", desc: "Full drive chain and sprocket replacements.", link: "/book" }
    ]
  },
  "mg-road": {
    name: "MG Road",
    slug: "mg-road",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "82",
    subRegionText: "Sahara Mall stretch, Metro Station Road, IFFCO Chowk boundary, and Heritage City.",
    heroText: "FixWheel offers doorstep bike repair on MG Road, Gurgaon. Certified mechanics come directly to your office parking space or home complex to service your two-wheeler.",
    whyChooseText: "MG Road is always busy with shoppers and commuters. Avoid pushing a broken-down scooter — book our verified mobile mechanic to fix it on the spot.",
    coveragePoints: [
      "Sahara Mall Area",
      "MG Road Metro Station",
      "IFFCO Chowk Boundary",
      "Heritage City Block",
      "Saraswati Vihar Area",
      "Chakkarpur Crossing",
      "Maruti Vihar Block"
    ],
    reviews: [
      { stars: "★★★★★", text: "Scooter broke down near Sahara Mall. Mechanic arrived in 45 min and fixed the fuse issue.", who: "Vijay Thapa — Sahara Mall Area, MG Road" },
      { stars: "★★★★★", text: "Got my Royal Enfield general checkup done. Efficient and clean work.", who: "Sanjay Dutta — Heritage City, MG Road" }
    ],
    faqs: [
      { q: "Do you cover the residential blocks near MG Road?", a: "Yes, we cover Saraswati Vihar, Maruti Vihar, Heritage City, and all nearby blocks." },
      { q: "Can I schedule a service in advance?", a: "Yes, you can pick any time slot that suits you on our booking page." }
    ],
    topServices: [
      { rank: "#1 IN MG ROAD", title: "Basic Service", desc: "Spark plug clean, filter check, and brake checkups.", link: "/services/basic-service" },
      { rank: "#2 IN MG ROAD", title: "Engine Oil Change", desc: "Mineral or synthetic engine oil change with filter clean.", link: "/services/oil-change" },
      { rank: "#3 IN MG ROAD", title: "Puncture Repair", desc: "On-site puncture repairs for tubeless two-wheelers.", link: "/services/tyre-replacement" },
      { rank: "#4 IN MG ROAD", title: "Brake Disc Replacement", desc: "Replacing brake pads and cable adjustments.", link: "/services/brake-repair" }
    ]
  },
  "cyber-city": {
    name: "Cyber City",
    slug: "cyber-city",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.8",
    reviewCount: "105",
    subRegionText: "Building 5 to 10, Cyber Hub Plaza, Shankar Chowk, and NH-8 slip road.",
    heroText: "Verified doorstep bike repair and scooter service in Cyber City, Gurgaon. Mobile mechanics arrive at your corporate office building or roadside location to service your ride.",
    whyChooseText: "Don't let a dead battery or flat tyre disrupt your workday. Our mechanics handle repairs directly in your office parking lot while you work.",
    coveragePoints: [
      "Building 5, 6, 7 and 8",
      "Building 9 and 10",
      "Cyber Hub Plaza Area",
      "Shankar Chowk Crossing",
      "NH-8 Slip Road Area",
      "Gateway Tower Block",
      "Infinity Towers Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Flat battery in Building 6 basement. Mechanic arrived with a jump start and battery replacement option.", who: "Rahul Jaiswal — Building 6, Cyber City" },
      { stars: "★★★★★", text: "Had a flat tyre near Cyber Hub. Fixed quickly by the dispatched mechanic.", who: "Karan Anand — Cyber Hub Area, Cyber City" }
    ],
    faqs: [
      { q: "Can the mechanic service my bike in the multi-level parking?", a: "Yes, we work in multi-level corporate parkings as long as access is allowed." },
      { q: "Is 24/7 roadside assistance available here?", a: "Yes, we provide 24/7 breakdown help near Cyber City and Shankar Chowk." }
    ],
    topServices: [
      { rank: "#1 IN CYBER CITY", title: "Jump Start Service", desc: "Emergency battery jump-start inside office parkings.", link: "/book" },
      { rank: "#2 IN CYBER CITY", title: "Puncture Repair", desc: "On-location puncture checks and flat tyre repairs.", link: "/services/tyre-replacement" },
      { rank: "#3 IN CYBER CITY", title: "Basic Service", desc: "Brakes, plugs, and electrical systems check.", link: "/services/basic-service" },
      { rank: "#4 IN CYBER CITY", title: "OBD Scanner Diagnostics", desc: "Scanning engine codes for troubleshooting.", link: "/book" }
    ]
  },
  "south-city-1": {
    name: "South City 1",
    slug: "south-city-1",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "81",
    subRegionText: "Block A–K, Arcade Market stretch, Signature Towers boundary, and Sector 30/41.",
    heroText: "Doorstep bike mechanic and two-wheeler servicing in South City 1, Gurgaon. Avoid local garage queues — we send a trained mechanic to your location with all required tools.",
    whyChooseText: "South City 1 is centrally located. Avoid traffic on the sector roads — get your bike serviced in your driveway by a verified professional.",
    coveragePoints: [
      "Block A to K",
      "Arcade Market Area",
      "Signature Towers Boundary",
      "Sector 30 Boundary",
      "Sector 41 Border",
      "Unitech House Area",
      "South City Mall Stretch"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got my Vespa serviced at my driveway in Block B. Prompt and professional mechanic.", who: "Aditi Roy — Block B, South City 1" },
      { stars: "★★★★★", text: "Had a worn chain. Mechanic replaced the sprocket and chain on the spot. Great convenience.", who: "Gaurav Malhotra — Block F, South City 1" }
    ],
    faqs: [
      { q: "Are parts covered under warranty?", a: "Manufacturer warranties apply to new batteries and parts. Our labor has a 15-day warranty." },
      { q: "Do you service electric scooters here?", a: "Yes, we handle Ather, Ola, and other major EV models at your doorstep." }
    ],
    topServices: [
      { rank: "#1 IN SOUTH CITY 1", title: "Basic Service", desc: "Air filter clean, plug check, and general lubing.", link: "/services/basic-service" },
      { rank: "#2 IN SOUTH CITY 1", title: "Engine Oil Change", desc: "Synthetic or mineral oil drainage and refilling.", link: "/services/oil-change" },
      { rank: "#3 IN SOUTH CITY 1", title: "Brake Repair", desc: "Replacing brake pads, shoes, and cable calibrations.", link: "/services/brake-repair" },
      { rank: "#4 IN SOUTH CITY 1", title: "Chain Sprocket Swap", desc: "Replacing worn chain and sprocket sets.", link: "/book" }
    ]
  },
  "south-city-2": {
    name: "South City 2",
    slug: "south-city-2",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "76",
    subRegionText: "Block A–M, Arcadia Market road, Sohna Road border, and Sector 49.",
    heroText: "FixWheel offers doorstep bike repair in South City 2, Gurgaon. Get your bike serviced at home or office by a verified mechanic with pre-confirmed pricing.",
    whyChooseText: "Arcadia Market area gets heavily congested. Save time by booking a doorstep service — we handle all scooter and motorcycle repairs at your residence.",
    coveragePoints: [
      "Block A to M",
      "Arcadia Market Area",
      "Sohna Road Border",
      "Sector 49 Border Area",
      "Wembley Estate Block",
      "Today Blossom Area",
      "South City 2 Club Road"
    ],
    reviews: [
      { stars: "★★★★★", text: "Very detailed work. Service done in under 45 minutes at Block D. Smooth throttle now.", who: "Nikhil Taneja — Block D, South City 2" },
      { stars: "★★★★★", text: "Mechanic arrived with new disc pads and replaced them in Wembley Estate. Highly convenient.", who: "Sonia Kapoor — Wembley Estate, South City 2" }
    ],
    faqs: [
      { q: "Do you cover all blocks in South City 2?", a: "Yes, we cover all blocks (A through M) and surrounding societies." },
      { q: "Is there a pickup-and-drop service available?", a: "Yes, for major repairs that cannot be done on-site, we offer pick-and-drop." }
    ],
    topServices: [
      { rank: "#1 IN SOUTH CITY 2", title: "Basic Service", desc: "Regular mechanical checks and minor adjustments.", link: "/services/basic-service" },
      { rank: "#2 IN SOUTH CITY 2", title: "Engine Oil Change", desc: "Oil change and engine oil filter checkup.", link: "/services/oil-change" },
      { rank: "#3 IN SOUTH CITY 2", title: "Brake Pad Change", desc: "Disk or drum brake servicing and replacement.", link: "/services/brake-repair" },
      { rank: "#4 IN SOUTH CITY 2", title: "Carburetor Cleaning", desc: "Dismantling, jet cleaning, and tuning.", link: "/book" }
    ]
  },
  "nirvana-country": {
    name: "Nirvana Country",
    slug: "nirvana-country",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.8",
    reviewCount: "94",
    subRegionText: "Woodstock Space, Fresco, Deerwood Chase, and Unitech Patio Club stretch.",
    heroText: "Get doorstep bike repair in Nirvana Country, Gurgaon. Background-checked mechanics arrive at your home or society gate to handle your two-wheeler repair on the spot.",
    whyChooseText: "Nirvana Country consists of gated villas and apartments. Security visitor protocols are strictly followed by our verified, background-checked technicians.",
    coveragePoints: [
      "Woodstock Space",
      "Fresco Apartment Block",
      "Deerwood Chase Villas",
      "Patio Club Area",
      "Espace Villas Area",
      "Birch Court Block",
      "Sector 50 Boundary Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got my Activa serviced at Fresco. Mechanic followed all society protocols and was very polite.", who: "Preeti Singhal — Fresco, Nirvana Country" },
      { stars: "★★★★★", text: "Serviced my Enfield in the villa parking. Clean and professional job.", who: "Manish Chawla — Espace Villas, Nirvana Country" }
    ],
    faqs: [
      { q: "Are your mechanics background-checked?", a: "Yes, every mechanic on our platform is background-verified for safety." },
      { q: "Do you service luxury bikes here?", a: "Yes, we handle premium and cruiser bikes across all Nirvana blocks." }
    ],
    topServices: [
      { rank: "#1 IN NIRVANA COUNTRY", title: "Basic Service", desc: "Electrical and mechanical check for daily two-wheelers.", link: "/services/basic-service" },
      { rank: "#2 IN NIRVANA COUNTRY", title: "Engine Oil Change", desc: "Draining oil and replacing with high-grade semi-synthetic.", link: "/services/oil-change" },
      { rank: "#3 IN NIRVANA COUNTRY", title: "Battery Replacement", desc: "On-site battery check, jump start, and replacement.", link: "/services/battery-replacement" },
      { rank: "#4 IN NIRVANA COUNTRY", title: "Chain Lube & Adjust", desc: "Drive chain cleaning, lubricating, and adjustment.", link: "/book" }
    ]
  },
  "sector-14": {
    name: "Sector 14",
    slug: "sector-14",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "118",
    subRegionText: "Sector 14 Market road, HUDA Market, Delhi road boundary, and Sector 15 border.",
    heroText: "Verified doorstep bike repair service in Sector 14, Gurgaon. Mobile mechanics arrive at your home or office with genuine spare parts to service your bike.",
    whyChooseText: "Sector 14 is one of Gurgaon's oldest residential areas. Save yourself a trip through busy sector streets — get your scooter or motorcycle serviced at home.",
    coveragePoints: [
      "Sector 14 Market Road",
      "HUDA Market Area",
      "Delhi Road Boundary",
      "Sector 15 Border Area",
      "Government College Road",
      "Sukhrali Border Stretch",
      "DLF Colony Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Very neat work. Serviced my Jupiter in the driveway. Pre-confirmed prices on WhatsApp.", who: "Rajeev Saxena — Sector 14, Gurgaon" },
      { stars: "★★★★★", text: "Saved me from towing. Bike broke down near Delhi road border, mechanic fixed it in 45 min.", who: "Pawan Tyagi — Delhi Road Border, Sector 14" }
    ],
    faqs: [
      { q: "How long does a basic service take in Sector 14?", a: "It takes about 45 minutes. You can watch the process or carry on with your day." },
      { q: "What parts do you use?", a: "We use genuine or high-quality OEM parts. The cost is pre-approved by you." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 14", title: "Basic Service", desc: "Plug check, chain lubrication, and brake alignments.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 14", title: "Engine Oil Change", desc: "Full oil flush and replacement with OEM oil.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 14", title: "Carburetor Service", desc: "Cleaning, tuning, and fuel line checks.", link: "/book" },
      { rank: "#4 IN SECTOR 14", title: "Tyre Replacement", desc: "On-site tyre replacements with brand warranties.", link: "/services/tyre-replacement" }
    ]
  },
  "sector-15": {
    name: "Sector 15",
    slug: "sector-15",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "89",
    subRegionText: "Part 1 & Part 2, Jharsa village boundary, NH-8 border, and Sector 31 stretch.",
    heroText: "Get doorstep bike repair in Sector 15, Gurgaon. Background-checked mechanics arrive at your home or society gate to handle your two-wheeler repair on the spot.",
    whyChooseText: "Sector 15 Part 1 and Part 2 are dense residential areas. Skip local garage wait times — get direct doorstep bike repairs with transparent billing.",
    coveragePoints: [
      "Sector 15 Part 1",
      "Sector 15 Part 2",
      "Jharsa Village Boundary",
      "NH-8 Border Area",
      "Sector 31 Dividing Road",
      "HUDA Office Belt",
      "Civil Lines Boundary"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a basic service done in Part 2. Mechanic arrived on time and did a very clean job.", who: "Sunil Dutt — Part 2, Sector 15" },
      { stars: "★★★★★", text: "Engine oil change done in 45 minutes in my office parking. Highly satisfied.", who: "Neha Kapur — Part 1, Sector 15" }
    ],
    faqs: [
      { q: "Do you cover both Sector 15 Part 1 and Part 2?", a: "Yes, our mechanics cover all blocks in both parts of Sector 15." },
      { q: "Is pricing fixed?", a: "Yes, the price quoted is final. No surprise fees are added later." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 15", title: "Basic Service", desc: "Commuter bike maintenance, checkup, and adjustments.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 15", title: "Engine Oil Change", desc: "OEM-recommended engine oil replacement.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 15", title: "Brake Repair", desc: "Brake shoe/pad replacement and adjustments.", link: "/services/brake-repair" },
      { rank: "#4 IN SECTOR 15", title: "Battery Replacement", desc: "Testing, jump start, and battery swapping.", link: "/services/battery-replacement" }
    ]
  },
  "sector-17": {
    name: "Sector 17",
    slug: "sector-17",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.6",
    reviewCount: "74",
    subRegionText: "HUDA office stretch, Sector 17 Market, Sukhrali border, and IFFCO Chowk.",
    heroText: "FixWheel offers doorstep bike repair in Sector 17, Gurgaon. Certified mechanics come directly to your office parking space or home complex to service your two-wheeler.",
    whyChooseText: "Sector 17 has busy administrative and commercial hubs. Avoid pushing a broken scooter — book a verified mechanic to repair it on-site.",
    coveragePoints: [
      "HUDA Office Stretch",
      "Sector 17 Market Area",
      "Sukhrali Border Zone",
      "IFFCO Chowk Boundary",
      "Sector 17 A & B Blocks",
      "Bata Crossing Area",
      "NH-8 Service Lane"
    ],
    reviews: [
      { stars: "★★★★★", text: "Quick response near Sukhrali border. Mechanic fixed a minor spark plug issue in 45 min.", who: "Gaurav Joshi — Sukhrali Border, Sector 17" },
      { stars: "★★★★★", text: "Got my scooter battery replaced at home. Zero hassle, warranty card handed over.", who: "Suman Lata — Block A, Sector 17" }
    ],
    faqs: [
      { q: "What happens if extra parts are needed?", a: "The mechanic will quote the cost of the parts. Work proceeds only after you agree." },
      { q: "Do you offer jump-start help here?", a: "Yes, we dispatch mechanics for flat batteries in Sector 17 and Sukhrali." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 17", title: "Basic Service", desc: "Brake tune-ups, spark plug cleaning, and general inspections.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 17", title: "Battery Swap", desc: "Battery test and replacement with brand warranty.", link: "/services/battery-replacement" },
      { rank: "#3 IN SECTOR 17", title: "Engine Oil Change", desc: "Draining oil, flush, and fresh OEM refill.", link: "/services/oil-change" },
      { rank: "#4 IN SECTOR 17", title: "Puncture Repair", desc: "On-site tubeless puncture fixes.", link: "/services/tyre-replacement" }
    ]
  },
  "sector-23": {
    name: "Sector 23",
    slug: "sector-23",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "94",
    subRegionText: "Sector 23 Market, Sector 22 border, Palam Vihar road, and Carterpuri.",
    heroText: "Doorstep bike mechanic and two-wheeler servicing in Sector 23, Gurgaon. Avoid local garage queues — we send a trained mechanic to your location with all required tools.",
    whyChooseText: "Sector 23 has highly populated residential sectors. Skip local shops with long queues — get your bike serviced in your driveway.",
    coveragePoints: [
      "Sector 23 Market Area",
      "Sector 22 Border Area",
      "Palam Vihar Road Stretch",
      "Carterpuri Boundary",
      "Sector 23 A Blocks",
      "DAV School Road Area",
      "Sector 21 Border"
    ],
    reviews: [
      { stars: "★★★★★", text: "Serviced my Honda Activa at my gate. Very prompt and professional mechanic.", who: "Suresh Malik — Sector 23, Gurgaon" },
      { stars: "★★★★★", text: "Convenient service near Sector 22 border. Transparent pricing.", who: "Priyanka Roy — Sector 22 Border, Sector 23" }
    ],
    faqs: [
      { q: "Do you cover Sector 22 and 21 as well?", a: "Yes, our Sector 23 mechanics cover Sector 21, 22, and Carterpuri." },
      { q: "How are minor repairs priced?", a: "Minor running repairs start at ₹399. Basic service packages start at ₹550." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 23", title: "Basic Service", desc: "Electrical checks, brake tuning, and filter checks.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 23", title: "Engine Oil Change", desc: "OEM-grade oil refilling and old oil disposal.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 23", title: "Brake Disc Repair", desc: "On-site disc replacement and brake shoe changes.", link: "/services/brake-repair" },
      { rank: "#4 IN SECTOR 23", title: "Chain Sprocket Swap", desc: "Chain set and sprocket kit replacements.", link: "/book" }
    ]
  },
  "sector-31": {
    name: "Sector 31",
    slug: "sector-31",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "86",
    subRegionText: "Sector 30 border, HUDA Market stretch, NH-8 border, and Sector 40.",
    heroText: "FixWheel offers doorstep bike repair in Sector 31, Gurgaon. Get your bike serviced at home or office by a verified mechanic with pre-confirmed pricing.",
    whyChooseText: "Sector 31 is close to the highway and has busy markets. Skip local repair delays — get direct service at your home or office parking.",
    coveragePoints: [
      "Sector 30 Border Area",
      "HUDA Market Area",
      "NH-8 Border Area",
      "Sector 40 Border Stretch",
      "Sector 31 A Blocks",
      "Ajit Stadium Area",
      "Sukhrali Crossing"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a basic service done in Sector 30 border block. Thorough work, bike feels smooth.", who: "Manish Joshi — Sector 30 Border, Sector 31" },
      { stars: "★★★★★", text: "Carburetor cleaned and tuned. Mileage has improved. Excellent door service.", who: "Kunal Sen — Sector 31, Gurgaon" }
    ],
    faqs: [
      { q: "Can the mechanic service my bike in Sector 30?", a: "Yes, our Sector 31 unit covers Sector 30, Sector 32, and Sukhrali." },
      { q: "What if my bike needs engine work?", a: "We do engine diagnostic and repair works on-site. Engine repair packages start at ₹4500." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 31", title: "Basic Service", desc: "Plugs, filters, lubing, and electrical safety check.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 31", title: "Engine Oil Change", desc: "Draining oil, flush, and OEM oil refill.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 31", title: "Carburetor Tuning", desc: "Complete cleaning and mileage calibration.", link: "/book" },
      { rank: "#4 IN SECTOR 31", title: "Jump Start Service", desc: "Quick battery jump-starts for dead vehicles.", link: "/book" }
    ]
  },
  "sector-40": {
    name: "Sector 40",
    slug: "sector-40",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.6",
    reviewCount: "72",
    subRegionText: "Sector 31/40 dividing road, Sector 40 Market, and Sector 45 border.",
    heroText: "Get doorstep bike repair in Sector 40, Gurgaon. Background-checked mechanics arrive at your home or society gate to handle your two-wheeler repair on the spot.",
    whyChooseText: "Sector 40 is a peaceful residential colony. Keep it hassle-free — book a verified mechanic to service your motorcycle in your home parking.",
    coveragePoints: [
      "Sector 31/40 Dividing Road",
      "Sector 40 Market Area",
      "Sector 45 Border Stretch",
      "Sector 40 HUDA Market",
      "Sector 40 Block A to D",
      "Greenwood City Border",
      "Sector 39 Boundary"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a basic service done in Block B. Prompt arrival, polite mechanic.", who: "Pankaj Vyas — Block B, Sector 40" },
      { stars: "★★★★★", text: "Worn brakes replaced at my house. Very transparent pricing.", who: "Deepa Nair — Sector 40, Gurgaon" }
    ],
    faqs: [
      { q: "Do you service bikes in Sector 39?", a: "Yes, our Sector 40 unit covers Sector 39, Sector 41, and Greenwood City." },
      { q: "Are your mechanics verified?", a: "Yes, every technician is background-checked and vetted before joining." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 40", title: "Basic Service", desc: "Regular mechanical tuning and electrical inspections.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 40", title: "Engine Oil Change", desc: "Full oil change and filter replacement.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 40", title: "Brake Replacement", desc: "Disc pads and brake drum replacements on-site.", link: "/services/brake-repair" },
      { rank: "#4 IN SECTOR 40", title: "Battery Replacement", desc: "Diagnostics and battery installation with warranty.", link: "/services/battery-replacement" }
    ]
  },
  "sector-45": {
    name: "Sector 45",
    slug: "sector-45",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "82",
    subRegionText: "Sector 45 HUDA Market, Sector 46 border, and Greenwood City stretch.",
    heroText: "Verified doorstep bike repair service in Sector 45, Gurgaon. Mobile mechanics arrive at your home or office with genuine spare parts to service your bike.",
    whyChooseText: "Sector 45 residents value their weekends. Avoid the local garage run — book a doorstep service and enjoy a 15-day labor warranty.",
    coveragePoints: [
      "Sector 45 HUDA Market",
      "Sector 46 Border Area",
      "Greenwood City Block",
      "Sector 45 Block A to C",
      "Delhi Public School Road",
      "Chakkarpur Border Belt",
      "Sector 44 Commercial Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Serviced my scooter in Greenwood City. Highly satisfied with the mechanic's knowledge.", who: "Vikram Sen — Greenwood City, Sector 45" },
      { stars: "★★★★★", text: "Prompt arrival near the HUDA market. Professional and clean job.", who: "Ankita Shah — HUDA Market, Sector 45" }
    ],
    faqs: [
      { q: "Do you service Sector 44 office parks?", a: "Yes, we dispatch mechanics to Sector 44 corporate offices and parkings." },
      { q: "What are your payment options?", a: "We accept all digital payments (UPI, cards, wallets) and cash after completion." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 45", title: "Basic Service", desc: "Tuning, lubing, plugs, and general electric check.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 45", title: "Engine Oil Change", desc: "Oil swap and general mechanical checkup.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 45", title: "Tyre Replacement", desc: "Tyre swap and tubeless puncture checks.", link: "/services/tyre-replacement" },
      { rank: "#4 IN SECTOR 45", title: "Chain Sprocket", desc: "Drive chain kit and sprocket replacement.", link: "/book" }
    ]
  },
  "sector-46": {
    name: "Sector 46",
    slug: "sector-46",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "92",
    subRegionText: "Sector 46 Market, Sector 51 border, and Sector 45/46 dividing road.",
    heroText: "Doorstep bike repair and scooter service in Sector 46, Gurgaon. Verified mechanics arrive at your corporate office building or roadside location to service your ride.",
    whyChooseText: "Sector 46 has highly active residential blocks. Skip the local garage wait times — get direct doorstep bike repairs with transparent billing.",
    coveragePoints: [
      "Sector 46 Market Area",
      "Sector 51 Border Area",
      "Sector 45/46 Dividing Road",
      "Sector 46 Block A to F",
      "Amity School Road",
      "Sector 47 Border Stretch",
      "Jal Vihar Colony"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a basic service done in Block C. Prompt arrival, polite mechanic.", who: "Ramesh Iyer — Block C, Sector 46" },
      { stars: "★★★★★", text: "Clean oil change service in my driveway. Clear pricing, very professional.", who: "Sanjay Kaul — Block A, Sector 46" }
    ],
    faqs: [
      { q: "Do you cover Sector 51 as well?", a: "Yes, our Sector 46 mechanics cover Sector 51, 52, and Jal Vihar." },
      { q: "Is there a warranty on replacement parts?", a: "Replacement parts carry their respective manufacturer brand warranties." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 46", title: "Basic Service", desc: "General tuning, plug clean, and brake checkups.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 46", title: "Engine Oil Change", desc: "Mineral/synthetic oil swap and filter clean.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 46", title: "Brake Shoe Repair", desc: "Brake shoe, pad replacement, and cable calibrations.", link: "/services/brake-repair" },
      { rank: "#4 IN SECTOR 46", title: "Battery Swap", desc: "Testing, jump-starts, and battery replacement.", link: "/services/battery-replacement" }
    ]
  },
  "sector-47": {
    name: "Sector 47",
    slug: "sector-47",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.6",
    reviewCount: "68",
    subRegionText: "Subhash Chowk boundary, Sector 38 border, and HUDA Market road.",
    heroText: "FixWheel offers doorstep bike repair in Sector 47, Gurgaon. Certified mechanics come directly to your office parking space or home complex to service your two-wheeler.",
    whyChooseText: "Sector 47 is a prime residential locality near Subhash Chowk. Save yourself a trip through traffic — get your scooter or motorcycle serviced at home.",
    coveragePoints: [
      "Subhash Chowk Boundary",
      "Sector 38 Border Area",
      "HUDA Market Road Area",
      "Sector 47 Blocks A to D",
      "Vatika Business Park Area",
      "Sector 48 Border Stretch",
      "Sohna Road Crossing"
    ],
    reviews: [
      { stars: "★★★★★", text: "Very prompt near Subhash Chowk. Replaced my bike clutch cable in 45 minutes.", who: "Tushar Dev — Sector 47, Gurgaon" },
      { stars: "★★★★★", text: "Got a basic service done for my scooter. Professional, clean, and quick.", who: "Meenakshi Dey — Block B, Sector 47" }
    ],
    faqs: [
      { q: "Do you service bikes in Sector 38?", a: "Yes, our Sector 47 unit covers Sector 38, Sector 48, and Subhash Chowk." },
      { q: "How are doorstep service charges calculated?", a: "We have fixed packages starting at ₹550. No visiting fees are added to the package." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 47", title: "Basic Service", desc: "Brakes, plugs, and electrical systems check.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 47", title: "Engine Oil Change", desc: "Oil swap and disposal of old engine oil.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 47", title: "OBD Scanning", desc: "Electronic scanning to verify check engine light codes.", link: "/book" },
      { rank: "#4 IN SECTOR 47", title: "Puncture Repair", desc: "On-site tubeless puncture extraction and plug insertion.", link: "/services/tyre-replacement" }
    ]
  },
  "sector-49": {
    name: "Sector 49",
    slug: "sector-49",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "83",
    subRegionText: "Sohna Road border, Sector 50 border, and Sector 49 Market.",
    heroText: "Doorstep bike mechanic and two-wheeler servicing in Sector 49, Gurgaon. Avoid local garage queues — we send a trained mechanic to your location with all required tools.",
    whyChooseText: "Sector 49 includes popular housing complexes and business parks. Skip the local repair delays — get direct service at your home or office parking.",
    coveragePoints: [
      "Sohna Road Border Area",
      "Sector 50 Border Area",
      "Sector 49 Market Block",
      "Wembley Estate Boundary",
      "Arcadia Market Stretch",
      "Spaze ITech Park Area",
      "Sector 48 Border"
    ],
    reviews: [
      { stars: "★★★★★", text: "Serviced my Royal Enfield at Wembley Estate. High quality work, verified technician.", who: "Arindam Paul — Wembley Estate, Sector 49" },
      { stars: "★★★★★", text: "Mechanic arrived at Spaze ITech Park and fixed my flat tyre quickly.", who: "Gaurav Roy — Spaze ITech Park, Sector 49" }
    ],
    faqs: [
      { q: "Do you service corporate vehicles at Spaze ITech Park?", a: "Yes, we service vehicles for individuals parked inside Spaze ITech Park." },
      { q: "Is the labor warranty applicable to all services?", a: "Yes, all services come with our standard 15-day labor warranty." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 49", title: "Basic Service", desc: "Filter cleans, plug checking, and brake adjustment.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 49", title: "Engine Oil Change", desc: "Draining oil, flush, and OEM oil replacement.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 49", title: "Brake Pad Change", desc: "Replacing front/rear brake pads or shoes.", link: "/services/brake-repair" },
      { rank: "#4 IN SECTOR 49", title: "Chain Sprocket", desc: "Drive chain set and sprocket replacement.", link: "/book" }
    ]
  },
  "sector-50": {
    name: "Sector 50",
    slug: "sector-50",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.8",
    reviewCount: "90",
    subRegionText: "Nirvana Country border, Sector 50 Market, and Sector 51 border.",
    heroText: "FixWheel offers doorstep bike repair in Sector 50, Gurgaon. Get your bike serviced at home or office by a verified mechanic with pre-confirmed pricing.",
    whyChooseText: "Sector 50 is a residential hub. Avoid the local garage run — book a doorstep service and enjoy a 15-day labor warranty.",
    coveragePoints: [
      "Nirvana Country Border",
      "Sector 50 Market Area",
      "Sector 51 Border Area",
      "Unitech Fresco Block",
      "Deerwood Chase Stretch",
      "Hilton DoubleTree Area",
      "Sector 49 Boundary"
    ],
    reviews: [
      { stars: "★★★★★", text: "Very prompt service near Nirvana border. Mechanic was certified and highly professional.", who: "Rajesh Seth — Nirvana Border, Sector 50" },
      { stars: "★★★★★", text: "Excellent scooter service done at my home. No hidden charges.", who: "Kavita Bisht — Sector 50, Gurgaon" }
    ],
    faqs: [
      { q: "Do you cover all complexes in Sector 50?", a: "Yes, we cover Unitech Fresco, Nirvana Country complexes, and all surrounding areas." },
      { q: "What parts do you use for servicing?", a: "We use genuine or high-quality OEM parts. The cost is pre-approved by you." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 50", title: "Basic Service", desc: "Tuning, lubing, plugs, and general electric check.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 50", title: "Engine Oil Change", desc: "Oil change and engine oil filter checkup.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 50", title: "Battery Replacement", desc: "Testing, jump start, and battery swapping.", link: "/services/battery-replacement" },
      { rank: "#4 IN SECTOR 50", title: "OBD Scanning", desc: "Electronic scanning to verify check engine light codes.", link: "/book" }
    ]
  },
  "sector-56": {
    name: "Sector 56",
    slug: "sector-56",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "96",
    subRegionText: "HUDA Market, Sector 55 border, Metro Station stretch, and Sector 56 Huda Market.",
    heroText: "Get doorstep bike repair in Sector 56, Gurgaon. Background-checked mechanics arrive at your home or society gate to handle your two-wheeler repair on the spot.",
    whyChooseText: "Sector 56 is one of the densest residential hubs in Gurgaon. Guarded gates and high traffic can make garage visits a hassle. Our on-site service handles everything right where you are parked.",
    coveragePoints: [
      "HUDA Market Area",
      "Sector 55 Border Area",
      "Metro Station Stretch",
      "Sector 56 Huda Market",
      "Devinder Vihar Block",
      "Sushant Lok 2 Area",
      "Golf Course Road Link"
    ],
    reviews: [
      { stars: "★★★★★", text: "Replaced my motorcycle chain set in Devinder Vihar. Honest pricing and clean job.", who: "Sudhir Rawat — Devinder Vihar, Sector 56" },
      { stars: "★★★★★", text: "Got a basic service done at Sector 56 market area. Thorough work.", who: "Maya Sen — Sector 56 Market, Gurgaon" }
    ],
    faqs: [
      { q: "Do you service bikes in Sector 55 and Sector 57?", a: "Yes, our Sector 56 unit covers Sector 55, 57, and Sushant Lok 2/3." },
      { q: "Can I book a slot for early morning?", a: "Yes, our daily booking slots start at 8 AM. Book via our website or app." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 56", title: "Basic Service", desc: "Plugs, filters, lubing, and electrical safety check.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 56", title: "Engine Oil Change", desc: "Full oil change and filter replacement.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 56", title: "Brake Shoe Repair", desc: "Brake shoe, pad replacement, and cable calibrations.", link: "/services/brake-repair" },
      { rank: "#4 IN SECTOR 56", title: "Tyre Replacement", desc: "Replacing tyres or repairing flats on-site.", link: "/services/tyre-replacement" }
    ]
  },
  "sector-57": {
    name: "Sector 57",
    slug: "sector-57",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "88",
    subRegionText: "Hong Kong Bazaar road, Sector 56 border, and Sushant Lok 3 stretch.",
    heroText: "Verified doorstep bike repair service in Sector 57, Gurgaon. Mobile mechanics arrive at your home or office with genuine spare parts to service your bike.",
    whyChooseText: "Sector 57 residents value their weekends. Avoid the local garage run — book a doorstep service and enjoy a 15-day labor warranty.",
    coveragePoints: [
      "Hong Kong Bazaar Road",
      "Sector 56 Border Area",
      "Sushant Lok 3 Block",
      "Sector 57 Block G",
      "Boom Plaza Area",
      "Sector 58 Border Stretch",
      "Golf Course Extension Link"
    ],
    reviews: [
      { stars: "★★★★★", text: "Flat tyre near Hong Kong Bazaar. Mechanic fixed it on the spot. Great experience.", who: "Akash Singhal — Hong Kong Bazaar Road, Sector 57" },
      { stars: "★★★★★", text: "Got a basic service done in Block G. Quick, transparent, and prompt.", who: "Rita Kapur — Block G, Sector 57" }
    ],
    faqs: [
      { q: "Do you cover Sushant Lok Phase 3?", a: "Yes, our Sector 57 unit covers all blocks of Sushant Lok Phase 3." },
      { q: "Is pricing fixed?", a: "Yes, the price quoted is final. No surprise fees are added later." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 57", title: "Basic Service", desc: "Spark plug, chain lubrication, and brake alignment check.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 57", title: "Engine Oil Change", desc: "Oil change and engine oil filter checkup.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 57", title: "Battery Replacement", desc: "Testing, jump start, and battery swapping.", link: "/services/battery-replacement" },
      { rank: "#4 IN SECTOR 57", title: "Clutch Cable Swap", desc: "On-site clutch cable replacement and tuning.", link: "/services/brake-repair" }
    ]
  },
  "sector-58": {
    name: "Sector 58",
    slug: "sector-58",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.6",
    reviewCount: "54",
    subRegionText: "Grand Arch stretch, Sector 57 border, and Sector 59 boundary.",
    heroText: "Doorstep bike repair and scooter service in Sector 58, Gurgaon. Verified mechanics arrive at your corporate office building or roadside location to service your ride.",
    whyChooseText: "Sector 58 features high-rise residential complexes and new commercial projects. Skip the local repair delays — get direct service at your home or office parking.",
    coveragePoints: [
      "Grand Arch Road Stretch",
      "Sector 57 Border Area",
      "Sector 59 Boundary Block",
      "Golf Course Extension Road",
      "Sector 58 Industrial Area",
      "AIPL Joy Street Area",
      "Sector 61 Border"
    ],
    reviews: [
      { stars: "★★★★★", text: "No mechanic shops nearby in Sector 58. FixWheel came to my apartment and did a basic service.", who: "Tarun Sharma — Sector 58, Gurgaon" },
      { stars: "★★★★★", text: "Got a synthetic oil change done for my Dominar. Professional and prompt.", who: "Jatin Chawla — Sector 58, Gurgaon" }
    ],
    faqs: [
      { q: "Do you service Sector 59 and 61?", a: "Yes, our Sector 58 mobile mechanics cover Sector 57 through Sector 62." },
      { q: "What is your average response time?", a: "Arrival time is around 45 minutes." }
    ],
    topServices: [
      { rank: "#1 IN SECTOR 58", title: "Basic Service", desc: "Regular mechanical checks and minor adjustments.", link: "/services/basic-service" },
      { rank: "#2 IN SECTOR 58", title: "Engine Oil Change", desc: "Draining oil, flush, and OEM oil replacement.", link: "/services/oil-change" },
      { rank: "#3 IN SECTOR 58", title: "Chain sprocket", desc: "Drive chain set and sprocket replacement.", link: "/book" },
      { rank: "#4 IN SECTOR 58", title: "Brake Disc Replacement", desc: "Replacing brake pads and cable adjustments.", link: "/services/brake-repair" }
    ]
  },
  "ashok-vihar-phase-3": {
    name: "Ashok Vihar Phase 3",
    slug: "ashok-vihar-phase-3",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "73",
    subRegionText: "Sector 3/5 border, Sheetla Mata Road stretch, and Gurgaon railway station road.",
    heroText: "FixWheel offers doorstep bike repair in Ashok Vihar Phase 3, Gurgaon. Certified mechanics come directly to your office parking space or home complex to service your two-wheeler.",
    whyChooseText: "Ashok Vihar Phase 3 is a busy residential sector. Skip the local garage wait times — get direct doorstep bike repairs with transparent billing.",
    coveragePoints: [
      "Sector 3 & 5 Border Area",
      "Sheetla Mata Road Area",
      "Gurgaon Railway Station Road",
      "Ashok Vihar Main Road",
      "Sector 5 HUDA Market",
      "Sheetla Hospital Stretch",
      "Sector 4 Boundary"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got my Activa serviced in Ashok Vihar. Polite mechanic, good quality oil, smooth ride.", who: "Narender Pal — Ashok Vihar Phase 3" },
      { stars: "★★★★★", text: "Replaced my motorcycle battery. Quick and reliable doorstep work.", who: "Suraj Bhan — Ashok Vihar Phase 3" }
    ],
    faqs: [
      { q: "Do you cover Sheetla Mata road?", a: "Yes, we cover all stretches along Sheetla Mata road and Gurgaon station road." },
      { q: "What parts do you use?", a: "We use genuine or high-quality OEM parts. The cost is pre-approved by you." }
    ],
    topServices: [
      { rank: "#1 IN ASHOK VIHAR", title: "Basic Service", desc: "Brake check, chain clean, spark plug clean, and air filter check.", link: "/services/basic-service" },
      { rank: "#2 IN ASHOK VIHAR", title: "Engine Oil Change", desc: "Full oil change and filter replacement.", link: "/services/oil-change" },
      { rank: "#3 IN ASHOK VIHAR", title: "Battery Swap", desc: "Battery test and replacement with brand warranty.", link: "/services/battery-replacement" },
      { rank: "#4 IN ASHOK VIHAR", title: "Puncture Repair", desc: "On-site tubeless puncture extraction and plug insertion.", link: "/services/tyre-replacement" }
    ]
  },
  "huda-city-centre": {
    name: "Huda City Centre",
    slug: "huda-city-centre",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.8",
    reviewCount: "94",
    subRegionText: "Metro Station Plaza, Taj City Centre stretch, and Sector 29 boundary.",
    heroText: "Doorstep bike mechanic and two-wheeler servicing near Huda City Centre, Gurgaon. Avoid local garage queues — we send a trained mechanic to your location with all required tools.",
    whyChooseText: "As one of Gurgaon's major transit points, Huda City Centre has constant traffic. Getting your bike serviced at home or office saves you valuable hours.",
    coveragePoints: [
      "Metro Station Plaza",
      "Taj City Centre Area",
      "Sector 29 Boundary Area",
      "Sector 43 Border Block",
      "Sushant Lok Phase 1 Link",
      "Appu Ghar Road Area",
      "Sector 30 Crossing"
    ],
    reviews: [
      { stars: "★★★★★", text: "My bike had a flat tire near the metro station. Mechanic arrived in 45 min. Lifesaver.", who: "Rajat Chhabra — Metro Area, Huda City Centre" },
      { stars: "★★★★★", text: "Got a general service done during office hours. Very convenient.", who: "Priyansh Goel — Sector 29 Area, Huda City Centre" }
    ],
    faqs: [
      { q: "Do you offer roadside breakdown help near the metro station?", a: "Yes, we dispatch mechanics for roadside breakdowns near Huda City Centre 24/7." },
      { q: "Can the mechanic service my bike in the metro parking lot?", a: "Yes, as long as parking security allows it. Society/office parkings are preferred." }
    ],
    topServices: [
      { rank: "#1 IN HUDA CITY CENTRE", title: "Basic Service", desc: "Electrical and mechanical check for daily two-wheelers.", link: "/services/basic-service" },
      { rank: "#2 IN HUDA CITY CENTRE", title: "Jump Start Service", desc: "Quick battery jump-starts for dead vehicles.", link: "/book" },
      { rank: "#3 IN HUDA CITY CENTRE", title: "Engine Oil Change", desc: "Oil swap and general mechanical checkup.", link: "/services/oil-change" },
      { rank: "#4 IN HUDA CITY CENTRE", title: "Puncture Repair", desc: "On-site tubeless puncture fixes.", link: "/services/tyre-replacement" }
    ]
  },
  "manesar": {
    name: "Manesar",
    slug: "manesar",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.6",
    reviewCount: "82",
    subRegionText: "Sector 1 to 8, IMT Manesar stretch, NH-8 border, and KMP Expressway.",
    heroText: "FixWheel offers doorstep bike repair in Manesar, Gurgaon. Get your bike serviced at home or office by a verified mechanic with pre-confirmed pricing.",
    whyChooseText: "Manesar is an industrial township. Skip the local garage wait times — get direct doorstep bike repairs with transparent billing.",
    coveragePoints: [
      "IMT Manesar Sector 1 to 8",
      "Industrial Area Phase 1",
      "Industrial Area Phase 2",
      "KMP Expressway Crossing",
      "NH-8 Highway Corridor",
      "Manesar Village Boundary",
      "Sector 11 Border Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Finding a good mechanic in IMT Manesar is tough. FixWheel sent a verified technician who serviced my cruiser at my plant parking.", who: "Satish Yadav — IMT Manesar" },
      { stars: "★★★★★", text: "Got a chain set and engine oil change. Clean and professional job.", who: "Vikram Rathi — Sector 4, Manesar" }
    ],
    faqs: [
      { q: "Do you cover all industrial sectors in IMT Manesar?", a: "Yes, we cover IMT Manesar Sectors 1 through 8, plus surrounding residential blocks." },
      { q: "What is your average response time in Manesar?", a: "Given the distance, our verified mechanics arrive in about 45 minutes." }
    ],
    topServices: [
      { rank: "#1 IN MANESAR", title: "Basic Service", desc: "Spark plug, chain lubrication, and brake alignment check.", link: "/services/basic-service" },
      { rank: "#2 IN MANESAR", title: "Engine Oil Change", desc: "Draining oil, flush, and OEM oil replacement.", link: "/services/oil-change" },
      { rank: "#3 IN MANESAR", title: "Chain Sprocket", desc: "Drive chain set and sprocket replacement.", link: "/book" },
      { rank: "#4 IN MANESAR", title: "Engine Repair", desc: "Full engine diagnosis and component-level repair.", link: "/services/engine-repair" }
    ]
  },
  "bhondsi": {
    name: "Bhondsi",
    slug: "bhondsi",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.6",
    reviewCount: "43",
    subRegionText: "Sohna Road highway stretch, jail road boundary, and Maruti Kunj border.",
    heroText: "Get doorstep bike repair in Bhondsi, Gurgaon. Background-checked mechanics arrive at your home or society gate to handle your two-wheeler repair on the spot.",
    whyChooseText: "Bhondsi lies along Sohna Road highway. Skip the local garage wait times — get direct doorstep bike repairs with transparent billing.",
    coveragePoints: [
      "Sohna Road Highway Area",
      "Bhondsi Jail Road",
      "Maruti Kunj Area",
      "BSF Camp Area Boundary",
      "Naya Gaon Road Block",
      "Sector 68 Border Area",
      "Dhunela Crossing"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got my Splendor serviced at home in Maruti Kunj. Very prompt and professional mechanic.", who: "Hari Prakash — Maruti Kunj, Bhondsi" },
      { stars: "★★★★★", text: "My bike broke down on Sohna road. Mechanic arrived in 45 min and replaced the broken clutch cable.", who: "Sunil Yadav — Sohna Road, Bhondsi" }
    ],
    faqs: [
      { q: "Do you cover Maruti Kunj and BSF Camp?", a: "Yes, our Bhondsi unit covers Maruti Kunj, DHBVN colony, BSF Camp, and Naya Gaon." },
      { q: "How long does a mechanic take to reach Bhondsi?", a: "On average, a verified mechanic arrives within 45 minutes of booking confirmation." }
    ],
    topServices: [
      { rank: "#1 IN BHONDSI", title: "Basic Service", desc: "Regular mechanical checks and minor adjustments.", link: "/services/basic-service" },
      { rank: "#2 IN BHONDSI", title: "Engine Oil Change", desc: "Mineral or synthetic engine oil change with filter clean.", link: "/services/oil-change" },
      { rank: "#3 IN BHONDSI", title: "Clutch Cable Swap", desc: "On-site clutch cable replacement and tuning.", link: "/services/brake-repair" },
      { rank: "#4 IN BHONDSI", title: "Puncture Repair", desc: "On-site puncture repairs for tubeless two-wheelers.", link: "/services/tyre-replacement" }
    ]
  },
  "badshahpur": {
    name: "Badshahpur",
    slug: "badshahpur",
    eta: "45 min",
    servicePrice: "550",
    aggregateRating: "4.7",
    reviewCount: "79",
    subRegionText: "Sohna Road stretch, Vatika Chowk, Badshahpur Market road, and Sector 66 border.",
    heroText: "Verified doorstep bike repair service in Badshahpur, Gurgaon. Mobile mechanics arrive at your home or office with genuine spare parts to service your bike.",
    whyChooseText: "Avoid pushing your bike through Badshahpur market traffic or waiting at local shops. FixWheel brings experienced mechanics directly to your residential address.",
    coveragePoints: [
      "Sohna Road Stretch",
      "Vatika Chowk Area",
      "Badshahpur Market Road",
      "Sector 66 Border Area",
      "Sector 67 Boundary",
      "Tulip Violet Area",
      "Emaar Marbella Block"
    ],
    reviews: [
      { stars: "★★★★★", text: "Serviced my Honda Activa at Tulip Violet. Safe, verified mechanic and clean service.", who: "Megha Gupta — Tulip Violet, Badshahpur" },
      { stars: "★★★★★", text: "Got a chain set replaced at Vatika Chowk. Highly professional.", who: "Jaswinder Singh — Vatika Chowk, Badshahpur" }
    ],
    faqs: [
      { q: "Do you service Sector 66 and 67 apartments?", a: "Yes, we cover Emaar Marbella, Tulip Violet, and all surrounding residential apartments." },
      { q: "What parts do you use?", a: "We use genuine or high-quality OEM parts. The cost is pre-approved by you." }
    ],
    topServices: [
      { rank: "#1 IN BADSHAHPUR", title: "Basic Service", desc: "Essential checklist check, lube and tuning for daily riders.", link: "/services/basic-service" },
      { rank: "#2 IN BADSHAHPUR", title: "Engine Oil Change", desc: "Oil change and engine oil filter checkup.", link: "/services/oil-change" },
      { rank: "#3 IN BADSHAHPUR", title: "Battery Swap", desc: "Testing, jump-starts, and battery replacement.", link: "/services/battery-replacement" },
      { rank: "#4 IN BADSHAHPUR", title: "Chain Sprocket Swap", desc: "Worn chain and sprocket replaced with standard-spec parts.", link: "/book" }
    ]
  }
};
