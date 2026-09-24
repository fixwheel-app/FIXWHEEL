import assert from 'node:assert/strict';
import test from 'node:test';
import { Request, Response } from 'express';
import {
  BookingPricingError,
  BookingPriceSelection,
  calculateBookingPrice,
  verifyQuotedPrice,
} from '../src/lib/bookingPricing';
import { bookingSchema } from '../src/middleware/validateBooking';
import { getServicePrice, ServicePriceTier } from '../../frontend/lib/pricingData';
import { createBooking } from '../src/controllers/bookingController';

const nonElectricCases: Array<[BookingPriceSelection['serviceId'], BookingPriceSelection['packageName'], BookingPriceSelection['ccRange'], number]> = [
  ['basic-service', 'General Service', '0-249', 550],
  ['basic-service', 'General Service', '250-399', 850],
  ['basic-service', 'General Service', '400-599', 1100],
  ['basic-service', 'General Service', '600+', 1500],
  ['service-engine-oil', 'General Service with engine oil', '0-249', 999],
  ['service-engine-oil', 'General Service with engine oil', '250-399', 1999],
  ['service-engine-oil', 'General Service with engine oil', '400-599', 2990],
  ['service-engine-oil', 'General Service with engine oil', '600+', 3999],
  ['jump-start', 'Jump start', '0-249', 399],
  ['jump-start', 'Jump start', '250-399', 399],
  ['jump-start', 'Jump start', '400-599', 499],
  ['jump-start', 'Jump start', '600+', 499],
  ['puncture', 'Puncture', '0-249', 399],
  ['puncture', 'Puncture', '250-399', 399],
  ['puncture', 'Puncture', '400-599', 550],
  ['puncture', 'Puncture', '600+', 550],
  ['running-repair', 'Running Repair', '0-249', 399],
  ['running-repair', 'Running Repair', '250-399', 399],
  ['running-repair', 'Running Repair', '400-599', 499],
  ['running-repair', 'Running Repair', '600+', 499],
  ['engine-half', 'Engine Half', '0-249', 4500],
  ['engine-half', 'Engine Half', '250-399', 10000],
  ['engine-full', 'Engine full', '0-249', 7999],
  ['engine-full', 'Engine full', '250-399', 18000],
  ['battery-replacement', 'Battery Replacement', '0-249', 99],
  ['battery-replacement', 'Battery Replacement', '250-399', 99],
  ['battery-replacement', 'Battery Replacement', '400-599', 149],
  ['battery-replacement', 'Battery Replacement', '600+', 149],
  ['carburetor-cleaning', 'Carburetor Cleaning', '0-249', 199],
  ['carburetor-cleaning', 'Carburetor Cleaning', '250-399', 199],
  ['carburetor-cleaning', 'Carburetor Cleaning', '400-599', 399],
  ['carburetor-cleaning', 'Carburetor Cleaning', '600+', 399],
  ['obd-inspection', 'OBD Scanner Inspection', '0-249', 199],
  ['obd-inspection', 'OBD Scanner Inspection', '250-399', 249],
  ['obd-inspection', 'OBD Scanner Inspection', '400-599', 399],
  ['obd-inspection', 'OBD Scanner Inspection', '600+', 399],
  ['disc-replacement', 'Brake Disc Replacement', '0-249', 199],
  ['disc-replacement', 'Brake Disc Replacement', '250-399', 249],
  ['disc-replacement', 'Brake Disc Replacement', '400-599', 299],
  ['disc-replacement', 'Brake Disc Replacement', '600+', 299],
  ['chain-sprocket', 'Chain Sprocket Replacement', '0-249', 299],
  ['chain-sprocket', 'Chain Sprocket Replacement', '250-399', 299],
  ['chain-sprocket', 'Chain Sprocket Replacement', '400-599', 450],
  ['chain-sprocket', 'Chain Sprocket Replacement', '600+', 450],
  ['pick-drop', 'Pick & Drop Service', '0-249', 199],
  ['pick-drop', 'Pick & Drop Service', '250-399', 199],
  ['pick-drop', 'Pick & Drop Service', '400-599', 299],
  ['pick-drop', 'Pick & Drop Service', '600+', 299],
];

test('calculates every bookable non-electric spreadsheet tier', () => {
  for (const [serviceId, packageName, ccRange, expected] of nonElectricCases) {
    assert.equal(calculateBookingPrice({
      serviceId,
      packageName,
      bikeType: 'Non-Electric Motorbike',
      ccRange,
    }), expected);
  }
});

test('backend transactional rates match the frontend catalog', () => {
  const tierMap: Record<NonNullable<BookingPriceSelection['ccRange']>, ServicePriceTier> = {
    '0-249': 'cc0_249',
    '250-399': 'cc250_399',
    '400-599': 'cc400_599',
    '600+': 'cc600_above',
  };

  for (const [serviceId, packageName, ccRange, expected] of nonElectricCases) {
    assert.equal(getServicePrice(serviceId, tierMap[ccRange!]), expected);
    assert.equal(calculateBookingPrice({
      serviceId,
      packageName,
      bikeType: 'Non-Electric Motorbike',
      ccRange,
    }), getServicePrice(serviceId, tierMap[ccRange!]));
  }

  const electricCases: Array<[BookingPriceSelection['serviceId'], string]> = [
    ['ev-service', 'General Service'],
    ['jump-start', 'Jump start'],
    ['puncture', 'Puncture'],
    ['running-repair', 'Running Repair'],
  ];

  for (const [serviceId, packageName] of electricCases) {
    assert.equal(calculateBookingPrice({
      serviceId,
      packageName,
      bikeType: 'Electric Motorbike',
    }), getServicePrice(serviceId, 'electric'));
  }
});

