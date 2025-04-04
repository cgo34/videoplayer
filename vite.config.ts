import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@domain': path.resolve(__dirname, 'src/@domain'),
      '@application': path.resolve(__dirname, 'src/@application'),
      '@infrastructure': path.resolve(__dirname, 'src/@infrastructure'),
      '@presentation': path.resolve(__dirname, 'src/@presentation'),
      '@shared': path.resolve(__dirname, 'src/@shared')
    }
  }
})
