/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        pathname: '/docs/device-mockups/**',
      },
    ],
    domains: [
      "assets.aceternity.com",
      "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png",
      "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png",
    ], // Add external domains here
  },
};

export default nextConfig;
