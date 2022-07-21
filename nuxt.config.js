export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cosmosdocs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // PWA module configuration: https://pwa.nuxtjs.org/
  pwa: {
    meta: {
      title: "CosmosDocs.io",
      author: "Team Cosmos France",
    },
    manifest: {
      name: "CosmosDocs.io",
      short_name: "CosmosDocs.io",
      description: "Découvrez les spécificités techniques de vos cryptomonnaies préféréés sur le réseau Cosmos",
      lang: "fr",
      display: 'standalone',
      theme_color: "dark",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
