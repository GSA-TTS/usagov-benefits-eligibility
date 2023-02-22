import Vue from "vue"

export default function () {
  if (process.env.NODE_ENV === "development") {
    const VueAxe = require("vue-axe").default
    Vue.use(VueAxe, {
      // Allow console.log on local
      allowConsoleClears: false,
    })
  }
}
