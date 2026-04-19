import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

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

export interface PartnerDetails {
  partnerRef: string;
  garageName: string;
  ownerName: string;
  phone: string;
  mapsLocation: string;
  vehicleType: string;
  servicesOffered: string[];
  garagePhotos?: string[];
  licensePhoto?: string;
}

// Create reusable transporter object using Hostinger SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendBookingNotification = async (details: BookingDetails) => {
  const ownerEmail = process.env.OWNER_EMAIL;
  
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP_USER or SMTP_PASS missing. Skipping email.");
    return;
  }

  if (!ownerEmail || ownerEmail === 'your-email-here') {
    console.warn("OWNER_EMAIL missing. Skipping email.");
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: `"FixWheel" <${process.env.SMTP_USER}>`, // sender address must match SMTP user on Hostinger
      to: ownerEmail,
      subject: `New Booking — ${details.bookingRef}`,
      html: `
        <h2>New Booking Received</h2>
        <p><b>Ref:</b> ${details.bookingRef}</p>
        <p><b>Name:</b> ${details.customerName}</p>
        <p><b>Phone:</b> ${details.phone}</p>
        <p><b>Address:</b> ${details.address}</p>
        <p><b>Bike:</b> ${details.bikeModel}</p>
        <p><b>Package:</b> ${details.package}</p>
        <p><b>Price:</b> ₹${details.price}</p>
        <p><b>Slot:</b> ${details.preferredSlot}</p>
      `,
    });
    console.log("Booking email sent: %s", info.messageId);
  } catch (error) {
    console.error("Email failed:", error);
  }
};

export const sendPartnerNotification = async (details: PartnerDetails) => {
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP_USER or SMTP_PASS missing. Skipping email.");
    return;
  }

  if (!ownerEmail || ownerEmail === 'your-email-here') {
    console.warn("OWNER_EMAIL missing. Skipping email.");
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: `"FixWheel" <${process.env.SMTP_USER}>`,
      to: ownerEmail,
      subject: `New Partner Application — ${details.partnerRef}`,
      html: `
        <h2>New Partner Application</h2>
        <p><b>Ref:</b> ${details.partnerRef}</p>
        <p><b>Garage:</b> ${details.garageName}</p>
        <p><b>Owner:</b> ${details.ownerName}</p>
        <p><b>Phone:</b> ${details.phone}</p>
        <p><b>Location:</b> ${details.mapsLocation}</p>
        <p><b>Vehicles:</b> ${details.vehicleType}</p>
        <p><b>Services:</b> ${details.servicesOffered.join(', ')}</p>
        ${details.garagePhotos && details.garagePhotos.length > 0 ? `
          <h3>Garage Photos:</h3>
          <ul>
            ${details.garagePhotos.map(url => `<li><a href="${url}">View Photo</a></li>`).join('')}
          </ul>
        ` : ''}
        ${details.licensePhoto ? `
          <p><b>License Photo:</b> <a href="${details.licensePhoto}">View Photo</a></p>
        ` : ''}
      `,
    });
    console.log("Partner email sent: %s", info.messageId);
  } catch (error) {
    console.error("Email failed:", error);
  }
};
