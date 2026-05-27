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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
