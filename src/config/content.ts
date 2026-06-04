/**
 * NỘI DUNG SONG NGỮ — sửa chữ ở đây. Mỗi chuỗi dạng { vi, en }.
 * Giá dịch vụ theo Marenda Nails: VND hiển thị ở bản tiếng Việt, USD ở bản tiếng Anh.
 */

/* ---------- HERO (slider) ---------- */
export const heroSlides = [
  {
    image: '/images/hero-1.jpg',
    alt: { vi: 'Bộ móng được chăm chút tỉ mỉ', en: 'Beautifully finished manicure' },
    eyebrow: { vi: 'Tiệm nail của bạn', en: 'Your nail studio' },
    title: { vi: 'Đôi tay xinh,\ntự tin tỏa sáng', en: 'Beautiful hands,\nconfident you' },
    desc: {
      vi: 'Thiết kế móng theo xu hướng, kỹ thuật sạch sẽ và không gian thư giãn dành riêng cho bạn.',
      en: 'Trendy nail designs, clean technique and a relaxing space just for you.',
    },
  },
  {
    image: '/images/hero-2.jpg',
    alt: { vi: 'Mẫu sơn gel màu sắc hiện đại', en: 'Modern colorful gel nails' },
    eyebrow: { vi: 'Xu hướng mới', en: 'New trends' },
    title: { vi: 'Mẫu mới mỗi tuần,\nhợp mọi phong cách', en: 'New looks weekly,\nfor every style' },
    desc: {
      vi: 'Từ tối giản thanh lịch đến nghệ thuật cầu kỳ — luôn có mẫu phù hợp với bạn.',
      en: 'From elegant minimal to detailed nail art — there is always a look for you.',
    },
  },
  {
    image: '/images/hero-3.jpg',
    alt: { vi: 'Không gian tiệm nail sạch sẽ, ấm cúng', en: 'Clean, cozy nail salon space' },
    eyebrow: { vi: 'Trải nghiệm thư giãn', en: 'A relaxing experience' },
    title: { vi: 'Chăm sóc tận tâm,\nbảo hành an tâm', en: 'Caring service,\nworry-free warranty' },
    desc: {
      vi: 'Dụng cụ tiệt trùng riêng từng khách, bảo hành mẫu móng để bạn hoàn toàn yên tâm.',
      en: 'Sterilized tools per guest and a nail warranty for complete peace of mind.',
    },
  },
];

/* ---------- ABOUT (Giới thiệu) ---------- */
export const about = {
  eyebrow: { vi: 'Về chúng tôi', en: 'About us' },
  title: {
    vi: 'Không gian làm đẹp dành riêng cho đôi tay bạn',
    en: 'A beauty space dedicated to your hands',
  },
  paragraphs: [
    {
      vi: 'Chúng tôi là tiệm nail hướng tới sự tinh tế trong từng chi tiết: đường nét gọn gàng, màu sắc hài hòa và cảm giác thư giãn trọn vẹn mỗi lần ghé thăm.',
      en: 'We are a nail studio devoted to detail: clean lines, harmonious colors and a truly relaxing visit every time.',
    },
    {
      vi: 'Đội ngũ kỹ thuật viên được đào tạo bài bản, luôn cập nhật xu hướng mới và đặt sự an toàn, vệ sinh lên hàng đầu.',
      en: 'Our trained technicians keep up with the latest trends and always put safety and hygiene first.',
    },
  ],
  highlights: [
    { vi: 'Dụng cụ tiệt trùng riêng', en: 'Sterilized personal tools' },
    { vi: 'Mẫu cập nhật theo mùa', en: 'Seasonal new designs' },
    { vi: 'Bảo hành sau khi làm', en: 'Post-service warranty' },
    { vi: 'Tư vấn màu hợp da tay', en: 'Color advice for your skin tone' },
  ],
  badge: { vi: 'ngày bảo hành mẫu móng', en: 'day nail warranty' },
  image: '/images/about.jpg',
  imageAlt: { vi: 'Kỹ thuật viên đang chăm sóc móng cho khách', en: 'Technician caring for a guest’s nails' },
};

/* ---------- SERVICES (Bảng giá Marenda — VND ở vi, USD ở en) ---------- */
export const serviceNote = {
  vi: 'Giá tham khảo, có thể thay đổi mà không báo trước. Liên hệ để được tư vấn chi tiết.',
  en: 'Prices are for reference and subject to change without notice. Contact us for details.',
};

