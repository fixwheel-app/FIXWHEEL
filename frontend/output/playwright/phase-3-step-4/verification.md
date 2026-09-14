# Phase 3 Step 4 — Gurgaon verification

Status: **PASS**

## Scope

- Migrated only the main Gurgaon client UI to the typed shared city-page shell.
- Preserved Gurgaon's original content, links, ordering, embedded CSS, state, and effects.
- Added typed shared options for genuine Gurgaon differences instead of changing them to another city's defaults.
- Kept the Gurgaon server page and all metadata/JSON-LD code unchanged.
- Kept the dedicated `app/gurgaon/palam-vihar` route unchanged.
- Did not begin the BrandCity locality-registry work.

## Gurgaon-specific behavior preserved

- Preserved the unique coverage and services headings.
- Preserved the filled final coverage badge.
- Preserved all 35 Gurgaon locality links in their original order, including the existing link to the dedicated Palam Vihar page.
- Preserved the Gurgaon vehicle labels, brand order, workflow heading, partner benefits, contact wording, emergency-badge color, six FAQs, reviews, and city links.
- Preserved every displayed price exactly as it existed before this structural change.

## Visual and DOM parity

Deterministic API fixtures were used for the before/after comparison.

- 375 px: normalized accessibility snapshot exact; page size remained 375 × 11,705.
- 768 px: normalized accessibility snapshot exact; page size remained 768 × 8,939.
- 1280 px: normalized accessibility snapshot exact; page size remained 1280 × 7,095.
- Before/after full-page screenshots were visually inspected and matched.

Snapshot normalization removed only Playwright-generated reference IDs. The semantic content, hierarchy, link destinations, and order were otherwise identical.

## Interaction checks

- Mobile menu opened and closed successfully.
- First FAQ changed from `max-height: 200px` to `0px` when toggled.
- Main booking CTA navigated to `/book` with the expected title.
- The booking API was blocked during browser verification; no booking was submitted.

## Build and route checks

- `npx tsc --noEmit`: passed.
- `npm run build`: passed; 1,475 of 1,475 static pages generated.
- `git diff --check`: passed.
- All five city pages, `/gurgaon/dlf-phase-1`, and `/gurgaon/palam-vihar`: HTTP 200 after a clean dev-server restart.
- `app/gurgaon/page.tsx`: no diff.
- `app/gurgaon/palam-vihar`: no diff.
- `package.json` and `package-lock.json`: no diff.

The build retained the known external Google Fonts optimization warning and stale Browserslist-data notice. The three browser-console errors were unchanged Google favicon 404 responses for Jawa, Vespa, and Ola Electric.

## Gate result

Phase 3 Step 4 is complete. Any next Phase 3 step requires explicit user approval before work begins.
