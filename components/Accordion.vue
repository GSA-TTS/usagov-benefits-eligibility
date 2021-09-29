<template>
  <transition-group id="acc-id" class="usa-accordion usa-accordion--bordered" name="benefit-list"
    tag="div" aria-multiselectable="true" aria-live="polite">
      <div v-for="benefit in lifeEventBenefits" :key="`acc-key-${benefit.slug}`"
        class="break-inside-avoid margin-bottom-2">
        <h2 :id="`acc-h-${benefit.slug}-${cid}`" class="usa-accordion__heading">
          <button
            ref="accordionButtons"
            class="usa-accordion__button"
            aria-expanded="false"
            :aria-controls="`acc-content-${benefit.slug}`">
            {{ benefit.title }}
            <span class="text-normal">
              {{ getCriteriaMatchLanguage(benefit.eligibility) }}
            </span>
          </button>
        </h2>
        <div :id="`acc-content-${benefit.slug}`" ref="accordionContents"
          class="usa-accordion__content usa-prose">
          <div
            v-if="benefit && benefit.tags.length > 0"
            class="tags-container margin-top-1">
            <Tag v-for="tag in mapTags(benefit.tags)" :key="tag.name" :name="tag.name"
              :click="tagClick"
              :title="tag.title"
              :aria-label="tag.title"/>
          </div>
          <template v-if="benefit.source && benefit.source.name && benefit.source.link">
            <h3
              class="font-sans-xs text-normal text-base-dark margin-bottom-0"
              style="font-size: 1rem;">
              Provided by
              <a
                class="usa-link"
                :href="benefit.source ? benefit.source.link : '#'"
                target="_blank">{{ benefit.source.name }}</a>
            </h3>
            <p class="usa-prose" style="max-width: unset;">
              {{ benefit.summary }}
            </p>
          </template>
          <EligibilityList
              :benefit-eligibility-criteria="benefit.eligibility"
              :benefit-source="benefit.source ? benefit.source.link : ''"
              :heading-classes="['bg-primary', 'text-white']"
              :show-icons="showIcons"
              :show-matching-count="showMatchingCount"/>
          <ul v-if="benefit.source && benefit.source.link" class="usa-button-group" style="padding-left: 0;"
            :aria-label="`Choices for ${benefit.title}`">
            <li class="usa-button-group__item">
                <a :href="benefit.source.link" target="_blank"
                  :aria-label="`How to apply for ${ benefit.title }`"
                  class="usa-button print:display-none">
                  How to Apply
                </a>
            </li>
          </ul>
        </div>
      </div>
  </transition-group>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
import mapTags from "~/mixins/MapTags";

let USWDS;
let accordion;
/* istanbul ignore if */
if (process.client) {
  USWDS = require("../node_modules/uswds/src/js/components");
  accordion = USWDS.accordion;
}

export default {
  mixins: [mapTags],
  props: {
    expanded: {
      type: Boolean,
      requierd: false,
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
    tagClick: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data () {
    return {
      accordionInit: false,
      cid: _.uniqueId('c'),
      lifeEventCriteriaKeys: [],
    };
  },
  computed: {
  ...mapGetters({
    doesCriterionMatchSelection: "criteria/doesCriterionMatchSelection",
    getTotalEligibleCriteria: "criteria/getTotalEligibleCriteria",
  }),
  },
  beforeCreate () {
    this.cid = _.uniqueId('c');
  },
  created () {
    this.lifeEventCriteriaKeys = _.chain(this.lifeEventCriteria)
      .map(c => c.criteriaKeys)
      .flatten()
      .values();
  },
  updated () {
    /* istanbul ignore next */
    if (!this.accordionInit && this.lifeEventBenefits.length > 0) {
      this.toggleAccordion(this.expanded);
      this.accordionInit = true;
    }
  },
  mounted () {
    if (this.lifeEventBenefits.length > 0) {
      this.toggleAccordion(this.expanded);
    }
  },
  methods: {
    closeAll () {
      this.toggleAccordion(false);
    },
    openAll () {
      this.toggleAccordion(true);
    },
    getCriteriaMatchLanguage (eligibilityCriteria) {
      if (eligibilityCriteria.some(c => this.doesCriterionMatchSelection(c) === false)) {
        return '(you are not eligible)';
      } else if (this.getTotalEligibleCriteria(eligibilityCriteria) >= 1) {
        return '(you might be eligible)';
      }
      return '';
    },
    toggleAccordion (expanded) {
      for (const button of this.$refs.accordionButtons) {
        /* istanbul ignore next */
        accordion?.toggle(button, expanded);
      }
    },
  },
}
</script>

<style scoped>
.benefit-list-move {
  transition: transform 2s;
}
</style>
