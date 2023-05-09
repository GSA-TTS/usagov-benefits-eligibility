<template>
  <!-- this page should never be accessible in route -->
  <!-- only life event landing and content should render -->
  <div></div>
</template>

<script>
import { tObj } from "~/services/translation"
export default {
  layout: "default",
  middleware: ['middleware'],
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
