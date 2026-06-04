# Plan: Clone Lily Nailroom (lilynailroom.com) with Astro

**Date:** 2026-06-04 · **Status:** Planning complete, implementation not started

## Goal
Rebuild the Vietnamese nail-salon site lilynailroom.com as a modern, static Astro site.
Dark-theme-default with light toggle (no FOUC), mobile-first responsive, moderate scroll
animations, placeholder images, front-end-only contact/booking form. Keep Vietnamese copy.

## Stack
- **Astro** (static `output: 'static'`), zero/minimal JS islands.
- Plain CSS with custom properties (CSS variables) for theming — no Tailwind (KISS, matches scope).
- Vanilla IntersectionObserver for scroll animations (Motion One optional, not required).
- Astro Content Collections for blog (Markdown).
- Deploy: Netlify or Vercel (static output folder).

## Scope (FULL site, 8 routes)
`/` (home) · `/gioi-thieu` · `/dich-vu` · `/design` · `/goi-dau` · `/tin-tuc` (blog list) ·
`/tin-tuc/[slug]` (post) · `/album` · `/lien-he`.

## Source of truth
- Raw HTML: `c:/Users/vanqu/Chip Nail/lily_raw.html` (homepage markup, nav, contact, assets, color).
- Input reports (all present in workspace):
  - [reports/01-homepage-analysis.md](./reports/01-homepage-analysis.md)
  - [research/researcher-01-astro-patterns.md](./research/researcher-01-astro-patterns.md)
  - [research/researcher-02-site-structure.md](./research/researcher-02-site-structure.md)

## Phases
| # | Phase | Status | Progress | File |
|---|-------|--------|----------|------|
| 01 | Project scaffold and design system | Not started | 0% | [phase-01](./phase-01-scaffold-design-system.md) |
| 02 | Shared partials (Header/Nav/Footer/Floating) | Not started | 0% | [phase-02](./phase-02-shared-partials.md) |
| 03 | Homepage sections + assemble index | Not started | 0% | [phase-03](./phase-03-homepage-sections.md) |
| 04 | Subpages (gioi-thieu/dich-vu/design/goi-dau/album) | Not started | 0% | [phase-04](./phase-04-subpages.md) |
| 05 | Blog (tin-tuc) via Content Collections | Not started | 0% | [phase-05](./phase-05-blog.md) |
| 06 | Contact/booking page (lien-he) | Not started | 0% | [phase-06](./phase-06-contact.md) |
| 07 | Polish and QA | Not started | 0% | [phase-07](./phase-07-polish-qa.md) |

Phases 01->02->03 are sequential. 04, 05, 06 depend on 01+02 (and reusable components from 03)
but are independent of each other — buildable in parallel. 07 is last.

## Global success criteria
- All 8 routes compile with `npm run build` (zero errors) and render correctly.
- Dark theme by default; toggle persists in localStorage; NO flash of wrong theme on load.
- Mobile-first responsive: usable 320px -> 1920px; hamburger overlay menu on mobile.
- Scroll fade/slide-up animations work and are disabled under `prefers-reduced-motion`.
- All images are clearly-named local placeholders with correct aspect ratios.
- Contact form validates client-side, shows success state, links to Zalo/phone. No backend.
- Lighthouse: Performance >=90, Accessibility >=90 (desktop, home page).
- README documents run/compile/deploy + how to swap placeholder images.

## Key risks
- No real images -> enforce exact aspect ratios from asset inventory to avoid layout shift.
- FOUC on theme -> inline blocking head script sets `data-theme` before paint.
- Original uses jQuery/Swiper/Splide/AOS/Bootstrap/Fancybox -> we DROP all (YAGNI);
  reimplement only what is needed in vanilla. Visual parity is "inspired by", not pixel-exact.
- Form has no backend -> explicit assumption; success is UI-only + Zalo/phone deep links.

## Key reused components (build once, use everywhere — DRY)
`BaseLayout`, `Header`, `Nav`, `MobileMenu`, `ThemeToggle`, `Footer`, `FloatingButtons`,
`SectionTitle`, `Button`, `ServiceCard`, `GalleryGrid`, `Reveal`.

## Confirmed decisions (user-approved 2026-06-04)
1. Deploy target: **Netlify** (README documents Netlify).
2. Drop Swiper/Splide/AOS/jQuery — reimplement needed bits in **vanilla**. ✅
3. Booking/contact form = **front-end only** (client validation + success state + Zalo/phone deep links). No backend. ✅
4. Service names/prices and blog posts = **reasonable VN sample copy** (user swaps later). ✅

No open questions. Plan finalized and ready for implementation.
