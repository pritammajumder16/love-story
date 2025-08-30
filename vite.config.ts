import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Prit Paro",
        short_name: "Prit Paro",
        description: "A collection of fun games to celebrate our love!",
        theme_color: "#f8a5c2",
        background_color: "#f8a5c2",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
        icons: [
          {
            src: "/images/icon-192x192.jpeg",
            sizes: "192x192",
            type: "image/jpeg",
            purpose: "maskable any",
          },
          {
            src: "/images/icon-512x512.jpeg",
            sizes: "512x512",
            type: "image/jpeg",
            purpose: "maskable any",
          },
          // Add more sizes for better compatibility
          {
            src: "/images/icon-384x384.jpeg",
            sizes: "384x384",
            type: "image/jpeg",
          },
          {
            src: "/images/icon-256x256.jpeg",
            sizes: "256x256",
            type: "image/jpeg",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,json}"],
        navigateFallback: null,
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|ico)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
