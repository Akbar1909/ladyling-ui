/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
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
  async redirects() {
    return [
      {
        source: "/",
        destination: "/challenges",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
