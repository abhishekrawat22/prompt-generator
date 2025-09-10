import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'PROMPTER - AI Prompt Builder',
        short_name: 'PROMPTER',
        description: 'An intelligent tool to help you craft the perfect AI prompt, every time.',
        theme_color: '#111827',
        background_color: '#111827',
        display: 'standalone',
        start_url: '.',
        icons: [
          {
            "src": "/apple-touch-icon.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "/favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "/favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
          },
          {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "/favicon.ico",
            "sizes": "16x16",
            "type": "image/x-icon"
          },
          {
            "src": "/favicon.svg",
            "sizes": "16x16",
            "type": "image/svg+xml"
          }
        ]
      }
    })
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API calls to the backend
    },
  },
})
