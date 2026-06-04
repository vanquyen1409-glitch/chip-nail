# Nail Salon Template (Astro)

Template landing page **1 trang** cho tiệm nail — white-label, dễ bán & tùy biến cho từng tiệm.
Nền **tối mặc định** + nút chuyển sáng (lưu localStorage), responsive mobile-first, hiệu ứng
cuộn mượt, tối ưu SEO. Mỗi section là một file component `.astro` riêng.

## 1. Chạy thử & build

```bash
npm install
npm run dev       # xem tại http://localhost:4321
npm run compile   # build ra thư mục dist/  (lệnh "astro build")
npm run preview   # xem bản build
```

> Máy có phần mềm diệt virus chặn chứng chỉ TLS? Chạy kèm:
> `NODE_OPTIONS=--use-system-ca npm install` (Windows PowerShell: `$env:NODE_OPTIONS="--use-system-ca"; npm install`).

## 2. Đổi sang tiệm khác — chỉ sửa 2 file

| Cần đổi | File |
|--------|------|
| Tên tiệm, SĐT, email, địa chỉ, giờ mở cửa, mạng xã hội, menu | `src/config/site.ts` |
| Chữ Hero, Giới thiệu, **bảng giá dịch vụ**, đánh giá, chú thích ảnh | `src/config/content.ts` |
| Màu thương hiệu (1 dòng) | `src/styles/tokens.css` → `--brand-h / -s / -l` |
| Domain thật (SEO/OG) | `astro.config.mjs` → `site` và `public/robots.txt` |

Mọi chữ trong `[ngoặc vuông]` là **placeholder** — thay bằng thông tin thật của tiệm.

## 3. Thay ảnh

Ảnh nằm trong `public/images/`. Thay file **cùng tên, đúng tỉ lệ** là xong:

| File | Tỉ lệ | Dùng cho |
|------|-------|---------|
| `hero-1/2/3.jpg` | 2:1 (≈1600×800) | Slide hero |
| `about.jpg` | 4:5 (≈800×1000) | Ảnh phần Giới thiệu |
| `gallery-1..4.jpg` | dọc (≈600×826) | Lưới hình ảnh |
| `gallery-wide-1/2.jpg` | ngang (≈1200×388) | Ô ngang trong lưới |
| `avatar-1..4.jpg` | vuông (≈200×200) | Ảnh đại diện đánh giá |

Ảnh mẫu lấy từ Unsplash (miễn phí, không cần ghi nguồn). Nên thay bằng ảnh thật của tiệm.

## 4. Deploy miễn phí (Netlify)

1. Đẩy code lên GitHub.
2. Netlify → *Add new site* → chọn repo.
3. Build command: `npm run compile` · Publish directory: `dist`.
4. (Tùy chọn) gắn domain riêng, rồi sửa `site` trong `astro.config.mjs`.

> Vercel / Cloudflare Pages cũng dùng được: cùng build command `npm run compile`, output `dist`.

## 5. Cấu trúc thư mục

```
src/
├─ config/      site.ts (thông tin tiệm) · content.ts (nội dung)
├─ layouts/     BaseLayout.astro (SEO + theme chống nhấp nháy)
├─ styles/      tokens.css (màu/biến) · global.css
├─ scripts/     reveal.ts (hiệu ứng cuộn)
├─ components/
│  ├─ partials/ Header · Footer · ThemeToggle · FloatingContact
│  ├─ sections/ Hero · About · Services · Feedback · Gallery
│  └─ ui/       Button · SectionTitle
└─ pages/       index.astro · 404.astro
```

## Ghi chú
- Form/nút "Đặt lịch" hiện trỏ tới mục liên hệ + gọi điện/Zalo (không có backend gửi dữ liệu).
- Hiệu ứng tự tắt khi người dùng bật *giảm chuyển động* (prefers-reduced-motion).
- Đây là template gốc tự thiết kế; không chứa logo/nội dung/ảnh bản quyền của bên thứ ba.
