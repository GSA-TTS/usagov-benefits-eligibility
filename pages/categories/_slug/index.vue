<template>
  <div>
    <section class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col">
          <h1 v-if="benefitCategory" class="font-heading-3xl margin-top-7">
            {{ benefitCategory }}
          </h1>
        </div>
      </div>

      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-7 desktop:grid-col-8">
          <div
            v-if="$fetchState.pending"
            class="usa-alert usa-alert--info usa-alert--no-icon usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Fetching benefits...</p>
            </div>
          </div>
          <div
            v-if="$fetchState.error"
            class="usa-alert usa-alert--error usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Error while fetching benefits.</p>
            </div>
          </div>
          <div
            v-if="lifeEventBenefits && lifeEventBenefits.length == 0"
            class="usa-alert usa-alert--error usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">No matching benefits found.</p>
            </div>
          </div>

          <ul
            v-if="lifeEventBenefits && lifeEventBenefits.length > 0"
            class="usa-card-group">
            <li
              v-for="benefit in lifeEventBenefits"
              :key="benefit.title"
              class="usa-card desktop:grid-col-12 flex-auto"
              :aria-label="benefit.title">
              <Card
                :card-body="benefit.summary"
                :card-title="benefit.title"
                card-title-heading-level="h2"
                primary-button-text="How to apply"
                :primary-button-link="
                  benefit.source ? benefit.source.link : '#'
                "
                primary-button-target="_blank">
                <template
                  v-if="
                    benefit.source && benefit.source.name && benefit.source.link
                  "
                  #source>
                  <h3
                    class="font-sans-xs text-normal text-base-dark margin-bottom-0">
                    Provided by the
                    <a
                      class="usa-link"
                      :href="benefit.source ? benefit.source.link : '#'"
                      target="_blank">{{ benefit.source.name }}</a>
                  </h3>
                </template>
                <template #eligibility>
                  <EligibilityList
                    :benefit-eligibility-criteria="benefit.eligibility"
                    :show-icons="false" :show-matching-count="false"/>
                </template>
              </Card>
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
  data () {
    return {
        benefitCategory: '',
        lifeEventBenefits: [],
    };
  },
  async fetch () {
    this.benefitCategory = _.capitalize(_.lowerCase(this.$route.params.slug));
    const lifeEventBenefits = await this.$content("benefits")
      .where({
        tags: { $contains: _.lowerCase(this.$route.params.slug) }
      })
      .sortBy("title")
      .fetch();
    const allEligibilityCriteria = (await this.$content("criteria").fetch()).body;
    await this.$store.dispatch("criteria/populate", allEligibilityCriteria);

    this.lifeEventBenefits = lifeEventBenefits;
  },
};
</script>
