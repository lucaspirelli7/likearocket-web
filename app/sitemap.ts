import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/resultados", "/sobre-nosotros", "/blog", "/contacto"];
  const serviceRoutes = services.map((s) => `/${s.slug}`);
  const postRoutes = posts.filter((p) => p.published).map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...postRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
}
