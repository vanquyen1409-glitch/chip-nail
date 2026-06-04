# Phase 02 — Shared Partials (Header, Nav, Mobile Menu, Footer, Floating Buttons)

## Context links
- Parent plan: [plan.md](./plan.md)
- Depends on: Phase 01 (BaseLayout, tokens, ThemeToggle).
- Input reports (intended, MISSING): see plan.md.
- Source of truth: `c:/Users/vanqu/Chip Nail/lily_raw.html`
  (header lines 61-91, mobile menu 93-137, footer 364-421, floating widget 430-561).

## Overview
- **Date:** 2026-06-04
- **Description:** Build the site chrome shared by every page: sticky Header (logo + desktop menu
  with a Dich vu dropdown), mobile hamburger that opens a full-screen overlay menu, Footer
  (logo, socials, address/phone/email/website, copyright, static visitor counter), and the
  fixed Floating contact buttons (hotline/Zalo/Messenger/Maps). All responsive, both themes.
- **Priority:** P0 (every page uses these).
- **Implementation status:** Not started.
- **Review status:** Not reviewed.

## Key Insights
- Exact nav (from source): Trang chu `/`, Gioi thieu `/gioi-thieu`, Dich vu `/dich-vu`
  with submenu NAIL DESIGN `/design` + GOI DAU `/goi-dau`, Blog `/tin-tuc`, Album `/album`,
  Lien he `/lien-he`.
- Contact facts (footer + floating + microdata): address "2/10 Bau Bang, Phuong Tan Binh,
  Ho Chi Minh"; phone `0878050144`; email `lilynailroom@gmail.com`; website lilynailroom.com.
- Socials: Facebook `facebook.com/share/17L1QA6X5L`, TikTok `@lilynailroomtanbinh`,
  Maps `maps.app.goo.gl/XuoHspUAMXR7MhkYA`, Instagram `_lilynailroom_`,
  Messenger `facebook.com/profile.php?id=61562937031061`, Zalo `zalo.me/0878050144`.
- Original mobile menu = slide-in overlay (`menures_inner`) with logo, close X, links, and
  contact info in the footer of the overlay. We reproduce that pattern.
- Floating widget original auto-animates icons via jQuery; we keep a simple always-visible
  vertical stack of links (KISS) with a CSS hover micro-interaction.

## Requirements
**Functional**
- Header sticky on scroll; active link highlighted per current route.
- Desktop: horizontal menu, Dich vu shows submenu on hover + focus (keyboard accessible).
- Mobile (<=768px): hamburger toggles overlay; close via X, backdrop click, or Esc; body scroll
  locked while open. ThemeToggle reachable on mobile too.
- Footer + FloatingButtons render identical contact data from one shared data source.
**Non-functional**
- Single source for nav items + contact info (DRY) -> import from `src/data/site.ts`.
- Keyboard + screen-reader accessible (aria-expanded, focus trap optional, semantic nav/footer).

## Architecture
- `src/data/site.ts` exports `nav[]` (with optional `children`), `contact{}`, `socials[]`.
- `Header.astro` renders logo + `Nav.astro` (desktop) + `ThemeToggle` + hamburger button.
- `MobileMenu.astro`: overlay markup; tiny module script toggles `[data-open]`, locks scroll,
  handles Esc/backdrop. Hamburger button dispatches a custom event or toggles a shared attribute.
- `Footer.astro` + `FloatingButtons.astro` read `contact`/`socials` from `site.ts`.
- Active link: compare `Astro.url.pathname` to each `nav.href` in Nav.astro.
- BaseLayout (Phase 01) updated to render Header + slot + Footer + FloatingButtons.

