# Arquitectura del sitio

Fuente: *LIKEAROCKET — Rediseño de la web · Brief de contenido* (agosto 2026).

## Idea rectora

Que quien entra entienda en diez segundos que **hacemos webs y traemos clientes**, y
que acabe reservando una reunión. Tres reglas:

1. **Simpleza** — cada página, una idea.
2. **Orientada a resultado** — cada servicio dice qué número mejora.
3. **Sin precios** — en ninguna página. La web agenda reuniones, no vende.

## Menú

`Servicios ▾` (Diseño Web · Paid Media · SEO Local & GEO · Social Media) ·
Resultados · Blog · Sobre nosotros · Contacto · **[botón] Reserva tu diagnóstico gratuito**

## Páginas

| Página | Ruta | Archivo | Estado brief |
|---|---|---|---|
| Inicio | `/` | `src/pages/index.astro` | Se rehace ✅ |
| Diseño Web | `/diseno-web` | `src/pages/diseno-web.astro` | Nueva ✅ |
| Paid Media | `/paid-media` | `src/pages/paid-media.astro` | Nueva ✅ |
| SEO Local & GEO | `/seo-local-geo` | `src/pages/seo-local-geo.astro` | Nueva ✅ |
| Social Media | `/social-media` | `src/pages/social-media.astro` | Nueva ✅ |
| Resultados | `/resultados` | `src/pages/resultados.astro` | Nueva ✅ (contenido pendiente) |
| Sobre nosotros | `/sobre-nosotros` | `src/pages/sobre-nosotros.astro` | Se rehace ✅ |
| Blog | `/blog` + `/blog/[slug]` | `src/pages/blog/` | Nuevo (sin contenido previo en Odoo) — 5 artículos iniciales ✅ |
| Contacto | `/contacto` | `src/pages/contacto.astro` | Se conserva ✅ |
| Cita | `/cita` | `src/pages/cita.astro` | Se conserva ✅ |
| Legales | `/aviso-legal` `/privacidad` `/cookies` | `src/pages/*.astro` | Marcadores de posición ⚠️ |
| 404 | — | `src/pages/404.astro` | ✅ |

### Contenido por página (resumen del brief)

- **Inicio**: entrada con la idea central · 4 servicios con el mismo peso · cómo
  trabajamos (diagnóstico → propuesta → ejecución → informe mensual) · **un** caso real
  (no galería) · quiénes somos breve · cierre con la reunión.
- **Diseño Web**: el portafolio manda (se vende viéndose) · de landing a web completa
  con dominio/hosting/legales · el proceso en pasos · número: % de visitantes que contactan.
- **Paid Media**: para quién sí / para quién no · qué incluye · revisión de contenido
  trimestral (parte del servicio) · hueco para vídeos · **la inversión va a la cuenta del
  cliente** (bloque destacado) · 2–4 semanas de rodaje · número: coste por contacto.
- **SEO Local & GEO**: "tener ficha ≠ aparecer" · qué hacemos · **bloque GEO propio**
  explicado desde cero · qué no incluye · número: visualizaciones/llamadas desde la ficha.
- **Social Media**: la más corta · qué hacemos (4 puntos) · cómo se aprueba · qué no
  incluye · ejemplos en formato móvil.
- **Resultados**: plantilla que funcione con 2 y con 10 casos. Formato: sector · punto
  de partida · qué hicimos · qué pasó. Sin permiso → se publica por sector.
- **Sobre nosotros**: corta y humana. Quiénes, desde cuándo, cómo trabajamos, dónde.

## Redirecciones (brief §5)

Definidas en `astro.config.mjs` (portátil) y en `public/_redirects` (301 reales en
Netlify/Cloudflare). Ninguna URL actual puede quedar en 404.

| Actual | Destino | Tipo |
|---|---|---|
| `/que-ofrecemos` | `/seo-local-geo` | 301 |
| `/planes` | `/` | 301 |
| `/about-us` | `/sobre-nosotros` | 301 |
| `/appointment` | `/cita` | 301 |
| `/shop`, `/forum` | — se retiran del menú | — |
| `/blog`, `/contacto`, legales | se mantienen | — |

> En Vercel: replicar la tabla en `vercel.json` → `redirects`.

## Pendientes antes de lanzar

- [ ] **Sección "El equipo"**: retirada por ahora a petición del cliente. Los datos
      siguen en `src/data/site.ts` (`team`). Volver a añadir el grid en
      `/sobre-nosotros` y el bloque de la home cuando haya contenido definitivo
      (nombres, roles y, si se quiere, fotos).

- [ ] **Portafolio real** en `/diseno-web` (capturas + enlaces). Ahora son marcadores.
- [ ] **Casos de `Resultados`**: confirmar permiso de nombre con cada cliente y añadir
      métricas verificadas. Datos base en `Contacto (res.partner).xlsx` y
      `Proyecto (project.project).xlsx` (¡son datos privados, no publicar tal cual!).
      Editar `src/data/results.ts` y poner `draft: false`.
- [ ] **Textos legales** definitivos (auditoría) en `/aviso-legal` `/privacidad` `/cookies`.
      Falta NIF, domicilio social e inscripción registral de Likearocket Marketing Digital SL.
- [ ] **Formulario**: crear endpoint (Formspree/Web3Forms) y poner `PUBLIC_FORM_ENDPOINT`.
- [ ] **Agenda de cita**: Cal.com o Calendly y poner `PUBLIC_BOOKING_URL`.
- [ ] **Vídeos** de Paid Media y **capturas** de Social Media cuando existan.
- [ ] **Imagen OG** (`public/og-default.png`, 1200×630).
- [ ] **Fuentes de marca**: TT Hazelnuts y Tan Nimbus son de pago y no están en el repo.
      Ahora se usan sustitutos libres (Poppins, Bagel Fat One, Inter). Si se compran las
      licencias, ver [`docs/MARCA.md`](MARCA.md) para el cambio (solo toca `global.css`).
- [ ] **Logo en SVG**: ahora son PNG (`public/brand/`). Pedir/rehacer versión vectorial.
- [ ] Revisar datos de contacto: el brief y la web antigua usan `pedro@likearocket.es`
      y `+34 690 82 70 79`. Confirmar que siguen vigentes.
- [ ] Decidir hosting y configurar dominio + los 301 a nivel de servidor.
- [ ] **Versión de Astro**: fijada en 5.18.2. Astro 7 (con rolldown) aún falla al
      construir este proyecto y `@astrojs/sitemap` todavía no soporta la 7. `npm audit`
      marca XSS en APIs de Astro (define:vars, server islands, spread props, slots) que
      este sitio estático no expone a entrada no confiable. Revisar cuando el ecosistema
      de Astro 7 madure o salga un parche para la rama 5.x.

## Qué se descartó de la web antigua (Odoo)

Todo el posicionamiento de "Plan Piloto Automático · 197 €/mes", las tablas
comparativas de precio, "la IA gestiona el 80 %" como eje central, y las páginas
`/planes` y `/que-ofrecemos`. La IA solo se menciona en GEO y en producción de
creatividades de Paid Media (regla del brief).
