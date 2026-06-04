# Homepage Analysis — lilynailroom.com

Source HTML saved at `lily_raw.html` (31KB). CMS: nasani.vn (Vietnamese). Lang: Vietnamese.

## Section order (top→bottom)
1. **Header/Nav** (`header-wrap`, `header__bottom-flex`, `header__logo`, `menu menu_desktop`, `menu_mobi`/`icon_menu_mobi`)
   - Logo img + desktop menu + mobile hamburger overlay (`menures_*`: header/content/footer + close btn).
   - Menu: Trang chủ `/`, Giới thiệu `/gioi-thieu`, Dịch vụ `/dich-vu`, NAIL DESIGN `/design`, GỘI ĐẦU `/goi-dau`, Blog `/tin-tuc`, Album `/album`, Liên hệ `/lien-he`.
2. **Hero slider** — Swiper (`swiper-wrapper`), full-width slides 1920x960 webp.
3. **About** (`wrap-about`, `content-about`, `title-about`, `desc_about text-split`, `view-about`)
   - Eyebrow "welcome to Lily Nailroom" + H? "Lily Nailroom" + VN paragraph (bảo hành 7 ngày...) + "Xem chi tiết" → /gioi-thieu + image (355x550).
4. **Services** (`wrap-menu-home padding-top-bottom`, `bannermenu`, `ttmenu`, `listmenu`)
   - H2 "Dịch vụ" / "Menu Lily Nailroom" + hotline 0878050144 + "Booking ngay" CTA + menu images.
5. **Feedback** (H2 "Feedback") — 4 cards: Như Bình, Ngọc Quý, Như Tâm, Kiu Chen (avatar 110x110 + quote text).
6. **Gallery** (H2 "Hình ảnh hoạt động") — image grid (li1-li4 etc., 385x530/790x255/385x255) + "Xem tất cả" → /album.
7. **Footer** (`footer-wrap`, `footer-flex`, `footer-news`, `social-footer`, `footer-info`, `footer-copyright`)
   - Địa Chỉ: 2/10 Bàu Bàng, Phường Tân Bình, HCM. ĐT: 0878050144. Email: lilynailroom@gmail.com. Copyright © 2026. Visitor counter (online/ngày/tuần/tháng/tổng).
8. **Floating side buttons** — Hotline `tel:0878050144`, Zalo `https://zalo.me/0878050144`, Messenger (fb profile id=61562937031061), Maps `maps.app.goo.gl/...`.

## Visual
- Primary color #AB5C84 (rose/mauve) on white. (Clone: dark default + light toggle.)
- Font Awesome 6.4 icons; local Vietnamese webfont (assets/css/fonts.css). No Google Fonts.
- Images served as resized `.webp` thumbs.

## CTAs reused: "Booking ngay", "Xem chi tiết", "Xem tất cả".

## Decisions (from user)
- Stack: **Astro**. Scope: **full site (home + 7 subpages)**. Content: **keep VN text + placeholder images**. Animations: **moderate/smooth (fade/slide on scroll)**. Theme: **dark default + light toggle (localStorage)**. Responsive mobile+desktop.
