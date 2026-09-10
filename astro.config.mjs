// astro.config.mjs
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

const paths = {
  "@components/*": "src/components/*",
  "@accordion/*": "src/components/accordion/*",
  "@buttons/*": "src/components/button/*",
  "@card/*": "src/components/card/*",
  "@client/*": "src/components/client/*",
  "@lists/*": "src/components/lists/*",
  "@modal/*": "src/components/modal/*",
  "@sections/*": "src/components/sections/*",
  "@theme/*": "src/components/theme/*",
  "@yearBadge/*": "src/components/yearBadge/*",
  "@experience/*": "src/components/sections/experience/*",
  "@education/*": "src/components/sections/education/*",
  "@navbar/*": "src/components/navbar/*",
  "@layouts/*": "src/layouts/*",
  "@types/*": "src/types/*",
  "@data/*": "src/data/*",
  "@utils/*": "src/utils/*",
  "@scripts/*": "src/scripts/*",
  "@i18n/*": "src/i18n/*",
  "@icons/*": "src/icons/*",
  "@globalStyles/*": "src/styles/global.css"
};

export default defineConfig({
  site: "https://claiderman.github.io",
  base: "/me",
  vite: {
    resolve: {
      alias: paths
    }
  },
  integrations: [astroI18next()],
});
