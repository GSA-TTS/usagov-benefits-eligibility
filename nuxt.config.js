import fs from "fs"

const getLifeEvents = function () {
  const files = fs.readdirSync("./content/life-events/")
  return files.map((f) => f.replace(/.md$/gi, ""))
}
// https://federalist.18f.gov/documentation/env-vars-on-federalist-builds/#default-environment-variables
const sitePrefix = process.env.BASEURL ? `${process.env.BASEURL}/` : ""

const SITE_URLPREFIX =
  process.env.SITE_URLPREFIX || "https://federalist-edd11e6f-8be2-4dc2-a85e-1782e0bcb08e.app.cloud.gov"
const SITE_PREFIX = process.env.SITE_PREFIX || ""

if (process.env.NODE_ENV !== "test") {
  console.log("SITE_URLPREFIX:", SITE_URLPREFIX)
  console.log("SITE_PREFIX:", SITE_PREFIX)
}

// Figure out one life event version
const landingPageMd = fs.readFileSync("./content/landing-page.md", "utf8")
const oneEventVersion = () => {
  if (landingPageMd.includes("lifeEvent:")) {
    return landingPageMd.split("lifeEvent:")[1].split("\n")[0].trim()
  } else {
    return false
  }
}
const oneEvent = oneEventVersion()

export default {
  publicRuntimeConfig: {
    // This is used to toggle whether or not internationalization is enabled
    languageToggleActive: true,
    branchName: process.env.BRANCH,
    oneEventVersion: false,
    redirectUrl: "https://beta.usa.gov/life-experiences",
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
    routes: getLifeEvents().map((le) => `/${le}`),
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
