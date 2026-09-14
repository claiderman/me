# AGENTS.md — AI Agent Context for Portfolio Project

## Project Overview
**Type**: Multilingual Static Portfolio Website  
**Framework**: Astro 5.7+ with `astro-i18next` integration  
**Languages**: Spanish (default) + English  
**Deployment**: GitHub Pages (`/me` base path)  
**Package Manager**: npm

## Architecture

### Core Stack
- **Astro 5.7.13** — Static site generator with island architecture
- **i18next 26.3.6** — Internationalization (server + client)
- **TypeScript 5.3.3** — Type-safe development
- **Vite 6.3.5** — Build tool and dev server

### i18n Strategy
- **Static routes**: `/me/es/` and `/me/en/` generated at build time
- **Client-side language switching**: Single toggle button saves to `localStorage.locale`
- **Resource files**: `/public/locales/{es,en}/{common,cv,sections}.json`
- **PDF CVs**: `/public/locales/{es,en}/cv.pdf` (auto-detected by locale)

### Base Configuration
```js
// astro.config.mjs
base: '/me'
site: 'https://claiderman.github.io'
```

## Key Directories
```
src/
├── components/
│   ├── button/           # FloatingButtons (theme, lang, color, CV download)
│   ├── sections/         # Hero, About, Experience, Education, Skills, Languages
│   ├── modal/            # Company detail modals
│   ├── client/           # ClientInit (hydration entry)
│   ├── theme/            # Theme system (light/dark)
│   └── ...
├── i18n/
│   ├── config.ts         # i18next init with static imports
│   └── utils.ts          # loadTranslations, locale helpers
├── layouts/
│   └── Layout.astro      # Root HTML template
├── pages/
│   ├── index.astro       # Redirector (detects locale → /es/ or /en/)
│   └── [locale]/
│       └── index.astro   # Main page per locale
├── styles/
│   └── global.css        # CSS custom properties, base styles
└── utils/
    └── cv.ts             # CV data loader (sync)
```

## Build & Development Commands
```bash
# Development
npm run start          # astro dev (port 4321)

# Build
npm run build          # astro check && astro build

# Preview production build
npm run preview        # astro preview
```

## Critical Files for AI Agents

### FloatingButtons.astro (Language/Theme/Color/CV)
- **Client-only**: All `document`/`window` access in `<script client:load>`
- **Language toggle**: Single button → switches ES/EN → saves to `localStorage.locale`
- **Theme toggle**: Checkbox → saves `localStorage.theme` (`light`/`dark`)
- **Color picker**: 5 color options → saves `localStorage.primaryColor`
- **CV download**: Detects current locale → downloads `/locales/{locale}/cv.pdf`

### i18n/config.ts
- **Static imports** for all locale JSON (avoids SSR fs-backend issues)
- **Client + Server init** via `astro-i18next` config
- **No dynamic imports** during SSR

### index.astro (redirector)
- Detects `localStorage.locale` → browser language → defaults to `es`
- Redirects to `/me/{locale}/`

## Coding Conventions

### TypeScript
- Strict mode enabled
- Path aliases: `@components/*`, `@sections/*`, `@i18n/*`, `@utils/*`, etc.
- No `any` — use `unknown` or proper types

### Astro Components
- **SSR-safe**: No `document`/`window` in frontmatter or template expressions
- **Client scripts**: Use `<script client:load>` for browser APIs
- **Props typed**: Define `interface Props` in frontmatter
- **Slots**: Use `<slot />` for composition

### i18n Usage
```astro
---
import { loadTranslations } from "@i18n/utils";
const t = await loadTranslations(locale);
---
<h1>{t('hero.title')}</h1>
```

### CSS Custom Properties
- Defined in `global.css` — use `var(--primary)`, `var(--card-bg)`, etc.
- Theme switching toggles `.light`/`.dark` on `<html>`

## Component Patterns

### Modals
- `Modal.astro` — Reusable modal with keyboard nav, prev/next between company cards
- `client:load` for all DOM interactions

### Sections
- Each section: `Hero`, `About`, `ExperienceSection`, `EducationSection`, `SkillsSection`, `LanguagesSection`
- All accept `t` (translation fn) and `locale` props

### Experience
- `CompanyCard` → opens `Modal` with details
- Navigation between modals via arrows/keys

## Common Tasks for Agents

### Add New Translation Key
1. Add to `/public/locales/es/common.json` (and `en/`)
2. Use `t('namespace.key')` in component

### Add New Section
1. Create component in `src/components/sections/`
2. Export from `src/components/sections/index.ts`
3. Import and add to `[locale]/index.astro`

### Modify CV PDF
- Replace `/public/locales/es/cv.pdf` and `/public/locales/en/cv.pdf`
- No code changes needed — download button auto-detects

### Change Color Palette
- Edit `.color-option` elements in `FloatingButtons.astro`
- Colors applied via CSS custom properties

## Environment Variables
None required for build. All config in code.

## Git Workflow
- `main` branch deploys to GitHub Pages via `.github/workflows/`
- Commit conventional messages (feat/fix/chore/docs/style/refactor/test)

## Known Issues / Gotchas
1. **SSR errors**: Never use `document`/`window` in Astro frontmatter or template
2. **i18n SSR**: `loadTranslations` must be awaited in page frontmatter, not in components
3. **Base path**: All internal links must include `/me` prefix
4. **PDF paths**: Must be in `/public/locales/{locale}/cv.pdf` for download to work

## Agent Memory Keys
- `locale` → User's selected language (`es`/`en`)
- `theme` → User's theme preference (`light`/`dark`)
- `primaryColor` → User's accent color (hex)

## Testing
- No formal test suite yet
- Manual: `npm run build` must pass
- Visual: Check `npm run preview` at `/me/es/` and `/me/en/`