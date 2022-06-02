/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://fazzpay.herokuapp.com",
    URL_BACKEND2: "https://jsonplaceholder.typicode.com",
    URL_CLOUDINARY:
      "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449",
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
    ];
  },
};

module.exports = nextConfig;
