import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      "next-intl/config": "./src/i18n/request.js",
    },
  },
  webpack(config) {
    config.resolve.alias["next-intl/config"] = path.resolve(
      "./src/i18n/request.js",
    );
    return config;
  },
};

export default nextConfig;
