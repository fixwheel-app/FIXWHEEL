export interface LocalityDetails {
  name: string;
  slug: string;
  eta: string;
  servicePrice: string;
  aggregateRating: string;
  reviewCount: string;
  subRegionText: string;
  heroText: string;
  whyChooseText: string;
  coveragePoints: string[];
  reviews: { stars: string; text: string; who: string }[];
  faqs: { q: string; a: string }[];
  topServices: { rank: string; title: string; desc: string; link: string }[];
}

export const LOCALITY_DB: Record<string, LocalityDetails> = {
  "dwarka": {
    name: "Dwarka",
    slug: "dwarka",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.8",
    reviewCount: "142",
    subRegionText: "Sectors 1 to 23, Dwarka Mor Metro stretch, Sector 10 and 12 market lanes, and Sector 21 residential pocket.",
    heroText: "Our mobile bike mechanics cover every sector of Dwarka, from the residential blocks to the busy metro station crossings, responding in under 45 minutes.",
    whyChooseText: "Dwarka is a massive sub-city with numerous gated societies. Getting your bike to a local repair shop in Sector 6 or 10 wastes half a day. FixWheel enters all gated sectors and handles the service in your driveway.",
    coveragePoints: [
      "Sector 1 to 23 Blocks",
      "Dwarka Sector 10 Market",
      "Dwarka Sector 12 Market",
      "Dwarka Mor Metro Stretch",
      "Sector 21 Metro Station area",
      "Ramphal Chowk Market Road",
      "Vardhaman Mall Stretches"
    ],
    reviews: [
      { stars: "★★★★★", text: "Puncture at Dwarka Sec 12 market. The mechanic arrived with the tools and fixed it on the spot in 45 minutes.", who: "Arjun Sharma — Sector 12, Dwarka" },
      { stars: "★★★★★", text: "Very smooth service. Got my Activa serviced in my apartment parking at Sector 22.", who: "Ritu Goel — Sector 22, Dwarka" }
    ],
    faqs: [
      { q: "Do you service bikes inside gated societies in Dwarka?", a: "Yes, our verified mechanics enter all gated societies in Dwarka by registering with MyGate/security at the entrance." },
      { q: "How fast can you reach me in Dwarka?", a: "Average arrival time in Dwarka is 45 minutes, since we have mechanics stationed near Sector 10 and Dwarka Mor." }
    ],
    topServices: [
      { rank: "#1 IN DWARKA", title: "Basic Service", desc: "Brake check, chain clean, spark plug clean, and air filter check.", link: "/services/basic-service" },
      { rank: "#2 IN DWARKA", title: "Engine Oil Change", desc: "Old oil drained, OEM-grade oil refilled, and oil filter checked.", link: "/services/oil-change" },
      { rank: "#3 IN DWARKA", title: "Battery Replacement", desc: "On-site battery diagnostic, jump-start, and warranty replacement.", link: "/services/battery-replacement" },
      { rank: "#4 IN DWARKA", title: "Tyre Replacement", desc: "Quick flat tyre repairs and tyre changes at home.", link: "/services/tyre-replacement" }
    ]
  },
  "vasant-kunj": {
    name: "Vasant Kunj",
    slug: "vasant-kunj",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "98",
    subRegionText: "Sectors A, B, C, and D, Nelson Mandela Marg stretch, Vasant Square Mall area, and JNU boundary blocks.",
    heroText: "FixWheel provides doorstep bike service in Vasant Kunj, offering on-site servicing for premium motorcycles and daily commuter scooters.",
    whyChooseText: "With strictly guarded society gates and long distances between residential pockets, towing a broken-down bike in Vasant Kunj is expensive and tedious. Our mobile mechanic comes directly to your villa or apartment block.",
    coveragePoints: [
      "Sector A Pocket 1 & 2",
      "Sector B & C Pockets",
      "Sector D Pocket 6 to 8",
      "Nelson Mandela Road",
      "Vasant Square Mall stretch",
      "Masoodpur Market Road",
      "JNU Outer Border Road"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got my Royal Enfield general service done. The mechanic was well-trained and did the work neatly in my driveway.", who: "Kabir Mehra — Sector B, Vasant Kunj" },
      { stars: "★★★★★", text: "Very professional. Pre-approved pricing on WhatsApp and arrived on time.", who: "Ananya Sen — Sector D, Vasant Kunj" }
    ],
    faqs: [
      { q: "Do you service premium bikes in Vasant Kunj?", a: "Yes, we have specialized mechanics trained for Royal Enfield, KTM, and other premium motorcycles in Vasant Kunj." },
      { q: "Are society entry permissions sorted?", a: "Yes, our mechanics carry official IDs and verify entry at society gates without issues." }
    ],
    topServices: [
      { rank: "#1 IN VASANT KUNJ", title: "Basic Service", desc: "Brake check, plug clean, and air filter maintenance.", link: "/services/basic-service" },
      { rank: "#2 IN VASANT KUNJ", title: "Engine Oil Change", desc: "Oil drain and refilling with OEM mineral or synthetic oil.", link: "/services/oil-change" },
      { rank: "#3 IN VASANT KUNJ", title: "Premium Bike Tuning", desc: "Customized service for sports bikes and cruiser motorcycles.", link: "/services/premium-bike-service" },
      { rank: "#4 IN VASANT KUNJ", title: "Brake Caliper Swap", desc: "On-site disc brake pad replacement and calibration.", link: "/services/brake-repair" }
    ]
  },
  "kapashera": {
    name: "Kapashera",
    slug: "kapashera",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.6",
    reviewCount: "82",
    subRegionText: "Kapashera Chowk, Kapashera Border stretch, Kapashera Extension, and the Fun 'N' Food Village road boundary.",
    heroText: "Reliable two-wheeler mechanics at Kapashera doorstep. We repair scooters and motorcycles on the spot near the Delhi-Gurgaon border.",
    whyChooseText: "Kapashera has high commercial and commuter traffic due to the border. Local garages are crowded and slow. FixWheel gets your vehicle serviced in under 45 minutes without any waiting.",
    coveragePoints: [
      "Kapashera Chowk",
      "Kapashera Border Stretch",
      "Kapashera Extension",
      "Fun 'N' Food Village Road",
      "Old Delhi Gurgaon Road stretch",
      "Mundahera Border area"
    ],
    reviews: [
      { stars: "★★★★★", text: "My bike broke down near Kapashera border. The mechanic came in 45 min and fixed the ignition coil.", who: "Deepak Yadav — Kapashera Border" },
      { stars: "★★★★★", text: "Quick oil change done near the extension block. Satisfactory pricing.", who: "Rakesh Kumar — Kapashera Extension" }
    ],
    faqs: [
      { q: "Is service available near the Delhi-Gurgaon border?", a: "Yes, we cover the entire Kapashera border area, including the service lanes and warehouse roads." },
      { q: "What happens if my bike needs major engine work?", a: "We can perform minor engine repairs on-site. For major overhauls, we arrange towing to our hub." }
    ],
    topServices: [
      { rank: "#1 IN KAPASHERA", title: "Basic Service", desc: "Electrical checks, brake adjustments, and chain lubing.", link: "/services/basic-service" },
      { rank: "#2 IN KAPASHERA", title: "Engine Oil Change", desc: "Safely draining old oil and replacing it with fresh OEM oil.", link: "/services/oil-change" },
      { rank: "#3 IN KAPASHERA", title: "Jump Start Service", desc: "Emergency battery jump-start for commuter bikes.", link: "/book" },
      { rank: "#4 IN KAPASHERA", title: "Puncture Extraction", desc: "On-site tyre repair for tubeless scooters.", link: "/services/tyre-replacement" }
    ]
  },
  "mahipalpur": {
    name: "Mahipalpur",
    slug: "mahipalpur",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "86",
    subRegionText: "Mahipalpur Bypass, Vasant Kunj road stretch, Delhi Airport boundary, and Mahipalpur Market.",
    heroText: "Doorstep bike repair in Mahipalpur. Save time on your commute near the airport — our background-checked mechanics handle repairs on-site.",
    whyChooseText: "Mahipalpur's narrow lanes and massive hotel traffic make getting your two-wheeler to a local repair shop a stressful ordeal. Avoid the hassle with our doorstep team.",
    coveragePoints: [
      "Mahipalpur Bypass",
      "Vasant Kunj Road Stretch",
      "Mahipalpur Market Area",
      "Aerocity Border Belt",
      "NH-48 Service Lane",
      "A-Block Hotel Lane"
    ],
    reviews: [
      { stars: "★★★★★", text: "Fixed my Activa's dead battery right in hotel parking. Outstanding service.", who: "Vikram Negi — Aerocity Area, Mahipalpur" },
      { stars: "★★★★★", text: "Quick brake tuning before my highway commute. Highly recommended.", who: "Siddharth Goel — Mahipalpur Bypass" }
    ],
    faqs: [
      { q: "Do you service vehicles in hotel and business parkings?", a: "Yes, our mechanics can service your bike in hotel and corporate parkings with building permission." },
      { q: "How long does a general service take?", a: "It typically takes 30-45 minutes. We complete the full checklist right in front of you." }
    ],
    topServices: [
      { rank: "#1 IN MAHIPALPUR", title: "Basic Service", desc: "Commuter bike maintenance, brake adjustments, and lubing.", link: "/services/basic-service" },
      { rank: "#2 IN MAHIPALPUR", title: "Engine Oil Change", desc: "Mineral/synthetic oil top-up and filter check.", link: "/services/oil-change" },
      { rank: "#3 IN MAHIPALPUR", title: "Battery Swap", desc: "Battery diagnostic, jump start, and replacement with warranty.", link: "/services/battery-replacement" },
      { rank: "#4 IN MAHIPALPUR", title: "Brake Shoe Repair", desc: "Replacing front/rear brake shoes and cables.", link: "/services/brake-repair" }
    ]
  },
  "bijwasan": {
    name: "Bijwasan",
    slug: "bijwasan",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.6",
    reviewCount: "72",
    subRegionText: "Bijwasan Railway Station stretch, Bharthal village border, Bijwasan Chowk, and Dwarka Link Road.",
    heroText: "FixWheel offers doorstep two-wheeler mechanic services in Bijwasan, Delhi. No need to tow your bike — we dispatch certified mechanics to your address.",
    whyChooseText: "Bijwasan is situated on the outer edge of South-West Delhi. Authentic spare parts and high-quality mechanics are hard to find locally. We bridge the gap by bringing quality garage service to you.",
    coveragePoints: [
      "Bijwasan Railway Station Area",
      "Bijwasan Chowk Stretch",
      "Bharthal Village Border",
      "Dwarka Link Road Stretch",
      "Bijwasan Extension Blocks",
      "Golok Dham Temple Road"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a general wash and basic service done at my home. The mechanic brought his own power gear.", who: "Pankaj Yadav — Bijwasan Chowk" },
      { stars: "★★★★★", text: "Repaired my pulsar chain sprocket in under 45 minutes near the station.", who: "Aman Tyagi — Station Road, Bijwasan" }
    ],
    faqs: [
      { q: "Do you cover the village areas and farmhouses in Bijwasan?", a: "Yes, we service all farmhouses, residential pockets, and village areas in Bijwasan." },
      { q: "Are spare parts genuine?", a: "We only source OEM and original parts with standard manufacturer warranty." }
    ],
    topServices: [
      { rank: "#1 IN BIJWASAN", title: "Basic Service", desc: "Spark plug check, filter inspection, brake alignment.", link: "/services/basic-service" },
      { rank: "#2 IN BIJWASAN", title: "Engine Oil Change", desc: "Old engine oil drainage and replacement with premium oil.", link: "/services/oil-change" },
      { rank: "#3 IN BIJWASAN", title: "Chain Sprocket Replacement", desc: "Replacing drive chains and sprockets on the spot.", link: "/book" },
      { rank: "#4 IN BIJWASAN", title: "Carburetor Clean", desc: "Full carburetor service for better mileage.", link: "/book" }
    ]
  },
  "rangpuri": {
    name: "Rangpuri",
    slug: "rangpuri",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "64",
    subRegionText: "Rangpuri Hills, Delhi Airport road boundary, Mahipalpur border, and NH-48 stretch.",
    heroText: "Get doorstep bike repair in Rangpuri. Verified mechanics reach your location with tools to fix breakdowns or do regular servicing at home.",
    whyChooseText: "Traffic on the NH-48 and Airport roads can make pushing a broken-down vehicle dangerous. Our mobile mechanic arrives directly where you are parked to solve the issue.",
    coveragePoints: [
      "Rangpuri Hills",
      "NH-48 Service Lane Stretch",
      "Mahipalpur Border Blocks",
      "Radisson Blu Highway Stretch",
      "Gali No 1 to 5, Rangpuri"
    ],
    reviews: [
      { stars: "★★★★★", text: "Had a flat tire on the highway lane. Quick rescue by FixWheel mechanic.", who: "Joginder Singh — NH-48, Rangpuri" },
      { stars: "★★★★★", text: "Clean oil service in my house parking. Quick and transparent billing.", who: "Nutan Kumari — Rangpuri Hills" }
    ],
    faqs: [
      { q: "Is roadside assistance available 24/7 in Rangpuri?", a: "Yes, we offer round-the-clock emergency support for highway breakdowns near Rangpuri and NH-48." },
      { q: "Do you charge extra for highway dispatch?", a: "Standard rates apply. We confirm everything before dispatching." }
    ],
    topServices: [
      { rank: "#1 IN RANGPURI", title: "Basic Service", desc: "Spark plug, brakes, and electrical checkups.", link: "/services/basic-service" },
      { rank: "#2 IN RANGPURI", title: "Engine Oil Change", desc: "Drain old oil and fill recommended OEM engine oil.", link: "/services/oil-change" },
      { rank: "#3 IN RANGPURI", title: "Puncture Repair", desc: "On-site flat tyre fixing for tubeless scooters.", link: "/services/tyre-replacement" },
      { rank: "#4 IN RANGPURI", title: "Battery Jumpstart", desc: "Jump-starting bikes that won't start.", link: "/book" }
    ]
  },
  "samalka": {
    name: "Samalka",
    slug: "samalka",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.6",
    reviewCount: "58",
    subRegionText: "Samalka Border road, NH-48 service lane, Kapashera boundary, and Samalka Village stretch.",
    heroText: "FixWheel doorstep bike repair in Samalka. Background-checked mechanics resolve spark plug issues, battery failures, and brake problems at your home.",
    whyChooseText: "Finding a trustworthy local mechanic around Samalka can be risky. We ensure high-quality servicing by deploying verified, trained professionals right to your gate.",
    coveragePoints: [
      "Samalka Border Road",
      "NH-48 Service Lane",
      "Kapashera Border Stretch",
      "Samalka Village Blocks",
      "Vardhaman Market Stretch"
    ],
    reviews: [
      { stars: "★★★★★", text: "Very handy service. The mechanic changed my Activa brakes at my home parking.", who: "Pooja Bisht — Samalka Village" },
      { stars: "★★★★★", text: "Excellent diagnostic work. Solved my bike's starting problem in 45 minutes.", who: "Harish Rawat — Samalka Border" }
    ],
    faqs: [
      { q: "Do you service all scooter models in Samalka?", a: "Yes, we service Activa, Jupiter, Access, Pleasure, and electric models at your doorstep." },
      { q: "Is there a service warranty?", a: "Yes, all our services come with a standard 15-day labor warranty." }
    ],
    topServices: [
      { rank: "#1 IN SAMALKA", title: "Basic Service", desc: "Brake check, spark plug cleaning, general lubing.", link: "/services/basic-service" },
      { rank: "#2 IN SAMALKA", title: "Engine Oil Change", desc: "Safely draining old oil and refilling with OEM grade.", link: "/services/oil-change" },
      { rank: "#3 IN SAMALKA", title: "Brake Repair", desc: "Replacing front/rear brake pads and tuning.", link: "/services/brake-repair" },
      { rank: "#4 IN SAMALKA", title: "Battery Replacement", desc: "On-site battery diagnostic and replacement.", link: "/services/battery-replacement" }
    ]
  },
  "hari-nagar": {
    name: "Hari Nagar",
    slug: "hari-nagar",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.8",
    reviewCount: "110",
    subRegionText: "Clock Tower area, Hari Nagar Depot stretch, Jail Road boundary, and Mayapuri border.",
    heroText: "Get professional bike repair in Hari Nagar at home. Vetted two-wheeler mechanics arrive within 45 minutes to service your motorcycle or scooter.",
    whyChooseText: "Hari Nagar is highly residential, but getting a quality service nearby involves navigating heavy traffic toward Jail Road or Mayapuri. Save your weekend by booking doorstep service.",
    coveragePoints: [
      "Hari Nagar Clock Tower Area",
      "Hari Nagar Bus Depot Stretch",
      "Jail Road Boundary Blocks",
      "D-Block Hari Nagar",
      "Mayapuri Border Stretch",
      "Shiv Nagar Area",
      "Virender Nagar Block"
    ],
    reviews: [
      { stars: "★★★★★", text: "Serviced my Pulsar in our society driveway. The mechanic clean-swept the oil trace, very neat job.", who: "Tarun Malhotra — Hari Nagar Depot" },
      { stars: "★★★★★", text: "Fitted a new Exide battery at my home in Shiv Nagar. Quick warranty setup.", who: "Sumit Chawla — Shiv Nagar, Hari Nagar" }
    ],
    faqs: [
      { q: "Can you service my bike near the Hari Nagar Jail Road market?", a: "Yes, we cover Jail Road, Clock Tower, and all surrounding residential blocks." },
      { q: "Do you dispose of old engine oil safely?", a: "Yes, our mechanics carry special containers to drain and recycle old oil responsibly." }
    ],
    topServices: [
      { rank: "#1 IN HARI NAGAR", title: "Basic Service", desc: "Filter check, plug clean, and brake adjustment package.", link: "/services/basic-service" },
      { rank: "#2 IN HARI NAGAR", title: "Engine Oil Change", desc: "OEM-grade engine oil flush and refill service.", link: "/services/oil-change" },
      { rank: "#3 IN HARI NAGAR", title: "Battery Replacement", desc: "On-site testing and replacement with full brand warranty.", link: "/services/battery-replacement" },
      { rank: "#4 IN HARI NAGAR", title: "Carburetor Servicing", desc: "Deep carburetor cleaning and mileage calibration.", link: "/book" }
    ]
  },
  "najafgarh-road": {
    name: "Najafgarh Road",
    slug: "najafgarh-road",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "92",
    subRegionText: "Uttam Nagar Metro corridor, Najafgarh Road market, Tilak Nagar stretch, and Dwarka Mor crossing.",
    heroText: "Doorstep bike repair on Najafgarh Road. Verified mobile mechanics stationed near the main road to reach you quickly for minor services or breakdown help.",
    whyChooseText: "Najafgarh Road is a highly congested commercial stretch. Pushing a broken bike here is exhausting and risky. FixWheel provides on-site diagnostic and repair service wherever you are parked.",
    coveragePoints: [
      "Najafgarh Road Market Area",
      "Uttam Nagar East Metro Belt",
      "Nawada Metro Stretch",
      "Dwarka Mor Crossing Road",
      "Tilak Nagar Boundary",
      "Mohan Garden Border"
    ],
    reviews: [
      { stars: "★★★★★", text: "Bike stopped starting near Nawada metro station. Mechanic arrived in 45 min and fixed a wiring short.", who: "Rohan Vashist — Nawada Metro, Najafgarh Road" },
      { stars: "★★★★★", text: "Got my Jupiter serviced at my home. Quick, honest pricing.", who: "Suresh Kashyap — Mohan Garden" }
    ],
    faqs: [
      { q: "Do you service roadside breakdowns on Najafgarh Road?", a: "Yes, we dispatch mechanics for breakdowns anywhere along the Najafgarh Road stretch." },
      { q: "What is your typical response time?", a: "Due to our local deployment, average response time is 45 minutes." }
    ],
    topServices: [
      { rank: "#1 IN NAJAFGARH ROAD", title: "Basic Service", desc: "Chain lube, plug clean, and brake adjustments.", link: "/services/basic-service" },
      { rank: "#2 IN NAJAFGARH ROAD", title: "Engine Oil Change", desc: "Safely draining old oil and fresh OEM refill.", link: "/services/oil-change" },
      { rank: "#3 IN NAJAFGARH ROAD", title: "Puncture Repair", desc: "On-site tubeless puncture fixing and tyre check.", link: "/services/tyre-replacement" },
      { rank: "#4 IN NAJAFGARH ROAD", title: "Chain Kit Replacement", desc: "Drive chain sprocket replacement at your location.", link: "/book" }
    ]
  },
  "palam": {
    name: "Palam",
    slug: "palam",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "124",
    subRegionText: "Palam Colony, Palam Railway Station road, Ramphal Chowk stretch, and Dwarka Sector 7 border.",
    heroText: "FixWheel offers doorstep bike repair in Palam Colony, Delhi. A verified two-wheeler mechanic comes directly to your residential parking or market block to repair your bike.",
    whyChooseText: "Palam is known for narrow streets, crowded markets, and lack of professional servicing garages. Avoid sub-standard local repairs — get verified experts with original spares.",
    coveragePoints: [
      "Palam Colony Blocks",
      "Palam Railway Station Road",
      "Ramphal Chowk Market Stretch",
      "Dwarka Sector 7 Border",
      "Manglapuri Bus Terminal",
      "Palam Village Road"
    ],
    reviews: [
      { stars: "★★★★★", text: "Took my bike for basic service. Done at my doorstep in Ramphal Chowk. Very clean work.", who: "Nishant Verma — Ramphal Chowk, Palam" },
      { stars: "★★★★★", text: "Mechanic arrived near the station within 45 minutes. Fixed a clutch issue.", who: "Karan Johar — Palam Station Road" }
    ],
    faqs: [
      { q: "Are your mechanics trained for electric scooters in Palam?", a: "Yes, we handle Ather, Ola, and major EV brands in Palam Colony." },
      { q: "Do you offer doorstep pick-and-drop?", a: "Yes, for extensive engine work that cannot be completed on the street, we offer free pick-and-drop." }
    ],
    topServices: [
      { rank: "#1 IN PALAM", title: "Basic Service", desc: "Brake adjust, plug check, and air filter maintenance.", link: "/services/basic-service" },
      { rank: "#2 IN PALAM", title: "Engine Oil Change", desc: "Drain old oil, flush, and refill with recommended OEM oil.", link: "/services/oil-change" },
      { rank: "#3 IN PALAM", title: "Brake Disc Replacement", desc: "Disk pad fitting and caliper servicing.", link: "/services/brake-repair" },
      { rank: "#4 IN PALAM", title: "Battery Test & Swap", desc: "Jumpstart and battery replacements on the spot.", link: "/services/battery-replacement" }
    ]
  },
  "uttam-nagar": {
    name: "Uttam Nagar",
    slug: "uttam-nagar",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "138",
    subRegionText: "East & West Uttam Nagar, Metro Station stretch, Kiran Garden, and Nawada border.",
    heroText: "Verified doorstep bike repair in Uttam Nagar, Delhi. Certified mechanics come to your home or office parking with genuine spare parts to service your scooter.",
    whyChooseText: "Uttam Nagar is one of Delhi's most densely populated zones. Local garages are constantly backlogged, and roads are crowded. Get professional service at your doorstep and skip the queue.",
    coveragePoints: [
      "Uttam Nagar East Blocks",
      "Uttam Nagar West Metro Stretch",
      "Kiran Garden Block",
      "Nawada Border Area",
      "Arya Samaj Road Stretch",
      "Milap Nagar Block"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a general oil service done while I was working from home. Extremely convenient.", who: "Vijay Kumar — Kiran Garden, Uttam Nagar" },
      { stars: "★★★★★", text: "Fixed a flat tyre in my narrow street. Punctual mechanic and clear pricing.", who: "Preeti Singh — Arya Samaj Road" }
    ],
    faqs: [
      { q: "Can you service my bike in the narrow lanes of Uttam Nagar?", a: "Yes, our mobile mechanics travel on commuter bikes carrying all compact toolkits, making it easy to reach narrow lanes." },
      { q: "Is pricing fixed for all blocks?", a: "Yes, starting at ₹499. Any spare parts added will be pre-approved by you." }
    ],
    topServices: [
      { rank: "#1 IN UTTAM NAGAR", title: "Basic Service", desc: "General mechanical check, plug clean, chain lube.", link: "/services/basic-service" },
      { rank: "#2 IN UTTAM NAGAR", title: "Engine Oil Change", desc: "OEM oil refilling and old oil disposal.", link: "/services/oil-change" },
      { rank: "#3 IN UTTAM NAGAR", title: "Tyre Replacement", desc: "Brand tyre replacement and tyre health check.", link: "/services/tyre-replacement" },
      { rank: "#4 IN UTTAM NAGAR", title: "Battery Replacement", desc: "Battery diagnostic and replacement.", link: "/services/battery-replacement" }
    ]
  },
  "janakpuri": {
    name: "Janakpuri",
    slug: "janakpuri",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.8",
    reviewCount: "128",
    subRegionText: "Blocks A to D, Janakpuri District Centre, Jail Road furniture market stretch, and Pankha Road boundary.",
    heroText: "FixWheel offers professional doorstep bike repair in Janakpuri. Verified mechanics arrive at your home or corporate parking to service your scooter or motorcycle on-site.",
    whyChooseText: "Janakpuri is a highly planned residential block, but finding a reliable, non-exploitative mechanic is still difficult. We offer clear upfront pricing and a 15-day service warranty.",
    coveragePoints: [
      "Block A1 to A4 Pockets",
      "Block B1 to B3 Pockets",
      "Block C1 to C4 Pockets",
      "Janakpuri District Centre",
      "Jail Road Market Stretch",
      "Pankha Road Boundary",
      "Chanakya Place area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got my sports bike serviced at home in Block C. Prompt response and verified mechanic.", who: "Rajeev Sethi — Block C, Janakpuri" },
      { stars: "★★★★★", text: "Excellent engine oil change in our apartment parking. Clean work.", who: "Neha Kapur — Block B, Janakpuri" }
    ],
    faqs: [
      { q: "Do you service premium cruiser bikes in Janakpuri?", a: "Yes, our mechanics are trained for cruiser bikes, premium commuter models, and scooters." },
      { q: "Is emergency jump-start help available?", a: "Yes, we jump-start dead batteries on the spot across all blocks in Janakpuri." }
    ],
    topServices: [
      { rank: "#1 IN JANAKPURI", title: "Basic Service", desc: "Spark plug check, filter inspection, and brake adjustment.", link: "/services/basic-service" },
      { rank: "#2 IN JANAKPURI", title: "Engine Oil Change", desc: "Draining oil, flush, and OEM mineral/synthetic oil refill.", link: "/services/oil-change" },
      { rank: "#3 IN JANAKPURI", title: "Battery Replacement", desc: "On-site battery check, jump start, and replacement with warranty.", link: "/services/battery-replacement" },
      { rank: "#4 IN JANAKPURI", title: "Disc Brake Caliper Servicing", desc: "Disc pad change and brake calibration.", link: "/services/brake-repair" }
    ]
  },
  "vikaspuri": {
    name: "Vikaspuri",
    slug: "vikaspuri",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "94",
    subRegionText: "Blocks A to G, Vikaspuri PVR stretch, Outer Ring Road boundary, and Bodella village area.",
    heroText: "Doorstep bike service and scooter repair in Vikaspuri. Avoid local market queues — we send a trained mechanic with all required tools directly to you.",
    whyChooseText: "Vikaspuri has busy commercial centers like PVR. Getting your scooter serviced at home saves you valuable personal time. Book verified mechanics with FixWheel.",
    coveragePoints: [
      "Block A & B Pockets",
      "Block C & D Pockets",
      "Block E, F, G Blocks",
      "Vikaspuri PVR Stretch",
      "Outer Ring Road Boundary",
      "Bodella Village Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Serviced my Vespa at my home in Block F. The mechanic was extremely polite and did a fantastic job.", who: "Meenakshi Dey — Block F, Vikaspuri" },
      { stars: "★★★★★", text: "Resolved a starting issue on my bike within 45 minutes of booking. Highly impressed.", who: "Rohit Anand — Block C, Vikaspuri" }
    ],
    faqs: [
      { q: "Can the mechanic service my vehicle in society parkings?", a: "Yes, we work in all residential layouts, societies, and block parkings." },
      { q: "How do I make payment after the service?", a: "You can pay via UPI, credit/debit card, or cash after checking the repaired vehicle." }
    ],
    topServices: [
      { rank: "#1 IN VIKASPURI", title: "Basic Service", desc: "Quick check of brakes, spark plugs, filters, and lubing.", link: "/services/basic-service" },
      { rank: "#2 IN VIKASPURI", title: "Engine Oil Change", desc: "Old oil drainage and fresh synthetic/mineral oil refill.", link: "/services/oil-change" },
      { rank: "#3 IN VIKASPURI", title: "Tyre Puncture Repair", desc: "Spot tyre repair for tubeless and tube two-wheelers.", link: "/services/tyre-replacement" },
      { rank: "#4 IN VIKASPURI", title: "Clutch Tuning", desc: "Clutch wire adjustment and cable replacement.", link: "/services/brake-repair" }
    ]
  },
  "dabri": {
    name: "Dabri",
    slug: "dabri",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.6",
    reviewCount: "78",
    subRegionText: "Dabri Mor, Dabri Extension, Pankha Road stretch, and Janakpuri C-Block boundary.",
    heroText: "Reliable doorstep bike repair in Dabri, Delhi. Get your vehicle serviced at home or office by a verified mechanic with pre-confirmed pricing.",
    whyChooseText: "Dabri Mor is known for traffic jams and crowded local workshops. Skip the chaotic local experience — get professional doorstep servicing with zero hassle.",
    coveragePoints: [
      "Dabri Mor Intersection",
      "Dabri Extension Blocks",
      "Pankha Road Service Lane",
      "Janakpuri C-Block Border",
      "Dabri Village Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a basic service done in Dabri Mor. Quick and professional.", who: "Lalit Mohan — Dabri Mor" },
      { stars: "★★★★★", text: "Fitted new brake pads at my residential gate. Genuine parts used.", who: "Sanjay Sen — Dabri Extension" }
    ],
    faqs: [
      { q: "Do you service all areas near Dabri Mor?", a: "Yes, we cover Dabri Mor, Dabri Extension, and all bordering blocks of Janakpuri and Pankha Road." },
      { q: "Is roadside rescue available near Pankha Road?", a: "Yes, our mobile mechanics are available for emergency breakdown assistance in the area." }
    ],
    topServices: [
      { rank: "#1 IN DABRI", title: "Basic Service", desc: "Commuter bike maintenance, chain adjustment, plug cleaning.", link: "/services/basic-service" },
      { rank: "#2 IN DABRI", title: "Engine Oil Change", desc: "Safely draining old oil and refilling fresh recommended oil.", link: "/services/oil-change" },
      { rank: "#3 IN DABRI", title: "Brake Pad Change", desc: "Brake caliper pad and drum brake shoe replacement.", link: "/services/brake-repair" },
      { rank: "#4 IN DABRI", title: "Battery Test & Jump", desc: "Jump start and new battery replacement on the spot.", link: "/services/battery-replacement" }
    ]
  },
  "bindapur": {
    name: "Bindapur",
    slug: "bindapur",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.6",
    reviewCount: "81",
    subRegionText: "Bindapur DDA flats, Pocket-3 stretch, Uttam Nagar border, and Dwarka Sector 1 boundary.",
    heroText: "FixWheel offers doorstep bike mechanic services in Bindapur, Delhi. Verified mechanics arrive at your home with genuine parts to service your scooter or motorcycle.",
    whyChooseText: "With heavy parking congestion around DDA flats in Bindapur, towing a bike is highly inconvenient. Our on-site service handles everything right where your bike is parked.",
    coveragePoints: [
      "Bindapur DDA Flats Pocket 1 to 4",
      "Pocket-3 Road Stretch",
      "Uttam Nagar Border Road",
      "Dwarka Sector 1 Border",
      "Bindapur Village Road"
    ],
    reviews: [
      { stars: "★★★★★", text: "Serviced my Activa in the DDA flat parking lot. Clean work, verified mechanic.", who: "Anil Mittal — DDA Flats, Bindapur" },
      { stars: "★★★★★", text: "Had a flat tire. The mechanic came inside the flat lane and repaired it.", who: "Deepa Nair — Pocket-3, Bindapur" }
    ],
    faqs: [
      { q: "Can you service my bike in DDA Flat parking spaces?", a: "Yes, our mechanics can operate in open or basement residential parkings in Bindapur flat blocks." },
      { q: "How long does an oil change take here?", a: "It takes about 45 minutes. We clean the filter and lube the chain as well." }
    ],
    topServices: [
      { rank: "#1 IN BINDAPUR", title: "Basic Service", desc: "Regular maintenance, brake calibration, component lubrication.", link: "/services/basic-service" },
      { rank: "#2 IN BINDAPUR", title: "Engine Oil Change", desc: "Premium grade oil drainage and refill.", link: "/services/oil-change" },
      { rank: "#3 IN BINDAPUR", title: "Battery Replacement", desc: "Battery diagnostic check and warranty battery swap.", link: "/services/battery-replacement" },
      { rank: "#4 IN BINDAPUR", title: "Carburetor Service", desc: "Deep jet clean and tuning for high mileage.", link: "/book" }
    ]
  },
  "nawada": {
    name: "Nawada",
    slug: "nawada",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "84",
    subRegionText: "Nawada Metro Station stretch, Nawada Housing Society, Uttam Nagar border, and Dwarka Sector 15 boundary.",
    heroText: "Get doorstep bike repair in Nawada, Delhi. Background-checked mechanics arrive at your home or society gate to handle your two-wheeler repair on the spot.",
    whyChooseText: "Nawada Metro area is heavily crowded during rush hours. Avoid local repair shop delays — get professional, transparent two-wheeler service right in your driveway.",
    coveragePoints: [
      "Nawada Metro Station Area",
      "Nawada Housing Society",
      "Uttam Nagar Border blocks",
      "Dwarka Sector 15 Border",
      "Nawada Village Main Road"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a basic service done at Nawada housing society. Very thorough checkup.", who: "Gaurav Malhotra — Nawada Housing Society" },
      { stars: "★★★★★", text: "The mechanic repaired my scooter near the Metro station entrance. Saved my day.", who: "Amit Gupta — Nawada Metro Stretch" }
    ],
    faqs: [
      { q: "Do you cover all societies in Nawada?", a: "Yes, we cover Nawada Housing Society, Mohan Garden pockets, and all nearby blocks." },
      { q: "How quickly can a mechanic arrive?", a: "Average arrival time is 45 minutes after booking confirmation." }
    ],
    topServices: [
      { rank: "#1 IN NAWADA", title: "Basic Service", desc: "Spark plug, air filter, brake and electrical systems check.", link: "/services/basic-service" },
      { rank: "#2 IN NAWADA", title: "Engine Oil Change", desc: "Oil drain and refilling with recommended OEM oil.", link: "/services/oil-change" },
      { rank: "#3 IN NAWADA", title: "Tyre Puncture Repair", desc: "On-site tubeless tire puncture repair.", link: "/services/tyre-replacement" },
      { rank: "#4 IN NAWADA", title: "Battery Test & Swap", desc: "Jump start and battery replacements with brand warranty.", link: "/services/battery-replacement" }
    ]
  },
  "nihal-vihar": {
    name: "Nihal Vihar",
    slug: "nihal-vihar",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.6",
    reviewCount: "76",
    subRegionText: "Nihal Vihar Main Road, Chander Vihar border, Nangloi road stretch, and Paschim Vihar boundary.",
    heroText: "FixWheel doorstep bike repair and scooter service in Nihal Vihar, Delhi. Mobile mechanics arrive at your home with genuine parts to repair your two-wheeler.",
    whyChooseText: "Getting your bike serviced in local Nihal Vihar shops often involves long wait times and sub-standard parts. FixWheel guarantees quality service and flat pricing.",
    coveragePoints: [
      "Nihal Vihar Main Road",
      "Chander Vihar Border Area",
      "Nangloi Road Stretch",
      "Paschim Vihar Boundary",
      "Vikas Nagar Border"
    ],
    reviews: [
      { stars: "★★★★★", text: "Serviced my Honda Activa at my gate. Very prompt and professional mechanic.", who: "Devender Yadav — Nihal Vihar Main Road" },
      { stars: "★★★★★", text: "Satisfactory brake repair near Chander Vihar border. No hidden fees.", who: "Suresh Tomar — Chander Vihar Border" }
    ],
    faqs: [
      { q: "Do you service all brands in Nihal Vihar?", a: "Yes, we service Honda, Hero, TVS, Bajaj, Suzuki, Yamaha, and other brands." },
      { q: "Can I schedule a weekend service?", a: "Yes, you can pre-book any weekend slot on our website or by calling us." }
    ],
    topServices: [
      { rank: "#1 IN NIHAL VIHAR", title: "Basic Service", desc: "Brake checkup, spark plug clean, filter check.", link: "/services/basic-service" },
      { rank: "#2 IN NIHAL VIHAR", title: "Engine Oil Change", desc: "Draining oil, engine flush, refilling OEM oil.", link: "/services/oil-change" },
      { rank: "#3 IN NIHAL VIHAR", title: "Brake Repair", desc: "Drum brake shoe and disk pad replacement.", link: "/services/brake-repair" },
      { rank: "#4 IN NIHAL VIHAR", title: "Jump Start Service", desc: "Jump start for two-wheelers that won't start.", link: "/book" }
    ]
  },
  "subhash-nagar": {
    name: "Subhash Nagar",
    slug: "subhash-nagar",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.8",
    reviewCount: "102",
    subRegionText: "Blocks 1 to 15, Subhash Nagar Metro stretch, Rajouri Garden boundary, and Pacific Mall stretch.",
    heroText: "FixWheel doorstep bike repair in Subhash Nagar. Vetted mechanics arrive at your home, office, or Pacific Mall parking area to service your scooter or motorcycle.",
    whyChooseText: "Subhash Nagar has busy block markets and high traffic. Skip pushing your vehicle through crowded lanes — our mobile mechanic handles all repairs at your residence.",
    coveragePoints: [
      "Block 1 to 15 Blocks",
      "Subhash Nagar Metro Station Area",
      "Pacific Mall Stretch",
      "Rajouri Garden Boundary",
      "Khyala Village Border",
      "Meenakshi Garden Block"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a basic service done in Block 8. Punctual mechanic and clear pricing.", who: "Manish Sethi — Block 8, Subhash Nagar" },
      { stars: "★★★★★", text: "Mechanic came right inside our society gate. Very smooth experience.", who: "Prerna Lamba — Meenakshi Garden" }
    ],
    faqs: [
      { q: "Do you cover the commercial blocks near Pacific Mall?", a: "Yes, we cover all blocks in Subhash Nagar and the commercial area surrounding Pacific Mall." },
      { q: "Is there a labor warranty on repairs?", a: "Yes, we provide a 15-day labor warranty on all repairs." }
    ],
    topServices: [
      { rank: "#1 IN SUBHASH NAGAR", title: "Basic Service", desc: "Spark plug clean, filter check, brake adjustment.", link: "/services/basic-service" },
      { rank: "#2 IN SUBHASH NAGAR", title: "Engine Oil Change", desc: "Oil change and engine oil filter checkup.", link: "/services/oil-change" },
      { rank: "#3 IN SUBHASH NAGAR", title: "Tyre Replacement", desc: "Tyre inspection and replacement on-site.", link: "/services/tyre-replacement" },
      { rank: "#4 IN SUBHASH NAGAR", title: "Battery Replacement", desc: "On-site battery diagnostic and replacement.", link: "/services/battery-replacement" }
    ]
  },
  "tilak-nagar": {
    name: "Tilak Nagar",
    slug: "tilak-nagar",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "115",
    subRegionText: "Tilak Nagar Market, Double Storey blocks, Jail Road boundary, and Subhash Nagar border.",
    heroText: "Get professional doorstep bike repair in Tilak Nagar. Background-checked mechanics arrive at your home or society gate to handle your two-wheeler repair on the spot.",
    whyChooseText: "Tilak Nagar Market is highly congested. Pushing a broken bike to local mechanics is exhausting. Save time and energy by booking our verified on-site service.",
    coveragePoints: [
      "Tilak Nagar Main Market Road",
      "Double Storey Blocks",
      "Jail Road Boundary Area",
      "Subhash Nagar Border",
      "Tilak Nagar Metro corridor",
      "Fateh Nagar Block"
    ],
    reviews: [
      { stars: "★★★★★", text: "Very prompt service in Fateh Nagar. Clean, transparent, and polite mechanic.", who: "Gurmukh Singh — Fateh Nagar, Tilak Nagar" },
      { stars: "★★★★★", text: "My bike broke down near Jail Road. The mechanic arrived in 45 minutes and fixed it.", who: "Dinesh Kalra — Jail Road, Tilak Nagar" }
    ],
    faqs: [
      { q: "Do you service bikes in Fateh Nagar and Double Storey blocks?", a: "Yes, our mechanics cover all blocks, markets, and residential areas in Tilak Nagar." },
      { q: "What parts do you use for replacement?", a: "We only use genuine OEM and brand-warranted spare parts." }
    ],
    topServices: [
      { rank: "#1 IN TILAK NAGAR", title: "Basic Service", desc: "Spark plug check, chain lube, brake adjustments.", link: "/services/basic-service" },
      { rank: "#2 IN TILAK NAGAR", title: "Engine Oil Change", desc: "OEM-grade oil refilled and old oil safely drained.", link: "/services/oil-change" },
      { rank: "#3 IN TILAK NAGAR", title: "Brake Repair", desc: "Disk or drum brake pad replacement and calibration.", link: "/services/brake-repair" },
      { rank: "#4 IN TILAK NAGAR", title: "Battery Test & Swap", desc: "On-site battery test and replacement with warranty.", link: "/services/battery-replacement" }
    ]
  },
  "rajouri-garden": {
    name: "Rajouri Garden",
    slug: "rajouri-garden",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.8",
    reviewCount: "134",
    subRegionText: "Main Market stretch, PVR Promenade area, Tagore Garden border, and Ring Road boundary.",
    heroText: "FixWheel offers premium doorstep bike repair in Rajouri Garden. Get your two-wheeler serviced at your residence by background-checked mechanics.",
    whyChooseText: "Rajouri Garden is a bustling shopping and dining hub. Avoid wasting your weekend at local garages. Book our mobile mechanic to service your motorcycle in your parking lot.",
    coveragePoints: [
      "Rajouri Garden Main Market",
      "PVR Promenade Area",
      "Ring Road Boundary Stretch",
      "Tagore Garden Border Blocks",
      "Subhash Nagar Border Area",
      "J-Block Rajouri Garden"
    ],
    reviews: [
      { stars: "★★★★★", text: "Extremely professional. Obeyed all society protocols and completed the service quickly in the basement.", who: "Sahil Kapoor — Block J, Rajouri Garden" },
      { stars: "★★★★★", text: "Had a flat tyre near the main market. The mechanic arrived quickly and fixed the puncture.", who: "Abeer Oberoi — Rajouri Market" }
    ],
    faqs: [
      { q: "Can the mechanic service my bike in the mall or commercial parkings?", a: "Yes, we work in commercial and mall parkings in Rajouri Garden as long as society/building security permits entry." },
      { q: "Do you service sports and premium bikes here?", a: "Yes, we have specialized mechanics for KTM, Royal Enfield, and premium commuter bikes." }
    ],
    topServices: [
      { rank: "#1 IN RAJOURI GARDEN", title: "Basic Service", desc: "Commuter bike maintenance, chain adjustment, plug check.", link: "/services/basic-service" },
      { rank: "#2 IN RAJOURI GARDEN", title: "Engine Oil Change", desc: "Old engine oil drainage and premium OEM refill.", link: "/services/oil-change" },
      { rank: "#3 IN RAJOURI GARDEN", title: "Premium Bike Tuning", desc: "Specialized service for sports bikes and cruiser motorcycles.", link: "/services/premium-bike-service" },
      { rank: "#4 IN RAJOURI GARDEN", title: "Battery Replacement", desc: "On-site battery test and replacement with brand warranty.", link: "/services/battery-replacement" }
    ]
  },
  "punjabi-bagh": {
    name: "Punjabi Bagh",
    slug: "punjabi-bagh",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.8",
    reviewCount: "108",
    subRegionText: "East & West Punjabi Bagh, Club Road stretch, Ring Road boundary, and Rohtak Road area.",
    heroText: "Doorstep bike service and professional mechanics in Punjabi Bagh, Delhi. Avoid local garage runs — we service your scooter or motorcycle right at home.",
    whyChooseText: "Punjabi Bagh has luxury bungalows and guarded residential gates. Security protocols are strictly followed by our verified, background-checked technicians.",
    coveragePoints: [
      "Punjabi Bagh East Blocks",
      "Punjabi Bagh West Blocks",
      "Punjabi Bagh Club Road",
      "Ring Road Boundary Area",
      "Rohtak Road Stretch",
      "Shivaji Park Metro Area"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got my Activa serviced at Punjabi Bagh West. Prompt, professional mechanic.", who: "Harmeet Singh — Punjabi Bagh West" },
      { stars: "★★★★★", text: "Clean oil change in my villa driveway. Highly recommended doorstep service.", who: "Ravinder Gill — Punjabi Bagh East" }
    ],
    faqs: [
      { q: "Are your mechanics background-verified in Punjabi Bagh?", a: "Yes, every mechanic on our platform undergoes rigorous identity and background checks." },
      { q: "Is pricing fixed for all scooter brands?", a: "Yes, starting at ₹499. The price is pre-agreed before the job begins." }
    ],
    topServices: [
      { rank: "#1 IN PUNJABI BAGH", title: "Basic Service", desc: "General tuning, electrical system check, brake adjustment.", link: "/services/basic-service" },
      { rank: "#2 IN PUNJABI BAGH", title: "Engine Oil Change", desc: "Engine oil replacement with recommended OEM grade.", link: "/services/oil-change" },
      { rank: "#3 IN PUNJABI BAGH", title: "Chain Sprocket Swap", desc: "Chain set and sprocket kit replacements at your doorstep.", link: "/book" },
      { rank: "#4 IN PUNJABI BAGH", title: "OBD Inspection", desc: "Diagnostic scanner connected to troubleshoot engine issues.", link: "/book" }
    ]
  },
  "ashok-vihar": {
    name: "Ashok Vihar",
    slug: "ashok-vihar",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "96",
    subRegionText: "Phases 1 to 4, Deep Cinema stretch, Satyawati College road, and Shalimar Bagh boundary.",
    heroText: "FixWheel offers doorstep bike repair in Ashok Vihar. Verified mechanics come to your home or office with genuine spare parts to service your vehicle.",
    whyChooseText: "Avoid pushing your bike through congested market roads like Deep Market. Get your vehicle repaired or serviced in your driveway by a certified professional.",
    coveragePoints: [
      "Ashok Vihar Phase 1 to 4 Pockets",
      "Deep Cinema Stretch",
      "Satyawati College Road",
      "Shalimar Bagh Boundary",
      "Wazirpur Industrial Area Border",
      "Major Somnath Marg"
    ],
    reviews: [
      { stars: "★★★★★", text: "Very detailed work. Service done in under 45 minutes at Phase 2. Smooth ride now.", who: "Rajeev Saxena — Phase 2, Ashok Vihar" },
      { stars: "★★★★★", text: "Mechanic arrived with new disc pads and replaced them in Phase 1. Highly convenient.", who: "Sonia Kapoor — Phase 1, Ashok Vihar" }
    ],
    faqs: [
      { q: "Do you cover all phases in Ashok Vihar?", a: "Yes, we cover Phase 1, Phase 2, Phase 3, Phase 4, and bordering areas near Wazirpur." },
      { q: "What if my bike needs pick-and-drop service?", a: "For complex engine repairs, we offer pick-and-drop service to our local partner hub." }
    ],
    topServices: [
      { rank: "#1 IN ASHOK VIHAR", title: "Basic Service", desc: "Filter check, spark plug cleaning, and brake alignments.", link: "/services/basic-service" },
      { rank: "#2 IN ASHOK VIHAR", title: "Engine Oil Change", desc: "Safely draining old oil and replacing it with OEM oil.", link: "/services/oil-change" },
      { rank: "#3 IN ASHOK VIHAR", title: "Brake Repair", desc: "Brake shoe/pad replacement and adjustments.", link: "/services/brake-repair" },
      { rank: "#4 IN ASHOK VIHAR", title: "Battery Replacement", desc: "On-site battery test and replacement with brand warranty.", link: "/services/battery-replacement" }
    ]
  },
  "pitampura": {
    name: "Pitampura",
    slug: "pitampura",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "112",
    subRegionText: "Netaji Subhash Place (NSP) stretch, Outer Ring Road boundary, Pitampura TV Tower area, and Rohini boundary.",
    heroText: "Verified doorstep bike repair service in Pitampura, Delhi. Mobile mechanics arrive at your home or office parking with genuine spare parts to service your bike.",
    whyChooseText: "Pitampura is a major residential and commercial hub. Skip local shops with long queues — get your bike serviced in your driveway or office lot while you focus on your day.",
    coveragePoints: [
      "Netaji Subhash Place (NSP) Area",
      "Outer Ring Road Boundary Stretch",
      "Pitampura TV Tower Area",
      "Rohini Border Area",
      "Saraswati Vihar Pockets",
      "Co-operative Group Housing Societies (CGHS)"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a basic service done in Saraswati Vihar. Thorough work, bike feels smooth.", who: "Manish Joshi — Saraswati Vihar, Pitampura" },
      { stars: "★★★★★", text: "Carburetor cleaned and tuned. Mileage has improved. Excellent door service.", who: "Kunal Sen — Pitampura, Delhi" }
    ],
    faqs: [
      { q: "Can the mechanic service my bike in CGHS societies in Pitampura?", a: "Yes, our verified mechanics enter all major societies in Pitampura by registering at the security gate." },
      { q: "What happens if extra parts are needed?", a: "The mechanic will quote the cost of the parts. Work proceeds only after you agree." }
    ],
    topServices: [
      { rank: "#1 IN PITAMPURA", title: "Basic Service", desc: "Plugs, filters, lubing, and electrical safety check.", link: "/services/basic-service" },
      { rank: "#2 IN PITAMPURA", title: "Engine Oil Change", desc: "Draining oil, flush, and OEM oil refill.", link: "/services/oil-change" },
      { rank: "#3 IN PITAMPURA", title: "Carburetor Tuning", desc: "Complete cleaning and mileage calibration.", link: "/book" },
      { rank: "#4 IN PITAMPURA", title: "Jump Start Service", desc: "Quick battery jump-starts for dead vehicles.", link: "/book" }
    ]
  },
  "rohini": {
    name: "Rohini",
    slug: "rohini",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.8",
    reviewCount: "164",
    subRegionText: "Sectors 1 to 24, Rithala Metro corridor, Rohini Sector 9 market stretch, and Pitampura boundary.",
    heroText: "FixWheel offers professional doorstep bike repair in Rohini, Delhi. Verified mechanics arrive at your home or sector parking to service your scooter or motorcycle.",
    whyChooseText: "Rohini is a massive residential sector layout. Skip local repair shop queues and avoid towing fees — book a verified mechanic to repair your vehicle right in your home parking.",
    coveragePoints: [
      "Sector 1 to 24 Blocks",
      "Rithala Metro Corridor Stretch",
      "Sector 9 Market Area",
      "Sector 15 & 16 Residential Pockets",
      "Pitampura Border Area",
      "Japanese Park Boundary"
    ],
    reviews: [
      { stars: "★★★★★", text: "Very prompt service in Sector 9. The mechanic fixed a starting problem in 45 minutes.", who: "Rajesh Ranjan — Sector 9, Rohini" },
      { stars: "★★★★★", text: "Got a basic service done in Sector 15. The mechanic was well-trained and did a neat job.", who: "Deepa Devi — Sector 15, Rohini" }
    ],
    faqs: [
      { q: "Do you cover all sectors in Rohini?", a: "Yes, we cover all sectors (1 through 24) and bordering areas near Pitampura and Rithala." },
      { q: "What is your typical response time in Rohini?", a: "Average arrival time in Rohini is 45 minutes, since we have local mobile units stationed in Sector 9." }
    ],
    topServices: [
      { rank: "#1 IN ROHINI", title: "Basic Service", desc: "Spark plug clean, filter check, brake adjustment.", link: "/services/basic-service" },
      { rank: "#2 IN ROHINI", title: "Engine Oil Change", desc: "Old engine oil drainage and premium OEM refill.", link: "/services/oil-change" },
      { rank: "#3 IN ROHINI", title: "Tyre Replacement", desc: "Brand tyre replacement and tyre health check.", link: "/services/tyre-replacement" },
      { rank: "#4 IN ROHINI", title: "Battery Test & Swap", desc: "Battery test and replacement on the spot.", link: "/services/battery-replacement" }
    ]
  },
  "shalimar-bagh": {
    name: "Shalimar Bagh",
    slug: "shalimar-bagh",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "82",
    subRegionText: "Blocks A to U, Shalimar Bagh Club Road, Outer Ring Road stretch, and Ashok Vihar boundary.",
    heroText: "Get doorstep bike repair in Shalimar Bagh. Background-checked mechanics arrive at your home or society gate to handle your two-wheeler repair on the spot.",
    whyChooseText: "Avoid pushing your bike through Shalimar Bagh traffic or waiting at local shops. FixWheel brings experienced mechanics directly to your residential address.",
    coveragePoints: [
      "Block A to U Pockets",
      "Shalimar Bagh Club Road",
      "Outer Ring Road Stretch",
      "Ashok Vihar Boundary Area",
      "Max Hospital Border Stretch",
      "Shalimar Bagh Metro Corridor"
    ],
    reviews: [
      { stars: "★★★★★", text: "Very prompt service in Block B. Clean, transparent, and polite mechanic.", who: "Sonia Malhotra — Block B, Shalimar Bagh" },
      { stars: "★★★★★", text: "Got my Royal Enfield general checkup done. Efficient and clean work.", who: "Sanjay Dutta — Block U, Shalimar Bagh" }
    ],
    faqs: [
      { q: "Do you cover the residential blocks near Shalimar Bagh Club Road?", a: "Yes, we cover all blocks (A through U) and surrounding societies." },
      { q: "What is your average arrival time in Shalimar Bagh?", a: "A mechanic typically reaches Shalimar Bagh locations within 45 minutes." }
    ],
    topServices: [
      { rank: "#1 IN SHALIMAR BAGH", title: "Basic Service", desc: "Spark plug check, chain lube, brake adjustments.", link: "/services/basic-service" },
      { rank: "#2 IN SHALIMAR BAGH", title: "Engine Oil Change", desc: "OEM-grade oil refilled and old oil safely drained.", link: "/services/oil-change" },
      { rank: "#3 IN SHALIMAR BAGH", title: "Battery Replacement", desc: "On-site battery test and replacement with warranty.", link: "/services/battery-replacement" },
      { rank: "#4 IN SHALIMAR BAGH", title: "Brake Repair", desc: "Brake pad replacement and brake calibration.", link: "/services/brake-repair" }
    ]
  },
  "paschim-vihar": {
    name: "Paschim Vihar",
    slug: "paschim-vihar",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "94",
    subRegionText: "Blocks A to BG, Outer Ring Road stretch, Jwala Heri Market, and Punjabi Bagh boundary.",
    heroText: "FixWheel offers professional doorstep bike repair in Paschim Vihar. Verified mechanics arrive at your home or society gate to service your vehicle.",
    whyChooseText: "Jwala Heri Market area gets heavily congested. Save time by booking a doorstep service — we handle all scooter and motorcycle repairs at your residence.",
    coveragePoints: [
      "Block A to BG Pockets",
      "Jwala Heri Market Stretch",
      "Outer Ring Road Service Lane",
      "Punjabi Bagh Border Area",
      "Mera Bagh Block",
      "Paschim Vihar Club Road"
    ],
    reviews: [
      { stars: "★★★★★", text: "Got a basic service done in Block A. Very thorough and mechanic cleaned up the area after work.", who: "Rahul Sinha — Block A, Paschim Vihar" },
      { stars: "★★★★★", text: "Mechanic arrived with new disc pads and replaced them near Jwala Heri. Highly convenient.", who: "Sonia Kapoor — Jwala Heri Area" }
    ],
    faqs: [
      { q: "Do you cover all blocks in Paschim Vihar?", a: "Yes, we cover all blocks (A through BG) and surrounding societies." },
      { q: "Can I schedule a service in advance?", a: "Yes, you can pick any time slot that suits you on our booking page." }
    ],
    topServices: [
      { rank: "#1 IN PASCHIM VIHAR", title: "Basic Service", desc: "Spark plug clean, filter check, brake adjustment.", link: "/services/basic-service" },
      { rank: "#2 IN PASCHIM VIHAR", title: "Engine Oil Change", desc: "Oil change and engine oil filter checkup.", link: "/services/oil-change" },
      { rank: "#3 IN PASCHIM VIHAR", title: "Battery Replacement", desc: "On-site battery test and replacement with warranty.", link: "/services/battery-replacement" },
      { rank: "#4 IN PASCHIM VIHAR", title: "Carburetor Service", desc: "Carburetor cleaning and tuning for optimal mileage.", link: "/book" }
    ]
  },
  "kirti-nagar": {
    name: "Kirti Nagar",
    slug: "kirti-nagar",
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "86",
    subRegionText: "Furniture Market stretch, Industrial Area Phase 1 & 2, Ramesh Nagar border, and Patel Nagar boundary.",
    heroText: "Doorstep bike mechanic and two-wheeler servicing in Kirti Nagar, Delhi. Avoid local garage queues — we send a trained mechanic to your location with all required tools.",
    whyChooseText: "Getting your bike serviced in local Kirti Nagar shops often involves long wait times and sub-standard parts. FixWheel guarantees quality service and flat pricing.",
    coveragePoints: [
      "Furniture Market Road",
      "Industrial Area Phase 1 & 2 Blocks",
      "Ramesh Nagar Border Area",
      "Patel Nagar Boundary",
      "Kirti Nagar Metro Station area",
      "Saraswati Garden Block"
    ],
    reviews: [
      { stars: "★★★★★", text: "Serviced my Pulsar in our driveway. Very detailed work, pre-confirmed pricing.", who: "Nikhil Taneja — Saraswati Garden" },
      { stars: "★★★★★", text: "Quick battery jump-starts for dead vehicles. Efficient and clean work.", who: "Sanjay Sen — Industrial Area Phase 1" }
    ],
    faqs: [
      { q: "Do you cover Kirti Nagar Furniture Market area?", a: "Yes, we cover the furniture market, industrial areas, and all bordering blocks of Ramesh Nagar and Patel Nagar." },
      { q: "Is there a service warranty?", a: "Yes, we provide a 15-day service warranty on all labor and repair works." }
    ],
    topServices: [
      { rank: "#1 IN KIRTI NAGAR", title: "Basic Service", desc: "Brake check, chain lube, spark plug clean.", link: "/services/basic-service" },
      { rank: "#2 IN KIRTI NAGAR", title: "Engine Oil Change", desc: "OEM-recommended engine oil replacement.", link: "/services/oil-change" },
      { rank: "#3 IN KIRTI NAGAR", title: "Battery Replacement", desc: "On-site battery test and replacement.", link: "/services/battery-replacement" },
      { rank: "#4 IN KIRTI NAGAR", title: "Brake Shoe Repair", desc: "Brake pad replacement and brake cable calibration.", link: "/services/brake-repair" }
    ]
  }
};
