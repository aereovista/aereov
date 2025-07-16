import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "placehold.co",
         "img.youtube.com",
      // Podés sumar más dominios si usás otras fuentes de imágenes externas
    ],
  },
  // Otros options si los tenés...
};

export default nextConfig;
