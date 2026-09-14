import { writeFile } from 'node:fs/promises';

const localOrigin = 'http://localhost:3001';
const productionOrigin = 'https://www.fixwheel.app';
const outputPath = new URL('./route-audit-results.json', import.meta.url);

const extractLocations = (xml) =>
  [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

const localUrl = (productionUrl) => {
  const url = new URL(productionUrl);
  return `${localOrigin}${url.pathname}${url.search}`;
};

const fetchText = async (url, options = {}) => {
  const response = await fetch(url, options);
  return { response, text: await response.text() };
};

const runPool = async (items, worker, concurrency = 16) => {
  const results = new Array(items.length);
  let cursor = 0;

  const runners = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      try {
        results[index] = await worker(items[index]);
      } catch (error) {
        results[index] = {
          url: items[index],
          error: error instanceof Error ? error.message : String(error),
        };
      }
    }
  });

  await Promise.all(runners);
  return results;
};

const root = await fetchText(`${localOrigin}/sitemap.xml`);
if (root.response.status !== 200) {
  throw new Error(`Root sitemap returned ${root.response.status}`);
}

const sitemapUrls = extractLocations(root.text);
const sitemapResults = await runPool(sitemapUrls, async (url) => {
  const result = await fetchText(localUrl(url), { redirect: 'manual' });
  return {
    url,
    status: result.response.status,
    contentType: result.response.headers.get('content-type'),
    locations: extractLocations(result.text),
  };
}, 8);

const pageUrls = [...new Set(sitemapResults.flatMap((result) => result.locations ?? []))];
const pageResults = await runPool(pageUrls, async (url) => {
  const result = await fetchText(localUrl(url), { redirect: 'manual' });
  const contentType = result.response.headers.get('content-type') ?? '';
  const noindex = contentType.includes('text/html') && /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(result.text.replace(/\s+/g, ' '));
  return {
    url,
    status: result.response.status,
    location: result.response.headers.get('location'),
    noindex,
  };
}, 16);

const redirectCases = [
  ['/services/carburetor-cleaning', '/services/engine-repair'],
  ['/services/obd-scanner', '/electric-scooter-repair'],
  ['/services/disc-replacement', '/services/brake-repair'],
  ['/services/chain-sprocket', '/services/basic-service'],
  ['/services/pick-and-drop', '/services'],
  ['/partner/gurgaon', '/partner'],
  ['/book/hero', '/book'],
  ['/services/sports-bike-service', '/sports-bike-service'],
  ['/services/electric-scooter-repair', '/electric-scooter-repair'],
  ['/services/royal-enfield-service', '/royal-enfield-service'],
  ['/services/commuter-bike-service', '/commuter-bike-service'],
  ['/services/scooty-repair', '/scooty-repair'],
  ['/services/premium-bike-service', '/premium-bike-service'],
  ['/services/basic-service/gurgaon/not-a-locality', '/services/basic-service/gurgaon'],
  ['/services/tyre-replacement', '/pricing'],
  ['/services/general-washing', '/services/basic-service'],
  ['/brands/hero', '/hero'],
  ['/brands/hero/splendor-plus', '/hero/splendor-plus'],
];

const redirectResults = await runPool(redirectCases, async ([path, expectedLocation]) => {
  const response = await fetch(`${localOrigin}${path}`, { redirect: 'manual' });
  return {
    path,
    status: response.status,
    location: response.headers.get('location'),
    expectedLocation,
  };
}, 8);

const notFoundPaths = [
  '/this-route-should-not-exist-phase5',
  '/gurgaon/not-a-real-locality-phase5',
  '/delhi/not-a-real-locality-phase5',
];

const notFoundResults = await runPool(notFoundPaths, async (path) => {
  const response = await fetch(`${localOrigin}${path}`, { redirect: 'manual' });
  return { path, status: response.status };
}, 3);

const utilityPaths = ['/confirmation', '/delete-account', '/book/checkout'];
const utilityResults = await runPool(utilityPaths, async (path) => {
  const result = await fetchText(`${localOrigin}${path}`, { redirect: 'manual' });
  return {
    path,
    status: result.response.status,
    noindex: /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(result.text.replace(/\s+/g, ' ')),
    inSitemap: pageUrls.includes(`${productionOrigin}${path}`),
  };
}, 3);

const failures = {
  sitemaps: sitemapResults.filter((result) => result.status !== 200 || result.error),
  pages: pageResults.filter((result) => result.status !== 200 || result.location || result.noindex || result.error),
  redirects: redirectResults.filter((result) => ![301, 308].includes(result.status) || result.location !== result.expectedLocation || result.error),
  notFound: notFoundResults.filter((result) => result.status !== 404 || result.error),
  utilities: utilityResults.filter((result) => result.status !== 200 || !result.noindex || result.inSitemap || result.error),
};

const report = {
  auditedAt: new Date().toISOString(),
  localOrigin,
  counts: {
    sitemaps: sitemapResults.length,
    uniqueSitemapPages: pageUrls.length,
    redirectCases: redirectResults.length,
    notFoundCases: notFoundResults.length,
    utilityCases: utilityResults.length,
  },
  failures,
  sitemapResults: sitemapResults.map(({ locations, ...result }) => ({ ...result, urlCount: locations?.length ?? 0 })),
  redirectResults,
  notFoundResults,
  utilityResults,
};

await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ counts: report.counts, failures }, null, 2));

if (Object.values(failures).some((items) => items.length > 0)) {
  process.exitCode = 1;
}
