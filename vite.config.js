import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NAZWA-REPOZYTORIUM/',   // 👈 TU wpisz nazwę repo
})