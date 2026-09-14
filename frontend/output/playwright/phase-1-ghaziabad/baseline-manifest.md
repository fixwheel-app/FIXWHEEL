# Ghaziabad Phase 1 Baseline

- Captured: 2026-09-13 (Asia/Calcutta)
- Git branch: `main`
- Git commit: `1e4a5b24dc2711426cf40c94167221e60792094b`
- URL: `http://localhost:3000/ghaziabad`
- HTTP status: `200`
- Application code diff at capture: empty (`git diff --exit-code` passed)
- Palam Vihar: excluded and untouched
- Production booking protection: `**/api/bookings*` intercepted with HTTP 418 in the local Playwright session

## Rendered SEO baseline

- Title: `Bike Mechanic Near Me in Ghaziabad – Doorstep Bike Repair & Scooter Service | FixWheel`
- Description: `Looking for a bike mechanic near me in Ghaziabad? FixWheel sends verified mechanics to your home, office, or roadside 24/7. Doorstep bike repair & scooter service across Indirapuram, Vaishali, Kaushambi, Raj Nagar & all Ghaziabad areas. Starting ₹550.`
- Canonical: `https://www.fixwheel.app/ghaziabad`
- Robots meta: absent
- H1 count: 1
- H1: `Bike Mechanic Near Me in Ghaziabad`
- H1-H3 count: 34
- Anchor count: 87
- JSON-LD blocks: 3
- FAQ items: 5
- Service cards: 12
- Rendered body text length: 8,539 characters
- Rendered element count: 613

The accessibility snapshots contain the frozen rendered text, heading hierarchy, controls, and link targets for each viewport. The server component source hash protects the full metadata and JSON-LD definitions.

## Deterministic browser fixtures

Fixtures are scoped to the named local Playwright browser session and do not modify application code:

- `**/rest/v1/public_stats*`: fixed `global` and `ghaziabad` rows from the response observed during capture.
- `**/rest/v1/page_variable_overrides*`: fixed global override row observed during capture, including `bikes_serviced_override: "148+"`.
- `**/api/bookings*`: blocked with HTTP 418 to prevent accidental booking creation.

The unmocked baseline successfully received HTTP 200 from Supabase. The page displayed `148+` total vehicles serviced and `4.8★` customer rating.

## Existing baseline diagnostics

The page reported three console errors. All are existing 404 responses from Google favicon endpoints for `olaelectric.com`, `jawa.in`, and `vespa.com`. Supabase public statistics and page-variable requests returned HTTP 200. These errors are recorded as baseline behavior and are not caused by a refactor.

## Source SHA-256

- `app/ghaziabad/page.tsx`: `3AF5950A661AB1591BF3A295D4506A4C9BAD4AFA059D9E5AF07346AD33C9E2A5`
- `app/ghaziabad/page.client.tsx`: `58E9DBB68A2A8F25FD6FCCA4B284807DEE5743C827B1C7493347C5799476CC27`
- `lib/publicStats.ts`: `4B13AA78E817438D1A20377D67ED1DBF19F617453F0B49BFE981576FAFC49BAD`
- `lib/pageVariables.ts`: `5F05C34EC5B77D895BE1386C03B5E386BCDCD8385ED9F6A961EF59B3B3E7A4F4`

## Artifact SHA-256

- `ghaziabad-375x812.png`: `2A7A8CE773F587EB4C6A1EB506DF567D2176A4C2D67761499458094D1250B733`
- `ghaziabad-768x1024.png`: `221A1A83BC53B4F1C4F98B0FBB08C5B7D17E53FC4DD3BBF88E6AA9FFD5EC7B8D`
- `ghaziabad-1280x900.png`: `C2CEC1150665665C6287F5F440A8E3AC7741D88B5788405C3AA59A60AE161883`
- `ghaziabad-1280-deterministic.png`: `61F81A4EF7099F7AB2E225DAA3F1F2423724B50654EF2FA5F05ED4DB2BD80B15`
- `ghaziabad-375.snapshot.yml`: `23322A5F29D767B2268087AE65153F89570BB2E751442816F3E22EF21FD5AD6C`
- `ghaziabad-768.snapshot.yml`: `23322A5F29D767B2268087AE65153F89570BB2E751442816F3E22EF21FD5AD6C`
- `ghaziabad-1280.snapshot.yml`: `7278EA072E570DFF1C1324157BA4876B4F85AEC15987FF94AC4A0229C2DADC2F`
- `ghaziabad-deterministic.snapshot.yml`: `160E0711A28FF443D9CBBDADBD83925F7A938FE353FEA557417EB2D324724751`
- `ghaziabad-faq-open.png`: `1B1A44E866085F801DC79C94F9A207326108AEAA62DF7F37DE78596592EAB323`
- `ghaziabad-mobile-before-menu.snapshot.yml`: `165D78D9C9A54758B5A1C60FFAFDCBCD16C784FF2D018D0C909AB0B87BDC8206`
- `ghaziabad-mobile-menu-open.png`: `293FA72C7095E046C8CD6F1EE8E9215903F9F9817F046A0497A68AE79CD25EC1`
- `ghaziabad-mobile-menu-open.snapshot.yml`: `98F41222B7389C6AD5D478067560385416AD55E01EB732AF619EBC14F686B978`

## Gate 1 result

Baseline capture is complete and tied to the verified commit. Visual snapshots, rendered accessibility trees, SEO signals, deterministic data, interaction states, existing console errors, and application source hashes are recorded. No application source file was modified.
