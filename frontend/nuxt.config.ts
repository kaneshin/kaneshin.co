import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',

  env: {
    language: 'ja'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/main.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios'
  ],

  buildModules: ['@nuxt/typescript-build'],

  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    'nuxt-fontawesome',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  fontawesome: {
    imports: [
      { set: '@fortawesome/free-solid-svg-icons', icons: ['fas'] },
      { set: '@fortawesome/free-brands-svg-icons', icons: ['fab'] }
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(/* config, ctx */) {}
  }
}

export default config
