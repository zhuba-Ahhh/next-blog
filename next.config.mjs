import createMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  optimizeFonts: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = {
        // 添加其他需要从 CDN 加载的依赖
      };
    }
    return config;
  },
  // experimental: { turbo: {} },
};

const withMDX = createMDX({});

// 修改 bundle-analyzer 配置
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(withMDX(nextConfig));
