/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: "",
          },
          {
              protocol: 'https',
              hostname: 'utfs.io',
              port: "",
          },
          {
              protocol: 'https',
              hostname: 'pic.superbed.cc',
              port: "",
          },
          {
              protocol: 'https',
              hostname: 'pic.imgdb.cn',
              port: "",
          },
          {
              protocol: 'https',
              hostname: 'global-public.realsee-cdn.com',
              port: ""
          },
          {
              protocol: 'https',
              hostname: 'realsee.jp',
              port: ""
          },
          {
              protocol: 'https',
              hostname: 'www.notion.so',
              port: ""
          },
          {
            protocol: 'https',
            hostname: 's3.us-west-2.amazonaws.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'global-static.realsee-cdn.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'res.insta360.com',
            port: '',
          },
      ],
  },
}

module.exports = nextConfig
