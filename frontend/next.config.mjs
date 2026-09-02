/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // 301 Permanent Redirects for removed/deprecated service URLs
      {
        source: '/services/carburetor-cleaning',
        destination: '/services/engine-repair',
        permanent: true,
      },
      {
        source: '/services/carburetor-cleaning/:path*',
        destination: '/services/engine-repair',
        permanent: true,
      },
      {
        source: '/services/obd-scanner',
        destination: '/services/electric-scooter-repair',
        permanent: true,
      },
      {
        source: '/services/obd-scanner/:path*',
        destination: '/services/electric-scooter-repair',
        permanent: true,
      },
      {
        source: '/services/disc-replacement',
        destination: '/services/brake-repair',
        permanent: true,
      },
      {
        source: '/services/disc-replacement/:path*',
        destination: '/services/brake-repair',
        permanent: true,
      },
      {
        source: '/services/chain-sprocket',
        destination: '/services/basic-service',
        permanent: true,
      },
      {
        source: '/services/chain-sprocket/:path*',
        destination: '/services/basic-service',
        permanent: true,
      },
      {
        source: '/services/pick-drop',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/pick-drop/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/pick-and-drop',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/pick-and-drop/:path*',
        destination: '/services',
        permanent: true,
      },
      // 301 Permanent Redirect for all deprecated partner city & locality sub-pages to main /partner
      {
        source: '/partner/:path+',
        destination: '/partner',
        permanent: true,
      },
      // 301 Permanent Redirect for all deprecated book brand sub-pages (e.g. /book/hero) to /book
      {
        source: '/book/:brand((?!checkout$).*)',
        destination: '/book',
        permanent: true,
      },
      // 301 Permanent Redirects for sports bike service pages (moved to root /sports-bike-service, locality pages removed)
      {
        source: '/services/sports-bike-service',
        destination: '/sports-bike-service',
        permanent: true,
      },
      {
        source: '/services/sports-bike-service/:city(gurgaon|delhi|noida|ghaziabad|faridabad)',
        destination: '/sports-bike-service/:city',
        permanent: true,
      },
      {
        source: '/services/sports-bike-service/:city/:locality+',
        destination: '/sports-bike-service/:city',
        permanent: true,
      },
      {
        source: '/sports-bike-service/:city/:locality+',
        destination: '/sports-bike-service/:city',
        permanent: true,
      },
      {
        source: '/services/sports-bike-service/:path*',
        destination: '/sports-bike-service',
        permanent: true,
      },
      // 301 Permanent Redirects for electric scooter repair pages (moved to root /electric-scooter-repair, locality pages removed)
      {
        source: '/services/electric-scooter-repair',
        destination: '/electric-scooter-repair',
        permanent: true,
      },
      {
        source: '/services/electric-scooter-repair/:city(gurgaon|delhi|noida|ghaziabad|faridabad)',
        destination: '/electric-scooter-repair/:city',
        permanent: true,
      },
      {
        source: '/services/electric-scooter-repair/:city/:locality+',
        destination: '/electric-scooter-repair/:city',
        permanent: true,
      },
      {
        source: '/electric-scooter-repair/:city/:locality+',
        destination: '/electric-scooter-repair/:city',
        permanent: true,
      },
      {
        source: '/services/electric-scooter-repair/:path*',
        destination: '/electric-scooter-repair',
        permanent: true,
      },
      // 301 Permanent Redirects for Royal Enfield service pages (moved to root /royal-enfield-service, locality pages removed)
      {
        source: '/services/royal-enfield-service',
        destination: '/royal-enfield-service',
        permanent: true,
      },
      {
        source: '/services/royal-enfield-service/:city(gurgaon|delhi|noida|ghaziabad|faridabad)',
        destination: '/royal-enfield-service/:city',
        permanent: true,
      },
      {
        source: '/services/royal-enfield-service/:city/:locality+',
        destination: '/royal-enfield-service/:city',
        permanent: true,
      },
      {
        source: '/royal-enfield-service/:city/:locality+',
        destination: '/royal-enfield-service/:city',
        permanent: true,
      },
      {
        source: '/services/royal-enfield-service/:path*',
        destination: '/royal-enfield-service',
        permanent: true,
      },
      // 301 Permanent Redirects for Commuter Bike service pages (moved to root /commuter-bike-service, locality pages removed)
      {
        source: '/services/commuter-bike-service',
        destination: '/commuter-bike-service',
        permanent: true,
      },
      {
        source: '/services/commuter-bike-service/:city(gurgaon|delhi|noida|ghaziabad|faridabad)',
        destination: '/commuter-bike-service/:city',
        permanent: true,
      },
      {
        source: '/services/commuter-bike-service/:city/:locality+',
        destination: '/commuter-bike-service/:city',
        permanent: true,
      },
      {
        source: '/commuter-bike-service/:city/:locality+',
        destination: '/commuter-bike-service/:city',
        permanent: true,
      },
      {
        source: '/services/commuter-bike-service/:path*',
        destination: '/commuter-bike-service',
        permanent: true,
      },
      // 301 Permanent Redirects for Scooty repair pages (moved to root /scooty-repair, locality pages removed)
      {
        source: '/services/scooty-repair',
        destination: '/scooty-repair',
        permanent: true,
      },
      {
        source: '/services/scooty-repair/:city(gurgaon|delhi|noida|ghaziabad|faridabad)',
        destination: '/scooty-repair/:city',
        permanent: true,
      },
      {
        source: '/services/scooty-repair/:city/:locality+',
        destination: '/scooty-repair/:city',
        permanent: true,
      },
      {
        source: '/scooty-repair/:city/:locality+',
        destination: '/scooty-repair/:city',
        permanent: true,
      },
      {
        source: '/services/scooty-repair/:path*',
        destination: '/scooty-repair',
        permanent: true,
      },
      // 301 Permanent Redirects for Premium Bike service pages (moved to root /premium-bike-service, locality pages removed)
      {
        source: '/services/premium-bike-service',
        destination: '/premium-bike-service',
        permanent: true,
      },
      {
        source: '/services/premium-bike-service/:city(gurgaon|delhi|noida|ghaziabad|faridabad)',
        destination: '/premium-bike-service/:city',
        permanent: true,
      },
      {
        source: '/services/premium-bike-service/:city/:locality+',
        destination: '/premium-bike-service/:city',
        permanent: true,
      },
      {
        source: '/premium-bike-service/:city/:locality+',
        destination: '/premium-bike-service/:city',
        permanent: true,
      },
      {
        source: '/services/premium-bike-service/:path*',
        destination: '/premium-bike-service',
        permanent: true,
      },
      // 301 Permanent Redirect for Basic service locality pages (locality pages removed, city pages kept under /services/basic-service/:city)
      {
        source: '/services/basic-service/:city/:locality+',
        destination: '/services/basic-service/:city',
        permanent: true,
      },
      // 301 Permanent Redirect for Oil Change locality pages (locality pages removed, city pages kept under /services/oil-change/:city)
      {
        source: '/services/oil-change/:city/:locality+',
        destination: '/services/oil-change/:city',
        permanent: true,
      },
      // 301 Permanent Redirect for Comprehensive Service locality pages (locality pages removed, city pages kept under /services/comprehensive-service/:city)
      {
        source: '/services/comprehensive-service/:city/:locality+',
        destination: '/services/comprehensive-service/:city',
        permanent: true,
      },
      // 301 Permanent Redirect for Engine Repair locality pages (locality pages removed, city pages kept under /services/engine-repair/:city)
      {
        source: '/services/engine-repair/:city/:locality+',
        destination: '/services/engine-repair/:city',
        permanent: true,
      },
      // 301 Permanent Redirect for Battery Replacement locality pages (locality pages removed, city pages kept under /services/battery-replacement/:city)
      {
        source: '/services/battery-replacement/:city/:locality+',
        destination: '/services/battery-replacement/:city',
        permanent: true,
      },
      // 301 Permanent Redirect for Brake Repair locality pages (locality pages removed, city pages kept under /services/brake-repair/:city)
      {
        source: '/services/brake-repair/:city/:locality+',
        destination: '/services/brake-repair/:city',
        permanent: true,
      },
      // 301 Permanent Redirect for Tyre Replacement locality pages (locality pages removed, city pages kept under /services/tyre-replacement/:city)
      {
        source: '/services/tyre-replacement/:city/:locality+',
        destination: '/services/tyre-replacement/:city',
        permanent: true,
      },
      // 301 Permanent Redirect for General Washing locality pages (locality pages removed, city pages kept under /services/general-washing/:city)
      {
        source: '/services/general-washing/:city/:locality+',
        destination: '/services/general-washing/:city',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
