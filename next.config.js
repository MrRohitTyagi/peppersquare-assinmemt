/** @type {import('next').NextConfig} */
const nextConfig = {
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
