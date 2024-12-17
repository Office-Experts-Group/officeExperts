/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
