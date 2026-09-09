# ECC Agent Guidance — Astro i18n Portfolio

> Shared configuration for any AI agent or developer joining this project.
> This file is version-controlled. Personal agent settings live in `.claude/` (git-ignored).

## Quick Start

```bash
npm start          # astro dev (port 4321)
npm run build      # astro check && astro build
npm run preview    # local production preview
```

## Project Overview

**Type**: Multilingual Static Portfolio Website (ES/EN)
**Framework**: Astro 5.7+ with `astro-i18next`
**Deployment**: GitHub Pages (base path `/me`)
**Package Manager**: npm

## Stack

| Component | Version | Notes |
|---|---|---|
| Astro | ^5.7.13 | Static site generator, island architecture |
| TypeScript | 5.3.3 | Strict mode, path aliases enabled |
| i18next | ^26.3.6 | Server + client i18n |
| astro-i18next | ^1.0.0-beta.21 | Astro integration |
| Vite | ^6.3.5 | Build tool (bundled with Astro) |

## Commands

| Task | Command |
|---|---|
| Dev server | `npm start` |
| Build + typecheck | `npm run build` |
| Preview build | `npm run preview` |
| Astro CLI | `npm run astro` |

## Path Aliases (tsconfig.json)

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

## Conventions

1. **SSR-safe**: No `document`/`window` in frontmatter or template; use `<script client:load>`.
2. **i18n**: `loadTranslations(locale)` must be `await`ed in `[locale]/index.astro` frontmatter.
3. **Base path**: All internal links must include `/me`.
4. **CV data**: `src/data/cv.{json,en.json}` → loaded via `src/utils/cv.ts`.

## CI/CD

GitHub Actions: `.github/workflows/deploy.yml` deploys to GitHub Pages on push to `main`.

## Key Files Reference

- `src/i18n/config.ts:1` — i18next init, static imports for all locale JSON
- `src/i18n/utils.ts:1` — `loadTranslations`, locale path helpers
- `src/pages/index.astro:1` — locale detection redirector
- `src/pages/[locale]/index.astro:1` — main page per locale
- `src/layouts/Layout.astro:1` — root HTML template
- `src/components/button/FloatingButtons.astro:1` — theme/lang/color/CV controls
- `src/utils/cv.ts:1` — CV data loader (sync)