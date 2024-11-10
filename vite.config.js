import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Nutrias Chambeadoras APP',
        short_name: 'Nutria App',
        description: 'App de la nutria',
        theme_color: '#1de9b6',
        icons: [
          {
            src: '/img/pwa/nutria-chambeadora-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/pwa/nutria-chambeadora-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/img/pwa/nutria-chambeadora-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
})
