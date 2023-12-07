/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    EMAIL_NODEMAILER: process.env.EMAIL_NODEMAILER,
    PASSWORD_NODEMAILER: process.env.PASSWORD_NODEMAILER,
  },
};

module.exports = nextConfig;
