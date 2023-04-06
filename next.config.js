/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
      config.resolve.extensions.push('.tsx');
      return config;
  },
  ...nextTranslate(),
}

module.exports = nextConfig
