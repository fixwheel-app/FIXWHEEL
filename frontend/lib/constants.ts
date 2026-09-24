import { PackageType } from '@/types';
import { getServicePrice, ServicePriceId, ServicePriceTier } from '@/lib/pricingData';

export type CCRange = "0-249" | "250-399" | "400-599" | "600+";

export interface NonElectricService {
  id: PackageType;
  name: PackageType;
  pricingId: ServicePriceId;
  prices: Record<CCRange, number | null>;
  includes?: string[];
  estimatedTime: string;
}

export interface ElectricService {
  id: PackageType;
  name: PackageType;
  pricingId: ServicePriceId;
  price: number;
  includes?: string[];
  estimatedTime: string;
}

export const CCRANGES: { label: string, value: CCRange }[] = [
  { label: "0 to 249 CC", value: "0-249" },
  { label: "250 to 399 CC", value: "250-399" },
  { label: "400 to 599 CC", value: "400-599" },
  { label: "600 CC & Above", value: "600+" }
];

const CC_RANGE_PRICE_TIERS: Record<CCRange, ServicePriceTier> = {
  "0-249": "cc0_249",
  "250-399": "cc250_399",
  "400-599": "cc400_599",
  "600+": "cc600_above",
};

const getBookablePrice = (pricingId: ServicePriceId, tier: ServicePriceTier): number | null => {
  const price = getServicePrice(pricingId, tier);

  if (typeof price === 'number') return price;
  if (price === 'On Inspection') return null;

  throw new Error(`Missing bookable price for ${pricingId} at ${tier}`);
};

const getNonElectricPrices = (pricingId: ServicePriceId): Record<CCRange, number | null> => ({
  "0-249": getBookablePrice(pricingId, CC_RANGE_PRICE_TIERS["0-249"]),
  "250-399": getBookablePrice(pricingId, CC_RANGE_PRICE_TIERS["250-399"]),
  "400-599": getBookablePrice(pricingId, CC_RANGE_PRICE_TIERS["400-599"]),
  "600+": getBookablePrice(pricingId, CC_RANGE_PRICE_TIERS["600+"]),
});

const getElectricPrice = (pricingId: ServicePriceId): number => {
  const price = getBookablePrice(pricingId, "electric");

  if (price === null) {
    throw new Error(`Electric service requires a numeric price: ${pricingId}`);
  }

  return price;
};

