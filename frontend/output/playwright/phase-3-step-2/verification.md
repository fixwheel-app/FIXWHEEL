# Phase 3 Step 2 — Noida shared-shell migration

Baseline commit: `1e4a5b24dc2711426cf40c94167221e60792094b`

## Scope completed

- Added `components/city/noida/NoidaSections.tsx` as the typed Noida configuration for the shared city shell.
- Replaced the duplicated rendered sections in `app/noida/page.client.tsx` with `NoidaSections`.
- Preserved the complete Noida-scoped CSS block, state, effects, statistics requests, content, 37 locality links, six FAQs, reviews, ticket details, and section order.
- Left `app/noida/page.tsx`, metadata, JSON-LD, sitemap routes, pricing sources, booking code, other unmigrated cities, and `app/gurgaon/palam-vihar` unchanged.
- No commit or push was made.

## Parity checks

Deterministic local-only public-stat and page-variable fixtures were used for both captures. Booking POST requests were blocked with HTTP 418.

| Viewport | Full-page dimensions | Raw changed pixels | Raw difference |
| --- | ---: | ---: | ---: |
| 375 × 812 | 375 × 11,743 | 6,422 | 0.146% |
| 768 × 1,024 | 768 × 8,817 | 8,304 | 0.123% |
| 1,280 × 900 | 1,280 × 6,994 | 4,884 | 0.055% |

Page dimensions are identical. The raw pixel variance is confined to existing animated floating contact controls, external favicon loading, and minor font rasterization. The normalized accessibility/DOM snapshots match exactly at all three viewports, including visible text, heading hierarchy, controls, links, locality order, and all six FAQs.

## Interaction and build checks

- Mobile menu opened and rendered its expected controls.
- First FAQ changed from open (`max-height: 200px`) to closed (`max-height: 0px`).
- Main booking CTA navigated to local `/book`; no booking was submitted.
- Browser console retained the same three known external favicon 404 errors and showed no new application error.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed, including lint/type checks and all 1,475 generated pages.
- `git diff --check`: passed.
- Clean local server returns HTTP 200 for Noida, Faridabad, Ghaziabad, and the excluded Palam Vihar route.

## Gate result

Phase 3 Step 2: **PASS**. Noida now uses the verified shared city shell without changing its rendered content, structure, SEO server component, route, or behavior.
