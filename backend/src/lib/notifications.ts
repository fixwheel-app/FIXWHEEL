import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const ownerEmail = process.env.OWNER_EMAIL || 'hello@spinfix.in';

export interface BookingDetails {
  bookingRef: string;
  customerName: string;
  phone: string;
  address: string;
  bikeType: string;
  bikeModel: string;
  issueDescription: string | null;
  package: string;
  price: number;
  preferredSlot: string;
}

export const sendBookingNotification = async (details: BookingDetails) => {
  const apiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.OWNER_EMAIL;

  // Validation: Ensure keys exist before sending
  if (!apiKey || apiKey === 'we-will-add-this-next') {
    console.warn("⚠️  RESEND_API_KEY is missing or not configured. Skipping booking email.");
    return;
  }
  
  if (!ownerEmail || ownerEmail === 'your-email-here') {
    console.warn("⚠️  OWNER_EMAIL is missing. Skipping booking email.");
    return;
  }

  const {
    bookingRef, customerName, phone, address, bikeModel, 
    package: selectedPackage, preferredSlot
  } = details;

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
      <h2 style="color: #e62b2b;">New Booking Received 🚀</h2>
      <p>A new service booking has been created with reference: <strong>${bookingRef}</strong></p>
      
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
      
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Bike Model:</strong> ${bikeModel}</p>
      <p><strong>Selected Package:</strong> ${selectedPackage}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Preferred Slot:</strong> ${preferredSlot}</p>
      
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
      
      <p style="font-size: 12px; color: #666;">This is an automated notification from the FixWheel Backend.</p>
    </div>
  `;

  try {
    const resendClient = new Resend(apiKey);
    await resendClient.emails.send({
      from: 'FixWheel <onboarding@resend.dev>',
      to: [ownerEmail],
      subject: "New Booking Received 🚀",
      html: htmlContent,
    });
    console.log(`✅ Booking notification email sent for ${bookingRef}`);
  } catch (error) {
    // Error Handling: Log error but do not break the main flow
    console.error("❌ Failed to send booking email:", error);
  }
};

// ---- Partner Application Notification ----

export interface PartnerDetails {
  partnerRef: string;
  garageName: string;
  ownerName: string;
  phone: string;
  mapsLocation: string;
  vehicleType: string;
  servicesOffered: string[];
}

export const sendPartnerNotification = async (details: PartnerDetails) => {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'we-will-add-this-next') {
    console.log("No RESEND_API_KEY found, skipping partner notification email.");
    return { success: true, message: "Skipped email" };
  }

  const { partnerRef, garageName, ownerName, phone, mapsLocation, vehicleType, servicesOffered } = details;

  const htmlContent = `
    <div style="font-family: 'Inter', sans-serif; color: #0F172A; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E2E8F0; border-radius: 8px;">
      <h1 style="color: #e62b2b; margin-bottom: 24px; text-align: center;">🔧 FixWheel — New Partner Application</h1>

      <div style="background-color: #F8FAFC; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
        <p style="margin: 0; font-size: 18px; font-weight: 600;">Application Reference: <b>${partnerRef}</b></p>
        <p style="margin: 8px 0 0 0; color: #64748B;">Received at: ${new Date().toLocaleString('en-IN')}</p>
      </div>

      <h2 style="font-size: 18px; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px;">Garage Details</h2>
      <p><b>Garage Name:</b> ${garageName}</p>
      <p><b>Owner Name:</b> ${ownerName}</p>
      <p><b>WhatsApp:</b> ${phone}</p>
      <p><b>Vehicles Serviced:</b> ${vehicleType}</p>
      <p><b>Google Maps:</b> <a href="${mapsLocation}" style="color: #e62b2b;">${mapsLocation}</a></p>

      <h2 style="font-size: 18px; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; margin-top: 24px;">Services Offered</h2>
      <ul style="padding-left: 20px; color: #334155;">
        ${servicesOffered.map(s => `<li style="margin-bottom: 4px;">${s}</li>`).join('')}
      </ul>

      <div style="margin-top: 32px; padding: 12px; background: #FFF5F5; border-left: 4px solid #e62b2b; border-radius: 4px;">
        <p style="margin: 0; font-size: 14px; color: #64748B;">Please review and approve or reject this application in your dashboard.</p>
      </div>

      <div style="margin-top: 32px; text-align: center; font-size: 12px; color: #94A3B8;">
        <p>This is an automated message from your FixWheel platform.</p>
      </div>
    </div>
  `;

  try {
    const resendClient = new Resend(process.env.RESEND_API_KEY);
    const data = await resendClient.emails.send({
      from: 'FixWheel Partners <onboarding@resend.dev>',
      to: [ownerEmail],
      subject: `New Partner Application — ${partnerRef}`,
      html: htmlContent,
    });
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send partner email:", error);
    return { success: false, error };
  }
};
