import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Prerender only when explicitly enabled (Puppeteer needs Chrome; Vercel/CI don't have it, so build would hang). Local: ENABLE_PRERENDER=1 npm run build
const runPrerender = process.env.ENABLE_PRERENDER === '1'

/** Prerender plugin only when not on Vercel/CI (avoids loading Puppeteer and hanging the build) */
async function getPrerenderPlugin() {
  if (!runPrerender) return []
  const vitePrerender = (await import('vite-plugin-prerender-esm-fix')).default
  const { prerenderRoutes } = await import('./prerender-routes.js')
  return [
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: prerenderRoutes,
      renderer: new vitePrerender.PuppeteerRenderer({
        renderAfterDocumentEvent: 'prerender-ready',
        renderAfterTime: 2000,
        maxConcurrentRoutes: 2,
        headless: true,
      }),
      postProcess(renderedRoute) {
        if (renderedRoute.route.endsWith('.html')) {
          renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
        }
        return renderedRoute
      },
    }),
  ]
}

// https://vite.dev/config/
export default defineConfig(async () => ({
  plugins: [
    react(),
    tailwindcss(),
    ...(await getPrerenderPlugin()),
  ],
  build: {
    minify: 'esbuild',
    target: 'es2020',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split heavy vendor libs into their own cached chunks
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'react-vendor'
            if (id.includes('react-router')) return 'router'
            if (id.includes('lucide-react')) return 'icons'
            // Keep remaining small node_modules in the default vendor chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
})
