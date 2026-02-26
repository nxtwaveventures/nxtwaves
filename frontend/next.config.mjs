/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/metamorphosis',
        destination: process.env.BACKEND_URL || 'http://34.135.139.239:8000/api/metamorphosis',
      },
    ]
  },
};

export default nextConfig;
