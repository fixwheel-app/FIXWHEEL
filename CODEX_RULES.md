# 🛑 CODEX_RULES.md — FixWheel Codex Rule Book & Anti-Hallucination Protocol

> **CRITICAL DIRECTIVE FOR CODEX:**  
> **Read this rule book completely before proposing or writing any code on this project.**  
> These rules are **hard operational constraints**, not optional guidelines. If a user request is ambiguous, conflicts with any rule below, or involves multi-file edits, **stop and ask the user for confirmation before touching any code.**

---

## 0. Historical Context: Why This Rule Book Exists

FixWheel is a **live production platform** ([https://www.fixwheel.app](https://www.fixwheel.app)) serving real daily bike repair bookings across Delhi-NCR with **800+ Google-indexed pages**.

The project has previously suffered severe business and SEO damage from AI assistant hallucinations:
1. **Hallucinated & False Pricing:** AI agents fabricated rates (like ₹499/₹599/₹899) and scattered hardcoded price tags across 50+ locality files that contradicted the company's real rate card.
2. **Unprompted Multi-Page Edits:** When asked to fix an issue on Delhi, agents silently modified Gurgaon, Noida, Faridabad, and Ghaziabad, introducing dozens of regressions.
3. **Accidental Admin Leakage:** An agent once created an unauthenticated admin route that got indexed by Google in public sitemaps.
4. **Sitemap Mismatches:** Agents deleted or altered URLs without updating the App Router sitemap routes, generating hundreds of Google 404 crawl errors.

**Treat this history as binding law. Never assume. Always verify.**

---

## 1. Operating Modes: Read-Only First vs. Authorized Execution

Codex must operate in two distinct modes:

### Mode A: Read-Only / Planning Mode (Default)
- Use when the user asks questions, requests analysis, investigates bugs, or asks for a plan.
- **Do NOT edit files.**
- **Do NOT run build commands (`npm run build`), watchers, or scripts** that generate `.next/` cache folders or alter local state.
- Formulate a clear, surgical plan and present it to the user.

### Mode B: Authorized Code Execution Mode
- Enter this mode **only when the user explicitly instructs you to apply changes or write code**.
- Apply surgical edits strictly to the approved files.
- Run authorized verification checks (build, git diff) only after completing the edits.

---

## 2. The 4-Step Codex Execution Cycle

```text
[Step 1: Scope & Plan] ──► [Step 2: User Confirmation]
                                    │
[Step 4: Verify & Report] ◄── [Step 3: Surgical Edit]
```

1. **Step 1 — Scope & Plan:** Identify the exact file(s) that need editing. If the request involves more than 1 page or is ambiguous, **stop and ask the user first**.
2. **Step 2 — User Confirmation:** Present the proposed changes. Wait for user consent before modifying critical flows (pricing, checkout, database, sitemaps).
3. **Step 3 — Surgical Implementation:** Make minimal, targeted changes. Do **NOT** perform drive-by formatting, import reordering, or side-refactorings in unrelated files.
4. **Step 4 — Verification & Safety Report:** Run verification checks and report the results to the user.

---

## 3. Pillar 1 — Ask Before Making Changes & Scope Lockdown

- **Ask Before Multi-File Edits:** If the user says "fix this on the city page", clarify whether they mean only Delhi or all 5 cities. Never edit `/gurgaon`, `/noida`, `/faridabad`, or `/ghaziabad` if only `/delhi` was named.
- **Zero Drive-By Refactoring:**
  - Do NOT rename variables, reorder imports, or "clean up" legacy code in files you were not explicitly tasked to change.
  - If you spot bugs or dead code outside the target file, **report them in chat text only**. Do not touch them.
- **Protected Booking Flow:**
  - The files under `frontend/app/book/` and `frontend/components/BookingForm.tsx` handle real customer bookings and payments.
  - **Never modify the booking schema or checkout flow without explicit user instruction and prior review.**

---

## 4. Pillar 2 — Zero Pricing & Data Hallucination

FixWheel operates on an official, fixed rate card. **Fabricating numbers is strictly forbidden.**

- **Authoritative Rate Card and Current Migration State:**
  - The approved display rate card is defined in [`frontend/lib/pricingData.ts`](./frontend/lib/pricingData.ts) (`SERVICE_PRICING_LIST`).
  - Pricing is not yet structurally single-source. `frontend/lib/constants.ts` duplicates the bookable package amounts used by checkout, while `frontend/lib/servicesData.ts`, dedicated service pages, brand pages, and SEO copy contain additional displayed price values. Never assume those files contain descriptions only.
  - Until the pricing-contract migration is complete, compare every affected display and transactional source before changing a price. Do not resolve a conflict by copying the most common value; obtain explicit FixWheel business approval.
  - The current approved catalog starts Non-Electric General Service at **₹550** (`Rs. 550`) and Electric General Service at **₹799** (`Rs. 799`).
- **Currency & Character Encoding:**
  - All prices represent Indian National Rupees (INR).
  - Use UTF-8 `₹` (U+20B9) or ASCII `Rs.` / `INR`. Never let terminal encodings replace the currency symbol with `?`.
- **No Hardcoded Price Tags:**
  - Never write raw hardcoded pricing strings inside city, locality, or brand page layouts.
  - Always use the centralized dynamic component [`frontend/components/CityServicesGrid.tsx`](file:///c:/Users/krish/OneDrive/Documents/FixWheel/spinfix/frontend/components/CityServicesGrid.tsx) which imports and calculates prices directly from `pricingData.ts`.
- **No Fabricated Stats or Promises:**
  - Never guess or invent customer counts, ratings, discounts, or turnaround times.
  - Use dynamic stats from Supabase (`public_stats` via `lib/publicStats.ts`) or leave a clear placeholder:
    `{/* TODO: confirm with FixWheel team */}`.

---

## 5. Pillar 3 — Post-Change Verification & Safe Reporting

When in **Authorized Code Execution Mode**, verify your work before reporting completion:

### Test 1: Git Diff Audit (Safe Revert Rule)
Run `git status -s` in your terminal.
- Confirm that **ONLY** the intended files were modified.
- **SAFE REVERT RULE:** If unintended files appear, **NEVER run `git checkout` or `git reset` automatically** — doing so could erase the user's ongoing work! Instead, immediately report the unexpected files in chat and ask the user for instructions.

### Test 2: Rate Card & Pricing Verification
If the task touched any service, city, or locality page:
- Verify that every service price matches [`frontend/lib/pricingData.ts`](file:///c:/Users/krish/OneDrive/Documents/FixWheel/spinfix/frontend/lib/pricingData.ts).
- Verify that no deleted routes (e.g. `/services/tyre-replacement`) or legacy prices are lingering in links or text.

### Test 3: Production Build Check (Only in Execution Mode)
When authorized by the user to run verification:
```bash
cd frontend
npm run build
```
- The build must compile with **`Exit code 0`** and **`0 errors`**.
- All 800+ static routes must generate without hydration or TypeScript failures.

### Test 4: Backend TypeScript Check (if backend was touched)
```bash
cd backend
npm run build
```
- Must compile cleanly without type errors.

---

## 6. Pillar 4 — Git & Push Safety

- **NEVER run `git push`** unless the user's prompt explicitly contains the word **"push"**.
- Always run `git status` before staging (`git add`) and committing.
- **Never modify `package.json` or `package-lock.json`** unless the user explicitly requested a package installation or upgrade.
- Never force-push (`git push --force`) or rebase public branches.

---

## 7. Pillar 5 — Technical SEO & App Router Sitemap Integrity

- **Sitemap Architecture:**
  - Sitemaps are **NOT** static files in `public/`.
  - FixWheel uses dynamic Next.js App Router Route Handlers:
    - Root index: `frontend/app/sitemap.xml/route.ts`
    - City sitemaps: `frontend/app/delhi.xml/route.ts`, `gurgaon.xml/route.ts`, `noida.xml/route.ts`, `faridabad.xml/route.ts`, `ghaziabad.xml/route.ts`
    - Category sitemaps: `frontend/app/service.xml/route.ts`, `brand.xml/route.ts`, `bike-type.xml/route.ts`, `becomepartner.xml/route.ts`, `main.xml/route.ts`, `other.xml/route.ts`
    - Crawl policy: `frontend/app/robots.ts`
  - If a route is added, renamed, or removed, update the corresponding `route.ts` handler in the exact same task.
- **Canonical URLs:** Never remove, redirect, or alter canonical URL tags inside `page.tsx` metadata.
- **Structured JSON-LD Schema:** Never delete or corrupt `LocalBusiness`, `Service`, `FAQPage`, or `BreadcrumbList` schema scripts.
- **No Client-Side Redirects for Dead Pages:** Never use `window.location` or `<meta http-equiv="refresh">` to hide deleted pages. Use permanent 301 redirects in `next.config.mjs` or return real 404 statuses.
- **Utility Pages:** `/confirmation`, `/delete-account`, and checkout routes must always retain:
  ```ts
  robots: { index: false, follow: false }
  ```

---

## 8. Pillar 6 — Database & Supabase Security

- **Row-Level Security (RLS):** Never weaken, bypass, or drop RLS policies on Supabase tables (`Booking`, `Partner`, `public_stats`, `page_variable_overrides`).
- **No Hardcoded Secrets:** Never put Supabase service role keys, database passwords, or JWT secrets in client-side code. Always use `process.env`.
- **Zero Destructive Queries:** Never execute `DROP TABLE`, `TRUNCATE`, or un-scoped `DELETE` queries.
- **Live Workflow Validation:** After making any database change, verify that customer booking submission and partner registration still execute without 401/403 errors.

---

## 9. Pre-Flight Checklist for Codex

Before you write or propose a single line of code, verify:

- [ ] **Mode:** Am I in Read-Only / Planning mode or Authorized Execution mode?
- [ ] **Target Scope:** Do I know the exact single file or small set of files to touch?
- [ ] **Ambiguity Check:** Has the user confirmed the scope, or am I making assumptions? (If assuming, STOP and ask.)
- [ ] **Pricing Check:** Does this involve pricing? If so, does it strictly use `frontend/lib/pricingData.ts` and `CityServicesGrid.tsx`?
- [ ] **Encoding Check:** Are currency symbols properly encoded as UTF-8 `₹` or `Rs.`?
- [ ] **No Side Effects:** Am I touching only what was requested, leaving all other cities/components untouched?
- [ ] **Revert Caution:** If unexpected files appear, will I ask the user instead of resetting?

---

## 10. Quick Summary Command for Codex Prompts

When you prompt Codex, you can prefix your instruction with:
> *"Follow `CODEX_RULES.md`: Plan first in Read-Only mode, ask for confirmation before editing, use official rates from `pricingData.ts`, preserve App Router sitemap route handlers, and ask before reverting any unexpected files."*
