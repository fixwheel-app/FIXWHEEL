export interface PartnerLocality {
  slug: string;
  name: string;
}

export interface PartnerCityData {
  slug: string;
  cityName: string;
  stateName: string;
  headingTitle: string;
  subTitle: string;
  leadParagraph: string;
  monthlyEarnings: string;
  activePartnersCount: string;
  avgJobsPerDay: string;
  joiningFee: string;
  localities: PartnerLocality[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  seoKeywords: string[];
}

export const PARTNER_CITY_DATA: Record<string, PartnerCityData> = {
  "gurgaon": {
    slug: "gurgaon",
    cityName: "Gurgaon",
    stateName: "Haryana",
    headingTitle: "Join Gurgaon's Highest Paying Doorstep Mechanic Network",
    subTitle: "Mechanic & Garage Partner Onboarding in Gurugram",
    leadParagraph: "Are you an experienced two-wheeler mechanic or garage owner in Gurgaon? Partner with FixWheel to get a continuous stream of high-paying doorstep bike & scooter service bookings in DLF Phase 1-5, Sohna Road, Golf Course Road, and all Gurgaon sectors. Zero joining fee, 100% daily bank payouts, and complete working flexibility.",
    monthlyEarnings: "₹40,000 - ₹65,000",
    activePartnersCount: "180+ Mechanics",
    avgJobsPerDay: "5 to 8 Jobs/Day",
    joiningFee: "₹0 (FREE)",
    localities: [
      { slug: "sector-14", name: "Sector 14" },
      { slug: "sector-15", name: "Sector 15" },
      { slug: "sector-23", name: "Sector 23" },
      { slug: "sector-31", name: "Sector 31" },
      { slug: "sector-46", name: "Sector 46" },
      { slug: "sector-56", name: "Sector 56" },
      { slug: "dlf-phase-1", name: "DLF Phase 1" },
      { slug: "dlf-phase-3", name: "DLF Phase 3" },
      { slug: "sohna-road", name: "Sohna Road" },
      { slug: "golf-course-road", name: "Golf Course Road" },
      { slug: "manesar", name: "Manesar" },
      { slug: "palam-vihar", name: "Palam Vihar" },
      { slug: "cyber-city", name: "Cyber City" }
    ],
    benefits: [
      { title: "High Earnings in Corporate Hubs", desc: "Gurgaon's high density of office commuters in Cyber City and Golf Course Road guarantees steady high-margin service orders." },
      { title: "Instant Daily Payouts", desc: "Every completed doorstep repair payment is transferred directly into your UPI/Bank account on the same day." },
      { title: "Free Tool Kit & Branded Apparel", desc: "FixWheel provides professional portable tools, uniform t-shirts, caps, and protective floor mats at zero upfront cost." }
    ],
    faqs: [
      {
        q: "How much can a bike mechanic earn per month with FixWheel in Gurgaon?",
        a: "A dedicated partner mechanic in Gurgaon servicing 5 to 8 doorstep bookings daily typically earns between ₹40,000 to ₹65,000 per month after spare parts costs."
      },
      {
        q: "What documents are required to register as a FixWheel partner in Gurgaon?",
        a: "You need a valid Aadhaar Card, PAN Card, Driving License, active Bank Account / UPI ID for daily payouts, and proof of mechanical experience or garage ownership."
      },
      {
        q: "Do I need my own vehicle and mobile phone for doorstep service in Gurgaon?",
        a: "Yes! You need a two-wheeler (scooter/motorcycle) to carry your portable tool kit and a smartphone to accept customer bookings on the FixWheel Partner App."
      },
      {
        q: "Is there any registration fee to join FixWheel in Gurgaon?",
        a: "No! FixWheel onboarding is 100% free with zero joining fees and zero hidden security deposits for certified mechanics."
      },
      {
        q: "Can garage owners in Gurgaon register their existing staff as FixWheel partners?",
        a: "Yes! Garage owners can register multiple technicians to receive excess customer service jobs in their surrounding sectors."
      }
    ],
    seoKeywords: [
      "become bike mechanic partner gurgaon",
      "bike mechanic job gurugram",
      "garage partner registration gurgaon",
      "doorstep mechanic onboarding sohna road",
      "dlf phase 3 bike mechanic vacancy",
      "earn 60000 bike mechanic gurgaon",
      "fixwheel partner application gurgaon",
      "two wheeler repair technician job cyber city"
    ]
  },
  "delhi": {
    slug: "delhi",
    cityName: "Delhi",
    stateName: "Delhi NCR",
    headingTitle: "Earn High Daily Income as a Certified Delhi Bike Partner",
    subTitle: "Two-Wheeler Mechanic & Technician Registration across Delhi NCR",
    leadParagraph: "Expand your mechanic business across South Delhi, West Delhi, North Delhi, and East Delhi. FixWheel connects skilled two-wheeler mechanics directly with customers needing doorstep oil changes, brake repairs, and breakdown assistance. Enjoy zero commission cuts on tips, 100% daily payouts, and flexible work timings.",
    monthlyEarnings: "₹45,000 - ₹70,000",
    activePartnersCount: "250+ Mechanics",
    avgJobsPerDay: "6 to 9 Jobs/Day",
    joiningFee: "₹0 (FREE)",
    localities: [
      { slug: "dwarka", name: "Dwarka" },
      { slug: "rohini", name: "Rohini" },
      { slug: "saket", name: "Saket" },
      { slug: "lajpat-nagar", name: "Lajpat Nagar" },
      { slug: "janakpuri", name: "Janakpuri" },
      { slug: "laxmi-nagar", name: "Laxmi Nagar" },
      { slug: "vasant-kunj", name: "Vasant Kunj" },
      { slug: "karol-bagh", name: "Karol Bagh" },
      { slug: "pitampura", name: "Pitampura" },
      { slug: "connaught-place", name: "Connaught Place" }
    ],
    benefits: [
      { title: "Massive Demand in Delhi", desc: "Delhi's dense commuter population in Dwarka, Rohini, and South Delhi ensures non-stop doorstep booking requests year-round." },
      { title: "Flexible Zone Selection", desc: "Choose the exact residential clusters or commercial zones in Delhi where you prefer to accept service orders." },
      { title: "Insurance & Safety Gear", desc: "Receive comprehensive accident insurance coverage and heavy-duty safety gear while performing doorstep jobs." }
    ],
    faqs: [
      {
        q: "What is the daily payout cycle for FixWheel mechanics in Delhi?",
        a: "All job earnings are settled daily. Money is credited directly into your registered bank account or UPI handle every evening."
      },
      {
        q: "Can I work part-time as a FixWheel bike mechanic partner in Delhi?",
        a: "Yes! You can choose full-time or flexible part-time shifts (e.g. morning peak hours or weekend shifts) on the FixWheel Partner App."
      },
      {
        q: "What training does FixWheel provide to new partners in Delhi?",
        a: "We provide hands-on training for customer interaction, diagnostic software scanning, multi-brand scooter CVT servicing, and app usage."
      },
      {
        q: "How are customer job locations dispatched to mechanics in Delhi?",
        a: "The FixWheel Partner App automatically dispatches jobs located within a 3 to 5 km radius of your live GPS location in Delhi."
      },
      {
        q: "Do I need to carry original spare parts for Delhi doorstep service?",
        a: "Yes! FixWheel provides genuine multi-brand OEM spare parts, engine oils, and consumables at partner-discounted rates."
      }
    ],
    seoKeywords: [
      "bike mechanic job in delhi",
      "become partner mechanic delhi ncr",
      "two wheeler repair technician vacancy dwarka",
      "garage registration south delhi",
      "earn money bike mechanic rohini",
      "fixwheel delhi partner apply online",
      "doorstep scooter repair job delhi",
      "freelance bike mechanic hiring delhi"
    ]
  },
  "noida": {
    slug: "noida",
    cityName: "Noida",
    stateName: "Uttar Pradesh",
    headingTitle: "Noida Two-Wheeler Mechanic Partnership & Onboarding",
    subTitle: "Join the Leading Doorstep Bike Service Platform in Noida & Greater Noida",
    leadParagraph: "Are you based in Sector 62, Sector 18, Expressway, or Noida Extension? Partner with FixWheel and start receiving doorstep repair orders from thousands of residential society residents and office professionals in Noida. Enjoy high per-job payouts, zero joining fee, and full partner support.",
    monthlyEarnings: "₹38,000 - ₹60,000",
    activePartnersCount: "140+ Mechanics",
    avgJobsPerDay: "5 to 7 Jobs/Day",
    joiningFee: "₹0 (FREE)",
    localities: [
      { slug: "sector-18", name: "Sector 18" },
      { slug: "sector-62", name: "Sector 62" },
      { slug: "sector-76", name: "Sector 76" },
      { slug: "sector-137", name: "Sector 137" },
      { slug: "noida-extension", name: "Noida Extension" },
      { slug: "greater-noida", name: "Greater Noida" },
      { slug: "sector-50", name: "Sector 50" },
      { slug: "sector-128", name: "Sector 128" }
    ],
    benefits: [
      { title: "High Gated Society Orders", desc: "Noida's high-rise apartments in Sector 76, 137, and Noida Extension generate high-volume doorstep service requests." },
      { title: "Fair Transparent Commissions", desc: "Earn up to 85% of total job charges with zero hidden deductions or penalty fees." },
      { title: "EV Training & Certification", desc: "Get specialized technical training for servicing electric scooters like OLA, Ather, and TVS iQube in Noida." }
    ],
    faqs: [
      {
        q: "How do I become a certified FixWheel mechanic in Noida?",
        a: "Fill out the online partner application form, visit our Noida onboarding desk for a 20-minute skill check, receive your toolkit, and start accepting jobs."
      },
      {
        q: "Which areas of Noida and Greater Noida are active for partner mechanics?",
        a: "We operate across all sectors of Noida (Sector 18, 50, 62, 76, 137, Expressway) and Greater Noida West."
      },
      {
        q: "How does FixWheel help Noida garage owners grow their revenue?",
        a: "Garage owners get access to digital customer bookings during slow afternoon hours, boosting overall monthly garage income."
      },
      {
        q: "What happens if a customer cancels a booking after I arrive at the location in Noida?",
        a: "FixWheel compensates partner mechanics with a guaranteed doorstep travel allowance for all invalid or canceled customer orders."
      },
      {
        q: "What tools are included in the FixWheel Noida partner kit?",
        a: "The kit includes a portable socket set, T-spanners, feeler gauge, multimeter, oil drain tray, battery jumper cables, and branded apron."
      }
    ],
    seoKeywords: [
      "become bike mechanic partner noida",
      "bike mechanic job noida extension",
      "garage partner onboarding sector 62 noida",
      "doorstep mechanic hiring greater noida",
      "fixwheel partner application noida",
      "two wheeler technician job sector 18 noida",
      "earn daily payout bike mechanic noida"
    ]
  },
  "ghaziabad": {
    slug: "ghaziabad",
    cityName: "Ghaziabad",
    stateName: "Uttar Pradesh",
    headingTitle: "Ghaziabad Garage & Mechanic Partner Registration",
    subTitle: "Grow Your Income Servicing Two-Wheelers in Indirapuram, Vaishali & Raj Nagar",
    leadParagraph: "FixWheel is inviting skilled two-wheeler mechanics and garage technicians across Ghaziabad, Indirapuram, Vaishali, Vasundhara, and Raj Nagar Extension. Get high-demand doorstep bike repair jobs delivered straight to your phone. Zero joining fee, instant payouts, and guaranteed weekly incentive bonuses.",
    monthlyEarnings: "₹35,000 - ₹55,000",
    activePartnersCount: "120+ Mechanics",
    avgJobsPerDay: "5 to 7 Jobs/Day",
    joiningFee: "₹0 (FREE)",
    localities: [
      { slug: "indirapuram", name: "Indirapuram" },
      { slug: "vaishali", name: "Vaishali" },
      { slug: "vasundhara", name: "Vasundhara" },
      { slug: "raj-nagar-extension", name: "Raj Nagar Extension" },
      { slug: "crossings-republik", name: "Crossings Republik" },
      { slug: "kaushambi", name: "Kaushambi" }
    ],
    benefits: [
      { title: "Dense Residential Hubs", desc: "High density of commuters in Indirapuram and Vaishali means short traveling distance between consecutive jobs." },
      { title: "Weekly Bonus Incentives", desc: "Earn extra cash bonuses on completing 30+ doorstep service orders per week." },
      { title: "Dedicated Partner Support", desc: "24/7 helpline for partner mechanics to assist with customer navigation, technical queries, or spare parts." }
    ],
    faqs: [
      {
        q: "Can I partner with FixWheel if I run a small garage in Indirapuram or Vaishali?",
        a: "Yes! Garage owners can partner with FixWheel to receive high-margin doorstep service orders during peak morning and weekend slots."
      },
      {
        q: "What is the average time taken for onboarding a new partner in Ghaziabad?",
        a: "Onboarding takes less than 24 hours. After document verification and a short practical test, your app account is activated."
      },
      {
        q: "How are spare parts managed for Ghaziabad doorstep repair jobs?",
        a: "Mechanics can bring genuine OEM parts from authorized distributors or collect them from FixWheel local spare hubs in Ghaziabad."
      },
      {
        q: "Are there any hidden monthly charges for using the FixWheel Partner App?",
        a: "No! FixWheel does not charge any monthly subscription or platform maintenance fees."
      },
      {
        q: "What safety measures are provided for night or breakdown jobs in Ghaziabad?",
        a: "Mechanics have SOS emergency triggers in the app, live location tracking, and 24/7 partner support dispatch."
      }
    ],
    seoKeywords: [
      "become bike mechanic partner ghaziabad",
      "bike mechanic job indirapuram",
      "garage partner onboarding vaishali",
      "doorstep mechanic hiring vasundhara ghaziabad",
      "raj nagar extension bike repair job",
      "fixwheel partner application ghaziabad",
      "two wheeler technician job kaushambi"
    ]
  },
  "faridabad": {
    slug: "faridabad",
    cityName: "Faridabad",
    stateName: "Haryana",
    headingTitle: "Faridabad Doorstep Bike Technician Onboarding",
    subTitle: "Earn High Daily Payouts Servicing Motorcycles & Scooters in Faridabad",
    leadParagraph: "Calling all two-wheeler mechanics in Faridabad, NIT, Sector 15, Sector 16, and Greater Faridabad! Partner with FixWheel to get direct customer bookings for doorstep oil changes, brake fixes, battery swaps, and breakdown assistance. Enjoy zero registration fee, daily payouts, and free toolkit distribution.",
    monthlyEarnings: "₹35,000 - ₹55,000",
    activePartnersCount: "110+ Mechanics",
    avgJobsPerDay: "5 to 7 Jobs/Day",
    joiningFee: "₹0 (FREE)",
    localities: [
      { slug: "nit-faridabad", name: "NIT Faridabad" },
      { slug: "sector-15", name: "Sector 15" },
      { slug: "sector-16", name: "Sector 16" },
      { slug: "greater-faridabad", name: "Greater Faridabad" },
      { slug: "ballabhgarh", name: "Ballabhgarh" },
      { slug: "greenfield-colony", name: "Greenfield Colony" }
    ],
    benefits: [
      { title: "Industrial & Industrial Hub Jobs", desc: "High demand from commuters and factory professionals across Faridabad NIT and Greater Faridabad." },
      { title: "Zero Joining Fee", desc: "No registration fee or upfront security deposit required to join our partner network." },
      { title: "Transparent Earning Guarantee", desc: "Track every rupee earned with full breakdown of job charges, tips, and daily incentives in the app." }
    ],
    faqs: [
      {
        q: "How do I apply for a FixWheel bike mechanic partnership in Faridabad?",
        a: "Apply online via the FixWheel website or call our partner onboarding desk. Visit our Faridabad center with your documents for quick approval."
      },
      {
        q: "What types of two-wheelers will I service in Faridabad?",
        a: "You will service all major commuter bikes (Splendor, Pulsar, Shine), scooters (Activa, Jupiter, Access), cruisers (Royal Enfield), and electric scooters."
      },
      {
        q: "Are daily bank payouts guaranteed for partner mechanics in Faridabad?",
        a: "Yes! Every day's completed job payments are transferred directly to your bank account or UPI every evening."
      },
      {
        q: "Can I choose my working sectors in Faridabad?",
        a: "Yes! You can set your preferred working radius (e.g. NIT Faridabad, Sector 15/16, or Greater Faridabad) in your partner profile."
      },
      {
        q: "What customer ratings are needed to stay active on the FixWheel platform?",
        a: "Partners should maintain a minimum 4.2★ customer rating by delivering polite, clean, and honest doorstep repairs."
      }
    ],
    seoKeywords: [
      "become bike mechanic partner faridabad",
      "bike mechanic job nit faridabad",
      "garage partner onboarding greater faridabad",
      "doorstep mechanic vacancy sector 15 faridabad",
      "fixwheel partner application faridabad",
      "two wheeler repair technician job ballabhgarh"
    ]
  }
};
