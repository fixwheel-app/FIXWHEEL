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
    startingPrice: "₹850",
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
    startingPrice: "₹799",
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
    startingPrice: "₹850",
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
    startingPrice: "₹550",
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
    startingPrice: "₹550",
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
        a: "The Basic Service is ₹550 for commuter bikes and scooters (0-249cc). For comprehensive periodic servicing with genuine engine oil and filter replacement, you can book our 'Service with Engine Oil' package starting at ₹999.",
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
  "service-engine-oil": {
    serviceId: "service-engine-oil",
    category: "Periodic Maintenance",
    title: "Bike Service with Engine Oil at Doorstep",
    lead: "Complete 21-point general service bundled with fresh sealed OEM synthetic engine oil and oil filter replacement at your home or office.",
    startingPrice: "₹999",
    avgTime: "45 Mins",
    warranty: "15 Days Service & Oil Guarantee",
    descriptionParagraphs: [
      "This package combines FixWheel's general service inspection with an engine oil and oil filter replacement for a complete periodic maintenance visit.",
      "The mechanic checks the brakes, chain, spark plug, air filter, cables, battery, and tyre condition before draining the used oil and fitting the correct sealed oil and filter for the selected motorcycle.",
      "All labor and service items are explained before work begins, and the package rate is selected from the bike's engine-capacity tier.",
    ],
    includedItems: [
      "Complete 21-point periodic maintenance inspection",
      "Sealed OEM-specification synthetic engine oil replacement",
      "Engine oil filter replacement",
      "Drive chain cleaning, adjustment & lubrication",
      "Brake, cable, battery & tyre safety checks",
    ],
    faqs: [
      {
        q: "What is included in Service with Engine Oil?",
        a: "It includes the complete general service checklist, sealed OEM-specification engine oil, an oil filter replacement, and the listed adjustments and safety checks.",
      },
      {
        q: "How is the exact package price selected?",
        a: "The package starts at ₹999, and the applicable rate is selected from the official engine-capacity tier for your bike.",
      },
    ],
    keywords: [
      "bike service with engine oil",
      "engine oil bike service at home",
      "doorstep periodic bike service",
      "motorcycle oil filter replacement",
    ],
  },
  "jump-start": {
    serviceId: "jump-start",
    category: "Emergency Assistance",
    title: "Emergency Bike Battery Jump Start at Doorstep",
    lead: "Stranded with a dead bike battery? FixWheel dispatches mobile mechanics with heavy-duty booster packs to jump start your two-wheeler in 30-45 minutes.",
    startingPrice: "₹399",
    avgTime: "30 Mins",
    warranty: "Instant Startup Guarantee",
    descriptionParagraphs: [
      "A drained battery can leave a motorcycle or scooter unable to self-start at home, work, or the roadside.",
      "FixWheel mechanics arrive with a heavy-duty booster pack, test the battery voltage and charging output, clean the terminals, and safely restart the two-wheeler.",
      "If testing indicates that the battery or charging system needs further work, the mechanic explains the finding before any additional service is considered.",
    ],
    includedItems: [
      "Heavy-duty battery booster jump start",
      "Battery voltage and charging-output test",
      "Battery terminal inspection and cleaning",
      "Basic alternator and regulator charging check",
      "Restart verification before job completion",
    ],
    faqs: [
      {
        q: "Can you jump start a bike at home or roadside?",
        a: "Yes. A mobile mechanic can perform the jump start at your home, office, parking area, or accessible roadside location.",
      },
      {
        q: "Does a jump start mean my battery must be replaced?",
        a: "No. The mechanic tests the battery and charging output first and explains whether the issue is temporary discharge or requires further attention.",
      },
    ],
    keywords: [
      "bike jump start near me",
      "motorcycle battery jump start",
      "scooter jump start at home",
      "emergency bike mechanic",
    ],
  },
  "puncture": {
    serviceId: "puncture",
    category: "Tyre & Wheel",
    title: "Doorstep Bike Puncture Repair",
    lead: "Flat tyre at home, office, or roadside? Verified mechanics fix tubeless and tube tyre punctures on-site with vulcanized rubber strips and portable inflators.",
    startingPrice: "₹399",
    avgTime: "30 Mins",
    warranty: "100% Seal Guarantee",
    descriptionParagraphs: [
      "A flat tyre should be inspected promptly to locate the puncture and rule out valve or rim leakage.",
      "FixWheel mechanics bring portable inflation equipment and puncture tools to repair eligible tube and tubeless tyres at the vehicle's location.",
      "The repaired tyre is inflated to the correct pressure and checked for leakage before the bike is returned to use.",
    ],
    includedItems: [
      "Puncture location and tyre-condition inspection",
      "Tube or tubeless puncture repair as applicable",
      "High-grade vulcanized repair material",
      "Valve core inspection",
      "Tyre pressure check and inflation",
    ],
    faqs: [
      {
        q: "Do you repair both tube and tubeless bike tyres?",
        a: "Yes. The mechanic inspects the tyre and performs the appropriate on-site repair when its condition allows a safe puncture fix.",
      },
      {
        q: "Can puncture repair be done at my roadside location?",
        a: "Yes, provided the motorcycle is parked in a safe and accessible location for the mechanic to work.",
      },
    ],
    keywords: [
      "bike puncture repair near me",
      "doorstep tyre puncture repair",
      "tubeless bike puncture service",
      "scooter puncture mechanic",
    ],
  },
  "running-repair": {
    serviceId: "running-repair",
    category: "Quick Mechanical Fixes",
    title: "Running Repair & Minor Adjustments at Doorstep",
    lead: "Snapped clutch cable, loose chain, faulty headlight bulb, or broken brake lever? Get quick mechanical repairs and tune-ups right at your parking spot.",
    startingPrice: "₹399",
    avgTime: "30 Mins",
    warranty: "15 Days Labor Warranty",
    descriptionParagraphs: [
      "Minor mechanical faults can make a two-wheeler unsafe or inconvenient even when the engine is otherwise running correctly.",
      "FixWheel's running repair service covers diagnosis and eligible on-site adjustments or replacements for controls, cables, levers, lights, mirrors, and drive-chain issues.",
      "The mechanic confirms any required spare part and its cost before installation.",
    ],
    includedItems: [
      "Clutch and accelerator cable inspection or replacement labor",
      "Chain slack adjustment and lubrication",
      "Lever, mirror and control tightening",
      "Headlight and indicator bulb fitting labor",
      "On-site mechanical fault diagnosis",
    ],
    faqs: [
      {
        q: "What problems are covered by Running Repair?",
        a: "It covers minor mechanical fixes such as cable, lever, mirror, bulb, chain, and control adjustments that can be completed safely at the vehicle's location.",
      },
      {
        q: "Are replacement parts included in the starting price?",
        a: "The starting price is for the applicable service labor. Any required replacement part is identified and confirmed with you before fitting.",
      },
    ],
    keywords: [
      "running bike repair",
      "minor bike repair at home",
      "clutch cable replacement near me",
      "doorstep motorcycle mechanic",
    ],
  },
  "engine-half": {
    serviceId: "engine-half",
    category: "Engine Overhaul",
    title: "Bike Engine Half Overhaul Service",
    lead: "White smoke or engine compression loss? Top-end overhaul including piston ring renewal, valve lapping, cylinder head servicing, and gasket replacement.",
    startingPrice: "₹4,500",
    avgTime: "Workshop / Doorstep",
    warranty: "30 Days Engine Warranty",
    descriptionParagraphs: [
      "Top-end engine wear may cause white smoke, oil consumption, reduced compression, difficult starting, and loss of power.",
      "A half overhaul focuses on the cylinder head, valves, piston rings, gaskets, and related top-end components after inspection confirms the required work.",
      "The mechanic documents the diagnosis and confirms parts and workshop requirements before dismantling begins.",
    ],
    includedItems: [
      "Engine compression and top-end diagnosis",
      "Cylinder head and valve inspection",
      "Piston and piston-ring renewal labor",
      "Valve lapping and cylinder-head servicing",
      "Head gasket and seal replacement labor",
    ],
    faqs: [
      {
        q: "When is a half engine overhaul recommended?",
        a: "It may be recommended after inspection confirms top-end compression loss, valve leakage, piston-ring wear, or related cylinder-head problems.",
      },
      {
        q: "Can every half overhaul be completed at the doorstep?",
        a: "Diagnosis can begin at your location. Work requiring machining or controlled workshop equipment is completed through the appropriate workshop process.",
      },
    ],
    keywords: [
      "bike engine half overhaul",
      "piston ring replacement bike",
      "cylinder head bike repair",
      "motorcycle compression repair",
    ],
  },
  "engine-full": {
    serviceId: "engine-full",
    category: "Engine Overhaul",
    title: "Complete Bike Engine Full Overhaul",
    lead: "Complete crankcase rebuild including crankshaft bearing replacement, connecting rod, gearbox rebuild, clutch assembly, and chemical decarb.",
    startingPrice: "₹7,999",
    avgTime: "Workshop Care",
    warranty: "60 Days Engine Warranty",
    descriptionParagraphs: [
      "A full overhaul is reserved for confirmed internal engine damage or wear involving the crankcase, crankshaft, connecting rod, gearbox, clutch, or multiple sealing surfaces.",
      "The engine is inspected and dismantled through the controlled workshop process before worn components, bearings, seals, and gaskets are replaced as approved.",
      "Final assembly includes timing, clutch, gearbox, compression, leakage, and operating checks before delivery.",
    ],
    includedItems: [
      "Complete engine teardown and internal inspection",
      "Crankshaft, connecting-rod and bearing assessment",
      "Gearbox and clutch assembly inspection",
      "Chemical cleaning and carbon removal",
      "Gasket, seal, timing and final running checks",
    ],
    faqs: [
      {
        q: "How is a full overhaul different from a half overhaul?",
        a: "A full overhaul includes the lower engine, crankcase, crankshaft, bearings, gearbox, and clutch as required, while a half overhaul focuses on the top end.",
      },
      {
        q: "Is a full engine overhaul completed at home?",
        a: "Initial inspection and pickup coordination can begin at your location, while the rebuild is completed under workshop care.",
      },
    ],
    keywords: [
      "bike engine full overhaul",
      "motorcycle engine rebuild",
      "crankshaft bearing replacement",
      "bike gearbox overhaul",
    ],
  },
  "carburetor-cleaning": {
    serviceId: "carburetor-cleaning",
    category: "Fuel Systems",
    title: "Carburetor Cleaning & Jet Tuning at Doorstep",
    lead: "Cold starting issues, rough idling, or poor mileage? Get ultrasonic carburetor jet cleaning, float chamber flushing, and air-fuel mixture tuning.",
    startingPrice: "₹199",
    avgTime: "35 Mins",
    warranty: "15 Days Tuning Warranty",
    descriptionParagraphs: [
      "Deposits inside the carburetor jets and float chamber can restrict fuel flow and cause poor starting, unstable idle, hesitation, or reduced mileage.",
      "The service cleans the accessible carburetor passages, jets, and float chamber before restoring the idle and air-fuel settings.",
      "The motorcycle is started and checked for stable idling and throttle response after reassembly.",
    ],
    includedItems: [
      "Carburetor removal and condition inspection",
      "Jet and passageway deposit cleaning",
      "Float chamber flushing",
      "Idle speed and air-fuel mixture adjustment",
      "Post-service starting and throttle-response check",
    ],
    faqs: [
      {
        q: "What symptoms indicate a dirty carburetor?",
        a: "Common symptoms include difficult cold starts, rough idling, hesitation during acceleration, stalling, and reduced fuel efficiency.",
      },
      {
        q: "Is carburetor cleaning suitable for fuel-injected bikes?",
        a: "No. Fuel-injected motorcycles use a different fuel system and should be inspected using the appropriate injector and OBD diagnostic process.",
      },
    ],
    keywords: [
      "bike carburetor cleaning",
      "carburetor jet cleaning near me",
      "bike rough idle repair",
      "motorcycle carb tuning",
    ],
  },
  "obd-inspection": {
    serviceId: "obd-inspection",
    category: "Computer Diagnostics",
    title: "BS6 Bike OBD Scanner Inspection at Doorstep",
    lead: "Check Engine Light (CEL) on? Digital OBD-II scanner diagnostics for all BS6 fuel-injected bikes to scan, diagnose, and clear ECU error codes.",
    startingPrice: "₹199",
    avgTime: "30 Mins",
    warranty: "Digital Health Report Included",
    descriptionParagraphs: [
      "Modern BS6 fuel-injected motorcycles store diagnostic trouble codes when the ECU detects a sensor, electrical, or emissions-system fault.",
      "FixWheel connects a compatible handheld scanner, reads the stored codes and available sensor values, and explains the diagnostic result before any repair is proposed.",
      "Codes are cleared only after the recorded fault and appropriate next step have been reviewed.",
    ],
    includedItems: [
      "Compatible OBD diagnostic scanner connection",
      "ECU diagnostic trouble code reading",
      "Available sensor and voltage-value review",
      "Check Engine Light fault assessment",
      "Digital diagnostic health report",
    ],
    faqs: [
      {
        q: "Can an OBD scan identify why the Check Engine Light is on?",
        a: "It identifies stored ECU fault codes and available sensor information, which helps the mechanic isolate the system that needs further inspection.",
      },
      {
        q: "Does clearing an error code repair the underlying fault?",
        a: "No. A code should only be cleared after its cause is understood; the mechanic explains any required repair separately.",
      },
    ],
    keywords: [
      "bike OBD scanner inspection",
      "BS6 bike diagnostics",
      "check engine light bike",
      "motorcycle ECU scan near me",
    ],
  },
  "disc-replacement": {
    serviceId: "disc-replacement",
    category: "Braking Systems",
    title: "Disc Brake Pad & Rotor Replacement at Doorstep",
    lead: "Squealing brakes or spongy lever? Mobile mechanics replace worn ceramic/organic disc pads, clean caliper pistons, and bleed hydraulic brake lines.",
    startingPrice: "₹199",
    avgTime: "35 Mins",
    warranty: "15 Days Labor Warranty",
    descriptionParagraphs: [
      "Worn pads, contaminated calipers, trapped air, or a damaged rotor can reduce braking response and produce noise or lever softness.",
      "The mechanic inspects pad thickness, rotor condition, caliper movement, fluid level, and lever feel before confirming the required work.",
      "After replacement or servicing, the brake is tested for correct operation before the job is completed.",
    ],
    includedItems: [
      "Disc pad and rotor condition inspection",
      "Organic or sintered brake pad fitting labor",
      "Caliper piston and slider-pin cleaning",
      "Hydraulic brake-line bleeding when required",
      "Brake lever feel and stopping-response check",
    ],
    faqs: [
      {
        q: "How do I know if my disc brake pads need replacement?",
        a: "Grinding or squealing noise, reduced braking response, and visibly thin friction material are common warning signs that require inspection.",
      },
      {
        q: "Is the replacement brake pad included in the starting price?",
        a: "The starting price is the applicable service labor. The correct replacement pad or rotor is confirmed separately before installation.",
      },
    ],
    keywords: [
      "bike disc brake pad replacement",
      "motorcycle rotor replacement",
      "bike brake bleeding near me",
      "doorstep brake mechanic",
    ],
  },
  "chain-sprocket": {
    serviceId: "chain-sprocket",
    category: "Drivetrain",
    title: "Chain & Sprocket Replacement at Doorstep",
    lead: "Worn sprockets cause chain slipping and sluggish acceleration. Get heavy-duty front/rear sprockets and O-ring drive chain kit replaced at your doorstep.",
    startingPrice: "₹299",
    avgTime: "45 Mins",
    warranty: "15 Days Workmanship Warranty",
    descriptionParagraphs: [
      "A stretched chain or hooked sprocket teeth can create noise, uneven power delivery, excessive slack, and unsafe chain movement.",
      "The mechanic inspects the full drive set, removes the worn chain and sprockets, fits the approved replacement kit, and aligns the rear wheel.",
      "Final chain slack and lubrication are checked against the motorcycle's requirements before completion.",
    ],
    includedItems: [
      "Drive chain and sprocket wear inspection",
      "Front and rear sprocket replacement labor",
      "O-ring or X-ring chain installation labor",
      "Rear wheel and chain alignment",
      "Final chain slack setting and lubrication",
    ],
    faqs: [
      {
        q: "Should the chain and sprockets be replaced together?",
        a: "When both are worn, replacing the complete matched set prevents an old component from accelerating wear on the new one.",
      },
      {
        q: "Are the chain and sprocket parts included in the starting price?",
        a: "The starting price is the applicable replacement labor. The correct drive kit and its cost are confirmed for your motorcycle before fitting.",
      },
    ],
    keywords: [
      "bike chain sprocket replacement",
      "motorcycle chain kit fitting",
      "bike chain slipping repair",
      "doorstep drivetrain service",
    ],
  },
  "pick-drop": {
    serviceId: "pick-drop",
    category: "Transit & Workshop",
    title: "Two-Wheeler Pick & Drop Service",
    lead: "Need extensive engine repair or paintwork? Safe GPS-tracked transit pickup from your location to our specialized workshop and doorstep return.",
    startingPrice: "₹199",
    avgTime: "Same-Day Pickup",
    warranty: "Transit Insured",
    descriptionParagraphs: [
      "Some repairs require workshop equipment, controlled dismantling space, machining, or extended testing that cannot be completed safely at the roadside or parking area.",
      "FixWheel coordinates vehicle pickup, workshop transfer, job assessment, and return delivery for approved major work.",
      "The service details and repair scope are confirmed before workshop work proceeds.",
    ],
    includedItems: [
      "Pickup scheduling from an accessible location",
      "GPS-tracked workshop transit",
      "Vehicle handover and condition record",
      "Workshop delivery coordination",
      "Return delivery after approved work",
    ],
    faqs: [
      {
        q: "Which repairs may require Pick & Drop?",
        a: "Major overhauls, machining, paintwork, or repairs requiring controlled workshop equipment may need vehicle pickup after inspection.",
      },
      {
        q: "Does the Pick & Drop charge include the repair itself?",
        a: "No. It covers the applicable transit service; the workshop diagnosis and repair are quoted and approved separately.",
      },
    ],
    keywords: [
      "bike pick and drop service",
      "motorcycle workshop pickup",
      "two wheeler towing service",
      "bike repair pickup near me",
    ],
  },
  "ev-service": {
    serviceId: "ev-service",
    category: "EV Specialist",
    title: "Electric Scooter Periodic Service at Doorstep",
    lead: "Complete electronic BMS scan, high-voltage wiring inspection, drive belt adjustment, and brake servicing for Ola, Ather, TVS iQube, and Chetak.",
    startingPrice: "₹799",
    avgTime: "45 Mins",
    warranty: "15 Days EV Warranty",
    descriptionParagraphs: [
      "Electric scooters need periodic checks for the battery-management system, high-voltage connectors, motor controls, brakes, tyres, suspension, and drive components.",
      "FixWheel's EV service uses appropriate diagnostic and electrical test equipment to inspect the scooter without disturbing sealed battery-pack components.",
      "The mechanic records the findings and explains any replacement or manufacturer-level repair that may be required.",
    ],
    includedItems: [
      "BMS health and available cell-balance diagnostic",
      "High-voltage connector and wiring inspection",
      "Hub motor and throttle-sensor check",
      "Brake and regenerative-braking inspection",
      "Tyre, suspension and drive-component check",
    ],
    faqs: [
      {
        q: "Which electric scooters can FixWheel inspect?",
        a: "The service covers supported electric scooters including common Ola, Ather, TVS iQube, and Chetak models, subject to diagnostic compatibility.",
      },
      {
        q: "Do you open sealed EV battery packs at the doorstep?",
        a: "No. The doorstep service focuses on safe diagnostics and external systems; sealed-pack repair is handled only through an appropriate specialist process.",
      },
    ],
    keywords: [
      "electric scooter service",
      "EV scooter repair at home",
      "BMS diagnostic service",
      "Ather Ola iQube service",
    ],
  },
  "oil-change": {
    serviceId: "oil-change",
    category: "Fluid & Lubrication",
    title: "Bike Engine Oil Change at Doorstep",
    lead: "Engine oil is your bike's lifeblood. Prevent engine overheating and friction wear with 100% sealed genuine engine oil replacement (Motul, Yamalube, Castrol, HMSI, Liquid Gun) done at your home in 30 minutes.",
    startingPrice: "₹999",
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
    startingPrice: "₹999",
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
    startingPrice: "₹4,500",
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
    lead: "Facing self-start failure, dim headlights, or weak horn sounds? Get rapid doorstep bike battery testing and professional installation starting at ₹99 labor.",
    startingPrice: "₹99",
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
    startingPrice: "₹199",
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
  "premium-bike-service": {
    serviceId: "premium-bike-service",
    category: "High Performance",
    title: "Premium & Superbike Service at Doorstep",
    lead: "High-displacement motorcycles require precision torque settings, double-ester synthetic oils (Motul 300V/7100), coolant flushes, and delicate care. Get specialized superbike mechanics at your doorstep.",
    startingPrice: "₹1,500",
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
