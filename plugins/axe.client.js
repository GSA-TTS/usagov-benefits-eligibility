import Vue from "vue"

export default function () {
  const VueAxe = require("vue-axe").default
  // If env file is present.
  if (process.env.VUE_APP_CONSOLE_LOG) {
    Vue.use(VueAxe, {
      // Allow console.log on local.
      allowConsoleClears: false,
    })
  }

  if (process.env.NODE_ENV === "development") {
    Vue.use(VueAxe)
  }
}
