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

const RAW_LOCALITY_META: Record<
  string,
  {
    name: string;
    landmarks: string[];
    description: string;
    whyChoose: string;
    societies: string[];
    reviewers: { name: string; detail: string; comment: string }[];
  }
> = {
  "indirapuram": {
    name: "Indirapuram",
    landmarks: ["Shipra Mall", "Ahinsa Khand-II", "Swarn Jayanti Park"],
    description: "Indirapuram is Ghaziabad's most developed township along NH-24. High-rise apartments and gated communities dominate this area, making local garage visits extremely inconvenient for residents.",
    whyChoose: "Our mechanics coordinate with your high-rise apartment security and perform repairs right in your basement parking or visitor bay near Shipra Mall.",
    societies: ["Mahagun Moderne", "Shipra Krishna Vista", "Gaur City Gateway", "Niti Khand-I", "Niti Khand-II", "Ahinsa Khand-I"],
    reviewers: [
      { name: "Raghav Khanna", detail: "Mahagun Moderne", comment: "Mechanic coordinated with my apartment security and serviced my Pulsar in the basement parking. Extremely convenient and professional." },
      { name: "Kavita Jain", detail: "Niti Khand-I", comment: "Quick oil change and chain adjustment for my Activa. The mechanic was punctual and cleaned the workspace before leaving." }
    ]
  },
  "vaishali": {
    name: "Vaishali",
    landmarks: ["Vaishali Metro Station", "Mahagun Mall", "Sector 1-6"],
    description: "Vaishali is a well-connected residential hub near the Delhi-UP border with excellent metro connectivity. High vehicle density and busy roads make garage visits time-consuming.",
    whyChoose: "We dispatch mechanics quickly via the metro corridor to reach your society or apartment in Vaishali within 45 minutes.",
    societies: ["Sector 1 Vaishali", "Sector 2 Vaishali", "Sector 3 Vaishali", "Sector 4 Vaishali", "Mahagun Mall Area", "Near Metro Station"],
    reviewers: [
      { name: "Priyanka Mehra", detail: "Sector 3", comment: "Excellent service. The mechanic arrived on time and replaced my brake pads in the parking area. No mess left behind." },
      { name: "Deepak Arora", detail: "Near Mahagun Mall", comment: "Honest pricing and skilled mechanic. Got my Hero Splendor tuned perfectly at home." }
    ]
  },
  "kaushambi": {
    name: "Kaushambi",
    landmarks: ["Kaushambi Metro Station", "Opulent Mall", "Kaushambi Apartments"],
    description: "Kaushambi is a compact, densely populated residential area near the Delhi border with apartment complexes and commercial zones. Finding parking at local garages is nearly impossible.",
    whyChoose: "Our doorstep mechanics navigate the dense Kaushambi layout efficiently, arriving at your apartment or commercial unit within 45 minutes.",
    societies: ["Kaushambi Apartments", "Near Opulent Mall", "Kaushambi Metro Road", "Anand Vihar Border stretch", "Block A Residential", "Block B Residential"],
    reviewers: [
      { name: "Manish Tiwari", detail: "Kaushambi Apartments", comment: "My scooter had a dead battery. FixWheel mechanic came in 45 minutes and replaced it with a warranty-backed battery." },
      { name: "Anita Sharma", detail: "Near Metro Station", comment: "Very clean and professional work. Got my engine oil changed without leaving home." }
    ]
  },
  "raj-nagar-extension": {
    name: "Raj Nagar Extension",
    landmarks: ["Gaur City", "Rajnagar Residency", "KW Srishti"],
    description: "Raj Nagar Extension is Ghaziabad's fastest-growing township packed with massive housing societies. The distance from main city garages makes doorstep repair essential here.",
    whyChoose: "We have mechanics stationed specifically in the Raj Nagar Extension zone to cover its sprawling housing societies efficiently.",
    societies: ["Gaur City 1", "Gaur City 2", "KW Srishti", "Rajnagar Residency", "Saviour Greenarch", "Civitech Stadia"],
    reviewers: [
      { name: "Vikram Chauhan", detail: "Gaur City 1", comment: "Outstanding service inside my society compound. The mechanic did full servicing on my Royal Enfield Classic 350 in the parking bay." },
      { name: "Shweta Pandey", detail: "KW Srishti", comment: "Quick brake pad change at my doorstep. The mechanic was friendly and transparent about pricing." }
    ]
  },
  "raj-nagar": {
    name: "Raj Nagar",
    landmarks: ["Raj Nagar District Centre", "RDC Market", "Raj Nagar Main Road"],
    description: "Raj Nagar is a prime residential district in Ghaziabad with the bustling RDC market. Heavy traffic makes visiting garages a frustrating ordeal.",
    whyChoose: "Our mechanics are familiar with Raj Nagar's layout and park right outside your gate to perform on-site servicing.",
    societies: ["Raj Nagar Sector 1", "Raj Nagar Sector 2", "RDC Market Area", "Near District Centre", "Main Road Raj Nagar", "Raj Nagar Colony"],
    reviewers: [
      { name: "Ashutosh Srivastava", detail: "RDC Market Area", comment: "Quick and efficient carburetor cleaning for my Bajaj Platina. Saved me a trip to the crowded RDC market garages." },
      { name: "Sakshi Verma", detail: "Sector 2", comment: "Clean chain sprocket replacement in my apartment parking. Very satisfied with the work quality." }
    ]
  },
  "vasundhara": {
    name: "Vasundhara",
    landmarks: ["Vasundhara Sector 1-18", "Vasundhara Enclave", "Hindon Elevated Road"],
    description: "Vasundhara is a sprawling residential area with well-planned sectors. The multiple sector layout means local garages are far for many residents.",
    whyChoose: "We cover all 18 sectors of Vasundhara with mechanics stationed locally for rapid doorstep response.",
    societies: ["Sector 1 Vasundhara", "Sector 5 Vasundhara", "Sector 10 Vasundhara", "Sector 14 Vasundhara", "Vasundhara Enclave Gate", "Near Hindon Elevated Road"],
    reviewers: [
      { name: "Rahul Kapoor", detail: "Sector 5", comment: "Comprehensive bike service done right at my doorstep. The mechanic brought all tools and even cleaned the air filter." },
      { name: "Nidhi Gupta", detail: "Sector 14", comment: "Transparent billing and professional work. My Scooty runs smoother now. Will definitely book again." }
    ]
  },
  "crossings-republik": {
    name: "Crossings Republik",
    landmarks: ["Crossing Republik Metro", "Paramount Emotions", "GH-02 Crossings"],
    description: "Crossings Republik is a large gated township on the Delhi-Meerut highway. Its isolated location makes reaching garages in central Ghaziabad a major hassle.",
    whyChoose: "We have dedicated mechanics assigned to the Crossings Republik township, ensuring faster response times within this large community.",
    societies: ["GH-02 Towers", "Paramount Emotions", "Panchsheel Greens", "Apex Athena", "Skytech Matrott", "Near Metro Station"],
    reviewers: [
      { name: "Amit Saxena", detail: "GH-02", comment: "Living here, finding a mechanic was always tough. FixWheel changed that — quick service at my tower parking." },
      { name: "Pooja Rawat", detail: "Paramount Emotions", comment: "Got my tyre replaced at my society gate. Fast and professional. Saved me the long trip to the city." }
    ]
  },
  "abhay-khand": {
    name: "Abhay Khand",
    landmarks: ["Abhay Khand Park", "Abhay Khand Market", "Near Shipra Mall"],
    description: "Abhay Khand is a premium residential pocket in Indirapuram. Well-maintained societies here demand equally well-maintained service providers.",
    whyChoose: "Our verified mechanics specialize in servicing premium two-wheelers at gated community parking spaces in the Abhay Khand zone.",
    societies: ["Abhay Khand-I", "Abhay Khand-II", "Abhay Khand-III", "Near Abhay Khand Park", "Abhay Khand Market Lane", "Shipra Mall Adjacent"],
    reviewers: [
      { name: "Nitin Agarwal", detail: "Abhay Khand-II", comment: "Premium service for my KTM Duke 200. The mechanic was skilled with performance bikes and did a thorough job." },
      { name: "Ritu Bhatnagar", detail: "Abhay Khand-I", comment: "Clean oil change and spark plug replacement at my door. No grease stains on my parking floor." }
    ]
  },
  "nyay-khand": {
    name: "Nyay Khand",
    landmarks: ["Nyay Khand Park", "Nyay Khand Market", "Near Indirapuram"],
    description: "Nyay Khand is a key residential pocket in the Indirapuram belt. Dense residential blocks make reaching external garages inconvenient.",
    whyChoose: "We service all Nyay Khand blocks with mechanics who understand the residential layout and can navigate to your exact parking spot.",
    societies: ["Nyay Khand-I", "Nyay Khand-II", "Nyay Khand-III", "Near Nyay Khand Park", "Nyay Khand Market Lane", "Nyay Khand Main Road"],
    reviewers: [
      { name: "Saurabh Mishra", detail: "Nyay Khand-II", comment: "Battery replacement done in 45 minutes. The mechanic was already carrying the right battery size for my Honda Activa." },
      { name: "Meenakshi Rao", detail: "Nyay Khand-I", comment: "Quick puncture repair during rain. Appreciated the mechanic's dedication." }
    ]
  },
  "shakti-khand": {
    name: "Shakti Khand",
    landmarks: ["Shakti Khand Park", "Shakti Khand Market", "Near NH-24"],
    description: "Shakti Khand is a well-established residential zone in the Indirapuram corridor. Close to NH-24, breakdowns here need rapid roadside assistance.",
    whyChoose: "Our mechanics provide emergency roadside repair on the NH-24 stretch and doorstep service within Shakti Khand residential blocks.",
    societies: ["Shakti Khand-I", "Shakti Khand-II", "Shakti Khand-III", "Shakti Khand-IV", "Near NH-24 Exit", "Shakti Khand Market Area"],
    reviewers: [
      { name: "Karan Malhotra", detail: "Shakti Khand-III", comment: "Emergency clutch cable replacement near NH-24. The mechanic reached in 45 minutes despite heavy traffic." },
      { name: "Sunita Devi", detail: "Shakti Khand-I", comment: "Regular servicing at home for my Scooty Zest. Very reliable and consistent service quality." }
    ]
  },
  "ahinsa-khand": {
    name: "Ahinsa Khand",
    landmarks: ["Ahinsa Khand Park", "Ahinsa Khand Market", "Near Swarn Jayanti Park"],
    description: "Ahinsa Khand is a premium residential enclave in Indirapuram known for its peaceful layout and green spaces. Residents prefer doorstep services to preserve their convenience.",
    whyChoose: "We bring premium service quality directly to your villa driveway or apartment parking in the Ahinsa Khand area.",
    societies: ["Ahinsa Khand-I", "Ahinsa Khand-II", "Near Swarn Jayanti Park", "Ahinsa Khand Market Lane", "Ahinsa Khand Main Road", "Ahinsa Khand Colony"],
    reviewers: [
      { name: "Rajesh Tandon", detail: "Ahinsa Khand-II", comment: "The mechanic was very careful with my parking area. Did a full comprehensive service on my Suzuki Access without any mess." },
      { name: "Priya Singh", detail: "Ahinsa Khand-I", comment: "Transparent pricing and genuine parts. Much better than the local shops near the market." }
    ]
  },
  "shipra-suncity": {
    name: "Shipra Suncity",
    landmarks: ["Shipra Suncity Township", "Shipra Mall", "Indirapuram Habitat Centre"],
    description: "Shipra Suncity is a large gated township in Indirapuram. The internal roads and security gates make external garage visits highly impractical.",
    whyChoose: "Our mechanics are pre-registered at Shipra Suncity's security desk, enabling smooth entry for doorstep repairs at your tower parking.",
    societies: ["Shipra Suncity Tower A-F", "Shipra Riviera", "Shipra Regalia", "Near Shipra Mall Gate", "Internal Park Road", "Tower Parking Area"],
    reviewers: [
      { name: "Gaurav Mehta", detail: "Tower C", comment: "Seamless entry through security and expert brake repair in the tower parking. FixWheel understands gated community logistics." },
      { name: "Aarti Joshi", detail: "Shipra Riviera", comment: "Quick oil change at my apartment parking. The mechanic was very professional and courteous." }
    ]
  },
  "govindpuram": {
    name: "Govindpuram",
    landmarks: ["Govindpuram Market", "Govindpuram Colony", "Near Mohan Nagar"],
    description: "Govindpuram is an affordable residential area with dense housing. Local garages here often lack quality tools and genuine parts.",
    whyChoose: "We bring professional-grade tools and genuine OEM parts directly to your home in Govindpuram, matching the quality of authorized service centers.",
    societies: ["Govindpuram Colony Block A", "Govindpuram Colony Block B", "Near Govindpuram Market", "Main Road Govindpuram", "Govindpuram Park Area", "Railway Crossing Road"],
    reviewers: [
      { name: "Rakesh Yadav", detail: "Block A", comment: "Finally found a reliable mechanic who comes home. Got my Bajaj Pulsar serviced with genuine parts." },
      { name: "Suman Kumari", detail: "Block B", comment: "Very affordable and honest service. No upselling, no hidden charges." }
    ]
  },
  "loni": {
    name: "Loni",
    landmarks: ["Loni Border", "Loni Industrial Area", "Tronica City"],
    description: "Loni is a bustling area at the Ghaziabad-Delhi border with industrial zones and residential pockets. Quality two-wheeler garages are scarce here.",
    whyChoose: "We cover the entire Loni industrial and residential belt with mechanics who carry specialized toolkits for all bike types.",
    societies: ["Loni Border Area", "Loni Industrial Road", "Tronica City Gate", "Loni Market Lane", "DDA Colony Loni", "Near Loni Roundabout"],
    reviewers: [
      { name: "Mohammad Irfan", detail: "Near Loni Border", comment: "Quick roadside fix for my Apache's electrical issue. The mechanic diagnosed it fast and fixed it on the spot." },
      { name: "Jyoti Pandey", detail: "DDA Colony", comment: "Home service for my scooty in this area was a first. Very pleased with the quality and timing." }
    ]
  },
  "mohan-nagar": {
    name: "Mohan Nagar",
    landmarks: ["Mohan Nagar Bus Stand", "Mohan Nagar Metro", "Mohan Nagar Industrial"],
    description: "Mohan Nagar is a major transit hub in Ghaziabad with the bus terminal and metro station. Heavy traffic makes commuting to garages extremely time-consuming.",
    whyChoose: "We station mechanics near the Mohan Nagar transit hub for rapid deployment to any location in the surrounding area.",
    societies: ["Near Mohan Nagar Metro", "Mohan Nagar Bus Stand Road", "Industrial Area Road", "Block A Mohan Nagar", "Block B Mohan Nagar", "Main GT Road Stretch"],
    reviewers: [
      { name: "Suresh Kumar", detail: "Near Metro Station", comment: "Got my commuter bike serviced right outside the metro station area. Saved my entire morning." },
      { name: "Neeta Verma", detail: "Block A", comment: "Reliable and consistent. This is the third time I've used FixWheel. Always satisfied." }
    ]
  },
  "sanjay-nagar": {
    name: "Sanjay Nagar",
    landmarks: ["Sanjay Nagar Market", "Sanjay Nagar Colony", "Main Road"],
    description: "Sanjay Nagar is a well-populated residential colony in Ghaziabad. The narrow lanes and busy markets make garage visits exhausting.",
    whyChoose: "Our mobile mechanics navigate Sanjay Nagar's lanes with compact tool kits, reaching your doorstep without blocking the street.",
    societies: ["Sanjay Nagar Colony Block A", "Block B Residential", "Near Sanjay Nagar Market", "Main Road Sanjay Nagar", "Colony Park Area", "Back Lane Stretch"],
    reviewers: [
      { name: "Deepak Sharma", detail: "Block A", comment: "Mechanic came to my narrow lane entrance and did a full chain sprocket change. Very adaptable and professional." },
      { name: "Savita Devi", detail: "Near Market", comment: "Battery change and general checkup at my door. Didn't have to push my scooter anywhere." }
    ]
  },
  "vijay-nagar": {
    name: "Vijay Nagar",
    landmarks: ["Vijay Nagar Market", "Vijay Nagar Colony", "Near GT Road"],
    description: "Vijay Nagar is a residential colony near GT Road in Ghaziabad. The proximity to GT Road means heavy traffic surrounds the area.",
    whyChoose: "We offer doorstep repairs that eliminate the need to navigate GT Road traffic just to get your bike serviced.",
    societies: ["Vijay Nagar Colony Block A", "Block B Residential", "Near Vijay Nagar Market", "GT Road Adjacent Lane", "Colony Park Area", "Back Lane Stretch"],
    reviewers: [
      { name: "Arvind Gupta", detail: "Block A", comment: "Saved me from GT Road traffic hell. The mechanic did a complete engine oil change at my home in 45 minutes." },
      { name: "Preeti Saxena", detail: "Block B", comment: "Quick brake adjustment and chain lube. Very efficient and polite mechanic." }
    ]
  },
  "gandhi-nagar": {
    name: "Gandhi Nagar",
    landmarks: ["Gandhi Nagar Market", "Gandhi Nagar Colony", "Main Road"],
    description: "Gandhi Nagar is a commercial-cum-residential area known for its markets. Finding a reliable two-wheeler garage amid the commercial chaos is challenging.",
    whyChoose: "We send mechanics directly to your commercial unit or residential block in Gandhi Nagar, bypassing the crowded market lanes.",
    societies: ["Gandhi Nagar Market Road", "Block A Residential", "Block B Commercial Zone", "Main Avenue Gandhi Nagar", "Colony Park Area", "Near Railway Line"],
    reviewers: [
      { name: "Mohit Jain", detail: "Market Road", comment: "Got my delivery bike serviced at my shop doorstep. Didn't lose any business hours. Great concept." },
      { name: "Kamlesh Devi", detail: "Block A", comment: "Prompt and affordable service. The mechanic replaced my scooty's headlamp bulb right at home." }
    ]
  },
  "shastri-nagar": {
    name: "Shastri Nagar",
    landmarks: ["Shastri Nagar Market", "Shastri Nagar Colony", "Main Road"],
    description: "Shastri Nagar is a densely packed residential colony in Ghaziabad. Limited open space makes it difficult to get bikes to traditional garages.",
    whyChoose: "Our mechanics carry compact toolkits and work in tight spaces typical of Shastri Nagar's residential layout.",
    societies: ["Shastri Nagar Colony Block A", "Block B Residential", "Near Shastri Nagar Market", "Main Road Shastri Nagar", "Colony Park Area", "Back Lane Stretch"],
    reviewers: [
      { name: "Vinod Kumar", detail: "Block A", comment: "The mechanic squeezed into my narrow parking spot and did excellent work on my Yamaha FZ. Very adaptable." },
      { name: "Asha Rani", detail: "Block B", comment: "Simple, honest, affordable. Exactly what bike service should be." }
    ]
  },
  "nehru-nagar": {
    name: "Nehru Nagar",
    landmarks: ["Nehru Nagar Park", "Nehru Nagar Market", "Near GT Road"],
    description: "Nehru Nagar is an established residential area near GT Road. Heavy traffic and limited parking at local garages make doorstep repair the smarter choice.",
    whyChoose: "Skip the GT Road traffic entirely. Our mechanics come to your Nehru Nagar residence and service your bike at your convenience.",
    societies: ["Nehru Nagar Colony Block A", "Block B Residential", "Near Nehru Nagar Park", "GT Road Adjacent Lane", "Nehru Nagar Market Area", "Back Lane Stretch"],
    reviewers: [
      { name: "Ajay Dubey", detail: "Block A", comment: "Engine overheating issue diagnosed and fixed at my home. The mechanic was very knowledgeable." },
      { name: "Rekha Sharma", detail: "Near Park", comment: "Regular servicing at my doorstep every quarter. Consistent quality each time." }
    ]
  },
  "surya-nagar": {
    name: "Surya Nagar",
    landmarks: ["Surya Nagar Park", "Surya Nagar Market", "Near Raj Nagar"],
    description: "Surya Nagar is a premium residential area close to Raj Nagar. Residents here prefer scheduled, hassle-free maintenance services.",
    whyChoose: "We offer scheduled doorstep servicing so you can plan your bike maintenance without disrupting your routine.",
    societies: ["Surya Nagar Colony Block A", "Block B Residential", "Near Surya Nagar Park", "Surya Nagar Market Lane", "Main Avenue Surya Nagar", "Raj Nagar Border"],
    reviewers: [
      { name: "Vishal Mehta", detail: "Block A", comment: "Scheduled my service 3 days in advance. Mechanic came exactly on time and did a thorough comprehensive service." },
      { name: "Shalini Kapoor", detail: "Block B", comment: "Premium feel to the entire service experience. Much better than the crowded garage visits." }
    ]
  },
  "dilshad-garden-border": {
    name: "Dilshad Garden Border",
    landmarks: ["Dilshad Garden Metro", "UP-Delhi Border Gate", "Anand Vihar Stretch"],
    description: "The Dilshad Garden border area sits at the busy Delhi-UP crossing. Bikes breaking down here face congested roads and limited garage options.",
    whyChoose: "Our mechanics respond to breakdown calls near the border crossing within 45 minutes, covering both sides of the Delhi-UP stretch.",
    societies: ["Near Dilshad Garden Metro", "UP Gate Area", "Anand Vihar Border Road", "Block A Border Colony", "NH-24 Entry Road", "Service Lane Stretch"],
    reviewers: [
      { name: "Ravi Shankar", detail: "Near UP Gate", comment: "My bike stalled right at the border crossing. FixWheel mechanic arrived quickly and got me back on track." },
      { name: "Seema Tiwari", detail: "Border Colony", comment: "Living on the border, no garage claims our area. FixWheel covers this gap perfectly." }
    ]
  },
  "nh-24": {
    name: "NH-24",
    landmarks: ["NH-24 Highway", "Hindon Elevated Road Entry", "Ghaziabad Toll Plaza"],
    description: "NH-24 is the lifeline connecting Ghaziabad to Delhi. Breakdowns on this busy expressway require emergency roadside assistance.",
    whyChoose: "We specialize in highway breakdown recovery along the NH-24 corridor with rapid-response mechanics stationed at key exits.",
    societies: ["NH-24 Service Road", "Indirapuram NH-24 Exit", "Vaishali NH-24 Exit", "Crossing Republik NH-24 Exit", "Near Toll Plaza", "Hindon Elevated Road Junction"],
    reviewers: [
      { name: "Prashant Kumar", detail: "Near Toll Plaza", comment: "Flat tyre on NH-24 during rush hour. FixWheel mechanic reached in 45 minutes from the nearest exit. Lifesaver." },
      { name: "Kavya Srivastava", detail: "Service Road", comment: "Engine stalled on the highway. Professional rescue and repair on the spot." }
    ]
  },
  "gt-road": {
    name: "GT Road",
    landmarks: ["GT Road Ghaziabad", "Mohan Nagar GT Road", "Dadri GT Road"],
    description: "GT Road is Ghaziabad's historic arterial road with heavy commercial and personal vehicle traffic. Breakdowns here need immediate professional attention.",
    whyChoose: "Our mechanics are stationed along the GT Road stretch for rapid roadside deployment and emergency breakdown assistance.",
    societies: ["GT Road Mohan Nagar Stretch", "GT Road Industrial Zone", "GT Road Dadri Stretch", "Near Bus Terminal", "GT Road Market Area", "GT Road Service Lane"],
    reviewers: [
      { name: "Vikas Yadav", detail: "Mohan Nagar Stretch", comment: "Quick chain repair on GT Road. The mechanic had the right sprocket and replaced it on the roadside." },
      { name: "Geeta Devi", detail: "Near Bus Terminal", comment: "Emergency jump-start during evening traffic. Very responsive service." }
    ]
  },
  "hindon": {
    name: "Hindon",
    landmarks: ["Hindon Air Force Station", "Hindon Elevated Road", "Hindon River Bridge"],
    description: "The Hindon area sits near the Air Force station and elevated road entry. This zone sees heavy commuter traffic, making breakdowns particularly stressful.",
    whyChoose: "We cover the Hindon elevated road exits and surrounding residential pockets with mechanics ready for rapid deployment.",
    societies: ["Near Hindon Air Force Station", "Hindon Elevated Road Entry", "Hindon River Bridge Area", "Hindon Residential Colony", "Service Road Stretch", "Near Raj Nagar"],
    reviewers: [
      { name: "Colonel Rajput (Retd.)", detail: "Near Air Force Station", comment: "Disciplined and professional service. The mechanic arrived on time and completed the work efficiently. Impressive." },
      { name: "Neha Garg", detail: "Hindon Colony", comment: "Smooth service experience. Engine tune-up and oil change done at my residence." }
    ]
  },
  "dasna": {
    name: "Dasna",
    landmarks: ["Dasna Jail", "Dasna Devi Temple", "NH-91 Junction"],
    description: "Dasna is situated on the outskirts of Ghaziabad near the NH-91 junction. Its remote location from central garages makes doorstep service highly valuable.",
    whyChoose: "We extend our coverage to the Dasna zone, ensuring residents in this outskirt area also receive prompt, professional doorstep repair.",
    societies: ["Near Dasna Junction", "Dasna Market Road", "NH-91 Service Lane", "Dasna Temple Road", "Dasna Colony Block A", "Dasna Industrial Area"],
    reviewers: [
      { name: "Pawan Tomar", detail: "Near Junction", comment: "Living in Dasna, I never expected doorstep bike service. FixWheel actually covers this area. Very grateful." },
      { name: "Reena Singh", detail: "Dasna Colony", comment: "Oil change and general checkup at home. The mechanic was skilled and carried all necessary tools." }
    ]
  }
};

