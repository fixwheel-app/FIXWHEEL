import assert from 'node:assert/strict';
import test from 'node:test';
import {
  AddressGeocodingError,
  geocodeAddress,
} from '../src/lib/geocoding';

test('geocodes the complete customer address and returns numeric coordinates', async () => {
  let requestedUrl: URL | undefined;
  let requestHeaders: Headers | undefined;
  const fakeFetch: typeof fetch = async (input, init) => {
    requestedUrl = new URL(input.toString());
    requestHeaders = new Headers(init?.headers);

    return new Response(JSON.stringify([{
      lat: '28.6139391',
      lon: '77.2090212',
    }]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  };

  const coordinates = await geocodeAddress(
    'Connaught Place, Near Rajiv Chowk Metro Station',
    'Delhi',
    fakeFetch,
  );

  assert.deepEqual(coordinates, {
    latitude: 28.6139391,
    longitude: 77.2090212,
  });
  assert.equal(
    requestedUrl?.searchParams.get('q'),
    'Connaught Place, Near Rajiv Chowk Metro Station, Delhi, India',
  );
  assert.equal(requestedUrl?.searchParams.get('countrycodes'), 'in');
  assert.match(requestHeaders?.get('user-agent') || '', /^FixWheel\//);
});

test('returns null only when no exact, nearby, postal-code, or city match exists', async () => {
  const fakeFetch: typeof fetch = async () => new Response('[]', {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

  assert.equal(
    await geocodeAddress(
      'Unknown address with enough detail',
      'Noida',
      fakeFetch,
      async () => undefined,
    ),
    null,
  );
});

test('falls back from an exact house address to a nearby area', async () => {
  const requestedQueries: string[] = [];
  const fakeFetch: typeof fetch = async (input) => {
    requestedQueries.push(new URL(input.toString()).searchParams.get('q') || '');
    const body = requestedQueries.length === 1
      ? []
      : [{ lat: '28.627981', lon: '77.3648567' }];

    return new Response(JSON.stringify(body), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  };

  const coordinates = await geocodeAddress(
    'Flat 12B, Sector 62, Noida',
    'Noida',
    fakeFetch,
    async () => undefined,
  );

  assert.deepEqual(coordinates, {
    latitude: 28.627981,
    longitude: 77.3648567,
  });
  assert.deepEqual(requestedQueries, [
    'Flat 12B, Sector 62, Noida, India',
    'Sector 62, Noida, India',
  ]);
});

test('rejects invalid coordinates returned by the lookup service', async () => {
  const fakeFetch: typeof fetch = async () => new Response(JSON.stringify([{
    lat: '999',
    lon: '77.2090212',
  }]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

  await assert.rejects(
    geocodeAddress('Address with invalid coordinate result', 'Gurgaon', fakeFetch),
    (error: unknown) => error instanceof AddressGeocodingError
      && error.failure === 'service_unavailable',
  );
});
