/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ci-prefeitura/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ci-prefeitura' : '',
}

export default nextConfig
