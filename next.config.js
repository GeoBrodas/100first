module.exports = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching: true,
    buildExcludes: [/middleware-manifest.json$/],
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};
