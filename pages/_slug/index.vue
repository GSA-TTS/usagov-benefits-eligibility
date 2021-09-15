<template>
  <div>
    <section class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col">
          <h1 v-if="lifeEventTitle" class="font-heading-1xl margin-top-6 text-secondary">
            {{ lifeEvent.secondaryHeadline }}
          </h1>
          <p v-if="lifeEvent.lede" class="usa-intro">
            {{ lifeEvent.lede }}
          </p>
          <ol class="usa-process-list print:display-none">
            <li class="usa-process-list__item padding-bottom-4">
              <p class="usa-process-list__heading font-sans-m line-height-sans-1">
                Answer a few questions
              </p>
            </li>
            <li class="usa-process-list__item padding-bottom-4">
              <p class="usa-process-list__heading font-sans-m line-height-sans-1">
                Review a custom list of potential benefits
              </p>
            </li>
            <li class="usa-process-list__item padding-bottom-0">
              <p class="usa-process-list__heading font-sans-m line-height-sans-1">
                Find out how to apply
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div class="grid-row grid-gap print:display-none">
        <div class="tablet:grid-col-5 desktop:grid-col-4 margin-y-2 print:display-none">
        </div>
        <div class="tablet:grid-col-4 desktop:grid-col-3 display-flex flex-align-center margin-y-2 print:display-none">
          <div>
            <button class="usa-button usa-button--unstyled open-all" @click="openAll">Open All</button>
            /
            <button class="usa-button usa-button--unstyled close-all" @click="closeAll">Close All</button>
          </div>
        </div>
        <div class="grid-col margin-y-2 text-right">
          <label
            class="usa-label display-inline margin-right-1"
            for="benefitSort">Showing {{ lifeEventBenefits.length }} related benefits sorted
            by:</label>
          <select
            id="benefitSort"
            class="usa-select margin-left-auto width-card display-inline-block"
            name="options"
            @change="sortChange">
            <option value="relevance" :selected="sort === 'relevance'">
              Relevance
            </option>
            <option value="title" :selected="sort === 'title'">
              Title (A-Z)
            </option>
          </select>
        </div>
      </div>

      <div class="grid-row grid-gap print:display-block">
        <div class="tablet:grid-col-5 desktop:grid-col-4 desktop:position-sticky desktop:top-1 desktop:height-viewport desktop:overflow-y-auto shade padding-2 radius-md">
          <h2 class="display-none print:display-block">Eligibility criteria</h2>
          <div v-if="filter">
            <div class="margin-bottom-3">
              Currently viewing
              <span
                class="usa-tag bg-secondary margin-left-05 display-inline-flex margin-left-0 padding-0 usa-button-group__item">
                <button
                  class="usa-tooltip usa-button usa-button--unstyled usa-button--outline usa-button--inverse text-uppercase margin-left-1 border-left border-accent-cool-light padding-x-05"
                  style="padding: .25rem"
                  :title="`Remove the ${filter} filter`"
                  aria-label="Remove this filter"
                  data-position="top"
                  @click="clearFilter">
                  <span class="text-middle">{{ filter }}</span>
                  <svg
                    class="usa-icon text-white text-middle"
                    aria-hidden="true"
                    focusable="false"
                    role="img">
                    <use xlink:href="~/assets/img/sprite.svg#close" />
                  </svg>
                </button>
              </span>
            </div>
          </div>
          <div class="margin-bottom-4 print:display-none">
            <ul class="usa-icon-list usa-icon-list--size-md">
              <li class="usa-icon-list__item">
                <div class="usa-icon-list__icon text-primary">
                  <svg class="usa-icon usa-icon--size-3" aria-hidden="true" focusable="false"
                    role="img">
                    <use xlink:href="~/assets/img/sprite.svg#priority_high"/>
                  </svg>
                </div>
                <div class="usa-icon-list__content">
                  {{ lifeEvent.eligibilityCriteriaDescription }}
                </div>
              </li>
            </ul>
          </div>
          <CriteriaGroup :life-event-criteria="lifeEvent.eligibilityCriteria" />
          <share-results @print="openAll()" />
        </div>
        <div class="tablet:grid-col-7 desktop:grid-col-8 print:display-block">
          <div class="grid-row grid-gap display-none print:display-block break-before-always">
            <div class="grid-col margin-bottom-3">
              <h2>Benefits</h2>
              Showing {{ lifeEventBenefits.length }} related benefits sorted by {{ sort }}.
            </div>
          </div>
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
          <accordion ref="accordion" :life-event-benefits="lifeEventBenefits" :life-event-criteria="lifeEvent.eligibilityCriteria" />
        </div>
      </div>
    </section>
    <cross-sell
      title="Other benefits that might be relevant to you."
      :cards="lifeEvent.related"/>
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters, mapState } from "vuex";
import mapTags from "~/mixins/MapTags";

