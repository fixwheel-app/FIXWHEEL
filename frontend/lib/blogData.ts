export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
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
    readTime: "6 min read",
    image: "/blog_oil.jpg",
    author: {
      name: "Sanjay Kumar",
      role: "Lead Master Mechanic, FixWheel NCR",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
    },
    keywords: ["bike engine oil grade", "honda activa engine oil", "royal enfield engine oil", "synthetic vs mineral oil", "bike engine heating solution"],
    content: [
      {
        type: "paragraph",
        text: "Daily commuting in bumper-to-bumper city traffic like Delhi-NCR or Mumbai puts massive thermal load on two-wheeler engines. Unlike cars, where the engine is liquid-cooled and operates at lower RPMs, most bikes and scooters in India are air-cooled and rev much higher. During peak summer, engine temperatures can skyrocket, causing the engine oil to thin out and lose its lubricating properties. Running on thin or degraded oil causes excessive metal-on-metal friction, resulting in engine drag, low mileage, gear-shifting harshness, and eventually, expensive engine seizure."
      },
      {
        type: "heading",
        text: "The Wet-Clutch Difference: Why Car Oils Will Ruin Your Bike"
      },
      {
        type: "paragraph",
        text: "Never pour passenger car engine oil into a motorcycle. In a car, the engine oil only lubricates the cylinders, while the gearbox and clutch run on separate systems. In a motorcycle, a single oil pool lubricates the engine, the transmission gears, and the wet clutch assembly. Car oils contain friction-reducing additives (friction modifiers) designed for fuel economy. If these additives get onto your bike's clutch plates, they will cause the clutch to slip. You will experience a major loss of torque, poor acceleration, and premature clutch plate wear. For bikes, look for oils certified under JASO MA or JASO MA2. Gearless scooters (like the Activa, Jupiter, or Access) use automatic CVT gearboxes with dry clutches, meaning they require JASO MB rated oils which offer different friction characteristics."
      },
      {
        type: "heading",
        text: "Understanding Viscosity Grades (10W-30, 20W-40, 20W-50)"
      },
      {
        type: "paragraph",
        text: "Viscosity grades indicate how the oil flows at cold starts (the 'W' number) and how thick it remains at high engine operating temperatures. Selecting the wrong grade will either cause poor cold lubrication or lead to oil thinning under heavy heat:"
      },
      {
        type: "list",
        items: [
          "10W-30 (JASO MB / MA): Standard for modern fuel-efficient commuters and scooters like the Honda Activa, Hero Splendor, Honda Shine, and SP125. It flows quickly on cold starts to minimize internal drag, giving you better mileage.",
          "20W-40 (JASO MA2): Best suited for older generation commuter bikes (100cc-150cc) and heavy-duty utility bikes that operate in hot climates. Brands like Castrol and Gulf supply this as a reliable mineral oil standard.",
          "20W-50 (JASO MA2): Recommended for heavy air-cooled single-cylinders like the Royal Enfield Classic 350, Bullet, and high-heat performance bikes like the Pulsar 220F. The thick hot-viscosity index (50) ensures the oil film stays intact even under continuous highway cruising or crawling in heavy traffic."
        ]
      },
      {
        type: "heading",
        text: "Mineral vs. Semi-Synthetic vs. Fully Synthetic"
      },
      {
        type: "paragraph",
        text: "Mineral oils are refined directly from crude petroleum. They are highly budget-friendly and work fine for standard 100cc commuter bikes with short drain intervals. However, under high heat, their molecular bonds break down quickly, leading to rapid oil consumption."
      },
      {
        type: "paragraph",
        text: "Semi-synthetic oils are a blend of mineral and synthetic bases. They provide good heat resistance for daily 125cc-160cc commuters (like the TVS Apache or Suzuki Gixxer) at a mid-range price point."
      },
      {
        type: "paragraph",
        text: "Fully synthetic oils (synthesized chemically with Ester bases) feature uniform molecules that withstand high temperatures and shear forces. They maintain viscosity three times longer than mineral oil, lower operating temperatures by 5-10°C, and are mandatory for liquid-cooled performance bikes like KTM Dukes and Yamaha R15s."
      },
      {
        type: "heading",
        text: "Oil Change Intervals: When is it Time?"
      },
      {
        type: "paragraph",
        text: "Riding beyond the oil's lifespan turns it into a black, abrasive sludge that blocks internal oil galleries. Keep these intervals in mind for your service schedule:"
      },
      {
        type: "list",
        items: [
          "Mineral Oil: Change every 1,500 to 2,000 km.",
          "Semi-Synthetic Oil: Change every 2,500 to 3,000 km.",
          "Fully Synthetic Oil: Change every 5,000 to 7,500 km (always change the engine oil filter with it)."
        ]
      },
      {
        type: "paragraph",
        text: "Check your oil window or dipstick once a week. If the oil level is below the minimum mark, top it up. If the oil is pitch black, smells burnt, or has a watery consistency, it has degraded. Skip the hassle of visiting a local garage—book a doorstep engine oil replacement package with FixWheel, and our mechanics will change it in front of you using genuine sealed oil cans."
      }
    ]
  },
  {
    slug: "motorcycle-chain-maintenance-guide",
    title: "How to Clean and Lube Your Bike's Chain at Home: A Step-by-Step Guide",
    excerpt: "A dry or loose chain wastes engine power, creates annoying metal sounds, and wears out sprockets early. Here is a simple maintenance guide using basic garage tools.",
    category: "Maintenance",
    date: "July 17, 2026",
    readTime: "5 min read",
    image: "/blog_chain.jpg",
    author: {
      name: "Sanjay Kumar",
      role: "Lead Master Mechanic, FixWheel NCR",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
    },
    keywords: ["motorcycle chain cleaning", "how to lube bike chain", "chain sprocket price", "loose chain sound adjustment", "doorstep chain cleaning"],
    content: [
      {
        type: "paragraph",
        text: "Your motorcycle's drive chain works in an open environment, constantly exposed to road dust, mud, and water. As you ride, road grit gets trapped in the sticky chain lube, creating an abrasive grinding paste. This paste wears down the chain rollers, pins, and sprocket teeth. Neglecting chain care causes the chain to stretch, creates a loud metallic slapping noise, lowers fuel efficiency, and can even cause the chain to snap mid-ride, which can lock the rear wheel and cause a serious accident."
      },
      {
        type: "heading",
        text: "O-Ring vs. Non-O-Ring Chains: What You Need to Know"
      },
      {
        type: "paragraph",
        text: "Most modern motorcycles above 120cc use O-ring or X-ring chains. These chains have rubber seals sandwiched between the metal plates to trap factory grease inside the chain pins while keeping water out. Standard commuter bikes (like the Hero Splendor) often use non-O-ring chains enclosed inside a full metal cover. Knowing this is important because harsh solvents like petrol or thinners will dissolve and crack the rubber O-rings, leading to rapid dry wear. Always use a dedicated, O-ring safe cleaner spray or clean kerosene for maintenance."
      },
      {
        type: "heading",
        text: "Step 1: Deep Cleaning the Chain"
      },
      {
        type: "paragraph",
        text: "First, secure your bike on the center stand or a paddock stand. Ensure the engine is switched off and the transmission is in neutral (never run the engine in gear while cleaning the chain manually, as this can catch your fingers between the chain and sprocket). Spray a generous amount of chain cleaner (like Motul C1 or Kangaroo) onto the chain rollers. Let it soak for 3 to 5 minutes to break down the old, crusty grease. Use a specialized three-sided chain cleaning brush to scrub off the accumulated mud and dirt from all angles. Spray a final light coat to flush the dirt off, then wipe the chain completely dry using an old microfibre cloth."
      },
      {
        type: "heading",
        text: "Step 2: Applying the Chain Lube"
      },
      {
        type: "paragraph",
        text: "With the chain dry, spin the rear wheel slowly by hand. Aim the nozzle of your chain lube spray (like Motul C2 or Castrol Chain Spray) at the inner side of the chain—specifically on the inner and outer link plates where the rubber O-rings reside, and on the rollers. Do not spray the outer surface of the chain, as this will only sling off onto your rear tyre and attract dirt. Once applied, let the lubricant dry for at least 20 to 30 minutes. This allows the solvents inside the spray to evaporate, leaving behind a sticky, water-resistant lubrication film."
      },
      {
        type: "heading",
        text: "Step 3: Checking and Adjusting Chain Tension"
      },
      {
        type: "paragraph",
        text: "A properly adjusted chain should have about 25mm to 35mm of vertical slack at its tightest point (check the swingarm sticker for manufacturer specifications). If the chain is sagging too much, it will slap against the swingarm cover. If it is too tight, it will strain the gearbox output shaft and cause vibration:"
      },
      {
        type: "list",
        items: [
          "Loosen the main rear wheel axle nut using a ring spanner.",
          "Turn the chain tensioner adjusting bolts on both sides of the swingarm clockwise by equal amounts (use the alignment marks on the swingarm to keep the wheel straight).",
          "Ensure the wheel is aligned, verify the slack is within 30mm, and torque the main axle nut back to specifications.",
          "Check the sprockets: if the teeth are pointed like 'shark fins' or worn thin, the entire chain sprocket kit needs immediate replacement."
        ]
      },
      {
        type: "paragraph",
        text: "If you don't have the tools or paddock stand at home, don't worry. You can book a quick doorstep general maintenance package with FixWheel, and our mechanic will adjust, clean, and lubricate your chain in minutes."
      }
    ]
  },
  {
    slug: "electric-scooter-battery-care",
    title: "Is Your Electric Scooter Giving Less Range? 5 Battery Habits to Fix Today",
    excerpt: "Electric scooter battery packs are expensive to replace. Follow these simple daily charging and riding habits to double your battery lifespan and range.",
    category: "EV Corner",
    date: "July 16, 2026",
    readTime: "5 min read",
    image: "/blog_electric.jpg",
    author: {
      name: "Sanjay Kumar",
      role: "Lead Master Mechanic, FixWheel NCR",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
    },
    keywords: ["electric scooter battery health", "how to increase ev range", "ola s1 battery care", "ather battery lifespan", "ev doorstep inspection"],
    content: [
      {
        type: "paragraph",
        text: "The battery pack is the single most expensive component of an electric scooter (like the OLA S1 Pro, Ather 450X, or TVS iQube), often accounting for 40% of the vehicle's cost. Most electric scooters in India use Lithium-ion NMC (Nickel Manganese Cobalt) or LFP (Lithium Iron Phosphate) cells. While the smart Battery Management System (BMS) prevents safety hazards, how you charge, ride, and park your EV directly affects cell degradation, daily riding range, and the overall lifespan of your battery pack."
      },
      {
        type: "heading",
        text: "1. The 20% to 80% State-of-Charge Rule"
      },
      {
        type: "paragraph",
        text: "Lithium-ion batteries experience the highest chemical stress when they are either fully charged (100%) or completely discharged (near 0%). Keeping the battery at 100% state of charge for long durations accelerates chemical degradation. For daily city commutes, try to keep your charge level between 20% and 80%. Charge it up to 100% only if you are planning a long journey, and try to ride the scooter shortly after the charge finishes rather than leaving it plugged in for days."
      },
      {
        type: "heading",
        text: "2. Let the Battery Cool Down Before Charging"
      },
      {
        type: "paragraph",
        text: "Riding your scooter in Hyper or Sport mode, or climbing steep flyovers, draws high current from the cells, causing them to heat up. If you plug in the charger immediately after parking, you add electrical charging heat on top of the existing riding heat. This excessive thermal stress degrades the internal anode-cathode separator sheets. Allow your scooter to sit in a shaded area for 30 minutes after riding to cool down before connecting the charger."
      },
      {
        type: "heading",
        text: "3. Avoid Frequent Fast Charging"
      },
      {
        type: "paragraph",
        text: "DC fast chargers (such as OLA Hyperchargers or Ather Grids) are highly convenient on the road, but they pump high-amp current directly into the pack. This high-rate transfer can trigger lithium plating on the anodes, permanently reducing battery capacity. For regular use, stick to the standard portable home charger. Home chargers are gentler, keep the pack cool, and allow the BMS to balance individual cell voltages properly during the final stages of the charge cycle."
      },
      {
        type: "heading",
        text: "4. Park Away from Direct Sunlight during Summer"
      },
      {
        type: "paragraph",
        text: "Indian summer temperatures regularly cross 40°C. Parking your electric scooter under direct sunlight on a hot asphalt surface turns the battery compartment into an oven, pushing cell temperatures beyond 50°C. High heat accelerates self-discharge and permanently reduces battery capacity. Always park in basement parking spaces, under trees, or use a reflective vehicle cover to protect the battery pack from direct solar heating."
      },
      {
        type: "heading",
        text: "5. Long-Term Storage Guidelines: Use 'Vacation Mode'"
      },
      {
        type: "paragraph",
        text: "If you are leaving town for a vacation, do not leave your scooter plugged in, and do not leave it at 0% or 100%. A battery stored at 0% will self-discharge below the critical safety threshold, sending the cells into a deep sleep mode that renders the pack unusable. Charge your scooter to around 50% to 60%, turn off the main circuit breaker (MCB) under the seat if available, or enable 'Vacation Mode' on the digital dashboard. This shuts down background cellular tracking, remote app sync, and GPS, preventing battery drain while you're away."
      },
      {
        type: "paragraph",
        text: "Following these simple battery care habits will ensure your electric scooter delivers optimal range and maintains high resale value. If you notice rapid battery percentage drops or error codes on your dashboard, book an EV doorstep checkup with FixWheel to have our certified technician inspect the electrical connections and battery mounting."
      }
    ]
  }
];
