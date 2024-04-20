/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com", //이미지 경로 hostname
      },
    ],
  },
};

export default nextConfig;
