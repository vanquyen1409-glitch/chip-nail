/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  CẤU HÌNH TIỆM — Chỉ cần sửa file này để đổi sang tiệm khác.        ║
 * ║  (Edit ONLY this file to rebrand the template for another salon.)  ║
 * ╚══════════════════════════════════════════════════════════════════╝
 * Chữ song ngữ: { vi, en }. Chữ trong [ngoặc vuông] là placeholder.
 */

export const site = {
  name: 'Chip Nail',
  tagline: { vi: 'Nâng niu vẻ đẹp đôi tay', en: 'Pamper your hands' },
  description: {
    vi: 'Tiệm nail hiện đại — thiết kế móng thời thượng, không gian thư giãn, đội ngũ tận tâm. Đặt lịch ngay để chăm sóc đôi tay của bạn.',
    en: 'Modern nail salon — trendy nail designs, a relaxing space and a dedicated team. Book today to pamper your hands.',
  },
  url: 'https://stately-moonbeam-946bef.netlify.app',
  year: new Date().getFullYear(),
};

export const contact = {
  phoneLabel: '(402) 499-2303',
  phoneTel: '+14024992303',
  email: '[email@tenmien.vn]',
  address: '[Số nhà, Đường, Phường, Quận, Thành phố]',
  mapUrl: '#',
  hours: [
    { days: { vi: 'Thứ 2 – Thứ 6', en: 'Mon – Fri' }, time: '09:00 – 20:00' },
    { days: { vi: 'Thứ 7 – Chủ nhật', en: 'Sat – Sun' }, time: '08:30 – 21:00' },
  ],
};

export const socials = {
  // Để '#' nghĩa là ẩn. Điền link thật để hiện ở footer.
  zalo: '#',
  messenger: '#',
  facebook: '#',
  instagram: '#',
  tiktok: '#',
};

export const nav = [
  { label: { vi: 'Trang chủ', en: 'Home' }, href: '#hero' },
  { label: { vi: 'Giới thiệu', en: 'About' }, href: '#about' },
  { label: { vi: 'Dịch vụ', en: 'Services' }, href: '#services' },
  { label: { vi: 'Đánh giá', en: 'Reviews' }, href: '#feedback' },
  { label: { vi: 'Hình ảnh', en: 'Gallery' }, href: '#gallery' },
  { label: { vi: 'Liên hệ', en: 'Contact' }, href: '#contact' },
];
