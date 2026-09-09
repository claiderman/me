// astro.config.mjs
import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';

export default defineConfig({
  site: 'https://claiderman.github.io',
  base: '/me',
  integrations: [astroI18next()],
});
