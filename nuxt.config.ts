// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light',
  },
  ui: {
    icons: ['mdi', 'simple-icons'],
  },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  devtools: { enabled: true },
})
