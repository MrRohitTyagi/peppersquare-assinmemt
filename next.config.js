/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "1337", // Add the correct port if applicable
      //   pathname: "/**", // Use /** to allow all paths
      // },
      {
        protocol: "https",
        hostname: "wise-amusement-af054a7f00.strapiapp.com",
        port: "",
        pathname: "/**",
        // search: "",
      },
    ],
  },
};

module.exports = nextConfig;
