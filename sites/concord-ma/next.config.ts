import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@hife/ui", "@hife/content"],
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
