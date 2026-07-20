export interface AuthorProfile {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  experience: string;
  bikesServiced: string;
  rating: string;
  location: string;
  specializations: string[];
  certifications: string[];
}

export const AUTHORS_DB: Record<string, AuthorProfile> = {
  "zakir-hussain": {
    slug: "zakir-hussain",
    name: "Zakir Hussain",
    role: "Senior Master Mechanic & Automotive Specialist",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Zakir Hussain is FixWheel's Lead Automotive Specialist with over 14 years of hands-on experience in multi-brand motorcycle engineering, fuel injection (FI) tuning, and electrical systems. Having diagnosed over 12,000 two-wheelers across Delhi-NCR, Zakir leads FixWheel's technical training program and writes comprehensive maintenance guides for Indian riders.",
    experience: "14+ Years",
    bikesServiced: "12,000+",
    rating: "4.95 ★",
    location: "Delhi-NCR, India",
    specializations: [
      "Engine Overhauls & Rebuilds",
      "Fuel Injection (FI) & ECU Tuning",
      "Electric Scooter & EV Battery Diagnostics",
      "Disc Brake Calibration & Hydraulic Fluids",
      "Carburetor Jetting & Synchronisation"
    ],
    certifications: [
      "Certified Master Motorcycle Technician (BS6 & FI Systems)",
      "EV High-Voltage Battery Safety Certification",
      "Advanced Hydraulic Braking Systems Specialist"
    ]
  },
  "sanjay-kumar": {
    slug: "sanjay-kumar",
    name: "Sanjay Kumar",
    role: "Master Mechanic & Drivetrain Specialist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Sanjay Kumar has over 10 years of field experience in two-wheeler chain maintenance, clutch assembly repairs, and preventative maintenance for commuter motorcycles across Delhi-NCR.",
    experience: "10+ Years",
    bikesServiced: "8,500+",
    rating: "4.90 ★",
    location: "Gurgaon & Delhi, India",
    specializations: [
      "Chain & Sprocket Maintenance",
      "Clutch Assembly Overhaul",
      "Commuter Bike Periodic Service"
    ],
    certifications: [
      "Drivetrain & Transmission Specialist",
      "FixWheel Certified Field Trainer"
    ]
  }
};
