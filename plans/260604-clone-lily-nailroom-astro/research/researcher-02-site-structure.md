# Lily Nailroom Site Structure Map

## Site Overview
Vietnamese nail salon website. HTTP-only. Layout: header-wrap → wrap-main → footer-wrap. Responsive design w/ hamburger mobile nav.

## Page Structure

### Navigation (Global Header)
- Logo: "Lily Nailroom" (left)
- Menu items: Trang chủ /, Giới thiệu /gioi-thieu, Dịch vụ /dich-vu, NAIL DESIGN /design, GỘI ĐẦU /goi-dau, Blog /tin-tuc, Album /album, Liên hệ /lien-he
- Hotline: 0878050144 (top right)
- Mobile: hamburger toggle

### Subpages Detail

#### /gioi-thieu (About)
- H1: "Lily Nailroom"
- Layout: wrap-content
- Images: 8 (about intro + detail)
- Content: biography, mission statement, "Xem chi tiết" CTA

#### /dich-vu (Services)
- H1: "Dịch vụ"
- Images: 14 (service/menu items in grid)
- Layout: 2 grid/layout classes detected
- Content: service listings w/ descriptions, pricing likely embedded

#### /design (Nail Design)
- H1: "NAIL DESIGN"
- Images: 14 (portfolio gallery)
- Layout: 2 grid classes (card/item layout)
- Content: design showcase, filterable or grid view

#### /goi-dau (Hair Package)
- H1: "GỘI ĐẦU"
- Images: 8
- Layout classes: wrap-main, item containers, arcu-item-title/subtitle
- Content: package offerings w/ descriptions, pricing

#### /tin-tuc (Blog)
- H1: "Tin tức"
- Images: 8 (blog post thumbnails)
- Content: article listings w/ links to full posts
- No H2 sections detected (flat list structure)

#### /album (Gallery)
- H1: "Album"
- Images: 12 (activity/portfolio gallery)
- Layout: grid format, "Xem tất cả" CTA from homepage likely here

#### /lien-he (Contact & Booking)
- H1: "Lily Nailroom"
- Images: 8 (map, social icons)
- **Contact Form (1 form):**
  - `dataContact[fullname]`: text
  - `dataContact[phone]`: text
  - `dataContact[email]`: email
  - `dataContact[subject]`: text
  - `dataContact[message]`: textarea (1 detected)
  - `submit-contact`: submit button
  - Hidden: form_type, csrf_token
  - Reset button present
  - Full contact form (not just links)

## Visual Style

**Colors:**
- Primary: #AB5C84 (mauve/rose)
- White: #FFFFFF
- Accent structure: simple 2-color palette

**Fonts:**
- Font Awesome 6.4.0 (icons)
- Custom fonts: assets/css/fonts.css (likely Vietnamese support)
- No Google Fonts detected; local assets

**Overall Style:** Modern minimal, salon aesthetic, rose/white color scheme, contemporary layout

## Floating Contact Elements (Homepage observed)
- Hotline (tel: link)
- Zalo: https://zalo.me/0878050144
- Messenger (likely m.me/ link)
- Google Maps (embedded or link)

## Asset Inventory

| Category | Count | Purpose |
|----------|-------|---------|
| Logo variants | 4 | Header, footer, favicon |
| Banner/Slider | 1+ | Hero section (Swiper slider detected, 1920x960) |
| Service menu | 2+ | /dich-vu service items |
| Design portfolio | 14 | /design grid |
| About section | 8 | /gioi-thieu, goi-dau images |
| Blog thumbnails | 8 | /tin-tuc post thumbs |
| Gallery/Album | 12+ | /album activity photos |
| Feedback avatars | 4 | Homepage reviews (Như Bình, Ngọc Quý, Như Tâm, Kiu Chen) |
| Icons | 6.4 (Font Awesome) | Social, nav, CTA |
| **Total images** | ~50-60 | Various asset types |

## Shared Components
- Header w/ mobile toggle
- Footer: address (2/10 Bàu Bàng, Tân Bình, HCM), tel, email lilynailroom@gmail.com, visitor counter
- Floating buttons (hotline, Zalo, Messenger, Maps)
- CTA buttons: "Booking ngay", "Xem chi tiết", "Xem tất cả"
- Service menu grid layout (reused across /dich-vu, /design, /goi-dau)

## Technical Notes
- Swiper.js for hero slider (34 slider references detected)
- FontAwesome 6.4 for icons
- Form: PHP backend (csrf_token, form_type hidden fields suggest form.php handler)
- Responsive layout: grid + flexbox classes detected
- No detected: external CDNs (Google Fonts, jQuery), large JS frameworks

## Open Questions / Risks
1. Swiper slider animation/transition timing — needs video/screenshot for exact config
2. Blog pagination, filtering, or category structure not visible from HTML — may be dynamic
3. Contact form backend handler: does it email or store in DB? (affects clone approach)
4. Image compression/optimization strategy unknown
5. Mobile viewport behavior of grids (column count) — CSS media queries not extracted
