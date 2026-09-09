# syntax=docker/dockerfile:1
# Imagen de producción para Coolify.
# Multi-stage + Next.js `output: "standalone"` → imagen final pequeña, sin node_modules de dev.

# ---------- base ----------
FROM node:22-slim AS base
ENV NEXT_TELEMETRY_DISABLED=1

# ---------- dependencias ----------
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- build ----------
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- runtime ----------
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

# El server standalone sirve /public y /.next/static si se copian junto a server.js.
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
