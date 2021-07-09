<template>
  <div>
    <section class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col">
          <h1 class="font-heading-2xl margin-top-3 margin-bottom-4">
            {{ lifeEventTitle }}
          </h1>
        </div>
      </div>

      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-5 desktop:grid-col-4">
          <CriteriaGroup :life-event-criteria="lifeEvent.eligibilityCriteria" />
        </div>
        <div class="tablet:grid-col-7 desktop:grid-col-8">
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
              class="usa-card desktop:grid-col-12 flex-auto"
              :aria-label="benefit.title">
              <Card
                :card-body="benefit.summary"
                :card-title="benefit.title"
                card-title-heading-level="h2"
                primary-button-text="How to apply"
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
                <template #eligibility>
                 <EligibilityList :benefit-eligibility-criteria="benefit.eligibility" />
                </template>
              </Card>
            </li>
          </ul>
          <div v-else class="usa-alert usa-alert--error usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Sorry, no benefits could be found.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EligibilityList from '~/components/EligibilityList.vue';
// import { mapGetters } from 'vuex'

export default {
  components: { EligibilityList },
  layout: "default",
  data () {
    return {
      lifeEvent: {
        slug: '',
        title: '',
        eligibility_criteria: () => []
      },
      lifeEventBenefits: [],
      benefitsMatchingQuery: [],
    };
  },
  async fetch () {
    const lifeEvent = await this.$content("life-events", this.$route.params.slug).fetch();
    const lifeEventBenefits = await this.$content("benefits")
      .where({
        lifeEvents: { $contains: this.$route.params.slug },
      })
      .sortBy("title")
      .fetch();

    const allEligibilityCriteria = (await this.$content("criteria/eligibility").fetch()).body;
    this.$store.commit("criteria/populate", allEligibilityCriteria);

    this.lifeEvent = lifeEvent;
    this.lifeEventBenefits = lifeEventBenefits;
  },
  computed: {
    lifeEventTitle () {
      return this.lifeEvent.secondaryHeadline;
    },
    eligibilityCriteria () {
      return this.$store.state.benefits.eligibilityCriteria;
    },
  },
  methods: {
  },

};
</script>
<style scoped>
.eligibility-chip {
  display: flex;
  font-size: 15px;
  line-height: 15px;
  font-weight: 600;
  margin: 1.25rem 0;
  align-items: center;
}
.eligibility-chip--likely {
  color: #00a91c
}
.eligibility-chip svg {
  margin-right: .5rem;
}

</style>
