/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // Add the correct port if applicable
        pathname: "/**", // Use /** to allow all paths
      },
    ],
  },
};

module.exports = nextConfig;
