import path from 'path';
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Adding alias for 'src'
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
  // output: 'export', // Ensures the build creates a static site.
  // trailingSlash: true, // Optional: Ensures proper linking for static pages.
  images: {
    domains: ['readymadeui.com', 'ultraflysolutions.com', 'c.statcounter.com'], // External domains for image optimization
    // unoptimized: true, // If you want to disable image optimization (use only if necessary)
  },
};

// Apply bundle analyzer only when needed (ANALYZE environment variable)
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);


// import path from 'path';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     config.resolve.alias['@'] = path.resolve('src');
//     config.cache = false;
//     return config;
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   // output: 'export', // Ensures the build creates a static site.
//   // trailingSlash: true, // Optional: Ensures proper linking for static pages.
//   images: {
//     domains: ['readymadeui.com', 'ultraflysolutions.com','c.statcounter.com'], // Add the external domain here.
//     // unoptimized: true,
//   },
// };

// export default nextConfig;

