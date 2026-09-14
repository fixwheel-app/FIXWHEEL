# Phase 4 Step 3B-1 — Pricing-instruction harmonization

Status: **PASS**

## Change

- Corrected `CODEX_RULES.md` from obsolete ₹399/₹499 General Service values to the current ₹550/₹799 catalog values.
- Corrected the false statement that `constants.ts` and `servicesData.ts` do not contain pricing.
- Documented that `pricingData.ts` is the approved display rate card while checkout and content sources remain duplicated pending migration.
- Corrected `CODEX.md` claims about catalog size and nonexistent pricing helper functions.
- Documented the current client-supplied-price backend risk and the silent city-grid fallback so future agents do not assume pricing is already fully centralized.
- Required explicit FixWheel approval before resolving conflicting service scopes or prices.

## Verification

- Parsed the current catalog and verified Basic/General Service is ₹550 and Electric General Service is ₹799.
- Verified both instruction files contain those current values.
- Verified the obsolete statements that General Service starts at ₹399/₹499 are absent.
- Verified the referenced `frontend/lib/pricingData.ts` file exists.
- `git diff --check` passed.
- No application code, price, checkout flow, metadata, sitemap, Supabase row, package file, or Palam Vihar file changed in this step.
- No commit or push was made.

## Gate

The repository instructions now describe the pricing architecture accurately. The unresolved Comprehensive, Engine, Battery, and Brake decisions still block the pricing-code migration.
