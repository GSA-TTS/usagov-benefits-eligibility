<template>
  <div
    class="eligibility-list-container border border-base-lighter border-width-2px radius-md margin-top-4">
    <h3 class="bg-base-lighter margin-0 padding-x-2 padding-y-1 font-sans-md">
      Key eligibility criteria (meets at least
      {{ getTotalEligibleCriteria(benefitEligibilityCriteria) }} of
      {{ benefitEligibilityCriteria.length }}).
    </h3>
    <client-only>
      <ul class="usa-icon-list padding-x-205 padding-top-205 padding-bottom-1">
        <li
          v-for="criterion in benefitEligibilityCriteria"
          :key="criterion.criteriaKey"
          class="usa-icon-list__item">
          <div
            :class="[
              'usa-icon-list__icon',
              {
                'text-success text-bold':
                  doesCriterionMatchSelection(criterion) === true
              },
              {
                'text-base-light':
                  doesCriterionMatchSelection(criterion) === null
              },
              {
                'text-secondary-vivid text-bold':
                  doesCriterionMatchSelection(criterion) === false
              }
            ]">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use
                v-if="doesCriterionMatchSelection(criterion) == true"
                xlink:href="~/assets/img/sprite.svg#check_circle"/>
              <use
                v-else-if="doesCriterionMatchSelection(criterion) == false"
                xlink:href="~/assets/img/sprite.svg#highlight_off"/>
              <use v-else xlink:href="~/assets/img/sprite.svg#help_outline" />
            </svg>
          </div>
          <div
            :class="[
              'usa-icon-list__content',
              {
                'text-success text-bold':
                  doesCriterionMatchSelection(criterion) === true
              },
              {
                'text-base-dark':
                  doesCriterionMatchSelection(criterion) === null
              },
              {
                'text-secondary-vivid text-bold':
                  doesCriterionMatchSelection(criterion) === false
              }
            ]">
            <span v-if="criterion.label">
              {{ criterion.label }}
            </span>
            <span v-else>
              {{ getCriterionByEligibilityKey(criterion.criteriaKey).label }}
            </span>
            <span
              v-if="
                getCriterionByEligibilityKey(criterion.criteriaKey).type ==
                  'select' && criterion.acceptableValues
              ">
              {{ formatArrayWithSeparator(criterion.acceptableValues) }}.
            </span>
          </div>
        </li>
      </ul>
    </client-only>
    <p
      class="text-white bg-base-darker font-sans-xs padding-x-2 padding-y-1 margin-bottom-0 radius-bottom-sm">
      <strong>Additional eligibility criteria may apply.</strong> Please review
      the full requirements at "How to apply."
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: {
    benefitEligibilityCriteria: {
      type: Array,
      required: false,
      default: /* istanbul ignore next */ () => {
        return [
          {
            criteriaKey: "error"
          }
        ];
      }
    }
  },
  data () {
    return {};
  },
  computed: {
    ...mapGetters({
      doesCriterionMatchSelection: "criteria/doesCriterionMatchSelection",
      getCriterionByEligibilityKey: "criteria/getCriterionByEligibilityKey",
      getTotalEligibleCriteria: "criteria/getTotalEligibleCriteria",
      isCriterionSelected: "criteria/isCriterionSelected"
    })
  },
  methods: {
    formatArrayWithSeparator (array = [], lastSeparator = "or") {
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
