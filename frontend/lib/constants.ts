import { RepairPackage } from '@/types';

export const REPAIR_PACKAGES: RepairPackage[] = [
  {
    id: "Regular",
    name: "At-Home Regular Service",
    ccRange: "Below 125 CC",
    tagline: "Perfect for daily commuter bikes",
    accentColor: "#3B82F6",
    price: 699,
    includes: [
      "Suspension System Inspection",
      "Exterior Hand Wash & Clean",
      "Engine Health Check",
      "Electrical System Check",
      "Battery Performance Check",
      "Chain Cleaning & Lubrication",
      "Carburetor Inspection",
      "Brake Adjustment (Front & Rear)",
      "Nuts, Bolts & Fastener Tightening",
      "Mileage & Performance Assessment",
      "Tyre Pressure Check (Tubeless Only)",
      "Free Pick-Up & Drop (If Required)"
    ],
    additionalCost: [
      "Engine Oil Replacement",
      "Oil Filter Cleaning / Replacement",
      "Air Filter Cleaning / Replacement",
      "Spark Plug Cleaning / Replacement"
    ]
  },
  {
    id: "Classic",
    name: "At-Home Classic Service",
    ccRange: "125 CC – 199 CC",
    tagline: "Ideal for mid-range commuter bikes",
    accentColor: "#22C55E",
    price: 899,
    includes: [
      "Exterior Hand Wash & Clean",
      "Engine Health Check",
      "Coolant Level Check",
      "Battery Performance Check",
      "Suspension System Inspection",
      "Carburetor Inspection",
      "Electrical System Check",
      "Brake Adjustment (Front & Rear)",
      "Chain Cleaning & Lubrication",
      "Full Lubrication & Greasing",
      "Nuts, Bolts & Fastener Tightening",
      "Mileage & Performance Assessment",
      "Tyre Pressure Check (Tubeless Only)",
      "Free Pick-Up & Drop (If Required)"
    ],
    additionalCost: [
      "Engine Oil Replacement",
      "Oil Filter Cleaning / Replacement",
      "Air Filter Cleaning / Replacement",
      "Spark Plug Cleaning / Replacement"
    ]
  },
  {
    id: "Premium",
    name: "At-Home Premium Service",
    ccRange: "200 CC – 299 CC",
    tagline: "Built for performance-focused riders",
    accentColor: "#F97316",
    isPopular: true,
    price: 1199,
    includes: [
      "Exterior Hand Wash & Clean",
      "Engine Health Check",
      "Coolant Level Check",
      "Fuel Injector Inspection",
      "Fuel Pump Inspection",
      "Battery Performance Check",
      "Suspension System Inspection",
      "Carburetor Inspection",
      "Electrical System Check",
      "Brake Adjustment (Front & Rear)",
      "Chain Cleaning & Lubrication",
      "Full Lubrication & Greasing",
      "Nuts, Bolts & Fastener Tightening",
      "Mileage & Performance Assessment",
      "Tyre Pressure Check (Tubeless Only)",
      "Free Pick-Up & Drop (If Required)"
    ],
    additionalCost: [
      "Engine Oil Replacement",
      "Oil Filter Cleaning / Replacement",
      "Air Filter Cleaning / Replacement",
      "Spark Plug Cleaning / Replacement"
    ]
  },
  {
    id: "Royal",
    name: "At-Home Royal Service",
    ccRange: "300 CC – 349 CC",
    tagline: "For powerful mid-segment bikes",
    accentColor: "#8B5CF6",
    price: 1499,
    includes: [
      "Exterior Hand Wash & Clean",
      "Engine Health Check",
      "Coolant Level Check",
      "Fuel Injector Inspection",
      "Fuel Pump Inspection",
      "Battery Performance Check",
      "Suspension System Inspection",
      "Carburetor Inspection",
      "Electrical System Check",
      "Brake Adjustment (Front & Rear)",
      "Chain Cleaning & Lubrication",
      "Full Lubrication & Greasing",
      "Nuts, Bolts & Fastener Tightening",
      "Mileage & Performance Assessment",
      "Tyre Pressure Check (Tubeless Only)",
      "Free Pick-Up & Drop (If Required)"
    ],
    additionalCost: [
      "Engine Oil Replacement",
      "Oil Filter Cleaning / Replacement",
      "Air Filter Cleaning / Replacement",
      "Spark Plug Cleaning / Replacement"
    ]
  },
  {
    id: "Sports",
    name: "At-Home Sports Service",
    ccRange: "350 CC and Above",
    tagline: "For high-performance and premium bikes",
    accentColor: "#EF4444",
    price: 1999,
    includes: [
      "Exterior Hand Wash & Clean",
      "Engine Health Check",
      "Coolant Level Check",
      "Fuel Injector Inspection",
      "Fuel Pump Inspection",
      "Battery Performance Check",
      "Suspension System Inspection",
      "Carburetor Inspection",
      "Electrical System Check",
      "Brake Adjustment (Front & Rear)",
      "Chain Cleaning & Lubrication",
      "Full Lubrication & Greasing",
      "Nuts, Bolts & Fastener Tightening",
      "Mileage & Performance Assessment",
      "Tyre Pressure Check (Tubeless Only)",
      "Free Pick-Up & Drop (If Required)"
    ],
    additionalCost: [
      "Engine Oil Replacement",
      "Oil Filter Cleaning / Replacement",
      "Air Filter Cleaning / Replacement",
      "Spark Plug Cleaning / Replacement"
    ]
  }
];
