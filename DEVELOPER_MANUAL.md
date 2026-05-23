# 🛠️ FixWheel Developer Manual & Technical Architecture

Welcome to the official developer manual and architectural guide for **FixWheel**. This document explains how to configure environment variables, details the technical architecture of our **"Task Recommender" Ranking Algorithm**, and provides common troubleshooting strategies.

---

## 📋 1. Environment Variables Setup (Tool Manual)

To run the full-stack FixWheel application locally or in production, you must set up the environment variables in both the `backend/` and `frontend/` workspaces.

### 🔑 Backend Variables (`backend/.env`)

Copy `backend/.env.example` to `backend/.env` and configure the following variables:

| Variable Name | Description | Example Value |
| :--- | :--- | :--- |
| `DATABASE_URL` | Direct or pooled PostgreSQL connection string (e.g., Supabase). | `postgresql://user:pass@host:5432/db` |
| `GEMINI_API_KEY` | Google Gemini AI key (used for auto-assigning and intelligent service recommendations). | `AIzaSyD...` |
| `RESEND_API_KEY` | Resend API key for secure booking and partner onboarding emails. | `re_fjXeLN...` |
| `OWNER_EMAIL` | Target email where all notifications and booking alert copies are sent. | `support@fixwheel.app` |
| `FRONTEND_URL` | URL of the frontend application (needed for CORS settings). | `http://localhost:3000` |
| `PORT` | Local server port number. | `5000` |
| `ADMIN_SECRET_KEY` | Header authorization secret key for Vercel admin dashboard. | `Secret_Key_Here` |

### 🔑 Frontend Variables (`frontend/.env.local`)

Configure the following variables in the `frontend/.env.local` file:

| Variable Name | Description | Example Value |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | Root URL of the deployed Express backend server. | `http://localhost:5000/api` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase endpoint URL for public assets/buckets. | `https://grvbunnfnqeyfafcaaaf.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key for uploading garage files and photos directly. | `eyJhbGciOiJIUzI1Ni...` |

---

## 🧠 2. Technical Architecture: "Task Recommender" Ranking Algorithm

The **"Task Recommender"** is our proprietary intelligent matching algorithm. It automatically rates and ranks registered **Garages/Partners** against incoming **Customer Bookings** to recommend the absolute best mechanic for the job.

### ⚙️ Scoring Formula
The recommendation engine calculates a unified score ($S$) for each candidate partner using a weighted linear combination:

$$S = (w_1 \cdot \text{DistanceScore}) + (w_2 \cdot \text{ExpertiseMatch}) + (w_3 \cdot \text{RatingScore}) - (w_4 \cdot \text{CurrentLoad})$$

Where weights are balanced to prioritize proximity and expertise:
*   $w_1 \text{ (Distance)} = 0.40$
*   $w_2 \text{ (Expertise)} = 0.30$
*   $w_3 \text{ (Rating)} = 0.20$
*   $w_4 \text{ (Load)} = 0.10$

### 📊 Component Breakdowns:
1.  **DistanceScore (40%)**: Calculated using the Haversine formula between the customer's geocoded address and the partner's coordinates. Scoring is inversely proportional to distance (maximum score for $< 2$ km, decaying to zero at $> 15$ km).
2.  **ExpertiseMatch (30%)**: Binary check if the partner services the requested vehicle type (`Bike` or `Car`) and a Jaccard similarity score on the requested sub-services vs the partner's declared offerings.
3.  **RatingScore (20%)**: Normalized historical rating ($0.0$ to $1.0$) based on partner reviews and completion rates.
4.  **CurrentLoad (10% Penalty)**: Subtracts a penalty based on the number of currently active/pending jobs assigned to the partner to prevent bottlenecks.

### 🔄 Recommendation Flowchart

```mermaid
graph TD
    A[Incoming Booking Request] --> B[Geocode Customer Address]
    B --> C[Fetch All Active Partners in City]
    C --> D{Filter: Vehicle Type Match?}
    D -- No --> E[Exclude Partner]
    D -- Yes --> F[Calculate Distance Score - Haversine]
    F --> G[Calculate Service Expertise Match]
    G --> H[Retrieve Partner Rating & Pending Load]
    H --> I[Apply Weighted Formula]
    I --> J[Rank Partners by Recommendation Score]
    J --> K[Recommend Top Partner to Admin / Auto-Assign]
```

---

## 🛠️ 3. Common Troubleshooting

### 🛑 3.1. Handling API Limit Errors
When running a high-traffic app, external services like **Google Gemini API**, **Supabase PostgreSQL**, or **OpenStreetMap Nominatim** might trigger rate limits.

#### 💡 Google Gemini API Limits
- **Symptom**: `429 Too Many Requests` or `Quota Exceeded` errors.
- **Resolution**:
  1. Implement **exponential backoff** retry logic inside backend controller calls.
  2. Implement local in-memory caching (e.g., Redis or node-cache) for repeated queries.
  3. Upgrade key tier in the Google AI Studio console or rotate active API keys.

#### 💡 OpenStreetMap Nominatim Limits
- **Symptom**: Blocked IP address or empty responses.
- **Resolution**:
  1. Nominatim requires a distinct, descriptive `User-Agent` header (already configured in our code). Do not use generic headers.
  2. Respect the absolute rate limit of **1 request per second**.
  3. For massive scales, migrate the geocoding request to an enterprise service like Google Geocoding API or Mapbox.

---

### 🎨 3.2. Resolving UI Rendering & Caching Issues

#### 💡 Next.js Hydration Mismatches
- **Symptom**: Console warnings stating `Text content did not match` or styling glitches on page load.
- **Resolution**:
  1. Hydration mismatches happen when rendering dynamic values (like `Date.now()` or local timezone listings) on the server that change when loaded on the client.
  2. Use React's `useEffect` to trigger client-side updates only after the component has fully mounted:
     ```tsx
     const [isMounted, setIsMounted] = useState(false);
     useEffect(() => setIsMounted(true), []);
     if (!isMounted) return <LoadingSpinner />;
     ```

#### 💡 CSS / Tailwind Cache Issues
- **Symptom**: Newly added styles, responsive wrappers, or colors do not render in the browser.
- **Resolution**:
  1. Clear Next.js cache by deleting the `.next/` build directory and restarting:
     ```bash
     rd /s /q .next
     npm run dev
     ```
  2. Hard-reload the browser (Ctrl + F5 or Cmd + Shift + R) to bypass local asset cache.
