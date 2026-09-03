import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(["Diseño Web", "Paid Media", "SEO Local & GEO", "Social Media", "General"]),
    author: z.string().default("Equipo Like A Rocket"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
