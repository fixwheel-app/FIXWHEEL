export interface BrandReview {
  name: string;
  vehicle: string;
  rating: number;
  location: string;
  date: string;
  comment: string;
}

export interface BrandFaq {
  q: string;
  a: string;
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
  faqs: BrandFaq[];
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
      avgTime: "Within 45 Mins Doorstep Arrival"
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
    seoKeywords: ["honda doorstep bike service", "honda activa repair at home", "honda shine mechanic near me", "honda cb350 home service", "doorstep activa service delhi ncr", "honda dio repair gurgaon", "honda sp125 home service noida", "honda unicorn mechanic ghaziabad", "honda hornet bike service faridabad", "honda scooter service near me"],
    faqs: [
      {
        q: "How often should I get doorstep service for my Honda Activa or Shine in Delhi NCR?",
        a: "We recommend periodic doorstep service every 3,000 km or 3 months for Honda scooters (Activa, Dio, Grazia) and motorcycles (Shine, SP 125, Unicorn) to maintain optimum fuel efficiency and engine longevity."
      },
      {
        q: "Do you clean the CVT variator and clutch rollers on Honda Activa scooters during doorstep service?",
        a: "Yes! Our Honda specialist mechanics dismantle the CVT cover, clean clutch shoe dust, degrease variator rollers, and inspect the drive belt to eliminate acceleration judder and pickup hesitation."
      },
      {
        q: "What engine oil grade is recommended for Honda 110cc and 125cc two-wheelers?",
        a: "We strictly use 10W-30 viscosity engine oil matching HMSI official specifications (Honda Genuine / Motul / Castrol) in sealed 800ml/900ml bottles, replaced right in front of you."
      },
      {
        q: "Can I get Honda Shine or Unicorn clutch cables and brake shoes replaced at home?",
        a: "Absoluty! Our mobile units carry genuine HMSI brake shoes, clutch cables, accelerator cables, air filters, and spark plugs for all Honda models."
      },
      {
        q: "What is the doorstep arrival time and labor warranty for Honda servicing in Gurgaon and Noida?",
        a: "Our certified mobile mechanic reaches your home or office parking within 45 minutes of booking, and all Honda repairs include a 15-day labor & diagnostic guarantee."
      }
    ]
  },
  "hero": {
    name: "Hero",
    tagline: "Expert Home Servicing for India's Hardest Working Commuters",
    description: "Hero MotoCorp vehicles are the backbone of Indian roads, celebrated for their mileage and rock-solid reliability. Our mechanics have serviced thousands of Splendor, Glamour, and HF Deluxe models. We utilize specialized tools to optimize your bike's fuel injection or carburetor settings, ensuring maximum fuel economy and reliable cold starts.",
    additionalInfo: {
      engineOil: "10W-30 Premium Grade Hero Spec Multi-grade Oil",
      warranty: "15-Day Quality Assurance Warranty",
      parts: "Genuine Hero MotoCorp Spares & Cables",
      avgTime: "Within 45 Mins Doorstep Arrival"
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
    seoKeywords: ["hero bike service at home", "splendor mechanic near me", "hero xpulse home service", "doorstep hero repair delhi ncr", "glamour bike repair at home", "hero hf deluxe doorstep service gurgaon", "hero passion pro mechanic noida", "hero xtreme 160r service faridabad", "hero scooter repair ghaziabad", "hero motocorp home repair near me"],
    faqs: [
      {
        q: "How does doorstep servicing for Hero Splendor, HF Deluxe, and Glamour improve fuel mileage?",
        a: "Our technicians clean the carburetor/FI nozzle, set the exact spark plug electrode gap, clean the air filter, and adjust tyre pressures to restore Hero's legendary fuel economy."
      },
      {
        q: "Do you replace worn clutch plates and chain sprockets for Hero commuter bikes at home?",
        a: "Yes! We stock genuine Hero MotoCorp clutch plates, clutch cables, chain sprocket kits, and brake linings to perform complete driveline repairs directly in your parking area."
      },
      {
        q: "Can I get my Hero XPulse 200 off-road motorcycle serviced at my doorstep in Delhi NCR?",
        a: "Definitely! We service XPulse 200 4V models including front fork seal inspection, synthetic oil change, high-tack chain lubrication, and rear monoshock checkups."
      },
      {
        q: "What engine oil and spark plug specifications are used for Hero two-wheelers?",
        a: "We use 10W-30 grade Hero genuine multi-grade or synthetic blend oil along with Champion/NGK spark plugs recommended by Hero MotoCorp."
      },
      {
        q: "Is there any extra visiting charge for doorstep Hero servicing in Ghaziabad and Faridabad?",
        a: "No extra visiting fees! Our starting service rates (from ₹199) are completely transparent and include doorstep arrival across Gurgaon, Delhi, Noida, Ghaziabad, and Faridabad."
      }
    ]
  },
  "bajaj": {
    name: "Bajaj",
    tagline: "High-Performance Doorstep Tuning for Pulsar, Avenger & Dominar",
    description: "From the street-smart Pulsar lineup to the heavy-cruising Avenger and touring Dominar models, Bajaj machines demand precise ignition timing and robust thermal management. Our mechanics are factory-trained on DTS-i triple-spark technology, ensuring your machine delivers responsive acceleration and runs cool under heavy traffic conditions.",
    additionalInfo: {
      engineOil: "20W-50 / 10W-50 Fully Synthetic Bajaj DTS-i Spec Oil",
      warranty: "15-Day Labor Warranty",
      parts: "Genuine Bajaj Auto OEM Parts",
      avgTime: "Within 45 Mins Doorstep Arrival"
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
    seoKeywords: ["bajaj pulsar service near me", "bajaj avenger repair at home", "dominar 400 doorstep service", "doorstep bajaj mechanic delhi ncr", "pulsar ns200 home service", "platina mechanic near me gurgaon", "bajaj ct100 service noida", "bajaj pulsar 150 repair ghaziabad", "bajaj chetak ev home service", "bajaj bike repair faridabad"],
    faqs: [
      {
        q: "How do your mechanics handle DTS-i triple-spark plug tuning on Bajaj Pulsar models?",
        a: "Our Bajaj specialists inspect, carbon-clean, and gap all dual or triple spark plugs on Pulsar 150, 180, 220F, NS200, and Dominar engines to eliminate engine knocking and misfiring."
      },
      {
        q: "Do you offer liquid cooling radiator service for Bajaj Dominar 400 and Pulsar NS200 at home?",
        a: "Yes! We check radiator coolant levels, inspect fan thermostat operation, clean dust build-up from cooling fins, and top up OEM coolant for Dominar and Pulsar NS models."
      },
      {
        q: "How long does a standard doorstep tune-up take for Bajaj Avenger cruisers in Gurgaon?",
        a: "A comprehensive 15-point servicing for Bajaj Avenger (Street/Cruise 160 & 220) takes about 40 to 50 minutes including oil drain, filter replacement, and handlebar/cable lubrication."
      },
      {
        q: "What engine oil viscosity is used for high-performance Bajaj Pulsar and Dominar motorcycles?",
        a: "We use 20W-50 for DTS-i engines and 10W-50 fully synthetic Motul / Bajaj Genuine oil for Dominar 400 and Pulsar NS200 to protect the engine during high-temperature highway touring."
      },
      {
        q: "Are genuine Bajaj Auto OEM spare parts used for brake pad and cable replacements?",
        a: "100% yes! All replacement brake pads, disc rotors, clutch cables, accelerator cables, and oil filters are sealed genuine Bajaj Auto spares."
      }
    ]
  },
  "tvs": {
    name: "TVS",
    tagline: "Dynamic Doorstep Repair for TVS Scooters & RTR Motorcycles",
    description: "TVS vehicles, including the popular Jupiter, NTORQ, and Apache RTR series, are known for their sporty character and advanced smart technology. Our doorstep mechanics are equipped with the latest diagnostic knowledge to handle TVS FI engines, CVTi gearboxes, and race-tuned features, giving you a smooth, responsive ride every single day.",
    additionalInfo: {
      engineOil: "10W-30 TVS TRU4 Premium Synthetic Blend",
      warranty: "15-Day Diagnostics & Labor Warranty",
      parts: "100% Genuine TVS Spares & Brake Linings",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "NTORQ/Jupiter CVT Tuning", desc: "Removal of carbon buildup from variator rollers, drive belt inspection, and clutch shoe cleaning to eliminate scooter vibrations." },
      { title: "Apache RTR Race Prep", desc: "Throttle valve cleaning, fuel filter replacement, and sprocket alignment to maintain the instant throttle response." },
      { title: "SmartXonnect Diagnosis", desc: "Battery health checks to ensure the digital displays and Bluetooth units function without draining the power cell." }
    ],
    reviews: [
      { name: "Megha Juneja", vehicle: "TVS Jupiter", rating: 5, location: "Noida Sector 76", date: "July 01, 2026", comment: "The annoying vibration on acceleration is completely gone. Mechanic cleaned the clutch assembly and replaced the engine oil. Very polite and prompt service." }
    ],
    seoKeywords: ["tvs jupiter home service", "tvs apache mechanic near me", "ntorq doorstep repair", "tvs scooty repair at home", "doorstep tvs service delhi ncr", "tvs raider 125 home service gurgaon", "tvs xl100 mechanic noida", "tvs star city repair ghaziabad", "tvs ronin bike service faridabad", "tvs scooter service near me"],
    faqs: [
      {
        q: "How do your mobile mechanics resolve acceleration vibrations in TVS Jupiter and NTORQ 125 scooters?",
        a: "We open the CVTi transmission cover, degrease the clutch bell, sand down glazed clutch shoes, and inspect variator rollers to give your TVS scooter smooth, vibration-free pickup."
      },
      {
        q: "Do you perform throttle body and injector cleaning for TVS Apache RTR 160/200 FI motorcycles?",
        a: "Yes! Our technicians use specialized sprays to clean throttle body carbon, check ECU fault logs, and calibrate idle RPM for TVS Apache RTR 160 4V, 200 4V, and RR 310."
      },
      {
        q: "What engine oil grade is recommended for TVS Raider 125 and Apache series at doorstep?",
        a: "We use 10W-30 TVS TRU4 synthetic blend or Motul 7100 10W-40 ester oil depending on whether it's a commuter (Raider/Star City) or a race-derived Apache motorcycle."
      },
      {
        q: "Can I get my TVS XL100 moped or Scooty Pep serviced at my office parking in Noida?",
        a: "Absolutely! We service all TVS mopeds, Scooty Pep+, Zest, Jupiter, and Raider models directly at your residence or office parking."
      },
      {
        q: "What warranty is provided on TVS doorstep brake and transmission repairs?",
        a: "FixWheel provides a 15-day labor & diagnostic warranty on all TVS repairs, plus manufacturer guarantees on replaced TVS OEM components."
      }
    ]
  },
  "royal-enfield": {
    name: "Royal Enfield",
    tagline: "Traditional Craftsmanship Meets Doorstep Convenience for RE Cruisers",
    description: "Royal Enfield motorcycles require regular valve clearance tuning, strict torque specifications, and heavy-duty lubrication to maintain their iconic thump and cruiser handling. Our specialized RE mechanics carry dedicated tooling to service Classic 350, Bullet, Hunter, and Himalayan models at your doorstep, ensuring maximum reliability on highway tours and daily commutes.",
    additionalInfo: {
      engineOil: "15W-50 Liquid Gun Semi-Synthetic / Synthetic",
      warranty: "15-Day Post-Service Labor Warranty",
      parts: "Genuine Royal Enfield Spares, Oil Filters, and Cables",
      avgTime: "Within 45 Mins Doorstep Arrival"
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
    seoKeywords: ["royal enfield mechanic near me", "bullet service at home", "classic 350 home service", "doorstep royal enfield service delhi ncr", "himalayan bike repair at home", "bullet 350 tappet adjustment doorstep", "hunter 350 oil change delhi", "meteor 350 service gurgaon", "continental gt 650 mechanic noida", "royal enfield doorstep repair faridabad"],
    faqs: [
      {
        q: "How do your technicians adjust tappet valve clearances on Royal Enfield Classic 350 and Bullet models?",
        a: "Our RE mechanics carry feeler gauges and dedicated RE tappet tools to set precise intake and exhaust valve clearances, eliminating top-end clatter and restoring engine compression."
      },
      {
        q: "What engine oil is recommended for Royal Enfield UCE 350, J-Series, and 650 Twin engines?",
        a: "We use 15W-50 semi-synthetic (Liquid Gun / Motul 5100) for UCE/J-Series 350s and Motul 7100 10W-50 fully synthetic ester oil for Continental GT 650 and Interceptor 650."
      },
      {
        q: "Do you service heavy-duty drive chains and disc brake pads on Royal Enfield Himalayan at home?",
        a: "Yes! We deep-clean RE heavy-duty O-ring/X-ring chains with chain cleaner spray, apply high-tack chain lube, and degrease front/rear Brembo/Bybre brake calipers."
      },
      {
        q: "How long does a full periodic maintenance service take for Royal Enfield motorcycles at doorstep?",
        a: "A thorough Royal Enfield doorstep service takes 50 to 65 minutes, including oil drain, oil filter replacement, spark plug clean, cable lube, brake check, and 15-point inspection."
      },
      {
        q: "Do your mechanics carry specialized RE pullers and heavy-duty torque wrenches to my location?",
        a: "Yes, our mobile units are stocked with RE flywheel pullers, clutch tools, torque wrenches, and genuine RE oil filters, spark plugs, and brake pads."
      }
    ]
  },
  "yamaha": {
    name: "Yamaha",
    tagline: "High-Revving Doorstep Tune-ups for R15, MT-15 and FZ Series",
    description: "Yamaha's high-revving Liquid-Cooled VVA engines and street fighters like the MT-15 and FZ require premium diagnostics and strict maintenance. We specialize in maintaining Yamaha's engine tolerances, fuel injector nozzles, and high-performance clutch systems at your home, ensuring your bike delivers maximum acceleration on demand.",
    additionalInfo: {
      engineOil: "10W-40 Yamalube Full Synthetic Sport Grade",
      warranty: "15-Day Service Warranty",
      parts: "Genuine Yamalube Gaskets, Filters & Brake Pads",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "Liquid Cooling Maintenance", desc: "Radiator cleaning, coolant flushing, and cooling fan operation diagnostics for R15/MT15." },
      { title: "VVA (Variable Valve) Checks", desc: "Checking electronic solenoids and throttle body sensors to keep the engine working flawlessly at high RPMs." },
      { title: "Drive Line Tensioning", desc: "Precision chain alignment and link check to transfer maximum wheel horsepower without drag." }
    ],
    reviews: [
      { name: "Pranav Raj", vehicle: "Yamaha MT-15", rating: 5, location: "Sector 50, Noida", date: "July 08, 2026", comment: "The mechanic used premium Yamalube fully synthetic oil. The bike shifts gears extremely cleanly now and feels much punchier. Five stars!" }
    ],
    seoKeywords: ["yamaha r15 service at home", "yamaha fz mechanic near me", "mt15 doorstep service", "doorstep yamaha repair delhi ncr", "yamalube engine oil change", "yamaha ray zr home service gurgaon", "yamaha fascino repair noida", "yamaha fzs mechanic ghaziabad", "yamaha aerox 155 service faridabad", "yamaha bike repair near me"],
    faqs: [
      {
        q: "How do your mechanics maintain Yamaha R15 V4 and MT-15 V2 liquid-cooling and VVA systems at home?",
        a: "We inspect radiator cooling fins, check coolant levels, test the electric radiator fan, and scan VVA (Variable Valve Actuation) solenoids to ensure high-RPM performance."
      },
      {
        q: "Do you offer CVT transmission roller cleaning for Yamaha Aerox 155, RayZR, and Fascino scooters?",
        a: "Yes! We service Yamaha Aerox 155 and RayZR Hybrid scooters by cleaning variator rollers, degreasing clutch shoes, and inspecting V-belts to restore instant throttle pickup."
      },
      {
        q: "What engine oil is recommended for Yamaha high-revving 155cc and 250cc engines?",
        a: "We use 10W-40 Yamalube Sport Full Synthetic or Motul 7100, replaced with new genuine oil filter O-rings right at your doorstep."
      },
      {
        q: "Can I get Yamaha FZ-S FI and FZ-X chain alignment and fuel injector diagnostics done at my doorstep?",
        a: "Absoluty! We inspect FI throttle bodies, clean spark plugs, align drive chains with precision tools, and adjust clutch lever free play."
      },
      {
        q: "What diagnostic checks are included in Yamaha doorstep service in Gurgaon and Delhi NCR?",
        a: "Our 15-point checkup covers battery voltage, charging stator coil, brake disc thickness, pad life, tyre pressure, and suspension seal checks."
      }
    ]
  },
  "suzuki": {
    name: "Suzuki",
    tagline: "Smooth Doorstep Maintenance for Access 125 & Suzuki Motorcycles",
    description: "Suzuki two-wheelers, led by the Access 125 and Gixxer series, are beloved for their balanced power and butter-smooth gearboxes. Our mechanics focus on cleaning CVT transmission rollers, lubricating control cables, and tuning the Suzuki Eco Performance (SEP) system to keep your fuel economy high and emissions low.",
    additionalInfo: {
      engineOil: "10W-40 Suzuki Genuine Oil (ECSTAR Specification)",
      warranty: "15-Day Labor Warranty",
      parts: "Suzuki Genuine Spares & Air Cleaners",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "Access 125 CVT Cleaning", desc: "Thorough cleaning of clutch assembly, belt inspection, and rollers replacement to eliminate startup shudder." },
      { title: "Gixxer FI Diagnostics", desc: "Electronic sensors scan and fuel injector pressure test to ensure smooth linear throttle acceleration." },
      { title: "Chassis & Pivot Lube", desc: "Lubricating swingarm joints, center stand, and brake lever pivots for squeak-free city riding." }
    ],
    reviews: [
      { name: "Deepak Rawat", vehicle: "Access 125", rating: 5, location: "Ghaziabad Vasundhara", date: "June 25, 2026", comment: "Doorstep CVT cleaning solved my starting and vibration problems. Honest pricing and very knowledgeable technician." }
    ],
    seoKeywords: ["suzuki access 125 home service", "suzuki gixxer mechanic near me", "burgman doorstep service", "doorstep suzuki repair delhi ncr", "access 125 repair at home", "suzuki avenis service gurgaon", "suzuki intruder mechanic noida", "suzuki v-strom home repair ghaziabad", "suzuki scooter service faridabad", "suzuki bike repair near me"],
    faqs: [
      {
        q: "How does doorstep servicing eliminate startup shudder in Suzuki Access 125 and Burgman Street?",
        a: "Our technicians open the CVT cover, clean accumulated belt dust, sand down glazed clutch friction shoes, and lubricate variator slide pins for smooth vibration-free acceleration."
      },
      {
        q: "What engine oil and filter replacement guidelines are followed for Suzuki Gixxer 150/250?",
        a: "We refill with ECSTAR 10W-40 Suzuki genuine oil or Motul fully synthetic oil, replacing the paper oil filter and rubber O-ring gasket on every oil service."
      },
      {
        q: "Do you inspect Suzuki Eco Performance (SEP) fuel injection systems at home?",
        a: "Yes! We clean throttle body valves, check TPS sensors, clean spark plugs, and inspect fuel pump delivery pressure for Suzuki Access, Burgman, and Gixxer FI models."
      },
      {
        q: "How quickly can a Suzuki certified mechanic arrive at my location in Noida or Gurgaon?",
        a: "Our mobile mechanic arrives within 45 minutes of your booking confirmation with all required tools and genuine Suzuki OEM parts."
      },
      {
        q: "Are genuine ECSTAR / Suzuki OEM replacement brake pads used during doorstep service?",
        a: "Yes, 100%! We fit factory-fresh Suzuki genuine brake pads, brake shoes, control cables, and air filters directly in front of you."
      }
    ]
  },
  "ktm": {
    name: "KTM",
    tagline: "Ready to Race Doorstep Tuning for Duke & RC Performance Bikes",
    description: "KTM's high-compression, liquid-cooled single-cylinder engines require professional care, exact oil levels, and high-performance lubricants. Our mechanics are specialized in servicing high-RPM Duke and RC series (200, 250, and 390). We carry synthetic oils, coolant flushes, and perform checking of radiator systems to prevent engine overheating.",
    additionalInfo: {
      engineOil: "15W-50 Motul 7100 Fully Synthetic Premium Ester",
      warranty: "15-Day Diagnostics & Labor Warranty",
      parts: "Genuine KTM OEM Spares and Brembo/Bybre Pads",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "Thermal Management Check", desc: "Radiator radiator fins cleaning, coolant level inspection, and thermostat check to handle city heat." },
      { title: "ECU Diagnostics", desc: "Checking error codes, battery voltage, and stator coil output to ensure clean spark delivery." },
      { title: "High-Speed Brake Service", desc: "Disc brake caliper cleaning, brake fluid flushing (DOT 4), and high-friction pad replacement." }
    ],
    reviews: [
      { name: "Varun Nair", vehicle: "Duke 390", rating: 5, location: "Sushant Lok, Gurgaon", date: "July 11, 2026", comment: "Used Motul 7100 oil as requested. Mechanic cleaned the radiator fins and flushed the front brakes. KTM Duke running cool and stopping on a dime." }
    ],
    seoKeywords: ["ktm duke service at home", "ktm rc mechanic near me", "duke 390 home service", "doorstep ktm service delhi ncr", "ktm duke 200 repair", "ktm adventure 390 service gurgaon", "ktm rc 200 mechanic noida", "ktm duke 250 repair ghaziabad", "ktm motul oil change faridabad", "ktm bike service near me"],
    faqs: [
      {
        q: "How do your mechanics prevent overheating issues during doorstep service for KTM Duke 390 and RC 390?",
        a: "We clean dust and debris from radiator cooling fins, flush old coolant, top up high-boiling-point engine coolant, and verify radiator fan relay triggering."
      },
      {
        q: "What engine oil brand and grade is used for KTM 125, 200, 250, and 390 high-RPM engines?",
        a: "We use Motul 7100 15W-50 4T Fully Synthetic Ester oil—specifically engineered to withstand high engine temperatures and aggressive clutch engagement on KTM bikes."
      },
      {
        q: "Do you flush BYBRE disc brake fluid and replace brake pads for KTM motorcycles at home?",
        a: "Yes! We clean BYBRE calipers, check brake rotor thickness, replace worn sintered brake pads, and flush old DOT 4 brake fluid to ensure maximum stopping power."
      },
      {
        q: "Can I get KTM ECU diagnostics, battery voltage tests, and chain tensioning done at my apartment parking?",
        a: "Absolutely! Our mobile units carry OBD scanners, digital multimeters, laser chain aligners, and Motul off-road/road chain lube."
      },
      {
        q: "What is the warranty coverage on KTM doorstep performance servicing in Delhi NCR?",
        a: "All KTM services include a 15-day labor & diagnostic warranty alongside manufacturer warranties on genuine KTM replacement components."
      }
    ]
  },
  "ola-electric": {
    name: "Ola Electric",
    tagline: "Doorstep Diagnostics and Component Checks for OLA EV Scooters",
    description: "OLA electric scooters require specialised diagnostic checks for electronic systems, battery cell voltage balances, disc brake calipers, and belt/hub drivetrains. Our EV mechanics carry multi-meters, EV safety equipment, and specialized diagnostics to check battery health and software logs to ensure your OLA S1 Pro, Air, or X remains reliable.",
    additionalInfo: {
      engineOil: "Not Applicable (Electric Hub Motor / Reducer Fluid Checked)",
      warranty: "15-Day EV Diagnostic and Labor Warranty",
      parts: "OLA EV OEM Gaskets, Fasteners & Braking Pads",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "Electric Powertrain Diagnosis", desc: "Inspecting high-voltage cable insulation, checking motor controller connectors, and cleaning terminal grease." },
      { title: "Regenerative Braking Calibration", desc: "Cleaning front/rear disc calipers and checking electronic brake sensor activation for optimal regen charge." },
      { title: "Suspension & Fork Inspection", desc: "Checking front telescopic forks and rear monoshock play to prevent steering wobble." }
    ],
    reviews: [
      { name: "Arun Joy", vehicle: "Ola S1 Pro", rating: 4, location: "Noida Sector 137", date: "July 02, 2026", comment: "Excellent service. Checked the battery health, brake pads, and resolved a small dashboard software glitch. Glad we have doorstep support for EVs now." }
    ],
    seoKeywords: ["ola s1 pro home service", "ola electric repair near me", "ola scooter mechanic at home", "doorstep ola service delhi ncr", "ola s1 air brake repair", "ola s1 x battery check gurgaon", "ola electric scooter service noida", "ola ev mechanic ghaziabad", "ola doorstep repair faridabad", "ev scooter home service near me"],
    faqs: [
      {
        q: "What electrical and battery health diagnostics are performed during doorstep OLA S1 Pro and Air service?",
        a: "Our certified EV mechanics check battery voltage parameters, inspect high-voltage wiring insulation, clean charging port pins, and test the onboard motor controller."
      },
      {
        q: "How do your EV mechanics service OLA disc brake calipers and eliminate brake squeal?",
        a: "We remove front and rear disc brake calipers, degrease rotors, sand down glazed brake pads, and check electronic brake cutoff switches for smooth regenerative braking."
      },
      {
        q: "Do you inspect front monoshock/telescopic fork play and steering cone-sets for OLA EV scooters at home?",
        a: "Yes! We check front suspension play, tighten axle bolts, inspect tire wear patterns, and calibrate tyre pressures for a safe, wobble-free ride."
      },
      {
        q: "How do I book an emergency doorstep technician for OLA S1 X starting or charging issues in Gurgaon?",
        a: "You can book directly on FixWheel.app or call our helpline. Our mobile EV unit reaches your home or office parking within 45 minutes."
      },
      {
        q: "Is there a labor warranty on OLA electric scooter doorstep diagnostics and repairs?",
        a: "Yes, FixWheel provides a 15-day labor & diagnostic warranty on all OLA electric scooter home services."
      }
    ]
  },
  "ather": {
    name: "Ather",
    tagline: "Premium Doorstep Maintenance for Ather 450X and Rizta Scooters",
    description: "Ather electric scooters are highly sophisticated machines featuring aluminum frames and advanced belt-drive powertrains. We focus on belt tensioning, battery diagnostics, disc brake pad cleaning, and steering head cone-set adjustments, ensuring your Ather continues to deliver its signature silent and sporty performance.",
    additionalInfo: {
      engineOil: "Not Applicable (Belt Drive / Hub Reducer Fluid Checked)",
      warranty: "15-Day Technical Labor Warranty",
      parts: "Ather Energy Genuine Brake Pads & Drive Belts",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "Belt Drive Tensioning", desc: "Precision alignment and tension checks of the gates carbon drive belt to prevent squeaking and maximize power transfer." },
      { title: "Brake Caliper Servicing", desc: "Removing dirt buildup from disc pads to prevent pad drag and maintain sharp bite." },
      { title: "Dashboard & OBD Scan", desc: "Battery health status analysis, charging port pins cleaning, and software restart checks." }
    ],
    reviews: [
      { name: "Meera Nair", vehicle: "Ather 450X", rating: 5, location: "Saket, Delhi", date: "June 30, 2026", comment: "Ather home service was quick. The belt was squeaking slightly, and the mechanic aligned and cleaned it. Perfect doorstep convenience." }
    ],
    seoKeywords: ["ather 450x service at home", "ather energy mechanic near me", "ather rizta doorstep repair", "doorstep ather repair delhi ncr", "electric scooter home service", "ather 450s belt tensioning gurgaon", "ather ev battery scan noida", "ather scooter mechanic ghaziabad", "ather doorstep service faridabad", "ather repair near me"],
    faqs: [
      {
        q: "How do your EV technicians adjust and clean the Gates carbon belt drive on Ather 450X and Rizta scooters?",
        a: "We inspect belt tooth wear, clean road dust from pulleys, check belt tension with sonic/deflection gauges, and align drive pulleys to eliminate squeaking."
      },
      {
        q: "What diagnostic checks are performed on Ather Lithium-ion battery packs and charging port pins?",
        a: "We inspect BMS status logs, clean charging connector contacts, check auxiliary 12V battery health, and test state-of-charge accuracy."
      },
      {
        q: "Do you replace Ather 450S and 450 Apex front/rear disc brake pads at residential parking in Noida?",
        a: "Yes! We stock genuine Ather disc pads and high-friction fluid to replace worn pads, clean calipers, and bleed hydraulic lines at your home."
      },
      {
        q: "How long does a full doorstep health inspection take for Ather electric scooters?",
        a: "A comprehensive Ather EV doorstep checkup takes 35 to 45 minutes, covering brakes, belt drive, suspension, tyres, and electrical diagnostics."
      },
      {
        q: "Which areas in Delhi NCR have 45-minute doorstep dispatch for Ather electric scooters?",
        a: "We offer 45-minute doorstep dispatch across all sectors of Gurgaon, Delhi NCR, Noida, Ghaziabad, and Faridabad."
      }
    ]
  },
  "vespa": {
    name: "Vespa",
    tagline: "Artisan Care for Italian Styled Classic Vespa Scooters",
    description: "Vespa steel monocoque bodies and retro designs require gentle handling and specialized mechanical knowledge. From body panels protection during service to precise tuning of Vespa's 3-valve FI engines and CVT assemblies, we treat your premium Italian scooter with the care it deserves.",
    additionalInfo: {
      engineOil: "5W-40 Premium Grade Fully Synthetic Scooter Oil",
      warranty: "15-Day Labor & Diagnostics Warranty",
      parts: "100% Genuine Piaggio Spares & Cables",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "Scratch-Free Servicing", desc: "Specialized soft rubber work mats and protective covers used to safeguard the steel body paint." },
      { title: "Piaggio CVT Refinement", desc: "Variator cleaning, roller inspections, and high-performance clutch shoes dressing to eliminate takeoff shudder." },
      { title: "Suspension Link Greasing", desc: "Lubricating the unique front single-sided aircraft-derived link suspension for plush riding comfort." }
    ],
    reviews: [
      { name: "Tanvi Kapoor", vehicle: "Vespa VXL 125", rating: 5, location: "Noida Sector 50", date: "May 24, 2026", comment: "Highly professional. The mechanic took great care not to scratch the scooter and handled the CVT cleaning very meticulously. Bike runs super smooth." }
    ],
    seoKeywords: ["vespa service at home", "vespa mechanic near me", "piaggio vespa home service", "doorstep vespa repair delhi ncr", "vespa clutch cleaning", "vespa vxl 125 service gurgaon", "vespa sxl 150 repair noida", "vespa zx 125 mechanic ghaziabad", "vespa body care faridabad", "vespa scooter repair near me"],
    faqs: [
      {
        q: "How do your mechanics protect Vespa steel monocoque paint and bodywork during doorstep service?",
        a: "We use padded rubber work mats, fender covers, and soft-jaw tools to ensure your Vespa's iconic steel body remains 100% scratch-free during repairs."
      },
      {
        q: "What engine oil grade and CVT roller maintenance is recommended for Vespa VXL 125 and SXL 150?",
        a: "We use 5W-40 / 10W-40 fully synthetic scooter oil matching Piaggio specifications, clean variator rollers, and dress clutch shoes to eliminate takeoff vibration."
      },
      {
        q: "Do you grease the front single-sided aircraft link suspension on Vespa classic scooters at home?",
        a: "Yes! We lubricate the front single-arm trailing link pivot, check shock absorber bushings, and inspect wheel bearings for smooth riding comfort."
      },
      {
        q: "How long does a complete periodic 15-point checkup take for a Vespa at residential parking in Noida?",
        a: "A complete Vespa doorstep service takes 40 to 50 minutes, including oil swap, air filter clean, spark plug check, brake adjustment, and CVT inspection."
      },
      {
        q: "Are genuine Piaggio Vespa gaskets, brake shoes, and speedometer cables used at doorstep?",
        a: "Yes, 100%! We fit unsealed, factory-genuine Piaggio Vespa parts right in front of you."
      }
    ]
  },
  "jawa": {
    name: "Jawa",
    tagline: "Classic Doorstep Tuning for Jawa 42, Perak and Yezdi Roadster",
    description: "Jawa and Yezdi motorcycles feature modern liquid-cooled double-overhead-cam (DOHC) single-cylinder engines that require specialized valve timing and cooling system diagnostics. Our mechanics carry dedicated dual-exhaust sensors, coolant checks, and specialized tools to service your retro cruiser at your doorstep.",
    additionalInfo: {
      engineOil: "15W-50 / 10W-50 Motul Premium Synthetic Oil",
      warranty: "15-Day Post-Service Labor Warranty",
      parts: "Genuine Jawa/Classic Legends Spare Parts",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "DOHC Engine Check", desc: "Monitoring engine sound, DOHC timing chain tension, and coolant circulation for consistent touring reliability." },
      { title: "Dual Exhaust Clearance", desc: "Inspecting exhaust exhaust pipe brackets, oxygen sensor connections, and packing leaks." },
      { title: "Sprocket & Chain Care", desc: "Heavy-duty chain spray lube, wheel alignment, and sprocket teeth health check." }
    ],
    reviews: [
      { name: "Inderjeet Singh", vehicle: "Jawa 42", rating: 5, location: "Mayur Vihar, Delhi", date: "July 06, 2026", comment: "Hard to find mechanics for Jawas. The FixWheel tech was highly trained. Did a proper coolant flush, oil change, and adjusted the chain. Fantastic job!" }
    ],
    seoKeywords: ["jawa service at home", "jawa mechanic near me", "yezdi roadster home service", "doorstep jawa repair delhi ncr", "jawa perak service near me", "jawa 42 bike repair gurgaon", "yezdi adventure mechanic noida", "jawa dohc engine check ghaziabad", "jawa doorstep service faridabad", "yezdi bike repair near me"],
    faqs: [
      {
        q: "How do your mechanics service the liquid-cooled DOHC engines on Jawa 350, Jawa 42, and Perak?",
        a: "Our Jawa specialists check liquid coolant levels, inspect radiator fans, monitor DOHC valve train noise, and clean dual spark plugs to ensure smooth cruising."
      },
      {
        q: "What engine oil specification is recommended for Jawa dual-exhaust retro cruisers?",
        a: "We use 15W-50 / 10W-50 Motul 7100 fully synthetic ester oil matching Classic Legends factory guidelines for optimum thermal protection."
      },
      {
        q: "Do you check timing chain tensioner noise and radiator coolant levels at doorstep?",
        a: "Yes! We test timing chain tension, check radiator hoses for leaks, top up coolant, and inspect exhaust O2 sensors."
      },
      {
        q: "Can I get Jawa 42 Bobber disc brake pads and heavy-duty chain spray done at home in Delhi NCR?",
        a: "Absoluty! We carry Bybre/Jawa genuine disc brake pads, heavy-duty chain cleaning sprays, and laser alignment tools to your parking lot."
      },
      {
        q: "What warranty is provided on doorstep Jawa motorcycle diagnostics and repairs?",
        a: "FixWheel provides a 15-day labor & diagnostic warranty on all Jawa and Yezdi doorstep services."
      }
    ]
  },
  "aprilia": {
    name: "Aprilia",
    tagline: "Race-Tuned Performance Tuning for Aprilia SR & SXR Maxi Scooters",
    description: "Aprilia performance scooters require high-viscosity synthetic oils, CVT tuning, and high-performance brake pads. We service Aprilia SR 160, SXR 160, and Storm models at your doorstep, ensuring their high-rpm acceleration and rigid handling remain sharp.",
    additionalInfo: {
      engineOil: "5W-40 Motul Scooter Fully Synthetic Oil",
      warranty: "15-Day Technical Labor Warranty",
      parts: "Genuine Aprilia OEM Spares & Brake Linings",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "High-RPM CVT Balancing", desc: "CVT dry clutch assembly cleaning and variator fan checks to prevent belt slippage during racing acceleration." },
      { title: "Suspension Rigidity Check", desc: "Inspecting rigid front forks and rear shock mounts to ensure stable cornering." },
      { title: "Brake Safety Service", desc: "Disc caliper piston cleaning, brake fluid bleeding (DOT 4), and high-friction pad installation." }
    ],
    reviews: [
      { name: "Rishabh Malhotra", vehicle: "Aprilia SR 160", rating: 5, location: "Gurgaon Phase 1", date: "June 29, 2026", comment: "The SR 160 is a fast scooter and needs proper CVT and brake servicing. The mechanic did an awesome job. Shifting and engine pickup feels amazing." }
    ],
    seoKeywords: ["aprilia doorstep service", "aprilia sr 160 mechanic", "aprilia sxr 160 home service", "doorstep aprilia repair delhi ncr", "aprilia scooter service near me", "aprilia sr 125 repair gurgaon", "aprilia storm home service noida", "aprilia cvt tuning ghaziabad", "aprilia doorstep repair faridabad", "aprilia mechanic near me"],
    faqs: [
      {
        q: "How do your mechanics tune the high-revving CVT transmission on Aprilia SR 160 and SXR 160 scooters?",
        a: "We clean dry clutch assemblies, inspect variator rollers for flat spots, check V-belt width, and degrease clutch bells to eliminate acceleration slipping."
      },
      {
        q: "What fully synthetic scooter engine oil is used for Aprilia SR 125 and Storm models?",
        a: "We use Motul 5W-40 Scooter Power 4T fully synthetic oil to withstand high RPMs and deliver peak throttle pickup."
      },
      {
        q: "Do you inspect rigid front telescopic forks and hydraulic disc brake lines for Aprilia at doorstep?",
        a: "Yes! We check fork seals, inspect front 220mm disc rotors, clean caliper pistons, and flush DOT 4 brake fluid."
      },
      {
        q: "Can I get Aprilia RS 457 twin-cylinder sportbike basic maintenance done at home in Gurgaon?",
        a: "Yes! We offer basic periodic maintenance, synthetic oil replacement, chain care, and brake service for Aprilia RS 457 sportbikes."
      },
      {
        q: "What warranty applies to Aprilia doorstep performance scooter servicing in Delhi NCR?",
        a: "All Aprilia services include a 15-day labor guarantee alongside genuine replacement parts."
      }
    ]
  },
  "harley-davidson": {
    name: "Harley-Davidson",
    tagline: "Specialized Cruising Service for Harley X440 & V-Twins at Home",
    description: "Harley-Davidson motorcycles require high-torque fasteners, premium V-twin oils, and precise primary belt/chain tension adjustments. Whether you ride the modern Harley X440 or a classic imported V-Twin cruiser, our experienced heavy-duty bike mechanics handle all filter changes, battery tests, and brake servicing right in your garage.",
    additionalInfo: {
      engineOil: "20W-50 V-Twin Spec Heavy Duty Synthetic Oil",
      warranty: "15-Day Cruiser Labor Warranty",
      parts: "Genuine Harley-Davidson or Premium Aftermarket Filters",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "Heavy Cruiser Maintenance", desc: "Servicing massive engine cylinders, primary chain oil changes, and clutch adjustment under high loads." },
      { title: "Electrical Power Test", desc: "Battery CCA check, charging system coils health check, and diagnostic trouble code read-out." },
      { title: "Touring Brake Refurbish", desc: "Heavy-duty caliper fluid flush and front/rear brake pad inspections for loaded highway touring safety." }
    ],
    reviews: [
      { name: "Karan Johar", vehicle: "Harley X440", rating: 5, location: "Siri Fort, Delhi", date: "July 14, 2026", comment: "Outstanding service. The mechanic used high-grade 20W-50 oil and torque wrenches for all bolts. Excellent care for premium cruisers." }
    ],
    seoKeywords: ["harley davidson mechanic near me", "harley x440 home service", "doorstep harley repair", "harley cruiser service delhi ncr", "harley bike repair at home", "harley iron 883 service gurgaon", "harley forty eight mechanic noida", "harley street 750 repair ghaziabad", "harley v-twin oil change faridabad", "harley doorstep mechanic near me"],
    faqs: [
      {
        q: "How do your technicians service Harley-Davidson X440 single-cylinder and heavy V-Twin cruisers at home?",
        a: "Our heavy-cruiser specialists carry torque wrenches, high-grade 20W-50 V-twin synthetic oil, filter wrenches, and heavy-duty battery testing equipment directly to your driveway."
      },
      {
        q: "What heavy-duty engine oil viscosity is recommended for Harley-Davidson motorcycles?",
        a: "We use 20W-50 heavy-duty V-twin synthetic oil (Motul / Harley Spec) designed to protect large air/oil-cooled cylinders in hot traffic conditions."
      },
      {
        q: "Do you inspect primary belt/chain tension, heavy-duty clutch cables, and battery CCA at doorstep?",
        a: "Yes! We check primary drive tension, adjust clutch free play, clean battery terminals, and test Cold Cranking Amps (CCA) to ensure effortless starts."
      },
      {
        q: "Can I get Harley-Davidson X440 front/rear disc brake pads replaced at my apartment parking in Delhi NCR?",
        a: "Absoluty! We carry genuine Harley X440 and Bybre brake pads, clean disc calipers, and bleed hydraulic brake lines at your location."
      },
      {
        q: "What torque specifications and tools do your mechanics use for Harley-Davidson doorstep service?",
        a: "Our mechanics strictly follow manufacturer torque values for drain bolts, oil filters, axle nuts, and caliper mounts using calibrated torque wrenches."
      }
    ]
  },
  "kawasaki": {
    name: "Kawasaki",
    tagline: "Precision Engineering Service for Ninja and Z-Series Sportbikes",
    description: "Kawasaki sport and street bikes are highly tuned multi-cylinder machines demanding strict engine clearances and advanced thermal care. We service Ninja 300, Z650, and other Kawasaki street and sport tourers at your doorstep. We perform full synthetic oil swaps, radiator cleaning, throttle body sync check, and premium chain alignments.",
    additionalInfo: {
      engineOil: "10W-40 Motul 300V Double Ester Fully Synthetic",
      warranty: "15-Day Premium Performance Warranty",
      parts: "Genuine Kawasaki OEM Oil Filters and Spark Plugs",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "High-Flow Coolant Service", desc: "Cooling system inspections, radiator cleanup, and high-performance coolant top-up to prevent overheating." },
      { title: "Double Ester Lubrication", desc: "Using Motul 300V fully synthetic oil to ensure clean high-rpm engine protection and smooth wet clutch friction." },
      { title: "Laser Chain Alignment", desc: "Ensuring exact wheel alignment to prevent sprocket wear and minimize driveline power loss." }
    ],
    reviews: [
      { name: "Deepankar Dev", vehicle: "Ninja 300", rating: 5, location: "DLF Phase 5, Gurgaon", date: "July 09, 2026", comment: "Hard to trust local mechanics with Ninjas. But the FixWheel technician used proper tools, torque-wrenched the oil drain bolt, and did a laser chain check. Superb!" }
    ],
    seoKeywords: ["kawasaki ninja 300 service", "kawasaki mechanic near me", "ninja 300 home service", "doorstep kawasaki repair delhi ncr", "kawasaki z650 service near me", "kawasaki versys 650 repair gurgaon", "kawasaki w175 home service noida", "kawasaki ninja 400 mechanic ghaziabad", "kawasaki coolant flush faridabad", "kawasaki bike service near me"],
    faqs: [
      {
        q: "How do your specialized superbike mechanics maintain Kawasaki Ninja 300, 400, 500, and Z650 at home?",
        a: "Our superbike mechanics use Motul 300V / 7100 fully synthetic ester oils, genuine Kawasaki oil filters, laser chain aligners, and radiator fin cleaning tools."
      },
      {
        q: "What high-rpm double-ester synthetic oil is recommended for Kawasaki sportbikes?",
        a: "We recommend Motul 300V Factory Line 10W-40 or Motul 7100 10W-40 to handle high RPMs and provide smooth wet-clutch gear shifting."
      },
      {
        q: "Do you perform radiator fan checks, coolant flushes, and laser chain alignments for Kawasaki at doorstep?",
        a: "Yes! We inspect radiator fins, check cooling fan sensors, flush old coolant, clean dual-disc front calipers, and align drive chains."
      },
      {
        q: "How do your mechanics protect fairings and body panels during doorstep Ninja 300 servicing?",
        a: "We use soft microfiber mats and fairing covers so no tool or stand scratches your Kawasaki's factory paint."
      },
      {
        q: "Is there a 15-day labor warranty on doorstep Kawasaki high-performance maintenance?",
        a: "Yes, FixWheel offers a 15-day post-service labor warranty on all Kawasaki motorcycle repairs and checkups."
      }
    ]
  },
  "triumph": {
    name: "Triumph",
    tagline: "British Heritage & Performance Servicing for Speed 400, Scrambler & Triples",
    description: "Triumph motorcycles combine British engineering with modern performance. Whether you ride the popular Speed 400, Scrambler 400 X, or high-capacity Trident 660 and Street Triple models, our doorstep mechanics use premium fully synthetic lubricants, OBD diagnostic tools, and genuine filters to keep your engine running flawlessly.",
    additionalInfo: {
      engineOil: "10W-40 / 15W-50 Fully Synthetic Motul 7100 Ester Spec",
      warranty: "15-Day Premium Bike Labor Warranty",
      parts: "Genuine Triumph OEM Filters & Brembo/Bybre Pads",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "TR-Series 400cc Tuning", desc: "Oil drain, genuine filter swap, liquid coolant inspection, and throttle body valve cleaning for Speed 400 and Scrambler 400 X." },
      { title: "Ride-by-Wire Calibration", desc: "Checking electronic throttle sensors, battery voltage health, and diagnostic fault codes." },
      { title: "Braking & Chain Prep", desc: "BYBRE/Brembo disc pad cleaning, DOT 4 fluid top-up, and O-ring chain spray lubrication." }
    ],
    reviews: [
      { name: "Rahul Deshmukh", vehicle: "Speed 400", rating: 5, location: "Vasant Vihar, Delhi", date: "July 16, 2026", comment: "Serviced my Speed 400 right at my doorstep. The mechanic changed oil, cleaned the chain, and checked all diagnostics. Very professional!" }
    ],
    seoKeywords: ["triumph speed 400 service", "triumph mechanic near me", "scrambler 400 x home service", "doorstep triumph repair delhi ncr", "trident 660 home service gurgaon", "triumph street triple mechanic noida", "triumph bonneville service ghaziabad", "triumph bike repair faridabad"],
    faqs: [
      {
        q: "How do your mechanics handle doorstep periodic service for Triumph Speed 400 and Scrambler 400 X?",
        a: "Our technicians drain engine oil, replace the genuine paper oil filter and drain washer, clean the throttle body, lube control levers, and perform a 15-point diagnostic check."
      },
      {
        q: "What synthetic engine oil viscosity is used for Triumph TR-Series 400cc and Triple 660 engines?",
        a: "We use 10W-40 or 15W-50 Motul 7100 4T Fully Synthetic Ester oil matching Triumph's factory specifications."
      },
      {
        q: "Do you inspect Triumph ABS sensor lines, throttle-by-wire calibration, and disc brake pads at home?",
        a: "Yes! We inspect ABS sensor cables, clean BYBRE/Brembo disc brake pads, check brake rotor thickness, and test electronic throttle response."
      },
      {
        q: "Can I get Triumph Speed Twin or Bonneville T120 chain cleaning and oil filter change done at my garage?",
        a: "Absoluty! Our mobile units service all Triumph modern classics and roadsters right in your driveway."
      },
      {
        q: "What is the response SLA for doorstep Triumph servicing in Gurgaon and South Delhi?",
        a: "We guarantee doorstep technician dispatch within 45 minutes of booking confirmation."
      }
    ]
  },
  "bmw": {
    name: "BMW Motorrad",
    tagline: "German Engineering Doorstep Service for G 310, F 900 & GS Series",
    description: "BMW Motorrad bikes represent precision German engineering. From the G 310 R and G 310 GS to high-performance S 1000 RR and touring GS models, our specialized mechanics carry torque-calibrated tools, BMW spec synthetic oils, and diagnostic equipment directly to your doorstep.",
    additionalInfo: {
      engineOil: "15W-50 / 5W-40 Motul 7100 Fully Synthetic BMW Spec",
      warranty: "15-Day Premium German Bike Warranty",
      parts: "Genuine BMW OEM Spares & Bybre Pads",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "G 310 Series Precision Care", desc: "Oil filter change, liquid coolant check, throttle valve cleaning, and chain slack calibration for G 310 R, GS, and RR." },
      { title: "Brake & ABS Fluid Bleeding", desc: "BYBRE disc pad inspection, rotor cleaning, and high-pressure DOT 4 brake fluid top-up." },
      { title: "Electrical System Health Scan", desc: "Digital multimeter battery voltage test, alternator charging check, and OBD log analysis." }
    ],
    reviews: [
      { name: "Sameer Kapoor", vehicle: "G 310 GS", rating: 5, location: "Golf Course Extension, Gurgaon", date: "July 18, 2026", comment: "Outstanding doorstep service for my BMW G 310 GS. Oil change, chain lube, and brake check done cleanly in my apartment basement." }
    ],
    seoKeywords: ["bmw g310r service at home", "bmw g310gs mechanic near me", "bmw bike doorstep repair", "doorstep bmw service delhi ncr", "bmw g310rr home service gurgaon", "bmw motorrad mechanic noida", "bmw s1000rr service ghaziabad"],
    faqs: [
      {
        q: "How do your mechanics service BMW G 310 R, G 310 GS, and G 310 RR motorcycles at doorstep?",
        a: "We perform full 15-point servicing including oil drain, OEM oil filter swap, air filter check, throttle body cleaning, chain tensioning, and brake pad servicing."
      },
      {
        q: "What synthetic engine oil specification is used for BMW 313cc single-cylinder and 1000cc engines?",
        a: "We use 15W-50 or 5W-40 Motul 7100 / 300V Fully Synthetic Ester oils formulated for high-revving BMW engines."
      },
      {
        q: "Do you perform radiator coolant flushes, chain alignment, and Brembo/Bybre brake pad service at home?",
        a: "Yes! We check radiator fans, flush coolant, align drive chains with precision equipment, and install fresh brake pads."
      },
      {
        q: "Can I get BMW CE 04 electric scooter or heavy GS series basic diagnostics done in Gurgaon?",
        a: "Yes, our mobile units carry electrical multimeters and EV diagnostic tools to service BMW electric and tourer models."
      },
      {
        q: "What labor warranty is provided on doorstep BMW Motorrad maintenance in Delhi NCR?",
        a: "All BMW Motorrad doorstep services carry a 15-day labor & diagnostic warranty."
      }
    ]
  },
  "yezdi": {
    name: "Yezdi",
    tagline: "Rugged Doorstep Servicing for Yezdi Roadster, Scrambler & Adventure",
    description: "Yezdi motorcycles are built for rugged highways and modern trails. Powered by 334cc liquid-cooled DOHC engines, Yezdi bikes require strict cooling management, clean synthetic oils, and smooth clutch actuation. Our mechanics service your Yezdi right where it's parked.",
    additionalInfo: {
      engineOil: "15W-50 Motul Fully Synthetic 4T Oil",
      warranty: "15-Day Quality Assurance Warranty",
      parts: "Genuine Yezdi/Classic Legends Spares",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "334cc DOHC Tuning", desc: "Coolant level check, radiator fan relay test, spark plug gap setting, and synthetic engine oil replacement." },
      { title: "Scrambler / Adventure Driveline", desc: "Heavy-duty chain degreasing and high-tack spray lubrication to withstand off-road dust." },
      { title: "Disc Caliper Servicing", desc: "Front and rear disc brake pad check, rotor degreasing, and lever pivot greasing." }
    ],
    reviews: [
      { name: "Harpreet Brar", vehicle: "Yezdi Roadster", rating: 5, location: "Sector 14, Gurgaon", date: "July 04, 2026", comment: "Quick and efficient Yezdi service at home. Changed engine oil and cleaned the chain thoroughly." }
    ],
    seoKeywords: ["yezdi roadster service at home", "yezdi scrambler mechanic near me", "yezdi adventure doorstep repair", "doorstep yezdi service delhi ncr"],
    faqs: [
      {
        q: "How do your technicians service Yezdi Roadster, Scrambler, and Adventure bikes at doorstep?",
        a: "We perform complete engine oil drains, replace oil filters, inspect DOHC valve noise, flush coolant, and adjust heavy-duty drive chains."
      },
      {
        q: "What radiator coolant and engine oil brands are recommended for Yezdi 334cc DOHC engines?",
        a: "We use 15W-50 Motul 7100 fully synthetic oil and organic long-life coolant to prevent engine overheating."
      },
      {
        q: "Do you offer chain sprocket inspection and brake bleeding for Yezdi Adventure motorcycles at home?",
        a: "Yes! We inspect drive sprockets, degrease Bybre brake calipers, bleed brake fluid, and adjust clutch cables."
      },
      {
        q: "How fast can a certified Yezdi mechanic reach my office parking lot in Gurgaon or Noida?",
        a: "Our certified mobile mechanic arrives within 45 minutes of booking confirmation."
      },
      {
        q: "Are genuine Yezdi spare cables, spark plugs, and filters fitted at doorstep?",
        a: "100% yes! We install unsealed, genuine Yezdi replacement parts in front of you."
      }
    ]
  },
  "benelli": {
    name: "Benelli",
    tagline: "Exotic Sound Preservation and Service for Benelli Cruisers & Sports",
    description: "Benelli twin-cylinder machines and retro cruisers like the Imperiale 400 require precise valve checkups, EFI sensor monitoring, and high-quality chain alignments. Our specialized superbikes technicians handle Benelli oil filter changes, brake caliper lubrication, and custom chain tensioning at your doorstep.",
    additionalInfo: {
      engineOil: "15W-50 Fully Synthetic Motul 7100 / Yamalube",
      warranty: "15-Day Labor Warranty",
      parts: "Genuine Benelli Spares and High-Friction Pads",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "Imperiale 400 Specialized Care", desc: "Tappets adjustment, heavy-duty engine oil change, and spoke-wheel alignment check." },
      { title: "Exhaust Note Scan", desc: "Testing exhaust manifold gaskets, lambda sensor readings, and exhaust baffles." },
      { title: "Brake Pad & ABS Service", desc: "Caliper sliding pins lubricating, ABS sensor head cleaning, and high-traction brake pad fittings." }
    ],
    reviews: [
      { name: "Jatin Sood", vehicle: "Imperiale 400", rating: 5, location: "Vaishali, Ghaziabad", date: "June 20, 2026", comment: "Excellent home service for my Imperiale. The tappet sound was tuned perfectly and the chain noise is completely gone. Very happy with the technician." }
    ],
    seoKeywords: ["benelli service at home", "benelli mechanic near me", "imperiale 400 home service", "doorstep benelli repair delhi ncr", "benelli tnt 300 service near me", "benelli leoncino repair gurgaon", "benelli trk 502 mechanic noida", "benelli twin cylinder service ghaziabad", "benelli doorstep repair faridabad", "benelli bike repair near me"],
    faqs: [
      {
        q: "How do your mechanics service Benelli Imperiale 400, TRK 502, and Leoncino 500 at doorstep?",
        a: "We perform full oil drains, replace oil filters, adjust tappets on single/twin cylinders, inspect radiator fans, and tension drive chains."
      },
      {
        q: "What engine oil and oil filter replacement guidelines are followed for Benelli twin-cylinder bikes?",
        a: "We use 15W-50 Motul 7100 fully synthetic ester oil and replacement Benelli paper oil filters on every service."
      },
      {
        q: "Do you inspect spoke-wheel tension, tappet noise, and dual exhaust sensors for Benelli Imperiale 400?",
        a: "Yes! We inspect spoke tightness, check O2 sensor wiring, adjust tappet clearances, and apply high-tack chain lube."
      },
      {
        q: "Can I get Keeway SR125 / SR250 and Benelli bikes serviced at my office parking in Noida or Ghaziabad?",
        a: "Absoluty! We service all Benelli and Keeway models directly at your residence or office parking."
      },
      {
        q: "What warranty coverage applies to doorstep Benelli repair and maintenance in Delhi NCR?",
        a: "All Benelli doorstep services carry a 15-day labor & diagnostic guarantee."
      }
    ]
  },
  "revolt": {
    name: "Revolt",
    tagline: "Specialized Electric Motorcycle Maintenance for Revolt RV400 & RV1",
    description: "Revolt electric motorcycles feature swappable lithium battery systems and belt/chain drivetrains. We perform electrical wiring inspections, battery diagnostic scans, belt tensioning, and brake pad replacements right at your doorstep.",
    additionalInfo: {
      engineOil: "Not Applicable (Electric Motor / Belt Drive Checked)",
      warranty: "15-Day EV Diagnostic & Labor Warranty",
      parts: "Genuine Revolt EV Spares & Brake Linings",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "Revolt Powertrain Scan", desc: "Inspecting swappable battery contacts, controller wiring harness, and battery latch alignment." },
      { title: "Belt & Chain Drive Tuning", desc: "Adjusting drive belt tension and lubricating chain drive models for smooth silent acceleration." },
      { title: "Disc Brake Pad Service", desc: "Degreasing front and rear disc brake rotors and fitting fresh brake pads." }
    ],
    reviews: [
      { name: "Ankit Maurya", vehicle: "Revolt RV400", rating: 5, location: "Sector 18, Noida", date: "July 22, 2026", comment: "Great EV service at home. Checked the battery terminals, brake pads, and drive belt. Very convenient!" }
    ],
    seoKeywords: ["revolt rv400 service at home", "revolt electric bike repair near me", "doorstep revolt service delhi ncr"],
    faqs: [
      {
        q: "What electrical and battery health diagnostics are performed during doorstep Revolt RV400 and RV1 service?",
        a: "Our certified EV mechanics inspect battery latch connectors, test controller wiring, check battery state of health, and clean charging pins."
      },
      {
        q: "How do your mechanics adjust belt drive tension and clean disc brake calipers for Revolt EV bikes at home?",
        a: "We check belt deflection, align rear wheel pulleys, remove disc brake pad dust, and flush brake fluid."
      },
      {
        q: "Do you inspect Revolt battery swappable lock mechanisms and digital dashboard wiring at doorstep?",
        a: "Yes! We test battery release cables, lock mechanisms, keyless start relays, and digital console wiring."
      },
      {
        q: "How fast can a mobile Revolt EV mechanic reach my home in Gurgaon, Delhi, or Noida?",
        a: "Our mobile technician arrives at your location within 45 minutes of booking."
      },
      {
        q: "Is there a labor warranty on Revolt electric motorcycle doorstep servicing?",
        a: "Yes, FixWheel provides a 15-day labor & diagnostic warranty on all Revolt electric bike services."
      }
    ]
  },
  "husqvarna": {
    name: "Husqvarna",
    tagline: "Swedish Precision Doorstep Service for Svartpilen & Vitpilen",
    description: "Husqvarna motorcycles demand specialized high-RPM engine tuning, liquid cooling maintenance, and synthetic lubricant care. Our technicians bring professional diagnostic tools right to your location.",
    additionalInfo: {
      engineOil: "10W-50 Full Synthetic Sport Oil",
      warranty: "15-Day Labor & Diagnostics Warranty",
      parts: "100% Genuine OEM Filters & Brake Shoes",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "High-RPM Performance Scan", desc: "Engine diagnostic checks, throttle valve cleaning, and ECU sensor inspection." },
      { title: "Brake & Chain Tuning", desc: "Hydraulic disc brake fluid flush and laser chain sprocket alignment." },
      { title: "Cooling System Service", desc: "Radiator fin cleaning and high-performance coolant check." }
    ],
    reviews: [
      { name: "Rahul Kapoor", vehicle: "Svartpilen 250", rating: 5, location: "DLF Phase 5, Gurgaon", date: "August 10, 2026", comment: "Excellent doorstep service for my Svartpilen 250. Very clean work and genuine oil." }
    ],
    seoKeywords: ["husqvarna bike service at home", "svartpilen 250 repair near me", "vitpilen home mechanic delhi ncr"],
    faqs: [
      { q: "Do you service Husqvarna Svartpilen 250 and Vitpilen 250 at home?", a: "Yes, our certified technicians service all Husqvarna models on-site." },
      { q: "What engine oil is recommended for Husqvarna bikes?", a: "We strictly use 10W-50 full synthetic sport engine oil for optimal high-RPM performance." }
    ]
  },
  "matter": {
    name: "Matter",
    tagline: "Next-Gen Geared Electric Motorcycle Doorstep Maintenance",
    description: "Matter AERA electric motorcycles combine 4-speed manual transmission with advanced liquid-cooled EV powertrains. We provide expert doorstep transmission fluid checks, battery diagnostics, and brake servicing.",
    additionalInfo: {
      engineOil: "EV Gearbox Synthetic Lubricant",
      warranty: "15-Day EV Diagnostic & Labor Warranty",
      parts: "Genuine Matter Spares & Cables",
      avgTime: "Within 45 Mins Doorstep Arrival"
    },
    keyBenefits: [
      { title: "EV Gearbox & Clutch Check", desc: "Checking 4-speed manual transmission fluid and clutch lever free-play." },
      { title: "Liquid Cooling Inspection", desc: "Testing motor & battery liquid cooling circuit flow and reservoir level." },
      { title: "BMS Diagnostic Scan", desc: "Battery management system error code scan and cell balance verification." }
    ],
    reviews: [
      { name: "Siddharth Jain", vehicle: "Matter AERA 5000", rating: 5, location: "Sector 62, Noida", date: "August 5, 2026", comment: "First time getting my Matter AERA serviced at home. The technician knew the manual transmission EV system inside out!" }
    ],
    seoKeywords: ["matter aera service at home", "matter electric bike repair near me", "doorstep matter ev service delhi ncr"],
    faqs: [
      { q: "Can you service the 4-speed manual gearbox on Matter AERA at home?", a: "Yes! Our technicians inspect the gear shift linkage, transmission fluid, and clutch sensor at your location." },
      { q: "How fast is mobile dispatch for Matter EV bikes?", a: "Our mechanic reaches your home or office parking within 45 minutes of booking." }
    ]
  }
};