export default {
  mixins: [mapTags],
  layout: "default",
  data () {
    return {
      filter: "",
      alert: false,
      lifeEvent: {
        slug: "",
        title: "",
        lede: "",
        summary: "",
        eligibilityCriteria: [],
        relatedKeys: [],
        related: [],
      },
      lifeEventBenefits: [],
      allLifeEventBenefits: [],
      sort: "relevance",
    };
  },
  async fetch () {
    const lifeEvent = await this.$content(
      "life-events",
      this.$route.params.slug
    ).fetch();
    const lifeEventBenefits = await this.$content("benefits")
      .where({
        lifeEvents: { $contains: this.$route.params.slug }
      })
      .sortBy("title")
      .fetch();

    const allEligibilityCriteria = (await this.$content("criteria").fetch())
      .body;
    await this.$store.dispatch("criteria/populate", allEligibilityCriteria);

    lifeEvent.related = [];
    for (const related of (lifeEvent.relatedKeys || [])) {
      lifeEvent.related.push(await this.$content("life-events", related).fetch());
    }

    this.lifeEvent = lifeEvent;
    this.allLifeEventBenefits = this.lifeEventBenefits = lifeEventBenefits;
  },
  computed: {
    lifeEventTitle () {
      return this.lifeEvent.secondaryHeadline;
    },
    ...mapGetters({
      getTotalEligibleCriteria: "criteria/getTotalEligibleCriteria",
      getTotalIneligibleCriteria: "criteria/getTotalIneligibleCriteria"
    }),
    ...mapState({
      eligibilityCriteria: state => state.criteria.eligibilityCriteria
    })
  },
  watch: {
    eligibilityCriteria: {
      handler (newEligibilityCriteria) {
        this.sortBenefits();
      },
      deep: true
    }
  },
  beforeDestroy () {
    /* istanbul ignore next */
    this.$root.$off("tag:click", this.tagClick);
  },
  mounted () {
    this.$root.$on("tag:click", this.tagClick);
  },
  methods: {
    getVirtualCriteria () {
      const lifeEventCriteria = Object.fromEntries(
        this.lifeEvent.eligibilityCriteria
          .map(ec => ec.criteriaKeys)
          .flat()
          .map(criteriaKey => [criteriaKey, true])
      );
      const virtualCriteria = {};
      for (const benefit of this.lifeEventBenefits) {
        for (const criteria of benefit.eligibility) {
          if (!lifeEventCriteria[criteria.criteriaKey]) {
            virtualCriteria[criteria.criteriaKey] = true;
          }
        }
      }
      return virtualCriteria;
    },
    closeAll () {
      this.$refs.accordion.closeAll();
    },
    openAll () {
      this.$refs.accordion.openAll();
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
        const virtualCriteria = this.getVirtualCriteria();
        this.lifeEventBenefits.forEach((benefit) => {
          const matches = (benefit.matches = this.getTotalEligibleCriteria(
            benefit.eligibility
          ));
          const ineligible =
            this.getTotalIneligibleCriteria(benefit.eligibility) > 0;
          const virtualBenefitEligibility = (benefit.virtualBenefitEligibility = (
            benefit.eligibility || []
          ).filter(c => virtualCriteria[c.criteriaKey]).length);
          benefit.inverseMatchRatio =
            1 -
            matches / (benefit.eligibility.length - virtualBenefitEligibility) +
            (ineligible ? forceToBottom : 0);
        });
        this.lifeEventBenefits = _.sortBy(this.lifeEventBenefits, [
          "inverseMatchRatio",
          "title"
        ]);
      }
    },
    tagClick (tag) {
      this.lifeEventBenefits = _.filter(this.allLifeEventBenefits, (benefit) => {
        return benefit.tags.includes(tag);
      });
      this.filter = tag;
      this.sortBenefits();
    },
    clearFilter () {
      this.filter = "";
      this.lifeEventBenefits = this.allLifeEventBenefits;
      this.sortBenefits();
    }
  },
};
</script>

<style scoped>
.benefit-list-move {
  transition: transform 2s;
}
</style>
