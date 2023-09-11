/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/resume/',
  basePath: '/resume',
  output: 'export',
  trailingSlash: true,
  webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
}

module.exports = nextConfig
