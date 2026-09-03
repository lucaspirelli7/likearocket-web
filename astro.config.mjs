// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://likearocket.es',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  // Redirecciones obligatorias del brief: ninguna URL actual puede quedar en 404.
  redirects: {
    '/que-ofrecemos': '/seo-local-geo',
    '/planes': '/',
    '/about-us': '/sobre-nosotros',
    '/appointment': '/cita',
  },
});
