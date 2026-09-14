# Improvement Plan — Astro i18n Portfolio

## Phase 1: Foundation (Weeks 1-2)

| Task | Description | Status |
|---|---|---|
| ✅ SEO Optimization | Add meta description, Open Graph tags, JSON-LD structured data | Complete |
| ✅ Image Optimization | Add `loading="lazy"` to all images, optimize file sizes, add WebP fallback | Complete |
| ✅ Meta Tags | Ensure all pages have proper title, description, canonical URLs | Complete |
| ✅ Base Path Consistency | Verify all internal links use `/me` prefix | Complete |
| ✅ Code Standards Documentation | Create `.github/agents/instructions/` — DONE |
| ✅ Review Checklist | Create `.github/agents/instructions/review-checklist.md` — DONE |

**Exit Criteria:** Build passes `astro check` with 0 errors; all pages load in both ES and EN locales.

---

## Phase 2: Content & UX (Weeks 3-4)

| Task | Description | Status |
|---|---|---|
| 📝 Hero Copy Rewrite | Improve headline and summary with value-focused messaging | Pending |
| 📝 About Section Story | Add personal narrative to "Sobre mí" section | Pending |
| 📝 Metrics Addition | Add quantifiable achievements where possible | Pending |
| 📝 Project Studies | Add detailed case studies of 2-3 key projects | Pending |
| 📝 Testimonials | Consider adding client/recommendations section | Pending |

**Exit Criteria:** Content passes copy review; hero section has impactful messaging; 2+ projects have detailed studies.

---

## Phase 3: Technical Enhancements (Weeks 5-6)

| Task | Description | Status |
|---|---|---|
| 🔧 Linter & Formatter | Add Biome or ESLint + Prettier; configure in CI | Pending |
| 🔧 Testing Foundation | Add Vitest for unit tests of utils/functions | Pending |
| 🔧 Accessibility Audit | Run Lighthouse, fix WCAG AA issues | Pending |
| 🔧 Performance Budget | Set and monitor Web Vitals targets (LCP < 2.5s, FID < 100ms) | Pending |
| 🔧 CI Enhancements | Add lint step to GitHub Actions workflow | Pending |

**Exit Criteria:** Lint/formatter configured and CI passes; basic test suite runs; accessibility score improves.

---

## Phase 4: Polish & Expand (Weeks 7-8)

| Task | Description | Status |
|---|---|---|
| 🚀 Blog Section | Add technical blog to demonstrate expertise | Pending |
| 🌐 Additional Locales | Consider adding 3rd language (e.g., Portuguese) | Pending |
| 📊 Analytics | Add simple analytics (Plausible, Umami) or Google Analytics | Pending |
| 📧 Newsletter Signup | Add basic email capture for updates | Pending |
| 🎨 Visual Polish | Refine animations, micro-interactions, color harmony | Pending |

**Exit Criteria:** Blog operational; optional features deployed; overall polish improves user experience.

---

## Ongoing Maintenance

| Activity | Frequency | Owner |
|---|---|---|
| Dependency updates | Weekly | Developer |
| Security patches | As needed | Developer |
| Content refresh | Monthly | Developer |
| Accessibility re-audit | Quarterly | Developer |
| Build monitoring | Each deploy | CI/CD |

## Success Metrics

| Metric | Target |
|---|---|
| Build time | < 30 seconds |
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 90 |
| Lighthouse Best Practices | > 90 |
| Lighthouse SEO | > 90 |
| Page load time (first paint) | < 2 seconds |
| Mobile responsiveness | 100% of pages |
| Locale switching success rate | 100% |

---

## How to Use This Plan

1. **Mark items as complete** by checking the status column
2. **Work sequentially** — Phase 1 before Phase 2, etc.
3. **Run `npm run build`** after each phase to verify no regressions
4. **Commit with clear messages** following conventional commits
5. **Update this plan** as new improvements are identified

---

**Last Updated**: 2026-09-09
**Next Review**: 2026-09-23 (2 weeks)