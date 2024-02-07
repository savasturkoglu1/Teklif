// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
    
    }
  },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  css: ['~/assets/css/style.css'],
  plugins: ["~/plugins/preline.client.ts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true }
})
