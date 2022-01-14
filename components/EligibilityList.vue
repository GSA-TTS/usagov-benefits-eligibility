<template>
  <div
    class="eligibility-list-container border border-base-lighter border-width-2px radius-md margin-top-4">
    <h3 :class="['margin-0', 'padding-x-2', 'padding-y-1', 'font-sans-md'].concat(headingClasses)">
      Key eligibility criteria
        <span v-if="showMatchingCount" class="print:display-none">
          (You must meet all criteria. You currently meet
          {{ getTotalEligibleCriteria(benefitEligibilityCriteria) }} of
          {{ benefitEligibilityCriteria.length }}).
        </span>
    </h3>
    <client-only>
      <ul class="usa-icon-list grid-row padding-x-205 padding-top-205 padding-bottom-1">
        <li
          v-for="criterion in benefitEligibilityCriteria"
          :key="criterion.criteriaKey"
          class="usa-icon-list__item grid-col-6 padding-bottom-2"
          style="padding-top: 0; padding-left: 1.25rem;">
          <div
            :class="[
              'usa-icon-list__icon',
              'print:display-none',
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
            <div v-if="getCriterionByEligibilityKey(criterion.criteriaKey).type ===
                      'boolean'" class="usa-checkbox">
                <input
                  :id="criterion.criteriaKey"
                  class="usa-checkbox__input"
                  type="checkbox"
                  :name="criterion.criteriaKey"
                  :value="criterion.criteriaKey"
                  :checked="doesCriterionMatchSelection(criterion) == true"
                  @change="updateEligibilityChecked($event, criterion.criteriaKey)"/>
                <label class="usa-checkbox__label" :for="criterion.criteriaKey">
                  <template v-if="criterion.label">
                    {{ criterion.label }}
                  </template>
                  <template v-else>
                    {{ getCriterionByEligibilityKey(criterion.criteriaKey).label }}
                  </template>
                  <template
                  v-if="
                    getCriterionByEligibilityKey(criterion.criteriaKey).type ===
                      'select' && criterion.acceptableValues
                  ">
                    {{ formatArrayWithSeparator(criterion.acceptableValues) }}.
                  </template>
                </label>
            </div>
            <div v-else-if="getCriterionByEligibilityKey(criterion.criteriaKey).type ===
                      'select'" class="usa-checkbox">
                <input
                  :id="criterion.criteriaKey"
                  class="usa-checkbox__input"
                  type="checkbox"
                  :name="criterion.criteriaKey"
                  :value="criterion.criteriaKey"
                  :checked="doesCriterionMatchSelection(criterion) == true"
                  @change="updateEligibilitySelected(criterion.criteriaKey, criterion.acceptableValues)"/>
                <label class="usa-checkbox__label" :for="criterion.criteriaKey">
                  <template v-if="criterion.label">
                    {{ criterion.label }}
                  </template>
                  <template v-else>
                    {{ getCriterionByEligibilityKey(criterion.criteriaKey).label }}
                  </template>
                  <template
                  v-if="
                    getCriterionByEligibilityKey(criterion.criteriaKey).type ===
                      'select' && criterion.acceptableValues
                  ">
                    {{ formatArrayWithSeparator(criterion.acceptableValues) }}.
                  </template>
                </label>
            </div>
          </div>
        </li>
      </ul>
    </client-only>
    <p
      class="text-white bg-base-darker print:text-black print:bg-white font-sans-xs padding-x-2 padding-y-1 margin-bottom-0 radius-bottom-sm">
      <strong>Additional eligibility criteria may apply.</strong>
      Please review the full requirements at <span class="print:display-none">"How to apply."</span><span class="display-none print:display-inline">{{ benefitSource }}</span>
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
    },
    benefitSource: {
      type: String,
      required: false,
      default: '',
    },
    headingClasses: {
      type: Array,
      required: false,
      default: () => ['bg-base-lighter'],
    },
    showMatchingCount: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  data () {
    return {
      isChecked: false
    };
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
    },
     updateEligibilityChecked (event, key) {
      const localCriterion = {
        criteriaKey: key,
        response: event.target.checked
      };
      this.$store.commit('criteria/updateResponse', localCriterion);
    },
     updateEligibilitySelected (key, acceptableValues) {
      const localCriterion = {
        criteriaKey: key,
        response: acceptableValues[0]
      };
      this.$store.commit('criteria/updateResponse', localCriterion);
    },
    showStuff (key) {
      console.log(this.getCriterionByEligibilityKey(key))
    }
  }
};
</script>

<style scoped>
.usa-icon-list {
  max-width: none;
}
</style>
