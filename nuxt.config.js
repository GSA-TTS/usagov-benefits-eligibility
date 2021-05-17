import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BEARS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/index'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/uswds.client.js',
    '~/plugins/axe.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n'
  ],

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          projectName: 'Benefits Finder',
          banner: {
            official: 'An official website of the United States government',
            know: 'Here’s how you know',
            dropdown: {
              official: 'Official websites use .gov',
              officialDetails: 'A <strong>.gov</strong> website belongs to an official government organization in the United States.',
              secure: 'Secure .gov websites use HTTPS',
              secureDetails: 'A <strong>lock</strong>  or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.',
            },
          },
          skipnav: 'Skip to main content',
        },
        es: {
          projectName: 'Buscador de beneficios',
          banner: {
            official: 'Un sitio oficial del Gobierno de Estados Unidos',
            know: 'Así es como usted puede verificarlo',
            dropdown: {
              official: 'Los sitios web oficiales usan .gov',
              officialDetails: 'Un sitio web <strong>.gov</strong> pertenece a una organización oficial del Gobierno de Estados Unidos.',
              secure: 'Los sitios web seguros .gov usan HTTPS',
              secureDetails: 'Un <strong>candado</strong> o <strong>https://</strong> significa que usted se conectó de forma segura a un sitio web .gov. Comparta información sensible sólo en sitios web oficiales y seguros.',
            },
          },
          skipnav: 'Saltar al contenido principal',
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },

  generate: {
    dir: '_site'
  },
}
