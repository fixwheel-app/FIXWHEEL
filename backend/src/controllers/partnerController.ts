import { Request, Response } from 'express';
import { z } from 'zod';
import { db } from '../lib/db';
import { sendPartnerNotification } from '../lib/notifications';

// Zod validation schema
const partnerSchema = z.object({
  garageName: z.string().min(2, 'Garage name must be at least 2 characters'),
  ownerName: z.string().min(2, 'Owner name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  address: z.string().min(10, 'Address must be at least 10 characters long'),
  city: z.string().min(2, 'City is required'),
  vehicleType: z.enum(['Bike', 'Car', 'Both'], { message: 'Vehicle type must be Bike, Car, or Both' }),
  servicesOffered: z.array(z.string()).min(1, 'At least one service must be selected'),
  garagePhotos: z.array(z.string()).optional(),
  licensePhoto: z.string().optional(),
});

// Geocode address using Nominatim (OpenStreetMap) API
const geocodeAddress = async (address: string, city: string): Promise<{ latitude: number; longitude: number } | null> => {
  try {
    const query = encodeURIComponent(`${address}, ${city}`);
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;
    
    console.log(`[Geocoding] Querying Nominatim for address: "${address}" in city: "${city}"`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'FixWheel-Partner-Registration-Agent/1.0 (support@fixwheel.app)'
      }
    });

    if (!response.ok) {
      console.error(`[Geocoding] Nominatim HTTP error: ${response.status}`);
      return null;
    }

    const data = await response.json() as any[];
    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);
      if (!isNaN(lat) && !isNaN(lon)) {
        console.log(`[Geocoding] Successfully resolved coordinates: lat=${lat}, lon=${lon}`);
        return { latitude: lat, longitude: lon };
      }
    }
    console.warn('[Geocoding] No matching coordinates found for the query.');
    return null;
  } catch (error) {
    console.error('[Geocoding] Network or JSON parsing error:', error);
    return null;
  }
};

const generatePartnerRef = (): string => {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `FXW-P-${randomDigits}`;
};

export const createPartner = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request body
    const parsed = partnerSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: parsed.error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      });
      return;
    }

    const data = parsed.data;

    // Resolve coordinates using OpenStreetMap Nominatim geocoding API
    const coords = await geocodeAddress(data.address, data.city);
    if (!coords) {
      res.status(400).json({
        success: false,
        error: 'We could not verify your garage address on the map. Please make sure the address is accurate and includes landmarks or a pincode.',
        details: [
          {
            field: 'address',
            message: 'Address could not be geocoded into latitude and longitude.'
          }
        ]
      });
      return;
    }

    // Generate unique partner reference
    let partnerRef = generatePartnerRef();
    let isUnique = false;
    while (!isUnique) {
      const existing = await db.partner.findUnique({ where: { partnerRef } });
      if (existing) {
        partnerRef = generatePartnerRef();
      } else {
        isUnique = true;
      }
    }

    // Auto-generate Google Maps link using resolved coordinates for backwards compatibility
    const mapsLocation = `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`;

    // Save to database
    const newPartner = await db.partner.create({
      data: {
        partnerRef,
        garageName: data.garageName,
        ownerName: data.ownerName,
        phone: '+91' + data.phone,
        mapsLocation: mapsLocation,
        address: data.address,
        latitude: coords.latitude,
        longitude: coords.longitude,
        city: data.city,
        vehicleType: data.vehicleType,
        servicesOffered: data.servicesOffered,
        garagePhotos: data.garagePhotos || [],
        licensePhoto: data.licensePhoto || null,
        status: 'pending',
      },
    });

    // Send email notification (non-blocking — respond to user instantly)
    (async () => {
      try {
        console.log('[Partner Email] Attempting to send notification for:', newPartner.partnerRef);
        console.log('[Partner Email] SMTP_USER:', process.env.SMTP_USER ? 'SET' : 'MISSING');
        console.log('[Partner Email] SMTP_PASS:', process.env.SMTP_PASS ? 'SET' : 'MISSING');
        console.log('[Partner Email] OWNER_EMAIL:', process.env.OWNER_EMAIL || 'MISSING');
        await sendPartnerNotification({
          partnerRef: newPartner.partnerRef,
          garageName: newPartner.garageName,
          ownerName: newPartner.ownerName,
          phone: newPartner.phone,
          mapsLocation: newPartner.mapsLocation,
          address: newPartner.address,
          latitude: newPartner.latitude,
          longitude: newPartner.longitude,
          city: newPartner.city,
          vehicleType: newPartner.vehicleType,
          servicesOffered: newPartner.servicesOffered,
          garagePhotos: newPartner.garagePhotos,
          licensePhoto: newPartner.licensePhoto || undefined,
        });
        console.log('[Partner Email] Notification sent successfully.');
      } catch (emailError) {
        console.error('[Partner Email] Failed to send notification:', emailError);
      }
    })();

    res.status(201).json({
      success: true,
      partnerId: newPartner.partnerRef,
      message: 'Application received',
    });

  } catch (error) {
    console.error('Partner creation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit partner application',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