export const serviceGroups = [
  {
    name: { vi: 'Làm móng tay', en: 'Manicures' },
    items: [
      { name: { vi: 'Làm móng cơ bản', en: 'Regular Manicure' }, price: { vi: '625.000đ', en: '$25' } },
      { name: { vi: 'Làm móng kiểu Pháp', en: 'French Manicure' }, price: { vi: '750.000đ', en: '$30' } },
      { name: { vi: 'Làm móng cao cấp', en: 'Deluxe Manicure' }, price: { vi: '750.000đ', en: '$30' } },
      { name: { vi: 'Móng hương hoa + khăn ấm', en: 'Floral Scent + Warm Towel' }, price: { vi: '750.000đ', en: '$30' } },
      { name: { vi: 'Tinh dầu nến + hương hoa', en: 'Candle Oil + Floral Scent' }, price: { vi: '875.000đ', en: '$35' } },
      { name: { vi: 'Đổi màu sơn', en: 'Color Change' }, price: { vi: '375.000đ', en: '$15' } },
      { name: { vi: 'Sơn gel Shellac 1 màu', en: 'Shellac Color' }, price: { vi: '925.000đ', en: '$37' }, note: { vi: 'Tháo Shellac cũ +75.000đ', en: 'Old shellac take-off +$3' } },
      { name: { vi: 'Shellac kiểu Pháp', en: 'French Shellac' }, price: { vi: '1.050.000đ+', en: '$42+' } },
      { name: { vi: 'Đổi màu Shellac', en: 'Color Change Shellac' }, price: { vi: '625.000đ', en: '$25' } },
      { name: { vi: 'Shellac loang màu (ombre)', en: 'Shellac Ombre' }, price: { vi: '1.175.000đ', en: '$47' } },
    ],
  },
  {
    name: { vi: 'Làm móng chân (Pedicure)', en: 'Pedicures' },
    items: [
      { name: { vi: 'Nu Skin cơ bản', en: 'Basic Nu Skin' }, price: { vi: '1.000.000đ', en: '$40' } },
      { name: { vi: 'Nu Skin Smoothing', en: 'Nu Skin Smoothing' }, price: { vi: '1.125.000đ', en: '$45' } },
      { name: { vi: 'Nu Skin Ice Dancer', en: 'Nu Skin Ice Dancer' }, price: { vi: '1.250.000đ', en: '$50' } },
      { name: { vi: 'Nu Skin Firewalker', en: 'Nu Skin Firewalker' }, price: { vi: '1.375.000đ', en: '$55' } },
      { name: { vi: 'Nu Skin Supreme', en: 'Nu Skin Supreme Pack' }, price: { vi: '1.625.000đ', en: '$65' } },
      { name: { vi: 'Spa Pedicure', en: 'Spa Pedicure' }, price: { vi: '900.000đ', en: '$36' } },
      { name: { vi: 'Pedicure đắp mặt nạ', en: 'Mask Pedicure' }, price: { vi: '1.000.000đ', en: '$40' } },
      { name: { vi: 'Spa Pedicure cao cấp', en: 'Deluxe Spa Pedicure' }, price: { vi: '1.250.000đ', en: '$50' } },
      { name: { vi: 'Pedi in a Box (4 bước)', en: 'Pedi in a Box (4 Steps)' }, price: { vi: '1.250.000đ', en: '$50' } },
      { name: { vi: 'Spa Pedicure 6 bước', en: 'Six Step Deluxe Pedicure' }, price: { vi: '1.625.000đ', en: '$65' } },
      { name: { vi: 'Pedicure nhanh', en: 'Express Pedicure' }, price: { vi: '700.000đ', en: '$28' } },
      { name: { vi: 'Lấy da chai', en: 'Callus Removal' }, price: { vi: '125.000đ', en: '$5' } },
      { name: { vi: 'Đổi màu sơn chân', en: 'Toenail Polish Change' }, price: { vi: '375.000đ', en: '$15' } },
      { name: { vi: 'Pedicure trẻ em (≤10t)', en: 'Kids Pedicure (≤10)' }, price: { vi: '700.000đ', en: '$28' } },
      { name: { vi: 'Combo trẻ em (chân + sơn tay)', en: 'Kids Pedi + Finger Polish' }, price: { vi: '875.000đ', en: '$35' } },
    ],
  },
  {
    name: { vi: 'Móng bột (Acrylic)', en: 'Acrylics' },
    items: [
      { name: { vi: 'Pink & White – Bộ đầy', en: 'Pink & White – Full Set' }, price: { vi: '1.500.000đ', en: '$60' } },
      { name: { vi: 'Pink & White – Dặm', en: 'Pink & White – Fill-In' }, price: { vi: '1.375.000đ', en: '$55' } },
      { name: { vi: 'Acrylic + Shellac – Bộ đầy', en: 'Acrylic & Shellac – Full Set' }, price: { vi: '1.325.000đ', en: '$53' } },
      { name: { vi: 'Acrylic + Shellac – Dặm', en: 'Acrylic & Shellac – Fill-In' }, price: { vi: '1.200.000đ', en: '$48' } },
      { name: { vi: 'Ombre P&W – Bộ đầy', en: 'Ombre P&W – Full Set' }, price: { vi: '1.575.000đ', en: '$63' } },
      { name: { vi: 'Ombre P&W – Dặm', en: 'Ombre P&W – Fill-In' }, price: { vi: '1.450.000đ', en: '$58' } },
      { name: { vi: 'Bột màu – Bộ đầy', en: 'Color Powder – Full Set' }, price: { vi: '1.375.000đ', en: '$55' } },
      { name: { vi: 'Bột màu – Dặm', en: 'Color Powder – Fill-In' }, price: { vi: '1.250.000đ', en: '$50' } },
      { name: { vi: 'Móng dài / tạo dáng', en: 'Long nails / shape' }, price: { vi: '+75.000đ trở lên', en: '+$3 & up' } },
    ],
  },
  {
    name: { vi: 'Nhúng bột (Dipping)', en: 'Dipping Powder' },
    items: [
      { name: { vi: 'Nhúng bột', en: 'Dipping' }, price: { vi: '1.125.000đ', en: '$45' }, note: { vi: 'Tháo bột cũ +75.000đ', en: 'Old dipping take-off +$3' } },
      { name: { vi: 'Nhúng bột – Bộ đầy', en: 'Dipping Full Set' }, price: { vi: '1.250.000đ', en: '$50' } },
      { name: { vi: 'Nhúng kiểu Pháp', en: 'French Dipping' }, price: { vi: '1.250.000đ+', en: '$50+' } },
      { name: { vi: 'Nhúng kiểu Pháp – Bộ đầy', en: 'French Dipping Full Set' }, price: { vi: '1.375.000đ+', en: '$55+' } },
      { name: { vi: 'Nhúng ombre', en: 'Ombre Dipping' }, price: { vi: '1.375.000đ', en: '$55' } },
      { name: { vi: 'Nhúng ombre – Bộ đầy', en: 'Ombre Dipping Full Set' }, price: { vi: '1.500.000đ', en: '$60' } },
      { name: { vi: 'Móng dài / tạo dáng', en: 'Long nails / shape' }, price: { vi: '+75.000đ trở lên', en: '+$3 & up' } },
    ],
  },
  {
    name: { vi: 'Gel-X (móng úp gel)', en: 'Gel-X' },
    items: [
      { name: { vi: 'Gel-X – Bộ đầy', en: 'Gel-X Full Set' }, price: { vi: '1.250.000đ', en: '$50' } },
      { name: { vi: 'Gel-X – Bộ đầy + tháo cũ', en: 'Gel-X Full Set + Take Off' }, price: { vi: '1.375.000đ', en: '$55' } },
      { name: { vi: 'Gel-X kiểu Pháp – Bộ đầy', en: 'Gel-X French Full Set' }, price: { vi: '1.375.000đ+', en: '$55+' } },
      { name: { vi: 'Gel-X ombre – Bộ đầy', en: 'Gel-X Ombre Full Set' }, price: { vi: '1.500.000đ+', en: '$60+' } },
      { name: { vi: 'Móng dài / tạo dáng', en: 'Long nails / shape' }, price: { vi: '+75.000đ trở lên', en: '+$3 & up' } },
    ],
  },
  {
    name: { vi: 'Gel lai T.A.P', en: 'T.A.P Hybrid Gel' },
    items: [
      { name: { vi: 'Một màu', en: 'One Color' }, price: { vi: '1.250.000đ', en: '$50' } },
      { name: { vi: 'Dặm lại', en: 'Refill' }, price: { vi: '1.250.000đ', en: '$50' } },
      { name: { vi: 'Bộ đầy', en: 'Full Set' }, price: { vi: '1.375.000đ', en: '$55' } },
      { name: { vi: 'Đầu Pháp', en: 'French Tip' }, price: { vi: '1.375.000đ', en: '$55' } },
      { name: { vi: 'Kiểu Pháp – Bộ đầy', en: 'French Full Set' }, price: { vi: '1.500.000đ', en: '$60' } },
      { name: { vi: 'Ombre', en: 'Ombre' }, price: { vi: '1.500.000đ', en: '$60' } },
      { name: { vi: 'Ombre – Bộ đầy', en: 'Ombre Full Set' }, price: { vi: '1.625.000đ', en: '$65' } },
      { name: { vi: 'Tháo / tạo dáng / móng dài', en: 'Take off / shape / long' }, price: { vi: '+75.000đ trở lên', en: '+$3 & up' } },
    ],
  },
  {
    name: { vi: 'Builder Gel', en: 'Builder Gel' },
    items: [
      { name: { vi: 'Phủ gel (overlay)', en: 'Overlay' }, price: { vi: '1.250.000đ', en: '$50' } },
      { name: { vi: 'Bộ đầy', en: 'Full Set' }, price: { vi: '1.375.000đ', en: '$55' } },
      { name: { vi: 'Bộ đầy Pháp / ombre', en: 'Full Set French / Ombre' }, price: { vi: '1.625.000đ', en: '$65' } },
      { name: { vi: 'Tạo dáng / độ dài', en: 'Shape / length' }, price: { vi: '+75.000đ trở lên', en: '+$3 & up' } },
    ],
  },
];

