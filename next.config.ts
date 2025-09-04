import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:router*",
          destination: "/router",
        },
      ],
    };
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeDetection: false,
  },
};

export default nextConfig;
