# Astro Best Practices: Nail Salon Landing Site Research

## 1. Project Structure
**Recommended layout:**
```
src/
├── pages/
│   ├── index.astro (home)
│   ├── gioi-thieu.astro
│   ├── dich-vu.astro
│   ├── design.astro
│   ├── goi-dau.astro
│   ├── tin-tuc.astro
│   ├── album.astro
│   └── lien-he.astro
├── components/
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Gallery.astro
│   │   ├── Testimonials.astro
│   │   └── CTA.astro
│   ├── partials/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Nav.astro
│   │   └── ThemeToggle.astro
│   └── ui/
│       └── [small reusable components]
├── layouts/
│   ├── BaseLayout.astro
│   └── PageLayout.astro
└── styles/
    ├── global.css
    └── variables.css
```
**src/pages/** is reserved. Layout in src/layouts/. Components grouped by purpose (sections, partials, ui). [Reference](https://app.studyraid.com/en/read/6673/154995/astro-project-structure)

---

## 2. Dark Mode (Default) + Light Toggle + No FOUC
**Pattern:** Inline head script (is:inline) + localStorage + data-theme attribute + CSS variables.

**BaseHead.astro:**
```astro
<head>
  <script is:inline>
    const theme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  </script>
  <style>
    :root {
      --bg: #1a1a1a;
      --text: #fff;
    }
    [data-theme="light"] {
      --bg: #fff;
      --text: #1a1a1a;
    }
  </style>
</head>
```

**ThemeToggle.astro (client component):**
```astro
<button id="theme-toggle">Toggle</button>
<script>
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
</script>
```

**Why inline?** Script runs synchronously in head before body paints, eliminating FOUC. Default to system preference, user override persists. [Reference](https://www.vbesse.com/en/blog/flashless-dark-mode/)

---

## 3. Scroll Animations
**Recommendation:** Motion One for fade-in/slide-up (3KB gzipped, framework-agnostic).

**Install:**
```bash
npm install motion
```

**Component (scroll-triggered):**
```astro
---
import { animate } from 'motion';
---
<div class="section">
  <h2 data-animate="fade-in-up">Services</h2>
</div>

<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
        observer.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
</script>
```

**Respects prefers-reduced-motion:** Add `@media (prefers-reduced-motion: reduce) { ... }` to disable animations for accessibility. Motion One is smaller than AOS or Framer Motion. [References](https://mantlr.com/blog/css-animation-libraries-for-developers-2026) [AOS alternative](https://zoer.ai/posts/zoer/react-scroll-timeline-animation-component)

---

## 4. Hero Image Carousel
**Recommendation:** Embla Carousel (~5KB gzipped, headless, dependency-free) OR CSS scroll-snap (no JS).

**Embla approach (simplest with functionality):**
```bash
npm install embla-carousel
```

```astro
---
import EmblaCarousel from './EmblaCarousel.astro';
const slides = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg'];
---
<EmblaCarousel {slides} />
```

**CSS scroll-snap (ultra-lightweight):**
```css
.carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
.carousel img {
  scroll-snap-align: start;
  width: 100%;
  flex-shrink: 0;
}
```

For salon site: scroll-snap sufficient unless need advanced controls. Swiper (25-47KB) overkill. [Reference](https://www.pkgpulse.com/guides/embla-carousel-vs-swiper-vs-splide-2026)

---

## 5. Responsive Design
**Approach:** CSS custom properties + clamp() + mobile-first + tiny client toggle for hamburger.

**Example responsive:**
```css
/* Mobile-first variables */
:root {
  --spacing: clamp(1rem, 5vw, 2rem);
  --font-size: clamp(1rem, 2vw, 1.25rem);
}

@media (min-width: 768px) {
  :root {
    --spacing: 2rem;
  }
}
```

**Hamburger menu (vanilla):**
```astro
<header>
  <nav id="nav" class="hidden">
    <!-- menu items -->
  </nav>
  <button id="menu-btn">☰</button>
</header>

<style>
  #nav { display: none; }
  #nav.open { display: block; }
  @media (min-width: 768px) { #nav { display: block; } }
</style>

<script>
  document.getElementById('menu-btn').onclick = () => {
    document.getElementById('nav').classList.toggle('open');
  };
</script>
```

**Styling recommendation:** Use scoped CSS (Astro default) for beginner-friendly encapsulation. If Tailwind preferred, clamp() also works in Tailwind. [Reference](https://www.howtocode.io/posts/astro/components-layouts-pages)

---

## 6. Deployment
**Free options:**
- **Netlify:** 100GB bandwidth/mo free, auto-detects Astro, no config. `npm run build` then push.
- **Vercel:** Auto-detects Astro, unlimited bandwidth on free tier.
- **Cloudflare Pages:** Free, unlimited bandwidth, no card required, global CDN.
- **GitHub Pages:** Free, tied to repo.

**Build command (all platforms):**
```bash
npm run build
astro check
```

Astro outputs static HTML by default (no SSR needed). Any platform works. Netlify easiest for beginners. [References](https://docs.astro.build/en/guides/deploy/) [Cloudflare option](https://expresstech.io/5-vercel-alternatives-for-astro-sites-in-2026/)

---

## Open Questions / Risks

1. **Blog integration** — Markdown files in src/pages/ or headless CMS (Sanity/Strapi)? Need clarification for tin-tuc subpage.
2. **i18n (Vietnamese/English)** — Astro middleware or static multi-language pages (simpler)?
3. **Admin panel for salon staff** — Static Astro not suitable; consider separate backend or CMS.
4. **Performance baseline** — Check if Motion One + carousel auto-play impacts Core Web Vitals on slow 3G.
5. **Analytics/tracking** — Google Analytics or Plausible script placement in Astro head; verify FOUC prevention applies here too.

---

**Key takeaway:** Astro's static-first philosophy, zero-JS by default, and scoped component styles make it ideal for landing sites. Leverage is:inline scripts for dark mode FOUC prevention, keep carousel simple (CSS scroll-snap), use Motion One for animations, and deploy to Netlify/Vercel free tier.
