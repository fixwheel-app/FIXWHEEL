import assert from 'node:assert/strict';
import test from 'node:test';
import {
  COMPLETED_BOOKING_STATUS,
  PublicStatsValidationError,
  requireNonNegativeInteger,
  syncGlobalBikesServiced,
} from '../src/lib/publicStatsSync';
import type { Prisma } from '@prisma/client';

test('accepts non-negative integer public counters', () => {
  assert.equal(requireNonNegativeInteger(0), 0);
  assert.equal(requireNonNegativeInteger(169), 169);
});

test('rejects negative, fractional, and non-number public counters', () => {
  for (const invalidValue of [-1, 1.5, '169', null, undefined]) {
    assert.throws(
      () => requireNonNegativeInteger(invalidValue),
      PublicStatsValidationError
    );
  }
});

test('syncs the exact Completed booking count to the global public row', async () => {
  let countWhere: unknown;
  let rawValues: unknown[] = [];

  const transaction = {
    booking: {
      count: async (args: unknown) => {
        countWhere = args;
        return 169;
      },
    },
    $executeRaw: async (_strings: TemplateStringsArray, ...values: unknown[]) => {
      rawValues = values;
      return 1;
    },
  } as unknown as Prisma.TransactionClient;

  assert.equal(await syncGlobalBikesServiced(transaction), 169);
  assert.deepEqual(countWhere, { where: { status: COMPLETED_BOOKING_STATUS } });
  assert.deepEqual(rawValues, [169]);
});
