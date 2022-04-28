<template>
  <div></div>
</template>

<script>
const googleUrl = "https://www.googletagmanager.com/gtm.js?id="
export default {

  data() {
    return {
      token: this.$config.tagManagerKey
    }
  },

  mounted() {
    if (this.token) {
      this.initTagManager()
    }
  },

  methods: {
    /* istanbul ignore next */
    initTagManager() {
      (function(w, d, s, l, i) {
        w[l] = w[l] || []
        w[l].push({
          "gtm.start":
            new Date().getTime(), event: "gtm.js"
        })
        const f = d.getElementsByTagName(s)[0]
        const j = d.createElement(s)
        const dl = l !== "dataLayer" ? "&l=" + l : ""
        j.async = true
        j.src =
          googleUrl + i + dl
        f.parentNode.insertBefore(j, f)
      })(window, document, "script", "dataLayer", this.token)
    }

  }


}
</script>
