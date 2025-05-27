import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/wertetek-deploy' : '',
  assetPrefix: isProd ? '/wertetek-deploy/' : '',
};


export default nextConfig
