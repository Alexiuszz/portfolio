/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler:{
    styledComponents:{
      displayName: true,
      ssr: true,
      minify: true
    }
  },images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/color/30/000000/**',
      },
    ],
  },
}

module.exports = nextConfig
