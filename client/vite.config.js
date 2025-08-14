import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE este necesar pentru GitHub Pages când site-ul nu e pe domeniu root
const base = process.env.GITHUB_PAGES === 'true' ? (process.env.BASE_PATH || '/') : '/'

export default defineConfig({
  plugins: [react()],
  base,
})