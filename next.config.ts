import type { NextConfig } from "next";
import deployConfig from "./deploy.config.json";

const deployEnv =
  process.env.DEPLOY_ENV ?? process.env.NODE_ENV ?? "development";

const isDev = deployEnv === "development";

const basePath =
  !isDev && deployConfig.pathBase && deployConfig.path ? deployConfig.path : "";

const nextConfig: NextConfig = {

  output: "standalone",

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
    ],
  },
};

export default nextConfig;
