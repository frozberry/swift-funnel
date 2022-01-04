/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://app.swiftbadminton.com/",
        permanent: true,
      },
    ]
  },
}
