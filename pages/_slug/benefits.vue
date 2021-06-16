<template>
  <div>
    <section class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-10">
          <h1 class="font-heading-3xl margin-top-3 margin-bottom-4">
            {{ lifeEventTitle }} Benefits
          </h1>
        </div>
      </div>

      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-3">
          <Filters :life-event-criteria="lifeEvent.eligibility_criteria" />
        </div>
        <div class="tablet:grid-col-9">
          <div v-if="$fetchState.pending" class="usa-alert usa-alert--info usa-alert--no-icon usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Fetching benefits...</p>
            </div>
          </div>
          <div v-else-if="$fetchState.error" class="usa-alert usa-alert--error usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Error while fetching benefits</p>
            </div>
          </div>
          <ul
            v-else-if="lifeEventBenefits && lifeEventBenefits.length > 0"
            class="usa-card-group">
            <li
              v-for="benefit in lifeEventBenefits"
              :key="benefit.title"
              class="usa-card desktop:grid-col-6 flex-auto"
              :aria-label="benefit.title">
              <Card
                :card-body="benefit.summary"
                :card-title="benefit.title"
                card-title-heading-level="h2"
                primary-button-text="Save to my list"
                :primary-button-link="benefit.link"
                :card-tags="benefit.tags">
                <template
                  v-if="
                    benefit.source && benefit.source.name && benefit.source.link
                  "
                  #source>
                  <h3
                    class="font-sans-xs text-normal text-base-dark margin-bottom-0">
                    Provided by the
                    <a class="usa-link" :href="benefit.source.link">{{
                      benefit.source.name
                    }}</a>
                  </h3>
                </template>
              </Card>
            </li>
          </ul>
          <div v-else class="usa-alert usa-alert--error usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Sorry, no benefits could be found for the current filters.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const _ = require('lodash');

export default {
  layout: "default",
  data () {
    return {
      lifeEvent: {
        slug: '',
        title: '',
        eligibility_criteria: () => []
      },
      lifeEventBenefits: [],
      filteredLifeEventBenefits: []
    };
  },
  async fetch () {
    const lifeEvent = await this.$content("life-events", this.$route.params.slug).fetch();
    const lifeEventBenefits = await this.$content("benefits")
      .where({
        lifeEvents: { $contains: this.$route.params.slug },
      })
      // .where(this.formatFiltersForQuery)
      .sortBy("title")
      .fetch();

    this.lifeEvent = lifeEvent;
    this.lifeEventBenefits = lifeEventBenefits;
  },
  computed: {
    lifeEventTitle () {
      return _.startCase(this.lifeEvent.slug)
    },
    eligibilityCriteria () {
      return this.$store.state.benefits.eligibilityCriteria;
    },
    // ...mapGetters(['getActiveFilters']),
    ...mapGetters({
        getActiveFilters: 'benefits/getActiveFilters'
    }),
    currentFilters () {
      return this.getActiveFilters;
    },
    formatFiltersForQuery () {
      const filters = [];
      this.currentFilters.forEach((criterion) => {
        filters.push({
          [criterion.key]: true
        });
      });
      return {
        $and: filters
      }
      // this.getActiveFilters();
    }
  },
  watch: {
    async currentFilters () {
      await console.log('filters changed!');
      const newBenefits = await this.$content("benefits")
      .where({
        lifeEvents: { $contains: this.$route.params.slug },
      })
      .where(this.formatFiltersForQuery)
      .sortBy("title")
      .fetch();
      this.lifeEventBenefits = newBenefits;
    }
  },
  methods: {}
};
</script>
