// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Rubik: [300, 400, 500, 600, 700],
    },
  },
});
