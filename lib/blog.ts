/**
 * Entradas del blog.
 *
 * Placeholder por ahora (el brief marca el blog como "se conserva").
 * Para escalar: sustituir este array por lectura de archivos MDX en
 * content/blog/ o por un CMS (Sanity, Notion, etc.) sin tocar las páginas.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string | null; // ISO; null = "Próximamente"
  published: boolean;
  /** Cuerpo en bloques simples para no depender de un parser de Markdown todavía. */
  body?: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
  >;
}

export const posts: BlogPost[] = [
  {
    slug: "que-es-geo",
    title: "Qué es GEO y por qué tu negocio ya debería aparecer en ChatGPT",
    excerpt:
      "Cómo funcionan las respuestas de la IA y qué se puede hacer para que citen tu negocio.",
    date: null,
    published: false,
    body: [
      {
        type: "p",
        text: "Cada vez más gente no abre Google: le pregunta a ChatGPT o a Perplexity. GEO (Generative Engine Optimization) es el trabajo de conseguir que, cuando eso pasa, el nombre que aparezca sea el tuyo.",
      },
      { type: "h2", text: "En qué se parece y en qué se diferencia del SEO" },
      {
        type: "p",
        text: "Comparten base —datos coherentes, buenas reseñas, presencia en fuentes fiables— pero la IA no muestra diez enlaces: da una respuesta. O estás en ella o no existes.",
      },
      { type: "h2", text: "Qué se puede hacer hoy" },
      {
        type: "ul",
        items: [
          "Estructurar la información del negocio para que la IA la entienda y la cite.",
          "Reforzar las fuentes que estos buscadores usan para responder.",
          "Vigilar qué se dice de ti y de tu competencia cuando se les pregunta.",
        ],
      },
    ],
  },
  {
    slug: "metrica-web-contactos",
    title: "La única métrica que mira tu web: cuántos visitantes contactan",
    excerpt:
      "Por qué las visitas no dicen nada y cómo medir lo que de verdad importa.",
    date: null,
    published: false,
  },
  {
    slug: "cuanto-tarda-google-ads",
    title: "Cuánto tarda la publicidad en Google en dar resultados",
    excerpt:
      "Qué esperar en las primeras semanas y cómo saber si va por buen camino.",
    date: null,
    published: false,
  },
  {
    slug: "ficha-google-no-es-aparecer",
    title: "Tener ficha de Google no es lo mismo que aparecer",
    excerpt:
      "Los ajustes que separan una ficha invisible de una que trae llamadas.",
    date: null,
    published: false,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