export const LOCALITY_DB: Record<string, LocalityDetails> = {};

Object.entries(RAW_LOCALITY_META).forEach(([slug, raw]) => {
  LOCALITY_DB[slug] = {
    name: raw.name,
    slug: slug,
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "473",
    subRegionText: `${raw.landmarks[0]} stretch, ${raw.landmarks[1]} area, and local residential sectors.`,
    heroText: `Looking for doorstep bike repair or a verified two-wheeler mechanic in ${raw.name}, Ghaziabad? FixWheel sends background-checked, fully trained technicians directly to your home, gated society basement, or office space near ${raw.landmarks[0]} to service your scooter or motorcycle on-site.`,
    whyChooseText: `High-rise basements, busy commercial zones, and congested residential lanes around ${raw.name} Ghaziabad make visiting local garages a major time-sink. Our on-site service coordinates directly with your security gate to service your vehicle right where it is parked, saving you valuable hours.`,
    coveragePoints: raw.societies,
    reviews: raw.reviewers.map((rev) => ({
      stars: "★★★★★",
      text: rev.comment,
      who: `${rev.name} — ${rev.detail}, Ghaziabad`
    })),
    faqs: [
      {
        q: `Can the mechanic enter gated societies in ${raw.name} Ghaziabad?`,
        a: `Yes. Our mechanics are background-checked and registered. They coordinate gate entry at societies near ${raw.landmarks[0]} to perform repairs directly in your parking slot.`
      },
      {
        q: `What is the average arrival time in ${raw.name}?`,
        a: `Our mechanics are stationed locally across Ghaziabad and usually reach most parts of ${raw.name} within 45 minutes of booking confirmation.`
      },
      {
        q: `Are spare parts genuine for repairs near ${raw.landmarks[1]}?`,
        a: `Yes, we only supply genuine OEM manufacturer parts. The mechanic will check with you and confirm the price before fitting anything, backed by our standard warranty.`
      }
    ],
    topServices: [
      {
        rank: `#1 IN ${raw.name.toUpperCase()}`,
        title: "Basic Service",
        desc: `Routine maintenance covering brake adjustments, chain lube, and spark plug cleaning for riders around ${raw.landmarks[0]}.`,
        link: "/services/basic-service"
      },
      {
        rank: `#2 IN ${raw.name.toUpperCase()}`,
        title: "Engine Oil Change",
        desc: `Complete engine oil flush and OEM-grade refill done right in your basement parking near ${raw.landmarks[1]}.`,
        link: "/services/oil-change"
      },
      {
        rank: `#3 IN ${raw.name.toUpperCase()}`,
        title: "Battery Replacement",
        desc: `On-site battery diagnostic, jump-start, and warranty-backed battery replacement anywhere in ${raw.name}.`,
        link: "/services/battery-replacement"
      },
      {
        rank: `#4 IN ${raw.name.toUpperCase()}`,
        title: "Puncture & Roadside Assistance",
        desc: `Flat tyre repair and roadside breakdown assistance near major sector roads and commercial exits.`,
        link: "/book"
      }
    ]
  };
});
