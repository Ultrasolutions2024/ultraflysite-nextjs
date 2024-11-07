import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config) => {
  //   config.resolve.alias['@'] = path.resolve('src');
  //   return config;
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export', // Ensures the build creates a static site.
  trailingSlash: true, // Optional: Ensures proper linking for static pages.
  images: {
    domains: ['readymadeui.com',"https://ultraflysolutions.com/"], // Add the external domain here.
    unoptimized:true
  },
};

export default nextConfig;
