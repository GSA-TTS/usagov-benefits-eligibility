import { config } from "@vue/test-utils"

import internationalizaiton from "./locales/en.js"

config.mocks.$config = {
  languageToggleActive: false,
}
config.mocks.$t = (key) => internationalizaiton[key]
config.mocks.switchLocalePath = (msg) => msg
config.mocks.localePath = (i) => i
// fixes scrollTo error
const noop = () => {}
Object.defineProperty(window, "scrollTo", { value: noop, writable: true })
