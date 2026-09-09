# Review Checklist

## Code Quality

### [ ] Astro SSR Safety
- No `document`/`window` access in frontmatter or template expressions
- All DOM/browser API usage inside `<script client:load>`
- Components are SSR-safe

### [ ] i18n Compliance
- `loadTranslations(locale)` awaited in page frontmatter
- Static imports only in `src/i18n/config.ts`
- Both ES and EN files updated for new keys
- No hardcoded strings in components (use `t()`)

### [ ] TypeScript
- Strict mode enforced
- No `any` types
- Path aliases used correctly
- Props interfaces defined

### [ ] Accessibility
- Semantic HTML elements used appropriately
- ARIA labels on interactive elements
- Color contrast meets WCAG AA (minimum)
- Keyboard navigation support
- Focus outlines visible

### [ ] Performance
- Images use `loading="lazy"` where appropriate
- Font loading optimized
- No render-blocking resources in head
- Asset sizes reasonable (images < 1MB where possible)

### [ ] Security
- No inline event handlers (`onclick="..."`)
- External links use `rel="noopener noreferrer"`
- No dangerous `innerHTML` usage
- Input validation where applicable

## Build & Deployment

### [ ] Build Process
- `npm run build` completes without errors
- `astro check` passes (0 errors)
- Generated files in `dist/` directory
- Base path `/me` correctly applied

### [ ] GitHub Actions
- Deploy workflow runs successfully
- Artifacts uploaded correctly
- Environment variables configured

### [ ] Preview
- `npm run preview` serves production build locally
- All functionality works in preview mode

## Content & UX

### [ ] Copy Consistency
- Translation keys match between ES and EN
- No mixed-language content in single language version
- Headlines clear and value-focused
- Summary communicates unique value proposition

### [ ] Mobile Responsiveness
- Layout adapts to mobile (< 768px)
- Touch targets minimum 44x44px
- No horizontal scrolling
- Font sizes readable on small screens

### [ ] Visual Design
- Consistent spacing and alignment
- Hover states on interactive elements
- Loading states where appropriate
- Error states handled gracefully

## CV Specific

### [ ] Data Accuracy
- All CV data fields populated
- Dates formatted consistently (YYYY-MM-DD)
- Current position marked as `endDate: null`
- Skills and keywords relevant

### [ ] File Availability
- PDF CV exists in both `/public/locales/es/cv.pdf` and `/public/locales/en/cv.pdf`
- Download functionality works for both locales
- File sizes reasonable (< 2MB)

### [ ] Contact Information
- Email, phone, LinkedIn, GitHub present and correct
- Copy-to-clipboard functionality works
- Map links functional

## Check This List For

- New feature implementation
- Bug fixes
- Refactoring work
- Before merge to main branch