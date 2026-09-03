// -----------------------------------------------------------------------------
// Resultados / casos.
//
// IMPORTANTE (del brief): "Cuando no haya permiso para dar el nombre, se publica
// por sector." Y la web NO lleva testimonios de relleno ni métricas inventadas.
//
// Los casos de abajo están redactados SIN cifras de resultado porque todavía no
// tenemos datos verificados ni permiso de publicación. Antes de lanzar:
//   1. Confirmar con cada cliente si podemos usar su nombre.
//   2. Rellenar `outcome` con métricas reales (o dejar el caso por sector).
//   3. Marcar `draft: false`.
// -----------------------------------------------------------------------------

export type Result = {
  id: string;
  client: string | null; // null => se publica sólo por sector
  sector: string;
  services: string[];
  headline: string;
  start: string; // punto de partida
  work: string; // qué hicimos
  outcome: string; // qué pasó — SIN inventar; cualitativo hasta tener datos
  featured?: boolean;
  draft: boolean;
};

export const results: Result[] = [
  {
    id: "asesoria-local",
    client: null,
    sector: "Servicios profesionales · Asesoría",
    services: ["Diseño Web", "SEO Local & GEO"],
    headline: "Una asesoría que no aparecía al buscar su propio pueblo",
    start:
      "Tenían ficha de Google a medias y una web antigua que no explicaba qué servicios ofrecían. La mayoría de contactos llegaban por el boca a boca.",
    work:
      "Web nueva orientada a captar consultas, ficha de Google completada y optimizada, reseñas activadas y datos de contacto coherentes en directorios.",
    outcome:
      "Presencia estable en las búsquedas locales de su comarca y un canal de contacto claro desde la web y la ficha. (Métricas concretas pendientes de cierre con el cliente.)",
    featured: true,
    draft: true,
  },
  {
    id: "hosteleria-marca",
    client: null,
    sector: "Hostelería y restauración",
    services: ["Social Media", "SEO Local & GEO"],
    headline: "Un local con buena comida y redes paradas",
    start:
      "Instagram sin publicar desde hacía meses y una ficha de Google con fotos desactualizadas.",
    work:
      "Calendario de 4–6 publicaciones al mes con aprobación previa, puesta al día de la ficha y coherencia de horarios y carta en los directorios.",
    outcome:
      "Actividad constante en redes y ficha, con contenido aprobado por el cliente antes de cada publicación. (Métricas concretas pendientes.)",
    draft: true,
  },
];

export const getFeaturedResult = () =>
  results.find((r) => r.featured) ?? results[0];

export const publishableResults = () => results; // en producción: results.filter(r => !r.draft)
