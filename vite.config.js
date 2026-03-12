import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
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
