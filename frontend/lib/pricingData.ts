export interface PricingCategory {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
}

export interface ServicePriceItem {
  id: string;
  name: string;
  description: string;
  category: "Non-Electric" | "Electric";
  prices: {
    cc0_249: number | string;
    cc250_399: number | string;
    cc400_599: number | string;
    cc600_above: number | string;
    electric?: number | string;
  };
  features: string[];
  popular?: boolean;
}

export const PRICING_CATEGORIES: PricingCategory[] = [
  { id: "cc0_249", name: "0 to 249 cc", subtitle: "Commuter bikes & Scooters (Activa, Splendor, Pulsar 150, Jupiter)", badge: "Most Popular" },
  { id: "cc250_399", name: "250 to 399 cc", subtitle: "Performance & Quarter-Liter (Classic 350, Duke 250/390, Dominar 400)", badge: "Performance" },
  { id: "cc400_599", name: "400 to 599 cc", subtitle: "Middleweight Motorcycles (Himalayan 450, Benelli 502)", badge: "Touring" },
  { id: "cc600_above", name: "600 cc & Above", subtitle: "Superbikes & Heavy Cruisers (Kawasaki Ninja, Z650, Harley X440)", badge: "Superbike" },
  { id: "electric", name: "Electric Two-Wheelers (EV)", subtitle: "Electric Scooters & Motorcycles (Ola S1, Ather 450X, TVS iQube)", badge: "EV Specialist" },
];

