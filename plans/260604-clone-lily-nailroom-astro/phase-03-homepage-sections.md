# Phase 03 — Homepage Sections as Components + Assemble index.astro

## Context links
- Parent plan: [plan.md](./plan.md)
- Depends on: Phase 01 (layout/tokens), Phase 02 (Header/Footer/Floating).
- Input reports (intended, MISSING): see plan.md.
- Source of truth: c:/Users/vanqu/Chip Nail/lily_raw.html
  (hero+about 139-169, services 171-186, menu banner+swiper 187-234, feedback 235-326, gallery 327-363).

## Overview
- Date: 2026-06-04
- Description: Build each homepage section as its own .astro component, plus reusable primitives
  (SectionTitle, Button, ServiceCard, GalleryGrid, Reveal). Assemble in index.astro. Wire scroll
  fade/slide-up animations (IntersectionObserver) and the auto hero slider. Use real homepage VN copy.
- Priority: P0 (showcase page; defines components reused by subpages).
- Implementation status: Not started.
- Review status: Not reviewed.

## Key Insights
- Section order (source): Hero slideshow (1920x960) with "welcome to / Lily Nailroom" overlay +
  intro paragraph + "Xem chi tiet" link; Dich vu service grid; Menu banner block ("Menu / Lily
  Nailroom", img, "Hotline: 0878050144", "Booking ngay") + horizontal swiper of menu images
  (355x550); Feedback section with 4 testimonial cards (110x110 avatar + name + text); "Hinh anh
  hoat dong" gallery (mixed sizes) + "Xem tat ca" link to /album.
- Real hero copy (verbatim VN): "Chao mung den voi Lilynailroom ... bao hanh ... 7 ngay ..."
- 4 real feedback authors exist in source (Nhu Binh, Ngoc Quy, Nhu Tam, Kiu Chen) -> reuse texts.
- Title pattern repeats: eyebrow "Lily Nailroom" + h2 heading -> abstract into SectionTitle.
- Hero in source is a single slide; make it an auto-advancing slider that handles one or more slides.

## Requirements
Functional:
- Hero auto-advances (4-5s), pauses on hover, loops, prev/next + dots only if multiple slides,
  touch swipe; with a single slide no controls show.
- Service grid renders ServiceCards (image + title + optional price) from a local data array.
- Menu banner shows hotline + "Booking ngay" CTA linking to /lien-he (or Zalo).
- Feedback shows the 4 cards (carousel optional; static grid acceptable).
- Gallery uses GalleryGrid with correct aspect ratios; "Xem tat ca" links to /album.
- Sections fade/slide-up on scroll via Reveal; respects reduced-motion.
Non-functional:
- Reusable primitives have minimal typed props; no per-section CSS duplication.
- LCP image (first hero) eager + fetchpriority high; rest lazy.

## Architecture
- Primitives in src/components/ui: SectionTitle.astro, Button.astro, ServiceCard.astro,
  GalleryGrid.astro (items with width/height -> CSS grid + aspect-ratio), Reveal.astro (adds
  data-reveal; one global IO script animates all data-reveal nodes).
- Sections in src/components/sections: Hero.astro, Services.astro, MenuBanner.astro,
  Feedback.astro, HomeGallery.astro.
- Hero slider: one small vanilla module script querying hero-slider instances.
- Content arrays in src/data/home.ts (hero slides, services, feedback, gallery items).
- index.astro imports BaseLayout + sections in source order.

## Related code files
Create:
- c:/Users/vanqu/Chip Nail/src/components/ui/SectionTitle.astro
- c:/Users/vanqu/Chip Nail/src/components/ui/Button.astro
- c:/Users/vanqu/Chip Nail/src/components/ui/ServiceCard.astro
- c:/Users/vanqu/Chip Nail/src/components/ui/GalleryGrid.astro
- c:/Users/vanqu/Chip Nail/src/components/ui/Reveal.astro
- c:/Users/vanqu/Chip Nail/src/scripts/reveal.ts (IntersectionObserver)
- c:/Users/vanqu/Chip Nail/src/scripts/hero-slider.ts
- c:/Users/vanqu/Chip Nail/src/components/sections/Hero.astro
- c:/Users/vanqu/Chip Nail/src/components/sections/Services.astro
- c:/Users/vanqu/Chip Nail/src/components/sections/MenuBanner.astro
- c:/Users/vanqu/Chip Nail/src/components/sections/Feedback.astro
- c:/Users/vanqu/Chip Nail/src/components/sections/HomeGallery.astro
- c:/Users/vanqu/Chip Nail/src/data/home.ts
- c:/Users/vanqu/Chip Nail/public/placeholders/hero-1.jpg (1920x960) + hero-2, hero-3
- c:/Users/vanqu/Chip Nail/public/placeholders/service-N.jpg (square or 3:4)
- c:/Users/vanqu/Chip Nail/public/placeholders/menu-1.jpg, menu-2 (355x550)
- c:/Users/vanqu/Chip Nail/public/placeholders/avatar-1..4.jpg (110x110)
- c:/Users/vanqu/Chip Nail/public/placeholders/gallery-1.jpg (385x530), gallery-2 (790x255),
  gallery-3 (385x255), gallery-4 (385x255)
Modify:
- c:/Users/vanqu/Chip Nail/src/pages/index.astro

## Implementation Steps
1. Build Reveal.astro (wraps slot with data-reveal + optional delay) and reveal.ts: IO adds
   is-visible when intersecting; CSS animates opacity + translateY; under prefers-reduced-motion
   reduce, mark all visible immediately.
2. Build SectionTitle, Button, ServiceCard, GalleryGrid with typed Props. GalleryGrid items carry
   src,w,h,alt; use aspect-ratio w/h to prevent layout shift.
3. Create src/data/home.ts: heroSlides, services (sample VN: Son gel, Up mong bot, Nail design,
   Goi dau duong sinh, Cat da, Son thach), feedback (the 4 real), galleryItems (4 exact w/h).
4. Build Hero.astro: slider track + overlay (eyebrow "welcome to", h2 "Lily Nailroom", intro
   paragraph verbatim, Button to /gioi-thieu). First image eager + high priority.
5. hero-slider.ts: auto-advance via setInterval, pause on mouseenter, resume on leave, dots/arrows
   when multiple slides, basic touch swipe, no autoplay under reduced-motion.
6. Build Services.astro: SectionTitle ("Lily Nailroom" / "Dich vu") + responsive grid (2 cols
   mobile, 3 md, 4 lg) of ServiceCard, each wrapped in Reveal.
7. Build MenuBanner.astro: banner ("Menu / Lily Nailroom", hotline line, "Booking ngay" Button to
   /lien-he) + horizontal strip of menu images via CSS scroll-snap (no Swiper lib).
8. Build Feedback.astro: SectionTitle ("Feedback") + the 4 cards (avatar 110x110 + name + quote)
   in a responsive grid, each Reveal-wrapped.
9. Build HomeGallery.astro: SectionTitle ("Hinh anh hoat dong", left) + "Xem tat ca" Button to
   /album + GalleryGrid with the 4 mixed-ratio items (no Fancybox; keep simple).
10. Assemble index.astro: BaseLayout (title "Lily Nailroom") -> Hero, Services, MenuBanner,
    Feedback, HomeGallery in order. Load reveal.ts + hero-slider.ts once.

## Todo list
- [ ] Reveal.astro + reveal.ts (reduced-motion aware)
- [ ] SectionTitle / Button / ServiceCard / GalleryGrid primitives
- [ ] home.ts data (hero, services, 4 real feedbacks, gallery w/h)
- [ ] Hero.astro + hero-slider.ts (autoplay, pause, single-slide safe)
- [ ] Services.astro grid (2/3/4 cols)
- [ ] MenuBanner.astro (hotline + Booking ngay CTA + image strip)
- [ ] Feedback.astro (4 cards)
- [ ] HomeGallery.astro (mixed-ratio grid + Xem tat ca)
- [ ] Placeholder images at correct aspect ratios
- [ ] Assemble index.astro; verify animations + slider

## Success Criteria
- / renders all 5 sections in correct order, dark + light, mobile + desktop.
- Hero autoplays, pauses on hover, no autoplay under reduced-motion.
- Grids reflow at 320/768/1200/1920px; no layout shift (CLS ~0).
- Scroll into each section triggers fade/slide-up once; reduced-motion shows content instantly.
- "Booking ngay" and "Xem tat ca" links resolve.

## Risk Assessment
- CLS from images -> every img has width/height or aspect-ratio container (verify Phase 07).
- Slider script runs before DOM ready -> use astro:page-load / DOMContentLoaded guard.
- Over-animation -> moderate durations 250-500ms, animate once (unobserve after reveal).

## Security Considerations
- No user input. External CTA (Zalo) link uses rel=noopener if target blank.

## Next steps
- Phase 04 reuses ServiceCard/GalleryGrid/SectionTitle for subpages.
- Unresolved: real service names/prices unknown -> sample VN copy; swap when client provides.
