/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  optimizeFonts: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;