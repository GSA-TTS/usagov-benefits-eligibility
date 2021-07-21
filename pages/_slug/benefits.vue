<template>
  <div>
    <section class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col">
          <h1 class="font-heading-2xl margin-top-3">
            {{ lifeEventTitle }}
          </h1>
        </div>
        <div class="tablet:grid-col-2 desktop:grid-col-2 margin-top-3 text-right">
          <results-button @copied="doCopiedAlert" />
        </div>
      </div>
      <div class="grid-row">
        <div class="tablet:grid-col">
          <Alert v-show="alert">
            The link to this page has been copied to your clipboard.
          </Alert>
        </div>
      </div>

      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-5 desktop:grid-col-4 margin-bottom-3"></div>
        <div class="tablet:grid-col-7 desktop:grid-col-8 margin-bottom-3 text-right">
          <label class="usa-label display-inline" for="benefitSort">Sort by:</label>
          <select id="benefitSort" class="usa-select margin-left-auto width-card display-inline-block" name="options"
              @change="sortChange">
            <option value="relevance" :selected="sort === 'relevance'">Relevance</option>
            <option value="title" :selected="sort === 'title'">Alphabetical</option>
          </select>
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
          <div v-if="$fetchState.error" class="usa-alert usa-alert--error usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Error while fetching benefits</p>
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
                :primary-button-link="benefit.link"
                primary-button-target="_blank"
                :card-tags="benefit.tags">
                <template
                  v-if="
                    benefit.source && benefit.source.name && benefit.source.link
                  "
                  #source>
                  <h3
                    class="font-sans-xs text-normal text-base-dark margin-bottom-0">
                    Provided by the
                    <a class="usa-link" :href="benefit.source.link" target="_blank">{{
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapGetters, mapState } from 'vuex';
import EligibilityList from '~/components/EligibilityList.vue';

export default {
  components: { EligibilityList },
  layout: "default",
  data () {
    return {
      alert: false,
      lifeEvent: {
        slug: '',
        title: '',
        eligibilityCriteria: []
      },
      lifeEventBenefits: [],
      sort: '',
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

    const allEligibilityCriteria = (await this.$content("criteria").fetch()).body;
    await this.$store.dispatch("criteria/populate", allEligibilityCriteria);

    this.lifeEvent = lifeEvent;
    this.lifeEventBenefits = lifeEventBenefits;
  },
  computed: {
    lifeEventTitle () {
      return this.lifeEvent.secondaryHeadline;
    },
    ...mapGetters({
      getTotalEligibleCriteria: 'criteria/getTotalEligibleCriteria',
    }),
    ...mapState({
      eligibilityCriteria: state => state.criteria.eligibilityCriteria,
    }),
  },
  watch: {
    eligibilityCriteria: {
      handler (newEligibilityCriteria) {
        this.sortBenefits();
      },
      deep: true,
    },
  },
  methods: {
    doCopiedAlert () {
      this.alert = true;
      setTimeout(() => { this.alert = false; }, 20 * 1000);
    },
    sortChange (event) {
      this.sort = event.target.value;
      this.sortBenefits();
    },
    sortBenefits () {
      if (this.sort === "title") {
        this.lifeEventBenefits = _.sortBy(this.lifeEventBenefits, [this.sort]);
      } else {
        const forceToBottom = 2048;
        this.lifeEventBenefits = _.sortBy(this.lifeEventBenefits, (benefit) => {
          const matches = this.getTotalEligibleCriteria(benefit.eligibility);
          const inverseMatchRatio = 1 - matches / (benefit.eligibility?.length || forceToBottom);
          return `${inverseMatchRatio.toString()}${benefit.title}`;
        });
      }
    },
  },
};
</script>
