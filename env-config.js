const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? '/next-js-website' : '',
  images: {
    loader: 'default',
    path: '/images/',
  },
}