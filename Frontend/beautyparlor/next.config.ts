// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        port: '',
        pathname: '/system/resources/thumbnails/**',
      },
      // You can add other domains here as well
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

module.exports = nextConfig;