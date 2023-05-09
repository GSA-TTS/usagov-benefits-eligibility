<template>
  <div></div>
</template>

<script>
import { tObj } from "~/services/translation"
export default {
  layout: "default",
  async asyncData({ $content }) {
    const lifeEvents = await $content("life-events").sortBy("title").fetch()
    const landingPage = await $content("landing-page").fetch()
    return { lifeEvents, landingPage }
  },
  data() {
    return {
      lifeEvents: [],
      landingPage: {},
    }
  },
  mounted() {
    this.landingPage = tObj.call(this, this.landingPage)
  },
}
</script>
