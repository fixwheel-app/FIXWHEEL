import { supabase } from './supabase';

export interface PublicStatRecord {
  city_slug: string;
  bikes_serviced: number;
  total_partners: number;
  cities_covered: number;
  average_rating: number;
  total_reviews: number;
  updated_at?: string;
}

export const DEFAULT_PUBLIC_STATS: Record<string, PublicStatRecord> = {
  global: {
    city_slug: 'global',
    bikes_serviced: 100,
    total_partners: 26,
    cities_covered: 5,
    average_rating: 4.8,
    total_reviews: 100,
  },
  delhi: {
    city_slug: 'delhi',
    bikes_serviced: 22,
    total_partners: 6,
    cities_covered: 1,
    average_rating: 4.8,
    total_reviews: 22,
  },
  gurgaon: {
    city_slug: 'gurgaon',
    bikes_serviced: 54,
    total_partners: 12,
    cities_covered: 1,
    average_rating: 4.8,
    total_reviews: 54,
  },
  noida: {
    city_slug: 'noida',
    bikes_serviced: 12,
    total_partners: 5,
    cities_covered: 1,
    average_rating: 4.8,
    total_reviews: 12,
  },
  faridabad: {
    city_slug: 'faridabad',
    bikes_serviced: 11,
    total_partners: 3,
    cities_covered: 1,
    average_rating: 4.8,
    total_reviews: 11,
  },
  ghaziabad: {
    city_slug: 'ghaziabad',
    bikes_serviced: 1,
    total_partners: 0,
    cities_covered: 1,
    average_rating: 4.8,
    total_reviews: 1,
  },
};

let memoryCache: { data: Record<string, PublicStatRecord>; fetchedAt: number } | null = null;
const CACHE_TTL_MS = 5 * 60 * 1000;

export async function fetchAllPublicStats(): Promise<Record<string, PublicStatRecord>> {
  const now = Date.now();
  if (memoryCache && now - memoryCache.fetchedAt < CACHE_TTL_MS) {
    return memoryCache.data;
  }

  if (typeof window !== 'undefined') {
    try {
      const cachedStr = sessionStorage.getItem('fixwheel_public_stats_cache');
      if (cachedStr) {
        const parsed = JSON.parse(cachedStr);
        if (parsed && parsed.fetchedAt && now - parsed.fetchedAt < CACHE_TTL_MS) {
          memoryCache = parsed;
          return parsed.data;
        }
      }
    } catch (e) {}
  }

  try {
    const { data, error } = await supabase.from('public_stats').select('*');

    if (error || !data || data.length === 0) {
      console.warn('Failed to fetch public_stats from Supabase, using fallback:', error);
      return DEFAULT_PUBLIC_STATS;
    }

    const resultMap: Record<string, PublicStatRecord> = { ...DEFAULT_PUBLIC_STATS };
    data.forEach((row: any) => {
      if (row && row.city_slug) {
        resultMap[row.city_slug.toLowerCase()] = {
          city_slug: row.city_slug.toLowerCase(),
          bikes_serviced: Number(row.bikes_serviced) || DEFAULT_PUBLIC_STATS.global.bikes_serviced,
          total_partners: Number(row.total_partners) || DEFAULT_PUBLIC_STATS.global.total_partners,
          cities_covered: Number(row.cities_covered) || DEFAULT_PUBLIC_STATS.global.cities_covered,
          average_rating: Number(row.average_rating) || DEFAULT_PUBLIC_STATS.global.average_rating,
          total_reviews: Number(row.total_reviews) || DEFAULT_PUBLIC_STATS.global.total_reviews,
          updated_at: row.updated_at,
        };
      }
    });

    memoryCache = { data: resultMap, fetchedAt: now };
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('fixwheel_public_stats_cache', JSON.stringify(memoryCache));
      } catch (e) {}
    }
    return resultMap;
  } catch (err) {
    console.error('Error fetching public stats:', err);
    return DEFAULT_PUBLIC_STATS;
  }
}

export async function getPublicStatsForCity(citySlug?: string): Promise<PublicStatRecord> {
  const statsMap = await fetchAllPublicStats();
  const key = (citySlug || 'global').toLowerCase().trim();
  if (statsMap[key]) {
    return statsMap[key];
  }
  return statsMap.global || DEFAULT_PUBLIC_STATS.global;
}
