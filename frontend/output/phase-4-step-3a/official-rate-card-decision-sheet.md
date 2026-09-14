# Phase 4 Step 3A — Official rate-card decision sheet

Status: **DECISION GATE — NO PRICING CODE CHANGED**

Baseline: `1e4a5b24dc2711426cf40c94167221e60792094b`

## Verified current state

The main rate card in `frontend/lib/pricingData.ts`, the selectable booking amounts in `frontend/lib/constants.ts`, the services index, and the city service grid agree on the mapped core prices. No relevant `page_variable_overrides` row currently changes these six routes; the read-only Supabase query returned only the global row, whose `starting_price` is null.

Six dedicated service pages contain different values. Because static folders take precedence over `[service]`, their Delhi/general route can show a different price from the matching city and locality routes.

## Proposed decisions for approval

### 1. Basic Service

- Dedicated page: ₹199.
- Main rate card: ₹550 for 0–249cc.
- Booking selector: ₹550 for 0–249cc.
- Shared service data, services index, city pages: ₹550.
- Scope comparison: both descriptions cover periodic inspection, brake adjustment, plug/filter work, chain service, and electrical checks.

**Recommended decision:** confirm ₹550 as the official 0–249cc Basic/General Service rate. Treat ₹199 on the dedicated page as stale.

### 2. Service with Engine Oil / Oil Change

- Dedicated oil-change page: ₹349.
- Main rate card and booking selector: ₹999 for 0–249cc.
- Shared service data and services index: ₹999.
- Scope comparison: both include genuine oil, oil-filter work, plug inspection, and chain lubrication. The booking label says “Service with Engine Oil,” while the page slug says `oil-change`.

**Recommended decision:** confirm ₹999 as the official bundled doorstep service-with-oil price. Treat ₹349 as stale unless it means labor-only oil replacement; if it is labor-only, it needs a separate service ID and explicit label.

### 3. Comprehensive Service

- Dedicated page: ₹899.
- Shared service data and services index: ₹999.
- Main pricing catalog has no `comprehensive-service` identifier. Its closest package is `service-engine-oil` at ₹999, but the comprehensive page promises additional carburetor/FI, tappet, brake, and diagnostic work.
- Checkout has no Comprehensive Service package.

**Recommended decision:** confirm whether Comprehensive Service is an independent package. If yes, approve its own official tiered prices and stable ID. Do not silently map it to Service with Engine Oil merely because ₹999 appears elsewhere.

### 4. Engine Repair versus Engine Overhaul

- Dedicated engine-repair page: ₹699.
- Shared service data: ₹4,500.
- Main rate card: Engine Half Overhaul ₹4,500 for 0–249cc and Engine Full Overhaul ₹7,999.
- The ₹699 page mostly describes diagnostics, tappet setting, clutch work, injector/carburetor checks, and starter testing. The ₹4,500/₹7,999 catalog entries describe internal engine rebuilds.

**Recommended decision:** these are different services and should not share one price. Confirm whether ₹699 is an official starting rate for `engine-diagnostics-repair`. Keep `engine-half` and `engine-full` as separate overhaul packages at their approved tiered prices.

### 5. Battery Replacement

- Dedicated page: ₹1,299 and promises a new branded battery plus installation and warranty.
- Main rate card: ₹99 labor for 0–399cc and ₹149 labor for 400cc+.
- Shared service data and services index: ₹99, explicitly labelled labor.

**Recommended decision:** these are different price components. Keep `battery-replacement-labor` at the approved labor rate and confirm whether ₹1,299 is a valid “battery supplied” starting price. The UI and contract must state whether battery cost is included.

### 6. Brake Repair

- Dedicated page: ₹299.
- Main rate card: Disc Brake Pad / Rotor Replacement starts at ₹199 for 0–249cc, ₹249 for 250–399cc, and ₹299 for 400cc+.
- Shared service data and services index: ₹199.
- The dedicated page combines inspection, pad/shoe replacement, fluid work, and adjustment, so ₹299 may describe a broader scope or may be stale.

**Recommended decision:** confirm whether the ₹299 page is a distinct brake-service package. If it is the same `disc-replacement` service, use the existing tiered ₹199/₹249/₹299/₹299 rate card.

## Core rate-card confirmation

The following values are internally consistent in both main catalogs and should be explicitly approved before implementation:

- Non-electric General Service: ₹550 / ₹850 / ₹1,100 / ₹1,500.
- Service with Engine Oil: ₹999 / ₹1,999 / ₹2,990 / ₹3,999.
- Jump Start: ₹399 / ₹399 / ₹499 / ₹499; electric ₹399.
- Puncture: ₹399 / ₹399 / ₹550 / ₹550; electric ₹399.
- Running Repair: ₹399 / ₹399 / ₹499 / ₹499; electric ₹399.
- Engine Half Overhaul: ₹4,500 / ₹10,000 / inspection / inspection.
- Engine Full Overhaul: ₹7,999 / ₹18,000 / inspection / inspection.
- Electric General Service: ₹799.

The main display catalog also contains Carburetor Cleaning, OBD Inspection, Battery Replacement Labor, Disc Replacement, Chain/Sprocket Replacement, and Pick/Drop, but the checkout contract cannot currently book them by stable ID.

## Repository-instruction conflict

`CODEX_RULES.md:71-75` calls `frontend/lib/pricingData.ts` the source of truth but then states that non-electric and electric General Service start at ₹399 and ₹499. The actual current catalog values are ₹550 and ₹799. The same rules incorrectly say `constants.ts` does not contain pricing, although it currently calculates checkout prices.

This contradiction directly encourages AI models to overwrite correct values with obsolete ones. After the business rate card is approved, the repository instructions must be corrected in the same pricing-contract task so future agents receive one unambiguous rule.

## SEO and migration constraint

Price changes affect visible indexed text. Implementation must preserve route structure, canonicals, headings, schemas, links, and design. Each approved price correction should update all matching visible copy and structured data deliberately, followed by rendered HTML and visual comparison. Existing text must not be bulk-replaced because several ₹99, ₹199, and ₹399 statements refer to different services.

## Required owner decisions

Before Step 3B changes pricing code, approve or replace these decisions:

1. Basic/General Service 0–249cc = ₹550.
2. Bundled Service with Engine Oil 0–249cc = ₹999; confirm whether ₹349 labor-only service exists.
3. Comprehensive Service = confirm independent package and tier prices.
4. Engine diagnostics/repair = confirm whether ₹699 is valid; keep it distinct from ₹4,500/₹7,999 overhauls.
5. Battery = confirm ₹99/₹149 labor and whether ₹1,299 supplied-battery starting price is valid.
6. Brake = confirm tiered ₹199/₹249/₹299/₹299 or approve a distinct ₹299 brake package.
7. Confirm the internally consistent core rate-card values listed above.
8. Approve correcting the obsolete ₹399/₹499 instructions in `CODEX_RULES.md` after the official values are confirmed.

## Verification

- Compared the six static service pages with `pricingData.ts`, `constants.ts`, `servicesData.ts`, and the services index.
- Verified static-route precedence and representative route output during Step 1.
- Queried relevant Supabase `page_variable_overrides` keys read-only; no route-specific price override was returned and global `starting_price` is null.
- No database value was written.
- No pricing, checkout, content, metadata, sitemap, route, or Palam Vihar file was edited.
- No commit or push was made.
