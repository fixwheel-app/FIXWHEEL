import { PackageType } from '@/types';

export type CCRange = "0-249" | "250-399" | "400-599" | "600+";

export interface NonElectricService {
  id: PackageType;
  name: PackageType;
  prices: Record<CCRange, number | null>;
  includes?: string[];
  estimatedTime: string;
}

export interface ElectricService {
  id: PackageType;
  name: PackageType;
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

export const NON_ELECTRIC_SERVICES: NonElectricService[] = [
  { 
    id: "General Service", 
    name: "General Service", 
    prices: { "0-249": 650, "250-399": 850, "400-599": 1100, "600+": 1500 },
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
    prices: { "0-249": 999, "250-399": 1999, "400-599": 2990, "600+": 3999 },
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
    id: "Puncture", 
    name: "Puncture", 
    prices: { "0-249": 399, "250-399": 399, "400-599": 550, "600+": 550 },
    estimatedTime: "30 MINS"
  },
  { 
    id: "Running Repair", 
    name: "Running Repair", 
    prices: { "0-249": 399, "250-399": 399, "400-599": 499, "600+": 499 },
    estimatedTime: "30 MINS"
  },
  { 
    id: "Engine Half", 
    name: "Engine Half", 
    prices: { "0-249": 4500, "250-399": 10000, "400-599": null, "600+": null },
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
    prices: { "0-249": 7999, "250-399": 18000, "400-599": null, "600+": null },
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
  }
];

export const ELECTRIC_SERVICES: ElectricService[] = [
  { id: "General Service", name: "General Service", price: 799, estimatedTime: "2 HOURS" },
  { id: "Jump start", name: "Jump start", price: 399, estimatedTime: "30 MINS" },
  { id: "Puncture", name: "Puncture", price: 399, estimatedTime: "30 MINS" },
  { id: "Running Repair", name: "Running Repair", price: 399, estimatedTime: "30 MINS" },
];
