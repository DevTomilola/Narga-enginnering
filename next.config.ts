/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure trailingSlash is consistent
  trailingSlash: false,
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // If using static exports (optional)
  // output: 'export',
  
  // If you have images from external domains
  images: {
    domains: [],
    unoptimized: true, // Only if using static export
  },
}

module.exports = nextConfig