export const SERVICE_PRICING_LIST: ServicePriceItem[] = [
  {
    id: "basic-service",
    name: "Periodic Service",
    description: "Comprehensive 21-point inspection, chain lube, spark plug cleaning, air filter check, and brake adjustment.",
    category: "Non-Electric",
    prices: {
      cc0_249: 550,
      cc250_399: 850,
      cc400_599: 1100,
      cc600_above: 1500,
    },
    features: [
      "21-Point Vehicle Safety Checklist",
      "Spark Plug & Air Filter Cleaning",
      "Brake Adjustment & Cable Oiling",
      "Chain Cleaning & High-Tack Lubrication",
      "15-Day FixWheel Labor Warranty"
    ],
    popular: true
  },
  {
    id: "service-engine-oil",
    name: "Service with Engine Oil",
    description: "Complete periodic service bundled with premium engine oil change and oil filter replacement.",
    category: "Non-Electric",
    prices: {
      cc0_249: 999,
      cc250_399: 1999,
      cc400_599: 2990,
      cc600_above: 3999,
    },
    features: [
      "Includes Sealed OEM Synthetic Engine Oil",
      "Engine Oil Filter Replacement",
      "Full 21-Point Maintenance Service",
      "Chain Deep Cleaning & Lube",
      "Doorstep Mechanic Service"
    ],
    popular: true
  },
  {
    id: "jump-start",
    name: "Jump Start",
    description: "Immediate doorstep emergency battery jump-start service for drained or dead two-wheeler batteries.",
    category: "Non-Electric",
    prices: {
      cc0_249: 399,
      cc250_399: 399,
      cc400_599: 499,
      cc600_above: 499,
      electric: 399
    },
    features: [
      "Heavy-Duty Battery Booster Arrival",
      "Voltage & Alternator Charge Test",
      "Terminal Corrosion Cleaning",
      "45-Min Fast Doorstep Arrival"
    ]
  },
  {
    id: "puncture",
    name: "Doorstep Puncture Repair",
    description: "On-site tubeless or tube puncture repair at your home, office, or roadside location.",
    category: "Non-Electric",
    prices: {
      cc0_249: 399,
      cc250_399: 399,
      cc400_599: 550,
      cc600_above: 550,
      electric: 399
    },
    features: [
      "High-Grade Vulcanized Rubber Strips",
      "Air Pressure Check & Top-Up",
      "Valve Core Inspection",
      "No Garage Dragging Needed"
    ]
  },
  {
    id: "running-repair",
    name: "Running Repair",
    description: "Minor mechanical adjustments, cable replacement, clutch tuning, lever fitting, or bulb changes.",
    category: "Non-Electric",
    prices: {
      cc0_249: 399,
      cc250_399: 399,
      cc400_599: 499,
      cc600_above: 499,
      electric: 399
    },
    features: [
      "Clutch/Accelerator Cable Replacement",
      "Headlight/Indicator Bulb Fitting",
      "Mirror/Lever Tightening & Adjustment",
      "On-Site Mechanical Diagnostics"
    ]
  },
  {
    id: "engine-half",
    name: "Engine Half Overhaul",
    description: "Top-end engine repair including piston ring replacement, valve grinding, cylinder hone, and head gaskets.",
    category: "Non-Electric",
    prices: {
      cc0_249: 4500,
      cc250_399: 10000,
      cc400_599: "On Inspection",
      cc600_above: "On Inspection",
    },
    features: [
      "Piston & Piston Ring Renewal",
      "Valve Lap & Cylinder Head Servicing",
      "Head Gasket & Seal Replacement",
      "Resolves Engine Smoke & Compression Loss",
      "30-Day Engine Warranty"
    ]
  },
  {
    id: "engine-full",
    name: "Engine Full Overhaul",
    description: "Complete crankcase rebuild including crankshaft bearing replacement, connecting rod, gearbox & clutch overhaul.",
    category: "Non-Electric",
    prices: {
      cc0_249: 7999,
      cc250_399: 18000,
      cc400_599: "On Inspection",
      cc600_above: "On Inspection",
    },
    features: [
      "Complete Engine Teardown & Chemical Clean",
      "Crankshaft & Main Bearing Replacement",
      "New Clutch Plates & Gearbox Bushings",
      "Full Gasket & Oil Seal Renewal",
      "60-Day Workmanship Warranty"
    ]
  },
  {
    id: "carburetor-cleaning",
    name: "Carburetor Cleaning & Jetting",
    description: "Ultrasonic cleaning of carburetor jets, float bowl flushing, and idle air-fuel mixture tuning.",
    category: "Non-Electric",
    prices: {
      cc0_249: 199,
      cc250_399: 199,
      cc400_599: 399,
      cc600_above: 399,
    },
    features: [
      "Jet & Passageway Carbon Removal",
      "Float Chamber De-clogging",
      "Air-Fuel Ratio Idle Adjustment",
      "Eliminates Cold Starting Troubles"
    ]
  },
  {
    id: "obd-inspection",
    name: "Inspection with OBD Scanner",
    description: "Advanced diagnostic scan for BS6 fuel-injected bikes using handheld OBD-II scanner tools.",
    category: "Non-Electric",
    prices: {
      cc0_249: 199,
      cc250_399: 249,
      cc400_599: 399,
      cc600_above: 399,
    },
    features: [
      "ECU Error Code (DTC) Reading & Clearing",
      "Sensor Voltage & Oxygen Sensor Check",
      "Check Engine Light (CEL) Reset",
      "Digital Vehicle Health Report"
    ]
  },
  {
    id: "battery-replacement",
    name: "Battery Replacement (Labor)",
    description: "Doorstep installation of new sealed AGM/Gel two-wheeler battery and old battery disposal.",
    category: "Non-Electric",
    prices: {
      cc0_249: 99,
      cc250_399: 99,
      cc400_599: 149,
      cc600_above: 149,
    },
    features: [
      "Flat ₹99 Service Fee",
      "Terminal Cleaning & Anti-Corrosion Grease",
      "Old Battery Trade-in Discount Available",
      "100% Genuine Sealed Batteries (Exide / Amaron)"
    ]
  },
  {
    id: "disc-replacement",
    name: "Disc Brake Pad / Rotor Replacement",
    description: "Brake pad replacement, hydraulic caliper pin greasing, disc rotor inspection, and lever bleeding.",
    category: "Non-Electric",
    prices: {
      cc0_249: 199,
      cc250_399: 249,
      cc400_599: 299,
      cc600_above: 299,
    },
    features: [
      "Organic/Sintered Brake Pad Fitting",
      "Caliper Piston Cleaning & Greasing",
      "Brake Line Air Bleeding",
      "Eliminates Brake Squeal & Lever Sponginess"
    ]
  },
  {
    id: "chain-sprocket",
    name: "Chain & Sprocket Replacement",
    description: "Removal of worn drive chain and sprockets, installing new heavy-duty O-ring chain kit and swingarm alignment.",
    category: "Non-Electric",
    prices: {
      cc0_249: 299,
      cc250_399: 299,
      cc400_599: 450,
      cc600_above: 450,
    },
    features: [
      "Front & Rear Sprocket Fitment",
      "O-Ring / X-Ring Chain Installation",
      "Wheel Alignment & Swingarm Notch Check",
      "High-Tack Chain Lube Coat"
    ]
  },
  {
    id: "pick-drop",
    name: "Pick & Drop Service Charge",
    description: "Safe flatbed or towing vehicle pick-up from your location to workshop and return delivery after repair.",
    category: "Non-Electric",
    prices: {
      cc0_249: 199,
      cc250_399: 199,
      cc400_599: 299,
      cc600_above: 299,
    },
    features: [
      "GPS Tracked Transit Pickup",
      "Insured Vehicle Transport",
      "Same-Day Pickup & Return",
      "Ideal for Major Overhauls"
    ]
  },
  {
    id: "ev-service",
    name: "Electric Scooter Periodic Service",
    description: "Complete electronic BMS scan, high-voltage wiring check, brake shoe service, and battery health audit.",
    category: "Electric",
    prices: {
      cc0_249: 799,
      cc250_399: 799,
      cc400_599: 799,
      cc600_above: 799,
      electric: 799
    },
    features: [
      "BMS Health & Cell Balance Diagnostic",
      "Hub Motor & Throttle Sensor Inspection",
      "Regenerative Braking Calibration",
      "High-Voltage Connector Insulation Check",
      "15-Day Service Warranty"
    ],
    popular: true
  }
];
