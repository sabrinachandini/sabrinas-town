import type { NextConfig } from "next";
import path from "path";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  transpilePackages: ["@hife/ui"],
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname, "../.."),
  },
  async redirects() {
    return [
      { source: "/towns/:slug/visit", destination: "/towns/:slug/places", permanent: true },
      { source: "/towns/:slug/visit/:id", destination: "/towns/:slug/places/:id", permanent: true },
      { source: "/towns/:slug/events", destination: "/towns/:slug/timeline", permanent: true },
      { source: "/towns/:slug/events/:id", destination: "/towns/:slug/timeline/:id", permanent: true },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  silent: true,
  sourcemaps: {
    disable: !process.env.SENTRY_AUTH_TOKEN,
  },
});
