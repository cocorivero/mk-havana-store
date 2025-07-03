import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com', 'res.cloudinary.com']
  },
};

export default nextConfig;
