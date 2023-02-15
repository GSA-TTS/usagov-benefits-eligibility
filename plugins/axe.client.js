import Vue from "vue"

export default function () {
  if (process.env.NODE_ENV === "development") {
    const VueAxe = require("vue-axe").default
    Vue.use(VueAxe, {
      allowConsoleClears: false, // disable all console clears
    })
  }
}
