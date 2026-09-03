# Like A Rocket — sitio web

Rediseño de [likearocket.es](https://likearocket.es) según el *Brief de contenido* de agosto 2026.
Migración de Odoo a un sitio estático (Astro + Tailwind).

## Stack

| Pieza | Elección | Por qué |
|---|---|---|
| Framework | [Astro 5](https://astro.build) (output estático) | Velocidad y SEO, requisitos explícitos del brief |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com) (`@tailwindcss/vite`) | Tokens de marca en `src/styles/global.css` |
| Contenido | Content Collections (Markdown) | El blog son `.md` en `src/content/blog/` |
| Tipografía | Space Grotesk + Inter (`@fontsource-variable`, self-hosted) | Sin llamadas a Google Fonts |
| Sitemap | `@astrojs/sitemap` | `/sitemap-index.xml` |
| Deploy | Estático — Netlify / Vercel / Cloudflare Pages | `npm run build` → `dist/` |

## Puesta en marcha

```bash
npm install
cp .env.example .env   # opcional: formulario y agenda de citas
npm run dev            # http://localhost:4321
```

Otros comandos:

```bash
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

Node ≥ 22.12 (ver `.nvmrc`).

## Estructura

```
src/
  data/            site.ts (nav, contacto, equipo) · services.ts · results.ts
  layouts/         BaseLayout · ServiceLayout · LegalLayout
  components/      Header · Footer · CtaSection · ServiceCard · ContactForm · ...
  pages/           una página por ruta del brief (9) + legales + 404
  content/blog/    artículos en Markdown
  content.config.ts
public/             favicon, robots.txt, _redirects
```

## Contenido y decisiones

Ver [`docs/ARQUITECTURA.md`](docs/ARQUITECTURA.md): mapa de páginas, contenido por
página, redirecciones y **lista de pendientes antes de lanzar** (portafolio real,
casos de `Resultados` con permiso, textos legales, endpoint del formulario, agenda).

## Convenciones

- Sin precios en ninguna página (regla del brief).
- Una sola llamada a la acción principal: **Reserva tu diagnóstico gratuito** (`/cita`).
  Secundaria: **Cuéntanos tu caso** (`/contacto`).
- Los textos de marca viven en `src/data/`, no incrustados en los componentes.
- `es` es el único idioma por ahora.
