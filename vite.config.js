import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from `@vitejs/plugin-react`

export default defineConfig({

  base: '/react-app66/', //ชื่อต้องตรงกับชื่อ repo
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
