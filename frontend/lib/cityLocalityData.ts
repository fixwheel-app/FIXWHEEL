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
}

export const CITIES_DB: Record<string, CityConfig> = {
  gurgaon: {
    slug: "gurgaon",
    name: "Gurgaon",
    db: GURGAON_LOCALITY_DB,
  },
  delhi: {
    slug: "delhi",
    name: "Delhi",
    db: DELHI_LOCALITY_DB,
  },
  noida: {
    slug: "noida",
    name: "Noida",
    db: NOIDA_LOCALITY_DB,
  },
  faridabad: {
    slug: "faridabad",
    name: "Faridabad",
    db: FARIDABAD_LOCALITY_DB,
  },
  ghaziabad: {
    slug: "ghaziabad",
    name: "Ghaziabad",
    db: GHAZIABAD_LOCALITY_DB,
  },
};
