export interface BrandReview {
  name: string;
  vehicle: string;
  rating: number;
  location: string;
  date: string;
  comment: string;
}

export interface BrandDetailData {
  name: string;
  tagline: string;
  description: string;
  additionalInfo: {
    engineOil: string;
    warranty: string;
    parts: string;
    avgTime: string;
  };
  keyBenefits: { title: string; desc: string }[];
  reviews: BrandReview[];
  seoKeywords: string[];
}

export const BRAND_DETAILS: Record<string, BrandDetailData> = {
  "honda": {
    name: "Honda",
    tagline: "Precision Doorstep Maintenance for India's Favorite Two-Wheelers",
    description: "Honda scooters and motorcycles are engineered for extreme durability and smooth performance. From the commuter favorite Activa to the sporty Hornet and classic CB350, our certified mechanics use specialized diagnostic tools and genuine Honda parts (HMSI) to ensure your engine maintains its signature refinement and high fuel efficiency.",
    additionalInfo: {
      engineOil: "10W-30 HMSI Specification Semi-Synthetic/Synthetic",
      warranty: "15-Day Labor & Diagnostics Warranty",
      parts: "100% Genuine HMSI Air Filters, Brakes, and Spark Plugs",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Activa Specialist Care", desc: "Expert cvt gearbox cleaning, clutch roller adjustment, and transmission fluid replacement for all Activa models (3G to 6G/125)." },
      { title: "Refinement Tuning", desc: "Engine valve clearance adjustments and carburetor/FI nozzle cleaning to restore factory-smooth vibration-free performance." },
      { title: "Genuine Parts Guarantee", desc: "HMSI genuine gaskets, brake cables, and brake shoes fitted right in front of you." }
    ],
    reviews: [
      { name: "Anish Sharma", vehicle: "Activa 6G", rating: 5, location: "Sector 62, Noida", date: "July 12, 2026", comment: "My Activa had starting issues and low pickup. The mechanic cleaned the carburetor, replaced the spark plug and oil in under 45 mins. Runs like new now!" },
      { name: "Rohit Varma", vehicle: "Honda Shine", rating: 5, location: "Dwarka, Delhi", date: "June 28, 2026", comment: "Super convenient doorstep service. No waiting at local garages. The mechanic was professional and used genuine Honda engine oil." },
      { name: "Aditi Rao", vehicle: "H'ness CB350", rating: 4, location: "Sohna Road, Gurgaon", date: "May 15, 2026", comment: "Got my CB350 serviced at home. Very professional chain cleaning, oil filter change, and checkup. Highly recommended for premium bikes." }
    ],
    seoKeywords: ["honda doorstep bike service", "honda activa repair at home", "honda shine mechanic near me", "honda cb350 home service", "doorstep activa service delhi ncr"]
  },
  "hero": {
    name: "Hero",
    tagline: "Expert Home Servicing for India's Hardest Working Commuters",
    description: "Hero MotoCorp vehicles are the backbone of Indian roads, celebrated for their mileage and rock-solid reliability. Our mechanics have serviced thousands of Splendor, Glamour, and HF Deluxe models. We utilize specialized tools to optimize your bike's fuel injection or carburetor settings, ensuring maximum fuel economy and reliable cold starts.",
    additionalInfo: {
      engineOil: "10W-30 Premium Grade Hero Spec Multi-grade Oil",
      warranty: "15-Day Quality Assurance Warranty",
      parts: "Genuine Hero MotoCorp Spares & Cables",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Mileage Optimization", desc: "Precise air-fuel ratio tuning and spark plug gap adjustment to deliver maximum mileage." },
      { title: "Clutch & Gearbox Overhaul", desc: "Doorstep replacement of worn clutch plates, clutch cables, and sprocket inspection to ensure smooth gear shifts." },
      { title: "Brake System Inspection", desc: "Brake shoe replacement, drum cleaning, and lubrication for responsive braking on busy commuter routes." }
    ],
    reviews: [
      { name: "Devendra Singh", vehicle: "Splendor Plus", rating: 5, location: "Indirapuram, Ghaziabad", date: "July 10, 2026", comment: "Affordable and fast. The mechanic came directly to my office parking lot and serviced my Splendor while I was working. Outstanding convenience!" },
      { name: "Kunal Gupta", vehicle: "Hero Xpulse 200", rating: 5, location: "DLF Phase 3, Gurgaon", date: "June 14, 2026", comment: "Was skeptical about doorstep service for off-road bikes, but the mechanic did a fantastic job with the chain sprocket tensioning, front fork check, and synthetic oil change." }
    ],
    seoKeywords: ["hero bike service at home", "splendor mechanic near me", "hero xpulse home service", "doorstep hero repair delhi ncr", "glamour bike repair at home"]
  },
  "bajaj": {
    name: "Bajaj",
    tagline: "High-Performance Doorstep Tuning for Pulsar, Avenger & Dominar",
    description: "From the street-smart Pulsar lineup to the heavy-cruising Avenger and touring Dominar models, Bajaj machines demand precise ignition timing and robust thermal management. Our mechanics are factory-trained on DTS-i triple-spark technology, ensuring your machine delivers responsive acceleration and runs cool under heavy traffic conditions.",
    additionalInfo: {
      engineOil: "20W-50 / 10W-50 Fully Synthetic Bajaj DTS-i Spec Oil",
      warranty: "15-Day Labor Warranty",
      parts: "Genuine Bajaj Auto OEM Parts",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "DTS-i Spark Optimization", desc: "Multi-spark plug health inspection and clean-up to ensure seamless power delivery and zero engine knocking." },
      { title: "Liquid Cooling Diagnostics", desc: "Coolant top-up and radiator fan inspection for high-performance liquid-cooled models like Dominar 400 and Pulsar NS200." },
      { title: "Suspension & Chain Care", desc: "Rear monoshock inspection, chain cleaning, and premium gear lube application for high-torque sporty rides." }
    ],
    reviews: [
      { name: "Siddharth Sen", vehicle: "Pulsar 150", rating: 5, location: "Vasant Kunj, Delhi", date: "July 05, 2026", comment: "My Pulsar was missing. The mechanic cleaned the spark plugs and air filter, and tuned the engine. Outstanding work at my doorstep." },
      { name: "Amit Yadav", vehicle: "Avenger 220", rating: 4, location: "Sector 15, Faridabad", date: "June 18, 2026", comment: "Excellent brake and clutch servicing. The avenger cruiser riding posture requires smooth cables and they lubed everything perfectly." }
    ],
    seoKeywords: ["bajaj pulsar service near me", "bajaj avenger repair at home", "dominar 400 doorstep service", "doorstep bajaj mechanic delhi ncr", "pulsar ns200 home service"]
  },
  "tvs": {
    name: "TVS",
    tagline: "Dynamic Doorstep Repair for TVS Scooters & RTR Motorcycles",
    description: "TVS vehicles, including the popular Jupiter, NTORQ, and Apache RTR series, are known for their sporty character and advanced smart technology. Our doorstep mechanics are equipped with the latest diagnostic knowledge to handle TVS FI engines, CVTi gearboxes, and race-tuned features, giving you a smooth, responsive ride every single day.",
    additionalInfo: {
      engineOil: "10W-30 TVS TRU4 Premium Synthetic Blend",
      warranty: "15-Day Diagnostics & Labor Warranty",
      parts: "100% Genuine TVS Spares & Brake Linings",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "NTORQ/Jupiter CVT Tuning", desc: "Removal of carbon buildup from variator rollers, drive belt inspection, and clutch shoe cleaning to eliminate scooter vibrations." },
      { title: "Apache RTR Race Prep", desc: "Throttle valve cleaning, fuel filter replacement, and sprocket alignment to maintain the instant throttle response." },
      { title: "SmartXonnect Diagnosis", desc: "Battery health checks to ensure the digital displays and Bluetooth units function without draining the power cell." }
    ],
    reviews: [
      { name: "Megha Juneja", vehicle: "TVS Jupiter", rating: 5, location: "Noida Sector 76", date: "July 01, 2026", comment: "The annoying vibration on acceleration is completely gone. Mechanic cleaned the clutch assembly and replaced the engine oil. Very polite and prompt service." }
    ],
    seoKeywords: ["tvs jupiter home service", "tvs apache mechanic near me", "ntorq doorstep repair", "tvs scooty repair at home", "doorstep tvs service delhi ncr"]
  },
  "royal-enfield": {
    name: "Royal Enfield",
    tagline: "Traditional Craftsmanship Meets Doorstep Convenience for RE Cruisers",
    description: "Royal Enfield motorcycles require regular valve clearance tuning, strict torque specifications, and heavy-duty lubrication to maintain their iconic thump and cruiser handling. Our specialized RE mechanics carry dedicated tooling to service Classic 350, Bullet, Hunter, and Himalayan models at your doorstep, ensuring maximum reliability on highway tours and daily commutes.",
    additionalInfo: {
      engineOil: "15W-50 Liquid Gun Semi-Synthetic / Synthetic",
      warranty: "15-Day Post-Service Labor Warranty",
      parts: "Genuine Royal Enfield Spares, Oil Filters, and Cables",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Thump & Valve Adjustment", desc: "Precise tappet gap settings to prevent starting issues and maintain optimal engine compression." },
      { title: "Heavy Duty Chain Service", desc: "Deep cleaning of the heavy-duty drive chain with cleaner spray, followed by high-tack chain lubrication to prevent rust and noise." },
      { title: "Telescopic Fork & Brake Care", desc: "Front fork seals check, disc brake pad cleaning, and dual-channel ABS fluid flush." }
    ],
    reviews: [
      { name: "Vikram Malhotra", vehicle: "Classic 350", rating: 5, location: "Greater Kailash, Delhi", date: "July 15, 2026", comment: "Best doorstep service for Bullets. The mechanic knew the classic 350 inside out. Tappets adjusted perfectly, thump is back, bike feels super smooth." },
      { name: "Suresh Menon", vehicle: "Himalayan 411", rating: 5, location: "Golf Course Road, Gurgaon", date: "July 03, 2026", comment: "Had my adventure bike serviced before a weekend trip. Done in 1 hour. Oil change, filter, chain check, and full electrical check. Awesome!" }
    ],
    seoKeywords: ["royal enfield mechanic near me", "bullet service at home", "classic 350 home service", "doorstep royal enfield service delhi ncr", "himalayan bike repair at home"]
  },
  "yamaha": {
    name: "Yamaha",
    tagline: "High-Revving Doorstep Tune-ups for R15, MT-15 and FZ Series",
    description: "Yamaha's high-revving Liquid-Cooled VVA engines and street fighters like the MT-15 and FZ require premium diagnostics and strict maintenance. We specialize in maintaining Yamaha's engine tolerances, fuel injector nozzles, and high-performance clutch systems at your home, ensuring your bike delivers maximum acceleration on demand.",
    additionalInfo: {
      engineOil: "10W-40 Yamalube Full Synthetic Sport Grade",
      warranty: "15-Day Service Warranty",
      parts: "Genuine Yamalube Gaskets, Filters & Brake Pads",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Liquid Cooling Maintenance", desc: "Radiator cleaning, coolant flushing, and cooling fan operation diagnostics for R15/MT15." },
      { title: "VVA (Variable Valve) Checks", desc: "Checking electronic solenoids and throttle body sensors to keep the engine working flawlessly at high RPMs." },
      { title: "Drive Line Tensioning", desc: "Precision chain alignment and link check to transfer maximum wheel horsepower without drag." }
    ],
    reviews: [
      { name: "Pranav Raj", vehicle: "Yamaha MT-15", rating: 5, location: "Sector 50, Noida", date: "July 08, 2026", comment: "The mechanic used premium Yamalube fully synthetic oil. The bike shifts gears extremely cleanly now and feels much punchier. Five stars!" }
    ],
    seoKeywords: ["yamaha r15 service at home", "yamaha fz mechanic near me", "mt15 doorstep service", "doorstep yamaha repair delhi ncr", "yamalube engine oil change"]
  },
  "suzuki": {
    name: "Suzuki",
    tagline: "Smooth Doorstep Maintenance for Access 125 & Suzuki Motorcycles",
    description: "Suzuki two-wheelers, led by the Access 125 and Gixxer series, are beloved for their balanced power and butter-smooth gearboxes. Our mechanics focus on cleaning CVT transmission rollers, lubricating control cables, and tuning the Suzuki Eco Performance (SEP) system to keep your fuel economy high and emissions low.",
    additionalInfo: {
      engineOil: "10W-40 Suzuki Genuine Oil (ECSTAR Specification)",
      warranty: "15-Day Labor Warranty",
      parts: "Suzuki Genuine Spares & Air Cleaners",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Access 125 CVT Cleaning", desc: "Thorough cleaning of clutch assembly, belt inspection, and rollers replacement to eliminate startup shudder." },
      { title: "Gixxer FI Diagnostics", desc: "Electronic sensors scan and fuel injector pressure test to ensure smooth linear throttle acceleration." },
      { title: "Chassis & Pivot Lube", desc: "Lubricating swingarm joints, center stand, and brake lever pivots for squeak-free city riding." }
    ],
    reviews: [
      { name: "Deepak Rawat", vehicle: "Access 125", rating: 5, location: "Ghaziabad Vasundhara", date: "June 25, 2026", comment: "Doorstep CVT cleaning solved my starting and vibration problems. Honest pricing and very knowledgeable technician." }
    ],
    seoKeywords: ["suzuki access 125 home service", "suzuki gixxer mechanic near me", "burgman doorstep service", "doorstep suzuki repair delhi ncr", "access 125 repair at home"]
  },
  "ktm": {
    name: "KTM",
    tagline: "Ready to Race Doorstep Tuning for Duke & RC Performance Bikes",
    description: "KTM's high-compression, liquid-cooled single-cylinder engines require professional care, exact oil levels, and high-performance lubricants. Our mechanics are specialized in servicing high-RPM Duke and RC series (200, 250, and 390). We carry synthetic oils, coolant flushes, and perform checking of radiator systems to prevent engine overheating.",
    additionalInfo: {
      engineOil: "15W-50 Motul 7100 Fully Synthetic Premium Ester",
      warranty: "15-Day Diagnostics & Labor Warranty",
      parts: "Genuine KTM OEM Spares and Brembo/Bybre Pads",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Thermal Management Check", desc: "Radiator radiator fins cleaning, coolant level inspection, and thermostat check to handle city heat." },
      { title: "ECU Diagnostics", desc: "Checking error codes, battery voltage, and stator coil output to ensure clean spark delivery." },
      { title: "High-Speed Brake Service", desc: "Disc brake caliper cleaning, brake fluid flushing (DOT 4), and high-friction pad replacement." }
    ],
    reviews: [
      { name: "Varun Nair", vehicle: "Duke 390", rating: 5, location: "Sushant Lok, Gurgaon", date: "July 11, 2026", comment: "Used Motul 7100 oil as requested. Mechanic cleaned the radiator fins and flushed the front brakes. KTM Duke running cool and stopping on a dime." }
    ],
    seoKeywords: ["ktm duke service at home", "ktm rc mechanic near me", "duke 390 home service", "doorstep ktm service delhi ncr", "ktm Duke 200 repair"]
  },
  "ola-electric": {
    name: "Ola Electric",
    tagline: "Doorstep Diagnostics and Component Checks for OLA EV Scooters",
    description: "OLA electric scooters require specialised diagnostic checks for electronic systems, battery cell voltage balances, disc brake calipers, and belt/hub drivetrains. Our EV mechanics carry multi-meters, EV safety equipment, and specialized diagnostics to check battery health and software logs to ensure your OLA S1 Pro, Air, or X remains reliable.",
    additionalInfo: {
      engineOil: "Not Applicable (Electric Hub Motor / Reducer Fluid Checked)",
      warranty: "15-Day EV Diagnostic and Labor Warranty",
      parts: "OLA EV OEM Gaskets, Fasteners & Braking Pads",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Electric Powertrain Diagnosis", desc: "Inspecting high-voltage cable insulation, checking motor controller connectors, and cleaning terminal grease." },
      { title: "Regenerative Braking Calibration", desc: "Cleaning front/rear disc calipers and checking electronic brake sensor activation for optimal regen charge." },
      { title: "Suspension & Fork Inspection", desc: "Checking front telescopic forks and rear monoshock play to prevent steering wobble." }
    ],
    reviews: [
      { name: "Arun Joy", vehicle: "Ola S1 Pro", rating: 4, location: "Noida Sector 137", date: "July 02, 2026", comment: "Excellent service. Checked the battery health, brake pads, and resolved a small dashboard software glitch. Glad we have doorstep support for EVs now." }
    ],
    seoKeywords: ["ola s1 pro home service", "ola electric repair near me", "ola scooter mechanic at home", "doorstep ola service delhi ncr", "ola s1 air brake repair"]
  },
  "ather": {
    name: "Ather",
    tagline: "Premium Doorstep Maintenance for Ather 450X and Rizta Scooters",
    description: "Ather electric scooters are highly sophisticated machines featuring aluminum frames and advanced belt-drive powertrains. We focus on belt tensioning, battery diagnostics, disc brake pad cleaning, and steering head cone-set adjustments, ensuring your Ather continues to deliver its signature silent and sporty performance.",
    additionalInfo: {
      engineOil: "Not Applicable (Belt Drive / Hub Reducer Fluid Checked)",
      warranty: "15-Day Technical Labor Warranty",
      parts: "Ather Energy Genuine Brake Pads & Drive Belts",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Belt Drive Tensioning", desc: "Precision alignment and tension checks of the gates carbon drive belt to prevent squeaking and maximize power transfer." },
      { title: "Brake Caliper Servicing", desc: "Removing dirt buildup from disc pads to prevent pad drag and maintain sharp bite." },
      { title: "Dashboard & OBD Scan", desc: "Battery health status analysis, charging port pins cleaning, and software restart checks." }
    ],
    reviews: [
      { name: "Meera Nair", vehicle: "Ather 450X", rating: 5, location: "Saket, Delhi", date: "June 30, 2026", comment: "Ather home service was quick. The belt was squeaking slightly, and the mechanic aligned and cleaned it. Perfect doorstep convenience." }
    ],
    seoKeywords: ["ather 450x service at home", "ather energy mechanic near me", "ather rizta doorstep repair", "doorstep ather repair delhi ncr", "electric scooter home service"]
  },
  "vespa": {
    name: "Vespa",
    tagline: "Artisan Care for Italian Styled Classic Vespa Scooters",
    description: "Vespa steel monocoque bodies and retro designs require gentle handling and specialized mechanical knowledge. From body panels protection during service to precise tuning of Vespa's 3-valve FI engines and CVT assemblies, we treat your premium Italian scooter with the care it deserves.",
    additionalInfo: {
      engineOil: "5W-40 Premium Grade Fully Synthetic Scooter Oil",
      warranty: "15-Day Labor & Diagnostics Warranty",
      parts: "100% Genuine Piaggio Spares & Cables",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Scratch-Free Servicing", desc: "Specialized soft rubber work mats and protective covers used to safeguard the steel body paint." },
      { title: "Piaggio CVT Refinement", desc: "Variator cleaning, roller inspections, and high-performance clutch shoes dressing to eliminate takeoff shudder." },
      { title: "Suspension Link Greasing", desc: "Lubricating the unique front single-sided aircraft-derived link suspension for plush riding comfort." }
    ],
    reviews: [
      { name: "Tanvi Kapoor", vehicle: "Vespa VXL 125", rating: 5, location: "Noida Sector 50", date: "May 24, 2026", comment: "Highly professional. The mechanic took great care not to scratch the scooter and handled the CVT cleaning very meticulously. Bike runs super smooth." }
    ],
    seoKeywords: ["vespa service at home", "vespa mechanic near me", "piaggio vespa home service", "doorstep vespa repair delhi ncr", "vespa clutch cleaning"]
  },
  "jawa": {
    name: "Jawa",
    tagline: "Classic Doorstep Tuning for Jawa 42, Perak and Yezdi Roadster",
    description: "Jawa and Yezdi motorcycles feature modern liquid-cooled double-overhead-cam (DOHC) single-cylinder engines that require specialized valve timing and cooling system diagnostics. Our mechanics carry dedicated dual-exhaust sensors, coolant checks, and specialized tools to service your retro cruiser at your doorstep.",
    additionalInfo: {
      engineOil: "15W-50 / 10W-50 Motul Premium Synthetic Oil",
      warranty: "15-Day Post-Service Labor Warranty",
      parts: "Genuine Jawa/Classic Legends Spare Parts",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "DOHC Engine Check", desc: "Monitoring engine sound, DOHC timing chain tension, and coolant circulation for consistent touring reliability." },
      { title: "Dual Exhaust Clearance", desc: "Inspecting exhaust exhaust pipe brackets, oxygen sensor connections, and packing leaks." },
      { title: "Sprocket & Chain Care", desc: "Heavy-duty chain spray lube, wheel alignment, and sprocket teeth health check." }
    ],
    reviews: [
      { name: "Inderjeet Singh", vehicle: "Jawa 42", rating: 5, location: "Mayur Vihar, Delhi", date: "July 06, 2026", comment: "Hard to find mechanics for Jawas. The FixWheel tech was highly trained. Did a proper coolant flush, oil change, and adjusted the chain. Fantastic job!" }
    ],
    seoKeywords: ["jawa service at home", "jawa mechanic near me", "yezdi roadster home service", "doorstep jawa repair delhi ncr", "jawa perak service near me"]
  },
  "aprilia": {
    name: "Aprilia",
    tagline: "Race-Tuned Performance Tuning for Aprilia SR & SXR Maxi Scooters",
    description: "Aprilia performance scooters require high-viscosity synthetic oils, CVT tuning, and high-performance brake pads. We service Aprilia SR 160, SXR 160, and Storm models at your doorstep, ensuring their high-rpm acceleration and rigid handling remain sharp.",
    additionalInfo: {
      engineOil: "5W-40 Motul Scooter Fully Synthetic Oil",
      warranty: "15-Day Technical Labor Warranty",
      parts: "Genuine Aprilia OEM Spares & Brake Linings",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "High-RPM CVT Balancing", desc: "CVT dry clutch assembly cleaning and variator fan checks to prevent belt slippage during racing acceleration." },
      { title: "Suspension Rigidity Check", desc: "Inspecting rigid front forks and rear shock mounts to ensure stable cornering." },
      { title: "Brake Safety Service", desc: "Disc caliper piston cleaning, brake fluid bleeding (DOT 4), and high-friction pad installation." }
    ],
    reviews: [
      { name: "Rishabh Malhotra", vehicle: "Aprilia SR 160", rating: 5, location: "Gurgaon Phase 1", date: "June 29, 2026", comment: "The SR 160 is a fast scooter and needs proper CVT and brake servicing. The mechanic did an awesome job. Shifting and engine pickup feels amazing." }
    ],
    seoKeywords: ["aprilia doorstep service", "aprilia sr 160 mechanic", "aprilia sxr 160 home service", "doorstep aprilia repair delhi ncr", "aprilia scooter service near me"]
  },
  "harley-davidson": {
    name: "Harley-Davidson",
    tagline: "Specialized Cruising Service for Harley X440 & V-Twins at Home",
    description: "Harley-Davidson motorcycles require high-torque fasteners, premium V-twin oils, and precise primary belt/chain tension adjustments. Whether you ride the modern Harley X440 or a classic imported V-Twin cruiser, our experienced heavy-duty bike mechanics handle all filter changes, battery tests, and brake servicing right in your garage.",
    additionalInfo: {
      engineOil: "20W-50 V-Twin Spec Heavy Duty Synthetic Oil",
      warranty: "15-Day Cruiser Labor Warranty",
      parts: "Genuine Harley-Davidson or Premium Aftermarket Filters",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Heavy Cruiser Maintenance", desc: "Servicing massive engine cylinders, primary chain oil changes, and clutch adjustment under high loads." },
      { title: "Electrical Power Test", desc: "Battery CCA check, charging system coils health check, and diagnostic trouble code read-out." },
      { title: "Touring Brake Refurbish", desc: "Heavy-duty caliper fluid flush and front/rear brake pad inspections for loaded highway touring safety." }
    ],
    reviews: [
      { name: "Karan Johar", vehicle: "Harley X440", rating: 5, location: "Siri Fort, Delhi", date: "July 14, 2026", comment: "Outstanding service. The mechanic used high-grade 20W-50 oil and torque wrenches for all bolts. Excellent care for premium cruisers." }
    ],
    seoKeywords: ["harley davidson mechanic near me", "harley x440 home service", "doorstep harley repair", "harley cruiser service delhi ncr", "harley bike repair at home"]
  },
  "kawasaki": {
    name: "Kawasaki",
    tagline: "Precision Engineering Service for Ninja and Z-Series Sportbikes",
    description: "Kawasaki sport and street bikes are highly tuned multi-cylinder machines demanding strict engine clearances and advanced thermal care. We service Ninja 300, Z650, and other Kawasaki street and sport tourers at your doorstep. We perform full synthetic oil swaps, radiator cleaning, throttle body sync check, and premium chain alignments.",
    additionalInfo: {
      engineOil: "10W-40 Motul 300V Double Ester Fully Synthetic",
      warranty: "15-Day Premium Performance Warranty",
      parts: "Genuine Kawasaki OEM Oil Filters and Spark Plugs",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "High-Flow Coolant Service", desc: "Cooling system inspections, radiator cleanup, and high-performance coolant top-up to prevent overheating." },
      { title: "Double Ester Lubrication", desc: "Using Motul 300V fully synthetic oil to ensure clean high-rpm engine protection and smooth wet clutch friction." },
      { title: "Laser Chain Alignment", desc: "Ensuring exact wheel alignment to prevent sprocket wear and minimize driveline power loss." }
    ],
    reviews: [
      { name: "Deepankar Dev", vehicle: "Ninja 300", rating: 5, location: "DLF Phase 5, Gurgaon", date: "July 09, 2026", comment: "Hard to trust local mechanics with Ninjas. But the FixWheel technician used proper tools, torque-wrenched the oil drain bolt, and did a laser chain check. Superb!" }
    ],
    seoKeywords: ["kawasaki ninja 300 service", "kawasaki mechanic near me", "ninja 300 home service", "doorstep kawasaki repair delhi ncr", "kawasaki z650 service near me"]
  },
  "benelli": {
    name: "Benelli",
    tagline: "Exotic Sound Preservation and Service for Benelli Cruisers & Sports",
    description: "Benelli twin-cylinder machines and retro cruisers like the Imperiale 400 require precise valve checkups, EFI sensor monitoring, and high-quality chain alignments. Our specialized superbikes technicians handle Benelli oil filter changes, brake caliper lubrication, and custom chain tensioning at your doorstep.",
    additionalInfo: {
      engineOil: "15W-50 Fully Synthetic Motul 7100 / Yamalube",
      warranty: "15-Day Labor Warranty",
      parts: "Genuine Benelli Spares and High-Friction Pads",
      avgTime: "45 Minutes Average Arrival Time"
    },
    keyBenefits: [
      { title: "Imperiale 400 Specialized Care", desc: "Tappets adjustment, heavy-duty engine oil change, and spoke-wheel alignment check." },
      { title: "Exhaust Note Scan", desc: "Testing exhaust manifold gaskets, lambda sensor readings, and exhaust baffles." },
      { title: "Brake Pad & ABS Service", desc: "Caliper sliding pins lubricating, ABS sensor head cleaning, and high-traction brake pad fittings." }
    ],
    reviews: [
      { name: "Jatin Sood", vehicle: "Imperiale 400", rating: 5, location: "Vaishali, Ghaziabad", date: "June 20, 2026", comment: "Excellent home service for my Imperiale. The tappet sound was tuned perfectly and the chain noise is completely gone. Very happy with the technician." }
    ],
    seoKeywords: ["benelli service at home", "benelli mechanic near me", "imperiale 400 home service", "doorstep benelli repair delhi ncr", "benelli tnt 300 service near me"]
  }
};
