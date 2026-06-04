# Phase 04 — Subpages (gioi-thieu, dich-vu, design, goi-dau, album)

## Context links
- Parent plan: [plan.md](./plan.md)
- Depends on: Phase 01 (layout), Phase 02 (partials), Phase 03 (ServiceCard/GalleryGrid/SectionTitle/Reveal/Button).
- Input reports (intended, MISSING): see plan.md.
- Source of truth: c:/Users/vanqu/Chip Nail/lily_raw.html (nav lines 69-87 confirm routes + labels).

## Overview
- Date: 2026-06-04
- Description: Build the 5 content subpages reusing shared layout + partials + UI primitives.
  Each gets a page hero/breadcrumb, themed sections, and reasonable VN sample copy. Album + the
  two service-detail pages reuse GalleryGrid/ServiceCard (DRY). Placeholders for all images.
- Priority: P1.
- Implementation status: Not started.
- Review status: Not reviewed.

## Key Insights
- Routes + labels are fixed by source nav: /gioi-thieu (Gioi thieu), /dich-vu (Dich vu),
  /design (NAIL DESIGN), /goi-dau (GOI DAU), /album (Album).
- /design and /goi-dau are children of Dich vu in the menu -> they are service-category pages
  (gallery/list of that service). /dich-vu is the overview listing all services.
- Album = full gallery grid (homepage gallery "Xem tat ca" points here).
- No detailed subpage HTML in source (only homepage captured) -> use sample VN copy; structure is
  inferred and intentionally simple (KISS).
- Introduce one reusable PageHero (title + breadcrumb) to avoid duplicating headers across pages.

## Requirements
Functional:
- 5 static routes render via BaseLayout with Header/Footer/Floating.
- gioi-thieu: intro/story + values + a few images; reuses hero copy themes.
- dich-vu: grid of all services (ServiceCard) linking to /design and /goi-dau where relevant.
- design + goi-dau: category page = short intro + GalleryGrid of that service + Booking CTA.
- album: responsive masonry-ish GalleryGrid of many placeholders.
Non-functional:
- Zero new heavy deps. Reuse existing primitives. Reveal animations + reduced-motion respected.
- All images placeholders with correct/consistent aspect ratios.

## Architecture
- New reusable: src/components/ui/PageHero.astro (props: title, eyebrow?, breadcrumb[]).
- Pages in src/pages/: gioi-thieu.astro, dich-vu.astro, design.astro, goi-dau.astro, album.astro.
- Per-page content arrays co-located or in src/data/ (e.g. services.ts shared by dich-vu + home).
- design/goi-dau share a single internal pattern; consider a CategoryPage layout component if
  duplication appears (apply DRY only if 2+ pages truly identical).

## Related code files
Create:
- c:/Users/vanqu/Chip Nail/src/components/ui/PageHero.astro
- c:/Users/vanqu/Chip Nail/src/pages/gioi-thieu.astro
- c:/Users/vanqu/Chip Nail/src/pages/dich-vu.astro
- c:/Users/vanqu/Chip Nail/src/pages/design.astro
- c:/Users/vanqu/Chip Nail/src/pages/goi-dau.astro
- c:/Users/vanqu/Chip Nail/src/pages/album.astro
- c:/Users/vanqu/Chip Nail/src/data/services.ts (shared services list)
- c:/Users/vanqu/Chip Nail/public/placeholders/about-1.jpg .. about-3.jpg
- c:/Users/vanqu/Chip Nail/public/placeholders/design-1.jpg .. design-8.jpg (3:4)
- c:/Users/vanqu/Chip Nail/public/placeholders/goidau-1.jpg .. goidau-6.jpg
- c:/Users/vanqu/Chip Nail/public/placeholders/album-1.jpg .. album-12.jpg (mixed ratios)
Modify:
- c:/Users/vanqu/Chip Nail/src/data/home.ts (import shared services from services.ts to dedupe)

## Implementation Steps
1. Build PageHero.astro (themed banner with eyebrow + h1 + breadcrumb back to /). Reused by all 5.
2. gioi-thieu.astro: PageHero + intro story (VN sample) + values + image row (Reveal-wrapped).
3. services.ts: array of {slug,title,desc,img,price?,href?}; design + goi-dau flagged as categories.
4. dich-vu.astro: PageHero + SectionTitle + responsive ServiceCard grid from services.ts; cards for
   NAIL DESIGN -> /design and GOI DAU -> /goi-dau.
5. design.astro: PageHero + short intro + GalleryGrid (design-N.jpg) + "Booking ngay" Button -> /lien-he.
6. goi-dau.astro: same pattern as design with goidau-N.jpg + VN copy about head-spa/wash.
7. album.astro: PageHero + large GalleryGrid (album-N.jpg, mixed ratios) with Reveal.
8. Verify all 5 routes in dev at mobile + desktop, both themes; check nav active states.

## Todo list
- [ ] PageHero.astro reusable
- [ ] services.ts shared data (dedupe with home.ts)
- [ ] gioi-thieu.astro
- [ ] dich-vu.astro (ServiceCard grid)
- [ ] design.astro (gallery + CTA)
- [ ] goi-dau.astro (gallery + CTA)
- [ ] album.astro (large gallery)
- [ ] Placeholder images at consistent ratios
- [ ] Verify routes + active nav, both themes

## Success Criteria
- All 5 routes build and render with shared chrome; active nav link correct on each.
- No duplicated card/gallery markup (primitives reused).
- Responsive + reduced-motion verified; no layout shift.
- design/goi-dau reachable from Dich vu dropdown and from dich-vu cards.

## Risk Assessment
- Thin/placeholder content looks empty -> add enough sample VN copy + adequate placeholder counts.
- Premature CategoryPage abstraction -> only extract if design + goi-dau become near-identical.

## Security Considerations
- Static content; external Booking/Zalo links use rel=noopener.

## Next steps
- Phase 05 (blog) and Phase 06 (contact) are independent and can proceed in parallel.
- Unresolved: real service list/prices + about-page story unknown -> sample VN copy used.
