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

// Geocode address using Nominatim (OpenStreetMap) API with progressive fallback
const geocodeAddress = async (address: string, city: string): Promise<{ latitude: number; longitude: number } | null> => {
  const queryParts = address.split(',').map(p => p.trim()).filter(Boolean);
  
  // Try progressive geocoding by dropping detailed segments (e.g. Shop numbers, landmarks)
  for (let i = 0; i < queryParts.length; i++) {
    const subAddress = queryParts.slice(i).join(', ');
    if (!subAddress.trim()) continue;

    try {
      const query = encodeURIComponent(`${subAddress}, ${city}`);
      const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;
      
      console.log(`[Geocoding] Attempt ${i + 1}: Querying Nominatim for: "${subAddress}, ${city}"`);
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'FixWheel-Partner-Registration-Agent/1.0 (support@fixwheel.app)'
        }
      });

      if (response.ok) {
        const data = await response.json() as any[];
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          if (!isNaN(lat) && !isNaN(lon)) {
            console.log(`[Geocoding] Successfully resolved coordinates at attempt ${i + 1}: lat=${lat}, lon=${lon}`);
            return { latitude: lat, longitude: lon };
          }
        }
      }
    } catch (error) {
      console.error(`[Geocoding] Attempt ${i + 1} failed with error:`, error);
    }
  }

  // Final fallback to city level coordinates if all progressive matches fail
  const CITY_COORDINATES: Record<string, { latitude: number; longitude: number }> = {
    'delhi': { latitude: 28.6139, longitude: 77.2090 },
    'gurgaon': { latitude: 28.4595, longitude: 77.0266 },
    'noida': { latitude: 28.5355, longitude: 77.3910 },
    'faridabad': { latitude: 28.4089, longitude: 77.3178 },
    'ghaziabad': { latitude: 28.6692, longitude: 77.4538 }
  };

  const cityKey = city.toLowerCase().trim();
  if (CITY_COORDINATES[cityKey]) {
    console.log(`[Geocoding] Progressive geocoding failed. Falling back to coordinates of city "${city}":`, CITY_COORDINATES[cityKey]);
    return CITY_COORDINATES[cityKey];
  }

  // Global default (Delhi NCR center)
  console.log('[Geocoding] Both progressive and city fallbacks failed. Using Delhi NCR center coordinates.');
  return { latitude: 28.6139, longitude: 77.2090 };
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
