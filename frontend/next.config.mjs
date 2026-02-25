/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/metamorphosis',
        destination: process.env.BACKEND_URL || 'http://49.207.201.151:8000/api/metamorphosis',
      },
    ]
  },
};

export default nextConfig;
