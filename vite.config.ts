import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** file:// 打开 dist/index.html 时，带 crossorigin 的 script/link 会按 CORS 取本地文件而失败 → 白屏 */
function stripHtmlCrossorigin() {
  return {
    name: 'strip-html-crossorigin',
    enforce: 'post' as const,
    transformIndexHtml(html: string) {
      return html.replace(/\s+crossorigin(?:="[^"]*")?/gi, '')
    },
  }
}

export default defineConfig({
  plugins: [react(), stripHtmlCrossorigin()],
  // Relative base so dev works at / and GitHub Pages project sites resolve assets.
  base: './',
})
