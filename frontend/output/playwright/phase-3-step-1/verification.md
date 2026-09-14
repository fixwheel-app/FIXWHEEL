# Phase 3 Step 1 — Shared city shell and Faridabad migration

Baseline commit: `1e4a5b24dc2711426cf40c94167221e60792094b`

## Scope completed

- Added the typed shared presentation shell `components/city/CityPageSections.tsx`.
- Promoted Ghaziabad from its page-specific section markup to the shared shell with a Ghaziabad-specific typed configuration.
- Migrated Faridabad to the same shared shell with its existing copy, locality order, ticket data, reviews, FAQs, runtime stat source, and city-links section preserved.
- Kept each page's full embedded CSS block in its original `page.client.tsx`, preserving selector scope, cascade order, media queries, and responsive behavior.
- Left both server `page.tsx` files, metadata, JSON-LD, sitemaps, pricing sources, booking code, backend code, other cities, and `app/gurgaon/palam-vihar` unchanged.
- No commit or push was made.

## Browser parity

Faridabad was captured before and after with local-only deterministic `public_stats` and `page_variable_overrides` responses. Booking POST requests were blocked with HTTP 418.

- Full-page dimensions match at 375 px, 768 px, and 1,280 px viewports.
- Normalized accessibility snapshots match exactly at all three viewports. This verifies the rendered text, heading hierarchy, links, controls, section order, and semantic structure.
- Ghaziabad's normalized accessibility snapshots also match its Phase 2 baseline exactly at all three viewports.
- Faridabad raw screenshot differences were 0.024% at mobile, 0.818% at tablet, and 0.692% at desktop. Nearly all tablet/desktop differences were one-level font antialiasing changes; the remaining differences were limited to the independently animated floating contact controls and external favicon rendering. Page dimensions and the semantic snapshots were unchanged.
- Ghaziabad page dimensions remain exactly 375 × 11,642, 768 × 8,751, and 1,280 × 6,952 pixels.

## Interaction checks

- Faridabad mobile menu opened and closed correctly.
- The initially open first FAQ measured `max-height: 200px`; after activation it collapsed to `0px`.
- The main Faridabad booking CTA navigated to local `/book` with the correct booking-page title.
- No booking was submitted.
- Browser diagnostics remained at the baseline three external Google favicon 404 errors and introduced no new console errors.

## Build and repository checks

- `npx tsc --noEmit`: passed.
- `npm run build`: passed with exit code 0.
- All 1,475 static pages generated successfully.
- `git diff --check`: passed.
- Faridabad and Ghaziabad server component diffs: empty.
- Palam Vihar diff: empty.
- Cleanly restarted localhost after the build; `/faridabad` and `/ghaziabad` both return HTTP 200 on port 3000.

## Step result

Phase 3 Step 1: **PASS**. Ghaziabad and Faridabad now use the same typed structural shell while retaining their existing visible output and SEO-related client DOM. Phase 3 remains incomplete; Noida, Delhi, Gurgaon, and the brand-city locality registry step have not started.
