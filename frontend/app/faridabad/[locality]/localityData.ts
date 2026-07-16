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

// Raw locality details database for Faridabad
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
  "nit-faridabad": {
    name: "NIT Faridabad",
    landmarks: ["NIT 1-5 Blocks", "BK Chowk", "Town Park"],
    description: "New Industrial Town (NIT) is Faridabad's largest commercial and residential area. Navigating heavy traffic and finding a trusted mechanic here takes hours.",
    whyChoose: "We dispatch mobile mechanics directly to your NIT block or office parking space, saving you a trip to local garages.",
    societies: ["NIT Block 1", "NIT Block 2", "NIT Block 3", "NIT Block 5", "Near Town Park Road", "BK Chowk Stretch"],
    reviewers: [
      { name: "Varun Sharma", detail: "NIT Block 3", comment: "The mechanic changed the spark plug and tuned the carburetor of my Activa right outside my house. Very convenient." },
      { name: "Amit Goel", detail: "Near Town Park", comment: "Fast and clear pricing. Replaced the brake shoes under 45 minutes." }
    ]
  },
  "sector-7": {
    name: "Sector 7",
    landmarks: ["Sector 7 Market", "Community Center", "Block A pockets"],
    description: "Sector 7 is a well-established residential area in Faridabad. Residents often find it hard to get standard mechanic assistance nearby without dealing with crowded local shops.",
    whyChoose: "Get a certified mechanic at your home gate. We handle all routine servicing, clutch adjustments, and oil changes directly in your driveway.",
    societies: ["Block A Pockets", "Block B Residential Road", "Sector 7 Market lane", "Near Community Center", "Sector 8 border lane", "Main Avenue Sector 7"],
    reviewers: [
      { name: "Siddharth Verma", detail: "Block A", comment: "Routine servicing done perfectly at home. Clean work and very professional technician." },
      { name: "Neeta Gupta", detail: "Sector 7 Market", comment: "No hidden charges. The mechanic Suresh was very polite and explained the brake issue clearly." }
    ]
  },
  "sector-8": {
    name: "Sector 8",
    landmarks: ["ESI Hospital", "Sector 8 Market", "Block B pockets"],
    description: "Sector 8 is a popular residential sector close to major medical zones. A bike breakdown here can be highly stressful.",
    whyChoose: "We offer quick doorstep repairs, bringing genuine OEM parts and diagnostic tools directly to your location.",
    societies: ["ESI Hospital Road", "Sector 8 Market Area", "Block B Residential Pockets", "Block C Gate", "Main Sector Road", "ESI Staff Quarters stretch"],
    reviewers: [
      { name: "Pankaj Kumar", detail: "Near ESI Hospital", comment: "My bike had starting trouble in the hospital parking. FixWheel mechanic came in 45 minutes and fixed the battery cable." },
      { name: "Meena Joshi", detail: "Block B", comment: "Convenient service at my residence. Upfront billing and clean cleanup." }
    ]
  },
  "sector-9": {
    name: "Sector 9",
    landmarks: ["Sector 9 Market", "HUDA Pockets", "Sector 9 Main Road"],
    description: "Sector 9 features planned HUDA layouts where residents value prompt, high-standard maintenance services.",
    whyChoose: "Our doorstep mechanics are background-checked and carry professional kits to service your two-wheeler right in your driveway.",
    societies: ["HUDA Sector 9 Pockets", "Sector 9 Market lane", "Sector 9 Main Avenue", "Block D Residential Gate", "Sector 10 Border stretch", "Pocket E Gate"],
    reviewers: [
      { name: "Rohan Sen", detail: "HUDA Pockets", comment: "Used them for a comprehensive service on my Access. The scooter feels brand new now." },
      { name: "Suman Devi", detail: "Block D", comment: "Excellent roadside assistance. Replaced the clutch cable quickly." }
    ]
  },
  "sector-10": {
    name: "Sector 10",
    landmarks: ["Sector 10 Market", "Sector 10 Blocks", "Main Avenue"],
    description: "Sector 10 is a major residential hub in Faridabad. Dragging a scooter to roadside workshops is tiring and time-consuming.",
    whyChoose: "We provide hassle-free doorstep mechanical tuning, backed by our solid 15-day labor warranty.",
    societies: ["Block A Residential Road", "Block B Gate", "Sector 10 Market area", "Sector 10 Main Road", "Pocket C pockets", "Sector 11 Border line"],
    reviewers: [
      { name: "Tushar Gupta", detail: "Block A", comment: "Very fast service. The mechanic was well-equipped and polite." },
      { name: "Pooja Hegde", detail: "Sector 10 Market", comment: "Clean work on my Scooty. Replaced the battery under 45 minutes." }
    ]
  },
  "sector-11": {
    name: "Sector 11",
    landmarks: ["Sector 11 Market", "Sector 11 Pockets", "Milestone school road"],
    description: "Sector 11 has active residential pockets. Local workshops often use unverified parts and lack transparent pricing.",
    whyChoose: "FixWheel offers genuine manufacturer-approved spare parts and flat-rate labor services directly at your doorstep.",
    societies: ["Sector 11 Market Lane", "Block B Residential Pockets", "Milestone School Road", "Pocket E Gate", "Sector 11 Central Avenue", "Near Sector 11 Park"],
    reviewers: [
      { name: "Nikhil Chaudhary", detail: "Block B", comment: "Excellent home service. Changed the engine oil and cleaned the spark plug quickly." },
      { name: "Asha Devi", detail: "Pocket E", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "sector-12": {
    name: "Sector 12",
    landmarks: ["Court Complex", "Sector 12 Park", "Town Park road"],
    description: "Sector 12 is Faridabad's key administrative hub, hosting courts, parks, and retail avenues. Vehicle breakdowns here require fast, professional roadside assistance.",
    whyChoose: "Our rapid-response mechanics are stationed near the Court Complex to dispatch immediately to any roadside or office call.",
    societies: ["Court Complex Road", "Sector 12 Park Lane", "Town Park boundary", "Sector 12 Commercial block", "Main Bypass road stretch", "Near HUDA Office"],
    reviewers: [
      { name: "Karan Johar", detail: "Court Complex area", comment: "Broke down near the court. Mechanic arrived in 45 minutes, repaired the accelerator cable, and got me moving." },
      { name: "Anjali Gupta", detail: "Sector 12 Park", comment: "Prompt booking and good response from the technician. Highly convenient." }
    ]
  },
  "sector-14": {
    name: "Sector 14",
    landmarks: ["Apeejay School", "Sector 14 Market", "Sector 14 Blocks"],
    description: "Sector 14 is one of Faridabad's high-end residential communities. Gated enclaves make visiting traditional workshops highly exhausting.",
    whyChoose: "We provide high-standard mechanical care inside your villa driveway or gated residential parking space.",
    societies: ["Apeejay School Road", "Block A Villa Pockets", "Block B Residential Gate", "Sector 14 Market stretch", "Pocket C pockets", "Main Avenue Sector 14"],
    reviewers: [
      { name: "Manish Mishra", detail: "Block B", comment: "The mechanic did a great job in my parking space. Brought all tools and cleaned the workspace afterward." },
      { name: "Rajesh K.", detail: "Apeejay road", comment: "Best doorstep bike service in Faridabad. Quick and transparent." }
    ]
  },
  "sector-15": {
    name: "Sector 15",
    landmarks: ["Sector 15 Market", "Modern School", "Sector 15 Gate"],
    description: "Sector 15 is a premium residential sector in Faridabad. Residents value premium, clean, and time-saving doorstep services.",
    whyChoose: "Our mechanics register at your society gate and perform the repair directly in your assigned garage or open parking slot.",
    societies: ["Modern School Road", "Sector 15 Market Lane", "Block A Pockets", "Block B Residential Gate", "Sector 15 Central Avenue", "Near Community Center"],
    reviewers: [
      { name: "Rishabh Shah", detail: "Block B", comment: "Very clean work. The mechanic did a comprehensive servicing for my Activa. Highly recommended." },
      { name: "Nisha Singhal", detail: "Sector 15 Gate", comment: "Transparent billing and warranty on parts. Much better than local garages." }
    ]
  },
  "sector-16": {
    name: "Sector 16",
    landmarks: ["Metro Hospital", "Sector 16 Market", "QRG Health City"],
    description: "Sector 16 features busy medical facilities and residential blocks. Towing a broken vehicle through this traffic is unsafe and tedious.",
    whyChoose: "Get a verified mobile mechanic to service your motorcycle or scooter right in your apartment parking.",
    societies: ["Metro Hospital stretch", "QRG Hospital Road", "Sector 16 Market lane", "Block A residential pockets", "Pocket E Gate", "Sector 16 Main Avenue"],
    reviewers: [
      { name: "Sudhir Pandey", detail: "Near Metro Hospital", comment: "Fast service during a medical emergency. The mechanic jump-started my scooter in 45 minutes." },
      { name: "Suman Lata", detail: "Block A", comment: "Routine servicing done perfectly at home. Clean work and honest advice." }
    ]
  },
  "sector-17": {
    name: "Sector 17",
    landmarks: ["Sector 17 Market", "Sector 17 Blocks", "Main Avenue"],
    description: "Sector 17 is a planned residential zone with busy markets. Roadside mechanics here often use unverified parts.",
    whyChoose: "FixWheel offers genuine manufacturer-approved spare parts and flat-rate labor services directly at your doorstep.",
    societies: ["Sector 17 Market Lane", "Block B Residential Pockets", "Main Avenue Sector 17", "Pocket D Gate", "Sector 17 Central Avenue", "Near Sector 17 Park"],
    reviewers: [
      { name: "Abhinav Singh", detail: "Block B", comment: "Excellent home service. Changed the engine oil and cleaned the spark plug quickly." },
      { name: "Prerna Gupta", detail: "Pocket D", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "sector-19": {
    name: "Sector 19",
    landmarks: ["Sector 19 Market", "Sector 19 Blocks", "Somerville school road"],
    description: "Sector 19 features sprawling residential layouts and school zones. Finding a reliable local garage nearby without pushy recommendations is rare.",
    whyChoose: "We focus on transparent doorstep service, providing pre-confirmed estimates and detailed digital invoices.",
    societies: ["Somerville School Road", "Block A Residential Gate", "Sector 19 Market avenue", "Block B pockets", "Sector 19 Border line", "Ganga Apartments stretch"],
    reviewers: [
      { name: "Sameer Alam", detail: "Block A", comment: "Very professional work. Did general checkup and chain cleaning for my Yamaha R15." },
      { name: "Tanya Sen", detail: "E-Block", comment: "No hidden charges. Replaced the brake shoes on my scooty right in front of me." }
    ]
  },
  "sector-21": {
    name: "Sector 21",
    landmarks: ["Sector 21 Market", "Sector 21 Pockets", "Badkhal Road"],
    description: "Sector 21 features premium residential societies. Gated townships here are far from commercial garage hubs.",
    whyChoose: "We provide high-standard mechanical services directly in your high-rise basement parking, ensuring premium care for your two-wheeler.",
    societies: ["Badkhal Road Gate", "Sector 21 Main Market Road", "Block A Villa Pockets", "Block B Residential Gate", "Sector 21 Market Avenue", "Pocket C pockets"],
    reviewers: [
      { name: "Rohit Sharma", detail: "Block B", comment: "Top-class service. Replaced the engine oil and adjusted the brakes in the basement. Professional and clean work." },
      { name: "Sneha Reddy", detail: "Sector 21 Gate", comment: "Highly reliable doorstep service. Pre-confirmed prices and genuine parts." }
    ]
  },
  "sector-22": {
    name: "Sector 22",
    landmarks: ["Hardware Chowk", "DAV School", "Sector 22 Industrial"],
    description: "Sector 22 is an industrial-cum-residential zone with heavy traffic and heavy-duty vehicles. Finding a clean two-wheeler garage here is almost impossible.",
    whyChoose: "We send mechanics to your commercial complex or workspace to perform repairs safely on-site.",
    societies: ["Hardware Chowk area", "DAV School Road", "Sector 22 Industrial area", "Block A commercial gates", "Sector 22 main avenue", "Near police chowki"],
    reviewers: [
      { name: "Vikram Rathore", detail: "DAV School Road", comment: "Got my clutch cable replaced in the office basement. Very prompt and professional service." },
      { name: "Jasprit Bumrah", detail: "Block A", comment: "Saved me from pushing my bike in the heat. Quick puncture repair." }
    ]
  },
  "sector-23": {
    name: "Sector 23",
    landmarks: ["Sector 23 Market", "Sanjay Memorial", "Sector 23 blocks"],
    description: "Sector 23 features residential layouts and local commercial blocks. Towing services to local Faridabad garages are expensive and slow.",
    whyChoose: "Get a certified mechanic at your society gate under 45 minutes for general servicing, engine diagnostics, or battery fixes.",
    societies: ["Sector 23 Market Lane", "Sanjay Memorial road", "Block B Residential Gate", "Block I pockets", "Sector 23 main access road", "Near police chowki"],
    reviewers: [
      { name: "Ashwin Ravichandran", detail: "Block B", comment: "The mechanic did a great job with my Apache. Spark plug cleaning and tuning done perfectly." },
      { name: "Divya Reddy", detail: "Sector 23 Gate", comment: "Saves a lot of time. Best doorstep mechanical service in Sector 23." }
    ]
  },
  "sector-28": {
    name: "Sector 28",
    landmarks: ["Sector 28 Metro", "Sector 28 Market", "Block A pockets"],
    description: "Sector 28 has busy metro corridors and premium high-rise apartments. Pushing bikes through traffic to local garages is unsafe and tedious.",
    whyChoose: "We dispatch mobile mechanics directly to your society basement, offering flat-rate pricing and standard labor guarantees.",
    societies: ["Sector 28 Metro Exit", "Sector 28 Market Lane", "Block A Residential Road", "Block B Gate", "Main Sector Road", "Near Metro Station"],
    reviewers: [
      { name: "Alok Nath", detail: "Block A", comment: "Quick brake pad replacement and checkup. Done in under 45 minutes in the basement." },
      { name: "Swati Roy", detail: "Sector 28 Market", comment: "Affordable service. Saved me a trip to the busy local market garages." }
    ]
  },
  "sector-29": {
    name: "Sector 29",
    landmarks: ["Sector 29 Market", "Sector 29 Blocks", "Main Avenue"],
    description: "Sector 29 has planned residential blocks. Local workshops often use unverified parts and lack transparent pricing.",
    whyChoose: "FixWheel offers genuine manufacturer-approved spare parts and flat-rate labor services directly at your doorstep.",
    societies: ["Sector 29 Market Lane", "Block B Residential Pockets", "Main Avenue Sector 29", "Pocket D Gate", "Sector 29 Central Avenue", "Near Sector 29 Park"],
    reviewers: [
      { name: "Abhinav Singh", detail: "Block B", comment: "Excellent home service. Changed the engine oil and cleaned the spark plug quickly." },
      { name: "Prerna Gupta", detail: "Pocket D", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "sector-31": {
    name: "Sector 31",
    landmarks: ["Sector 31 Market", "Sector 31 Pockets", "Main Avenue"],
    description: "Sector 31 is a popular residential sector. Finding a reliable local garage nearby without pushy recommendations is rare.",
    whyChoose: "We focus on transparent doorstep service, providing pre-confirmed estimates and detailed digital invoices.",
    societies: ["Sector 31 Market Lane", "Block B Residential Pockets", "Main Avenue Sector 31", "Pocket D Gate", "Sector 31 Central Avenue", "Near Sector 31 Park"],
    reviewers: [
      { name: "Nikhil Chaudhary", detail: "Block B", comment: "Very professional work. Did general checkup and chain cleaning for my Yamaha R15." },
      { name: "Asha Devi", detail: "Pocket D", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "sector-37": {
    name: "Sector 37",
    landmarks: ["Sector 37 Metro", "Ashoka Enclave", "Sarai Border"],
    description: "Sector 37 is a key transit sector in Faridabad with high daily commuter footfall. Breakdowns here require fast, professional roadside assistance.",
    whyChoose: "Our rapid-response mechanics are stationed near the Sarai Border to dispatch immediately to any roadside or residential call.",
    societies: ["Sector 37 Metro Exit", "Ashoka Enclave Gate", "Sarai Border Road", "Block A Residential Road", "Block B Gate", "Main Sector Road"],
    reviewers: [
      { name: "Tushar Anand", detail: "Near Metro Station", comment: "Got a flat tyre fixed near the metro station. The service was fast and the pricing was very transparent." },
      { name: "Ritu Sharma", detail: "Block A", comment: "Clean work on my Scooty. Replaced the battery at home under 45 minutes." }
    ]
  },
  "sector-46": {
    name: "Sector 46",
    landmarks: ["Sector 46 Market", "Sector 46 Blocks", "Main Avenue"],
    description: "Sector 46 has active residential pockets. Local workshops often use unverified parts and lack transparent pricing.",
    whyChoose: "FixWheel offers genuine manufacturer-approved spare parts and flat-rate labor services directly at your doorstep.",
    societies: ["Sector 46 Market Lane", "Block B Residential Pockets", "Main Avenue Sector 46", "Pocket D Gate", "Sector 46 Central Avenue", "Near Sector 46 Park"],
    reviewers: [
      { name: "Abhinav Singh", detail: "Block B", comment: "Excellent home service. Changed the engine oil and cleaned the spark plug quickly." },
      { name: "Prerna Gupta", detail: "Pocket D", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "sector-55": {
    name: "Sector 55",
    landmarks: ["Sector 55 Market", "Block A Pockets", "Main Avenue"],
    description: "Sector 55 has active residential pockets. Local workshops often use unverified parts and lack transparent pricing.",
    whyChoose: "FixWheel offers genuine manufacturer-approved spare parts and flat-rate labor services directly at your doorstep.",
    societies: ["Sector 55 Market Lane", "Block B Residential Pockets", "Main Avenue Sector 55", "Pocket D Gate", "Sector 55 Central Avenue", "Near Sector 55 Park"],
    reviewers: [
      { name: "Abhinav Singh", detail: "Block B", comment: "Excellent home service. Changed the engine oil and cleaned the spark plug quickly." },
      { name: "Prerna Gupta", detail: "Pocket D", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "sector-56": {
    name: "Sector 56",
    landmarks: ["Sector 56 Market", "Block C Pockets", "Main Avenue"],
    description: "Sector 56 is a well-populated residential zone. Finding a reliable local garage nearby without pushy recommendations is rare.",
    whyChoose: "We focus on transparent doorstep service, providing pre-confirmed estimates and detailed digital invoices.",
    societies: ["Sector 56 Market Lane", "Block B Residential Pockets", "Main Avenue Sector 56", "Pocket D Gate", "Sector 56 Central Avenue", "Near Sector 56 Park"],
    reviewers: [
      { name: "Nikhil Chaudhary", detail: "Block B", comment: "Very professional work. Did general checkup and chain cleaning for my Yamaha R15." },
      { name: "Asha Devi", detail: "Pocket D", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "sector-86": {
    name: "Sector 86",
    landmarks: ["Omaxe Heights", "Princess Park", "Sector 86 High-rise"],
    description: "Sector 86 is filled with premium high-rise societies. Coordinating with mechanics outside society gates can be incredibly tedious.",
    whyChoose: "Our mechanics register at your society gate and perform the repair directly in your assigned basement or open parking slot.",
    societies: ["Omaxe Heights Gate", "Princess Park basement", "Sector 86 Metro Area", "Futec Gateway stretch", "Golf City entrance", "AIMS Max Gardenia"],
    reviewers: [
      { name: "Gaurav Sen", detail: "Omaxe Heights", comment: "Hassle-free service in my society basement. The technician brought all tools and cleaned up the oil spills." },
      { name: "Neha Saxena", detail: "Princess Park", comment: "Fast booking and polite mechanic. Best doorstep bike service in Sector 86." }
    ]
  },
  "sector-88": {
    name: "Sector 88",
    landmarks: ["RPS City", "Sector 88 Pockets", "Kheri Road"],
    description: "Sector 88 features modern residential high-rises. Towing services to local Faridabad garages are expensive and slow.",
    whyChoose: "Get a certified mechanic at your society basement within 45 minutes for general servicing, engine diagnostics, or battery fixes.",
    societies: ["RPS City Gate", "Sector 88 Pockets basement", "Kheri Road stretch", "Victory Crossroads entrance", "Sikka Kaamna Greens", "Sector 88 main access road"],
    reviewers: [
      { name: "Ashwin Ravichandran", detail: "RPS City", comment: "The mechanic did a great job with my Apache. Spark plug cleaning and tuning done perfectly." },
      { name: "Divya Reddy", detail: "Sector 88 Gate", comment: "Saves a lot of time. Best doorstep mechanical service in Sector 88." }
    ]
  },
  "sector-89": {
    name: "Sector 89",
    landmarks: ["Puri Pranayam", "Sector 89 blocks", "Main Avenue"],
    description: "Sector 89 has planned residential blocks. Local workshops often use unverified parts and lack transparent pricing.",
    whyChoose: "FixWheel offers genuine manufacturer-approved spare parts and flat-rate labor services directly at your doorstep.",
    societies: ["Puri Pranayam Gate", "Block B Residential Pockets", "Main Avenue Sector 89", "Pocket D Gate", "Sector 89 Central Avenue", "Near Sector 89 Park"],
    reviewers: [
      { name: "Abhinav Singh", detail: "Block B", comment: "Excellent home service. Changed the engine oil and cleaned the spark plug quickly." },
      { name: "Prerna Gupta", detail: "Pocket D", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "old-faridabad": {
    name: "Old Faridabad",
    landmarks: ["Old Faridabad Metro", "Old Faridabad Market", "Traditional Commercial"],
    description: "Old Faridabad features busy metro corridors and traditional markets. Pushing bikes through traffic to local garages is unsafe and tedious.",
    whyChoose: "We dispatch mobile mechanics directly to your location, offering flat-rate pricing and standard labor guarantees.",
    societies: ["Old Faridabad Metro Exit", "Old Faridabad Market Lane", "Block A Residential Road", "Block B Gate", "Main Sector Road", "Near Metro Station"],
    reviewers: [
      { name: "Alok Nath", detail: "Block A", comment: "Quick brake pad replacement and checkup. Done in under 45 minutes in the basement." },
      { name: "Swati Roy", detail: "Old Faridabad Market", comment: "Affordable service. Saved me a trip to the busy local market garages." }
    ]
  },
  "ballabhgarh": {
    name: "Ballabhgarh",
    landmarks: ["Ballabhgarh Bus Stand", "Ballabhgarh Metro", "Raja Nahar Singh Palace"],
    description: "Ballabhgarh is a busy transit sector in Faridabad with high daily commuter footfall. Breakdowns here require fast, professional roadside assistance.",
    whyChoose: "Our rapid-response mechanics are stationed near the Bus Stand to dispatch immediately to any roadside or residential call.",
    societies: ["Ballabhgarh Bus Stand Road", "Ballabhgarh Metro Exit", "Raja Nahar Singh Palace Road", "Block A Residential Road", "Block B Gate", "Main Sector Road"],
    reviewers: [
      { name: "Tushar Anand", detail: "Near Metro Station", comment: "Got a flat tyre fixed near the metro station. The service was fast and the pricing was very transparent." },
      { name: "Ritu Sharma", detail: "Block A", comment: "Clean work on my Scooty. Replaced the battery at home under 45 minutes." }
    ]
  },
  "tigaon-road": {
    name: "Tigaon Road",
    landmarks: ["Tigaon Road Market", "Tigaon Crossing", "Main Avenue"],
    description: "Tigaon Road has active residential pockets. Local workshops often use unverified parts and lack transparent pricing.",
    whyChoose: "FixWheel offers genuine manufacturer-approved spare parts and flat-rate labor services directly at your doorstep.",
    societies: ["Tigaon Road Market Lane", "Block B Residential Pockets", "Main Avenue Tigaon Road", "Pocket D Gate", "Tigaon Road Central Avenue", "Near Tigaon Road Park"],
    reviewers: [
      { name: "Abhinav Singh", detail: "Block B", comment: "Excellent home service. Changed the engine oil and cleaned the spark plug quickly." },
      { name: "Prerna Gupta", detail: "Pocket D", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "suraj-kund": {
    name: "Suraj Kund",
    landmarks: ["Surajkund Mela Ground", "Taj Vivanta", "Suraj Kund Lake"],
    description: "Suraj Kund is a premium residential and tourist zone. High-rise living makes on-site vehicle maintenance highly desirable.",
    whyChoose: "We provide hassle-free servicing directly in your apartment parking. Upfront quotes and certified mechanics guaranteed.",
    societies: ["Surajkund Mela Ground Gate", "Taj Vivanta Area", "Suraj Kund Lake Road", "Lotus Boulevard Espacia", "Century Apartments area", "Near Suraj Kund Green Belt"],
    reviewers: [
      { name: "Vijay Shekhar", detail: "Surajkund Mela Ground", comment: "Professional mechanic did a complete engine oil change and chain cleaning. Clean work." },
      { name: "Preeti Saran", detail: "Lotus Espacia", comment: "Prompt booking and excellent service. Will definitely use FixWheel again." }
    ]
  },
  "mewla-maharajpur": {
    name: "Mewla Maharajpur",
    landmarks: ["Mewla Maharajpur Metro", "Mewla Maharajpur pockets", "Main Avenue"],
    description: "Mewla Maharajpur is a well-populated residential zone. Finding a reliable local garage nearby without pushy recommendations is rare.",
    whyChoose: "We focus on transparent doorstep service, providing pre-confirmed estimates and detailed digital invoices.",
    societies: ["Mewla Maharajpur Metro Exit", "Block B Residential Pockets", "Main Avenue Mewla Maharajpur", "Pocket D Gate", "Mewla Maharajpur Central Avenue", "Near Mewla Maharajpur Park"],
    reviewers: [
      { name: "Nikhil Chaudhary", detail: "Block B", comment: "Very professional work. Did general checkup and chain cleaning for my Yamaha R15." },
      { name: "Asha Devi", detail: "Pocket D", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "bk-chowk": {
    name: "BK Chowk",
    landmarks: ["BK Hospital", "BK Chowk Crossing", "Main Avenue"],
    description: "BK Chowk is a key transit sector in Faridabad with high daily commuter footfall. Breakdowns here require fast, professional roadside assistance.",
    whyChoose: "Our rapid-response mechanics are stationed near the BK Hospital to dispatch immediately to any roadside or residential call.",
    societies: ["BK Hospital Road", "BK Chowk Crossing Road", "Block A Residential Road", "Block B Gate", "Main Sector Road", "Near Metro Station"],
    reviewers: [
      { name: "Tushar Anand", detail: "Near Metro Station", comment: "Got a flat tyre fixed near the metro station. The service was fast and the pricing was very transparent." },
      { name: "Ritu Sharma", detail: "Block A", comment: "Clean work on my Scooty. Replaced the battery at home under 45 minutes." }
    ]
  },
  "bata-chowk": {
    name: "Bata Chowk",
    landmarks: ["Bata Chowk Metro", "Bata Factory", "Bata Flyover"],
    description: "Bata Chowk is a busy transit sector in Faridabad with high daily commuter footfall. Breakdowns here require fast, professional roadside assistance.",
    whyChoose: "Our rapid-response mechanics are stationed near the Bata Factory to dispatch immediately to any roadside or residential call.",
    societies: ["Bata Chowk Metro Exit", "Bata Factory Road", "Bata Flyover Road", "Block A Residential Road", "Block B Gate", "Main Sector Road"],
    reviewers: [
      { name: "Tushar Anand", detail: "Near Metro Station", comment: "Got a flat tyre fixed near the metro station. The service was fast and the pricing was very transparent." },
      { name: "Ritu Sharma", detail: "Block A", comment: "Clean work on my Scooty. Replaced the battery at home under 45 minutes." }
    ]
  },
  "ymca-chowk": {
    name: "YMCA Chowk",
    landmarks: ["YMCA University", "Escorts Mujesar Metro", "YMCA Crossing"],
    description: "YMCA Chowk is a key transit sector in Faridabad with high daily commuter footfall. Breakdowns here require fast, professional roadside assistance.",
    whyChoose: "Our rapid-response mechanics are stationed near the YMCA University to dispatch immediately to any roadside or residential call.",
    societies: ["YMCA University Road", "Escorts Mujesar Metro Exit", "YMCA Crossing Road", "Block A Residential Road", "Block B Gate", "Main Sector Road"],
    reviewers: [
      { name: "Tushar Anand", detail: "Near Metro Station", comment: "Got a flat tyre fixed near the metro station. The service was fast and the pricing was very transparent." },
      { name: "Ritu Sharma", detail: "Block A", comment: "Clean work on my Scooty. Replaced the battery at home under 45 minutes." }
    ]
  }
};

// Programmatically build LOCALITY_DB by populating standard template fields
export const LOCALITY_DB: Record<string, LocalityDetails> = {};

Object.entries(RAW_LOCALITY_META).forEach(([slug, raw]) => {
  const landmarksList = raw.landmarks.join(", ");
  LOCALITY_DB[slug] = {
    name: raw.name,
    slug: slug,
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "473",
    subRegionText: `${raw.landmarks[0]} stretch, ${raw.landmarks[1]} area, and local residential sectors.`,
    heroText: `Looking for doorstep bike repair or a verified two-wheeler mechanic in ${raw.name}, Faridabad? FixWheel sends background-checked, fully trained technicians directly to your home, gated society basement, or office space near ${raw.landmarks[0]} to service your scooter or motorcycle on-site.`,
    whyChooseText: `Gated society basements, busy tech parks, and commercial zones make visiting local garages around ${raw.name} Faridabad highly inconvenient. Our on-site service coordinates directly with your security gate to service your vehicle right where it is parked, saving you valuable hours.`,
    coveragePoints: raw.societies,
    reviews: raw.reviewers.map((rev) => ({
      stars: "★★★★★",
      text: rev.comment,
      who: `${rev.name} — ${rev.detail}, Faridabad`
    })),
    faqs: [
      {
        q: `Can the mechanic enter gated societies in ${raw.name} Faridabad?`,
        a: `Yes. Our mechanics are background-checked and registered. They easily coordinate gate entry at premium societies like those near ${raw.landmarks[0]} to perform repairs directly in your parking slot.`
      },
      {
        q: `What is the average arrival time in ${raw.name}?`,
        a: `Our mechanics are stationed locally across Faridabad and usually reach most parts of ${raw.name} within 45 minutes of booking confirmation.`
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