## Related code files
Create:
- `c:/Users/vanqu/Chip Nail/src/data/site.ts`
- `c:/Users/vanqu/Chip Nail/src/components/partials/Header.astro`
- `c:/Users/vanqu/Chip Nail/src/components/partials/Nav.astro`
- `c:/Users/vanqu/Chip Nail/src/components/partials/MobileMenu.astro`
- `c:/Users/vanqu/Chip Nail/src/components/partials/Footer.astro`
- `c:/Users/vanqu/Chip Nail/src/components/partials/FloatingButtons.astro`
- `c:/Users/vanqu/Chip Nail/public/placeholders/logo.png` (transparent ~200x80)
- `c:/Users/vanqu/Chip Nail/public/placeholders/logo-footer.png`
Modify:
- `c:/Users/vanqu/Chip Nail/src/layouts/BaseLayout.astro` (mount Header/Footer/FloatingButtons)

## Implementation Steps
1. Create `src/data/site.ts` with `nav`, `contact`, `socials` (use exact values from Key Insights).
   Phone link `tel:0878050144`, Zalo `https://zalo.me/0878050144`.
2. Build `Nav.astro` taking `pathname` prop; loop `nav`; render submenu `<ul>` for items with
   `children`; add `aria-current="page"` when href matches; submenu opens on `:hover` and
   `:focus-within` (CSS).
3. Build `Header.astro`: logo `<a href="/">`, `<Nav>`, `<ThemeToggle>`, hamburger button
   (`aria-controls`, `aria-expanded`). Sticky via CSS `position:sticky;top:0`; add a small
   `box-shadow` after scroll using an IntersectionObserver sentinel or `scroll` listener (minimal).
4. Build `MobileMenu.astro`: full-height overlay (logo, close X, link list mirroring `nav`
   incl. submenu items flattened/indented, contact info block). Module script: open/close by
   toggling `data-open` on the overlay + `overflow:hidden` on `<body>`; close on Esc + backdrop.
   Wire hamburger (in Header) to open it.
5. Build `Footer.astro`: footer logo, socials row (icon links from `socials`), info block
   (address/phone/email/website), copyright "© 2026 Lily Nailroom", and a STATIC visitor-counter
   line ("Dang online / Ngay / Tuan / Thang / Tong") with fixed sample numbers (note: static).
6. Build `FloatingButtons.astro`: fixed bottom-right vertical stack: Hotline (`tel:`), Zalo,
   Messenger, Maps. Inline SVG icons (copy paths from source lines 443-551). Hover scale/colour
   micro-interaction; hidden detail labels appear on hover (desktop) / always-compact on mobile.
7. Update `BaseLayout.astro`: render `<Header pathname={Astro.url.pathname}/>`, `<slot/>`,
   `<Footer/>`, `<FloatingButtons/>`.
8. Verify on a couple of stub pages at desktop + mobile widths.

## Todo list
- [ ] site.ts (nav + contact + socials, single source)
- [ ] Nav.astro with dropdown + active state (a11y)
- [ ] Header.astro sticky + hamburger + ThemeToggle
- [ ] MobileMenu.astro overlay (Esc/backdrop/scroll-lock)
- [ ] Footer.astro (info + socials + copyright + static counter)
- [ ] FloatingButtons.astro (hotline/Zalo/Messenger/Maps)
- [ ] BaseLayout mounts all partials
- [ ] Logo placeholders added
- [ ] Verify desktop + mobile

## Success Criteria
- Header identical on all pages; current route link highlighted.
- Dich vu dropdown opens via mouse AND keyboard (Tab/focus).
- Mobile <=768px: hamburger opens overlay; Esc/backdrop/X close it; background does not scroll.
- Footer + floating links use correct VN contact data; all anchors valid (tel/zalo/https).
- Works in dark + light; no console errors.

## Risk Assessment
- **Dropdown unreachable on touch** -> on mobile we flatten submenu into the overlay list (no hover dep).
- **Scroll-lock leaves body stuck** -> always remove `overflow:hidden` on every close path.
- **Sticky header overlaps anchored content** -> add `scroll-margin-top` on section targets.

## Security Considerations
- External social links: add `rel="noopener noreferrer"` and `target="_blank"`.
- No user input here; static only.

## Next steps
- Phase 03 (homepage) consumes Header/Footer/Floating + introduces reusable SectionTitle/Button.
- Unresolved: confirm static visitor-counter is acceptable (no real analytics backend).