// Aliases for URL slug variations & brand codes
BRAND_DETAILS["royal_enfield"] = BRAND_DETAILS["royal-enfield"];
BRAND_DETAILS["ola"] = BRAND_DETAILS["ola-electric"];
BRAND_DETAILS["ola-electric"] = BRAND_DETAILS["ola-electric"] || BRAND_DETAILS["ola"];
BRAND_DETAILS["harley"] = BRAND_DETAILS["harley-davidson"];
BRAND_DETAILS["bmw-motorrad"] = BRAND_DETAILS["bmw"];
BRAND_DETAILS["aprillia"] = BRAND_DETAILS["aprilia"];
BRAND_DETAILS["tvs_ev"] = BRAND_DETAILS["tvs"];
BRAND_DETAILS["bajaj_ev"] = BRAND_DETAILS["bajaj"];
BRAND_DETAILS["vida"] = BRAND_DETAILS["hero"];
BRAND_DETAILS["hero_electric"] = BRAND_DETAILS["hero"];
BRAND_DETAILS["pure_ev"] = BRAND_DETAILS["hero"];
BRAND_DETAILS["okinawa"] = BRAND_DETAILS["ola-electric"];
BRAND_DETAILS["ampere"] = BRAND_DETAILS["ola-electric"];
BRAND_DETAILS["ultraviolette"] = BRAND_DETAILS["ktm"];
BRAND_DETAILS["simple_energy"] = BRAND_DETAILS["ola-electric"];
BRAND_DETAILS["tork"] = BRAND_DETAILS["revolt"];
BRAND_DETAILS["bounce"] = BRAND_DETAILS["ola-electric"];
BRAND_DETAILS["joy_ebike"] = BRAND_DETAILS["ola-electric"];
BRAND_DETAILS["other_ev"] = BRAND_DETAILS["hero"];
BRAND_DETAILS["other_ice"] = BRAND_DETAILS["hero"];

