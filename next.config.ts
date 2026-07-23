import type { NextConfig } from "next";
import deployConfig from "./deploy.config.json";

const deployEnv =
  process.env.DEPLOY_ENV ?? process.env.NODE_ENV ?? "development";

const isDev = deployEnv === "development";

const basePath =
  !isDev && deployConfig.pathBase && deployConfig.path ? deployConfig.path : "";

const nextConfig: NextConfig = {

  async redirects() {
    return [
      {
        source:
          "/2026/03/27/why-melbourne-businesses-are-turning-to-seo-for-real-growth",
        destination:
          "/blog/why-melbourne-businesses-are-turning-to-seo-for-real-growth",
        permanent: true,
      },
      {
        source: "/shopify-developers",
        destination: "/shopify",
        permanent: true,
      },
      {
        source: "/social-media-marketing-2",
        destination: "/social-media",
        permanent: true,
      },
      {
        source: "/social-media-marketing",
        destination: "/cro",
        permanent: true,
      },
    ];
  },

  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,

  trailingSlash: true,
  compress: true,
  poweredByHeader: false,

  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rankconvert.com.au",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cms.rankconvert.com.au",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
