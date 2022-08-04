export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "CosmosDocs.io - de la documentation, de l'actualité et plus encore sur vos cryptomonnaies préférées dans l'environnement Cosmos (ATOM)",
    htmlAttrs: {
      lang: 'fr-FR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: "HandheldFriendly", content: "True" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { rel: 'sitemap', type: 'application/xml', href: `${process.env.WEBSITE_URL || "http://localhost:4500"}/sitemap.xml` },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/android-chrome-512x512.png' },
      { hid: "canonical", rel: "canonical", href: `${process.env.WEBSITE_URL || "http://localhost:4500"}` },
    ]
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID || ""
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  server: {
    port: 4500
  },
  
  robots: {
    UserAgent: "*",
    Disallow: ['/admin'],
    Sitemap: "https://www.cosmosdocs.io/sitemap.xml"
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',

    '@nuxt/postcss8',
    '@nuxtjs/localforage',
    "@nuxtjs/color-mode",
    '@nuxtjs/google-analytics',
  ],

  tailwindcss: {
    mode: "jit",
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ""
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/robots',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // PWA module configuration: https://pwa.nuxtjs.org/
  pwa: {
    meta: {
      title: "CosmosDocs",
      author: "Team Cosmos France",
    },
    manifest: {
      name: "CosmosDocs",
      short_name: "CosmosDocs",
      description: "Découvrez les spécificités techniques de vos cryptomonnaies préféréés sur le réseau Cosmos",
      lang: "fr",
      display: 'standalone',
      theme_color: "#000000",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  localforage: {
    instances: [{
      name: "CosmosDocsIO",
      storeName: "settings"
    }, {
      name: "CosmosDocsIO",
      storeName: "data"
    }]
  }
}
