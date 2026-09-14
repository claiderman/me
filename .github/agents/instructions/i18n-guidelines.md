# i18n Guidelines

## Translation Structure

Resources located at:
- `/public/locales/es/common.json`
- `/public/locales/es/cv.json`
- `/public/locales/es/sections.json`
- `/public/locales/en/common.json`
- `/public/locales/en/cv.json`
- `/public/locales/en/sections.json`

## Namespace Names

| Namespace | Description |
|---|---|
| `common` | General UI strings (buttons, labels, modals) |
| `cv` | Curriculum Vitae data labels |
| `sections` | Section titles and metadata |

## Translation Import Pattern

```astro
---
import { loadTranslations } from "@i18n/utils";
const t = await loadTranslations('es'); // or 'en'
---
<h1>{t('hero.title')}</h1>
```

## Locale Detection

1. Browser language → `navigator.language.split('-')[0]`
2. `localStorage.locale` → saved user preference
3. Default → `es`

## Translation Best Practices

- Keep translation keys consistent between ES and EN
- Mark HTML that shouldn't be translated (use `&nbsp;`, preserve structure)
- Avoid embedding dynamic data inside translation values
- Test both locales after adding new keys

## Missing Translations

If a key is missing in one locale, the component falls back to the default (`es`). Always add new keys to both language files simultaneously.