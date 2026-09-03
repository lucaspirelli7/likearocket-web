export const site = {
  name: "Like A Rocket",
  domain: "likearocket.es",
  legalName: "Likearocket Marketing Digital SL",
  tagline: "Webs que venden y campañas que traen clientes",
  description:
    "Agencia de marketing digital: diseño web que convierte, publicidad en Google y Meta, SEO local & GEO y gestión de redes. Reserva tu diagnóstico gratuito.",
  phone: "+34 690 82 70 79",
  phoneHref: "+34690827079",
  whatsapp: "https://wa.me/34690827079",
  email: "pedro@likearocket.es",
  hours: "Lunes a viernes, 9:00–18:00",
  city: "España",
} as const;

export const primaryCta = {
  label: "Reserva tu diagnóstico gratuito",
  shortLabel: "Diagnóstico gratuito", // versión compacta (cabecera)
  href: "/cita",
} as const;

export const secondaryCta = {
  label: "Cuéntanos tu caso",
  href: "/contacto",
} as const;

export const nav = [
  {
    label: "Servicios",
    href: "/diseno-web",
    children: [
      { label: "Diseño Web", href: "/diseno-web" },
      { label: "Paid Media", href: "/paid-media" },
      { label: "SEO Local & GEO", href: "/seo-local-geo" },
      { label: "Social Media", href: "/social-media" },
    ],
  },
  { label: "Resultados", href: "/resultados" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

// Sección "El equipo": retirada de la web por ahora, se añadirá más adelante
// (en /sobre-nosotros y en el bloque "Quiénes somos" de la home). Estos datos
// quedan aquí listos para volver a mostrarla.
export const team = [
  { name: "Pedro de Gabriel", role: "CEO · Estrategia" },
  { name: "Aitor Mariscal", role: "Dirección de operaciones y clientes" },
  { name: "Sandra Sales", role: "Dirección técnica · Desarrollo web" },
  { name: "Lucas A. Pirell", role: "Marketing y desarrollo web" },
] as const;

export const processSteps = [
  {
    title: "Diagnóstico",
    body: "Analizamos tu presencia actual, tu sector y a dónde quieres llegar. Gratuito y sin compromiso.",
  },
  {
    title: "Propuesta",
    body: "Un plan concreto: qué hacemos, en qué orden y qué número esperamos mover. Presupuesto caso a caso.",
  },
  {
    title: "Ejecución",
    body: "Montamos y ponemos en marcha. Tú apruebas lo que sale a la calle antes de publicarse.",
  },
  {
    title: "Informe mensual",
    body: "Cada mes ves qué se hizo y cómo evolucionan las métricas que importan. Sin jerga.",
  },
] as const;
