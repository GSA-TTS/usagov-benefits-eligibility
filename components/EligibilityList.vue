<template>
  <div class="eligibility-list-container border border-base-lighter border-width-2px radius-md margin-top-4">
    <h3 class="bg-base-lighter margin-0 padding-x-2 padding-y-1 font-sans-md">
Key eligibility criteria (meets at least {{ totalEligibleCriteria }} of {{ benefitEligibilityCriteria.length }}).
</h3>
    <ul class="usa-icon-list padding-x-205 padding-top-205 padding-bottom-1">
      <li v-for="criterion in benefitEligibilityCriteria" :key="criterion.criteriaKey" class="usa-icon-list__item">
        <div :class="[
          'usa-icon-list__icon',
          { 'text-success text-bold': isCriterionSelected(criterion) },
          { 'text-base-light': !isCriterionSelected(criterion) },
        ]">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use v-if="isCriterionSelected(criterion)" xlink:href="~/assets/img/sprite.svg#check_circle"/>
            <use v-else xlink:href="~/assets/img/sprite.svg#help_outline"/>
          </svg>
        </div>
        <div :class="['usa-icon-list__content',
          { 'text-success text-bold': isCriterionSelected(criterion) },
          { 'text-base-dark': !isCriterionSelected(criterion) }]">
          <span v-if="criterion.label">
           {{ criterion.label }}
          </span>
          <span v-else>
            {{ getCriterionByEligibilityKey(criterion.criteriaKey).label }}
          </span>
          <span v-if="getCriterionByEligibilityKey(criterion.criteriaKey).type=='select'">
            is {{ formatArrayWithSeparator(criterion.values) }}.
          </span>
        </div>
      </li>
    </ul>
    <p class="text-white bg-base-darker font-sans-xs padding-x-2 padding-y-1 margin-bottom-0 radius-bottom-sm"><strong>Estimate only.</strong> Please review the full requirements at "How to apply."</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    benefitEligibilityCriteria: {
          type: Array,
          required: false,
          default: () => {
            return [
              {
                criteriaKey: "error",
              }
            ];
          }
        }
  },
  data () {
    return {};
  },
  computed: {
    totalEligibleCriteria () {
      if (this.benefitEligibilityCriteria && this.benefitEligibilityCriteria.length < 1) {
        return "X"
      } else {
        const matchingCriteria = this.benefitEligibilityCriteria.filter(criterion => this.isCriterionSelected(criterion));
        return matchingCriteria.length;
      }
    },
    ...mapGetters({
      getCriterionByEligibilityKey: 'criteria/getCriterionByEligibilityKey',
    })
  },
  methods: {
    isCriterionSelected (criterion) {
      return !!this.getCriterionByEligibilityKey(criterion.criteriaKey).response
    },
    formatArrayWithSeparator (array, lastSeparator = 'or') {
      return array
        .join(", ")
        .replace(/, ((?:.(?!, ))+)$/, ` ${lastSeparator} $1`);
    }
  }
};
</script>
<style scoped>
.usa-icon-list {
  max-width: none;
}
</style>
