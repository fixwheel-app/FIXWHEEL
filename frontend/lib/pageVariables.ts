import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from '@/lib/publicStats';

export interface PageVariables {
  bikesServiced: number;
  totalPartners: number;
  avgTime: string;
  warranty: string;
  startingPrice: string;
  averageRating: number;
  totalReviews: number;
  hasManualOverride: boolean;
}

export const DEFAULT_PAGE_VARIABLES: PageVariables = {
  bikesServiced: 100,
  totalPartners: 26,
  avgTime: '45 Mins',
  warranty: '30 Days Performance Warranty',
  startingPrice: '₹399',
  averageRating: 4.8,
  totalReviews: 100,
  hasManualOverride: false,
};

const pageVarCache: Record<string, { data: PageVariables; timestamp: number }> = {};
const CACHE_TTL_MS = 5 * 60 * 1000; // 5-minute cache

export async function getPageVariables(
  pageKey: string,
  citySlug: string = 'global',
  defaults: { defaultAvgTime?: string; defaultWarranty?: string; defaultPrice?: string } = {}
): Promise<PageVariables> {
  const cacheKey = `${pageKey}:${citySlug}`;
  const now = Date.now();

  if (pageVarCache[cacheKey] && now - pageVarCache[cacheKey].timestamp < CACHE_TTL_MS) {
    return pageVarCache[cacheKey].data;
  }

  // 1. Fetch baseline public_stats for city or global
  const publicStats = await getPublicStatsForCity(citySlug);

  const resolved: PageVariables = {
    bikesServiced: publicStats.bikes_serviced,
    totalPartners: publicStats.total_partners,
    avgTime: defaults.defaultAvgTime || '45 Mins',
    warranty: defaults.defaultWarranty || '30 Days Performance Warranty',
    startingPrice: defaults.defaultPrice || '₹399',
    averageRating: publicStats.average_rating,
    totalReviews: publicStats.total_reviews,
    hasManualOverride: false,
  };

  // 2. Fetch overrides from public.page_variable_overrides with global fallback
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://grvbunnfnqeyfafcaaaf.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdydmJ1bm5mbnFleWZhZmNhYWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNjkyMzgsImV4cCI6MjA5MDk0NTIzOH0.c2Yb3KV-WnAmwiEPVe8Rt6QwlEaw7pZLMBDgXz3iJlQ';

    const normalizedKey = pageKey.replace(/^https?:\/\/[^\/]+/, '').replace(/^\//, '') || 'global';

    // Fetch both specific route key AND global key in one query
    const res = await fetch(
      `${supabaseUrl}/rest/v1/page_variable_overrides?page_key=in.(${encodeURIComponent(normalizedKey)},global)&select=*`,
      {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
      }
    );

    if (res.ok) {
      const rows = await res.json();
      if (Array.isArray(rows) && rows.length > 0) {
        // Specific page key takes precedence over global fallback
        const override = rows.find((r: any) => r.page_key === normalizedKey) || rows.find((r: any) => r.page_key === 'global');
        
        if (override) {
          resolved.hasManualOverride = true;

          if (override.use_manual_bikes && override.bikes_serviced_override !== null) {
            resolved.bikesServiced = override.bikes_serviced_override;
          }

          if (override.use_manual_partners && override.partners_override !== null) {
            resolved.totalPartners = override.partners_override;
          }

          if (override.avg_time) {
            resolved.avgTime = override.avg_time;
          }

          if (override.warranty) {
            let w = String(override.warranty).trim();
            if (/^\d+$/.test(w)) {
              w = `${w} Days Warranty`;
            }
            resolved.warranty = w;
          }

          if (override.starting_price) {
            resolved.startingPrice = override.starting_price;
          }
        }
      }
    }
  } catch (err) {
    console.warn('Error reading page_variable_overrides, using baseline stats:', err);
  }

  pageVarCache[cacheKey] = { data: resolved, timestamp: now };
  return resolved;
}
