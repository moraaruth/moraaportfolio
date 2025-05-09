import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from 'react'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})