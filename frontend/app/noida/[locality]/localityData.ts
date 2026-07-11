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

// Raw locality details database for Noida
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
  "sector-18": {
    name: "Sector 18",
    landmarks: ["Atta Market", "Wave Mall", "Sector 18 Metro", "Radisson Blue"],
    description: "Sector 18 is Noida's premier commercial hub, always bustling with retail and corporate visitors. Getting a bike repaired here at local workshops is a major hassle due to heavy parking restrictions and high shop charges.",
    whyChoose: "Our mechanics coordinate directly with your office parking or commercial block. We handle minor adjustments, battery jumps, and standard oil service on the spot while you attend to your work or shopping.",
    societies: ["Atta Market Lane", "Radisson Hotel Area", "Sector 18 Metro Exit", "Wave Mall Parking Side", "Block E Commercial Area", "Multi-level Parking Stretch"],
    reviewers: [
      { name: "Varun Malhotra", detail: "Wave Mall area", comment: "My Duke wouldn't start in the basement parking. The mechanic arrived within 30 minutes, diagnosed a loose spark plug cap, and fixed it instantly." },
      { name: "Amit Kumar", detail: "Atta Market parking", comment: "Fast brake cable tightening service during my office hours. Very affordable." }
    ]
  },
  "sector-22": {
    name: "Sector 22",
    landmarks: ["Somerville School", "Sector 22 Market", "Adobe crossing", "Block C pockets"],
    description: "Sector 22 is a dense residential block mixed with local market areas. Finding a reliable local garage here without long waiting times is difficult.",
    whyChoose: "We provide hassle-free service inside your house driveway or society parking area. Save time and get clean servicing without pushy upselling.",
    societies: ["Somerville School Lane", "Block A & B Pockets", "Block C Residential Gate", "Sector 22 Main Market Road", "Sector 23 Border area", "Adobe Crossing Stretch"],
    reviewers: [
      { name: "Deepak Rawat", detail: "Block B", comment: "Very convenient service at home. The technician brought OEM Honda oil and did a quick oil change for my Activa." },
      { name: "Meena Joshi", detail: "Somerville area", comment: "Brake shoe replacement was done right in my front yard. Honest pricing." }
    ]
  },
  "sector-27": {
    name: "Sector 27",
    landmarks: ["Kailash Hospital", "Cambridge School", "Indira Gandhi Eye Hospital"],
    description: "Sector 27 is an established residential sector with narrow inner streets and busy main roads. Towing a broken-down vehicle to a workshop in this area is highly inconvenient.",
    whyChoose: "Our doorstep mechanics are locally stationed to navigate Sector 27 easily, bringing full service kits to your residence.",
    societies: ["Kailash Hospital road", "Block B Residential Pockets", "Cambridge School stretch", "Pocket E Gate", "Sector 27 Main Avenue", "Near Indira Gandhi Eye Care"],
    reviewers: [
      { name: "Siddharth Goel", detail: "Near Kailash Hospital", comment: "My bike broke down right outside the hospital. FixWheel technician was there in 25 minutes and fixed the wiring issue on the spot." },
      { name: "Neeta Singh", detail: "Block B", comment: "Got my Jupiter serviced at home. No mess, clean work, and prompt response." }
    ]
  },
  "sector-29": {
    name: "Sector 29",
    landmarks: ["Brahmaputra Market", "Ganga Shopping Complex", "Noida Club"],
    description: "Sector 29 houses premium residential layouts and historic local markets. Navigating the busy market crowds for a basic two-wheeler tune-up is a waste of your weekend.",
    whyChoose: "We service your motorcycle or scooter directly in your residential pocket driveway, allowing you to relax at home.",
    societies: ["Brahmaputra Market Lane", "Noida Club Road", "Ganga Complex border", "Block A and B Residential", "Church Road stretch", "Sudarshan Avenue"],
    reviewers: [
      { name: "Kapil Dev", detail: "Brahmaputra Lane", comment: "Excellent service. Did chain lubrication and basic checkup at my parking space. Saved me a trip to Noida Sector 16 garages." },
      { name: "Sushma Tyagi", detail: "Block A", comment: "The technician Suresh was very polite. Checked the vehicle thoroughly and replaced the air filter. Fully satisfied." }
    ]
  },
  "sector-37": {
    name: "Sector 37",
    landmarks: ["Golf Course Metro", "Army Public School", "Sector 37 Bus Terminus"],
    description: "Sector 37 is a key transit sector in Noida with high daily commuter footfall. Breakdowns here require fast, professional roadside assistance.",
    whyChoose: "Our rapid-response mechanics are stationed near the Golf Course Metro to dispatch immediately to any roadside or residential call.",
    societies: ["Army Public School road", "Sector 37 Bus Stand stretch", "Golf Course Metro Exit", "Block A residential pockets", "Amrapali Road junction", "Subhash Park lane"],
    reviewers: [
      { name: "Tushar Anand", detail: "Near Metro Station", comment: "Got a flat tyre fixed near the metro station. The service was fast and the pricing was very transparent." },
      { name: "Ritu Sharma", detail: "Block A", comment: "Clean work on my Scooty. Replaced the battery at home under 30 minutes." }
    ]
  },
  "sector-44": {
    name: "Sector 44",
    landmarks: ["Amity International", "Shanti Hospital", "Sector 44 Blocks"],
    description: "Sector 44 is home to prominent schools and large residential pockets, where residents value premium and time-saving doorstep services.",
    whyChoose: "We offer professional mechanical repair services inside your residential gates. Complete work transparency and premium spare parts guaranteed.",
    societies: ["Amity School road", "Block A Pockets", "Block B Residential Gate", "Shanti Hospital lane", "Sector 44 Market avenue", "Expressway exit stretch"],
    reviewers: [
      { name: "Hiten Shah", detail: "Block B", comment: "Used FixWheel for a comprehensive service on my Suzuki Access. Professional technician and very smooth ride now." },
      { name: "Pooja Hegde", detail: "Near Shanti Hospital", comment: "Very fast service. The mechanic was well-equipped and polite." }
    ]
  },
  "sector-50": {
    name: "Sector 50",
    landmarks: ["Meghdoolam Park", "Ramagya School", "Sector 50 Market"],
    description: "Sector 50 is one of Noida's high-end residential communities. Towing a scooter or bike to messy local roadside workshops doesn't fit the lifestyle here.",
    whyChoose: "We provide clean, high-standard maintenance right in your villa driveway or gated community basement parking.",
    societies: ["Ramagya School road", "Meghdoolam Park Lane", "Sector 50 Market stretch", "Block A Villa Pockets", "Block F Residential Gate", "Omaxe Twin Towers side"],
    reviewers: [
      { name: "Karan Johar", detail: "Omaxe Twin Towers", comment: "The mechanic did a great job in the basement. Brought all tools and cleaned the workspace afterward." },
      { name: "Anjali Gupta", detail: "Block A", comment: "Very convenient. I booked online and they came within 40 minutes to fix my Activa's brakes." }
    ]
  },
  "sector-51": {
    name: "Sector 51",
    landmarks: ["Sector 51 Metro", "Kendriya Vihar", "Block F pockets"],
    description: "Sector 51 has extensive residential apartments and metro transit lanes. Local residents often struggle to find time for routine bike servicing.",
    whyChoose: "Get your two-wheeler serviced at your convenience in the society parking lot while you focus on your day.",
    societies: ["Kendriya Vihar Gate", "Sector 51 Metro Area", "Block F Pockets", "Block B Residential Avenue", "Noida Authority office stretch", "Shiva Temple lane"],
    reviewers: [
      { name: "Pankaj Tripathi", detail: "Kendriya Vihar", comment: "Excellent home service. The mechanic changed the spark plug and cleaned the carburetor in under 40 minutes." },
      { name: "Jyoti Rai", detail: "Block F", comment: "Fair pricing and prompt delivery. Recommended for everyone in Sector 51." }
    ]
  },
  "sector-52": {
    name: "Sector 52",
    landmarks: ["Shatabdi Vihar", "Sector 52 Metro interchange", "Aravali Apartments"],
    description: "Sector 52 is a major residential and transit junction, where traffic and busy schedules make visiting traditional workshops highly exhausting.",
    whyChoose: "We send certified two-wheeler mechanics to repair your vehicle in your residential enclave or apartment basement.",
    societies: ["Shatabdi Vihar pockets", "Sector 52 Metro Station area", "Aravali Apartments gate", "Block D Residential", "Gijhore border stretch", "Sector 52 Main Road"],
    reviewers: [
      { name: "Manish Mishra", detail: "Shatabdi Vihar", comment: "Got my Pulsar serviced. Engine oil change and drum brake adjustment were done quickly. Great value." },
      { name: "Rajesh K.", detail: "Aravali Apartments", comment: "The mechanic was very skilled and resolved the self-start issue in 20 minutes." }
    ]
  },
  "sector-55": {
    name: "Sector 55",
    landmarks: ["Sector 55 Block A", "Vanasthali School", "E-Block Market"],
    description: "Sector 55 features sprawling residential layouts and school zones. Finding a reliable local garage nearby without pushy recommendations is rare.",
    whyChoose: "We focus on transparent doorstep service, providing pre-confirmed estimates and detailed digital invoices.",
    societies: ["Vanasthali School Road", "Block A Residential Gate", "E-Block Market avenue", "Block B pockets", "Sector 56 Border line", "Ganga Apartments stretch"],
    reviewers: [
      { name: "Nikhil Chaudhary", detail: "Block A", comment: "Very professional work. Did general checkup and chain cleaning for my Yamaha R15." },
      { name: "Asha Devi", detail: "E-Block", comment: "No hidden charges. Replaced the horn on my scooty right in front of me." }
    ]
  },
  "sector-56": {
    name: "Sector 56",
    landmarks: ["Sector 56 Market", "DAV Public School", "Metro Hospital"],
    description: "Sector 56 is a well-populated residential zone with busy markets and hospitals. Roadside mechanics here often overcharge and use unverified parts.",
    whyChoose: "FixWheel offers genuine manufacturer-approved spare parts and flat-rate labor services directly at your doorstep.",
    societies: ["DAV School road", "Metro Hospital stretch", "Sector 56 Market area", "Block B residential gate", "Block F pockets", "Devi Mandir road"],
    reviewers: [
      { name: "Sudhir Pandey", detail: "Near Metro Hospital", comment: "Fast service during a medical emergency. The mechanic jump-started my scooter in 15 minutes." },
      { name: "Suman Lata", detail: "Block B", comment: "Routine servicing done perfectly at home. Clean work and honest advice." }
    ]
  },
  "sector-62": {
    name: "Sector 62",
    landmarks: ["JSS Academy", "Stellar IT Park", "Fortis Hospital", "Sector 62 Metro"],
    description: "Sector 62 is Noida's premier institutional and tech hub, home to thousands of IT professionals and students. Bringing your bike to local garages consumes valuable working hours.",
    whyChoose: "Our mechanics coordinate directly with your office or hostel parking to service your bike while you work or study, with a fast 45-minute dispatch.",
    societies: ["JSS Academy Road", "Stellar IT Park Area", "Block B Residential Pockets", "Sector 62 Metro Station Area", "Fortis Hospital Stretch", "Tot Mall Crossing"],
    reviewers: [
      { name: "Abhinav Singh", detail: "Stellar IT Park", comment: "Booked during my office hours. The mechanic serviced my Apache in the office parking slot. Incredibly convenient!" },
      { name: "Prerna Gupta", detail: "JSS Hostel Area", comment: "Reliable and cheap. They didn't charge any extra fee for doorstep dispatch. Engine feels very smooth now." }
    ]
  },
  "sector-63": {
    name: "Sector 63",
    landmarks: ["Tech Boulevard", "Sector 63 Metro", "Block H industrial"],
    description: "Sector 63 is a large industrial and commercial area with heavy traffic and heavy-duty vehicles. Finding a clean two-wheeler garage here is almost impossible.",
    whyChoose: "We send mechanics to your commercial complex or workspace to perform repairs safely on-site.",
    societies: ["Tech Boulevard area", "Block H Industrial Road", "Sector 63 Metro Station exit", "Block A commercial gates", "Sector 63 main avenue", "Near police chowki"],
    reviewers: [
      { name: "Vikram Rathore", detail: "Tech Boulevard", comment: "Got my clutch cable replaced in the office basement. Very prompt and professional service." },
      { name: "Sameer Alam", detail: "Block H", comment: "Saved me from pushing my bike in the heat. Quick puncture repair." }
    ]
  },
  "sector-75": {
    name: "Sector 75",
    landmarks: ["Apex Athena", "Maxblis White House", "Sector 75 Metro"],
    description: "Sector 75 is filled with premium high-rise societies. Coordinating with mechanics outside society gates can be incredibly tedious.",
    whyChoose: "Our mechanics register at your society gate and perform the repair directly in your assigned basement or open parking slot.",
    societies: ["Apex Athena Gate", "Maxblis White House basement", "Sector 75 Metro Area", "Futec Gateway stretch", "Golf City entrance", "AIMS Max Gardenia"],
    reviewers: [
      { name: "Gaurav Sen", detail: "Apex Athena", comment: "Hassle-free service in my society basement. The technician brought all tools and cleaned up the oil spills." },
      { name: "Neha Saxena", detail: "Maxblis White House", comment: "Fast booking and polite mechanic. Best doorstep bike service in Sector 75." }
    ]
  },
  "sector-76": {
    name: "Sector 76",
    landmarks: ["Amrapali Princely Estate", "Aditya Celebrity Homes", "Sector 76 Blocks"],
    description: "Sector 76 features massive residential societies with hundreds of families. Pushing a broken bike to local market garages is stressful and time-consuming.",
    whyChoose: "We provide verified, fully trained technicians to handle repairs right inside your society premises.",
    societies: ["Amrapali Princely Estate basement", "Aditya Celebrity Homes parking", "Skytech Matrott gate", "Block A Residential Road", "Sethis Max Royal entrance", "Sector 76 Market road"],
    reviewers: [
      { name: "Rishabh Pant", detail: "Amrapali Princely", comment: "My scooter wouldn't start on Monday morning. FixWheel mechanic arrived in 25 minutes and changed the spark plug. Lifesaver!" },
      { name: "Divya Teja", detail: "Aditya Celebrity Homes", comment: "Polite mechanics, genuine engine oil, and transparent pricing." }
    ]
  },
  "sector-77": {
    name: "Sector 77",
    landmarks: ["Griha Pravesh", "Prateek Wisteria", "Sector 77 Pockets"],
    description: "Sector 77 is a dense high-rise neighborhood. Traditional garages are far away, and local options lack reliability.",
    whyChoose: "Get your vehicle serviced in your society basement with genuine manufacturer parts and digital service logs.",
    societies: ["Prateek Wisteria Gate", "Griha Pravesh parking", "Express Zenith avenue", "Civitech Sampriti entrance", "Elite Homes stretch", "Sector 77 Market lane"],
    reviewers: [
      { name: "Madhavan N.", detail: "Prateek Wisteria", comment: "Very clean work. The mechanic did a comprehensive servicing for my Activa. Highly recommended." },
      { name: "Shalini Dixit", detail: "Griha Pravesh", comment: "Transparent billing and warranty on parts. Much better than local garages." }
    ]
  },
  "sector-78": {
    name: "Sector 78",
    landmarks: ["Mahagun Moderne", "Hyde Park", "Sector 78 Metro"],
    description: "Sector 78 has busy metro corridors and premium high-rise apartments. Pushing bikes through traffic to local garages is unsafe and tedious.",
    whyChoose: "We dispatch mobile mechanics directly to your society basement, offering flat-rate pricing and standard labor guarantees.",
    societies: ["Mahagun Moderne basement", "Hyde Park gate", "Sector 78 Metro Exit", "The IITL Nimbus Hyde Park", "Mahagun Mezzaria entrance", "Sector 78 Commercial Zone"],
    reviewers: [
      { name: "Alok Nath", detail: "Mahagun Moderne", comment: "Quick brake pad replacement and checkup. Done in under 30 minutes in the basement." },
      { name: "Swati Roy", detail: "Hyde Park", comment: "Affordable service. Saved me a trip to the busy Sector 110 market." }
    ]
  },
  "sector-100": {
    name: "Sector 100",
    landmarks: ["Lotus Boulevard", "Sector 100 Market", "Pathways School"],
    description: "Sector 100 is a premium residential belt. High-rise living makes on-site vehicle maintenance highly desirable.",
    whyChoose: "We provide hassle-free servicing directly in your apartment parking. Upfront quotes and certified mechanics guaranteed.",
    societies: ["Lotus Boulevard Gate", "Sector 100 Main Market Road", "Pathways School stretch", "Lotus Boulevard Espacia", "Century Apartments area", "Near Sector 100 Green Belt"],
    reviewers: [
      { name: "Vijay Shekhar", detail: "Lotus Boulevard", comment: "Professional mechanic did a complete engine oil change and chain cleaning. Clean work." },
      { name: "Preeti Saran", detail: "Lotus Espacia", comment: "Prompt booking and excellent service. Will definitely use FixWheel again." }
    ]
  },
  "sector-104": {
    name: "Sector 104",
    landmarks: ["Sector 104 Market", "Pathways School", "Hazipur area"],
    description: "Sector 104 is Noida's premium dining and shopping hub, with heavy commercial and customer traffic daily.",
    whyChoose: "We service your vehicle in the commercial parking space or residential driveway, avoiding busy market workshops.",
    societies: ["Sector 104 High Street Market", "Pathways School lane", "Hazipur Village Road", "Sector 104 residential pockets", "Lotus 300 entrance", "Sector 104 Main Avenue"],
    reviewers: [
      { name: "Rahul Bajaj", detail: "Lotus 300", comment: "The technician replaced the front disc pad of my Pulsar. Honest and fast service." },
      { name: "Priya Menon", detail: "Sector 104 Market", comment: "Clean general servicing while I was dining at a restaurant. Extremely convenient." }
    ]
  },
  "sector-110": {
    name: "Sector 110",
    landmarks: ["Lotus Panache", "Sector 110 Market", "Kendriya Vihar II"],
    description: "Sector 110 is a major residential hub with a crowded local commercial market. Waiting at local workshops here is highly exhausting.",
    whyChoose: "Our mobile mechanics are stationed locally to reach Sector 110 societies under 30 minutes, delivering high-standard servicing.",
    societies: ["Lotus Panache Gate", "Sector 110 Main Market", "Kendriya Vihar II entry", "Block A Residential", "Sector 110 Green Park Lane", "Near Noida Expressway Exit"],
    reviewers: [
      { name: "Suresh Raina", detail: "Lotus Panache", comment: "My bike had a self-start issue. The mechanic solved it quickly by replacing a fuse. Honest charging." },
      { name: "Renu Verma", detail: "Kendriya Vihar II", comment: "Got my scooty serviced. Prompt arrival and good response from support." }
    ]
  },
  "sector-120": {
    name: "Sector 120",
    landmarks: ["Amrapali Zodiac", "RG Residency", "Sector 120 blocks"],
    description: "Sector 120 houses large residential complexes where parking and security make local garages highly inaccessible.",
    whyChoose: "We manage security clearances and coordinate directly with you to perform basement servicing.",
    societies: ["Amrapali Zodiac basement", "RG Residency gate", "Block A Residential Road", "Sector 120 commercial shops", "Prateek Laurel area", "Sector 120 Central Park side"],
    reviewers: [
      { name: "Dinesh Karthik", detail: "Amrapali Zodiac", comment: "Serviced my TVS NTorq. The mechanic did a neat job, no oil stains on the basement floor." },
      { name: "Tanya Sen", detail: "RG Residency", comment: "Best home bike service in Noida. Quick and transparent." }
    ]
  },
  "sector-125": {
    name: "Sector 125",
    landmarks: ["Amity University campus", "HCL Technologies", "DND exit"],
    description: "Sector 125 is dominated by Amity University and massive corporate tech parks. Vehicle breakdowns here disrupt study or work schedules.",
    whyChoose: "We service your vehicle in the institutional parking or corporate basement, getting you back on track without downtime.",
    societies: ["Amity University Gate 1 & 2", "HCL Campus Area", "DND Expressway exit", "Sector 125 Commercial Pockets", "Advant Navis border", "Near Yamuna River belt"],
    reviewers: [
      { name: "Shubham Gill", detail: "Amity Campus", comment: "Broke down near the campus. Mechanic arrived in 20 minutes, repaired the accelerator cable, and got me moving." },
      { name: "Kirti Roy", detail: "HCL Tech Park", comment: "Convenient service while I was working. Fully recommended." }
    ]
  },
  "sector-126": {
    name: "Sector 126",
    landmarks: ["Tech Zone", "Amity Campus extension", "HCL campus"],
    description: "Sector 126 is an IT and corporate hub. Heavy traffic during office hours makes workshop visits a major chore.",
    whyChoose: "Our mobile mechanics service your bike directly in the office parking lot, avoiding any disruption to your day.",
    societies: ["Tech Zone 126", "Amity Campus Extension road", "HCL Campus Area", "Sector 126 commercial blocks", "Mayur School road", "Sector 126 green corridor"],
    reviewers: [
      { name: "Harpreet Singh", detail: "Tech Zone", comment: "Replaced the brake shoe of my Activa during my shift. Excellent doorstep convenience." },
      { name: "Sonali Bendre", detail: "HCL Area", comment: "The technician was very professional and did the oil service quickly." }
    ]
  },
  "sector-128": {
    name: "Sector 128",
    landmarks: ["Jaypee Wish Town", "Kalypso Court", "Jaypee Hospital"],
    description: "Sector 128 is a premium township with strict security gates and vast residential enclaves. Local garages are virtually non-existent here.",
    whyChoose: "We provide high-standard mechanical service inside Jaypee Wish Town blocks. Our verified technicians carry full safety clearances.",
    societies: ["Jaypee Wish Town Blocks", "Kalypso Court Gate", "Jaypee Hospital Road", "Kensington Park Area", "Pavilion Court Side", "Noida Expressway Junction"],
    reviewers: [
      { name: "Virat Kohli", detail: "Jaypee Wish Town", comment: "Excellent service on my Royal Enfield. The mechanic was highly trained and used genuine OEM parts." },
      { name: "Shikha Pandey", detail: "Kalypso Court", comment: "Highly convenient basement service. Friendly staff and fast booking." }
    ]
  },
  "sector-132": {
    name: "Sector 132",
    landmarks: ["Genesis Global School", "Step by Step School", "Express Trade Towers"],
    description: "Sector 132 houses prominent international schools and office complexes. Finding a mechanic here during the day can be highly difficult.",
    whyChoose: "We provide quick doorstep repairs in school and corporate parking slots, keeping your commute hassle-free.",
    societies: ["Genesis Global School road", "Step by Step School Lane", "Express Trade Towers parking", "Sector 132 institutional block", "Noida Expressway stretch", "Logix Technova area"],
    reviewers: [
      { name: "Ajinkya Rahane", detail: "Express Trade Towers", comment: "Excellent quick repair. The mechanic arrived within 30 minutes to replace my bike's battery." },
      { name: "Preeti Verma", detail: "Genesis School Area", comment: "Highly professional service, clear billing, and very reliable." }
    ]
  },
  "sector-135": {
    name: "Sector 135",
    landmarks: ["MetLife office", "Cognizant", "Sector 135 Expressway"],
    description: "Sector 135 is a major IT SEZ hub. A flat tyre or starter issue here can leave you stranded far from residential areas.",
    whyChoose: "Our rapid-response mechanics are stationed near the SEZ to provide immediate roadside help or office basement servicing.",
    societies: ["Cognizant Office Area", "MetLife campus", "Sector 135 Expressway stretch", "Sector 135 village road", "Today Homes Ridge", "Logix Blossom Greens side"],
    reviewers: [
      { name: "Hardik Pandya", detail: "Cognizant Parking", comment: "Got my scooter serviced while at work. The mechanic coordinated with the security gate smoothly." },
      { name: "Ananya Panday", detail: "Blossom Greens", comment: "Quick puncture repair service near the expressway. Highly recommend FixWheel." }
    ]
  },
  "sector-137": {
    name: "Sector 137",
    landmarks: ["Paras Tierea", "Purvanchal Royal Park", "Sector 137 Metro"],
    description: "Sector 137 is a massive high-rise residential sector. Navigating local markets for minor repairs is exhausting for busy residents.",
    whyChoose: "Our mechanics service your bike inside your society basement parking. We handle gate clearances and carry professional drop mats to keep floors clean.",
    societies: ["Paras Tierea basement", "Purvanchal Royal Park parking", "Sector 137 Metro Area", "Supertech Eco City gate", "Gulshan Vivante entrance", "Logix Blossom County side"],
    reviewers: [
      { name: "Rishabh Shah", detail: "Paras Tierea", comment: "Extremely convenient. The mechanic worked in the basement and left the spot perfectly clean. Honest pricing." },
      { name: "Nisha Singhal", detail: "Purvanchal Royal Park", comment: "Professional service for my TVS Scooty. Replaced the brake pads and did the general servicing. Highly satisfied." }
    ]
  },
  "sector-143": {
    name: "Sector 143",
    landmarks: ["Logix Blossom County", "Gulshan Ikebana", "Sector 143 Metro"],
    description: "Sector 143 features modern residential high-rises. Towing services to local Sector 110 or Noida Sector 62 garages are expensive and slow.",
    whyChoose: "Get a certified mechanic at your society basement within 45 minutes for general servicing, engine diagnostics, or battery fixes.",
    societies: ["Logix Blossom County Gate", "Gulshan Ikebana parking", "Sector 143 Metro exit", "Victory Crossroads entrance", "Sikka Kaamna Greens", "Sector 143 main access road"],
    reviewers: [
      { name: "Ashwin Ravichandran", detail: "Gulshan Ikebana", comment: "The mechanic did a great job with my Apache. Spark plug cleaning and tuning done perfectly." },
      { name: "Divya Reddy", detail: "Blossom County", comment: "Saves a lot of time. Best doorstep mechanical service in Sector 143." }
    ]
  },
  "sector-150": {
    name: "Sector 150",
    landmarks: ["Ace Parkway", "ATS Pristine", "Sector 150 Sports City"],
    description: "Sector 150 is Noida's premium green residential sector. Gated townships here are far from commercial garage hubs.",
    whyChoose: "We provide high-standard mechanical services directly in your luxury high-rise basement parking, ensuring premium care for your two-wheeler.",
    societies: ["Ace Parkway Gate", "ATS Pristine basement", "Sector 150 Sports City area", "Eldeco Live by the Greens", "Godrej Nest entrance", "Noida-Greater Noida Expressway junction"],
    reviewers: [
      { name: "Rohit Sharma", detail: "ATS Pristine", comment: "Top-class service. Replaced the engine oil and adjusted the brakes in the basement. Professional and clean work." },
      { name: "Sneha Reddy", detail: "Ace Parkway", comment: "Highly reliable doorstep service. Pre-confirmed prices and genuine parts." }
    ]
  },
  "greater-noida-west": {
    name: "Greater Noida West",
    landmarks: ["Gaur City", "Gaur City Mall", "Ek Murti Chowk"],
    description: "Greater Noida West (Noida Extension) has massive high-rise townships with high traffic. Finding a reliable local mechanic without waiting in long queues is extremely difficult.",
    whyChoose: "We send verified mechanics to your society basement or parking slot, providing reliable, flat-rate repairs on-site.",
    societies: ["Gaur City 1 & 2 basements", "Gaur Mall parking area", "Ek Murti Chowk stretch", "Cherry County gate", "Supertech Eco Village", "Stellar Jeevan entrance"],
    reviewers: [
      { name: "Jasprit Bumrah", detail: "Gaur City 2", comment: "Amazing convenience. The mechanic serviced my scooter in the basement while I was working from home. No hassle at all." },
      { name: "Kajal Agarwal", detail: "Supertech Eco Village", comment: "Transparent pricing and verified technicians. The best bike service in Greater Noida West." }
    ]
  },
  "knowledge-park": {
    name: "Knowledge Park",
    landmarks: ["Galgotias University", "Sharda University", "Knowledge Park II Metro"],
    description: "Knowledge Park is an educational hub filled with students and college staff. A breakdown here can leave students stranded far from local repair shops.",
    whyChoose: "We offer budget-friendly, transparent doorstep repairs directly in university hosteling areas or college parking lots.",
    societies: ["Galgotias University parking", "Sharda University campus", "Knowledge Park II Metro exit", "G L Bajaj campus stretch", "ITS College area", "Knowledge Park III enclaves"],
    reviewers: [
      { name: "Aryan Khan", detail: "Galgotias Hostel", comment: "My bike had a starting trouble in the hostel parking. FixWheel mechanic came in 30 mins and fixed the battery terminal. Cheap and fast!" },
      { name: "Ananya Sen", detail: "Sharda University", comment: "Clean work on my Scooty Pep. Replaced the brake cable in the campus parking." }
    ]
  },
  "alpha-1": {
    name: "Alpha 1",
    landmarks: ["Alpha 1 Metro", "Alpha 1 Commercial Belt", "Alpha 1 Blocks"],
    description: "Alpha 1 in Greater Noida features active residential sectors and local commercial plazas, making traditional garage visits tedious.",
    whyChoose: "Get a certified two-wheeler mechanic at your house gate or office block. Reliable estimates and fast service.",
    societies: ["Alpha 1 Metro Station Area", "Alpha 1 Commercial Belt", "Block A & B Pockets", "Ryan School stretch", "Alpha 1 Main Plaza", "Block C Gate"],
    reviewers: [
      { name: "Ravi Shankar", detail: "Block A", comment: "The technician did a neat job with my Hero Splendor. Engine oil replacement and general wash were done smoothly." },
      { name: "Priti Patel", detail: "Alpha 1 Commercial Belt", comment: "Prompt booking and good response from the technician. Highly convenient." }
    ]
  },
  "alpha-2": {
    name: "Alpha 2",
    landmarks: ["Alpha 2 Market", "Ryan International School", "Block G pockets"],
    description: "Alpha 2 is an established community in Greater Noida. Towing a scooter through local market traffic is stressful.",
    whyChoose: "Our doorstep mechanics are dispatched to your precise location, carrying all tools and genuine parts to fix your vehicle on-site.",
    societies: ["Alpha 2 Main Market lane", "Ryan International road", "Block G Residential Gate", "Block I pockets", "Greater Noida Authority office area", "Sector Delta border"],
    reviewers: [
      { name: "Devendra Singh", detail: "Block G", comment: "Excellent local service. The mechanic cleaned the spark plug and tuned the carburetor in 30 minutes." },
      { name: "Sunita Verma", detail: "Alpha 2 Market", comment: "No hidden charges. Replaced my scooter's clutch cable directly at the parking spot." }
    ]
  },
  "omega": {
    name: "Omega",
    landmarks: ["Omega 1", "Plumeria Garden", "Omega Shopping Complex"],
    description: "Omega is a peaceful residential sector in Greater Noida, far from the messy local automobile markets of Noida or Sector 16.",
    whyChoose: "We bring professional garage-grade servicing straight to your apartment driveway or villa garage.",
    societies: ["Plumeria Garden Gate", "Omega 1 Sector blocks", "Omega Shopping Complex parking", "Eldeco Green Meadows side", "Near Sector Omega II", "Omega Central Avenue"],
    reviewers: [
      { name: "Pawan Kalyan", detail: "Plumeria Garden", comment: "Got a general servicing done for my Access 125. The technician was polite and did a thorough job." },
      { name: "Latha M.", detail: "Omega 1", comment: "Highly convenient home service. The booking process was very smooth." }
    ]
  },
  "chi-phi": {
    name: "Chi Phi",
    landmarks: ["Chi 1", "Phi 2", "Eldeco Green Meadows"],
    description: "Chi Phi is a residential pocket containing premier gated townships, where residents prefer professional, premium home services.",
    whyChoose: "We send background-checked, fully equipped technicians to service your bike inside your gated enclave parking lot.",
    societies: ["Eldeco Green Meadows entrance", "Chi 1 sector blocks", "Phi 2 residential gate", "Near Greater Noida Expressway exit", "Purvanchal Heights area", "Chi II apartments"],
    reviewers: [
      { name: "Mahesh Babu", detail: "Eldeco Green Meadows", comment: "The technician did a fantastic job with my Pulsar. Very professional and clean basement work." },
      { name: "Rani Mukerji", detail: "Chi 1", comment: "Highly reliable doorstep service. Good to see genuine spare parts being used." }
    ]
  },
  "techzone-4": {
    name: "Techzone 4",
    landmarks: ["Techzone 4 Offices", "Amrapali Centurian Park", "Gaur City 2"],
    description: "Techzone 4 is a commercial-cum-residential zone in Greater Noida West. Finding a reliable local garage nearby is highly difficult.",
    whyChoose: "We dispatch verified technicians to your office parking or residential basement to handle breakdowns and servicing on-site.",
    societies: ["Amrapali Centurian Park basement", "Gaur City 2 blocks", "Techzone 4 Commercial stretch", "Supertech Eco Valley side", "Cherry County border", "Techzone IV main avenue"],
    reviewers: [
      { name: "Krunal Pandya", detail: "Centurian Park", comment: "Quick brake shoe replacement in the basement. The mechanic was well-behaved and efficient." },
      { name: "Neha Kakkar", detail: "Gaur City 2", comment: "Excellent response. Fixed the starting trouble of my scooty within 35 minutes." }
    ]
  },
  "noida-extension": {
    name: "Noida Extension",
    landmarks: ["Gaur City Mall", "Char Murti Chowk", "Cherry County"],
    description: "Noida Extension (Greater Noida West) features sprawling high-rise residential projects and heavy commuter traffic. Dragging a bike to roadside workshops is tiring.",
    whyChoose: "Get a certified mechanic at your society basement or parking slot, providing reliable, flat-rate repairs on-site.",
    societies: ["Gaur City Mall basement", "Char Murti Chowk stretch", "Cherry County entrance", "Supertech Eco Village enclaves", "Stellar Jeevan parking", "Nirala Estate gate"],
    reviewers: [
      { name: "Yuzvendra Chahal", detail: "Gaur City Mall", comment: "Routine servicing done perfectly at home. Clean work, honest advice, and transparent billing." },
      { name: "Pooja Banerjee", detail: "Cherry County", comment: "The mechanic सुरेश was very helpful. Replaced the battery and did a quick tune-up in the basement." }
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
    heroText: `Looking for doorstep bike repair or a verified two-wheeler mechanic in ${raw.name}, Noida? FixWheel sends background-checked, fully trained technicians directly to your home, gated society basement, or office space near ${raw.landmarks[0]} to service your scooter or motorcycle on-site.`,
    whyChooseText: `Gated society basements, busy tech parks, and commercial zones make visiting local garages around ${raw.name} Noida highly inconvenient. Our on-site service coordinates directly with your security gate to service your vehicle right where it is parked, saving you valuable hours.`,
    coveragePoints: raw.societies,
    reviews: raw.reviewers.map((rev) => ({
      stars: "★★★★★",
      text: rev.comment,
      who: `${rev.name} — ${rev.detail}, Noida`
    })),
    faqs: [
      {
        q: `Can the mechanic enter gated societies in ${raw.name} Noida?`,
        a: `Yes. Our mechanics are background-checked and registered. They easily coordinate gate entry at premium societies like those near ${raw.landmarks[0]} to perform repairs directly in your parking slot.`
      },
      {
        q: `What is the average arrival time in ${raw.name}?`,
        a: `Our mechanics are stationed locally across Noida and usually reach most parts of ${raw.name} within 45 minutes of booking confirmation.`
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
