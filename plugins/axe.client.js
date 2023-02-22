import Vue from "vue"

export default function () {
  const VueAxe = require("vue-axe").default
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    Vue.use(VueAxe, {
      // Allow console.log on local.
      allowConsoleClears: false,
    })
  } else if (process.env.NODE_ENV === "development") {
    Vue.use(VueAxe)
  }
}
