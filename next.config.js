/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
}

module.exports = nextConfig
