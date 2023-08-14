/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  experimental: {
    appDir: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
