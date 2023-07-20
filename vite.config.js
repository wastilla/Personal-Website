import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Personal-Website/',
  // build: {
  //   outDir: 'dist',
  //   base: '/Portfolio-Website/',
  //   minify: true,
  // },
})
