import { getPublicStatsForCity } from '@/lib/publicStats';
import { normalizePublicCount } from '@/lib/publicStatsNormalization';

export interface PageVariables {
  bikesServiced: number;
  bikesServicedText: string;
  totalPartners: number;
  totalPartnersText: string;
  avgTime: string;
  warranty: string;
  startingPrice: string;
  averageRating: number;
  totalReviews: number;
  bikesServicedScope: 'global' | 'city';
  hasManualOverride: boolean;
}

export const DEFAULT_PAGE_VARIABLES: PageVariables = {
  bikesServiced: 169,
  bikesServicedText: '169+',
  totalPartners: 38,
  totalPartnersText: '38',
  avgTime: '45 Mins',
  warranty: '30 Days Performance Warranty',
  startingPrice: '₹399',
  averageRating: 4.8,
  totalReviews: 169,
  bikesServicedScope: 'global',
  hasManualOverride: false,
};

export async function getPageVariables(
  pageKey: string,
  citySlug: string = 'global',
  defaults: {
    defaultAvgTime?: string;
    defaultWarranty?: string;
    defaultPrice?: string;
    useGlobalOverrides?: boolean;
  } = {}
): Promise<PageVariables> {
  // Bikes serviced always comes from the global public_stats record.
  const publicStats = await getPublicStatsForCity(citySlug);

  const resolved: PageVariables = {
    bikesServiced: publicStats.bikes_serviced,
    bikesServicedText: `${publicStats.bikes_serviced}+`,
    totalPartners: publicStats.total_partners,
    totalPartnersText: `${publicStats.total_partners}`,
    avgTime: defaults.defaultAvgTime || '45 Mins',
    warranty: defaults.defaultWarranty || '30 Days Performance Warranty',
    startingPrice: defaults.defaultPrice || '₹399',
    averageRating: publicStats.average_rating,
    totalReviews: publicStats.total_reviews,
    bikesServicedScope: 'global',
    hasManualOverride: false,
  };

  // 2. Fetch overrides from public.page_variable_overrides with global fallback
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://grvbunnfnqeyfafcaaaf.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdydmJ1bm5mbnFleWZhZmNhYWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNjkyMzgsImV4cCI6MjA5MDk0NTIzOH0.c2Yb3KV-WnAmwiEPVe8Rt6QwlEaw7pZLMBDgXz3iJlQ';

    const normalizedKey = pageKey.replace(/^https?:\/\/[^\/]+/, '').replace(/^\//, '') || 'global';

    const pageKeyFilter = defaults.useGlobalOverrides === false
      ? `eq.${encodeURIComponent(normalizedKey)}`
      : `in.(${encodeURIComponent(normalizedKey)},global)`;

    // Service pages can opt out of unrelated global display overrides while
    // still allowing a deliberate route-specific override.
    const res = await fetch(
      `${supabaseUrl}/rest/v1/page_variable_overrides?page_key=${pageKeyFilter}&select=*`,
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
        const override = rows.find((r: any) => r.page_key === normalizedKey)
          || (defaults.useGlobalOverrides === false ? undefined : rows.find((r: any) => r.page_key === 'global'));
        
        if (override) {
          resolved.hasManualOverride = true;

          if (override.use_manual_partners && override.partners_override !== null && override.partners_override !== undefined && override.partners_override !== '') {
            let pText = String(override.partners_override).trim();
            resolved.totalPartnersText = pText;
            resolved.totalPartners = normalizePublicCount(parseInt(pText, 10), publicStats.total_partners);
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

  return resolved;
}
