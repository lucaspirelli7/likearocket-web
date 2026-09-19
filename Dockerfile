# syntax=docker/dockerfile:1
# Imagen de producción para Coolify (sitio estático Astro servido con nginx).
# La construye GitHub Actions (ver .github/workflows/build.yml) y Coolify solo la descarga:
# el build de Node nunca se ejecuta en el VPS.

# ---------- dependencias ----------
FROM node:22-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- build ----------
FROM node:22-slim AS build
WORKDIR /app
# Las variables PUBLIC_* de Astro se incrustan en el HTML al compilar: hay que pasarlas
# como build-arg (en CI salen de las "Variables" del repo). Vacías => el formulario cae a mailto.
ARG PUBLIC_FORM_ENDPOINT=""
ARG PUBLIC_BOOKING_URL=""
ENV PUBLIC_FORM_ENDPOINT=$PUBLIC_FORM_ENDPOINT \
    PUBLIC_BOOKING_URL=$PUBLIC_BOOKING_URL \
    ASTRO_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- runtime ----------
FROM nginx:1.27-alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
# Puerto 3000: el mismo que usaba la imagen anterior, para no tocar la config de Coolify.
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null || exit 1
