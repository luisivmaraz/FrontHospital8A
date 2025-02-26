// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // Aquí aseguramos que '@' apunte a la carpeta 'src'
    },
  },
})