export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  slug?: string;
}

export interface BlogContentSection {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Maintenance" | "Tips & Tricks" | "EV Corner" | "Buying Guide";
  date: string;
  readTime: string;
  image: string;
  author: BlogAuthor;
  keywords: string[];
  content: BlogContentSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bike-engine-oil-guide",
    title: "Which Engine Oil Grade is Right for Your Bike? | Indian Commuters Guide",
    excerpt: "Confused between 10W-30, 20W-40, and 20W-50? Here is how to choose the right viscosity grade and oil type for your bike or scooter to avoid engine heating.",
    category: "Maintenance",
    date: "July 18, 2026",
    readTime: "8 min read",
    image: "/blog_oil.jpg",
    author: {
      name: "Zakir Hussain",
      role: "Senior Master Mechanic & Automotive Lead",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
      slug: "zakir-hussain"
    },
    keywords: ["bike engine oil grade", "honda activa engine oil", "royal enfield engine oil", "synthetic vs mineral oil", "bike engine heating solution"],
    content: [
      {
        type: "paragraph",
        text: "Daily commuting in bumper-to-bumper city traffic across Delhi-NCR, Mumbai, or Bengaluru subjects two-wheeler engines to extreme thermal stress. Unlike passenger cars, which are liquid-cooled and operate at low engine speeds (typically 1,500 to 3,500 RPM), the majority of motorcycles and scooters on Indian roads are air-cooled single cylinders that operate at significantly higher RPMs—often reaching 6,000 to 10,000 RPM. During peak summer months when ambient temperatures exceed 40°C, engine oil inside an air-cooled crankcase can reach internal temperatures above 120°C. Under these harsh conditions, low-grade or degraded oil quickly breaks down, losing its protective film strength and viscosity."
      },
      {
        type: "paragraph",
        text: "When engine oil thins out beyond safe limits, metal components like the piston rings, cylinder wall, camshaft lobes, and rocker arms rub directly against each other. This metal-on-metal friction generates excessive heat, causes horsepower loss, creates harsh gear-shifting feedback, and accelerates engine wear. If ignored, it leads to piston ring scoring, oil burning (blue exhaust smoke), and severe engine seizure requiring expensive overhauls."
      },
      {
        type: "heading",
        text: "The Wet-Clutch Difference: Why Car Oils Will Ruin Your Motorcycle"
      },
      {
        type: "paragraph",
        text: "One of the most common mistakes two-wheeler owners make is topping up their bike's crankcase with leftover passenger car engine oil. In a four-wheeler, the engine oil only lubricates the pistons and crankshaft, while the transmission and clutch operate in separate fluid housings. In contrast, 90% of motorcycles feature a wet-clutch transmission where a single shared pool of engine oil lubricates the hot cylinder, transmission gears, and wet clutch plates simultaneously."
      },
      {
        type: "paragraph",
        text: "Passenger car engine oils are formulated with Energy Conserving (EC) friction-reducing additives (like molybdenum disulfide) to maximize fuel economy. If these friction modifiers coat a motorcycle's wet clutch plates, they destroy the friction needed for the clutch discs to engage properly. The result is severe clutch slippage, sluggish acceleration despite high engine revs, rapid clutch plate burnout, and heavy gear transmission shudder. Always choose motorcycle oils certified under the Japanese Automotive Standards Organization (JASO) MA or JASO MA2 standards. Automatic gearless scooters (like the Honda Activa, TVS Jupiter, or Suzuki Access) utilize a dry centrifugal clutch with a separate rear final-drive gear oil box, meaning they require JASO MB certified oils designed specifically for low friction."
      },
      {
        type: "heading",
        text: "Decoding Viscosity Grades (10W-30, 20W-40, 20W-50)"
      },
      {
        type: "paragraph",
        text: "Viscosity measures an oil's resistance to flow. The numbers printed on the bottle (such as 10W-30) follow the Society of Automotive Engineers (SAE) grading system. The first number followed by 'W' indicates cold-start viscosity at sub-zero temperatures, while the second number represents viscosity at 100°C engine operating temperature:"
      },
      {
        type: "list",
        items: [
          "10W-30 (JASO MB / MA): Specially formulated for modern light-commuter engines and gearless scooters (Honda Activa, Honda Shine, Hero Splendor, SP125). It has a low cold viscosity to flow instantly to the cylinder head upon startup, minimizing starter motor strain and maximizing fuel efficiency.",
          "20W-40 (JASO MA2): The traditional standard for older generation commuter bikes (100cc to 150cc) operating in hot climates. It provides a thicker cushion for gears and valve gear in high-mileage air-cooled engines.",
          "20W-50 (JASO MA2): A heavy-duty, high-shear viscosity oil recommended for large air-cooled single cylinders like the Royal Enfield Classic 350, Bullet, and high-strung air/oil-cooled engines like the Bajaj Pulsar 220F. The high hot-viscosity index (50) keeps the lubrication film intact even during prolonged highway runs in peak summer heat.",
          "15W-50 (JASO MA2 Fully Synthetic): Recommended for modern adventure tourers and heavy cruisers (Royal Enfield Himalayan, Jawa 42, Yezdi Adventure). It offers excellent cold-flow lubrication while maintaining exceptional thermal resistance under heavy touring payloads."
        ]
      },
      {
        type: "heading",
        text: "Mineral vs. Semi-Synthetic vs. Fully Synthetic"
      },
      {
        type: "paragraph",
        text: "Mineral Oil: Refined directly from crude petroleum through basic distillation. Mineral oils are cost-effective and suitable for engine break-in periods or light daily urban commuting on small-displacement bikes (100cc-110cc). However, their molecular structures vary in size, causing them to oxidize and break down quickly under sustained heat and high RPMs."
      },
      {
        type: "paragraph",
        text: "Semi-Synthetic Oil: A high-performance blend of mineral oil and up to 30% synthetic base stocks. Semi-synthetics offer superior thermal breakdown resistance compared to pure mineral oils while remaining budget-friendly. They are ideal for 125cc-160cc street commuters (such as the TVS Apache RTR, Hero Glamour, or Suzuki Gixxer)."
      },
      {
        type: "paragraph",
        text: "Fully Synthetic Oil: Synthesized chemically from pure base molecules (Polyalphaolefins & Esters) to ensure 100% uniform molecular size. Fully synthetic oils deliver outstanding film strength, resist thermal breakdown up to 160°C, reduce internal engine temperatures by 5-10°C, and maintain stable viscosity over thousands of kilometers. They are mandatory for high-compression, liquid-cooled engines like the KTM Duke 200/390, Yamaha R15 V4, and Kawasaki Ninja 300."
      },
      {
        type: "heading",
        text: "Oil Change Intervals: When is it Time?"
      },
      {
        type: "paragraph",
        text: "Operating a vehicle beyond its oil change threshold turns the lubricant into a dark, sludge-filled liquid contaminated with unburnt fuel particles, carbon deposits, and metallic dust. This sludge clogs delicate internal oil passages, leading to starved camshaft bearings and valve gear failure. Follow these recommended replacement intervals:"
      },
      {
        type: "list",
        items: [
          "Mineral Oil: Change every 1,500 to 2,000 km.",
          "Semi-Synthetic Oil: Change every 2,500 to 3,500 km.",
          "Fully Synthetic Oil: Change every 5,000 to 7,500 km (always replace the oil filter simultaneously)."
        ]
      },
      {
        type: "paragraph",
        text: "Inspect your bike's oil sight glass or dipstick once a week. If the oil level drops below the lower hash mark, top it up with the exact same grade immediately. If the oil appears pitch-black, feels thin and watery between your fingers, or emits a strong burnt gasoline odor, schedule a doorstep engine oil change package with FixWheel. Our certified mechanics arrive at your home or office with genuine sealed OEM oil bottles, replace the oil filter, inspect the drain plug washer, and dispose of the used oil in an eco-friendly manner."
      }
    ]
  },
  {
    slug: "motorcycle-chain-maintenance-guide",
    title: "How to Clean and Lube Your Bike's Chain at Home: A Step-by-Step Guide",
    excerpt: "A dry or loose chain wastes engine power, creates annoying metal sounds, and wears out sprockets early. Here is a simple maintenance guide using basic garage tools.",
    category: "Maintenance",
    date: "July 17, 2026",
    readTime: "7 min read",
    image: "/blog_chain.jpg",
    author: {
      name: "Zakir Hussain",
      role: "Senior Master Mechanic & Automotive Lead",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
      slug: "zakir-hussain"
    },
    keywords: ["motorcycle chain cleaning", "how to lube bike chain", "chain sprocket price", "loose chain sound adjustment", "doorstep chain cleaning"],
    content: [
      {
        type: "paragraph",
        text: "Your motorcycle's final drive chain is responsible for transferring engine power from the front transmission sprocket to the rear wheel. Operating in an open, unsealed environment, the chain is continuously subjected to road dust, sand, rainwater, and asphalt grime. As you ride, road debris binds with fresh lubricant, creating an abrasive grinding paste that eats away at chain rollers, internal pin bushings, and sprocket teeth. Neglecting regular chain care leads to horsepower loss, harsh gear shifts, excessive noise, and premature chain-sprocket replacement."
      },
      {
        type: "paragraph",
        text: "A poorly maintained chain also stretches unevenly, creating tight and loose spots along its length. In extreme cases, a neglected chain can jump off the sprocket teeth or snap under hard acceleration. A snapped chain at speed can lock up the rear wheel, crack the engine crankcase, or cause a serious accident. Routine maintenance every 500 to 700 km will double your drivetrain's lifespan, saving you thousands of rupees."
      },
      {
        type: "heading",
        text: "Understanding O-Ring, X-Ring, and Non-O-Ring Chains"
      },
      {
        type: "paragraph",
        text: "Before cleaning your chain, it is essential to identify its construction type. Modern motorcycles above 125cc come equipped with O-ring or X-ring sealed chains. These feature tiny rubber seals sandwiched between the inner and outer side plates. These rubber rings seal factory-applied synthetic grease around the internal pins while keeping moisture and dirt out."
      },
      {
        type: "paragraph",
        text: "Standard commuter motorcycles (such as the Hero Splendor or Bajaj Platina) utilize non-O-ring unsealed chains housed inside full metal chain covers. Sealed O-ring chains require specialized care: using harsh solvents like gasoline, diesel, or brake cleaner will cause the delicate rubber O-rings to swell, crack, and dry out, causing internal grease to leak out and destroying the chain. Always use dedicated, O-ring-safe aerosol chain cleaners or clean kerosene."
      },
      {
        type: "heading",
        text: "Step-by-Step Chain Maintenance Routine"
      },
      {
        type: "paragraph",
        text: "Perform this three-step cleaning, lubrication, and adjustment routine every 500 km or after riding in heavy rain:"
      },
      {
        type: "list",
        items: [
          "1. DEEP CLEANING: Place your motorcycle on its center stand or a rear paddock stand on level ground. Ensure the engine is switched off and the transmission is in neutral. (NEVER run the engine in gear while cleaning the chain by hand, as fingers can get caught in the sprocket). Spray an O-ring-safe chain cleaner (such as Motul C1 or Kangaroo Cleaner) liberally along the entire chain length. Allow the solvent to penetrate for 3 to 5 minutes to break down hardened sludge. Use a specialized three-sided chain grunge brush to scrub the top, bottom, and side plates. Flush away the loosened debris with a final light spray, then wipe the chain completely dry using a clean microfibre cloth.",
          "2. PRECISION LUBRICATION: Allow the chain to dry for 10 minutes. Rotate the rear wheel backward by hand while spraying a dedicated sticky chain lube (such as Motul C2 or Castrol Chain Lube) directly onto the inside run of the chain. Aim the nozzle at the inner rollers and side plate gaps where the O-rings are located. Avoid spraying the outer side plates or brake disc rotors. Once applied, let the lubricant set for 20 to 30 minutes so the carrier solvents evaporate, leaving behind a tacky film that won't sling off onto your rear tire.",
          "3. SLACK MEASUREMENT & ADJUSTMENT: Measure chain slack at the midpoint between the front and rear sprockets on the bottom chain run. Push the chain up and down; standard slack should measure between 25mm and 35mm. If the chain sags beyond 40mm, loosen the main rear axle nut with a ring spanner. Turn the left and right swingarm tensioner bolts clockwise by equal turns, aligning the notch marks on both sides of the swingarm to keep the rear wheel straight. Tighten the rear axle nut to the recommended torque specifications."
        ]
      },
      {
        type: "heading",
        text: "Diagnosing Worn Sprockets & Replacement Signs"
      },
      {
        type: "paragraph",
        text: "Even with regular lubrication, drive chains and sprockets wear out over time. Inspect your drivetrain for these critical wear indicators:"
      },
      {
        type: "list",
        items: [
          "Shark-fin Tooth Wear: As sprockets wear down, the teeth become hooked and pointed like shark fins instead of having symmetrical U-shaped valleys.",
          "Kinked Links: Stiff or frozen chain links that remain bent as they pass around the sprockets indicate seized pins caused by dry O-rings.",
          "Chain Stretch Beyond Adjustment: If the rear axle tensioner block is pulled all the way back to the final swingarm mark and the chain remains loose, the chain has stretched beyond safe limits.",
          "Sprocket Pull Test: Try pulling the chain backward off the rearmost point of the rear sprocket. If you can lift the chain enough to reveal half a sprocket tooth, the chain and sprockets must be replaced as a set."
        ]
      },
      {
        type: "paragraph",
        text: "Always replace both the front sprocket, rear sprocket, and chain together as a matched kit. Installing a new chain on worn sprockets will ruin the new chain within a few hundred kilometers. If you lack paddock stands or tensioning tools at home, book a doorstep chain-sprocket service with FixWheel for professional on-site replacement."
      }
    ]
  },
  {
    slug: "electric-scooter-battery-care",
    title: "Is Your Electric Scooter Giving Less Range? 5 Battery Habits to Fix Today",
    excerpt: "Electric scooter battery packs are expensive to replace. Follow these simple daily charging and riding habits to double your battery lifespan and range.",
    category: "EV Corner",
    date: "July 16, 2026",
    readTime: "8 min read",
    image: "/blog_electric.jpg",
    author: {
      name: "Zakir Hussain",
      role: "Senior Master Mechanic & Automotive Lead",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
      slug: "zakir-hussain"
    },
    keywords: ["electric scooter battery health", "how to increase ev range", "ola s1 battery care", "ather battery lifespan", "ev doorstep inspection"],
    content: [
      {
        type: "paragraph",
        text: "The lithium-ion battery pack is the single most expensive component of any modern electric two-wheeler (such as the OLA S1 Pro, Ather 450X, TVS iQube, or Bajaj Chetak), representing up to 40% to 50% of the vehicle's total retail value. Electric scooters in India primarily use high-energy Nickel Manganese Cobalt (NMC) or Lithium Iron Phosphate (LFP) cell chemistries managed by an onboard electronic Battery Management System (BMS)."
      },
      {
        type: "paragraph",
        text: "While the BMS monitors cell voltages, balances charge states, and prevents catastrophic electrical short circuits, your daily operating habits dictate how fast the battery degrades over time. Factors like charging patterns, ambient thermal exposure, riding modes, and long-term storage habits directly influence whether your EV battery retains 90% of its health after three years or suffers severe range drop-off. By following five proven battery care principles, you can extend your pack's lifespan and preserve your vehicle's resale value."
      },
      {
        type: "heading",
        text: "1. The 20% to 80% Charge Window (Avoiding Voltage Stress)"
      },
      {
        type: "paragraph",
        text: "Lithium-ion cells experience peak mechanical and chemical stress when charged to 100% capacity (high cell voltage) or depleted to 0% (low cell voltage). Continuous 100% charging causes oxidation at the cathode and increases internal cell resistance, leading to gradual capacity loss over time."
      },
      {
        type: "paragraph",
        text: "For everyday urban commuting, maintain your battery charge between 20% and 80%. Charge the vehicle to 100% only when preparing for long weekend rides, and aim to ride the scooter shortly after charging completes rather than leaving it parked at 100% for days. Conversely, never let the battery sit below 10% overnight, as deep discharge can drop cell voltages below safe BMS recovery limits."
      },
      {
        type: "heading",
        text: "2. The Cool-Down Rule: Never Charge Immediately After Riding"
      },
      {
        type: "paragraph",
        text: "Riding an electric scooter in high-performance modes (Hyper, Warp, or Sport) or tackling steep inclines draws heavy electrical current from the battery pack, generating internal heat. Plunging the charger in immediately after parking compounding internal thermal energy with electrical charging heat. Temperatures above 45°C accelerate electrolyte degradation and cause microscopic micro-cracking across cell anodes."
      },
      {
        type: "paragraph",
        text: "Develop the habit of letting your electric scooter rest in a cool, shaded spot for 25 to 30 minutes after riding before connecting the charging cable. This simple delay allows internal pack temperatures to normalize, ensuring safer, cooler charging."
      },
      {
        type: "heading",
        text: "3. Minimize High-Frequency DC Fast Charging"
      },
      {
        type: "paragraph",
        text: "Public DC fast-charging networks (like OLA Hyperchargers or Ather Grids) offer fast top-ups on the go, but they pump massive current into the battery pack. High-rate current transfer elevates pack temperatures rapidly and promotes lithium plating on the cell anodes, permanently reducing accessible battery capacity over time."
      },
      {
        type: "paragraph",
        text: "Reserve fast chargers for emergency highway travel or unexpected long trips. For routine daily charging, use your standard 5A/15A slow home portable charger overnight. Slow AC charging generates minimal heat, prolongs cell life, and enables the BMS to perform essential cell-balancing routines during the final trickle phase."
      },
      {
        type: "heading",
        text: "4. Summer Heat Protection & Parking Guidelines"
      },
      {
        type: "paragraph",
        text: "Indian summer temperatures frequently exceed 40°C to 45°C. Parking an electric scooter under direct sunlight on hot asphalt can cause internal battery enclosure temperatures to climb past 55°C. Prolonged high-temperature exposure triggers thermal protection protocols, reduces available power output, and permanently degrades battery health."
      },
      {
        type: "paragraph",
        text: "Always park your EV in underground basements, covered garages, or under shaded trees. If open parking is unavoidable, cover the vehicle with a breathable reflective cover to shield the battery casing from solar radiation."
      },
      {
        type: "heading",
        text: "5. Long-Term Storage & 'Vacation Mode' Usage"
      },
      {
        type: "paragraph",
        text: "If you plan to travel away from home for several weeks, never leave your electric scooter connected to the charger, and do not leave it parked at 0% or 100%. A battery stored at 100% experiences high voltage degradation, while a battery left at 5% will self-discharge into a deep sleep state, rendering it unchargeable without specialized dealer intervention."
      },
      {
        type: "list",
        items: [
          "Charge or discharge the battery to approximately 50% to 60% before leaving.",
          "Switch off the main circuit breaker (MCB) located under the seat (if equipped).",
          "Enable 'Vacation Mode' or 'Storage Mode' via the dashboard touch screen to shut down background cellular connectivity, GPS tracking, and keyless proximity sensors.",
          "Store the vehicle in a dry, temperate space away from moisture and direct sunlight."
        ]
      },
      {
        type: "paragraph",
        text: "Practicing these core battery preservation habits will ensure your electric scooter delivers maximum range and reliable performance. If you experience sudden range drops, erratic state-of-charge readings, or dashboard error warnings, schedule an EV doorstep checkup with FixWheel for complete BMS diagnostic scanning."
      }
    ]
  },
  {
    slug: "disc-vs-drum-brake-maintenance",
    title: "Disc Brakes vs. Drum Brakes: Pad Replacement, Bleeding & Braking Safety",
    excerpt: "Learn how motorcycle disc and drum braking systems work, key signs of brake pad wear, brake fluid bleeding intervals, and how to maintain stopping power.",
    category: "Maintenance",
    date: "July 19, 2026",
    readTime: "9 min read",
    image: "/blog_brakes.jpg",
    author: {
      name: "Zakir Hussain",
      role: "Senior Master Mechanic & Automotive Lead",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
      slug: "zakir-hussain"
    },
    keywords: ["bike brake pad replacement", "disc brake fluid bleeding", "drum brake shoe cleaning", "motorcycle stopping distance", "doorstep brake repair"],
    content: [
      {
        type: "paragraph",
        text: "Your motorcycle's braking system is your primary safety feature. Whether navigating unpredictable city traffic or cruising at high speeds on the highway, having responsive, predictable stopping power is vital. Most two-wheelers in India come equipped with either hydraulic disc brakes, mechanical drum brakes, or a combination of both (disc front, drum rear). Over time, heat, friction, moisture, and road dust degrade brake pads, shoes, and hydraulic fluid, diminishing braking efficiency."
      },
      {
        type: "paragraph",
        text: "Understanding how disc and drum systems operate, recognizing early warning signs of wear, and sticking to routine maintenance intervals will ensure your bike stops safely under any road conditions."
      },
      {
        type: "heading",
        text: "How Disc Brakes Work & Maintenance Requirements"
      },
      {
        type: "paragraph",
        text: "Hydraulic disc brake systems consist of a brake lever/pedal, a master cylinder reservoir filled with hydraulic fluid (DOT 3 or DOT 4), rubber brake lines, a caliper housing internal pistons, friction brake pads, and a steel rotor disc attached to the wheel hub. When you pull the brake lever, the master cylinder forces hydraulic fluid down the hose, pushing caliper pistons outward to clamp the brake pads against the rotating disc."
      },
      {
        type: "paragraph",
        text: "Disc brakes offer superior heat dissipation, exceptional stopping power, and precise lever feel. However, because disc brake components are exposed, they require regular inspection:"
      },
      {
        type: "list",
        items: [
          "Brake Pad Thickness Inspection: Check brake pad friction material thickness through the caliper gap. New pads have 4mm to 5mm of material. Replace pads immediately when friction material wears down to less than 1.5mm or reaches the wear indicator groove.",
          "Brake Fluid Inspection & Replacement: Hydraulic brake fluid is hygroscopic (it absorbs moisture from the air). Over 12 to 18 months, absorbed water lowers the fluid's boiling point, leading to lever sponginess and vapor lock during hard braking. Flush and replace DOT 4 brake fluid every 1.5 to 2 years.",
          "Brake Bleeding: Air bubbles trapped in the hydraulic line compress under lever pressure, resulting in a squishy, ineffective brake lever. Bleed the brake system using a clear hose and fresh fluid until all air bubbles are purged.",
          "Rotor Disc Wear & Warping: Inspect the steel rotor disc for deep grooves, lip edges, or heat discoloration (blue spots). Warped discs cause pulsation through the brake lever during braking and require replacement."
        ]
      },
      {
        type: "heading",
        text: "How Drum Brakes Work & Servicing Guidelines"
      },
      {
        type: "paragraph",
        text: "Mechanical drum brakes feature an enclosed metal hub containing expanding brake shoes, return springs, an actuating cam, and a steel cable or rod connected to the handlebar lever or foot pedal. Pulling the lever rotates the cam, pushing internal brake shoes outward against the inner drum wall to slow the wheel."
      },
      {
        type: "paragraph",
        text: "Drum brakes are cost-effective, durable, and sealed from external mud, making them popular on budget commuters and rear wheels. However, their sealed design traps brake dust inside the hub over time, causing reduced braking bite, squealing noises, and sticky lever return:"
      },
      {
        type: "list",
        items: [
          "Brake Shoe Cleaning & De-glazing: Every 4,000 to 5,000 km, remove the rear wheel, open the drum brake plate, and blow out accumulated carbon brake dust. Sand the shoe friction linings lightly with emery paper to remove hard glazed spots.",
          "Actuating Cam Lubrication: Clean the brake arm pivot cam pin and apply a thin film of high-temperature grease. Avoid getting grease on the friction linings or drum surface.",
          "Cable Free-Play Adjustment: Adjust the knurled brake nut on the rear brake arm to maintain 10mm to 15mm of lever free-play. If the adjusting nut reaches the end of the threaded rod, the brake shoes are worn out and must be replaced."
        ]
      },
      {
        type: "heading",
        text: "Warning Signs Your Brakes Need Immediate Service"
      },
      {
        type: "paragraph",
        text: "Never ignore changes in braking performance. Watch for these safety indicators:"
      },
      {
        type: "list",
        items: [
          "High-pitched Metallic Screeching: Indicates brake pad friction material is completely worn away, allowing the metal backing plate to grind directly against the steel rotor disc.",
          "Spongy or Soft Brake Lever: Caused by air bubbles in the hydraulic brake line or old, water-contaminated brake fluid.",
          "Severe Handlebar Vibration During Braking: Points to a warped front brake rotor disc or unevenly worn caliper slider pins.",
          "Bike Pulls or Fails to Roll Freely: Indicates a stuck caliper piston or over-tightened drum brake cable dragging against the wheel."
        ]
      },
      {
        type: "paragraph",
        text: "If you notice lever sponginess, screeching sounds, or weak braking force, do not risk riding to a workshop. Book a doorstep brake repair service with FixWheel, and our verified mechanics will inspect, bleed, or replace your brake pads directly at your doorstep."
      }
    ]
  },
  {
    slug: "monsoon-bike-care-tips",
    title: "Monsoon Two-Wheeler Care: 7 Steps to Protect Your Bike From Rust & Water Damage",
    excerpt: "Riding in Indian monsoons leads to rust, electrical short circuits, and engine hydrostatic lock. Here is a complete guide to monsoon-proofing your motorcycle or scooter.",
    category: "Tips & Tricks",
    date: "July 20, 2026",
    readTime: "9 min read",
    image: "/blog_monsoon.jpg",
    author: {
      name: "Zakir Hussain",
      role: "Senior Master Mechanic & Automotive Lead",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
      slug: "zakir-hussain"
    },
    keywords: ["monsoon bike care tips", "water entering bike exhaust", "prevent bike rust rain", "bike starting problem in rain", "doorstep monsoon checkup"],
    content: [
      {
        type: "paragraph",
        text: "Monsoon season brings welcome relief from scorching summer heat across Indian cities, but it poses severe operational hazards for two-wheelers. Waterlogged streets, heavy downpours, high humidity, and mud splashing create ideal conditions for metal oxidation (rust), electrical short circuits, brake performance degradation, and engine water entry."
      },
      {
        type: "paragraph",
        text: "Water entering the air filter or exhaust pipe can cause hydrostatic lock (hydrolock), destroying engine connecting rods and pistons instantly. Taking proactive steps before and during the rainy season will keep your bike or scooter starting reliably, shield expensive bodywork from corrosion, and ensure safe traction on slick wet roads."
      },
      {
        type: "heading",
        text: "1. Anti-Rust Coating & Chrome Protection"
      },
      {
        type: "paragraph",
        text: "Rainwater in urban areas contains acidic pollutants that accelerate metal oxidation. Unprotected steel frame joints, exhaust headers, swingarm pivots, and chrome mirrors will quickly develop reddish-brown rust spots. Thoroughly wash your bike to remove road salt and mud, dry it completely, and apply a high-quality anti-rust spray (like WD-40 or a specialized hydrophobic wax coat) onto metal surfaces, exposed nuts, bolts, and exhaust pipe bends. Avoid getting anti-rust spray onto brake discs, pads, or tires."
      },
      {
        type: "heading",
        text: "2. Electrical System & Spark Plug Weatherproofing"
      },
      {
        type: "paragraph",
        text: "Starting trouble during rainy days is almost always caused by moisture leaking into the spark plug cap or electrical wiring connectors. Inspect the rubber spark plug cap for cracks or loose fitting. Remove the cap, clean the terminal contact, and coat the inside edge with dielectric silicone grease to seal out water."
      },
      {
        type: "paragraph",
        text: "Check your battery terminals, ignition key slot, handlebar switch boxes, and fuse boxes. Spray an electrical contact cleaner inside the switch housings to prevent corrosion and short circuits."
      },
      {
        type: "heading",
        text: "3. Air Filter Inspection & Intake Protection"
      },
      {
        type: "paragraph",
        text: "Your engine's air intake draws air into the combustion chamber. If wet road spray or deep water puddles soak the air filter, water will get sucked into the engine. Paper air filters collapse when wet, restricting airflow and causing severe engine stalling, misfiring, and black exhaust smoke."
      },
      {
        type: "paragraph",
        text: "Inspect your air filter box cover for proper sealing and tight rubber hoses. If you ride through heavy rain, check the air filter box drainage valve and replace paper air filter elements if they show water dampness."
      },
      {
        type: "heading",
        text: "4. Tire Tread Depth & Wet Traction Safety"
      },
      {
        type: "paragraph",
        text: "Riding on wet roads reduces tire grip significantly. Worn tires with thin tread depth cannot evacuate water from under the contact patch, leading to hydroplaning (where the tire floats on a thin layer of water, resulting in complete steering loss)."
      },
      {
        type: "list",
        items: [
          "Tread Depth Check: Inspect tire wear indicator bars located inside the tread grooves. Ensure tread depth measures at least 2.5mm to 3mm for effective water dispersal.",
          "Tire Pressure: Maintain correct cold tire pressures. Under-inflated tires squirm on wet tarmac, while over-inflated tires reduce the contact patch area.",
          "Inspect for Cracks & Cuts: Check sidewalls for sharp glass or stone cuts that can cause sudden pressure loss in waterlogged puddles."
        ]
      },
      {
        type: "heading",
        text: "5. Chain Care & Waterproof Lubrication"
      },
      {
        type: "paragraph",
        text: "Rainwater washes away standard chain lube within a few kilometers, leaving raw steel chain links exposed to moisture. A dry chain rusts within 24 hours, leading to seized link pins and rapid sprocket wear. Clean your drive chain thoroughly and switch to heavy-duty off-road or wet-weather chain lube formulas that resist water wash-off. Lube your chain every 300 km during monsoon season."
      },
      {
        type: "heading",
        text: "6. Handling Waterlogged Roads (Avoiding Hydrolock)"
      },
      {
        type: "paragraph",
        text: "When encountering deep waterlogged streets or underpasses:"
      },
      {
        type: "list",
        items: [
          "Gauge Water Depth: Never ride through standing water that rises above your exhaust pipe outlet or footpegs.",
          "Maintain Steady Throttle: Enter water in 1st or 2nd gear at a steady, high-revving throttle. Never release the throttle or change gears mid-puddle, as backpressure keeps water out of the exhaust tailpipe.",
          "If Engine Stalls in Water: NEVER attempt to restart the engine! If water entered the exhaust or intake, cranking the engine will cause hydrostatic lock, bending piston rods and cracking the engine block. Push the bike out of the water manually."
        ]
      },
      {
        type: "heading",
        text: "7. Post-Rain Maintenance & Parking Practices"
      },
      {
        type: "paragraph",
        text: "After riding in heavy rain, do not cover a wet motorcycle with a tight plastic vehicle cover. Trapping moisture under a cover creates a high-humidity greenhouse effect that accelerates rust on frame joints and wiring. Wipe the bike dry with a synthetic chamois towel, lubricate key pivot joints (clutch lever, footpegs, side stand spring), and allow it to air out in a ventilated spot."
      },
      {
        type: "paragraph",
        text: "If your bike suffered water ingress, starting troubles, or brake squeal during the monsoons, book a doorstep monsoon safety checkup with FixWheel. Our mechanics will inspect the spark plug, air filter, electrical terminals, and oil condition right at your home."
      }
    ]
  },
  {
    slug: "carburetor-vs-fi-maintenance",
    title: "Carburetor vs. Fuel Injection (FI): Troubleshooting Starting Issues & Mileage Hacks",
    excerpt: "Understand the differences between Carbureted and Fuel Injected (BS6) two-wheelers, common starting problems, sensor care, and how to maximize fuel economy.",
    category: "Buying Guide",
    date: "July 21, 2026",
    readTime: "9 min read",
    image: "/blog_engine.jpg",
    author: {
      name: "Zakir Hussain",
      role: "Senior Master Mechanic & Automotive Lead",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
      slug: "zakir-hussain"
    },
    keywords: ["carburetor vs fi bike", "bs6 bike starting problem", "fuel injector cleaning", "bike mileage tuning tips", "doorstep engine diagnosis"],
    content: [
      {
        type: "paragraph",
        text: "Fuel delivery is the heart of internal combustion two-wheeler engines. For decades, Indian motorcycles and scooters relied on mechanical carburetors to mix petrol and air before feeding the mixture into the cylinder. However, with the implementation of strict Bharat Stage VI (BS6) emission norms in 2020, manufacturers transitioned entirely to Electronic Fuel Injection (EFI/FI) systems."
      },
      {
        type: "paragraph",
        text: "Whether you ride an older BS4 carbureted bike (like a Classic 350 UCE, Pulsar 150, or older Activa 4G) or a modern BS6 FI vehicle (like an Activa 6G, Pulsar N160, or RE Hunter 350), understanding how your fuel system operates—and how to troubleshoot starting issues and poor mileage—is essential for smooth performance."
      },
      {
        type: "heading",
        text: "How Carburetors Work & Common Maintenance Issues"
      },
      {
        type: "paragraph",
        text: "A carburetor is a purely mechanical device operating on Bernoulli's principle. As engine intake suction draws air through the carburetor throat, it creates a vacuum pressure drop that draws liquid petrol up through brass jets (pilot jet and main jet), atomizing fuel into the air stream."
      },
      {
        type: "paragraph",
        text: "Carburetors are simple, durable, and easy to service with basic tools. However, because they rely on mechanical passageways, they are prone to specific issues:"
      },
      {
        type: "list",
        items: [
          "Clogged Pilot Jet (Cold Starting Troubles): The tiny pilot jet controls fuel flow at idle and low RPMs. Fine dust or stale gasoline varnish blocks this orifice, causing hard cold starts, engine stalling when releasing the throttle, and requiring constant choke usage.",
          "Incorrect Float Height (Fuel Overflow): If the float valve needle wears out or gets stuck by dirt, fuel overflows from the carburetor overflow tube onto the engine case, wasting petrol and creating a fire hazard.",
          "Tuning Air-Fuel Screw: Carburetors require manual seasonal tuning. Turning the pilot air/fuel screw alters the idle mixture ratio to fix engine sputtering or poor fuel economy."
        ]
      },
      {
        type: "heading",
        text: "How Fuel Injection (FI) Systems Work & Component Care"
      },
      {
        type: "paragraph",
        text: "Fuel Injection is a computer-controlled system consisting of an Engine Control Unit (ECU), an high-pressure electric fuel pump mounted inside the fuel tank, multiple engine sensors (Oxygen sensor, Throttle Position Sensor, Engine Temperature sensor, MAP sensor), and an electromagnetic fuel injector nozzle."
      },
      {
        type: "paragraph",
        text: "The ECU reads real-time sensor data thousands of times per second and calculates the exact micro-liter quantity of fuel to spray directly into the intake valve. FI systems deliver instant throttle response, effortless cold starts in high altitudes or winter mornings, and lower exhaust emissions."
      },
      {
        type: "list",
        items: [
          "Fuel Pump Care (Never Run on Reserve): BS6 FI bikes feature an submerged electric fuel pump inside the petrol tank. The pump relies on surrounding petrol for cooling and lubrication. Frequently riding on empty or low fuel causes the pump motor to overheat and burn out—a repair costing ₹3,000 to ₹8,000.",
          "Clogged Fuel Injector Nozzle: Microscopic pinhole nozzles on fuel injectors can clog due to contaminated or adulterated petrol, causing engine sputtering under acceleration, reduced top speed, and poor fuel efficiency.",
          "Sensors & Throttle Body Cleaning: Dust and carbon deposits accumulate around the throttle body valve butterfly plate over 10,000 km, causing rough idling and delayed throttle response. Clean the throttle body with specialized sensor-safe aerosol spray."
        ]
      },
      {
        type: "heading",
        text: "Troubleshooting Starting Issues: Carburetor vs. FI"
      },
      {
        type: "paragraph",
        text: "If your two-wheeler refuses to start, follow these diagnostic steps based on your fuel system type:"
      },
      {
        type: "list",
        items: [
          "Carbureted Bike Starting Fix: Check if the fuel petcock tap is turned ON or switched to RESERVE. Pull the manual choke lever out fully. Turn off the ignition, kickstart 3-4 times to prime the cylinder, then turn on the ignition and start. If fuel overflows from the bottom tube, tap the carburetor float bowl gently with a screwdriver handle to free a stuck float needle.",
          "BS6 FI Bike Starting Fix: Turn the ignition key ON and listen for a 2-second high-pitched buzzing sound from the fuel tank—this indicates the electric fuel pump priming. If you hear no buzzing, check the main EFI fuse under the seat or check battery voltage (FI systems require at least 11.5V to operate the ECU). Never twist the throttle while pressing the electric starter button on an FI bike, as this confuses the ECU throttle position sensor."
        ]
      },
      {
        type: "heading",
        text: "Mileage Optimization Hacks for Both Systems"
      },
      {
        type: "paragraph",
        text: "To extract maximum fuel efficiency from your motorcycle or scooter:"
      },
      {
        type: "list",
        items: [
          "Clean Air Filter: A dirty, clogged air filter starves the engine of oxygen, forcing it to consume more fuel. Replace paper filters every 8,000 km.",
          "Spark Plug Gap & Electrode Condition: Ensure the spark plug gap measures between 0.7mm and 0.9mm. Replace spark plugs every 10,000 to 12,000 km.",
          "Tire Pressure Maintenance: Check tire pressures weekly. Low tire pressure increases rolling resistance, reducing fuel economy by up to 15%.",
          "Smooth Throttle Modulation: Avoid aggressive full-throttle jackrabbit starts between traffic signals. Shift gears early and maintain steady speeds between 40 km/h and 50 km/h in top gear."
        ]
      },
      {
        type: "paragraph",
        text: "Whether your bike has a traditional carburetor or a modern BS6 FI system, FixWheel's mobile mechanics carry full diagnostic scanners and carburetor cleaning kits directly to your doorstep. Book an engine tuning or fuel system service online today."
      }
    ]
  }
];
