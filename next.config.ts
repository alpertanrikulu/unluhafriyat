import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/tr",
        permanent: true, // Kalıcı yönlendirme (SEO için)
      },
    ];
  },
};

export default nextConfig;
