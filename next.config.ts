import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://wholesaler-core-develop.web.parafacc.ir/**"),
    ],
  },
};

export default nextConfig;
