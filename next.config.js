/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io']
  },
  async redirects() {
    return [
      {
        source: '/_error',
        destination: '/',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
