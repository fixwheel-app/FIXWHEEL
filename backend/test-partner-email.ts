import dotenv from 'dotenv';
dotenv.config();
import { sendPartnerNotification } from './src/lib/notifications';

async function testEmail() {
  console.log("Starting partner email test...");
  
  await sendPartnerNotification({
    partnerRef: "FXW-P-1234",
    garageName: "Test Garage",
    ownerName: "John Garage",
    phone: "+919998887776",
    mapsLocation: "https://maps.google.com/?q=Test",
    vehicleType: "Both",
    servicesOffered: ["General Service", "Engine Work"],
    garagePhotos: ["https://example.com/photo1.jpg"],
    licensePhoto: "https://example.com/license.jpg"
  });
  
  console.log("Partner email test execution completed.");
}

testEmail().catch(console.error);
