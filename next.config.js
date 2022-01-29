const withPwa = require('next-pwa');

module.exports = withPwa({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: false,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /\.(?:json|xml|csv)$/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'static-data-assets',
          expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
        },
      },
    ],

    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
});
