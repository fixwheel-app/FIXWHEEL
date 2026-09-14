# Phase 4 Step 1 — Pricing and booking-contract audit

Status: **AUDIT COMPLETE — APPLICATION CODE UNCHANGED**

Baseline: `1e4a5b24dc2711426cf40c94167221e60792094b`

## Scope

- Traced displayed rates from pricing, services, city, brand, model, and locality pages.
- Traced booking selection through checkout submission and backend persistence.
- Compared service identifiers and price tiers in the two main pricing catalogs.
- Tested backend validation without creating a booking or writing to the database.
- Did not change prices, application code, metadata, schemas, routes, or Palam Vihar.

## Gate result

The audit passes as a discovery step, but the pricing implementation is **not ready to change without confirming the official rate card and the intended meaning of six conflicting service-page prices**.

The existing booking endpoint has a critical price-integrity vulnerability. It accepts any positive integer supplied by the browser for a valid package and stores that value as the booking price.

## Finding 1 — Client-controlled booking price (critical)

The normal selection flow builds a checkout URL containing both `package` and `price` in `app/book/page.client.tsx:310-316`. Checkout reads `price` directly from the URL in `components/BookingForm.tsx:94-97` and submits `Number(price)` in `components/BookingForm.tsx:185-188`.

The backend validates only that the submitted value is a positive integer in `backend/src/middleware/validateBooking.ts:27-28`. It then assigns `bookingData.price` directly in `backend/src/controllers/bookingController.ts:27` and persists it.

Read-only schema test:

- `Engine full` with price `7999`: accepted.
- `Engine full` with price `1`: also accepted.
- `Engine full` with price `0`: rejected only because it is not positive.

No booking was submitted and no database row was created during this test.

## Finding 2 — The server cannot calculate the correct non-electric tier (high)

Non-electric rates depend on four CC ranges, but the checkout payload and backend booking schema do not contain `ccRange`. The server receives a free-text bike model and cannot reliably distinguish the ₹550, ₹850, ₹1,100, and ₹1,500 General Service tiers.

The repaired contract needs either a validated `ccRange` field or a server-owned vehicle-to-CC lookup. The backend must calculate the accepted price from the validated package, vehicle type, and tier. It must ignore or reject a client-submitted amount that differs.

## Finding 3 — Checkout entry points lose service or price state (high)

- The pricing table links to `/book?service=<slug>` in `app/pricing/page.client.tsx:599-600`, but the book page reads brand and model parameters and does not read `service`. The selected pricing row is lost.
- `RepairCard.tsx:64` links to checkout with `package` only. Checkout defaults a missing price to `0`.
- `ServiceCard.tsx` stores a selected package but does not store a price and routes to `/services`; checkout later has no authoritative way to derive the amount.
- `BookingForm.tsx` declares `setPrice`, but never calls it after initialization. Package, vehicle-type, local-storage, or model changes cannot recompute the displayed price.

This creates two opposite failures: normal links can show ₹0 and fail backend validation, while a crafted checkout URL can submit an arbitrary positive amount.

## Finding 4 — The two main catalogs agree on amounts but not identity or coverage

`frontend/lib/pricingData.ts` is the 14-row display catalog with slug identifiers such as `basic-service`, `service-engine-oil`, and `engine-full`. `frontend/lib/constants.ts` is the bookable catalog with label identifiers such as `General Service`, `General Service with engine oil`, and `Engine full`.

The amounts match for these mapped services across their available tiers:

- `basic-service` → `General Service`
- `service-engine-oil` → `General Service with engine oil`
- `jump-start` → `Jump start`
- `puncture` → `Puncture`
- `running-repair` → `Running Repair`
- `engine-half` → `Engine Half`
- `engine-full` → `Engine full`
- `ev-service` → electric `General Service`

The booking selector has no package identifiers for these displayed services:

- `carburetor-cleaning`
- `obd-inspection`
- `battery-replacement`
- `disc-replacement`
- `chain-sprocket`
- `pick-drop`

A stable catalog should use one machine identifier for routing, display, checkout, and backend validation, with labels kept as presentation fields. Human-readable labels should not be database/API identifiers.

## Finding 5 — Six dedicated service pages contradict the shared service data (high SEO/content risk)

Static service folders take precedence over the dynamic `[service]` route. Their visible starting prices differ from `frontend/lib/servicesData.ts`, which supplies city and locality variants:

