// app/sitemap.ts
import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.fixwheel.app";

type ServiceRoute = {
  slug: string;
  updatedAt: string;
};

type BlogPost = {
  slug: string;
  updatedAt: string;
};

async function getDynamicServices(): Promise<ServiceRoute[]> {
  try {
    const res = await fetch(`${process.env.INTERNAL_API_URL}/api/sitemap/services`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [
      { slug: "basic-service", updatedAt: new Date().toISOString() },
      { slug: "oil-change", updatedAt: new Date().toISOString() },
      { slug: "engine-repair", updatedAt: new Date().toISOString() },
      { slug: "tyre-replacement", updatedAt: new Date().toISOString() },
      { slug: "brake-repair", updatedAt: new Date().toISOString() },
      { slug: "battery-replacement", updatedAt: new Date().toISOString() },
      { slug: "general-washing", updatedAt: new Date().toISOString() },
      { slug: "comprehensive-service", updatedAt: new Date().toISOString() },
      { slug: "electric-scooter-repair", updatedAt: new Date().toISOString() },
      { slug: "scooty-repair", updatedAt: new Date().toISOString() },
      { slug: "sports-bike-service", updatedAt: new Date().toISOString() },
      { slug: "royal-enfield-service", updatedAt: new Date().toISOString() },
      { slug: "commuter-bike-service", updatedAt: new Date().toISOString() },
      { slug: "premium-bike-service", updatedAt: new Date().toISOString() },
      { slug: "delhi", updatedAt: new Date().toISOString() },
      { slug: "delhi/dwarka", updatedAt: new Date().toISOString() },
      { slug: "delhi/vasant-kunj", updatedAt: new Date().toISOString() },
      { slug: "delhi/kapashera", updatedAt: new Date().toISOString() },
      { slug: "delhi/mahipalpur", updatedAt: new Date().toISOString() },
      { slug: "delhi/bijwasan", updatedAt: new Date().toISOString() },
      { slug: "delhi/rangpuri", updatedAt: new Date().toISOString() },
      { slug: "delhi/samalka", updatedAt: new Date().toISOString() },
      { slug: "delhi/hari-nagar", updatedAt: new Date().toISOString() },
      { slug: "delhi/najafgarh-road", updatedAt: new Date().toISOString() },
      { slug: "delhi/palam", updatedAt: new Date().toISOString() },
      { slug: "delhi/uttam-nagar", updatedAt: new Date().toISOString() },
      { slug: "delhi/janakpuri", updatedAt: new Date().toISOString() },
      { slug: "delhi/vikaspuri", updatedAt: new Date().toISOString() },
      { slug: "delhi/dabri", updatedAt: new Date().toISOString() },
      { slug: "delhi/bindapur", updatedAt: new Date().toISOString() },
      { slug: "delhi/nawada", updatedAt: new Date().toISOString() },
      { slug: "delhi/nihal-vihar", updatedAt: new Date().toISOString() },
      { slug: "delhi/subhash-nagar", updatedAt: new Date().toISOString() },
      { slug: "delhi/tilak-nagar", updatedAt: new Date().toISOString() },
      { slug: "delhi/rajouri-garden", updatedAt: new Date().toISOString() },
      { slug: "delhi/punjabi-bagh", updatedAt: new Date().toISOString() },
      { slug: "delhi/ashok-vihar", updatedAt: new Date().toISOString() },
      { slug: "delhi/pitampura", updatedAt: new Date().toISOString() },
      { slug: "delhi/rohini", updatedAt: new Date().toISOString() },
      { slug: "delhi/shalimar-bagh", updatedAt: new Date().toISOString() },
      { slug: "delhi/paschim-vihar", updatedAt: new Date().toISOString() },
      { slug: "delhi/kirti-nagar", updatedAt: new Date().toISOString() },
      { slug: "gurgaon", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/dlf-phase-1", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/dlf-phase-2", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/dlf-phase-3", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/dlf-phase-4", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/dlf-phase-5", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sushant-lok", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/golf-course-road", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sohna-road", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/palam-vihar", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/udyog-vihar", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/dwarka-expressway", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/mg-road", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/cyber-city", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/south-city-1", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/south-city-2", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/nirvana-country", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-14", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-15", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-17", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-23", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-31", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-40", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-45", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-46", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-47", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-49", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-50", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-56", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-57", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/sector-58", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/ashok-vihar-phase-3", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/huda-city-centre", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/manesar", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/bhondsi", updatedAt: new Date().toISOString() },
      { slug: "gurgaon/badshahpur", updatedAt: new Date().toISOString() },
      { slug: "noida", updatedAt: new Date().toISOString() },
      { slug: "faridabad", updatedAt: new Date().toISOString() },
      { slug: "ghaziabad", updatedAt: new Date().toISOString() },
      { slug: "book", updatedAt: new Date().toISOString() },
    ];
  }
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${process.env.INTERNAL_API_URL}/api/sitemap/blog`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [dynamicServices, blogPosts] = await Promise.all([
    getDynamicServices(),
    getBlogPosts(),
  ]);

  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/booking`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/partner`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = dynamicServices.map((service) => {
    if (service.slug === "book") {
      return {
        url: `${BASE_URL}/book`,
        lastModified: service.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      };
    }
    const isCityRoute = ["delhi", "gurgaon", "noida", "faridabad", "ghaziabad"].includes(service.slug) || service.slug.startsWith("delhi/") || service.slug.startsWith("gurgaon/");
    return {
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: service.updatedAt,
      changeFrequency: "weekly" as const,
      priority: isCityRoute ? 0.9 : 0.8,
    };
  });

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
