<template>
  <div>
    <section class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col">
          <h1
            v-if="lifeEventTitle"
            class="font-heading-lg tablet:font-heading-xl tablet:margin-top-4 text-secondary print:text-black">
            {{ lifeEvent.secondaryHeadline }}
          </h1>
          <p
            v-if="lifeEvent.lede"
            class="tablet:font-heading-lg line-height-serif-6 text-normal measure-6">
            {{ lifeEvent.lede }}
          </p>
          <ol class="usa-process-list margin-bottom-5 print:display-none">
            <li
              v-for="(step, index) in landingPage.processListSteps"
              :key="step"
              class="usa-process-list__item padding-bottom-4">
              <p
                class="usa-process-list__heading font-sans-md tablet:font-sans-lg line-height-sans-1 usagov-heading--blue">
                {{ step }}
              </p>
              <div v-if="index == 1">
                <p>{{ disclaimer.bullet }}</p>
                <p>{{ disclaimer.bullet1 }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div class="grid-row print:display-block">
        <div class="tablet:grid-col-5 desktop:grid-col-4 padding-y-2 margin-top-0 padding-top-0 print:display-none">
          <section class="left-rail-top margin-bottom-4">
            <h2 class="display-none print:display-block">{{ $t("lifeEvent.eligibilityCriteria") }}</h2>
            <h2 class="font-family-serif usagov-header--font-size usagov-heading--blue print:display-none">
              {{ $t("eligibilityList.left-rail-heading") }}
            </h2>
            <div class="grid-row">
              <div class="grid-col-1 padding-top-1">
                <svg
                  class="usa-icon usa-icon--size-3 margin-right-1 flex-align-self-start"
                  aria-labelledby="eligibility-section-criteria-icon-title"
                  focusable="false"
                  role="img">
                  <title id="eligibility-section-criteria-icon-title">{{ $t("lifeEvent.important") }}</title>
                  <use xlink:href="~/assets/img/sprite.svg#warning" />
                </svg>
              </div>
              <div class="grid-col">
                <p class="font-body-md usa-icon-list">
                  {{ lifeEvent.eligibilityCriteriaDescription }}
                </p>
              </div>
            </div>
          </section>
          <div class="desktop:position-sticky desktop:top-1 desktop:height-viewport desktop:overflow-y-auto shade">
            <CriteriaGroup
              :life-event-criteria="lifeEvent.eligibilityCriteria"
              :top-level-filters="lifeEvent.topLevelFilter" />
            <div class="padding-2">
              <share-results @print="openAll()" />
            </div>
          </div>
        </div>
        <div class="tablet:padding-left-5 tablet:margin-top-0 tablet:grid-col-7 desktop:grid-col-8 print:display-block">
          <section
            class="right-rail-top margin-bottom-5"
            :class="spanishStyle">
            <h2
              class="font-family-serif usagov-header--font-size usagov-heading--blue print:display-none margin-bottom-0">
              {{ $t("eligibilityList.right-rail-heading") }}
            </h2>
            <!-- Desktop meta sort and open -->
            <div
              aria-label="Benefit accordion controls"
              role="complementary"
              class="display-none tablet:display-block print:display-none">
              <div class="display-block text-right">
                <label
                  class="usa-label display-inline"
                  for="benefitSort"
                  >{{ $t("lifeEvent.labelShowText") }} {{ lifeEventBenefits.length }}
                  {{ $t("lifeEvent.labelShowText2") }}
                  <select
                    id="benefitSort"
                    class="usa-select margin-left-auto width-card display-inline-block"
                    name="benefitSort"
                    @change="sortChange">
                    <option
                      value="relevance"
                      :selected="sort === 'relevance'">
                      {{ $t("lifeEvent.option1") }}
                    </option>
                    <option
                      value="title"
                      :selected="sort === 'title'">
                      {{ $t("lifeEvent.option2") }}
                    </option>
                  </select>
                </label>
              </div>
              <div class="display-flex flex-row flex-justify-end">
                <OpenCloseButtons
                  :is-close-active-prop="true"
                  @open-all="openAll"
                  @close-all="closeAll" />
              </div>
            </div>
            <!-- Mobile meta sort and open -->
            <div
              aria-label="Benefit accordion controls"
              role="complementary"
              class="tablet:display-none print:display-none">
              <div class="margin-y-2 print:display-none">
                <label
                  class="usa-label"
                  for="benefitSortMobile"
                  >{{ $t("lifeEvent.labelShowText") }} {{ lifeEventBenefits.length }}
                  {{ $t("lifeEvent.labelShowText2") }}</label
                >
                <select
                  id="benefitSortMobile"
                  class="usa-select width-full"
                  name="options"
                  @change="sortChange">
                  <option
                    value="relevance"
                    :selected="sort === 'relevance'">
                    {{ $t("lifeEvent.option1") }}
                  </option>
                  <option
                    value="title"
                    :selected="sort === 'title'">
                    {{ $t("lifeEvent.option2") }}
                  </option>
                </select>
              </div>
              <OpenCloseButtons
                :is-close-active-prop="true"
                @open-all="openAll"
                @close-all="closeAll" />
            </div>
          </section>
          <div class="grid-row grid-gap display-none print:display-block">
            <div class="grid-col margin-bottom-3">
              <h2 class="display-none print:display-block">{{ $t("lifeEvent.benefits") }}</h2>
              {{ $t("lifeEvent.labelShowText") }} {{ lifeEventBenefits.length }} {{ $t("lifeEvent.labelShowText2") }}
              {{ sort }}.
            </div>
          </div>

          <div
            v-if="$fetchState.pending"
            class="usa-alert usa-alert--info usa-alert--no-icon usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">{{ $t("lifeEvent.fetchState.pending") }}</p>
            </div>
          </div>
          <div
            v-if="$fetchState.error"
            class="usa-alert usa-alert--error usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">{{ $t("lifeEvent.fetchState.error") }}</p>
            </div>
          </div>
          <div
            v-if="lifeEventBenefits && lifeEventBenefits.length == 0"
            class="usa-alert usa-alert--error usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">{{ $t("lifeEvent.fetchState.none") }}</p>
            </div>
          </div>
          <p
            id="acc-id"
            class="sr-only"
            aria-live="assertive">
            {{ accordionMessage }}
          </p>
          <p
            id="matching-count"
            class="sr-only"
            aria-live="assertive">
            {{ $t("screenReader.match") }}
            {{ countEligibleBenefits() }} {{ $t("screenReader.benefits") }}.
          </p>
          <Accordion
            ref="accordion"
            :life-event-benefits="lifeEventBenefits"
            :life-event-criteria="lifeEvent.eligibilityCriteria"
            :show-icons="true"
            :show-matching-count="true" />
        </div>
      </div>
    </section>
    <CrossSell
      v-if="$config.oneEventVersion === false"
      :cards="lifeEvent.related"
      class="print:display-none" />
  </div>
</template>

<script>
import _ from "lodash"
import { mapGetters, mapState } from "vuex"
import { tObj, tCsv } from "~/services/translation"

export default {
  name: "LifeEvent",
  layout: "default",
  async asyncData({ $content }) {
    const landingPage = await $content("landing-page").fetch()
    return { landingPage }
  },
  data() {
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
      disclaimer: {},
      accordionMessage: "",
    }
  },

  async fetch() {
    const chosenEvent =
      this.$config.oneEventVersion === false ? this.$route.params.lifeEvent : this.$config.oneEventVersion

    const lifeEvent = await this.$content("life-events", chosenEvent).fetch()
    const lifeEventBenefits = await this.$content("benefits")
      .where({
        lifeEvents: { $contains: chosenEvent },
      })
      .sortBy("title")
      .fetch()
    const allEligibilityCriteria = tCsv.call(this, await this.$content("criteria").fetch()).body
    await this.$store.dispatch("criteria/populate", allEligibilityCriteria)

    lifeEvent.related = []
    for (const related of lifeEvent.relatedKeys || []) {
      lifeEvent.related.push(await this.$content("life-events", related).fetch())
    }
    this.lifeEvent = tObj.call(this, lifeEvent)
    this.allLifeEventBenefits = this.lifeEventBenefits = lifeEventBenefits.map((benefit) => tObj.call(this, benefit))
    this.disclaimer = tObj.call(this, await this.$content("disclaimer").fetch())
  },
  /* istanbul ignore next */
  head() {
    return {
      title: this.lifeEvent.secondaryHeadline,
    }
  },
  computed: {
    lifeEventTitle() {
      return this.lifeEvent.secondaryHeadline
    },
    ...mapGetters({
      getTotalEligibleCriteria: "criteria/getTotalEligibleCriteria",
      getTotalIneligibleCriteria: "criteria/getTotalIneligibleCriteria",
      doesCriterionMatchSelection: "criteria/doesCriterionMatchSelection",
    }),
    ...mapState({
      eligibilityCriteria: (state) => state.criteria.eligibilityCriteria,
    }),
    spanishStyle() {
      if (this.$i18n.locale === "es") {
        return "margin-bottom-11"
      }
      return null
    },
  },
  watch: {
    eligibilityCriteria: {
      handler() {
        this.sortBenefits()
      },
      deep: true,
    },
    lifeEvent: {
      handler() {
        this.sortBenefits()
      },
    },
  },
  mounted() {
    this.landingPage = tObj.call(this, this.landingPage)
  },
  methods: {
    changeMessage() {},
    clearCriteria() {
      this.$store.dispatch("criteria/clear")
      this.sortBenefits()
    },
    getVirtualCriteria() {
      const lifeEventCriteria = Object.fromEntries(
        this.lifeEvent.eligibilityCriteria
          .map((ec) => ec.criteriaKeys)
          .flat()
          .map((criteriaKey) => [criteriaKey, true])
      )
      const virtualCriteria = {}
      for (const benefit of this.lifeEventBenefits) {
        for (const criteria of benefit.eligibility) {
          if (!lifeEventCriteria[criteria.criteriaKey]) {
            virtualCriteria[criteria.criteriaKey] = true
          }
        }
      }
      return virtualCriteria
    },
    closeAll() {
      this.$refs.accordion.closeAll()
      this.accordionMessage = this.$t("screenReader.close")
    },
    openAll() {
      this.$refs.accordion.openAll()
      this.accordionMessage = this.$t("screenReader.open")
    },
    sortChange(event) {
      this.sort = event.target.value
      this.sortBenefits()
    },
    sortBenefits() {
      if (this.sort === "title") {
        this.lifeEventBenefits = _.sortBy(this.lifeEventBenefits, [this.sort])
      } else {
        const forceToBottom = 2048
        this.lifeEventBenefits.forEach((benefit) => {
          const matches = (benefit.matches = this.getTotalEligibleCriteria(benefit.eligibility))
          const ineligible = this.getTotalIneligibleCriteria(benefit.eligibility) > 0
          const nonMatch = ineligible ? forceToBottom : 0
          // takes into account the amount of possible criteria there is too match vs the
          // amount matched and then grades it in accordance (the 1 - is to invert the list)
          // low the score the better. The last non match is used to force the benefit to
          // the bottom if there is any non matching criteria
          benefit.inverseMatchRatio = 1 - matches / benefit.eligibility.length + nonMatch
        })
        this.lifeEventBenefits = _.sortBy(this.lifeEventBenefits, ["inverseMatchRatio", "title"])
      }
    },
    countEligibleBenefits() {
      return this.lifeEventBenefits.filter((benefit) => {
        if (benefit.eligibility.some((c) => this.doesCriterionMatchSelection(c) === false)) {
          return false
        }
        return this.getTotalEligibleCriteria(benefit.eligibility) >= 1
      }).length
    },
  },
}
</script>

<style type="scss" scoped>
.shade {
  background-color: #ebe6de;
}
.usagov-header--font-size {
  font-size: 1.45rem;
}
/* process list */
.usa-process-list__item::before {
  background-color: #154285;
  color: #fff;
  border: 0.25rem solid transparent;
}
.usa-process-list__item {
  border-left: 0.5rem solid #ebe6de;
}
.margin-bottom-11 {
  margin-bottom: 6rem;
}

/*
tablet and higher
uswds breakpoints https://designsystem.digital.gov/utilities/layout-grid/
*/
@media only screen and (min-width: 640px) {
  .usa-process-list > .usa-process-list__item:last-child {
    padding-bottom: 0;
  }
  .usagov-header--font-size {
    font-size: 1.75rem;
  }
  .usa-process-list > .usa-process-list__item {
    max-width: 84ex;
  }
}
</style>
