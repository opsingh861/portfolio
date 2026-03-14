import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from GitHub avatars / CDN if needed later
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "opengraph.githubassets.com" },
    ],
  },
  // For Vercel deployments — no config change needed, just explicit
  experimental: {},
};

export default nextConfig;

