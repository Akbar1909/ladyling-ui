/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
  images: {
    remotePatterns: [
      {
        pathname: "*",
        protocol: "https",
        hostname: "*",
      },
      {
        pathname: "*",
        hostname: "*",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
