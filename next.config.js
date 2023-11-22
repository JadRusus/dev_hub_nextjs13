/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoos"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
  functions: {
    "api/chatgpt": {
      memory: 1024,
      maxDuration: 40,
    },
  },
};

module.exports = nextConfig;
