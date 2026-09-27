import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "Ph";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGitHubPages ? { basePath: `/${repository}`, assetPrefix: `/${repository}/` } : {}),
};

export default nextConfig;
