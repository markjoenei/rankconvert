import deployConfig from "../deploy.config.json";

const deployEnv =
  process.env.DEPLOY_ENV ?? process.env.NODE_ENV ?? "development";
const isDev = deployEnv === "development";
const basePath =
  !isDev && deployConfig.pathBase && deployConfig.path ? deployConfig.path : "";

export default function imageLoader({ src }: { src: string; width: number; quality?: number }): string {
  if (/^https?:\/\//.test(src)) return src;
  const path = src.startsWith("/") ? src : `/${src}`;
  if (basePath && path.startsWith(`${basePath}/`)) return path;
  return basePath + path;
}
