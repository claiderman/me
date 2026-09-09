# Project Memory — Astro i18n Portfolio

## Stack Signals

| Detected | Source |
|---|---|
| **Framework** | Astro 5.7+ with astro-i18next integration |
| **Language** | TypeScript 5.3.3 |
| **Package Manager** | npm (no pnpm/yarn/bun) |
| **Build Commands** | `npm start` / `npm run build` / `npm run preview` |
| **CI/CD** | GitHub Actions → GitHub Pages on push to `main` |
| **i18n** | locales: `es`, `en`; namespaces: `common`, `cv`, `sections` |
| **Base Path** | `/me` (all internal links must include this prefix) |

## Configuration Files

| File | Purpose |
|---|---|
| `package.json` | Dependencies and scripts |
| `astro.config.mjs` | Site config, base `/me`, i18n integration |
| `tsconfig.json` | Path aliases, strict TS mode |
| `.gitignore` | Build outputs, IDE files, local configs |
| `AGENTS.md` | Shared agent/developer guidance (this file) |

## Key Path Aliases (from tsconfig.json)

```
@components/*  → src/components/*
@sections/*   → src/components/sections/*
@buttons/*    → src/components/button/*
@i18n/*       → src/i18n/*
@utils/*      → src/utils/*
@types/*      → src/types/*
@data/*       → src/data/*
@scripts/*    → src/scripts/*
@icons/*      → src/icons/*
@layout/*     → src/layouts/*
@styles/*     → src/styles/*
```

## Important Commands

| Action | Command |
|---|---|
| Development | `npm start` |
| Build + typecheck | `npm run build` |
| Local preview | `npm run preview` |
| Astro CLI | `npm run astro` |

## SSR Safety Rule (Non-Negotiable)

**Never** use `document` or `window` in:
- Astro frontmatter (`---`)
- Template expressions
- Component props interface definitions

**Always** use `<script client:load>` for browser API access.

## CV Data Pipeline

```
src/data/cv.{en}.json  ← raw data
          ↓ getCVData(locale)
src/utils/cv.ts       ← sync loader
          ↓ t(locale)
components          ← rendered sections
```

## Deployment Flow

1. Push to `main` branch
2. GitHub Actions: `npm ci` → `npm run build`
3. Build outputs → `dist/`
4. `actions/deploy-pages@v4` deploys to `https://claiderman.github.io`
5. URLs: `https://claiderman.github.io/me/es/` and `https://claiderman.github.io/me/en/`

## Common Issues to Remember

| Issue | Fix |
|---|---|
| `astro check` errors | Run `npm run build` to see diagnostics |
| Locale not switching | Clear `localStorage.locale` and refresh |
| CV download broken | Verify `/public/locales/{locale}/cv.pdf` exists |
| Theme not persisting | Check `localStorage.theme` is set correctly |
| i18n SSR error | Await `loadTranslations()` in page frontmatter only |