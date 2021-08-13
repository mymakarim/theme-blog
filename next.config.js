const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: ['reporterly.net', 'wp.en.aleteia.org', 'www.etilaatroz.com']
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://aleteia.org/wp-json/wp/v2'
  }
})
