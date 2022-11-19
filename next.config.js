/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [ "flowbite.com", "images.unsplash.com"]
  }
}

module.exports = nextConfig
