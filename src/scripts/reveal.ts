/**
 * Scroll reveal nhẹ bằng IntersectionObserver.
 * Thêm class `is-visible` khi phần tử [data-reveal] vào màn hình.
 * Tự tắt hoàn toàn nếu người dùng bật "giảm chuyển động".
 */
export function initReveal(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!els.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        // bật will-change ngay trước khi animate -> GPU mượt, rồi gỡ sau khi xong
        el.style.willChange = 'transform, opacity';
        el.classList.add('is-visible');
        el.addEventListener(
          'transitionend',
          () => { el.style.willChange = 'auto'; },
          { once: true }
        );
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  els.forEach((el) => io.observe(el));
}