/* ---------- FEEDBACK (đánh giá mẫu — nhân vật hư cấu) ---------- */
export const testimonials = [
  {
    name: { vi: 'Khách hàng A', en: 'Customer A' },
    role: { vi: 'Nhân viên văn phòng', en: 'Office worker' },
    avatar: '/images/avatar-1.jpg',
    rating: 5,
    quote: {
      vi: 'Không gian sạch sẽ, bạn thợ tư vấn màu rất hợp da tay mình. Giá combo hợp lý so với chất lượng nhận được.',
      en: 'Spotless space and the tech matched the color to my skin tone perfectly. Great value for the quality.',
    },
  },
  {
    name: { vi: 'Khách hàng B', en: 'Customer B' },
    role: { vi: 'Khách quen', en: 'Regular guest' },
    avatar: '/images/avatar-2.jpg',
    rating: 5,
    quote: {
      vi: 'Móng mình mỏng yếu, từ ngày làm dịch vụ ở đây thì khỏe hẳn. Thợ tháo gel rất nhẹ tay, không xước móng thật.',
      en: 'My nails were thin and weak, but they got much stronger here. Gel removal was gentle, no damage to my natural nails.',
    },
  },
  {
    name: { vi: 'Khách hàng C', en: 'Customer C' },
    role: { vi: 'Lần đầu trải nghiệm', en: 'First-time guest' },
    avatar: '/images/avatar-3.jpg',
    rating: 5,
    quote: {
      vi: 'Lần đầu ghé nhưng rất ấn tượng. Màu lên tay cực sáng và sang. Đặt lịch trước nên tới là được làm luôn.',
      en: 'First visit and I was impressed. The color looked bright and classy. I booked ahead and was served right away.',
    },
  },
  {
    name: { vi: 'Khách hàng D', en: 'Customer D' },
    role: { vi: 'Yêu nail art', en: 'Nail-art lover' },
    avatar: '/images/avatar-4.jpg',
    rating: 5,
    quote: {
      vi: 'Mẫu vẽ tay tỉ mỉ, giữ form lâu. Sẽ quay lại và giới thiệu cho bạn bè. Rất hài lòng với dịch vụ.',
      en: 'Hand-painted art was meticulous and lasted long. I’ll be back and will recommend to friends. Very happy.',
    },
  },
];

/* ---------- GALLERY (Hình ảnh hoạt động) ---------- */
export const gallery = [
  { image: '/images/gallery-1.jpg', alt: { vi: 'Mẫu móng tông pastel nhẹ nhàng', en: 'Soft pastel nail set' }, span: 'tall' },
  { image: '/images/gallery-wide-1.jpg', alt: { vi: 'Góc làm việc tại tiệm', en: 'Salon workstation' }, span: 'wide' },
  { image: '/images/gallery-2.jpg', alt: { vi: 'Mẫu nail art đính đá', en: 'Crystal-embellished nail art' }, span: 'tall' },
  { image: '/images/gallery-3.jpg', alt: { vi: 'Sơn gel màu trầm sang trọng', en: 'Elegant deep-tone gel polish' }, span: 'tall' },
  { image: '/images/gallery-wide-2.jpg', alt: { vi: 'Không gian thư giãn của tiệm', en: 'The salon’s relaxing space' }, span: 'wide' },
  { image: '/images/gallery-4.jpg', alt: { vi: 'Mẫu móng ánh nhũ lấp lánh', en: 'Shimmering glitter nails' }, span: 'tall' },
];
