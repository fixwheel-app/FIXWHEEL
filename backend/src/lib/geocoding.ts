const DEFAULT_GEOCODING_ENDPOINT = 'https://nominatim.openstreetmap.org/search';
const DEFAULT_TIMEOUT_MS = 8_000;
const DEFAULT_RETRY_DELAY_MS = 1_100;

export interface AddressCoordinates {
  latitude: number;
  longitude: number;
}

export type AddressGeocodingFailure = 'address_not_found' | 'service_unavailable';

export class AddressGeocodingError extends Error {
  constructor(
    message: string,
    public readonly failure: AddressGeocodingFailure,
  ) {
    super(message);
    this.name = 'AddressGeocodingError';
  }
}

type GeocodingFetch = typeof fetch;
type GeocodingWait = (milliseconds: number) => Promise<void>;

interface NominatimResult {
  lat?: unknown;
  lon?: unknown;
}

const getTimeoutMs = (): number => {
  const configuredTimeout = Number(process.env.GEOCODING_TIMEOUT_MS);
  return Number.isFinite(configuredTimeout) && configuredTimeout > 0
    ? configuredTimeout
    : DEFAULT_TIMEOUT_MS;
};

const getRetryDelayMs = (): number => {
  const configuredDelay = Number(process.env.GEOCODING_RETRY_DELAY_MS);
  return Number.isFinite(configuredDelay) && configuredDelay >= 0
    ? configuredDelay
    : DEFAULT_RETRY_DELAY_MS;
};

const wait: GeocodingWait = async (milliseconds) => {
  await new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
};

const collapseWhitespace = (value: string): string => value.replace(/\s+/g, ' ').trim();

const removeUnitDetails = (address: string): string => collapseWhitespace(
  address.replace(
    /\b(?:flat|house|plot|unit|room|floor|door|h\s*no)\s*(?:no\.?|number)?\s*[-:#]?\s*[a-z0-9/-]+\b/gi,
    ' ',
  ),
);

export const buildAddressQueries = (address: string, city: string): string[] => {
  const queries: string[] = [];
  const seen = new Set<string>();
  const addQuery = (location: string): void => {
    const cleanedLocation = collapseWhitespace(location.replace(/^[,;\s]+|[,;\s]+$/g, ''));
    if (!cleanedLocation) return;

    const includesCity = cleanedLocation.toLocaleLowerCase('en-IN')
      .includes(city.toLocaleLowerCase('en-IN'));
    const query = includesCity
      ? `${cleanedLocation}, India`
      : `${cleanedLocation}, ${city}, India`;
    const key = query.toLocaleLowerCase('en-IN');
    if (!seen.has(key)) {
      seen.add(key);
      queries.push(query);
    }
  };

  addQuery(address);

  const addressWithoutUnitDetails = removeUnitDetails(address);
  if (addressWithoutUnitDetails !== collapseWhitespace(address)) {
    addQuery(addressWithoutUnitDetails);
  }

  const addressParts = address
    .split(/[,;\n]+/)
    .map(collapseWhitespace)
    .filter(Boolean);
  for (let index = 1; index < addressParts.length; index += 1) {
    addQuery(addressParts.slice(index).join(', '));
  }

  const postalCode = address.match(/\b[1-9][0-9]{5}\b/)?.[0];
  if (postalCode) {
    addQuery(postalCode);
  }

  const cityQuery = `${city}, India`;
  const cityKey = cityQuery.toLocaleLowerCase('en-IN');
  if (!seen.has(cityKey)) {
    queries.push(cityQuery);
  }

  return queries;
};

const isValidCoordinate = (value: number, minimum: number, maximum: number): boolean =>
  Number.isFinite(value) && value >= minimum && value <= maximum;

export const geocodeAddress = async (
  address: string,
  city: string,
  fetchImpl: GeocodingFetch = fetch,
  waitImpl: GeocodingWait = wait,
): Promise<AddressCoordinates | null> => {
  const queries = buildAddressQueries(address, city);

  for (let index = 0; index < queries.length; index += 1) {
    if (index > 0) {
      await waitImpl(getRetryDelayMs());
    }

    const endpoint = process.env.GEOCODING_BASE_URL || DEFAULT_GEOCODING_ENDPOINT;
    const url = new URL(endpoint);
    url.searchParams.set('format', 'jsonv2');
    url.searchParams.set('q', queries[index]);
    url.searchParams.set('limit', '1');
    url.searchParams.set('countrycodes', 'in');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), getTimeoutMs());

    try {
      const response = await fetchImpl(url, {
        headers: {
          Accept: 'application/json',
          'User-Agent': process.env.GEOCODING_USER_AGENT || 'FixWheel/1.0 (support@fixwheel.app)',
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new AddressGeocodingError(
          `Address lookup returned HTTP ${response.status}`,
          'service_unavailable',
        );
      }

      const results = await response.json() as unknown;
      if (!Array.isArray(results) || results.length === 0) {
        continue;
      }

      const match = results[0] as NominatimResult;
      const latitude = Number(match.lat);
      const longitude = Number(match.lon);

      if (
        !isValidCoordinate(latitude, -90, 90)
        || !isValidCoordinate(longitude, -180, 180)
      ) {
        throw new AddressGeocodingError(
          'Address lookup returned invalid coordinates',
          'service_unavailable',
        );
      }

      return { latitude, longitude };
    } catch (error) {
      if (error instanceof AddressGeocodingError) {
        throw error;
      }

      throw new AddressGeocodingError(
        'The address lookup service is temporarily unavailable',
        'service_unavailable',
      );
    } finally {
      clearTimeout(timeout);
    }
  }

  return null;
};
