export default {
  target: 'static', // 'server' or 'static'

  head: {
    title: 'Site_name',
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    htmlAttrs: { lang: 'fr' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Display number in hyperlink on mobile to call when you click on it
      { name: 'format-detection', content: 'telephone=no' },
      // SEO
      { hid: 'description', name: 'description', content: 'Site_description' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'robots', property: 'robots', content: 'index, follow' },
      // Windows pin sharing
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#ffffff' },
      { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/favicon.ico' },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
      // How the website display when is sharing on social media
      { hid: 'og:site_name', property: 'og:site_name', content: 'Site_name' },
      { hid: 'og:image', property: 'og:image', content: 'https://f.hellowork.com/blogdumoderateur/2013/09/google-logo.png' },
      { hid: 'og:title', property: 'og:title', content: 'Site_title' },
      { hid: 'og:description', property: 'og:description', content: 'Site_description' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Site_description' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000/'
  },

  css: [
    '@/assets/css/reset.css',
  ],

  plugins: [],

  components: [
    { path: '~/components' },
    { path: '~/components/reusable' },
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: `https://${process.env.BASE_URL}`,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    trailingSlash: true,
    exclude: []
  },

  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  build: {}
}
