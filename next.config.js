/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    api_server: "http://"+process.env.HOST+":"+process.env.PORT+"/api",
    app_title: process.env.APP_TITLE,
    maintenance_code: process.env.MAINTENANCE_CODE
  }
}

module.exports = nextConfig
