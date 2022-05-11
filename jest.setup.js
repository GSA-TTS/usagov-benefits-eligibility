import { config } from "@vue/test-utils"

config.mocks.switchLocalePath = (msg) => msg
config.mocks.localePath = (i) => i
