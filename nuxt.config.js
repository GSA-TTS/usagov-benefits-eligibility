import fs from "fs"

const getLifeEvents = () => {
  const files = fs.readdirSync("./content/life-events/")
  const paths = []

  files.forEach((le) => paths.push(`/${le}`))
  files.forEach((le) => paths.push(`/es/${le}`))

  return paths.map((f) => f.replace(/.md$/gi, ""))
}
// https://federalist.18f.gov/documentation/env-vars-on-federalist-builds/#default-environment-variables
const sitePrefix = process.env.BASEURL ? `${process.env.BASEURL}/` : ""

// Figure out one life event version
export default {
  publicRuntimeConfig: {
    // This is used to toggle whether or not internationalization is enabled
    languageToggleActive: true,
    branchName: process.env.BRANCH,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Benefits Finder | USAGov",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Answer a few questions and get matched to federal government assistance. Find financial, health care, burial, education, and other benefits.",
      },
      {
        property: "og:url",
        content: "https://www.usa.gov/about-the-us",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: "Official Guide to Government Information and Services | USAGov",
      },
      {
        property: "og:description",
        content: "USA.gov can help you start your search for government information by topic and agency.",
      },
      {
        property: "og:image",
        content: "https://www.usa.gov/images/facebook_share_thumbnail.png",
      },
      {
        property: "og:image:secure_url",
        content: "https://www.usa.gov/images/facebook_share_thumbnail.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: sitePrefix + "USA_Fav_Icon152_default.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/uswds.client.js", "~/plugins/axe.client.js", "~/plugins/i18n.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxt/content", "@nuxtjs/i18n", "@nuxtjs/dotenv", "@nuxtjs/gtm", "@nuxtjs/sitemap"],
  gtm: {
    id: "GTM-P2F6CBK",
  },
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.js",
        name: "English",
      },
      {
        code: "es",
        file: "es.js",
        name: "Español",
      },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "en",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: [],
    csv: {},
  },

  // sitemap
  sitemap: {
    hostname: "https://benefits-tool.usa.gov",
    exclude: ["**/404"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    extend(config, { isClient, isDev }) {
      if (!isDev) {
        config.output.publicPath = sitePrefix
      }
    },
    terser: {
      // https://github.com/terser/terser#compress-options
      // Exclude console.logs from prod builds. ( drop_console: true).
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },

  generate: {
    dir: "_site",
    routes: getLifeEvents().map((le) => le),
  },

  router: {
    base: process.env.NODE_ENV !== "production" ? "" : sitePrefix,
    linkActiveClass: "usa-current",
    linkExactActiveClass: "usa-current",
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "/:lang/*",
        component: resolve(__dirname, "pages/404.vue"),
      })
    },
  },
}
