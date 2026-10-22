import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML/CSS/JS to `out/`,
// which is uploaded to public_html on the Crazy Domains cPanel hosting.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
