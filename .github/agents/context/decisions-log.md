# Decisions Log — Astro i18n Portfolio

## Initial Project Setup (2026-09-09)

| Decision | Rationale |
|---|---|
| **Astro 5.7+** | Latest stable, SSR-friendly, island architecture perfect for portfolio |
| **astro-i18next** | Chosen for static route generation (`/me/es/`, `/me/en/`) at build time |
| **npm** | Project already configured, no need to switch package managers |
| **Base path `/me`** | GitHub Pages deployment structure (`claiderman.github.io`) |
| **Two locales (ES/EN)** | Covers primary audiences; easy to expand later |
| **No test framework** | No existing suite; can add later (Vitest/Playwright) |
| **No linter/formatter** | Will add as follow-up; current focus on functionality |
| **`dist/` as build output** | Standard Astro static site deployment |
| **GitHub Pages** | Free, suitable for portfolio; no custom domain needed yet |

## File Structure Decisions (2026-09-09)

| Decision | Files Affected |
|---|---|
| **`/[locale]` pattern** | `src/pages/[locale]/index.astro` — auto-generates both locales |
| **CV JSON data** | `src/data/cv.json` + `src/data/cv.en.json` — sync ES/EN data |
| **Path aliases** | `tsconfig.json` with all `@aliases` — enables clean imports |
| **FloatingButtons.astro** | Client-only controls for theme/lang/color/CV |
| **`loadTranslations` awaited** | In `[locale]/index.astro` frontmatter only |

## Known Limitations (as of 2026-09-09)

| Issue | Status | Plan |
|---|---|---|
| No test suite | Low priority | Can add Vitest + Playwright later |
| No ESLint/Biome | Medium priority | Add after core functionality stable |
| Meta tags optimization | Low priority | Improve before production launch |
| Image optimization | Medium priority | Add lazy loading, optimize sizes |
| Accessibility audit | Low priority | Run Lighthouse/a11y tools |

## Decisions Pending

| Decision | Options | Recommended |
|---|---|---|
| Add linter/formatter | ESLint + Prettier, or Biome | Biome (faster, unified) |
| Add testing | Vitest + Testing Library, or Playwright | Start with Vitest unit tests |
| Expand locales | Add more languages, or keep ES/EN | Keep ES/EN for now |
| Blog section | Add blog, or keep as portfolio-only | Portfolio-only for now |
| CMS integration | Headless CMS, or static-only | Static-only for simplicity |

## Migration Notes

- If adding new locales: update `src/i18n/config.ts` `locales` array, create JSON files, update `[locale]/index.astro`
- If changing base path: update `astro.config.mjs` `base`, all internal links, GitHub Actions
- If adding build tooling: add to `package.json` scripts, create corresponding configs