/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['m.shinsegaepoint.com', 'mycloudmembership-prd.s3.amazonaws.com', "mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com"],
  },
}

module.exports = nextConfig


// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
  
//   // disable: process.env.NODE_ENV === 'development',
//   // register: true,
//   // scope: '/app',
//   // sw: 'service-worker.js',
//   //...
// })

// module.exports = withPWA({
//   images: {
//     domains: ['m.shinsegaepoint.com','via.placeholder.com'],
//   },
// })