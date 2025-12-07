/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
  domains: [
      "www.scotsman.com",
      "static.toiimg.com",
      "i.ytimg.com",
      "ichef.bbci.co.uk",
      "assets.bwbx.io",
      "cdn.cnn.com",
      "images.hindustantimes.com",
      "img.etimg.com",
      "pbs.twimg.com",
      "newsdata.io",
      "picsum.photos",
      "res.cloudinary.com",
      "image.cns.com.cn", "example.com"
    ],
},
eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
