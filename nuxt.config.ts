// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light',
  },
  ui: {
    safelistColors: ['success'],
    icons: ['mdi', 'simple-icons'],
  },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt'],
  devtools: { enabled: true },
  runtimeConfig: {
    apiBase: 'https://fajar-uas.sirclo.me.dmmy.me',
  },
})
