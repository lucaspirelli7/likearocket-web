# Like A Rocket — web (Next.js)

App del sitio de **Like A Rocket**, agencia de marketing digital. Reconstruida desde el
brief `../webbackup/brief-web-likearocket.docx`. La versión HTML estática previa queda en
`../web/` como referencia visual.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens en `app/globals.css` bajo `@theme`) + un sistema de diseño
  propio en el mismo archivo (clases `.btn`, `.card`, `.hero`, `.eyebrow`, …)
- Fuentes con `next/font` (Archivo + Inter), sin llamadas externas en runtime
- Sin dependencias extra: todo componentes propios

## Puesta en marcha

```bash
cd app
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Node ≥ 20.9 (fijado a 22 en `.nvmrc`).

## Despliegue (Coolify)

La raíz de este repo **es** la app, así que no hace falta configurar subcarpeta.

1. **Repo privado**: en Coolify → *Sources* → *Add GitHub App* e instalarla sobre
   `likearocket-web` (da webhooks de auto-deploy). Alternativa: *Deploy Key*.
2. **+ New → Application** → fuente = ese repo → rama `main`.
3. **Build Pack**: `Dockerfile` (ya incluido). Puerto expuesto: **3000**.
4. **Domain**: `www.likearocket.es` + SSL automático (Let's Encrypt).
5. Deploy. Dejar activado *Deploy on push*.

Build local del contenedor, para probar:

```bash
docker build -t likearocket-web .
docker run --rm -p 3000:3000 likearocket-web
```

`Dockerfile` = multi-stage con `output: "standalone"` (`next.config.ts`) → imagen final
pequeña que arranca con `node server.js`. Respeta `PORT` y `HOSTNAME`.

**Variables de entorno**: ninguna obligatoria hoy. Al conectar email/CRM: `RESEND_API_KEY`
etc. Las `NEXT_PUBLIC_*` deben existir en **build**, no solo en runtime.

## Estructura

```
app/
├── app/
│   ├── layout.tsx            Header + Footer + enlace accesible, metadata global, fuentes
│   ├── page.tsx              /  Inicio
│   ├── diseno-web/           /diseno-web
│   ├── paid-media/           /paid-media
│   ├── seo-local-geo/        /seo-local-geo
│   ├── social-media/         /social-media
│   ├── resultados/           /resultados
│   ├── sobre-nosotros/       /sobre-nosotros
│   ├── blog/                 /blog  + /blog/[slug]
│   ├── contacto/             /contacto  (/cita y /appointment redirigen aquí)
│   ├── aviso-legal · privacidad · cookies   (stubs, noindex)
│   ├── api/contact/route.ts  Endpoint del formulario (hoy solo valida + log)
│   ├── sitemap.ts · robots.ts
│   └── globals.css           Sistema de diseño completo
├── components/
│   ├── Header.tsx            Nav + desplegable Servicios + menú móvil
│   ├── Footer.tsx
│   ├── Reveal.tsx            Aparición al hacer scroll (IntersectionObserver)
│   ├── CtaBand.tsx · ContactForm.tsx · LegalPage.tsx
│   ├── icons.tsx
│   └── ui/                   Button, Eyebrow, Section, Steps, Callout, CaseCard,
│                             FeatureList, MediaPlaceholder, PageHero
├── lib/
│   ├── site.ts               Nav, contacto, CTA y los 4 servicios (fuente única)
│   └── blog.ts               Entradas del blog (placeholder)
├── next.config.ts            Redirecciones 301 del brief
└── public/                   logo.png, logo@2x.png, favicon.svg
```

## Cómo escalar (todo pasa por un solo sitio)

| Quiero… | Toco… |
|---|---|
| Añadir / editar un servicio | `lib/site.ts` (`services`) — aparece solo en nav, footer y home |
| Cambiar teléfono, email, CTA | `lib/site.ts` (`site`) |
| Nueva página | carpeta en `app/` con `page.tsx` (+ `metadata`) |
| Entradas de blog reales | cambiar `lib/blog.ts` por lectura de MDX en `content/blog/` o un CMS; las páginas ya iteran sobre `posts` |
| Enviar el formulario de verdad | `app/api/contact/route.ts` → email (Resend) / CRM / calendario |
| Colores, tipografía, radios | `app/globals.css` (`:root` y `@theme`) |
| Redirecciones | `next.config.ts` |

## Pendiente antes de publicar

- **Formulario**: `api/contact` solo hace log. Conectar a email / CRM / Calendly.
- **Portafolio y vídeos**: añadir trabajos aprobados cuando estén disponibles. Por ahora las páginas presentan formatos y enfoques creativos, sin huecos vacíos ni reproducción simulada.
- **Resultados**: 2 escenarios explícitamente ilustrativos en `resultados/page.tsx` y en la portada; sustituir por casos verificados antes de usarlos como prueba comercial.
- **Textos legales**: `aviso-legal`, `privacidad`, `cookies` son stubs.
- **Blog**: 4 títulos "Próximamente" sin cuerpo publicado.
- **Dominio**: `site.url` en `lib/site.ts` para OG y sitemap.
- **Analítica / cookies**: si se añade, banner de consentimiento.

## Dirección visual orbital

La portada combina titulares Archivo de gran escala, acentos editoriales en Georgia, superficies carbón y papel y rosa eléctrico. La pieza cromada original está en `public/images/orbit-chrome-transparent.png`, servida con `next/image`.

- `HomeMotion.tsx`: desplazamiento orbital con un listener pasivo y `requestAnimationFrame`.
- `Reveal.tsx`: revela contenido al entrar en el viewport; el HTML es visible sin JavaScript.
- Animaciones y desplazamiento respetan `prefers-reduced-motion`.
- Menú móvil nativo `<dialog>`: foco contenido, Escape y cierre al navegar.
- El sistema compartido aplica la dirección visual a todas las rutas; las páginas de servicios incluyen formatos y conceptos tipográficos.
- No se añadieron dependencias.

## Páginas de servicios

Las cuatro especialidades cuentan con portadas y secciones editoriales propias en `app/services.css`, aisladas bajo `.service-experience` para conservar la portada principal.

- Diseño Web: composición de navegador, selector de formatos y cronología de proyecto.
- Paid Media: recorrido de conversión, alcance del servicio y condiciones de partida.
- SEO Local & GEO: marcador de ubicación cromado propio, con fondo transparente, selector de canales y manifiesto tipográfico.
- Social Media: carteles de concepto, ritmo de publicación y flujo de aprobación.

`components/services/ServiceEditorial.tsx` contiene los elementos compartidos. `ServicePreview.tsx` limita el JavaScript a los selectores con roles de pestaña y navegación mediante flechas, Inicio y Fin. Los alcances usan `<details>` nativos y funcionan sin JavaScript. Las animaciones respetan movimiento reducido. Los conceptos y recorridos están etiquetados como ilustrativos.
