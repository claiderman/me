# Claude Guidance — Astro i18n Portfolio

## Commands
- Dev: `npm start`
- Build: `npm run build` (includes `astro check`)
- Preview: `npm run preview`

## Notes
- Base path: `/me`
- Locales: `es` (default), `en`
- SSR rule: `document`/`window` only in `<script client:load>`
- Path aliases: `@components/*`, `@i18n/*`, `@sections/*`, `@utils/*`, etc.
- CV data: `src/data/cv.{json,en.json}` → `src/utils/cv.ts`