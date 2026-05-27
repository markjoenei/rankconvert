import deployConfig from "../deploy.config.json";

const deployEnv =
  process.env.DEPLOY_ENV ?? process.env.NODE_ENV ?? "development";
const isDev = deployEnv === "development";
const basePath =
  !isDev && deployConfig.pathBase && deployConfig.path ? deployConfig.path : "";

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (/^https?:\/\//.test(src)) return src;
  const path = src.startsWith("/") ? src : `/${src}`;
  const prefixed = basePath && !path.startsWith(`${basePath}/`) ? basePath + path : path;
  return `${basePath}/_next/image?url=${encodeURIComponent(prefixed)}&w=${width}&q=${quality ?? 75}`;
}
