import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

/** Inline compiled CSS into index.html in production so it does not render-block first paint. */
const inlineCssPlugin = () => ({
  name: 'inline-css',
  enforce: 'post',
  apply: 'build',
  generateBundle(_, bundle) {
    const htmlAsset = bundle['index.html'];
    if (!htmlAsset || typeof htmlAsset.source !== 'string') return;
    let html = htmlAsset.source;
    for (const [fileName, chunk] of Object.entries(bundle)) {
      if (fileName.endsWith('.css') && chunk.type === 'asset') {
        const escaped = fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const linkRe = new RegExp(`<link[^>]+href=["']/?${escaped}["'][^>]*>`);
        if (linkRe.test(html)) {
          html = html.replace(linkRe, `<style>${chunk.source}</style>`);
          delete bundle[fileName];
        }
      }
    }
    htmlAsset.source = html;
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCssPlugin()],
  build: {
    target: 'es2020',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
        },
      },
    },
  },
})
