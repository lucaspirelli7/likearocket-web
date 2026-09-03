# Sistema de marca — implementación

Referencia visual: [`branding.png`](branding.png) (manual de marca original).
Todo está tokenizado en [`src/styles/global.css`](../src/styles/global.css) — no metas
colores ni fuentes a mano en los componentes.

## Color

| Rol | Hex | Token Tailwind |
|---|---|---|
| Magenta (primario, CTA) | `#F20587` | `magenta-500` (400/600 para hover y tintes) |
| Turquesa (acento) | `#0FC2C0` | `cyan-500` |
| Lima (acento, sobre fondo oscuro) | `#DBF227` | `lime-500` — para **texto sobre blanco usa `lime-600`** |
| Púrpura (acento) | `#A054F6` | `purple-500` |
| Tinta (texto y secciones "dark") | `#190A33` | `ink` |
| Lavanda (fondo neutro) | `#EFEAFB` | `cloud` |

Las secciones oscuras usan `bg-ink` (púrpura casi negro) + glows de color, no negro ni azul marino.

## Tipografía

El manual usa **TT Hazelnuts** y **Tan Nimbus**, ambas de pago y **no incluidas** en el repo.
Sustitutos libres self-hosted (`@fontsource`), fáciles de cambiar en `global.css`:

| Manual | Sustituto libre | Uso | Variable |
|---|---|---|---|
| TT Hazelnuts | **Poppins** (700/800) | Títulos y UI | `--font-display` |
| Tan Nimbus | **Bagel Fat One** | Acento "groovy" puntual (404, nº de pasos, destacados) | `--font-groovy` / clase `.groovy` |
| — | **Inter** | Cuerpo de texto largo (legibilidad; el brief pide "móvil primero") | `--font-sans` |

**Antes de lanzar:** si se compran las licencias de TT Hazelnuts y Tan Nimbus, colocar los
`.woff2` en `src/fonts/`, declararlos con `@font-face` en `global.css` y apuntar
`--font-display` / `--font-groovy` a ellas. El resto del sitio no cambia.

## Motivos

- **Arco / lápida** (como las muestras de color del manual): clases `.arch` y `.arch-sm`
  — se usan en el portafolio de Diseño Web y en los avatares del equipo.
- **Color-blocking**: cabeceras de sección con las 4 marcas rotando (ver `Steps.astro`).
- Botones tipo pill, radios generosos, micro-elevación en hover.

## Movimiento

Todo en `global.css` (sección "MOVIMIENTO") y en 3 componentes. **Todo se desactiva
con `prefers-reduced-motion: reduce`.**

| Pieza | Cómo se usa |
|---|---|
| Transición entre páginas | `<ClientRouter />` en `BaseLayout` (View Transitions API) |
| Revelado al scroll | `<Reveal>` (`variant`: up/left/right/scale, `delay` en ms) + observer global en `BaseLayout`. Sólo oculta si hay JS (`html.reveal-ready`) y con failsafe a 2,5 s |
| Banda en movimiento | `<Marquee items={[...]} reverse?>` |
| Blobs / cohete | `.animate-blob`, `.animate-float`, `.animate-float-slow`, `<RocketArt>` |
| Texto visual | `.text-gradient` (degradado animado), `.groovy` (Bagel Fat One), `.text-stroke` |
| Micro-interacción | `.link-arrow` (flecha), `.card-hover` (elevación), `.pop-in` |

Regla: el movimiento acompaña, no distrae. Entradas rápidas (0,5–0,6 s), nada que
haga esperar al usuario, una sola animación "en bucle" visible por zona.

## Logo

`public/brand/`:
- `logo.png` — magenta + cohete turquesa (fondos claros) → cabecera
- `logo-white.png` — texto blanco + cohete turquesa (fondos oscuros/color) → pie
- `logo-mono-white.png` — todo blanco (sobre foto o color saturado)
- `rocket.png` / `favicon.svg` — isotipo (cohete solo) → favicon y apple-touch-icon

Fuente original de los PNG: carpeta del proyecto (`Like-a-Rocket-logo*.png`, `favicon.png`).
Idealmente sustituir por SVG vectorial cuando esté disponible.
