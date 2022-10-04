/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    api_server: "http://"+process.env.HOST+":"+process.env.API_PORT+"/api",
    app_title: process.env.APP_TITLE
  }
}

module.exports = nextConfig
