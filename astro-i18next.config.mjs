/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  namespaces: ["common", "cv", "sections"],
  defaultNamespace: "common",
  load: ["server", "client"],
  showDefaultLocale: true,
  resourcesBasePath: "/locales",
  i18nextServer: {
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
    returnEmptyString: false,
  },
  i18nextClient: {
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
    returnEmptyString: false,
  },
};
