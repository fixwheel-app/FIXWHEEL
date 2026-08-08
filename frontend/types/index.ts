export type PackageType = 
  | "General Service" 
  | "General Service with engine oil" 
  | "Puncture" 
  | "Running Repair" 
  | "Engine Half" 
  | "Engine full" 
  | "Jump start"
  | string;

export interface BookingFormData {
  customerName: string;
  phone: string;
  address: string;
  bikeType: string;
  bikeModel: string;
  issueDescription?: string;
  preferredSlot: string;
  package: PackageType;
  price: number;
}

export interface BookingResponse {
  success: boolean;
  bookingId?: string;
  message?: string;
  error?: string;
  details?: any[];
}

export interface RepairPackage {
  id: PackageType;
  name: string;
  price?: number;
  description?: string;
  idealFor?: string;
  includes: string[];
  additionalCost?: string[];
  estimatedTime?: string;
  isPopular?: boolean;
  ccRange: string;
  tagline: string;
  accentColor: string;
}
export interface PartnerFormData {
  garageName?: string;
  ownerName: string;
  phone: string;
  address: string;
  city: string;
  vehicleType: "Bike" | "Car" | "Both";
  servicesOffered: string[];
  garagePhotos?: string[];
  licensePhoto?: string;
}

export interface PartnerResponse {
  success: boolean;
  partnerId?: string;
  message?: string;
  error?: string;
  details?: any[];
}

export interface QueryFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface QueryResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: any[];
}

