/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mhs", // Replace with your subfolder
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
