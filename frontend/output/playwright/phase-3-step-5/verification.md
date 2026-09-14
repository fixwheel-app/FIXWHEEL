# Phase 3 Step 5 — Brand-city registry verification

Status: **PASS**

## Scope

- Removed the duplicate city-name and locality maps from `BrandCityClient.tsx`.
- Made `CITIES_DB` the source for brand-city names, static city generation, cross-city navigation, and grouped locality labels.
- Preserved the existing grouped locality labels verbatim because they are presentation summaries rather than one-to-one dynamic locality routes.
- Passed only the lightweight city summary from the server component into the client component; the full five-city locality database is not imported into the browser bundle.
- Made no pricing, service-content, city-page design, or dedicated Palam Vihar changes.

## Content, visual, and SEO parity

- Honda brand-city snapshots matched for Gurgaon, Delhi, Noida, Faridabad, and Ghaziabad.
- Normalization removed Playwright reference IDs, one expected dynamic vehicle-stat value, and a development-only alert node. All visible text, headings, locality labels, links, order, and semantic hierarchy otherwise matched.
- Representative Honda Gurgaon page dimensions remained:
  - 375 px: 375 × 9,519.
  - 768 px: 768 × 7,268.
  - 1280 px: 1280 × 4,890.
- Before/after full-page screenshots at all three widths were visually inspected and matched.
- Final Honda Gurgaon title remained `Honda Bike Service & Repair in Gurgaon | FixWheel Doorstep Service`.
- Final canonical remained `https://www.fixwheel.app/honda/gurgaon`.
- The existing Palam Vihar label remains present on Gurgaon brand pages and continues to resolve to the dedicated route.

## Interaction checks

- The first Honda Gurgaon FAQ changed from `max-height: 250px` to `0px` when toggled.
- The primary Honda booking CTA retained `/book#honda` and navigated successfully.
- The booking API was blocked during browser verification; no booking was submitted.

## Build, bundle, and route checks

- `npx tsc --noEmit`: passed after the final registry cleanup.
- `npm run build`: passed after the final registry cleanup; 1,475 of 1,475 static pages generated.
- `/[brand]/[model]` finished at 11.4 kB route size and 185 kB first-load JavaScript, so centralization did not add the large locality database to the client bundle.
- All five Honda city routes, `/ola-electric/noida`, `/gurgaon/dlf-phase-1`, and `/gurgaon/palam-vihar` returned HTTP 200.
- `git diff --check`: passed.
- All five city `page.tsx` files remain unchanged.
- `app/gurgaon/palam-vihar` remains unchanged.
- `package.json` and `package-lock.json` remain unchanged.

The build retained the known external Google Fonts optimization warning and stale Browserslist-data notice.

## Gate result

Phase 3 Step 5 and the Phase 3 shared-city-architecture gate are complete. Phase 4 requires explicit user approval before work begins.
