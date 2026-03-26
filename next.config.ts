import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ftp.goit.study" },
      { protocol: "https", hostname: "pixabay.com" },
    ],
  },
};

export default nextConfig;
