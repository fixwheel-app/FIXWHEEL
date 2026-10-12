import { BIKE_DATA } from "@/lib/bikes";
import { SERVICE_PRICING_LIST, type ServicePriceId } from "@/lib/pricingData";

export interface ElectricServiceOption {
  tag: string;
  id: string;
  name: string;
  description: string;
  time: string;
  price: number;
}

const electricServiceTags: Partial<Record<ServicePriceId, string>> = {
  "jump-start": "[JUMPSTART]",
  puncture: "[PUNCTURE]",
  "running-repair": "[RUNNING]",
  "ev-service": "[EV SERVICE]",
};

const electricServiceTimes: Partial<Record<ServicePriceId, string>> = {
  "jump-start": "30 Mins",
  puncture: "30 Mins",
  "running-repair": "30 Mins",
  "ev-service": "45 Mins",
};

// Use the same filter, names, descriptions, and prices as the Electric tab on /pricing.
export const ELECTRIC_SERVICE_OPTIONS: ElectricServiceOption[] =
  SERVICE_PRICING_LIST.filter(
    (service) =>
      service.category === "Electric" || service.prices.electric !== undefined,
  ).map((service) => {
    const price = service.prices.electric ?? service.prices.cc0_249;

    return {
      tag: electricServiceTags[service.id] ?? "[EV SERVICE]",
      id: service.id,
      name: service.name,
      description: service.description,
      time: electricServiceTimes[service.id] ?? "30 Mins",
      price: Number(price),
    };
  });

function normalizeBrandReference(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

export function isElectricBrandReference(...references: Array<string | undefined>) {
  return Boolean(findElectricBrandByReference(...references));
}

export function findElectricBrandByReference(...references: Array<string | undefined>) {
  const normalizedReferences = new Set(
    references.filter((value): value is string => Boolean(value)).map(normalizeBrandReference)
  );

  return BIKE_DATA["Electric Motorbike"].find(
    (brand) =>
      normalizedReferences.has(normalizeBrandReference(brand.id)) ||
      normalizedReferences.has(normalizeBrandReference(brand.name))
  );
}
