import { config } from "@vue/test-utils"
import nuxtConfig from "@/nuxt.config.js"
import enJson from "./locales/en/en.json"
import esJson from "./locales/es/es.json"

const locale = nuxtConfig.i18n.defaultLocale
const translations = {
  en: enJson,
  es: esJson,
}

config.mocks["$i18n"] = {
  locale: locale,
}
config.mocks["i18n"] = {
  locale: locale,
}
config.mocks.$t = (msg) => translations[locale][msg]
config.mocks.switchLocalePath = (msg) => msg
