import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.129"],

  images: {
    remotePatterns: [
      new URL("https://wholesaler-core-develop.web.parafacc.ir/**"),
    ],
  },
};

export default nextConfig;
