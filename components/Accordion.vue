<template>
  <TransitionGroup
    ref="accordion"
    class="usa-accordion usa-accordion--multiselectable usa-accordion--bordered"
    name="benefit-list"
    tag="section"
    aria-multiselectable="true"
    data-allow-multiple>
    <article
      v-for="benefit in lifeEventBenefits"
      :key="`acc-key-${benefit.slug}`"
      class="margin-bottom-2">
      <h2
        :id="`acc-h-${benefit.slug}-${cid}`"
        class="usa-accordion__heading border-left-105"
        :class="getBorderColor(benefit.eligibility)">
        <button
          ref="accordionButtons"
          class="usa-accordion__button usagov-heading--blue"
          aria-expanded="false"
          :aria-controls="`acc-content-${benefit.slug}`">
          {{ benefit.title }}
          <span class="text-normal">
            {{ getCriteriaMatchLanguage(benefit.eligibility) }}
          </span>
        </button>
      </h2>
      <div
        :id="`acc-content-${benefit.slug}`"
        ref="accordionContents"
        class="usa-accordion__content usa-prose">
        <template v-if="benefit.source && benefit.source.link && benefit.source.name">
          <h3
            class="font-sans-xs text-normal text-base-dark margin-bottom-0"
            style="font-size: 1rem">
            <span v-if="$i18n.locale === 'en'">
              {{ $t("accordion.provided") }}
            </span>
            {{ benefit.source.name }}
          </h3>
        </template>
        <fieldset class="usa-fieldset">
          <legend
            class="usa-prose"
            style="max-width: unset">
            {{ benefit.summary }}
          </legend>

          <div
            v-if="benefit.criticalApplicationInformation"
            class="text-bold margin-top-2">
            {{ benefit.criticalApplicationInformation }}
          </div>

          <EligibilityList
            :benefit-eligibility-criteria="benefit.eligibility"
            :benefit-source="sanitizedBenefitUrl(benefit, '')"
            :heading-classes="['bg-primary', 'text-white']"
            :show-icons="showIcons"
            :show-matching-count="showMatchingCount" />
        </fieldset>
        <div
          v-if="benefit.source && benefit.source.link"
          class="margin-top-205">
          <a
            :id="`acc-source-link-${benefit.slug}`"
            :href="sanitizedBenefitUrl(benefit)"
            class="usa-button print:display-none"
            target="_blank"
            rel="noopener"
            role="button"
            :aria-labelledby="`acc-source-link-${benefit.slug} acc-h-${benefit.slug}-${cid}`">
            {{ $t("accordion.apply") }}

            <span v-if="$i18n.locale === 'es' && benefit.source.isEnglish === 'true'"> (en inglés)</span>
          </a>
        </div>
      </div>
    </article>
  </TransitionGroup>
</template>

<script>
import _ from "lodash"
import { mapGetters } from "vuex"
import mapTags from "~/mixins/MapTags"
import sanitizeUrl from "~/mixins/SanitizeBears"

