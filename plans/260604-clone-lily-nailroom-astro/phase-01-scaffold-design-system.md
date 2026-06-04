# Phase 01 — Project Scaffold & Design System

## Context links
- Parent plan: [plan.md](./plan.md)
- Dependencies: none (first phase).
- Input reports (intended, MISSING in workspace): reports/01-homepage-analysis.md,
  research/researcher-01-astro-patterns.md, research/researcher-02-site-structure.md.
- Source of truth: `c:/Users/vanqu/Chip Nail/lily_raw.html` (brand color #AB5C84 found at line 334).

## Overview
- **Date:** 2026-06-04
- **Description:** Create the Astro project, folder layout, BaseLayout, global CSS with dark+light
  CSS-variable palettes derived from rose #AB5C84, typography scale, the no-FOUC theme inline
  script + ThemeToggle island, and deploy config. End state: a dark site renders, toggle flips to
  light and persists, no flash on reload.
- **Priority:** P0 (foundation — everything depends on it).
- **Implementation status:** Not started.
- **Review status:** Not reviewed.

## Key Insights
- Original site loads jQuery, Bootstrap, Swiper, Splide, AOS, Fancybox, SweetAlert2, Alpine. We
  DROP all of them. Astro ships zero JS by default; we add tiny vanilla islands only where needed.
- Brand color is `#AB5C84` (rose/mauve), confirmed in inline SVG fill in source. Build BOTH a dark
  palette (default) and light palette from it.
- No-FOUC theme requires a blocking `<script is:inline>` in `<head>` that reads localStorage and
  sets `document.documentElement.dataset.theme` BEFORE first paint. Astro keeps `is:inline` scripts
  inline and unbundled — correct tool.
- `output: 'static'` => plain static HTML/CSS; no server adapter needed. Host = any static host.

## Requirements
**Functional**
- Astro project initialized, dev server runs, production output compiles.
- `<html data-theme="dark">` default; ThemeToggle switches dark<->light; choice persisted.
- Global CSS variables drive all colors/spacing/typography; both themes defined.
**Non-functional**
- No FOUC. Respect `prefers-reduced-motion` (set up the media query hook now).
- Mobile-first: base styles for small screens, `min-width` media queries scale up.
- Fonts loaded with `font-display: swap`; system-font fallback to avoid blank text.

## Architecture
- `BaseLayout.astro`: `<html lang="vi" data-theme>` + `<head>` (meta, fonts, inline theme script,
  global.css import) + `<slot/>`. All pages wrap content in this.
- Theme model: `data-theme="dark"|"light"` on `<html>`. CSS `:root` = dark tokens;
  `:root[data-theme="light"]` overrides. Components reference only `var(--token)` — never raw hex.
- ThemeToggle: a `<button>` with a tiny inline/module script: toggles attribute + writes localStorage.
- Data flow: localStorage `lily-theme` -> inline head script sets attribute -> CSS reacts ->
  toggle button updates attribute + storage on click.

## Related code files
Create:
- `c:/Users/vanqu/Chip Nail/package.json` (via create-astro)
- `c:/Users/vanqu/Chip Nail/astro.config.mjs`
- `c:/Users/vanqu/Chip Nail/tsconfig.json`
- `c:/Users/vanqu/Chip Nail/src/layouts/BaseLayout.astro`
- `c:/Users/vanqu/Chip Nail/src/styles/global.css`
- `c:/Users/vanqu/Chip Nail/src/styles/tokens.css` (CSS variables: colors, space, type, radius)
- `c:/Users/vanqu/Chip Nail/src/components/partials/ThemeToggle.astro`
- `c:/Users/vanqu/Chip Nail/src/lib/theme.ts` (optional: storage key constant)
- `c:/Users/vanqu/Chip Nail/public/favicon.png`
- `c:/Users/vanqu/Chip Nail/netlify.toml` (deploy config) OR `vercel.json`
- `c:/Users/vanqu/Chip Nail/.gitignore`
Note: scaffold may overwrite an existing `src/pages/index.astro` placeholder — fine.

## Implementation Steps
1. From `c:/Users/vanqu/Chip Nail`, run `npm create astro@latest . -- --template minimal --no-git --typescript strict --install`. Accept installing into the non-empty folder (keeps `lily_raw.html`, `plans`, `.claude`).
2. In `astro.config.mjs` set `output: 'static'` and `site: 'https://example.com'` (placeholder).
3. Create `src/styles/tokens.css`. Define dark palette under `:root` and light overrides under
   `:root[data-theme="light"]`. Suggested tokens (tune later):
   - Dark: `--bg:#1a1016; --surface:#241019; --text:#f5e9f0; --muted:#c9a9bb;`
     `--brand:#AB5C84; --brand-2:#d98bb4; --border:#3a2630;`
   - Light: `--bg:#fff7fb; --surface:#ffffff; --text:#2a1620; --muted:#7a5366;`
     `--brand:#AB5C84; --brand-2:#8f4a6e; --border:#f0d8e4;`
   - Shared: spacing scale, `--radius`, type scale using `clamp()`, `--maxw:1200px`.
4. Create `src/styles/global.css`: `@import 'tokens.css';` reset, `body{background:var(--bg);color:var(--text)}`,
   container `.wrap{max-width:var(--maxw);margin-inline:auto;padding-inline:clamp(16px,4vw,32px)}`,
   base typography, link styles, a `@media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}`.
5. Create `BaseLayout.astro`. In `<head>` BEFORE the stylesheet add the no-FOUC inline script:
   ```astro
   <script is:inline>
     const t = localStorage.getItem('lily-theme') || 'dark';
     document.documentElement.dataset.theme = t;
   </script>
   ```
   Accept `title`, `description` props; render meta tags (reuse VN copy from source: title "Lily
   Nailroom", description "Lily Nailroom Tan Binh"). Set `<html lang="vi">`.
6. Create `ThemeToggle.astro`: a button (sun/moon SVG) with a module script that on click flips
   `document.documentElement.dataset.theme` and writes `localStorage['lily-theme']`. Add `aria-label`.
7. Add fonts: pick one display + one body font (Google Fonts `<link>` with `display=swap`, or
   self-host). Wire `--font-display` / `--font-body` tokens.
8. Create deploy config: `netlify.toml` with `[build] command="npm run build"` and publish = the
   Astro output folder. (Vercel auto-detects Astro; `vercel.json` optional.)
9. Temporarily place ThemeToggle on the default `index.astro` to verify; run `npm run dev`.

## Todo list
- [ ] Scaffold Astro into existing folder (minimal + TS strict)
- [ ] Set `output: 'static'` in astro.config.mjs
- [ ] tokens.css: dark + light palettes from #AB5C84
- [ ] global.css: reset, container, typography, reduced-motion guard
- [ ] BaseLayout.astro with no-FOUC inline head script + meta
- [ ] ThemeToggle.astro (persist to localStorage)
- [ ] Fonts wired with display:swap
- [ ] Deploy config (netlify.toml)
- [ ] Verify dev: dark default, toggle works, hard-reload no flash

## Success Criteria
- `npm run dev` serves a dark page; `npm run build` exits 0.
- Toggling switches to light and survives reload (DevTools > Application > Local Storage shows key).
- Throttle CPU + hard reload: no flash of light theme before dark applies.
- No console errors; no jQuery/Bootstrap/etc. loaded.

## Risk Assessment
- **Non-empty-folder scaffold fails/clobbers** -> if create-astro refuses, scaffold in a temp dir and
  copy `src`, `public`, configs over; keep existing files. Mitigation: back up nothing critical besides
  `lily_raw.html`/`plans` (both safe).
- **Wrong palette contrast** -> verify text/bg contrast >=4.5:1 in both themes during QA (Phase 07).

## Security Considerations
- Static site, no secrets. Do not commit any API keys. `.gitignore` excludes the deps folder + output folder + `.env`.
- Inline theme script touches only localStorage; no user input — safe.

## Next steps
- Proceed to Phase 02 (shared partials) which consumes BaseLayout + ThemeToggle.
- Unresolved: confirm font choice; confirm Netlify vs Vercel.
