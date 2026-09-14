# Phase 3 Step 3 — Delhi verification

Status: **PASS**

## Scope

- Migrated only the Delhi client UI to the typed shared city-page shell.
- Preserved Delhi's original text, links, ordering, embedded CSS, state, and effects.
- Kept the Delhi server page and all metadata/JSON-LD code unchanged.
- Kept `app/gurgaon/palam-vihar` unchanged.
- Did not begin the Gurgaon migration or the BrandCity locality-registry work.

## Delhi-specific behavior preserved

- Preserved the services-section description unique to Delhi.
- Preserved the third customer review's four-star display.
- Preserved all 27 Delhi locality links in their original order.
- Preserved all six visible FAQs.

## Visual and DOM parity

Deterministic API fixtures were used for the before/after comparison.

- 375 px: normalized accessibility snapshot exact; page size remained 375 × 11,570.
- 768 px: normalized accessibility snapshot exact; page size remained 768 × 8,809.
- 1280 px: normalized accessibility snapshot exact; page size remained 1280 × 6,931.

The normalization removed only Playwright reference IDs, the expected asynchronous vehicle counter transition, and the Next.js development alert node. Small screenshot pixel differences were limited to animation, favicon, and rasterization timing; document dimensions and normalized semantic output were identical.

## Interaction checks

- Mobile menu opened and closed successfully.
- First FAQ changed from `max-height: 200px` to `0px` when toggled.
- Main booking CTA navigated to `/book` with the expected title.
- The booking API was blocked during browser verification; no booking was submitted.

## Build and route checks

- `npx tsc --noEmit`: passed.
- `npm run build`: passed; 1,475 of 1,475 static pages generated.
- `git diff --check`: passed.
- `/delhi`, `/noida`, `/faridabad`, `/ghaziabad`, and `/gurgaon/palam-vihar`: HTTP 200 after a clean dev-server restart.
- `app/delhi/page.tsx`: no diff.
- `app/gurgaon/palam-vihar`: no diff.
- `package.json` and `package-lock.json`: no diff.

The build retained the known warning that Google Fonts could not be downloaded for optimization and the existing stale Browserslist-data notice. Browser-console resource errors were the existing Google favicon 404 responses; a recorded `Breadcrumb is not defined` error came from the temporary Fast Refresh state while the file was being edited and was absent from the final compiled page.

## Gate result

Phase 3 Step 3 is complete. Phase 3 Step 4 (Gurgaon) requires explicit user approval before work begins.
