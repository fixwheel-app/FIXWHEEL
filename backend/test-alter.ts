import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Attempting to alter table Booking...');
    await prisma.$executeRawUnsafe(`ALTER TABLE "Booking" ADD COLUMN IF NOT EXISTS "city" TEXT NOT NULL DEFAULT 'Delhi';`);
    await prisma.$executeRawUnsafe(`ALTER TABLE "Booking" ADD COLUMN IF NOT EXISTS "bookingDate" TEXT NOT NULL DEFAULT '2026-05-20';`);
    console.log('Success!');
  } catch (err) {
    console.error('Error altering table:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
