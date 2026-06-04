# Phase 05 — Blog (tin-tuc) via Astro Content Collections

## Context links
- Parent plan: [plan.md](./plan.md)
- Depends on: Phase 01 (layout), Phase 02 (partials), Phase 03 (SectionTitle/Button/Reveal).
- Input reports (intended, MISSING): see plan.md.
- Source of truth: c:/Users/vanqu/Chip Nail/lily_raw.html (nav line 84: Blog -> /tin-tuc).

## Overview
- Date: 2026-06-04
- Description: Implement the blog as Astro Content Collections (Markdown). A listing page at
  /tin-tuc and dynamic post pages at /tin-tuc/[slug]. Seed 3-4 VN sample posts. A reusable
  PostCard for the list. Typed frontmatter schema.
- Priority: P1.
- Implementation status: Not started.
- Review status: Not reviewed.

## Key Insights
- Content Collections RECOMMENDED over a hardcoded static list because: type-safe frontmatter
  (zod schema), trivial to add posts (drop a .md file), built-in `getCollection`, automatic
  Markdown rendering, scales without code changes. Cost = ~one config file. Worth it (KISS+DRY:
  one schema, many posts).
- No real blog content in source -> create reasonable VN nail-care/news sample posts.
- Reuse SectionTitle for the list header; PageHero (Phase 04) for the blog banner.

## Requirements
Functional:
- /tin-tuc lists posts (newest first) with image, title, date, excerpt -> link to detail.
- /tin-tuc/[slug] renders full post (frontmatter title/date/cover + Markdown body).
- Posts sorted by date desc; draft posts excluded from build.
Non-functional:
- Type-safe schema; build fails loudly on bad frontmatter.
- Reuse layout/partials; reduced-motion + responsive respected.
- Cover images = placeholders with fixed aspect ratio (e.g. 16:9).

## Architecture
- src/content.config.ts (or src/content/config.ts per Astro version): defines `blog` collection
  with schema {title, date, excerpt, cover, draft?, tags?}.
- Markdown files in src/content/blog/*.md.
- src/pages/tin-tuc/index.astro: getCollection('blog'), filter !draft, sort by date, map to PostCard.
- src/pages/tin-tuc/[slug].astro: getStaticPaths from collection; render entry; use BlogPost layout.
- src/layouts/BlogPost.astro: PageHero + cover + meta + <slot/> for rendered Markdown + back link.
- src/components/ui/PostCard.astro: cover + title + date + excerpt + read-more.

## Related code files
Create:
- c:/Users/vanqu/Chip Nail/src/content.config.ts
- c:/Users/vanqu/Chip Nail/src/content/blog/2026-05-01-cham-soc-mong.md
- c:/Users/vanqu/Chip Nail/src/content/blog/2026-05-10-xu-huong-nail-2026.md
- c:/Users/vanqu/Chip Nail/src/content/blog/2026-05-20-bao-hanh-7-ngay.md
- c:/Users/vanqu/Chip Nail/src/pages/tin-tuc/index.astro
- c:/Users/vanqu/Chip Nail/src/pages/tin-tuc/[slug].astro
- c:/Users/vanqu/Chip Nail/src/layouts/BlogPost.astro
- c:/Users/vanqu/Chip Nail/src/components/ui/PostCard.astro
- c:/Users/vanqu/Chip Nail/public/placeholders/blog-1.jpg .. blog-3.jpg (16:9)

## Implementation Steps
1. Create content.config.ts: import defineCollection, z; schema {title:z.string(), date:z.date(),
   excerpt:z.string(), cover:z.string(), draft:z.boolean().default(false), tags:z.array(z.string()).optional()}.
2. Author 3 sample VN posts in src/content/blog with valid frontmatter + a few paragraphs of body.
3. Build PostCard.astro (cover img with fixed ratio, title, formatted VN date, excerpt, link).
4. Build BlogPost.astro layout (PageHero with post title, cover, date, rendered slot, back-to-list link).
5. tin-tuc/index.astro: const posts = (await getCollection('blog')).filter(p=>!p.data.draft)
   .sort by date desc; SectionTitle + responsive PostCard grid; each Reveal-wrapped.
6. tin-tuc/[slug].astro: getStaticPaths maps entries to params {slug}; render entry body via
   entry.render() (or <Content/>); wrap in BlogPost layout.
7. Verify list + detail routes, date formatting (vi-VN), both themes, responsive.

## Todo list
- [ ] content.config.ts schema (zod)
- [ ] 3 sample VN posts
- [ ] PostCard.astro
- [ ] BlogPost.astro layout
- [ ] tin-tuc/index.astro (filter+sort+grid)
- [ ] tin-tuc/[slug].astro (getStaticPaths + render)
- [ ] blog cover placeholders (16:9)
- [ ] Verify list + detail, both themes

## Success Criteria
- /tin-tuc lists all non-draft posts newest-first; cards link to detail.
- /tin-tuc/<slug> renders Markdown body + meta; back link works.
- Adding a new .md file produces a new page with no code changes.
- Bad frontmatter fails the build (schema enforced).

## Risk Assessment
- Astro version API drift (content.config.ts location / loaders) -> follow installed Astro docs;
  adjust config path accordingly.
- Date timezone formatting -> store ISO date, format with Intl vi-VN at render.

## Security Considerations
- Markdown is author-controlled (trusted), static-rendered; no untrusted HTML injection.

## Next steps
- Phase 07 includes blog in responsive/a11y/Lighthouse audit.
- Unresolved: real post content unknown -> sample VN copy; client to supply later.