- Basic Service: dedicated page ₹199; shared service data ₹550.
- Oil Change: dedicated page ₹349; shared service data ₹999.
- Comprehensive Service: dedicated page ₹899; shared service data ₹999.
- Engine Repair: dedicated page ₹699; shared service data ₹4,500.
- Battery Replacement: dedicated page ₹1,299; shared service data ₹99 labor.
- Brake Repair: dedicated page ₹299; shared service data ₹199.

Runtime verification confirmed the route-level divergence. Both `/services/basic-service` and `/services/basic-service/noida` returned HTTP 200, with source output containing ₹199 for the dedicated route and ₹550 for the city route. The oil-change pair similarly contained ₹349 and ₹999.

Some differences may represent different scopes rather than wrong amounts. Battery installation labor at ₹99 and a supplied battery at ₹1,299 are the clearest example. These must become distinct service variants or explicitly labelled price components before centralization. Choosing one value automatically would risk changing customer promises and indexed content.

## Finding 6 — Additional duplicated and silent pricing paths (medium)

- `app/[brand]/page.client.tsx:84-97` contains a second 13-row CC pricing matrix. Its current values mirror the main display catalog, but future edits can drift.
- `CityServicesGrid.tsx:135-136` looks up a catalog row and silently displays ₹550 if the identifier is missing. A typo therefore becomes a believable wrong price instead of a detectable failure.
- `pageVariables.ts:23,54` has a ₹399 default. Service pages initially render with this generic value, then load the page-specific default or a remote `page_variable_overrides.starting_price` value at `pageVariables.ts:114-115`.
- The remote override makes visible price copy mutable outside Git. It needs validation, ownership, audit history, and a defined relationship to the official catalog if it remains enabled.
- `backend/src/controllers/bookingController.ts:6-12` contains an unused `getPriceForPackage` helper with obsolete `Basic`, `Standard`, and `Premium` identifiers and ₹499/₹899/₹1,499 values. It is currently dead code, but it is a strong source of future AI/model confusion.
- Forty-four frontend source files contain literal rupee amounts. Many are legitimate SEO sentences or historical content and should not be bulk-replaced. Each occurrence must be classified as a transactional price, a derived display, or intentional page copy.

## Finding 7 — Type contracts do not protect the flow (medium)

- `PackageType` ends with `| string` in `frontend/types/index.ts:9`, which makes the named package union equivalent to unrestricted `string`.
- Frontend `BookingFormData` omits `city` and `bookingDate`, although the backend requires both.
- The frontend accepts any string for the checkout package before the backend rejects unknown values.
- Frontend and backend independently repeat package, city, bike-type, and time-slot contracts, so they can drift without a compile-time failure.

## Adjacent server-validation issue discovered

The frontend limits booking dates to the next 30 days, but the backend validates `bookingDate` only as a non-empty string. A direct API request can bypass the frontend date rule. This belongs with the booking-contract hardening work even though it is separate from price calculation.

## Recommended implementation order inside Phase 4

1. Fix the independent admin-secret fail-open vulnerability and add backend tests.
2. Confirm the official rate card and resolve the six ambiguous service-page prices and service scopes.
3. Introduce one shared, typed service catalog with stable IDs and explicit vehicle/tier applicability.
4. Add `ccRange` or an authoritative vehicle lookup to the request contract.
5. Recalculate the price on the server, reject mismatches, and store the server-calculated amount.
6. Make the frontend derive checkout state from the same contract; remove price from trusted URL/local-storage state.
7. Replace silent price fallbacks with detectable errors and remove obsolete pricing helpers.
8. Migrate display surfaces one group at a time while preserving exact visible copy, metadata, schema values, and route output until each approved price change is intentional.
9. Add contract tests covering every service ID, fuel type, CC tier, invalid pairing, direct API tampering, and old booking entry point.

## Verification performed

- Static trace completed across pricing, services, city, brand, model, locality, checkout, API, backend schema, controller, and Prisma persistence.
- Backend Zod test proved that a ₹1 client amount passes for `Engine full` while ₹0 fails.
- Local runtime returned HTTP 200 for representative dedicated, city-service, and pricing routes.
- `git diff --check` passed before writing this report.
- Git HEAD remains `1e4a5b24dc2711426cf40c94167221e60792094b`.
- No application-code file was edited in Phase 4 Step 1.
- No commit or push was made.
