import { LOCALITY_DB as GURGAON_LOCALITY_DB, LocalityDetails } from "@/app/gurgaon/[locality]/localityData";
import { LOCALITY_DB as DELHI_LOCALITY_DB } from "@/app/delhi/[locality]/localityData";
import { LOCALITY_DB as NOIDA_LOCALITY_DB } from "@/app/noida/[locality]/localityData";
import { LOCALITY_DB as FARIDABAD_LOCALITY_DB } from "@/app/faridabad/[locality]/localityData";
import { LOCALITY_DB as GHAZIABAD_LOCALITY_DB } from "@/app/ghaziabad/[locality]/localityData";

export type { LocalityDetails };

export interface CityConfig {
  slug: string;
  name: string;
  db: Record<string, LocalityDetails>;
  brandPageLocalities: string[];
}

export const CITIES_DB: Record<string, CityConfig> = {
  gurgaon: {
    slug: "gurgaon",
    name: "Gurgaon",
    db: GURGAON_LOCALITY_DB,
    brandPageLocalities: [
      "DLF Phase 1–5",
      "Cyber City",
      "Golf Course Road",
      "Sohna Road",
      "Palam Vihar",
      "Udyog Vihar",
      "Sector 14 & 15",
      "Sector 56 & 57",
      "Badshahpur",
      "Manesar",
    ],
  },
  delhi: {
    slug: "delhi",
    name: "Delhi",
    db: DELHI_LOCALITY_DB,
    brandPageLocalities: [
      "Dwarka",
      "Vasant Kunj",
      "Rohini",
      "Saket & Hauz Khas",
      "Lajpat Nagar",
      "Janakpuri",
      "Pitampura",
      "Karol Bagh",
      "Mayur Vihar",
      "Connaught Place",
    ],
  },
  noida: {
    slug: "noida",
    name: "Noida",
    db: NOIDA_LOCALITY_DB,
    brandPageLocalities: [
      "Sector 18 & 27",
      "Sector 62 & 63",
      "Sector 50 & 51",
      "Sector 75–78",
      "Sector 137 & Expressway",
      "Sector 120",
      "Greater Noida West",
    ],
  },
  faridabad: {
    slug: "faridabad",
    name: "Faridabad",
    db: FARIDABAD_LOCALITY_DB,
    brandPageLocalities: [
      "NIT Faridabad (1–5)",
      "Sector 15 & 16",
      "Sector 21",
      "Sector 37",
      "Sector 85–89",
      "Greater Faridabad",
      "Ballabgarh stretch",
    ],
  },
  ghaziabad: {
    slug: "ghaziabad",
    name: "Ghaziabad",
    db: GHAZIABAD_LOCALITY_DB,
    brandPageLocalities: [
      "Indirapuram",
      "Vaishali",
      "Kaushambi",
      "Vasundhara",
      "Raj Nagar & Extension",
      "Crossings Republik",
      "Vijay Nagar",
    ],
  },
};
