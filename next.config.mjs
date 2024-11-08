import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('src');
    config.cache = false;
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // Ensures the build creates a static site.
  trailingSlash: true, // Optional: Ensures proper linking for static pages.
  images: {
    domains: ['readymadeui.com', 'ultraflysolutions.com'], // Add the external domain here.
    unoptimized: true,
  },
};

export default nextConfig;
