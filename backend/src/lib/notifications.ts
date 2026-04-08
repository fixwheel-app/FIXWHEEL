import dotenv from 'dotenv';
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
}

export const sendBookingNotification = async (details: BookingDetails) => {
  const apiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!apiKey || apiKey === 'placeholder' || apiKey === 'we-will-add-this-next') {
    console.warn("RESEND_API_KEY missing. Skipping email.");
    return;
  }

  if (!ownerEmail || ownerEmail === 'your-email-here') {
    console.warn("OWNER_EMAIL missing. Skipping email.");
    return;
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'FixWheel <onboarding@resend.dev>',
      to: [ownerEmail],
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
    console.log("Booking email sent");
  } catch (error) {
    console.error("Email failed:", error);
  }
};

export const sendPartnerNotification = async (details: PartnerDetails) => {
  const apiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!apiKey || apiKey === 'placeholder' || apiKey === 'we-will-add-this-next') {
    console.warn("RESEND_API_KEY missing. Skipping email.");
    return;
  }

  if (!ownerEmail || ownerEmail === 'your-email-here') {
    console.warn("OWNER_EMAIL missing. Skipping email.");
    return;
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'FixWheel <onboarding@resend.dev>',
      to: [ownerEmail],
      subject: `New Partner Application — ${details.partnerRef}`,
      html: `
        <h2>New Partner Application</h2>
        <p><b>Ref:</b> ${details.partnerRef}</p>
        <p><b>Garage:</b> ${details.garageName}</p>
        <p><b>Owner:</b> ${details.ownerName}</p>
        <p><b>Phone:</b> ${details.phone}</p>
        <p><b>Location:</b> ${details.mapsLocation}</p>
        <p><b>Vehicles:</b> ${details.vehicleType}</p>
      `,
    });
    console.log("Partner email sent");
  } catch (error) {
    console.error("Email failed:", error);
  }
};
