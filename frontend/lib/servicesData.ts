export interface ServiceData {
  serviceId: string;
  category: string;
  title: string;
  lead: string;
  startingPrice: string;
  avgTime: string;
  warranty: string;
  descriptionParagraphs: string[];
  includedItems: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
}

export const SERVICES_DB: Record<string, ServiceData> = {
  "sports-bike-service": {
    serviceId: "sports-bike-service",
    category: "Sports & Track",
    title: "Sports Bike Service at Doorstep",
    lead: "High-revving liquid-cooled motorcycles like Yamaha R15, MT-15, KTM RC 200/390, and TVS Apache RTR need precise maintenance to deliver maximum acceleration and engine cooling.",
    startingPrice: "₹899",
    avgTime: "45 Mins",
    warranty: "15 Days Performance Warranty",
    descriptionParagraphs: [
      "Track-bred motorcycles operate at high RPMs and temperatures. Neglecting coolant levels, spark plug gaps, or drive chain alignment leads to loss of throttle response and engine overheating in city traffic.",
      "FixWheel provides doorstep sports bike servicing using Yamalube/Motul full synthetic sport-grade oils, coolant top-ups, radiator fin cleaning, and laser chain alignment.",
      "Our mechanics inspect VVA solenoids, electronic sensors, hydraulic disc brakes, and throttle bodies to ensure instant power delivery on demand.",
    ],
    includedItems: [
      "Yamalube Full Synthetic Sport / Motul 7100 engine oil replacement",
      "Radiator cooling fins cleaning & high-performance coolant check",
      "Spark plug electrode gap check & electronic fuel injector scan",
      "Drive chain deep cleaning, laser alignment & high-tack spray lube",
      "Front & rear hydraulic disc brake pad wear check & fluid level test",
      "Slipper clutch free-play adjustment & throttle cable lube",
    ],
    faqs: [
      {
        q: "Do you service Yamaha R15 V3/V4 and MT-15 at home?",
        a: "Yes! Yamaha R15, MT-15, FZ series, and KTM RC/Duke models are frequently serviced by our performance technicians.",
      },
      {
        q: "What engine oil is best for sports bikes?",
        a: "We recommend Yamalube Full Synthetic 10W-40 or Motul 7100 10W-40 100% Synthetic oil for smooth shifting and high-RPM protection.",
      },
      {
        q: "How long does doorstep sports bike servicing take?",
        a: "A full sports bike service takes approximately 45 minutes at your location.",
      },
    ],
    keywords: [
      "sports bike service",
      "sports bike repair near me",
      "yamaha r15 home service",
      "mt15 doorstep service",
      "ktm rc 200 repair",
      "apache rtr 200 service",
      "sports bike mechanic near me",
    ],
  },
  "electric-scooter-repair": {
    serviceId: "electric-scooter-repair",
    category: "EV Maintenance",
    title: "Electric Scooter & EV Repair at Doorstep",
    lead: "Electric scooters like OLA S1 Pro, Ather 450X, TVS iQube, and Bajaj Chetak feature advanced electronics and belt drivetrains. Get doorstep EV diagnostics, battery health scans, and brake servicing.",
    startingPrice: "₹599",
    avgTime: "45 Mins",
    warranty: "15 Days EV Technical Warranty",
    descriptionParagraphs: [
      "EV scooters require specialized high-voltage diagnostic tools, belt alignment gauges, and electronic sensor scanners. Local roadside mechanics are often untrained in handling EV lithium battery packs or motor controllers.",
      "FixWheel's EV-certified mechanics visit your home or office parking with multi-meters, EV safety gear, and diagnostic software. We inspect battery cell voltage balances, adjust Gates carbon drive belt tension, service disc brakes, and check regenerative braking sensors.",
      "Get instant EV doorstep repair with 100% genuine replacement parts.",
    ],
    includedItems: [
      "Lithium battery pack voltage, state of health (SOH) & BMS diagnostic check",
      "Belt drive tensioning, alignment & hub reducer gear fluid inspection",
      "Electronic throttle sensor, brake cut-off switch & side-stand sensor check",
      "Front & rear hydraulic disc brake pad replacement & fluid bleed",
      "Tire pressure calibration & suspension bushing lubrication",
    ],
    faqs: [
      {
        q: "Can you fix Ola S1 Pro and Ather 450X motor or battery error codes?",
        a: "Yes! Our technicians carry portable OBD and CAN-bus scanners to diagnose BMS error codes and sensor glitches on Ola, Ather, and TVS iQube scooters.",
      },
      {
        q: "Do you repair EV scooter disc brakes and belt tension at home?",
        a: "Absolutely. We replace worn ceramic brake pads and adjust drive belt tension on-site in under 45 minutes.",
      },
    ],
    keywords: [
      "electric scooter repair",
      "ev scooter repair near me",
      "ola s1 pro repair at home",
      "ather 450x doorstep service",
      "tvs iqube battery check",
      "electric bike mechanic near me",
    ],
  },
  "royal-enfield-service": {
    serviceId: "royal-enfield-service",
    category: "Royal Enfield Specialist",
    title: "Royal Enfield & Bullet Service at Doorstep",
    lead: "Royal Enfield cruisers demand dedicated valve clearance tuning, heavy-duty 15W-50 oil replacement, and chain tensioning to maintain their iconic thump and touring reliability.",
    startingPrice: "₹699",
    avgTime: "45 Mins",
    warranty: "15 Days RE Labor Warranty",
    descriptionParagraphs: [
      "Royal Enfield single-cylinder and twin engines need specialized care. Incorrect tappet gap settings lead to compression loss and hard starting, while improper chain tensioning causes severe driveline drag.",
      "FixWheel dispatches specialized RE mechanics trained on Classic 350, Bullet 350, Hunter 350, Meteor 350, Himalayan, and Interceptor 650 directly to your home or office parking.",
      "We handle Liquid Gun 15W-50 oil changes, valve clearance (tappet) settings, heavy-duty chain degreasing & lube, disc brake pad cleaning, and telescopic fork seal checks.",
    ],
    includedItems: [
      "15W-50 Liquid Gun / Motul semi-synthetic engine oil & filter replacement",
      "Engine tappet valve clearance gap setting & compression check",
      "Heavy-duty drive chain cleaning, tensioning & high-viscosity spray lube",
      "Front & rear disc brake pad cleaning, de-glazing & fluid level check",
      "Spark plug cleaning, electrode gap adjustment & air filter cleaning",
    ],
    faqs: [
      {
        q: "Do you service RE Classic 350, Bullet 350, and Himalayan at home?",
        a: "Yes! Our technicians carry dedicated RE pullers, gaskets, and filters for Classic 350, Bullet 350, Hunter 350, Meteor, and Himalayan.",
      },
      {
        q: "What engine oil is recommended for Royal Enfield bikes?",
        a: "We use official Royal Enfield Liquid Gun 15W-50 semi-synthetic oil or Motul 7100 15W-50 100% synthetic oil.",
      },
    ],
    keywords: [
      "royal enfield service",
      "royal enfield repair near me",
      "bullet 350 mechanic at home",
      "classic 350 doorstep service",
      "himalayan bike repair",
      "hunter 350 oil change",
    ],
  },
  "scooty-repair": {
    serviceId: "scooty-repair",
    category: "Scooter & CVT Specialist",
    title: "Scooty & Gearless Scooter Repair at Doorstep",
    lead: "Scooters like Honda Activa, TVS Jupiter, Suzuki Access, and TVS Ntorq are daily workhorses. Eliminate starting trouble and takeoff vibration with expert doorstep CVT clutch cleaning and tune-ups.",
    startingPrice: "₹199",
    avgTime: "45 Mins",
    warranty: "15 Days Labor Warranty",
    descriptionParagraphs: [
      "Gearless scooters rely on a Continuously Variable Transmission (CVT) system. Road dust and belt wear cause variator roller buildup, leading to severe shudder on acceleration, poor pickup, and reduced mileage.",
      "FixWheel's mobile scooter technicians dismantle variator assemblies, degrease clutch shoes, inspect Bando/OEM drive belts, clean spark plugs, and tune carburetors/FI units right at your home.",
      "Get instant doorstep scooty repair with transparent pricing and 100% genuine parts.",
    ],
    includedItems: [
      "CVT variator roller cleaning, degreasing & belt wear check",
      "Clutch shoe face sanding to eliminate takeoff acceleration shudder",
      "Spark plug electrode cleaning, testing & gap adjustment",
      "Drum brake shoe / disc pad adjustment & cable lubrication",
      "Air filter element dust cleaning & tire pressure check",
    ],
    faqs: [
      {
        q: "Why does my Activa or Jupiter shudder when accelerating?",
        a: "Vibration during takeoff is caused by dust and glaze buildup inside the CVT clutch bell. Our mechanics clean and sand the clutch shoes on-site to restore smooth acceleration.",
      },
      {
        q: "Do you replace broken kick cables and battery terminals on scooties?",
        a: "Yes! We stock cables, spark plugs, fuses, and batteries for Activa, Jupiter, Access, and Maestro.",
      },
    ],
    keywords: [
      "scooty repair",
      "scooty repair near me",
      "honda activa service at home",
      "tvs jupiter doorstep mechanic",
      "access 125 clutch cleaning",
      "scooter repair near me",
    ],
  },
  "commuter-bike-service": {
    serviceId: "commuter-bike-service",
    category: "Commuter Maintenance",
    title: "Commuter Bike Service at Doorstep",
    lead: "Daily commuter bikes like Hero Splendor, Honda Shine, Bajaj Pulsar, and TVS Raider demand consistent care to deliver peak mileage and vibration-free rides.",
    startingPrice: "₹199",
    avgTime: "45 Mins",
    warranty: "15 Days Labor Warranty",
    descriptionParagraphs: [
      "Commuter bikes are the lifeline of daily travel. High daily mileage quickly degrades engine oil, clogs air filters, and slackens drive chains.",
      "FixWheel's doorstep commuter bike service package is tailored specifically for 100cc to 160cc motorcycles. Our mechanics arrive at your home or office parking with genuine OEM oil, spark plugs, filters, and specialized tools.",
      "We optimize the air-fuel ratio, adjust clutch free-play, and service brakes to ensure your commuter bike stays smooth and fuel-efficient.",
    ],
    includedItems: [
      "OEM specification engine oil replacement (10W-30 / 20W-50)",
      "Spark plug electrode cleaning, testing & gap adjustment",
      "Drive chain adjustment, slack removal & lubricant spray",
      "Carburetor air-fuel mixture tuning / FI error code scan",
      "Front & rear drum brake / disc brake wear inspection & lever adjustment",
    ],
    faqs: [
      {
        q: "How often should I service my commuter bike?",
        a: "We recommend periodic basic servicing every 2,500 km or 3 months to maintain 60+ kmpl fuel mileage.",
      },
    ],
    keywords: [
      "commuter bike service",
      "hero splendor service at home",
      "honda shine doorstep repair",
      "pulsar 150 mechanic near me",
      "bike repair near me",
    ],
  },
  "basic-service": {
    serviceId: "basic-service",
    category: "Regular Maintenance",
    title: "Basic Bike Service at Doorstep",
    lead: "Keep your daily commuter motorcycle or scooter running flawlessly with FixWheel's periodic basic bike service package. Skipping regular checkups leads to unexpected breakdowns — our 45-minute doorstep tune-up keeps your ride smooth and mileage high.",
    startingPrice: "₹199",
    avgTime: "45 Mins",
    warranty: "15 Days Labor Warranty",
    descriptionParagraphs: [
      "Commuting through traffic subjects your bike's clutch cables, brake shoes, spark plugs, and air filters to extreme dust and friction. Without regular maintenance, carbon deposits accumulate in the engine, resulting in poor fuel efficiency, engine knocking, and starting trouble.",
      "Our certified doorstep mechanics arrive directly at your home or office parking with specialized diagnostic kits, OEM spare parts, and eco-friendly cleaning supplies. We perform a comprehensive 15-point checkup, adjusting control cables, cleaning spark plugs, inspecting brake liners, and lubricating key chassis pivots.",
      "With FixWheel, you get 100% transparent pricing, zero hidden charges, and a 15-day quality warranty on every basic service.",
    ],
    includedItems: [
      "Spark plug cleaning, gap adjustment & ignition test",
      "Air filter inspection & dust cleaning",
      "Front & rear brake shoe/pad inspection & cable tightening",
      "Drive chain adjustment, slack tensioning & lubrication",
      "Clutch free-play adjustment & throttle cable lube",
      "Battery voltage check & terminal cleaning",
      "Tire pressure check & tread depth inspection",
    ],
    faqs: [
      {
        q: "What is included in the Basic Bike Service package?",
        a: "Our Basic Service covers a 15-point inspection including spark plug cleaning, air filter dusting, brake lever & shoe adjustment, chain tensioning & lubing, clutch cable free-play adjustment, and battery voltage checks.",
      },
      {
        q: "Does the Basic Service price include engine oil?",
        a: "The Basic Service is ₹199 labor checkup fee. If you need engine oil replacement, we offer OEM engine oil starting at ₹349 extra or you can book our 'Service with Engine Oil' package.",
      },
    ],
    keywords: [
      "basic bike service",
      "bike service near me",
      "doorstep bike repair",
      "bike tune up at home",
      "two wheeler mechanic near me",
    ],
  },
  "oil-change": {
    serviceId: "oil-change",
    category: "Fluid & Lubrication",
    title: "Bike Engine Oil Change at Doorstep",
    lead: "Engine oil is your bike's lifeblood. Prevent engine overheating and friction wear with 100% sealed genuine engine oil replacement (Motul, Yamalube, Castrol, HMSI, Liquid Gun) done at your home in 30 minutes.",
    startingPrice: "₹349",
    avgTime: "45 Mins",
    warranty: "100% Sealed Genuine Oil Guarantee",
    descriptionParagraphs: [
      "Riding in stop-and-go traffic subjects engine oil to high thermal stress. Over time, oil breaks down, loses viscosity, and turns sludge-like — leading to engine overheating, clutch slipping, and piston ring wear.",
      "FixWheel's mobile oil change service brings 100% sealed, genuine OEM engine oil bottles matching your motorcycle manufacturer's viscosity specs (10W-30, 10W-40, 15W-50, 20W-50).",
      "We drain old sludge completely, clean the magnetic drain plug, replace the oil filter, inspect O-rings, and dispose of used oil in an environmentally safe manner.",
    ],
    includedItems: [
      "Complete old engine oil drain & magnetic drain bolt clean-up",
      "Fresh 100% sealed genuine engine oil refill (Motul / Yamalube / Castrol / OEM)",
      "Engine oil filter swap & O-ring seal inspection",
      "Spark plug check & drive chain lubrication",
    ],
    faqs: [
      {
        q: "How do I know which engine oil grade my bike needs?",
        a: "Our certified mechanics strictly follow your manufacturer's service manual (e.g. 10W-30 for Honda/Hero, 10W-40 for Yamaha/KTM, 15W-50 for Royal Enfield).",
      },
    ],
    keywords: [
      "engine oil change bike",
      "bike oil change at home",
      "motul oil change near me",
      "yamalube oil change",
      "bike mechanic near me",
    ],
  },
  "comprehensive-service": {
    serviceId: "comprehensive-service",
    category: "Full Overhaul",
    title: "Comprehensive Bike Service at Doorstep",
    lead: "Give your motorcycle or scooter a complete health reset. Our 24-point comprehensive doorstep service includes premium synthetic oil change, carburetor/FI nozzle cleaning, brake overhaul, and deep lubrication.",
    startingPrice: "₹899",
    avgTime: "45 Mins",
    warranty: "15 Days Full Labor Guarantee",
    descriptionParagraphs: [
      "Our Comprehensive Bike Service is recommended every 6 months or 5,000 km. Over time, engine oil breaks down, carbon builds up in the throttle body, brake pads wear out, and suspension pivots lose grease.",
      "FixWheel's master mechanics perform a complete top-to-bottom service right at your doorstep. We drain old engine oil, flush debris, replace oil filters, clean carburetor jets or FI nozzles, and adjust tappet valve clearances.",
      "You receive a digital health report, 100% genuine parts guarantee, and a 15-day labor warranty for complete peace of mind.",
    ],
    includedItems: [
      "Premium synthetic engine oil replacement & new oil filter swap",
      "Carburetor deep cleaning or Fuel Injection (FI) nozzle spray clean",
      "Engine tappet valve clearance inspection & gap adjustment",
      "Front & rear brake disc pad / shoe replacement & fluid check",
      "Drive chain degreasing, tension alignment & lube",
      "Spark plug replacement & air filter element swap",
    ],
    faqs: [
      {
        q: "How often should I book a Comprehensive Bike Service?",
        a: "We recommend a comprehensive service every 6 months or 5,000 km to maintain optimal performance.",
      },
    ],
    keywords: [
      "comprehensive bike service",
      "full bike service at home",
      "motorcycle service near me",
      "complete bike checkup",
    ],
  },
  "engine-repair": {
    serviceId: "engine-repair",
    category: "Powertrain & Engine",
    title: "Bike Engine Repair & Overhaul",
    lead: "Experiencing engine knocking, metallic noise, white exhaust smoke, or loss of pickup? Get expert doorstep engine diagnostics, valve clearance tuning, and clutch plate overhauls.",
    startingPrice: "₹699",
    avgTime: "45 Mins",
    warranty: "15 Days Mechanical Warranty",
    descriptionParagraphs: [
      "Engine issues like valve noise, worn piston rings, slipping clutch plates, or clogged FI nozzles degrade performance and threaten internal engine components.",
      "FixWheel's senior engine mechanics bring compression gauges, feeler gauges, clutch pullers, and genuine replacement parts to your home. We diagnose engine noises, adjust tappet clearance, replace worn clutch plates, and clean throttle bodies.",
      "Restore factory-smooth acceleration, silent idling, and peak power without leaving your bike at local garages for days.",
    ],
    includedItems: [
      "Tappet valve clearance setting (feeler gauge tuning) & timing chain check",
      "Clutch assembly overhaul, friction plate & steel disc replacement",
      "Carburetor float & jet cleaning / FI error code scan",
      "Engine compression testing & spark plug inspection",
    ],
    faqs: [
      {
        q: "Can major engine repairs be done at my home?",
        a: "Yes! Tappet valve settings, clutch plate swaps, carburetor cleaning, and sensor diagnostics are easily performed on-site by our mobile engine specialists.",
      },
    ],
    keywords: [
      "bike engine repair",
      "clutch plate replacement near me",
      "tappet setting bike",
      "motorcycle mechanic at home",
    ],
  },
  "battery-replacement": {
    serviceId: "battery-replacement",
    category: "Electrical Systems",
    title: "Bike Battery Replacement at Doorstep",
    lead: "Facing self-start failure, dim headlights, or weak horn sounds? Get rapid doorstep bike battery testing and instant replacement with fresh, zero-maintenance batteries from top brands.",
    startingPrice: "₹1,299",
    avgTime: "45 Mins",
    warranty: "Official Brand Warranty Included",
    descriptionParagraphs: [
      "Extreme weather accelerates motorcycle battery cell degradation. When your battery fails, getting stuck in traffic or a parking lot is frustrating.",
      "FixWheel carries brand new, 100% factory-charged batteries (Exide, Amaron, SF Sonic) directly to your location with warranty cards.",
      "We test your charging stator coil, clean terminal corrosion, swap the dead battery, and hand over the official manufacturer warranty card.",
    ],
    includedItems: [
      "On-site battery digital voltage & cold cranking amps (CCA) test",
      "Stator coil charging current & RR unit voltage regulator test",
      "Installation of fresh 100% genuine zero-maintenance battery (Exide / Amaron)",
      "Battery terminal corrosion cleanup & anti-rust vaseline coating",
    ],
    faqs: [
      {
        q: "Do your batteries come with official brand warranty?",
        a: "Yes! Every battery comes with an official paper or digital warranty card from Exide or Amaron valid nationwide.",
      },
    ],
    keywords: [
      "bike battery replacement",
      "amaron bike battery near me",
      "exide motorcycle battery doorstep",
      "bike battery mechanic near me",
    ],
  },
  "brake-repair": {
    serviceId: "brake-repair",
    category: "Safety Systems",
    title: "Bike Brake Repair & Pad Replacement",
    lead: "Brakes are your two-wheeler's most critical safety component. Squeaking noise, loose brake levers, or reduced stopping distance require immediate expert repair right at your doorstep.",
    startingPrice: "₹299",
    avgTime: "45 Mins",
    warranty: "15 Days Labor Warranty",
    descriptionParagraphs: [
      "Stop-and-go commuting wears down drum brake shoes and disc brake pads quickly. Riding with worn brake linings damages the brake rotor and decreases emergency braking control.",
      "FixWheel mobile mechanics carry OEM ceramic disc pads, high-friction drum shoes, DOT 4 brake fluid, and caliper grease to your home.",
      "We replace worn pads, bleed air bubbles from hydraulic lines, adjust cable tension, and de-glaze drum linings.",
    ],
    includedItems: [
      "Front & rear brake disc pad / drum shoe wear inspection",
      "Installation of genuine OEM brake pads / shoes",
      "Hydraulic brake line fluid flush & DOT 4 air bleeding",
      "Brake caliper pin greasing & rotor de-glazing",
    ],
    faqs: [
      {
        q: "How do I know if my bike brake pads need replacement?",
        a: "If you hear metallic squeaking when braking or if the brake lever feels spongy, your pads need immediate replacement.",
      },
    ],
    keywords: [
      "bike brake repair",
      "disc brake pad replacement near me",
      "bike brake mechanic near me",
      "two wheeler brake repair",
    ],
  },
  "tyre-replacement": {
    serviceId: "tyre-replacement",
    category: "Wheels & Tyres",
    title: "Bike Tyre Replacement & Repair at Home",
    lead: "Worn tyre treads or frequent punctures compromise wet road grip and emergency braking safety. Get doorstep tubeless tyre installation with fresh air valves and air pressure calibration.",
    startingPrice: "₹1,199",
    avgTime: "45 Mins",
    warranty: "Manufacturer Tyre Warranty Included",
    descriptionParagraphs: [
      "Riding on bald or cracked tyres increases braking distances, causes wheel wobbling at high speeds, and puts you at risk of sudden blowouts.",
      "FixWheel provides doorstep tubeless & tube-type tyre replacements from top brands (MRF, CEAT, TVS Eurogrip, Michelin, Apollo) with scratch-free rim installation tools.",
      "Our mechanics replace the air valve pin, inspect brake shoes, calibrate tire pressure, and dispose of old tires safely.",
    ],
    includedItems: [
      "Doorstep delivery & scratch-free rim tubeless tyre fitting",
      "Installation of fresh tubeless air valve stem & pin",
      "Tire air pressure calibration to manufacturer PSI specs",
      "Brake shoe & wheel bearing wear inspection during dismount",
    ],
    faqs: [
      {
        q: "What tyre brands do you provide for doorstep installation?",
        a: "We supply brand new MRF Zapper, CEAT Zoom, TVS Eurogrip, and Michelin tyres with full manufacturer warranty.",
      },
    ],
    keywords: [
      "bike tyre replacement",
      "tubeless tyre fitting at home",
      "ceat bike tyre near me",
      "mrf tyre replacement doorstep",
    ],
  },
  "general-washing": {
    serviceId: "general-washing",
    category: "Cleaning & Polish",
    title: "Bike General Washing & Detailing at Home",
    lead: "Restore your two-wheeler's showroom shine without waiting in long garage queues. Get portable high-pressure foam washing, alloy degreasing, microfiber drying, and anti-rust gloss polishing right at your doorstep.",
    startingPrice: "₹249",
    avgTime: "45 Mins",
    warranty: "100% Satisfaction Guarantee",
    descriptionParagraphs: [
      "Commuting through sludge and dusty roads builds up grime, grease, and salt deposits on your bike's engine fins, wheel hubs, and underbody.",
      "FixWheel's mobile washing unit arrives at your home or office parking equipped with cordless high-pressure foam washers, pH-neutral car shampoos, chain degreaser sprays, and hydrophobic wax polishes.",
      "We safely clean sensitive electrical components, degrease the drive chain, hand-dry with plush microfiber towels, and apply gloss protection.",
    ],
    includedItems: [
      "Portable high-pressure snow foam wash with pH-balanced shampoo",
      "Engine block, crankcase fins & alloy wheel rim deep degreasing",
      "Plush microfiber towel hand drying & air blower moisture eviction",
      "Drive chain cleaning & high-viscosity spray lube application",
    ],
    faqs: [
      {
        q: "Do I need to provide water or electricity for doorstep bike washing?",
        a: "No! Our mobile wash vans carry onboard water tanks and battery-powered high-pressure washers.",
      },
    ],
    keywords: [
      "bike washing near me",
      "doorstep bike foam wash",
      "bike pressure wash at home",
      "scooty cleaning service",
    ],
  },
  "premium-bike-service": {
    serviceId: "premium-bike-service",
    category: "High Performance",
    title: "Premium & Superbike Service at Doorstep",
    lead: "High-displacement motorcycles require precision torque settings, double-ester synthetic oils (Motul 300V/7100), coolant flushes, and delicate care. Get specialized superbike mechanics at your doorstep.",
    startingPrice: "₹1,499",
    avgTime: "45 Mins",
    warranty: "15 Days Premium Labor Warranty",
    descriptionParagraphs: [
      "Performance motorcycles like Kawasaki Ninja 300/400, KTM Duke 390, Bajaj Dominar 400, Harley-Davidson X440, Triumph Speed 400, and BMW G310 require strict mechanical tolerances.",
      "FixWheel dispatches specialized superbike technicians equipped with padded work mats, torque wrenches, coolant flushers, and digital multimeters.",
      "We handle Motul 300V/7100 fully synthetic oil swaps, radiator fin cleaning, high-speed disc brake pad inspections, and laser chain alignments.",
    ],
    includedItems: [
      "Motul 300V Factory Line / 7100 100% Synthetic double-ester oil swap",
      "OEM high-flow oil filter replacement & magnetic drain bolt torqueing",
      "Radiator coolant flush & high-efficiency coolant refill",
      "Laser drive chain alignment, tensioning & high-tack race lube",
    ],
    faqs: [
      {
        q: "Do you service Kawasaki Ninja, BMW G310, and Triumph Speed 400 at home?",
        a: "Yes! Our master technicians are specially trained in handling premium bikes and superbikes with dedicated padded tools.",
      },
    ],
    keywords: [
      "superbike service near me",
      "kawasaki ninja repair at home",
      "bmw g310 service doorstep",
      "premium bike mechanic near me",
    ],
  },
};
