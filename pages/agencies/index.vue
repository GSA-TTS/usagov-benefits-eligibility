<template>
  <div>
    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-10">
          <h1 class="font-heading-3xl margin-top-0">
            Benefits by agency
          </h1>
          <p class="usa-intro">
          </p>
        </div>
      </div>

      <div class="grid-row grid-gap margin-top-4">
        <div class="tablet:grid-col-10">
          <ul v-if="agencies && agencies.length > 0" class="usa-card-group">
            <li
              v-for="agency in agencies"
              :key="agency"
              class="usa-card desktop:grid-col-6"
              :aria-label="agency">
              <Card
                :card-title="agency"
                card-title-heading-level="h2"
                primary-button-text="See possible benefits"
                :primary-button-link="`/agencies/${kebabCase(agency)}`"/>
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
    const agencies = _.chain(
      await $content("benefits")
        .only(['source'])
        .fetch()
    )
      .map(benefit => benefit.source.name)
      .flatten()
      .uniq()
      .sort()
      .value();

    return { agencies };
  },
  data () {
    return {
      agencies: [],
    };
  },
  methods: {
    kebabCase: _.kebabCase
  },
};
</script>
