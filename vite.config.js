import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
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
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document' || request.destination === 'script' || request.destination === 'style',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
      // Habilita el service worker de Firebase
      srcDir: 'public',
      filename: 'firebase-messaging-sw.js',
    }),
  ],
});
