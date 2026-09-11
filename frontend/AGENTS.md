# CLAUDE.md — FixWheel Agent Rules

**Read this file completely before making any code change on this project. These rules are not suggestions — they are hard constraints. If a task conflicts with a rule below, stop and ask the user rather than proceeding.**

---

## 0. Why This File Exists

FixWheel is a **live production website** (`fixwheel.app`) with 800+ indexed pages and real daily customer bookings. It has already suffered real damage from AI-agent mistakes: unprompted multi-page edits, fabricated pricing data, an unauthenticated admin route that was accidentally indexed in public sitemaps, and a sitemap/routes mismatch that created hundreds of dead URLs Google indexed as real pages. Every rule below exists because one of these already happened once. Treat that history as binding context, not background noise.

---

## 1. Project Context

- **Domain:** `https://www.fixwheel.app` — On-demand doorstep two-wheeler repair across Delhi, Gurgaon, Noida, Faridabad, Ghaziabad.
- **Frontend:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React. Hosted on Vercel.
- **Backend:** Node.js, Express, TypeScript, Prisma ORM, PostgreSQL. Hosted on Render (`fixwheel-backend.onrender.com`).
- **External services:** Supabase (`public_stats`, `page_variable_overrides`), Resend (booking emails), Google Analytics 4, Microsoft Clarity.
- **Structure:** City pages (`app/delhi/page.client.tsx`, `app/gurgaon/...`, etc., 900–1,038 lines each), locality subpages (`app/[city]/[locality]/page.client.tsx`), brand pages, and service pages — all built from large, near-duplicate templates. This near-duplication is the #1 source of agent hallucination on this project: when asked to edit one page, an agent will find 5+ nearly identical files and may "helpfully" touch ones it was never asked about.
- **Sitemap structure:** `sitemap.xml` (index) → `main.xml`, `service.xml`, `brand.xml`, `becomepartner.xml`, `bike-type.xml`, `gurgaon.xml`, `delhi.xml`, `noida.xml`, `faridabad.xml`, `ghaziabad.xml`, `other.xml`. This sitemap set is the **single authoritative definition** of every page that is allowed to exist on the live site — see Pillar 9.

---

## 2. Pillar 1 — Scope Lockdown (Zero Unprompted Edits)

- The agent is **strictly forbidden** from editing any file, route, or component not explicitly named or strictly required by the user's prompt.
- **No unprompted multi-city edits.** If the user asks for a change on `/delhi`, do NOT touch `/gurgaon`, `/noida`, `/faridabad`, or `/ghaziabad` — even if they contain the exact same bug or would visually benefit from the same fix. Fix only the named target. If the same issue clearly exists elsewhere, report it in chat; do not fix it silently.
- **No "drive-by" refactoring.** Never reformat, reorder imports, rename variables, "clean up," or reorganize directories outside the target file, even if the existing code looks messy, legacy, or inconsistent (e.g. existing fallback tokens or unused imports in legacy files).
- **Inform, don't edit.** If bugs, inconsistencies, dead code, or fabricated-looking data are spotted in files outside the current task's scope, report them in chat text only. Never touch that code without explicit permission in a separate, dedicated task.
- When a task is ambiguous about which file(s) it covers, list the candidate files and ask before editing more than one.

---

## 3. Pillar 2 — Git & Push Safety

- **Never run `git push`** unless the user's prompt explicitly contains the word "push."
- **Always run `git status` before staging or committing** to verify that ONLY the files relevant to this task were modified. If `git status` shows unexpected changes, stop and report them before proceeding — do not assume they're fine.
- **Never modify `package.json` or `package-lock.json`** unless a dependency upgrade or installation was explicitly ordered in this task.
- Never force-push, rebase, or rewrite git history under any circumstance without explicit, task-specific instruction.

---

## 4. Pillar 3 — Architecture & Component Discipline

- **Never create new 1,000-line duplicate page client files.** Use existing shared templates (`components/ServicePageTemplate.tsx`, and `components/CityPageTemplate.tsx` once it exists). If a task seems to require duplicating a large page file, stop and propose extracting a shared template instead.
- **Maintain strict Next.js App Router conventions:**
  - `page.tsx` stays a Server Component — handles `generateMetadata`, JSON-LD schemas, `generateStaticParams`.
  - `page.client.tsx` handles `"use client"` interactive UI, state, and form hooks.
  - Never convert a Server Component to a Client Component just to use a hook — find the correct pattern (e.g. pass data down as props, or isolate the interactive piece into its own client component) instead.
- **No new hardcoded secrets.** Never embed new Supabase keys, database URLs, or any secret token inside client-side components or new files. Always use `process.env`. Do NOT perform unprompted refactoring on existing legacy fallback strings unless explicitly assigned to that cleanup task.

---

## 5. Pillar 4 — Technical SEO Preservation (Critical for 800+ Pages)

