import { Resend } from 'resend';

export interface BookingDetails {
  bookingRef: string;
  customerName: string;
  phone: string;
  address: string;
  city: string;
  bookingDate: string;
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
  address: string;
  city: string;
  vehicleType: string;
  servicesOffered: string[];
  garagePhotos?: string[];
  licensePhoto?: string;
}

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is not set');
  return new Resend(apiKey);
};

export const sendBookingNotification = async (details: BookingDetails) => {
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!process.env.RESEND_API_KEY) {
    console.warn('[Booking Email] RESEND_API_KEY missing. Skipping email.');
    return;
  }
  if (!ownerEmail || ownerEmail === 'your-email-here') {
    console.warn('[Booking Email] OWNER_EMAIL missing. Skipping email.');
    return;
  }

  try {
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: 'FixWheel <support@fixwheel.app>',
      to: ownerEmail,
      subject: `New Booking — ${details.bookingRef}`,
      html: `
        <h2>New Booking Received</h2>
        <p><b>Ref:</b> ${details.bookingRef}</p>
        <p><b>Name:</b> ${details.customerName}</p>
        <p><b>Phone:</b> ${details.phone}</p>
        <p><b>Address:</b> ${details.address}</p>
        <p><b>City:</b> ${details.city}</p>
        <p><b>Date:</b> ${details.bookingDate}</p>
        <p><b>Bike:</b> ${details.bikeModel}</p>
        <p><b>Package:</b> ${details.package}</p>
        <p><b>Price:</b> ₹${details.price}</p>
        <p><b>Slot:</b> ${details.preferredSlot}</p>
      `,
    });
    if (error) throw error;
    console.log('[Booking Email] Sent successfully:', data?.id);
  } catch (error) {
    console.error('[Booking Email] Failed:', error);
  }
};

export const sendPartnerNotification = async (details: PartnerDetails) => {
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!process.env.RESEND_API_KEY) {
    console.warn('[Partner Email] RESEND_API_KEY missing. Skipping email.');
    return;
  }
  if (!ownerEmail || ownerEmail === 'your-email-here') {
    console.warn('[Partner Email] OWNER_EMAIL missing. Skipping email.');
    return;
  }

  try {
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: 'FixWheel <support@fixwheel.app>',
      to: ownerEmail,
      subject: `New Partner Application — ${details.partnerRef}`,
      html: `
        <h2>New Partner Application</h2>
        <p><b>Ref:</b> ${details.partnerRef}</p>
        <p><b>Garage:</b> ${details.garageName}</p>
        <p><b>Owner:</b> ${details.ownerName}</p>
        <p><b>Phone:</b> ${details.phone}</p>
        <p><b>City:</b> ${details.city}</p>
        <p><b>Address:</b> ${details.address || 'Not Provided'}</p>
        ${details.mapsLocation ? `<p><b>Google Maps Link:</b> <a href="${details.mapsLocation}" target="_blank">Open in Google Maps</a></p>` : ''}
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
    if (error) throw error;
    console.log('[Partner Email] Sent successfully:', data?.id);
  } catch (error) {
    console.error('[Partner Email] Failed:', error);
  }
};

