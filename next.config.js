const withPwa = require('next-pwa');

module.exports = withPwa({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: false,
    // skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
});
