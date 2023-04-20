/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc/**',
      },
      {
        protocol: 'https',
        hostname: 'djaccw3ms0b81.cloudfront.net',
        pathname: '/zbytecnosti/**',
      },
    ],
  },
}

module.exports = nextConfig
