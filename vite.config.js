import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from `@vitejs/plugin-react`

export default defineConfig({
  base: '/react-app66/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