test('calculates the approved electric service rates', () => {
  const cases: Array<[BookingPriceSelection['serviceId'], string, number]> = [
    ['ev-service', 'General Service', 799],
    ['jump-start', 'Jump start', 399],
    ['puncture', 'Puncture', 399],
    ['running-repair', 'Running Repair', 399],
  ];

  for (const [serviceId, packageName, expected] of cases) {
    assert.equal(calculateBookingPrice({
      serviceId,
      packageName,
      bikeType: 'Electric Motorbike',
    }), expected);
  }
});

test('rejects an altered browser quote', () => {
  assert.throws(() => verifyQuotedPrice(1, 550), BookingPricingError);
  assert.doesNotThrow(() => verifyQuotedPrice(550, 550));
  assert.doesNotThrow(() => verifyQuotedPrice(undefined, 550));
});

test('rejects mismatched service labels and vehicle categories', () => {
  assert.throws(() => calculateBookingPrice({
    serviceId: 'basic-service',
    packageName: 'Puncture',
    bikeType: 'Non-Electric Motorbike',
    ccRange: '0-249',
  }), BookingPricingError);

  assert.throws(() => calculateBookingPrice({
    serviceId: 'basic-service',
    packageName: 'General Service',
    bikeType: 'Electric Motorbike',
  }), BookingPricingError);
});

test('requires a CC range and rejects inspection-only tiers', () => {
  assert.throws(() => calculateBookingPrice({
    serviceId: 'basic-service',
    packageName: 'General Service',
    bikeType: 'Non-Electric Motorbike',
  }), BookingPricingError);

  assert.throws(() => calculateBookingPrice({
    serviceId: 'engine-half',
    packageName: 'Engine Half',
    bikeType: 'Non-Electric Motorbike',
    ccRange: '400-599',
  }), BookingPricingError);
});

test('request validation rejects unknown service and CC identifiers', () => {
  const base = {
    customerName: 'Test Rider',
    phone: '9876543210',
    address: 'Test address with enough length',
    city: 'Delhi',
    bookingDate: '2026-09-15',
    bikeType: 'Non-Electric Motorbike',
    bikeModel: 'Test Model',
    preferredSlot: '8:00 AM - 9:00 AM',
    package: 'General Service',
    serviceId: 'invented-service',
    ccRange: '100-200',
    price: 1,
  };

  assert.equal(bookingSchema.safeParse(base).success, false);
  assert.equal(bookingSchema.safeParse({
    ...base,
    serviceId: 'basic-service',
    ccRange: '0-249',
    price: 550,
  }).success, true);
});

test('request validation accepts every newly added booking service', () => {
  const base = {
    customerName: 'Test Rider',
    phone: '9876543210',
    address: 'Test address with enough length',
    city: 'Delhi' as const,
    bookingDate: '2026-09-15',
    bikeType: 'Non-Electric Motorbike' as const,
    bikeModel: 'Honda Activa 6G',
    preferredSlot: '8:00 AM - 9:00 AM' as const,
    ccRange: '0-249' as const,
  };

  const cases = [
    ['battery-replacement', 'Battery Replacement', 99],
    ['carburetor-cleaning', 'Carburetor Cleaning', 199],
    ['obd-inspection', 'OBD Scanner Inspection', 199],
    ['disc-replacement', 'Brake Disc Replacement', 199],
    ['chain-sprocket', 'Chain Sprocket Replacement', 299],
    ['pick-drop', 'Pick & Drop Service', 199],
  ] as const;

  for (const [serviceId, packageName, price] of cases) {
    assert.equal(bookingSchema.safeParse({
      ...base,
      package: packageName,
      serviceId,
      price,
    }).success, true);
  }
});

test('booking controller rejects a tampered quote before persistence', async () => {
  let statusCode: number | undefined;
  let responseBody: unknown;
  const req = {
    body: bookingSchema.parse({
      customerName: 'Test Rider',
      phone: '9876543210',
      address: 'Test address with enough length',
      city: 'Delhi',
      bookingDate: '2026-09-15',
      bikeType: 'Non-Electric Motorbike',
      bikeModel: 'Test Model',
      preferredSlot: '8:00 AM - 9:00 AM',
      package: 'General Service',
      serviceId: 'basic-service',
      ccRange: '0-249',
      price: 1,
    }),
  } as Request<{}, {}, ReturnType<typeof bookingSchema.parse>>;
  const res = {
    status: (code: number) => {
      statusCode = code;
      return res;
    },
    json: (body: unknown) => {
      responseBody = body;
      return res;
    },
  } as unknown as Response;

  await createBooking(req, res);

  assert.equal(statusCode, 400);
  assert.deepEqual(responseBody, {
    success: false,
    error: 'Quoted price does not match the official rate',
  });
});
