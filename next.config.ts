import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "excalidraw.com", pathname: "/og-image-3.png" },
    ],
  },
};

export default nextConfig;
