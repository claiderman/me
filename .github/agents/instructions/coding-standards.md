# Coding Standards — Astro i18n Portfolio

## Astro Components

### SSR Safety Rule

```astro
---
// ❌ WRONG: No document/window in frontmatter
const el = document.getElementById('foo');
const { data } = Astro.props;
---

---
// ✅ CORRECT: Client-only in <script client:load>
---
const { data } = Astro.props;
---

<script client:load>
  const el = document.getElementById('foo');
</script>
```

### Component Patterns

```astro
---
interface Props {
  t: (key: string, options?: any) => string;
  locale: 'es' | 'en';
}

const { t, locale } = Astro.props;
---

<h1>{t('hero.title')}</h1>
```

## TypeScript Rules

- Strict mode: no `any`, use `unknown` or proper types
- Path aliases via `tsconfig.json` baseUrl: `.`
- Type imports: `import type { PropType } from 'astro'`

## i18n Rules

- Static imports only in `src/i18n/config.ts`
- Never dynamic `import()` during SSR
- Translate resources in `/public/locales/{es,en}/`

## CSS Variables

```css
:root {
  --background, --text, --primary, --card-bg, --border
}

:root.dark {
  --background: #1a1a1a;
  --text: #e0e0e0;
}
```

## Base Path

All internal links: `/me/...`
```tsx
<a href="/me/"></a>
```