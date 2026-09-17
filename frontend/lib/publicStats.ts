import { supabase } from './supabase';
import { normalizePublicCount, normalizePublicRating } from './publicStatsNormalization';

export interface PublicStatRecord {
  city_slug: string;
  bikes_serviced: number;
  total_partners: number;
  cities_covered: number;
  average_rating: number;
  total_reviews: number;
  updated_at?: string;
}

export const DEFAULT_GLOBAL_BIKES_SERVICED = 169;

export const DEFAULT_PUBLIC_STATS: Record<string, PublicStatRecord> = {
  global: {
    city_slug: 'global',
    bikes_serviced: DEFAULT_GLOBAL_BIKES_SERVICED,
    total_partners: 38,
    cities_covered: 5,
    average_rating: 4.8,
    total_reviews: 169,
  },
  delhi: {
    city_slug: 'delhi',
    bikes_serviced: DEFAULT_GLOBAL_BIKES_SERVICED,
    total_partners: 6,
    cities_covered: 1,
    average_rating: 4.8,
    total_reviews: 22,
  },
  gurgaon: {
    city_slug: 'gurgaon',
    bikes_serviced: DEFAULT_GLOBAL_BIKES_SERVICED,
    total_partners: 12,
    cities_covered: 1,
    average_rating: 4.8,
    total_reviews: 54,
  },
  noida: {
    city_slug: 'noida',
    bikes_serviced: DEFAULT_GLOBAL_BIKES_SERVICED,
    total_partners: 5,
    cities_covered: 1,
    average_rating: 4.8,
    total_reviews: 12,
  },
  faridabad: {
    city_slug: 'faridabad',
    bikes_serviced: DEFAULT_GLOBAL_BIKES_SERVICED,
    total_partners: 3,
    cities_covered: 1,
    average_rating: 4.8,
    total_reviews: 11,
  },
  ghaziabad: {
    city_slug: 'ghaziabad',
    bikes_serviced: DEFAULT_GLOBAL_BIKES_SERVICED,
    total_partners: 0,
    cities_covered: 1,
    average_rating: 4.8,
    total_reviews: 1,
  },
};

export async function fetchAllPublicStats(): Promise<Record<string, PublicStatRecord>> {
  try {
    const { data, error } = await supabase.from('public_stats').select('*');

    if (error || !data || data.length === 0) {
      console.warn('Failed to fetch public_stats from Supabase, using fallback:', error);
      return DEFAULT_PUBLIC_STATS;
    }

    const resultMap: Record<string, PublicStatRecord> = { ...DEFAULT_PUBLIC_STATS };
    data.forEach((row: any) => {
      if (row && row.city_slug) {
        const citySlug = String(row.city_slug).toLowerCase().trim();
        if (!citySlug) return;

        const fallback = DEFAULT_PUBLIC_STATS[citySlug] || DEFAULT_PUBLIC_STATS.global;
        resultMap[citySlug] = {
          city_slug: citySlug,
          bikes_serviced: normalizePublicCount(row.bikes_serviced, fallback.bikes_serviced),
          total_partners: normalizePublicCount(row.total_partners, fallback.total_partners),
          cities_covered: normalizePublicCount(row.cities_covered, fallback.cities_covered),
          average_rating: normalizePublicRating(row.average_rating, fallback.average_rating),
          total_reviews: normalizePublicCount(row.total_reviews, fallback.total_reviews),
          updated_at: row.updated_at,
        };
      }
    });

    const globalBikesServiced = resultMap.global.bikes_serviced;
    for (const stats of Object.values(resultMap)) {
      stats.bikes_serviced = globalBikesServiced;
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
  const globalStats = statsMap.global || DEFAULT_PUBLIC_STATS.global;
  const requestedStats = statsMap[key] || DEFAULT_PUBLIC_STATS[key] || globalStats;

  return {
    ...requestedStats,
    bikes_serviced: globalStats.bikes_serviced,
  };
}
