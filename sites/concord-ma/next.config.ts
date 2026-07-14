import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@hife/ui", "@hife/content", "@hife/town-site"],
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;

