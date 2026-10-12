import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "/godwin-essoh-site",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
