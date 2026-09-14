# Phase 2 — Ghaziabad pilot verification

Baseline: `1e4a5b24dc2711426cf40c94167221e60792094b`

## Scope

- Extracted the existing Ghaziabad page sections into `components/city/ghaziabad/GhaziabadSections.tsx`.
- Kept the state, effects, and complete embedded CSS block in `app/ghaziabad/page.client.tsx`.
- Left `app/ghaziabad/page.tsx`, all metadata and JSON-LD generation, other city pages, pricing, backend code, and `app/gurgaon/palam-vihar` unchanged.
- No commit or push was made.

## Visual and DOM parity

Deterministic browser fixtures used the same fixed public statistics and page-variable values as the Phase 1 baseline. Booking POST requests remained blocked.

| Viewport | Full-page image size | Raw changed pixels | Raw difference |
| --- | ---: | ---: | ---: |
| 375 × 812 | 375 × 11,642 | 6,103 / 4,365,750 | 0.140% |
| 768 × 1,024 | 768 × 8,751 | 7,833 / 6,720,768 | 0.117% |
| 1,280 × 900 | 1,280 × 6,952 | 7,797 / 8,898,560 | 0.088% |

Every raw changed pixel was confined to two existing nondeterministic elements: the independently animated floating call/WhatsApp controls and one externally fetched brand favicon. Outside those regions, the screenshots have zero changed pixels. The page layout, typography, spacing, colors, copy, and section order match the baseline.

The normalized accessibility snapshots matched exactly at all three viewports. The mobile menu was recaptured from the clean server; its open-state controls, labels, links, order, and styling match the baseline. Its raw screenshot is not used as a pixel comparison because the baseline was captured over a different underlying page scroll position.

The before/after DOM and SEO measurements were identical:

- HTTP status: 200
- Title: `Bike Mechanic Near Me in Ghaziabad – Doorstep Bike Repair & Scooter Service | FixWheel`
- Canonical: `https://www.fixwheel.app/ghaziabad`
- H1 count: 1
- H1–H3 count: 34
- Anchor count: 87
- JSON-LD blocks: 3
- FAQ entries: 5
- Service cards: 12
- Body text length: 8,539 characters
- Element count: 613
- Document height at 1,280 px: 6,952 px

## Behavior and build checks

- FAQ toggle verified: the initially open first FAQ closed after activation and its content collapsed to `max-height: 0`.
- Mobile menu open state verified against the baseline.
- Booking CTA verified to navigate to local `/book`; no booking was submitted.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed, including lint/type checks and all 1,475 generated pages.
- `git diff --check`: passed.
- A clean development-server restart was verified at `http://localhost:3000/ghaziabad` with HTTP 200.

## Existing environment observations

- The same three external Google favicon requests for `olaelectric.com`, `jawa.in`, and `vespa.com` return 404; these were present in the Phase 1 baseline and were not introduced by this refactor.
- The production build could not fetch Google font stylesheets in the restricted network environment and used its existing fallback behavior. Compilation and static generation still completed successfully.
- Running the production build while the original development process was active temporarily invalidated that process's `.next` cache. The development server was stopped and restarted cleanly; no source change was needed.

## Gate result

Phase 2 Gate: **PASS**. The Ghaziabad pilot retains the captured visual, content, SEO, responsive, and interaction behavior while moving its presentation sections into one page-specific module.
