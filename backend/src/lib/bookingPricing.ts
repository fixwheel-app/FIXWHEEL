export const BOOKABLE_SERVICE_IDS = [
  'basic-service',
  'service-engine-oil',
  'jump-start',
  'puncture',
  'running-repair',
  'engine-half',
  'engine-full',
  'ev-service',
] as const;

export const BOOKING_CC_RANGES = ['0-249', '250-399', '400-599', '600+'] as const;

export type BookableServiceId = typeof BOOKABLE_SERVICE_IDS[number];
export type BookingCcRange = typeof BOOKING_CC_RANGES[number];
export type BookingBikeType = 'Electric Motorbike' | 'Non-Electric Motorbike' | 'Scooter';

type ServicePricing = {
  packageName: string;
  nonElectric?: Record<BookingCcRange, number | null>;
  electric?: number;
};

const BOOKING_PRICING: Record<BookableServiceId, ServicePricing> = {
  'basic-service': {
    packageName: 'General Service',
    nonElectric: { '0-249': 550, '250-399': 850, '400-599': 1100, '600+': 1500 },
  },
  'service-engine-oil': {
    packageName: 'General Service with engine oil',
    nonElectric: { '0-249': 999, '250-399': 1999, '400-599': 2990, '600+': 3999 },
  },
  'jump-start': {
    packageName: 'Jump start',
    nonElectric: { '0-249': 399, '250-399': 399, '400-599': 499, '600+': 499 },
    electric: 399,
  },
  puncture: {
    packageName: 'Puncture',
    nonElectric: { '0-249': 399, '250-399': 399, '400-599': 550, '600+': 550 },
    electric: 399,
  },
  'running-repair': {
    packageName: 'Running Repair',
    nonElectric: { '0-249': 399, '250-399': 399, '400-599': 499, '600+': 499 },
    electric: 399,
  },
  'engine-half': {
    packageName: 'Engine Half',
    nonElectric: { '0-249': 4500, '250-399': 10000, '400-599': null, '600+': null },
  },
  'engine-full': {
    packageName: 'Engine full',
    nonElectric: { '0-249': 7999, '250-399': 18000, '400-599': null, '600+': null },
  },
  'ev-service': {
    packageName: 'General Service',
    electric: 799,
  },
};

export class BookingPricingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BookingPricingError';
  }
}

export interface BookingPriceSelection {
  serviceId: BookableServiceId;
  packageName: string;
  bikeType: BookingBikeType;
  ccRange?: BookingCcRange;
}

export const calculateBookingPrice = (selection: BookingPriceSelection): number => {
  const service = BOOKING_PRICING[selection.serviceId];

  if (service.packageName !== selection.packageName) {
    throw new BookingPricingError('Service selection does not match the selected package');
  }

  if (selection.bikeType === 'Electric Motorbike') {
    if (service.electric === undefined) {
      throw new BookingPricingError('Selected service is not available for electric vehicles');
    }

    return service.electric;
  }

  if (!selection.ccRange) {
    throw new BookingPricingError('CC range is required for non-electric vehicles');
  }

  const price = service.nonElectric?.[selection.ccRange];
  if (price === undefined) {
    throw new BookingPricingError('Selected service is not available for non-electric vehicles');
  }
  if (price === null) {
    throw new BookingPricingError('Selected service requires a manual inspection for this CC range');
  }

  return price;
};

export const verifyQuotedPrice = (quotedPrice: number | undefined, authoritativePrice: number): void => {
  if (quotedPrice !== undefined && quotedPrice !== authoritativePrice) {
    throw new BookingPricingError('Quoted price does not match the official rate');
  }
};
