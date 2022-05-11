import { config } from "@vue/test-utils"

import internationalizaiton from "./locales/en.js"

config.mocks.$t = (key) => internationalizaiton[key]
config.mocks.switchLocalePath = (msg) => msg
config.mocks.localePath = (i) => i
