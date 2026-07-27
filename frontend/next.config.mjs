/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/services/delhi/:locality',
        destination: '/delhi/:locality',
        permanent: true,
      },
      {
        source: '/services/delhi',
        destination: '/delhi',
        permanent: true,
      },
      {
        source: '/services/noida/:locality',
        destination: '/noida/:locality',
        permanent: true,
      },
      {
        source: '/services/noida',
        destination: '/noida',
        permanent: true,
      },
      {
        source: '/services/gurgaon/:locality',
        destination: '/gurgaon/:locality',
        permanent: true,
      },
      {
        source: '/services/gurgaon',
        destination: '/gurgaon',
        permanent: true,
      },
      {
        source: '/services/faridabad/:locality',
        destination: '/faridabad/:locality',
        permanent: true,
      },
      {
        source: '/services/faridabad',
        destination: '/faridabad',
        permanent: true,
      },
      {
        source: '/services/ghaziabad/:locality',
        destination: '/ghaziabad/:locality',
        permanent: true,
      },
      {
        source: '/services/ghaziabad',
        destination: '/ghaziabad',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
