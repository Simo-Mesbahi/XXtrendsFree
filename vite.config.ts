import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/', // 🔁 Indispensable pour gérer les routes sur Vercel

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },

  server: {
    port: 3000,
    open: true,
    strictPort: true,
  },

  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: true,
    minify: 'esbuild',
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
