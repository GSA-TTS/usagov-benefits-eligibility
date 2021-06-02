<template>
  <div>
    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-10">
          <h1 v-if="lifeEvent.title" class="font-heading-3x margin-top-0">
            {{ lifeEvent.title }}
          </h1>
          <p v-if="lifeEvent.lede" class="usa-intro">
            {{ lifeEvent.lede }}
          </p>
          <nuxt-link :to="'/questionnaire'" class="usa-button usa-button--big">
            Estimate my possible benefits
          </nuxt-link>
        </div>
      </div>

      <div class="grid-row grid-gap margin-top-4">
        <div class="tablet:grid-col-12">
          <h2 class="font-heading-xl margin-top-8">
            {{ lifeEvent.secondaryHeadline }}
          </h2>
          <ul
            v-if="lifeEventBenefits && lifeEventBenefits.length > 0"
            class="usa-card-group">
            <li
              v-for="benefit in lifeEventBenefits"
              :key="benefit.title"
              class="usa-card desktop:grid-col-6"
              :aria-label="benefit.title">
              <Card
                :card-body="benefit.summary"
                :card-title="benefit.title"
                primary-button-text="How to apply"
                :primary-button-link="benefit.link"
                :card-tags="benefit.tags">
                <template
                  v-if="
                    benefit.source && benefit.source.name && benefit.source.link
                  "
                  #source>
                  <h4
                    class="font-sans-xs text-normal text-base-dark margin-bottom-0">
                    Provided by the
                    <a class="usa-link" :href="benefit.source.link">{{
                      benefit.source.name
                    }}</a>
                  </h4>
                </template>
              </Card>
            </li>
          </ul>
        </div>
      </div>

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
    const lifeEventBenefits = await $content("benefits")
      .where({
        lifeEvents: { $contains: params.slug }
      })
      .sortBy("title")
      .fetch();

    return { lifeEvent, lifeEventBenefits };
  },
  data () {
    return {
      lifeEvent: {},
      lifeEventBenefits: []
    };
  }
};
</script>
