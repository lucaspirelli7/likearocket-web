export type Service = {
  slug: string;
  name: string;
  descriptor: string;
  promise: string;
  metric: string;
  accent: "magenta" | "cyan" | "lime";
  icon: "browser" | "target" | "map" | "chat";
};

export const services: Service[] = [
  {
    slug: "diseno-web",
    name: "Diseño Web",
    descriptor: "Webs que convierten",
    promise:
      "Una web que trabaja: se entiende, carga rápido y hace que el visitante contacte. A medida, presupuestada caso a caso.",
    metric: "Cuántos de los que entran acaban contactando.",
    accent: "magenta",
    icon: "browser",
  },
  {
    slug: "paid-media",
    name: "Paid Media",
    descriptor: "Publicidad en Google y Meta",
    promise:
      "Clientes nuevos entrando. Montamos y gestionamos las campañas; tú ves llegar las llamadas y los formularios.",
    metric: "Coste por contacto, llamadas y formularios.",
    accent: "cyan",
    icon: "target",
  },
  {
    slug: "seo-local-geo",
    name: "SEO Local & GEO",
    descriptor: "Google y buscadores de IA",
    promise:
      "Que te encuentren cuando buscan lo que haces, cerca de donde estás — en Google y también en ChatGPT y Perplexity.",
    metric: "Visualizaciones y llamadas desde la ficha, posición en el mapa.",
    accent: "lime",
    icon: "map",
  },
  {
    slug: "social-media",
    name: "Social Media",
    descriptor: "Redes gestionadas",
    promise:
      "Presencia constante sin que tengas que pensarlo. Nosotros creamos y publicamos; tú apruebas antes.",
    metric: "Publicaciones al mes y coherencia de marca.",
    accent: "magenta",
    icon: "chat",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
