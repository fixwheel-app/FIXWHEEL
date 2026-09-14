# Phase 4 Step 3B-2B — Server-Authoritative Pricing Verification

## Scope

This step secures the existing seven non-electric booking packages and four electric booking options. It does not submit a live booking, alter the database schema, change any city-page design or SEO output, or touch Palam Vihar.

## Implemented behavior

- The booking page passes stable service and CC-range identifiers into checkout.
- Checkout derives its displayed price from the frontend catalog and ignores the URL's `price` value.
- The backend accepts only known service IDs and CC-range identifiers.
- The backend maps the service ID, package label, vehicle type, and selected CC range to its own approved transactional rate.
- The controller stores the server-calculated rate, never the browser-provided rate.
- If the browser supplies a quote, it must match the server rate; otherwise the request returns HTTP 400 before any Prisma call.
- Missing CC ranges, service/package mismatches, incompatible electric/non-electric combinations, and inspection-only tiers are rejected.
- The confirmed server price is returned to the frontend for confirmation storage.

## Verification

- Backend TypeScript build: **PASS**.
- Frontend TypeScript check: **PASS**.
- Frontend production build: **PASS**, `1475/1475` static pages.
- Automated backend suite: **14/14 PASS**.
- All 24 currently bookable non-electric numeric tiers matched the supplied spreadsheet.
- All four electric booking prices matched the supplied spreadsheet.
- Cross-layer drift test confirmed the frontend catalog and backend transactional rates match.
- Controller integration test confirmed a ₹1 quote for a ₹550 service returns HTTP 400 before persistence.
- Browser tamper test confirmed a checkout URL containing `price=1` displays the catalog-derived ₹550.
- Browser EV tamper test confirmed a checkout URL containing `price=1` displays ₹799.
- Browser console: zero error-level entries.
- Local routes `/pricing`, `/book`, `/book/checkout`, and `/gurgaon/palam-vihar`: HTTP 200.
- `git diff --check`: **PASS**.
- Palam Vihar diff: empty.

## Remaining model-to-CC limitation

`frontend/lib/bikes.ts` contains model IDs and names but no engine-capacity field. The server now calculates the authoritative rate for the CC tier selected by the customer, but it cannot independently verify that a free-form model name belongs to that tier. Closing that gap requires an official model-to-engine-CC dataset; those values must not be inferred or invented.

## Repository baseline observation

The agreed Phase 1 baseline was `1e4a5b2`, but the current local `main` and `origin/main` are now `2c9be92`, with intermediate commit `a79ecfd`. These commits were not created or pushed during this step. Verification was performed against the actual current HEAD plus the existing uncommitted phase work.

## Gate status

Server-authoritative calculation and browser-price tamper protection: **PASS**.

Independent model-to-CC verification: **BLOCKED ON OFFICIAL DATA** and recorded above; no values were invented.
