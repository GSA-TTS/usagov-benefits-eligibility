import { config } from '@vue/test-utils'
import nuxtConfig from "@/nuxt.config.js"

const locale = nuxtConfig.i18n.defaultLocale;
const translations = nuxtConfig.i18n.vueI18n.messages;

config.mocks.$t = msg => translations[locale][msg]
config.mocks.switchLocalePath = msg => msg
