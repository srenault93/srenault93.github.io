import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User page served from the domain root → base '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})
