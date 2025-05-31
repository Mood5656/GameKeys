import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  target: 'static',
  generate: {
   fallback: true
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  modules: ['@pinia/nuxt'],
  nitro: {
    experimental: {
      websocket: true
    }
  },

  routeRules: {
    '/index1': { prerender: true, ssr: true, swr: 3600,},
    '/policy': { ssr: false },
    '/catalog': { ssr: true },
    "/promotions": {ssr: true},
    "/chat": {ssr: false},
    '/': {ssr: false},
    "/faq": {ssr: false},
    "/cart": {ssr: true}

  }
})