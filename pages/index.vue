<template>
  <div>
    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-10">
          <h1 class="font-heading-3xl margin-top-0">
            Help during life's major events
          </h1>
          <p class="usa-intro">
            Life’s big milestones can be challenging, but figuring out which benefits might be available to help shouldn’t be.
          </p>
          <ol class="usa-intro">
            <li>Select a life event</li>
            <li>Answer a few questions</li>
            <li>Get a custom list of potential benefits</li>
          </ol>
        </div>
      </div>

      <div class="grid-row grid-gap margin-top-4">
        <div class="tablet:grid-col-10">
          <ul v-if="lifeEvents && lifeEvents.length > 0" class="usa-card-group">
            <li
              v-for="event in lifeEvents"
              :key="event.slug"
              class="usa-card desktop:grid-col-6"
              :aria-label="event.title">
              <Card
                :card-body="event.summary"
                :card-title="event.title"
                card-title-heading-level="h2"
                primary-button-text="Find possible benefits"
                :primary-button-link="event.slug"/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "default",
  async asyncData ({ $content }) {
    const lifeEvents = await $content("life-events")
      .sortBy("title")
      .fetch();

    return { lifeEvents };
  },
  data () {
    return {
      lifeEvents: []
    };
  }
};
</script>
