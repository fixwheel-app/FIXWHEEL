export type VehicleCitySlug = "delhi" | "gurgaon" | "noida" | "ghaziabad" | "faridabad";

export type VehicleCityRoute = "electric-vehicle" | "sports-bike" | "premium-bike" | "cruiser-bike";

type CityProfile = {
  name: string;
  ridingContext: string;
  accessContext: string;
  areaCue: string;
};

type VehicleProfile = {
  serviceName: string;
  shortName: string;
  focus: string;
  preparation: string;
  keywords: string[];
};

const CITY_PROFILES: Record<VehicleCitySlug, CityProfile> = {
  delhi: {
    name: "Delhi",
    ridingContext: "Dense stop-and-go traffic, summer heat and road dust can expose battery, braking, cooling and drivetrain concerns sooner than an open-road ride.",
    accessContext: "Share the colony, block, nearest accessible gate and parking level so the mechanic can reach the vehicle without losing service time.",
    areaCue: "Dwarka, Rohini, Janakpuri, Vasant Kunj and other listed Delhi neighbourhoods",
  },
  gurgaon: {
    name: "Gurgaon",
    ridingContext: "Long office commutes, fast arterial roads and repeated basement parking can place different demands on tyres, brakes, batteries and drive components.",
    accessContext: "Include the society or office name, tower, gate and visitor-parking instructions for a smoother doorstep visit.",
    areaCue: "DLF, Golf Course Road, Sohna Road, Palam Vihar, Udyog Vihar and Gurgaon sectors",
  },
  noida: {
    name: "Noida",
    ridingContext: "Expressway use, high-rise basement storage and frequent short sector trips can affect tyre condition, charging health, brakes and service intervals.",
    accessContext: "State the sector, society or office name, tower, gate and basement level when you request the visit.",
    areaCue: "central Noida, Sector 62, the Expressway sectors, Sector 137 and Greater Noida West",
  },
  ghaziabad: {
    name: "Ghaziabad",
    ridingContext: "Daily NH-24 travel, crowded local roads and high-rise parking can reveal starting, braking, chain and electrical issues in different riding conditions.",
    accessContext: "Add the locality, sector or khand, society gate and parking level; for roadside help, include your direction of travel and a safe landmark.",
    areaCue: "Indirapuram, Vaishali, Kaushambi, Vasundhara, Raj Nagar Extension and Crossings Republik",
  },
  faridabad: {
    name: "Faridabad",
    ridingContext: "Mathura Road commutes, sector traffic and industrial stretches can increase dust exposure and place sustained demand on tyres, brakes, batteries and cooling systems.",
    accessContext: "Share the sector, block, colony or NIT area with the building, gate and exact parking location.",
    areaCue: "NIT Faridabad, Sector 15–16, Sector 21, Sector 37, Greater Faridabad and Ballabhgarh",
  },
};

const VEHICLE_PROFILES: Record<VehicleCityRoute, VehicleProfile> = {
  "electric-vehicle": {
    serviceName: "Electric Scooter Service",
    shortName: "electric scooter",
    focus: "The visit can cover accessible charging, auxiliary-battery, connector, brake, tyre and dashboard checks. High-voltage battery or controller work is confirmed separately when specialist equipment is required.",
    preparation: "Share the EV make, exact model, warning indication, charging behaviour and whether the scooter can be switched on safely.",
    keywords: ["electric scooter repair", "EV scooter service at home", "electric two wheeler mechanic", "Ola Ather service"],
  },
  "sports-bike": {
    serviceName: "Sports Bike Service",
    shortName: "sports bike",
    focus: "The mechanic checks the reported symptom and accessible service points such as chain condition, brakes, tyres, controls, battery and visible cooling-system concerns before recommending work.",
    preparation: "Share the make, model, engine capacity, recent service or modification history and the speed or riding condition in which the symptom appears.",
    keywords: ["sports bike service", "sports bike mechanic", "performance bike repair", "doorstep sports bike service"],
  },
  "premium-bike": {
    serviceName: "Premium Bike Service",
    shortName: "premium motorcycle",
    focus: "Model-specific electronics, controls, braking hardware and service requirements are reviewed before work begins. Repairs needing proprietary tools or workshop equipment are identified during inspection.",
    preparation: "Provide the exact variant, engine capacity, warning lights, accessories or modifications and recent service records so compatibility can be confirmed.",
    keywords: ["premium bike service", "superbike mechanic", "premium motorcycle repair", "doorstep premium bike service"],
  },
  "cruiser-bike": {
    serviceName: "Cruiser Bike Service",
    shortName: "cruiser bike",
    focus: "Routine care can include chain and sprocket checks, control adjustment, brake inspection, battery testing and approved accessible maintenance for heavier cruisers and modern-classic motorcycles.",
    preparation: "Share the exact model, engine capacity, storage or touring history and any change in clutch feel, chain noise, starting or low-speed handling.",
    keywords: ["cruiser bike service", "Royal Enfield service at home", "cruiser bike mechanic", "modern classic motorcycle service"],
  },
};

export function isVehicleCitySlug(value: string): value is VehicleCitySlug {
  return value in CITY_PROFILES;
}

export function getVehicleCityContent(citySlug: string, vehicleRoute: VehicleCityRoute) {
  if (!isVehicleCitySlug(citySlug)) return undefined;

  const city = CITY_PROFILES[citySlug];
  const vehicle = VEHICLE_PROFILES[vehicleRoute];
  const serviceNameLower = vehicle.serviceName.toLowerCase();

  return {
    title: `${vehicle.serviceName} in ${city.name} – Doorstep Service | FixWheel`,
    description: `Book doorstep ${serviceNameLower} in ${city.name}. Get model-aware inspection and approved service at your home or office parking across ${city.areaCue}.`,
    keywords: [
      `${serviceNameLower} in ${city.name}`,
      `${vehicle.shortName} mechanic near me ${city.name}`,
      `${vehicle.shortName} service at home ${city.name}`,
      `doorstep ${vehicle.shortName} repair ${city.name}`,
      ...vehicle.keywords.map((keyword) => `${keyword} ${city.name}`),
    ],
    lead: `Book a verified mechanic for your ${vehicle.shortName} at a suitable home, society or office parking location in ${city.name}. The exact model, reported symptom and service scope are confirmed before work begins.`,
    paragraphs: [
      `${city.ridingContext} ${vehicle.focus}`,
      `${city.accessContext} ${vehicle.preparation}`,
      `FixWheel serves requests across ${city.areaCue}. The mechanic explains the findings, confirms what can be completed safely at the location and provides a separate quote for additional labour or parts before you approve them.`,
    ],
    coverageText: `Request doorstep ${serviceNameLower} across ${city.areaCue}. Availability is confirmed for the full address and exact vehicle model.`,
    bookingTip: `${vehicle.preparation} ${city.accessContext}`,
  };
}
