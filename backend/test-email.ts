import dotenv from 'dotenv';
dotenv.config();
import { sendBookingNotification } from './src/lib/notifications';

async function testEmail() {
  console.log("Starting email test...");
  
  await sendBookingNotification({
    bookingRef: "FXW-TEST-999",
    customerName: "John Doe Test",
    phone: "+91 9998887776",
    address: "123 Dev Street, New Delhi",
    bikeType: "Motorbike",
    bikeModel: "Royal Enfield Classic 350",
    issueDescription: "Test from terminal",
    package: "Premium",
    price: 1499,
    preferredSlot: "Morning (8AM - 12PM)"
  });
  
  console.log("Test execution completed.");
}

testEmail().catch(console.error);
