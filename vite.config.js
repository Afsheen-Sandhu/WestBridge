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
    // Use esbuild for minification (built-in, fast, no extra install needed)
    minify: 'esbuild',
    target: 'es2020',
    // Inline small assets as base64 instead of separate requests
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Manual chunk splitting — keeps each vendor separate so
        // unchanged chunks stay cached and pages only load what they need
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
    // Warn when a chunk exceeds 500 KiB
    chunkSizeWarningLimit: 500,
  },
  // Speed up cold starts by pre-bundling heavy deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
})
