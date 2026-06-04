// @ts-check
import { defineConfig } from 'astro/config';

// Static white-label nail-salon template.
// Đổi `site` sang domain thật của tiệm để canonical/OG chính xác.
// (sitemap.xml đặt tĩnh trong public/ — nhớ đổi domain trong đó nếu đổi tên miền)
export default defineConfig({
  site: 'https://chipnail.netlify.app',
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
