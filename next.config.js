/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    EMAIL_EXAMPLE: process.env.EMAIL_EXAMPLE,
  },
};

module.exports = nextConfig;
