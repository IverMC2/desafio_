import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/desafio_", // 👈 Cambiado para que coincida con el nombre real del repo
  assetPrefix: "/desafio_/", // 👈 Cambiado también
  images: {
    unoptimized: true,
  },
};

export default nextConfig;