/**
 * Datos compartidos del sitio Like A Rocket.
 * Un solo sitio del que tiran header, footer, menús y páginas de servicio.
 */

export const site = {
  name: "Like A Rocket",
  legalName: "Like A Rocket Marketing Digital, S.L.",
  domain: "likearocket.es",
  url: "https://www.likearocket.es",
  description:
    "Agencia de marketing digital orientada a resultados. Webs que venden y campañas que traen clientes.",
  phone: "+34 690 82 70 79",
  phoneHref: "tel:+34690827079",
  email: "pedro@likearocket.es",
  hours: "Lun–Vie · 9:00–18:00",
  cta: {
    primary: { label: "Reserva tu diagnóstico gratuito", href: "/contacto" },
    secondary: { label: "Cuéntanos tu caso", href: "/contacto" },
  },
} as const;

export type ServiceSlug =
  | "diseno-web"
  | "paid-media"
  | "seo-local-geo"
  | "social-media";

export interface Service {
  slug: ServiceSlug;
  name: string;
  descriptor: string;
  promise: string;
  metric: string;
}

export const services: Service[] = [
  {
    slug: "diseno-web",
    name: "Diseño Web",
    descriptor: "Webs que convierten",
    promise:
      "Una web que trabaja: se entiende, carga rápido y hace que el visitante contacte. A medida, presupuestada caso a caso.",
    metric: "Cuántos de los que entran acaban contactando.",
  },
  {
    slug: "paid-media",
    name: "Paid Media",
    descriptor: "Publicidad en Google y Meta",
    promise:
      "Clientes nuevos entrando. Montamos y gestionamos las campañas; tú ves llegar las llamadas y los formularios.",
    metric: "Coste por contacto, llamadas y formularios.",
  },
  {
    slug: "seo-local-geo",
    name: "SEO Local & GEO",
    descriptor: "Google y buscadores de IA",
    promise:
      "Que te encuentren cuando buscan lo que haces, cerca de donde estás — en Google y también en ChatGPT y Perplexity.",
    metric: "Visualizaciones y llamadas desde la ficha, posición en el mapa.",
  },
  {
    slug: "social-media",
    name: "Social Media",
    descriptor: "Redes gestionadas",
    promise:
      "Presencia constante sin que tengas que pensarlo. Nosotros creamos y publicamos; tú apruebas antes.",
    metric: "Publicaciones al mes y constancia de la presencia.",
  },
];

export function getService(slug: ServiceSlug): Service {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Servicio desconocido: ${slug}`);
  return s;
}

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Resultados", href: "/resultados" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];
