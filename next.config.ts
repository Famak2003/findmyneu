import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'punica.app',
        port: '', // leave empty unless there's a specific port
        pathname: '/**', // allow all image paths
      },
      {
        protocol: 'https',
        hostname: 'punicalive.app',
        port: '', // leave empty unless there's a specific port
        pathname: '/**', // allow all image paths
      },
    ],
  }
};
export default nextConfig;
