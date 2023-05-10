/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler:{
    styledComponents:{
      displayName: true,
      ssr: true,
      minify: true
    }
  }
}

module.exports = nextConfig