export const NON_ELECTRIC_SERVICES: NonElectricService[] = [
  { 
    id: "General Service", 
    name: "General Service", 
    pricingId: "basic-service",
    prices: getNonElectricPrices("basic-service"),
    estimatedTime: "2 HOURS",
    includes: [
      "Air Filter Cleaning",
      "Cables & Levers Adjustment",
      "Dry Wash",
      "Greasing & Lubrication",
      "Battery Voltage Check",
      "Chain Tension Check",
      "Electrical Check-up",
      "Oil Leakage Check",
      "Brakes Service",
      "Clutch Greasing",
      "Engine Oil Check",
      "Spark Plug Cleaning"
    ]
  },
  { 
    id: "General Service with engine oil", 
    name: "General Service with engine oil", 
    pricingId: "service-engine-oil",
    prices: getNonElectricPrices("service-engine-oil"),
    estimatedTime: "2 HOURS",
    includes: [
      "Air Filter Cleaning",
      "Cables & Levers Adjustment",
      "Dry Wash",
      "Greasing & Lubrication",
      "Battery Voltage Check",
      "Chain Tension Check",
      "Electrical Check-up",
      "Oil Leakage Check",
      "Brakes Service",
      "Clutch Greasing",
      "Engine Oil Change",
      "Spark Plug Cleaning"
    ]
  },
  { 
    id: "Jump start", 
    name: "Jump start", 
    pricingId: "jump-start",
    prices: getNonElectricPrices("jump-start"),
    estimatedTime: "30 MINS",
    includes: [
      "Heavy-Duty Battery Booster Arrival",
      "Voltage & Alternator Charge Test",
      "Terminal Corrosion Cleaning",
      "45-Min Fast Doorstep Arrival"
    ]
  },
  { 
    id: "Puncture", 
    name: "Puncture", 
    pricingId: "puncture",
    prices: getNonElectricPrices("puncture"),
    estimatedTime: "30 MINS",
    includes: [
      "High-Grade Vulcanized Rubber Strips",
      "Air Pressure Check & Top-Up",
      "Valve Core Inspection",
      "No Garage Dragging Needed"
    ]
  },
  { 
    id: "Running Repair", 
    name: "Running Repair", 
    pricingId: "running-repair",
    prices: getNonElectricPrices("running-repair"),
    estimatedTime: "30 MINS",
    includes: [
      "Clutch/Accelerator Cable Replacement",
      "Headlight/Indicator Bulb Fitting",
      "Mirror/Lever Tightening & Adjustment",
      "On-Site Mechanical Diagnostics"
    ]
  },
  { 
    id: "Engine Half", 
    name: "Engine Half", 
    pricingId: "engine-half",
    prices: getNonElectricPrices("engine-half"),
    estimatedTime: "24 HOURS",
    includes: [
      "Piston",
      "Valve",
      "Valve Seal",
      "Bore",
      "Head Repair",
      "Spark Plug",
      "DC Kit",
      "Engine Oil"
    ]
  },
  { 
    id: "Engine full", 
    name: "Engine full", 
    pricingId: "engine-full",
    prices: getNonElectricPrices("engine-full"),
    estimatedTime: "24 HOURS",
    includes: [
      "Crank assembly",
      "Main Bearing",
      "Piston Set",
      "Valve",
      "Valve seal",
      "Valve guide",
      "Valve seat",
      "Timing Chain kit",
      "Chain guard",
      "Packing kit",
      "Oil seal kit",
      "Oil ring kit",
      "Engine Oil",
      "Diesel washing",
      "Lathe work (Kharad)",
      "Spark plug",
      "Mechanic charges"
    ]
  },
  {
    id: "Battery Replacement",
    name: "Battery Replacement",
    pricingId: "battery-replacement",
    prices: getNonElectricPrices("battery-replacement"),
    estimatedTime: "30 MINS",
    includes: [
      "Digital Battery & Cranking Health Test",
      "Stator & RR Unit Charging Voltage Check",
      "Terminal Corrosion Cleaning & Anti-Rust Grease",
      "Fresh OEM Battery Installation (Exide/Amaron)"
    ]
  },
  {
    id: "Carburetor Cleaning",
    name: "Carburetor Cleaning",
    pricingId: "carburetor-cleaning",
    prices: getNonElectricPrices("carburetor-cleaning"),
    estimatedTime: "45 MINS",
    includes: [
      "Carburetor Disassembly & Inspection",
      "Main & Pilot Jet Ultrasonic De-clogging",
      "Float Chamber Flushing & Sediment Removal",
      "Idle Air-Fuel Ratio Tuning & Throttle Sync"
    ]
  },
  {
    id: "OBD Scanner Inspection",
    name: "OBD Scanner Inspection",
    pricingId: "obd-inspection",
    prices: getNonElectricPrices("obd-inspection"),
    estimatedTime: "30 MINS",
    includes: [
      "Handheld OBD-II Scanner Diagnostic Connection",
      "ECU DTC Fault Code Reading & Analysis",
      "Live Sensor Voltage & O2 Sensor Data Review",
      "Check Engine Light (CEL) Reset & Health Report"
    ]
  },
  {
    id: "Brake Disc Replacement",
    name: "Brake Disc Replacement",
    pricingId: "disc-replacement",
    prices: getNonElectricPrices("disc-replacement"),
    estimatedTime: "45 MINS",
    includes: [
      "Front & Rear Disc Pad / Shoe Wear Check",
      "Caliper Piston Cleaning & Slider Pin Greasing",
      "OEM Disc Pad / Shoe Fitment Labor",
      "Hydraulic Brake Line Air Bleeding & Fluid Top-Up"
    ]
  },
  {
    id: "Chain Sprocket Replacement",
    name: "Chain Sprocket Replacement",
    pricingId: "chain-sprocket",
    prices: getNonElectricPrices("chain-sprocket"),
    estimatedTime: "1.5 HOURS",
    includes: [
      "Front & Rear Sprocket Fitment Labor",
      "New Heavy-Duty O-Ring Chain Fitment",
      "Rear Wheel Laser Alignment & Notch Setting",
      "High-Tack Chain Lube Coat & Slack Tensioning"
    ]
  },
  {
    id: "Pick & Drop Service",
    name: "Pick & Drop Service",
    pricingId: "pick-drop",
    prices: getNonElectricPrices("pick-drop"),
    estimatedTime: "SAME DAY",
    includes: [
      "Safe Doorstep Two-Wheeler Transit Pickup",
      "GPS-Tracked Transit to Specialized Workshop",
      "Physical Inspection & Handover Condition Log",
      "Doorstep Return Delivery Post-Service"
    ]
  }
];

export const ELECTRIC_SERVICES: ElectricService[] = [
  { id: "General Service", name: "General Service", pricingId: "ev-service", price: getElectricPrice("ev-service"), estimatedTime: "2 HOURS", includes: ["BMS Health & Cell Diagnostic", "Hub Motor & Sensor Check", "Regenerative Brake Calibration", "High Voltage Wire Check"] },
  { id: "Jump start", name: "Jump start", pricingId: "jump-start", price: getElectricPrice("jump-start"), estimatedTime: "30 MINS", includes: ["Auxiliary Battery Boost", "Terminal Voltage Check", "Fast Doorstep Arrival"] },
  { id: "Puncture", name: "Puncture", pricingId: "puncture", price: getElectricPrice("puncture"), estimatedTime: "30 MINS", includes: ["Tubeless Rubber Strip Repair", "Air Pressure Calibration", "Valve Inspection"] },
  { id: "Running Repair", name: "Running Repair", pricingId: "running-repair", price: getElectricPrice("running-repair"), estimatedTime: "30 MINS", includes: ["Throttle Sensor Calibration", "Brake Lever Fitting", "Minor Electrical Repair"] },
];
