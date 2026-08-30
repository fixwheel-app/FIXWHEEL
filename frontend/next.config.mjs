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
    ];
  },
};

export default nextConfig;
