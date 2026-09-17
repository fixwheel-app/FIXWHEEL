import type { Prisma } from '@prisma/client';

export const COMPLETED_BOOKING_STATUS = 'Completed';

export class PublicStatsValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PublicStatsValidationError';
  }
}

export function requireNonNegativeInteger(value: unknown): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0) {
    throw new PublicStatsValidationError('Bikes serviced must be a non-negative integer');
  }

  return value;
}

export async function syncGlobalBikesServiced(
  prisma: Prisma.TransactionClient
): Promise<number> {
  const completedOrders = requireNonNegativeInteger(
    await prisma.booking.count({ where: { status: COMPLETED_BOOKING_STATUS } })
  );

  const updatedRows = await prisma.$executeRaw`
    UPDATE public_stats
    SET bikes_serviced = ${completedOrders}, updated_at = NOW()
    WHERE city_slug = 'global'
  `;

  if (updatedRows !== 1) {
    throw new Error('Global public_stats row was not found');
  }

  return completedOrders;
}
