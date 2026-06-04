# Phase 07 — Polish & QA

## Context links
- Parent plan: [plan.md](./plan.md)
- Depends on: Phases 01-06 (all pages + components complete).
- Input reports (intended, MISSING): see plan.md.
- Source of truth: c:/Users/vanqu/Chip Nail/lily_raw.html.

## Overview
- Date: 2026-06-04
- Description: Final hardening pass: responsive audit (mobile/tablet/desktop), animation +
  reduced-motion verification, accessibility + Lighthouse pass, write README (run/compile/deploy +
  how to replace placeholder images), and produce the production output via npm run build.
- Priority: P1 (ship gate).
- Implementation status: Not started.
- Review status: Not reviewed.

## Key Insights
- This is the only phase that touches every route, so it is where cross-cutting bugs surface
  (theme flashes, CLS, focus traps, contrast).
- Placeholders must be obviously swappable: consistent naming + a README table mapping each
  placeholder to its real-image purpose + required aspect ratio.
- Lighthouse targets (home, desktop): Performance >=90, Accessibility >=90.

## Requirements
Functional:
- Every route works at 320 / 375 / 768 / 1024 / 1440 / 1920px without overflow or broken layout.
- Theme toggle works on every page; no FOUC after hard reload anywhere.
- All animations smooth; with prefers-reduced-motion enabled, no motion/autoplay anywhere.
- Keyboard: can reach nav, dropdown, mobile menu, theme toggle, form, all links; visible focus rings.
Non-functional:
- Lighthouse Perf/A11y >=90 on home (desktop); no console errors on any page.
- README complete and accurate.
- Production output compiles clean (npm run build, exit 0) and previews (npm run preview).

## Architecture
- No new architecture. Audit + fixes across existing files. Add only: README, optional 404 page,
  optional sitemap/robots, favicon polish.

## Related code files
Create:
- c:/Users/vanqu/Chip Nail/README.md (run/compile/deploy + placeholder-swap guide + assumptions)
- c:/Users/vanqu/Chip Nail/src/pages/404.astro (themed not-found)
- c:/Users/vanqu/Chip Nail/public/robots.txt
Modify (as audit reveals):
- any src/components/** or src/pages/** with responsive/a11y/contrast fixes
- c:/Users/vanqu/Chip Nail/src/styles/tokens.css (contrast tuning if needed)

## Implementation Steps
1. Responsive sweep: open each route at the breakpoints above (DevTools device toolbar); fix
   overflow, clamp font/spacing issues, image sizing, mobile menu overlay.
2. Theme sweep: on each route toggle dark/light + hard reload; confirm no FOUC and full coverage
   (no element with hardcoded color ignoring tokens).
3. Motion sweep: enable OS/DevTools "reduce motion"; confirm hero autoplay stops, Reveal shows
   content instantly, hovers/transitions disabled per the global guard.
4. Accessibility: run Lighthouse + axe; fix alt text, labels, color contrast (>=4.5:1 body text),
   focus order, aria on menu/dropdown/form; verify keyboard-only navigation end to end.
5. Performance: ensure images have dimensions/aspect-ratio (CLS), first hero eager + others lazy,
   no unused JS; run Lighthouse on home (desktop) and record scores.
6. Add 404.astro, robots.txt; confirm favicon + meta/OG tags present via BaseLayout.
7. Write README.md: prerequisites (Node), install, dev, build, preview, deploy (Netlify default /
   Vercel note), project structure, theming notes, AND a placeholder image table (filename ->
   purpose -> required aspect ratio) plus the explicit assumptions (no backend form, dropped libs).
8. Run npm run build (must exit 0) then npm run preview; click through all 8 routes.

## Todo list
- [ ] Responsive audit + fixes (6 breakpoints, all routes)
- [ ] Theme/FOUC sweep (all routes)
- [ ] Reduced-motion sweep (all routes)
- [ ] Accessibility pass (Lighthouse + axe; labels/contrast/focus/keyboard)
- [ ] Performance pass (CLS, lazy/eager images, Lighthouse >=90)
- [ ] 404.astro + robots.txt + favicon/meta check
- [ ] README (run/compile/deploy + placeholder table + assumptions)
- [ ] Final npm run build (exit 0) + preview click-through

## Success Criteria
- All 8 routes pass responsive + theme + reduced-motion + keyboard checks.
- Lighthouse home (desktop): Performance >=90, Accessibility >=90; no console errors anywhere.
- README lets a beginner install, run, build, deploy, and swap every placeholder image.
- npm run build exits 0; preview serves the full site correctly.

## Risk Assessment
- Late-discovered cross-cutting issues (contrast/CLS) -> budget time; fixes mostly in tokens.css +
  shared components, so they propagate (DRY benefit).
- Lighthouse perf hit from large placeholder images -> compress placeholders, set explicit sizes.

## Security Considerations
- robots.txt does not expose anything sensitive (static marketing site).
- Confirm no leftover secrets/keys committed; .env (if any) git-ignored.
- External links rel=noopener; no inline untrusted content.

## Next steps
- Deploy to chosen host; smoke-test live URL.
- Hand off: client swaps placeholders per README, supplies real copy/services/posts, optionally
  wires the contact form to a real backend (Netlify Forms/Formspree) as a future enhancement.
- Unresolved: final deploy target; whether real form backend is wanted later.
