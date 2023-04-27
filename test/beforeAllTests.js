import path from "path"
import glob from "glob"
import Vue from "vue"
import Vuex from "vuex"
import { config } from "@vue/test-utils"

export default function beforeAllTests() {
  // Automatically register all components
  const fileComponents = glob.sync(path.join(__dirname, "../components/**/*.vue"))
  for (const file of fileComponents) {
    const name = file.match(/(\w*)\.vue$/)[1]
    Vue.component(name, require(file).default)
  }
  config.stubs.NuxtLink = { template: "<a><slot /></a>" }
  config.stubs.NuxtContent = { template: "<div><slot /></div>" }
  config.stubs.ClientOnly = { template: "<div><slot /></div>" }
  config.mocks.$config = {
    oneEventVersion: false,
  }
  config.mocks.$i18n = {
    locale: "en",
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
    setLocale: (locale) => {
      config.mocks.$i18n.locales.code = locale
    },
  }
  Vue.use(Vuex)
  process.server = true
}
