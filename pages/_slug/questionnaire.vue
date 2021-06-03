<template>
  <div>
    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-10">
          <h1 class="font-heading-3x margin-top-0">
            {{ lifeEventTitle }} Eligibility Estimator
          </h1>
          <p class="usa-intro">
            Answer these questions to help us estimate your eligibility.
          </p>
        </div>
      </div>

      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-8">
          Questionnaire here
        </div>
        <div class="tablet:grid-col-3 tablet:grid-offset-1">
          <aside>
            <h2 class="font-heading-md margin-top-0">Why are we asking this?</h2>
            <p>This questionnaire will help estimate your eligibility for benefits relating to a {{ lifeEvent.title.toLowerCase() }}.</p>
            <p>You may be eligible for additional benefits. Be sure to visit <a href="#">Benefits.gov</a> and other resources to ensure you’re receiving all of the support available to you. <b>This is not a benefits application.</b></p>
            <p>This questionnaire should take you 5-15 minutes to complete. You can stop and come back at any time.</p>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { toTitleCase, deSlugify } from "@/utilities/formatting.js"

export default {
  layout: "default",
  async asyncData ({ $content, params }) {
    const lifeEvent = await $content("life-events", params.slug).fetch();
    return { lifeEvent };
  },
  data () {
    return {
      lifeEvent: {
        slug: '',
        title: ''
      },
    };
  },
  computed: {
    lifeEventTitle () {
      return toTitleCase(deSlugify(this.lifeEvent.slug))
    }
  },
};
</script>