- **Never remove, change, or redirect canonical URLs** in metadata without explicit instruction.
- **Internal links must always point to canonical, clean URLs** (e.g. `/delhi`) — never legacy/incorrect patterns (e.g. `/services/delhi`).
- **Utility/transactional pages** (`/confirmation`, `/delete-account`, and similar) must keep `robots: { index: false, follow: false }` — never remove this without explicit instruction.
- **Never add utility, test, or internal operational URLs to any sitemap file.**
- **Never delete or corrupt existing JSON-LD schema markup** (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`) on any page.
- **Never implement a client-side (JavaScript) redirect as a substitute for a real removal or a real server-side redirect.** Permanent 301 redirects MUST be defined in `next.config.mjs` or handled via standard Next.js server-side `redirect()` in Server Components with permanent status — never using `window.location`, `<meta http-equiv='refresh'>`, or `useRouter().push()` on initial page mount. If a page needs to stop existing, it must return a real 404/410 status — never a 200 response with a JS redirect layered on top.

---

## 6. Pillar 5 — Admin & Security Guardrails

- The `/admin-8472-secret` route, its components, and related client API files have been **completely and permanently removed**. 
- **Never re-create an unauthenticated admin dashboard, secret admin URL, or exposed internal CRUD view** for any reason (including "for testing" or "temporarily").
- Never lower, bypass, or comment-out an authentication or CORS check to make a task easier to complete or test.

---

## 7. Pillar 6 — Mandatory Verification Gate

Before declaring **any** coding task complete:
1. Run `git status` and confirm only the intended files changed.
2. Run `npm run build` (or `npx tsc --noEmit`) and confirm **0 build errors** across all 800+ static routes.
3. If the task touched pricing, stats, or any customer-facing number, re-read Pillar 7 below and confirm nothing was fabricated.
4. If the task touched Supabase, RLS policies, or database operations, re-read Pillar 8 below and confirm live booking/partner creation still functions.
5. If the task added, removed, or renamed any route/URL, re-read Pillar 9 below and confirm the sitemap still matches reality.

---

## 8. Pillar 7 — Never Fabricate Business Data

This project has been directly damaged by an agent inventing plausible-looking numbers (pricing, stats, percentages) that were never provided by the user or sourced from real data.

- **Never invent, guess, estimate, or "reasonably assume" pricing, discounts, percentages, ratings, counts, or any other business-critical number.** If a task requires a number that wasn't given and isn't already correctly stored in the database (`public_stats`, `page_variable_overrides`, or the relevant Prisma/PostgreSQL table), do not fill it in with something that "looks right." Leave a clearly marked placeholder (e.g. `{/* TODO: confirm real price with FixWheel team */}`) and flag it explicitly in your summary — never let a fabricated number silently ship to production.
- **Never repeat a number from one page onto another** without confirming it's actually meant to be the same (e.g. don't copy Gurgaon's stats onto a new Noida page just because the template is shared) — verify per-city/per-locality data is genuinely correct for that specific page, not copy-pasted from the template's original source.
- If real data already exists in Supabase (`public_stats`) or the database, always pull from there — never hardcode a number that duplicates something the database already tracks live.

---

## 9. Pillar 8 — Database & RLS Change Protocol

- **Any task touching Supabase Row Level Security policies must, before making a change:** list and record the current policies on every affected table (as a rollback reference), and explicitly state which existing access patterns must remain untouched.
- **Never add a new public-facing policy or key in a way that could narrow or override access on an existing table.** Adding public read access to one new table (e.g. `public_stats`) must never require modifying policies on `Booking`, `Partner`, `User_Profile`, or any other existing table.
- **Never weaken or disable RLS as a quick fix** to make data appear or a bug go away.
- **After any RLS or database config change:** verify that actual live user workflows (creating a booking, submitting a partner form, fetching public counters) still succeed without throwing 401/403 errors. **Do NOT try to verify via an admin dashboard, as no admin dashboard exists in the frontend.**
- **Never perform a destructive operation** (`DELETE`, `TRUNCATE`, `DROP`) on any table's data as part of fixing an access/permissions problem. Access bugs are fixed with policy/config changes only.

---

## 10. Pillar 9 — The Sitemap Is the Single Source of Truth for What Should Exist

- **`sitemap.xml` and its referenced sub-sitemaps define the complete, exact set of URLs that are allowed to exist on the live site — nothing more, nothing less.**
- **Never generate a new page, route, or internal link that isn't backed by a real, intentional entry in the appropriate sitemap file.** A page and its sitemap entry should be created together, never one without the other.
- **Never leave a page reachable (returning 200, rendering content) if it has been removed from the sitemap.** If a page is being retired, it must return a real 404/410 status directly or have a permanent 301 redirect in `next.config.mjs` — not a client-side redirect, not a soft-404, not a lingering static file that still resolves.
- If a task involves removing a page, always: remove its sitemap entry, remove every internal link pointing to it, and confirm the resulting URL returns a genuine 404/410 or 301.

---

## 11. Pre-Flight Checklist (run through this before starting any task)

- [ ] Is the exact scope of files/pages to touch unambiguous? If not, ask before starting.
- [ ] If this touches more than one city/locality/brand page, was that explicitly requested?
- [ ] Does this task require any number (price, stat, percentage)? If yes — is it from a real, provided, or database source? (Never fabricated — Pillar 7.)
- [ ] Does this task touch Supabase/RLS? If yes — has the current policy state been recorded first? (Pillar 8.)
- [ ] Does this task add, remove, or rename any route? If yes — is the sitemap being updated in the same task? (Pillar 9.)
- [ ] After finishing: `git status` clean of surprises, build passes (`npm run build`), and — if applicable — Pillars 7–9 re-checked.
