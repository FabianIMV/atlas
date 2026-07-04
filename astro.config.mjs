// @ts-check
import { defineConfig } from 'astro/config';

// Deploy: GitHub Pages en https://fabianimv.github.io/atlas
// Si el repo se publica con dominio propio, cambiar `site` y quitar `base`.
export default defineConfig({
  site: 'https://fabianimv.github.io',
  base: '/atlas',
  trailingSlash: 'always',
  i18n: {
    // Español es la fuente de verdad. 'en' se agrega en Fase 4:
    // basta con añadirlo a `locales` y crear src/pages/en/.
    locales: ['es'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
