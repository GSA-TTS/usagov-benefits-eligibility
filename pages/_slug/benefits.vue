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
          <Filters :life-event-criteria="lifeEvent.eligibility_criteria" :life-event-questions="eligibilityCriteria" />
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
                <template v-if="isBenefitMatching(benefit)"
                  #eligibility>
                  <span class="eligibility-chip eligibility-chip--likely">
                    <svg width="16" height="16" viewBox="0 0 16 16"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9271 3.98478C14.2286 2.77602 13.2246 1.77207 12.0159 1.07354C10.7985 0.360258 9.41091 -0.0105953 8 0.000234144C6.58938 -0.0106769 5.20204 0.35994 3.98478 1.07287C2.77586 1.77149 1.77188 2.7757 1.07353 3.98478C0.36034 5.20196 -0.0105108 6.58931 0.000231351 8C-0.0106135 9.41061 0.359999 10.7979 1.07287 12.0152C1.7714 13.224 2.77535 14.2279 3.98412 14.9265C5.2015 15.6397 6.58909 16.0106 8 15.9998C9.41062 16.0107 10.798 15.6401 12.0152 14.9271C13.224 14.2286 14.228 13.2247 14.9265 12.0159C15.6397 10.7985 16.0105 9.4109 15.9998 8C16.0106 6.58939 15.64 5.20208 14.9271 3.98478ZM13.1872 6.7847L7.53335 12.4372C7.4714 12.5016 7.39689 12.5525 7.31444 12.5869C7.23199 12.6213 7.14336 12.6384 7.05403 12.6372C6.96672 12.6374 6.88029 12.6198 6.80004 12.5854C6.7198 12.551 6.64743 12.5006 6.58737 12.4372L2.81282 8.66665C2.75154 8.60566 2.70334 8.53283 2.67113 8.4526C2.63892 8.37237 2.62339 8.28642 2.62549 8.2C2.6224 8.11155 2.63743 8.02341 2.66964 7.94098C2.70185 7.85856 2.75058 7.78359 2.81282 7.72068L3.76079 6.78337C3.82174 6.72065 3.89465 6.6708 3.9752 6.63676C4.05576 6.60272 4.14232 6.58518 4.22978 6.58518C4.31723 6.58518 4.40379 6.60272 4.48435 6.63676C4.5649 6.6708 4.63781 6.72065 4.69876 6.78337L7.05203 9.1333L11.3019 4.89409C11.3628 4.83148 11.4357 4.78171 11.5162 4.74773C11.5967 4.71375 11.6832 4.69624 11.7706 4.69624C11.8579 4.69624 11.9444 4.71375 12.0249 4.74773C12.1054 4.78171 12.1783 4.83148 12.2392 4.89409L13.1872 5.8334C13.2495 5.89626 13.2983 5.97123 13.3305 6.05366C13.3627 6.1361 13.3777 6.22426 13.3745 6.31272C13.3766 6.3992 13.361 6.4852 13.3287 6.56544C13.2963 6.64569 13.248 6.71848 13.1865 6.77937L13.1872 6.7847Z"
                      fill="currentColor"/>
                      </svg>

                    Likely eligible
                  </span>
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
const _ = require('lodash');
const questionGraph = require('../../services/benefitsGraph').questionGraph;

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
      graph: questionGraph,
    };
  },
  async fetch () {
    const lifeEvent = await this.$content("life-events", this.$route.params.slug).fetch();
    /* const questions = await this.$content("questions").where({
        lifeEvents: { $contains: this.$route.params.slug },
      }).fetch(); */
    const lifeEventBenefits = this.graph.getPossibleResults().map(r => ({
      title: r.result.data.name,
      summary: '',
      link: r.result.data.url,
      id: r.result.id,
    }));

    this.lifeEvent = lifeEvent;
    this.lifeEventBenefits = lifeEventBenefits;
  },
  computed: {
    lifeEventTitle () {
      return _.startCase(this.lifeEvent.slug)
    },
    eligibilityCriteria () {
      return [{
        label: "Additional Questions",
        key: 'additional-questions',
        open: true,
        criteria_keys: this.graph.getRemainingQuestions(this.$store.state.questionGraph.answers).map(q => ({
          key: q.question.identifier,
          label: q.question.question,
          values: q.question.choice,
          type: q.question.type,
        })),
      }];
    },
    benefitsMatching () {
      return this.graph.getPositiveResults(this.$store.state.questionGraph.answers);
    },
  },
  watch: {
  },
  methods: {
    benefitInQueryMatchList (benefit) {
      if (this.benefitsMatchingQuery.length < 1) {
        return false;
      }
      return !!this.benefitsMatchingQuery.find(item => item.slug === benefit.slug)
    },
    isBenefitMatching (benefit) {
      if (this.benefitsMatching.length < 1) {
        return false;
      }
      return !!this.benefitsMatching.find(item => item.resultId === benefit.id);
    },
  }
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
