import fs from "fs"

const getLifeEvents = function () {
  const files = fs.readdirSync("./content/life-events/")
  return files.map((f) => f.replace(/.md$/gi, ""))
}

const sitePrefix = process.env.SITE_PREFIX ? `/${process.env.SITE_PREFIX}/` : "/"

const SITE_URLPREFIX =
  process.env.SITE_URLPREFIX || "https://federalist-edd11e6f-8be2-4dc2-a85e-1782e0bcb08e.app.cloud.gov"
const SITE_PREFIX = process.env.SITE_PREFIX || "/site/gsa/usagov-benefits-eligibility/"

if (process.env.NODE_ENV !== "test") {
  console.log("SITE_URLPREFIX:", SITE_URLPREFIX)
  console.log("SITE_PREFIX:", SITE_PREFIX)
}

// Figure out one life event version
const landingPageMd = fs.readFileSync("./content/landing-page.md", "utf8")
const oneEventVersion = () => {
  if (landingPageMd.indexOf("lifeEvent:") !== -1) {
    const eventChosen = landingPageMd.split("lifeEvent:")[1].split("\n")[0].trim()
    return eventChosen
  } else {
    return false
  }
}
const oneEvent = oneEventVersion()

export default {
  publicRuntimeConfig: {
    // This is used to toggle whether or not internationalization is enabled
    languageToggleActive: false,
    branchName: process.env.BRANCH,
    oneEventVersion: oneEvent,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Benefit finder",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Answer a few questions. Review a custom list of potential benefits. Find out how to apply.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: sitePrefix + "favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/uswds.client.js", "~/plugins/axe.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxt/content", "@nuxtjs/sitemap", "nuxt-i18n", "@nuxtjs/dotenv", "@nuxtjs/gtm"],
  gtm: {
    id: "GTM-P2F6CBK",
  },
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.js",
      },
      {
        code: "es",
        file: "es.js",
      },
    ],
    lazy: true,
    langDir: "locales/",
    defaultLocale: "en",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: [],
    csv: {},
  },

  sitemap: {
    hostname: `${SITE_URLPREFIX}${SITE_PREFIX}`,
    routes: getLifeEvents().map((le) => `/${le}`),
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    extend(config, { isClient, isDev }) {
      if (!isDev) {
        config.output.publicPath = sitePrefix
      }
    },
  },

  generate: {
    dir: "_site",
  },

  router: {
    base: process.env.NODE_ENV !== "production" ? undefined : sitePrefix,
    linkActiveClass: "usa-current",
    linkExactActiveClass: "usa-current",
  },
}
