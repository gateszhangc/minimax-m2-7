import path from "path";
import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_OUTPUT_MODE === "export";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  output: isStaticExport ? "export" : "standalone",
  trailingSlash: isStaticExport,
  images: isStaticExport
    ? {
        unoptimized: true,
      }
    : undefined,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
