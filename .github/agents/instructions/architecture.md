# Architecture Overview

## Stack
- Astro 5.7+ (static site generation)
- astro-i18next (i18n)
- TypeScript 5.3
- Vite 6.3 (bundled)

## Directory Structure
```
src/
├── components/
│   ├── button/          # FloatingButtons, ScrollToTopButton
│   ├── sections/        # Hero, About, Experience, Education, Skills, Languages
│   ├── modal/           # Modal.astro, ExperienceModal
│   ├── client/          # ClientInit (hydration)
│   ├── theme/           # Theme system (light/dark)
│   └── ...
├── i18n/
│   ├── config.ts        # i18next init with static imports
│   └── utils.ts         # loadTranslations, locale helpers
├── layouts/
│   └── Layout.astro     # Root HTML template
├── pages/
│   ├── index.astro      # Redirector (detects locale → /es/ or /en/)
│   └── [locale]/
│       └── index.astro  # Main page per locale
├── styles/
│   └── global.css       # CSS custom properties, base styles
├── data/
│   ├── cv.json          # ES CV data
│   └── cv.en.json       # EN CV data
└── utils/
    └── cv.ts            # CV data loader (sync)
```

## Data Flow

1. `[locale]/index.astro` → calls `loadTranslations(locale)` → returns `t()`
2. CV data loaded via `getCVData(locale)` → `src/utils/cv.ts` → `src/data/cv.{json,en.json}`
3. Sections rendered with `t()` function and `locale` prop

## i18n Strategy
- Static routes: `/me/es/` and `/me/en/` (generated at build time)
- Client-side language switching via single toggle → saves to `localStorage.locale`
- Resources: `/public/locales/{es,en}/{common,cv,sections}.json`
- PDFs: `/public/locales/{es,en}/cv.pdf`

## Components

### FloatingButtons.astro
- All `document`/`window` access in `<script client:load>`
- Language toggle → switches ES/EN → saves to `localStorage.locale`
- Theme toggle → checkbox → saves `localStorage.theme`
- Color picker → 5 options → saves `localStorage.primaryColor`
- CV download → detects locale → downloads `/locales/{locale}/cv.pdf`

### Sections
- Hero.astro — name, label, contact info, map location
- About.astro — summary text
- ExperienceSection — timeline with company cards
- EducationSection — education cards
- SkillsSection — skill cards
- LanguagesSection — language proficiency