/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/manifest.json$/],
    disable: !isProd,
});
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    trailingSlash: true,
    output: 'standalone',
    distDir: 'out',
    images: {
        unoptimized: true,
        domains: [''],
        minimumCacheTTL: 60,
    },
}
if (isProd) {
  // Modify Webpack configuration for production
  nextConfig.webpack = (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      };
    }
    return config;
  };
}

module.exports = withPWA(nextConfig)
