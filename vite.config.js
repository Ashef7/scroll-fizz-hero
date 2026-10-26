import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages project sites, keep this base matching your repository name.
export default defineConfig({
  base: '/scroll-fizz-hero/',
  plugins: [react(), tailwindcss()],
})