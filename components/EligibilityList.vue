<template>
  <div
    class="eligibility-list-container border border-base-lighter border-width-2px radius-md margin-top-4"
  >
    <h3
      :class="
        ['margin-0', 'padding-x-2', 'padding-y-1', 'font-sans-md'].concat(
          headingClasses
        )
      "
    >
      Key eligibility criteria
      <span v-if="showMatchingCount" class="print:display-none">
        (You must meet all criteria. You currently meet
        {{ getTotalEligibleCriteria(benefitEligibilityCriteria) }} of
        {{ benefitEligibilityCriteria.length }}).
      </span>
    </h3>
    <client-only>
      <ul
        class="usa-icon-list grid-row padding-x-205 padding-top-205 padding-bottom-1"
      >
        <li
          v-for="(criterion, index) in benefitEligibilityCriteria"
          :key="criterion.criteriaKey"
          class="usa-icon-list__item grid-col-6 padding-bottom-2"
          style="padding-top: 0; padding-left: 1.25rem"
        >
          <div
            :class="[
              'usa-icon-list__icon',
              {
                'text-success text-bold':
                  doesCriterionMatchSelection(criterion) === true
              },
              {
                'text-base': doesCriterionMatchSelection(criterion) === null
              },
              {
                'text-secondary-vivid text-bold':
                  doesCriterionMatchSelection(criterion) === false
              }
            ]"
          >
            <div
              v-if="
                getCriterionByEligibilityKey(criterion.criteriaKey).type ===
                'boolean'
              "
              class="usa-checkbox"
            >
              <CheckBox
                :criteria-key="criterion.criteriaKey"
                :label="
                  getCriterionByEligibilityKey(criterion.criteriaKey).label
                "
                :response="doesCriterionMatchSelection(criterion)"
              />
            </div>

            <div
              v-if="
                getCriterionByEligibilityKey(criterion.criteriaKey).type ===
                'select'
              "
            >
              <DropDown
                :label="
                  getCriterionByEligibilityKey(criterion.criteriaKey).label
                "
                :criteria-key="criterion.criteriaKey"
                :values="criterion.acceptableValues"
                :response="getResponseByEligibilityKey(criterion.criteriaKey)"
                :criteria-index="index"
                location="benefitCard"
              />
            </div>

            <div
              v-if="
                getCriterionByEligibilityKey(criterion.criteriaKey).type ===
                'radio'
              "
            >
              <RadioButton
                :criteria-key="criterion.criteriaKey"
                :label="
                  getCriterionByEligibilityKey(criterion.criteriaKey).label
                "
                :values="criterion.acceptableValues"
                :response="getResponseByEligibilityKey(criterion.criteriaKey)"
                location="benefitCard"
              />
            </div>
          </div>
        </li>
      </ul>
    </client-only>
    <p
      class="text-white bg-base-darker print:text-black print:bg-white font-sans-xs padding-x-2 padding-y-1 margin-bottom-0 radius-bottom-sm"
    >
      <strong>Additional eligibility criteria may apply.</strong>
      Please review the full requirements at
      <span class="print:display-none">"How to apply."</span
      ><span class="display-none print:display-inline">{{
        benefitSource
      }}</span>
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import RadioButton from "./RadioButton.vue"
import DropDown from "./DropDown.vue"
import CheckBox from "./CheckBox.vue"

export default {
  components: { RadioButton, DropDown, CheckBox },
  props: {
    benefitEligibilityCriteria: {
      type: Array,
      required: false,
      default: /* istanbul ignore next */ () => {
        return [
          {
            criteriaKey: "error"
          }
        ]
      }
    },
    benefitSource: {
      type: String,
      required: false,
      default: ""
    },
    headingClasses: {
      type: Array,
      required: false,
      default: () => ["bg-base-lighter"]
    },
    showMatchingCount: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    ...mapGetters({
      doesCriterionMatchSelection: "criteria/doesCriterionMatchSelection",
      getCriterionByEligibilityKey: "criteria/getCriterionByEligibilityKey",
      getTotalEligibleCriteria: "criteria/getTotalEligibleCriteria",
      isCriterionSelected: "criteria/isCriterionSelected",
      getResponseByEligibilityKey: "criteria/getResponseByEligibilityKey"
    })
  },
  methods: {
    formatArrayWithSeparator(array = [], lastSeparator = "or") {
      return array
        .join(", ")
        .replace(/, ((?:.(?!, ))+)$/, ` ${lastSeparator} $1`)
    },
    updateEligibilityChecked(event, key) {
      const localCriterion = {
        criteriaKey: key,
        response: event.target.checked
      }
      this.$store.commit("criteria/updateResponse", localCriterion)
    },
    updateEligibilitySelected(event, key) {
      const localCriterion = {
        criteriaKey: key,
        response: event.target.value
      }
      this.$store.commit("criteria/updateResponse", localCriterion)
    },
    resetEligibilitySelected(key) {
      const localCriterion = {
        criteriaKey: key,
        response: "not applicable"
      }
      this.$store.commit("criteria/updateResponse", localCriterion)
    }
  }
}
</script>

<style scoped>
.usa-icon-list {
  max-width: none;
}
</style>
