module.exports = {
  images: {
    formats: ["image/webp"],
    domains: ["praditnet-cdn.rayriffy.com"],
  },
  async headers() {
    return [
      {
        source: "/_ipx/:path*",
        headers: [
          {
            key: "cache-control",
            value:
              "public, max-age=2592000",
          },
        ],
      },
    ];
  },
};
