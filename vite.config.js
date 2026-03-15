import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vitePrerender from 'vite-plugin-prerender-esm-fix'
import { prerenderRoutes } from './prerender-routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
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