let USWDS
let accordion
/* istanbul ignore if */
if (process.client) {
  USWDS = require("../node_modules/uswds/src/js/components")
  accordion = USWDS.accordion
}
export default {
  mixins: [mapTags, sanitizeUrl],
  props: {
    expanded: {
      type: Boolean,
      required: false,
      default: false,
    },
    lifeEventBenefits: {
      type: Array,
      required: true,
      default: /* istanbul ignore next */ () => [],
    },
    lifeEventCriteria: {
      type: Array,
      required: false,
      default: /* istanbul ignore next */ () => [],
    },
    showMatchingCount: {
      type: Boolean,
      required: false,
      default: true,
    },
    showIcons: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      accordionInit: false,
      cid: _.uniqueId("c"),
      lifeEventCriteriaKeys: [],
    }
  },
  computed: {
    ...mapGetters({
      doesCriterionMatchSelection: "criteria/doesCriterionMatchSelection",
      getTotalEligibleCriteria: "criteria/getTotalEligibleCriteria",
      getActiveState: "criteria/getActiveState",
    }),
  },
  beforeCreate() {
    this.cid = _.uniqueId("c")
  },
  created() {
    this.lifeEventCriteriaKeys = _.chain(this.lifeEventCriteria)
      .map((c) => c.criteriaKeys)
      .flatten()
      .values()
  },
  updated() {
    /* istanbul ignore next */
    if (!this.accordionInit && this.lifeEventBenefits.length > 0) {
      this.toggleAccordion(this.expanded)
      this.accordionInit = true
    }
  },
  mounted() {
    if (this.lifeEventBenefits.length > 0) {
      this.toggleAccordion(this.expanded)
    }
  },
  methods: {
    closeAll() {
      this.toggleAccordion(false)
    },
    openAll() {
      this.toggleAccordion(true)
    },
    focus() {
      this.closeAll()
      this.$refs.accordion.$el.querySelector(".usa-accordion__button").focus()
    },
    getBorderColor(eligibilityCriteria) {
      if (eligibilityCriteria.some((c) => this.doesCriterionMatchSelection(c) === false)) {
        return "border-error-dark"
      } else if (this.getTotalEligibleCriteria(eligibilityCriteria) >= 1) {
        return "border-success-dark"
      }
      return "border-gray-30"
    },
    getCriteriaMatchLanguage(eligibilityCriteria) {
      if (eligibilityCriteria.some((c) => this.doesCriterionMatchSelection(c) === false)) {
        return "(" + this.$t("accordion.not_eligible") + ")"
      } else if (this.getTotalEligibleCriteria(eligibilityCriteria) >= 1) {
        return "(" + this.$t("accordion.eligible") + ")"
      } else if (this.getActiveState) {
        return "(" + this.$t("accordion.unknown") + ")"
      } else {
        return null
      }
    },
    toggleAccordion(expanded) {
      if (this.$refs.accordionButtons) {
        for (const button of this.$refs.accordionButtons) {
          /* istanbul ignore next */
          accordion?.toggle(button, expanded)
        }
      }
    },
    sanitizedBenefitUrl(benefit, defaultValue = "#") {
      return this.sanitizeUrl(benefit.source ? benefit.source.link : defaultValue)
    },
  },
}
</script>
<style lang="scss" scoped>
.usa-button {
  background-color: #00bde3;
  color: #000000;
}
.benefit-list-move {
  transition: transform 1s;
}
@media (prefers-reduced-motion) {
  .benefit-list-move, /* apply transition to moving elements */
  .benefit-list-enter-active,
  .benefit-list-leave-active {
    transition: all 0s ease;
  }
  .benefit-list-enter-from,
  .benefit-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
  .benefit-list-leave-active {
    position: absolute;
  }
}

.usa-accordion__button {
  background-color: transparent;
  border-right: 3px solid #ebe6de;
  border-top: 3px solid #ebe6de;
  border-bottom: 3px solid #ebe6de;
  color: #154285;
  filter: grayscale(50%);
  &:hover {
    color: #154285;
  }
}
.usa-accordion--bordered .usa-accordion__content {
  border-bottom-color: #ebe6de;
  border-left-color: #ebe6de;
  border-right-color: #ebe6de;
}

.usa-accordion__button[aria-expanded="false"] {
  background-image: url(../assets/img/blue-plus.svg), linear-gradient(transparent, transparent);
  background-size: 0.75rem;
}

.usa-accordion__button[aria-expanded="true"] {
  background-image: url(../assets/img/blue-minus.svg), linear-gradient(transparent, transparent);
  background-size: 0.75rem;
}

@media print {
  .usa-accordion--bordered .usa-accordion__content.usa-prose {
    display: block !important;
    line-height: 1.3;
    margin: 0;
    padding: 0 1 0 1;
  }

  h3,
  p,
  .usa-prose .eligibility-list-container,
  .usa-icon-list__item {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 1 0 1;
  }
}
</style>
