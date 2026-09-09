import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Salida mínima para el contenedor Docker (Coolify): .next/standalone con su server.js.
  output: "standalone",
  async redirects() {
    return [
      // Redirecciones del brief — ninguna URL antigua puede quedar en 404.
      { source: "/que-ofrecemos", destination: "/seo-local-geo", permanent: true },
      { source: "/planes", destination: "/", permanent: true },
      { source: "/about-us", destination: "/sobre-nosotros", permanent: true },
      { source: "/appointment", destination: "/contacto", permanent: true },
      { source: "/cita", destination: "/contacto", permanent: true },
      { source: "/shop", destination: "/", permanent: true },
      { source: "/forum", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
