import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    qualities: [70, 75],
  },
};

export default nextConfig;
