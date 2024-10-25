/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  basePath: "/portfolio",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
