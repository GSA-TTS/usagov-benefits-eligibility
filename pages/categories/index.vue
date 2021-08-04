<template>
  <div>
    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-10">
          <h1 class="font-heading-3xl margin-top-0">
            Benefits by category
          </h1>
          <p class="usa-intro">
          </p>
        </div>
      </div>

      <div class="grid-row grid-gap margin-top-4">
        <div class="tablet:grid-col-10 life-event-tags">
          <ul v-if="lifeEventTags && lifeEventTags.length > 0" class="usa-card-group">
            <li
              v-for="tag in lifeEventTags"
              :key="tag"
              class="usa-card desktop:grid-col-6"
              :aria-label="tag">
              <Card
                :card-title="tag"
                card-title-heading-level="h2"
                primary-button-text="See possible benefits"
                :primary-button-link="`/categories/${kebabCase(tag)}`"/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  layout: "default",
  async asyncData ({ $content }) {
    const lifeEventTags = _.chain(
      await $content("benefits")
        .only(['tags'])
        .fetch()
    )
      .map(le => le.tags)
      .flatten()
      .uniq()
      .sort()
      .value();

    return { lifeEventTags };
  },
  data () {
    return {
      lifeEventTags: []
    };
  },
  methods: {
    kebabCase (tag) {
      return _.kebabCase(tag);
    },
  },
};
</script>

<style>
  .life-event-tags .usa-card__heading {
    text-transform: capitalize;
  }
</style>
