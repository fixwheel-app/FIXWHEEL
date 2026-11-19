export type CityServicesConfig = {
  slug: "delhi" | "gurgaon" | "noida" | "faridabad" | "ghaziabad";
  name: string;
  region: string;
  title: string;
  description: string;
  keywords: string;
  hero: string;
  planning: string;
  access: string;
  coverage: string[];
  faqs: { question: string; answer: string }[];
};

export const CITY_SERVICES_CONFIG: Record<CityServicesConfig["slug"], CityServicesConfig> = {
  delhi: {
    slug: "delhi",
    name: "Delhi",
    region: "Delhi",
    title: "Two-Wheeler Service Packages at Home in Delhi | FixWheel",
    description: "Compare doorstep two-wheeler service packages in Delhi for periodic maintenance, engine-oil service, diagnosis and common bike or scooter repairs.",
    keywords: "two wheeler service package Delhi, bike service package at home Delhi, doorstep bike maintenance Delhi, scooter service package Delhi, bike service with engine oil Delhi",
    hero: "Choose a service package for a bike or scooter parked at your Delhi home, workplace or society. The package list separates routine maintenance, engine-oil service, fault diagnosis and repair jobs so you can request the right visit.",
    planning: "Delhi addresses can vary from gated societies and office basements to narrow residential lanes. Share the house or building number, locality, landmark and a safe working spot so the team can confirm access before dispatch.",
    access: "For apartment or office bookings, check entry permission and parking access in advance. If the vehicle cannot start, mention that clearly instead of selecting routine maintenance.",
    coverage: ["Dwarka", "Janakpuri", "Vasant Kunj", "Mahipalpur", "Kapashera", "Uttam Nagar"],
    faqs: [
      { question: "Which package should I choose for regular bike maintenance in Delhi?", answer: "Choose the periodic general-service package for routine checks and adjustments. Select the engine-oil package when you also need the listed oil service, or diagnosis when the fault is unclear." },
      { question: "Can a mechanic work in a Delhi apartment parking area?", answer: "Yes, when the society permits service work and there is a safe, accessible parking spot. Add tower, gate and parking details to the booking address." },
    ],
  },
  gurgaon: {
    slug: "gurgaon",
    name: "Gurgaon",
    region: "Gurugram",
    title: "Two-Wheeler Service Packages at Home in Gurgaon | FixWheel",
    description: "Find two-wheeler service packages at home in Gurgaon for scheduled bike maintenance, engine-oil service, diagnosis and doorstep repair visits.",
    keywords: "two wheeler service package Gurgaon, bike service package at home Gurgaon, bike service package Gurugram, doorstep scooter service Gurgaon, motorcycle maintenance package Gurugram",
    hero: "Compare doorstep service packages for two-wheelers across Gurgaon and Gurugram. Pick routine upkeep, a service-and-oil package, diagnosis for an unknown symptom, or the repair category that matches the problem.",
    planning: "High-rise societies, corporate parks and controlled basement parking are common in Gurgaon. Include the tower, gate, sector and visitor-entry instructions so the mechanic can reach the vehicle without avoidable delay.",
    access: "Confirm that mechanical work is permitted at the parking location. For office bookings, add the company building and a reachable phone number for security coordination.",
    coverage: ["DLF Phases", "Golf Course Road", "Sushant Lok", "Palam Vihar", "Sohna Road", "Udyog Vihar"],
    faqs: [
      { question: "Do Gurgaon service packages cover both bikes and scooters?", answer: "The booking flow shows packages available for the vehicle type and engine range you select. Choose the exact brand and model before confirming a package." },
      { question: "What should I enter for a Gurugram office booking?", answer: "Add the sector, building or tower, office complex, parking level and visitor-entry instructions, then keep your phone available when the mechanic arrives." },
    ],
  },
  noida: {
    slug: "noida",
    name: "Noida",
    region: "Noida",
    title: "Two-Wheeler Service Packages at Home in Noida | FixWheel",
    description: "Book a two-wheeler service package at home in Noida for periodic servicing, engine-oil maintenance, diagnosis and selected doorstep repairs.",
    keywords: "two wheeler service package Noida, bike service package at home Noida, doorstep bike service Noida, scooter maintenance package Noida, bike oil service package Noida",
    hero: "Review two-wheeler service packages for Noida homes, societies and workplaces. Each option identifies a distinct maintenance or repair need, helping the mechanic prepare for the selected bike or scooter.",
    planning: "Noida sector numbers, society names and tower details are important for accurate arrival. Add the nearest gate and parking location, especially in large residential developments and office campuses.",
    access: "If a basement has limited mobile signal, include an alternate meeting point or gate instruction. Describe warning lights, noise or starting trouble in the issue field when booking diagnosis.",
    coverage: ["Sector 18", "Sector 50", "Sector 62", "Sector 75–78", "Sector 137", "Noida Extension"],
    faqs: [
      { question: "Can I select diagnosis instead of guessing a repair in Noida?", answer: "Yes. Diagnosis is intended for symptoms whose cause is unclear. The mechanic assesses the accessible systems and explains the next repair step before additional work." },
      { question: "What address details help for a Noida society booking?", answer: "Provide the sector, society, tower, gate, flat or parking reference and a nearby landmark. Mention any visitor approval needed for service work." },
    ],
  },
  faridabad: {
    slug: "faridabad",
    name: "Faridabad",
    region: "Faridabad",
    title: "Two-Wheeler Service Packages at Home in Faridabad | FixWheel",
    description: "Compare doorstep bike and scooter service packages in Faridabad, including periodic maintenance, engine-oil service, diagnosis and repair options.",
    keywords: "two wheeler service package Faridabad, bike service package at home Faridabad, scooter service at home Faridabad, doorstep motorcycle service package, bike maintenance package Faridabad",
    hero: "Select a doorstep two-wheeler package in Faridabad based on the work your vehicle needs. Routine maintenance, oil-inclusive service, diagnosis and repair services remain separate so the booking describes the visit accurately.",
    planning: "Faridabad bookings are easier to locate when the address includes the sector or colony, block, house number and a recognisable landmark. State whether the vehicle is rideable and where it is parked.",
    access: "Choose a level, ventilated place where the mechanic can work safely. If the vehicle is inside a gated colony or industrial site, include entry and contact instructions.",
    coverage: ["NIT Faridabad", "Old Faridabad", "Sector 15", "Sector 21", "Sector 37", "Ballabhgarh"],
    faqs: [
      { question: "How do I choose between service and diagnosis in Faridabad?", answer: "Use a service package for planned maintenance. Choose diagnosis when the bike has a symptom such as a new noise, starting issue or warning light but you do not know the required repair." },
      { question: "Are parts automatically included in every package?", answer: "Only items explicitly listed with the selected package are included. Any additional repair or replacement is explained and approved separately before work begins." },
    ],
  },
  ghaziabad: {
    slug: "ghaziabad",
    name: "Ghaziabad",
    region: "Ghaziabad",
    title: "Two-Wheeler Service Packages at Home in Ghaziabad | FixWheel",
    description: "Choose a two-wheeler service package at home in Ghaziabad for routine maintenance, engine-oil service, fault diagnosis and eligible doorstep repair work.",
    keywords: "two wheeler service package Ghaziabad, bike service package at home Ghaziabad, doorstep scooter service Ghaziabad, motorcycle maintenance package Ghaziabad, bike service with engine oil Ghaziabad",
    hero: "Find the appropriate doorstep service package for your bike or scooter in Ghaziabad. Compare planned maintenance with diagnosis and specific repair categories before entering the vehicle and address details.",
    planning: "For large societies and multi-block neighbourhoods, share the gate, tower, parking level and closest landmark. A precise Indirapuram, Vaishali, Vasundhara or Raj Nagar address helps the visit get confirmed correctly.",
    access: "Keep the vehicle in an accessible area and tell security that a mechanic is expected. If it is stranded away from home, describe the road, direction and nearby landmark in the address field.",
    coverage: ["Indirapuram", "Vaishali", "Vasundhara", "Kaushambi", "Raj Nagar Extension", "Crossings Republik"],
    faqs: [
      { question: "Can I book a service package for a stranded bike in Ghaziabad?", answer: "Select the service that matches the issue and describe the exact roadside location. For an unknown fault, diagnosis is safer than choosing an unrelated repair package." },
      { question: "Does the booking confirm extra repair work automatically?", answer: "No. Additional labour or parts outside the selected package require an explanation and your approval before the mechanic proceeds." },
    ],
  },
};
