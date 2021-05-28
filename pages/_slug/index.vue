<template>
  <div>
    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-8">
          <nuxt-content :document="lifeEvent" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "default",
  async asyncData ({ $content, params }) {
    const lifeEvent = await $content("life-events", params.slug).fetch();
    return { lifeEvent };
  },
  data () {
    return {};
  }
};
</script>
