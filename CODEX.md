# 📘 FixWheel — Complete Project Architecture & Codex Context Guide

This document serves as the comprehensive technical context, architectural blueprint, and development guide for **FixWheel** (`https://www.fixwheel.app`). It is structured specifically for AI coding assistants, Codex, and engineers to understand how every part of the application functions, how the frontend and backend communicate, where data lives in Supabase, and the strict rules governing the codebase.

---

## 📑 Table of Contents
1. [Executive & Business Overview](#1-executive--business-overview)
2. [Git Repository & Monorepo Structure](#2-git-repository--monorepo-structure)
3. [System Architecture & Data Flow Diagram](#3-system-architecture--data-flow-diagram)
4. [Frontend Architecture (Next.js 14)](#4-frontend-architecture-nextjs-14)
5. [Backend Architecture (Express & Node.js)](#5-backend-architecture-express--nodejs)
6. [Database & Supabase Integration](#6-database--supabase-integration)
7. [Connection Points: Where Frontend & Backend Meet](#7-connection-points-where-frontend--backend-meet)
8. [Environment Variables & Configuration](#8-environment-variables--configuration)
9. [How to Run, Test, and Build](#9-how-to-run-test-and-build)
10. [Codex Golden Rules & Engineering Guardrails](#10-codex-golden-rules--engineering-guardrails)

---

## 1. Executive & Business Overview

- **Platform:** **FixWheel**
- **Production Domain:** [https://www.fixwheel.app](https://www.fixwheel.app)
- **Business Model:** On-demand, doorstep two-wheeler (motorcycle & scooter) repair and maintenance service across the Delhi-NCR region.
- **Service Territory:** 5 major cities:
  - **Delhi**
  - **Gurgaon (Gurugram)**
  - **Noida**
  - **Faridabad**
  - **Ghaziabad**
  (plus 100+ hyper-local localities such as Indirapuram, Cyber City, Hauz Khas, etc.)
- **Core Value Proposition:** Real-time doorstep mechanic booking, upfront transparent pricing, genuine spare parts, and 30-day performance warranty without taking the bike to an offline workshop.

---

## 2. Git Repository & Monorepo Structure

- **GitHub Repository:** `https://github.com/fixwheel-app/FIXWHEEL.git`
- **Default / Production Branch:** `main`
- **Hosting Environments:**
  - **Frontend:** Vercel (`fixwheel-sooty.vercel.app` & custom domain `fixwheel.app`)
  - **Backend:** Render (`fixwheel-backend.onrender.com`)
  - **Database & Storage:** Supabase (`grvbunnfnqeyfafcaaaf.supabase.co`)

### High-Level Monorepo Directory Tree
```text
spinfix/
├── backend/                       # Node.js + Express + Prisma API
│   ├── prisma/
│   │   └── schema.prisma          # Prisma schema connected to Supabase PostgreSQL
│   ├── src/
│   │   ├── controllers/           # Business logic (bookings, partners, queries, deletion)
│   │   ├── lib/                   # Database instance (db.ts), notifications, email
│   │   ├── middleware/            # Request validation (Zod) and auth guards
│   │   ├── routes/                # Express routing endpoints
│   │   └── index.ts               # Server entry point & CORS configuration
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                      # Next.js 14 App Router + Tailwind CSS
│   ├── app/                       # App Router routes (800+ indexed pages)
│   │   ├── [brand]/[model]/       # Programmatic bike brand & model pages
│   │   ├── book/                  # Booking wizard & checkout
│   │   │   ├── checkout/          # Final booking confirmation & form
│   │   │   └── page.client.tsx    # Vehicle & service selector
│   │   ├── delhi/                 # Delhi city page & [locality] routes
│   │   ├── gurgaon/               # Gurgaon city page & [locality] routes
│   │   ├── noida/                 # Noida city page & [locality] routes
│   │   ├── faridabad/             # Faridabad city page & [locality] routes
│   │   ├── ghaziabad/             # Ghaziabad city page & [locality] routes
│   │   ├── partner/               # Partner/mechanic onboarding wizard
│   │   ├── pricing/               # Official site-wide rate card
│   │   ├── services/              # All service category pages
│   │   ├── *.xml/route.ts         # Dynamic App Router sitemaps (sitemap.xml, delhi.xml, etc.)
│   │   ├── robots.ts              # Dynamic robots.txt pointing to /sitemap.xml
│   │   └── layout.tsx             # Root layout, fonts, header, footer
│   ├── components/                # Reusable UI components (CityServicesGrid, BookingForm, etc.)
│   ├── lib/                       # API client, Supabase client, static data & stats
│   │   ├── api.ts                 # Axios calls to the backend API
│   │   ├── pricingData.ts         # Approved display rate card; checkout migration pending
│   │   ├── publicStats.ts         # Live stat fetching from Supabase public_stats table
│   │   ├── pageVariables.ts       # Runtime overrides from Supabase
│   │   └── supabase.ts            # Supabase JS client for storage and public queries
│   ├── public/                    # Static assets, logos, and images (no sitemaps here)
│   ├── package.json
│   ├── tailwind.config.ts
│   └── next.config.mjs
│
├── CODEX.md                       # This file (Codex context & architecture)
├── CLAUDE.md                      # Strict agent constraints and safety pillars
├── AGENTS.md                      # Multi-agent operating guidelines
└── DEVELOPER_MANUAL.md            # Technical manual & matching algorithm specs
```

---

## 3. System Architecture & Data Flow Diagram

```mermaid
graph TD
    User([Customer / Partner Browser])
    
    subgraph Frontend ["Frontend (Next.js 14 on Vercel)"]
        UI[App Router Pages]
        ApiClient[Axios Client: lib/api.ts]
        SupaClient[Supabase JS Client: lib/supabase.ts]
        PricingLib[Rate Card: lib/pricingData.ts]
    end
    
    subgraph Backend ["Backend API (Express on Render)"]
        Server[Express Server: src/index.ts]
        BookCtrl[Booking Controller]
        PartnerCtrl[Partner Controller]
        PrismaORM[Prisma Client: lib/db.ts]
        EmailService[Resend & Nodemailer]
    end
    
    subgraph Supabase ["Supabase Cloud (PostgreSQL & Storage)"]
        Postgres[(PostgreSQL Database)]
        Bucket[Storage Bucket: partner-uploads]
        PubStats[(Table: public_stats)]
        Overrides[(Table: page_variable_overrides)]
    end

    %% Frontend interactions
    User -->|Views Pages & Dynamic Rates| UI
    UI -->|Reads Rate Card| PricingLib
    UI -->|Fetches Live Stats & Overrides| SupaClient
    SupaClient -->|Direct REST / Anon Key| PubStats
    SupaClient -->|Direct REST / Anon Key| Overrides
    
    %% Partner Upload flow
    User -->|Uploads Garage/License Photos| SupaClient
    SupaClient -->|Direct Image Upload| Bucket
    
    %% Booking & Partner API submission flow
    UI -->|Submits Booking / Partner Form| ApiClient
    ApiClient -->|POST /api/bookings or /api/partners| Server
    Server --> BookCtrl
    Server --> PartnerCtrl
    BookCtrl --> PrismaORM
    PartnerCtrl --> PrismaORM
    
    %% Database persistence
    PrismaORM -->|Connection Pool via DATABASE_URL| Postgres
    
    %% Notifications
    BookCtrl -->|Sends Instant Email Confirmation| EmailService
    PartnerCtrl -->|Sends Application Notification| EmailService
```

---

## 4. Frontend Architecture (Next.js 14)

### 4.1. Core Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.3+
- **Styling:** Tailwind CSS + custom color tokens (`accent`, `bg-card`, etc.)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod resolvers

### 4.2. App Router Conventions
The frontend strictly separates Server Components from interactive Client Components:
- **`page.tsx` (Server Component):**
  - Generates static metadata via `generateMetadata()`.
  - Injects Google-compliant JSON-LD structured schema (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`).
  - Pre-computes static paths via `generateStaticParams()` where applicable.
- **`page.client.tsx` (Client Component with `"use client"`):**
  - Handles UI state, interactive accordions, search filters, and form submissions.
  - Never convert a Server Component to a Client Component just to use a hook.

### 4.3. Pricing Sources and Migration Status
`frontend/lib/pricingData.ts` contains the approved 14-entry display rate card. Its current General Service starting prices are ₹550 for non-electric 0–249cc vehicles and ₹799 for electric vehicles.

Pricing is not yet structurally single-source:
- `frontend/lib/constants.ts` duplicates the selectable checkout packages and tier amounts.
- `frontend/lib/servicesData.ts`, six dedicated service pages, brand/model pages, and SEO copy contain additional displayed prices. Some describe different scopes, such as installation labor versus a supplied part.
- The booking request currently includes a browser-supplied price, and the backend does not yet recalculate it from a server-owned catalog.
- Do not change or consolidate a conflicting value without explicit FixWheel business approval.

`frontend/components/CityServicesGrid.tsx` renders the catalog on the five city pages and their locality pages. It reads `SERVICE_PRICING_LIST`, but it still contains a silent ₹550 missing-ID fallback that must be removed during the pricing-contract migration. Never add raw price literals to city, locality, or brand page layouts.

### 4.4. Protected Booking Flow
The customer booking funnel is located in:
- `frontend/app/book/page.client.tsx`: Step 1 — Brand, model, and fuel selection.
- `frontend/app/book/checkout/page.tsx`: Step 2 — Slot, address, customer details.
- `frontend/components/BookingForm.tsx`: Zod-validated booking submission form.
> ⚠️ **CRITICAL:** The booking flow and checkout components must remain stable and protected. Any change to booking payload schema requires testing against the backend validation middleware.

---

## 5. Backend Architecture (Express & Node.js)

### 5.1. Core Tech Stack
- **Runtime:** Node.js (TypeScript compiled to JavaScript via `tsc`)
- **Web Framework:** Express 4.18
- **ORM:** Prisma 5.10
- **Validation:** Zod schemas
- **Email Dispatcher:** Resend API & Nodemailer

### 5.2. Routing & Endpoints
All API routes are mounted under `/api` in `backend/src/index.ts`:

| Route | HTTP Method | Controller | Purpose |
| :--- | :--- | :--- | :--- |
| `/health` | `GET` | Health handler | Basic uptime monitoring |
| `/ping-db` | `GET` | Database handler | Pings PostgreSQL via Prisma `db.booking.count()` |
| `/api/bookings` | `POST` | `createBooking` | Validates & creates new booking, emails customer/owner |
| `/api/partners` | `POST` | `createPartner` | Onboards new garage/mechanic, validates Indian mobile |
| `/api/queries` | `POST` | `createQuery` | Handles Contact Us inquiries |
| `/api/account-deletion` | `POST` | `createAccountDeletion` | Submits GDPR/Play Store account deletion requests |
| `/api/admin/*` | `GET`/`PATCH` | `adminController` | Protected backend administrative endpoints (`x-admin-key`) |
| `/api/sitemap/*` | `GET` | `sitemapController` | Dynamic sitemap utilities |

### 5.3. Booking Creation Logic (`bookingController.ts`)
1. Validates payload matching `BookingInput` schema (customer name, 10-digit phone, city, address, slot, vehicle details, price).
2. Automatically prepends India country code (`+91`).
3. Generates a unique booking reference formatted as `FW-XXXXXXXX` (8 uppercase hex digits).
4. Persists the record to the `Booking` table using Prisma.
5. Asynchronously triggers non-blocking email notifications via Resend to the customer and `OWNER_EMAIL`.
6. Returns HTTP 201 with `{ success: true, bookingId: "FW-XXXXXXXX" }`.

### 5.4. Partner Creation Logic (`partnerController.ts`)
1. Validates partner inputs using Zod.
2. Checks for existing applications by mobile number to prevent duplicate spam.
3. Generates a unique reference formatted as `FXW-P-XXXX`.
4. Saves garage information, services offered, and image URLs to the `Partner` table.
5. Fires an asynchronous notification email to the operations team.

---

## 6. Database & Supabase Integration

FixWheel uses **Supabase** as both its managed PostgreSQL database and object storage provider.

### 6.1. Prisma Database Schema (`backend/prisma/schema.prisma`)
The backend communicates with Supabase PostgreSQL using Prisma Client:

#### 1. `Booking` Model
```prisma
model Booking {
  id               String   @default(cuid())
  bookingRef       String   @id @unique        // e.g. "FW-A1B2C3D4"
  customerName     String
  phone            String                       // "+91XXXXXXXXXX"
  address          String
  bikeType         String                       // "Electric Motorbike", "Non-Electric Motorbike", "Scooter"
  bikeModel        String
  issueDescription String?
  preferredSlot    String                       // e.g. "10:00 AM - 11:00 AM"
  package          String                       // Service name or package
  price            Int                          // Calculated amount in INR
  status           String   @default("pending") // "pending", "confirmed", "completed", "cancelled"
  createdAt        DateTime @default(now())
  order_status     String?
  Final_Amount     BigInt?
  city             String   @default("Delhi")   // "Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"
  bookingDate      String   @default("2026-05-20")
  Remarks          String?
  source           String?  // e.g. "website"
  discount         BigInt?
  coupon_code      String?
}
```

#### 2. `Partner` Model
```prisma
model Partner {
  id              String   @id @default(cuid())
  partnerRef      String   @unique             // e.g. "FXW-P-1234"
  garageName      String
  ownerName       String
  phone           String
  mapsLocation    String
  vehicleType     String                       // "Bike", "Car", "Both"
  servicesOffered String[]                     // e.g. ["General Service", "Engine Work"]
  status          String   @default("pending")
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  garagePhotos    String[]                     // URLs pointing to Supabase storage
  licensePhoto    String?                      // URL pointing to Supabase storage
  partner_status  String?
  city            String   @default("Delhi")
  address         String   @default("")
}
```

#### 3. Other Tables
- `CouponCode`: Manages discount coupons and referral vouchers.
- `Query`: Contact inquiries submitted from `/contact`.
- `AccountDelete`: Account deletion requests matching Google Play Store compliance.

### 6.2. Direct Supabase Client Integration (Frontend)
The frontend instantiates the Supabase client directly in `frontend/lib/supabase.ts` using the public anonymous key:

1. **Storage Bucket (`partner-uploads`):**
   - Mechanics and garage owners upload shop photos and driving license images directly from the browser (`frontend/app/partner/page.client.tsx`).
   - Photos are stored under `garages/{timestamp}_{filename}` and `licenses/{timestamp}_{filename}`.
   - Public URLs are generated via `supabase.storage.from('partner-uploads').getPublicUrl()` and passed in the payload to the backend API.
2. **`public_stats` Table:**
   - Read-only table queried by `frontend/lib/publicStats.ts`.
   - Supplies real-time counters (e.g. `bikes_serviced`, `total_partners`, `average_rating`, `total_reviews`) for city landing pages.
   - Uses a 5-minute memory and `sessionStorage` cache to optimize network traffic.
3. **`page_variable_overrides` Table:**
   - Read-only table queried by `frontend/lib/pageVariables.ts`.
   - Allows the operations team to push emergency copy updates (warranty terms, banner text, starting price) without redeploying code.

---

## 7. Connection Points: Where Frontend & Backend Meet

| Feature | Frontend Trigger & Location | Intermediate Action | Backend Endpoint & File | Database / External Action |
| :--- | :--- | :--- | :--- | :--- |
| **Book a Mechanic** | `BookingForm.tsx` (`onSubmit`) | Calls `submitBooking()` via Axios in `lib/api.ts` | `POST /api/bookings`<br>`bookingController.ts` | Writes to `Booking` table via Prisma; triggers Resend email. |
| **Partner Onboarding** | `app/partner/page.client.tsx` (`handleSubmit`) | Uploads files to Supabase `partner-uploads` bucket; gets public URLs; calls `submitPartner()` in `lib/api.ts` | `POST /api/partners`<br>`partnerController.ts` | Writes to `Partner` table; triggers notification email. |
| **Contact Query** | `app/contact/page.tsx` | Calls `submitQuery()` in `lib/api.ts` | `POST /api/queries`<br>`queryController.ts` | Writes to `Query` table. |
| **Account Deletion** | `app/delete-account/page.tsx` | Calls `submitAccountDeletion()` in `lib/api.ts` | `POST /api/account-deletion`<br>`accountDeletionController.ts` | Writes to `Account Delete` table. |
| **Live Social Proof Stats** | `getPublicStatsForCity()` in `lib/publicStats.ts` | Queries Supabase table directly via anon key | *Direct to Supabase REST* | Reads `public_stats` table with 5-minute cache. |
| **Page Text Overrides** | `getPageVariables()` in `lib/pageVariables.ts` | Fetches route overrides directly from Supabase | *Direct to Supabase REST* | Reads `page_variable_overrides` table. |

---

## 8. Environment Variables & Configuration

### 8.1. Backend Variables (`backend/.env`)
```env
# PostgreSQL connection string to Supabase
DATABASE_URL="postgresql://postgres.[project-ref]:[password]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Server configuration
PORT=5000
FRONTEND_URL="http://localhost:3000"

# Email dispatch (Resend & SMTP)
RESEND_API_KEY="re_xxxxxxxxxxxx"
OWNER_EMAIL="support@fixwheel.app"
SMTP_USER="apikey"
SMTP_PASS="re_xxxxxxxxxxxx"

# Internal admin authorization
ADMIN_SECRET_KEY="your_secure_admin_key"
```

### 8.2. Frontend Variables (`frontend/.env.local`)
```env
# URL pointing to the Express backend API
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
# Production example: "https://fixwheel-backend.onrender.com/api"

# Public Supabase credentials
NEXT_PUBLIC_SUPABASE_URL="https://grvbunnfnqeyfafcaaaf.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

---

## 9. How to Run, Test, and Build

### 9.1. Local Development
Run both services concurrently in two terminal panes:

```bash
# Terminal 1: Backend
cd backend
npm install
npx prisma generate
npm run dev
# Backend runs on http://localhost:5000

# Terminal 2: Frontend
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:3000
```

### 9.2. Verifying & Building the Project
Before submitting changes or committing:
```bash
# Verify backend TypeScript compilation
cd backend
npm run build

# Verify frontend production build (verifies all 800+ static routes)
cd frontend
npm run build
```

---

## 10. Codex Golden Rules & Engineering Guardrails

> ⚠️ **MANDATORY READING:** The complete, binding operational rule book for Codex is defined in [`CODEX_RULES.md`](./CODEX_RULES.md).

When working with Codex or any AI code generator on FixWheel, the following core principles must always be followed:
1. **Scope Lockdown & Confirmation First:** Always plan and ask for confirmation before modifying multiple files or ambiguous areas. Never touch other cities when fixing one.
2. **Strict Pricing Integrity:** Never hallucinate or hardcode prices. Treat [`frontend/lib/pricingData.ts`](./frontend/lib/pricingData.ts) as the approved display rate card, audit the temporary checkout and content duplicates, and require explicit business approval for conflicts.
3. **Mandatory Verification Gate:** Always run `npm run build` and check `git status` before declaring a task complete.
4. **Git Safety:** Never run `git push` unless explicitly asked with the word "push".
5. **Technical SEO Preservation:** Maintain canonicals, structured schemas, and sitemaps for all 800+ pages.

For complete enforcement rules, see [`CODEX_RULES.md`](./CODEX_RULES.md).
